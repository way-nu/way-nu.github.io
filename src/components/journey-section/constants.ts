import {SITE} from "@/config/site";

export type TimelineLink = { label: string; href: string };

/** Fields shared by every timeline entry — used to place it on the spine + chip. */
type TimelineBase = {
    /** Era label surfaced by the sticky chip while this entry is in view. */
    era: string;
    /** Year surfaced by the sticky chip while this entry is in view. */
    year: string;
    /** Human date shown on the card / milestone. */
    dateLabel: string;
    /** Headline for the entry. */
    title: string;
};

/** A small dot-and-label marker on the spine — no expandable card. */
export type Milestone = TimelineBase & { kind: "milestone" };

/** An expandable card: role, project, event, cert, education, or the "now" tile. */
export type EventCard = TimelineBase & {
    kind: "now" | "job" | "project" | "event" | "cert" | "edu";
    /** Small uppercase accent tag in the card header. */
    badge: string;
    /** One-line subtitle under the title. */
    sub: string;
    /** Always-visible teaser line. */
    brief: string;
    /** Detail bullets revealed on hover / tap. */
    bullets: string[];
    /** Tech / topic tags revealed with the detail. */
    tags: string[];
    /** External links revealed with the detail. */
    links: TimelineLink[];
    /** Overrides the default "hover for detail →" hint. */
    moreLabel?: string;
};

export type TimelineEntry = Milestone | EventCard;

/** Default hint shown at the bottom of a collapsed card. */
export const DEFAULT_MORE_LABEL = "hover for detail →";

/**
 * The full history, newest first. Milestones punctuate the spine between cards;
 * cards alternate sides (see `buildTimeline`). Copy is the single source of
 * truth for the timeline — the terminal `journey` command mirrors it in brief.
 */
export const TIMELINE: TimelineEntry[] = [
    {
        kind: "now",
        era: "open to work",
        year: "2026",
        dateLabel: "Now",
        badge: "available",
        title: "Open to senior roles",
        sub: "Full-stack · systems · agentic AI",
        brief:
            "Looking for senior roles building products end to end. Async-friendly, already working with US-based teams.",
        bullets: [
            "Strongest fit: owning products from 0→1 — schema and backend through web and native mobile — where the architecture decisions still matter.",
            "Python and backend systems are a core strength, but I reach for whatever the problem needs rather than leading with one language or stack.",
            "Also deep on agentic-AI infrastructure — MCP servers, agent planning loops, Cursor and Claude Code workflows.",
        ],
        tags: ["Full-time", "Full-stack", "Remote / async"],
        links: [
            {label: SITE.email, href: `mailto:${SITE.email}`},
            {label: "resume.pdf", href: SITE.resumeHref},
        ],
        moreLabel: "hover for what I’m after →",
    },
    {
        kind: "project",
        era: "consulting & open source",
        year: "2026",
        dateLabel: "Aug 2026 — Present",
        badge: "open source project",
        title: "Rupiverse",
        sub: "Personal finance management · WIP",
        brief:
            "A multi-user expense platform with hierarchical category trees, and a local LLM doing the categorization.",
        bullets: [
            "A multi-user expense platform with hierarchical category trees.",
            "Cached-balance architecture with a nightly self-healing reconciliation job — avoids expensive on-read aggregation while guaranteeing correctness.",
            "A locally-hosted 3B Ollama LLM categorizes transactions — zero inference cost, and financial data never leaves the machine.",
        ],
        tags: ["Node.js", "Ollama", "LLM", "PostgreSQL"],
        links: [{label: "github.com/way-nu", href: "https://github.com/way-nu"}],
    },
    {
        kind: "job",
        era: "consulting & open source",
        year: "2026",
        dateLabel: "Mar 2026 — Present",
        badge: "Consultant, Data Management",
        title: "Fresh Gravity",
        sub: "Pune, India",
        brief: "Backend work on regulated clinical-trials data in a B2B SaaS product.",
        bullets: [
            "Designed a backend module centralizing data validation rules into standalone, reusable entities — enforcing consistent data quality standards across clinical study configurations and eliminating duplication.",
            "Implemented audit logging across a legacy backend, enabling full data traceability and auditability for regulated clinical-trials data in a B2B SaaS product.",
        ],
        tags: ["Python", "Backend", "B2B SaaS", "Clinical Data", "Audit Logging"],
        links: [{label: "freshgravity.com", href: "https://www.freshgravity.com"}],
    },
    {
        kind: "milestone",
        era: "backend & agentic AI",
        year: "2025",
        dateLabel: "Mid 2025",
        title: "Fitistan crosses 1M users",
    },
    {
        kind: "milestone",
        era: "backend & agentic AI",
        year: "2025",
        dateLabel: "Mar 2025",
        title: "Started building with agentic AI",
    },
    {
        kind: "job",
        era: "backend & agentic AI",
        year: "2025",
        dateLabel: "Jan 2025 — Mar 2026",
        badge: "Software Engineer",
        title: "nRev.ai",
        sub: "Pune, India",
        brief:
            "Python services on hexagonal architecture, a 4TB pipeline cut to $250, and the agentic SDLC that made it fast.",
        bullets: [
            "Pioneered Agentic SDLC workflows using MCPs, Cursor Agents, and Claude Code, achieving a 60% increase in development velocity from planning to PR reviews.",
            "Architected Python services using Hexagonal Architecture to decouple core logic from external adapters for the B2B SaaS product.",
            "Cut processing cost for a 4TB external dataset to $250 total compute by optimizing PySpark-based AWS Glue pipelines into a consistent Parquet model on S3 — including partitioning strategy and IAM configuration for service access.",
            "Designed and built interactive data visualizations using React Flow in Next.js, giving stakeholders clear visibility into complex data relationships.",
        ],
        tags: ["Python", "FastAPI", "PySpark", "AWS Glue", "S3", "Parquet", "IAM", "Next.js", "React Flow", "MCPs"],
        links: [
            {label: "nrev.ai", href: "https://www.nrev.ai"},
            {label: "app.nrev.ai", href: "https://app.nrev.ai"},
        ],
    },
    {
        kind: "milestone",
        era: "backend & agentic AI",
        year: "2025",
        dateLabel: "Jan 2025",
        title: "Moved to full-time backend / Python",
    },
    {
        kind: "milestone",
        era: "shipping Fitistan",
        year: "2024",
        dateLabel: "May 2024",
        title: "Fitistan launches — ₹8,00,000 in 18 days",
    },
    {
        kind: "job",
        era: "shipping Fitistan",
        year: "2023",
        dateLabel: "Sep 2023 — Jan 2025",
        badge: "Sole Engineer",
        title: "Betacrew Solutions",
        sub: "Mumbai · Remote",
        brief:
            "Built Fitistan — an entire fitness platform — end to end and alone: backend, web, and both native apps. Now 1M+ users.",
        bullets: [
            "Built the entire platform end to end for a fitness client as a sole engineer — backend (Node/Express + PostgreSQL), web (React + Ionic), and native iOS/Android apps.",
            "Reached 5,000+ users and ₹8,00,000 revenue within 18 days of launch; now serves 1M+ users across 1,000+ cities in India and abroad, with 100k+ Play Store installs.",
            "Owned feature planning, database schema design, and release management across Web, Android, and iOS.",
        ],
        tags: ["Node.js", "Express", "PostgreSQL", "React", "Ionic", "iOS", "Android"],
        links: [
            {label: "Play Store", href: "https://play.google.com/store/apps/details?id=io.ionic.fitistan"},
            {label: "App Store", href: "https://apps.apple.com/in/app/fitistan/id6504517808"},
            {label: "betacrew.io", href: "https://www.betacrew.io"},
        ],
    },
    {
        kind: "milestone",
        era: "college & hackathons",
        year: "2023",
        dateLabel: "May 2023",
        title: "Graduated IIIT Trichy — B.Tech CSE, 8.3 CGPA",
    },
    {
        kind: "job",
        era: "college & hackathons",
        year: "2022",
        dateLabel: "May 2022 — Aug 2022",
        badge: "Mobile Developer · Intern",
        title: "basys.ai",
        sub: "Boston, MA · Remote",
        brief: "Two production Android apps and a computer-vision model for diabetic retinopathy detection.",
        bullets: [
            "Built two production Android apps and shipped a computer-vision model for diabetic retinopathy detection, working remotely with a Boston-based team.",
            "The apps let providers and users track vitals and surface AI-driven care recommendations; integrated Firebase, Google Cloud auth, and Google Fit.",
        ],
        tags: ["Android", "Java", "OpenCV", "Firebase", "Flask"],
        links: [{label: "basys.ai", href: "https://basys.ai"}],
    },
    {
        kind: "event",
        era: "college & hackathons",
        year: "2022",
        dateLabel: "Apr 2022",
        badge: "organizer",
        title: "Atrang Hacks 2022",
        sub: "IIIT Trichy’s first-ever hackathon",
        brief: "Organized the institute’s first hackathon end to end, to push a \"Learn By Doing\" culture.",
        bullets: [
            "Organized IIIT Trichy’s first-ever hackathon to promote \"Learn By Doing\".",
            "Ran it end to end — sponsorship, judging, and the event itself.",
        ],
        tags: ["Organizing", "Community", "MLH"],
        links: [{label: "atrang-hacks-22.devpost.com", href: "https://atrang-hacks-22.devpost.com"}],
    },
    {
        kind: "project",
        era: "college & hackathons",
        year: "2022",
        dateLabel: "Feb 2022",
        badge: "🏆 winner × 2",
        title: "Cosmic Ink",
        sub: "Multiverse of Transcripts",
        brief:
            "A transcript analyser that summarizes long conversations and scores how effective they actually were.",
        bullets: [
            "An Android transcript app that processes long conversations and summarizes them by topics discussed, messages sent, questions asked, actions performed, and follow-ups.",
            "An Analyser surfaces total silence time, total talk time, and overlaps to track how effective a conversation actually was.",
            "Useful across legal transcription in court, therapy-session analysis, and recorded online lectures.",
            "Built with Symbl AI for conversation analysis, the At Sign platform for auth and storage, Volley for HTTP, and Material UI.",
            "Won at Hack The League, and took the Achy Breaky Hack prize at Don’t Go Hacking My Heart.",
        ],
        tags: ["Android", "Java", "Symbl AI", "At Sign", "Volley", "Material UI"],
        links: [
            {label: "devpost", href: "https://devpost.com/software/cosmic-ink"},
            {label: "source", href: "https://github.com/venusaim23/Cosmic-Ink"},
            {
                label: "certificate",
                href: "https://certificate.givemycertificate.com/c/f2435ec6-0e68-4bc2-9327-ae71caf3b4b4"
            },
        ],
    },
    {
        kind: "project",
        era: "college & hackathons",
        year: "2022",
        dateLabel: "Feb 2022",
        badge: "Hackathon Project",
        title: "Netwink",
        sub: "Social platform for women in tech",
        brief: "A social platform for women to move past the industry’s gender gap and chase their own goals.",
        bullets: [
            "A social media platform that empowers women in unity to move beyond the stigma of being minoritized by the gender gap in the working industry and pursue their dream goals.",
            "Built with a team of three.",
        ],
        tags: ["Mobile", "Social Good", "Team of 3"],
        links: [{label: "devpost", href: "https://devpost.com/software/netwink"}],
    },
    {
        kind: "project",
        era: "college & hackathons",
        year: "2022",
        dateLabel: "Jan 2022",
        badge: "Hackathon Project",
        title: "ReciPlease",
        sub: "The hub to discover your culinary tastes",
        brief: "A recipe-discovery app that matches food to your own taste profile.",
        bullets: ["A recipe-discovery app built to help people find food that matches their own taste profile."],
        tags: ["Mobile", "Food", "Hackathon"],
        links: [{label: "devpost", href: "https://devpost.com/software/reciplease-hjbz15"}],
    },
    {
        kind: "project",
        era: "college & hackathons",
        year: "2022",
        dateLabel: "Jan 2022",
        badge: "side project",
        title: "GoalsOps",
        sub: "New year resolutions app",
        brief: "A goal-tracking app for setting resolutions and actually keeping them.",
        bullets: ["A goal-tracking app for setting and keeping new year resolutions."],
        tags: ["Android", "Java", "Habit Tracking"],
        links: [{label: "devpost", href: "https://devpost.com/software/goalsops"}],
    },
    {
        kind: "job",
        era: "college & hackathons",
        year: "2021",
        dateLabel: "Dec 2021 — Mar 2023",
        badge: "Student Partner & Guest Author",
        title: "Alan AI",
        sub: "Sunnyvale, CA · Remote",
        brief: "Ran Alan AI’s hackathons and events at my institute, and wrote for the platform.",
        bullets: [
            "Point of contact for all Alan AI hackathons and events at my institute, and technical guest author for the platform.",
            "Helped developers build voice assistants for mobile and web apps in days using the Alan platform.",
        ],
        tags: ["Voice AI", "Developer Advocacy", "Technical Writing"],
        links: [
            {label: "alan.app", href: "https://alan.app"},
            {
                label: "technical blog",
                href: "https://alanvoice.medium.com/add-ai-voice-assistant-to-android-apps-ff380a20fbab"
            },
        ],
    },
    {
        kind: "event",
        era: "college & hackathons",
        year: "2021",
        dateLabel: "2021 — 2023",
        badge: "community",
        title: "Major League Hacking",
        sub: "MLH community member",
        brief: "Part of the global student developer community behind hundreds of hackathons a year.",
        bullets: [
            "Part of the MLH community — the global student developer community behind hundreds of hackathons a year.",
            "The route into most of the hackathons on this timeline, and into organizing Atrang.",
        ],
        tags: ["Community", "Hackathons"],
        links: [{label: "mlh.com", href: "https://www.mlh.com"}],
    },
    {
        kind: "job",
        era: "college & hackathons",
        year: "2020",
        dateLabel: "Dec 2020 — May 2021",
        badge: "Android App Developer · Intern",
        title: "IoT Labs",
        sub: "IIIT Naya Raipur",
        brief: "An Android app for automated anemia prediction in smart-healthcare settings.",
        bullets: [
            "Built an Android app from scratch for automated anemia prediction in smart-healthcare applications using OpenCV.",
        ],
        tags: ["Android", "OpenCV", "IoT"],
        links: [],
    },
    {
        kind: "milestone",
        era: "college & hackathons",
        year: "2020",
        dateLabel: "Dec 2020",
        title: "First hackathon win",
    },
    {
        kind: "project",
        era: "college & hackathons",
        year: "2020",
        dateLabel: "Dec 2020",
        badge: "🏆 winner",
        title: "Todogenix",
        sub: "A smart voice assistant",
        brief: "Speak your to-dos and it handles the scheduling — the first thing I ever won with.",
        bullets: [
            "A task-management app with seamless voice reminders — you speak your to-dos and it handles the scheduling.",
            "Built on the Alan AI voice platform with an Android front end.",
        ],
        tags: ["Voice UX", "Alan AI", "Android", "Java"],
        links: [{label: "devpost", href: "https://devpost.com/software/todogenix"}],
    },
    {
        kind: "cert",
        era: "the beginning",
        year: "2020",
        dateLabel: "Aug 2020",
        badge: "certification",
        title: "The Complete Android Developer Course",
        sub: "Udemy",
        brief: "Where the mobile work started — the course that led to every Android project above.",
        bullets: [
            "Completed the full Android development track; the foundation for the OpenCV, Firebase and Java work that followed.",
        ],
        tags: ["Android", "Java"],
        links: [{
            label: "certificate",
            href: "https://www.udemy.com/certificate/UC-e8177adf-d57c-4492-8a8d-629527a9bc8a/"
        }],
    },
    {
        kind: "edu",
        era: "the beginning",
        year: "2019",
        dateLabel: "2019 — 2023",
        badge: "education",
        title: "B.Tech, Computer Science & Engineering",
        sub: "IIIT Tiruchirappalli · CGPA 8.3",
        brief:
            "Four years at IIIT Trichy — and where the hackathons, the organizing, and the first apps all began.",
        bullets: [
            "B.Tech in Computer Science and Engineering, Indian Institute of Information Technology (IIIT) Tiruchirappalli.",
            "CGPA 8.3 / 10, 2019 — 2023.",
            "Alongside coursework: 8 hackathons, 4 wins, and organizing the institute’s first hackathon.",
        ],
        tags: ["IIIT Trichy", "2019 — 2023"],
        links: [],
    },
];

/** Copy for the section heading + the marker that closes the spine. */
export const JOURNEY = {
    index: "01 /",
    title: "The Journey",
    subtitle:
        "2019 to now — every role, product, hackathon and turning point. Hover a card for the full detail; tap on mobile.",
    footNote: "— 2019 · where it started —",
};
