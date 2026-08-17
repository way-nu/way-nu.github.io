export type Stat = {
    pre: string;
    target: number;
    suffix: string;
    label: string;
};

export const STATS: Stat[] = [
    {pre: "", target: 1, suffix: "M+", label: "users on a platform I built"},
    {pre: "₹", target: 8, suffix: "L", label: "revenue in first 18 days"},
    {pre: "", target: 4, suffix: "TB", label: "processed for $250 on AWS"},
    {pre: "", target: 60, suffix: "%", label: "faster SDLC (agentic)"},
];
