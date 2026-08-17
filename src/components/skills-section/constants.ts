export type SkillCategory = {
    label: string;
    items: string[];
};

export const SKILLS: SkillCategory[] = [
    {
        label: "backend & systems",
        items: [
            "Python",
            "FastAPI",
            "Node.js",
            "Express.js",
            "SQL",
            "PostgreSQL",
            "AWS Lambda",
            "Docker",
            "CI/CD",
        ],
    },
    {
        label: "AI & agent tooling",
        items: [
            "Claude Code",
            "Cursor Agents",
            "Agentic Planning",
            "MCPs — GitHub, Figma, Browser, Coda",
        ],
    },
    {
        label: "data & AWS",
        items: ["PySpark", "AWS Glue", "S3", "Parquet", "IAM", "EKS"],
    },
    {
        label: "frontend & mobile",
        items: [
            "React",
            "Next.js",
            "JavaScript/TypeScript",
            "Tailwind CSS",
            "React Flow",
            "Ionic React",
            "Android (Java)",
            "iOS",
            "OpenCV",
        ],
    },
];
