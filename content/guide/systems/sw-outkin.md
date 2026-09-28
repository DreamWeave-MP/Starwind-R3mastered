---
title: "Out Kin (internal journal)"
description: "Walkthrough and QA reference for Out Kin (internal journal) (SW_OutKin)."
weight: 10
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_OutKin"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_OutKin` |
| **Category** | Systems & Internal Journals |
| **Journal entries** | 4 |
| **Completion branches** | 1 |
| **Starts by** | Record route requires playtest verification. |
| **Key locations** | Kashyyk, Kinrath Lair, Kashyyk, Shadowlands |
| **Key characters** | Tompson Wohl |

## Walkthrough

### 1. Reach journal stage 0

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 0:** Kinrath Problem

### 2. Speak with Tompson Wohl in Kashyyk, Shadowlands and ask about kinrath

Speak with **Tompson Wohl** in **Kashyyk, Shadowlands** and ask about **kinrath**.

> **Expected journal update — index 5:** Tompson Wohl in the Kashyyk shadowlands is having a problem with bolotaurs and kinraths attacking his outpost. He thinks the kinrath are coming from the region South of the outpost and has seen a black kinrath head in with groups attacking, but always retreating afterwards. He will reward me if I can exterminate this black kinrath.

### 3. Reach Kashyyk, Kinrath Lair and allow the scripted event to complete

Reach **Kashyyk, Kinrath Lair** and allow the scripted event to complete.

> **Expected journal update — index 10:** I have killed the black kinrath and should return to Tompson Wohl for my reward.

### 4. Speak with Tompson Wohl in Kashyyk, Shadowlands and ask about kinrath — Finished

Speak with **Tompson Wohl** in **Kashyyk, Shadowlands** and ask about **kinrath**.

> **Expected journal update — index 15:** I returned to Tompson Wohl who has paid me 800 credits for hunting his black kinrath.

**Known item transfer:** 800 × **Credits** (`gold_001`).

**Outcome:** this journal entry is marked as a finished branch.

> **Playtest flag:** 1 journal stage on this page lack a literal setter in the current static scan.

## Endings & branches

The journal has one explicit finished state at **index 15**:

> I returned to Tompson Wohl who has paid me 800 credits for hunting his black kinrath.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 800 × **Credits** (`gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Tompson Wohl** (`SW_CzerkaSciOutpost`) — `Kashyyk, Shadowlands`

**Locations implicated by actor/object placement or explicit travel:**
- **Kashyyk, Kinrath Lair**
- **Kashyyk, Shadowlands**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_OutKin`
**Generated category:** Systems & Internal Journals
**Journal entries:** 4

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 0 | — | Kinrath Problem | 0 |
| 5 | — | Tompson Wohl in the Kashyyk shadowlands is having a problem with bolotaurs and kinraths attacking his outpost. He thinks the kinrath are coming from the region South of the outpost and has seen a black kinrath head in with groups attacking, but always retreating afterwards. He will reward me if I can exterminate this black kinrath. | 1 |
| 10 | — | I have killed the black kinrath and should return to Tompson Wohl for my reward. | 1 |
| 15 | Finished | I returned to Tompson Wohl who has paid me 800 credits for hunting his black kinrath. | 1 |

### Record-level trigger map

### Stage 0

Kinrath Problem

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 5

Tompson Wohl in the Kashyyk shadowlands is having a problem with bolotaurs and kinraths attacking his outpost. He thinks the kinrath are coming from the region South of the outpost and has seen a black kinrath head in with groups attacking, but always retreating afterwards. He will reward me if I can exterminate this black kinrath.

**How this stage is set:**
- Dialogue INFO `61092535792032028` under topic **kinrath**; speaker Tompson Wohl (`SW_CzerkaSciOutpost`). locations: `Kashyyk, Shadowlands`. conditions: Journal `SW_OutKin` Equal 0. response: “They have to be coming from the region South of here. We've observed them for a while now and they are rather intelligent. There is one in particular that I think is leading these assaults. A black kinrath, I see it at the beginning of their waves, and it disappears during the chaos. I'll pay you in credits if you can kill the vaping thing.”.

```text
Journal SW_OutKin 5
```

### Stage 10

I have killed the black kinrath and should return to Tompson Wohl for my reward.

**How this stage is set:**
- Script `SW_SpawnBlackKinrath`. attached to Creature Black Kinrath (`SW_KinrathBlack`); placed in `Kashyyk, Kinrath Lair`.

```text
If ( OnDeath )
    Journal SW_OutKin 10
Endif
```

### Stage 15 — Finished

I returned to Tompson Wohl who has paid me 800 credits for hunting his black kinrath.

**How this stage is set:**
- Dialogue INFO `293762543477549136` under topic **kinrath**; speaker Tompson Wohl (`SW_CzerkaSciOutpost`). locations: `Kashyyk, Shadowlands`. conditions: Journal `SW_OutKin` Equal 10. response: “Our hero. You probably saved lives by killing that awful creature. It may have had an impressive level of intelligence, but I wouldn't want to study it, dead or alive.”.

```text
player->additem gold_001 800
Journal SW_OutKin 15
```

### Related records and locations

**Dialogue speakers:**
- Tompson Wohl (`SW_CzerkaSciOutpost`) — `Kashyyk, Shadowlands`

**Scripts that read or write this journal:**
- `SW_SpawnBlackKinrath` — Creature Black Kinrath (`SW_KinrathBlack`); placed in `Kashyyk, Kinrath Lair`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Kashyyk, Kinrath Lair`
- `Kashyyk, Shadowlands`

<details><summary>Journal-state readers (1 code sites)</summary>

- Script `SW_SpawnBlackKinrath`. attached to Creature Black Kinrath (`SW_KinrathBlack`); placed in `Kashyyk, Kinrath Lair`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `0` is obtainable.
- [ ] Reach index `0`: Kinrath Problem
- [ ] Reach index `5`: Tompson Wohl in the Kashyyk shadowlands is having a problem with bolotaurs and kinraths attacking his outpost.…
- [ ] Reach index `10`: I have killed the black kinrath and should return to Tompson Wohl for my reward.
- [ ] Reach index `15` (`Finished`): I returned to Tompson Wohl who has paid me 800 credits for hunting his black kinrath.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_OutKin`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
