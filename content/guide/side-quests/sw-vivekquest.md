---
title: "Feud of the Force"
description: "Walkthrough and QA reference for Feud of the Force (SW_VivekQuest)."
weight: 40
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_VivekQuest"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_VivekQuest` |
| **Category** | Side Quests |
| **Journal entries** | 3 |
| **Completion branches** | 1 |
| **Starts by** | Record route requires playtest verification. |

## Walkthrough

### 1. Reach journal stage 1

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 1:** I have accepted a mission from Jedi Master Vivek to slay the Sith Lord Yargrum

### 2. Reach journal stage 5 — Finished

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 5:** I slain the Sith Lord Yargrum and returned to Jedi Master Vivek for my reward.

**Outcome:** this journal entry is marked as a finished branch.

{% callout(kind="warning", title="Playtest flag") %}
2 journal stages on this page lack a literal setter in the current static scan.
{% end %}

## Endings & branches

The journal has one explicit finished state at **index 5**:

> I slain the Sith Lord Yargrum and returned to Jedi Master Vivek for my reward.

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_VivekQuest`
**Generated category:** Side Quests
**Journal entries:** 3

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 1 | — | I have accepted a mission from Jedi Master Vivek to slay the Sith Lord Yargrum | 0 |
| 5 | Finished | I slain the Sith Lord Yargrum and returned to Jedi Master Vivek for my reward. | 0 |

### Record-level trigger map

### Stage 1

I have accepted a mission from Jedi Master Vivek to slay the Sith Lord Yargrum

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 5 — Finished

I slain the Sith Lord Yargrum and returned to Jedi Master Vivek for my reward.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Related records and locations



### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `1` is obtainable.
- [ ] Reach index `1`: I have accepted a mission from Jedi Master Vivek to slay the Sith Lord Yargrum
- [ ] Reach index `5` (`Finished`): I slain the Sith Lord Yargrum and returned to Jedi Master Vivek for my reward.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_VivekQuest`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
