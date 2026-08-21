const PROJECTS = [
    {
        id: 'accenture',
        name: 'Accenture',
        logo: 'assets/project-logos/accenture.png',
        role: 'Business Analyst, Product Strategy · Expert Assist',
        bullets: [
            'Delivered an 88% GenAI accuracy gain by owning metadata strategy & driving structural alignment of the index',
            'Spearheaded the product roadmap for multi-tenant scalability, powering content team operations in 25+ regions',
            'Overhauled UX for 10+ CMS features, transforming navigation, workflows, & in-app usability',
        ],
    },
    {
        id: 'bt',
        name: 'British Telecom',
        logo: 'assets/project-logos/bt.png',
        role: 'Product Owner, Technical Business Analyst · Everything Everywhere',
        bullets: [
            'Streamlined data flow, enabling a 15% faster feature rollout between backend services & PDP–PLP pages',
            'Enhanced search & refined promotional strategies, driving a 20% increase in user engagement & satisfaction',
            'Cut turnaround time by 10% by translating complex technicalities into priorities for cross-functional teams',
        ],
    },
    {
        id: 'thoughtworks',
        name: 'Thoughtworks',
        logo: 'assets/project-logos/thoughtworks.png',
        role: 'Frontend Lead',
        bullets: [
            'Facilitated a $0.77 billion IPO on the NASDAQ by spearheading the rebranding & full visual refresh campaign',
            'Expanded website traffic by 15% & eliminated redundancy in under 4 weeks through repository restructuring',
        ],
    },
    {
        id: 'equinix',
        name: 'Equinix',
        logo: 'assets/project-logos/equinix.png',
        role: 'Frontend Developer',
        bullets: [
            'Seamlessly integrated 1000s of results into the UI, optimizing complex API data handled from database requests',
            'Reduced development effort by 25% by building versatile, modular, & reusable UI components for scalability',
        ],
    },
    {
        id: 'tadigital',
        name: 'TA Digital',
        logo: 'assets/project-logos/tadigital.png',
        role: 'Frontend Developer · Corporate website rebuild',
        bullets: [
            'Created global styles & 10+ reusable functions, streamlining the design of 100+ pages in the site’s redesign',
            'Developed 15+ dynamic components, enabling data analytics & powering essential site-level functionalities',
        ],
    },
    {
        id: 'dupont',
        name: 'DuPont',
        logo: 'assets/project-logos/dupont.png',
        role: 'Full-stack Developer',
        bullets: [
            'Spearheaded a platform migration of 624 HTML pages from AEM to BigCommerce, saving $40,000 annually',
            'Optimized structure for 9 language sites, enhancing SEO & ranking, & reducing developer workload by 50%',
        ],
    },
    {
        id: 'myntra',
        name: 'Myntra',
        logo: 'assets/project-logos/myntra.png',
        role: 'Summer Intern · B-School Internship',
        bullets: [
            'Identified key growth opportunities by leveraging insights from 50+ stakeholders & 2,500+ global programs',
            'Collaborated with 10+ D2C entrepreneurs & 15+ categories to identify & introduce strategic improvements',
            'Designed an onboarding roadmap using data from 5 partner brands to streamline & advance program entry',
        ],
    },
    {
        id: 'canopygrowth',
        name: 'Canopy Growth',
        logo: 'assets/project-logos/canopygrowth.png',
        role: null,
        bullets: [],
    },
    {
        id: 'eon',
        name: 'E.ON',
        logo: 'assets/project-logos/eon.png',
        role: null,
        bullets: [],
    },
];

const grid = document.getElementById('projectsGrid');
const detail = document.getElementById('projectsDetail');

function renderDetail(project) {
    const bulletsHtml = project.bullets.length
        ? `<ul class="projects__detail-bullets">${project.bullets.map((bullet) => `<li>${bullet}</li>`).join('')}</ul>`
        : `<p class="projects__detail-empty">Case study coming soon.</p>`;

    detail.innerHTML = `
        <p class="projects__detail-name">${project.name}</p>
        ${project.role ? `<p class="projects__detail-role">${project.role}</p>` : ''}
        ${bulletsHtml}
    `;
}

function selectProject(id) {
    const project = PROJECTS.find((item) => item.id === id);

    if (!project) {
        return;
    }

    Array.from(grid.children).forEach((tile) => {
        tile.classList.toggle('projects__grid-item--active', tile.dataset.id === id);
    });

    renderDetail(project);
}

grid.innerHTML = PROJECTS.map((project) => `
    <button type="button" class="projects__grid-item" data-id="${project.id}" aria-label="${project.name}">
        <img src="${project.logo}" alt="${project.name}">
    </button>
`).join('');

grid.addEventListener('click', (event) => {
    const tile = event.target.closest('.projects__grid-item');

    if (!tile) {
        return;
    }

    selectProject(tile.dataset.id);
});

selectProject(PROJECTS[0].id);
