---
title: "Pirates of Lok"
description: "Walkthrough and QA reference for Pirates of Lok (SW_Piracy)."
weight: 61
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_Piracy"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_Piracy` |
| **Category** | Side Quests |
| **Journal entries** | 16 |
| **Completion branches** | No explicit Finished marker |
| **Starts by** | Speak with **Krill** in **Lok, Graveridge Cantina** and ask about **work**. |
| **Key locations** | Cargo Ship, Nchardahrk, Cargo Ship, Ularradallaku, Cargo Ship, Yansirramus, Cargo Ship, Zainsipilu, Lok, Graveridge, Lok, Graveridge Cantina … |
| **Key characters** | Krill |

## Walkthrough

### 1. Speak with Krill in Lok, Graveridge Cantina and ask about work

Speak with **Krill** in **Lok, Graveridge Cantina** and ask about **work**.

> **Expected journal update — index 5:** In order to win the favor of the pirates on Lok I'll have to prove I'm an outlaw. Krill wants me to take out a team of cargo security outside of Graveridge.

### 2. Find Trade Security in Lok, Graveridge and complete the encounter

Find **Trade Security** in **Lok, Graveridge** and complete the encounter.

> **Expected journal update — index 10:** I should let Krill know that the security team is dead outside of Graveridge.

### 3. Speak with Krill in Lok, Graveridge Cantina and ask about work

Speak with **Krill** in **Lok, Graveridge Cantina** and ask about **work**.

> **Expected journal update — index 15:** Krill gave me 500 credits but told me that I wasn't getting real pay since I was doing that job to prove my loyalty. He told me to talk to him again when I'm looking for more work.

**Known item transfer:** 500 × **Credits** (`gold_001`).

### 4. Speak with Krill in Lok, Graveridge Cantina and ask about work

Speak with **Krill** in **Lok, Graveridge Cantina** and ask about **work**.

> **Expected journal update — index 20:** Krill will pay me to take out a known bounty hunter, Mogal Bish'neen, that has been hanging around Lok. He said I'll know the ship by the look of it, it's a gold model of the fighters the pirates in Graveridge use.

### 5. Reach The Outer Rim and allow the scripted event to complete

Reach **The Outer Rim** and allow the scripted event to complete.

> **Expected journal update — index 25:** I've taken down Mogal Bish'neen and should return to Krill for a reward.

### 6. Speak with Krill in Lok, Graveridge Cantina and ask about work

Speak with **Krill** in **Lok, Graveridge Cantina** and ask about **work**.

> **Expected journal update — index 30:** I've been paid for killing Mogal Bish'neen, I should talk to Krill when I'm looking for more work.

**Known item transfer:** 2000 × **Credits** (`gold_001`).

### 7. Speak with Krill in Lok, Graveridge Cantina and ask about work

Speak with **Krill** in **Lok, Graveridge Cantina** and ask about **work**.

> **Expected journal update — index 35:** Krill said the Mender, a selkath medical ship is heading having difficulties between Manaan and Tatooine. There are blueprints for a new kolto device that the Pirates of Lokridge want. If I can obtain it he will pay 5,000 credits for it.

### 8. Activate Control Terminal in Cargo Ship, Nchardahrk

Activate **Control Terminal** in **Cargo Ship, Nchardahrk**.

> **Expected journal update — index 40:** I've obtained the blueprints from the Mender, I should turn it in to Krill for my credits.

### 9. Speak with Krill in Lok, Graveridge Cantina and ask about work

Speak with **Krill** in **Lok, Graveridge Cantina** and ask about **work**.

> **Expected journal update — index 45:** I turned in the Blueprints and Krill paid me my 5,000 credits. I should return to him if I'm looking for any more work.

**Known item transfer:** 5000 × **Credits** (`gold_001`).

### 10. Speak with Krill in Lok, Graveridge Cantina and ask about work

Speak with **Krill** in **Lok, Graveridge Cantina** and ask about **work**.

> **Expected journal update — index 50:** The bounty hunter guild, Mar'shans are hunting the Pirates of Graveridge. One of their hunters have been sighted near dathomir waiting for our ships to enter space. Krill wants me to kill him, says it will be an easy 2,000 credits.

### 11. Reach The Outer Rim and allow the scripted event to complete

Reach **The Outer Rim** and allow the scripted event to complete.

> **Expected journal update — index 55:** The bounty hunter is dead, I should return to Krill for my reward.

### 12. Speak with Krill in Lok, Graveridge Cantina and ask about work

Speak with **Krill** in **Lok, Graveridge Cantina** and ask about **work**.

> **Expected journal update — index 60:** Krill says that the Mar'shans are getting more aggressive, and that it's an all out war at this point. He told me to talk to him when I wanted more work, and that he has a cooperative assignment that needs to be done.

**Known item transfer:** 2000 × **Credits** (`gold_001`).

### 13. Speak with Krill in Lok, Graveridge Cantina and ask about work

Speak with **Krill** in **Lok, Graveridge Cantina** and ask about **work**.

> **Expected journal update — index 65:** Krill wants us to hit the Mar'shans hard, the Pirates of Graveridge are coordinating a strike against them, and they are supposed to be meeting in the outer rim near Gamorr. I'm to meet up with the others there, and take them out in numbers.

### 14. Reach The Outer Rim and allow the scripted event to complete

Reach **The Outer Rim** and allow the scripted event to complete.

> **Expected journal update — index 70:** The Mar'shans have been defeated, I should return to Krill when I make my way back to Lok.

### 15. Speak with Krill in Lok, Graveridge Cantina and ask about work

Speak with **Krill** in **Lok, Graveridge Cantina** and ask about **work**.

> **Expected journal update — index 75:** The Mar'shans shouldn't be troubling us anymore. Krill says he doesn't have any more specific work f or me right now, although hitting ships and stealing cargo and selling it in Graveridge is the go to. He's paid me in credits and I've been giving the key to his old home in town, which is now mine.

**Known item transfer:** 5500 × **Credits** (`gold_001`), 1 × **Krill's Access Key** (`SW_KrillKey`).

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 500 × **Credits** (`gold_001`)
- 2000 × **Credits** (`gold_001`)
- 5000 × **Credits** (`gold_001`)
- 5500 × **Credits** (`gold_001`)
- 1 × **Krill's Access Key** (`SW_KrillKey`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Krill** (`SW_GraveBartender`) — `Lok, Graveridge Cantina`

**Locations implicated by actor/object placement or explicit travel:**
- **Cargo Ship, Nchardahrk**
- **Cargo Ship, Ularradallaku**
- **Cargo Ship, Yansirramus**
- **Cargo Ship, Zainsipilu**
- **Lok, Graveridge**
- **Lok, Graveridge Cantina**
- **Medical Ship, Leghajo**
- **Medical Ship, Mender**
- **Medical Ship, Uszaser**
- **The Outer Rim**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_Piracy`
**Generated category:** Side Quests
**Journal entries:** 16

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | In order to win the favor of the pirates on Lok I'll have to prove I'm an outlaw. Krill wants me to take out a team of cargo security outside of Graveridge. | 1 |
| 10 | — | I should let Krill know that the security team is dead outside of Graveridge. | 1 |
| 15 | — | Krill gave me 500 credits but told me that I wasn't getting real pay since I was doing that job to prove my loyalty. He told me to talk to him again when I'm looking for more work. | 1 |
| 20 | — | Krill will pay me to take out a known bounty hunter, Mogal Bish'neen, that has been hanging around Lok. He said I'll know the ship by the look of it, it's a gold model of the fighters the pirates in Graveridge use. | 1 |
| 25 | — | I've taken down Mogal Bish'neen and should return to Krill for a reward. | 1 |
| 30 | — | I've been paid for killing Mogal Bish'neen, I should talk to Krill when I'm looking for more work. | 1 |
| 35 | — | Krill said the Mender, a selkath medical ship is heading having difficulties between Manaan and Tatooine. There are blueprints for a new kolto device that the Pirates of Lokridge want. If I can obtain it he will pay 5,000 credits for it. | 1 |
| 40 | — | I've obtained the blueprints from the Mender, I should turn it in to Krill for my credits. | 1 |
| 45 | — | I turned in the Blueprints and Krill paid me my 5,000 credits. I should return to him if I'm looking for any more work. | 1 |
| 50 | — | The bounty hunter guild, Mar'shans are hunting the Pirates of Graveridge. One of their hunters have been sighted near dathomir waiting for our ships to enter space. Krill wants me to kill him, says it will be an easy 2,000 credits. | 1 |
| 55 | — | The bounty hunter is dead, I should return to Krill for my reward. | 1 |
| 60 | — | Krill says that the Mar'shans are getting more aggressive, and that it's an all out war at this point. He told me to talk to him when I wanted more work, and that he has a cooperative assignment that needs to be done. | 1 |
| 65 | — | Krill wants us to hit the Mar'shans hard, the Pirates of Graveridge are coordinating a strike against them, and they are supposed to be meeting in the outer rim near Gamorr. I'm to meet up with the others there, and take them out in numbers. | 1 |
| 70 | — | The Mar'shans have been defeated, I should return to Krill when I make my way back to Lok. | 1 |
| 75 | — | The Mar'shans shouldn't be troubling us anymore. Krill says he doesn't have any more specific work f or me right now, although hitting ships and stealing cargo and selling it in Graveridge is the go to. He's paid me in credits and I've been giving the key to his old home in town, which is now mine. | 1 |

### Record-level trigger map

### Stage 5

In order to win the favor of the pirates on Lok I'll have to prove I'm an outlaw. Krill wants me to take out a team of cargo security outside of Graveridge.

**How this stage is set:**
- Dialogue INFO `1535442272920715904` under topic **work**; speaker Krill (`SW_GraveBartender`). locations: `Lok, Graveridge Cantina`. conditions: Journal `SW_Piracy` Equal 0. response: “You're looking for work? Well, we can't just trust every crink that finds there way here. You'll have to prove you're an outlaw. There's a security team that just followed a raider here. We'll let the forcefield down, you kill them and let me know they're dead.”.

```text
Journal SW_Piracy 5
SW_ForcefieldLok->Disable
SW_LokSpeederActivate1->Enable
```

### Stage 10

I should let Krill know that the security team is dead outside of Graveridge.

**How this stage is set:**
- Script `SW_GraveTeamDead`. attached to Npc Trade Security (`SW_GraveHostSecurity`); placed in `Lok, Graveridge`; Npc Trade Security (`SW_GraveHostSecurity2`); placed in `Lok, Graveridge`; Npc Trade Security (`SW_GraveHostSecurity3`); placed in `Lok, Graveridge`; Npc Trade Security (`SW_GraveHostSecurity4`); placed in `Lok, Graveridge`; Npc Trade Security (`SW_GraveHostSecurity5`); placed in `Lok, Graveridge`.

```text
If ( GetDeadCount SW_GraveHostSecurity4 >= 1 )
                    If ( GetDeadCount SW_GraveHostSecurity5 >= 1 )
                        Journal SW_Piracy 10
                    Endif
                Endif
```

### Stage 15

Krill gave me 500 credits but told me that I wasn't getting real pay since I was doing that job to prove my loyalty. He told me to talk to him again when I'm looking for more work.

**How this stage is set:**
- Dialogue INFO `3029921377219871076` under topic **work**; speaker Krill (`SW_GraveBartender`). locations: `Lok, Graveridge Cantina`. conditions: Journal `SW_Piracy` Equal 10. response: “Alright, now we're getting somewhere. I'll throw in 500 credits, and don't be looking down on it either, remember that you did that one for you, not for us. Now that we can start to trust you why don't you take a real job this time? Let me know when you need more work.”.

```text
Journal SW_Piracy 15
player->additem gold_001 500
```

### Stage 20

Krill will pay me to take out a known bounty hunter, Mogal Bish'neen, that has been hanging around Lok. He said I'll know the ship by the look of it, it's a gold model of the fighters the pirates in Graveridge use.

**How this stage is set:**
- Dialogue INFO `601510776158955533` under topic **work**; speaker Krill (`SW_GraveBartender`). locations: `Lok, Graveridge Cantina`. conditions: Journal `SW_Piracy` Equal 15. response: “There's a bounty hunter up there in The Outer Rim, Mogal Bish'neen, we want him dead. He's been hitting pirates from all over Lok pretty hard, so it's not going to be easy. But if you kill him we'll take you in for sure, and we'll pay you good too. You can't miss his ship, kind of looks like ours, except it's gold. By now he'll have you on file for leaving Lok, he'll be looking for you too.”.

```text
Journal SW_Piracy 20
SW_ShipBountyHunterQues->Enable
```

### Stage 25

I've taken down Mogal Bish'neen and should return to Krill for a reward.

**How this stage is set:**
- Script `SW_ShipBouHunScrQ`. attached to Creature Mogal Bishneen (`SW_ShipBountyHunterQues`); placed in `The Outer Rim`.

```text
PlaySound3D "SatchelBlast"
    Disable
    Journal SW_Piracy 25
Endif
```

### Stage 30

I've been paid for killing Mogal Bish'neen, I should talk to Krill when I'm looking for more work.

**How this stage is set:**
- Dialogue INFO `1761620141994912465` under topic **work**; speaker Krill (`SW_GraveBartender`). locations: `Lok, Graveridge Cantina`. conditions: Journal `SW_Piracy` Equal 25. response: “The slayer of Mogal Bish'neen, welcome back to Graveridge. Here, take your pay, and let me know when you need more work.”.

```text
Journal SW_Piracy 30
player->additem gold_001 2000
```

### Stage 35

Krill said the Mender, a selkath medical ship is heading having difficulties between Manaan and Tatooine. There are blueprints for a new kolto device that the Pirates of Lokridge want. If I can obtain it he will pay 5,000 credits for it.

**How this stage is set:**
- Dialogue INFO `74141534665575407` under topic **work**; speaker Krill (`SW_GraveBartender`). locations: `Lok, Graveridge Cantina`. conditions: Journal `SW_Piracy` Equal 30. response: “The Mender is a medical ship travelling the Outer Rim right now. They're having difficulties and are currently stopped between Manaan and Tatooine. This ship holds the blueprints to a new kolto device that we would very much like to obtain. If you can snag it, I'll pay you 5,000 credits.”.

```text
Journal SW_Piracy 35
SW_MedicShipQuestt->Enable
```

### Stage 40

I've obtained the blueprints from the Mender, I should turn it in to Krill for my credits.

**How this stage is set:**
- Script `SW_LokMedicalQScript`. attached to Activator Control Terminal (`SW_SelfDestructMonitor`); placed in `Cargo Ship, Nchardahrk`, `Cargo Ship, Ularradallaku`, `Cargo Ship, Yansirramus`, `Cargo Ship, Zainsipilu`, `Medical Ship, Leghajo`, `Medical Ship, Mender`, `Medical Ship, Uszaser`.

```text
If ( OnActivate )
    If ( GetJournalIndex "SW_Piracy" == 35 )
        Journal SW_Piracy 40
        MessageBox "Blueprints obtained. Self Destruct Sequence Activated."
        SW_MedicShipQuestt->Disable
```

### Stage 45

I turned in the Blueprints and Krill paid me my 5,000 credits. I should return to him if I'm looking for any more work.

**How this stage is set:**
- Dialogue INFO `241851249561538567` under topic **work**; speaker Krill (`SW_GraveBartender`). locations: `Lok, Graveridge Cantina`. conditions: Journal `SW_Piracy` Equal 40. response: “These are the blueprints. We're all in this together, every heist, every ransom, that's what keeps this place breathing. Come see me when you're ready for more work.”.

```text
Journal SW_Piracy 45
player->additem gold_001 5000
```

### Stage 50

The bounty hunter guild, Mar'shans are hunting the Pirates of Graveridge. One of their hunters have been sighted near dathomir waiting for our ships to enter space. Krill wants me to kill him, says it will be an easy 2,000 credits.

**How this stage is set:**
- Dialogue INFO `34009163222712825` under topic **work**; speaker Krill (`SW_GraveBartender`). locations: `Lok, Graveridge Cantina`. conditions: Journal `SW_Piracy` Equal 45. response: “Mogal Bish'neen turns out to be party of a bounty hunter guild known as the Mar'shans. They're hunting us. One of their hunters have been sighted near Dathomir, they're waiting for our ships to enter the Outer Rim. Kill him, and I'll pay you 2,000 credits.”.

```text
Journal SW_Piracy 50
SW_ShipBountyHunterQue2->Enable
```

### Stage 55

The bounty hunter is dead, I should return to Krill for my reward.

**How this stage is set:**
- Script `SW_ShipBouHun555`. attached to Creature Mogal Bishneen (`SW_ShipBountyHunterQue2`); placed in `The Outer Rim`.

```text
PlaySound3D "SatchelBlast"
    Disable
    Journal SW_Piracy 55
    SW_ShipBountyHunterQue3->Enable
Endif
```

### Stage 60

Krill says that the Mar'shans are getting more aggressive, and that it's an all out war at this point. He told me to talk to him when I wanted more work, and that he has a cooperative assignment that needs to be done.

**How this stage is set:**
- Dialogue INFO `68681355237443377` under topic **work**; speaker Krill (`SW_GraveBartender`). locations: `Lok, Graveridge Cantina`. conditions: Journal `SW_Piracy` Equal 55. response: “The Mar'shans are getting more aggressive, we're going to have to take action. Here's your credits, talk to me again when you're ready for more, we're coordinating a cooperative attack to take care of this guild for good.”.

```text
Journal SW_Piracy 60
player->additem gold_001 2000
```

### Stage 65

Krill wants us to hit the Mar'shans hard, the Pirates of Graveridge are coordinating a strike against them, and they are supposed to be meeting in the outer rim near Gamorr. I'm to meet up with the others there, and take them out in numbers.

**How this stage is set:**
- Dialogue INFO `424918797171865275` under topic **work**; speaker Krill (`SW_GraveBartender`). locations: `Lok, Graveridge Cantina`. conditions: Journal `SW_Piracy` Equal 60. response: “The Mar'shans are gathering around Gamorr, and in great numbers. We're going to hit them hard now while they're all in one spot. I need you to head out there and meet with the others, we're going to blow each one of them into the vacuum of space.”.

```text
Journal SW_Piracy 65
SW_ShipBountyHunterQue4->Enable
SW_ShipBountyHunterQue5->Enable
```

### Stage 70

The Mar'shans have been defeated, I should return to Krill when I make my way back to Lok.

**How this stage is set:**
- Script `SW_SpaceBattleT`. attached to Creature Pirate Ship (`SW_SPPirateGrave1`); placed in `The Outer Rim`; Creature Pirate Ship (`SW_SPPirateGrave2`); placed in `The Outer Rim`; Creature Pirate Ship (`SW_SPPirateGrave3`); placed in `The Outer Rim`; Creature Mogal Bishneen (`SW_ShipBountyHunterQue4`); placed in `The Outer Rim`; Creature Mogal Bishneen (`SW_ShipBountyHunterQue5`); placed in `The Outer Rim`; Creature Mogal Bishneen (`SW_ShipBountyHunterQue6`); placed in `The Outer Rim`; Creature Mogal Bishneen (`SW_ShipBountyHunterQue7`); placed in `The Outer Rim`.

```text
If ( SW_ShipBountyHunterQue6->GetDisabled == 1 )
                If ( SW_ShipBountyHunterQue7->GetDisabled == 1 )
                    Journal SW_Piracy 70
                    SW_SPPirateGrave1->SetHealth 0
                    SW_SPPirateGrave2->SetHealth 0
```

### Stage 75

The Mar'shans shouldn't be troubling us anymore. Krill says he doesn't have any more specific work f or me right now, although hitting ships and stealing cargo and selling it in Graveridge is the go to. He's paid me in credits and I've been giving the key to his old home in town, which is now mine.

**How this stage is set:**
- Dialogue INFO `28792197481511215831` under topic **work**; speaker Krill (`SW_GraveBartender`). locations: `Lok, Graveridge Cantina`. conditions: Journal `SW_Piracy` Equal 70. response: “5,500 credits to the survivor of the Mar'shan Massacre. Take some rest, I don't have any specific work right now. Hit ships, steal cargo, bring it here, sell it and relax. Oh, and one of the residents in the area went and picked a fight he couldn't win. I'll be taking his home. You can have mine, you've earned the right to stay in Graveridge, here's the key.”.

```text
Journal SW_Piracy 75
player->additem gold_001 5500
player->additem SW_KrillKey 1
```

### Related records and locations

**Dialogue speakers:**
- Krill (`SW_GraveBartender`) — `Lok, Graveridge Cantina`

**Scripts that read or write this journal:**
- `SW_GraveTeamDead` — Npc Trade Security (`SW_GraveHostSecurity`); placed in `Lok, Graveridge`; Npc Trade Security (`SW_GraveHostSecurity2`); placed in `Lok, Graveridge`; Npc Trade Security (`SW_GraveHostSecurity3`); placed in `Lok, Graveridge`; Npc Trade Security (`SW_GraveHostSecurity4`); placed in `Lok, Graveridge`; Npc Trade Security (`SW_GraveHostSecurity5`); placed in `Lok, Graveridge`
- `SW_LokMedicalQScript` — Activator Control Terminal (`SW_SelfDestructMonitor`); placed in `Cargo Ship, Nchardahrk`, `Cargo Ship, Ularradallaku`, `Cargo Ship, Yansirramus`, `Cargo Ship, Zainsipilu`, `Medical Ship, Leghajo`, `Medical Ship, Mender`, `Medical Ship, Uszaser`
- `SW_ShipBouHun555` — Creature Mogal Bishneen (`SW_ShipBountyHunterQue2`); placed in `The Outer Rim`
- `SW_ShipBouHunScrQ` — Creature Mogal Bishneen (`SW_ShipBountyHunterQues`); placed in `The Outer Rim`
- `SW_SpaceBattleT` — Creature Pirate Ship (`SW_SPPirateGrave1`); placed in `The Outer Rim`; Creature Pirate Ship (`SW_SPPirateGrave2`); placed in `The Outer Rim`; Creature Pirate Ship (`SW_SPPirateGrave3`); placed in `The Outer Rim`; Creature Mogal Bishneen (`SW_ShipBountyHunterQue4`); placed in `The Outer Rim`; Creature Mogal Bishneen (`SW_ShipBountyHunterQue5`); placed in `The Outer Rim`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)
- Krill's Access Key (`SW_KrillKey`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Cargo Ship, Nchardahrk`
- `Cargo Ship, Ularradallaku`
- `Cargo Ship, Yansirramus`
- `Cargo Ship, Zainsipilu`
- `Lok, Graveridge`
- `Lok, Graveridge Cantina`
- `Medical Ship, Leghajo`
- `Medical Ship, Mender`
- `Medical Ship, Uszaser`
- `The Outer Rim`

<details><summary>Journal-state readers (3 code sites)</summary>

- Script `SW_LokMedicalQScript`. attached to Activator Control Terminal (`SW_SelfDestructMonitor`); placed in `Cargo Ship, Nchardahrk`, `Cargo Ship, Ularradallaku`, `Cargo Ship, Yansirramus`, `Cargo Ship, Zainsipilu`, `Medical Ship, Leghajo`, `Medical Ship, Mender`, `Medical Ship, Uszaser`.
- Script `SW_ShipBouHun555`. attached to Creature Mogal Bishneen (`SW_ShipBountyHunterQue2`); placed in `The Outer Rim`.
- Script `SW_SpaceBattleT`. attached to Creature Pirate Ship (`SW_SPPirateGrave1`); placed in `The Outer Rim`; Creature Pirate Ship (`SW_SPPirateGrave2`); placed in `The Outer Rim`; Creature Pirate Ship (`SW_SPPirateGrave3`); placed in `The Outer Rim`; Creature Mogal Bishneen (`SW_ShipBountyHunterQue4`); placed in `The Outer Rim`; Creature Mogal Bishneen (`SW_ShipBountyHunterQue5`); placed in `The Outer Rim`; Creature Mogal Bishneen (`SW_ShipBountyHunterQue6`); placed in `The Outer Rim`; Creature Mogal Bishneen (`SW_ShipBountyHunterQue7`); placed in `The Outer Rim`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: In order to win the favor of the pirates on Lok I'll have to prove I'm an outlaw. Krill wants me to take out a…
- [ ] Reach index `10`: I should let Krill know that the security team is dead outside of Graveridge.
- [ ] Reach index `15`: Krill gave me 500 credits but told me that I wasn't getting real pay since I was doing that job to prove my lo…
- [ ] Reach index `20`: Krill will pay me to take out a known bounty hunter, Mogal Bish'neen, that has been hanging around Lok. He sai…
- [ ] Reach index `25`: I've taken down Mogal Bish'neen and should return to Krill for a reward.
- [ ] Reach index `30`: I've been paid for killing Mogal Bish'neen, I should talk to Krill when I'm looking for more work.
- [ ] Reach index `35`: Krill said the Mender, a selkath medical ship is heading having difficulties between Manaan and Tatooine. Ther…
- [ ] Reach index `40`: I've obtained the blueprints from the Mender, I should turn it in to Krill for my credits.
- [ ] Reach index `45`: I turned in the Blueprints and Krill paid me my 5,000 credits. I should return to him if I'm looking for any m…
- [ ] Reach index `50`: The bounty hunter guild, Mar'shans are hunting the Pirates of Graveridge. One of their hunters have been sight…
- [ ] Reach index `55`: The bounty hunter is dead, I should return to Krill for my reward.
- [ ] Reach index `60`: Krill says that the Mar'shans are getting more aggressive, and that it's an all out war at this point. He told…
- [ ] Reach index `65`: Krill wants us to hit the Mar'shans hard, the Pirates of Graveridge are coordinating a strike against them, an…
- [ ] Reach index `70`: The Mar'shans have been defeated, I should return to Krill when I make my way back to Lok.
- [ ] Reach index `75`: The Mar'shans shouldn't be troubling us anymore. Krill says he doesn't have any more specific work f or me rig…
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_Piracy`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
