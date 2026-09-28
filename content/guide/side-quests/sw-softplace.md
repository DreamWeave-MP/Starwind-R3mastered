---
title: "Between a Rock and a Soft Place"
description: "Walkthrough and QA reference for Between a Rock and a Soft Place (SW_SoftPlace)."
weight: 17
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_SoftPlace"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_SoftPlace` |
| **Category** | Side Quests |
| **Journal entries** | 6 |
| **Completion branches** | 2 |
| **Starts by** | Speak with **Hunter** in **Tatooine** and ask about **trapped**. |
| **Key locations** | Tatooine |
| **Key characters** | Hunter |

## Walkthrough

### 1. Speak with Hunter in Tatooine and ask about trapped

Speak with **Hunter** in **Tatooine** and ask about **trapped**.

> **Expected journal update — index 5:** I met a hunter named Earl Basset who is stuck on a boulder in the middle of a giant pool of quicksand. He has asked me to help him get out of this situation.

### 2. Speak with Hunter in Tatooine and ask about trapped

Speak with **Hunter** in **Tatooine** and ask about **trapped**.

> **Expected journal update — index 10:** I told the hunter, that I didn't know how to help him with this, if I feel confident enough to escort him to safety I should return to him.

### 3. Speak with Hunter in Tatooine and ask about trapped

Speak with **Hunter** in **Tatooine** and ask about **trapped**.

> **Expected journal update — index 15:** I have agreed to escort Earl Basset away from the quicksand.

### 4. Defeat Hunter in Tatooine and allow its script to update the quest — Finished

Defeat **Hunter** in **Tatooine** and allow its script to update the quest.

> **Expected journal update — index 20:** Earl Basset has died while attempting to rescue him.

**Outcome:** this journal entry is marked as a finished branch.

### 5. Reach Tatooine and allow the scripted event to complete — Finished

Reach **Tatooine** and allow the scripted event to complete.

> **Expected journal update — index 25:** I have rescued Earl Basset from the boulder within the quicksand, he has given me his Cathar Speed Implant as a thanks for my aid.

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has **2 explicit finished entries**. Treat them as branch coverage targets during playtesting:

- **Index 20:** Earl Basset has died while attempting to rescue him.
- **Index 25:** I have rescued Earl Basset from the boulder within the quicksand, he has given me his Cathar Speed Implant as a thanks for my aid.

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Hunter** (`SW_HunterWurm`) — `Tatooine`

**Locations implicated by actor/object placement or explicit travel:**
- **Tatooine**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_SoftPlace`
**Generated category:** Side Quests
**Journal entries:** 6

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | I met a hunter named Earl Basset who is stuck on a boulder in the middle of a giant pool of quicksand. He has asked me to help him get out of this situation. | 2 |
| 10 | — | I told the hunter, that I didn't know how to help him with this, if I feel confident enough to escort him to safety I should return to him. | 1 |
| 15 | — | I have agreed to escort Earl Basset away from the quicksand. | 1 |
| 20 | Finished | Earl Basset has died while attempting to rescue him. | 1 |
| 25 | Finished | I have rescued Earl Basset from the boulder within the quicksand, he has given me his Cathar Speed Implant as a thanks for my aid. | 1 |

### Record-level trigger map

### Stage 5

I met a hunter named Earl Basset who is stuck on a boulder in the middle of a giant pool of quicksand. He has asked me to help him get out of this situation.

**How this stage is set:**
- Dialogue INFO `91725711156116186` under topic **trapped**; speaker Hunter (`SW_HunterWurm`). locations: `Tatooine`. conditions: Journal `SW_SoftPlace` Equal 5. response: “I've been stuck on this rock for two days now, and every time I try to make a run for it that damned wurm comes out of the ground and tries to eat me.”.

```text
Journal SW_SoftPlace 5
Choice "I will help you get off this rock." 1 "I'm sorry but I don't think I can help, your best bet is to just run for it." 2
```
- Dialogue INFO `23134256151827329735` under topic **trapped**; speaker Hunter (`SW_HunterWurm`). locations: `Tatooine`. conditions: Journal `SW_SoftPlace` Equal 0. response: “I've been stuck on this rock for two days now, and every time I try to make a run for it that damned wurm comes out of the ground and tries to eat me.”.

```text
Journal SW_SoftPlace 5
Choice "I will help you get off this rock." 1 "I'm sorry but I don't think I can help, your best bet is to just run for it." 2
```

### Stage 10

I told the hunter, that I didn't know how to help him with this, if I feel confident enough to escort him to safety I should return to him.

**How this stage is set:**
- Dialogue INFO `117073790928310015` under topic **trapped**; speaker Hunter (`SW_HunterWurm`). locations: `Tatooine`. conditions: Function/Choice Equal 2. response: “Then I'm doomed. I'll wait for someone else to come by.”.

```text
Journal SW_SoftPlace 10
```

### Stage 15

I have agreed to escort Earl Basset away from the quicksand.

**How this stage is set:**
- Dialogue INFO `75228078718126620` under topic **trapped**; speaker Hunter (`SW_HunterWurm`). locations: `Tatooine`. conditions: Function/Choice Equal 1. response: “Well let's get out of here, I'm ready to see my wife and kids!”.

```text
Journal SW_SoftPlace 15
AIFollow Player 0, 0, 0, 0
```

### Stage 20 — Finished

Earl Basset has died while attempting to rescue him.

**How this stage is set:**
- Script `SW_WurmEscortDeath`. attached to Npc Hunter (`SW_HunterWurm`); placed in `Tatooine`.

```text
If ( OnDeath )
    Journal SW_SoftPlace 20
Endif
```

### Stage 25 — Finished

I have rescued Earl Basset from the boulder within the quicksand, he has given me his Cathar Speed Implant as a thanks for my aid.

**How this stage is set:**
- Script `SW_WurmEscortAct`. attached to Activator Trigger (`SW_WurmEscortActivator`); placed in `Tatooine`.

```text
If ( GetDistance, SW_HunterWurm >= 8000 )
    If ( GetJournalIndex SW_SoftPlace < 25 )
        Journal SW_SoftPlace 25
        SW_HunterWurm->ForceGreeting
    Endif
```

### Related records and locations

**Dialogue speakers:**
- Hunter (`SW_HunterWurm`) — `Tatooine`

**Scripts that read or write this journal:**
- `SW_WurmEscortAct` — Activator Trigger (`SW_WurmEscortActivator`); placed in `Tatooine`
- `SW_WurmEscortDeath` — Npc Hunter (`SW_HunterWurm`); placed in `Tatooine`

**Cells implicated by actor/object placement or explicit travel code:**
- `Tatooine`

<details><summary>Journal-state readers (1 code sites)</summary>

- Script `SW_WurmEscortAct`. attached to Activator Trigger (`SW_WurmEscortActivator`); placed in `Tatooine`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: I met a hunter named Earl Basset who is stuck on a boulder in the middle of a giant pool of quicksand. He has …
- [ ] Reach index `10`: I told the hunter, that I didn't know how to help him with this, if I feel confident enough to escort him to s…
- [ ] Reach index `15`: I have agreed to escort Earl Basset away from the quicksand.
- [ ] Reach index `20` (`Finished`): Earl Basset has died while attempting to rescue him.
- [ ] Reach index `25` (`Finished`): I have rescued Earl Basset from the boulder within the quicksand, he has given me his Cathar Speed Implant as …
- [ ] Branch coverage: this journal has **2 different `Finished` entries**; test each reachable completion branch.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_SoftPlace`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
