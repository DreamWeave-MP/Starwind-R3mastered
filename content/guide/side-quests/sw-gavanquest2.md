---
title: "The Lost Hunter II"
description: "Walkthrough and QA reference for The Lost Hunter II (SW_GavanQuest2)."
weight: 97
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_GavanQuest2"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_GavanQuest2` |
| **Category** | Side Quests |
| **Journal entries** | 6 |
| **Completion branches** | 2 |
| **Starts by** | Speak with **Gavan Dakrih** in **Kashyyk, Boyle Research Facility**. |
| **Key locations** | Kashyyk, Boyle Research Facility, Kashyyk, Czerka Office, Manaan, Ignatious' Reef |
| **Key characters** | Gavan Dakrih |

## Walkthrough

### 1. Speak with Gavan Dakrih in Kashyyk, Boyle Research Facility

Speak with **Gavan Dakrih** in **Kashyyk, Boyle Research Facility**.

> **Expected journal update — index 5:** Seems my adventurers in the galaxy has common bedfellows. I met Gavan Dakrih again - the hunter who was lost on Tatooine - but this time on the planet Kashyyyk. As misfortune would have it, he's lost yet again. Silly fool...

### 2. Speak with Gavan Dakrih in Kashyyk, Boyle Research Facility and ask about lost

Speak with **Gavan Dakrih** in **Kashyyk, Boyle Research Facility** and ask about **lost**.

> **Expected journal update — index 10:** I took further pity on the hapless Gavan Dakrih, and have agreed to lead him to safety. He needs to get to the Czerka Office on Kashyyyk, where he'll be able to gather his bearings and, hopefully, learn land navigation.

### 3. Defeat Gavan Dakrih in Kashyyk, Boyle Research Facility and allow its script to update the quest

Defeat **Gavan Dakrih** in **Kashyyk, Boyle Research Facility** and allow its script to update the quest.

> **Expected journal update — index 15:** We're at the Czerka Office. Gavan should speak with me.

### 4. Speak with Gavan Dakrih in Kashyyk, Boyle Research Facility and ask about lost — Finished

Speak with **Gavan Dakrih** in **Kashyyk, Boyle Research Facility** and ask about **lost**.

> **Expected journal update — index 20:** Gavan, overjoyed that he had been saved from wilds of Kashyyyk, thanks me for saving him and rewarded me with a decent increase to my credit account before wandering off. I hope this is the last time I have to deal with him...

**Outcome:** this journal entry is marked as a finished branch.

### 5. Defeat Gavan Dakrih in Kashyyk, Boyle Research Facility and allow its script to update the quest — Finished

Defeat **Gavan Dakrih** in **Kashyyk, Boyle Research Facility** and allow its script to update the quest.

> **Expected journal update — index 25:** Gavan died in my company.

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has **2 explicit finished entries**. Treat them as branch coverage targets during playtesting:

- **Index 20:** Gavan, overjoyed that he had been saved from wilds of Kashyyyk, thanks me for saving him and rewarded me with a decent increase to my credit account before wandering off. I hope this is the last time I have to deal with him...
- **Index 25:** Gavan died in my company.

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Gavan Dakrih** (`KashyyykGavan`) — `Kashyyk, Boyle Research Facility`

**Locations implicated by actor/object placement or explicit travel:**
- **Kashyyk, Boyle Research Facility**
- **Kashyyk, Czerka Office**
- **Manaan, Ignatious' Reef**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_GavanQuest2`
**Generated category:** Side Quests
**Journal entries:** 6

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | Seems my adventurers in the galaxy has common bedfellows. I met Gavan Dakrih again - the hunter who was lost on Tatooine - but this time on the planet Kashyyyk. As misfortune would have it, he's lost yet again. Silly fool... | 1 |
| 10 | — | I took further pity on the hapless Gavan Dakrih, and have agreed to lead him to safety. He needs to get to the Czerka Office on Kashyyyk, where he'll be able to gather his bearings and, hopefully, learn land navigation. | 1 |
| 15 | — | We're at the Czerka Office. Gavan should speak with me. | 1 |
| 20 | Finished | Gavan, overjoyed that he had been saved from wilds of Kashyyyk, thanks me for saving him and rewarded me with a decent increase to my credit account before wandering off. I hope this is the last time I have to deal with him... | 1 |
| 25 | Finished | Gavan died in my company. | 1 |

### Record-level trigger map

### Stage 5

Seems my adventurers in the galaxy has common bedfellows. I met Gavan Dakrih again - the hunter who was lost on Tatooine - but this time on the planet Kashyyyk. As misfortune would have it, he's lost yet again. Silly fool...

**How this stage is set:**
- Dialogue INFO `10292241021078228497` under topic **Greeting 5**; speaker Gavan Dakrih (`KashyyykGavan`). locations: `Kashyyk, Boyle Research Facility`. conditions: Function/TalkedToPc Equal 0; Journal `SW_GavanQuest2` Less 5. response: “H-huh? No way! It's you! Hey! R-remember me? It's Gavan! Gavan Dakrih! From Tatooine? You got me to safety! How are you doing, friend? I hope all is well, because I'm in a bit of a pickle myself... I'm a little lost at the moment.”.

```text
TatooineGavan->Disable
Journal, SW_GavanQuest2, 5
```

### Stage 10

I took further pity on the hapless Gavan Dakrih, and have agreed to lead him to safety. He needs to get to the Czerka Office on Kashyyyk, where he'll be able to gather his bearings and, hopefully, learn land navigation.

**How this stage is set:**
- Dialogue INFO `2414424749206874514` under topic **lost**; speaker Gavan Dakrih (`KashyyykGavan`). locations: `Kashyyk, Boyle Research Facility`. conditions: Function/Choice Equal 4. response: “Oh! Happy day! Alright, I'll follow you then! Don't worry, I acquired some armor since our last encounter so I should be of better assistance now! Lead me to the Czerka Office. Once we're there, I'll speak with you again. Lead on, friend!”.

```text
moddisposition, 30
Journal, SW_GavanQuest2, 10
AIFollow, Player, 0, 0, 0, 0
```

### Stage 15

We're at the Czerka Office. Gavan should speak with me.

**How this stage is set:**
- Script `GavanKashyyykScript`. attached to Npc Gavan Dakrih (`KashyyykGavan`); placed in `Kashyyk, Boyle Research Facility`.

```text
if (GetJournalIndex, "SW_GavanQuest2" == 10)
    If (OnDeath == 1)
        Journal, SW_GavanQuest2, 25
    endif
endif
```

```text
If (GetDistance SW_CzerkaOfficeGuyKash <= 1000)
    if (DoThrice == 1)
        journal, SW_GavanQuest2, 15
        forcegreeting
        set DoTwice to 3
```

### Stage 20 — Finished

Gavan, overjoyed that he had been saved from wilds of Kashyyyk, thanks me for saving him and rewarded me with a decent increase to my credit account before wandering off. I hope this is the last time I have to deal with him...

**How this stage is set:**
- Dialogue INFO `96713268590376773` under topic **lost**; speaker Gavan Dakrih (`KashyyykGavan`). locations: `Kashyyk, Boyle Research Facility`. cell constraint `Kashyyk, Czerka Office`. conditions: Journal `SW_GavanQuest2` Equal 10. response: “Hey! We're here! Amazing! You truly are a lifesaver, friend! Truly, truly, truly, truly! Well, a deal is a deal. Here. Some credits I saved up from some hides I pawned before coming here. You deserve them more than me! Take them! Now, I need to gather my bearings. Maybe well see each other around sometime. Goodbye for now!”.

```text
Moddisposition, 50
AIWander, 200, 0, 0, 20, 20, 20, 20, 0, 0, 0, 20, 0
Journal, SW_GavanQuest2, 20
ModPCFacRep 1 "SW_Hunters"
player->modreputation 1
```

### Stage 25 — Finished

Gavan died in my company.

**How this stage is set:**
- Script `GavanKashyyykScript`. attached to Npc Gavan Dakrih (`KashyyykGavan`); placed in `Kashyyk, Boyle Research Facility`.

```text
if (GetJournalIndex, "SW_GavanQuest2" == 10)
    If (OnDeath == 1)
        Journal, SW_GavanQuest2, 25
    endif
endif
```

```text
If (GetDistance SW_CzerkaOfficeGuyKash <= 1000)
    if (DoThrice == 1)
        journal, SW_GavanQuest2, 15
        forcegreeting
        set DoTwice to 3
```

### Related records and locations

**Dialogue speakers:**
- Gavan Dakrih (`KashyyykGavan`) — `Kashyyk, Boyle Research Facility`

**Scripts that read or write this journal:**
- `GavanKashyyykScript` — Npc Gavan Dakrih (`KashyyykGavan`); placed in `Kashyyk, Boyle Research Facility`
- `GavanManaanScript` — Npc Gavan Dakrih (`ManaanGavan`); placed in `Manaan, Ignatious' Reef`
- `GavanRelocateManaanScript` — Activator Gavan Dummy Mover (`SW_GavanMover2`); placed in `Manaan, Ignatious' Reef`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Kashyyk, Boyle Research Facility`
- `Kashyyk, Czerka Office`
- `Manaan, Ignatious' Reef`

<details><summary>Journal-state readers (3 code sites)</summary>

- Script `GavanKashyyykScript`. attached to Npc Gavan Dakrih (`KashyyykGavan`); placed in `Kashyyk, Boyle Research Facility`.
- Script `GavanManaanScript`. attached to Npc Gavan Dakrih (`ManaanGavan`); placed in `Manaan, Ignatious' Reef`.
- Script `GavanRelocateManaanScript`. attached to Activator Gavan Dummy Mover (`SW_GavanMover2`); placed in `Manaan, Ignatious' Reef`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: Seems my adventurers in the galaxy has common bedfellows. I met Gavan Dakrih again - the hunter who was lost o…
- [ ] Reach index `10`: I took further pity on the hapless Gavan Dakrih, and have agreed to lead him to safety. He needs to get to the…
- [ ] Reach index `15`: We're at the Czerka Office. Gavan should speak with me.
- [ ] Reach index `20` (`Finished`): Gavan, overjoyed that he had been saved from wilds of Kashyyyk, thanks me for saving him and rewarded me with …
- [ ] Reach index `25` (`Finished`): Gavan died in my company.
- [ ] Branch coverage: this journal has **2 different `Finished` entries**; test each reachable completion branch.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_GavanQuest2`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
