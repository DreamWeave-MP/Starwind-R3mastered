---
title: "2025: the SW4 Modernization Burst"
weight: 70
description: "The May 2025 Starwind-Builder skunkworks explosion: freighters, mounts, automatic blasters, record migration, KOTOR-style controls, targeting, and UI."
---

# 2025: the SW4 Modernization Burst

In May 2025 Starwind-Builder stops looking like only a patch/build repository
and, for roughly two weeks, turns into a concentrated gameplay R&D lab.

This is the period preserved today as the `Scripts/SW4` fossil.

## Oral history: why the burst happened

Dave's account is gloriously non-corporate: a community modder implied that he
did not properly take care of Starwind / the Modding-OpenMW Starwind list, and
he got pissed off enough to **fl3x** by doing a large OpenMW-Lua modernization
campaign.

Git cannot prove anyone's emotional state. It can prove that the resulting
commit burst is real and unusually concentrated.

## May 7: SWAMP enters Builder

- [`50af8cb`](https://github.com/DreamWeave-MP/Starwind-Builder/commit/50af8cb19ec7ec30bfc63b3e150ae5c855098aca) — **2025-05-07** — `Add intial version of SWAMP modernization patches with handling for mounts and player ships`.

This is the larger successor to the St4sh freighter prototype. The commit adds
about a thousand lines of Lua and brings together player-ship behavior, mount
handling, helpers, settings, and player orchestration.

## May 9: automatic blasters

- [`f87aced`](https://github.com/DreamWeave-MP/Starwind-Builder/commit/f87aced36fd3c1eb5ea8f2feedb44c060829b806) — adds `ShootManager` for automatic blaster fire.
- [`cf83986`](https://github.com/DreamWeave-MP/Starwind-Builder/commit/cf839868c73baf3cf758b33154ccebcb55e4ff10) — adds animation cancelling to blaster attacks.

The surviving system classifies Starwind ranged weapons by type and controls
automatic fire, follow-through cancellation, animation speed, shot delay, and
skill-based interpolation.

## May 12: generic runtime record migration appears

- [`d4f4372`](https://github.com/DreamWeave-MP/Starwind-Builder/commit/d4f43725863adc50351ac4ba7f9c0011e94d438f) — adds the `recordReplacer` interface for automatic instance replacement/deletion.

This is one of the most important buried systems because it generalizes a
problem the freighter rewrite had already encountered: replacing old scripted
content with Lua-controlled/generated records at runtime without requiring all
source plugins to be manually rewritten first.

The historical implementation is not a modern API contract; it contains known
persistence and callback hazards. Its importance is architectural: **Starwind
content migration became a first-class runtime concept.**

## May 14: camera and lock-on experiments

Three commits land within minutes:

- [`9ae6808`](https://github.com/DreamWeave-MP/Starwind-Builder/commit/9ae6808c210503e69929d4cc4cf4b199e2e04fbe) — replaces the built-in third-person camera experiment.
- [`7872e88`](https://github.com/DreamWeave-MP/Starwind-Builder/commit/7872e88ac4dc65da03e53e5d0313b87741e84a65) — adds a camera helper module.
- [`2b94a9f`](https://github.com/DreamWeave-MP/Starwind-Builder/commit/2b94a9faf0e5f2ad1ec79695250015255f7976a5) — adds lock-on and camera managers to reproduce KOTOR-like behavior.

Later that day:

- [`fe57c24`](https://github.com/DreamWeave-MP/Starwind-Builder/commit/fe57c2459f1d947ba659b989f4dbf646cd1798a7) — imports the `protectedTable` class from CHIM.

That last receipt is important for lineage accuracy: not every useful helper was
invented inside SW4. The skunkworks was already cross-pollinating with other
OpenMW experiments.

## May 17–19: replacement movement and KOTOR-style interaction

The controls stack grows quickly:

- [`1f7190e`](https://github.com/DreamWeave-MP/Starwind-Builder/commit/1f7190e0bbeafb063f7881e9f85fba6316e3fffe) — May 17 — input controller that completely overrides movement controls.
- [`848c8b7`](https://github.com/DreamWeave-MP/Starwind-Builder/commit/848c8b7d57d324fccca45b1ab5357fd2ceeae67c) — May 18 — implements `cursorController` inside the player controller.
- [`68e20b4`](https://github.com/DreamWeave-MP/Starwind-Builder/commit/68e20b4758e2f4cbef4f3466975736fbe9939a94) — May 19 — activation banner with activatability feedback.
- [`3c81497`](https://github.com/DreamWeave-MP/Starwind-Builder/commit/3c8149737e7d92a4002bff643453d5bd2f6e5f76) — May 19 — quick turning and mouse-wheel turning.
- [`196db19`](https://github.com/DreamWeave-MP/Starwind-Builder/commit/196db19cb46d42613583299f4697dc27b91de51e) — May 19 — contextual cursor colors and optional banner.
- [`2e90f6d`](https://github.com/DreamWeave-MP/Starwind-Builder/commit/2e90f6ddb2024725897b3a632094788063181506) — May 19 — custom crosshair manager.

The resulting system is not simply "controls tweaks." It attempts to replace
OpenMW's ordinary third-person interaction model with something much closer to
a KOTOR-era scheme:

- virtual HUD cursor independent of camera look;
- rendering-ray target selection from cursor position;
- activation-range checks and direct world activation;
- target labels and contextual cursor presentation;
- movement acceleration/deceleration curves;
- lateral-input turning versus combat strafing;
- quick 180-degree turns;
- mouse-wheel-assisted turning;
- arbitration with camera, crosshair, lock-on, and mount state.

This is the direct archaeological source for the modern `starwind_controls`
work being reconsidered for R3mastered.

## May 20–22: quick cast and quick attack

- [`c4dcd27`](https://github.com/DreamWeave-MP/Starwind-Builder/commit/c4dcd278b457856c1709442c10bb71e3bbdf8118) — May 20 — quick casting with mount support.
- [`d514f48`](https://github.com/DreamWeave-MP/Starwind-Builder/commit/d514f48ac2fc001b05398efac95b310d748c5211) — May 22 — quick attack manager.

Quick Cast survives as a coherent state-machine idea: temporarily enter spell
stance, cast once, and restore the prior stance. Quick Attack is visibly less
finished and is preserved primarily as UX archaeology.

## What the SW4 fossil contains

The supplied exhumation audit groups the high-value systems as:

- **Freighter Lua rewrite** — strong resurrection candidate.
- **KOTOR-style controls** — strong standalone/product candidate.
- **Automatic blasters** — strong standalone/product candidate.
- **Mount/speeder controller** — Starwind-specific gameplay infrastructure.
- **Quick Cast** — small, highly reusable feature.
- **Runtime record/instance migration** — generic idea to prove internally before promoting to H3.

And it treats several helper/targeting systems as evolutionary ancestors rather
than code to revive in place.

## Why SW4 should not simply be "ported"

The old tree is valuable because it records **behavior and intent**, not because
its 2025 implementation should become the 2026 architecture wholesale.

Known problems include:

- stale cursor target state;
- brittle object/type inspection;
- persistence bugs in `recordReplacer`;
- duplicated mount data;
- unknown ranged-weapon edge cases;
- unfinished Quick Attack transitions;
- manager coupling and shared mutable state;
- old OpenMW API assumptions.

The R3mastered rule is therefore:

> **Exhume the behavior. Rebuild the smallest modern implementation. Do not
> reanimate SW4 as a monolith.**

[Next: H3, T4, and the systems that escaped →](../h3-t4-lineage/)
