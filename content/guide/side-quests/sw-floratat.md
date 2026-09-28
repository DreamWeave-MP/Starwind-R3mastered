---
title: "The Flora of Tatooine"
description: "Walkthrough and QA reference for The Flora of Tatooine (SW_FloraTat)."
weight: 89
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_FloraTat"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_FloraTat` |
| **Category** | Side Quests |
| **Journal entries** | 3 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **H.T. Parnell** in **Nar Shaddaa, H.T. Parnell's Oddities** and ask about **flora**. |
| **Observed prerequisite journals** | `SW_FloraMana` |
| **Key locations** | Nar Shaddaa, H.T. Parnell's Oddities |
| **Key characters** | H.T. Parnell |

## Walkthrough

### 1. Speak with H.T. Parnell in Nar Shaddaa, H.T. Parnell's Oddities and ask about flora

Speak with **H.T. Parnell** in **Nar Shaddaa, H.T. Parnell's Oddities** and ask about **flora**.

> **Expected journal update — index 5:** H.T. Parnell will pay me if I gather for him a Black Melon, Black Root, Cactus Pitaya, and Hubba Gourd so he can set up a Tatooine exhibit in his museum.

### 2. Speak with H.T. Parnell in Nar Shaddaa, H.T. Parnell's Oddities and ask about flora — Finished

Speak with **H.T. Parnell** in **Nar Shaddaa, H.T. Parnell's Oddities** and ask about **flora**.

> **Expected journal update — index 10:** I have exchanged the ingredients for 2,000 credits.

**Known item transfer:** 2000 × **Credits** (`gold_001`).

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 10**:

> I have exchanged the ingredients for 2,000 credits.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 2000 × **Credits** (`gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **H.T. Parnell** (`SW_zParnell`) — `Nar Shaddaa, H.T. Parnell's Oddities`

**Locations implicated by actor/object placement or explicit travel:**
- **Nar Shaddaa, H.T. Parnell's Oddities**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_FloraTat`
**Generated category:** Side Quests
**Journal entries:** 3

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | H.T. Parnell will pay me if I gather for him a Black Melon, Black Root, Cactus Pitaya, and Hubba Gourd so he can set up a Tatooine exhibit in his museum. | 1 |
| 10 | Finished | I have exchanged the ingredients for 2,000 credits. | 1 |

### Record-level trigger map

### Stage 5

H.T. Parnell will pay me if I gather for him a Black Melon, Black Root, Cactus Pitaya, and Hubba Gourd so he can set up a Tatooine exhibit in his museum.

**How this stage is set:**
- Dialogue INFO `26356295842390814770` under topic **flora**; speaker H.T. Parnell (`SW_zParnell`). locations: `Nar Shaddaa, H.T. Parnell's Oddities`. conditions: Journal `SW_FloraMana` Equal 0; Journal `SW_FloraTat` Equal 0. response: “We have an exhibit on the natural plants of Kashyyk, it's a wonderful exhibit really. You know, if you happen on your travels to other planets and have the time, I'll pay you for the ingredients of those planets for other exhibits. I'm looking for a Black Melon, Black Root, Cactus Pitaya, and Hubba Gourd for Tatooine and a Blue Pod, Jenstem Pod, Unprocessed Kolto, Manta's Stinger, and Glow Leaf from Manaan.”.

```text
Journal SW_FloraMana 5
Journal SW_FloraTat 5
```

### Stage 10 — Finished

I have exchanged the ingredients for 2,000 credits.

**How this stage is set:**
- Dialogue INFO `5863301672967924127` under topic **flora**; speaker H.T. Parnell (`SW_zParnell`). locations: `Nar Shaddaa, H.T. Parnell's Oddities`. conditions: Journal `SW_FloraTat` Equal 5; Item/ItemType `SW_BlackMelon` GreaterEqual 1; Item/ItemType `SW_Blackroot` GreaterEqual 1; Item/ItemType `SW_CactIng` GreaterEqual 1; Item/ItemType `SW_Hubba` GreaterEqual 1. response: “Well all right, that looks like all of the Tatooine ingredients, I'll be able to set up a new exhibit now!”.

```text
Journal SW_FloraTat 10
player->additem "gold_001", 2000
player->removeitem "SW_BlackMelon", 1
```

### Related records and locations

**Dialogue speakers:**
- H.T. Parnell (`SW_zParnell`) — `Nar Shaddaa, H.T. Parnell's Oddities`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)
- Black Melon (`SW_BlackMelon`)
- Black Root (`SW_Blackroot`)
- Cactus Pitaya (`SW_CactIng`)
- Hubba Gourd (`SW_Hubba`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Nar Shaddaa, H.T. Parnell's Oddities`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: H.T. Parnell will pay me if I gather for him a Black Melon, Black Root, Cactus Pitaya, and Hubba Gourd so he c…
- [ ] Reach index `10` (`Finished`): I have exchanged the ingredients for 2,000 credits.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_FloraTat`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
