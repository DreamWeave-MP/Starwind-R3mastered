---
title: "Chapter 2: Water and Wastewater Sector"
description: "Walkthrough and QA reference for Chapter 2: Water and Wastewater Sector (SW_TarisSectWater)."
weight: 12
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_TarisSectWater"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_TarisSectWater` |
| **Category** | Main Quest |
| **Journal entries** | 4 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Shade Vendas** in **Taris, Central Plaza: Capital Tower** and ask about **Water and Wastewater Sector**. |
| **Key locations** | Taris, Central Plaza: Capital Tower, Taris, Central Plaza: Government Office D, Taris, Infested Sewers |
| **Key characters** | Shade Vendas |

## Walkthrough

### 1. Speak with Shade Vendas in Taris, Central Plaza: Capital Tower and ask about Water and Wastewater Sector

Speak with **Shade Vendas** in **Taris, Central Plaza: Capital Tower** and ask about **Water and Wastewater Sector**.

> **Expected journal update — index 5:** In the remnants of Taris the wastewater canals are full of rakghouls, Black Vulkar gang members, and Gammorean thugs. Shade would like me to head to the sewers and locate the water treatment facility, get everything operational, and seal off as many entrances as I can.

**Known item transfer:** 4 × **Explosive Charge** (`SW_TarisExplosive`).

### 2. Reach Taris, Infested Sewers and allow the scripted event to complete

Reach **Taris, Infested Sewers** and allow the scripted event to complete.

> **Expected journal update — index 10:** The sewer section under Taris that is under Shade's control is isolated. I should return to Shade.

### 3. Speak with Shade Vendas in Taris, Central Plaza: Capital Tower and ask about Water and Wastewater Sector — Finished

Speak with **Shade Vendas** in **Taris, Central Plaza: Capital Tower** and ask about **Water and Wastewater Sector**.

> **Expected journal update — index 15:** Shade will get working on staffing the sewers. I should look into other contacts we need to gather.

**Known item transfer:** 1000 × **Credits** (`gold_001`).

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 15**:

> Shade will get working on staffing the sewers. I should look into other contacts we need to gather.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 4 × **Explosive Charge** (`SW_TarisExplosive`)
- 1000 × **Credits** (`gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Shade Vendas** (`SW_ShadeTower`) — `Taris, Central Plaza: Capital Tower`

**Locations implicated by actor/object placement or explicit travel:**
- **Taris, Central Plaza: Capital Tower**
- **Taris, Central Plaza: Government Office D**
- **Taris, Infested Sewers**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_TarisSectWater`
**Generated category:** Main Quest
**Journal entries:** 4

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | In the remnants of Taris the wastewater canals are full of rakghouls, Black Vulkar gang members, and Gammorean thugs. Shade would like me to head to the sewers and locate the water treatment facility, get everything operational, and seal off as many entrances as I can. | 1 |
| 10 | — | The sewer section under Taris that is under Shade's control is isolated. I should return to Shade. | 1 |
| 15 | Finished | Shade will get working on staffing the sewers. I should look into other contacts we need to gather. | 2 |

### Record-level trigger map

### Stage 5

In the remnants of Taris the wastewater canals are full of rakghouls, Black Vulkar gang members, and Gammorean thugs. Shade would like me to head to the sewers and locate the water treatment facility, get everything operational, and seal off as many entrances as I can.

**How this stage is set:**
- Dialogue INFO `9681204721002225029` under topic **Water and Wastewater Sector**; speaker Shade Vendas (`SW_ShadeTower`). locations: `Taris, Central Plaza: Capital Tower`. conditions: Journal `SW_TarisSectWater` Equal 0. response: “By the grace of the stars the control room in the sewers below is still operational. The problem is that the areas leading out of this part of Taris is overloading them. There were five tunnels leading out of this section of the sewers but one one of them caved in, I think if we caved in the other 4 it would keep the machines from overloading. Once we have this done our security can escort in engineers to start planning a water processing infrastructure. You're going to need these explosive charges...”.

```text
StopSound "KelliSew5"
PlaySound3D "KelliSew1"
Journal SW_TarisSectWater 5
player->additem "SW_TarisExplosive", 4
SW_TarisSithDefectorSew->Enable
```

### Stage 10

The sewer section under Taris that is under Shade's control is isolated. I should return to Shade.

**How this stage is set:**
- Script `SW_SewerDetonation`. attached to Activator Control Terminal (`SW_TarisSewersTerminal`); placed in `Taris, Infested Sewers`.

```text
MessageBox "The charges have been detonated."
        Set ReadyToDetonate to 2
        Journal SW_TarisSectWater 10
    Elseif ( ReadyToDetonate > 1 )
        MessageBox "You have no further need of this terminal."
```

### Stage 15 — Finished

Shade will get working on staffing the sewers. I should look into other contacts we need to gather.

**How this stage is set:**
- Dialogue INFO `2365620213232072310` under topic **Water and Wastewater Sector**; speaker Shade Vendas (`SW_ShadeTower`). locations: `Taris, Central Plaza: Capital Tower`. conditions: Journal `SW_TarisSectWater` Equal 10; Dead/DeadType `SW_TarisSithDefectorSew` Equal 0. response: “The risk that you just sacrificed will one day recycle clean water for Taris again. Officer Rowen is under your command now, he will be of better use to us all with you than watching the walkways here.”.

```text
StopSound "KelliSew5"
PlaySound3D "KelliSew5"
Journal SW_TarisSectWater 15
player->additem gold_001, 1000
```
- Dialogue INFO `156624917210879825` under topic **Water and Wastewater Sector**; speaker Shade Vendas (`SW_ShadeTower`). locations: `Taris, Central Plaza: Capital Tower`. conditions: Journal `SW_TarisSectWater` Equal 10; Dead/DeadType `SW_TarisSithDefectorSew` Equal 1. response: “The risk that you just sacrificed will one day recycle clean water for Taris again. Thank you once again my friend. Officer Rowen will be given a proper service for his sacrifice.”.

```text
StopSound "KelliSew5"
PlaySound3D "KelliSew4"
Journal SW_TarisSectWater 15
player->additem gold_001, 1000
```

### Related records and locations

**Dialogue speakers:**
- Shade Vendas (`SW_ShadeTower`) — `Taris, Central Plaza: Capital Tower`

**Scripts that read or write this journal:**
- `SW_SewerDetonation` — Activator Control Terminal (`SW_TarisSewersTerminal`); placed in `Taris, Infested Sewers`
- `SW_TarisGvnBldNpcWater` — Npc Brooali Meagas (`SW_TarisGvnNpc6`); placed in `Taris, Central Plaza: Government Office D`; Npc Nadicas Domstil (`SW_TarisGvnNpc8`); placed in `Taris, Central Plaza: Government Office D`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)
- Explosive Charge (`SW_TarisExplosive`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Taris, Central Plaza: Capital Tower`
- `Taris, Central Plaza: Government Office D`
- `Taris, Infested Sewers`

<details><summary>Journal-state readers (1 code sites)</summary>

- Script `SW_TarisGvnBldNpcWater`. attached to Npc Brooali Meagas (`SW_TarisGvnNpc6`); placed in `Taris, Central Plaza: Government Office D`; Npc Nadicas Domstil (`SW_TarisGvnNpc8`); placed in `Taris, Central Plaza: Government Office D`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: In the remnants of Taris the wastewater canals are full of rakghouls, Black Vulkar gang members, and Gammorean…
- [ ] Reach index `10`: The sewer section under Taris that is under Shade's control is isolated. I should return to Shade.
- [ ] Reach index `15` (`Finished`): Shade will get working on staffing the sewers. I should look into other contacts we need to gather.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_TarisSectWater`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
