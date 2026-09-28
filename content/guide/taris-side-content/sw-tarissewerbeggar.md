---
title: "Taris: Sewer Resident"
description: "Walkthrough and QA reference for Taris: Sewer Resident (SW_TarisSewerBeggar)."
weight: 9
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_TarisSewerBeggar"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_TarisSewerBeggar` |
| **Category** | Taris Side Content |
| **Journal entries** | 7 |
| **Completion branches** | 3 |
| **Starts by** | Speak with **Bronn Zsifrivrec** in **Taris, Infested Sewers**. |
| **Key locations** | Taris, Infested Sewers |
| **Key characters** | Bronn Zsifrivrec |

## Walkthrough

### 1. Speak with Bronn Zsifrivrec in Taris, Infested Sewers

Speak with **Bronn Zsifrivrec** in **Taris, Infested Sewers**.

> **Expected journal update — index 10:** I ran into a man named Bronn Zsifrivrec in the Taris sewers. He's asking for a drink. Perhaps I should give him some water.

### 2. Speak with Bronn Zsifrivrec in Taris, Infested Sewers

Speak with **Bronn Zsifrivrec** in **Taris, Infested Sewers**.

> **Expected journal update — index 20:** After giving him water, now Bronn is asking for booze.

### 3. Speak with Bronn Zsifrivrec in Taris, Infested Sewers

Speak with **Bronn Zsifrivrec** in **Taris, Infested Sewers**.

> **Expected journal update — index 30:** After giving him booze, now Bronn is asking for spice.

### 4. Speak with Bronn Zsifrivrec in Taris, Infested Sewers — Finished

Speak with **Bronn Zsifrivrec** in **Taris, Infested Sewers**.

> **Expected journal update — index 40:** Bronn is a dirty addict, I'm going to end his miserable life.

**Outcome:** this journal entry is marked as a finished branch.

### 5. Speak with Bronn Zsifrivrec in Taris, Infested Sewers — Finished

Speak with **Bronn Zsifrivrec** in **Taris, Infested Sewers**.

> **Expected journal update — index 45:** I gave Bronn some spice, and he over-dosed. Seems he had too much already.

**Outcome:** this journal entry is marked as a finished branch.

### 6. Speak with Bronn Zsifrivrec in Taris, Infested Sewers — Finished

Speak with **Bronn Zsifrivrec** in **Taris, Infested Sewers**.

> **Expected journal update — index 50:** I told Bronn that's enough, and demanded a reward for my services. He gave me his prized boots.

**Known item transfer:** 1 × **Prized Vulkar Boots** (`SW_VulkarBootsStolen`).

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has **3 explicit finished entries**. Treat them as branch coverage targets during playtesting:

- **Index 40:** Bronn is a dirty addict, I'm going to end his miserable life.
- **Index 45:** I gave Bronn some spice, and he over-dosed. Seems he had too much already.
- **Index 50:** I told Bronn that's enough, and demanded a reward for my services. He gave me his prized boots.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 1 × **Prized Vulkar Boots** (`SW_VulkarBootsStolen`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Bronn Zsifrivrec** (`SW_TarisSewerBum`) — `Taris, Infested Sewers`

**Locations implicated by actor/object placement or explicit travel:**
- **Taris, Infested Sewers**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_TarisSewerBeggar`
**Generated category:** Taris Side Content
**Journal entries:** 7

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 10 | — | I ran into a man named Bronn Zsifrivrec in the Taris sewers. He's asking for a drink. Perhaps I should give him some water. | 1 |
| 20 | — | After giving him water, now Bronn is asking for booze. | 1 |
| 30 | — | After giving him booze, now Bronn is asking for spice. | 1 |
| 40 | Finished | Bronn is a dirty addict, I'm going to end his miserable life. | 1 |
| 45 | Finished | I gave Bronn some spice, and he over-dosed. Seems he had too much already. | 1 |
| 50 | Finished | I told Bronn that's enough, and demanded a reward for my services. He gave me his prized boots. | 1 |

### Record-level trigger map

### Stage 10

I ran into a man named Bronn Zsifrivrec in the Taris sewers. He's asking for a drink. Perhaps I should give him some water.

**How this stage is set:**
- Dialogue INFO `1651618078161195520` under topic **Greeting 7**; speaker Bronn Zsifrivrec (`SW_TarisSewerBum`). locations: `Taris, Infested Sewers`. response: “Hey there.. I'm so thirsty... Mind gettin me somethin' to drink?”.

```text
Journal SW_TarisSewerBeggar 10
Goodbye
```

### Stage 20

After giving him water, now Bronn is asking for booze.

**How this stage is set:**
- Dialogue INFO `2907054972045415230` under topic **Greeting 7**; speaker Bronn Zsifrivrec (`SW_TarisSewerBum`). locations: `Taris, Infested Sewers`. conditions: Journal `SW_TarisSewerBeggar` Equal 10; Item/ItemType `SW_Water` GreaterEqual 1; Function/Choice Equal 1. response: “Oh... I was hoping for some booze. But I'll take it. Do you have any booze?”.

```text
Player->removeitem "SW_Water" 1
Journal SW_TarisSewerBeggar 20
Goodbye
```

### Stage 30

After giving him booze, now Bronn is asking for spice.

**How this stage is set:**
- Dialogue INFO `30291314252513925522` under topic **Greeting 7**; speaker Bronn Zsifrivrec (`SW_TarisSewerBum`). locations: `Taris, Infested Sewers`. conditions: Journal `SW_TarisSewerBeggar` Equal 20; Item/ItemType `SW_Booze` GreaterEqual 1; Function/Choice Equal 1. response: “Ah, thanks friend. You have a nack for finding stuff. Think you can get me some spice?”.

```text
Player->removeitem "SW_Booze" 1
Journal SW_TarisSewerBeggar 30
Goodbye
```

### Stage 40 — Finished

Bronn is a dirty addict, I'm going to end his miserable life.

**How this stage is set:**
- Dialogue INFO `1200593231368115897` under topic **Greeting 7**; speaker Bronn Zsifrivrec (`SW_TarisSewerBum`). locations: `Taris, Infested Sewers`. conditions: Journal `SW_TarisSewerBeggar` Equal 30; Function/Choice Equal 2. response: “What? No! I never even done spice before! Stop!”.

```text
Journal SW_TarisSewerBeggar 40
startcombat player
setfight 100
```

### Stage 45 — Finished

I gave Bronn some spice, and he over-dosed. Seems he had too much already.

**How this stage is set:**
- Dialogue INFO `1387387432436429612` under topic **Greeting 7**; speaker Bronn Zsifrivrec (`SW_TarisSewerBum`). locations: `Taris, Infested Sewers`. conditions: Journal `SW_TarisSewerBeggar` Equal 30; Item/ItemType `SW_Spice` GreaterEqual 1; Function/Choice Equal 3. response: “Oh yea that's it! I need more... more!”.

```text
player->removeitem "SW_Spice" 1
sethealth 0
Journal SW_TarisSewerBeggar 45
Goodbye
```

### Stage 50 — Finished

I told Bronn that's enough, and demanded a reward for my services. He gave me his prized boots.

**How this stage is set:**
- Dialogue INFO `12935265273265225140` under topic **Greeting 7**; speaker Bronn Zsifrivrec (`SW_TarisSewerBum`). locations: `Taris, Infested Sewers`. conditions: Journal `SW_TarisSewerBeggar` Equal 30; Function/Choice Equal 1. response: “Ok, sorry! Please don't hurt me. Here, I can give you these boots. I took em from... a friend... who gave them to me! I swear, ok? I won't bother you no more.”.

```text
Journal SW_TarisSewerBeggar 50
RemoveItem "SW_VulkarBootsStolen" 1
player->additem "SW_VulkarBootsStolen" 1
```

### Related records and locations

**Dialogue speakers:**
- Bronn Zsifrivrec (`SW_TarisSewerBum`) — `Taris, Infested Sewers`

**Items referenced by related script/result code:**
- Booze (`SW_Booze`)
- Spice (`SW_Spice`)
- Prized Vulkar Boots (`SW_VulkarBootsStolen`)
- Water (`SW_Water`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Taris, Infested Sewers`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `10` is obtainable.
- [ ] Reach index `10`: I ran into a man named Bronn Zsifrivrec in the Taris sewers. He's asking for a drink. Perhaps I should give hi…
- [ ] Reach index `20`: After giving him water, now Bronn is asking for booze.
- [ ] Reach index `30`: After giving him booze, now Bronn is asking for spice.
- [ ] Reach index `40` (`Finished`): Bronn is a dirty addict, I'm going to end his miserable life.
- [ ] Reach index `45` (`Finished`): I gave Bronn some spice, and he over-dosed. Seems he had too much already.
- [ ] Reach index `50` (`Finished`): I told Bronn that's enough, and demanded a reward for my services. He gave me his prized boots.
- [ ] Branch coverage: this journal has **3 different `Finished` entries**; test each reachable completion branch.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_TarisSewerBeggar`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
