---
title: "Hide of a Strider"
description: "Walkthrough and QA reference for Hide of a Strider (SW_HuntDantooine)."
weight: 44
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_HuntDantooine"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_HuntDantooine` |
| **Category** | Side Quests |
| **Journal entries** | 3 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Dal Alajama** in **Tatooine, Hunter's Lodge** and ask about **hunter challenges**. |
| **Observed prerequisite journals** | `SW_Hunt` |
| **Key locations** | Tatooine, Hunter's Lodge |
| **Key characters** | Dal Alajama |

## Walkthrough

### 1. Speak with Dal Alajama in Tatooine, Hunter's Lodge and ask about hunter challenges

Speak with **Dal Alajama** in **Tatooine, Hunter's Lodge** and ask about **hunter challenges**.

> **Expected journal update — index 5:** I have received a hunter's challenge from a fellow hunter, Dal Alajama, to travel to Dantooine and retrieve a Strider's Hide from a Hill Strider or Plain Strider

### 2. Speak with Dal Alajama in Tatooine, Hunter's Lodge and ask about hunter challenges — Finished

Speak with **Dal Alajama** in **Tatooine, Hunter's Lodge** and ask about **hunter challenges**.

> **Expected journal update — index 10:** I've gained faction reputation and 500 gold for turnin in the Strider's Hide to Dal Alajama.

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 10**:

> I've gained faction reputation and 500 gold for turnin in the Strider's Hide to Dal Alajama.

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Dal Alajama** (`SW_HunterDantooine`) — `Tatooine, Hunter's Lodge`

**Locations implicated by actor/object placement or explicit travel:**
- **Tatooine, Hunter's Lodge**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_HuntDantooine`
**Generated category:** Side Quests
**Journal entries:** 3

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | I have received a hunter's challenge from a fellow hunter, Dal Alajama, to travel to Dantooine and retrieve a Strider's Hide from a Hill Strider or Plain Strider | 1 |
| 10 | Finished | I've gained faction reputation and 500 gold for turnin in the Strider's Hide to Dal Alajama. | 1 |

### Record-level trigger map

### Stage 5

I have received a hunter's challenge from a fellow hunter, Dal Alajama, to travel to Dantooine and retrieve a Strider's Hide from a Hill Strider or Plain Strider

**How this stage is set:**
- Dialogue INFO `3093176963166827005` under topic **hunter challenges**; speaker Dal Alajama (`SW_HunterDantooine`). locations: `Tatooine, Hunter's Lodge`. conditions: Journal `SW_HuntDantooine` Equal 0; Journal `SW_Hunt` Equal 35. response: “I've got a hunter's challenge for you if your interested. You'll have to travel to Dantooine and get a strider hide off of a Hill Strider or Plain Strider. Dantooine can be a great place to hunt, but it's best to start off small to get acquainted. Come talk to me again if you get one.”.

```text
Journal "SW_HuntDantooine" 5
PlaySound3d "DalAlaj1"
StopSound "DalAlaj2"
```

### Stage 10 — Finished

I've gained faction reputation and 500 gold for turnin in the Strider's Hide to Dal Alajama.

**How this stage is set:**
- Dialogue INFO `723125239266132692` under topic **hunter challenges**; speaker Dal Alajama (`SW_HunterDantooine`). locations: `Tatooine, Hunter's Lodge`. conditions: Journal `SW_HuntDantooine` Equal 5; Item/ItemType `SW_StriderHide` GreaterEqual 1. response: “That's exactly what we were looking for. Adam Moreau has some more challenges for you if you've got the time.”.

```text
Journal "SW_HuntDantooine" 10
Journal "SW_Hunt" 40
player->modReputation 2
```

### Related records and locations

**Dialogue speakers:**
- Dal Alajama (`SW_HunterDantooine`) — `Tatooine, Hunter's Lodge`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)
- Strider Hide (`SW_StriderHide`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Tatooine, Hunter's Lodge`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: I have received a hunter's challenge from a fellow hunter, Dal Alajama, to travel to Dantooine and retrieve a …
- [ ] Reach index `10` (`Finished`): I've gained faction reputation and 500 gold for turnin in the Strider's Hide to Dal Alajama.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_HuntDantooine`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
