/**
 * Deploy this as its own Lambda (Node.js 18.x or later — needs the built-in
 * global `fetch`, so no dependencies, no zip upload, paste straight into
 * the console's inline code editor), wired to a GET route on an API
 * Gateway HTTP API. The frontend calls that route directly on every page
 * load.
 *
 * Data source: your Letterboxd RSS feed
 * (https://letterboxd.com/<username>/rss/). This is fetched directly, with
 * no third-party account/API key of any kind — unlike Letterboxd's regular
 * pages (which return a Cloudflare bot challenge to any non-browser
 * request), the RSS feed is meant for feed readers and is openly
 * fetchable. The Lambda exists only because the feed has no CORS headers,
 * so a browser can't `fetch()` it directly.
 *
 * Tradeoff: RSS only exposes your ~50 most recent diary entries (logged/
 * rewatched films), not your whole all-time catalog. So this shows your
 * highest-rated films among what you've recently logged, not a true
 * all-time "top rated" list — there's no no-signup way to reach the latter,
 * since that page is one of the ones Cloudflare blocks.
 *
 * Needs one env var: LETTERBOXD_USERNAME.
 * Optional: MOVIE_COUNT (default 8).
 */
function decodeEntities(text) {
    return text
        .replace(/&amp;/g, '&')
        .replace(/&#0?39;/g, '\'')
        .replace(/&quot;/g, '"')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>');
}

function parseMovies(xml, limit) {
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    const movies = [];
    let itemMatch;

    while ((itemMatch = itemRegex.exec(xml)) !== null) {
        const block = itemMatch[1];

        const titleMatch = block.match(/<letterboxd:filmTitle>([\s\S]*?)<\/letterboxd:filmTitle>/);
        const yearMatch = block.match(/<letterboxd:filmYear>([\s\S]*?)<\/letterboxd:filmYear>/);
        const ratingMatch = block.match(/<letterboxd:memberRating>([\s\S]*?)<\/letterboxd:memberRating>/);
        const linkMatch = block.match(/<link>([\s\S]*?)<\/link>/);
        const posterMatch = block.match(/<img src="([^"]+)"/);

        if (!titleMatch || !linkMatch || !ratingMatch) {
            continue;
        }

        const title = decodeEntities(titleMatch[1]);

        movies.push({
            title: yearMatch ? `${title} (${yearMatch[1]})` : title,
            url: linkMatch[1],
            poster: posterMatch ? posterMatch[1] : null,
            rating: Number(ratingMatch[1]),
        });
    }

    const seen = new Set();
    const deduped = movies.filter((movie) => {
        if (seen.has(movie.title)) {
            return false;
        }
        seen.add(movie.title);
        return true;
    });

    deduped.sort((a, b) => b.rating - a.rating);

    return deduped.slice(0, limit);
}

export const handler = async () => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Content-Type': 'application/json',
    };

    try {
        const username = process.env.LETTERBOXD_USERNAME;
        const limit = Number(process.env.MOVIE_COUNT || 8);

        const res = await fetch(`https://letterboxd.com/${username}/rss/`);
        if (!res.ok) {
            throw new Error(`RSS request failed: ${res.status}`);
        }

        const xml = await res.text();
        const movies = parseMovies(xml, limit);

        return { statusCode: 200, headers, body: JSON.stringify({ movies }) };
    } catch (error) {
        return { statusCode: 500, headers, body: JSON.stringify({ error: error.message }) };
    }
};
