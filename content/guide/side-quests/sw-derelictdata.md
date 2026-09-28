---
title: "Derelict Data"
description: "Walkthrough and QA reference for Derelict Data (SW_DerelictData)."
weight: 34
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_DerelictData"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_DerelictData` |
| **Category** | Side Quests |
| **Journal entries** | 3 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Kad Dokrij** in **Taris, Upper City Cantina**. |
| **Observed prerequisite journals** | `SW_TarisChapX3-2` |
| **Key locations** | Taris, Upper City Cantina |
| **Key characters** | Kad Dokrij |

## Walkthrough

### 1. Speak with Kad Dokrij in Taris, Upper City Cantina

Speak with **Kad Dokrij** in **Taris, Upper City Cantina**.

> **Expected journal update — index 10:** I was confronted in the Taris Upper City Cantina by Kad Dokrij, a man who was able to sense my involvements in the Derelict Station. He's asking me to gather a data package from the data center back at the station, and he will reward me greatly.

### 2. Speak with Kad Dokrij in Taris, Upper City Cantina — Finished

Speak with **Kad Dokrij** in **Taris, Upper City Cantina**.

> **Expected journal update — index 20:** I returned the data package to Kad Dokrij. He rewarded me and will train me in the ways of the force whenever I wish.

**Known item transfer:** 3000 × **Credits** (`Gold_001`).

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 20**:

> I returned the data package to Kad Dokrij. He rewarded me and will train me in the ways of the force whenever I wish.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 3000 × **Credits** (`Gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Kad Dokrij** (`SW_TarisCantinaGuest11`) — `Taris, Upper City Cantina`

**Locations implicated by actor/object placement or explicit travel:**
- **Taris, Upper City Cantina**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_DerelictData`
**Generated category:** Side Quests
**Journal entries:** 3

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 10 | — | I was confronted in the Taris Upper City Cantina by Kad Dokrij, a man who was able to sense my involvements in the Derelict Station. He's asking me to gather a data package from the data center back at the station, and he will reward me greatly. | 1 |
| 20 | Finished | I returned the data package to Kad Dokrij. He rewarded me and will train me in the ways of the force whenever I wish. | 1 |

### Record-level trigger map

### Stage 10

I was confronted in the Taris Upper City Cantina by Kad Dokrij, a man who was able to sense my involvements in the Derelict Station. He's asking me to gather a data package from the data center back at the station, and he will reward me greatly.

**How this stage is set:**
- Dialogue INFO `26646200613030431562` under topic **Greeting 2**; speaker Kad Dokrij (`SW_TarisCantinaGuest11`). locations: `Taris, Upper City Cantina`. conditions: Journal `SW_TarisChapX3-2` Greater 0. response: “Greetings, my name is %Name. I can sense you've been to the Derelict Station? Don't ask me how I know. Do you think you can travel back to that place? I have no way of accessing it myself. Inside there should be a large data center. If you can gather any data packages you find and bring them to me I will reward you greatly.”.

```text
Journal SW_DerelictData 10
Goodbye
```

### Stage 20 — Finished

I returned the data package to Kad Dokrij. He rewarded me and will train me in the ways of the force whenever I wish.

**How this stage is set:**
- Dialogue INFO `85459440177572202` under topic **Greeting 2**; speaker Kad Dokrij (`SW_TarisCantinaGuest11`). locations: `Taris, Upper City Cantina`. conditions: Journal `SW_DerelictData` Equal 10; Item/ItemType `SW_DerelictDataPack` Equal 1. response: “That's it! Thank you, %PCname. This data will do just fine. Here is a reward for your troubles. You know, I sense the force is strong in you. If you wish, I can train you in lightsabers or other force abilities. Just let me know, friend.”.

```text
player->RemoveItem "SW_DerelictDataPack" 1
player->AddItem "Gold_001" 3000
Journal SW_DerelictData 20
```

### Related records and locations

**Dialogue speakers:**
- Kad Dokrij (`SW_TarisCantinaGuest11`) — `Taris, Upper City Cantina`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)
- Derelict Data Package (`SW_DerelictDataPack`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Taris, Upper City Cantina`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `10` is obtainable.
- [ ] Reach index `10`: I was confronted in the Taris Upper City Cantina by Kad Dokrij, a man who was able to sense my involvements in…
- [ ] Reach index `20` (`Finished`): I returned the data package to Kad Dokrij. He rewarded me and will train me in the ways of the force whenever …
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_DerelictData`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
