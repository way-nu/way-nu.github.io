export type Stat = {
    pre: string;
    target: number;
    suffix: string;
    label: string;
};

export const STATS: Stat[] = [
    {pre: "", target: 1, suffix: "M+", label: "users on a platform I built"},
    {pre: "", target: 500, suffix: "+", label: "live production workflows I scaled"},
    {pre: "", target: 4, suffix: "TB", label: "processed for $250 on AWS"},
    {pre: "", target: 85, suffix: "%", label: "less manual testing via E2E in CI"},
];
