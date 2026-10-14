const loader = document.querySelector('.loader');

/* Fade the loader out once everything (paintings, fonts, logos) has arrived,
   then drop it from the DOM so it can't block clicks or screen readers. */
function hideLoader() {
    loader.classList.add('loader--hidden');
    loader.addEventListener('transitionend', () => loader.remove(), { once: true });

    /* With reduced motion there's no transition, so transitionend never fires. */
    if (getComputedStyle(loader).transitionDuration === '0s') {
        loader.remove();
    }
}

if (document.readyState === 'complete') {
    hideLoader();
} else {
    window.addEventListener('load', hideLoader, { once: true });
}
