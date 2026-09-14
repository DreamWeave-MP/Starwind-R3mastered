---
title: The Normal-Map Crash and CPP
weight: 40
description: How a Starwind mesh/OpenMW failure became an upstream engine report, a TES3MP compatibility fix, and eventually the Community Patch Project.
---

# The Normal-Map Crash and CPP

The Community Patch Project is not just a bag of Starwind fixes. Its origin is
a particularly useful example of the feedback loop between **TSI testing,
Starwind content, OpenMW engine behavior, and public single-player fixes**.

## The trigger: normal maps expose broken geometry

[`Normal Maps for Everything`](https://www.nexusmods.com/morrowind/mods/52567)
was originally uploaded on **March 31, 2023** and its changelog records Starwind
normal maps among the packages added during April 2023.

Once Starwind assets were used with those normal maps, some combinations could
crash OpenMW/TES3MP.

The public upstream report is
[OpenMW #7353 — "Normal Map Crashes with Starwind Assets in TES3MP and OpenMW"](https://gitlab.com/OpenMW/openmw/-/issues/7353).
Its reproduction information is unusually specific:

- Starwind + Normal Maps for Everything;
- `buildtall1.nif` as an immediate reproduction target;
- multiple normal-map-generation tools tested;
- crashes correlated with specific mesh/normal combinations;
- enabling/disabling normal maps used to confirm the relationship;
- UV-related warnings visible elsewhere in the affected asset set.

This was not merely "Starwind has bad meshes" and not merely "OpenMW has a
bug." Both facts mattered.

## The upstream engine fix

OpenMW's release history records #7353 as:

> Fixed a crash when normal maps are assigned to geometry with no UV

See the [OpenMW releases page](https://gitlab.com/OpenMW/openmw/-/releases) and
the [OpenMW 0.49.0 release announcement](https://openmw.org/2025/openmw-0-49-0-released/).

That engine correction solves the crash class for modern OpenMW. It did not
help the existing TES3MP deployment, which remained tied to an older OpenMW
base. The content still needed a compatibility-side answer.

## CPP's own public account

The current [St4sh CPP page](https://dreamweave-mp.github.io/S3ctors-S3cret-St4sh/sw_cpp/)
says the project was born from exactly this failure: normal maps exposed
Starwind meshes that were broken in a way that also triggered an engine crash.
It records **2023-07-19** as the project date.

The current
[CPP Nexus release](https://www.nexusmods.com/morrowind/mods/58027)
uses the same explanation and credits **Ignatious** for the crash-resistant
TES3MP meshes. The Nexus description also explicitly connects the patch to
"years of testing from the TSI multiplayer community."

Those are **public project-source claims**, not reconstructed interpretation.

## Public distribution chronology

The Modding-OpenMW `Starwind: Modded` changelog supplies another independent
chronology:

- [2023-09-10](https://modding-openmw.com/lists/starwind-modded/changelog) — `Normal Maps for Everything` added to the list.
- [2023-12-22](https://modding-openmw.com/lists/starwind-modded/changelog) — `Starwind Community Patch Project` added.
- [2024-03-09](https://modding-openmw.com/lists/starwind-modded/changelog) — CPP download/data/plugin information updated for a new version.

These dates should not be confused with the project's internal start date.
They prove **modlist adoption**, not first development.

## March 6, 2024: the fix becomes reproducible infrastructure

Starwind-Builder gives the crash fix an exact build-system receipt:

- [`7c6e5bd`](https://github.com/DreamWeave-MP/Starwind-Builder/commit/7c6e5bda6e4b28243ef5478b8ffe5d232903e609) — **2024-03-06** — `Add CPP job including assets to fix crashing normal maps, and simplify build job names`.

That commit adds the CPP build job and the replacement binary meshes used to
avoid the crash on older OpenMW/TES3MP deployments.

The modern CPP Nexus description still points to abbreviated commit
`7c6e5bd` as the fix for normal-map crashes on OpenMW versions earlier than
0.49 / TES3MP. That is an unusually strong public cross-reference between a
release page and the historical Git commit.

## Why CPP expands beyond meshes

The same TSI feedback loop keeps producing fixes:

```text
live multiplayer integration problem
              |
              v
     isolate content/engine cause
              |
      +-------+-------+
      |               |
      v               v
content-side fix   upstream report/fix
      |               |
      +-------+-------+
              |
              v
     make fix available to
       all Starwind users
```

By 2026 the [CPP Nexus page](https://www.nexusmods.com/morrowind/mods/58027)
lists fixes for quests, meshes, collision, navmesh generation, mount behavior,
body parts, texture compression, UI assets, animation/log spam, Lua-mod
compatibility, fonts, and more.

That broader scope is not mission drift. It is the mature form of the original
policy:

> **Problems found by operating Starwind in TSI should not remain private
> server hacks when they can improve Starwind for everyone.**

## Historical nuance: MPP and CPP overlap early

The April 26, 2023
[`manual_starwind_clean.sh`](https://gist.github.com/magicaldave/51578c8704da0a232f85ecab2ba8dad6)
gist already calls its cleanup target the "community patch project," while the
current St4sh MPP page also dates MPP to April 26. That is evidence that the
names and responsibilities were still fluid at the beginning.

For R3mastered, the useful distinction is functional rather than mythological:

- **MPP / motherJungle** increasingly owns integration, reconstruction, and dependency architecture.
- **CPP** increasingly owns portable fixes and compatibility improvements that should benefit ordinary Starwind installations too.

[Next: Makron, Builder, and Naboo →](../makron-builder-and-naboo/)
