---
title: "A Mandalorian Bounty"
description: "Walkthrough and QA reference for A Mandalorian Bounty (SW_Quillis)."
weight: 7
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_Quillis"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_Quillis` |
| **Category** | Side Quests |
| **Journal entries** | 3 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Gary Sinnerman** in **Kashyyk, Boyle Research Facility** and ask about **a job**. |
| **Key locations** | Kashyyk, Boyle Research Facility, Kashyyk, Czerka Office, Kashyyk, Shadowlands South |
| **Key characters** | Gary Sinnerman |

## Walkthrough

### 1. Speak with Gary Sinnerman in Kashyyk, Boyle Research Facility and ask about a job

Speak with **Gary Sinnerman** in **Kashyyk, Boyle Research Facility** and ask about **a job**.

> **Expected journal update — index 5:** The Czerka Corporation wants to hire someone to kill a Mandalorian by the name of Quillis. Apparently he is in the shadowlands of Kashyyk in the Boyle Sect, where he has been slaughtering every Czerka Employee that enters his campsite.

### 2. Speak with Gary Sinnerman in Kashyyk, Boyle Research Facility and ask about a job — Finished

Speak with **Gary Sinnerman** in **Kashyyk, Boyle Research Facility** and ask about **a job**.

> **Expected journal update — index 10:** I killed Quillis and proved it to the Czerka Corporation. They were impressed with my actions and paid me in credits.

**Known item transfer:** 800 × **Credits** (`gold_001`), 1 × **Fancy Datapad** (`SW_Geno1`).

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 10**:

> I killed Quillis and proved it to the Czerka Corporation. They were impressed with my actions and paid me in credits.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 800 × **Credits** (`gold_001`)
- 1 × **Fancy Datapad** (`SW_Geno1`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Gary Sinnerman** (`SW_CzerkaOfficeGuyKash`) — `Kashyyk, Boyle Research Facility`, `Kashyyk, Czerka Office`

**Locations implicated by actor/object placement or explicit travel:**
- **Kashyyk, Boyle Research Facility**
- **Kashyyk, Czerka Office**
- **Kashyyk, Shadowlands South**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_Quillis`
**Generated category:** Side Quests
**Journal entries:** 3

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | The Czerka Corporation wants to hire someone to kill a Mandalorian by the name of Quillis. Apparently he is in the shadowlands of Kashyyk in the Boyle Sect, where he has been slaughtering every Czerka Employee that enters his campsite. | 1 |
| 10 | Finished | I killed Quillis and proved it to the Czerka Corporation. They were impressed with my actions and paid me in credits. | 1 |

### Record-level trigger map

### Stage 5

The Czerka Corporation wants to hire someone to kill a Mandalorian by the name of Quillis. Apparently he is in the shadowlands of Kashyyk in the Boyle Sect, where he has been slaughtering every Czerka Employee that enters his campsite.

**How this stage is set:**
- Dialogue INFO `1277719854686311895` under topic **a job**; speaker Gary Sinnerman (`SW_CzerkaOfficeGuyKash`). locations: `Kashyyk, Boyle Research Facility`, `Kashyyk, Czerka Office`. conditions: Journal `SW_Quillis` Equal 0. response: “I am having a problem with a Mandalorian. His name is Quillis, or something, and he's supposed to be some sort of legend. Anyway, we need someone to kill him. He has been slaughtering my employees that cross his path down in the shadowlands for weeks. He's becoming a deterrent to my production here. What do you say?”.

```text
Journal "SW_Quillis" 5
StopSound "BoyleGreet"
StopSound "BoyleJob1"
```

### Stage 10 — Finished

I killed Quillis and proved it to the Czerka Corporation. They were impressed with my actions and paid me in credits.

**How this stage is set:**
- Dialogue INFO `277681416113748120` under topic **a job**; speaker Gary Sinnerman (`SW_CzerkaOfficeGuyKash`). locations: `Kashyyk, Boyle Research Facility`, `Kashyyk, Czerka Office`. conditions: Journal `SW_Quillis` Equal 5; Item/ItemType `SW_KillCount` GreaterEqual 1. response: “I'll be a Kowakian Monkey-Lizard's uncle, you sure killed him, didn't you? Well, congratulations, offworlder, you happen to be the greatest combatant I've ever met. You should head to Tatooine if you haven't already, they have an arena there ran by one of the Hutts. Here's your credits, and this Datapad came in for you.”.

```text
Journal "SW_Quillis" 10
player->additem gold_001, 800
player->additem "SW_Geno1",1
```

### Related records and locations

**Dialogue speakers:**
- Gary Sinnerman (`SW_CzerkaOfficeGuyKash`) — `Kashyyk, Boyle Research Facility`, `Kashyyk, Czerka Office`

**Scripts that read or write this journal:**
- `SW_SpawnQuillis` — Npc Quillis Antamaxion (`SW_MandoQuillis`); placed in `Kashyyk, Shadowlands South`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)
- Fancy Datapad (`SW_Geno1`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Kashyyk, Boyle Research Facility`
- `Kashyyk, Czerka Office`
- `Kashyyk, Shadowlands South`

<details><summary>Journal-state readers (1 code sites)</summary>

- Script `SW_SpawnQuillis`. attached to Npc Quillis Antamaxion (`SW_MandoQuillis`); placed in `Kashyyk, Shadowlands South`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: The Czerka Corporation wants to hire someone to kill a Mandalorian by the name of Quillis. Apparently he is in…
- [ ] Reach index `10` (`Finished`): I killed Quillis and proved it to the Czerka Corporation. They were impressed with my actions and paid me in c…
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_Quillis`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
