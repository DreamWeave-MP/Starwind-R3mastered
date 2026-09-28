---
title: "Technician Assignment"
description: "Walkthrough and QA reference for Technician Assignment (SW_TechAssignRep)."
weight: 77
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_TechAssignRep"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_TechAssignRep` |
| **Category** | Side Quests |
| **Journal entries** | 2 |
| **Completion branches** | No explicit Finished marker |
| **Starts by** | Speak with **Captain Shell** in **Manaan, Republic Embassy** and ask about **Orders**. |
| **Observed prerequisite journals** | `SW_Republic`, `SW_ShipOwn` |
| **Key locations** | Manaan, Republic Embassy, The Outer Rim, Freighter |
| **Key characters** | Captain Shell |

## Walkthrough

### 1. Speak with Captain Shell in Manaan, Republic Embassy and ask about Orders

Speak with **Captain Shell** in **Manaan, Republic Embassy** and ask about **Orders**.

> **Expected journal update — index 5:** The Republic Fleet has commissioned a technician to board my ship and assist me in repairing and maintenance.

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Captain Shell** (`SW_RepublicQuester`) — `Manaan, Republic Embassy`

**Locations implicated by actor/object placement or explicit travel:**
- **Manaan, Republic Embassy**
- **The Outer Rim, Freighter**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_TechAssignRep`
**Generated category:** Side Quests
**Journal entries:** 2

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | The Republic Fleet has commissioned a technician to board my ship and assist me in repairing and maintenance. | 1 |

### Record-level trigger map

### Stage 5

The Republic Fleet has commissioned a technician to board my ship and assist me in repairing and maintenance.

**How this stage is set:**
- Dialogue INFO `207525600931721272` under topic **Orders**; speaker Captain Shell (`SW_RepublicQuester`). locations: `Manaan, Republic Embassy`. conditions: Journal `SW_Republic` GreaterEqual 95; Journal `SW_ShipOwn` Equal 15; Journal `SW_TechAssignRep` Equal 0. response: “You would like to assign some orders? You have your own freighter? I suppose we can assign a technician to your maintenance. I'll send one over now.”.

```text
Journal SW_TechAssignRep 5
```

### Related records and locations

**Dialogue speakers:**
- Captain Shell (`SW_RepublicQuester`) — `Manaan, Republic Embassy`

**Scripts that read or write this journal:**
- `SW_FreighterTechRep` — Npc Republic Technician (`SW_FreighterRepTech`); placed in `The Outer Rim, Freighter`

**Cells implicated by actor/object placement or explicit travel code:**
- `Manaan, Republic Embassy`
- `The Outer Rim, Freighter`

<details><summary>Journal-state readers (1 code sites)</summary>

- Script `SW_FreighterTechRep`. attached to Npc Republic Technician (`SW_FreighterRepTech`); placed in `The Outer Rim, Freighter`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: The Republic Fleet has commissioned a technician to board my ship and assist me in repairing and maintenance.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_TechAssignRep`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
