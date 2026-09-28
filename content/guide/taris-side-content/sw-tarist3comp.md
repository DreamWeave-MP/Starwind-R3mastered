---
title: "Taris T3 Comp (internal journal)"
description: "Walkthrough and QA reference for Taris T3 Comp (internal journal) (SW_TarisT3Comp)."
weight: 7
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_TarisT3Comp"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_TarisT3Comp` |
| **Category** | Taris Side Content |
| **Journal entries** | 2 |
| **Completion branches** | No explicit Finished marker |
| **Starts by** | Speak with **Janice Nall** in **Taris, Upper City South** and ask about **T3 droid**. |
| **Key locations** | Taris, Upper City South |
| **Key characters** | T3-H8, Janice Nall |

## Walkthrough

### 1. Speak with Janice Nall in Taris, Upper City South and ask about T3 droid

Speak with **Janice Nall** in **Taris, Upper City South** and ask about **T3 droid**.

> **Expected journal update — index 10:** I purchased a droid on Taris who went through heavy repairs, but is supposedly in working order.

### 2. Speak with T3-H8 in Taris, Upper City South

Speak with **T3-H8** in **Taris, Upper City South**.

> **Expected journal update — index 20:** I met my new T3-H8 companion, and it seems to be working fine.

## Characters & locations

**Characters directly tied to quest dialogue:**
- **T3-H8** (`SW_T3H8Comp`) — `Taris, Upper City South`
- **Janice Nall** (`SW_TarisDroidSeller`) — `Taris, Upper City South`

**Locations implicated by actor/object placement or explicit travel:**
- **Taris, Upper City South**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_TarisT3Comp`
**Generated category:** Taris Side Content
**Journal entries:** 2

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 10 | — | I purchased a droid on Taris who went through heavy repairs, but is supposedly in working order. | 2 |
| 20 | — | I met my new T3-H8 companion, and it seems to be working fine. | 1 |

### Record-level trigger map

### Stage 10

I purchased a droid on Taris who went through heavy repairs, but is supposedly in working order.

**How this stage is set:**
- Dialogue INFO `19931262841434222033` under topic **T3 droid**; speaker Janice Nall (`SW_TarisDroidSeller`). locations: `Taris, Upper City South`. conditions: Journal `SW_TarisT3Comp` Less 10; Function/Choice Equal 1; Item/ItemType `Gold_001` GreaterEqual 1000. response: “Thank you so much! The droid is now yours. Please take good care of him.”.

```text
player->Removeitem "Gold_001" 1000
Journal SW_TarisT3Comp 10
```
- Dialogue INFO `4683198001024019152` under topic **T3 droid**; speaker Janice Nall (`SW_TarisDroidSeller`). locations: `Taris, Upper City South`. conditions: Journal `SW_TarisT3Comp` Less 10; Function/Choice Equal 2; Function/PcSpeechcraft GreaterEqual 50; Item/ItemType `Gold_001` GreaterEqual 750. response: “Well you're very charming and I want you to return to my shop when things pick back up. I'll accept this offer, the droid is yours.”.

```text
player->removeitem "Gold_001" 750
Journal SW_TarisT3Comp 10
```

### Stage 20

I met my new T3-H8 companion, and it seems to be working fine.

**How this stage is set:**
- Dialogue INFO `569821932228079478` under topic **Greeting 7**; speaker T3-H8 (`SW_T3H8Comp`). locations: `Taris, Upper City South`. conditions: Journal `SW_TarisT3Comp` Equal 10. response: “Beep beep boop bop!
 *This droid seems to be working properly and is now following me*”.

```text
Journal SW_TarisT3Comp 20
set companion to 1
AddTopic "follow"
```

### Related records and locations

**Dialogue speakers:**
- T3-H8 (`SW_T3H8Comp`) — `Taris, Upper City South`
- Janice Nall (`SW_TarisDroidSeller`) — `Taris, Upper City South`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Taris, Upper City South`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `10` is obtainable.
- [ ] Reach index `10`: I purchased a droid on Taris who went through heavy repairs, but is supposedly in working order.
- [ ] Reach index `20`: I met my new T3-H8 companion, and it seems to be working fine.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_TarisT3Comp`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
