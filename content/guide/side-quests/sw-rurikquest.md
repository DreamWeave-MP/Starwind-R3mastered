---
title: "Anniversary Flower"
description: "Walkthrough and QA reference for Anniversary Flower (SW_RurikQuest)."
weight: 14
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_RurikQuest"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_RurikQuest` |
| **Category** | Side Quests |
| **Journal entries** | 3 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Rurik** in **Dantooine, Ballast** and ask about **anniversary**. |
| **Key locations** | Dantooine, Ballast |
| **Key characters** | Rurik |

## Walkthrough

### 1. Speak with Rurik in Dantooine, Ballast and ask about anniversary

Speak with **Rurik** in **Dantooine, Ballast** and ask about **anniversary**.

> **Expected journal update — index 5:** Rurik has asked me to find a rare Red Iris Flower for his wife for their anniversary, he says he's seen them grow in town before.

### 2. Speak with Rurik in Dantooine, Ballast and ask about anniversary — Finished

Speak with **Rurik** in **Dantooine, Ballast** and ask about **anniversary**.

> **Expected journal update — index 10:** Rurik was very grateful, as was his wife, for finding the Red Iris Flower for him. In return he has given me 300 credits.

**Known item transfer:** 300 × **Credits** (`Gold_001`).

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 10**:

> Rurik was very grateful, as was his wife, for finding the Red Iris Flower for him. In return he has given me 300 credits.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 300 × **Credits** (`Gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Rurik** (`SW_Rurik`) — `Dantooine, Ballast`

**Locations implicated by actor/object placement or explicit travel:**
- **Dantooine, Ballast**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_RurikQuest`
**Generated category:** Side Quests
**Journal entries:** 3

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | Rurik has asked me to find a rare Red Iris Flower for his wife for their anniversary, he says he's seen them grow in town before. | 1 |
| 10 | Finished | Rurik was very grateful, as was his wife, for finding the Red Iris Flower for him. In return he has given me 300 credits. | 1 |

### Record-level trigger map

### Stage 5

Rurik has asked me to find a rare Red Iris Flower for his wife for their anniversary, he says he's seen them grow in town before.

**How this stage is set:**
- Dialogue INFO `15496232451543920900` under topic **anniversary**; speaker Rurik (`SW_Rurik`). locations: `Dantooine, Ballast`. conditions: Journal `SW_RurikQuest` Equal 0. response: “Yes its my wife and my anniversary, and I'm looking for a rare Red Iris Flower. I've seen them grow outside of town from time to time but I haven't seen one in ages. If you find one and bring it to me I'll reward you.”.

```text
Journal SW_RurikQuest 5
```

### Stage 10 — Finished

Rurik was very grateful, as was his wife, for finding the Red Iris Flower for him. In return he has given me 300 credits.

**How this stage is set:**
- Dialogue INFO `2711123745171857634` under topic **anniversary**; speaker Rurik (`SW_Rurik`). locations: `Dantooine, Ballast`. conditions: Journal `SW_RurikQuest` Equal 5; Item/ItemType `SW_FloraRedFlower` GreaterEqual 1. response: “Wow you found it! You couldn't have made this day more special, here, take these credits, an adventurer like you can always use more medkits.”.

```text
Journal SW_RurikQuest 10
player->removeitem, "SW_FloraRedFlower", 1
player->additem, "Gold_001", 300
```

### Related records and locations

**Dialogue speakers:**
- Rurik (`SW_Rurik`) — `Dantooine, Ballast`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)
- Red Iris Flower (`SW_FloraRedFlower`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Dantooine, Ballast`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: Rurik has asked me to find a rare Red Iris Flower for his wife for their anniversary, he says he's seen them g…
- [ ] Reach index `10` (`Finished`): Rurik was very grateful, as was his wife, for finding the Red Iris Flower for him. In return he has given me 3…
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_RurikQuest`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
