---
title: "Bounty: Bounty Hunter Office"
description: "Walkthrough and QA reference for Bounty: Bounty Hunter Office (SW_BountyGuild1)."
weight: 1
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_BountyGuild1"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_BountyGuild1` |
| **Category** | Factions & Careers |
| **Journal entries** | 4 |
| **Completion branches** | No explicit Finished marker |
| **Starts by** | Record route requires playtest verification. |

## Walkthrough

### 1. Reach journal stage 5

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 5:** I've received a bounty for a Togruta smuggler that was last seen hiding out with his gangsters on Tatooine.

### 2. Reach journal stage 10

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 10:** I've killed my bounty and should return to the terminal at the Bounty Hunter Office for my reward.

### 3. Reach journal stage 15

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 15:** I turned in my Bounty and can return to the terminal to receive another whenever I please.

> **Playtest flag:** 3 journal stages on this page lack a literal setter in the current static scan.

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_BountyGuild1`
**Generated category:** Factions & Careers
**Journal entries:** 4

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | I've received a bounty for a Togruta smuggler that was last seen hiding out with his gangsters on Tatooine. | 0 |
| 10 | — | I've killed my bounty and should return to the terminal at the Bounty Hunter Office for my reward. | 0 |
| 15 | Restart | I turned in my Bounty and can return to the terminal to receive another whenever I please. | 0 |

### Record-level trigger map

### Stage 5

I've received a bounty for a Togruta smuggler that was last seen hiding out with his gangsters on Tatooine.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 10

I've killed my bounty and should return to the terminal at the Bounty Hunter Office for my reward.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 15 — Restart

I turned in my Bounty and can return to the terminal to receive another whenever I please.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Related records and locations



### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: I've received a bounty for a Togruta smuggler that was last seen hiding out with his gangsters on Tatooine.
- [ ] Reach index `10`: I've killed my bounty and should return to the terminal at the Bounty Hunter Office for my reward.
- [ ] Reach index `15` (`Restart`): I turned in my Bounty and can return to the terminal to receive another whenever I please.
- [ ] Exercise at least one restart/repeat cycle; this journal contains a `Restart` marker.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_BountyGuild1`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
