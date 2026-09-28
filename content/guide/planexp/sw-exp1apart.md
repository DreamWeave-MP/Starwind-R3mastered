---
title: "Waterfront Home"
description: "Walkthrough and QA reference for Waterfront Home (SW_Exp1Apart)."
weight: 14
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_Exp1Apart"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_Exp1Apart` |
| **Category** | Expansion / PlanExp |
| **Journal entries** | 3 |
| **Completion branches** | 1 |
| **Starts by** | Record route requires playtest verification. |

## Walkthrough

### 1. Reach journal stage 5

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 5:** There is an apartment for sale in Manaan's Inner city in the Ghurba Apartments. I should speak to an administrator on either side of the inner city if I wish to purchase the home.

### 2. Reach journal stage 10 — Finished

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 10:** I have purchased the apartment Ghurba 5 in the inner city of Manaan.

**Outcome:** this journal entry is marked as a finished branch.

> **Playtest flag:** 2 journal stages on this page lack a literal setter in the current static scan.

## Endings & branches

The journal has one explicit finished state at **index 10**:

> I have purchased the apartment Ghurba 5 in the inner city of Manaan.

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_Exp1Apart`
**Generated category:** Expansion / PlanExp
**Journal entries:** 3

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | There is an apartment for sale in Manaan's Inner city in the Ghurba Apartments. I should speak to an administrator on either side of the inner city if I wish to purchase the home. | 0 |
| 10 | Finished | I have purchased the apartment Ghurba 5 in the inner city of Manaan. | 0 |

### Record-level trigger map

### Stage 5

There is an apartment for sale in Manaan's Inner city in the Ghurba Apartments. I should speak to an administrator on either side of the inner city if I wish to purchase the home.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 10 — Finished

I have purchased the apartment Ghurba 5 in the inner city of Manaan.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Related records and locations



### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: There is an apartment for sale in Manaan's Inner city in the Ghurba Apartments. I should speak to an administr…
- [ ] Reach index `10` (`Finished`): I have purchased the apartment Ghurba 5 in the inner city of Manaan.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_Exp1Apart`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
