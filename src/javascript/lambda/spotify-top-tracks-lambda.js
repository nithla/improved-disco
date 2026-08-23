/**
 * Triggered on an EventBridge schedule (not per page load). Refreshes an
 * access token, pulls the most recently played tracks, and overwrites the
 * contents of a dedicated playlist with the most recent unique ones — the
 * site just embeds that playlist via Spotify's iframe embed, so it always
 * shows whatever this last wrote.
 *
 * Switched from /me/top/tracks to /me/player/recently-played: Spotify's
 * top-tracks algorithm was attributing plays to a different-but-related
 * catalog track than the one actually played (a different orchestra's
 * recording of the same piece, a different-language pressing of the same
 * song, etc. — confirmed against multiple tracks). recently-played reports
 * the literal track ID that was streamed, with no algorithmic layer in
 * between, so it doesn't have that failure mode.
 *
 * Tradeoff: recently-played only returns the last 50 play events, not a
 * rolling multi-week history, so this becomes "most recently played
 * (deduped)" rather than "top by frequency over ~4 weeks." For a listener
 * who plays more than 50 tracks between runs, anything before those last 50
 * plays isn't seen — the EventBridge schedule needs to run often enough
 * that 50 plays comfortably covers the gap between runs, or older plays
 * that day fall off before this ever sees them.
 *
 * Needs five env vars: SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET,
 * SPOTIFY_REFRESH_TOKEN (must include user-read-recently-played scope now,
 * in addition to playlist-modify-public and/or playlist-modify-private —
 * if the existing refresh token was issued without user-read-recently-played,
 * it has to be reissued through the Spotify auth flow with that scope added
 * before this will work), and SPOTIFY_PLAYLIST_ID (the playlist to overwrite).
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

        const recentRes = await fetch(
            'https://api.spotify.com/v1/me/player/recently-played?limit=50',
            { headers: { Authorization: `Bearer ${access_token}` } }
        );

        if (!recentRes.ok) {
            throw new Error(`Recently played request failed: ${recentRes.status}`);
        }

        const { items } = await recentRes.json();

        const seenUris = new Set();
        const tracks = [];

        for (const { track } of items) {
            if (seenUris.has(track.uri)) {
                continue;
            }

            seenUris.add(track.uri);
            tracks.push({
                name: track.name,
                artist: track.artists.map((artist) => artist.name).join(', '),
                albumArt: track.album.images[1]?.url || track.album.images[0]?.url,
                url: track.external_urls.spotify,
                uri: track.uri,
            });

            if (tracks.length === 20) {
                break;
            }
        }

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
