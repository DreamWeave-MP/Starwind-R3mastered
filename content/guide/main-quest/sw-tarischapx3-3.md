---
title: "Chapter 3: Chancellor"
description: "Walkthrough and QA reference for Chapter 3: Chancellor (SW_TarisChapX3-3)."
weight: 16
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_TarisChapX3-3"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_TarisChapX3-3` |
| **Category** | Main Quest |
| **Journal entries** | 5 |
| **Completion branches** | 2 |
| **Starts by** | Speak with **Shade Vendas** in **Taris, Central Plaza: Capital Tower**. |
| **Observed prerequisite journals** | `SW_TarisChapX3-2` |
| **Key locations** | Taris, Central Plaza: Capital Tower |
| **Key characters** | Shade Vendas, Thegg |

## Walkthrough

### 1. Speak with Shade Vendas in Taris, Central Plaza: Capital Tower

Speak with **Shade Vendas** in **Taris, Central Plaza: Capital Tower**.

> **Expected journal update — index 10:** I've confronted Shade about the Derelict Station, but she was ready for a fight.

### 2. Reach Taris, Central Plaza: Capital Tower and allow the scripted event to complete

Reach **Taris, Central Plaza: Capital Tower** and allow the scripted event to complete.

> **Expected journal update — index 25:** Shade Vendas and I settled our matters in the Taris capital tower and she's been killed. I should talk to Thegg and figure things out from here.

### 3. Speak with Shade Vendas in Taris, Central Plaza: Capital Tower — Finished

Speak with **Shade Vendas** in **Taris, Central Plaza: Capital Tower**.

> **Expected journal update — index 50:** Shade Vendas named me Hand of the Chancellor.

**Outcome:** this journal entry is marked as a finished branch.

### 4. Speak with Thegg in Taris, Central Plaza: Capital Tower — Finished

Speak with **Thegg** in **Taris, Central Plaza: Capital Tower**.

> **Expected journal update — index 100:** Thegg and I came to an agreement. I am to take over as Chancellor of Taris, and duties will be carried out as normal.

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has **2 explicit finished entries**. Treat them as branch coverage targets during playtesting:

- **Index 50:** Shade Vendas named me Hand of the Chancellor.
- **Index 100:** Thegg and I came to an agreement. I am to take over as Chancellor of Taris, and duties will be carried out as normal.

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Shade Vendas** (`SW_ShadeTower`) — `Taris, Central Plaza: Capital Tower`
- **Thegg** (`SW_TheggTower`) — `Taris, Central Plaza: Capital Tower`

**Locations implicated by actor/object placement or explicit travel:**
- **Taris, Central Plaza: Capital Tower**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_TarisChapX3-3`
**Generated category:** Main Quest
**Journal entries:** 5

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 10 | — | I've confronted Shade about the Derelict Station, but she was ready for a fight. | 3 |
| 25 | — | Shade Vendas and I settled our matters in the Taris capital tower and she's been killed. I should talk to Thegg and figure things out from here. | 1 |
| 50 | Finished | Shade Vendas named me Hand of the Chancellor. | 1 |
| 100 | Finished | Thegg and I came to an agreement. I am to take over as Chancellor of Taris, and duties will be carried out as normal. | 3 |

### Record-level trigger map

### Stage 10

I've confronted Shade about the Derelict Station, but she was ready for a fight.

**How this stage is set:**
- Dialogue INFO `19925231313218027699` under topic **Greeting 2**; speaker Shade Vendas (`SW_ShadeTower`). locations: `Taris, Central Plaza: Capital Tower`. conditions: Journal `SW_TarisChapX3-2` GreaterEqual 50; Global/VariableCompare `SW_GezekiJoin` Equal 10; Function/Choice Equal 1. response: “I thought you'd wake up to the madness around you. I'm disappointed, but I was right not to let you in on this grand scheme. You've always been just a pawn to be played, and your usefulness has come to an end. I won't let you destroy everything we've built!”.

```text
PlaySound3D "KelliEnd6"
StartScript SW_ShadeAttackFinaleScr
Journal "SW_TarisChapX3-3" 10
Goodbye
```
- Dialogue INFO `403018291284728020` under topic **Greeting 2**; speaker Shade Vendas (`SW_ShadeTower`). locations: `Taris, Central Plaza: Capital Tower`. conditions: Journal `SW_TarisChapX3-2` GreaterEqual 50; Global/VariableCompare `SW_GezekiJoin` Equal 0; Function/Choice Equal 1. response: “That is not for you to decide! The war between Republic and Sith forces are destroying the galaxy. How many more times will we witness another destruction like Taris? What plant is next on the list to be destroyed? No, I won't allow you to get in the way of our plans!”.

```text
PlaySound3D "KelliEnd5"
StartScript SW_ShadeAttackFinaleScr
Journal "SW_TarisChapX3-3" 10
Goodbye
```
- Dialogue INFO `244272680218317041` under topic **Greeting 2**; speaker Shade Vendas (`SW_ShadeTower`). locations: `Taris, Central Plaza: Capital Tower`. conditions: Journal `SW_TarisChapX3-2` GreaterEqual 50; Global/VariableCompare `SW_GezekiJoin` Equal 0; Function/Choice Equal 2. response: “You're going to regret this! To arms!”.

```text
PlaySound3D "KelliEnd3"
StartScript SW_ShadeAttackFinaleScr
Journal "SW_TarisChapX3-3" 10
Goodbye
```

### Stage 25

Shade Vendas and I settled our matters in the Taris capital tower and she's been killed. I should talk to Thegg and figure things out from here.

**How this stage is set:**
- Script `SW_TarisFinaleGottaFightScr`. attached to Activator `SW_TarisChap3FightFinaleAct`; placed in `Taris, Central Plaza: Capital Tower`.

```text
if ( getdeadcount "SW_TarisFinalFlyDroid2" > 0 )
if ( getdeadcount "SW_ShadeTower" > 0 )
Journal "SW_TarisChapX3-3" 25
set doOnce to 1
endif
```

### Stage 50 — Finished

Shade Vendas named me Hand of the Chancellor.

**How this stage is set:**
- Dialogue INFO `607919576173424646` under topic **Greeting 2**; speaker Shade Vendas (`SW_ShadeTower`). locations: `Taris, Central Plaza: Capital Tower`. conditions: Journal `SW_TarisChapX3-2` GreaterEqual 50; Global/VariableCompare `SW_GezekiJoin` Equal 10; Function/Choice Equal 2. response: “You truly support us? With undying loyalty? I'm impressed. You're smarter than I thought you were. Perhaps I was wrong about you. In light of this situation, I think you've earned a big promotion. I shall name you Hand of the Chancellor. This is no small matter. You'll be second in command around here. I look forward to ruling Taris with you by my side. And thank you, for everything.”.

```text
StopSound "KelliEnd7"
PlaySound3D "KelliEnd4"
Journal "SW_TarisChapX3-3" 50
PCJoinFaction "TarisGovernment"
set SW_ChancellorHand to 1
```

### Stage 100 — Finished

Thegg and I came to an agreement. I am to take over as Chancellor of Taris, and duties will be carried out as normal.

**How this stage is set:**
- Dialogue INFO `2023219216305194560` under topic **Greeting 2**; speaker Thegg (`SW_TheggTower`). locations: `Taris, Central Plaza: Capital Tower`. conditions: Journal `SW_TarisChapX3-3` GreaterEqual 25; Function/Choice Equal 3. response: “Hey, you brought this upon yourself. Me and my men will clean up this mess, but we need someone to fill the Chancellor role. For all I care you can leave the city, if things start to fall into anarchy my men will be itching to take care of it. But you're filling that role, because nobody else is going to find out what happened here. You got that, Chancellor?”.

```text
StopSound "10-Ending-02"
PlaySound3D "10-Ending-05"
Journal "SW_TarisChapX3-3" 100
PCJoinFaction "TarisGovernment"
PCRaiseRank "TarisGovernment"
```
- Dialogue INFO `19101265310617039` under topic **Greeting 2**; speaker Thegg (`SW_TheggTower`). locations: `Taris, Central Plaza: Capital Tower`. conditions: Journal `SW_TarisChapX3-3` GreaterEqual 25; Function/Choice Equal 2. response: “Hah, don't you worry, I was going to suggest just that. I don't want that position, I'm comfortable where I am. Me and the men will clean up this mess, and nobody will hear of what happened here. As long as we're allowed to run the city as we have been. You got that, Chancellor?”.

```text
StopSound "10-Ending-02"
PlaySound3D "10-Ending-04"
Journal "SW_TarisChapX3-3" 100
PCJoinFaction "TarisGovernment"
PCRaiseRank "TarisGovernment"
```
- Dialogue INFO `8832159332396927190` under topic **Greeting 2**; speaker Thegg (`SW_TheggTower`). locations: `Taris, Central Plaza: Capital Tower`. conditions: Journal `SW_TarisChapX3-3` GreaterEqual 25; Function/Choice Equal 1. response: “And I vote you for that position. I think that should settle things, yea? Me and my men can clean up this mess, word won't get out on what happened here, you can count on it. As long as you let us continue running the city as normal, that is. Got it, Chancellor?”.

```text
StopSound "10-Ending-02"
PlaySound3D "10-Ending-03"
Journal "SW_TarisChapX3-3" 100
PCJoinFaction "TarisGovernment"
PCRaiseRank "TarisGovernment"
```

### Related records and locations

**Dialogue speakers:**
- Shade Vendas (`SW_ShadeTower`) — `Taris, Central Plaza: Capital Tower`
- Thegg (`SW_TheggTower`) — `Taris, Central Plaza: Capital Tower`

**Scripts that read or write this journal:**
- `SW_ShadeDroidArmyFinaleScr` — Creature Flying Droid (`SW_TarisFinalFlyDroid1`); placed in `Taris, Central Plaza: Capital Tower`; Creature Flying Droid (`SW_TarisFinalFlyDroid2`); placed in `Taris, Central Plaza: Capital Tower`; Npc HK-41 (`SW_TarisFinalKillDroid1`); placed in `Taris, Central Plaza: Capital Tower`; Npc HK-42 (`SW_TarisFinalKillDroid2`); placed in `Taris, Central Plaza: Capital Tower`
- `SW_TarisCTCantLeaveFinale` — Door Metal Door (`SW_TarisDoor1MainDoorCT`); placed in `Taris, Central Plaza: Capital Tower`
- `SW_TarisCTLabDoor1` — Door Elevator Door (`SW_TarisLabDoor1`); placed in `Taris, Central Plaza: Capital Tower`
- `SW_TarisCTUpperEleScr` — Door Elevator Door (`SW_TarisEleDoorTCUpperLvl`); placed in `Taris, Central Plaza: Capital Tower`
- `SW_TarisFinaleGottaFightScr` — Activator `SW_TarisChap3FightFinaleAct`; placed in `Taris, Central Plaza: Capital Tower`
- `SW_TarisFinaleSceneResetScr` — Activator `SW_TarisChap3HandofChancCellRes`; placed in `Taris, Central Plaza: Capital Tower`

**Items referenced by related script/result code:**
- Hood of the Hand (`SW_HandHood`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Taris, Central Plaza: Capital Tower`

<details><summary>Journal-state readers (6 code sites)</summary>

- Script `SW_ShadeDroidArmyFinaleScr`. attached to Creature Flying Droid (`SW_TarisFinalFlyDroid1`); placed in `Taris, Central Plaza: Capital Tower`; Creature Flying Droid (`SW_TarisFinalFlyDroid2`); placed in `Taris, Central Plaza: Capital Tower`; Npc HK-41 (`SW_TarisFinalKillDroid1`); placed in `Taris, Central Plaza: Capital Tower`; Npc HK-42 (`SW_TarisFinalKillDroid2`); placed in `Taris, Central Plaza: Capital Tower`.
- Script `SW_TarisCTCantLeaveFinale`. attached to Door Metal Door (`SW_TarisDoor1MainDoorCT`); placed in `Taris, Central Plaza: Capital Tower`.
- Script `SW_TarisCTLabDoor1`. attached to Door Elevator Door (`SW_TarisLabDoor1`); placed in `Taris, Central Plaza: Capital Tower`.
- Script `SW_TarisCTUpperEleScr`. attached to Door Elevator Door (`SW_TarisEleDoorTCUpperLvl`); placed in `Taris, Central Plaza: Capital Tower`.
- Script `SW_TarisFinaleGottaFightScr`. attached to Activator `SW_TarisChap3FightFinaleAct`; placed in `Taris, Central Plaza: Capital Tower`.
- Script `SW_TarisFinaleSceneResetScr`. attached to Activator `SW_TarisChap3HandofChancCellRes`; placed in `Taris, Central Plaza: Capital Tower`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `10` is obtainable.
- [ ] Reach index `10`: I've confronted Shade about the Derelict Station, but she was ready for a fight.
- [ ] Reach index `25`: Shade Vendas and I settled our matters in the Taris capital tower and she's been killed. I should talk to Theg…
- [ ] Reach index `50` (`Finished`): Shade Vendas named me Hand of the Chancellor.
- [ ] Reach index `100` (`Finished`): Thegg and I came to an agreement. I am to take over as Chancellor of Taris, and duties will be carried out as …
- [ ] Branch coverage: this journal has **2 different `Finished` entries**; test each reachable completion branch.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_TarisChapX3-3`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
