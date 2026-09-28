---
title: "Trial Cathar (internal journal)"
description: "Walkthrough and QA reference for Trial Cathar (internal journal) (SW_TrialCathar)."
weight: 17
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_TrialCathar"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_TrialCathar` |
| **Category** | Systems & Internal Journals |
| **Journal entries** | 1 |
| **Completion branches** | No explicit Finished marker |
| **Starts by** | Speak with **Cathar Witness** in **Manaan, Kogal's Office** and ask about **trial**. |
| **Observed prerequisite journals** | `SW_Trial` |
| **Key locations** | Manaan, Kogal's Office |
| **Key characters** | Cathar Witness |

## Walkthrough

### 1. Speak with Cathar Witness in Manaan, Kogal's Office and ask about trial

Speak with **Cathar Witness** in **Manaan, Kogal's Office** and ask about **trial**.

> **Expected journal update — index 5:** The Cathar did not see it happen, but works at the cantina as a server, and says that the Sith Soldier was earlier cut off from drinking due to having drank too much.

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Cathar Witness** (`SW_CatharTrial`) — `Manaan, Kogal's Office`

**Locations implicated by actor/object placement or explicit travel:**
- **Manaan, Kogal's Office**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_TrialCathar`
**Generated category:** Systems & Internal Journals
**Journal entries:** 1

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | The Cathar did not see it happen, but works at the cantina as a server, and says that the Sith Soldier was earlier cut off from drinking due to having drank too much. | 1 |

### Record-level trigger map

### Stage 5

The Cathar did not see it happen, but works at the cantina as a server, and says that the Sith Soldier was earlier cut off from drinking due to having drank too much.

**How this stage is set:**
- Dialogue INFO `20538822097004153` under topic **trial**; speaker Cathar Witness (`SW_CatharTrial`). locations: `Manaan, Kogal's Office`. conditions: Journal `SW_Trial` Equal 10; Journal `SW_TrialCathar` Equal 0. response: “I didn't actually see anything happen, but I was told by the Selkath to appear on the Cantina's behalf. I work there as a server. Earlier before the fight even broke out that Sith soldier was cut off from drinking, he had already had too many and was getting aggressive with the bartender. That's all I know.”.

```text
Journal SW_TrialCathar 5
```

### Related records and locations

**Dialogue speakers:**
- Cathar Witness (`SW_CatharTrial`) — `Manaan, Kogal's Office`

**Cells implicated by actor/object placement or explicit travel code:**
- `Manaan, Kogal's Office`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: The Cathar did not see it happen, but works at the cantina as a server, and says that the Sith Soldier was ear…
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_TrialCathar`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
