---
title: "Medical Attention"
description: "Walkthrough and QA reference for Medical Attention (SW_PathfinderMedic)."
weight: 49
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_PathfinderMedic"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_PathfinderMedic` |
| **Category** | Side Quests |
| **Journal entries** | 5 |
| **Completion branches** | 3 |
| **Starts by** | Find **Republic Marine** in **Serenno Orbit, The Pathfinder's Mess Hall** and complete the encounter. |
| **Key locations** | Serenno Orbit, The Pathfinder's Mess Hall |
| **Key characters** | Republic Marine |

## Walkthrough

### 1. Find Republic Marine in Serenno Orbit, The Pathfinder's Mess Hall and complete the encounter

Find **Republic Marine** in **Serenno Orbit, The Pathfinder's Mess Hall** and complete the encounter.

> **Expected journal update — index 5:** During The Sith's attack on The Pathfinder, I came across a wounded Republic Marine. If I bring them a medkit, I might be able to save their life.

### 2. Speak with Republic Marine in Serenno Orbit, The Pathfinder's Mess Hall — Finished

Speak with **Republic Marine** in **Serenno Orbit, The Pathfinder's Mess Hall**.

> **Expected journal update — index 10:** I brought a medkit to the Republic Marine and got him back on his feet and he has decided to join me in defeating The Sith's boarding party.

**Outcome:** this journal entry is marked as a finished branch.

### 3. Reach journal stage 15 — Finished

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 15:** I defeated The Sith Boarding Party's commanding officer without helping out the Wounded Republic Marine. He has no doubt died from his injuries by now.

**Outcome:** this journal entry is marked as a finished branch.

### 4. Speak with Republic Marine in Serenno Orbit, The Pathfinder's Mess Hall — Finished

Speak with **Republic Marine** in **Serenno Orbit, The Pathfinder's Mess Hall**.

> **Expected journal update — index 20:** Whether because I felt my time was needed elsewhere, or due to a lack of pity, or even just because of a lack of supplies, I left the Republic Marine to die.

**Outcome:** this journal entry is marked as a finished branch.

> **Playtest flag:** 1 journal stage on this page lack a literal setter in the current static scan.

## Endings & branches

The journal has **3 explicit finished entries**. Treat them as branch coverage targets during playtesting:

- **Index 10:** I brought a medkit to the Republic Marine and got him back on his feet and he has decided to join me in defeating The Sith's boarding party.
- **Index 15:** I defeated The Sith Boarding Party's commanding officer without helping out the Wounded Republic Marine. He has no doubt died from his injuries by now.
- **Index 20:** Whether because I felt my time was needed elsewhere, or due to a lack of pity, or even just because of a lack of supplies, I left the Republic Marine to die.

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Republic Marine** (`PathfindrMarineFatigue2`) — `Serenno Orbit, The Pathfinder's Mess Hall`

**Locations implicated by actor/object placement or explicit travel:**
- **Serenno Orbit, The Pathfinder's Mess Hall**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_PathfinderMedic`
**Generated category:** Side Quests
**Journal entries:** 5

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | During The Sith's attack on The Pathfinder, I came across a wounded Republic Marine. If I bring them a medkit, I might be able to save their life. | 1 |
| 10 | Finished | I brought a medkit to the Republic Marine and got him back on his feet and he has decided to join me in defeating The Sith's boarding party. | 1 |
| 15 | Finished | I defeated The Sith Boarding Party's commanding officer without helping out the Wounded Republic Marine. He has no doubt died from his injuries by now. | 0 |
| 20 | Finished | Whether because I felt my time was needed elsewhere, or due to a lack of pity, or even just because of a lack of supplies, I left the Republic Marine to die. | 1 |

### Record-level trigger map

### Stage 5

During The Sith's attack on The Pathfinder, I came across a wounded Republic Marine. If I bring them a medkit, I might be able to save their life.

**How this stage is set:**
- Script `SW_PathfinderWoundedQuest`. attached to Npc Republic Marine (`PathfindrMarineFatigue2`); placed in `Serenno Orbit, The Pathfinder's Mess Hall`.

```text
If (DoOnce == 0)
        forcegreeting
        Journal, SW_PathfinderMedic, 5
        set DoOnce to 1
    endif
```

### Stage 10 — Finished

I brought a medkit to the Republic Marine and got him back on his feet and he has decided to join me in defeating The Sith's boarding party.

**How this stage is set:**
- Dialogue INFO `183532429839535835` under topic **Greeting 5**; speaker Republic Marine (`PathfindrMarineFatigue2`). locations: `Serenno Orbit, The Pathfinder's Mess Hall`. conditions: Function/Choice Equal 1. response: “< You take a few minutes and perform first aid on the Marine, saving his life. >

 A-ah... Thank you.... Thank you, doc... Hrumph.... Eerugh.... I... I can still fight... Lead the way! Let's get this ship to Serenno!”.

```text
Journal, "SW_PathfinderMedic", 10
AIFollow, Player, 0, 0, 0, 0
PathfindrMarineFatigue2->SetFatigue 100
```

### Stage 15 — Finished

I defeated The Sith Boarding Party's commanding officer without helping out the Wounded Republic Marine. He has no doubt died from his injuries by now.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 20 — Finished

Whether because I felt my time was needed elsewhere, or due to a lack of pity, or even just because of a lack of supplies, I left the Republic Marine to die.

**How this stage is set:**
- Dialogue INFO `3184167052733215735` under topic **Greeting 5**; speaker Republic Marine (`PathfindrMarineFatigue2`). locations: `Serenno Orbit, The Pathfinder's Mess Hall`. conditions: Function/Choice Equal 2. response: “< You leave the Republic Marine where he lies. >”.

```text
Journal, SW_PathfinderMedic, 20
PathfindrMarineFatigue2->Sethealth 0
Goodbye
```

### Related records and locations

**Dialogue speakers:**
- Republic Marine (`PathfindrMarineFatigue2`) — `Serenno Orbit, The Pathfinder's Mess Hall`

**Scripts that read or write this journal:**
- `SW_PathfinderWoundedQuest` — Npc Republic Marine (`PathfindrMarineFatigue2`); placed in `Serenno Orbit, The Pathfinder's Mess Hall`

**Items referenced by related script/result code:**
- Medkit (`SW_Medkit`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Serenno Orbit, The Pathfinder's Mess Hall`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: During The Sith's attack on The Pathfinder, I came across a wounded Republic Marine. If I bring them a medkit,…
- [ ] Reach index `10` (`Finished`): I brought a medkit to the Republic Marine and got him back on his feet and he has decided to join me in defeat…
- [ ] Reach index `15` (`Finished`): I defeated The Sith Boarding Party's commanding officer without helping out the Wounded Republic Marine. He ha…
- [ ] Reach index `20` (`Finished`): Whether because I felt my time was needed elsewhere, or due to a lack of pity, or even just because of a lack …
- [ ] Branch coverage: this journal has **3 different `Finished` entries**; test each reachable completion branch.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_PathfinderMedic`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
