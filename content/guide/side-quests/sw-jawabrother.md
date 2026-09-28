---
title: "Jawa Brothers"
description: "Walkthrough and QA reference for Jawa Brothers (SW_JawaBrother)."
weight: 46
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_JawaBrother"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_JawaBrother` |
| **Category** | Side Quests |
| **Journal entries** | 3 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Tao Oose** in **Tatooine, Sandcrawler**. |
| **Key locations** | Tatooine, Sandcrawler |
| **Key characters** | Tao Oose |

## Walkthrough

### 1. Speak with Tao Oose in Tatooine, Sandcrawler

Speak with **Tao Oose** in **Tatooine, Sandcrawler**.

> **Expected journal update — index 1:** I found a Jawa inside a crashed sandcrawler, he says his brother has been captured and taken by Sand People not far from their sandcrawler. If I set his brother free he will reward me.

### 2. Speak with Tao Oose in Tatooine, Sandcrawler — Finished

Speak with **Tao Oose** in **Tatooine, Sandcrawler**.

> **Expected journal update — index 5:** I have freed the Jawa's brother and returned to him, he gave to me a droid I can bring to my help whenever I please.

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 5**:

> I have freed the Jawa's brother and returned to him, he gave to me a droid I can bring to my help whenever I please.

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Tao Oose** (`SW_JewaSandcrawler`) — `Tatooine, Sandcrawler`

**Locations implicated by actor/object placement or explicit travel:**
- **Tatooine, Sandcrawler**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_JawaBrother`
**Generated category:** Side Quests
**Journal entries:** 3

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 1 | — | I found a Jawa inside a crashed sandcrawler, he says his brother has been captured and taken by Sand People not far from their sandcrawler. If I set his brother free he will reward me. | 1 |
| 5 | Finished | I have freed the Jawa's brother and returned to him, he gave to me a droid I can bring to my help whenever I please. | 1 |

### Record-level trigger map

### Stage 1

I found a Jawa inside a crashed sandcrawler, he says his brother has been captured and taken by Sand People not far from their sandcrawler. If I set his brother free he will reward me.

**How this stage is set:**
- Dialogue INFO `8401207142402918270` under topic **Greeting 7**; speaker Tao Oose (`SW_JewaSandcrawler`). locations: `Tatooine, Sandcrawler`. conditions: Journal `SW_JawaBrother` Equal 0. response: “I see you are capable and can make it through the sands on foot. There are too many sand people around, and they have taken my brother. I don't know where exactly they have taken him, but if you can find him I will reward you with one of my droids.”.

```text
Journal SW_JawaBrother 1
PlaySound3d "SW_TtokkGreet"
```

### Stage 5 — Finished

I have freed the Jawa's brother and returned to him, he gave to me a droid I can bring to my help whenever I please.

**How this stage is set:**
- Dialogue INFO `30630211202882714941` under topic **Greeting 7**; speaker Tao Oose (`SW_JewaSandcrawler`). locations: `Tatooine, Sandcrawler`. conditions: Journal `SW_JawaBrother` Equal 1; Journal `SW_OddPart` Equal 1. response: “That part, it was my brothers. This means he won't be returning anytime soon. He has led a life no other Jawa has. I may one day see him again, for now, take this droid as a reward, and thank you.

 *The Spell Call Protocol Droid has been added to your spell list*”.

```text
Journal SW_JawaBrother 5
player->removeitem sw_protopart 1
player->addspell "SW_ProtocolSum"
```

### Related records and locations

**Dialogue speakers:**
- Tao Oose (`SW_JewaSandcrawler`) — `Tatooine, Sandcrawler`

**Items referenced by related script/result code:**
- Protocol Droid Part (`SW_ProtoPart`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Tatooine, Sandcrawler`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `1` is obtainable.
- [ ] Reach index `1`: I found a Jawa inside a crashed sandcrawler, he says his brother has been captured and taken by Sand People no…
- [ ] Reach index `5` (`Finished`): I have freed the Jawa's brother and returned to him, he gave to me a droid I can bring to my help whenever I p…
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_JawaBrother`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
