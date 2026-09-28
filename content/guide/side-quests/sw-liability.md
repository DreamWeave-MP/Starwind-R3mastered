---
title: "The Liability"
description: "Walkthrough and QA reference for The Liability (SW_Liability)."
weight: 95
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_Liability"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_Liability` |
| **Category** | Side Quests |
| **Journal entries** | 4 |
| **Completion branches** | No explicit Finished marker |
| **Starts by** | Speak with **Abel Grathor** in **Nar Shaddaa, Cantina** and ask about **a job**. |
| **Key locations** | Nar Shaddaa, Cantina |
| **Key characters** | Abel Grathor |

## Walkthrough

### 1. Speak with Abel Grathor in Nar Shaddaa, Cantina and ask about a job

Speak with **Abel Grathor** in **Nar Shaddaa, Cantina** and ask about **a job**.

> **Expected journal update — index 5:** I met a Czerka employee named Abel Grathor in the Nar Shaddaa Cantina that says an employee has become a liability and is getting his stocks on the cheap from the exchange. He's supposed to be here now, in some smuggler's operation making a trade. Abel wants me to kill him to keep him from causing a public relations crisis with the Czerka Corporation.

### 2. Allow the scripted event handled by `SW_LiabilityDead` to complete

Allow the scripted event handled by `SW_LiabilityDead` to complete.

> **Expected journal update — index 10:** The rogue Czerka employee is dead, and I should return to Abel.

### 3. Speak with Abel Grathor in Nar Shaddaa, Cantina and ask about a job

Speak with **Abel Grathor** in **Nar Shaddaa, Cantina** and ask about **a job**.

> **Expected journal update — index 15:** Abel has rewarded me with 200 credits for taking care of the Czerka liability.

**Known item transfer:** 200 × **Credits** (`gold_001`).

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 200 × **Credits** (`gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Abel Grathor** (`SW_CzerkaNarQuester`) — `Nar Shaddaa, Cantina`

**Locations implicated by actor/object placement or explicit travel:**
- **Nar Shaddaa, Cantina**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_Liability`
**Generated category:** Side Quests
**Journal entries:** 4

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | I met a Czerka employee named Abel Grathor in the Nar Shaddaa Cantina that says an employee has become a liability and is getting his stocks on the cheap from the exchange. He's supposed to be here now, in some smuggler's operation making a trade. Abel wants me to kill him to keep him from causing a public relations crisis with the Czerka Corporation. | 1 |
| 10 | — | The rogue Czerka employee is dead, and I should return to Abel. | 1 |
| 15 | — | Abel has rewarded me with 200 credits for taking care of the Czerka liability. | 2 |

### Record-level trigger map

### Stage 5

I met a Czerka employee named Abel Grathor in the Nar Shaddaa Cantina that says an employee has become a liability and is getting his stocks on the cheap from the exchange. He's supposed to be here now, in some smuggler's operation making a trade. Abel wants me to kill him to keep him from causing a public relations crisis with the Czerka Corporation.

**How this stage is set:**
- Dialogue INFO `22444166121744617205` under topic **a job**; speaker Abel Grathor (`SW_CzerkaNarQuester`). locations: `Nar Shaddaa, Cantina`. conditions: Journal `SW_Liability` Equal 0. response: “We have a liability issue, a Czerka employee who has decided to trade his stock with the Exchange instead of where his post is. We need to silence this liability before he becomes a public relations issue. If you can solve this problem for us, I'll pay you. He should be here now, somewhere in a smuggler's operation here on Nar Shaddaa.”.

```text
Journal SW_Liability 5
```

### Stage 10

The rogue Czerka employee is dead, and I should return to Abel.

**How this stage is set:**
- Script `SW_LiabilityDead`.

```text
If ( GetDeadCount "SW_CzerkaHostileNar" >= 1 )
    Journal SW_Liability 10
endif
```

### Stage 15

Abel has rewarded me with 200 credits for taking care of the Czerka liability.

**How this stage is set:**
- Dialogue INFO `258122224688716787` under topic **a job**; speaker Abel Grathor (`SW_CzerkaNarQuester`). locations: `Nar Shaddaa, Cantina`. conditions: Journal `SW_Liability` Equal 10; Dead/DeadType `SW_CzerkaHostileNar` GreaterEqual 1. response: “The liability has been dealt with? Wow, Nar Shaddaa is full of useful people. 200 credits should do, yeah? Thanks again.”.

```text
Journal SW_Liability 15
player->additem, gold_001, 200
player->ModReputation 1
```
- Dialogue INFO `8000304291798912592` under topic **a job**; speaker Abel Grathor (`SW_CzerkaNarQuester`). locations: `Nar Shaddaa, Cantina`. conditions: Journal `SW_Liability` Equal 5; Dead/DeadType `SW_CzerkaHostileNar` GreaterEqual 1. response: “The liability has been dealt with? Wow, Nar Shaddaa is full of useful people. 200 credits should do, yeah? Thanks again.”.

```text
Journal SW_Liability 15
player->additem, gold_001, 200
player->ModReputation 1
```

### Related records and locations

**Dialogue speakers:**
- Abel Grathor (`SW_CzerkaNarQuester`) — `Nar Shaddaa, Cantina`

**Scripts that read or write this journal:**
- `SW_LiabilityDead`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Nar Shaddaa, Cantina`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: I met a Czerka employee named Abel Grathor in the Nar Shaddaa Cantina that says an employee has become a liabi…
- [ ] Reach index `10`: The rogue Czerka employee is dead, and I should return to Abel.
- [ ] Reach index `15`: Abel has rewarded me with 200 credits for taking care of the Czerka liability.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_Liability`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
