---
title: Project History
description: Auditable software archaeology for the Starwind engineering lineages that converge in R3mastered.
template: docs/section.html
page_template: docs/page.html
sort_by: weight
weight: 10

extra:
  kind: guide
---

# Project History

**Starwind: R3mastered did not begin in 2026.** The repository did.

The project inherits several distinct engineering lineages that grew around
Starwind and The Starwind Initiative (TSI): a manually integrated multiplayer
build, the Merged Plugin Project, motherJungle's build tooling, the Community
Patch Project, Makron and Starwind-Builder, the St4sh skunkworks, OpenMW-Lua
modernization experiments, H3lp Yours3lf and T4rg3t5, and the later
DreamScripts server work.

These pages reconstruct that history from the surviving evidence and make the
source trail part of the project itself.

## Recommended reading order

1. **[Evidence policy & terminology](./evidence-policy/)** — what each kind of receipt can and cannot prove.
2. **[2023: StarwindServer and TSI](./starwindserver-and-tsi/)** — the earliest preserved engineering repository in this lineage.
3. **[2023: MPP and motherJungle](./mpp-and-motherjungle/)** — the shift from maintaining a merged artifact to reproducing one.
4. **[The normal-map crash and CPP](./normal-map-crash-and-cpp/)** — the engine/content failure that turned multiplayer discoveries into a public patch program.
5. **[2024: Makron, Builder, and Naboo](./makron-builder-and-naboo/)** — reproducible CI, deployment, and server-first content integration.
6. **[The St4sh as skunkworks](./st4sh-skunkworks/)** — personal release infrastructure becomes the first surviving Starwind OpenMW-Lua laboratory.
7. **[2025: the SW4 modernization burst](./sw4-modernization/)** — freighters, mounts, blasters, controls, targeting, UI, and runtime migration.
8. **[H3, T4, and the systems that escaped](./h3-t4-lineage/)** — cross-pollination between the Starwind experiments and reusable OpenMW projects.
9. **[DreamWeave migration and DreamScripts](./dreamweave-and-dreamscripts/)** — GitLab-to-GitHub migration and the server lineage returning in a new architecture.
10. **[2026: MPP becomes R3mastered](./r3mastered-convergence/)** — master decoupling, dialogue archaeology, asset modernization, and a new project boundary.
11. **[Chronology](./chronology/)** — dense date/commit index.
12. **[Source ledger](./source-ledger/)** — repositories, public pages, private evidence, and their audit status.

## The short version

A useful high-level family tree is:

```text
Original Starwind / Remastered / community content
                    |
                    v
          StarwindServer / TSI (2023)
          manual integration + server fixes
                    |
          +---------+---------------------------+
          |                                     |
          v                                     |
    MPP + motherJungle                         |
    reproducible build + TES3 surgery          |
          |                                     |
          +--> CPP / compatibility fixes        |
          |                                     |
          v                                     |
    Makron + Starwind-Builder (2024)            |
    CI + deployment + TSI integration           |
          |                                     |
          +--> Naboo integration                |
          |                                     |
          v                                     |
       St4sh skunkworks                         |
       first surviving Starwind Lua rewrite     |
          |                                     |
          +-------------> SW4 modernization <---+
                           May 2025
                              |
                +-------------+-------------+
                |                           |
                v                           v
          H3 / T4 descendants        buried Starwind systems
                |                           |
                +-------------+-------------+
                              |
 StarwindServer ideas --> DreamScripts (2026)
                              |
 motherJungle + CPP + Builder + St4sh + H3/T4
                              |
                              v
                    STARWIND: R3MASTERED
```

This diagram is a **lineage model**, not a claim that every later project is a
literal fork of the earlier one. The detailed pages separate direct Git
ancestry, code archaeology, public release history, and interpretation.
