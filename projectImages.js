/**
 * Deployment-safe, single source of truth for project screenshots.
 *
 * This site is plain static HTML, so this JavaScript registry is used instead
 * of a TypeScript module (there is no TypeScript build step to compile a .ts
 * file for the browser). All paths are root-relative Vercel static assets.
 */
window.projectImages = Object.freeze({
  "travel-ai": {
    src: "/projects/travel-ai/homepage.png",
    alt: "TravelAI project interface screenshot"
  },
  unibook: {
    src: "/projects/unibook/homepage.png",
    alt: "UniBook project dashboard screenshot"
  },
  "digital-farming-advisory": {
    src: "/projects/digital-farming-advisory/homepage.png",
    alt: "Digital Farming Advisory System interface screenshot"
  },
  "personal-portfolio": {
    src: "/projects/personal-portfolio/homepage.png",
    alt: "Personal portfolio website screenshot"
  },
  "codealpha-ml-projects": {
    src: "/projects/codealpha-ml-projects/homepage.png",
    alt: "CodeAlpha machine learning projects screenshot"
  }
});
