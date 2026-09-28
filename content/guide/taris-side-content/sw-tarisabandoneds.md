---
title: "Abandoned Underground"
description: "Walkthrough and QA reference for Abandoned Underground (SW_TarisAbandonedS)."
weight: 1
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_TarisAbandonedS"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_TarisAbandonedS` |
| **Category** | Taris Side Content |
| **Journal entries** | 3 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Harleo Kemhouf** in **Taris, Undercity**. |
| **Key locations** | Taris, Undercity |
| **Key characters** | Harleo Kemhouf |

## Walkthrough

### 1. Speak with Harleo Kemhouf in Taris, Undercity

Speak with **Harleo Kemhouf** in **Taris, Undercity**.

> **Expected journal update — index 10:** I ran into some Sith in the Undercity of Taris. I told them of the new Taris government, but they won't leave without their lost datapad.

### 2. Speak with Harleo Kemhouf in Taris, Undercity — Finished

Speak with **Harleo Kemhouf** in **Taris, Undercity**.

> **Expected journal update — index 20:** The Sith within the Undercity thanked me for finding their datapad, and decided to join the Taris government.

**Known item transfer:** 500 × **Credits** (`Gold_001`).

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 20**:

> The Sith within the Undercity thanked me for finding their datapad, and decided to join the Taris government.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 500 × **Credits** (`Gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Harleo Kemhouf** (`SW_SithAbandoned1`) — `Taris, Undercity`

**Locations implicated by actor/object placement or explicit travel:**
- **Taris, Undercity**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_TarisAbandonedS`
**Generated category:** Taris Side Content
**Journal entries:** 3

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 10 | — | I ran into some Sith in the Undercity of Taris. I told them of the new Taris government, but they won't leave without their lost datapad. | 1 |
| 20 | Finished | The Sith within the Undercity thanked me for finding their datapad, and decided to join the Taris government. | 1 |

### Record-level trigger map

### Stage 10

I ran into some Sith in the Undercity of Taris. I told them of the new Taris government, but they won't leave without their lost datapad.

**How this stage is set:**
- Dialogue INFO `117321491841423179` under topic **Greeting 5**; speaker Harleo Kemhouf (`SW_SithAbandoned1`). locations: `Taris, Undercity`. conditions: Function/Choice Equal 3. response: “Well things is, I've been looking for my datapad, it has pictures of my wife who's passed, it's all I have left of her. But we're fresh out of blaster bolts, and to be honest too worn out. If you can find me my datapad I'll think about joining your government.”.

```text
Journal SW_TarisAbandonedS 10
Goodbye
```

### Stage 20 — Finished

The Sith within the Undercity thanked me for finding their datapad, and decided to join the Taris government.

**How this stage is set:**
- Dialogue INFO `31105203112552310002` under topic **Greeting 5**; speaker Harleo Kemhouf (`SW_SithAbandoned1`). locations: `Taris, Undercity`. conditions: Journal `SW_TarisAbandonedS` Equal 10; Item/ItemType `SW_SithAbanQu1` GreaterEqual 1. response: “That's it, thank you. I talked to my partner here and we decided we will give your government a try. We sure aren't going back to the Sith regiment. Take this payment for a reward.”.

```text
player->AddItem "Gold_001" 500
StartScript SW_AbandonedSithLeaveTaris
Journal SW_TarisAbandonedS 20
Goodbye
```

### Related records and locations

**Dialogue speakers:**
- Harleo Kemhouf (`SW_SithAbandoned1`) — `Taris, Undercity`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)
- Lost Personal Datapad (`SW_SithAbanQu1`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Taris, Undercity`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `10` is obtainable.
- [ ] Reach index `10`: I ran into some Sith in the Undercity of Taris. I told them of the new Taris government, but they won't leave …
- [ ] Reach index `20` (`Finished`): The Sith within the Undercity thanked me for finding their datapad, and decided to join the Taris government.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_TarisAbandonedS`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
