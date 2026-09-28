---
title: "Burying Rhys"
description: "Walkthrough and QA reference for Burying Rhys (SW_BuryRhys)."
weight: 23
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_BuryRhys"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_BuryRhys` |
| **Category** | Side Quests |
| **Journal entries** | 3 |
| **Completion branches** | 1 |
| **Starts by** | Find **Rhys** in **Dantooine, Ballast** and complete the encounter. |
| **Key locations** | Dantooine, Ballast, Dantooine, Dantari Wilds |

## Walkthrough

### 1. Find Rhys in Dantooine, Ballast and complete the encounter

Find **Rhys** in **Dantooine, Ballast** and complete the encounter.

> **Expected journal update — index 5:** I have prepared the corpse of Rhys, I should head into the Dantari Wilds and bury him at the burial site.

### 2. Activate Grave Stick in Dantooine, Dantari Wilds — Finished

Activate **Grave Stick** in **Dantooine, Dantari Wilds**.

> **Expected journal update — index 10:** I have buried the corpse of Rhys on Dantooine.

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 10**:

> I have buried the corpse of Rhys on Dantooine.

## Characters & locations

**Locations implicated by actor/object placement or explicit travel:**
- **Dantooine, Ballast**
- **Dantooine, Dantari Wilds**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_BuryRhys`
**Generated category:** Side Quests
**Journal entries:** 3

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | I have prepared the corpse of Rhys, I should head into the Dantari Wilds and bury him at the burial site. | 1 |
| 10 | Finished | I have buried the corpse of Rhys on Dantooine. | 1 |

### Record-level trigger map

### Stage 5

I have prepared the corpse of Rhys, I should head into the Dantari Wilds and bury him at the burial site.

**How this stage is set:**
- Script `SW_WrapTheBody3`. attached to Npc Rhys (`SW_HumanFarmerBury3`); placed in `Dantooine, Ballast`.

```text
Disable
        SW_BodyBag3->Enable
        Journal SW_BuryRhys 5
    Endif
Else
```

### Stage 10 — Finished

I have buried the corpse of Rhys on Dantooine.

**How this stage is set:**
- Script `SW_GraveScript3`. attached to Activator Grave Stick (`SW_GraveStick3`); placed in `Dantooine, Dantari Wilds`.

```text
If ( OnActivate )
    If ( Player->GetItemCount SW_BodyBag3 >= 1 )
        Journal SW_BuryRhys 10
        SW_Grave3->Enable
        SW_GraveStick3->Disable
```

### Related records and locations

**Scripts that read or write this journal:**
- `SW_GraveScript3` — Activator Grave Stick (`SW_GraveStick3`); placed in `Dantooine, Dantari Wilds`
- `SW_WrapTheBody3` — Npc Rhys (`SW_HumanFarmerBury3`); placed in `Dantooine, Ballast`

**Items referenced by related script/result code:**
- Body Bag (`SW_BodyBag3`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Dantooine, Ballast`
- `Dantooine, Dantari Wilds`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: I have prepared the corpse of Rhys, I should head into the Dantari Wilds and bury him at the burial site.
- [ ] Reach index `10` (`Finished`): I have buried the corpse of Rhys on Dantooine.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_BuryRhys`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
