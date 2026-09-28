---
title: "Runaway Woman"
description: "Walkthrough and QA reference for Runaway Woman (SW_ZugpatiJourn)."
weight: 66
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_ZugpatiJourn"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_ZugpatiJourn` |
| **Category** | Side Quests |
| **Journal entries** | 3 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Zugpati** in **Nar Shaddaa, Cantina** and ask about **help me**. |
| **Key locations** | Nar Shaddaa, Cantina |
| **Key characters** | Zugpati |

## Walkthrough

### 1. Speak with Zugpati in Nar Shaddaa, Cantina and ask about help me

Speak with **Zugpati** in **Nar Shaddaa, Cantina** and ask about **help me**.

> **Expected journal update — index 5:** Zugpati in the Nar Shaddaa Cantina is being hunted by the Hutt's to be made into a slave. She needs your help to gather some things before she makes it off this planet. She has asked that you bring her; 5 Podpoppers for the road, a Combat Vest for protection,

### 2. Speak with Zugpati in Nar Shaddaa, Cantina and ask about help me — Finished

Speak with **Zugpati** in **Nar Shaddaa, Cantina** and ask about **help me**.

> **Expected journal update — index 10:** I brought Zugpati the items she asked me for, she will be leaving Nar Shaddaa now. In return I will receive better deals at the cantina here.

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 10**:

> I brought Zugpati the items she asked me for, she will be leaving Nar Shaddaa now. In return I will receive better deals at the cantina here.

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Zugpati** (`SW_Zugpati`) — `Nar Shaddaa, Cantina`

**Locations implicated by actor/object placement or explicit travel:**
- **Nar Shaddaa, Cantina**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_ZugpatiJourn`
**Generated category:** Side Quests
**Journal entries:** 3

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | Zugpati in the Nar Shaddaa Cantina is being hunted by the Hutt's to be made into a slave. She needs your help to gather some things before she makes it off this planet. She has asked that you bring her; 5 Podpoppers for the road, a Combat Vest for protection, | 1 |
| 10 | Finished | I brought Zugpati the items she asked me for, she will be leaving Nar Shaddaa now. In return I will receive better deals at the cantina here. | 1 |

### Record-level trigger map

### Stage 5

Zugpati in the Nar Shaddaa Cantina is being hunted by the Hutt's to be made into a slave. She needs your help to gather some things before she makes it off this planet. She has asked that you bring her; 5 Podpoppers for the road, a Combat Vest for protection,

**How this stage is set:**
- Dialogue INFO `2423477293084129763` under topic **help me**; speaker Zugpati (`SW_Zugpati`). locations: `Nar Shaddaa, Cantina`. conditions: Journal `SW_ZugpatiJourn` Equal 0; Function/Choice Equal 1. response: “Oh you are amazing, please do hurry I don't know how long I have!”.

```text
Journal SW_ZugpatiJourn 5
StopSound "ZugGreet"
StopSound "ZugHelp1"
```

### Stage 10 — Finished

I brought Zugpati the items she asked me for, she will be leaving Nar Shaddaa now. In return I will receive better deals at the cantina here.

**How this stage is set:**
- Dialogue INFO `1954718752273847874` under topic **help me**; speaker Zugpati (`SW_Zugpati`). locations: `Nar Shaddaa, Cantina`. conditions: Journal `SW_ZugpatiJourn` Equal 5; Item/ItemType `SW_Podpop` GreaterEqual 5; Item/ItemType `SW_CzerkaMinechest` GreaterEqual 1; Item/ItemType `Gold_001` GreaterEqual 200. response: “Thank you so much! I'm going to get out of here as soon as my contact shows up, 200 credits then I'm off this rock! The Bartender here is a good friend of mine, I'll put in a good word for you I promise you'll have the best deals in town.”.

```text
Journal SW_ZugpatiJourn 10
player->removeitem "SW_Podpop", 5
player->removeitem "SW_CzerkaMinechest", 1
```

### Related records and locations

**Dialogue speakers:**
- Zugpati (`SW_Zugpati`) — `Nar Shaddaa, Cantina`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)
- Combat Vest (`SW_CzerkaMinechest`)
- Podpoppers (`SW_Podpop`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Nar Shaddaa, Cantina`

<details><summary>Other directly addressed object IDs in related code</summary>

- Yapda Hopkyo (`SW_BartenderNar`)

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: Zugpati in the Nar Shaddaa Cantina is being hunted by the Hutt's to be made into a slave. She needs your help …
- [ ] Reach index `10` (`Finished`): I brought Zugpati the items she asked me for, she will be leaving Nar Shaddaa now. In return I will receive be…
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_ZugpatiJourn`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
