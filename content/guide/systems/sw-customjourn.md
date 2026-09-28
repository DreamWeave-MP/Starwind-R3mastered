---
title: "Custom Journ (internal journal)"
description: "Walkthrough and QA reference for Custom Journ (internal journal) (SW_CustomJourn)."
weight: 2
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_CustomJourn"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_CustomJourn` |
| **Category** | Systems & Internal Journals |
| **Journal entries** | 2 |
| **Completion branches** | No explicit Finished marker |
| **Starts by** | Speak with **the relevant character** and ask about **docking fee**. |
| **Key locations** | Nar Shaddaa, Customs |

## Walkthrough

### 1. Speak with the relevant character and ask about docking fee

Speak with **the relevant character** and ask about **docking fee**.

> **Expected journal update — index 5:** There is a 200 credit docking fee in order to gain entry to Nar Shaddaa. I should pay one of the docking agents in order to gain entry.

### 2. Speak with the relevant character and ask about docking fee

Speak with **the relevant character** and ask about **docking fee**.

> **Expected journal update — index 10:** I have paid the 200 credits and have gained access to Nar Shaddaa.

## Characters & locations

**Locations implicated by actor/object placement or explicit travel:**
- **Nar Shaddaa, Customs**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_CustomJourn`
**Generated category:** Systems & Internal Journals
**Journal entries:** 2

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | There is a 200 credit docking fee in order to gain entry to Nar Shaddaa. I should pay one of the docking agents in order to gain entry. | 1 |
| 10 | — | I have paid the 200 credits and have gained access to Nar Shaddaa. | 1 |

### Record-level trigger map

### Stage 5

There is a 200 credit docking fee in order to gain entry to Nar Shaddaa. I should pay one of the docking agents in order to gain entry.

**How this stage is set:**
- Dialogue INFO `162896219254339876` under topic **docking fee**; speaker generic dialogue. cell constraint `Nar Shaddaa, Customs`. conditions: Journal `SW_CustomJourn` Equal 0. response: “Yes, the North and South hangers are open, as well as the cantina, but access into the city will cost 200 credits for your docking fee.”.

```text
Journal SW_CustomJourn 5
Choice "Here's 200 credits." 1 "I'm not paying that." 2 "I don't have 200 credits." 3
```

### Stage 10

I have paid the 200 credits and have gained access to Nar Shaddaa.

**How this stage is set:**
- Dialogue INFO `6237154402270029326` under topic **docking fee**; speaker generic dialogue. cell constraint `Nar Shaddaa, Customs`. conditions: Function/Choice Equal 1; Item/ItemType `Gold_001` GreaterEqual 200. response: “Enjoy your stay on Nar Shaddaa.”.

```text
player->removeitem, Gold_001, 200
SW_ForcefieldCustoms->Disable
Journal SW_CustomJourn 10
goodbye
```

### Related records and locations

**Items referenced by related script/result code:**
- Credits (`Gold_001`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Nar Shaddaa, Customs`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: There is a 200 credit docking fee in order to gain entry to Nar Shaddaa. I should pay one of the docking agent…
- [ ] Reach index `10`: I have paid the 200 credits and have gained access to Nar Shaddaa.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_CustomJourn`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
