---
title: "Starkiller the Upset"
description: "Walkthrough and QA reference for Starkiller the Upset (SW_Countdown)."
weight: 71
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_Countdown"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_Countdown` |
| **Category** | Side Quests |
| **Journal entries** | 5 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Reeman Starkiller** in **Tatooine, Cantina**. |
| **Key locations** | Tatooine, Cantina |
| **Key characters** | Reeman Starkiller |

## Walkthrough

### 1. Speak with Reeman Starkiller in Tatooine, Cantina

Speak with **Reeman Starkiller** in **Tatooine, Cantina**.

> **Expected journal update — index 5:** Starkiller has began his countdown.

### 2. Speak with Reeman Starkiller in Tatooine, Cantina

Speak with **Reeman Starkiller** in **Tatooine, Cantina**.

> **Expected journal update — index 10:** Starkiller has counted down to 2.

### 3. Speak with Reeman Starkiller in Tatooine, Cantina

Speak with **Reeman Starkiller** in **Tatooine, Cantina**.

> **Expected journal update — index 15:** Starkiller has counted down to 1.

### 4. Speak with Reeman Starkiller in Tatooine, Cantina — Finished

Speak with **Reeman Starkiller** in **Tatooine, Cantina**.

> **Expected journal update — index 20:** I have been attacked by Starkiller.

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 20**:

> I have been attacked by Starkiller.

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Reeman Starkiller** (`SW_Duelist6`) — `Tatooine, Cantina`

**Locations implicated by actor/object placement or explicit travel:**
- **Tatooine, Cantina**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_Countdown`
**Generated category:** Side Quests
**Journal entries:** 5

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | Starkiller has began his countdown. | 1 |
| 10 | — | Starkiller has counted down to 2. | 1 |
| 15 | — | Starkiller has counted down to 1. | 1 |
| 20 | Finished | I have been attacked by Starkiller. | 1 |

### Record-level trigger map

### Stage 5

Starkiller has began his countdown.

**How this stage is set:**
- Dialogue INFO `1049716620173338656` under topic **Greeting 7**; speaker Reeman Starkiller (`SW_Duelist6`). locations: `Tatooine, Cantina`. conditions: Journal `SW_Countdown` Equal 0. response: “Look kid, I'm not in the mood, and I'm not someone you want to fight. Best move along. I'll give you the count of 3.”.

```text
Journal "SW_Countdown" 5
PlaySound3d "StarkillerGreet"
StopSound "StarkillerOne"
```

### Stage 10

Starkiller has counted down to 2.

**How this stage is set:**
- Dialogue INFO `9772268072709719189` under topic **Greeting 7**; speaker Reeman Starkiller (`SW_Duelist6`). locations: `Tatooine, Cantina`. conditions: Journal `SW_Countdown` Equal 5. response: “Two...”.

```text
Journal "SW_Countdown" 10
StopSound "StarkillerGreet"
StopSound "StarkillerOne"
```

### Stage 15

Starkiller has counted down to 1.

**How this stage is set:**
- Dialogue INFO `75833352282216546` under topic **Greeting 7**; speaker Reeman Starkiller (`SW_Duelist6`). locations: `Tatooine, Cantina`. conditions: Journal `SW_Countdown` Equal 10. response: “One...”.

```text
Journal "SW_Countdown" 15
StopSound "StarkillerGreet"
PlaySound3d "StarkillerOne"
```

### Stage 20 — Finished

I have been attacked by Starkiller.

**How this stage is set:**
- Dialogue INFO `2406325943321866576` under topic **Greeting 7**; speaker Reeman Starkiller (`SW_Duelist6`). locations: `Tatooine, Cantina`. conditions: Journal `SW_Countdown` Equal 15. response: “I warned you!”.

```text
Journal "SW_Countdown" 20
StopSound "StarkillerGreet"
StopSound "StarkillerOne"
```

### Related records and locations

**Dialogue speakers:**
- Reeman Starkiller (`SW_Duelist6`) — `Tatooine, Cantina`

**Cells implicated by actor/object placement or explicit travel code:**
- `Tatooine, Cantina`

<details><summary>Other directly addressed object IDs in related code</summary>

- Reeman Starkiller (`SW_Duelist6`)

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: Starkiller has began his countdown.
- [ ] Reach index `10`: Starkiller has counted down to 2.
- [ ] Reach index `15`: Starkiller has counted down to 1.
- [ ] Reach index `20` (`Finished`): I have been attacked by Starkiller.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_Countdown`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
