---
title: "An Unlikely Friend"
description: "Walkthrough and QA reference for An Unlikely Friend (SW_AbotFriend)."
weight: 13
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_AbotFriend"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_AbotFriend` |
| **Category** | Side Quests |
| **Journal entries** | 5 |
| **Completion branches** | No explicit Finished marker |
| **Starts by** | Speak with **Abot** in **Nar Shaddaa, Makacheesa Market** and ask about **friend**. |
| **Key locations** | Nar Shaddaa, Lower City, Nar Shaddaa, Makacheesa Market |
| **Key characters** | Abot, Maintenance Worker |

## Walkthrough

### 1. Speak with Abot in Nar Shaddaa, Makacheesa Market and ask about friend

Speak with **Abot** in **Nar Shaddaa, Makacheesa Market** and ask about **friend**.

> **Expected journal update — index 5:** I have met a Gammorean named Abot who says he has lost his friend Remiros, a bolotaur that likes chasing the sounds coming from pipes in the city. If I should find him I should escort him back to Abot.

### 2. Speak with Maintenance Worker in Nar Shaddaa, Lower City

Speak with **Maintenance Worker** in **Nar Shaddaa, Lower City**.

> **Expected journal update — index 7:** I have found the bolotaur named Remiros, the maintenence worker in the lower city has released him to me.

### 3. Reach Nar Shaddaa, Makacheesa Market and allow the scripted event to complete

Reach **Nar Shaddaa, Makacheesa Market** and allow the scripted event to complete.

> **Expected journal update — index 10:** I have returned Remiros to Abot.

### 4. Speak with Abot in Nar Shaddaa, Makacheesa Market and ask about friend

Speak with **Abot** in **Nar Shaddaa, Makacheesa Market** and ask about **friend**.

> **Expected journal update — index 15:** Abot has rewarded me with various food items in reward for returning Remiros.

**Known item transfer:** 3 × **Bantha Steak** (`SW_BanthSteak`).

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 3 × **Bantha Steak** (`SW_BanthSteak`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Abot** (`SW_NarFood`) — `Nar Shaddaa, Makacheesa Market`
- **Maintenance Worker** (`SW_NarWorkerLower`) — `Nar Shaddaa, Lower City`

**Locations implicated by actor/object placement or explicit travel:**
- **Nar Shaddaa, Lower City**
- **Nar Shaddaa, Makacheesa Market**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_AbotFriend`
**Generated category:** Side Quests
**Journal entries:** 5

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | I have met a Gammorean named Abot who says he has lost his friend Remiros, a bolotaur that likes chasing the sounds coming from pipes in the city. If I should find him I should escort him back to Abot. | 1 |
| 7 | — | I have found the bolotaur named Remiros, the maintenence worker in the lower city has released him to me. | 1 |
| 10 | — | I have returned Remiros to Abot. | 1 |
| 15 | — | Abot has rewarded me with various food items in reward for returning Remiros. | 1 |

### Record-level trigger map

### Stage 5

I have met a Gammorean named Abot who says he has lost his friend Remiros, a bolotaur that likes chasing the sounds coming from pipes in the city. If I should find him I should escort him back to Abot.

**How this stage is set:**
- Dialogue INFO `1205028882133427379` under topic **friend**; speaker Abot (`SW_NarFood`). locations: `Nar Shaddaa, Makacheesa Market`. conditions: Journal `SW_AbotFriend` Equal 0. response: “Yeah, Remiros must have chased pipes in the city. If you find him, please bring him to me.”.

```text
Journal SW_AbotFriend 5
```

### Stage 7

I have found the bolotaur named Remiros, the maintenence worker in the lower city has released him to me.

**How this stage is set:**
- Dialogue INFO `269082541442130979` under topic **Greeting 7**; speaker Maintenance Worker (`SW_NarWorkerLower`). locations: `Nar Shaddaa, Lower City`. conditions: Journal `SW_AbotFriend` Equal 5. response: “Have you come to take this damned Bolotaur? I've had enoug, he's making a mess in here trying to get to the pipes in the wall. Our pump here is pushing the water and sewer in these pipes and it can be very loud at times. Please, just get him out of here.”.

```text
"SW_Remiros"->AIFollow Player 0, 0, 0, 0
Journal SW_AbotFriend 7
```

### Stage 10

I have returned Remiros to Abot.

**How this stage is set:**
- Script `SW_RemirosFollow`. attached to Activator AQuestScript (`SW_RemirosFollowAct`); placed in `Nar Shaddaa, Makacheesa Market`.

```text
; Move position, stop from following, update journal
    SW_Remiros->AiWander 0 0 0 0
    Journal SW_AbotFriend 10
    Disable
endif
```

### Stage 15

Abot has rewarded me with various food items in reward for returning Remiros.

**How this stage is set:**
- Dialogue INFO `649223465124577757` under topic **friend**; speaker Abot (`SW_NarFood`). locations: `Nar Shaddaa, Makacheesa Market`. conditions: Journal `SW_AbotFriend` Equal 10. response: “You brought him back! Thank you, stranger. Here, take some of my stock here for your kindness.”.

```text
Journal SW_AbotFriend 15
moddisposition 20
player->additem, "SW_BanthSteak", 3
```

### Related records and locations

**Dialogue speakers:**
- Abot (`SW_NarFood`) — `Nar Shaddaa, Makacheesa Market`
- Maintenance Worker (`SW_NarWorkerLower`) — `Nar Shaddaa, Lower City`

**Scripts that read or write this journal:**
- `SW_RemirosFollow` — Activator AQuestScript (`SW_RemirosFollowAct`); placed in `Nar Shaddaa, Makacheesa Market`

**Items referenced by related script/result code:**
- Bantha Steak (`SW_BanthSteak`)
- Wasaka Berries (`SW_Berries`)
- Wet Chokie (`SW_Chockie`)
- WyyyschokkEggs

**Cells implicated by actor/object placement or explicit travel code:**
- `Nar Shaddaa, Lower City`
- `Nar Shaddaa, Makacheesa Market`

<details><summary>Other directly addressed object IDs in related code</summary>

- Remiros (`SW_Remiros`)

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: I have met a Gammorean named Abot who says he has lost his friend Remiros, a bolotaur that likes chasing the s…
- [ ] Reach index `7`: I have found the bolotaur named Remiros, the maintenence worker in the lower city has released him to me.
- [ ] Reach index `10`: I have returned Remiros to Abot.
- [ ] Reach index `15`: Abot has rewarded me with various food items in reward for returning Remiros.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_AbotFriend`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
