import {type EventCard, type Milestone, type TimelineEntry} from "./constants";

/** A milestone, ready to render — no side placement needed. */
export type PlacedMilestone = Milestone & { isMilestone: true };

/** A card with its resolved spine side (cards alternate left / right). */
export type PlacedCard = EventCard & { isMilestone: false; side: "left" | "right" };

export type PlacedEntry = PlacedMilestone | PlacedCard;

/**
 * Adds layout info to each entry: milestones pass through untouched, while cards
 * alternate left/right down the spine (independent of the milestones between
 * them, so the zig-zag stays even). Pure — safe to call at module scope.
 */
export function buildTimeline(entries: TimelineEntry[]): PlacedEntry[] {
    let cardIndex = 0;
    return entries.map((entry) => {
        if (entry.kind === "milestone") {
            return {...entry, isMilestone: true};
        }
        const side = cardIndex % 2 === 0 ? "left" : "right";
        cardIndex += 1;
        return {...entry, isMilestone: false, side};
    });
}
