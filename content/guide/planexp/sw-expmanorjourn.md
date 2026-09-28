---
title: "An Ancient Heresy"
description: "Walkthrough and QA reference for An Ancient Heresy (SW_ExpManorJourn)."
weight: 1
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_ExpManorJourn"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_ExpManorJourn` |
| **Category** | Expansion / PlanExp |
| **Journal entries** | 3 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Claire Lavigne** in **Dantooine, Lavigne Manor** and ask about **manor**. |
| **Key locations** | Dantooine, Lavigne Manor |
| **Key characters** | Claire Lavigne |

## Walkthrough

### 1. Speak with Claire Lavigne in Dantooine, Lavigne Manor and ask about manor

Speak with **Claire Lavigne** in **Dantooine, Lavigne Manor** and ask about **manor**.

> **Expected journal update — index 5:** Claire Lavigne has been expanding her home and has run into issues in the lower levels of their manor. She has asked that I look into the issues that they are having and to report to her once all problems have been resolved.

### 2. Speak with Claire Lavigne in Dantooine, Lavigne Manor and ask about manor — Finished

Speak with **Claire Lavigne** in **Dantooine, Lavigne Manor** and ask about **manor**.

> **Expected journal update — index 10:** I've returned to Claire who thanked me for my assistance and referred me to her brother regarding the artifacts that I found.

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 10**:

> I've returned to Claire who thanked me for my assistance and referred me to her brother regarding the artifacts that I found.

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Claire Lavigne** (`SW_ExpLavCla`) — `Dantooine, Lavigne Manor`

**Locations implicated by actor/object placement or explicit travel:**
- **Dantooine, Lavigne Manor**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_ExpManorJourn`
**Generated category:** Expansion / PlanExp
**Journal entries:** 3

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | Claire Lavigne has been expanding her home and has run into issues in the lower levels of their manor. She has asked that I look into the issues that they are having and to report to her once all problems have been resolved. | 1 |
| 10 | Finished | I've returned to Claire who thanked me for my assistance and referred me to her brother regarding the artifacts that I found. | 1 |

### Record-level trigger map

### Stage 5

Claire Lavigne has been expanding her home and has run into issues in the lower levels of their manor. She has asked that I look into the issues that they are having and to report to her once all problems have been resolved.

**How this stage is set:**
- Dialogue INFO `2779589242537019534` under topic **manor**; speaker Claire Lavigne (`SW_ExpLavCla`). locations: `Dantooine, Lavigne Manor`. conditions: Journal `SW_ExpManorJourn` Equal 0. response: “I'll have the downstairs door unlocked if you're willing to check it out. We were expanding the manor with a subterannean floor when we discovered some sort of ancient temple down there. I'd like to figure out what is going on before my brother finds out, or else he'll turn the entire manor into some sort of dig site.”.

```text
SW_ExpDownDoor2->Disable
Journal SW_ExpManorJourn 5
```

### Stage 10 — Finished

I've returned to Claire who thanked me for my assistance and referred me to her brother regarding the artifacts that I found.

**How this stage is set:**
- Dialogue INFO `28931236472075832546` under topic **manor**; speaker Claire Lavigne (`SW_ExpLavCla`). locations: `Dantooine, Lavigne Manor`. conditions: Journal `SW_ExpManorJourn` Equal 5; Item/ItemType `SW_ExpSithRemains` GreaterEqual 1; Item/ItemType `SW_ExpSithMask` GreaterEqual 1. response: “Well, those are certainly... interesting items you found down there. Hopefully removing them will solve our problems. I would take those to my brother to see if he is interested in them.”.

```text
Journal SW_ExpManorJourn 10
```

### Related records and locations

**Dialogue speakers:**
- Claire Lavigne (`SW_ExpLavCla`) — `Dantooine, Lavigne Manor`

**Cells implicated by actor/object placement or explicit travel code:**
- `Dantooine, Lavigne Manor`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: Claire Lavigne has been expanding her home and has run into issues in the lower levels of their manor. She has…
- [ ] Reach index `10` (`Finished`): I've returned to Claire who thanked me for my assistance and referred me to her brother regarding the artifact…
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_ExpManorJourn`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
