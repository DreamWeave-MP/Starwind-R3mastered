---
title: "Trap3 (internal journal)"
description: "Walkthrough and QA reference for Trap3 (internal journal) (SW_Trap3)."
weight: 16
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_Trap3"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_Trap3` |
| **Category** | Systems & Internal Journals |
| **Journal entries** | 1 |
| **Completion branches** | 1 |
| **Starts by** | Allow the scripted event handled by `SW_CzerkaTrap3` to complete. |

## Walkthrough

### 1. Allow the scripted event handled by `SW_CzerkaTrap3` to complete — Finished

Allow the scripted event handled by `SW_CzerkaTrap3` to complete.

> **Expected journal update — index 1:** I have freed one of the trapped Czerka Miners

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 1**:

> I have freed one of the trapped Czerka Miners

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_Trap3`
**Generated category:** Systems & Internal Journals
**Journal entries:** 1

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 1 | Finished | I have freed one of the trapped Czerka Miners | 1 |

### Record-level trigger map

### Stage 1 — Finished

I have freed one of the trapped Czerka Miners

**How this stage is set:**
- Script `SW_CzerkaTrap3`. attached to Activator Terminal (`SW_TerminalKashTrap3`).

```text
elseif ( nButton == 1 )
     MessageBox "You have answered correctly."
    Journal SW_Trap3 1
    set nButton to 0
    Set nState to 0
```

### Related records and locations

**Scripts that read or write this journal:**
- `SW_CzerkaTrap3` — Activator Terminal (`SW_TerminalKashTrap3`)

<details><summary>Journal-state readers (1 code sites)</summary>

- Script `SW_CzerkaTrap3`. attached to Activator Terminal (`SW_TerminalKashTrap3`).

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `1` is obtainable.
- [ ] Reach index `1` (`Finished`): I have freed one of the trapped Czerka Miners
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_Trap3`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
