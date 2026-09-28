---
title: "The Missing People"
description: "Walkthrough and QA reference for The Missing People (SW_DantJourn)."
weight: 99
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_DantJourn"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_DantJourn` |
| **Category** | Side Quests |
| **Journal entries** | 7 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Dron Anden** in **Dantooine, Czerka Office** and ask about **missing persons**. |
| **Key locations** | Dantooine, Czerka Office, Dantooine, Lucienelle Estate, Dantooine, Valley of the Jedi |
| **Key characters** | Lateng Courte, Dron Anden |

## Walkthrough

### 1. Speak with Dron Anden in Dantooine, Czerka Office and ask about missing persons

Speak with **Dron Anden** in **Dantooine, Czerka Office** and ask about **missing persons**.

> **Expected journal update — index 5:** The townsfolk of Ballast are talking about a growing number in missing persons. The Czerka Corporation would like to hire me as a mercenary to assist in the investigation. I should talk to Lateng Courte if I wish to persue the investigation.

### 2. Speak with Lateng Courte in Dantooine, Czerka Office and ask about missing persons

Speak with **Lateng Courte** in **Dantooine, Czerka Office** and ask about **missing persons**.

> **Expected journal update — index 10:** I have spoken to the Jedi Consular, Lateng Courte who says the they have no clues as every investigator that's been sent out, including Jedi Knights, haven't returned. If I would like to continue the investigation I should begin with the Dantari, the Zanotti Estate, the Jitaii Estate, and the Lucienelle Estate.

### 3. Reach journal stage 15

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 15:** I investigated the Dantari and both the Jitaii and Zanotti Estates, the only lead left is the Lucienelle Estate, with further evidence supporting this. I should speak to Lateng Courte in the Dantooine Czerka Office about this.

### 4. Speak with Lateng Courte in Dantooine, Czerka Office and ask about missing persons

Speak with **Lateng Courte** in **Dantooine, Czerka Office** and ask about **missing persons**.

> **Expected journal update — index 20:** Lateng Courte was extremely disturbed by my findings, and says that what I described sounds like a Feral Anzati, and its state points to there being another, more powerful Anzat in the area. She wants me to wear a Czerka uniform and go undercover into the Lucienelle Estate to further investigate this matter.

### 5. Defeat Martin Lucienelle in Dantooine, Lucienelle Estate and allow its script to update the quest

Defeat **Martin Lucienelle** in **Dantooine, Lucienelle Estate** and allow its script to update the quest.

> **Expected journal update — index 25:** Martin Lucienelle was an Anzat, and a powerful one at that. After killing Martin and most if not all of his droid staff I am lucky to be alive. But, I would say I have more than enough evidence to prove that he was the cause of the disappearances.

### 6. Use Born a jedi — Finished

The records expose more than one way to reach this journal update:
- Use **Born a jedi**.
- Speak with **Lateng Courte** in **Dantooine, Czerka Office** and ask about **missing persons**.

> **Expected journal update — index 30:** I have spoken to the Jedi Consular, Lateng Courte about Martin Lucienelle and have been paid in 3,000 credits for my troubles. The town of Ballast is very grateful for my contributions. She also says that I should meet her at the Jedi Enclave here on Dantooine. I can find it through a cave in the Hunting Grounds.

**Known item transfer:** 3000 × **Credits** (`Gold_001`), 1 × **Guardian's Green Lightsaber** (`SW_LightSabGrdGreenB`).

**Outcome:** this journal entry is marked as a finished branch.

> **Playtest flag:** 1 journal stage on this page lack a literal setter in the current static scan.

## Endings & branches

The journal has one explicit finished state at **index 30**:

> I have spoken to the Jedi Consular, Lateng Courte about Martin Lucienelle and have been paid in 3,000 credits for my troubles. The town of Ballast is very grateful for my contributions. She also says that I should meet her at the Jedi Enclave here on Dantooine. I can find it through a cave in the Hunting Grounds.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 3000 × **Credits** (`Gold_001`)
- 1 × **Guardian's Green Lightsaber** (`SW_LightSabGrdGreenB`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Lateng Courte** (`SW_CzerkaCourte`) — `Dantooine, Czerka Office`
- **Dron Anden** (`SW_CzerkaOfficeGuyDant`) — `Dantooine, Czerka Office`

**Locations implicated by actor/object placement or explicit travel:**
- **Dantooine, Czerka Office**
- **Dantooine, Lucienelle Estate**
- **Dantooine, Valley of the Jedi**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_DantJourn`
**Generated category:** Side Quests
**Journal entries:** 7

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | The townsfolk of Ballast are talking about a growing number in missing persons. The Czerka Corporation would like to hire me as a mercenary to assist in the investigation. I should talk to Lateng Courte if I wish to persue the investigation. | 1 |
| 10 | — | I have spoken to the Jedi Consular, Lateng Courte who says the they have no clues as every investigator that's been sent out, including Jedi Knights, haven't returned. If I would like to continue the investigation I should begin with the Dantari, the Zanotti Estate, the Jitaii Estate, and the Lucienelle Estate. | 1 |
| 15 | — | I investigated the Dantari and both the Jitaii and Zanotti Estates, the only lead left is the Lucienelle Estate, with further evidence supporting this. I should speak to Lateng Courte in the Dantooine Czerka Office about this. | 0 |
| 20 | — | Lateng Courte was extremely disturbed by my findings, and says that what I described sounds like a Feral Anzati, and its state points to there being another, more powerful Anzat in the area. She wants me to wear a Czerka uniform and go undercover into the Lucienelle Estate to further investigate this matter. | 1 |
| 25 | — | Martin Lucienelle was an Anzat, and a powerful one at that. After killing Martin and most if not all of his droid staff I am lucky to be alive. But, I would say I have more than enough evidence to prove that he was the cause of the disappearances. | 1 |
| 30 | Finished | I have spoken to the Jedi Consular, Lateng Courte about Martin Lucienelle and have been paid in 3,000 credits for my troubles. The town of Ballast is very grateful for my contributions. She also says that I should meet her at the Jedi Enclave here on Dantooine. I can find it through a cave in the Hunting Grounds. | 2 |

### Record-level trigger map

### Stage 5

The townsfolk of Ballast are talking about a growing number in missing persons. The Czerka Corporation would like to hire me as a mercenary to assist in the investigation. I should talk to Lateng Courte if I wish to persue the investigation.

**How this stage is set:**
- Dialogue INFO `25166211838544817` under topic **missing persons**; speaker Dron Anden (`SW_CzerkaOfficeGuyDant`). locations: `Dantooine, Czerka Office`. conditions: Journal `SW_DantJourn` Equal 0. response: “I've got a lot going on, between trouble with our mining operations over in the Dantari Wilds and pointless politics between the estates here in Ballast and those on the Estate Grounds. I haven't had time to look into things myself, but several members of our community have gone missing. If you're interested in picking up the investigation on the missing persons, the Jedi have sent one of their Jedi Counselors to look into things. Speak to Lateng Courte; she's in the back office of this building.”.

```text
Journal SW_DantJourn 5
```

### Stage 10

I have spoken to the Jedi Consular, Lateng Courte who says the they have no clues as every investigator that's been sent out, including Jedi Knights, haven't returned. If I would like to continue the investigation I should begin with the Dantari, the Zanotti Estate, the Jitaii Estate, and the Lucienelle Estate.

**How this stage is set:**
- Dialogue INFO `1737297711878912869` under topic **missing persons**; speaker Lateng Courte (`SW_CzerkaCourte`). locations: `Dantooine, Czerka Office`. conditions: Journal `SW_DantJourn` Equal 5. response: “The force is strong in you, stranger. I'm glad we've met. My name is Lateng Courte, Jedi Consular working this investigation. Be warned before you pursue this, many people have gone missing, including Jedi Knights, this will not be a job to take lightly. The current suspects are the Dantari, then the Jitaii Estate and Zanotti Estate. The Lucienelle Estate is completely funding the investigation, although we haven't completely ruled them out.”.

```text
Journal SW_DantJourn 10
AddTopic "Dantari"
AddTopic "Jitaii Estate"
```

### Stage 15

I investigated the Dantari and both the Jitaii and Zanotti Estates, the only lead left is the Lucienelle Estate, with further evidence supporting this. I should speak to Lateng Courte in the Dantooine Czerka Office about this.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 20

Lateng Courte was extremely disturbed by my findings, and says that what I described sounds like a Feral Anzati, and its state points to there being another, more powerful Anzat in the area. She wants me to wear a Czerka uniform and go undercover into the Lucienelle Estate to further investigate this matter.

**How this stage is set:**
- Dialogue INFO `32601242541032130509` under topic **missing persons**; speaker Lateng Courte (`SW_CzerkaCourte`). locations: `Dantooine, Czerka Office`. conditions: Journal `SW_DantJourn` Equal 10; Journal `SW_DantariJourn` Equal 10; Journal `SW_ZanottiJourn` Equal 15; Journal `SW_JitaiiJourn` Equal 15. response: “If what you say is true, then this is very disturbing news. The creature you described sounds like a feral Anzati, which means in the state that it was in there is an older, more powerful Anzat in the area. It's time we investigate Martin Lucienelle in his estate. The only way we're going to get you in is if you go undercover as a Czerka employee, we will call ahead and make the appointment.”.

```text
Journal SW_DantJourn 20
```

### Stage 25

Martin Lucienelle was an Anzat, and a powerful one at that. After killing Martin and most if not all of his droid staff I am lucky to be alive. But, I would say I have more than enough evidence to prove that he was the cause of the disappearances.

**How this stage is set:**
- Script `SW_DeadMartin`. attached to Npc Martin Lucienelle (`SW_Lucienelle`); placed in `Dantooine, Lucienelle Estate`.

```text
if ( OnDeath == 1 )
        if ( GetJournalIndex "SW_DantJourn" == 20 )
            Journal SW_DantJourn 25
        endif
endif
```

### Stage 30 — Finished

I have spoken to the Jedi Consular, Lateng Courte about Martin Lucienelle and have been paid in 3,000 credits for my troubles. The town of Ballast is very grateful for my contributions. She also says that I should meet her at the Jedi Enclave here on Dantooine. I can find it through a cave in the Hunting Grounds.

**How this stage is set:**
- Script `BornaJedi`. attached to Door Born a jedi (`SW_CharGenPodDoor2`).

```text
Journal SW_ZanottiJourn 15
        Journal SW_DantariJourn 10
        Journal SW_DantJourn 30
        player->additem Gold_001 3000
        player->additem SW_LightSabGrdGreenB 1
```
- Dialogue INFO `52782994813911663` under topic **missing persons**; speaker Lateng Courte (`SW_CzerkaCourte`). locations: `Dantooine, Czerka Office`. conditions: Journal `SW_DantJourn` Equal 25. response: “I can't believe you took on Martin alone, you are very powerful in the force, even if you aren't properly trained for it. The Jedi Order will be pleased to hear of your abilities, and concerned that you aren't a member of the Order. Here, 3000 credits for completing this investigation for us and ending the life of that evil creature. I... I think I will consult the council about you. You should come to the Jedi Enclave.”.

```text
Journal SW_DantJourn 30
player->additem "Gold_001", 3000
SW_CzerkaCourte22->Enable
```

### Related records and locations

**Dialogue speakers:**
- Lateng Courte (`SW_CzerkaCourte`) — `Dantooine, Czerka Office`
- Dron Anden (`SW_CzerkaOfficeGuyDant`) — `Dantooine, Czerka Office`

**Scripts that read or write this journal:**
- `BornaJedi` — Door Born a jedi (`SW_CharGenPodDoor2`)
- `SW_CourteCompScript` — Npc Lateng Courte (`SW_CzerkaCourte22`); placed in `Dantooine, Valley of the Jedi`
- `SW_DeadMartin` — Npc Martin Lucienelle (`SW_Lucienelle`); placed in `Dantooine, Lucienelle Estate`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)
- Midichlorian Implant (`SW_ImplantManaMinor`)
- Jedi Robe Bottoms (`SW_JRobeBrownPant`)
- Jedi Robe Top (`SW_JRobeBrownTop`)
- Guardian's Green Lightsaber (`SW_LightSabGrdGreenB`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Dantooine, Czerka Office`
- `Dantooine, Lucienelle Estate`
- `Dantooine, Valley of the Jedi`

<details><summary>Journal-state readers (2 code sites)</summary>

- Script `SW_CourteCompScript`. attached to Npc Lateng Courte (`SW_CzerkaCourte22`); placed in `Dantooine, Valley of the Jedi`.
- Script `SW_DeadMartin`. attached to Npc Martin Lucienelle (`SW_Lucienelle`); placed in `Dantooine, Lucienelle Estate`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: The townsfolk of Ballast are talking about a growing number in missing persons. The Czerka Corporation would l…
- [ ] Reach index `10`: I have spoken to the Jedi Consular, Lateng Courte who says the they have no clues as every investigator that's…
- [ ] Reach index `15`: I investigated the Dantari and both the Jitaii and Zanotti Estates, the only lead left is the Lucienelle Estat…
- [ ] Reach index `20`: Lateng Courte was extremely disturbed by my findings, and says that what I described sounds like a Feral Anzat…
- [ ] Reach index `25`: Martin Lucienelle was an Anzat, and a powerful one at that. After killing Martin and most if not all of his dr…
- [ ] Reach index `30` (`Finished`): I have spoken to the Jedi Consular, Lateng Courte about Martin Lucienelle and have been paid in 3,000 credits …
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_DantJourn`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
