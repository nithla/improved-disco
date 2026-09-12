const PROJECTS = [
    {
        id: 'nrg',
        name: 'nrg',
        logo: 'assets/project-logos/logo.svg',
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
        logo: 'assets/project-logos/accenture.svg',
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
        logo: 'assets/project-logos/thoughtworks.svg',
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

/* --- render the reel --------------------------------------------------- */

const track = document.getElementById('projectsTrack');
const section = document.getElementById('projects');
const sticky = section && section.querySelector('.showcase__sticky');
const progress = document.getElementById('projectsProgress');

/* one of four compositions per project, in a deliberate order so no two
   neighbours share a layout — see projects.scss for each */
const LAYOUTS = ['band', 'billboard', 'column', 'ghost', 'band', 'column', 'billboard', 'ghost'];

function cardMarkup(project, position, layout) {
    const num = String(position).padStart(2, '0');
    const bullets = project.bullets.map((bullet) => `<li>${bullet}</li>`).join('');

    return `
        <article class="showcase__panel showcase__card showcase__card--${layout}">
            <figure class="showcase__card-logo"><img src="${project.logo}" alt="${project.name}"></figure>
            <div class="showcase__card-text">
                <p class="showcase__card-num" aria-hidden="true">${num}</p>
                <h3 class="showcase__card-name">${project.name}</h3>
                ${project.role ? `<p class="showcase__card-role">${project.role}</p>` : ''}
                ${project.summary ? `<p class="showcase__card-summary">${project.summary}</p>` : ''}
                <ul class="showcase__card-bullets">${bullets}</ul>
            </div>
        </article>
    `;
}

/* projects with no copy to show (no role/summary/bullets) get no desktop
   layout — see showcase__card--bare in projects.scss, hidden in the pinned
   reel and shown only as a plain tile in the <992px logo grid. */
function bareCardMarkup(project) {
    return `
        <article class="showcase__panel showcase__card showcase__card--bare">
            <figure class="showcase__card-logo"><img src="${project.logo}" alt="${project.name}"></figure>
        </article>
    `;
}

if (track && section && sticky) {
    const featured = PROJECTS.filter((project) => project.bullets.length);
    const bare = PROJECTS.filter((project) => !project.bullets.length);
    const intro = track.querySelector('.showcase__intro');

    /* the cards are wrapped in their own showcase__grid — see projects.scss:
       display:contents on desktop keeps them direct flex items of the reel
       (untouched from before), and only becomes a real grid container
       below 992px, so the <992px white background sits behind the cards
       alone rather than the whole track (intro/outro included). */
    intro.insertAdjacentHTML(
        'afterend',
        '<div class="showcase__grid">'
        + featured.map((project, index) =>
            cardMarkup(project, index + 1, LAYOUTS[index % LAYOUTS.length])).join('')
        + bare.map((project) => bareCardMarkup(project)).join('')
        + '</div>'
    );

    /* only .showcase__panel children take the reveal — this lets other things
       (e.g. a decorative SVG) live in the track without being stomped */
    const panels = Array.from(track.querySelectorAll('.showcase__panel'));

    const canPin = window.matchMedia('(min-width: 992px)');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const pinned = () => canPin.matches && !reduced.matches;

    const LIFT = 26; /* px each panel's content rises from as it enters */

    let centres = []; /* each panel's mid-x within the track, transform-free */
    let maxShift = 0;
    let target = 0;
    let currentX = 0;
    let ticking = false;

    function cachePanels() {
        centres = panels.map((panel) => panel.offsetLeft + panel.offsetWidth / 2);
    }

    /* the shared reveal: each panel's content lifts and fades in as it nears
       the centre of the window — driven by translate on desktop, by scrollLeft
       on the native strip. offset is the reel's current horizontal position. */
    function reel(offset) {
        const viewCentre = offset + sticky.clientWidth / 2;
        const falloff = sticky.clientWidth * 0.85 || 1;
        const ratio = maxShift ? Math.min(Math.max(offset / maxShift, 0), 1) : 0;

        panels.forEach((panel, i) => {
            /* the lift/fade is a function of the reel's *horizontal* scroll
               position — meaningful only in pinned mode. Below 992px there's
               no reel (projects.scss lays the cards out as a static grid
               instead), so distance-from-centre is just noise; leave every
               panel at rest rather than reading it as a reveal cue. */
            if (!pinned()) {
                panel.style.transform = '';
                panel.style.opacity = '';
                return;
            }

            const near = Math.max(0, 1 - Math.abs(centres[i] - viewCentre) / falloff);
            const eased = near * near * (3 - 2 * near);

            panel.style.transform = `translate3d(0, ${((1 - eased) * LIFT).toFixed(1)}px, 0)`;
            panel.style.opacity = (0.28 + 0.72 * eased).toFixed(3);
        });

        if (progress) {
            progress.style.width = `${(ratio * 100).toFixed(2)}%`;
        }
    }

    /* --- desktop: pinned section, page scroll drives the track --- */

    function render() {
        currentX += (target - currentX) * 0.12;

        const settled = Math.abs(target - currentX) < 0.4;

        if (settled) {
            currentX = target;
        }

        track.style.transform = `translate3d(${-currentX}px, 0, 0)`;
        reel(currentX);

        if (settled) {
            ticking = false;
        } else {
            requestAnimationFrame(render);
        }
    }

    function onScroll() {
        if (!pinned() || maxShift === 0) {
            return;
        }

        target = Math.min(Math.max(-section.getBoundingClientRect().top, 0), maxShift);

        if (!ticking) {
            ticking = true;
            requestAnimationFrame(render);
        }
    }

    /* --- native strip: mobile / no-pin / reduced motion --- */

    let stripQueued = false;

    function paintStrip() {
        stripQueued = false;
        reel(sticky.scrollLeft);
    }

    function onStripScroll() {
        if (pinned() || stripQueued) {
            return;
        }

        stripQueued = true;
        requestAnimationFrame(paintStrip);
    }

    function measure() {
        sticky.classList.toggle('showcase__sticky--pin', pinned());
        cachePanels();

        if (!pinned()) {
            section.style.height = '';
            track.style.transform = '';
            maxShift = Math.max(0, sticky.scrollWidth - sticky.clientWidth);
            reel(sticky.scrollLeft);
            return;
        }

        /* runway = one pinned viewport + however far the track has to travel.
           sticky.clientWidth is the real visible window (accounts for the
           fixed side-nav padding on .main and the scrollbar). */
        maxShift = Math.max(0, track.scrollWidth - sticky.clientWidth);
        section.style.height = `${window.innerHeight + maxShift}px`;
        target = 0;
        currentX = 0;
        track.style.transform = 'translate3d(0, 0, 0)';
        reel(0);
        onScroll();
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    sticky.addEventListener('scroll', onStripScroll, { passive: true });
    window.addEventListener('resize', measure);
    window.addEventListener('load', measure);
    canPin.addEventListener('change', measure);
    reduced.addEventListener('change', measure);

    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(measure);
    }

    measure();
}
