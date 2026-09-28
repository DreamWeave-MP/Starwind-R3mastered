---
title: "Chapter 1: Tatooine Intelligence Agent"
description: "Walkthrough and QA reference for Chapter 1: Tatooine Intelligence Agent (SW_TarisChap1)."
weight: 2
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_TarisChap1"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_TarisChap1` |
| **Category** | Main Quest |
| **Journal entries** | 9 |
| **Completion branches** | 1 |
| **Starts by** | Use **Born a jedi**. |
| **Key locations** | Dantooine, Ballast, Dantooine, Sea, Dathomir, Exterior, Gamorr, Ucksmug, Hoth, Wasteland, Kashyyk, Boyle Research Facility … |
| **Key characters** | Czerka Office Guard, Shade Vendas, Shade Vendas, Shade Vendas, Shade Vendas, Shade Vendas |

## Walkthrough

### 1. Use Born a jedi

The records expose more than one way to reach this journal update:
- Use **Born a jedi**.
- Use **Drug boss**.
- Reach **Tatooine, Sandriver** and allow the scripted event to complete.
- Use **Richie Rich**.
- Use **Gangster**.
- Use **Born To Hunt**.

> **Expected journal update — index 5:** We have crash landed on Tatooine, Shade has asked me to scout out the area, she is still shaken from the crash.

**Known item transfer:** 3000 × **Credits** (`Gold_001`), 500 × **Spice** (`SW_spice`), 1 × **Comlink** (`SW_Comlink`), 100000 × **Credits** (`Gold_001`), 300 × **Credits** (`Gold_001`).

### 2. Use Mandalorian Raider

The records expose more than one way to reach this journal update:
- Use **Mandalorian Raider**.
- Use **Born a jedi**.
- Use **Drug boss**.
- Use **Richie Rich**.
- Use **Gangster**.
- Use **Born To Hunt**.
- Speak with **Czerka Office Guard** in **Tatooine, Sandriver** and ask about **Authority Murders**.

> **Expected journal update — index 10:** It looks like the office of authority in this area is closed, the guard says it will be closed until a case of authority murders has been resolved. I also received a message from Shade, it looks like she's made her way to the medical bay.

**Known item transfer:** 3000 × **Credits** (`Gold_001`), 500 × **Spice** (`SW_spice`), 100000 × **Credits** (`Gold_001`), 300 × **Credits** (`Gold_001`).

### 3. Use Born To Hunt

The records expose more than one way to reach this journal update:
- Use **Born To Hunt**.
- Speak with **Shade Vendas** in **Tatooine, Medical Bay**.

> **Expected journal update — index 12:** Shade has told me that in order for us to get access into the desert we'll need a hunting license, I'll have to get into the Czerka Office in order to purchase one. She also said she'll be heading to the cantina soon to see if she can gather any more information.

### 4. Speak with Czerka Office Guard in Tatooine, Sandriver and ask about Authority Murders

Speak with **Czerka Office Guard** in **Tatooine, Sandriver** and ask about **Authority Murders**.

> **Expected journal update — index 15:** I have solved the authority murders and can access the Czerka Office now, I should speak to who is in charge. I've also received a message from Shade, it looks like she's made her way to the cantina.

**Known item transfer:** 200 × **Credits** (`Gold_001`).

### 5. Use Born To Hunt

The records expose more than one way to reach this journal update:
- Use **Born To Hunt**.
- Speak with **Shade Vendas** in **Tatooine, Cantina**.

> **Expected journal update — index 20:** Shade says that she's been asking around and it looks like her father's friend has wandered out into the desert looking for some Sand Person tribe.

### 6. Allow the scripted event handled by `SW_MQTatDatapadScript` to complete

The records expose more than one way to reach this journal update:
- Allow the scripted event handled by `SW_MQTatDatapadScript` to complete.
- Find **Dead Ithorian** in **Tatooine** and complete the encounter.

> **Expected journal update — index 25:** I found the datapad holding the Taris intelligence information. I should bring this back to Shade at the Sandriver Cantina.

### 7. Speak with Shade Vendas in Tatooine, Cantina

Speak with **Shade Vendas** in **Tatooine, Cantina**.

> **Expected journal update — index 30:** I should talk to Shade when I'm ready to head to Manaan.

### 8. Use Ship Captain — Finished

The records expose more than one way to reach this journal update:
- Use **Ship Captain**.
- Allow the scripted event handled by `SW_TatChap1EndScr` to complete.

> **Expected journal update — index 35:** []

**Known item transfer:** 1 × **Freighter Pilot Codes** (`SW_SpCarFreight`).

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 35**:

> []

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 3000 × **Credits** (`Gold_001`)
- 500 × **Spice** (`SW_spice`)
- 1 × **Comlink** (`SW_Comlink`)
- 100000 × **Credits** (`Gold_001`)
- 300 × **Credits** (`Gold_001`)
- 200 × **Credits** (`Gold_001`)
- 1 × **Freighter Pilot Codes** (`SW_SpCarFreight`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Czerka Office Guard** (`SW_CzerkaOfficeTatGuard`) — `Tatooine, Sandriver`
- **Shade Vendas** (`SW_ShadeCantinaTat`) — `Tatooine, Cantina`
- **Shade Vendas** (`SW_ShadeFreighter`) — `The Outer Rim, Freighter`
- **Shade Vendas** (`SW_ShadeMedicalTat`) — `Tatooine, Medical Bay`
- **Shade Vendas** (`SW_ShadeOutpost2`) — `Taris, Central Plaza: Outpost`
- **Shade Vendas** (`SW_ShadeTower`) — `Taris, Central Plaza: Capital Tower`

**Locations implicated by actor/object placement or explicit travel:**
- **Dantooine, Ballast**
- **Dantooine, Sea**
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
- **Tatooine**
- **Tatooine, Cantina**
- **Tatooine, Medical Bay**
- **Tatooine, Sandriver**
- **The Outer Rim, Freighter**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_TarisChap1`
**Generated category:** Main Quest
**Journal entries:** 9

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | We have crash landed on Tatooine, Shade has asked me to scout out the area, she is still shaken from the crash. | 6 |
| 10 | — | It looks like the office of authority in this area is closed, the guard says it will be closed until a case of authority murders has been resolved. I also received a message from Shade, it looks like she's made her way to the medical bay. | 7 |
| 12 | — | Shade has told me that in order for us to get access into the desert we'll need a hunting license, I'll have to get into the Czerka Office in order to purchase one. She also said she'll be heading to the cantina soon to see if she can gather any more information. | 2 |
| 15 | — | I have solved the authority murders and can access the Czerka Office now, I should speak to who is in charge. I've also received a message from Shade, it looks like she's made her way to the cantina. | 1 |
| 20 | — | Shade says that she's been asking around and it looks like her father's friend has wandered out into the desert looking for some Sand Person tribe. | 2 |
| 25 | — | I found the datapad holding the Taris intelligence information. I should bring this back to Shade at the Sandriver Cantina. | 2 |
| 30 | — | I should talk to Shade when I'm ready to head to Manaan. | 1 |
| 35 | Finished | [] | 2 |

### Record-level trigger map

### Stage 5

We have crash landed on Tatooine, Shade has asked me to scout out the area, she is still shaken from the crash.

**How this stage is set:**
- Script `BornaJedi`. attached to Door Born a jedi (`SW_CharGenPodDoor2`).

```text
SW_StorySceneAct3->Disable
        SW_ShadeLandingTat->Disable
        Journal SW_TarisChap1 5
        SW_ShadeLandingTat->Disable
        SW_ShadeMedicalTat->Enable
```

```text
SW_ShadeMedicalTat->Enable
        journal sw_czerkamurd 15
        journal sw_tarischap1 10
        Journal SW_JitaiiJourn 15
        Journal SW_ZanottiJourn 15
```
- Script `Drugdealer`. attached to Door Drug boss (`SW_CharGenPodDoor5`).

```text
SW_StorySceneAct3->Disable
        SW_ShadeLandingTat->Disable
Journal SW_TarisChap1 5
SW_ShadeLandingTat->Disable
SW_ShadeMedicalTat->Enable
```

```text
SW_ShadeMedicalTat->Enable
journal sw_czerkamurd 15
journal sw_tarischap1 10
        player->additem Gold_001 3000
        player->additem SW_spice 500
```
- Script `SW_StorySceneScr3`. attached to Activator `SW_StorySceneAct3`; placed in `Tatooine, Sandriver`.

```text
player->AddItem "SW_Comlink" 1
        EnablePlayerControls
        Journal SW_TarisChap1 5
        Set Scene to 2
    Endif
```
- Script `dickrich`. attached to Door Richie Rich (`SW_CharGenPodDoor4`).

```text
SW_StorySceneAct3->Disable
        SW_ShadeLandingTat->Disable
        Journal SW_TarisChap1 5
        SW_ShadeLandingTat->Disable
        SW_ShadeMedicalTat->Enable
```

```text
SW_ShadeLandingTat->Disable
        SW_ShadeMedicalTat->Enable
        journal sw_tarischap1 10
        journal sw_czerkamurd 15
        player->additem Gold_001 100000
```
- Script `gangster`. attached to Door Gangster (`SW_CharGenPodDoor6`); Door Rodian gangster (`SW_CharGenPodDoor7`).

```text
SW_StorySceneAct3->Disable
        SW_ShadeLandingTat->Disable
        Journal SW_TarisChap1 5
        SW_ShadeLandingTat->Disable
        SW_ShadeMedicalTat->Enable
```

```text
SW_ShadeLandingTat->Disable
        SW_ShadeMedicalTat->Enable
        journal sw_tarischap1 10
        journal sw_czerkamurd 15
        player->additem Gold_001 300
```
- Script `manlyman`. attached to Door Born To Hunt (`SW_CharGenPodDoor3`).

```text
SW_StorySceneAct3->Disable
        SW_ShadeLandingTat->Disable
Journal SW_TarisChap1 5
journal sw_tarischap1 10
journal sw_czerkamurd 1
```

```text
SW_ShadeLandingTat->Disable
Journal SW_TarisChap1 5
journal sw_tarischap1 10
journal sw_czerkamurd 1
journal sw_tarischap1 12
```

```text
journal sw_tarischap1 10
journal sw_czerkamurd 1
journal sw_tarischap1 12
journal sw_czerkamurd 5
journal sw_czerkamurd 10
```

### Stage 10

It looks like the office of authority in this area is closed, the guard says it will be closed until a case of authority murders has been resolved. I also received a message from Shade, it looks like she's made her way to the medical bay.

**How this stage is set:**
- Script `Alt_Mando`. attached to Door Mandalorian Raider (`SW_CharGenPodDoorMando`).

```text
SW_StorySceneAct3->Disable
        SW_ShadeLandingTat->Disable
        Journal SW_TarisChap1 10
       SW_ShadeCantinaTat->Disable
       SW_ShadeMedicalTat->Enable
```
- Script `BornaJedi`. attached to Door Born a jedi (`SW_CharGenPodDoor2`).

```text
SW_StorySceneAct3->Disable
        SW_ShadeLandingTat->Disable
        Journal SW_TarisChap1 5
        SW_ShadeLandingTat->Disable
        SW_ShadeMedicalTat->Enable
```

```text
SW_ShadeMedicalTat->Enable
        journal sw_czerkamurd 15
        journal sw_tarischap1 10
        Journal SW_JitaiiJourn 15
        Journal SW_ZanottiJourn 15
```
- Script `Drugdealer`. attached to Door Drug boss (`SW_CharGenPodDoor5`).

```text
SW_StorySceneAct3->Disable
        SW_ShadeLandingTat->Disable
Journal SW_TarisChap1 5
SW_ShadeLandingTat->Disable
SW_ShadeMedicalTat->Enable
```

```text
SW_ShadeMedicalTat->Enable
journal sw_czerkamurd 15
journal sw_tarischap1 10
        player->additem Gold_001 3000
        player->additem SW_spice 500
```
- Script `dickrich`. attached to Door Richie Rich (`SW_CharGenPodDoor4`).

```text
SW_StorySceneAct3->Disable
        SW_ShadeLandingTat->Disable
        Journal SW_TarisChap1 5
        SW_ShadeLandingTat->Disable
        SW_ShadeMedicalTat->Enable
```

```text
SW_ShadeLandingTat->Disable
        SW_ShadeMedicalTat->Enable
        journal sw_tarischap1 10
        journal sw_czerkamurd 15
        player->additem Gold_001 100000
```
- Script `gangster`. attached to Door Gangster (`SW_CharGenPodDoor6`); Door Rodian gangster (`SW_CharGenPodDoor7`).

```text
SW_StorySceneAct3->Disable
        SW_ShadeLandingTat->Disable
        Journal SW_TarisChap1 5
        SW_ShadeLandingTat->Disable
        SW_ShadeMedicalTat->Enable
```

```text
SW_ShadeLandingTat->Disable
        SW_ShadeMedicalTat->Enable
        journal sw_tarischap1 10
        journal sw_czerkamurd 15
        player->additem Gold_001 300
```
- Script `manlyman`. attached to Door Born To Hunt (`SW_CharGenPodDoor3`).

```text
SW_StorySceneAct3->Disable
        SW_ShadeLandingTat->Disable
Journal SW_TarisChap1 5
journal sw_tarischap1 10
journal sw_czerkamurd 1
```

```text
SW_ShadeLandingTat->Disable
Journal SW_TarisChap1 5
journal sw_tarischap1 10
journal sw_czerkamurd 1
journal sw_tarischap1 12
```

```text
journal sw_tarischap1 10
journal sw_czerkamurd 1
journal sw_tarischap1 12
journal sw_czerkamurd 5
journal sw_czerkamurd 10
```
- Dialogue INFO `975531815979025118` under topic **Authority Murders**; speaker Czerka Office Guard (`SW_CzerkaOfficeTatGuard`). locations: `Tatooine, Sandriver`. conditions: Journal `SW_CzerkaMurd` Less 15. response: “Someone or a group of outlaws have been murdering Czerka employees in Sandriver. We believe it's some outlaws in the Rodian District, they are always causing us problems. If you need access to the Czerka Office, you could always give us a hand in the investigation.”.

```text
SW_ShadeMedicalTat->Enable
StartScript SW_StoryComlink1
Journal SW_TarisChap1 10
Journal "SW_CzerkaMurd" 1
PlaySound3d "AMurders1"
```

### Stage 12

Shade has told me that in order for us to get access into the desert we'll need a hunting license, I'll have to get into the Czerka Office in order to purchase one. She also said she'll be heading to the cantina soon to see if she can gather any more information.

**How this stage is set:**
- Script `manlyman`. attached to Door Born To Hunt (`SW_CharGenPodDoor3`).

```text
SW_StorySceneAct3->Disable
        SW_ShadeLandingTat->Disable
Journal SW_TarisChap1 5
journal sw_tarischap1 10
journal sw_czerkamurd 1
```

```text
SW_ShadeLandingTat->Disable
Journal SW_TarisChap1 5
journal sw_tarischap1 10
journal sw_czerkamurd 1
journal sw_tarischap1 12
```

```text
journal sw_tarischap1 10
journal sw_czerkamurd 1
journal sw_tarischap1 12
journal sw_czerkamurd 5
journal sw_czerkamurd 10
```
- Dialogue INFO `384232541195612297` under topic **Greeting 7**; speaker Shade Vendas (`SW_ShadeMedicalTat`). locations: `Tatooine, Medical Bay`. conditions: Journal `SW_TarisChap1` NotEqual 12. response: “From what I'm hearing it looks like the only way into that desert is to get a hunting license. You'll have to get access into that Czerka Office to get one. I'm going to rest here for a while and then I'm going to head over to the Cantina to see if I can find anymore useful information.”.

```text
Journal SW_TarisChap1 12
PlaySound3D "SW_ShadeTat3"
```

### Stage 15

I have solved the authority murders and can access the Czerka Office now, I should speak to who is in charge. I've also received a message from Shade, it looks like she's made her way to the cantina.

**How this stage is set:**
- Dialogue INFO `27092150533120432315` under topic **Authority Murders**; speaker Czerka Office Guard (`SW_CzerkaOfficeTatGuard`). locations: `Tatooine, Sandriver`. conditions: Journal `SW_CzerkaMurd` Equal 25. response: “Barney Halligan? No good trash was as worthless as a Cathar! The Czerka Office is now reopened to the public. Thank you, stranger, and welcome to Sandriver.”.

```text
SW_ShadeMedicalTat->Disable
StartScript SW_StoryComlink2
Journal SW_TarisChap1 15
player->additem "Gold_001", 200
Set ShadeMedical to 2
```

### Stage 20

Shade says that she's been asking around and it looks like her father's friend has wandered out into the desert looking for some Sand Person tribe.

**How this stage is set:**
- Script `manlyman`. attached to Door Born To Hunt (`SW_CharGenPodDoor3`).

```text
SW_StorySceneAct3->Disable
        SW_ShadeLandingTat->Disable
Journal SW_TarisChap1 5
journal sw_tarischap1 10
journal sw_czerkamurd 1
```

```text
SW_ShadeLandingTat->Disable
Journal SW_TarisChap1 5
journal sw_tarischap1 10
journal sw_czerkamurd 1
journal sw_tarischap1 12
```

```text
journal sw_tarischap1 10
journal sw_czerkamurd 1
journal sw_tarischap1 12
journal sw_czerkamurd 5
journal sw_czerkamurd 10
```
- Dialogue INFO `282398969297326123` under topic **Greeting 7**; speaker Shade Vendas (`SW_ShadeCantinaTat`). locations: `Tatooine, Cantina`. response: “There's a lot of talk here, but it looks like my father's friend went out into the desert, we'll have to find him. He's an Ithorian and he may have an Ithorian partner here as well, I remember he had a friend that always traveled with him. We need access to his datapad to get any information regarding Taris' infrastructure.”.

```text
Journal SW_TarisChap1 20
PlaySound3D SW_ShadeTatTalk
StopSound SW_ShadeTatOnly
```

### Stage 25

I found the datapad holding the Taris intelligence information. I should bring this back to Shade at the Sandriver Cantina.

**How this stage is set:**
- Script `SW_MQTatDatapadScript`.

```text
If ( OnActivate )
    If ( GetJournalIndex SW_TarisChap1 < 25 )
        Journal SW_TarisChap1 25
        Activate
        return
```
- Script `SW_TarisJournalUpdate`. attached to Npc Dead Ithorian (`SW_IthorianDesert`); placed in `Tatooine`.

```text
If ( Player->GetItemCount SW_SiddahCaN1 >= 1 )
        If ( GetJournalIndex SW_TarisChap1 == 20 )
            Journal SW_TarisChap1 25
            Set DoOnce to 1
            StopScript SW_TarisJournalUpdate
```

### Stage 30

I should talk to Shade when I'm ready to head to Manaan.

**How this stage is set:**
- Dialogue INFO `252672107431542910` under topic **Greeting 7**; speaker Shade Vendas (`SW_ShadeCantinaTat`). locations: `Tatooine, Cantina`. conditions: Item/ItemType `SW_SiddahCaN1` GreaterEqual 1. response: “He's dead? This is terrible news, at least you were able to retrieve his datapad, though. We can make good use of this. I've been told that there's a ship for sale in the docking bay on Ahto City, Manaan. We should head there next and secure a ship, we're going to need it if we're to travel the galaxy.”.

```text
Journal SW_TarisChap1 30
Player->removeitem SW_SiddahCaN1 1
StopSound SW_ShadeTatTalk
```

### Stage 35 — Finished

[]

**How this stage is set:**
- Script `Alt_Ship`. attached to Door Ship Captain (`SW_CharGenPodDoorShipCap`).

```text
SW_ShadeCantinaTat->Disable
        SW_ShadeMedicalTat->Disable
        Journal SW_TarisChap1 35
        ;End Intro Skip
        player->additem SW_SpCarFreight 1
```

```text
;End Intro Skip
        player->additem SW_SpCarFreight 1
        Journal SW_TarisChap1-2 15
        Journal SW_ShipOwn 15
        SW_StorySceneAct4->Disable
```
- Script `SW_TatChap1EndScr`.

```text
SW_ShadeManaan1->Enable
SW_ShadeManaan1->AIFollow Player 0, 0, 0, 0
Journal SW_TarisChap1 35
Journal SW_TarisChap1-2 5
FadeIn 1.0
```

```text
SW_ShadeManaan1->AIFollow Player 0, 0, 0, 0
Journal SW_TarisChap1 35
Journal SW_TarisChap1-2 5
FadeIn 1.0
Player->PositionCell, 2240, 11712, 7530, 143 "Manaan, Docking Bay"
```

### Related records and locations

**Dialogue speakers:**
- Czerka Office Guard (`SW_CzerkaOfficeTatGuard`) — `Tatooine, Sandriver`
- Shade Vendas (`SW_ShadeCantinaTat`) — `Tatooine, Cantina`
- Shade Vendas (`SW_ShadeFreighter`) — `The Outer Rim, Freighter`
- Shade Vendas (`SW_ShadeMedicalTat`) — `Tatooine, Medical Bay`
- Shade Vendas (`SW_ShadeOutpost2`) — `Taris, Central Plaza: Outpost`
- Shade Vendas (`SW_ShadeTower`) — `Taris, Central Plaza: Capital Tower`

**Scripts that read or write this journal:**
- `Alt_Mando` — Door Mandalorian Raider (`SW_CharGenPodDoorMando`)
- `Alt_Ship` — Door Ship Captain (`SW_CharGenPodDoorShipCap`)
- `BornaJedi` — Door Born a jedi (`SW_CharGenPodDoor2`)
- `dickrich` — Door Richie Rich (`SW_CharGenPodDoor4`)
- `Drugdealer` — Door Drug boss (`SW_CharGenPodDoor5`)
- `gangster` — Door Gangster (`SW_CharGenPodDoor6`); Door Rodian gangster (`SW_CharGenPodDoor7`)
- `manlyman` — Door Born To Hunt (`SW_CharGenPodDoor3`)
- `SW_CantLootTheggs` — Npc Thegg (`SW_TheggDantooine`); placed in `Dantooine, Sea`; Npc Mandalorian Warrior (`SW_TheggFollower`); placed in `Dantooine, Sea`; Npc Mandalorian Warrior (`SW_TheggFollowerA`); placed in `Dantooine, Sea`; Npc Mandalorian Warrior (`SW_TheggFollowerB`); placed in `Dantooine, Sea`; Npc Mandalorian Warrior (`SW_TheggFollowerC`); placed in `Dantooine, Sea`
- `SW_CheckDoorSithCap` — Door Metal Door (`SW_TarisSithBaseDoorLock`); placed in `Taris, Sith Headquarters: OC Office`
- `SW_DisableGezekiAfterShip` — Activator `SW_Gezeki3Disable`; placed in `Taris, Central Plaza`
- `SW_EnterFreighter` — Activator Freighter (`SW_PlayersShipMana`); placed in `Lok, Graveridge`, `Nar Shaddaa`, `Taris, Central Plaza: Capital Tower`, `Taris, Central Plaza: Capital Tower Upper Level`, `Taris, Sith Headquarters: Level 2`, `Taris, Sith Headquarters: Level 3`, `Taris, Sith Headquarters: OC Office`, `Taris, Upper City Apartments`
- `SW_EnterFreighterNEW` — Door Freighter (`SW_PlayerShipNEW`); placed in `Dantooine, Ballast`, `Dathomir, Exterior`, `Gamorr, Ucksmug`, `Hoth, Wasteland`, `Kashyyk, Boyle Research Facility`, `M4-78: Landing Arm`, `Manaan, Docking Bay`, `Naboo, Beachhead` (+3 more)
- `SW_EnterFreighterTaris` — Door Freighter (`SW_PlayerShipNEWTaris`); placed in `Taris, Central Plaza`; Activator Freighter (`SW_PlayersShipTaris`)
- `SW_GezekiAtTower` — Npc Gezeki (`SW_GezekOutpost3`); placed in `Taris, Central Plaza`
- `SW_MQTatDatapadScript`
- `SW_OutPost2Enabling` — Npc Black Vulkar (`SW_BlackVulkarGangDead`); placed in `Taris, Central Plaza`; Npc Black Vulkar (`SW_BlackVulkarGangDead2`); placed in `Taris, Central Plaza`; Npc Gezeki (`SW_GezekOutpost2`); placed in `Taris, Central Plaza: Outpost`; Npc Shade Vendas (`SW_ShadeOutpost2`); placed in `Taris, Central Plaza: Outpost`; Npc Thegg (`SW_TheggOutpost2`); placed in `Taris, Central Plaza: Outpost`
- `SW_RestrictTakeTaris` — Door Metal Door (`SW_DoorTarisCantina`); placed in `Taris, Central Plaza`; Door Metal Door (`SW_DoorTarisFreighter`); placed in `Taris, Central Plaza`; Door Metal Door (`SW_DoorTarisRestrict1`); placed in `Taris, Central Plaza`; Door Metal Door (`SW_DoorTarisRestrict2`); placed in `Taris, Central Plaza`; Door Metal Door (`SW_DoorTarisRestrict3`); placed in `Taris, Central Plaza`
- `SW_ScalingSoldier` — Npc Lieutenant Sith Defector (`SW_TarisSithBaseHostLt2`); placed in `Taris, Sith Headquarters: Level 1`; Npc Lieutenant Sith Defector (`SW_TarisSithBaseHostLt3`); placed in `Taris, Sith Headquarters: Level 2`; Npc Sith Sentinel Droid (`SW_TarisSithBaseHostil2`); placed in `Taris, Sith Headquarters: Level 1`, `Taris, Sith Headquarters: Level 2`, `Taris, Sith Headquarters: Level 3`; Npc Sith Defector (`SW_TarisSithBaseHostilB`); placed in `Taris, Sith Headquarters: Level 3`; Npc Sith Defector (`SW_TarisSithBaseHostile`); placed in `Taris, Sith Headquarters: Level 1`, `Taris, Sith Headquarters: Level 2`, `Taris, Sith Headquarters: Level 3`
- `SW_ShadeScriptManaan1` — Npc Shade Vendas (`SW_ShadeManaan1`); placed in `Manaan, Docking Bay`
- `SW_StoryRancorScript` — Creature Rancor (`SW_RancorMQ`); placed in `Dantooine, Sea`; Creature Terentatek (`SW_TerenTest`)
- `SW_StorySceneScr3` — Activator `SW_StorySceneAct3`; placed in `Tatooine, Sandriver`
- `SW_StorySceneScr4` — Activator `SW_StorySceneAct4`; placed in `Manaan, Docking Bay`
- `SW_StorySceneScr5` — Activator `SW_StorySceneRancorAct`; placed in `Dantooine, Sea`
- `SW_StorySceneScr6`
- `SW_StorySceneScr7`
- `SW_StorySceneScr8` — Activator `SW_StorySceneActSithBase`; placed in `Taris, Upper City Central Building`
- `SW_StorySceneScrOutpost2` — Activator `SW_StorySceneActOutpost2`; placed in `Taris, Central Plaza: Outpost`
- `SW_TarisJournalUpdate` — Npc Dead Ithorian (`SW_IthorianDesert`); placed in `Tatooine`
- `SW_TarisRespawnShit` — Npc Taris Security (`SW_TarisSithDefector`); placed in `Taris, Central Plaza`, `Taris, Central Plaza: Capital Tower Upper Level`, `Taris, Lower City`, `Taris, Upper City Apartments`, `Taris, Upper City Cantina`, `Taris, Upper City North`, `Taris, Upper City North: Marketplace`, `Taris, Upper City South`; Npc Citizen (`SW_TarisUpperCitizen10`); placed in `Taris, Central Plaza`; Npc Droid (`SW_TarisUpperCitizen3`); placed in `Taris, Central Plaza`, `Taris, Upper City Cantina`, `Taris, Upper City North`, `Taris, Upper City North: Marketplace`, `Taris, Upper City South`; Npc Citizen (`SW_TarisUpperCitizen7`); placed in `Taris, Central Plaza`; Npc Citizen (`SW_TarisUpperCitizen8`); placed in `Taris, Central Plaza`
- `SW_TarisRespawnShitReverse` — Creature Rakghoul (`SW_RakhoulOutpostKill`); placed in `Taris, Central Plaza`; Creature Rakghoul (`SW_RakhoulTaris01`); placed in `Taris, Central Plaza`; Creature Rakghoul (`SW_RakhoulTaris02`); placed in `Taris, Central Plaza`; Creature Rakghoul (`SW_RakhoulTaris03`); placed in `Taris, Central Plaza`; Creature Rakghoul (`SW_RakhoulTaris04`); placed in `Taris, Central Plaza`
- `SW_TarisSithCaptainDied` — Npc Captain (`SW_TarisSithCaptain`); placed in `Taris, Sith Headquarters: OC Office`
- `SW_TatChap1EndScr`
- `SWE_Chapter2_or_MP`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)
- Credits (`Gold_001`)
- Spoon (`misc_com_silverware_spoon`)
- Power Belt (`SW_BeltPower`)
- Blaster Bolt (`SW_BlastBolt`)
- Pistol Bolt (`SW_BlastBoltArrow`)
- Greater Blaster Bolt (`SW_BlastBoltGreater`)
- Twitch's Blaster Rifle (`SW_BlasterPistolTwitch`)
- Mandalorian Heavy Blaster (`SW_BlasterRifleMando`)
- Comlink (`SW_Comlink`)
- Dropship Components (`SW_EnviroFilter`)
- Human Meat (`SW_HumanMeat`)
- Advanced Combat Implant (`SW_ImplantComb`)
- Midichlorian Implant (`SW_ImplantManaMinor`)
- Jedi Robe Bottoms (`SW_JRobeBrownPant`)
- Jedi Robe Top (`SW_JRobeBrownTop`)
- Guardian's Green Lightsaber (`SW_LightSabGrdGreenB`)
- Mandalorian War Boots (`SW_MandoBoots`)
- Mandalorian War Suit (`SW_MandoChest`)
- Mandalorian War Glove (`SW_MandoLeft`)
- Mandalorian War Greaves (`SW_MandoLegs`)
- Mandalorian War Glove (`SW_MandoRight`)
- Mandalorian Helmet (`SW_ManHelm`)
- Heavy Shirt (`SW_ShirtHeavy`)
- Ithorian's Datapad (`SW_SiddahCaN1`)
- Freighter Pilot Codes (`SW_SpCarFreight`)
- Freighter Pilot Codes (`SW_SpCarFreight`)
- Spice (`SW_Spice`)
- Tusken Shockspear (`SW_TuskenMelee`)
- Tusken Rifle (`SW_TuskenRifle`)
- Vibroblade (`SW_VibrobladeStrong`)
- Whip (`SW_Whip`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Dantooine, Ballast`
- `Dantooine, Sea`
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
- `Tatooine`
- `Tatooine, Cantina`
- `Tatooine, Medical Bay`
- `Tatooine, Sandriver`
- `The Outer Rim, Freighter`

<details><summary>Other directly addressed object IDs in related code</summary>

- Metal Door (`SW_CzerkaOfficeDoorTat`)

</details>

<details><summary>Journal-state readers (20 code sites)</summary>

- Script `SWE_Chapter2_or_MP`.
- Script `SW_CantLootTheggs`. attached to Npc Thegg (`SW_TheggDantooine`); placed in `Dantooine, Sea`; Npc Mandalorian Warrior (`SW_TheggFollower`); placed in `Dantooine, Sea`; Npc Mandalorian Warrior (`SW_TheggFollowerA`); placed in `Dantooine, Sea`; Npc Mandalorian Warrior (`SW_TheggFollowerB`); placed in `Dantooine, Sea`; Npc Mandalorian Warrior (`SW_TheggFollowerC`); placed in `Dantooine, Sea`; Npc Mandalorian Warrior (`SW_TheggFollowerDead`); placed in `Dantooine, Sea`; Npc Mandalorian Warrior (`SW_TheggFollowerMel`); placed in `Dantooine, Sea`; Npc Mandalorian Warrior (`SW_TheggFollowerMelA`); placed in `Dantooine, Sea`.
- Script `SW_CheckDoorSithCap`. attached to Door Metal Door (`SW_TarisSithBaseDoorLock`); placed in `Taris, Sith Headquarters: OC Office`.
- Script `SW_DisableGezekiAfterShip`. attached to Activator `SW_Gezeki3Disable`; placed in `Taris, Central Plaza`.
- Script `SW_EnterFreighter`. attached to Activator Freighter (`SW_PlayersShipMana`); placed in `Lok, Graveridge`, `Nar Shaddaa`, `Taris, Central Plaza: Capital Tower`, `Taris, Central Plaza: Capital Tower Upper Level`, `Taris, Sith Headquarters: Level 2`, `Taris, Sith Headquarters: Level 3`, `Taris, Sith Headquarters: OC Office`, `Taris, Upper City Apartments`.
- Script `SW_EnterFreighterNEW`. attached to Door Freighter (`SW_PlayerShipNEW`); placed in `Dantooine, Ballast`, `Dathomir, Exterior`, `Gamorr, Ucksmug`, `Hoth, Wasteland`, `Kashyyk, Boyle Research Facility`, `M4-78: Landing Arm`, `Manaan, Docking Bay`, `Naboo, Beachhead` (+3 more).
- Script `SW_EnterFreighterTaris`. attached to Door Freighter (`SW_PlayerShipNEWTaris`); placed in `Taris, Central Plaza`; Activator Freighter (`SW_PlayersShipTaris`).
- Script `SW_GezekiAtTower`. attached to Npc Gezeki (`SW_GezekOutpost3`); placed in `Taris, Central Plaza`.
- Script `SW_MQTatDatapadScript`.
- Script `SW_OutPost2Enabling`. attached to Npc Black Vulkar (`SW_BlackVulkarGangDead`); placed in `Taris, Central Plaza`; Npc Black Vulkar (`SW_BlackVulkarGangDead2`); placed in `Taris, Central Plaza`; Npc Gezeki (`SW_GezekOutpost2`); placed in `Taris, Central Plaza: Outpost`; Npc Shade Vendas (`SW_ShadeOutpost2`); placed in `Taris, Central Plaza: Outpost`; Npc Thegg (`SW_TheggOutpost2`); placed in `Taris, Central Plaza: Outpost`.
- Script `SW_RestrictTakeTaris`. attached to Door Metal Door (`SW_DoorTarisCantina`); placed in `Taris, Central Plaza`; Door Metal Door (`SW_DoorTarisFreighter`); placed in `Taris, Central Plaza`; Door Metal Door (`SW_DoorTarisRestrict1`); placed in `Taris, Central Plaza`; Door Metal Door (`SW_DoorTarisRestrict2`); placed in `Taris, Central Plaza`; Door Metal Door (`SW_DoorTarisRestrict3`); placed in `Taris, Central Plaza`; Door Metal Door (`SW_DoorTarisRestrict4`); placed in `Taris, Central Plaza`; Door Elevator Door (`SW_DoorTarisRestrict5`); placed in `Taris, Upper City Central Building`; Door Metal Door (`SW_DoorTarisRestrict6`); placed in `Taris, Upper City Central Building`.
- Script `SW_ScalingSoldier`. attached to Npc Lieutenant Sith Defector (`SW_TarisSithBaseHostLt2`); placed in `Taris, Sith Headquarters: Level 1`; Npc Lieutenant Sith Defector (`SW_TarisSithBaseHostLt3`); placed in `Taris, Sith Headquarters: Level 2`; Npc Sith Sentinel Droid (`SW_TarisSithBaseHostil2`); placed in `Taris, Sith Headquarters: Level 1`, `Taris, Sith Headquarters: Level 2`, `Taris, Sith Headquarters: Level 3`; Npc Sith Defector (`SW_TarisSithBaseHostilB`); placed in `Taris, Sith Headquarters: Level 3`; Npc Sith Defector (`SW_TarisSithBaseHostile`); placed in `Taris, Sith Headquarters: Level 1`, `Taris, Sith Headquarters: Level 2`, `Taris, Sith Headquarters: Level 3`.
- Script `SW_ShadeScriptManaan1`. attached to Npc Shade Vendas (`SW_ShadeManaan1`); placed in `Manaan, Docking Bay`.
- Script `SW_StoryRancorScript`. attached to Creature Rancor (`SW_RancorMQ`); placed in `Dantooine, Sea`; Creature Terentatek (`SW_TerenTest`).
- Script `SW_StorySceneScr4`. attached to Activator `SW_StorySceneAct4`; placed in `Manaan, Docking Bay`.
- Script `SW_StorySceneScr5`. attached to Activator `SW_StorySceneRancorAct`; placed in `Dantooine, Sea`.
- Script `SW_StorySceneScrOutpost2`. attached to Activator `SW_StorySceneActOutpost2`; placed in `Taris, Central Plaza: Outpost`.
- Script `SW_TarisJournalUpdate`. attached to Npc Dead Ithorian (`SW_IthorianDesert`); placed in `Tatooine`.
- Script `SW_TarisRespawnShit`. attached to Npc Taris Security (`SW_TarisSithDefector`); placed in `Taris, Central Plaza`, `Taris, Central Plaza: Capital Tower Upper Level`, `Taris, Lower City`, `Taris, Upper City Apartments`, `Taris, Upper City Cantina`, `Taris, Upper City North`, `Taris, Upper City North: Marketplace`, `Taris, Upper City South`; Npc Citizen (`SW_TarisUpperCitizen10`); placed in `Taris, Central Plaza`; Npc Droid (`SW_TarisUpperCitizen3`); placed in `Taris, Central Plaza`, `Taris, Upper City Cantina`, `Taris, Upper City North`, `Taris, Upper City North: Marketplace`, `Taris, Upper City South`; Npc Citizen (`SW_TarisUpperCitizen7`); placed in `Taris, Central Plaza`; Npc Citizen (`SW_TarisUpperCitizen8`); placed in `Taris, Central Plaza`; Npc Citizen (`SW_TarisUpperCitizen9`); placed in `Taris, Central Plaza`.
- Script `SW_TarisRespawnShitReverse`. attached to Creature Rakghoul (`SW_RakhoulOutpostKill`); placed in `Taris, Central Plaza`; Creature Rakghoul (`SW_RakhoulTaris01`); placed in `Taris, Central Plaza`; Creature Rakghoul (`SW_RakhoulTaris02`); placed in `Taris, Central Plaza`; Creature Rakghoul (`SW_RakhoulTaris03`); placed in `Taris, Central Plaza`; Creature Rakghoul (`SW_RakhoulTaris04`); placed in `Taris, Central Plaza`; Creature Rakghoul (`SW_RakhoulTaris05`); placed in `Taris, Central Plaza`; Creature Rakghoul (`SW_RakhoulTaris06`); placed in `Taris, Central Plaza`; Npc Sith Defector (`SW_TarisSithRakghoul01`); placed in `Taris, Central Plaza`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: We have crash landed on Tatooine, Shade has asked me to scout out the area, she is still shaken from the crash…
- [ ] Reach index `10`: It looks like the office of authority in this area is closed, the guard says it will be closed until a case of…
- [ ] Reach index `12`: Shade has told me that in order for us to get access into the desert we'll need a hunting license, I'll have t…
- [ ] Reach index `15`: I have solved the authority murders and can access the Czerka Office now, I should speak to who is in charge. …
- [ ] Reach index `20`: Shade says that she's been asking around and it looks like her father's friend has wandered out into the deser…
- [ ] Reach index `25`: I found the datapad holding the Taris intelligence information. I should bring this back to Shade at the Sandr…
- [ ] Reach index `30`: I should talk to Shade when I'm ready to head to Manaan.
- [ ] Reach index `35` (`Finished`): []
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_TarisChap1`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
