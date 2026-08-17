import {SITE} from "@/config/site";
import {row, sp} from "./utils";

export type Tone = "accent" | "dim" | "soft" | "head" | "error";
export type Span = { text: string; tone?: Tone };
/** A single terminal line: a sequence of tone-tagged spans (empty = blank line). */
export type Line = Span[];

export const RESUME_PATH = SITE.resumeHref;

/** Title bar text, e.g. "venu@portfolio: ~/about". */
export const TERMINAL_TITLE = `${SITE.handle.user}@${SITE.handle.host}: ~/about`;

/** [command, one-line description] — drives the `help` listing and defines the visible commands. */
export const COMMAND_META: [string, string][] = [
    ["whoami", "who I am"],
    ["about", "the short pitch"],
    ["journey", "the timeline, in brief"],
    ["skills", "my toolkit"],
    ["experience", "work history"],
    ["projects", "things I’ve built"],
    ["hackathons", "wins & organizing"],
    ["education", "where I studied"],
    ["certs", "certifications"],
    ["stats", "the numbers"],
    ["contact", "reach me"],
    ["resume", "download my CV"],
    ["clear", "wipe the screen"],
];

const HELP_OUTPUT: Line[] = [
    [sp("available commands — type one:", "dim")],
    ...COMMAND_META.map(([cmd, desc]) => row(`  ${cmd.padEnd(12)}`, desc)),
];

/** Static output for each command. Side-effect commands (resume, clear) are handled in the hook. */
export const OUTPUTS: Record<string, Line[]> = {
    help: HELP_OUTPUT,
    whoami: [
        [sp(SITE.name, "head"), sp(` — ${SITE.role}`)],
        [sp(`${SITE.location.country} · 3 yrs · open to senior roles`, "dim")],
    ],
    about: [
        [sp("I build "), sp("products end-to-end", "head"), sp(" at the "), sp("0→1 stage", "head")],
        [sp(" — across design, dev, and deployment. Built Fitistan end")],
        [sp("to end — 5,000 users and ₹8,00,000 in 18 days, now 1M+ users")],
        [sp("across 1,000+ cities. Deep hands-on with "), sp("agentic dev infrastructure", "accent"), sp(".")],
    ],
    journey: [
        row("2026", "Fresh Gravity · Rupiverse"),
        row("2025", "nRev.ai · agentic SDLC · 4TB for $250"),
        row("2024", "Fitistan launches → ₹8L in 18 days"),
        row("2023", "Betacrew · graduated IIIT Trichy"),
        row("2022", "basys.ai · Atrang · Cosmic Ink 🏆"),
        row("2021", "Alan AI · MLH · IoT Labs"),
        row("2020", "Todogenix 🏆 — first win"),
        row("2019", "started B.Tech at IIIT Trichy"),
        [sp("→ scroll down to walk it properly", "dim")],
    ],
    skills: [
        row("backend  ", "Python · FastAPI · Hexagonal Arch · PostgreSQL · Docker"),
        row("agentic  ", "MCPs · Cursor Agents · Claude Code · agent planning"),
        row("data/aws ", "PySpark · AWS Glue · S3 · Parquet · IAM · Lambda"),
        row("frontend ", "React · Next.js · TypeScript · Tailwind · React Flow"),
    ],
    experience: [
        row("2026—now ", "Fresh Gravity · Consultant, Data Management"),
        row("2025—26  ", "nRev.ai · Software Engineer"),
        row("2023—25  ", "Betacrew · Software Engineer (Fitistan)"),
        row("2021—23  ", "Alan AI · Student Partner & Guest Author"),
        row("2022     ", "basys.ai · Mobile Developer"),
        row("2020—21  ", "IoT Labs, IIIT Naya Raipur · Android Developer"),
    ],
    projects: [
        [sp("Fitistan", "head"), sp("   1M+ users · ₹8L in 18 days · iOS + Android")],
        [sp("Rupiverse", "head"), sp("  open-source finance app w/ a local 3B LLM")],
        [sp("Cosmic Ink", "head"), sp(" 🏆 transcript analyser · 2 hackathon wins")],
        [sp("Todogenix", "head"), sp("  🏆 smart voice assistant")],
        [sp("Netwink", "head"), sp("    social platform for women in tech")],
        [sp("ReciPlease", "head"), sp(" culinary taste discovery")],
        [sp("GoalsOps", "head"), sp("   new year resolutions tracker")],
    ],
    hackathons: [
        row("wins     ", "Todogenix · Cosmic Ink (Hack The League + Achy Breaky)"),
        row("organizer", "Atrang Hacks 2022 — IIIT Trichy’s first hackathon"),
        row("community", "Major League Hacking (MLH), 2021—2023"),
        [sp("devpost.com/venusaim23 — 8 hackathons, 6 projects", "dim")],
    ],
    education: [
        [sp("B.Tech, Computer Science & Engineering", "head")],
        [sp("IIIT Tiruchirappalli · 2019—2023")],
        [sp("CGPA 8.3 / 10", "accent")],
    ],
    certs: [
        row("udemy ", "The Complete Android Developer Course · Aug 2020"),
        row("mlh   ", "Hack The League — participation"),
        [sp("→ verify links on the timeline cards", "dim")],
    ],
    stats: [
        row("1M+   ", "users on Fitistan, across 1,000+ cities"),
        row("₹8L   ", "revenue in the first 18 days (5,000 users)"),
        row("100k+ ", "Play Store installs"),
        row("4TB   ", "processed for $250 total compute on AWS"),
        row("60%   ", "faster planning-to-PR (agentic SDLC)"),
    ],
    contact: [
        row("email    ", SITE.email),
        row("phone    ", "+91-83604-49458"),
        row("github   ", "github.com/way-nu"),
        row("linkedin ", "linkedin.com/in/venusaim000"),
        row("devpost  ", "devpost.com/venusaim23"),
        row("x        ", "x.com/venusaim"),
    ],
};

export const ALIASES: Record<string, string> = {
    who: "whoami",
    work: "experience",
    exp: "experience",
    me: "about",
    cv: "resume",
    ls: "help",
    "?": "help",
    socials: "contact",
    links: "contact",
    numbers: "stats",
    timeline: "journey",
    hackathon: "hackathons",
    wins: "hackathons",
    certifications: "certs",
    edu: "education",
    school: "education",
    built: "projects",
    github: "projects",
    fitistan: "projects",
};

export const BOOT_LINES: Line[] = [
    [sp(`${SITE.handle.user}@${SITE.handle.host}`, "accent"), sp(":"), sp("~", "dim"), sp(" booting…")],
    [sp(SITE.name, "head"), sp(` — ${SITE.role}`)],
    [sp("0→1 products · full SDLC · agentic AI", "dim")],
];

export const HELP_HINT: Line = [
    sp("type ", "dim"),
    sp("help", "accent"),
    sp(" or ", "dim"),
    sp("journey", "accent"),
    sp(" to start ↴", "dim"),
];

export const RESUME_OUTPUT: Line[] = [[sp("↓ opening resume.pdf …", "accent")]];
