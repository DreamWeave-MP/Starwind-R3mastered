---
title: "The Bog of Eternal Sink"
description: "Walkthrough and QA reference for The Bog of Eternal Sink (SW_Hoggle)."
weight: 80
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_Hoggle"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_Hoggle` |
| **Category** | Side Quests |
| **Journal entries** | 6 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Daisy Lowie** in **Kashyyk, Boyle Research Facility**. |
| **Key locations** | Kashyyk, Boyle Research Facility, Kashyyk, Shadowlands |
| **Key characters** | Daisy Lowie, `SW_Hoggle` — `Kashyyk, Shadowlands` |

## Walkthrough

### 1. Speak with Daisy Lowie in Kashyyk, Boyle Research Facility

Speak with **Daisy Lowie** in **Kashyyk, Boyle Research Facility**.

> **Expected journal update — index 5:** There is a creature that is kidnapping Czerka employees who enter a bog in the shadowlands of Kashyyk, beneath Boyle. The Czerka Corporation is looking to hire someone to take care of the problem.

### 2. Speak with the relevant character in Kashyyk, Shadowlands

Speak with **the relevant character** in **Kashyyk, Shadowlands**.

> **Expected journal update — index 10:** The creature is claiming that the Czerka employees killed themselves by driving their machines into the bog.

### 3. Speak with the relevant character in Kashyyk, Shadowlands

Speak with **the relevant character** in **Kashyyk, Shadowlands**.

> **Expected journal update — index 15:** I chose not to believe the creature, and I killed it. I should search the machinery and then return to Daisy Lowie in Boyle.

### 4. Speak with the relevant character in Kashyyk, Shadowlands

Speak with **the relevant character** in **Kashyyk, Shadowlands**.

> **Expected journal update — index 20:** The creature gave me a key to access the cargo containers of the sunken machinery, he claims one of the crews may have completed their mission before drowning into the bog.

**Known item transfer:** 1 × **Cargo Key** (`SW_CargoKey`).

### 5. Speak with Daisy Lowie in Kashyyk, Boyle Research Facility and ask about soil sample — Finished

Speak with **Daisy Lowie** in **Kashyyk, Boyle Research Facility** and ask about **soil sample**.

> **Expected journal update — index 30:** I was paid when I returned to Daisy Lowie of the Czerka Corporation with their soil sample.

**Known item transfer:** 500 × **Credits** (`gold_001`).

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 30**:

> I was paid when I returned to Daisy Lowie of the Czerka Corporation with their soil sample.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 1 × **Cargo Key** (`SW_CargoKey`)
- 500 × **Credits** (`gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Daisy Lowie** (`SW_CzerkaHoggle`) — `Kashyyk, Boyle Research Facility`
- **`SW_Hoggle` — `Kashyyk, Shadowlands`** (``)

**Locations implicated by actor/object placement or explicit travel:**
- **Kashyyk, Boyle Research Facility**
- **Kashyyk, Shadowlands**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_Hoggle`
**Generated category:** Side Quests
**Journal entries:** 6

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | There is a creature that is kidnapping Czerka employees who enter a bog in the shadowlands of Kashyyk, beneath Boyle. The Czerka Corporation is looking to hire someone to take care of the problem. | 1 |
| 10 | — | The creature is claiming that the Czerka employees killed themselves by driving their machines into the bog. | 1 |
| 15 | — | I chose not to believe the creature, and I killed it. I should search the machinery and then return to Daisy Lowie in Boyle. | 1 |
| 20 | — | The creature gave me a key to access the cargo containers of the sunken machinery, he claims one of the crews may have completed their mission before drowning into the bog. | 1 |
| 30 | Finished | I was paid when I returned to Daisy Lowie of the Czerka Corporation with their soil sample. | 1 |

### Record-level trigger map

### Stage 5

There is a creature that is kidnapping Czerka employees who enter a bog in the shadowlands of Kashyyk, beneath Boyle. The Czerka Corporation is looking to hire someone to take care of the problem.

**How this stage is set:**
- Dialogue INFO `257403892224511624` under topic **Greeting 7**; speaker Daisy Lowie (`SW_CzerkaHoggle`). locations: `Kashyyk, Boyle Research Facility`. conditions: Journal `SW_Hoggle` Equal 0. response: “Looking for work? I've got a problem, there is a bog where a creature of strange proportions resides. This creature has been kidnapping Czerka employees who are entering the bog in order to gather a soil sample. We need someone to get rid of it.”.

```text
Journal "SW_Hoggle" 5
StopSound "BogBoyle"
PlaySound3d "BogGreet1"
```

### Stage 10

The creature is claiming that the Czerka employees killed themselves by driving their machines into the bog.

**How this stage is set:**
- Dialogue INFO `1264525010302714625` under topic **Greeting 7**; speaker `SW_Hoggle`. locations: `Kashyyk, Shadowlands`. conditions: Journal `SW_Hoggle` Equal 5. response: “Kidnap? No, those men drowned. I tried to warn them, but they just drove their machines right into the bog.”.

```text
Journal "SW_Hoggle" 10
Choice "I don't believe you, defend yourself horrible creature!" 1 "What if I finished their job, so they'll leave you alone?." 2
```

### Stage 15

I chose not to believe the creature, and I killed it. I should search the machinery and then return to Daisy Lowie in Boyle.

**How this stage is set:**
- Dialogue INFO `28960115301027124619` under topic **Greeting 7**; speaker `SW_Hoggle`. locations: `Kashyyk, Shadowlands`. conditions: Function/Choice Equal 1. response: “I ain't horrible, I'm Hoggle!”.

```text
Journal "SW_Hoggle" 15
"SW_Hoggle"->StartCombat Player
```

### Stage 20

The creature gave me a key to access the cargo containers of the sunken machinery, he claims one of the crews may have completed their mission before drowning into the bog.

**How this stage is set:**
- Dialogue INFO `289342285815323752` under topic **Greeting 7**; speaker `SW_Hoggle`. locations: `Kashyyk, Shadowlands`. conditions: Function/Choice Equal 2. response: “Oh, alright. It doesn't bother me one way or another but at least then I won't have to listen to the horrible noises this bog makes whenever something sinks into it. You may need this, I got it before the last man sank too deep, might open these machines.”.

```text
Journal "SW_Hoggle" 20
player->additem SW_CargoKey 1
```

### Stage 30 — Finished

I was paid when I returned to Daisy Lowie of the Czerka Corporation with their soil sample.

**How this stage is set:**
- Dialogue INFO `31224138161946927926` under topic **soil sample**; speaker Daisy Lowie (`SW_CzerkaHoggle`). locations: `Kashyyk, Boyle Research Facility`. conditions: Item/ItemType `SW_Sample` GreaterEqual 1; Journal `SW_Hoggle` Greater 5. response: “Thank you for all your efforts, we really have to get this soil sample sent to Manaan, and now we will be able to. I hope this covers your time spent.”.

```text
Journal "SW_Hoggle" 30
player->additem gold_001 500
player->removeitem SW_Sample 1
```

### Related records and locations

**Dialogue speakers:**
- Daisy Lowie (`SW_CzerkaHoggle`) — `Kashyyk, Boyle Research Facility`
- `SW_Hoggle` — `Kashyyk, Shadowlands`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)
- Cargo Key (`SW_CargoKey`)
- Soil Sample (`SW_Sample`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Kashyyk, Boyle Research Facility`
- `Kashyyk, Shadowlands`

<details><summary>Other directly addressed object IDs in related code</summary>

- `SW_Hoggle`

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: There is a creature that is kidnapping Czerka employees who enter a bog in the shadowlands of Kashyyk, beneath…
- [ ] Reach index `10`: The creature is claiming that the Czerka employees killed themselves by driving their machines into the bog.
- [ ] Reach index `15`: I chose not to believe the creature, and I killed it. I should search the machinery and then return to Daisy L…
- [ ] Reach index `20`: The creature gave me a key to access the cargo containers of the sunken machinery, he claims one of the crews …
- [ ] Reach index `30` (`Finished`): I was paid when I returned to Daisy Lowie of the Czerka Corporation with their soil sample.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_Hoggle`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
