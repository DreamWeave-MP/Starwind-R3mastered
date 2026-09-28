---
title: "Chapter 1: Taking Control of Taris"
description: "Walkthrough and QA reference for Chapter 1: Taking Control of Taris (SW_TarisChap1-4)."
weight: 5
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_TarisChap1-4"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_TarisChap1-4` |
| **Category** | Main Quest |
| **Journal entries** | 6 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Shade Vendas** in **The Outer Rim, Freighter**. |
| **Key locations** | Taris, Central Plaza, Taris, Central Plaza: Capital Tower, Taris, Central Plaza: Capital Tower Upper Level, Taris, Central Plaza: Outpost, Taris, Lower City, Taris, Sith Headquarters: Level 1 … |
| **Key characters** | Shade Vendas, Shade Vendas, Shade Vendas |

## Walkthrough

### 1. Speak with Shade Vendas in The Outer Rim, Freighter

Speak with **Shade Vendas** in **The Outer Rim, Freighter**.

> **Expected journal update — index 5:** Gezeki is going to distract the city guards, Thegg, his clan, and should head to the Sith Headquarters to take control back of the city.

### 2. Reach Taris, Upper City Central Building and allow the scripted event to complete

Reach **Taris, Upper City Central Building** and allow the scripted event to complete.

> **Expected journal update — index 10:** We've made it to the Sith Headquarters, Thegg and his men are ready to assault their base.

### 3. Defeat Captain in Taris, Sith Headquarters: OC Office and allow its script to update the quest

Defeat **Captain** in **Taris, Sith Headquarters: OC Office** and allow its script to update the quest.

> **Expected journal update — index 15:** The Sith have been conquered on Taris, the rest of the troops will continue to keep order under Shade's command.

### 4. Speak with Shade Vendas in Taris, Central Plaza: Outpost

Speak with **Shade Vendas** in **Taris, Central Plaza: Outpost**.

> **Expected journal update — index 20:** Shade says I should return in five days, and meet her at the Capital Tower in the Central Plaza.

### 5. Speak with Shade Vendas in Taris, Central Plaza: Capital Tower — Finished

Speak with **Shade Vendas** in **Taris, Central Plaza: Capital Tower**.

> **Expected journal update — index 25:** There are numerous sectors of infrastructure that need to be repaired around the city that's still standing. Shade has numerous tasks she would like to ask me about in order to gather the equipment and experts that we will need in order to accomplish this. She has also given me the freighter in thanks for everything that I have done. [You can now equip the freighter in your inventory to access space travel]

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 25**:

> There are numerous sectors of infrastructure that need to be repaired around the city that's still standing. Shade has numerous tasks she would like to ask me about in order to gather the equipment and experts that we will need in order to accomplish this. She has also given me the freighter in thanks for everything that I have done. [You can now equip the freighter in your inventory to access space travel]

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Shade Vendas** (`SW_ShadeFreighter`) — `The Outer Rim, Freighter`
- **Shade Vendas** (`SW_ShadeOutpost2`) — `Taris, Central Plaza: Outpost`
- **Shade Vendas** (`SW_ShadeTower`) — `Taris, Central Plaza: Capital Tower`

**Locations implicated by actor/object placement or explicit travel:**
- **Taris, Central Plaza**
- **Taris, Central Plaza: Capital Tower**
- **Taris, Central Plaza: Capital Tower Upper Level**
- **Taris, Central Plaza: Outpost**
- **Taris, Lower City**
- **Taris, Sith Headquarters: Level 1**
- **Taris, Sith Headquarters: Level 2**
- **Taris, Sith Headquarters: Level 3**
- **Taris, Sith Headquarters: OC Office**
- **Taris, Upper City Apartments**
- **Taris, Upper City Cantina**
- **Taris, Upper City Central Building**
- **Taris, Upper City North**
- **Taris, Upper City North: Marketplace**
- **Taris, Upper City South**
- **The Outer Rim, Freighter**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_TarisChap1-4`
**Generated category:** Main Quest
**Journal entries:** 6

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | Gezeki is going to distract the city guards, Thegg, his clan, and should head to the Sith Headquarters to take control back of the city. | 1 |
| 10 | — | We've made it to the Sith Headquarters, Thegg and his men are ready to assault their base. | 1 |
| 15 | — | The Sith have been conquered on Taris, the rest of the troops will continue to keep order under Shade's command. | 1 |
| 20 | — | Shade says I should return in five days, and meet her at the Capital Tower in the Central Plaza. | 1 |
| 25 | Finished | There are numerous sectors of infrastructure that need to be repaired around the city that's still standing. Shade has numerous tasks she would like to ask me about in order to gather the equipment and experts that we will need in order to accomplish this. She has also given me the freighter in thanks for everything that I have done.
<br>[You can now equip the freighter in your inventory to access space travel] | 1 |

### Record-level trigger map

### Stage 5

Gezeki is going to distract the city guards, Thegg, his clan, and should head to the Sith Headquarters to take control back of the city.

**How this stage is set:**
- Dialogue INFO `201231241580305654` under topic **Greeting 7**; speaker Shade Vendas (`SW_ShadeFreighter`). locations: `The Outer Rim, Freighter`. conditions: Function/Choice Equal 1. response: “Alright. We head to Taris...”.

```text
FadeOut 2.0
PlaySound3d "SW_Shipblastoff"
Journal SW_TarisChap1-4 5
SW_TheggFreighter->Disable
SW_ShadeFreighter->Disable
```

### Stage 10

We've made it to the Sith Headquarters, Thegg and his men are ready to assault their base.

**How this stage is set:**
- Script `SW_StorySceneScr8`. attached to Activator `SW_StorySceneActSithBase`; placed in `Taris, Upper City Central Building`.

```text
If ( DoOnce == 0 )
if ( getdistance "SW_TheggOutpost" < 1000 )
    Journal SW_TarisChap1-4 10
    PlaySound "04-Dialogue-02"
    SW_TheggOutpost->ForceGreeting
```

### Stage 15

The Sith have been conquered on Taris, the rest of the troops will continue to keep order under Shade's command.

**How this stage is set:**
- Script `SW_TarisSithCaptainDied`. attached to Npc Captain (`SW_TarisSithCaptain`); placed in `Taris, Sith Headquarters: OC Office`.

```text
If ( GetHealth <= 0 )
        Set DoOnce to 1
        Journal SW_TarisChap1-4 15
        SW_TheggOutpost->PlaySound3d "TheggLkAr"
        MessageBox "Take a look around. Come talk to me when you finish up."
```

### Stage 20

Shade says I should return in five days, and meet her at the Capital Tower in the Central Plaza.

**How this stage is set:**
- Dialogue INFO `2609822596115731364` under topic **Greeting 7**; speaker Shade Vendas (`SW_ShadeOutpost2`). locations: `Taris, Central Plaza: Outpost`. conditions: Journal `SW_TarisChap1-4` Equal 15. response: “Thank you for everything you have done. Thegg and I have a lot to talk about, there's rakghouls in the city, a new order has to be established, and I still have more contacts to reach out to. Make yourself at home, this outpost is as much yours as any of ours, maybe explore what's left of Taris. Whatever you decide to do with your time, if you'll meet us in the Capital Tower in five days, I'd like to give you a gift for everything you've done for us.”.

```text
StopSound "KelliOutp6"
PlaySound3D "KelliOutp6"
Journal SW_TarisChap1-4 20
```

### Stage 25 — Finished

There are numerous sectors of infrastructure that need to be repaired around the city that's still standing. Shade has numerous tasks she would like to ask me about in order to gather the equipment and experts that we will need in order to accomplish this. She has also given me the freighter in thanks for everything that I have done.
[You can now equip the freighter in your inventory to access space travel]

**How this stage is set:**
- Dialogue INFO `1576720746330917469` under topic **Greeting 7**; speaker Shade Vendas (`SW_ShadeTower`). locations: `Taris, Central Plaza: Capital Tower`. conditions: Journal `SW_TarisChap1-4` Equal 20; Global/VariableCompare `SW_BVAttackKillCount` GreaterEqual 5. response: “Looks like the old Black Vulkar gang survived the bombardment. There's just so many issues to resolve here. I wanted to thank you properly, we finally know what all we need to do, and, I have more favors to ask you. There are some tasks that need to be done, some contacts that we need to recruit for the restoration of the infrastructure of Taris. Before that though, I'd like to give you a gift, the freighter that we flew in on is yours now, you've more than earned it.”.

```text
SW_GezekOutpost3->AiWander 0 0 0 0 0 0 0 0 0 0 0 0
StartScript SW_BlackVulkDisableafterbattle
Journal SW_TarisChap1-4 25
```

### Related records and locations

**Dialogue speakers:**
- Shade Vendas (`SW_ShadeFreighter`) — `The Outer Rim, Freighter`
- Shade Vendas (`SW_ShadeOutpost2`) — `Taris, Central Plaza: Outpost`
- Shade Vendas (`SW_ShadeTower`) — `Taris, Central Plaza: Capital Tower`

**Scripts that read or write this journal:**
- `SW_CheckDoorSithCap` — Door Metal Door (`SW_TarisSithBaseDoorLock`); placed in `Taris, Sith Headquarters: OC Office`
- `SW_DisableGezekiAfterShip` — Activator `SW_Gezeki3Disable`; placed in `Taris, Central Plaza`
- `SW_EnterFreighterTaris` — Door Freighter (`SW_PlayerShipNEWTaris`); placed in `Taris, Central Plaza`; Activator Freighter (`SW_PlayersShipTaris`)
- `SW_GezekiAtTower` — Npc Gezeki (`SW_GezekOutpost3`); placed in `Taris, Central Plaza`
- `SW_OutPost2Enabling` — Npc Black Vulkar (`SW_BlackVulkarGangDead`); placed in `Taris, Central Plaza`; Npc Black Vulkar (`SW_BlackVulkarGangDead2`); placed in `Taris, Central Plaza`; Npc Gezeki (`SW_GezekOutpost2`); placed in `Taris, Central Plaza: Outpost`; Npc Shade Vendas (`SW_ShadeOutpost2`); placed in `Taris, Central Plaza: Outpost`; Npc Thegg (`SW_TheggOutpost2`); placed in `Taris, Central Plaza: Outpost`
- `SW_RestrictTakeTaris` — Door Metal Door (`SW_DoorTarisCantina`); placed in `Taris, Central Plaza`; Door Metal Door (`SW_DoorTarisFreighter`); placed in `Taris, Central Plaza`; Door Metal Door (`SW_DoorTarisRestrict1`); placed in `Taris, Central Plaza`; Door Metal Door (`SW_DoorTarisRestrict2`); placed in `Taris, Central Plaza`; Door Metal Door (`SW_DoorTarisRestrict3`); placed in `Taris, Central Plaza`
- `SW_ScalingSoldier` — Npc Lieutenant Sith Defector (`SW_TarisSithBaseHostLt2`); placed in `Taris, Sith Headquarters: Level 1`; Npc Lieutenant Sith Defector (`SW_TarisSithBaseHostLt3`); placed in `Taris, Sith Headquarters: Level 2`; Npc Sith Sentinel Droid (`SW_TarisSithBaseHostil2`); placed in `Taris, Sith Headquarters: Level 1`, `Taris, Sith Headquarters: Level 2`, `Taris, Sith Headquarters: Level 3`; Npc Sith Defector (`SW_TarisSithBaseHostilB`); placed in `Taris, Sith Headquarters: Level 3`; Npc Sith Defector (`SW_TarisSithBaseHostile`); placed in `Taris, Sith Headquarters: Level 1`, `Taris, Sith Headquarters: Level 2`, `Taris, Sith Headquarters: Level 3`
- `SW_StorySceneScr8` — Activator `SW_StorySceneActSithBase`; placed in `Taris, Upper City Central Building`
- `SW_StorySceneScrOutpost2` — Activator `SW_StorySceneActOutpost2`; placed in `Taris, Central Plaza: Outpost`
- `SW_TarisRespawnShit` — Npc Taris Security (`SW_TarisSithDefector`); placed in `Taris, Central Plaza`, `Taris, Central Plaza: Capital Tower Upper Level`, `Taris, Lower City`, `Taris, Upper City Apartments`, `Taris, Upper City Cantina`, `Taris, Upper City North`, `Taris, Upper City North: Marketplace`, `Taris, Upper City South`; Npc Citizen (`SW_TarisUpperCitizen10`); placed in `Taris, Central Plaza`; Npc Droid (`SW_TarisUpperCitizen3`); placed in `Taris, Central Plaza`, `Taris, Upper City Cantina`, `Taris, Upper City North`, `Taris, Upper City North: Marketplace`, `Taris, Upper City South`; Npc Citizen (`SW_TarisUpperCitizen7`); placed in `Taris, Central Plaza`; Npc Citizen (`SW_TarisUpperCitizen8`); placed in `Taris, Central Plaza`
- `SW_TarisRespawnShitReverse` — Creature Rakghoul (`SW_RakhoulOutpostKill`); placed in `Taris, Central Plaza`; Creature Rakghoul (`SW_RakhoulTaris01`); placed in `Taris, Central Plaza`; Creature Rakghoul (`SW_RakhoulTaris02`); placed in `Taris, Central Plaza`; Creature Rakghoul (`SW_RakhoulTaris03`); placed in `Taris, Central Plaza`; Creature Rakghoul (`SW_RakhoulTaris04`); placed in `Taris, Central Plaza`
- `SW_TarisSithCaptainDied` — Npc Captain (`SW_TarisSithCaptain`); placed in `Taris, Sith Headquarters: OC Office`
- `SWE_Chapter2_or_MP`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)
- Freighter Pilot Codes (`SW_SpCarFreight`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Taris, Central Plaza`
- `Taris, Central Plaza: Capital Tower`
- `Taris, Central Plaza: Capital Tower Upper Level`
- `Taris, Central Plaza: Outpost`
- `Taris, Lower City`
- `Taris, Sith Headquarters: Level 1`
- `Taris, Sith Headquarters: Level 2`
- `Taris, Sith Headquarters: Level 3`
- `Taris, Sith Headquarters: OC Office`
- `Taris, Upper City Apartments`
- `Taris, Upper City Cantina`
- `Taris, Upper City Central Building`
- `Taris, Upper City North`
- `Taris, Upper City North: Marketplace`
- `Taris, Upper City South`
- `The Outer Rim, Freighter`

<details><summary>Journal-state readers (11 code sites)</summary>

- Script `SWE_Chapter2_or_MP`.
- Script `SW_CheckDoorSithCap`. attached to Door Metal Door (`SW_TarisSithBaseDoorLock`); placed in `Taris, Sith Headquarters: OC Office`.
- Script `SW_DisableGezekiAfterShip`. attached to Activator `SW_Gezeki3Disable`; placed in `Taris, Central Plaza`.
- Script `SW_EnterFreighterTaris`. attached to Door Freighter (`SW_PlayerShipNEWTaris`); placed in `Taris, Central Plaza`; Activator Freighter (`SW_PlayersShipTaris`).
- Script `SW_GezekiAtTower`. attached to Npc Gezeki (`SW_GezekOutpost3`); placed in `Taris, Central Plaza`.
- Script `SW_OutPost2Enabling`. attached to Npc Black Vulkar (`SW_BlackVulkarGangDead`); placed in `Taris, Central Plaza`; Npc Black Vulkar (`SW_BlackVulkarGangDead2`); placed in `Taris, Central Plaza`; Npc Gezeki (`SW_GezekOutpost2`); placed in `Taris, Central Plaza: Outpost`; Npc Shade Vendas (`SW_ShadeOutpost2`); placed in `Taris, Central Plaza: Outpost`; Npc Thegg (`SW_TheggOutpost2`); placed in `Taris, Central Plaza: Outpost`.
- Script `SW_RestrictTakeTaris`. attached to Door Metal Door (`SW_DoorTarisCantina`); placed in `Taris, Central Plaza`; Door Metal Door (`SW_DoorTarisFreighter`); placed in `Taris, Central Plaza`; Door Metal Door (`SW_DoorTarisRestrict1`); placed in `Taris, Central Plaza`; Door Metal Door (`SW_DoorTarisRestrict2`); placed in `Taris, Central Plaza`; Door Metal Door (`SW_DoorTarisRestrict3`); placed in `Taris, Central Plaza`; Door Metal Door (`SW_DoorTarisRestrict4`); placed in `Taris, Central Plaza`; Door Elevator Door (`SW_DoorTarisRestrict5`); placed in `Taris, Upper City Central Building`; Door Metal Door (`SW_DoorTarisRestrict6`); placed in `Taris, Upper City Central Building`.
- Script `SW_ScalingSoldier`. attached to Npc Lieutenant Sith Defector (`SW_TarisSithBaseHostLt2`); placed in `Taris, Sith Headquarters: Level 1`; Npc Lieutenant Sith Defector (`SW_TarisSithBaseHostLt3`); placed in `Taris, Sith Headquarters: Level 2`; Npc Sith Sentinel Droid (`SW_TarisSithBaseHostil2`); placed in `Taris, Sith Headquarters: Level 1`, `Taris, Sith Headquarters: Level 2`, `Taris, Sith Headquarters: Level 3`; Npc Sith Defector (`SW_TarisSithBaseHostilB`); placed in `Taris, Sith Headquarters: Level 3`; Npc Sith Defector (`SW_TarisSithBaseHostile`); placed in `Taris, Sith Headquarters: Level 1`, `Taris, Sith Headquarters: Level 2`, `Taris, Sith Headquarters: Level 3`.
- Script `SW_StorySceneScrOutpost2`. attached to Activator `SW_StorySceneActOutpost2`; placed in `Taris, Central Plaza: Outpost`.
- Script `SW_TarisRespawnShit`. attached to Npc Taris Security (`SW_TarisSithDefector`); placed in `Taris, Central Plaza`, `Taris, Central Plaza: Capital Tower Upper Level`, `Taris, Lower City`, `Taris, Upper City Apartments`, `Taris, Upper City Cantina`, `Taris, Upper City North`, `Taris, Upper City North: Marketplace`, `Taris, Upper City South`; Npc Citizen (`SW_TarisUpperCitizen10`); placed in `Taris, Central Plaza`; Npc Droid (`SW_TarisUpperCitizen3`); placed in `Taris, Central Plaza`, `Taris, Upper City Cantina`, `Taris, Upper City North`, `Taris, Upper City North: Marketplace`, `Taris, Upper City South`; Npc Citizen (`SW_TarisUpperCitizen7`); placed in `Taris, Central Plaza`; Npc Citizen (`SW_TarisUpperCitizen8`); placed in `Taris, Central Plaza`; Npc Citizen (`SW_TarisUpperCitizen9`); placed in `Taris, Central Plaza`.
- Script `SW_TarisRespawnShitReverse`. attached to Creature Rakghoul (`SW_RakhoulOutpostKill`); placed in `Taris, Central Plaza`; Creature Rakghoul (`SW_RakhoulTaris01`); placed in `Taris, Central Plaza`; Creature Rakghoul (`SW_RakhoulTaris02`); placed in `Taris, Central Plaza`; Creature Rakghoul (`SW_RakhoulTaris03`); placed in `Taris, Central Plaza`; Creature Rakghoul (`SW_RakhoulTaris04`); placed in `Taris, Central Plaza`; Creature Rakghoul (`SW_RakhoulTaris05`); placed in `Taris, Central Plaza`; Creature Rakghoul (`SW_RakhoulTaris06`); placed in `Taris, Central Plaza`; Npc Sith Defector (`SW_TarisSithRakghoul01`); placed in `Taris, Central Plaza`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: Gezeki is going to distract the city guards, Thegg, his clan, and should head to the Sith Headquarters to take…
- [ ] Reach index `10`: We've made it to the Sith Headquarters, Thegg and his men are ready to assault their base.
- [ ] Reach index `15`: The Sith have been conquered on Taris, the rest of the troops will continue to keep order under Shade's comman…
- [ ] Reach index `20`: Shade says I should return in five days, and meet her at the Capital Tower in the Central Plaza.
- [ ] Reach index `25` (`Finished`): There are numerous sectors of infrastructure that need to be repaired around the city that's still standing. S…
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_TarisChap1-4`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
