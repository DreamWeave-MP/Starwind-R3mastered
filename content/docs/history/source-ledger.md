---
title: Source Ledger
weight: 120
description: Repository, issue, release, mod, artifact, and oral-history sources used by the R3mastered historical record.
---

# Source Ledger

This is the source registry for the historical section. The goal is to make it
obvious which statements can be checked on the public web, which require a
preserved repository bundle, and which come from participant recollection.

## Public Git repositories

### motherJungle

- Repository: <https://github.com/DreamWeave-MP/motherJungle>
- Current public description: repository for the Starwind Merged Plugin Project.
- Historical use in these docs: initial reproducible Starwind build, dialogue fixer, early decoupling, merchant/container analysis, 2026 dependency/dialogue/liveness work.
- Commit links are used directly throughout the history pages.

### Starwind-Builder

- Repository: <https://github.com/DreamWeave-MP/Starwind-Builder>
- Current public description: DreamWeave patching, merging, and deployment forge for MPP and TSI.
- Historical use: Makron-backed CI, CPP build, TES3MP service/deploy layer, Modding-OpenMW migration, Naboo integration, 2025 SW4 modernization, GitHub-CI migration.

### S3ctor's S3cret St4sh

- Repository: <https://github.com/DreamWeave-MP/S3ctors-S3cret-St4sh>
- Site: <https://dreamweave-mp.github.io/S3ctors-S3cret-St4sh/>
- Historical use: MPP/CPP public project metadata, St4sh transformation, first surviving Starwind Lua rewrite, s3lf/H3, T4, 2026 Definitive builder/docs.
- Caution: repository contains inherited/template history; oldest Git commit is not treated as St4sh's creation date.

### DreamScripts

- Repository: <https://github.com/DreamWeave-MP/DreamScripts>
- Historical use: Dream-Dice work, 2026 OpenMW-style TES3MP loader, `fixFollowAI`, Rickoff bag-script port.
- Caution: repository graph inherits old CoreScripts/TES3MP history. The public README still says `CoreScripts`; inherited upstream commits are not described as DreamWeave project history.

## Public project/release sources

### Starwind v3.1

- Nexus: <https://www.nexusmods.com/morrowind/mods/48909>
- Used for: public Starwind v3.1 release record, Starwind Team attribution, March 18 2023 v3.1 upload date.

### Normal Maps for Everything

- Nexus: <https://www.nexusmods.com/morrowind/mods/52567>
- Used for: public release dates and Starwind normal-map package chronology.

### OpenMW #7353

- Issue: <https://gitlab.com/OpenMW/openmw/-/issues/7353>
- Title: `Normal Map Crashes with Starwind Assets in TES3MP and OpenMW`
- Used for: reproduction details, affected mesh example, normal-map correlation, UV-warning context.

### OpenMW release history

- Releases: <https://gitlab.com/OpenMW/openmw/-/releases>
- 0.49 announcement: <https://openmw.org/2025/openmw-0-49-0-released/>
- Used for: upstream resolution of #7353 as the no-UV + normal-map crash.

### Starwind Community Patch Project

- St4sh: <https://dreamweave-mp.github.io/S3ctors-S3cret-St4sh/sw_cpp/>
- Nexus: <https://www.nexusmods.com/morrowind/mods/58027>
- Used for: CPP's own origin story, public project date, TSI testing rationale, Ignatious mesh credit, and later patch scope.

### Starwind Merged Plugin Project

- St4sh: <https://dreamweave-mp.github.io/S3ctors-S3cret-St4sh/sw_merged/>
- Used for: public MPP project date and immediate pre-R3 technical documentation.

### Starwind: Modded changelog

- Modding-OpenMW: <https://modding-openmw.com/lists/starwind-modded/changelog>
- Used for: independent dates for Normal Maps for Everything and CPP adoption/update in the public modlist.

### H3lp Yours3lf

- Nexus: <https://www.nexusmods.com/morrowind/mods/56417>
- Used for: public H3 release date/description and confirmation that H3 is a reusable OpenMW-Lua helper project rather than a Starwind-only component.

### T4rg3t5

- Nexus: <https://www.nexusmods.com/morrowind/mods/57703>
- Used for: public standalone targeting-project date/description and H3 dependency.

## Public precursor source

### `manual_starwind_clean.sh`

- Gist: <https://gist.github.com/magicaldave/51578c8704da0a232f85ecab2ba8dad6>
- Last active: 2023-04-26.
- Used for: direct public evidence of pre-motherJungle Starwind cleanup work and historically overlapping "community patch project" terminology.

## Supplied Git histories without verified public commit endpoints

### StarwindServer

- Evidence: supplied full Git bundle.
- Public status: private/non-public according to project owner.
- Earliest commit: `1bf98e0d4856f9b53f16993be9947cffeac8b72a`, 2023-03-31, Rickoff.
- Used for: earliest preserved TSI engineering chronology, reset/container systems, FixFollowAI, quest/difficulty fixes, integrated Starwind plugin history, deadDiagFix application.
- Audit method: clone the preserved bundle and inspect the exact hashes listed in the history pages.

Example:

```bash
git clone StarwindServer.bundle StarwindServer
cd StarwindServer
git show 1bf98e0d4856f9b53f16993be9947cffeac8b72a
git show 85451fc21534e281639852f21ceff2bd851e6fec
```

### Makron

- Evidence: supplied full Git bundle.
- Earliest commit: `9443f05a0e73ce6ad27458a51d342edf2a44b0c5`, 2024-03-05 01:05 -06:00.
- Historical namespace evidence: CI references `modding-openmw/makron`; later commits add GitHub CI and DreamWeave dependency URLs.
- Used for: reproducible build-environment chronology and the single-player/multiplayer split rationale.
- Direct public commit links are intentionally omitted here unless/until a currently public Makron repository URL is verified.

## Supplied content/artifact evidence

The archaeology also used preserved Starwind data supplied to the project,
including:

- `StarwindRemasteredV1.15.json`
- `StarwindRemasteredPatch.json`
- `Starwind Enhanced.json`
- `Starwind Community Patch Project.json`
- `StarwindMPRecords.json`
- `naboo.json`
- the surviving `StarwindServer` content tree/readmes
- the SW4 exhumation/audit notes

These sources are useful for verifying **what exists in the content**, but they
do not receive public URLs unless the corresponding artifact is actually
published there.

## Oral-history register

The following claims are intentionally recorded as participant recollection
unless a stronger surviving source is later found:

1. Rickoff's original integrated Starwind merge was built by hand in TESCS.
2. Most other Starwind team members were content creators rather than engineers and did not maintain Git repositories.
3. Naboo never had its own repository.
4. Naboo was made for TSI as a planned timed exclusive with an eventual single-player release intended.
5. `StarwindServer` was the only centralized early TSI repository used by Rickoff and Dave.
6. Hosting Starwind/TSI content was one of the major motivations for building the St4sh.
7. The St4sh served as a Starwind skunkworks; Starwind-Builder later served that role as well.
8. The May 2025 Lua modernization burst was partly a deliberate response to a community member implying that Starwind / the Modding-OpenMW Starwind list was not being properly maintained.
9. DreamScripts was intended for deployment on Dave's server but was never actually deployed.
10. `Starwind: R3mastered` was chosen as the new project identity on 2026-09-14.

These are worth preserving precisely because Git cannot encode motive, social
context, missing repositories, or abandoned deployment plans.

## Source-maintenance rule

When a new historical claim enters this documentation, add at least one of:

- direct public commit link;
- public issue/release/project link;
- exact private commit hash plus repository name;
- explicit artifact filename/reference;
- explicit `Oral history:` attribution.

If none exists, phrase the claim as uncertainty or interpretation rather than
fact.
