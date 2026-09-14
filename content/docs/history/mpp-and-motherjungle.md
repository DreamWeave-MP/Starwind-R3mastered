---
title: "2023: MPP and motherJungle"
weight: 30
description: The merged-plugin effort moves from editor-maintained artifacts to reproducible builds, dialogue repair, decoupling, and TES3 analysis tooling.
---

# 2023: MPP and motherJungle

The Merged Plugin Project is the point where Starwind integration stops being
only a thing that exists and starts becoming a thing that can be **rebuilt**.

## April 26: public cleanup evidence

The current St4sh page records the
[Starwind Merged Plugin Project](https://dreamweave-mp.github.io/S3ctors-S3cret-St4sh/sw_merged/)
with a project date of **2023-04-26**.

There is an independently public breadcrumb on the same date: Dave's
[`manual_starwind_clean.sh`](https://gist.github.com/magicaldave/51578c8704da0a232f85ecab2ba8dad6)
gist was last active **April 26, 2023** and describes itself as a script to
manually clean Starwind plugins for the "community patch project." Its own
comments still require manual editor work, custom planet regions, TES3CMD
cleanup, and explicit removal of Construction Set debris.

This is useful evidence precisely because the names were not yet cleanly
separated. It shows a live cleanup/merge effort before the later repository
boundaries made MPP and CPP look like tidy products.

## April 30: motherJungle begins

The first motherJungle commit is public:

- [`788b84a`](https://github.com/DreamWeave-MP/motherJungle/commit/788b84aca1d68997c52f6e7fb86857ae26dcff47) — 2023-04-30 — `Add: Initial commit for the build script`.

The first line after the shebang is historically delicious:

```text
# Master build script for Starwind DE
```

No surviving source in that commit expands `DE`, so this documentation does
**not** claim it already meant "Definitive Edition." It does prove that a
`Starwind DE` integrated-build idea existed in the first motherJungle commit.

The script's input corpus is already far beyond a two-ESM merge. It names the
Starwind 3.1 release plus community material such as Starwind Enhanced, Better
Bodies, Planet Replacer, player homes, Champion of Taris, Pazaak Champion,
Dark Apprentice, Death Troopers, numerous companions, The Siddah Ca Way,
Defend Sandriver, Sabers Plus, and Improved Kolto Tanks.

The script then:

- extracts archives;
- normalizes path case for Linux;
- overlays asset directories;
- runs manual Starwind cleanup;
- generates exterior-cell data;
- removes TES3CMD backup debris;
- continues into plugin-building stages.

The conceptual change is more important than the exact shell commands:

> **StarwindServer maintained an integrated Starwind artifact. motherJungle encoded how to reproduce one.**

## May: dialogue becomes a first-class problem

Dialogue repair appears immediately:

- [`a8f47d2`](https://github.com/DreamWeave-MP/motherJungle/commit/a8f47d2f1ae9f205f21ff8e068e0d58875af22b2) — May 9 — adds source for dialogue patches.
- [`696a882`](https://github.com/DreamWeave-MP/motherJungle/commit/696a88271cc3f506e8fbbf8bc00cd0ed7c25e1ac) — May 9 — "actually" adds the dialogue-fixer source.

That work becomes the `deadDiagFix` lineage. The private StarwindServer history
later records the merged plugin being processed by `deadDiagFix` on May 16.

This is one of the longest-lived technical threads in R3mastered. The 2026
build still requires dialogue archaeology; the difference is that the modern
pipeline reconstructs effective dialogue order and liveness rather than relying
on one-off cleanup alone.

## July: motherJungle stops being just a build script

The repository becomes a TES3 surgery toolbox.

- [`e14af8c`](https://github.com/DreamWeave-MP/motherJungle/commit/e14af8c8046c2438583097870b32206024e31d20) — July 9 — adds a decoupling script, container/static conversion, and an index dumper.
- [`f99d51a`](https://github.com/DreamWeave-MP/motherJungle/commit/f99d51a019244030dda364ea3abaab001908cdde) — July 17 — rewrites the merchant/index tooling around plugin-wide JSON analysis and merged inventories.
- [`900d0ff`](https://github.com/DreamWeave-MP/motherJungle/commit/900d0ffade9a391560cf27249dab0dbfcec2dab2) — July 19 — adds multithreading and container support.
- [`23e38f1`](https://github.com/DreamWeave-MP/motherJungle/commit/23e38f189a3f8868af698eeaca5f3a8cd516ef21) — August 1 — switches BSA generation to BSArch.

Several later systems are visible here in embryonic form:

- master/dependency decoupling;
- conversion of problematic record classes;
- generated merchant/container data for the server;
- build-time TES3 analysis feeding runtime TSI behavior.

## 2024: motherJungle becomes a component

As Makron and Starwind-Builder arrive, motherJungle sheds the old monolithic
build role and increasingly supplies specialized tools:

- [`45cafc6`](https://github.com/DreamWeave-MP/motherJungle/commit/45cafc621b7b9017814b57bb375a57f0707a0313) — March 4 — removes the old build.
- [`f20f13c`](https://github.com/DreamWeave-MP/motherJungle/commit/f20f13c6658c428bb4133cba1d24112da78fcbf1) — March 4 — updates `addVanillaRefs`.
- [`7c7b786`](https://github.com/DreamWeave-MP/motherJungle/commit/7c7b786a2eb04ee3ae8cc55e90b3ece883713163) — March 5 — adds a CRC generator.
- [`fc33087`](https://github.com/DreamWeave-MP/motherJungle/commit/fc330876a2ee025848a0c6abf86a0c671ad0a81a) — April 4 — adds CI.
- [`a722163`](https://github.com/DreamWeave-MP/motherJungle/commit/a722163167cd539180d48914a3989d02e11e2e52) — April 4 — adds `bookPatcher`.

By this point motherJungle is best understood as the specialized transformation
and analysis layer underneath the larger build forge.

## The long arc: 2023 → 2026

The same repository later receives the modern master-decoupling and dialogue
work:

- [`9120e55`](https://github.com/DreamWeave-MP/motherJungle/commit/9120e555deb0feb7cceba23fa9ce27c7b5e40283) — 2026-09-13 — recursive dependency resolution.
- [`39f24ee`](https://github.com/DreamWeave-MP/motherJungle/commit/39f24ee9f1ed5365fb66742eefc5e4a5295371de) — reconstructs correct dialogue sequences from the vanilla ESMs.
- [`b5ec24f`](https://github.com/DreamWeave-MP/motherJungle/commit/b5ec24f8a206d1b0aee717cf8778993f8e24e767) — prunes unused vanilla dialogue.
- [`370f089`](https://github.com/DreamWeave-MP/motherJungle/commit/370f0896214f97268dde490b739adaabd04b96e2) — stops serializing truly dead INFOs.
- [`6d1eea2`](https://github.com/DreamWeave-MP/motherJungle/commit/6d1eea21ce1409938fd4fdaf0f08e636ec88b2a4) — tracks actor liveness and skips deleted actors.
- [`788557e`](https://github.com/DreamWeave-MP/motherJungle/commit/788557e29dda16829857734135af0fe031db57cd) — further narrows dialogue resurrection.

The direct continuity is why motherJungle belongs in R3mastered's history rather
than being treated as an obsolete predecessor: **the 2026 solution is still
using the repository that began by shell-scripting the 2023 merge, but the
problem has evolved from file combination into database reconstruction.**

[Next: the normal-map crash and CPP →](../normal-map-crash-and-cpp/)
