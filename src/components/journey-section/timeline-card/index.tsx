"use client";

import {type KeyboardEvent, type MouseEvent, useState} from "react";
import {Reveal} from "@/components/reveal";
import {DEFAULT_MORE_LABEL} from "../constants";
import type {PlacedCard} from "../utils";

/**
 * One expandable event on the spine. The detail (bullets, tags, links) opens on
 * hover where a pointer supports it, and toggles on click / Enter / Space
 * everywhere (the tap path for touch). Hovering the whole row also "lights" the
 * era — the spine dot, connector, and date shift to accent via the `group/ev`
 * scope; the card's own hover state lives in the `group/card` scope.
 */
export function TimelineCard({card}: { card: PlacedCard }) {
    const [open, setOpen] = useState(false);
    const isLeft = card.side === "left";

    const toggle = (e: MouseEvent<HTMLDivElement>) => {
        if ((e.target as HTMLElement).tagName === "A") return;
        setOpen((prev) => !prev);
    };

    const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen((prev) => !prev);
        }
    };

    return (
        <Reveal className="group/ev grid grid-cols-[1fr_64px_1fr] items-start py-3 max-[900px]:grid-cols-[34px_1fr]">
            <div
                className={`relative max-[900px]:col-start-2 ${isLeft ? "col-start-1" : "col-start-3"}`}
            >
                <div
                    className={`absolute top-[34px] h-px w-16 bg-white/[0.12] transition-colors duration-300 group-hover/ev:bg-accent max-[900px]:hidden ${
                        isLeft ? "-right-16" : "-left-16"
                    }`}
                />

                <div
                    tabIndex={0}
                    onClick={toggle}
                    onKeyDown={onKeyDown}
                    className={`group/card cursor-pointer rounded-[14px] border px-6 py-[22px] outline-none transition-[border-color,background-color,box-shadow] duration-300 ${
                        open
                            ? "border-accent/50 bg-accent/[0.035] shadow-[0_18px_50px_-28px_rgba(0,224,138,0.45)]"
                            : "border-white/[0.09] bg-white/[0.015] [@media(hover:hover)]:hover:border-accent/50 [@media(hover:hover)]:hover:bg-accent/[0.035] [@media(hover:hover)]:hover:shadow-[0_18px_50px_-28px_rgba(0,224,138,0.45)]"
                    }`}
                >
                    <div className="mb-3 flex items-center justify-between gap-3">
                        <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-accent">
                            {card.badge}
                        </span>
                        <span
                            className="flex-none font-mono text-[11.5px] text-faint transition-colors duration-300 group-hover/ev:text-accent">
                            {card.dateLabel}
                        </span>
                    </div>

                    <h3 className="mb-[5px] text-xl font-semibold leading-[1.2]">{card.title}</h3>
                    <div className="mb-2.5 text-sm text-accent">{card.sub}</div>
                    <p className="text-[14.5px] leading-[1.55] text-muted">{card.brief}</p>

                    <div
                        className={`grid transition-[grid-template-rows] duration-[420ms] ease-[cubic-bezier(.2,.7,.2,1)] ${
                            open
                                ? "grid-rows-[1fr]"
                                : "grid-rows-[0fr] [@media(hover:hover)]:group-hover/card:grid-rows-[1fr]"
                        }`}
                    >
                        <div className="min-h-0 overflow-hidden">
                            <div className="mt-4 border-t border-white/[0.08] pt-4">
                                <ul className="flex flex-col gap-[9px]">
                                    {card.bullets.map((bullet, idx) => (
                                        <li key={idx} className="flex gap-2.5 text-sm leading-[1.5] text-muted">
                                            <span className="flex-none font-mono text-accent">▸</span>
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>

                                {card.tags.length > 0 && (
                                    <div className="mt-4 flex flex-wrap gap-[7px]">
                                        {card.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded-full border border-white/10 px-[9px] py-1 font-mono text-[11px] text-dim"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {card.links.length > 0 && (
                                    <div className="mt-4 flex flex-wrap gap-4">
                                        {card.links.map((link) => (
                                            <a
                                                key={link.href}
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener"
                                                className="font-mono text-xs text-accent transition-colors hover:text-accent-bright"
                                            >
                                                {link.label} ↗
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div
                        className={`mt-3.5 font-mono text-[11px] text-[#454a45] transition-opacity duration-300 ${
                            open ? "opacity-0" : "[@media(hover:hover)]:group-hover/card:opacity-0"
                        }`}
                    >
                        {card.moreLabel ?? DEFAULT_MORE_LABEL}
                    </div>
                </div>
            </div>

            <div className="col-start-2 row-start-1 grid place-items-center pt-7 max-[900px]:col-start-1">
                <span
                    className="h-[11px] w-[11px] rounded-full border-2 border-background bg-[#3a4440] shadow-[0_0_0_3px_#0a0b0a] transition-transform duration-300 group-hover/ev:scale-[1.75] group-hover/ev:shadow-[0_0_18px_rgba(0,224,138,0.9)]"/>
            </div>
        </Reveal>
    );
}
