---
title: H3, T4, and the Systems That Escaped
weight: 80
description: The nuanced lineage between SW4, s3lf/H3, CHIM helpers, and the later standalone T4rg3t5 targeting project.
---

# H3, T4, and the Systems That Escaped

The easiest way to get this part of the history wrong is to draw a clean arrow
from `SW4` to `H3` and call it done.

The actual record shows **cross-pollination**.

## s3lf exists before the May SW4 burst

The St4sh history records:

- [`9ffbd3f9`](https://github.com/DreamWeave-MP/S3ctors-S3cret-St4sh/commit/9ffbd3f96923a01675345569cdaebf4934bca77d) — **2025-04-25** — initial release of `s3lf`.
- [`51e6a71e`](https://github.com/DreamWeave-MP/S3ctors-S3cret-St4sh/commit/51e6a71e146787db95e717b4e185a02674d1bbf7) — April 26 — improved s3lf documentation.

The public
[H3lp Yours3lf Nexus page](https://www.nexusmods.com/morrowind/mods/56417)
records its original upload on **April 27, 2025**.

Therefore H3's lineage cannot honestly be described as "created after SW4."
Its headline `s3lf` work already exists before the May 7 Starwind-Builder burst.

## SW4 imports ideas too

The direction also goes the other way. Builder commit
[`fe57c24`](https://github.com/DreamWeave-MP/Starwind-Builder/commit/fe57c2459f1d947ba659b989f4dbf646cd1798a7)
explicitly says it adds the `protectedTable` class **from CHIM**.

The Starwind skunkworks was therefore a consumer and proving ground for helper
ideas being developed elsewhere, not an isolated birthplace for every
abstraction it contained.

## May 25: helpers migrate into the H3 line

After the Starwind burst:

- [`72c7818d`](https://github.com/DreamWeave-MP/S3ctors-S3cret-St4sh/commit/72c7818d884f4448d5d1dddaabb01cead21cbfa4) — adds `LogMessage` and `getScriptContext` helpers.
- [`f7080bd8`](https://github.com/DreamWeave-MP/S3ctors-S3cret-St4sh/commit/f7080bd821e7006b3a56e4170c686c9e07e3c21c) — adds the `protectedTable` interface.
- [`257aabfd`](https://github.com/DreamWeave-MP/S3ctors-S3cret-St4sh/commit/257aabfdc42e2a483057940e031140eb5d4eaf7a) — migrates everything from s3lf into **H3lp Yours3lf**.

Later:

- [`3b1f8a75`](https://github.com/DreamWeave-MP/S3ctors-S3cret-St4sh/commit/3b1f8a75cb84edb65588aaa8b024a5571b4de756) — **2025-11-11** — migrates the camera-helper module into H3.

The supplied code archaeology identifies the old SW4 helper files as ancestors
of modern H3 surfaces such as ProtectedTable, CamHelper, ScriptContext, and
LogMessage. The public chronology above shows **when** those concepts entered
the H3 line; the exact source-level ancestry comes from comparing the surviving
code, not merely from the dates.

## T4rg3t5: the targeting experiment becomes a product

The SW4 lock-on manager contains recognizable later T4 behavior: screen-space
target selection, nearest-to-center scoring, directional switching, line of
sight, target markers, distance limits, health-based presentation, dead-target
switching, and camera/player tracking.

The standalone T4 line appears later in public Git:

- [`3a61d1f7`](https://github.com/DreamWeave-MP/S3ctors-S3cret-St4sh/commit/3a61d1f7fa6e97d10600ded3f0be0c381f4593fd) — **2025-10-26** — `Initial commit for t4rg3t5`.
- [`36a743df`](https://github.com/DreamWeave-MP/S3ctors-S3cret-St4sh/commit/36a743df11b7306d60f973d3a4ba6a787fdad3f3) — October 27 — switches targeting to events for moddability.
- [`d6026c15`](https://github.com/DreamWeave-MP/S3ctors-S3cret-St4sh/commit/d6026c15504afed32187ff74ab8a2d001bb64139) — October 27 — adds animations and finalizes the early documentation.

The public
[T4rg3t5 Nexus page](https://www.nexusmods.com/morrowind/mods/57703)
was originally uploaded on **October 28, 2025** and describes it as a lock-on
targeting framework for OpenMW. It also lists H3lp Yours3lf as a requirement.

The St4sh line later records:

- [`c6daf604`](https://github.com/DreamWeave-MP/S3ctors-S3cret-St4sh/commit/c6daf604db1927fab0e6a7cb3abd0460fe55effe) — **2026-09-10** — `T4RG3T5 1.0`.
- [`ad8f17d4`](https://github.com/DreamWeave-MP/S3ctors-S3cret-St4sh/commit/ad8f17d48593143e21e157863b020abb9b750c76) — the proper T4 1.0 README.

## The correct lineage model

The evidence supports this model better than a simple fork tree:

```text
CHIM / other experiments -----+
                              |
                              v
s3lf / H3 (Apr 2025) <----> SW4 Starwind skunkworks (May 2025)
       ^                         |
       |                         |
       +--- helpers migrate -----+
                                 |
                                 +---- lock-on design ----> T4 (Oct 2025+)
```

### Interpretation

SW4 is best understood as a **high-pressure consumer and incubator**:

- some abstractions arrived from other experiments;
- some helper implementations/ideas escaped back into H3;
- the lock-on system later matured into T4;
- several Starwind-specific systems never escaped and are now being resurrected
  for R3mastered.

That nuance matters because the modern rule is **use the evolved descendant**
when one exists. R3mastered should not copy an old SW4 camera helper or
lock-on manager merely because the fossil contains one.

[Next: DreamWeave migration and DreamScripts →](../dreamweave-and-dreamscripts/)
