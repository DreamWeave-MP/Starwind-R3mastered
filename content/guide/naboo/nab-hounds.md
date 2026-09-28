---
title: "The Bamboo Hounds"
description: "Walkthrough and QA reference for The Bamboo Hounds (Nab_Hounds)."
weight: 9
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "Nab_Hounds"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `Nab_Hounds` |
| **Category** | Naboo |
| **Journal entries** | 4 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Bago** in **Naboo, Bingwie Village** and ask about **hounds**. |
| **Key locations** | Naboo, Bingwie Village |
| **Key characters** | Bago |

## Walkthrough

### 1. Speak with Bago in Naboo, Bingwie Village and ask about hounds

Speak with **Bago** in **Naboo, Bingwie Village** and ask about **hounds**.

> **Expected journal update — index 5:** Bago of the Bingwies has asked me to help rid them of their plight that is Bogclaws and Narglatches hunting them during the night. He's asked that I bring to him 5 Bogclaw Meats and 5 Narglatch Whiskers to prove I've done this.

### 2. Reach journal stage 10

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 10:** I have 5 Bogclaw Meat and 5 Narglatch Whiskers. I can return to Bago with them and show him I've done as he's asked.

### 3. Speak with Bago in Naboo, Bingwie Village and ask about hounds — Finished

Speak with **Bago** in **Naboo, Bingwie Village** and ask about **hounds**.

> **Expected journal update — index 15:** Bago has thanked me and asked if I would continue to help the Bingwie around the village. He says there are many of them that need help. He also told me that once everyone has been helped in the village that I should speak with him.

**Outcome:** this journal entry is marked as a finished branch.

{% callout(kind="warning", title="Playtest flag") %}
1 journal stage on this page lack a literal setter in the current static scan.
{% end %}

## Endings & branches

The journal has one explicit finished state at **index 15**:

> Bago has thanked me and asked if I would continue to help the Bingwie around the village. He says there are many of them that need help. He also told me that once everyone has been helped in the village that I should speak with him.

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Bago** (`SW_Bago`) — `Naboo, Bingwie Village`

**Locations implicated by actor/object placement or explicit travel:**
- **Naboo, Bingwie Village**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `Nab_Hounds`
**Generated category:** Naboo
**Journal entries:** 4

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | Bago of the Bingwies has asked me to help rid them of their plight that is Bogclaws and Narglatches hunting them during the night. He's asked that I bring to him 5 Bogclaw Meats and 5 Narglatch Whiskers to prove I've done this. | 1 |
| 10 | — | I have 5 Bogclaw Meat and 5 Narglatch Whiskers. I can return to Bago with them and show him I've done as he's asked. | 0 |
| 15 | Finished | Bago has thanked me and asked if I would continue to help the Bingwie around the village. He says there are many of them that need help. He also told me that once everyone has been helped in the village that I should speak with him. | 2 |

### Record-level trigger map

### Stage 5

Bago of the Bingwies has asked me to help rid them of their plight that is Bogclaws and Narglatches hunting them during the night. He's asked that I bring to him 5 Bogclaw Meats and 5 Narglatch Whiskers to prove I've done this.

**How this stage is set:**
- Dialogue INFO `221382672151682296` under topic **hounds**; speaker Bago (`SW_Bago`). locations: `Naboo, Bingwie Village`. conditions: Journal `Nab_Hounds` Equal 0. response: “The hounds of the forest. Bogclaws and Narglatches. They come into the village at night and hunt Bingwies. If you could show them that they can be hunted they may steer away. Please bring me 5 Bogclaw Meats and 5 Narglatch Whiskers to show that this has been done.”.

```text
Journal Nab_Hounds 5
```

### Stage 10

I have 5 Bogclaw Meat and 5 Narglatch Whiskers. I can return to Bago with them and show him I've done as he's asked.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 15 — Finished

Bago has thanked me and asked if I would continue to help the Bingwie around the village. He says there are many of them that need help. He also told me that once everyone has been helped in the village that I should speak with him.

**How this stage is set:**
- Dialogue INFO `165213043758276837` under topic **hounds**; speaker Bago (`SW_Bago`). locations: `Naboo, Bingwie Village`. conditions: Journal `Nab_Hounds` Equal 10; Item/ItemType `Nab_NargltachWhiskers` GreaterEqual 5; Item/ItemType `Nab_BogclawMeat` GreaterEqual 5. response: “Maybe now thanks to your efforts the Bingwies can leave their homes safe at night. Thank you stranger. Please, ask around our village and see if any other Bingwies need help. There are many around here that could use the assistance of an adventurer. Once you've helped around with the other Bingwies, come talk to me again.”.

```text
Journal Nab_Hounds 15
```
- Dialogue INFO `298996805700419110` under topic **hounds**; speaker Bago (`SW_Bago`). locations: `Naboo, Bingwie Village`. conditions: Journal `Nab_Hounds` Equal 5; Item/ItemType `Nab_NargltachWhiskers` GreaterEqual 5; Item/ItemType `Nab_BogclawMeat` GreaterEqual 5. response: “Maybe now thanks to your efforts the Bingwies can leave their homes safe at night. Thank you stranger. Please, ask around our village and see if any other Bingwies need help. There are many around here that could use the assistance of an adventurer. Once you've helped around with the other Bingwies, come talk to me again.”.

```text
Journal Nab_Hounds 15
```

### Related records and locations

**Dialogue speakers:**
- Bago (`SW_Bago`) — `Naboo, Bingwie Village`

**Scripts that read or write this journal:**
- `Nab_BagoScript` — Creature Bago (`SW_Bago`); placed in `Naboo, Bingwie Village`

**Cells implicated by actor/object placement or explicit travel code:**
- `Naboo, Bingwie Village`

<details><summary>Journal-state readers (1 code sites)</summary>

- Script `Nab_BagoScript`. attached to Creature Bago (`SW_Bago`); placed in `Naboo, Bingwie Village`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: Bago of the Bingwies has asked me to help rid them of their plight that is Bogclaws and Narglatches hunting th…
- [ ] Reach index `10`: I have 5 Bogclaw Meat and 5 Narglatch Whiskers. I can return to Bago with them and show him I've done as he's …
- [ ] Reach index `15` (`Finished`): Bago has thanked me and asked if I would continue to help the Bingwie around the village. He says there are ma…
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `Nab_Hounds`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
