---
title: "Bounty: Bounty Hunter Office"
description: "Walkthrough and QA reference for Bounty: Bounty Hunter Office (SW_BountyGuild12)."
weight: 4
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_BountyGuild12"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_BountyGuild12` |
| **Category** | Factions & Careers |
| **Journal entries** | 5 |
| **Completion branches** | 1 |
| **Starts by** | Record route requires playtest verification. |

## Walkthrough

### 1. Reach journal stage 5

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 5:** I've received a bounty for a Kadas'sa'Nikto who was last reported causing trouble on Nar Shaddaa.

### 2. Reach journal stage 10

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 10:** I've killed my bounty and should return to the terminal at the Bounty Hunter Office for my reward.

### 3. Reach journal stage 15 — Finished

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 15:** I turned in my Bounty and can return to the terminal to receive another whenever I please.

**Outcome:** this journal entry is marked as a finished branch.

### 4. Reach journal stage 20

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 20:** I've received a bounty for a Kadas'sa'Nikto who was last reported causing trouble on Nar Shaddaa.

> **Playtest flag:** 4 journal stages on this page lack a literal setter in the current static scan.

## Endings & branches

The journal has one explicit finished state at **index 15**:

> I turned in my Bounty and can return to the terminal to receive another whenever I please.

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_BountyGuild12`
**Generated category:** Factions & Careers
**Journal entries:** 5

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | I've received a bounty for a Kadas'sa'Nikto who was last reported causing trouble on Nar Shaddaa. | 0 |
| 10 | — | I've killed my bounty and should return to the terminal at the Bounty Hunter Office for my reward. | 0 |
| 15 | Finished | I turned in my Bounty and can return to the terminal to receive another whenever I please. | 0 |
| 20 | Restart | I've received a bounty for a Kadas'sa'Nikto who was last reported causing trouble on Nar Shaddaa. | 0 |

### Record-level trigger map

### Stage 5

I've received a bounty for a Kadas'sa'Nikto who was last reported causing trouble on Nar Shaddaa.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 10

I've killed my bounty and should return to the terminal at the Bounty Hunter Office for my reward.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 15 — Finished

I turned in my Bounty and can return to the terminal to receive another whenever I please.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 20 — Restart

I've received a bounty for a Kadas'sa'Nikto who was last reported causing trouble on Nar Shaddaa.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Related records and locations



### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: I've received a bounty for a Kadas'sa'Nikto who was last reported causing trouble on Nar Shaddaa.
- [ ] Reach index `10`: I've killed my bounty and should return to the terminal at the Bounty Hunter Office for my reward.
- [ ] Reach index `15` (`Finished`): I turned in my Bounty and can return to the terminal to receive another whenever I please.
- [ ] Reach index `20` (`Restart`): I've received a bounty for a Kadas'sa'Nikto who was last reported causing trouble on Nar Shaddaa.
- [ ] Exercise at least one restart/repeat cycle; this journal contains a `Restart` marker.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_BountyGuild12`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
