import {Reveal} from "@/components/reveal";
import type {PlacedMilestone} from "../utils";

/**
 * A punctuation marker on the spine: a pulsing accent dot with a short label,
 * for turning points that don't warrant a full card. Collapses to a left-rail
 * dot + label on mobile.
 */
export function MilestoneRow({milestone}: { milestone: PlacedMilestone }) {
    return (
        <Reveal className="grid grid-cols-[1fr_64px_1fr] items-center py-[18px] max-[900px]:grid-cols-[34px_1fr]">
            <span
                className="col-start-1 row-start-1 h-px bg-gradient-to-r from-transparent to-accent/[0.28] max-[900px]:hidden"/>
            <span
                className="col-start-2 row-start-1 grid h-[26px] w-[26px] animate-pulse-ring place-items-center justify-self-center rounded-full border border-accent/55 bg-background max-[900px]:col-start-1">
                <span className="h-[7px] w-[7px] rounded-full bg-accent"/>
            </span>
            <span
                className="col-start-3 row-start-1 flex flex-col gap-0.5 pl-4 max-[900px]:col-start-2">
                <span className="font-mono text-[13px] tracking-[0.01em] text-accent">
                    {milestone.title}
                </span>
                <span className="font-mono text-[11.5px] text-faint">{milestone.dateLabel}</span>
            </span>
        </Reveal>
    );
}
