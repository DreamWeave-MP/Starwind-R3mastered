---
title: "The Dantari"
description: "Walkthrough and QA reference for The Dantari (SW_DantariJourn)."
weight: 84
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_DantariJourn"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_DantariJourn` |
| **Category** | Side Quests |
| **Journal entries** | 3 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Lateng Courte** in **Dantooine, Czerka Office** and ask about **Dantari**. |
| **Key locations** | Dantooine, Czerka Office, Dantooine, Daranti Stronghold |
| **Key characters** | Lateng Courte |

## Walkthrough

### 1. Speak with Lateng Courte in Dantooine, Czerka Office and ask about Dantari

Speak with **Lateng Courte** in **Dantooine, Czerka Office** and ask about **Dantari**.

> **Expected journal update — index 5:** The Dantari are natives of Dantooine that lack the capacity for intelligence that most sentient life in the galaxy has. I should hit their stronghold, and with great caution as they are apparently practiced hunters.

### 2. Use Born a jedi — Finished

The records expose more than one way to reach this journal update:
- Use **Born a jedi**.
- Defeat **Daranti Warlord** in **Dantooine, Daranti Stronghold** and allow its script to update the quest.

> **Expected journal update — index 10:** I have killed the Dantari Chieftain, I don't believe that the disappearances were due to the Dantari, although if they were then they won't be bothering Ballast for a long, long time.

**Known item transfer:** 3000 × **Credits** (`Gold_001`).

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 10**:

> I have killed the Dantari Chieftain, I don't believe that the disappearances were due to the Dantari, although if they were then they won't be bothering Ballast for a long, long time.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 3000 × **Credits** (`Gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Lateng Courte** (`SW_CzerkaCourte`) — `Dantooine, Czerka Office`

**Locations implicated by actor/object placement or explicit travel:**
- **Dantooine, Czerka Office**
- **Dantooine, Daranti Stronghold**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_DantariJourn`
**Generated category:** Side Quests
**Journal entries:** 3

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | The Dantari are natives of Dantooine that lack the capacity for intelligence that most sentient life in the galaxy has. I should hit their stronghold, and with great caution as they are apparently practiced hunters. | 1 |
| 10 | Finished | I have killed the Dantari Chieftain, I don't believe that the disappearances were due to the Dantari, although if they were then they won't be bothering Ballast for a long, long time. | 2 |

### Record-level trigger map

### Stage 5

The Dantari are natives of Dantooine that lack the capacity for intelligence that most sentient life in the galaxy has. I should hit their stronghold, and with great caution as they are apparently practiced hunters.

**How this stage is set:**
- Dialogue INFO `14642225991925125223` under topic **Dantari**; speaker Lateng Courte (`SW_CzerkaCourte`). locations: `Dantooine, Czerka Office`. conditions: Journal `SW_DantariJourn` Less 5. response: “The Dantari are natives of Dantooine that lack the capacity for intelligence that most sentient life in the galaxy has, they are tribal and don't speak enough to make peace with anyone. You'll find their stronghold north of Ballast, and then West of the hunting grounds. Be careful though, these people are very seasoned hunters.”.

```text
Journal SW_DantariJourn 5
```

### Stage 10 — Finished

I have killed the Dantari Chieftain, I don't believe that the disappearances were due to the Dantari, although if they were then they won't be bothering Ballast for a long, long time.

**How this stage is set:**
- Script `BornaJedi`. attached to Door Born a jedi (`SW_CharGenPodDoor2`).

```text
Journal SW_JitaiiJourn 15
        Journal SW_ZanottiJourn 15
        Journal SW_DantariJourn 10
        Journal SW_DantJourn 30
        player->additem Gold_001 3000
```
- Script `SW_DeadWarlord`. attached to Npc Daranti Warlord (`SW_DarantiWarlord`); placed in `Dantooine, Daranti Stronghold`.

```text
if ( OnDeath == 1 )
        if ( GetJournalIndex "SW_DantariJourn" == 5 )
            Journal SW_DantariJourn 10
        endif
endif
```

### Related records and locations

**Dialogue speakers:**
- Lateng Courte (`SW_CzerkaCourte`) — `Dantooine, Czerka Office`

**Scripts that read or write this journal:**
- `BornaJedi` — Door Born a jedi (`SW_CharGenPodDoor2`)
- `SW_DeadWarlord` — Npc Daranti Warlord (`SW_DarantiWarlord`); placed in `Dantooine, Daranti Stronghold`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)
- Midichlorian Implant (`SW_ImplantManaMinor`)
- Jedi Robe Bottoms (`SW_JRobeBrownPant`)
- Jedi Robe Top (`SW_JRobeBrownTop`)
- Guardian's Green Lightsaber (`SW_LightSabGrdGreenB`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Dantooine, Czerka Office`
- `Dantooine, Daranti Stronghold`

<details><summary>Journal-state readers (1 code sites)</summary>

- Script `SW_DeadWarlord`. attached to Npc Daranti Warlord (`SW_DarantiWarlord`); placed in `Dantooine, Daranti Stronghold`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: The Dantari are natives of Dantooine that lack the capacity for intelligence that most sentient life in the ga…
- [ ] Reach index `10` (`Finished`): I have killed the Dantari Chieftain, I don't believe that the disappearances were due to the Dantari, although…
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_DantariJourn`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
