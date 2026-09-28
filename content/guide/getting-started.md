---
title: "Using the Game Guide"
description: "How to read the record-derived walkthroughs, spoiler policy, verification status, and QA references."
weight: 1
extra:
  kind: guide
---

The Definitive guide is generated from the same `Star_Data.omwaddon` + `Starwind.omwaddon` pair used for release validation. It is **not** a generic Morrowind walkthrough and it does not fill gaps with assumptions about vanilla behavior.

## Verification status

Quest pages initially carry a **record-derived** status. That means journal text, journal indices, dialogue speakers, cells, result scripts, attached scripts, items and conditions come from the current plugin records, but the prose has not necessarily been verified by physically playing the quest from start to finish.

During the release playtest, pages should be updated when the game proves something the static records could not:

- exact route through a cell;
- prerequisite that is indirect rather than encoded in the starting INFO;
- optional vs mandatory objectives;
- disposition, faction rank or time-of-day requirements;
- rewards handed out indirectly;
- mutually exclusive choices;
- bugs, workarounds or intentionally odd behavior.

## Spoilers

The guide is a walkthrough and therefore contains spoilers. The top of each quest page gives a concise route; detailed journal text and implementation evidence live farther down the page.

## When the guide says a stage is unresolved

Some journal entries have no literal `Journal <quest> <index>` setter in the parsed dialogue result scripts or MWScript. That does not automatically mean the stage is broken. It may be:

- a developer note;
- a branch reached indirectly;
- state written by code outside the patterns currently parsed;
- a historical/unused journal entry.

Those entries are marked for playtest verification instead of receiving invented instructions.

## Technical reference

The **Technical / QA reference** at the bottom of each quest page preserves the exact evidence used to write the walkthrough. It exists for maintainers, playtesters and modders and is intentionally much more detailed than the public-facing steps.

Forcing journal indices from the console is useful for diagnosis, but it does **not** replace testing the dialogue/script that normally advances the quest.
