/**
 * Single source of truth for personal / identity details reused across the
 * site (nav, hero, terminal, contact, page metadata). Update these once and the
 * change propagates everywhere. Section-specific copy lives in each section's
 * own `constants.ts`.
 */
export const SITE = {
    /** Full name — hero heading, terminal, footer, page title. */
    name: "Venu Sai Madisetti",
    /** Hero heading split across two lines. */
    nameLines: ["Venu Sai", "Madisetti"] as const,
    /** Monogram shown in the nav badge. */
    monogram: "V",
    /** Professional title. */
    role: "Software Engineer",
    /** Renders as "venu@portfolio" in the nav brand and terminal prompt/title. */
    handle: {user: "venu", host: "portfolio"},
    /** Contact email — contact section + terminal `contact` command. */
    email: "venusaim23@gmail.com",
    /** Direct path to the résumé PDF in public/docs — resolves in dev and static export alike. */
    resumeHref: "/docs/resume.pdf",
    /** Availability line in the hero badge. */
    availability: "available for senior roles",
    /** Where you are — footer + (statically) the terminal `whoami`. */
    location: {city: "Pune, India", country: "India", timezone: "IST"},
    /** Plain-text bio used for the page <meta> description. */
    bio: "Software engineer who builds products end-to-end — across design, development, and deployment — at the 0→1 stage, with deep hands-on experience in agentic development infrastructure.",
};
