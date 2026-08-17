import {SITE} from "@/config/site";

export type SocialLink = {
    label: string;
    href: string;
};

export const EMAIL = SITE.email;

export const SOCIAL_LINKS: SocialLink[] = [
    {label: "github/way-nu", href: "https://github.com/way-nu"},
    {label: "linkedin/venusaim000", href: "https://linkedin.com/in/venusaim000"},
    {label: "devpost/venusaim23", href: "https://devpost.com/venusaim23"},
    {label: "x/@venusaim", href: "https://x.com/venusaim"},
    {label: "resume.pdf", href: SITE.resumeHref},
];

export const CONTACT = {
    heading: "Let's build the next one",
    subtitle:
        "Open to senior full-stack roles where I can own products end to end. The fastest way to reach me is email.",
    footer: [
        `2026 ${SITE.name}`,
        `${SITE.location.country} — ${SITE.location.timezone}`,
        "built from scratch, no template",
    ],
};
