---
title: "Bartending Apprentice"
description: "Walkthrough and QA reference for Bartending Apprentice (SW_Bartending)."
weight: 16
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_Bartending"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_Bartending` |
| **Category** | Side Quests |
| **Journal entries** | 10 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Simon Watts** in **Manaan, Cantina** and ask about **bartending**. |
| **Key locations** | Manaan, Cantina |
| **Key characters** | Simon Watts |

## Walkthrough

### 1. Speak with Simon Watts in Manaan, Cantina and ask about bartending

Speak with **Simon Watts** in **Manaan, Cantina** and ask about **bartending**.

> **Expected journal update — index 1:** Simon Watts has offered to apprentice me in bartending. He wants me to create a drink that will aid in the restoration of fatigue in someone exercising. He has requested that I gather some Cactus Pitaya that are commonly found on Tatooine and a Fern Leaf commonly found on Dantooine. I should then add them to the Still Module next to him and activate it in order to create the Refreshing Booze.

### 2. Interact with Still Module 450 in Manaan, Cantina

Interact with **Still Module 450** in **Manaan, Cantina**.

> **Expected journal update — index 5:** I have made the Refreshing Booze and should show it to Simon Watts.

### 3. Speak with Simon Watts in Manaan, Cantina and ask about bartending

Speak with **Simon Watts** in **Manaan, Cantina** and ask about **bartending**.

> **Expected journal update — index 10:** Simon Watts wants me to create a drink that can aid in the healing process. He has asked me to gather some Unprocessed Kolto and Manta Stinger's which can both be found in Melchior's Reef. I should then add them to the Still Module next to him and activate it in order to create the Medicinal Booze.

**Known item transfer:** 200 × **Credits** (`Gold_001`).

### 4. Interact with Still Module 450 in Manaan, Cantina

Interact with **Still Module 450** in **Manaan, Cantina**.

> **Expected journal update — index 15:** I have made the Medicinal Booze and should show it to Simon Watts.

### 5. Speak with Simon Watts in Manaan, Cantina and ask about bartending

Speak with **Simon Watts** in **Manaan, Cantina** and ask about **bartending**.

> **Expected journal update — index 20:** Simon Watts wants me to create a drink that can cure common diseases. He has asked me to gather a Black Melon and Wyyyschokk Eggs. I should then add them to the Still Module next to him and activate it in order to create the Curing Booze.

**Known item transfer:** 400 × **Credits** (`Gold_001`).

### 6. Interact with Still Module 450 in Manaan, Cantina

Interact with **Still Module 450** in **Manaan, Cantina**.

> **Expected journal update — index 25:** I have made the Curing Booze and should show it to Simon Watts.

### 7. Speak with Simon Watts in Manaan, Cantina and ask about bartending

Speak with **Simon Watts** in **Manaan, Cantina** and ask about **bartending**.

> **Expected journal update — index 30:** Simon Watts wants me to create a drink that can aid force users. He has asked me to gather a Can-Cell eye and some Durelium. I should then add them to the Still Module next to him and activate it in order to create the Sensitivity Booze.

### 8. Interact with Still Module 450 in Manaan, Cantina

Interact with **Still Module 450** in **Manaan, Cantina**.

> **Expected journal update — index 35:** I have made the Sensitivity Booze and should show it to Simon Watts.

### 9. Speak with Simon Watts in Manaan, Cantina and ask about bartending — Finished

Speak with **Simon Watts** in **Manaan, Cantina** and ask about **bartending**.

> **Expected journal update — index 40:** Simon Watts has congragulated me as an official Bartender within the Galactic Bartender's Guild. I have been awarded with my own set of bartending equipment and can even open my own cantina by talking to Simon Watts if I own my own ship.

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 40**:

> Simon Watts has congragulated me as an official Bartender within the Galactic Bartender's Guild. I have been awarded with my own set of bartending equipment and can even open my own cantina by talking to Simon Watts if I own my own ship.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 200 × **Credits** (`Gold_001`)
- 400 × **Credits** (`Gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Simon Watts** (`SW_BartenderManaan`) — `Manaan, Cantina`

**Locations implicated by actor/object placement or explicit travel:**
- **Manaan, Cantina**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_Bartending`
**Generated category:** Side Quests
**Journal entries:** 10

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 1 | — | Simon Watts has offered to apprentice me in bartending. He wants me to create a drink that will aid in the restoration of fatigue in someone exercising. He has requested that I gather some Cactus Pitaya that are commonly found on Tatooine and a Fern Leaf commonly found on Dantooine. I should then add them to the Still Module next to him and activate it in order to create the Refreshing Booze. | 1 |
| 5 | — | I have made the Refreshing Booze and should show it to Simon Watts. | 1 |
| 10 | — | Simon Watts wants me to create a drink that can aid in the healing process. He has asked me to gather some Unprocessed Kolto and Manta Stinger's which can both be found in Melchior's Reef. I should then add them to the Still Module next to him and activate it in order to create the Medicinal Booze. | 1 |
| 15 | — | I have made the Medicinal Booze and should show it to Simon Watts. | 1 |
| 20 | — | Simon Watts wants me to create a drink that can cure common diseases. He has asked me to gather a Black Melon and Wyyyschokk Eggs. I should then add them to the Still Module next to him and activate it in order to create the Curing Booze. | 1 |
| 25 | — | I have made the Curing Booze and should show it to Simon Watts. | 1 |
| 30 | — | Simon Watts wants me to create a drink that can aid force users. He has asked me to gather a Can-Cell eye and some Durelium. I should then add them to the Still Module next to him and activate it in order to create the Sensitivity Booze. | 1 |
| 35 | — | I have made the Sensitivity Booze and should show it to Simon Watts. | 1 |
| 40 | Finished | Simon Watts has congragulated me as an official Bartender within the Galactic Bartender's Guild. I have been awarded with my own set of bartending equipment and can even open my own cantina by talking to Simon Watts if I own my own ship. | 1 |

### Record-level trigger map

### Stage 1

Simon Watts has offered to apprentice me in bartending. He wants me to create a drink that will aid in the restoration of fatigue in someone exercising. He has requested that I gather some Cactus Pitaya that are commonly found on Tatooine and a Fern Leaf commonly found on Dantooine. I should then add them to the Still Module next to him and activate it in order to create the Refreshing Booze.

**How this stage is set:**
- Dialogue INFO `2844446461157431091` under topic **bartending**; speaker Simon Watts (`SW_BartenderManaan`). locations: `Manaan, Cantina`. conditions: Journal `SW_Bartending` Equal 0. response: “I'm looking for an apprentice to both teach the ways of bartending and help me with my work here. If you're interested no need to apply simply return to me one Cactus Pitaya and a Fern Leaf and mix them in the still module there. It will make a Refreshing Booze that will aid in recovering fatigue. Cactus Pitaya can be found on Tatooine and Fern Leafs on Dantooine. You'll be both paid and be given bartending lessons.”.

```text
Journal SW_Bartending 1
```

### Stage 5

I have made the Refreshing Booze and should show it to Simon Watts.

**How this stage is set:**
- Script `SW_ContainingBartending`. attached to Container Still Module 450 (`SW_BartendingContainer`); placed in `Manaan, Cantina`.

```text
removeitem SW_CactIng 1
                removeitem SW_FernLeaf 1
                Journal SW_Bartending 5
                PlaySound "potion success"
            Else
```

```text
removeitem SW_KoltoIngred 1
                removeitem SW_MantaSting 1
                Journal SW_Bartending 15
                PlaySound "potion success"
            Else
```

```text
removeitem SW_BlackMelon 1
                removeitem SW_WyyyschokkEggs 1
                Journal SW_Bartending 25
                PlaySound "potion success"
            Else
```

### Stage 10

Simon Watts wants me to create a drink that can aid in the healing process. He has asked me to gather some Unprocessed Kolto and Manta Stinger's which can both be found in Melchior's Reef. I should then add them to the Still Module next to him and activate it in order to create the Medicinal Booze.

**How this stage is set:**
- Dialogue INFO `32018208201433920375` under topic **bartending**; speaker Simon Watts (`SW_BartenderManaan`). locations: `Manaan, Cantina`. conditions: Journal `SW_Bartending` Equal 5; Item/ItemType `SW_BoozeFatigueQuest` GreaterEqual 1. response: “Very good, very good. Look, I'll show you something. Take this fruit and squeeze it into here, yes, now pour about this much into, yes, very good, now mix these two. Bam! You're learning already! Now you're going to make a drink that aids in the healing process. This time in the still module, mix one unprocessed kolto and a manta stinger. They can both be found in Melchior's Reef.”.

```text
Journal SW_Bartending 10
player->removeitem "SW_BoozeFatigueQuest", 1
player->additem "Gold_001", 200
```

### Stage 15

I have made the Medicinal Booze and should show it to Simon Watts.

**How this stage is set:**
- Script `SW_ContainingBartending`. attached to Container Still Module 450 (`SW_BartendingContainer`); placed in `Manaan, Cantina`.

```text
removeitem SW_CactIng 1
                removeitem SW_FernLeaf 1
                Journal SW_Bartending 5
                PlaySound "potion success"
            Else
```

```text
removeitem SW_KoltoIngred 1
                removeitem SW_MantaSting 1
                Journal SW_Bartending 15
                PlaySound "potion success"
            Else
```

```text
removeitem SW_BlackMelon 1
                removeitem SW_WyyyschokkEggs 1
                Journal SW_Bartending 25
                PlaySound "potion success"
            Else
```

### Stage 20

Simon Watts wants me to create a drink that can cure common diseases. He has asked me to gather a Black Melon and Wyyyschokk Eggs. I should then add them to the Still Module next to him and activate it in order to create the Curing Booze.

**How this stage is set:**
- Dialogue INFO `911014485146861143` under topic **bartending**; speaker Simon Watts (`SW_BartenderManaan`). locations: `Manaan, Cantina`. conditions: Journal `SW_Bartending` Equal 15; Item/ItemType `SW_BoozeMedicine` GreaterEqual 1. response: “Ah perfect! First, look, just take the ingredients, yes put them in here, that button there. Does all the work for you doesn't it? Now just mix these two and then mix all of it together. Perfect! Right... Let's make a drink that can cure diseases. You'll have to head to Tatooine again, and this time Kashyyk. A black melon and some wyyyschokk eggs will do.”.

```text
Journal SW_Bartending 20
player->removeitem "SW_BoozeMedicine" 1
player->additem "Gold_001", 400
```

### Stage 25

I have made the Curing Booze and should show it to Simon Watts.

**How this stage is set:**
- Script `SW_ContainingBartending`. attached to Container Still Module 450 (`SW_BartendingContainer`); placed in `Manaan, Cantina`.

```text
removeitem SW_CactIng 1
                removeitem SW_FernLeaf 1
                Journal SW_Bartending 5
                PlaySound "potion success"
            Else
```

```text
removeitem SW_KoltoIngred 1
                removeitem SW_MantaSting 1
                Journal SW_Bartending 15
                PlaySound "potion success"
            Else
```

```text
removeitem SW_BlackMelon 1
                removeitem SW_WyyyschokkEggs 1
                Journal SW_Bartending 25
                PlaySound "potion success"
            Else
```

### Stage 30

Simon Watts wants me to create a drink that can aid force users. He has asked me to gather a Can-Cell eye and some Durelium. I should then add them to the Still Module next to him and activate it in order to create the Sensitivity Booze.

**How this stage is set:**
- Dialogue INFO `2188020800168598529` under topic **bartending**; speaker Simon Watts (`SW_BartenderManaan`). locations: `Manaan, Cantina`. conditions: Journal `SW_Bartending` Equal 25; Item/ItemType `SW_BoozeCuringQuest` GreaterEqual 1. response: “Perfect. I'm going to teach you a bartending secret; just move your hand like this, yes, now flip it. Done, easy as that. In order to become an official bartender within our guild. You have to be able to make a drink that boosts the sensitivity of force users, many bartenders outside of our guild say it is impossible. You will need a can-cell eye and some raw durelium.”.

```text
Journal SW_Bartending 30
player->removeitem "SW_BoozeCuringQuest" 1
player->modalchemy 5
```

### Stage 35

I have made the Sensitivity Booze and should show it to Simon Watts.

**How this stage is set:**
- Script `SW_ContainingBartending`. attached to Container Still Module 450 (`SW_BartendingContainer`); placed in `Manaan, Cantina`.

```text
removeitem SW_CactIng 1
                removeitem SW_FernLeaf 1
                Journal SW_Bartending 5
                PlaySound "potion success"
            Else
```

```text
removeitem SW_KoltoIngred 1
                removeitem SW_MantaSting 1
                Journal SW_Bartending 15
                PlaySound "potion success"
            Else
```

```text
removeitem SW_BlackMelon 1
                removeitem SW_WyyyschokkEggs 1
                Journal SW_Bartending 25
                PlaySound "potion success"
            Else
```

### Stage 40 — Finished

Simon Watts has congragulated me as an official Bartender within the Galactic Bartender's Guild. I have been awarded with my own set of bartending equipment and can even open my own cantina by talking to Simon Watts if I own my own ship.

**How this stage is set:**
- Dialogue INFO `23420126452119216565` under topic **bartending**; speaker Simon Watts (`SW_BartenderManaan`). locations: `Manaan, Cantina`. conditions: Journal `SW_Bartending` Equal 35; Item/ItemType `SW_BoozeSensitiveQuest` GreaterEqual 1. response: “Congratulations apprentice, you are officially a bartender and a member of the Galactic Bartender's Guild. Here's your own set of trade tools, now go open up a cantina somewhere.”.

```text
Journal SW_Bartending 40
player->removeitem "SW_BoozeSensitiveQuest" 1
player->modalchemy 5
```

### Related records and locations

**Dialogue speakers:**
- Simon Watts (`SW_BartenderManaan`) — `Manaan, Cantina`

**Scripts that read or write this journal:**
- `SW_ContainingBartending` — Container Still Module 450 (`SW_BartendingContainer`); placed in `Manaan, Cantina`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)
- Still Module 500 (`SW_Alembic2`)
- Black Melon (`SW_BlackMelon`)
- Curing Booze (`SW_BoozeCuringQuest`)
- Refreshing Booze (`SW_BoozeFatigueQuest`)
- Medicinal Booze (`SW_BoozeMedicine`)
- Sensitivity Booze (`SW_BoozeSensitiveQuest`)
- Cactus Pitaya (`SW_CactIng`)
- Thermal Decompository (`SW_Calcinator2`)
- Can-Cell Eye (`SW_CanCellIngred`)
- Durelium (`SW_DurItem`)
- Fern Leaf (`SW_FernLeaf`)
- Unprocessed Kolto (`SW_KoltoIngred`)
- Manta's Stinger (`SW_MantaSting`)
- Czerka Grinder 2.5 (`SW_Mortar2`)
- Wyyyschokk Eggs (`SW_WyyyschokkEggs`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Manaan, Cantina`

<details><summary>Journal-state readers (1 code sites)</summary>

- Script `SW_ContainingBartending`. attached to Container Still Module 450 (`SW_BartendingContainer`); placed in `Manaan, Cantina`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `1` is obtainable.
- [ ] Reach index `1`: Simon Watts has offered to apprentice me in bartending. He wants me to create a drink that will aid in the res…
- [ ] Reach index `5`: I have made the Refreshing Booze and should show it to Simon Watts.
- [ ] Reach index `10`: Simon Watts wants me to create a drink that can aid in the healing process. He has asked me to gather some Unp…
- [ ] Reach index `15`: I have made the Medicinal Booze and should show it to Simon Watts.
- [ ] Reach index `20`: Simon Watts wants me to create a drink that can cure common diseases. He has asked me to gather a Black Melon …
- [ ] Reach index `25`: I have made the Curing Booze and should show it to Simon Watts.
- [ ] Reach index `30`: Simon Watts wants me to create a drink that can aid force users. He has asked me to gather a Can-Cell eye and …
- [ ] Reach index `35`: I have made the Sensitivity Booze and should show it to Simon Watts.
- [ ] Reach index `40` (`Finished`): Simon Watts has congragulated me as an official Bartender within the Galactic Bartender's Guild. I have been a…
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_Bartending`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
