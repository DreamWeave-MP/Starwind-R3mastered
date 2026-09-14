---
title: Evidence Policy & Terminology
weight: 10
description: How this history distinguishes public Git evidence, private sources, artifacts, oral history, and interpretation.
---

# Evidence Policy & Terminology

The purpose of this history is not merely to tell a good story. It is to make
that story **auditable**.

Starwind's history is unusually easy to distort because the creative project,
the multiplayer server, build tooling, public patches, personal skunkworks, and
later DreamWeave projects did not all share one repository. Several current
repositories also inherited older template or upstream Git history. A raw
`git log --reverse` is therefore not a reliable project chronology by itself.

## Evidence classes

These pages use the following evidence classes.

| Label | Meaning | What it can prove |
|---|---|---|
| **Public Git** | A commit in a publicly reachable repository. | Exact author, timestamp, subject, tree/diff, and repository ancestry. |
| **Private primary source** | A preserved Git history or artifact that is not publicly reachable. | The same technical facts as Git, but only to someone with the source copy. No fake public URL is supplied. |
| **Public project source** | Nexus, Modding-OpenMW, OpenMW issue/release pages, St4sh pages, etc. | Published descriptions, release dates, project metadata, and externally visible status. |
| **Artifact evidence** | A surviving plugin, JSON dump, readme, generated database, or release artifact. | What existed in that artifact; usually not *why* or exactly when it was authored. |
| **Oral history** | Recollection from Dave, Rickoff, or another participant. | Intent, workflow, social context, and events not preserved elsewhere. It remains attributed as recollection. |
| **Interpretation** | A conclusion drawn by comparing sources. | A useful model of lineage—not a substitute for a primary source. |

## Rules used in this history

1. **Public commits get direct commit links.** A reader should be able to inspect the exact diff behind a claim.
2. **Private commits get exact hashes, dates, authors, and subjects, but no invented URL.** This primarily applies to the supplied `StarwindServer` history.
3. **Repository creation is not inferred from inherited ancestry.** The St4sh and DreamScripts contain older upstream/template history; those older commits are not described as the birth of those DreamWeave projects.
4. **Content history is not equated with Git history.** Most members of the Starwind content team were not software engineers and did not maintain repositories. Naboo, for example, had no independent repository.
5. **A release-page date is described as a release-page date.** It is not silently transformed into a development start date.
6. **Commit subjects are receipts, not complete explanations.** Where a conclusion depends on the diff or broader sequence, the text says so.
7. **Oral history stays oral history even when it is plausible.** For example, the supplied account that Rickoff built the early integrated Starwind plugin by hand in TESCS fits the binary-plugin commit pattern, but Git does not prove which editor produced each revision.
8. **Historical naming is preserved literally.** A 2023 script calls itself `Starwind DE`; no surviving source in that commit expands `DE`, so this documentation does not retroactively assert that it meant "Definitive Edition."

## Scope boundary: Starwind versus Starwind engineering

The [Starwind v3.1 Nexus page](https://www.nexusmods.com/morrowind/mods/48909)
credits **The Starwind Team** and records the v3.1 upload on March 18, 2023.
That project obviously predates every engineering repository described here.

This history begins where durable engineering/integration provenance becomes
available. It does **not** claim that Starwind itself began with
`StarwindServer`, motherJungle, or any DreamWeave repository.

## Terminology

### TSI

**The Starwind Initiative**, the TES3MP/DreamWeave multiplayer environment that
acted as a persistent-world integration test for Starwind.

### MPP

**Starwind Merged Plugin Project**. The current St4sh project page records the
project date as [2023-04-26](https://dreamweave-mp.github.io/S3ctors-S3cret-St4sh/sw_merged/).
The earliest motherJungle Git commit follows on April 30.

### CPP / SW_CPP

**Starwind Community Patch Project**. The current St4sh page records
[2023-07-19](https://dreamweave-mp.github.io/S3ctors-S3cret-St4sh/sw_cpp/) as
its project date, while public and Git evidence also exposes earlier cleanup
work and later milestones. There is therefore no single source that should be
misrepresented as "the one true birth commit."

### SWAMP / SW4

Historical names used in Starwind-Builder for the 2025 OpenMW-Lua
modernization experiments. The implementation later becomes most recognizable
under the `Scripts/SW4` tree.

### St4sh

**S3ctor's S3cret St4sh**: personal mod/release infrastructure that also served
as a Starwind skunkworks for a period.

### R3mastered

The 2026 project boundary that finally brings the long-running integration,
patching, master-decoupling, asset, and OpenMW-Lua modernization work together.
The repository is new; the engineering lineage is not.
