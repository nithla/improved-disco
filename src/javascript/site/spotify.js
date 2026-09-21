/* Loads the Spotify playlist through the official Embed iFrame API (instead of a
   plain <iframe src>) so playback state is observable - that's what lets the
   background music (music.js) mute itself whenever this is playing. */
const SPOTIFY_PLAYLIST_URI = 'spotify:playlist:6A9MEzxuJ9D0qvNJPmQHZv';

const spotifyEmbed = document.getElementById('spotifyEmbed');

if (spotifyEmbed) {
    window.onSpotifyIframeApiReady = (IFrameAPI) => {
        IFrameAPI.createController(spotifyEmbed, {
            uri: SPOTIFY_PLAYLIST_URI,
            width: '100%',
            theme: 'dark',
        }, (EmbedController) => {
            let wasPlaying = false;

            EmbedController.addListener('playback_update', (event) => {
                const isPlaying = !event.data.isPaused;

                if (isPlaying && !wasPlaying) {
                    window.dispatchEvent(new CustomEvent('spotify:playing'));
                }

                wasPlaying = isPlaying;
            });
        });
    };

    const apiScript = document.createElement('script');
    apiScript.src = 'https://open.spotify.com/embed/iframe-api/v1';
    document.head.appendChild(apiScript);
}
