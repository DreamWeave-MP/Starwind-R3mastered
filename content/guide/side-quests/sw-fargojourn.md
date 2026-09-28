---
title: "Fargo's Missing Mask"
description: "Walkthrough and QA reference for Fargo's Missing Mask (SW_FargoJourn)."
weight: 38
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_FargoJourn"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_FargoJourn` |
| **Category** | Side Quests |
| **Journal entries** | 3 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Fargo** in **Tatooine, Medical Bay** and ask about **episode**. |
| **Key locations** | Tatooine, Medical Bay, TatooineRace |
| **Key characters** | Fargo |

## Walkthrough

### 1. Speak with Fargo in Tatooine, Medical Bay and ask about episode

Speak with **Fargo** in **Tatooine, Medical Bay** and ask about **episode**.

> **Expected journal update — index 1:** I spoke to a man named Fargo in the medical bay of Sandriver. He claims he is sick because of his missing breath mask that was stolen by some Rodians in the rodian district of Sandriver. He also said he heard some Rodians talking about gangsters hiding things in baskets there.

### 2. Speak with Fargo in Tatooine, Medical Bay and ask about episode — Finished

Speak with **Fargo** in **Tatooine, Medical Bay** and ask about **episode**.

> **Expected journal update — index 5:** I returned the breathing mask to Fargo, who rewarded me with some credits.

**Known item transfer:** 200 × **Credits** (`Gold_001`).

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 5**:

> I returned the breathing mask to Fargo, who rewarded me with some credits.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 200 × **Credits** (`Gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Fargo** (`SW_Fargo`) — `Tatooine, Medical Bay`, `TatooineRace`

**Locations implicated by actor/object placement or explicit travel:**
- **Tatooine, Medical Bay**
- **TatooineRace**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_FargoJourn`
**Generated category:** Side Quests
**Journal entries:** 3

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 1 | — | I spoke to a man named Fargo in the medical bay of Sandriver. He claims he is sick because of his missing breath mask that was stolen by some Rodians in the rodian district of Sandriver. He also said he heard some Rodians talking about gangsters hiding things in baskets there. | 1 |
| 5 | Finished | I returned the breathing mask to Fargo, who rewarded me with some credits. | 1 |

### Record-level trigger map

### Stage 1

I spoke to a man named Fargo in the medical bay of Sandriver. He claims he is sick because of his missing breath mask that was stolen by some Rodians in the rodian district of Sandriver. He also said he heard some Rodians talking about gangsters hiding things in baskets there.

**How this stage is set:**
- Dialogue INFO `3048115125308615808` under topic **episode**; speaker Fargo (`SW_Fargo`). locations: `Tatooine, Medical Bay`, `TatooineRace`. conditions: Journal `SW_FargoJourn` NotEqual 5. response: “Oh no, it's my breath mask. Those rodians took it from me and brought it back to their little shack over in the rodian district of town. Say, if you got me my breath mask back I would be very grateful. I saw them put it in a basket somewhere in rodian district.”.

```text
Journal "SW_FargoJourn" 1
StopSound "SW_Fargo1"
StopSound "SW_Fargo3"
```

### Stage 5 — Finished

I returned the breathing mask to Fargo, who rewarded me with some credits.

**How this stage is set:**
- Dialogue INFO `1521228628229441294` under topic **episode**; speaker Fargo (`SW_Fargo`). locations: `Tatooine, Medical Bay`, `TatooineRace`. conditions: Item/ItemType `SW_GMaskFargo` Equal 1; Journal `SW_FargoJourn` Equal 1. response: “My breath mask! I couldn't thank you enough. But, unfortunately I won't be able to wear it yet, until it is cleaned, sterilized, recalibrated, and the straps have been profesionally adjusted. Here, take this for your troubles.”.

```text
player->additem "Gold_001",200
player->removeitem "SW_GMaskFargo",1
Journal "SW_FargoJourn" 5
Stopsound "SW_Fargo1"
StopSound "SW_Fargo2"
```

### Related records and locations

**Dialogue speakers:**
- Fargo (`SW_Fargo`) — `Tatooine, Medical Bay`, `TatooineRace`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)
- Fargo's Breath Mask (`SW_GMaskFargo`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Tatooine, Medical Bay`
- `TatooineRace`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `1` is obtainable.
- [ ] Reach index `1`: I spoke to a man named Fargo in the medical bay of Sandriver. He claims he is sick because of his missing brea…
- [ ] Reach index `5` (`Finished`): I returned the breathing mask to Fargo, who rewarded me with some credits.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_FargoJourn`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
