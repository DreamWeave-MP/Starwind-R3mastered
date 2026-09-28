---
title: "The Zanotti Estate"
description: "Walkthrough and QA reference for The Zanotti Estate (SW_ZanottiJourn)."
weight: 106
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_ZanottiJourn"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_ZanottiJourn` |
| **Category** | Side Quests |
| **Journal entries** | 5 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Lateng Courte** in **Dantooine, Czerka Office** and ask about **Zanotti Estate**. |
| **Key locations** | Dantooine, Czerka Office, Dantooine, Estate Grounds, Dantooine, Zanotti Estate |
| **Key characters** | Lateng Courte, Mariano Zanotti, Estate Guard |

## Walkthrough

### 1. Speak with Lateng Courte in Dantooine, Czerka Office and ask about Zanotti Estate

Speak with **Lateng Courte** in **Dantooine, Czerka Office** and ask about **Zanotti Estate**.

> **Expected journal update — index 2:** The Zanotti Estate is North of Ballast, this is one of my best leads right now.

### 2. Speak with Estate Guard in Dantooine, Estate Grounds

Speak with **Estate Guard** in **Dantooine, Estate Grounds**.

> **Expected journal update — index 5:** I spoke to Mariano Zanotti through his sentry droid guarding his estate entrance who believes that the Mandalorians are the cause of the disappearances. If I kill the leader of the nearby Mandalorian clan then Mariano Zanotti will allow me complete access to

### 3. Defeat Mandalorian Leader in Dantooine, Estate Grounds and allow its script to update the quest

Defeat **Mandalorian Leader** in **Dantooine, Estate Grounds** and allow its script to update the quest.

> **Expected journal update — index 10:** I have killed the Mandalorian clan leader, I should return to the Zanotti Estate now to investigate the structure.

### 4. Use Born a jedi — Finished

The records expose more than one way to reach this journal update:
- Use **Born a jedi**.
- Speak with **Mariano Zanotti** in **Dantooine, Zanotti Estate**.

> **Expected journal update — index 15:** Mariano Zanotti and I have met in person, he has unlocked all the doors in his home and has told me that recently Martin Lucienelle and Antoine Jitaii have met in secret, which is the first time that the Zanotti Estate has not been invited to a meeting. He suspects the Jitaii Estate would be the next easiest place to search for clues, and will allow me to come back and search his estate throughout the investigation to prove he has no part in it.

**Known item transfer:** 1 × **Key to the Jitaii Estate** (`SW_JitaiiKey`).

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 15**:

> Mariano Zanotti and I have met in person, he has unlocked all the doors in his home and has told me that recently Martin Lucienelle and Antoine Jitaii have met in secret, which is the first time that the Zanotti Estate has not been invited to a meeting. He suspects the Jitaii Estate would be the next easiest place to search for clues, and will allow me to come back and search his estate throughout the investigation to prove he has no part in it.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 1 × **Key to the Jitaii Estate** (`SW_JitaiiKey`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Lateng Courte** (`SW_CzerkaCourte`) — `Dantooine, Czerka Office`
- **Mariano Zanotti** (`SW_Zanotti`) — `Dantooine, Zanotti Estate`
- **Estate Guard** (`SW_ZanottiDoorGuard`) — `Dantooine, Estate Grounds`

**Locations implicated by actor/object placement or explicit travel:**
- **Dantooine, Czerka Office**
- **Dantooine, Estate Grounds**
- **Dantooine, Zanotti Estate**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_ZanottiJourn`
**Generated category:** Side Quests
**Journal entries:** 5

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 2 | — | The Zanotti Estate is North of Ballast, this is one of my best leads right now. | 1 |
| 5 | — | I spoke to Mariano Zanotti through his sentry droid guarding his estate entrance who believes that the Mandalorians are the cause of the disappearances. If I kill the leader of the nearby Mandalorian clan then Mariano Zanotti will allow me complete access to | 1 |
| 10 | — | I have killed the Mandalorian clan leader, I should return to the Zanotti Estate now to investigate the structure. | 1 |
| 15 | Finished | Mariano Zanotti and I have met in person, he has unlocked all the doors in his home and has told me that recently Martin Lucienelle and Antoine Jitaii have met in secret, which is the first time that the Zanotti Estate has not been invited to a meeting. He suspects the Jitaii Estate would be the next easiest place to search for clues, and will allow me to come back and search his estate throughout the investigation to prove he has no part in it. | 2 |

### Record-level trigger map

### Stage 2

The Zanotti Estate is North of Ballast, this is one of my best leads right now.

**How this stage is set:**
- Dialogue INFO `8602324371196313678` under topic **Zanotti Estate**; speaker Lateng Courte (`SW_CzerkaCourte`). locations: `Dantooine, Czerka Office`. conditions: Journal `SW_ZanottiJourn` Less 2. response: “The Zanotti Estate is the newest estate in the area, and can be found North of Ballast. From what I've heard he's controlling, cruel to his servants, and doesn't associate outside of the elite in this area. Sounds like a classic scumbag. Security may be a little tight, but nowhere near the other estates, I'm sure you'll figure out how to get inside.”.

```text
Journal SW_ZanottiJourn 2
```

### Stage 5

I spoke to Mariano Zanotti through his sentry droid guarding his estate entrance who believes that the Mandalorians are the cause of the disappearances. If I kill the leader of the nearby Mandalorian clan then Mariano Zanotti will allow me complete access to

**How this stage is set:**
- Dialogue INFO `142416399321419544` under topic **Greeting 7**; speaker Estate Guard (`SW_ZanottiDoorGuard`). locations: `Dantooine, Estate Grounds`. conditions: Journal `SW_ZanottiJourn` Equal 2. response: “Master Zanotti is aware you would be coming for the investigation. He has instructed me to inform you that he has nothing to do with the disappearances, he believes that the Mandalorian clan that has moved into the area does, though. Kill the clan leader, and come back here, and he will give you complete access to investigate his estate. Thank you.”.

```text
Journal SW_ZanottiJourn 5
```

### Stage 10

I have killed the Mandalorian clan leader, I should return to the Zanotti Estate now to investigate the structure.

**How this stage is set:**
- Script `SW_DeadMandoLead`. attached to Npc Mandalorian Leader (`SW_MandoDantLeader`); placed in `Dantooine, Estate Grounds`.

```text
if ( OnDeath == 1 )
        if ( GetJournalIndex "SW_ZanottiJourn" == 5 )
            Journal SW_ZanottiJourn 10
        endif
endif
```

### Stage 15 — Finished

Mariano Zanotti and I have met in person, he has unlocked all the doors in his home and has told me that recently Martin Lucienelle and Antoine Jitaii have met in secret, which is the first time that the Zanotti Estate has not been invited to a meeting. He suspects the Jitaii Estate would be the next easiest place to search for clues, and will allow me to come back and search his estate throughout the investigation to prove he has no part in it.

**How this stage is set:**
- Script `BornaJedi`. attached to Door Born a jedi (`SW_CharGenPodDoor2`).

```text
journal sw_tarischap1 10
        Journal SW_JitaiiJourn 15
        Journal SW_ZanottiJourn 15
        Journal SW_DantariJourn 10
        Journal SW_DantJourn 30
```
- Dialogue INFO `15903167651486532720` under topic **Greeting 7**; speaker Mariano Zanotti (`SW_Zanotti`). locations: `Dantooine, Zanotti Estate`. conditions: Journal `SW_ZanottiJourn` Equal 10. response: “Welcome to my estate, I am Mariano Zanotti. As you can see we are harboring no missing persons here. Now that the Mandalorians are out of question I would like to help you with your investigation, though. Martin Lucienelle and Antoine Jitaii have met recently in secret at the Jitaii Estate. This is unusual, not only because I wasn't invited but that Martin would travel to the Jitaii Estate instead of Antoine to his. I would search the Jitaii Estate next I have a key, it's yours now.”.

```text
Journal SW_ZanottiJourn 15
Journal SW_JitaiiJourn 10
player->additem "SW_JitaiiKey", 1
```

### Related records and locations

**Dialogue speakers:**
- Lateng Courte (`SW_CzerkaCourte`) — `Dantooine, Czerka Office`
- Mariano Zanotti (`SW_Zanotti`) — `Dantooine, Zanotti Estate`
- Estate Guard (`SW_ZanottiDoorGuard`) — `Dantooine, Estate Grounds`

**Scripts that read or write this journal:**
- `BornaJedi` — Door Born a jedi (`SW_CharGenPodDoor2`)
- `SW_DeadMandoLead` — Npc Mandalorian Leader (`SW_MandoDantLeader`); placed in `Dantooine, Estate Grounds`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)
- Midichlorian Implant (`SW_ImplantManaMinor`)
- Key to the Jitaii Estate (`SW_JitaiiKey`)
- Jedi Robe Bottoms (`SW_JRobeBrownPant`)
- Jedi Robe Top (`SW_JRobeBrownTop`)
- Guardian's Green Lightsaber (`SW_LightSabGrdGreenB`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Dantooine, Czerka Office`
- `Dantooine, Estate Grounds`
- `Dantooine, Zanotti Estate`

<details><summary>Journal-state readers (1 code sites)</summary>

- Script `SW_DeadMandoLead`. attached to Npc Mandalorian Leader (`SW_MandoDantLeader`); placed in `Dantooine, Estate Grounds`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `2` is obtainable.
- [ ] Reach index `2`: The Zanotti Estate is North of Ballast, this is one of my best leads right now.
- [ ] Reach index `5`: I spoke to Mariano Zanotti through his sentry droid guarding his estate entrance who believes that the Mandalo…
- [ ] Reach index `10`: I have killed the Mandalorian clan leader, I should return to the Zanotti Estate now to investigate the struct…
- [ ] Reach index `15` (`Finished`): Mariano Zanotti and I have met in person, he has unlocked all the doors in his home and has told me that recen…
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_ZanottiJourn`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
