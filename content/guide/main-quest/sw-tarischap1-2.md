---
title: "Chapter 1: Manaan Ship Bargain"
description: "Walkthrough and QA reference for Chapter 1: Manaan Ship Bargain (SW_TarisChap1-2)."
weight: 3
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_TarisChap1-2"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_TarisChap1-2` |
| **Category** | Main Quest |
| **Journal entries** | 4 |
| **Completion branches** | 1 |
| **Starts by** | Allow the scripted event handled by `SW_TatChap1EndScr` to complete. |
| **Key locations** | Dantooine, Ballast, Dathomir, Exterior, Gamorr, Ucksmug, Hoth, Wasteland, Kashyyk, Boyle Research Facility, Lok, Graveridge … |

## Walkthrough

### 1. Allow the scripted event handled by `SW_TatChap1EndScr` to complete

Allow the scripted event handled by `SW_TatChap1EndScr` to complete.

> **Expected journal update — index 5:** Shade and I have arrived on Manaan, I should speak to her and to find our next step.

### 2. Reach Manaan, Docking Bay and allow the scripted event to complete

Reach **Manaan, Docking Bay** and allow the scripted event to complete.

> **Expected journal update — index 10:** We have found the woman selling the freighter, Killua Ki, and Shade has purchased the ship. It needs three components found in the other drop ships from the Endar Spire. Killua has already scanned for them and the pods can be found on Tatooine, Dantooine, Kashyyk, Nar Shadda, and in Manaan's Ocean.

### 3. Use Ship Captain — Finished

The records expose more than one way to reach this journal update:
- Use **Ship Captain**.
- Reach **Lok, Graveridge** and allow the scripted event to complete.
- Use **Freighter** in **Dantooine, Ballast**.

> **Expected journal update — index 15:** The freighter is fixed and Shade should be waiting for me inside, I should go speak to her.

**Known item transfer:** 1 × **Freighter Pilot Codes** (`SW_SpCarFreight`).

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 15**:

> The freighter is fixed and Shade should be waiting for me inside, I should go speak to her.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 1 × **Freighter Pilot Codes** (`SW_SpCarFreight`)

## Characters & locations

**Locations implicated by actor/object placement or explicit travel:**
- **Dantooine, Ballast**
- **Dathomir, Exterior**
- **Gamorr, Ucksmug**
- **Hoth, Wasteland**
- **Kashyyk, Boyle Research Facility**
- **Lok, Graveridge**
- **M4-78: Landing Arm**
- **Manaan, Docking Bay**
- **Naboo, Beachhead**
- **Naboo, Landing Site**
- **Nar Shaddaa**
- **Nar Shaddaa, North Hanger**
- **Taris, Central Plaza: Capital Tower**
- **Taris, Central Plaza: Capital Tower Upper Level**
- **Taris, Sith Headquarters: Level 2**
- **Taris, Sith Headquarters: Level 3**
- **Taris, Sith Headquarters: OC Office**
- **Taris, Upper City Apartments**
- **Tatooine, Sandriver**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_TarisChap1-2`
**Generated category:** Main Quest
**Journal entries:** 4

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | Shade and I have arrived on Manaan, I should speak to her and to find our next step. | 1 |
| 10 | — | We have found the woman selling the freighter, Killua Ki, and Shade has purchased the ship. It needs three components found in the other drop ships from the Endar Spire. Killua has already scanned for them and the pods can be found on Tatooine, Dantooine, Kashyyk, Nar Shadda, and in Manaan's Ocean. | 1 |
| 15 | Finished | The freighter is fixed and Shade should be waiting for me inside, I should go speak to her. | 3 |

### Record-level trigger map

### Stage 5

Shade and I have arrived on Manaan, I should speak to her and to find our next step.

**How this stage is set:**
- Script `SW_TatChap1EndScr`.

```text
SW_ShadeManaan1->AIFollow Player 0, 0, 0, 0
Journal SW_TarisChap1 35
Journal SW_TarisChap1-2 5
FadeIn 1.0
Player->PositionCell, 2240, 11712, 7530, 143 "Manaan, Docking Bay"
```

### Stage 10

We have found the woman selling the freighter, Killua Ki, and Shade has purchased the ship. It needs three components found in the other drop ships from the Endar Spire. Killua has already scanned for them and the pods can be found on Tatooine, Dantooine, Kashyyk, Nar Shadda, and in Manaan's Ocean.

**How this stage is set:**
- Script `SW_StorySceneScr4`. attached to Activator `SW_StorySceneAct4`; placed in `Manaan, Docking Bay`.

```text
if ( SceneState == 15 )
    SW_ShadeManaan1->AiTravel 0, 0, 0, 0
    Journal SW_TarisChap1-2 10
    EnablePlayerControls
    set SW_RealTimeScene to 0
```

### Stage 15 — Finished

The freighter is fixed and Shade should be waiting for me inside, I should go speak to her.

**How this stage is set:**
- Script `Alt_Ship`. attached to Door Ship Captain (`SW_CharGenPodDoorShipCap`).

```text
;End Intro Skip
        player->additem SW_SpCarFreight 1
        Journal SW_TarisChap1-2 15
        Journal SW_ShipOwn 15
        SW_StorySceneAct4->Disable
```
- Script `SW_EnterFreighter`. attached to Activator Freighter (`SW_PlayersShipMana`); placed in `Lok, Graveridge`, `Nar Shaddaa`, `Taris, Central Plaza: Capital Tower`, `Taris, Central Plaza: Capital Tower Upper Level`, `Taris, Sith Headquarters: Level 2`, `Taris, Sith Headquarters: Level 3`, `Taris, Sith Headquarters: OC Office`, `Taris, Upper City Apartments`.

```text
MessageBox "You repair the ship!"
            AddTopic "head to ship"
            Journal SW_TarisChap1-2 15
            Journal SW_ShipOwn 15
            ;Shade Talks
```
- Script `SW_EnterFreighterNEW`. attached to Door Freighter (`SW_PlayerShipNEW`); placed in `Dantooine, Ballast`, `Dathomir, Exterior`, `Gamorr, Ucksmug`, `Hoth, Wasteland`, `Kashyyk, Boyle Research Facility`, `M4-78: Landing Arm`, `Manaan, Docking Bay`, `Naboo, Beachhead` (+3 more).

```text
MessageBox "You repair the ship!"
            AddTopic "head to ship"
            Journal SW_TarisChap1-2 15
            Journal SW_ShipOwn 15
            ;Shade Talks
```

### Related records and locations

**Scripts that read or write this journal:**
- `Alt_Ship` — Door Ship Captain (`SW_CharGenPodDoorShipCap`)
- `SW_EnterFreighter` — Activator Freighter (`SW_PlayersShipMana`); placed in `Lok, Graveridge`, `Nar Shaddaa`, `Taris, Central Plaza: Capital Tower`, `Taris, Central Plaza: Capital Tower Upper Level`, `Taris, Sith Headquarters: Level 2`, `Taris, Sith Headquarters: Level 3`, `Taris, Sith Headquarters: OC Office`, `Taris, Upper City Apartments`
- `SW_EnterFreighterNEW` — Door Freighter (`SW_PlayerShipNEW`); placed in `Dantooine, Ballast`, `Dathomir, Exterior`, `Gamorr, Ucksmug`, `Hoth, Wasteland`, `Kashyyk, Boyle Research Facility`, `M4-78: Landing Arm`, `Manaan, Docking Bay`, `Naboo, Beachhead` (+3 more)
- `SW_StorySceneScr4` — Activator `SW_StorySceneAct4`; placed in `Manaan, Docking Bay`
- `SW_TatChap1EndScr`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)
- Dropship Components (`SW_EnviroFilter`)
- Freighter Pilot Codes (`SW_SpCarFreight`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Dantooine, Ballast`
- `Dathomir, Exterior`
- `Gamorr, Ucksmug`
- `Hoth, Wasteland`
- `Kashyyk, Boyle Research Facility`
- `Lok, Graveridge`
- `M4-78: Landing Arm`
- `Manaan, Docking Bay`
- `Naboo, Beachhead`
- `Naboo, Landing Site`
- `Nar Shaddaa`
- `Nar Shaddaa, North Hanger`
- `Taris, Central Plaza: Capital Tower`
- `Taris, Central Plaza: Capital Tower Upper Level`
- `Taris, Sith Headquarters: Level 2`
- `Taris, Sith Headquarters: Level 3`
- `Taris, Sith Headquarters: OC Office`
- `Taris, Upper City Apartments`
- `Tatooine, Sandriver`

<details><summary>Journal-state readers (3 code sites)</summary>

- Script `SW_EnterFreighter`. attached to Activator Freighter (`SW_PlayersShipMana`); placed in `Lok, Graveridge`, `Nar Shaddaa`, `Taris, Central Plaza: Capital Tower`, `Taris, Central Plaza: Capital Tower Upper Level`, `Taris, Sith Headquarters: Level 2`, `Taris, Sith Headquarters: Level 3`, `Taris, Sith Headquarters: OC Office`, `Taris, Upper City Apartments`.
- Script `SW_EnterFreighterNEW`. attached to Door Freighter (`SW_PlayerShipNEW`); placed in `Dantooine, Ballast`, `Dathomir, Exterior`, `Gamorr, Ucksmug`, `Hoth, Wasteland`, `Kashyyk, Boyle Research Facility`, `M4-78: Landing Arm`, `Manaan, Docking Bay`, `Naboo, Beachhead` (+3 more).
- Script `SW_StorySceneScr4`. attached to Activator `SW_StorySceneAct4`; placed in `Manaan, Docking Bay`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: Shade and I have arrived on Manaan, I should speak to her and to find our next step.
- [ ] Reach index `10`: We have found the woman selling the freighter, Killua Ki, and Shade has purchased the ship. It needs three com…
- [ ] Reach index `15` (`Finished`): The freighter is fixed and Shade should be waiting for me inside, I should go speak to her.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_TarisChap1-2`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
