---
title: "Czerka Underground"
description: "Walkthrough and QA reference for Czerka Underground (SWE_CzUGJ)."
weight: 1
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SWE_CzUGJ"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SWE_CzUGJ` |
| **Category** | Starwind Enhanced |
| **Journal entries** | 2 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Rab Saythmed** in **Tatooine, Sandreach: Czerka Office**. |
| **Key locations** | Tatooine, Sandreach: Czerka Office |
| **Key characters** | Rab Saythmed |

## Walkthrough

### 1. Speak with Rab Saythmed in Tatooine, Sandreach: Czerka Office — Finished

Speak with **Rab Saythmed** in **Tatooine, Sandreach: Czerka Office**.

> **Expected journal update — index 10:** Czerka Officer Rab Saythmed of Sandreach thanked me for returning the datapad.

**Known item transfer:** 200 × **Credits** (`Gold_001`).

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 10**:

> Czerka Officer Rab Saythmed of Sandreach thanked me for returning the datapad.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 200 × **Credits** (`Gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Rab Saythmed** (`SWE_CzerkaOfficeSandrea`) — `Tatooine, Sandreach: Czerka Office`

**Locations implicated by actor/object placement or explicit travel:**
- **Tatooine, Sandreach: Czerka Office**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SWE_CzUGJ`
**Generated category:** Starwind Enhanced
**Journal entries:** 2

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 10 | Finished | Czerka Officer Rab Saythmed of Sandreach thanked me for returning the datapad. | 1 |

### Record-level trigger map

### Stage 10 — Finished

Czerka Officer Rab Saythmed of Sandreach thanked me for returning the datapad.

**How this stage is set:**
- Dialogue INFO `20764225222161628725` under topic **Greeting 3**; speaker Rab Saythmed (`SWE_CzerkaOfficeSandrea`). locations: `Tatooine, Sandreach: Czerka Office`. conditions: Journal `SWE_CzUGJ` Equal 0; Item/ItemType `SWE_CzOfficerDatapad` GreaterEqual 1. response: “Where did you find that datapad? Nevermind, I don't want to know. I thought I'd left it in the underground facility that's gone completely haywire. I'll take that and give you some payment.”.

```text
player->RemoveItem "SWE_CzOfficerDatapad" 1
player->Additem "Gold_001" 200
Journal SWE_CzUGJ 10
```

### Related records and locations

**Dialogue speakers:**
- Rab Saythmed (`SWE_CzerkaOfficeSandrea`) — `Tatooine, Sandreach: Czerka Office`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)
- Sandreach Czerka Datapad (`SWE_CzOfficerDatapad`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Tatooine, Sandreach: Czerka Office`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `10` is obtainable.
- [ ] Reach index `10` (`Finished`): Czerka Officer Rab Saythmed of Sandreach thanked me for returning the datapad.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SWE_CzUGJ`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
