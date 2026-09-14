---
title: DreamWeave Migration and DreamScripts
weight: 90
description: The 2025 GitLab-to-GitHub migration and the 2026 server-script rearchitecture that reconnects to Rickoff-era TSI fixes.
---

# DreamWeave Migration and DreamScripts

By late 2025, the Starwind infrastructure that had lived under Modding-OpenMW's
GitLab namespace moves into DreamWeave's GitHub organization. In 2026 a second
lineage—TES3MP server scripting—also gets a modernization pass.

## December 2025: Makron and Builder move to GitHub CI

Makron's supplied history records:

- `9135a6ed2df7b4b34ac442f8723ca8efef786009` — **2025-12-14** — adds GitHub CI.
- `fd750286314caed71ffcdc21bb63968ecdbc9704` — downloads Morrobroom from DreamWeave.
- `8e1b8b18270621bf6acf44f9af989e087a225421` — **December 15** — updates motherJungle dependencies to DreamWeave sources.

Starwind-Builder follows immediately:

- [`bb75951`](https://github.com/DreamWeave-MP/Starwind-Builder/commit/bb759517490819b971bb9df82cb48c1a7237d2a9) — **2025-12-15** — adds new GitHub CI.
- [`cbcdec5`](https://github.com/DreamWeave-MP/Starwind-Builder/commit/cbcdec5d941b23e6577be76d5432c63bb83d57b2) — **December 16** — deletes `.gitlab-ci.yml`.
- [`3a1bc51`](https://github.com/DreamWeave-MP/Starwind-Builder/commit/3a1bc517230e3514a8d31c4f78803320aabd1f43) — updates the init script for the GitHub build.

This gives the Modding-OpenMW → DreamWeave infrastructure transition a clear
technical boundary rather than a vague organizational date.

The architecture itself survives the move:

- motherJungle remains the specialized TES3 surgery toolkit;
- Makron remains the reproducible build environment;
- Builder remains the Starwind/TSI forge;
- deployment/release machinery moves to GitHub Actions and DreamWeave-hosted dependencies.

# DreamScripts: inherited Git history is not project history

The public
[DreamScripts repository](https://github.com/DreamWeave-MP/DreamScripts)
currently describes itself as the server-side Lua scripts used to implement
core TES3MP functionality and explicitly says it is used by TSI.

Its README still identifies the upstream codebase as **CoreScripts**, and the
Git graph contains years of inherited TES3MP history. Therefore the oldest
commit in the graph is **not** the birth of DreamScripts as a DreamWeave
project.

## November 2024: earliest preserved Dave work in the graph

The earliest Dave-authored work identified in the supplied history is:

- [`7fbbe2d`](https://github.com/DreamWeave-MP/DreamScripts/commit/7fbbe2dedccef4dc904f6ffc51d644503662e288) — **2024-11-27** — `Dream-Dice initial commit`.

That is useful provenance, but the larger DreamScripts architecture comes
later.

## January 2026: an OpenMW-style loader for TES3MP

A substantial modernization campaign begins in January 2026:

- [`f322158`](https://github.com/DreamWeave-MP/DreamScripts/commit/f3221585475bcaac9a3fb721924e89ee85740d8b) — January 8 — adds `dUtil` work.
- [`a356632`](https://github.com/DreamWeave-MP/DreamScripts/commit/a35663272f7938fd335c18dedf2b3bdb4237ccd3) — January 10 — adds a `customScripts` array.
- [`534dd2b`](https://github.com/DreamWeave-MP/DreamScripts/commit/534dd2b70181b8436661e704bfae6fc3186ae6f1) — January 11 — moves custom merchant restocking into the new custom-script layout in preparation for a loader.
- [`9e472d2`](https://github.com/DreamWeave-MP/DreamScripts/commit/9e472d2f8fd67db127ac815b6d285aa81ddd2326) — January 11 — `Initial attempt at an openmw-style script loader!`.
- [`44b0605`](https://github.com/DreamWeave-MP/DreamScripts/commit/44b06056385c8197508b0d69134e38cd83b345b1) — one minute later — actually invokes it.

Follow-up work adds interfaces, registration hooks, validation, a restricted
`require` path, protected execution, and script lifecycle handling.

The conceptual symmetry is hard to miss: while the client/gameplay side had
been migrating brittle MWScript behavior into OpenMW-Lua, the server side was
now borrowing OpenMW-like **module/interface ergonomics** for TES3MP's Lua
environment.

## The 2023 server lineage comes back

Two 2026 commits explicitly reconnect DreamScripts to the original
StarwindServer era:

- [`137679e`](https://github.com/DreamWeave-MP/DreamScripts/commit/137679ec780a23226c813867254cb87cf1d882ee) — **January 16** — adds `fixFollowAI`.
- [`4cd8922`](https://github.com/DreamWeave-MP/DreamScripts/commit/4cd8922ca694efa947d5146cfe7d7a34b5cdb9e5) — **January 27** — `Port Rickoff's bag script`.

The private 2023 StarwindServer history contains Rickoff's `FixFollowAI.lua`
and instanced/portable-container work. The 2026 project is not simply copying
the old server wholesale; it is **reincorporating old operational knowledge
inside a more modular architecture**.

That creates a real historical loop:

```text
StarwindServer / TSI scripts (2023)
        |
        |  operational knowledge survives
        v
DreamScripts (2026)
        |
        +-- OpenMW-style modular loader
        +-- fixFollowAI reincorporated
        +-- Rickoff bag/container behavior ported
```

## Oral history: intended, not deployed

Dave's account is that DreamScripts was created for deployment on his server
but was never actually deployed there.

Accordingly, R3mastered history should describe DreamScripts as an **intended
next-generation TSI server stack / engineering continuation**, not claim that
it replaced the production server in 2026.

[Next: MPP becomes R3mastered →](../r3mastered-convergence/)
