---
title: "Treasure of Lok"
description: "Walkthrough and QA reference for Treasure of Lok (SW_ExpStarJourn)."
weight: 13
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_ExpStarJourn"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_ExpStarJourn` |
| **Category** | Expansion / PlanExp |
| **Journal entries** | 11 |
| **Completion branches** | No explicit Finished marker |
| **Starts by** | Speak with **Perl Outlaw Navigator** in **Lok, Perl Hideout** and ask about **star map**. |
| **Key locations** | Gamorr, Watery Tomb, Kashyyk, Beast Cave, Lok, Perl Hideout, Lok, Planet Core, Tatooine, Watery Tomb, The Outer Rim |
| **Key characters** | Perl Outlaw Navigator, Perl Outlaw Navigator |

## Walkthrough

### 1. Speak with Perl Outlaw Navigator in Lok, Perl Hideout and ask about star map

Speak with **Perl Outlaw Navigator** in **Lok, Perl Hideout** and ask about **star map**.

> **Expected journal update — index 5:** The head navigator for the perl gang believes that an ancient star map they built their hideout around holds the location of a great treasure on Lok. He's been studying the map for years, and believes the first clue lies within a message encrypted in coordinates, "Planets of sand hold the map in watery graves."

### 2. Reach Gamorr, Watery Tomb and allow the scripted event to complete

Reach **Gamorr, Watery Tomb** and allow the scripted event to complete.

> **Expected journal update — index 10:** I have found two watery tombs on Gamorr and Tatooine that together hold another coordinate. I should bring this back to my head navigator to see what he can make of it.

### 3. Speak with Perl Outlaw Navigator in Lok, Perl Hideout and ask about star map

Speak with **Perl Outlaw Navigator** in **Lok, Perl Hideout** and ask about **star map**.

> **Expected journal update — index 15:** I've spoken with my head navigator regarding the star map. The coordinates point to Kashyyk, where he believes we'll find a key that fits into the star map to reveal the final location.

### 4. Activate Ancient Chest in Kashyyk, Beast Cave

The records expose more than one way to reach this journal update:
- Activate **Ancient Chest** in **Kashyyk, Beast Cave**.
- Activate **Ancient Key**.

> **Expected journal update — index 20:** I've found what may be the star map key within the shadowlands of Kashyyk. I should return to the head navigator to see what he can make of it.

**Known item transfer:** 1 × **Ancient Key** (`SW_ExpStarKey`).

### 5. Speak with Perl Outlaw Navigator in Lok, Perl Hideout and ask about star map

Speak with **Perl Outlaw Navigator** in **Lok, Perl Hideout** and ask about **star map**.

> **Expected journal update — index 25:** The key from the shadowlands opened some sort of portal in the perl gang's hideout using the star map.

### 6. Speak with Perl Outlaw Navigator in Lok, Planet Core

Speak with **Perl Outlaw Navigator** in **Lok, Planet Core**.

> **Expected journal update — index 30:** The star map portal leads to Lok's planet core, which has an ancient structure inside. This must be where Lok's hidden treasure lies.

### 7. Reach Lok, Planet Core and allow the scripted event to complete

Reach **Lok, Planet Core** and allow the scripted event to complete.

> **Expected journal update — index 35:** The malfunctioning tech of a long dead cyborg holds the final mystery of Lok's treasure. The cyborg's augmentations are missing their memory core, access archive, and stem connector that would all be needed in order to access the augmentation's logs.

### 8. Reach The Outer Rim and allow the scripted event to complete

Reach **The Outer Rim** and allow the scripted event to complete.

> **Expected journal update — index 40:** I have retrieved the memory core, access archive, and stem connector. I should return to Lok's planet core and reinstall them into the cyborg.

### 9. Reach Lok, Planet Core and allow the scripted event to complete

Reach **Lok, Planet Core** and allow the scripted event to complete.

> **Expected journal update — index 45:** The remains of the cyborg have opened another portal. Inside must be the treasure.

### 10. Use Mountain of Treasure in Lok, Planet Core

Use **Mountain of Treasure** in **Lok, Planet Core**.

> **Expected journal update — index 50:** Upon entering the true core of the planet, the cyborg began a failsafe protocol and the treasure sank into the lava, I have gathered all of Lok's treasure that I can, but whatever was left is now lost to the hot stomach of the planet.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 1 × **Ancient Key** (`SW_ExpStarKey`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Perl Outlaw Navigator** (`SW_ExpOutlawMapper`) — `Lok, Perl Hideout`
- **Perl Outlaw Navigator** (`SW_ExpOutlawMapper2`) — `Lok, Planet Core`

**Locations implicated by actor/object placement or explicit travel:**
- **Gamorr, Watery Tomb**
- **Kashyyk, Beast Cave**
- **Lok, Perl Hideout**
- **Lok, Planet Core**
- **Tatooine, Watery Tomb**
- **The Outer Rim**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_ExpStarJourn`
**Generated category:** Expansion / PlanExp
**Journal entries:** 11

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | The head navigator for the perl gang believes that an ancient star map they built their hideout around holds the location of a great treasure on Lok. He's been studying the map for years, and believes the first clue lies within a message encrypted in coordinates, "Planets of sand hold the map in watery graves." | 1 |
| 10 | — | I have found two watery tombs on Gamorr and Tatooine that together hold another coordinate. I should bring this back to my head navigator to see what he can make of it. | 1 |
| 15 | — | I've spoken with my head navigator regarding the star map. The coordinates point to Kashyyk, where he believes we'll find a key that fits into the star map to reveal the final location. | 1 |
| 20 | — | I've found what may be the star map key within the shadowlands of Kashyyk. I should return to the head navigator to see what he can make of it. | 2 |
| 25 | — | The key from the shadowlands opened some sort of portal in the perl gang's hideout using the star map. | 1 |
| 30 | — | The star map portal leads to Lok's planet core, which has an ancient structure inside. This must be where Lok's hidden treasure lies. | 1 |
| 35 | — | The malfunctioning tech of a long dead cyborg holds the final mystery of Lok's treasure. The cyborg's augmentations are missing their memory core, access archive, and stem connector that would all be needed in order to access the augmentation's logs. | 1 |
| 40 | — | I have retrieved the memory core, access archive, and stem connector. I should return to Lok's planet core and reinstall them into the cyborg. | 3 |
| 45 | — | The remains of the cyborg have opened another portal. Inside must be the treasure. | 1 |
| 50 | — | Upon entering the true core of the planet, the cyborg began a failsafe protocol and the treasure sank into the lava, I have gathered all of Lok's treasure that I can, but whatever was left is now lost to the hot stomach of the planet. | 1 |

### Record-level trigger map

### Stage 5

The head navigator for the perl gang believes that an ancient star map they built their hideout around holds the location of a great treasure on Lok. He's been studying the map for years, and believes the first clue lies within a message encrypted in coordinates, "Planets of sand hold the map in watery graves."

**How this stage is set:**
- Dialogue INFO `3396127041701712967` under topic **star map**; speaker Perl Outlaw Navigator (`SW_ExpOutlawMapper`). locations: `Lok, Perl Hideout`. conditions: Journal `SW_ExpStarJourn` Equal 0. response: “I have studied this map for many, many years, since the perl gang was first founded and we built our hideout here. I believe that this star map is a treasure map holding the secret of an ancient treasure on Lok. I have only one clue to this day, "Planets of sand hold the map in watery graves," a message encrypted within various coordinates found on the map.”.

```text
Journal SW_ExpStarJourn 5
```

### Stage 10

I have found two watery tombs on Gamorr and Tatooine that together hold another coordinate. I should bring this back to my head navigator to see what he can make of it.

**How this stage is set:**
- Script `SW_ExpTombScript`. attached to Activator Tomb Pillar (`SW_ExpTombPillar`); placed in `Gamorr, Watery Tomb`, `Tatooine, Watery Tomb`.

```text
If ( SW_ExpWaterCount == 2 )
    If ( DoTwice == 0 )
        Journal SW_ExpStarJourn 10
        Set DoTwice to 1
    Endif
```

### Stage 15

I've spoken with my head navigator regarding the star map. The coordinates point to Kashyyk, where he believes we'll find a key that fits into the star map to reveal the final location.

**How this stage is set:**
- Dialogue INFO `20179582643922991` under topic **star map**; speaker Perl Outlaw Navigator (`SW_ExpOutlawMapper`). locations: `Lok, Perl Hideout`. conditions: Journal `SW_ExpStarJourn` Equal 10. response: “Together these are coordinates that lead to Kashyyk. Scans show that this district is occupied by a research facility. I'm honestly not sure what you will find there, but this is the best clue we have to solving the mysteries of this star map.”.

```text
Journal SW_ExpStarJourn 15
```

### Stage 20

I've found what may be the star map key within the shadowlands of Kashyyk. I should return to the head navigator to see what he can make of it.

**How this stage is set:**
- Script `SW_ExpKeyChestScript`. attached to Container Ancient Chest (`SW_ExpAncientChest`); placed in `Kashyyk, Beast Cave`.

```text
If ( OnActivate)
    If ( GetJournalIndex SW_ExpStarJourn == 15 )
        Journal SW_ExpStarJourn 20
        player->additem SW_ExpStarKey 1
        MessageBox "The chest opens and reveals a strange and ancient object."
```
- Script `SW_ExpKeyScript`. attached to MiscItem Ancient Key (`SW_ExpStarKey`).

```text
If ( OnActivate )
    If ( GetJournalIndex SW_ExpStarJourn == 15 )
        Journal SW_ExpStarJourn 20
    Endif
    Activate
```

### Stage 25

The key from the shadowlands opened some sort of portal in the perl gang's hideout using the star map.

**How this stage is set:**
- Dialogue INFO `1044617110308520315` under topic **star map**; speaker Perl Outlaw Navigator (`SW_ExpOutlawMapper`). locations: `Lok, Perl Hideout`. conditions: Item/ItemType `SW_ExpStarKey` GreaterEqual 1. response: “Let's just try to place it here... oh... oh my... it's some sort of gateway, an ancient portal device. Well... after you, boss.”.

```text
Journal SW_ExpStarJourn 25
Player->removeitem SW_ExpStarKey 1
SW_ExpLokPortalHide->Enable
```

### Stage 30

The star map portal leads to Lok's planet core, which has an ancient structure inside. This must be where Lok's hidden treasure lies.

**How this stage is set:**
- Dialogue INFO `546523718300215952` under topic **Greeting 7**; speaker Perl Outlaw Navigator (`SW_ExpOutlawMapper2`). locations: `Lok, Planet Core`. response: “By the stars, it's the planet's core. The treasure was hidden all the way in here. It looks a bit dangerous, and you'll probably want me alive. I'll just... wait here until you've explored a bit.”.

```text
Journal SW_ExpStarJourn 30
```

### Stage 35

The malfunctioning tech of a long dead cyborg holds the final mystery of Lok's treasure. The cyborg's augmentations are missing their memory core, access archive, and stem connector that would all be needed in order to access the augmentation's logs.

**How this stage is set:**
- Script `SW_ExpSothaScript`. attached to Activator Ancient Cyborg (`SW_ExpLokSotha`); placed in `Lok, Planet Core`.

```text
PlaySound3D "SW_ExpAssess"
        Set DoOnce to 1
        Journal SW_ExpStarJourn 35
        SW_ExpOutlawMapper2->Disable
        SW_ExpOutlawMapper3->Enable
```

```text
MessageBox "Starting Routine: Core Protocol 32X49ZY."
        SW_ExpLokPortal->Enable
        Journal SW_ExpStarJourn 45
        PlaySound3D "SW_ExpPortalSound"
        Set LokSothaState to 4
```

### Stage 40

I have retrieved the memory core, access archive, and stem connector. I should return to Lok's planet core and reinstall them into the cyborg.

**How this stage is set:**
- Script `SW_ExpAstAccesScript`. attached to Activator Asteriod (`SW_ExpAstAccess`); placed in `The Outer Rim`.

```text
If ( Player->GetItemCount SW_ExpAccessArch >=1 )
                If ( Player->GetItemCount SW_ExpStemCon >=1 )
                    Journal SW_ExpStarJourn 40
                Endif
            Endif
```
- Script `SW_ExpAstMemScript`. attached to Activator Asteriod (`SW_ExpAstMemory`); placed in `The Outer Rim`.

```text
If ( Player->GetItemCount SW_ExpAccessArch >=1 )
                If ( Player->GetItemCount SW_ExpStemCon >=1 )
                    Journal SW_ExpStarJourn 40
                Endif
            Endif
```
- Script `SW_ExpAstStemScript`. attached to Activator Asteriod (`SW_ExpAstStem`); placed in `The Outer Rim`.

```text
If ( Player->GetItemCount SW_ExpAccessArch >=1 )
                If ( Player->GetItemCount SW_ExpStemCon >=1 )
                    Journal SW_ExpStarJourn 40
                Endif
            Endif
```

### Stage 45

The remains of the cyborg have opened another portal. Inside must be the treasure.

**How this stage is set:**
- Script `SW_ExpSothaScript`. attached to Activator Ancient Cyborg (`SW_ExpLokSotha`); placed in `Lok, Planet Core`.

```text
PlaySound3D "SW_ExpAssess"
        Set DoOnce to 1
        Journal SW_ExpStarJourn 35
        SW_ExpOutlawMapper2->Disable
        SW_ExpOutlawMapper3->Enable
```

```text
MessageBox "Starting Routine: Core Protocol 32X49ZY."
        SW_ExpLokPortal->Enable
        Journal SW_ExpStarJourn 45
        PlaySound3D "SW_ExpPortalSound"
        Set LokSothaState to 4
```

### Stage 50

Upon entering the true core of the planet, the cyborg began a failsafe protocol and the treasure sank into the lava, I have gathered all of Lok's treasure that I can, but whatever was left is now lost to the hot stomach of the planet.

**How this stage is set:**
- Script `SW_ExpGoldScript`. attached to Door Mountain of Treasure (`SW_ExpGoldPile`); placed in `Lok, Planet Core`.

```text
Set LimitReached to 1
        SW_ExpBedSuper->disable
        Journal SW_ExpStarJourn 50
        SW_ExpLokPortalMain->Disable
    Endif
```

### Related records and locations

**Dialogue speakers:**
- Perl Outlaw Navigator (`SW_ExpOutlawMapper`) — `Lok, Perl Hideout`
- Perl Outlaw Navigator (`SW_ExpOutlawMapper2`) — `Lok, Planet Core`

**Scripts that read or write this journal:**
- `SW_ExpAstAccesScript` — Activator Asteriod (`SW_ExpAstAccess`); placed in `The Outer Rim`
- `SW_ExpAstMemScript` — Activator Asteriod (`SW_ExpAstMemory`); placed in `The Outer Rim`
- `SW_ExpAstStemScript` — Activator Asteriod (`SW_ExpAstStem`); placed in `The Outer Rim`
- `SW_ExpGoldScript` — Door Mountain of Treasure (`SW_ExpGoldPile`); placed in `Lok, Planet Core`
- `SW_ExpKeyChestScript` — Container Ancient Chest (`SW_ExpAncientChest`); placed in `Kashyyk, Beast Cave`
- `SW_ExpKeyScript` — MiscItem Ancient Key (`SW_ExpStarKey`)
- `SW_ExpSothaScript` — Activator Ancient Cyborg (`SW_ExpLokSotha`); placed in `Lok, Planet Core`
- `SW_ExpTombScript` — Activator Tomb Pillar (`SW_ExpTombPillar`); placed in `Gamorr, Watery Tomb`, `Tatooine, Watery Tomb`

**Items referenced by related script/result code:**
- Access Archive (`SW_ExpAccessArch`)
- Memory Core (`SW_ExpMemoryCore`)
- Ancient Key (`SW_ExpStarKey`)
- Stem Connector (`SW_ExpStemCon`)
- `SW_ExpTreasurePlanet`

**Cells implicated by actor/object placement or explicit travel code:**
- `Gamorr, Watery Tomb`
- `Kashyyk, Beast Cave`
- `Lok, Perl Hideout`
- `Lok, Planet Core`
- `Tatooine, Watery Tomb`
- `The Outer Rim`

<details><summary>Journal-state readers (6 code sites)</summary>

- Script `SW_ExpAstAccesScript`. attached to Activator Asteriod (`SW_ExpAstAccess`); placed in `The Outer Rim`.
- Script `SW_ExpAstMemScript`. attached to Activator Asteriod (`SW_ExpAstMemory`); placed in `The Outer Rim`.
- Script `SW_ExpAstStemScript`. attached to Activator Asteriod (`SW_ExpAstStem`); placed in `The Outer Rim`.
- Script `SW_ExpKeyChestScript`. attached to Container Ancient Chest (`SW_ExpAncientChest`); placed in `Kashyyk, Beast Cave`.
- Script `SW_ExpKeyScript`. attached to MiscItem Ancient Key (`SW_ExpStarKey`).
- Script `SW_ExpTombScript`. attached to Activator Tomb Pillar (`SW_ExpTombPillar`); placed in `Gamorr, Watery Tomb`, `Tatooine, Watery Tomb`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: The head navigator for the perl gang believes that an ancient star map they built their hideout around holds t…
- [ ] Reach index `10`: I have found two watery tombs on Gamorr and Tatooine that together hold another coordinate. I should bring thi…
- [ ] Reach index `15`: I've spoken with my head navigator regarding the star map. The coordinates point to Kashyyk, where he believes…
- [ ] Reach index `20`: I've found what may be the star map key within the shadowlands of Kashyyk. I should return to the head navigat…
- [ ] Reach index `25`: The key from the shadowlands opened some sort of portal in the perl gang's hideout using the star map.
- [ ] Reach index `30`: The star map portal leads to Lok's planet core, which has an ancient structure inside. This must be where Lok'…
- [ ] Reach index `35`: The malfunctioning tech of a long dead cyborg holds the final mystery of Lok's treasure. The cyborg's augmenta…
- [ ] Reach index `40`: I have retrieved the memory core, access archive, and stem connector. I should return to Lok's planet core and…
- [ ] Reach index `45`: The remains of the cyborg have opened another portal. Inside must be the treasure.
- [ ] Reach index `50`: Upon entering the true core of the planet, the cyborg began a failsafe protocol and the treasure sank into the…
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_ExpStarJourn`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
