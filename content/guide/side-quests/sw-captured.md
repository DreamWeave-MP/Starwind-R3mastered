---
title: "Captured"
description: "Walkthrough and QA reference for Captured (SW_Captured)."
weight: 25
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_Captured"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_Captured` |
| **Category** | Side Quests |
| **Journal entries** | 7 |
| **Completion branches** | 2 |
| **Starts by** | Speak with **Worried Selkath** in **Nar Shaddaa, Bounty Hunter Office** and ask about **friend**. |
| **Key locations** | Nar Shaddaa, Bounty Hunter Office, Nar Shaddaa, Smuggler's Operation |
| **Key characters** | Selkath, Worried Selkath |

## Walkthrough

### 1. Speak with Worried Selkath in Nar Shaddaa, Bounty Hunter Office and ask about friend

Speak with **Worried Selkath** in **Nar Shaddaa, Bounty Hunter Office** and ask about **friend**.

> **Expected journal update — index 5:** I have met a Selkath in the Bounty Hunter's Office of Nar Shaddaa who says that his friend has been captured and is being held prisoner by a gang somewhere in the Lower City.

### 2. Find Selkath in Nar Shaddaa, Smuggler's Operation and complete the encounter

Find **Selkath** in **Nar Shaddaa, Smuggler's Operation** and complete the encounter.

> **Expected journal update — index 7:** I have tortured the Selkath to death.

### 3. Reach journal stage 10

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 10:** I have rescued the Selkath and he has left, I should report back to his friend in the Bounty Hunter's Office

### 4. Speak with Selkath in Nar Shaddaa, Smuggler's Operation

Speak with **Selkath** in **Nar Shaddaa, Smuggler's Operation**.

> **Expected journal update — index 12:** I have rescued a Selkath in the Lower City who was imprisoned by a smuggler's gang.

### 5. Speak with Worried Selkath in Nar Shaddaa, Bounty Hunter Office and ask about friend — Finished

Speak with **Worried Selkath** in **Nar Shaddaa, Bounty Hunter Office** and ask about **friend**.

> **Expected journal update — index 15:** The Selkath has rewarded me with 350 credits for rescuing his imprisoned friend.

**Known item transfer:** 450 × **Credits** (`Gold_001`).

**Outcome:** this journal entry is marked as a finished branch.

### 6. Speak with Worried Selkath in Nar Shaddaa, Bounty Hunter Office and ask about friend — Finished

Speak with **Worried Selkath** in **Nar Shaddaa, Bounty Hunter Office** and ask about **friend**.

> **Expected journal update — index 20:** The Selkath has rewarded me with 100 credits for reporting the death of his friend, which I killed, although I didn't tell him that.

**Known item transfer:** 100 × **Credits** (`Gold_001`).

**Outcome:** this journal entry is marked as a finished branch.

> **Playtest flag:** 1 journal stage on this page lack a literal setter in the current static scan.

## Endings & branches

The journal has **2 explicit finished entries**. Treat them as branch coverage targets during playtesting:

- **Index 15:** The Selkath has rewarded me with 350 credits for rescuing his imprisoned friend.
- **Index 20:** The Selkath has rewarded me with 100 credits for reporting the death of his friend, which I killed, although I didn't tell him that.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 450 × **Credits** (`Gold_001`)
- 100 × **Credits** (`Gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Selkath** (`SW_SelkathPrisoner`) — `Nar Shaddaa, Smuggler's Operation`
- **Worried Selkath** (`SW_SelkathPrisonerHelp`) — `Nar Shaddaa, Bounty Hunter Office`

**Locations implicated by actor/object placement or explicit travel:**
- **Nar Shaddaa, Bounty Hunter Office**
- **Nar Shaddaa, Smuggler's Operation**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_Captured`
**Generated category:** Side Quests
**Journal entries:** 7

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | I have met a Selkath in the Bounty Hunter's Office of Nar Shaddaa who says that his friend has been captured and is being held prisoner by a gang somewhere in the Lower City. | 1 |
| 7 | — | I have tortured the Selkath to death. | 1 |
| 10 | — | I have rescued the Selkath and he has left, I should report back to his friend in the Bounty Hunter's Office | 0 |
| 12 | — | I have rescued a Selkath in the Lower City who was imprisoned by a smuggler's gang. | 2 |
| 15 | Finished | The Selkath has rewarded me with 350 credits for rescuing his imprisoned friend. | 2 |
| 20 | Finished | The Selkath has rewarded me with 100 credits for reporting the death of his friend, which I killed, although I didn't tell him that. | 1 |

### Record-level trigger map

### Stage 5

I have met a Selkath in the Bounty Hunter's Office of Nar Shaddaa who says that his friend has been captured and is being held prisoner by a gang somewhere in the Lower City.

**How this stage is set:**
- Dialogue INFO `3053285503213818857` under topic **friend**; speaker Worried Selkath (`SW_SelkathPrisonerHelp`). locations: `Nar Shaddaa, Bounty Hunter Office`. conditions: Journal `SW_Captured` Equal 0. response: “My friend has been captured! We were in Quanun Alley on our way to the speeder shop when some gangsters grabbed him and pulled him into the Lower City. I know they've got him down there, please, you have to help us. These mercenaries in here won't do anything about it.”.

```text
Journal SW_Captured 5
```

### Stage 7

I have tortured the Selkath to death.

**How this stage is set:**
- Script `SW_SelkPrisonerDeath`. attached to Npc Selkath (`SW_SelkathPrisoner`); placed in `Nar Shaddaa, Smuggler's Operation`.

```text
Disable
        MessageBox "The Selkath is killed by the torture."
        Journal SW_Captured 7
        Set DoOnce to 1
    endif
```

### Stage 10

I have rescued the Selkath and he has left, I should report back to his friend in the Bounty Hunter's Office

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 12

I have rescued a Selkath in the Lower City who was imprisoned by a smuggler's gang.

**How this stage is set:**
- Dialogue INFO `2497526699820528451` under topic **Greeting 7**; speaker Selkath (`SW_SelkathPrisoner`). locations: `Nar Shaddaa, Smuggler's Operation`. conditions: Journal `SW_Captured` Equal 5; Function/Choice Equal 1. response: “Oh thank you, friend!”.

```text
Journal SW_Captured 12
disable
```
- Dialogue INFO `29476144992777832197` under topic **Greeting 7**; speaker Selkath (`SW_SelkathPrisoner`). locations: `Nar Shaddaa, Smuggler's Operation`. conditions: Journal `SW_Captured` Equal 0; Function/Choice Equal 1. response: “Oh thank you, friend!”.

```text
Journal SW_Captured 12
disable
```

### Stage 15 — Finished

The Selkath has rewarded me with 350 credits for rescuing his imprisoned friend.

**How this stage is set:**
- Dialogue INFO `880121824375229061` under topic **friend**; speaker Worried Selkath (`SW_SelkathPrisonerHelp`). locations: `Nar Shaddaa, Bounty Hunter Office`. conditions: Journal `SW_Captured` Equal 12. response: “Yes, thank you so much! He's already came by and I arranged for a medical transport for him back to Manaan. I'll be leaving soon myself, I was waiting to see if you would come by first. Here, take these credits for your troubles.”.

```text
Journal SW_Captured 15
player->additem "Gold_001", 450
```
- Dialogue INFO `720117309115116235` under topic **friend**; speaker Worried Selkath (`SW_SelkathPrisonerHelp`). locations: `Nar Shaddaa, Bounty Hunter Office`. conditions: Journal `SW_Captured` Equal 10. response: “Yes, thank you so much! He's already came by and I arranged for a medical transport for him back to Manaan. I'll be leaving soon myself, I was waiting to see if you would return. Here, take these credits for your troubles.”.

```text
Journal SW_Captured 15
player->additem "Gold_001", 450
```

### Stage 20 — Finished

The Selkath has rewarded me with 100 credits for reporting the death of his friend, which I killed, although I didn't tell him that.

**How this stage is set:**
- Dialogue INFO `2254719694956810095` under topic **friend**; speaker Worried Selkath (`SW_SelkathPrisonerHelp`). locations: `Nar Shaddaa, Bounty Hunter Office`. conditions: Journal `SW_Captured` Equal 7. response: “He's dead you say? This is the worst of news. Here, take some credits for returning this news to me. I will return to Manaan after I make his arrangements.”.

```text
Journal SW_Captured 20
player->additem "Gold_001", 100
```

### Related records and locations

**Dialogue speakers:**
- Selkath (`SW_SelkathPrisoner`) — `Nar Shaddaa, Smuggler's Operation`
- Worried Selkath (`SW_SelkathPrisonerHelp`) — `Nar Shaddaa, Bounty Hunter Office`

**Scripts that read or write this journal:**
- `SW_SelkPrisonerDeath` — Npc Selkath (`SW_SelkathPrisoner`); placed in `Nar Shaddaa, Smuggler's Operation`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Nar Shaddaa, Bounty Hunter Office`
- `Nar Shaddaa, Smuggler's Operation`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: I have met a Selkath in the Bounty Hunter's Office of Nar Shaddaa who says that his friend has been captured a…
- [ ] Reach index `7`: I have tortured the Selkath to death.
- [ ] Reach index `10`: I have rescued the Selkath and he has left, I should report back to his friend in the Bounty Hunter's Office
- [ ] Reach index `12`: I have rescued a Selkath in the Lower City who was imprisoned by a smuggler's gang.
- [ ] Reach index `15` (`Finished`): The Selkath has rewarded me with 350 credits for rescuing his imprisoned friend.
- [ ] Reach index `20` (`Finished`): The Selkath has rewarded me with 100 credits for reporting the death of his friend, which I killed, although I…
- [ ] Branch coverage: this journal has **2 different `Finished` entries**; test each reachable completion branch.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_Captured`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
