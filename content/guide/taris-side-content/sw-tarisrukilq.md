---
title: "Taris: Lost Tribe"
description: "Walkthrough and QA reference for Taris: Lost Tribe (SW_TarisRukilQ)."
weight: 8
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_TarisRukilQ"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_TarisRukilQ` |
| **Category** | Taris Side Content |
| **Journal entries** | 3 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Rukil** in **Taris, Remnants**. |
| **Key locations** | Taris, Remnants, Taris, The Promised Land |
| **Key characters** | Rukil |

## Walkthrough

### 1. Speak with Rukil in Taris, Remnants

Speak with **Rukil** in **Taris, Remnants**.

> **Expected journal update — index 10:** I met a man named Rukil who's needing help getting back to his lost tribe. He said there are rakghouls about and they're particularly bad today. He told me to follow the torches which are lit up, which will bring us through some sewers, and into the tribe's territory.

### 2. Speak with Rukil in Taris, Remnants — Finished

Speak with **Rukil** in **Taris, Remnants**.

> **Expected journal update — index 20:** I led Rukil back to his tribe in the Promised Land.

**Known item transfer:** 1000 × **Credits** (`Gold_001`).

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 20**:

> I led Rukil back to his tribe in the Promised Land.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 1000 × **Credits** (`Gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Rukil** (`SW_Taris_Rukil`) — `Taris, Remnants`

**Locations implicated by actor/object placement or explicit travel:**
- **Taris, Remnants**
- **Taris, The Promised Land**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_TarisRukilQ`
**Generated category:** Taris Side Content
**Journal entries:** 3

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 10 | — | I met a man named Rukil who's needing help getting back to his lost tribe. He said there are rakghouls about and they're particularly bad today. He told me to follow the torches which are lit up, which will bring us through some sewers, and into the tribe's territory. | 1 |
| 20 | Finished | I led Rukil back to his tribe in the Promised Land. | 1 |

### Record-level trigger map

### Stage 10

I met a man named Rukil who's needing help getting back to his lost tribe. He said there are rakghouls about and they're particularly bad today. He told me to follow the torches which are lit up, which will bring us through some sewers, and into the tribe's territory.

**How this stage is set:**
- Dialogue INFO `250692534247016050` under topic **Greeting 5**; speaker Rukil (`SW_Taris_Rukil`). locations: `Taris, Remnants`. conditions: Function/Choice Equal 1. response: “Thank you. I'm Rukil, the promised one for my tribe. We've suffered along with the rest of the planet through it's destruction, but at least we have fertile ground good for growing. Just head down and follow these lit torches, it should bring us to some sewers. Just through the sewers is where my tribe is at. If you can help fight these rakghouls I'll be greatful.”.

```text
Journal SW_TarisRukilQ 10
AiFollow Player 0 0 0 0 0
```

### Stage 20 — Finished

I led Rukil back to his tribe in the Promised Land.

**How this stage is set:**
- Dialogue INFO `320577527124117921` under topic **Greeting 5**; speaker Rukil (`SW_Taris_Rukil`). locations: `Taris, Remnants`. cell constraint `Taris, The Promised Land`. conditions: Journal `SW_TarisRukilQ` Equal 10. response: “Thank you, %PCName. I'm glad to be back with my tribe. The rakghouls don't bother us here in this untainted land. Here, take these credits as a reward.”.

```text
player->AddItem"Gold_001" 1000
Journal SW_TarisRukilQ 20
AiWander 0 0 0 0 0 0 0 0 0 0 0 0
Goodbye
```

### Related records and locations

**Dialogue speakers:**
- Rukil (`SW_Taris_Rukil`) — `Taris, Remnants`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Taris, Remnants`
- `Taris, The Promised Land`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `10` is obtainable.
- [ ] Reach index `10`: I met a man named Rukil who's needing help getting back to his lost tribe. He said there are rakghouls about a…
- [ ] Reach index `20` (`Finished`): I led Rukil back to his tribe in the Promised Land.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_TarisRukilQ`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
