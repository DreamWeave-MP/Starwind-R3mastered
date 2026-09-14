---
title: "2024: Makron, Builder, and Naboo"
weight: 50
description: Starwind integration becomes a reproducible CI/deployment forge, moves into Modding-OpenMW, and absorbs TSI-first content such as Naboo.
---

# 2024: Makron, Builder, and Naboo

March 2024 is the point where the motherJungle idea becomes infrastructure.
Two repositories are born within hours of one another: **Makron**, the build
environment, and **Starwind-Builder**, the project-specific forge.

## March 5: Makron

The public [Makron repository](https://github.com/DreamWeave-MP/makron) begins:

- [`9443f05a0e73ce6ad27458a51d342edf2a44b0c5`](https://github.com/DreamWeave-MP/makron/commit/9443f05a0e73ce6ad27458a51d342edf2a44b0c5) — **2024-03-05 01:05 -06:00** — `Initial commit`.

The repository's README explains its purpose directly. Makron is derived from
Modding-OpenMW's `mockmw`, but customized around Starwind/TrenchBroom tooling.
Its rationale separates two products of the build:

1. cleaned/merged Starwind plugins for ordinary play;
2. multiplayer-specific patches produced separately at build time.

The README explicitly frames the goal as making merged-plugin development
**more reproducible**.

**Evidence status:** Makron is publicly available at
<https://github.com/DreamWeave-MP/makron>. Its historical GitLab namespace is
visible in its CI (`modding-openmw/makron`), and the repository history is now
linked directly where relevant.

## March 5: Starwind-Builder follows two hours later

The public Starwind-Builder history begins:

- [`b326cb7`](https://github.com/DreamWeave-MP/Starwind-Builder/commit/b326cb77f98cf11fa9ce0240caf4cdb1a3945920) — **03:29** — `Initial commit, first build of season 3`.
- [`8969fea`](https://github.com/DreamWeave-MP/Starwind-Builder/commit/8969fea8c7dc4b8af71abd1b548a406a3c59a1cd) — **03:35** — switches to Makron 0.0.2.

The initial GitLab CI already uses a Makron image and builds the Starwind
plugin as an artifact. The architecture is therefore present from the first
hours: **environment in Makron, project policy/content in Builder**.

## March 6–7: CPP and TSI deployment move into the forge

Two commits rapidly expand Builder beyond plugin merging:

- [`7c6e5bd`](https://github.com/DreamWeave-MP/Starwind-Builder/commit/7c6e5bda6e4b28243ef5478b8ffe5d232903e609) — March 6 — adds the CPP job and crash-resistant normal-map assets.
- [`7bb7ba3`](https://github.com/DreamWeave-MP/Starwind-Builder/commit/7bb7ba31da05c3b465021cbdc8f619e6ad1031d6) — March 7 — adds a TES3MP service file and initialization script.

This is the point where "Builder" becomes a better name than "merge repo."
The repository is building content, generating server-facing data, and carrying
deployment/service machinery.

The present public GitHub description still calls
[Starwind-Builder](https://github.com/DreamWeave-MP/Starwind-Builder)
DreamWeave's patching, merging, and deployment forge for **both** the Merged
Plugin Project and TSI.

## March 10: promotion into Modding-OpenMW infrastructure

The migration from Dave's personal GitLab namespace into Modding-OpenMW can be
pinned to exact commits:

- [`d4c5419`](https://github.com/DreamWeave-MP/Starwind-Builder/commit/d4c5419820bfde7301aa6d6730386308c32e4fb8) — 2024-03-10 14:27 -05:00 — `Migrate to modding-openmw, add kTools job`.
- `c3207148ab2ad4f1c980fa45808e9ebb24240ef5` in Makron — 14:39 — `Update image url`.
- [`124bb50`](https://github.com/DreamWeave-MP/Starwind-Builder/commit/124bb5063987574600a196f1647907b8811158a4) — 16:49 — `Switch to modding-openmw namespace`.

This is not a vague "sometime in 2024" institutional move. The build image,
project CI, and service/deployment references change together on March 10.

## Why this architecture mattered

The emerging stack can be summarized as:

```text
motherJungle
    specialized TES3 transformation / analysis tools
             |
             v
Makron
    reproducible containerized toolchain
             |
             v
Starwind-Builder
    source corpus + build policy + patch jobs
             |
      +------+------+
      |             |
      v             v
single-player    TSI/server
artifacts        patches/data/deploy
```

That division is the direct predecessor of R3mastered's preference for
**small, explicit stages with reproducible outputs** rather than one opaque
editor-maintained plugin.

# Naboo: content history without a repository

Naboo is a useful warning against treating Git as the whole history.

### Oral history

According to Dave:

- Naboo was produced specifically for TSI;
- it was intended as a timed server exclusive;
- after an exclusivity period, a single-player version was supposed to be made available;
- there was never an independent Naboo repository.

Most of the Starwind team were content creators rather than software engineers,
so the absence of a Git repository is normal, not evidence that the content did
not have its own development history.

## May 1: first version-controlled integration receipt

Naboo becomes machine-readable **as an integration event** here:

- [`cbbda38`](https://github.com/DreamWeave-MP/Starwind-Builder/commit/cbbda381173d4548b63980d34ac5c097c89c9957) — **2024-05-01** — `FEAT: Merge Naboo!`.

That commit adds a huge `src/naboo.json` representation to Builder.

The immediate follow-ups are exactly the sort of integration failures Builder
was created to make reproducible:

- [`7a783a5`](https://github.com/DreamWeave-MP/Starwind-Builder/commit/7a783a5b7710ce6872181a395554876b102327b8) — reverts accidental lightsaber-script changes from the Naboo merge.
- [`2272121`](https://github.com/DreamWeave-MP/Starwind-Builder/commit/2272121c833ecef8f41322f5d59dfe59e6ca7c89) — **May 2** — reorders Naboo because some objects were being deleted.
- [`54b3f43`](https://github.com/DreamWeave-MP/Starwind-Builder/commit/54b3f439dc4b79dea82c637448e5d257d864ff95) — **June 6** — resaves Naboo as `.omwaddon`.
- [`ac32f2f`](https://github.com/DreamWeave-MP/Starwind-Builder/commit/ac32f2f789dcde67c4ed9a72becedcd816f75eb7) — **June 6** — adds the ship-removal script to the Naboo planet.

The correct historical statement is therefore:

> Naboo's creative development predates its Builder history, but its surviving
> version-controlled **integration history** begins in Starwind-Builder on May
> 1, 2024.

That distinction should remain in R3mastered documentation whenever imported
legacy content lacks its own repository.

[Next: the St4sh as skunkworks →](../st4sh-skunkworks/)
