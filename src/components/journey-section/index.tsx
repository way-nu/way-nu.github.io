"use client";

import {Reveal} from "@/components/reveal";
import {SectionHeading} from "@/components/section-heading";
import {JOURNEY, TIMELINE} from "./constants";
import {useTimelineProgress} from "./hooks";
import {MilestoneRow} from "./milestone-row";
import {TimelineCard} from "./timeline-card";
import {buildTimeline} from "./utils";

const ENTRIES = buildTimeline(TIMELINE);
const FIRST = TIMELINE[0];

export function JourneySection() {
    const {spineRef, fillRef, progressRef, marker} = useTimelineProgress({
        year: FIRST.year,
        era: FIRST.era,
    });

    return (
        <section
            id="journey"
            className="relative z-[1] mx-auto max-w-[1180px] px-8 pb-10 pt-[60px]"
        >
            <SectionHeading index={JOURNEY.index} title={JOURNEY.title} subtitle={JOURNEY.subtitle}/>

            {/* Sticky era + progress chip that tracks the read line as you scroll. */}
            <div
                className="pointer-events-none sticky top-[104px] z-[15] flex justify-center px-0 pb-1 pt-2.5 sm:top-[68px]">
                <div
                    className="flex items-center gap-[14px] rounded-full border border-white/10 bg-background/[0.88] px-4 py-[9px] backdrop-blur-md">
                    <span className="min-w-[38px] font-mono text-[15px] font-bold text-accent">
                        {marker.year}
                    </span>
                    <span className="whitespace-nowrap font-mono text-xs text-dim">{marker.era}</span>
                    <span className="h-[3px] w-[70px] overflow-hidden rounded-[3px] bg-white/[0.12]">
                        <span
                            ref={progressRef}
                            className="block h-full w-0 bg-accent transition-[width] duration-150 ease-linear"
                        />
                    </span>
                </div>
            </div>

            <div ref={spineRef} className="relative overflow-x-clip pt-6">
                {/* Central spine, drawn in with an accent gradient up to the read line. */}
                <div
                    className="absolute bottom-0 left-1/2 top-0 w-px -translate-x-[0.5px] bg-white/10 max-[900px]:left-[34px]">
                    <div
                        ref={fillRef}
                        className="absolute left-0 top-0 h-0 w-full bg-gradient-to-b from-accent/15 to-accent shadow-[0_0_12px_rgba(0,224,138,0.5)]"
                    />
                    {/* Terminus node capping the bottom of the spine. */}
                    <span
                        className="absolute bottom-0 left-1/2 h-[11px] w-[11px] -translate-x-1/2 translate-y-1/2 rounded-full border-2 border-background bg-[#3a4440] shadow-[0_0_0_3px_#0a0b0a]"/>
                </div>

                {ENTRIES.map((entry) => (
                    <div
                        key={`${entry.title}-${entry.dateLabel}`}
                        data-evwrap
                        data-year={entry.year}
                        data-era={entry.era}
                    >
                        {entry.isMilestone ? (
                            <MilestoneRow milestone={entry}/>
                        ) : (
                            <TimelineCard card={entry}/>
                        )}
                    </div>
                ))}
            </div>

            <Reveal className="flex justify-center pb-2.5 pt-9">
                <span className="font-mono text-xs text-[#454a45]">{JOURNEY.footNote}</span>
            </Reveal>
        </section>
    );
}
