---
title: "Force Heal"
description: "Walkthrough and QA reference for Force Heal (SW_ForceHeal)."
weight: 42
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_ForceHeal"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_ForceHeal` |
| **Category** | Side Quests |
| **Journal entries** | 2 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Shade Smith** in **Kashyyk, Gray Jedi Camp**. |
| **Key locations** | Kashyyk, Gray Jedi Camp |
| **Key characters** | Shade Smith |

## Walkthrough

### 1. Speak with Shade Smith in Kashyyk, Gray Jedi Camp — Finished

Speak with **Shade Smith** in **Kashyyk, Gray Jedi Camp**.

> **Expected journal update — index 5:** I have learned Force Heal from a Gray named Shade.

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 5**:

> I have learned Force Heal from a Gray named Shade.

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Shade Smith** (`SW_GraySmith`) — `Kashyyk, Gray Jedi Camp`

**Locations implicated by actor/object placement or explicit travel:**
- **Kashyyk, Gray Jedi Camp**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_ForceHeal`
**Generated category:** Side Quests
**Journal entries:** 2

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | Finished | I have learned Force Heal from a Gray named Shade. | 1 |

### Record-level trigger map

### Stage 5 — Finished

I have learned Force Heal from a Gray named Shade.

**How this stage is set:**
- Dialogue INFO `1602619481611815071` under topic **Greeting 7**; speaker Shade Smith (`SW_GraySmith`). locations: `Kashyyk, Gray Jedi Camp`. conditions: Journal `SW_ForceHeal` Equal 0. response: “The force is strong in you, but you are still learning. Let me teach you a new force ability, Force Heal, and you may look among my lightsabers if you wish, you must feel the crystal, and choose which one radiates your energies.”.

```text
PlaySound3d "ShadeGreetHeal"
StopSound "ShadeGreet"
Journal "SW_ForceHeal" 5
```

### Related records and locations

**Dialogue speakers:**
- Shade Smith (`SW_GraySmith`) — `Kashyyk, Gray Jedi Camp`

**Cells implicated by actor/object placement or explicit travel code:**
- `Kashyyk, Gray Jedi Camp`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5` (`Finished`): I have learned Force Heal from a Gray named Shade.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_ForceHeal`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
