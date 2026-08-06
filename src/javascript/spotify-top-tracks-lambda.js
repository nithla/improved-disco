/**
 * Deploy this as its own Lambda, wired to a GET route (e.g. /top-tracks) on the
 * existing API Gateway. Needs three env vars: SPOTIFY_CLIENT_ID,
 * SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN (see setup notes for how to get
 * the refresh token — it's a one-time manual OAuth step).
 *
 * Spotify's API has no literal "this week" range; short_term is the closest
 * built-in option (~last 4 weeks of listening).
 */
exports.handler = async () => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
    };

    try {
        const tokenRes = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: 'Basic ' + Buffer.from(
                    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
                ).toString('base64'),
            },
            body: new URLSearchParams({
                grant_type: 'refresh_token',
                refresh_token: process.env.SPOTIFY_REFRESH_TOKEN,
            }),
        });

        if (!tokenRes.ok) {
            throw new Error(`Token refresh failed: ${tokenRes.status}`);
        }

        const { access_token } = await tokenRes.json();

        const topRes = await fetch(
            'https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=5',
            { headers: { Authorization: `Bearer ${access_token}` } }
        );

        if (!topRes.ok) {
            throw new Error(`Top tracks request failed: ${topRes.status}`);
        }

        const { items } = await topRes.json();

        const tracks = items.map((track) => ({
            name: track.name,
            artist: track.artists.map((artist) => artist.name).join(', '),
            albumArt: track.album.images[1]?.url || track.album.images[0]?.url,
            url: track.external_urls.spotify,
        }));

        return { statusCode: 200, headers, body: JSON.stringify({ tracks }) };
    } catch (error) {
        return { statusCode: 500, headers, body: JSON.stringify({ error: error.message }) };
    }
};
