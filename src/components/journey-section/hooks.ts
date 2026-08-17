import {useEffect, useRef, useState} from "react";

export type TimelineMarker = { year: string; era: string };

/**
 * Drives the timeline's scroll affordances against a fixed "read line" at 42%
 * of the viewport height:
 *   - `fillRef`     — the accent gradient drawn down the spine to the read line.
 *   - `progressRef` — the mini progress bar in the sticky chip.
 *   - `marker`      — {year, era} of the nearest entry above the read line,
 *                     shown in the sticky chip.
 * The fill/progress are written imperatively (per animation frame) so the
 * timeline's cards don't re-render on scroll; only the chip label is stateful.
 * Attach `spineRef` to the element wrapping the entries — each entry must expose
 * `data-year` / `data-era` on a `[data-evwrap]` ancestor.
 */
export function useTimelineProgress(initial: TimelineMarker) {
    const spineRef = useRef<HTMLDivElement>(null);
    const fillRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef<HTMLSpanElement>(null);
    const [marker, setMarker] = useState<TimelineMarker>(initial);

    useEffect(() => {
        const spine = spineRef.current;
        if (!spine) return;

        const wraps = [...spine.querySelectorAll<HTMLElement>("[data-evwrap]")];
        let raf = 0;

        const update = () => {
            raf = 0;
            const rect = spine.getBoundingClientRect();
            const readLine = window.innerHeight * 0.42;
            const height = Math.max(1, rect.height);
            const drawn = Math.min(Math.max(readLine - rect.top, 0), height);

            if (fillRef.current) fillRef.current.style.height = `${drawn}px`;
            if (progressRef.current) {
                progressRef.current.style.width = `${Math.round((drawn / height) * 100)}%`;
            }

            let active: HTMLElement | null = null;
            for (const wrap of wraps) {
                if (wrap.getBoundingClientRect().top <= readLine + 40) active = wrap;
                else break;
            }
            if (active) {
                const year = active.dataset.year ?? "";
                const era = active.dataset.era ?? "";
                setMarker((prev) => (prev.year === year && prev.era === era ? prev : {year, era}));
            }
        };

        const onScroll = () => {
            if (!raf) raf = requestAnimationFrame(update);
        };

        window.addEventListener("scroll", onScroll, {passive: true});
        window.addEventListener("resize", onScroll);
        update();

        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
            if (raf) cancelAnimationFrame(raf);
        };
    }, []);

    return {spineRef, fillRef, progressRef, marker};
}
