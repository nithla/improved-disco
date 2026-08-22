const PROJECTS = [
    {
        id: 'nrg',
        name: 'nrg',
        logo: 'assets/project-logos/logo.png',
        role: 'Personal Portfolio · This Site',
        summary: 'A personal portfolio built from scratch to showcase my work across product and engineering.',
        bullets: [
            'Built with webpack 5, SCSS (sass-loader/css-loader/style-loader), and Babel + jQuery, templated via html-webpack-plugin from a single index.html entry point',
            'npm run dev starts a live-reload dev server on port 3000; npm run build bundles the site into dist/',
            'Organized per-section — styles, JS behavior, and assets (backgrounds, photos, logos, resume) mirrored into dist/ on build',
        ],
    },
    {
        id: 'accenture',
        name: 'Accenture',
        logo: 'assets/project-logos/accenture.png',
        role: 'Business Analyst, Product Strategy · Expert Assist',
        summary: 'Owned the metadata and content strategy for Accenture’s GenAI-powered Expert Assist platform.',
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
        summary: 'Partnered with EE’s PDP/PLP teams to streamline data flow and sharpen the on-site search & promo experience.',
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
        summary: 'Led the frontend rebrand and repository cleanup ahead of Thoughtworks’ NASDAQ IPO.',
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
        summary: 'Built the UI layer handling large-scale API result sets for Equinix’s product surfaces.',
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
        summary: 'Rebuilt TA Digital’s corporate site with a shared design system and reusable component library.',
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
        summary: 'Migrated DuPont’s multi-language site from AEM to BigCommerce as a full-stack effort.',
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
        summary: 'A B-school summer internship analyzing growth opportunities across Myntra’s D2C partner network.',
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
        ? `<ul class="showcase__projects-details">${project.bullets.map((bullet) => `<li>${bullet}</li>`).join('')}</ul>`
        : `<p>Case study coming soon.</p>`;

    detail.innerHTML = `
        <p class="showcase__projects-title">${project.name}</p>
        ${project.role ? `<p class="showcase__projects-role">${project.role}</p>` : ''}
        ${project.summary ? `<p class="showcase__projects-summary">${project.summary}</p>` : ''}
        ${bulletsHtml}
    `;

    detail.scrollTop = 0;
    detail.classList.toggle('showcase__projects-detail--has-overflow', detail.scrollHeight > detail.clientHeight);
}

function selectProject(id) {
    const project = PROJECTS.find((item) => item.id === id);

    if (!project) {
        return;
    }

    Array.from(grid.children).forEach((tile) => {
        tile.classList.toggle('showcase__projects-logo--active', tile.dataset.id === id);
    });

    renderDetail(project);
}

grid.innerHTML = PROJECTS.map((project) => `
    <button type="button" class="showcase__projects-logo" data-id="${project.id}" aria-label="${project.name}">
        <img src="${project.logo}" alt="${project.name}">
    </button>
`).join('');

grid.addEventListener('click', (event) => {
    const tile = event.target.closest('.showcase__projects-logo');

    if (!tile) {
        return;
    }

    selectProject(tile.dataset.id);
});

selectProject(PROJECTS[0].id);
