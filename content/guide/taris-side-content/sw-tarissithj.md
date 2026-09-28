---
title: "Taris Sith J (internal journal)"
description: "Walkthrough and QA reference for Taris Sith J (internal journal) (SW_TarisSithJ)."
weight: 6
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_TarisSithJ"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_TarisSithJ` |
| **Category** | Taris Side Content |
| **Journal entries** | 1 |
| **Completion branches** | No explicit Finished marker |
| **Starts by** | Record route requires playtest verification. |

## Walkthrough

### 1. Reach journal stage 10

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 10:** I was told by an ex-Sith on Taris that Darth Malak laid siege upon the planet with his own troops still within. Many of the troops that remain here no longer associate with the Sith.

{% callout(kind="warning", title="Playtest flag") %}
1 journal stage on this page lack a literal setter in the current static scan.
{% end %}

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_TarisSithJ`
**Generated category:** Taris Side Content
**Journal entries:** 1

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 10 | — | I was told by an ex-Sith on Taris that Darth Malak laid siege upon the planet with his own troops still within. Many of the troops that remain here no longer associate with the Sith. | 0 |

### Record-level trigger map

### Stage 10

I was told by an ex-Sith on Taris that Darth Malak laid siege upon the planet with his own troops still within. Many of the troops that remain here no longer associate with the Sith.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Related records and locations



### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `10` is obtainable.
- [ ] Reach index `10`: I was told by an ex-Sith on Taris that Darth Malak laid siege upon the planet with his own troops still within…
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_TarisSithJ`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
