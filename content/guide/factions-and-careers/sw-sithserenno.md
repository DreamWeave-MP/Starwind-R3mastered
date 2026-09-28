---
title: "Invasion of Serenno"
description: "Walkthrough and QA reference for Invasion of Serenno (SW_SithSerenno)."
weight: 27
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_SithSerenno"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_SithSerenno` |
| **Category** | Factions & Careers |
| **Journal entries** | 2 |
| **Completion branches** | No explicit Finished marker |
| **Starts by** | Speak with **Sith Guard**. |
| **Key characters** | Sith Guard |

## Walkthrough

### 1. Speak with Sith Guard

Speak with **Sith Guard**.

> **Expected journal update — index 5:** 5 I was approached by a Sith Trooper on Manaan who delivered orders from a higher command for me to take a shuttle from the Sith Docking Bay to Serenno to take the fight to the planet. I am to infiltrate the Slums District and begin my operations there. (SERE

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Sith Guard** (`SW_SithBaseSerennoTrig`)

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_SithSerenno`
**Generated category:** Factions & Careers
**Journal entries:** 2

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | 5 I was approached by a Sith Trooper on Manaan who delivered orders from a higher command for me to take a shuttle from the Sith Docking Bay to Serenno to take the fight to the planet. I am to infiltrate the Slums District and begin my operations there. (SERE | 1 |

### Record-level trigger map

### Stage 5

5 I was approached by a Sith Trooper on Manaan who delivered orders from a higher command for me to take a shuttle from the Sith Docking Bay to Serenno to take the fight to the planet. I am to infiltrate the Slums District and begin my operations there. (SERE

**How this stage is set:**
- Dialogue INFO `2218123020292012717` under topic **Greeting 7**; speaker Sith Guard (`SW_SithBaseSerennoTrig`). conditions: Journal `SW_SithSerenno` Equal 0. response: “Sir, orders from higher command! You're needed on Serenno for the invasion sir, there's a shuttle waiting for you in the docking bay here, I'm heading in now.”.

```text
Journal SW_SithSerenno 5
SW_SithtoDock->Unlock
Disable
```

### Related records and locations

**Dialogue speakers:**
- Sith Guard (`SW_SithBaseSerennoTrig`)

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: 5 I was approached by a Sith Trooper on Manaan who delivered orders from a higher command for me to take a shu…
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_SithSerenno`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
