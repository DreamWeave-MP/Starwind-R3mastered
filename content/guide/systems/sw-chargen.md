---
title: "Char Gen (internal journal)"
description: "Walkthrough and QA reference for Char Gen (internal journal) (SW_CharGen)."
weight: 1
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_CharGen"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_CharGen` |
| **Category** | Systems & Internal Journals |
| **Journal entries** | 4 |
| **Completion branches** | 2 |
| **Starts by** | Record route requires playtest verification. |
| **Key locations** | Imperial Prison Ship, The Outer Rim, Endar Spire |

## Walkthrough

### 1. Reach journal stage 0

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 0:** The Endar Spire

### 2. Allow the scripted event handled by `SW_PlayerGenAct` to complete

The records expose more than one way to reach this journal update:
- Allow the scripted event handled by `SW_PlayerGenAct` to complete.
- Interact with **Personal Locker** in **Imperial Prison Ship**.

> **Expected journal update — index 1:** The Sith are attacking the Endar Spire I have gathered my things, I should head towards an escape pod.

### 3. Reach Imperial Prison Ship and allow the scripted event to complete — Finished

The records expose more than one way to reach this journal update:
- Reach **Imperial Prison Ship** and allow the scripted event to complete.
- Interact with **Container** in **The Outer Rim, Endar Spire**.

> **Expected journal update — index 2:** I've got the keycard, it's time to escape!

**Known item transfer:** 2 × **Medkit** (`SW_Medkit`), 1 × **Worn Unbalanced Vibroblade** (`SW_VibrobladeImbOld`), 1 × **Barracks Key** (`SW_PlayerGenKey`).

**Outcome:** this journal entry is marked as a finished branch.

### 4. Reach journal stage 3 — Finished

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 3:** I have reached an escape pod and escaped the Endar Spire. It looks like I'm heading towards the planet Taris.

**Outcome:** this journal entry is marked as a finished branch.

> **Playtest flag:** 2 journal stages on this page lack a literal setter in the current static scan.

## Endings & branches

The journal has **2 explicit finished entries**. Treat them as branch coverage targets during playtesting:

- **Index 2:** I've got the keycard, it's time to escape!
- **Index 3:** I have reached an escape pod and escaped the Endar Spire. It looks like I'm heading towards the planet Taris.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 2 × **Medkit** (`SW_Medkit`)
- 1 × **Worn Unbalanced Vibroblade** (`SW_VibrobladeImbOld`)
- 1 × **Barracks Key** (`SW_PlayerGenKey`)

## Characters & locations

**Locations implicated by actor/object placement or explicit travel:**
- **Imperial Prison Ship**
- **The Outer Rim, Endar Spire**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_CharGen`
**Generated category:** Systems & Internal Journals
**Journal entries:** 4

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 0 | — | The Endar Spire | 0 |
| 1 | — | The Sith are attacking the Endar Spire I have gathered my things, I should head towards an escape pod. | 2 |
| 2 | Finished | I've got the keycard, it's time to escape! | 2 |
| 3 | Finished | I have reached an escape pod and escaped the Endar Spire. It looks like I'm heading towards the planet Taris. | 0 |

### Record-level trigger map

### Stage 0

The Endar Spire

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 1

The Sith are attacking the Endar Spire I have gathered my things, I should head towards an escape pod.

**How this stage is set:**
- Script `SW_PlayerGenAct`.

```text
PlaySound "SatchelBlast"
            EnableRaceMenu
            Journal "SW_CharGen" 1
        else
            Messagebox "I should find a way out of here."
```
- Script `SW_PlayerGenActivate`. attached to Container Personal Locker (`SW_LockerPlayerGen`); placed in `Imperial Prison Ship`, `The Outer Rim, Endar Spire`.

```text
PlaySound "SatchelBlast"
            EnableRaceMenu
            Journal "SW_CharGen" 1
        else
            Messagebox "I should find a way out of here."
```

### Stage 2 — Finished

I've got the keycard, it's time to escape!

**How this stage is set:**
- Script `SW_PlayerGenAct2`. attached to Activator `SW_CharGenClassNew`; placed in `Imperial Prison Ship`.

```text
EnableClassMenu
            PlaySound "SatchelBlast"
            Journal SW_CharGen 2
            player->additem, "SW_Medkit", 2
            player->additem, "SW_VibrobladeImbOld", 1
```
- Script `SW_PlayerGenActivate2`. attached to Container Container (`SW_CratePlayerGenAct`); placed in `The Outer Rim, Endar Spire`.

```text
EnableClassMenu
            PlaySound "SatchelBlast"
            Journal "SW_CharGen" 2
            player->additem, "SW_PlayerGenKey", 1
            player->additem, "SW_Medkit", 2
```

### Stage 3 — Finished

I have reached an escape pod and escaped the Endar Spire. It looks like I'm heading towards the planet Taris.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Related records and locations

**Scripts that read or write this journal:**
- `SW_PlayerGenAct`
- `SW_PlayerGenAct2` — Activator `SW_CharGenClassNew`; placed in `Imperial Prison Ship`
- `SW_PlayerGenAct3` — Activator `SW_CharGenBirthsignNew`; placed in `Imperial Prison Ship`
- `SW_PlayerGenActivate` — Container Personal Locker (`SW_LockerPlayerGen`); placed in `Imperial Prison Ship`, `The Outer Rim, Endar Spire`
- `SW_PlayerGenActivate2` — Container Container (`SW_CratePlayerGenAct`); placed in `The Outer Rim, Endar Spire`
- `SW_PlayerGenActivate3` — Door Metal Door (`SW_DoorPlayerGen30`); placed in `The Outer Rim, Endar Spire`

**Items referenced by related script/result code:**
- Medkit (`SW_Medkit`)
- Barracks Key (`SW_PlayerGenKey`)
- Worn Unbalanced Vibroblade (`SW_VibrobladeImbOld`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Imperial Prison Ship`
- `The Outer Rim, Endar Spire`

<details><summary>Other directly addressed object IDs in related code</summary>

- Sith Commando (`SW_CharGenCommandoS`)
- Republic Soldier (`SW_CharGenSoldierR2`)

</details>

<details><summary>Journal-state readers (6 code sites)</summary>

- Script `SW_PlayerGenAct`.
- Script `SW_PlayerGenAct2`. attached to Activator `SW_CharGenClassNew`; placed in `Imperial Prison Ship`.
- Script `SW_PlayerGenAct3`. attached to Activator `SW_CharGenBirthsignNew`; placed in `Imperial Prison Ship`.
- Script `SW_PlayerGenActivate`. attached to Container Personal Locker (`SW_LockerPlayerGen`); placed in `Imperial Prison Ship`, `The Outer Rim, Endar Spire`.
- Script `SW_PlayerGenActivate2`. attached to Container Container (`SW_CratePlayerGenAct`); placed in `The Outer Rim, Endar Spire`.
- Script `SW_PlayerGenActivate3`. attached to Door Metal Door (`SW_DoorPlayerGen30`); placed in `The Outer Rim, Endar Spire`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `0` is obtainable.
- [ ] Reach index `0`: The Endar Spire
- [ ] Reach index `1`: The Sith are attacking the Endar Spire I have gathered my things, I should head towards an escape pod.
- [ ] Reach index `2` (`Finished`): I've got the keycard, it's time to escape!
- [ ] Reach index `3` (`Finished`): I have reached an escape pod and escaped the Endar Spire. It looks like I'm heading towards the planet Taris.
- [ ] Branch coverage: this journal has **2 different `Finished` entries**; test each reachable completion branch.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_CharGen`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
