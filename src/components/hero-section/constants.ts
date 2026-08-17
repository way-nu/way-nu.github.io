import {SITE} from "@/config/site";

/** A run of intro text; `emphasis` picks a highlight color, otherwise inherits. */
export type IntroSegment = { text: string; emphasis?: "strong" | "accent" };

export type Cta = { label: string; href: string };

export const HERO = {
    badge: SITE.availability,
    nameLines: SITE.nameLines,
    intro: [
        {text: "Software Engineer (3 yrs) building "},
        {text: "products end-to-end", emphasis: "strong"},
        {text: " - across design, development and deployment - at the  "},
        {text: "0→1", emphasis: "strong"},
        {text: " stage, with deep hands-on experience in "},
        {text: "agentic development infrastructure", emphasis: "accent"},
        {text: "."},
    ] as IntroSegment[],
    subIntro:
        "Built a fitness platform end to end that hit 5,000 users and ₹8,00,000 revenue in 18 days, and now serves 1M+ users across 1,000+ cities. Works async with US-based teams.",
    primaryCta: {label: "walk the journey ↓", href: "#journey"} as Cta,
    secondaryCta: {label: "get in touch", href: "#contact"} as Cta,
};
