---
title: "A New Friend"
description: "Walkthrough and QA reference for A New Friend (SW_T3Journ)."
weight: 9
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_T3Journ"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_T3Journ` |
| **Category** | Side Quests |
| **Journal entries** | 3 |
| **Completion branches** | 1 |
| **Starts by** | Activate **Dropped Datapad** in **Tatooine, Sandriver**. |
| **Key locations** | Tatooine, Sandriver, Tatooine, Vacant Hut |
| **Key characters** | T3-M2 |

## Walkthrough

### 1. Activate Dropped Datapad in Tatooine, Sandriver

Activate **Dropped Datapad** in **Tatooine, Sandriver**.

> **Expected journal update — index 5:** I found a datapad about a T3M2 droid being smuggled in for the Zillows Gang by Jawas. The datapad says they are in a vacant hut in this town, Sandriver.

### 2. Speak with T3-M2 in Tatooine, Vacant Hut — Finished

Speak with **T3-M2** in **Tatooine, Vacant Hut**.

> **Expected journal update — index 10:** I was met with a firefight the moment I walked into a hut, but I've rescued a T3M2 droid and he seems grateful. I can't understand him, but he's following me around now.

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 10**:

> I was met with a firefight the moment I walked into a hut, but I've rescued a T3M2 droid and he seems grateful. I can't understand him, but he's following me around now.

## Characters & locations

**Characters directly tied to quest dialogue:**
- **T3-M2** (`SW_T3Comp`) — `Tatooine, Vacant Hut`

**Locations implicated by actor/object placement or explicit travel:**
- **Tatooine, Sandriver**
- **Tatooine, Vacant Hut**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_T3Journ`
**Generated category:** Side Quests
**Journal entries:** 3

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | I found a datapad about a T3M2 droid being smuggled in for the Zillows Gang by Jawas. The datapad says they are in a vacant hut in this town, Sandriver. | 1 |
| 10 | Finished | I was met with a firefight the moment I walked into a hut, but I've rescued a T3M2 droid and he seems grateful. I can't understand him, but he's following me around now. | 1 |

### Record-level trigger map

### Stage 5

I found a datapad about a T3M2 droid being smuggled in for the Zillows Gang by Jawas. The datapad says they are in a vacant hut in this town, Sandriver.

**How this stage is set:**
- Script `T3BookScript`. attached to Book Dropped Datapad (`SW_T3Book`); placed in `Tatooine, Sandriver`.

```text
If ( OnActivate )
    If ( GetJournalIndex, SW_T3Journ == 0 )
        Journal SW_T3Journ 5
        Activate
    else
```

### Stage 10 — Finished

I was met with a firefight the moment I walked into a hut, but I've rescued a T3M2 droid and he seems grateful. I can't understand him, but he's following me around now.

**How this stage is set:**
- Dialogue INFO `126099172932629383` under topic **Greeting 7**; speaker T3-M2 (`SW_T3Comp`). locations: `Tatooine, Vacant Hut`. conditions: Journal `SW_T3Journ` Less 10. response: “Beep beep boop bop!
 *This droid seems to be following me now*”.

```text
Journal SW_T3Journ 10
set companion to 1
AddTopic "follow"
```

### Related records and locations

**Dialogue speakers:**
- T3-M2 (`SW_T3Comp`) — `Tatooine, Vacant Hut`

**Scripts that read or write this journal:**
- `T3BookScript` — Book Dropped Datapad (`SW_T3Book`); placed in `Tatooine, Sandriver`

**Cells implicated by actor/object placement or explicit travel code:**
- `Tatooine, Sandriver`
- `Tatooine, Vacant Hut`

<details><summary>Journal-state readers (1 code sites)</summary>

- Script `T3BookScript`. attached to Book Dropped Datapad (`SW_T3Book`); placed in `Tatooine, Sandriver`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: I found a datapad about a T3M2 droid being smuggled in for the Zillows Gang by Jawas. The datapad says they ar…
- [ ] Reach index `10` (`Finished`): I was met with a firefight the moment I walked into a hut, but I've rescued a T3M2 droid and he seems grateful…
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_T3Journ`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
