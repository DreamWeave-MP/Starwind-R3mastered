---
title: "Bad Habit"
description: "Walkthrough and QA reference for Bad Habit (SW_DeathSJourn)."
weight: 15
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_DeathSJourn"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_DeathSJourn` |
| **Category** | Side Quests |
| **Journal entries** | 3 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Dex** in **Tatooine, Dex's Hut** and ask about **deathsticks**. |
| **Key locations** | Tatooine, Dex's Hut |
| **Key characters** | Dex |

## Walkthrough

### 1. Speak with Dex in Tatooine, Dex's Hut and ask about deathsticks

Speak with **Dex** in **Tatooine, Dex's Hut** and ask about **deathsticks**.

> **Expected journal update — index 5:** A Rodian named Dex in the Rodian District of Sandriver has asked me to aquire some deathsticks for him.

### 2. Speak with Dex in Tatooine, Dex's Hut and ask about deathsticks — Finished

Speak with **Dex** in **Tatooine, Dex's Hut** and ask about **deathsticks**.

> **Expected journal update — index 10:** Dex was very grateful I got him his deathsticks, and he gave me some grenades in return.

**Known item transfer:** 3 × **CryoBan Grenade** (`SW_CryoGrenade`).

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 10**:

> Dex was very grateful I got him his deathsticks, and he gave me some grenades in return.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 3 × **CryoBan Grenade** (`SW_CryoGrenade`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Dex** (`SW_RodianDex`) — `Tatooine, Dex's Hut`

**Locations implicated by actor/object placement or explicit travel:**
- **Tatooine, Dex's Hut**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_DeathSJourn`
**Generated category:** Side Quests
**Journal entries:** 3

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | A Rodian named Dex in the Rodian District of Sandriver has asked me to aquire some deathsticks for him. | 1 |
| 10 | Finished | Dex was very grateful I got him his deathsticks, and he gave me some grenades in return. | 1 |

### Record-level trigger map

### Stage 5

A Rodian named Dex in the Rodian District of Sandriver has asked me to aquire some deathsticks for him.

**How this stage is set:**
- Dialogue INFO `183462170111329402` under topic **deathsticks**; speaker Dex (`SW_RodianDex`). locations: `Tatooine, Dex's Hut`. conditions: Journal `SW_DeathSJourn` Equal 0. response: “Yeah, deathsticks. Look for the Drifter Malone, he's around Sandriver somewhere. You bring me back some deathsticks, I'll give you something good.”.

```text
Journal SW_DeathSJourn 5
```

### Stage 10 — Finished

Dex was very grateful I got him his deathsticks, and he gave me some grenades in return.

**How this stage is set:**
- Dialogue INFO `1852015961415220545` under topic **deathsticks**; speaker Dex (`SW_RodianDex`). locations: `Tatooine, Dex's Hut`. conditions: Journal `SW_DeathSJourn` Equal 5; Item/ItemType `SW_StrongSpice` GreaterEqual 1. response: “Oooh yeah! Oooooh yeah! Here you go, now get out of here! I have things to do.”.

```text
Journal SW_DeathSJourn 10
player->removeitem, "SW_StrongSpice", 1
player->additem, "SW_CryoGrenade", 3
```

### Related records and locations

**Dialogue speakers:**
- Dex (`SW_RodianDex`) — `Tatooine, Dex's Hut`

**Items referenced by related script/result code:**
- CryoBan Grenade (`SW_CryoGrenade`)
- Deathsticks (`SW_StrongSpice`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Tatooine, Dex's Hut`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: A Rodian named Dex in the Rodian District of Sandriver has asked me to aquire some deathsticks for him.
- [ ] Reach index `10` (`Finished`): Dex was very grateful I got him his deathsticks, and he gave me some grenades in return.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_DeathSJourn`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
