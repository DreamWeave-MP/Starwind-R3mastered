---
title: "Escape Nar Shaddaa"
description: "Walkthrough and QA reference for Escape Nar Shaddaa (SW_Escape)."
weight: 37
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_Escape"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_Escape` |
| **Category** | Side Quests |
| **Journal entries** | 4 |
| **Completion branches** | 1 |
| **Starts by** | Record route requires playtest verification. |
| **Key characters** | Rondalan Oomfar |

## Walkthrough

### 1. Reach journal stage 5

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 5:** I've heard of a travel service ran by the Hutt Cartel in the area, I'll have to go to their base of operations at the central market and see if I can get access to their ship.

### 2. Speak with Rondalan Oomfar and ask about way off this planet

Speak with **Rondalan Oomfar** and ask about **way off this planet**.

> **Expected journal update — index 10:** The local Hutt Cartel will trade me traveling services for eliminating a group of Exchange Syndicate gangsters that are attempting to take control of a building nearby. I should kill the gang leader and then return to the Hutt base.

### 3. Speak with Rondalan Oomfar and ask about way off this planet — Finished

Speak with **Rondalan Oomfar** and ask about **way off this planet**.

> **Expected journal update — index 15:** I have returned to the Hutt Cartel and they are now allowing me to use their travel service, for a price. I can passenger their ship from Nar Shaddaa to Manaan and back any time I wish.

**Known item transfer:** 1 × **Hutt Roof Key** (`SW_NarKey`), 1 × **Worn Key** (`SW_NarBayKey`).

**Outcome:** this journal entry is marked as a finished branch.

> **Playtest flag:** 1 journal stage on this page lack a literal setter in the current static scan.

## Endings & branches

The journal has one explicit finished state at **index 15**:

> I have returned to the Hutt Cartel and they are now allowing me to use their travel service, for a price. I can passenger their ship from Nar Shaddaa to Manaan and back any time I wish.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 1 × **Hutt Roof Key** (`SW_NarKey`)
- 1 × **Worn Key** (`SW_NarBayKey`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Rondalan Oomfar** (`SW_NarReceptionist`)

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_Escape`
**Generated category:** Side Quests
**Journal entries:** 4

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | I've heard of a travel service ran by the Hutt Cartel in the area, I'll have to go to their base of operations at the central market and see if I can get access to their ship. | 0 |
| 10 | — | The local Hutt Cartel will trade me traveling services for eliminating a group of Exchange Syndicate gangsters that are attempting to take control of a building nearby. I should kill the gang leader and then return to the Hutt base. | 1 |
| 15 | Finished | I have returned to the Hutt Cartel and they are now allowing me to use their travel service, for a price. I can passenger their ship from Nar Shaddaa to Manaan and back any time I wish. | 1 |

### Record-level trigger map

### Stage 5

I've heard of a travel service ran by the Hutt Cartel in the area, I'll have to go to their base of operations at the central market and see if I can get access to their ship.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 10

The local Hutt Cartel will trade me traveling services for eliminating a group of Exchange Syndicate gangsters that are attempting to take control of a building nearby. I should kill the gang leader and then return to the Hutt base.

**How this stage is set:**
- Dialogue INFO `10801326292175217094` under topic **way off this planet**; speaker Rondalan Oomfar (`SW_NarReceptionist`). response: “We have a ship, but you getting acess to it is another story. We've can always make a deal, though. The Exchange Syndicate is giving us some problems in the area, we're not sure where they are hiding yet. Find them, kill them, kill their boss. You do that and you can use our ship.”.

```text
Journal SW_Escape 10
```

### Stage 15 — Finished

I have returned to the Hutt Cartel and they are now allowing me to use their travel service, for a price. I can passenger their ship from Nar Shaddaa to Manaan and back any time I wish.

**How this stage is set:**
- Dialogue INFO `814616136229169389` under topic **way off this planet**; speaker Rondalan Oomfar (`SW_NarReceptionist`). conditions: Journal `SW_Escape` Equal 10; Dead/DeadType `SW_ExchangeHostBoss` GreaterEqual 1. response: “From what I've been told the job has been done. The door is unlocked go on up. We still charge for the service, though.”.

```text
Journal SW_Escape 15
player->additem "SW_NarKey",1
player->additem "SW_NarBayKey",1
```

### Related records and locations

**Dialogue speakers:**
- Rondalan Oomfar (`SW_NarReceptionist`)

**Items referenced by related script/result code:**
- Worn Key (`SW_NarBayKey`)
- Hutt Roof Key (`SW_NarKey`)

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: I've heard of a travel service ran by the Hutt Cartel in the area, I'll have to go to their base of operations…
- [ ] Reach index `10`: The local Hutt Cartel will trade me traveling services for eliminating a group of Exchange Syndicate gangsters…
- [ ] Reach index `15` (`Finished`): I have returned to the Hutt Cartel and they are now allowing me to use their travel service, for a price. I ca…
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_Escape`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
