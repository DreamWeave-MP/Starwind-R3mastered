---
title: "Chapter 3: Derelict Station"
description: "Walkthrough and QA reference for Chapter 3: Derelict Station (SW_TarisChapX3-2)."
weight: 15
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_TarisChapX3-2"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_TarisChapX3-2` |
| **Category** | Main Quest |
| **Journal entries** | 8 |
| **Completion branches** | 4 |
| **Starts by** | Reach **Derelict Station, Holding Cells** and allow the scripted event to complete. |
| **Key locations** | Derelict Station, Antechamber, Derelict Station, Holding Cells, Taris, Central Plaza: Capital Tower, Taris, Central Plaza: Capital Tower Underground Lab, The Outer Rim |
| **Key characters** | Gezeki |

## Walkthrough

### 1. Reach Derelict Station, Holding Cells and allow the scripted event to complete

Reach **Derelict Station, Holding Cells** and allow the scripted event to complete.

> **Expected journal update — index 10:** Something is wrong... I must escape.

**Scripted destination:** **Derelict Station, Holding Cells**.

### 2. Reach Derelict Station, Antechamber and allow the scripted event to complete

Reach **Derelict Station, Antechamber** and allow the scripted event to complete.

> **Expected journal update — index 20:** Gezeki confronted me in the Derelict Station, telling me the station is falling apart. Their plan was to make an army of Rakghouls to end the war between republic and sith, but the virus mutates too rapidly, and things spiraled out of control. I decided to join him for now.

### 3. Reach Derelict Station, Antechamber and allow the scripted event to complete

Reach **Derelict Station, Antechamber** and allow the scripted event to complete.

> **Expected journal update — index 30:** Gezeki confronted me in the Derelict Station, telling me the station is falling apart. Their plan was to make an army of Rakghouls to end the war between republic and sith, but the virus mutates too rapidly, and things spiraled out of control. He'll die for what he did.

### 4. Speak with Gezeki in Derelict Station, Antechamber — Finished

Speak with **Gezeki** in **Derelict Station, Antechamber**.

> **Expected journal update — index 50:** I told Gezeki no more scheming behind my back. I'm going to confront Shade about all this.

**Known item transfer:** 1 × **Derelict Backroom Key** (`SW_key_derelictdocks1`).

**Outcome:** this journal entry is marked as a finished branch.

### 5. Reach Derelict Station, Antechamber and allow the scripted event to complete — Finished

Reach **Derelict Station, Antechamber** and allow the scripted event to complete.

> **Expected journal update — index 60:** Gezeki has been killed. Time to confront Shade.

**Outcome:** this journal entry is marked as a finished branch.

### 6. Reach Derelict Station, Antechamber and allow the scripted event to complete — Finished

Reach **Derelict Station, Antechamber** and allow the scripted event to complete.

> **Expected journal update — index 62:** I've killed Gezeki and the hoardes of rakghouls. Time to confront Shade.

**Outcome:** this journal entry is marked as a finished branch.

### 7. Speak with Gezeki in Derelict Station, Antechamber — Finished

Speak with **Gezeki** in **Derelict Station, Antechamber**.

> **Expected journal update — index 65:** No more games, time to end Gezeki. Shade Vendas is next.

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has **4 explicit finished entries**. Treat them as branch coverage targets during playtesting:

- **Index 50:** I told Gezeki no more scheming behind my back. I'm going to confront Shade about all this.
- **Index 60:** Gezeki has been killed. Time to confront Shade.
- **Index 62:** I've killed Gezeki and the hoardes of rakghouls. Time to confront Shade.
- **Index 65:** No more games, time to end Gezeki. Shade Vendas is next.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 1 × **Derelict Backroom Key** (`SW_key_derelictdocks1`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Gezeki** (`SW_GezekDerelict`) — `Derelict Station, Antechamber`

**Locations implicated by actor/object placement or explicit travel:**
- **Derelict Station, Antechamber**
- **Derelict Station, Holding Cells**
- **Taris, Central Plaza: Capital Tower**
- **Taris, Central Plaza: Capital Tower Underground Lab**
- **The Outer Rim**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_TarisChapX3-2`
**Generated category:** Main Quest
**Journal entries:** 8

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 10 | — | Something is wrong... I must escape. | 1 |
| 20 | — | Gezeki confronted me in the Derelict Station, telling me the station is falling apart. Their plan was to make an army of Rakghouls to end the war between republic and sith, but the virus mutates too rapidly, and things spiraled out of control.
<br>I decided to join him for now. | 1 |
| 30 | — | Gezeki confronted me in the Derelict Station, telling me the station is falling apart. Their plan was to make an army of Rakghouls to end the war between republic and sith, but the virus mutates too rapidly, and things spiraled out of control.
<br>He'll die for what he did. | 1 |
| 50 | Finished | I told Gezeki no more scheming behind my back. I'm going to confront Shade about all this. | 1 |
| 60 | Finished | Gezeki has been killed. Time to confront Shade. | 1 |
| 62 | Finished | I've killed Gezeki and the hoardes of rakghouls. Time to confront Shade. | 1 |
| 65 | Finished | No more games, time to end Gezeki. Shade Vendas is next. | 1 |

### Record-level trigger map

### Stage 10

Something is wrong... I must escape.

**How this stage is set:**
- Script `SW_StorySceneX3-4`. attached to Activator `SW_StorySceneAct3-4`; placed in `Derelict Station, Holding Cells`.

```text
player->PositionCell 2509 5947 12393 180 "Derelict Station, Holding Cells"
EnablePlayerControls
Journal "SW_TarisChapX3-2" 10
FadeIn 2.0
set timer to 0
```

### Stage 20

Gezeki confronted me in the Derelict Station, telling me the station is falling apart. Their plan was to make an army of Rakghouls to end the war between republic and sith, but the virus mutates too rapidly, and things spiraled out of control.
I decided to join him for now.

**How this stage is set:**
- Script `SW_GezFightJoin`. attached to Activator `SW_GezekiFight1Joined`; placed in `Derelict Station, Antechamber`.

```text
if ( doOnce == 0 )
if ( SW_GezekiJoin == 1 )
Journal "SW_TarisChapX3-2" 20
SW_RakhoulHorde1->Enable
SW_RakhoulHorde1->StartCombat, player
```

```text
SW_DerelictDoorGoUpAfterBattle1->MoveWorld z 150
else
Journal "SW_TarisChapX3-2" 60
set doOnce to 12
endif
```

### Stage 30

Gezeki confronted me in the Derelict Station, telling me the station is falling apart. Their plan was to make an army of Rakghouls to end the war between republic and sith, but the virus mutates too rapidly, and things spiraled out of control.
He'll die for what he did.

**How this stage is set:**
- Script `SW_GezFightAgainst`. attached to Activator `SW_GezekiFight1Against`; placed in `Derelict Station, Antechamber`.

```text
if ( doOnce == 0 )
if ( SW_GezekiJoin == 2 )
Journal "SW_TarisChapX3-2" 30
SW_RakhoulHorde1->Enable
SW_RakhoulHorde1->StartCombat, player
```

```text
SW_DerelictDoorGoUpAfterBattle1->MoveWorld z 150
else
Journal "SW_TarisChapX3-2" 62
set doOnce to 12
endif
```

### Stage 50 — Finished

I told Gezeki no more scheming behind my back. I'm going to confront Shade about all this.

**How this stage is set:**
- Dialogue INFO `2313390413673408` under topic **Greeting 2**; speaker Gezeki (`SW_GezekDerelict`). locations: `Derelict Station, Antechamber`. conditions: Global/VariableCompare `SW_GezekiJoin` Equal 10; Function/Choice Equal 1. response: “You'll need to take that up with Shade. In truth, I may lose favor with her after this failure. Take this key and head up into my study chambers, you will find a serum to reverse your effects. Though if you like, it can turn you back whenever you want.”.

```text
player->AddItem "SW_key_derelictdocks1" 1
Journal "SW_TarisChapX3-2" 50
PlaySound3D "GezekDerYes3"
Goodbye
```

### Stage 60 — Finished

Gezeki has been killed. Time to confront Shade.

**How this stage is set:**
- Script `SW_GezFightJoin`. attached to Activator `SW_GezekiFight1Joined`; placed in `Derelict Station, Antechamber`.

```text
if ( doOnce == 0 )
if ( SW_GezekiJoin == 1 )
Journal "SW_TarisChapX3-2" 20
SW_RakhoulHorde1->Enable
SW_RakhoulHorde1->StartCombat, player
```

```text
SW_DerelictDoorGoUpAfterBattle1->MoveWorld z 150
else
Journal "SW_TarisChapX3-2" 60
set doOnce to 12
endif
```

### Stage 62 — Finished

I've killed Gezeki and the hoardes of rakghouls. Time to confront Shade.

**How this stage is set:**
- Script `SW_GezFightAgainst`. attached to Activator `SW_GezekiFight1Against`; placed in `Derelict Station, Antechamber`.

```text
if ( doOnce == 0 )
if ( SW_GezekiJoin == 2 )
Journal "SW_TarisChapX3-2" 30
SW_RakhoulHorde1->Enable
SW_RakhoulHorde1->StartCombat, player
```

```text
SW_DerelictDoorGoUpAfterBattle1->MoveWorld z 150
else
Journal "SW_TarisChapX3-2" 62
set doOnce to 12
endif
```

### Stage 65 — Finished

No more games, time to end Gezeki. Shade Vendas is next.

**How this stage is set:**
- Dialogue INFO `1166910604940923396` under topic **Greeting 2**; speaker Gezeki (`SW_GezekDerelict`). locations: `Derelict Station, Antechamber`. conditions: Global/VariableCompare `SW_GezekiJoin` Equal 10; Function/Choice Equal 2. response: “Not if I can stop you!”.

```text
PlaySound3D "GezekDerNo2"
startcombat player
Journal "SW_TarisChapX3-2" 65
Goodbye
```

### Related records and locations

**Dialogue speakers:**
- Gezeki (`SW_GezekDerelict`) — `Derelict Station, Antechamber`

**Scripts that read or write this journal:**
- `SW_EnterDerelictStation` — Activator Derelict Station (`SW_DerelStation`); placed in `The Outer Rim`
- `SW_GezekiDerelict1scr` — Npc Gezeki (`SW_GezekDerelict`); placed in `Derelict Station, Antechamber`
- `SW_GezekiFightBlockDoor` — Door Metal Door (`SW_DerelictDoorFB`); placed in `Derelict Station, Antechamber`
- `SW_GezFightAgainst` — Activator `SW_GezekiFight1Against`; placed in `Derelict Station, Antechamber`
- `SW_GezFightJoin` — Activator `SW_GezekiFight1Joined`; placed in `Derelict Station, Antechamber`
- `SW_ShadeDroidArmyFinaleScr` — Creature Flying Droid (`SW_TarisFinalFlyDroid1`); placed in `Taris, Central Plaza: Capital Tower`; Creature Flying Droid (`SW_TarisFinalFlyDroid2`); placed in `Taris, Central Plaza: Capital Tower`; Npc HK-41 (`SW_TarisFinalKillDroid1`); placed in `Taris, Central Plaza: Capital Tower`; Npc HK-42 (`SW_TarisFinalKillDroid2`); placed in `Taris, Central Plaza: Capital Tower`
- `SW_StorySceneX3-4` — Activator `SW_StorySceneAct3-4`; placed in `Derelict Station, Holding Cells`
- `SW_TarisChap3-3Setup` — Activator `SW_TarisChap3SetupAct`; placed in `Taris, Central Plaza: Capital Tower`
- `SW_TarisCTCantLeaveFinale` — Door Metal Door (`SW_TarisDoor1MainDoorCT`); placed in `Taris, Central Plaza: Capital Tower`
- `SW_TarisCTLabDoor1` — Door Elevator Door (`SW_TarisLabDoor1`); placed in `Taris, Central Plaza: Capital Tower`
- `SW_TarisCTLabDoor3` — Door Metal Door (`SW_TarisDoorLabExit2`); placed in `Taris, Central Plaza: Capital Tower Underground Lab`
- `SW_TarisCTUpperEleScr` — Door Elevator Door (`SW_TarisEleDoorTCUpperLvl`); placed in `Taris, Central Plaza: Capital Tower`
- `SW_TarisSteamULEvent` — Activator `SW_TarisULSteam`; placed in `Taris, Central Plaza: Capital Tower Underground Lab`

**Items referenced by related script/result code:**
- Derelict Backroom Key (`SW_key_derelictdocks1`)
- Freighter Pilot Codes (`SW_SpCarFreight`)
- Unequip (`SW_SpCarNone`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Derelict Station, Antechamber`
- `Derelict Station, Holding Cells`
- `Taris, Central Plaza: Capital Tower`
- `Taris, Central Plaza: Capital Tower Underground Lab`
- `The Outer Rim`

<details><summary>Journal-state readers (10 code sites)</summary>

- Script `SW_EnterDerelictStation`. attached to Activator Derelict Station (`SW_DerelStation`); placed in `The Outer Rim`.
- Script `SW_GezekiDerelict1scr`. attached to Npc Gezeki (`SW_GezekDerelict`); placed in `Derelict Station, Antechamber`.
- Script `SW_GezekiFightBlockDoor`. attached to Door Metal Door (`SW_DerelictDoorFB`); placed in `Derelict Station, Antechamber`.
- Script `SW_ShadeDroidArmyFinaleScr`. attached to Creature Flying Droid (`SW_TarisFinalFlyDroid1`); placed in `Taris, Central Plaza: Capital Tower`; Creature Flying Droid (`SW_TarisFinalFlyDroid2`); placed in `Taris, Central Plaza: Capital Tower`; Npc HK-41 (`SW_TarisFinalKillDroid1`); placed in `Taris, Central Plaza: Capital Tower`; Npc HK-42 (`SW_TarisFinalKillDroid2`); placed in `Taris, Central Plaza: Capital Tower`.
- Script `SW_TarisCTCantLeaveFinale`. attached to Door Metal Door (`SW_TarisDoor1MainDoorCT`); placed in `Taris, Central Plaza: Capital Tower`.
- Script `SW_TarisCTLabDoor1`. attached to Door Elevator Door (`SW_TarisLabDoor1`); placed in `Taris, Central Plaza: Capital Tower`.
- Script `SW_TarisCTLabDoor3`. attached to Door Metal Door (`SW_TarisDoorLabExit2`); placed in `Taris, Central Plaza: Capital Tower Underground Lab`.
- Script `SW_TarisCTUpperEleScr`. attached to Door Elevator Door (`SW_TarisEleDoorTCUpperLvl`); placed in `Taris, Central Plaza: Capital Tower`.
- Script `SW_TarisChap3-3Setup`. attached to Activator `SW_TarisChap3SetupAct`; placed in `Taris, Central Plaza: Capital Tower`.
- Script `SW_TarisSteamULEvent`. attached to Activator `SW_TarisULSteam`; placed in `Taris, Central Plaza: Capital Tower Underground Lab`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `10` is obtainable.
- [ ] Reach index `10`: Something is wrong... I must escape.
- [ ] Reach index `20`: Gezeki confronted me in the Derelict Station, telling me the station is falling apart. Their plan was to make …
- [ ] Reach index `30`: Gezeki confronted me in the Derelict Station, telling me the station is falling apart. Their plan was to make …
- [ ] Reach index `50` (`Finished`): I told Gezeki no more scheming behind my back. I'm going to confront Shade about all this.
- [ ] Reach index `60` (`Finished`): Gezeki has been killed. Time to confront Shade.
- [ ] Reach index `62` (`Finished`): I've killed Gezeki and the hoardes of rakghouls. Time to confront Shade.
- [ ] Reach index `65` (`Finished`): No more games, time to end Gezeki. Shade Vendas is next.
- [ ] Branch coverage: this journal has **4 different `Finished` entries**; test each reachable completion branch.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_TarisChapX3-2`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
