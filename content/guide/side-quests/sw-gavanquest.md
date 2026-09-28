---
title: "The Lost Hunter"
description: "Walkthrough and QA reference for The Lost Hunter (SW_GavanQuest)."
weight: 96
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_GavanQuest"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_GavanQuest` |
| **Category** | Side Quests |
| **Journal entries** | 6 |
| **Completion branches** | 3 |
| **Starts by** | Speak with **Gavan Dakrih** in **Tatooine**. |
| **Key locations** | Kashyyk, Boyle Research Facility, Kashyyk, Czerka Office, Manaan, Cantina, Manaan, Ignatious' Reef, Manaan, Submersible Docking Bay, Tatooine … |
| **Key characters** | Gavan Dakrih, Gavan Dakrih, Gavan Dakrih, Gavan Dakrih |

## Walkthrough

### 1. Speak with Gavan Dakrih in Tatooine

Speak with **Gavan Dakrih** in **Tatooine**.

> **Expected journal update — index 5:** I met a hunter named Gavan in the deserts of Tatooine, he was surrounded by the corpses of Tusken Raiders and looked to be lost and frightened. He asked me if I knew the way back to Sandriver and added that he would pay me to escort him to safety. Should I really be bothered to assist someone who clearly brought this misfortune upon themselves by not preparing properly?

### 2. Speak with Gavan Dakrih in Tatooine and ask about help — Finished

Speak with **Gavan Dakrih** in **Tatooine** and ask about **help**.

> **Expected journal update — index 10:** I decided not to help Gavan. It's not my problem he didn't prepare properly for the deserts of Tatooine.

**Outcome:** this journal entry is marked as a finished branch.

### 3. Speak with Gavan Dakrih in Tatooine and ask about help

Speak with **Gavan Dakrih** in **Tatooine** and ask about **help**.

> **Expected journal update — index 15:** I felt a small amount of pity for Gavan so I agreed to take him back to Sandriver. The reward better be worth the trouble, though.

### 4. Speak with Gavan Dakrih and ask about help — Finished

The records expose more than one way to reach this journal update:
- Speak with **Gavan Dakrih** and ask about **help**.
- Speak with **Gavan Dakrih** in **Tatooine**.

> **Expected journal update — index 20:** After escorting Gavan to Sandriver, he gave me his unique looking blaster rifle and a small purse of credits. He seemed to be member of the Hunter's Federation, so I can expect to be a little bit more welcomed by members of the Hunter's Federation.

**Known item transfer:** 1 × **Serennian Civil Rifle** (`SW_BlasterRifleGavan`), 125 × **Credits** (`Gold_001`).

**Outcome:** this journal entry is marked as a finished branch.

### 5. Defeat Gavas Drin and allow its script to update the quest — Finished

The records expose more than one way to reach this journal update:
- Defeat **Gavas Drin** and allow its script to update the quest.
- Allow the scripted event handled by `OnDeath` to complete.
- Defeat **Gavan Dakrih** in **Tatooine** and allow its script to update the quest.

> **Expected journal update — index 25:** Gavan died while in my company.

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has **3 explicit finished entries**. Treat them as branch coverage targets during playtesting:

- **Index 10:** I decided not to help Gavan. It's not my problem he didn't prepare properly for the deserts of Tatooine.
- **Index 20:** After escorting Gavan to Sandriver, he gave me his unique looking blaster rifle and a small purse of credits. He seemed to be member of the Hunter's Federation, so I can expect to be a little bit more welcomed by members of the Hunter's Federation.
- **Index 25:** Gavan died while in my company.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 1 × **Serennian Civil Rifle** (`SW_BlasterRifleGavan`)
- 125 × **Credits** (`Gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Gavan Dakrih** (`KashyyykGavan`) — `Kashyyk, Boyle Research Facility`
- **Gavan Dakrih** (`ManaanGavan`) — `Manaan, Ignatious' Reef`
- **Gavan Dakrih** (`TatooineGavan`)
- **Gavan Dakrih** (`TatooineGavanD`) — `Tatooine`

**Locations implicated by actor/object placement or explicit travel:**
- **Kashyyk, Boyle Research Facility**
- **Kashyyk, Czerka Office**
- **Manaan, Cantina**
- **Manaan, Ignatious' Reef**
- **Manaan, Submersible Docking Bay**
- **Tatooine**
- **Tatooine, Sandriver**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_GavanQuest`
**Generated category:** Side Quests
**Journal entries:** 6

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | I met a hunter named Gavan in the deserts of Tatooine, he was surrounded by the corpses of Tusken Raiders and looked to be lost and frightened. He asked me if I knew the way back to Sandriver and added that he would pay me to escort him to safety. Should I really be bothered to assist someone who clearly brought this misfortune upon themselves by not preparing properly? | 1 |
| 10 | Finished | I decided not to help Gavan. It's not my problem he didn't prepare properly for the deserts of Tatooine. | 1 |
| 15 | — | I felt a small amount of pity for Gavan so I agreed to take him back to Sandriver. The reward better be worth the trouble, though. | 1 |
| 20 | Finished | After escorting Gavan to Sandriver, he gave me his unique looking blaster rifle and a small purse of credits. He seemed to be member of the Hunter's Federation, so I can expect to be a little bit more welcomed by members of the Hunter's Federation. | 2 |
| 25 | Finished | Gavan died while in my company. | 3 |

### Record-level trigger map

### Stage 5

I met a hunter named Gavan in the deserts of Tatooine, he was surrounded by the corpses of Tusken Raiders and looked to be lost and frightened. He asked me if I knew the way back to Sandriver and added that he would pay me to escort him to safety. Should I really be bothered to assist someone who clearly brought this misfortune upon themselves by not preparing properly?

**How this stage is set:**
- Dialogue INFO `7893192151414831097` under topic **Greeting 5**; speaker Gavan Dakrih (`TatooineGavanD`). locations: `Tatooine`. conditions: Journal `SW_GavanQuest` Equal 0. response: “Oh my, you.... You scared me, friend. I haven't seen a friendly face in this desert since Sandriver.... Damn this heat, and damn this place! Listen, friend, I need some help. Desperately.... Please, could you show me some kindness?”.

```text
Journal, "SW_GavanQuest", 5
Playsound3D "SW_GavanGreet1"
Stopsound "SW_GavanGreet2"
```

### Stage 10 — Finished

I decided not to help Gavan. It's not my problem he didn't prepare properly for the deserts of Tatooine.

**How this stage is set:**
- Dialogue INFO `2095143471226523496` under topic **help**; speaker Gavan Dakrih (`TatooineGavanD`). locations: `Tatooine`. conditions: Function/Choice Equal 2. response: “I see... Well... I suppose with that attitude I wouldn't want you to be my guide anyways. I'll find my way back to Sandriver myself, don't you worry. Please, leave me alone.”.

```text
Moddisposition, -20
Journal, "SW_GavanQuest", 10
StopSound "SW_GavanSerenno"
Goodbye
```

### Stage 15

I felt a small amount of pity for Gavan so I agreed to take him back to Sandriver. The reward better be worth the trouble, though.

**How this stage is set:**
- Dialogue INFO `200422343231351509` under topic **help**; speaker Gavan Dakrih (`TatooineGavanD`). locations: `Tatooine`. conditions: Function/Choice Equal 1. response: “You'll... You'll help me? Really? I thought I was gonna die in this nightmare of a desert, thank goodness! I need to get to Sandriver however possible! I'll give you credits AND my blaster if I make it there alive. Just talk to me again when we've reached Sandriver and you'll be rewarded properly. Now, please, let us move before the Sand People catch wind of us.”.

```text
AIFollow, Player, "Tatooine, Sandriver", 0, 0, 0, 0
Journal, "SW_GavanQuest", 15
Stopsound "SW_GavanGreet1"
StopSound "SW_GavanSerenno"
```

### Stage 20 — Finished

After escorting Gavan to Sandriver, he gave me his unique looking blaster rifle and a small purse of credits. He seemed to be member of the Hunter's Federation, so I can expect to be a little bit more welcomed by members of the Hunter's Federation.

**How this stage is set:**
- Dialogue INFO `2702030785748324094` under topic **help**; speaker Gavan Dakrih (`TatooineGavan`). cell constraint `Tatooine, Sandriver`. conditions: Journal `SW_GavanQuest` Equal 15. response: “Oh, happy day! I'm saved! We're at Sandriver! Thank you, friend! Thank you so much! I'm gonna look for a way off this forsaken planet now, but I owe you something, don't I? Well here. A blaster made specially from my homeplanet of Serenno. You deserve it, my friend. Thank you for saving me.”.

```text
Player->additem, "SW_BlasterRifleGavan", 1
player->additem, "Gold_001", 125
Journal, "SW_GavanQuest", 20
ModPCFacRep 3 SW_Hunters
KashyyykGavan->Enable
```
- Dialogue INFO `3042122411132610465` under topic **Greeting 5**; speaker Gavan Dakrih (`TatooineGavanD`). locations: `Tatooine`. cell constraint `Tatooine, Sandriver`. conditions: Journal `SW_GavanQuest` Equal 15. response: “Oh, happy day! I'm saved! We're at Sandriver! Thank you, friend! Thank you so much! I'm gonna look for a way off this forsaken planet now, but I owe you something, don't I? Well here. A blaster made specially from my homeplanet of Serenno. You deserve it, my friend. Thank you for saving me.”.

```text
Player->additem "SW_BlasterRifleGavan" 1
player->additem "Gold_001" 125
Journal SW_GavanQuest 20
KashyyykGavan->Enable
player->ModReputation 1
```

### Stage 25 — Finished

Gavan died while in my company.

**How this stage is set:**
- Script `GavanScript`. attached to Npc Gavas Drin (`gavas drin`).

```text
if ( getJournalIndex "SW_GavanQuest" == 15 )
        if ( OnDeath == 1 )
            Journal "SW_GavanQuest" 25
        endif
    endif
```
- Script `OnDeath`.

```text
If ( getJournalIndex "SW_GavanQuest" == 15 )
        if ( OnDeath == 1 )
            Journal, "SW_GavanQuest", 25
        endif
    endif
```
- Script `SW_GavTuskScript`. attached to Npc Gavan Dakrih (`TatooineGavan`); Npc Gavan Dakrih (`TatooineGavanD`); placed in `Tatooine`.

```text
if ( OnDeath == 1 )
    Journal SW_GavanQuest 25
endif
```

### Related records and locations

**Dialogue speakers:**
- Gavan Dakrih (`KashyyykGavan`) — `Kashyyk, Boyle Research Facility`
- Gavan Dakrih (`ManaanGavan`) — `Manaan, Ignatious' Reef`
- Gavan Dakrih (`TatooineGavan`)
- Gavan Dakrih (`TatooineGavanD`) — `Tatooine`

**Scripts that read or write this journal:**
- `GavanKashyyykScript` — Npc Gavan Dakrih (`KashyyykGavan`); placed in `Kashyyk, Boyle Research Facility`
- `GavanManaanScript` — Npc Gavan Dakrih (`ManaanGavan`); placed in `Manaan, Ignatious' Reef`
- `GavanRelocate2ManaanScript` — Activator Gavan Dummy Mover (`SW_GavanMover3`); placed in `Manaan, Cantina`
- `GavanRelocateKashyyykScript` — Activator Gavan Dummy Mover (`SW_GavanMover`)
- `GavanRelocateManaanScript` — Activator Gavan Dummy Mover (`SW_GavanMover2`); placed in `Manaan, Ignatious' Reef`
- `GavanScript` — Npc Gavas Drin (`gavas drin`)
- `OnDeath`
- `SW_GavTuskScript` — Npc Gavan Dakrih (`TatooineGavan`); Npc Gavan Dakrih (`TatooineGavanD`); placed in `Tatooine`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)
- Credits (`Gold_001`)
- Serennian Civil Rifle (`SW_BlasterRifleGavan`)
- Breath Mask (`SW_GMask1`)
- Liphoformian Adapted Spear (`SW_LiphoSpear`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Kashyyk, Boyle Research Facility`
- `Kashyyk, Czerka Office`
- `Manaan, Cantina`
- `Manaan, Ignatious' Reef`
- `Manaan, Submersible Docking Bay`
- `Tatooine`
- `Tatooine, Sandriver`

<details><summary>Journal-state readers (7 code sites)</summary>

- Script `GavanKashyyykScript`. attached to Npc Gavan Dakrih (`KashyyykGavan`); placed in `Kashyyk, Boyle Research Facility`.
- Script `GavanManaanScript`. attached to Npc Gavan Dakrih (`ManaanGavan`); placed in `Manaan, Ignatious' Reef`.
- Script `GavanRelocate2ManaanScript`. attached to Activator Gavan Dummy Mover (`SW_GavanMover3`); placed in `Manaan, Cantina`.
- Script `GavanRelocateKashyyykScript`. attached to Activator Gavan Dummy Mover (`SW_GavanMover`).
- Script `GavanRelocateManaanScript`. attached to Activator Gavan Dummy Mover (`SW_GavanMover2`); placed in `Manaan, Ignatious' Reef`.
- Script `GavanScript`. attached to Npc Gavas Drin (`gavas drin`).
- Script `OnDeath`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: I met a hunter named Gavan in the deserts of Tatooine, he was surrounded by the corpses of Tusken Raiders and …
- [ ] Reach index `10` (`Finished`): I decided not to help Gavan. It's not my problem he didn't prepare properly for the deserts of Tatooine.
- [ ] Reach index `15`: I felt a small amount of pity for Gavan so I agreed to take him back to Sandriver. The reward better be worth …
- [ ] Reach index `20` (`Finished`): After escorting Gavan to Sandriver, he gave me his unique looking blaster rifle and a small purse of credits. …
- [ ] Reach index `25` (`Finished`): Gavan died while in my company.
- [ ] Branch coverage: this journal has **3 different `Finished` entries**; test each reachable completion branch.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_GavanQuest`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
