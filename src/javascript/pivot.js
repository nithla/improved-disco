const PIVOT_SKILLS = {
    lead: {
        title: 'Strategy & stakeholders',
        chips: [
            'Product management',
            'Roadmap planning',
            'Go-to-market strategy',
            'Stakeholder management',
            'Cross-functional collaboration',
            'Conflict resolution',
        ],
    },
    leverage: {
        title: 'Tools & execution',
        chips: [
            'Agile Scrum',
            'Jira & Confluence',
            'Figma, Adobe XD, InVision',
            'Sprint planning & execution',
            'Frontend developer expertise',
            'User story creation, mapping & refinement',
        ],
    },
    thrive: {
        title: 'Outcomes & quality',
        chips: [
            'Analytics & KPIs, SQL',
            'Reports + dashboards: PowerBI, Tableau',
            'Root cause analysis',
            'Risk management',
            'Quality assurance',
            'Continuous & iterative improvement',
            'Customer research',
            'Feature prioritization & backlog management',
        ],
    },
};

const cards = document.querySelectorAll('.pivot__card');
const skillsGroups = document.getElementById('skillsGroups');

function renderSkills(id) {
    const group = PIVOT_SKILLS[id];

    if (!group) {
        return;
    }

    skillsGroups.innerHTML = `
        <div class="skills__group">
            <p class="skills__group-title">${group.title}</p>
            <ul class="skills__chips">
                ${group.chips.map((chip) => `<li class="skills__chip">${chip}</li>`).join('')}
            </ul>
        </div>
    `;
}

function selectCard(id) {
    cards.forEach((card) => {
        card.classList.toggle('pivot__card--active', card.dataset.id === id);
    });

    renderSkills(id);
}

cards.forEach((card) => {
    card.addEventListener('click', () => selectCard(card.dataset.id));

    card.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            selectCard(card.dataset.id);
        }
    });
});

if (cards.length) {
    selectCard(cards[0].dataset.id);
}
