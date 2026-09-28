---
title: "Bounty: Bounty Hunter Office"
description: "Walkthrough and QA reference for Bounty: Bounty Hunter Office (SW_BountyGuild8)."
weight: 14
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_BountyGuild8"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_BountyGuild8` |
| **Category** | Factions & Careers |
| **Journal entries** | 5 |
| **Completion branches** | 1 |
| **Starts by** | Record route requires playtest verification. |
| **Key locations** | Nar Shaddaa, Bounty Hunter Office |

## Walkthrough

### 1. Reach journal stage 5

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 5:** I've received a bounty for a Nautolan who was last spotted flying over Dantooine.

### 2. Reach journal stage 10

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 10:** I've killed my bounty and should return to the terminal at the Bounty Hunter Office for my reward.

### 3. Reach Nar Shaddaa, Bounty Hunter Office and allow the scripted event to complete — Finished

Reach **Nar Shaddaa, Bounty Hunter Office** and allow the scripted event to complete.

> **Expected journal update — index 15:** I turned in my Bounty and can return to the terminal to receive another whenever I please.

**Known item transfer:** 500 × **Credits** (`Gold_001`).

**Outcome:** this journal entry is marked as a finished branch.

### 4. Reach journal stage 20

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 20:** I've received a bounty for a Nautolan who was last spotted flying over Dantooine.

> **Playtest flag:** 3 journal stages on this page lack a literal setter in the current static scan.

## Endings & branches

The journal has one explicit finished state at **index 15**:

> I turned in my Bounty and can return to the terminal to receive another whenever I please.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 500 × **Credits** (`Gold_001`)

## Characters & locations

**Locations implicated by actor/object placement or explicit travel:**
- **Nar Shaddaa, Bounty Hunter Office**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_BountyGuild8`
**Generated category:** Factions & Careers
**Journal entries:** 5

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | I've received a bounty for a Nautolan who was last spotted flying over Dantooine. | 0 |
| 10 | — | I've killed my bounty and should return to the terminal at the Bounty Hunter Office for my reward. | 0 |
| 15 | Finished | I turned in my Bounty and can return to the terminal to receive another whenever I please. | 1 |
| 20 | Restart | I've received a bounty for a Nautolan who was last spotted flying over Dantooine. | 0 |

### Record-level trigger map

### Stage 5

I've received a bounty for a Nautolan who was last spotted flying over Dantooine.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 10

I've killed my bounty and should return to the terminal at the Bounty Hunter Office for my reward.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 15 — Finished

I turned in my Bounty and can return to the terminal to receive another whenever I please.

**How this stage is set:**
- Script `SW_GenerateBounty`. attached to Activator Bounty Terminal (`SW_TerminalBounty`); placed in `Nar Shaddaa, Bounty Hunter Office`.

```text
Set SW_GBounty7 to 0
        Elseif ( SW_GBounty8 >= 2 )
            Journal SW_BountyGuild8 15
            Player->Additem Gold_001 500
            MessageBox "You've collected your bounty."
```

### Stage 20 — Restart

I've received a bounty for a Nautolan who was last spotted flying over Dantooine.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Related records and locations

**Scripts that read or write this journal:**
- `SW_GenerateBounty` — Activator Bounty Terminal (`SW_TerminalBounty`); placed in `Nar Shaddaa, Bounty Hunter Office`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Nar Shaddaa, Bounty Hunter Office`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: I've received a bounty for a Nautolan who was last spotted flying over Dantooine.
- [ ] Reach index `10`: I've killed my bounty and should return to the terminal at the Bounty Hunter Office for my reward.
- [ ] Reach index `15` (`Finished`): I turned in my Bounty and can return to the terminal to receive another whenever I please.
- [ ] Reach index `20` (`Restart`): I've received a bounty for a Nautolan who was last spotted flying over Dantooine.
- [ ] Exercise at least one restart/repeat cycle; this journal contains a `Restart` marker.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_BountyGuild8`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
