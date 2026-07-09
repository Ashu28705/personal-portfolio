# Ashutosh Kamboya - Digital Archive Portfolio

An immersive static portfolio for Ashutosh Kamboya, built around real client work, full stack projects, machine learning practice, and a premium 3D digital archive experience.

## What Changed

- Replaced the old dashboard-style interface with a cinematic "Digital Archive" concept.
- Removed unsupported statistics, certification cards, and obsolete OS-style section names.
- Added a Three.js hero core, real screenshot client showcases, spatial project story sections, GitHub API repository orbit, interactive skill constellation, and a cinematic direct-contact finale.
- Added SEO metadata, Open Graph tags, Twitter metadata, structured data, `robots.txt`, and `sitemap.xml`.
- Added local visual assets in `assets/`, including real client and project screenshots.
- Kept the site deployable as a simple static portfolio with no build step.

## Sections

- `INDEX` - cinematic hero and 3D digital core
- `ABOUT` - professional story and education timeline
- `EXPERIENCE` - Zippit Technologies internship
- `CLIENT WORK` - Narayani Heights, Rosati's Pizza, Osteo Medi Care, and StayPilot
- `PROJECTS` - Travel Insights, UniBook, Digital Farming Advisory System, and CodeAlpha ML projects
- `GITHUB` - runtime public repository explorer using the GitHub API
- `SKILLS` - interactive technology constellation without fake percentages
- `CONTACT` - direct contact links, generated resume download, and interactive contact orb

## Local Development

No build step is required.

```bash
npx serve .
```

Then open the local URL shown by the server.

## Deployment

The project is configured for Vercel static hosting through `vercel.json`.

```bash
vercel --prod
```

## Factual Content

Professional and education details are based on the latest provided portfolio prompt. GitHub repository cards are fetched dynamically from:

```text
https://api.github.com/users/Ashu28705/repos?sort=updated&per_page=30
```

If the API is rate-limited, the page shows verified repository links without inventing metrics.
