---
title: "Spy Program"
description: "Walkthrough and QA reference for Spy Program (SW_TarisSpyProg)."
weight: 3
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_TarisSpyProg"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_TarisSpyProg` |
| **Category** | Taris Side Content |
| **Journal entries** | 4 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Jerxav** in **Taris, Undercity**. |
| **Key locations** | Manaan, Inner City, Taris, Lower City, Taris, Lower City North Apartments, Taris, Lower City South Apartments, Taris, Undercity |
| **Key characters** | Jerxav |

## Walkthrough

### 1. Speak with Jerxav in Taris, Undercity

Speak with **Jerxav** in **Taris, Undercity**.

> **Expected journal update — index 10:** I was asked by a Taris Undercity dweller, Jerxav, to install his programs into the pipes throughout the Lower City. He said four of them will do and mentioned to look in apartments or quiet areas.

**Known item transfer:** 1 × **Spy Program Upload** (`SW_TarisUCPipeCodes`).

### 2. Reach Manaan, Inner City and allow the scripted event to complete

Reach **Manaan, Inner City** and allow the scripted event to complete.

> **Expected journal update — index 20:** I've installed enough spy programs in the Lower City pipes. I should return to Jervax.

### 3. Speak with Jerxav in Taris, Undercity — Finished

Speak with **Jerxav** in **Taris, Undercity**.

> **Expected journal update — index 30:** Jervax thanked me for installing those programs, and gave me some credits as a reward. He also said he would train me in combat whenever I want.

**Known item transfer:** 2000 × **Credits** (`Gold_001`).

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 30**:

> Jervax thanked me for installing those programs, and gave me some credits as a reward. He also said he would train me in combat whenever I want.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 1 × **Spy Program Upload** (`SW_TarisUCPipeCodes`)
- 2000 × **Credits** (`Gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Jerxav** (`SW_TarisUCHermit`) — `Taris, Undercity`

**Locations implicated by actor/object placement or explicit travel:**
- **Manaan, Inner City**
- **Taris, Lower City**
- **Taris, Lower City North Apartments**
- **Taris, Lower City South Apartments**
- **Taris, Undercity**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_TarisSpyProg`
**Generated category:** Taris Side Content
**Journal entries:** 4

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 10 | — | I was asked by a Taris Undercity dweller, Jerxav, to install his programs into the pipes throughout the Lower City. He said four of them will do and mentioned to look in apartments or quiet areas. | 1 |
| 20 | — | I've installed enough spy programs in the Lower City pipes. I should return to Jervax. | 1 |
| 30 | Finished | Jervax thanked me for installing those programs, and gave me some credits as a reward. He also said he would train me in combat whenever I want. | 1 |

### Record-level trigger map

### Stage 10

I was asked by a Taris Undercity dweller, Jerxav, to install his programs into the pipes throughout the Lower City. He said four of them will do and mentioned to look in apartments or quiet areas.

**How this stage is set:**
- Dialogue INFO `324630341163687136` under topic **Greeting 5**; speaker Jerxav (`SW_TarisUCHermit`). locations: `Taris, Undercity`. conditions: Function/Choice Equal 1. response: “I've worked on a program that let's me spy and collect local data. It's able to be interfaced into pipes such as the one in this room here. I'm only looking into areas in the Lower City. If you can install these into four pipes I'll make it worth your time. Try looking into apartments or quiet areas. Come back when you installed codes into at least four pipes.”.

```text
player->AddItem"SW_TarisUCPipeCodes" 1
Journal SW_TarisSpyProg 10
```

### Stage 20

I've installed enough spy programs in the Lower City pipes. I should return to Jervax.

**How this stage is set:**
- Script `SW_TarisSpyProgPipeScr`. attached to Activator Pipes (`SW_PipesScreenActTarisLC`); placed in `Manaan, Inner City`, `Taris, Lower City`, `Taris, Lower City North Apartments`, `Taris, Lower City South Apartments`; Book Spy Program Upload (`SW_TarisUCPipeCodes`).

```text
MessageBox "The spy program has been installed successfully."
if ( SW_SpyProgCount == 4 )
Journal SW_TarisSpyProg 20
endif
set doOnce to 1
```

### Stage 30 — Finished

Jervax thanked me for installing those programs, and gave me some credits as a reward. He also said he would train me in combat whenever I want.

**How this stage is set:**
- Dialogue INFO `5828130162642918532` under topic **Greeting 5**; speaker Jerxav (`SW_TarisUCHermit`). locations: `Taris, Undercity`. conditions: Journal `SW_TarisSpyProg` Equal 20. response: “Thank you, I can see my programs working successfully. This will prove very helpful. Here, take some credits. If you want to train with me in combat arts sometime, I can teach you.”.

```text
player->additem"Gold_001" 2000
ModDisposition 30
Journal SW_TarisSpyProg 30
```

### Related records and locations

**Dialogue speakers:**
- Jerxav (`SW_TarisUCHermit`) — `Taris, Undercity`

**Scripts that read or write this journal:**
- `SW_TarisSpyProgPipeScr` — Activator Pipes (`SW_PipesScreenActTarisLC`); placed in `Manaan, Inner City`, `Taris, Lower City`, `Taris, Lower City North Apartments`, `Taris, Lower City South Apartments`; Book Spy Program Upload (`SW_TarisUCPipeCodes`)

**Items referenced by related script/result code:**
- Credits (`Gold_001`)
- Spy Program Upload (`SW_TarisUCPipeCodes`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Manaan, Inner City`
- `Taris, Lower City`
- `Taris, Lower City North Apartments`
- `Taris, Lower City South Apartments`
- `Taris, Undercity`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `10` is obtainable.
- [ ] Reach index `10`: I was asked by a Taris Undercity dweller, Jerxav, to install his programs into the pipes throughout the Lower …
- [ ] Reach index `20`: I've installed enough spy programs in the Lower City pipes. I should return to Jervax.
- [ ] Reach index `30` (`Finished`): Jervax thanked me for installing those programs, and gave me some credits as a reward. He also said he would t…
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_TarisSpyProg`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
