---
title: The St4sh as Skunkworks
weight: 60
description: How S3ctor's S3cret St4sh grew from release infrastructure into a Starwind experimentation space and hosted the first surviving Lua freighter rewrite.
---

# The St4sh as Skunkworks

S3ctor's S3cret St4sh eventually became both a publishing system and an
experimentation space for Starwind/TSI work. Its Git history needs careful
reading because the repository inherited older template ancestry.

## Do not date the St4sh by its oldest commit

The current
[St4sh repository](https://github.com/DreamWeave-MP/S3ctors-S3cret-St4sh)
contains inherited history from earlier site/template work. Those commits are
part of its Git graph but not all of them are evidence that "the St4sh existed"
at that date.

The recognizable Dave-driven transformation on the surviving main line begins
in May 2024. Two useful markers are:

- [`7a368503`](https://github.com/DreamWeave-MP/S3ctors-S3cret-St4sh/commit/7a368503937f92b4d77ccc7b56a3e0e5adcfeb63) — **2024-05-22** — `Pls no expl0d3`.
- [`7167785f`](https://github.com/DreamWeave-MP/S3ctors-S3cret-St4sh/commit/7167785f63193de2e5ac5506d39c7aea1c1ef3c4) — **2024-05-24** — title/content cleanup during the recognizable St4sh conversion.

The exact "birth" of a personal site is less important than avoiding the false
claim that every inherited template commit was already St4sh development.

## CPP becomes a St4sh product

By the end of May Starwind material is explicitly part of the site's build and
distribution role:

- [`3e112412`](https://github.com/DreamWeave-MP/S3ctors-S3cret-St4sh/commit/3e11241270f13bfd42c0f3333a0bc95833798486) — **May 27** — adds a build job for Starwind Community Patch Project.
- [`d6bb8d9`](https://github.com/DreamWeave-MP/S3ctors-S3cret-St4sh/commit/d6bb8d9792a823b7b2ba41cd934cbe10f1a0c83d) — **May 28** — writes up CPP as a project page.

The modern [St4sh CPP page](https://dreamweave-mp.github.io/S3ctors-S3cret-St4sh/sw_cpp/)
remains one of the public historical summaries for that project.

### Oral history

Dave describes Starwind/TSI content hosting as one of the major motivations for
building the St4sh, and describes the repository as effectively serving as the
**Starwind skunkworks** for a period.

That interpretation becomes much stronger when the 2025 history is inspected.

# January 31, 2025: the first surviving Starwind Lua modernization

The first surviving OpenMW-Lua Starwind modernization work is **not** the May
2025 SW4 tree in Starwind-Builder. It is this St4sh commit:

- [`7c85c9ca`](https://github.com/DreamWeave-MP/S3ctors-S3cret-St4sh/commit/7c85c9cae700727c35a1358121e9afb636c038f2) — **2025-01-31 03:22 -07:00** — `Begin migrating Starwind scripts into Lua...`.

The commit adds an early freighter/player-controller implementation and an
`Starwind Modernization Patches.omwscripts` registration file. The commit
subject explicitly says the work is replacing freighter handling and
entry/exit-related objects.

The follow-up sequence fills out the behavior within hours:

- [`da9caade`](https://github.com/DreamWeave-MP/S3ctors-S3cret-St4sh/commit/da9caade883ec674feb58dc480554033635a37f1) — removes the last original door.
- [`4ee69d77`](https://github.com/DreamWeave-MP/S3ctors-S3cret-St4sh/commit/4ee69d77437fce805eca287ce82012910cbed1f3) — implements exiting the ship.
- [`89461704`](https://github.com/DreamWeave-MP/S3ctors-S3cret-St4sh/commit/894617040172143b27b3d6cb630b78c2acdd9484) — implements the travel timer and SFX.
- [`a6b10c21`](https://github.com/DreamWeave-MP/S3ctors-S3cret-St4sh/commit/a6b10c2123dc643b953c859edafd1385826cc684) — changes same-record/file sound behavior.
- [`f6cb2331`](https://github.com/DreamWeave-MP/S3ctors-S3cret-St4sh/commit/f6cb23316a02be76a20f4837e2b8fb060fd3173a) — delays ship SFX so they occur before the cell transition.
- [`a1c281c1`](https://github.com/DreamWeave-MP/S3ctors-S3cret-St4sh/commit/a1c281c1df23ff3e02720ef0211a9960614c0542) — **February 1** — adds freighter-quest progress gating.

The implementation already contains the recognizable design that later grows
inside Builder: known ship records, destination/button mapping, dynamic
replacement records, Lua-owned activation, freighter entry/exit, travel state,
and quest gating.

## May: the experiment moves out

After the expanded modernization work is living in Starwind-Builder, St4sh
commit
[`8e5845c3`](https://github.com/DreamWeave-MP/S3ctors-S3cret-St4sh/commit/8e5845c347e86411cc13c81370b0fc3dd6ccc40d)
removes the Starwind Lua files with the succinct subject:

> `CLEANUP: These do not belong here`

That is a useful boundary marker. The St4sh was the first surviving lab for the
Lua rewrite, but Starwind-Builder became the larger Starwind-specific R&D home.

## Why the St4sh remains part of R3mastered history

The repository was not just a mirror. It served three roles that later projects
split apart more cleanly:

1. **publication/distribution** for personal and Starwind-related mods;
2. **documentation** for MPP/CPP and later projects;
3. **skunkworks** where ideas could exist before they had an obvious permanent home.

R3mastered deliberately preserves the useful part of that model—fast
experimentation—but moves the resulting project knowledge into a dedicated
repository/documentation tree rather than letting it remain archaeological
sediment in a personal mod site.

[Next: the SW4 modernization burst →](../sw4-modernization/)
