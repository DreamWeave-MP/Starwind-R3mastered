---
title: "Trial Selkath (internal journal)"
description: "Walkthrough and QA reference for Trial Selkath (internal journal) (SW_TrialSelkath)."
weight: 19
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_TrialSelkath"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_TrialSelkath` |
| **Category** | Systems & Internal Journals |
| **Journal entries** | 3 |
| **Completion branches** | No explicit Finished marker |
| **Starts by** | Speak with **Selkath Witness** in **Manaan, Kogal's Office** and ask about **trial**. |
| **Observed prerequisite journals** | `SW_Trial` |
| **Key locations** | Manaan, Kogal's Office |
| **Key characters** | Selkath Witness |

## Walkthrough

### 1. Speak with Selkath Witness in Manaan, Kogal's Office and ask about trial

Speak with **Selkath Witness** in **Manaan, Kogal's Office** and ask about **trial**.

> **Expected journal update — index 5:** The Selkath says he watched the Republic Soldier beat down the Sith Soldier with his own eyes but did not see the Sith Soldier attack the Republic Soldier.

### 2. Speak with Selkath Witness in Manaan, Kogal's Office and ask about trial

Speak with **Selkath Witness** in **Manaan, Kogal's Office** and ask about **trial**.

> **Expected journal update — index 10:** The Selkath claims the Republic Soldier started the fight.

### 3. Speak with Selkath Witness in Manaan, Kogal's Office and ask about trial

Speak with **Selkath Witness** in **Manaan, Kogal's Office** and ask about **trial**.

> **Expected journal update — index 15:** The Selkath says he did not see anything happening before the noise started.

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Selkath Witness** (`SW_SelkathTrial`) — `Manaan, Kogal's Office`

**Locations implicated by actor/object placement or explicit travel:**
- **Manaan, Kogal's Office**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_TrialSelkath`
**Generated category:** Systems & Internal Journals
**Journal entries:** 3

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | The Selkath says he watched the Republic Soldier beat down the Sith Soldier with his own eyes but did not see the Sith Soldier attack the Republic Soldier. | 1 |
| 10 | — | The Selkath claims the Republic Soldier started the fight. | 1 |
| 15 | — | The Selkath says he did not see anything happening before the noise started. | 1 |

### Record-level trigger map

### Stage 5

The Selkath says he watched the Republic Soldier beat down the Sith Soldier with his own eyes but did not see the Sith Soldier attack the Republic Soldier.

**How this stage is set:**
- Dialogue INFO `250278673008725815` under topic **trial**; speaker Selkath Witness (`SW_SelkathTrial`). locations: `Manaan, Kogal's Office`. conditions: Journal `SW_Trial` Equal 10; Journal `SW_TrialSelkath` Equal 0. response: “I watched that Republic soldier beat down that Sith soldier mercilessly. It was absolutely unnecessary and quite frankly against the law here on Manaan.”.

```text
Choice "I'm going to assume I can't convince you this man defended himself?" 1 "Did you see what happened before you watched the assault?" 2
Journal SW_TrialSelkath 5
```

### Stage 10

The Selkath claims the Republic Soldier started the fight.

**How this stage is set:**
- Dialogue INFO `25705261341107817244` under topic **trial**; speaker Selkath Witness (`SW_SelkathTrial`). locations: `Manaan, Kogal's Office`. conditions: Journal `SW_Trial` Equal 10; Journal `SW_TrialSelkath` Equal 5; Function/Choice Equal 1. response: “I know what I saw, it was horrific! That man is guilty!”.

```text
Journal SW_TrialSelkath 10
```

### Stage 15

The Selkath says he did not see anything happening before the noise started.

**How this stage is set:**
- Dialogue INFO `1813016600292632518` under topic **trial**; speaker Selkath Witness (`SW_SelkathTrial`). locations: `Manaan, Kogal's Office`. conditions: Journal `SW_Trial` Equal 10; Journal `SW_TrialSelkath` Equal 5; Function/Choice Equal 2. response: “No I didn't see what happened before then, but I know what I saw and I know that it is illegal here on Manaan!”.

```text
Journal SW_TrialSelkath 15
```

### Related records and locations

**Dialogue speakers:**
- Selkath Witness (`SW_SelkathTrial`) — `Manaan, Kogal's Office`

**Cells implicated by actor/object placement or explicit travel code:**
- `Manaan, Kogal's Office`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: The Selkath says he watched the Republic Soldier beat down the Sith Soldier with his own eyes but did not see …
- [ ] Reach index `10`: The Selkath claims the Republic Soldier started the fight.
- [ ] Reach index `15`: The Selkath says he did not see anything happening before the noise started.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_TrialSelkath`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
