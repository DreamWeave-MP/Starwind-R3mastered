---
title: "Tank Down"
description: "Walkthrough and QA reference for Tank Down (SW_TankQuest)."
weight: 75
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_TankQuest"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_TankQuest` |
| **Category** | Side Quests |
| **Journal entries** | 3 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Lucienelle Sentry Droid** in **Dantooine, Dantari Wilds**. |
| **Key locations** | Dantooine, Dantari Wilds |
| **Key characters** | Lucienelle Sentry Droid |

## Walkthrough

### 1. Speak with Lucienelle Sentry Droid in Dantooine, Dantari Wilds

Speak with **Lucienelle Sentry Droid** in **Dantooine, Dantari Wilds**.

> **Expected journal update — index 5:** I spoke to a Lucienelle Sentry Droid outside of Ballast where a tank was down. Seems they got hit by some mandalorian raiders. The droid has asked if I could get ten spare parts and a repair kit to repair the tank with. I should speak to him after I get the items.

### 2. Speak with Lucienelle Sentry Droid in Dantooine, Dantari Wilds — Finished

Speak with **Lucienelle Sentry Droid** in **Dantooine, Dantari Wilds**.

> **Expected journal update — index 10:** I returned to the sentry droid attending to the tank outside of ballast with the items to repair it. He

**Known item transfer:** 300 × **Credits** (`Gold_001`).

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 10**:

> I returned to the sentry droid attending to the tank outside of ballast with the items to repair it. He

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 300 × **Credits** (`Gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Lucienelle Sentry Droid** (`SW_LucienelleGuardTanke`) — `Dantooine, Dantari Wilds`

**Locations implicated by actor/object placement or explicit travel:**
- **Dantooine, Dantari Wilds**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_TankQuest`
**Generated category:** Side Quests
**Journal entries:** 3

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | I spoke to a Lucienelle Sentry Droid outside of Ballast where a tank was down. Seems they got hit by some mandalorian raiders. The droid has asked if I could get ten spare parts and a repair kit to repair the tank with. I should speak to him after I get the items. | 1 |
| 10 | Finished | I returned to the sentry droid attending to the tank outside of ballast with the items to repair it. He | 1 |

### Record-level trigger map

### Stage 5

I spoke to a Lucienelle Sentry Droid outside of Ballast where a tank was down. Seems they got hit by some mandalorian raiders. The droid has asked if I could get ten spare parts and a repair kit to repair the tank with. I should speak to him after I get the items.

**How this stage is set:**
- Dialogue INFO `2357420102444232038` under topic **Greeting 7**; speaker Lucienelle Sentry Droid (`SW_LucienelleGuardTanke`). locations: `Dantooine, Dantari Wilds`. conditions: Journal `SW_TankQuest` Equal 0. response: “Greeting: Hello, we are having difficulties with our tank. Mandalorian raiders have been hitting our patrols and we need to get this machine back up and running. If you would return with 10 spare parts and a repair kit, I will have no choice but to reward you.”.

```text
Journal SW_TankQuest 5
```

### Stage 10 — Finished

I returned to the sentry droid attending to the tank outside of ballast with the items to repair it. He

**How this stage is set:**
- Dialogue INFO `10860300401267013687` under topic **Greeting 7**; speaker Lucienelle Sentry Droid (`SW_LucienelleGuardTanke`). locations: `Dantooine, Dantari Wilds`. conditions: Journal `SW_TankQuest` Equal 5; Item/ItemType `SW_Spare` GreaterEqual 10; Item/ItemType `SW_RepairKit` GreaterEqual 1. response: “Exclamation: Wonderful, the parts to fix the tank! I will get to work on this right away, thank you, and here are 300 credits for your assistance!”.

```text
player->removeitem, "SW_RepairKit", 1
player->additem, "Gold_001", 300
Journal SW_TankQuest 10
SW_TankSmoke1->Disable
SW_TankSmoke2->Disable
```

### Related records and locations

**Dialogue speakers:**
- Lucienelle Sentry Droid (`SW_LucienelleGuardTanke`) — `Dantooine, Dantari Wilds`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)
- Repair Kit (`SW_RepairKit`)
- Spare Parts (`SW_Spare`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Dantooine, Dantari Wilds`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: I spoke to a Lucienelle Sentry Droid outside of Ballast where a tank was down. Seems they got hit by some mand…
- [ ] Reach index `10` (`Finished`): I returned to the sentry droid attending to the tank outside of ballast with the items to repair it. He
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_TankQuest`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
