---
title: "Dead Entertainment"
description: "Walkthrough and QA reference for Dead Entertainment (SW_Entertainers)."
weight: 32
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_Entertainers"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_Entertainers` |
| **Category** | Side Quests |
| **Journal entries** | 4 |
| **Completion branches** | No explicit Finished marker |
| **Starts by** | Speak with **Entertainer** in **Nar Shaddaa, 718 Hooga Alley** and ask about **dancers**. |
| **Key locations** | Nar Shaddaa, 718 Hooga Alley, Nar Shaddaa, Gang Hideout, Nar Shaddaa, Lower City |
| **Key characters** | Entertainer |

## Walkthrough

### 1. Speak with Entertainer in Nar Shaddaa, 718 Hooga Alley and ask about dancers

Speak with **Entertainer** in **Nar Shaddaa, 718 Hooga Alley** and ask about **dancers**.

> **Expected journal update — index 5:** I found some entertainers at 718 Hooga Alley. They said there is a thug named Don Widge that hangs out in a hideout on the souternmost side of Hooga Alley that has been threatening them to not dance in the bazaar anymore. They won't go back to the bazaar unless he's been dealt with so that they feel safe.

### 2. Find Don Widge in Nar Shaddaa, Gang Hideout and complete the encounter

Find **Don Widge** in **Nar Shaddaa, Gang Hideout** and complete the encounter.

> **Expected journal update — index 10:** Don Widge is dead, I should return to the entertainers.

### 3. Speak with Entertainer in Nar Shaddaa, 718 Hooga Alley and ask about dancers

Speak with **Entertainer** in **Nar Shaddaa, 718 Hooga Alley** and ask about **dancers**.

> **Expected journal update — index 15:** The half naked women will resume their dancing now, that should bring a little life back to the bazaar.

**Known item transfer:** 100 × **Credits** (`gold_001`).

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 100 × **Credits** (`gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Entertainer** (`SW_DancingGirlQuestBitc`) — `Nar Shaddaa, 718 Hooga Alley`

**Locations implicated by actor/object placement or explicit travel:**
- **Nar Shaddaa, 718 Hooga Alley**
- **Nar Shaddaa, Gang Hideout**
- **Nar Shaddaa, Lower City**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_Entertainers`
**Generated category:** Side Quests
**Journal entries:** 4

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | I found some entertainers at 718 Hooga Alley. They said there is a thug named Don Widge that hangs out in a hideout on the souternmost side of Hooga Alley that has been threatening them to not dance in the bazaar anymore. They won't go back to the bazaar unless he's been dealt with so that they feel safe. | 1 |
| 10 | — | Don Widge is dead, I should return to the entertainers. | 1 |
| 15 | — | The half naked women will resume their dancing now, that should bring a little life back to the bazaar. | 1 |

### Record-level trigger map

### Stage 5

I found some entertainers at 718 Hooga Alley. They said there is a thug named Don Widge that hangs out in a hideout on the souternmost side of Hooga Alley that has been threatening them to not dance in the bazaar anymore. They won't go back to the bazaar unless he's been dealt with so that they feel safe.

**How this stage is set:**
- Dialogue INFO `82625910212144464` under topic **dancers**; speaker Entertainer (`SW_DancingGirlQuestBitc`). locations: `Nar Shaddaa, 718 Hooga Alley`. conditions: Function/Choice Equal 1. response: “Oh, you're not with the gangsters? My dancers have been being harassed by some thugs, threatened to quit dancing in the bazaar down the alley. Some guy named Don Widge is the head of it all, I know they hang out at the south side of the alley. I can't let them go out and do their job until they feel safe.”.

```text
Journal SW_Entertainers 5
```

### Stage 10

Don Widge is dead, I should return to the entertainers.

**How this stage is set:**
- Script `SW_EntertainScript2`. attached to Npc Don Widge (`SW_NarGangsterEntertain`); placed in `Nar Shaddaa, Gang Hideout`.

```text
If ( GetDeadCount "SW_NarGangsterEntertain" >= 1 )
        Journal SW_Entertainers 10
    endif
```

### Stage 15

The half naked women will resume their dancing now, that should bring a little life back to the bazaar.

**How this stage is set:**
- Dialogue INFO `462328562354618171` under topic **dancers**; speaker Entertainer (`SW_DancingGirlQuestBitc`). locations: `Nar Shaddaa, 718 Hooga Alley`. conditions: Journal `SW_Entertainers` Equal 10. response: “Don Widge is dead? Well, that is great news, I'll get my ladies prepped up and ready to go. You have no idea how much of a relief this is going to be for them, here, take some credits, you just got us back in business.”.

```text
Journal SW_Entertainers 15
player->additem, gold_001, 100
player->ModReputation 1
```

### Related records and locations

**Dialogue speakers:**
- Entertainer (`SW_DancingGirlQuestBitc`) — `Nar Shaddaa, 718 Hooga Alley`

**Scripts that read or write this journal:**
- `SW_EntertainScript` — Npc Entertainer (`SW_DancingGirlQuest1`); placed in `Nar Shaddaa, Lower City`; Npc Entertainer (`SW_DancingGirlQuest2`); placed in `Nar Shaddaa, Lower City`; Npc Entertainer (`SW_DancingGirlQuest3`); Npc Entertainer (`SW_DancingGirlQuest4`); Npc Entertainer (`SW_DancingGirlQuestBitc`); placed in `Nar Shaddaa, 718 Hooga Alley`
- `SW_EntertainScript2` — Npc Don Widge (`SW_NarGangsterEntertain`); placed in `Nar Shaddaa, Gang Hideout`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Nar Shaddaa, 718 Hooga Alley`
- `Nar Shaddaa, Gang Hideout`
- `Nar Shaddaa, Lower City`

<details><summary>Journal-state readers (2 code sites)</summary>

- Script `SW_EntertainScript`. attached to Npc Entertainer (`SW_DancingGirlQuest1`); placed in `Nar Shaddaa, Lower City`; Npc Entertainer (`SW_DancingGirlQuest2`); placed in `Nar Shaddaa, Lower City`; Npc Entertainer (`SW_DancingGirlQuest3`); Npc Entertainer (`SW_DancingGirlQuest4`); Npc Entertainer (`SW_DancingGirlQuestBitc`); placed in `Nar Shaddaa, 718 Hooga Alley`; Npc Duros (`SW_NarEntertainPatron1`); placed in `Nar Shaddaa, Lower City`; Npc Rodian Patron (`SW_NarEntertainPatron2`); placed in `Nar Shaddaa, Lower City`; Npc Maintenance Worker (`SW_NarEntertainPatron3`); placed in `Nar Shaddaa, Lower City`.
- Script `SW_EntertainScript2`. attached to Npc Don Widge (`SW_NarGangsterEntertain`); placed in `Nar Shaddaa, Gang Hideout`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: I found some entertainers at 718 Hooga Alley. They said there is a thug named Don Widge that hangs out in a hi…
- [ ] Reach index `10`: Don Widge is dead, I should return to the entertainers.
- [ ] Reach index `15`: The half naked women will resume their dancing now, that should bring a little life back to the bazaar.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_Entertainers`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
