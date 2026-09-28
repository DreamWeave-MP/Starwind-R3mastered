---
title: "The Jitaii Estate"
description: "Walkthrough and QA reference for The Jitaii Estate (SW_JitaiiJourn)."
weight: 94
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_JitaiiJourn"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_JitaiiJourn` |
| **Category** | Side Quests |
| **Journal entries** | 4 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Lateng Courte** in **Dantooine, Czerka Office** and ask about **Jitaii Estate**. |
| **Key locations** | Dantooine, Czerka Office, Dantooine, Jitaii Estate, Dantooine, Zanotti Estate |
| **Key characters** | Lateng Courte, Mariano Zanotti |

## Walkthrough

### 1. Speak with Lateng Courte in Dantooine, Czerka Office and ask about Jitaii Estate

Speak with **Lateng Courte** in **Dantooine, Czerka Office** and ask about **Jitaii Estate**.

> **Expected journal update — index 5:** The Jitaii Estate has been here as long as anyone can remember, it is to the far north of the area. But, I should try the Zanotti Estate first, then try to get access to the Jitaii Estate.

### 2. Speak with Mariano Zanotti in Dantooine, Zanotti Estate

Speak with **Mariano Zanotti** in **Dantooine, Zanotti Estate**.

> **Expected journal update — index 10:** Mariano Zanotti has given me a key to the Jitaii Estate, this is my next best lead at the disappearances in Ballast.

**Known item transfer:** 1 × **Key to the Jitaii Estate** (`SW_JitaiiKey`).

### 3. Use Born a jedi — Finished

The records expose more than one way to reach this journal update:
- Use **Born a jedi**.
- Reach **Dantooine, Jitaii Estate** and allow the scripted event to complete.

> **Expected journal update — index 15:** I have killed a creature in the Jitaii Estate that held evidence that it may have at one time been Antoine Jitaii. The estate was also infested with Rakghouls and evidence suggest they were not friendly with the creature. This may have been a cover-up. Once I have finished investigating the Dantari inside of their stronghold I should report these findings to the Jedi Consular in the Dantooine Czerka Office.

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 15**:

> I have killed a creature in the Jitaii Estate that held evidence that it may have at one time been Antoine Jitaii. The estate was also infested with Rakghouls and evidence suggest they were not friendly with the creature. This may have been a cover-up. Once I have finished investigating the Dantari inside of their stronghold I should report these findings to the Jedi Consular in the Dantooine Czerka Office.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 1 × **Key to the Jitaii Estate** (`SW_JitaiiKey`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Lateng Courte** (`SW_CzerkaCourte`) — `Dantooine, Czerka Office`
- **Mariano Zanotti** (`SW_Zanotti`) — `Dantooine, Zanotti Estate`

**Locations implicated by actor/object placement or explicit travel:**
- **Dantooine, Czerka Office**
- **Dantooine, Jitaii Estate**
- **Dantooine, Zanotti Estate**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_JitaiiJourn`
**Generated category:** Side Quests
**Journal entries:** 4

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | The Jitaii Estate has been here as long as anyone can remember, it is to the far north of the area. But, I should try the Zanotti Estate first, then try to get access to the Jitaii Estate. | 1 |
| 10 | — | Mariano Zanotti has given me a key to the Jitaii Estate, this is my next best lead at the disappearances in Ballast. | 1 |
| 15 | Finished | I have killed a creature in the Jitaii Estate that held evidence that it may have at one time been Antoine Jitaii. The estate was also infested with Rakghouls and evidence suggest they were not friendly with the creature. This may have been a cover-up. Once I have finished investigating the Dantari inside of their stronghold I should report these findings to the Jedi Consular in the Dantooine Czerka Office. | 2 |

### Record-level trigger map

### Stage 5

The Jitaii Estate has been here as long as anyone can remember, it is to the far north of the area. But, I should try the Zanotti Estate first, then try to get access to the Jitaii Estate.

**How this stage is set:**
- Dialogue INFO `19726519233653880` under topic **Jitaii Estate**; speaker Lateng Courte (`SW_CzerkaCourte`). locations: `Dantooine, Czerka Office`. conditions: Journal `SW_JitaiiJourn` Less 5. response: “The Jitaii Estate has been here as long as anyone can remember, it is to the East of here. But, there's two problems there; the Jitaii Estate has pretty tight security with everything going on, and no one has heard from Antoine Jitaii for quite some time, he may not just let you in. I would try the Zanotti Estate first.”.

```text
Journal SW_JitaiiJourn 5
```

### Stage 10

Mariano Zanotti has given me a key to the Jitaii Estate, this is my next best lead at the disappearances in Ballast.

**How this stage is set:**
- Dialogue INFO `15903167651486532720` under topic **Greeting 7**; speaker Mariano Zanotti (`SW_Zanotti`). locations: `Dantooine, Zanotti Estate`. conditions: Journal `SW_ZanottiJourn` Equal 10. response: “Welcome to my estate, I am Mariano Zanotti. As you can see we are harboring no missing persons here. Now that the Mandalorians are out of question I would like to help you with your investigation, though. Martin Lucienelle and Antoine Jitaii have met recently in secret at the Jitaii Estate. This is unusual, not only because I wasn't invited but that Martin would travel to the Jitaii Estate instead of Antoine to his. I would search the Jitaii Estate next I have a key, it's yours now.”.

```text
Journal SW_ZanottiJourn 15
Journal SW_JitaiiJourn 10
player->additem "SW_JitaiiKey", 1
```

### Stage 15 — Finished

I have killed a creature in the Jitaii Estate that held evidence that it may have at one time been Antoine Jitaii. The estate was also infested with Rakghouls and evidence suggest they were not friendly with the creature. This may have been a cover-up. Once I have finished investigating the Dantari inside of their stronghold I should report these findings to the Jedi Consular in the Dantooine Czerka Office.

**How this stage is set:**
- Script `BornaJedi`. attached to Door Born a jedi (`SW_CharGenPodDoor2`).

```text
journal sw_czerkamurd 15
        journal sw_tarischap1 10
        Journal SW_JitaiiJourn 15
        Journal SW_ZanottiJourn 15
        Journal SW_DantariJourn 10
```
- Script `SW_DeadJitaii`. attached to Creature Feral Anzat (`SW_Jitaii`); placed in `Dantooine, Jitaii Estate`.

```text
if ( OnDeath == 1 )
        if ( GetJournalIndex "SW_JitaiiJourn" == 10 )
            Journal SW_JitaiiJourn 15
        endif
endif
```

### Related records and locations

**Dialogue speakers:**
- Lateng Courte (`SW_CzerkaCourte`) — `Dantooine, Czerka Office`
- Mariano Zanotti (`SW_Zanotti`) — `Dantooine, Zanotti Estate`

**Scripts that read or write this journal:**
- `BornaJedi` — Door Born a jedi (`SW_CharGenPodDoor2`)
- `SW_DeadJitaii` — Creature Feral Anzat (`SW_Jitaii`); placed in `Dantooine, Jitaii Estate`
- `SW_OpenJitaii`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)
- Midichlorian Implant (`SW_ImplantManaMinor`)
- Key to the Jitaii Estate (`SW_JitaiiKey`)
- Jedi Robe Bottoms (`SW_JRobeBrownPant`)
- Jedi Robe Top (`SW_JRobeBrownTop`)
- Guardian's Green Lightsaber (`SW_LightSabGrdGreenB`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Dantooine, Czerka Office`
- `Dantooine, Jitaii Estate`
- `Dantooine, Zanotti Estate`

<details><summary>Journal-state readers (2 code sites)</summary>

- Script `SW_DeadJitaii`. attached to Creature Feral Anzat (`SW_Jitaii`); placed in `Dantooine, Jitaii Estate`.
- Script `SW_OpenJitaii`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: The Jitaii Estate has been here as long as anyone can remember, it is to the far north of the area. But, I sho…
- [ ] Reach index `10`: Mariano Zanotti has given me a key to the Jitaii Estate, this is my next best lead at the disappearances in Ba…
- [ ] Reach index `15` (`Finished`): I have killed a creature in the Jitaii Estate that held evidence that it may have at one time been Antoine Jit…
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_JitaiiJourn`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
