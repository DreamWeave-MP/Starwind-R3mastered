---
title: "Starwind Definitive Game Guide"
description: "Walkthroughs, quest routes, faction guides, and record-backed QA references for Starwind: R3mastered."
template: docs/section.html
page_template: docs/page.html
sort_by: weight

extra:
  docs_root: true
  docs_project_name: "Starwind Definitive"
  docs_short_title: "Game Guide"
  docs_project_path: '@/home/index.md'
  docs_repository_url: https://github.com/DreamWeave-MP/Starwind-R3mastered/tree/main/content/guide
  docs_sidebar_label: "Game Guide"
  kind: game guide
---
Welcome to the **Starwind Definitive** guide. This section turns the current Definitive quest database into a player-facing walkthrough while retaining the exact journal, dialogue, script, item, and cell evidence underneath each page for QA and modding work.

{% callout(kind="note", title="Guide status") %}
This first edition is **record-derived and awaiting full playtest verification**. It is deliberately honest about uncertainty: when the records prove a route, the guide describes it; when a transition is indirect or ambiguous, the page calls that out instead of inventing a solution. During Definitive playtesting, these pages should be edited into the final human-verified walkthrough.
{% end %}

## Start here

- **[Main Quest](./main-quest/)** — the Taris restoration storyline and the first route to verify.
- **[Factions & Careers](./factions-and-careers/)** — Republic, Sith, bounty hunting, GenoHaradan, Hutt, Hunter and related chains.
- **[Naboo](./naboo/)** — formerly server-exclusive content now integrated into the Definitive Edition.
- **[Side Quests](./side-quests/)** — the wider Starwind quest catalog.
- **[Systems & Internal Journals](./systems/)** — QA coverage for journal-backed game systems and state machines.
- **[How to use this guide](./getting-started/)** — spoilers, verification status, and how the technical references map back to the plugins.

## Recommended first playtest

1. Character creation and basic movement/combat/inventory smoke test.
2. Complete the full **Taris main quest** from *Prologue: Before the Storm* through *Chapter 3: Chancellor*.
3. Acquire/use the ship and verify planet travel.
4. Exercise Czerka interactions and at least one Republic and Sith career path.
5. Complete one bounty chain and one GenoHaradan contract chain.
6. Play Naboo end-to-end.
7. Work outward through Bing, Enhanced, PlanExp and the broader side-quest catalog.

## What a quest page contains

Every quest page is split into two layers:

- **Player guide:** where to go, who to speak with, what the expected journal update is, known rewards, branches and destinations.
- **Technical / QA reference:** exact journal indices, INFO IDs, dialogue conditions, MWScript/result-script snippets, attached records, cell placement, item IDs and the generated test checklist.

The technical layer is collapsed by default so normal players do not have to read an archaeological dump to finish a quest.

## Coverage

This guide currently indexes **226 Journal records**: **195 named quests** and **31 unnamed/internal state journals**. Pages are searchable from the guide header.
