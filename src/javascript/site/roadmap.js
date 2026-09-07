/* The five numbered stops on the Skills ("Work") roadmap. Each marker is a
   button that opens the shared overlay (#roadmapOverlay) with that phase's
   detail — the overlay is styled to sit inside the section, inset by the
   standard section padding. Mirrors the pearl-dialog pattern in pearl.js:
   a non-modal <dialog> shown with .show(), closed on the X, Esc, or an
   outside click. */

const ROADMAP = {
    1: {
        title: 'The product bet',
        points: [
            'Align product vision with business & market goals',
            'Develop user-centric, scalable solutions',
            'Lead cross-functional teams',
        ],
        skills: [
            'Product management',
            'Roadmap planning',
            'Go-to-market strategy',
            'Stakeholder management',
            'Cross-functional collaboration',
            'Conflict resolution',
        ],
    },
    2: {
        title: 'Mise en Place',
        points: [
            'Agile Scrum + JIRA',
        ],
        skills: [
            'Agile Scrum',
            'Jira & Confluence',
            'Sprint planning & execution',
            'User story creation, mapping & refinement',
        ],
    },
    3: {
        title: 'The build',
        points: [
            'UI/UX experience',
            'Business intelligence tools',
        ],
        skills: [
            'Figma, Adobe XD, InVision',
            'Frontend developer expertise',
        ],
    },
    4: {
        title: 'Delivery & rigor',
        points: [
            'Fast, iterative releases',
            'Data-driven decision making',
        ],
        skills: [
            'Root cause analysis',
            'Risk management',
            'Quality assurance',
            'Continuous & iterative improvement',
            'Feature prioritization & backlog management',
        ],
    },
    5: {
        title: 'The part that pays off',
        points: [
            'Increased user engagement & retention',
        ],
        skills: [
            'Analytics & KPIs, SQL',
            'Reports + dashboards: PowerBI, Tableau',
            'Customer research',
        ],
    },
};

const overlay = document.getElementById('roadmapOverlay');
const overlayBody = overlay?.querySelector('.skills__roadmap-overlay-body');
const overlayClose = overlay?.querySelector('.skills__roadmap-overlay-close');
const markers = Array.from(document.querySelectorAll('.skills__roadmap-marker'));

/* the travelling "you are here" pin — parks on stop 1, then follows whichever
   stop the reader opens; a little payoff once it reaches the last stop */
const hereTag = document.querySelector('.skills__roadmap-here');
const HERE_LABEL = 'You are here';
const HERE_LABEL_END = 'Woo hoo!';
let currentPhase = 1;

function moveHere(phase) {
    const item = markers[Number(phase) - 1]?.closest('.skills__roadmap-item');

    if (!hereTag || !item) {
        return;
    }

    hereTag.textContent = Number(phase) === markers.length ? HERE_LABEL_END : HERE_LABEL;
    hereTag.style.top = `${item.offsetTop}px`;
    hereTag.style.left = `${item.offsetLeft}px`;
}

function list(className, items) {
    return items.length
        ? `<ul class="${className}">${items.map((item) => `<li>${item}</li>`).join('')}</ul>`
        : '';
}

function renderPhase(phase) {
    const data = ROADMAP[phase];

    if (!data) {
        return;
    }

    overlayBody.innerHTML = `
        <p class="skills__roadmap-overlay-step">Phase ${phase} of ${markers.length}</p>
        <p class="skills__card-title">${data.title}</p>
        ${list('skills__card-points', data.points)}
        ${list('skills__card-skills', data.skills)}
    `;

    overlay.scrollTop = 0;
}

function openPhase(phase) {
    renderPhase(phase);

    currentPhase = Number(phase);
    moveHere(currentPhase);

    markers.forEach((marker) => {
        marker.classList.toggle('skills__roadmap-marker--active', marker.dataset.phase === String(phase));
    });

    if (!overlay.open) {
        overlay.show();
    }
}

function closeOverlay() {
    if (overlay.open) {
        overlay.close();
    }

    markers.forEach((marker) => marker.classList.remove('skills__roadmap-marker--active'));
}

if (overlay && overlayBody && markers.length) {
    /* park the pin on stop 1, then let it transition on later moves */
    moveHere(currentPhase);
    requestAnimationFrame(() => hereTag?.classList.add('skills__roadmap-here--travelling'));
    window.addEventListener('resize', () => moveHere(currentPhase));

    markers.forEach((marker) => {
        marker.addEventListener('click', () => openPhase(marker.dataset.phase));
    });

    overlayClose?.addEventListener('click', closeOverlay);

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && overlay.open) {
            closeOverlay();
        }
    });

    document.addEventListener('click', (event) => {
        if (!overlay.open || overlay.contains(event.target) || event.target.closest('.skills__roadmap-marker')) {
            return;
        }

        closeOverlay();
    });
}
