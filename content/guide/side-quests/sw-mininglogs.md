---
title: "Mining Logs"
description: "Walkthrough and QA reference for Mining Logs (SW_MiningLogs)."
weight: 51
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_MiningLogs"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_MiningLogs` |
| **Category** | Side Quests |
| **Journal entries** | 3 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Czerka Protocol Officer** in **Dantooine, Czerka Mining Office** and ask about **mining logs**. |
| **Key locations** | Dantooine, Czerka Mining Office |
| **Key characters** | Czerka Protocol Officer |

## Walkthrough

### 1. Speak with Czerka Protocol Officer in Dantooine, Czerka Mining Office and ask about mining logs

Speak with **Czerka Protocol Officer** in **Dantooine, Czerka Mining Office** and ask about **mining logs**.

> **Expected journal update — index 5:** The Czerka Mining Office on Dantooine would like for me to retrieve the mining logs from the rakghoul infested Terenthium Mine.

### 2. Speak with Czerka Protocol Officer in Dantooine, Czerka Mining Office and ask about mining logs — Finished

Speak with **Czerka Protocol Officer** in **Dantooine, Czerka Mining Office** and ask about **mining logs**.

> **Expected journal update — index 10:** I have returned the mining logs in exchange for 200 credits.

**Known item transfer:** 200 × **Credits** (`gold_001`).

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 10**:

> I have returned the mining logs in exchange for 200 credits.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 200 × **Credits** (`gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Czerka Protocol Officer** (`SW_CzerkaMineHead`) — `Dantooine, Czerka Mining Office`

**Locations implicated by actor/object placement or explicit travel:**
- **Dantooine, Czerka Mining Office**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_MiningLogs`
**Generated category:** Side Quests
**Journal entries:** 3

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | The Czerka Mining Office on Dantooine would like for me to retrieve the mining logs from the rakghoul infested Terenthium Mine. | 1 |
| 10 | Finished | I have returned the mining logs in exchange for 200 credits. | 1 |

### Record-level trigger map

### Stage 5

The Czerka Mining Office on Dantooine would like for me to retrieve the mining logs from the rakghoul infested Terenthium Mine.

**How this stage is set:**
- Dialogue INFO `27331665320424194` under topic **mining logs**; speaker Czerka Protocol Officer (`SW_CzerkaMineHead`). locations: `Dantooine, Czerka Mining Office`. conditions: Journal `SW_MiningLogs` Equal 0. response: “We have some mining logs in that mine that need to be recovered, but the area is infested with rakghouls. I'll give you 200 credits if you decide to wander in there and happen to find them.”.

```text
Journal SW_MiningLogs 5
```

### Stage 10 — Finished

I have returned the mining logs in exchange for 200 credits.

**How this stage is set:**
- Dialogue INFO `914621472397714775` under topic **mining logs**; speaker Czerka Protocol Officer (`SW_CzerkaMineHead`). locations: `Dantooine, Czerka Mining Office`. conditions: Journal `SW_MiningLogs` Equal 5; Item/ItemType `SW_MiningLogs` GreaterEqual 1. response: “Those are the logs we need, we appreciate it, these 200 credits are all yours.”.

```text
Journal SW_MiningLogs 10
player->additem "gold_001", 200
player->removeitem "SW_MiningLogs", 1
```

### Related records and locations

**Dialogue speakers:**
- Czerka Protocol Officer (`SW_CzerkaMineHead`) — `Dantooine, Czerka Mining Office`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)
- `SW_MiningLogs`

**Cells implicated by actor/object placement or explicit travel code:**
- `Dantooine, Czerka Mining Office`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: The Czerka Mining Office on Dantooine would like for me to retrieve the mining logs from the rakghoul infested…
- [ ] Reach index `10` (`Finished`): I have returned the mining logs in exchange for 200 credits.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_MiningLogs`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
