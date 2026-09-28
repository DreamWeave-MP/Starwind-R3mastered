---
title: "Chapter 1: Hired Arms on Dantooine"
description: "Walkthrough and QA reference for Chapter 1: Hired Arms on Dantooine (SW_TarisChap1-3)."
weight: 4
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_TarisChap1-3"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_TarisChap1-3` |
| **Category** | Main Quest |
| **Journal entries** | 5 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Shade Vendas** in **The Outer Rim, Freighter**. |
| **Key locations** | Dantooine, Sea, The Outer Rim, Freighter |
| **Key characters** | Shade Vendas |

## Walkthrough

### 1. Speak with Shade Vendas in The Outer Rim, Freighter

Speak with **Shade Vendas** in **The Outer Rim, Freighter**.

> **Expected journal update — index 5:** Shade says we should head to Dantooine. Shade says Thegg is there hunting a rancor. I should find him and his mandalorian clan.

### 2. Reach Dantooine, Sea and allow the scripted event to complete

Reach **Dantooine, Sea** and allow the scripted event to complete.

> **Expected journal update — index 10:** I ran into Thegg and his clan who were killing the Rancor.

### 3. Allow the scripted event handled by `SW_StorySceneScr6` to complete

Allow the scripted event handled by `SW_StorySceneScr6` to complete.

> **Expected journal update — index 15:** I talked to Thegg and he is going to go speak with Shade.

### 4. Allow the scripted event handled by `SW_StorySceneScr7` to complete — Finished

Allow the scripted event handled by `SW_StorySceneScr7` to complete.

> **Expected journal update — index 20:** Thegg and I have met up with Shade, we should head back to Taris.

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 20**:

> Thegg and I have met up with Shade, we should head back to Taris.

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Shade Vendas** (`SW_ShadeFreighter`) — `The Outer Rim, Freighter`

**Locations implicated by actor/object placement or explicit travel:**
- **Dantooine, Sea**
- **The Outer Rim, Freighter**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_TarisChap1-3`
**Generated category:** Main Quest
**Journal entries:** 5

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | Shade says we should head to Dantooine. Shade says Thegg is there hunting a rancor. I should find him and his mandalorian clan. | 1 |
| 10 | — | I ran into Thegg and his clan who were killing the Rancor. | 1 |
| 15 | — | I talked to Thegg and he is going to go speak with Shade. | 1 |
| 20 | Finished | Thegg and I have met up with Shade, we should head back to Taris. | 1 |

### Record-level trigger map

### Stage 5

Shade says we should head to Dantooine. Shade says Thegg is there hunting a rancor. I should find him and his mandalorian clan.

**How this stage is set:**
- Dialogue INFO `855614578148873966` under topic **Greeting 7**; speaker Shade Vendas (`SW_ShadeFreighter`). locations: `The Outer Rim, Freighter`. response: “This ship is perfect, there's plenty of beds, storage, a medical bay and anything we could need here for our journey, and we're going to need the room. We need to head to Dantooine next, I have an old family friend there named Thegg who can help us get the defectors on Taris in line. He's a Mandalorian clan leader who still has the loyalty of some seasoned warriors. The last I heard he was heading to Dantooine, we should try to catch him before he moves on. There's a map with the coordinates in the cockpit.”.

```text
PlaySound3D "KelliFret1"
AddTopic "Mandalorians"
Journal SW_TarisChap1-3 5
```

### Stage 10

I ran into Thegg and his clan who were killing the Rancor.

**How this stage is set:**
- Script `SW_StorySceneScr5`. attached to Activator `SW_StorySceneRancorAct`; placed in `Dantooine, Sea`.

```text
If ( GetDeadCount SW_RancorMQ >= 1 )
    If ( DoRancor == 0 )
        Journal SW_TarisChap1-3 10
        SW_TheggDantooine->ForceGreeting
        Set DoRancor to 1
```

### Stage 15

I talked to Thegg and he is going to go speak with Shade.

**How this stage is set:**
- Script `SW_StorySceneScr6`.

```text
If ( DoOnce == 0 )
    Journal SW_TarisChap1-3 15
    Set DoOnce to 1
Elseif ( DoOnce == 1 )
```

### Stage 20 — Finished

Thegg and I have met up with Shade, we should head back to Taris.

**How this stage is set:**
- Script `SW_StorySceneScr7`.

```text
if ( SceneState == 15 )
    Journal SW_TarisChap1-3 20
    EnablePlayerControls
    set SW_RealTimeScene to 0
```

### Related records and locations

**Dialogue speakers:**
- Shade Vendas (`SW_ShadeFreighter`) — `The Outer Rim, Freighter`

**Scripts that read or write this journal:**
- `SW_CantLootTheggs` — Npc Thegg (`SW_TheggDantooine`); placed in `Dantooine, Sea`; Npc Mandalorian Warrior (`SW_TheggFollower`); placed in `Dantooine, Sea`; Npc Mandalorian Warrior (`SW_TheggFollowerA`); placed in `Dantooine, Sea`; Npc Mandalorian Warrior (`SW_TheggFollowerB`); placed in `Dantooine, Sea`; Npc Mandalorian Warrior (`SW_TheggFollowerC`); placed in `Dantooine, Sea`
- `SW_StoryRancorScript` — Creature Rancor (`SW_RancorMQ`); placed in `Dantooine, Sea`; Creature Terentatek (`SW_TerenTest`)
- `SW_StorySceneScr5` — Activator `SW_StorySceneRancorAct`; placed in `Dantooine, Sea`
- `SW_StorySceneScr6`
- `SW_StorySceneScr7`

**Cells implicated by actor/object placement or explicit travel code:**
- `Dantooine, Sea`
- `The Outer Rim, Freighter`

<details><summary>Journal-state readers (3 code sites)</summary>

- Script `SW_CantLootTheggs`. attached to Npc Thegg (`SW_TheggDantooine`); placed in `Dantooine, Sea`; Npc Mandalorian Warrior (`SW_TheggFollower`); placed in `Dantooine, Sea`; Npc Mandalorian Warrior (`SW_TheggFollowerA`); placed in `Dantooine, Sea`; Npc Mandalorian Warrior (`SW_TheggFollowerB`); placed in `Dantooine, Sea`; Npc Mandalorian Warrior (`SW_TheggFollowerC`); placed in `Dantooine, Sea`; Npc Mandalorian Warrior (`SW_TheggFollowerDead`); placed in `Dantooine, Sea`; Npc Mandalorian Warrior (`SW_TheggFollowerMel`); placed in `Dantooine, Sea`; Npc Mandalorian Warrior (`SW_TheggFollowerMelA`); placed in `Dantooine, Sea`.
- Script `SW_StoryRancorScript`. attached to Creature Rancor (`SW_RancorMQ`); placed in `Dantooine, Sea`; Creature Terentatek (`SW_TerenTest`).
- Script `SW_StorySceneScr5`. attached to Activator `SW_StorySceneRancorAct`; placed in `Dantooine, Sea`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: Shade says we should head to Dantooine. Shade says Thegg is there hunting a rancor. I should find him and his …
- [ ] Reach index `10`: I ran into Thegg and his clan who were killing the Rancor.
- [ ] Reach index `15`: I talked to Thegg and he is going to go speak with Shade.
- [ ] Reach index `20` (`Finished`): Thegg and I have met up with Shade, we should head back to Taris.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_TarisChap1-3`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
