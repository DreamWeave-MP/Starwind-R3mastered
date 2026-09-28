---
title: "Greata The Pig"
description: "Walkthrough and QA reference for Greata The Pig (SW_Greata)."
weight: 43
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_Greata"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_Greata` |
| **Category** | Side Quests |
| **Journal entries** | 2 |
| **Completion branches** | No explicit Finished marker |
| **Starts by** | Speak with **Grashnok** in **Gamorr, Ucksmug** and ask about **hogs**. |
| **Key locations** | Gamorr, Ucksmug |
| **Key characters** | Grashnok |

## Walkthrough

### 1. Speak with Grashnok in Gamorr, Ucksmug and ask about hogs

Speak with **Grashnok** in **Gamorr, Ucksmug** and ask about **hogs**.

> **Expected journal update — index 5:** I have bought a Gamorr Hog from Grashnok that is supposed to be one of his best fighting hogs. I can find her at the pig pen in Ucksmug.

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Grashnok** (`SW_GamorrPigHandler`) — `Gamorr, Ucksmug`

**Locations implicated by actor/object placement or explicit travel:**
- **Gamorr, Ucksmug**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_Greata`
**Generated category:** Side Quests
**Journal entries:** 2

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | I have bought a Gamorr Hog from Grashnok that is supposed to be one of his best fighting hogs. I can find her at the pig pen in Ucksmug. | 1 |

### Record-level trigger map

### Stage 5

I have bought a Gamorr Hog from Grashnok that is supposed to be one of his best fighting hogs. I can find her at the pig pen in Ucksmug.

**How this stage is set:**
- Dialogue INFO `3094335671195728` under topic **hogs**; speaker Grashnok (`SW_GamorrPigHandler`). locations: `Gamorr, Ucksmug`. conditions: Item/ItemType `Gold_001` GreaterEqual 500; Function/Choice Equal 1. response: “She's all yours, make sure she gets lots of slop because she's an eater! You can find her in the pen over by the gates to Ucksmug.”.

```text
PlaySound3D "SW_Gamm02"
Journal SW_Greata 5
```

### Related records and locations

**Dialogue speakers:**
- Grashnok (`SW_GamorrPigHandler`) — `Gamorr, Ucksmug`

**Scripts that read or write this journal:**
- `SW_PigScripts` — Creature Greata (`SW_GammPigFollow`); placed in `Gamorr, Ucksmug`

**Cells implicated by actor/object placement or explicit travel code:**
- `Gamorr, Ucksmug`

<details><summary>Journal-state readers (1 code sites)</summary>

- Script `SW_PigScripts`. attached to Creature Greata (`SW_GammPigFollow`); placed in `Gamorr, Ucksmug`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: I have bought a Gamorr Hog from Grashnok that is supposed to be one of his best fighting hogs. I can find her …
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_Greata`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
