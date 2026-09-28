---
title: "Prologue: Before the Storm"
description: "Walkthrough and QA reference for Prologue: Before the Storm (SW_PreTaris)."
weight: 1
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_PreTaris"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_PreTaris` |
| **Category** | Main Quest |
| **Journal entries** | 5 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Zelka Forn** in **Taris, Ruined Plaza: Medical Bay**. |
| **Key locations** | Taris, Ruined Plaza, Taris, Ruined Plaza: Medical Bay, Taris, Ruined Plaza: Outpost, Taris, Undercity |
| **Key characters** | Shade Vendas, Zelka Forn |

## Walkthrough

### 1. Speak with Zelka Forn in Taris, Ruined Plaza: Medical Bay

Speak with **Zelka Forn** in **Taris, Ruined Plaza: Medical Bay**.

> **Expected journal update — index 10:** I woke up on Taris and was greeted by my rescuer, Zelka Forn. He told me him and another were able to save me from the bombardment of the city. I had been unconscious for a few days since then. I was given instructions on how to find the other who saved me, I should see what he might want.

**Known item transfer:** 1 × **Directions to Taris Outpost** (`SW_PreTarisNote1`).

### 2. Reach Taris, Ruined Plaza: Outpost and allow the scripted event to complete

Reach **Taris, Ruined Plaza: Outpost** and allow the scripted event to complete.

> **Expected journal update — index 20:** I've met with my mysterious rescuer, Gezeki. He introduced me to Shade Vendas, the daughter of the late Chancellor of Taris. If I'm to get off this planet I must agree to swear my service to the successor of Taris, Shade Vendas, with a crusade across the Galaxy.

### 3. Speak with Shade Vendas in Taris, Ruined Plaza: Outpost

Speak with **Shade Vendas** in **Taris, Ruined Plaza: Outpost**.

> **Expected journal update — index 30:** I've agreed to help Shade Vendas with her endeavor to save Taris. The ship is just outside this outpost and to the left. Tatooine will be our first destination.

### 4. Reach Taris, Ruined Plaza and allow the scripted event to complete — Finished

Reach **Taris, Ruined Plaza** and allow the scripted event to complete.

> **Expected journal update — index 40:** Shade Vendas and myself have left Taris.

**Scripted destination:** **Tatooine, Sandriver**.

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 40**:

> Shade Vendas and myself have left Taris.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 1 × **Directions to Taris Outpost** (`SW_PreTarisNote1`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Shade Vendas** (`SW_ShadePre`) — `Taris, Ruined Plaza: Outpost`
- **Zelka Forn** (`SW_ZelkaForn`) — `Taris, Ruined Plaza: Medical Bay`

**Locations implicated by actor/object placement or explicit travel:**
- **Taris, Ruined Plaza**
- **Taris, Ruined Plaza: Medical Bay**
- **Taris, Ruined Plaza: Outpost**
- **Taris, Undercity**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_PreTaris`
**Generated category:** Main Quest
**Journal entries:** 5

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 10 | — | I woke up on Taris and was greeted by my rescuer, Zelka Forn. He told me him and another were able to save me from the bombardment of the city. I had been unconscious for a few days since then. I was given instructions on how to find the other who saved me, I should see what he might want. | 2 |
| 20 | — | I've met with my mysterious rescuer, Gezeki. He introduced me to Shade Vendas, the daughter of the late Chancellor of Taris. If I'm to get off this planet I must agree to swear my service to the successor of Taris, Shade Vendas, with a crusade across the Galaxy. | 1 |
| 30 | — | I've agreed to help Shade Vendas with her endeavor to save Taris. The ship is just outside this outpost and to the left. Tatooine will be our first destination. | 1 |
| 40 | Finished | Shade Vendas and myself have left Taris. | 1 |

### Record-level trigger map

### Stage 10

I woke up on Taris and was greeted by my rescuer, Zelka Forn. He told me him and another were able to save me from the bombardment of the city. I had been unconscious for a few days since then. I was given instructions on how to find the other who saved me, I should see what he might want.

**How this stage is set:**
- Dialogue INFO `3224612166588412895` under topic **Greeting 2**; speaker Zelka Forn (`SW_ZelkaForn`). locations: `Taris, Ruined Plaza: Medical Bay`. conditions: Function/Choice Equal 3. response: “Well I can't stop you. But before you go, the man who helped rescue you asked me to give you this data pad when you woke up. It should tell you how to find him. Good luck out there.”.

```text
AiTravel 1069 10933 13656
player->AddItem"SW_PreTarisNote1" 1
Journal SW_PreTaris 10
Goodbye
```
- Dialogue INFO `513217402287987444` under topic **Greeting 2**; speaker Zelka Forn (`SW_ZelkaForn`). locations: `Taris, Ruined Plaza: Medical Bay`. conditions: Function/Choice Equal 2. response: “Don't worry about it. I don't expect any payment, but you may want to meet up with the man who helped rescue you. He asked me to give you this data pad when you woke up. It should tell you how to find him. Good luck out there.”.

```text
AiTravel 1069 10933 13656
player->AddItem"SW_PreTarisNote1" 1
Journal SW_PreTaris 10
Goodbye
```

### Stage 20

I've met with my mysterious rescuer, Gezeki. He introduced me to Shade Vendas, the daughter of the late Chancellor of Taris. If I'm to get off this planet I must agree to swear my service to the successor of Taris, Shade Vendas, with a crusade across the Galaxy.

**How this stage is set:**
- Script `SW_StorySceneScr1`. attached to Activator `SW_StorySceneAct1`; placed in `Taris, Ruined Plaza: Outpost`.

```text
if ( SceneState == 15 )
Journal SW_PreTaris 20
EnablePlayerControls
set SW_RealTimeScene to 0
```

### Stage 30

I've agreed to help Shade Vendas with her endeavor to save Taris. The ship is just outside this outpost and to the left. Tatooine will be our first destination.

**How this stage is set:**
- Dialogue INFO `49501830415808275` under topic **Greeting 2**; speaker Shade Vendas (`SW_ShadePre`). locations: `Taris, Ruined Plaza: Outpost`. conditions: Journal `SW_PreTaris` Equal 20; Function/Choice Equal 1. response: “The ship is just outside of here and to the left, I'll follow you.”.

```text
StopSound "Kelli2"
PlaySound3D "Kelli3"
Journal SW_PreTaris 30
SetSpeed 90
AiFollow player 0 0 0 0
```

### Stage 40 — Finished

Shade Vendas and myself have left Taris.

**How this stage is set:**
- Script `SW_StorySceneScr2`. attached to Activator `SW_StorySceneAct2`; placed in `Taris, Ruined Plaza`.

```text
if ( timer > 2 )
PlaySound "SW_Shipblastoff"
Journal SW_PreTaris 40
player->PositionCell 2800.889 9448.283 12415.763 315.1 "Tatooine, Sandriver"
set doOnce to 1
```

### Related records and locations

**Dialogue speakers:**
- Shade Vendas (`SW_ShadePre`) — `Taris, Ruined Plaza: Outpost`
- Zelka Forn (`SW_ZelkaForn`) — `Taris, Ruined Plaza: Medical Bay`

**Scripts that read or write this journal:**
- `SW_NebInPostScr` — Container Footlocker (`SW_FootlockerNeb`); placed in `Taris, Undercity`; Light `SW_NebPostLantern`; placed in `Taris, Undercity`; Activator `SW_Neb_overhang_01`; placed in `Taris, Undercity`
- `SW_NebsScript` — Npc Neb Wolfson (`SW_NebWolfsonPost`); placed in `Taris, Undercity`
- `SW_PreTarisDoorScr` — Door Metal Door (`SW_TarisDoorSpre`); placed in `Taris, Ruined Plaza: Medical Bay`
- `SW_PreTarisintrodoorbl` — Door Metal Door (`SW_TarisDoorSIntroBlock`); placed in `Taris, Ruined Plaza: Medical Bay`
- `SW_StorySceneScr1` — Activator `SW_StorySceneAct1`; placed in `Taris, Ruined Plaza: Outpost`
- `SW_StorySceneScr2` — Activator `SW_StorySceneAct2`; placed in `Taris, Ruined Plaza`

**Items referenced by related script/result code:**
- Directions to Taris Outpost (`SW_PreTarisNote1`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Taris, Ruined Plaza`
- `Taris, Ruined Plaza: Medical Bay`
- `Taris, Ruined Plaza: Outpost`
- `Taris, Undercity`

<details><summary>Other directly addressed object IDs in related code</summary>

- Shade Vendas (`SW_ShadePre`)

</details>

<details><summary>Journal-state readers (5 code sites)</summary>

- Script `SW_NebInPostScr`. attached to Container Footlocker (`SW_FootlockerNeb`); placed in `Taris, Undercity`; Light `SW_NebPostLantern`; placed in `Taris, Undercity`; Activator `SW_Neb_overhang_01`; placed in `Taris, Undercity`.
- Script `SW_NebsScript`. attached to Npc Neb Wolfson (`SW_NebWolfsonPost`); placed in `Taris, Undercity`.
- Script `SW_PreTarisDoorScr`. attached to Door Metal Door (`SW_TarisDoorSpre`); placed in `Taris, Ruined Plaza: Medical Bay`.
- Script `SW_PreTarisintrodoorbl`. attached to Door Metal Door (`SW_TarisDoorSIntroBlock`); placed in `Taris, Ruined Plaza: Medical Bay`.
- Script `SW_StorySceneScr2`. attached to Activator `SW_StorySceneAct2`; placed in `Taris, Ruined Plaza`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `10` is obtainable.
- [ ] Reach index `10`: I woke up on Taris and was greeted by my rescuer, Zelka Forn. He told me him and another were able to save me …
- [ ] Reach index `20`: I've met with my mysterious rescuer, Gezeki. He introduced me to Shade Vendas, the daughter of the late Chance…
- [ ] Reach index `30`: I've agreed to help Shade Vendas with her endeavor to save Taris. The ship is just outside this outpost and to…
- [ ] Reach index `40` (`Finished`): Shade Vendas and myself have left Taris.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_PreTaris`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
