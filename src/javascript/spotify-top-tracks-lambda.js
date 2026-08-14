/**
 * Triggered on a daily EventBridge schedule (not per page load). Refreshes an
 * access token, pulls the current top tracks, and overwrites the contents of
 * a dedicated playlist with them — the site just embeds that playlist via
 * Spotify's iframe embed, so it always shows whatever this last wrote.
 *
 * Needs four env vars: SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET,
 * SPOTIFY_REFRESH_TOKEN (must include playlist-modify-public and/or
 * playlist-modify-private scope, not just user-top-read), and
 * SPOTIFY_PLAYLIST_ID (the playlist to overwrite).
 *
 * Spotify's API has no literal "this week" range; short_term is the closest
 * built-in option (~last 4 weeks of listening).
 */
export const handler = async () => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
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
            'https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=20',
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
            uri: track.uri,
        }));

        const playlistRes = await fetch(
            `https://api.spotify.com/v1/playlists/${process.env.SPOTIFY_PLAYLIST_ID}/items`,
            {
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${access_token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ uris: tracks.map((track) => track.uri) }),
            }
        );

        if (!playlistRes.ok) {
            throw new Error(`Playlist update failed: ${playlistRes.status}`);
        }

        return { statusCode: 200, headers, body: JSON.stringify({ tracks }) };
    } catch (error) {
        return { statusCode: 500, headers, body: JSON.stringify({ error: error.message }) };
    }
};
