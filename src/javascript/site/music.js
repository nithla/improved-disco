/* Background music: Tchaikovsky's Nutcracker "Pas de Deux", played through a hidden
   YouTube embed (audio only) rather than a downloaded file, so playback stays on
   YouTube's own player. No player exists until the visitor's first real gesture —
   it's created right then, already unmuted, inside that gesture's own handler.
   Starting an iframe muted (or calling unMute() on one afterward) is what Chrome's
   autoplay policy blocks for postMessage-driven cross-origin iframes; a player
   CREATED unmuted within the gesture is what's actually granted audio. From then on
   the same instance is just toggled with mute()/unMute() on the toggle button's own
   clicks — no destroy()/recreate, since the IFrame API doesn't fully clean up a
   destroyed player's internal timers and leaves it firing stray postMessage calls
   at its now-detached iframe. 'scroll' doesn't count as a user gesture at all, so
   it's deliberately not one of the reveal triggers below. */
const MUSIC_VIDEO_ID = 'o_brMBTnFyM';
const MUSIC_START_SECONDS = 12;
const MUSIC_END_SECONDS = 319; // 5:18

const musicToggle = document.getElementById('musicToggle');
const musicWrapper = document.getElementById('bgMusicPlayer');

if (musicToggle && musicWrapper) {
    let player = null;
    let unmuted = false;
    let apiReady = false;
    let pendingReveal = false;

    function setUnmuted(isUnmuted) {
        unmuted = isUnmuted;
        musicToggle.classList.toggle('main__music-toggle--playing', unmuted);
        musicToggle.setAttribute('aria-pressed', String(unmuted));
        musicToggle.setAttribute('aria-label', unmuted ? 'Mute background music' : 'Unmute background music');
    }

    function createPlayer() {
        return new YT.Player(musicWrapper.id, {
            width: '1',
            height: '1',
            videoId: MUSIC_VIDEO_ID,
            playerVars: {
                autoplay: 1,
                mute: 0,
                start: MUSIC_START_SECONDS,
                end: MUSIC_END_SECONDS,
                controls: 0,
                disablekb: 1,
                fs: 0,
                iv_load_policy: 3,
                modestbranding: 1,
                playsinline: 1,
                rel: 0,
            },
            events: {
                onReady(event) {
                    event.target.playVideo();
                },
                onStateChange(event) {
                    if (event.data === YT.PlayerState.ENDED) {
                        event.target.seekTo(MUSIC_START_SECONDS);
                        event.target.playVideo();
                    }
                },
            },
        });
    }

    function revealSound() {
        if (unmuted) {
            return;
        }

        if (player) {
            player.unMute();
            setUnmuted(true);
            return;
        }

        if (!apiReady) {
            /* Rare: the IFrame API script hasn't finished loading yet. We can't
               hold onto this gesture across that async gap, so onYouTubeIframeAPIReady
               will create the player once it can, just without the activation to
               start it unmuted. */
            pendingReveal = true;
            return;
        }

        player = createPlayer();
        setUnmuted(true);
    }

    function handleFirstInteraction() {
        document.removeEventListener('click', handleFirstInteraction);
        document.removeEventListener('keydown', handleFirstInteraction);
        document.removeEventListener('touchstart', handleFirstInteraction);
        revealSound();
    }

    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('keydown', handleFirstInteraction);
    document.addEventListener('touchstart', handleFirstInteraction);

    musicToggle.addEventListener('click', () => {
        if (unmuted && player) {
            player.mute();
            setUnmuted(false);
            return;
        }
        revealSound();
    });

    /* spotify.js dispatches this whenever the Spotify embed starts playing, so the
       two don't talk over each other. */
    window.addEventListener('spotify:playing', () => {
        if (unmuted && player) {
            player.mute();
            setUnmuted(false);
        }
    });

    window.onYouTubeIframeAPIReady = function () {
        apiReady = true;

        if (pendingReveal) {
            player = createPlayer();
            setUnmuted(true);
        }
    };

    const apiScript = document.createElement('script');
    apiScript.src = 'https://www.youtube.com/iframe_api';
    document.head.appendChild(apiScript);
}
