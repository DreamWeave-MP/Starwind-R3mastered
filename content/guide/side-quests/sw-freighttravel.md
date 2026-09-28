---
title: "Space Travel"
description: "Walkthrough and QA reference for Space Travel (SW_FreightTravel)."
weight: 70
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_FreightTravel"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_FreightTravel` |
| **Category** | Side Quests |
| **Journal entries** | 8 |
| **Completion branches** | No explicit Finished marker |
| **Starts by** | Record route requires playtest verification. |

## Walkthrough

### 1. Reach journal stage 1

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 1:** Now that I have my own freighter I can use the map in the cockpit to travel to different planets, using the exit door just east of the main hold.

### 2. Reach journal stage 5

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 5:** I have landed my ship on Tatooine.

### 3. Reach journal stage 10

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 10:** I have landed my ship on Dantooine.

### 4. Reach journal stage 15

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 15:** I have landed my ship on Kashyyk.

### 5. Reach journal stage 20

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 20:** I have landed my ship on Manaan.

### 6. Reach journal stage 25

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 25:** I have landed my ship on Nar Shaddaa.

### 7. Reach journal stage 30

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 30:** I have landed my ship on Nar Korriban.

{% callout(kind="warning", title="Playtest flag") %}
7 journal stages on this page lack a literal setter in the current static scan.
{% end %}

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_FreightTravel`
**Generated category:** Side Quests
**Journal entries:** 8

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 1 | — | Now that I have my own freighter I can use the map in the cockpit to travel to different planets, using the exit door just east of the main hold. | 0 |
| 5 | — | I have landed my ship on Tatooine. | 0 |
| 10 | — | I have landed my ship on Dantooine. | 0 |
| 15 | — | I have landed my ship on Kashyyk. | 0 |
| 20 | — | I have landed my ship on Manaan. | 0 |
| 25 | — | I have landed my ship on Nar Shaddaa. | 0 |
| 30 | — | I have landed my ship on Nar Korriban. | 0 |

### Record-level trigger map

### Stage 1

Now that I have my own freighter I can use the map in the cockpit to travel to different planets, using the exit door just east of the main hold.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 5

I have landed my ship on Tatooine.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 10

I have landed my ship on Dantooine.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 15

I have landed my ship on Kashyyk.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 20

I have landed my ship on Manaan.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 25

I have landed my ship on Nar Shaddaa.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 30

I have landed my ship on Nar Korriban.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Related records and locations



### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `1` is obtainable.
- [ ] Reach index `1`: Now that I have my own freighter I can use the map in the cockpit to travel to different planets, using the ex…
- [ ] Reach index `5`: I have landed my ship on Tatooine.
- [ ] Reach index `10`: I have landed my ship on Dantooine.
- [ ] Reach index `15`: I have landed my ship on Kashyyk.
- [ ] Reach index `20`: I have landed my ship on Manaan.
- [ ] Reach index `25`: I have landed my ship on Nar Shaddaa.
- [ ] Reach index `30`: I have landed my ship on Nar Korriban.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_FreightTravel`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
