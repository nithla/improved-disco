const pearlButton = document.querySelector('.skills__pearl');
const pearlDialog = document.getElementById('pearlDialog');
const portraitImg = document.querySelector('.skills__portrait-img');

/* Where the pearl earring sits within 1665-girl-with-a-pearl-earring-vermeer-cutout.png, as a fraction of the
   image's own width/height. Measured directly against the cropped image, so
   this stays correct regardless of how big the portrait is styled to be. */
const PEARL_REL_X = 0.49;
const PEARL_REL_Y = 0.488;

function positionPearlButton() {
    const anchor = pearlButton.closest('.skills__portrait');

    if (!anchor) {
        return;
    }

    const imgRect = portraitImg.getBoundingClientRect();

    if (!imgRect.width || !imgRect.height) {
        return;
    }

    const anchorRect = anchor.getBoundingClientRect();
    const size = pearlButton.offsetWidth;

    pearlButton.style.top = `${imgRect.top - anchorRect.top + PEARL_REL_Y * imgRect.height - size / 2}px`;
    pearlButton.style.left = `${imgRect.left - anchorRect.left + PEARL_REL_X * imgRect.width - size / 2}px`;
}

function positionPearlDialog() {
    const anchor = pearlButton.closest('.skills__portrait');
    const buttonRect = pearlButton.getBoundingClientRect();
    const anchorRect = anchor.getBoundingClientRect();

    pearlDialog.style.top = `${buttonRect.bottom - anchorRect.top + 8}px`;
    pearlDialog.style.right = 'auto';
    pearlDialog.style.left = `${buttonRect.left - anchorRect.left}px`;
}

if (pearlButton && pearlDialog && portraitImg) {
    positionPearlButton();
    portraitImg.addEventListener('load', positionPearlButton);
    window.addEventListener('resize', positionPearlButton);

    pearlButton.addEventListener('click', () => {
        positionPearlDialog();
        pearlDialog.show();
    });

    document.addEventListener('click', (event) => {
        if (!pearlDialog.open || event.target === pearlButton || pearlDialog.contains(event.target)) {
            return;
        }

        pearlDialog.close();
    });
}
