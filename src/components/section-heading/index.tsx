import {Reveal} from "@/components/reveal";

type SectionHeadingProps = {
    index: string;
    title: string;
    /** Optional lead paragraph under the heading; tightens the heading's spacing. */
    subtitle?: string;
};

export function SectionHeading({index, title, subtitle}: SectionHeadingProps) {
    return (
        <>
            <Reveal
                className={`flex items-baseline gap-[14px] ${subtitle ? "mb-2.5" : "mb-[44px]"}`}
            >
                <span className="font-mono text-[15px] text-accent">{index}</span>
                <h2 className="text-[clamp(28px,4vw,42px)] font-semibold tracking-[-0.02em]">
                    {title}
                </h2>
            </Reveal>

            {subtitle && (
                <Reveal as="p" className="mb-3 max-w-[620px] text-[15.5px] text-dim">
                    {subtitle}
                </Reveal>
            )}
        </>
    );
}
