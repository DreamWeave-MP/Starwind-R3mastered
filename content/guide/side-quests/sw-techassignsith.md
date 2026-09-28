---
title: "Technician Assignment"
description: "Walkthrough and QA reference for Technician Assignment (SW_TechAssignSith)."
weight: 78
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_TechAssignSith"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_TechAssignSith` |
| **Category** | Side Quests |
| **Journal entries** | 2 |
| **Completion branches** | No explicit Finished marker |
| **Starts by** | Speak with **Captain Price** in **Manaan, Sith Embassy** and ask about **Orders**. |
| **Observed prerequisite journals** | `SW_Sith`, `SW_ShipOwn` |
| **Key locations** | Manaan, Sith Embassy, The Outer Rim, Freighter |
| **Key characters** | Captain Price |

## Walkthrough

### 1. Speak with Captain Price in Manaan, Sith Embassy and ask about Orders

Speak with **Captain Price** in **Manaan, Sith Embassy** and ask about **Orders**.

> **Expected journal update — index 5:** The Sith Fleet has commissioned a technician to board my ship and assist me in repairing and maintenance.

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Captain Price** (`SW_SithQuester`) — `Manaan, Sith Embassy`

**Locations implicated by actor/object placement or explicit travel:**
- **Manaan, Sith Embassy**
- **The Outer Rim, Freighter**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_TechAssignSith`
**Generated category:** Side Quests
**Journal entries:** 2

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | The Sith Fleet has commissioned a technician to board my ship and assist me in repairing and maintenance. | 1 |

### Record-level trigger map

### Stage 5

The Sith Fleet has commissioned a technician to board my ship and assist me in repairing and maintenance.

**How this stage is set:**
- Dialogue INFO `14464128261208315024` under topic **Orders**; speaker Captain Price (`SW_SithQuester`). locations: `Manaan, Sith Embassy`. conditions: Journal `SW_Sith` GreaterEqual 105; Journal `SW_ShipOwn` Equal 15; Journal `SW_TechAssignSith` Equal 0. response: “You would like to assign some orders? You have your own freighter? I suppose we can assign a technician to your maintenance. I'll send one over now.”.

```text
Journal SW_TechAssignSith 5
```

### Related records and locations

**Dialogue speakers:**
- Captain Price (`SW_SithQuester`) — `Manaan, Sith Embassy`

**Scripts that read or write this journal:**
- `SW_FreighterTechSith` — Npc Sith Technician (`SW_FreighterSithTech`); placed in `The Outer Rim, Freighter`

**Cells implicated by actor/object placement or explicit travel code:**
- `Manaan, Sith Embassy`
- `The Outer Rim, Freighter`

<details><summary>Journal-state readers (1 code sites)</summary>

- Script `SW_FreighterTechSith`. attached to Npc Sith Technician (`SW_FreighterSithTech`); placed in `The Outer Rim, Freighter`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: The Sith Fleet has commissioned a technician to board my ship and assist me in repairing and maintenance.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_TechAssignSith`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
