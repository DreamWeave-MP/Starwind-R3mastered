---
title: "The Wedding Ring"
description: "Walkthrough and QA reference for The Wedding Ring (SW_Ring)."
weight: 105
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_Ring"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_Ring` |
| **Category** | Side Quests |
| **Journal entries** | 3 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Gil Vonden** in **Dantooine, Ballast** and ask about **wife**. |
| **Key locations** | Dantooine, Ballast |
| **Key characters** | Gil Vonden |

## Walkthrough

### 1. Speak with Gil Vonden in Dantooine, Ballast and ask about wife

Speak with **Gil Vonden** in **Dantooine, Ballast** and ask about **wife**.

> **Expected journal update — index 5:** I met a man named Gil Vonden who says his wife is one of the missing persons in the town of Ballast. If I find any evidence of her being alive or dead I should bring it to him.

### 2. Speak with Gil Vonden in Dantooine, Ballast and ask about wife — Finished

Speak with **Gil Vonden** in **Dantooine, Ballast** and ask about **wife**.

> **Expected journal update — index 10:** I have returned to Gil Vonden with his dead wife's wedding ring, he is devastated by the news and has given me 200 credits.

**Known item transfer:** 200 × **Credits** (`Gold_001`).

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 10**:

> I have returned to Gil Vonden with his dead wife's wedding ring, he is devastated by the news and has given me 200 credits.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 200 × **Credits** (`Gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Gil Vonden** (`SW_RingAlive`) — `Dantooine, Ballast`

**Locations implicated by actor/object placement or explicit travel:**
- **Dantooine, Ballast**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_Ring`
**Generated category:** Side Quests
**Journal entries:** 3

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | I met a man named Gil Vonden who says his wife is one of the missing persons in the town of Ballast. If I find any evidence of her being alive or dead I should bring it to him. | 1 |
| 10 | Finished | I have returned to Gil Vonden with his dead wife's wedding ring, he is devastated by the news and has given me 200 credits. | 1 |

### Record-level trigger map

### Stage 5

I met a man named Gil Vonden who says his wife is one of the missing persons in the town of Ballast. If I find any evidence of her being alive or dead I should bring it to him.

**How this stage is set:**
- Dialogue INFO `16852466631541667` under topic **wife**; speaker Gil Vonden (`SW_RingAlive`). locations: `Dantooine, Ballast`. conditions: Journal `SW_Ring` Equal 0. response: “My wife is missing, here one minute and gone another. I've looked everywhere and talked to everyone but there's just no trace of her. Please, if you find any clues let me know.”.

```text
Journal SW_Ring 5
```

### Stage 10 — Finished

I have returned to Gil Vonden with his dead wife's wedding ring, he is devastated by the news and has given me 200 credits.

**How this stage is set:**
- Dialogue INFO `299191448479008979` under topic **wife**; speaker Gil Vonden (`SW_RingAlive`). locations: `Dantooine, Ballast`. conditions: Journal `SW_Ring` Equal 5; Item/ItemType `SW_WeddingRing` GreaterEqual 1. response: “Her ring? That means.. oh no, why? Why would anyone do this? Here, for everything you must have gone through to get this. I just, I'm done.”.

```text
Journal SW_Ring 10
player->additem "Gold_001", 200
```

### Related records and locations

**Dialogue speakers:**
- Gil Vonden (`SW_RingAlive`) — `Dantooine, Ballast`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Dantooine, Ballast`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: I met a man named Gil Vonden who says his wife is one of the missing persons in the town of Ballast. If I find…
- [ ] Reach index `10` (`Finished`): I have returned to Gil Vonden with his dead wife's wedding ring, he is devastated by the news and has given me…
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_Ring`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
