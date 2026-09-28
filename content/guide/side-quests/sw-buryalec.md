---
title: "Burying Alec"
description: "Walkthrough and QA reference for Burying Alec (SW_BuryAlec)."
weight: 21
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_BuryAlec"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_BuryAlec` |
| **Category** | Side Quests |
| **Journal entries** | 3 |
| **Completion branches** | 1 |
| **Starts by** | Find **Alec** in **Dantooine, Ballast** and complete the encounter. |
| **Key locations** | Dantooine, Ballast, Dantooine, Dantari Wilds |

## Walkthrough

### 1. Find Alec in Dantooine, Ballast and complete the encounter

Find **Alec** in **Dantooine, Ballast** and complete the encounter.

> **Expected journal update — index 5:** I have prepared the corpse of Alec, I should head into the Dantari Wilds and bury him at the burial site.

### 2. Activate Grave Stick in Dantooine, Dantari Wilds — Finished

Activate **Grave Stick** in **Dantooine, Dantari Wilds**.

> **Expected journal update — index 10:** I have buried the corpse of Alec on Dantooine.

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 10**:

> I have buried the corpse of Alec on Dantooine.

## Characters & locations

**Locations implicated by actor/object placement or explicit travel:**
- **Dantooine, Ballast**
- **Dantooine, Dantari Wilds**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_BuryAlec`
**Generated category:** Side Quests
**Journal entries:** 3

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | I have prepared the corpse of Alec, I should head into the Dantari Wilds and bury him at the burial site. | 1 |
| 10 | Finished | I have buried the corpse of Alec on Dantooine. | 1 |

### Record-level trigger map

### Stage 5

I have prepared the corpse of Alec, I should head into the Dantari Wilds and bury him at the burial site.

**How this stage is set:**
- Script `SW_WrapTheBody1`. attached to Npc Alec (`SW_HumanFarmerBury1`); placed in `Dantooine, Ballast`.

```text
Disable
        SW_BodyBag->Enable
        Journal SW_BuryAlec 5
    Endif
Else
```

### Stage 10 — Finished

I have buried the corpse of Alec on Dantooine.

**How this stage is set:**
- Script `SW_GraveScript1`. attached to Activator Grave Stick (`SW_GraveStick1`); placed in `Dantooine, Dantari Wilds`.

```text
If ( OnActivate )
    If ( Player->GetItemCount SW_BodyBag >= 1 )
        Journal SW_BuryAlec 10
        SW_Grave1->Enable
        SW_GraveStick1->Disable
```

### Related records and locations

**Scripts that read or write this journal:**
- `SW_GraveScript1` — Activator Grave Stick (`SW_GraveStick1`); placed in `Dantooine, Dantari Wilds`
- `SW_WrapTheBody1` — Npc Alec (`SW_HumanFarmerBury1`); placed in `Dantooine, Ballast`

**Items referenced by related script/result code:**
- Body Bag (`SW_BodyBag`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Dantooine, Ballast`
- `Dantooine, Dantari Wilds`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: I have prepared the corpse of Alec, I should head into the Dantari Wilds and bury him at the burial site.
- [ ] Reach index `10` (`Finished`): I have buried the corpse of Alec on Dantooine.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_BuryAlec`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
