/* Site-wide scroll damping. Runs every wheel scroll at SLOW speed, so the page
   moves at a more deliberate pace and one flick no longer carries from the top
   of the site to the bottom — the long pinned Projects reel in particular gets
   read a card at a time rather than blurred past.

   Vertical wheel only. Horizontal scroll (the Fun carousel, the small-screen
   Projects strip), keyboard, the scrollbar and in-page anchor links are all
   left alone, as is anything scrolling inside an open overlay. Disabled for
   prefers-reduced-motion. */

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

const SLOW = 0.4;         /* wheel-delta multiplier — lower is slower */
const GESTURE_GAP = 200;  /* ms of wheel silence that resets the sub-pixel carry */

let lastWheel = 0;
let residual = 0;         /* sub-pixel carry, so slow scrolling still moves */

function pixels(event) {
    if (event.deltaMode === 1) {
        return event.deltaY * 16;                    /* lines */
    }

    if (event.deltaMode === 2) {
        return event.deltaY * window.innerHeight;    /* pages */
    }

    return event.deltaY;                            /* already pixels */
}

window.addEventListener('wheel', (event) => {
    if (reduced.matches || event.ctrlKey) {
        return; /* ctrlKey: pinch-zoom, not a scroll */
    }

    /* primarily-horizontal wheel — leave it to whatever it's scrolling */
    if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) {
        return;
    }

    /* a scroll happening inside an open overlay stays with the overlay */
    if (event.target instanceof Element && event.target.closest('dialog[open]')) {
        return;
    }

    const now = performance.now();

    if (now - lastWheel > GESTURE_GAP) {
        residual = 0;
    }

    lastWheel = now;

    event.preventDefault();

    residual += pixels(event) * SLOW;

    const step = Math.trunc(residual);
    residual -= step;

    if (step !== 0) {
        window.scrollBy({ top: step, left: 0, behavior: 'instant' });
    }
}, { passive: false });
