/**
 * Deploy this as its own Lambda, wired to a GET route (e.g. /top-movies) on the
 * existing API Gateway. Needs one env var: LETTERBOXD_USERNAME.
 *
 * Letterboxd has no public API, so this scrapes the public profile page's
 * Favorites section server-side (avoids the CORS block a browser fetch would
 * hit). Letterboxd's Favorites UI caps out at 4 films, not 5, and this regex
 * parse is tied to today's markup — if Letterboxd changes their page structure
 * this will start returning an empty list and needs re-checking against the
 * live HTML (view-source on your profile, find the favourites section, adjust
 * the regex below to match).
 */
exports.handler = async () => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
    };

    try {
        const username = process.env.LETTERBOXD_USERNAME;
        const res = await fetch(`https://letterboxd.com/${username}/`, {
            headers: { 'User-Agent': 'Mozilla/5.0 (compatible; portfolio-site-bot/1.0)' },
        });

        if (!res.ok) {
            throw new Error(`Letterboxd profile request failed: ${res.status}`);
        }

        const html = await res.text();

        const sectionMatch = html.match(/<section[^>]*id="favourites"[\s\S]*?<\/section>/);
        const section = sectionMatch ? sectionMatch[0] : '';

        const filmRegex = /data-film-slug="([^"]+)"[^>]*data-film-name="([^"]+)"[\s\S]*?<img[^>]*src="([^"]+)"/g;
        const movies = [];
        let match;
        while ((match = filmRegex.exec(section)) !== null) {
            const [, slug, title, poster] = match;
            movies.push({ title, poster, url: `https://letterboxd.com/film/${slug}/` });
        }

        return { statusCode: 200, headers, body: JSON.stringify({ movies }) };
    } catch (error) {
        return { statusCode: 500, headers, body: JSON.stringify({ error: error.message }) };
    }
};
