# improved-disco

Nithila's personal portfolio site, built with webpack, SCSS, and jQuery.

## Stack

- **Bundler:** webpack 5 (`webpack.config.js`)
- **Styles:** SCSS, compiled via `sass-loader` / `css-loader` / `style-loader`
- **JS:** Babel (`@babel/preset-env`) + jQuery
- **HTML:** `html-webpack-plugin`, templated from `src/index.html`
- **Fonts:** Arizonia, Simonetta, Jost, Poppins — loaded from Google Fonts via `@import` in `src/styles/global/variables.scss`

## Scripts

- `npm run dev` — starts `webpack serve` on port 3000 with live reload
- `npm run build` — bundles the site into `dist/`

## Integrations

The site itself is static, but three features are backed by AWS Lambda functions on a shared API Gateway, with source kept in [`src/javascript/lambda/`](src/javascript/lambda/) — separate from the site's own JS, since none of it ships in `dist/`. They run independently on AWS and the frontend either fetches from them or (for Spotify) just displays what one last wrote.

- **Letterboxd** ([`letterboxd-favorites-lambda.js`](src/javascript/lambda/letterboxd-favorites-lambda.js)) — a Lambda that fetches the public Letterboxd RSS feed on every request and returns the highest-rated recently-logged films as JSON, purely as a CORS relay (the raw feed has no CORS headers, and Letterboxd's HTML pages block non-browser requests). `fun.js` calls it to populate the Fun section's film carousel. No API key needed.
- **Spotify** ([`spotify-top-tracks-lambda.js`](src/javascript/lambda/spotify-top-tracks-lambda.js)) — a Lambda on a daily EventBridge schedule (not per page load) that refreshes an access token and overwrites a dedicated playlist with current top tracks via the Spotify Web API. The site just embeds that playlist through Spotify's iframe player in `index.html`, so it always shows whatever the Lambda last wrote.
- **Contact form** ([`email-send-lambda.js`](src/javascript/lambda/email-send-lambda.js)) — the contact form POSTs validated name/email/message to a Lambda endpoint (`.../prod/emailSend`) on the same API Gateway, which sends it via AWS SES to `nithilareddygaddam@gmail.com`.

## Project structure

```
src/
  index.js / index.html      entry point + HTML template
  javascript/
    site/                     per-section frontend behavior (menu, fun carousel, download, form, ...)
    lambda/                   AWS Lambda source, not part of the bundle — see Integrations
  styles/                    per-section SCSS
  assets/
    background/               full-bleed section background images
    personal-pictures/        photos of Nithila
    project-logos/             company/project logos for the projects section
    social-logos/              icons for social links
    resume/                    downloadable resume PDF
```

`dist/` mirrors this `src/assets/` layout on build (via webpack's `assetModuleFilename`), and is committed to the repo.

### JavaScript

Mostly vanilla JS, with jQuery used in a few of the older/interactive files. Each file is imported once from `index.js` and owns one section:

- `jquery.js` — imports the `jquery` npm package and exposes it globally as `$`/`jQuery` for the jQuery-based files below.
- `menu.js` *(jQuery)* — mobile nav drawer: toggles `.header__navigation`, keyboard-accessible (Enter/Space), closes itself when a nav link is clicked.
- `download.js` — resume button, opens the PDF in a new tab.
- `form.js` *(jQuery)* — contact form validation (required fields + email regex) and submission to the `emailSend` Lambda; see Integrations.
- `pivot.js` — the "How I lead / leverage / thrive" cards in the Skills section; clicking a card swaps in its matching skill-chip list from an inline data object.
- `projects.js` — renders the project-logo grid and detail panel in the Projects section from an inline `PROJECTS` array (logo, role, summary, bullets per entry); clicking a logo swaps the detail panel.
- `fun.js` — the Fun section's film carousel: fetches from the Letterboxd Lambda, renders posters/ratings, wires the prev/next scroll-arrow buttons.
- `lambda/letterboxd-favorites-lambda.js`, `lambda/spotify-top-tracks-lambda.js`, `lambda/email-send-lambda.js` — not part of the webpack bundle; Lambda source, see Integrations.

### Styles

SCSS split one file per section, all imported through `index.js`. `variables.scss` (colors, font imports, breakpoints, mixins) is auto-injected into every other partial via `@use` in `webpack.config.js`'s `sass-loader` options, so section files don't need their own `@import`.

- `global/reset.scss` — CSS reset.
- `global/variables.scss` — color palette, Google Font imports, breakpoint values (`$sm/$md/$lg/$xl`), and shared mixins: `media-breakpoint-up/down`, `flex`, `default-text` (the default paragraph style), `card`, `focus-ring`.
- `global/main.scss` — base element styles, plus the h1/h2/h3 heading scale (each level sets a `--size` custom property — 4rem/3rem/2.5rem — that `font-size` reads, shrunk to 0.75× on small screens).
- `sections/header.scss`, `home.scss`, `skills.scss`, `projects.scss` (class `.showcase`), `contact.scss`, `fun.scss` — one file per page section, each owning its own full-bleed background painting, layout, and component styles.

### HTML

A single template, `index.html`, processed by `html-webpack-plugin` — no separate views or partials. It's one page with anchor-linked sections (`#home`, `#skills`, `#projects`, `#contact`, `#fun`) that the mobile nav drawer scrolls to. Icons (download, carousel chevrons) are inlined as SVG directly in the markup rather than an icon font or separate image files.
