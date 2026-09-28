---
title: "A Combat Error"
description: "Walkthrough and QA reference for A Combat Error (SW_ModuleJourn)."
weight: 1
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_ModuleJourn"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_ModuleJourn` |
| **Category** | Side Quests |
| **Journal entries** | 4 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **HK-43** in **Gamorr, Ucksmug** and ask about **issue**. |
| **Key locations** | Gamorr, Ucksmug |
| **Key characters** | HK-43 |

## Walkthrough

### 1. Speak with HK-43 in Gamorr, Ucksmug and ask about issue

Speak with **HK-43** in **Gamorr, Ucksmug** and ask about **issue**.

> **Expected journal update — index 5:** An HK series assassin droid has had it's combat module removed by some ignorant Gammoreans who were attempting to reprogram it. He wants me to find it, and says that those scraps were taken in a Redhair raid. I should search the desert for the Redhair Clan and see if I can find the combat module.

### 2. Reach journal stage 10

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 10:** I have found the combat module, I should return this to the HK series assassin droid in Ucksmug.

### 3. Speak with HK-43 in Gamorr, Ucksmug and ask about issue — Finished

Speak with **HK-43** in **Gamorr, Ucksmug** and ask about **issue**.

> **Expected journal update — index 15:** I've given the HK series droid his combat module, and in return he's given me some credits that he's stolen from the scraphouse.

**Known item transfer:** 500 × **Credits** (`gold_001`).

**Outcome:** this journal entry is marked as a finished branch.

{% callout(kind="warning", title="Playtest flag") %}
1 journal stage on this page lack a literal setter in the current static scan.
{% end %}

## Endings & branches

The journal has one explicit finished state at **index 15**:

> I've given the HK series droid his combat module, and in return he's given me some credits that he's stolen from the scraphouse.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 500 × **Credits** (`gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **HK-43** (`SW_GamorrShady`) — `Gamorr, Ucksmug`

**Locations implicated by actor/object placement or explicit travel:**
- **Gamorr, Ucksmug**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_ModuleJourn`
**Generated category:** Side Quests
**Journal entries:** 4

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | An HK series assassin droid has had it's combat module removed by some ignorant Gammoreans who were attempting to reprogram it. He wants me to find it, and says that those scraps were taken in a Redhair raid. I should search the desert for the Redhair Clan and see if I can find the combat module. | 1 |
| 10 | — | I have found the combat module, I should return this to the HK series assassin droid in Ucksmug. | 0 |
| 15 | Finished | I've given the HK series droid his combat module, and in return he's given me some credits that he's stolen from the scraphouse. | 1 |

### Record-level trigger map

### Stage 5

An HK series assassin droid has had it's combat module removed by some ignorant Gammoreans who were attempting to reprogram it. He wants me to find it, and says that those scraps were taken in a Redhair raid. I should search the desert for the Redhair Clan and see if I can find the combat module.

**How this stage is set:**
- Dialogue INFO `25764937731870215` under topic **issue**; speaker HK-43 (`SW_GamorrShady`). locations: `Gamorr, Ucksmug`. conditions: Journal `SW_ModuleJourn` Equal 0. response: “My combat module was ripped out of me by these ignorant meat pigs thinking they could reprogram me. I'm an assassin droid without a combat module, and I'm not very happy about it. I would just go take it back, but they put it in the scraphouse and it got taken by the Redhair Clan in a raid. I need someone to get it back, if you happen back out into that desert and can find the precious piece of equipment, I would be very grateful if you returned it to me.”.

```text
Journal SW_ModuleJourn 5
```

### Stage 10

I have found the combat module, I should return this to the HK series assassin droid in Ucksmug.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 15 — Finished

I've given the HK series droid his combat module, and in return he's given me some credits that he's stolen from the scraphouse.

**How this stage is set:**
- Dialogue INFO `287478100234377750` under topic **issue**; speaker HK-43 (`SW_GamorrShady`). locations: `Gamorr, Ucksmug`. conditions: Journal `SW_ModuleJourn` GreaterEqual 5; Journal `SW_ModuleJourn` NotEqual 15; Item/ItemType `SW_CombatModule` GreaterEqual 1. response: “My combat module, the only thing that matters in my existence. I stole this from the scrapyard, I hope it aids you in your travels.”.

```text
Journal SW_ModuleJourn 15
player->removeitem, sw_combatmodule, 1
player->additem, gold_001, 500
```

### Related records and locations

**Dialogue speakers:**
- HK-43 (`SW_GamorrShady`) — `Gamorr, Ucksmug`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)
- Combat Module (`SW_CombatModule`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Gamorr, Ucksmug`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: An HK series assassin droid has had it's combat module removed by some ignorant Gammoreans who were attempting…
- [ ] Reach index `10`: I have found the combat module, I should return this to the HK series assassin droid in Ucksmug.
- [ ] Reach index `15` (`Finished`): I've given the HK series droid his combat module, and in return he's given me some credits that he's stolen fr…
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_ModuleJourn`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
