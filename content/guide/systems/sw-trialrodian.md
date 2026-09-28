---
title: "Trial Rodian (internal journal)"
description: "Walkthrough and QA reference for Trial Rodian (internal journal) (SW_TrialRodian)."
weight: 18
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_TrialRodian"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_TrialRodian` |
| **Category** | Systems & Internal Journals |
| **Journal entries** | 1 |
| **Completion branches** | No explicit Finished marker |
| **Starts by** | Speak with **Rodian Witness** in **Manaan, Kogal's Office** and ask about **trial**. |
| **Observed prerequisite journals** | `SW_Trial` |
| **Key locations** | Manaan, Kogal's Office |
| **Key characters** | Rodian Witness |

## Walkthrough

### 1. Speak with Rodian Witness in Manaan, Kogal's Office and ask about trial

Speak with **Rodian Witness** in **Manaan, Kogal's Office** and ask about **trial**.

> **Expected journal update — index 5:** The Rodian claims he watched the entire thing happen, and that the Sith Soldier punched the Republic Soldier and he was forced to defend himself.

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Rodian Witness** (`SW_RodianTrial`) — `Manaan, Kogal's Office`

**Locations implicated by actor/object placement or explicit travel:**
- **Manaan, Kogal's Office**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_TrialRodian`
**Generated category:** Systems & Internal Journals
**Journal entries:** 1

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | The Rodian claims he watched the entire thing happen, and that the Sith Soldier punched the Republic Soldier and he was forced to defend himself. | 1 |

### Record-level trigger map

### Stage 5

The Rodian claims he watched the entire thing happen, and that the Sith Soldier punched the Republic Soldier and he was forced to defend himself.

**How this stage is set:**
- Dialogue INFO `3246521208228412867` under topic **trial**; speaker Rodian Witness (`SW_RodianTrial`). locations: `Manaan, Kogal's Office`. conditions: Journal `SW_Trial` Equal 10; Journal `SW_TrialRodian` Equal 0. response: “I saw the whole thing. I was getting a drink from the bar when the Sith turned around and punched the Republic soldier in the face, who naturally defended himself against his aggressor.”.

```text
Journal  SW_TrialRodian 5
```

### Related records and locations

**Dialogue speakers:**
- Rodian Witness (`SW_RodianTrial`) — `Manaan, Kogal's Office`

**Cells implicated by actor/object placement or explicit travel code:**
- `Manaan, Kogal's Office`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: The Rodian claims he watched the entire thing happen, and that the Sith Soldier punched the Republic Soldier a…
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_TrialRodian`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
