---
title: "Safebox's Lost Droid"
description: "Walkthrough and QA reference for Safebox's Lost Droid (SW_TarisSimpyJ)."
weight: 2
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_TarisSimpyJ"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_TarisSimpyJ` |
| **Category** | Taris Side Content |
| **Journal entries** | 6 |
| **Completion branches** | 3 |
| **Starts by** | Speak with **Safebox** in **Taris, Upper City South**. |
| **Key locations** | Taris, Lower City Maintenance Room, Taris, Upper City South |
| **Key characters** | Safebox, T3-L |

## Walkthrough

### 1. Speak with Safebox in Taris, Upper City South

Speak with **Safebox** in **Taris, Upper City South**.

> **Expected journal update — index 10:** I met a man named Safebox who lost his droid. He said "she" is likely in the lower city, since he looked all over the upper city.

### 2. Speak with T3-L in Taris, Lower City Maintenance Room

Speak with **T3-L** in **Taris, Lower City Maintenance Room**.

> **Expected journal update — index 20:** I found the droid Safebox was looking for. T3-L, or "Shadow" told me she doesn't wish to return, and feels like a prisoner when she's with him. I have to tell Sim P something.

### 3. Speak with Safebox in Taris, Upper City South — Finished

Speak with **Safebox** in **Taris, Upper City South**.

> **Expected journal update — index 30:** I told Safebox I couldn't find his droid.

**Known item transfer:** 100 × **Credits** (`Gold_001`).

**Outcome:** this journal entry is marked as a finished branch.

### 4. Speak with Safebox in Taris, Upper City South — Finished

Speak with **Safebox** in **Taris, Upper City South**.

> **Expected journal update — index 35:** I told Safebox his droid was destroyed.

**Known item transfer:** 200 × **Credits** (`Gold_001`).

**Outcome:** this journal entry is marked as a finished branch.

### 5. Speak with Safebox in Taris, Upper City South — Finished

Speak with **Safebox** in **Taris, Upper City South**.

> **Expected journal update — index 40:** I told Safebox his droid was in the lower city.

**Known item transfer:** 300 × **Credits** (`Gold_001`).

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has **3 explicit finished entries**. Treat them as branch coverage targets during playtesting:

- **Index 30:** I told Safebox I couldn't find his droid.
- **Index 35:** I told Safebox his droid was destroyed.
- **Index 40:** I told Safebox his droid was in the lower city.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 100 × **Credits** (`Gold_001`)
- 200 × **Credits** (`Gold_001`)
- 300 × **Credits** (`Gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Safebox** (`SW_TarisSimpy`) — `Taris, Upper City South`
- **T3-L** (`SW_TarisT3-LShadow`) — `Taris, Lower City Maintenance Room`

**Locations implicated by actor/object placement or explicit travel:**
- **Taris, Lower City Maintenance Room**
- **Taris, Upper City South**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_TarisSimpyJ`
**Generated category:** Taris Side Content
**Journal entries:** 6

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 10 | — | I met a man named Safebox who lost his droid. He said "she" is likely in the lower city, since he looked all over the upper city. | 1 |
| 20 | — | I found the droid Safebox was looking for. T3-L, or "Shadow" told me she doesn't wish to return, and feels like a prisoner when she's with him. I have to tell Sim P something. | 1 |
| 30 | Finished | I told Safebox I couldn't find his droid. | 1 |
| 35 | Finished | I told Safebox his droid was destroyed. | 1 |
| 40 | Finished | I told Safebox his droid was in the lower city. | 1 |

### Record-level trigger map

### Stage 10

I met a man named Safebox who lost his droid. He said "she" is likely in the lower city, since he looked all over the upper city.

**How this stage is set:**
- Dialogue INFO `3187828960254798954` under topic **Greeting 2**; speaker Safebox (`SW_TarisSimpy`). locations: `Taris, Upper City South`. conditions: Function/Choice Equal 1. response: “You can? Oh goody. I really need someone to check the lower city for my lost droid. I just can't go down there with the Black Vulkar gang all around. I looked everywhere up here, so she has to be down there. If you find her please let me know!”.

```text
Journal SW_TarisSimpyJ 10
```

### Stage 20

I found the droid Safebox was looking for. T3-L, or "Shadow" told me she doesn't wish to return, and feels like a prisoner when she's with him. I have to tell Sim P something.

**How this stage is set:**
- Dialogue INFO `310992967120771316` under topic **Greeting 2**; speaker T3-L (`SW_TarisT3-LShadow`). locations: `Taris, Lower City Maintenance Room`. conditions: Journal `SW_TarisSimpyJ` Equal 10. response: “Safebox is looking for me? No, I don't want to go back. He makes me feel like a prisoner. His relationship with me is unhealthy for a human. No matter what you say, I won't return to him. You can tell him whatever you want.”.

```text
Journal SW_TarisSimpyJ 20
```

### Stage 30 — Finished

I told Safebox I couldn't find his droid.

**How this stage is set:**
- Dialogue INFO `206359682993324191` under topic **Greeting 2**; speaker Safebox (`SW_TarisSimpy`). locations: `Taris, Upper City South`. conditions: Journal `SW_TarisSimpyJ` GreaterEqual 20; Function/Choice Equal 1. response: “So she's lost? Oh dear, thank you for trying. Sorry for wasting your time.”.

```text
player->AddItem "Gold_001" 100
Journal SW_TarisSimpyJ 30
```

### Stage 35 — Finished

I told Safebox his droid was destroyed.

**How this stage is set:**
- Dialogue INFO `1686312276371120` under topic **Greeting 2**; speaker Safebox (`SW_TarisSimpy`). locations: `Taris, Upper City South`. conditions: Journal `SW_TarisSimpyJ` GreaterEqual 20; Function/Choice Equal 2. response: “Oh no, I feared this would happen! Thank you for finding her, but I need time to mourn my loss.”.

```text
player->AddItem "Gold_001" 200
Journal SW_TarisSimpyJ 35
```

### Stage 40 — Finished

I told Safebox his droid was in the lower city.

**How this stage is set:**
- Dialogue INFO `28467154152323320696` under topic **Greeting 2**; speaker Safebox (`SW_TarisSimpy`). locations: `Taris, Upper City South`. conditions: Journal `SW_TarisSimpyJ` GreaterEqual 20; Function/Choice Equal 3. response: “She doesn't wish to see me? No, I'm sure she does. Thank you for letting me know she is safe. I'm sure she will return soon.”.

```text
player->AddItem "Gold_001" 300
Journal SW_TarisSimpyJ 40
```

### Related records and locations

**Dialogue speakers:**
- Safebox (`SW_TarisSimpy`) — `Taris, Upper City South`
- T3-L (`SW_TarisT3-LShadow`) — `Taris, Lower City Maintenance Room`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Taris, Lower City Maintenance Room`
- `Taris, Upper City South`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `10` is obtainable.
- [ ] Reach index `10`: I met a man named Safebox who lost his droid. He said "she" is likely in the lower city, since he looked all o…
- [ ] Reach index `20`: I found the droid Safebox was looking for. T3-L, or "Shadow" told me she doesn't wish to return, and feels lik…
- [ ] Reach index `30` (`Finished`): I told Safebox I couldn't find his droid.
- [ ] Reach index `35` (`Finished`): I told Safebox his droid was destroyed.
- [ ] Reach index `40` (`Finished`): I told Safebox his droid was in the lower city.
- [ ] Branch coverage: this journal has **3 different `Finished` entries**; test each reachable completion branch.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_TarisSimpyJ`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
