---
title: "2023: StarwindServer and TSI"
weight: 20
description: "The earliest preserved engineering repository in the R3mastered lineage: persistent-world fixes, generated databases, and a manually integrated Starwind build."
---

# 2023: StarwindServer and TSI

The earliest preserved Starwind **engineering** repository in the R3mastered
lineage is not motherJungle. It is the private `StarwindServer` repository used
by Rickoff and Dave for TSI.

This distinction only became recoverable after the repository's Git history
was supplied. Earlier filesystem-only snapshots preserved the code but not the
chronology.

## March 31, 2023: the repository opens

The private primary source begins:

| Time | Commit | Author | Subject |
|---|---|---|---|
| 2023-03-31 19:57 +02:00 | `1bf98e0d4856f9b53f16993be9947cffeac8b72a` | Rickoff | `Initial commit` |
| 2023-03-31 19:58 +02:00 | `4d23e61bc9f1ec7647106a8cbc42c57c24c4625b` | Rickoff | `Create InstanciedContainer.lua` |
| 2023-03-31 20:06 +02:00 | `e67cb81db598725359084a8b268ac2392c27a9b6` | Rickoff | `Create ResetServer.lua` |
| 2023-03-31 20:42 -05:00 | `c4c3325eb91a2806af095733273646dcd7b69b12` | magicaldave | `added databases for container data in both StarWind and Vanilla MW` |
| 2023-03-31 20:42 -05:00 | `76e69e0294af4766cb0cde865be94d82344f057e` | magicaldave | container parser for TES3CMD dumps |
| 2023-04-01 04:12 -05:00 | `c1dcdbb11289b355ceea4194325135c79744ebfe` | magicaldave | Morrowind instance database for resets |
| 2023-04-01 04:37 -05:00 | `91ec4c8fc66fb70cd080b4a26c4cf76b0b0b93bf` | magicaldave | instance dumper for TES3CMD CELL dumps |
| 2023-04-01 04:37 -05:00 | `c60a75e7d3815bc2eefb752c0471787dc0cfc7bf` | magicaldave | Starwind instance database |

**Evidence class:** private primary source. `StarwindServer` is not publicly
reachable, so these hashes are intentionally not wrapped in bogus links.

The first evening already establishes the repository's real problem domain:
**persistent multiplayer world state**. Rickoff's initial scripts and Dave's
TES3CMD-derived databases attack the same problem from opposite directions:
runtime recovery/reset logic needs authoritative knowledge of what belongs in
the Starwind/Morrowind world.

## April 2023: server surgery becomes Starwind surgery

The repository quickly expands beyond generic reset infrastructure.

Notable private commits include:

- `5b22e9d` (April 3) — Rickoff, `Fix Duplicate Npc OnActorCellChange`.
- `ca4e87e` (April 13) — Dave corrects Nar Shaddaa door markers and removes duplicate doors.
- `aec253e` (April 14) — Rickoff updates `FixFollowAI.lua`.
- `143919c` (April 23) — Dave adds an initial Endar Spire fix to play the intro cutscene.
- `b480433` (April 23) — Rickoff adds `QuestFix.lua`.
- `a809e8e` (April 23) — Rickoff adds `DynamicDifficulty.lua`.

This is the first durable evidence of the pattern that will later define CPP:
**TSI encounters a Starwind problem under multiplayer conditions, then code or
content is changed to make the game survive it.**

## The integrated Starwind build

By April the repository is also carrying a combined Starwind content build.
The private history records repeated plugin integration and correction:

- `e29f57b` (April 27) merges Starwind Better Heads and notes that its assets must be deployed with the plugin.
- `1523773` (April 28) fixes a merged plugin that had acquired a dependency on itself and repairs ship-interior disable scripts.
- `ce28598` (April 29) integrates custom server script records, fixes Nisav activation, and repairs the player camera after leaving the ship.
- `02089db` (April 30) is labeled `version 5 RC`.
- `599f16f` (May 16) applies `deadDiagFix` to the plugin.
- `85451fc` (June 24) converts the plugin to `.omwaddon`, removes/re-adds dialogue from original plugins, merges Sabers Plus, and updates the Nar Shaddaa customs-door script.
- `7e95f90` (August 12) merges Death Troopers.
- `36f8792` (August 16) merges Better Heads.
- `5cd293d` (August 16) merges Dim-Crucible.

A surviving readme in the supplied server tree describes an integrated set
containing:

```text
StarwindRemasteredV1.15.esm
StarwindRemasteredPatch.esm
Starwind Enhanced.esm
Starwind Endor.esm
Champion of Taris.ESP
Dark Apprentice.ESP
Pazaak Champion.ESP
Starwind Better Bodies.ESP
```

That list is **artifact evidence**: it proves the contents of the surviving
build description, not a universal list of every component ever used on TSI.

## Oral history: Rickoff's TESCS merge

Dave's account is that Rickoff produced the original integrated Starwind merge
by hand in TESCS. The early repository's pattern—binary plugin revisions,
follow-up cleanup commits, self-dependency repair, and hand-integrated content—is
consistent with that description.

It remains **oral history**, because the Git objects do not encode which editor
created every binary revision.

## Why this matters to R3mastered

StarwindServer establishes the first engineering generation:

- keep Starwind running as a persistent multiplayer world;
- repair broken state and AI at runtime;
- generate authoritative data from the plugins;
- integrate community content into one server experience;
- fix whatever the live environment exposes.

The limitation is equally important: the repository preserves an evolving
**artifact and server**, not yet a fully reproducible content build. The next
lineage exists to solve exactly that problem.

[Next: MPP and motherJungle →](../mpp-and-motherjungle/)
