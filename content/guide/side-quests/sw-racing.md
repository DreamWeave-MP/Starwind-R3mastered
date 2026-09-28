---
title: "Swoop Racing"
description: "Walkthrough and QA reference for Swoop Racing (SW_Racing)."
weight: 74
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_Racing"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_Racing` |
| **Category** | Side Quests |
| **Journal entries** | 2 |
| **Completion branches** | No explicit Finished marker |
| **Starts by** | Speak with **Blaine Willikie** in **Tatooine Czerka Office** and ask about **investigate the race**. |
| **Observed prerequisite journals** | `SW_Race` |
| **Key locations** | Tatooine Czerka Office |
| **Key characters** | Blaine Willikie |

## Walkthrough

### 1. Speak with Blaine Willikie in Tatooine Czerka Office and ask about investigate the race

Speak with **Blaine Willikie** in **Tatooine Czerka Office** and ask about **investigate the race**.

> **Expected journal update — index 1:** Now that the swoop racing drama is over with I can now utilize the race track through Hungox the Hutt, I should speak to his steward to enter the track.

**Known item transfer:** 1000 × **Credits** (`Gold_001`).

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 1000 × **Credits** (`Gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Blaine Willikie** (`SW_CzerkaOfficeGuy`) — `Tatooine Czerka Office`

**Locations implicated by actor/object placement or explicit travel:**
- **Tatooine Czerka Office**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_Racing`
**Generated category:** Side Quests
**Journal entries:** 2

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 1 | — | Now that the swoop racing drama is over with I can now utilize the race track through Hungox the Hutt, I should
<br>speak to his steward to enter the track. | 1 |

### Record-level trigger map

### Stage 1

Now that the swoop racing drama is over with I can now utilize the race track through Hungox the Hutt, I should
speak to his steward to enter the track.

**How this stage is set:**
- Dialogue INFO `141112732411421727` under topic **investigate the race**; speaker Blaine Willikie (`SW_CzerkaOfficeGuy`). locations: `Tatooine Czerka Office`. conditions: Journal `SW_Race` Equal 35. response: “Well done, that's all the proof we need. We can force them to give us the winnings now. Here's 1,000 credits for your service. Also you've proven to be pretty capable, you may want to try swoop racing out for yourself, the track is open for business now. Unfortunately, it's ran by Hungox, but if you can take their credits from them then I say go for it.”.

```text
Journal "SW_Race" 40
Journal "SW_Racing" 1
player->additem Gold_001, 1000
player->modReputation 1
```

### Related records and locations

**Dialogue speakers:**
- Blaine Willikie (`SW_CzerkaOfficeGuy`) — `Tatooine Czerka Office`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Tatooine Czerka Office`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `1` is obtainable.
- [ ] Reach index `1`: Now that the swoop racing drama is over with I can now utilize the race track through Hungox the Hutt, I shoul…
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_Racing`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
