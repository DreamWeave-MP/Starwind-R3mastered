---
title: "2026: MPP Becomes R3mastered"
weight: 100
description: The old merge project reaches master decoupling and dialogue reconstruction, then converges with CPP, asset work, and Lua modernization under a new repository.
---

# 2026: MPP Becomes R3mastered

By September 2026 the phrase "Merged Plugin Project" no longer describes the
scope of the work very well.

The current project is simultaneously dealing with:

- content integration;
- dependency/master decoupling;
- dialogue reconstruction;
- record liveness/provenance;
- CPP fixes;
- Naboo and other community content;
- asset optimization and compatibility;
- OpenMW-native Lua modernization;
- long-term documentation and reproducibility.

R3mastered is the point where those lines become one explicit project boundary.

Approximately 42 months passed between the first preserved StarwindServer
commit on 2023-03-31 and the merged-plugin rework and creation of this repository
on 2026-09-13–14.

## September 13: motherJungle attacks the hard version of decoupling

The 2026 motherJungle sequence is the mature descendant of the original 2023
cleanup/decoupling work:

- [`9120e55`](https://github.com/DreamWeave-MP/motherJungle/commit/9120e555deb0feb7cceba23fa9ce27c7b5e40283) — pull recursive dependencies.
- [`39f24ee`](https://github.com/DreamWeave-MP/motherJungle/commit/39f24ee9f1ed5365fb66742eefc5e4a5295371de) — rebuild correct dialogue sequences from the vanilla ESMs.
- [`b5ec24f`](https://github.com/DreamWeave-MP/motherJungle/commit/b5ec24f8a206d1b0aee717cf8778993f8e24e767) — prune unused vanilla dialogue.
- [`9397e02`](https://github.com/DreamWeave-MP/motherJungle/commit/9397e02db0bc73b0207d38dba00b7b1f866e76d8) — narrow dialogue-liveness validation.
- [`370f089`](https://github.com/DreamWeave-MP/motherJungle/commit/370f0896214f97268dde490b739adaabd04b96e2) — do not serialize truly dead INFOs.
- [`6d3bd26`](https://github.com/DreamWeave-MP/motherJungle/commit/6d3bd26f24105628b5e24da2921a786cfb42a034) — do not materialize actors that will not be used.
- [`6d1eea2`](https://github.com/DreamWeave-MP/motherJungle/commit/6d1eea21ce1409938fd4fdaf0f08e636ec88b2a4) — track actor liveness in the Rust parser and skip deleted actors.
- [`788557e`](https://github.com/DreamWeave-MP/motherJungle/commit/788557e29dda16829857734135af0fe031db57cd) — narrow dialogue-record resurrection again.

This is no longer "remove Bethesda masters from the header." It is database
reconstruction: determine which vanilla records are actually required,
reconstruct dialogue semantics correctly, preserve live dependencies, and
avoid resurrecting dead data merely because it existed somewhere upstream.

## September 13: the St4sh Definitive builder becomes a staging point

The St4sh history records the companion work:

- [`f32808bf`](https://github.com/DreamWeave-MP/S3ctors-S3cret-St4sh/commit/f32808bf77ed07d3fab59d7ddf155a21a41b6e94) — adds the `Star_Data` / `Starwind` splitter.
- [`b1e94602`](https://github.com/DreamWeave-MP/S3ctors-S3cret-St4sh/commit/b1e9460284c52d5487f1144cdb436a804cb34a64) — adds a dedicated "definitive edition" builder including Bing's content, Enhanced, Planet Expansion, Alt Start, CPP, Naboo, Party Hats, and other sources.
- [`31798472`](https://github.com/DreamWeave-MP/S3ctors-S3cret-St4sh/commit/31798472e2f8400ad8433f8fac33b2c83fadada3) — reorganizes the Starwind documentation into the API/reference format that this R3mastered documentation intentionally inherits.
- [`717a31b8`](https://github.com/DreamWeave-MP/S3ctors-S3cret-St4sh/commit/717a31b83b49603557e09f4d397943ebc2acbd88) — tags/records `Starwind Merged V1.0` in the repository history.

The current public
[Starwind Merged Plugin Project page](https://dreamweave-mp.github.io/S3ctors-S3cret-St4sh/sw_merged/)
describes a maintained, masterless Starwind build split into stable data and
content plugins. Those documents are the immediate technical predecessor to
R3mastered's long-term build documentation.

## Asset modernization enters the same project boundary

The current R3mastered work is also auditing the inherited asset corpus rather
than treating meshes/textures/sounds as immutable baggage. That includes:

- mesh optimization and structural cleanup;
- identifying duplicate/vanilla-equivalent assets;
- texture-format/recompression evaluation;
- sound cleanup;
- compatibility with modern OpenMW rendering behavior.

This matters historically because the normal-map saga already demonstrated
that "content assets" can be engine-critical. R3mastered treats assets as part
of the maintained software/content system, not merely files copied beside the
plugin.

## Lua modernization returns from archaeology to product work

The SW4 exhumation also becomes active development again. The current plan is
not to revive the monolith, but to rebuild coherent descendants:

- freighter Lua rewrite;
- KOTOR-style controls;
- automatic blasters;
- mount/speeder controller;
- quick cast;
- runtime record/instance migration where the freighter proves the need.

Where a concept already matured into H3 or T4, R3mastered uses the modern
project instead of copying the fossilized implementation.

## Why a new repository is justified

By this point the project is no longer accurately represented by any one of
its historical containers:

- **StarwindServer** is too server-specific and private.
- **motherJungle** is a transformation/tooling lab, not the whole product.
- **CPP** intentionally remains a portable patch layer.
- **Starwind-Builder** is a forge and deployment system, not a long-term home for every gameplay subsystem.
- **St4sh** is personal publishing/skunkworks infrastructure.
- **H3/T4** are reusable standalone dependencies with broader audiences.

`SW-R3` / **Starwind: R3mastered** becomes the consumer/project repository that
can own the integrated result and its documentation without forcing any of
those older projects to become something they are not.

# What "R3mastered" can mean historically

The name was chosen for style, but the development record supports a useful
three-generation interpretation.

### Generation 1 — hand-integrated Starwind

StarwindServer / early TSI:

- editor-maintained merged artifact;
- server-specific runtime fixes;
- binary integration;
- direct operational patches.

### Generation 2 — reproducibly built Starwind

motherJungle → Makron → Starwind-Builder / CPP:

- build steps encoded as tools/scripts;
- deterministic cleanup;
- generated server databases;
- split single-player/multiplayer outputs;
- CI and deployment automation.

### Generation 3 — OpenMW-native Starwind

St4sh/SW4/H3/T4/DreamWeave → R3mastered:

- modern OpenMW-Lua replacing brittle MWScript where appropriate;
- explicit runtime migration of legacy instances;
- current OpenMW gameplay/UI APIs;
- master decoupling and dialogue reconstruction;
- maintained asset pipeline;
- auditable provenance and durable documentation.

This **generation model is interpretation**, not a historical naming scheme
used by the old repositories. It is included because it accurately explains
why `R3mastered` is more than a spelling gimmick without rewriting the past.

## The project rule going forward

The history suggests one durable principle:

> **Preserve provenance, reproduce the build, upstream or generalize what
> deserves to escape, and do not force future maintainers to rediscover why a
> weird Starwind rule exists.**

That is why this history is part of the repository's first major documentation
commit rather than an external retrospective.

[Next: chronology →](../chronology/)
