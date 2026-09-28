---
title: "Family Heirloom"
description: "Walkthrough and QA reference for Family Heirloom (SW_ExpRingJourn)."
weight: 4
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_ExpRingJourn"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_ExpRingJourn` |
| **Category** | Expansion / PlanExp |
| **Journal entries** | 3 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Olias** in **Manaan, Inner City Cantina** and ask about **ring**. |
| **Key locations** | Manaan, Inner City Cantina |
| **Key characters** | Olias |

## Walkthrough

### 1. Speak with Olias in Manaan, Inner City Cantina and ask about ring

Speak with **Olias** in **Manaan, Inner City Cantina** and ask about **ring**.

> **Expected journal update — index 5:** Olias in the inner city cantina of Manaan has lost his family ring. He is certain that he lost it within the inner city but he cannot remember where. If I find it I should return it to him.

### 2. Speak with Olias in Manaan, Inner City Cantina and ask about ring — Finished

Speak with **Olias** in **Manaan, Inner City Cantina** and ask about **ring**.

> **Expected journal update — index 10:** I've returned the family ring back to Olias after finding it in the inner city. He's paid me in 1,000 credits for doing this for him.

**Known item transfer:** 1000 × **Credits** (`gold_001`).

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 10**:

> I've returned the family ring back to Olias after finding it in the inner city. He's paid me in 1,000 credits for doing this for him.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 1000 × **Credits** (`gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Olias** (`SW_ExpHumanRing`) — `Manaan, Inner City Cantina`

**Locations implicated by actor/object placement or explicit travel:**
- **Manaan, Inner City Cantina**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_ExpRingJourn`
**Generated category:** Expansion / PlanExp
**Journal entries:** 3

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | Olias in the inner city cantina of Manaan has lost his family ring. He is certain that he lost it within the inner city but he cannot remember where. If I find it I should return it to him. | 1 |
| 10 | Finished | I've returned the family ring back to Olias after finding it in the inner city. He's paid me in 1,000 credits for doing this for him. | 1 |

### Record-level trigger map

### Stage 5

Olias in the inner city cantina of Manaan has lost his family ring. He is certain that he lost it within the inner city but he cannot remember where. If I find it I should return it to him.

**How this stage is set:**
- Dialogue INFO `7592208092905719916` under topic **ring**; speaker Olias (`SW_ExpHumanRing`). locations: `Manaan, Inner City Cantina`. conditions: Journal `SW_ExpRingJourn` Equal 0. response: “Oh yes. My family ring. I've went and lost it. I've retraced my steps all day and I can't find it anywhere. I know for sure that it must have fell off my finger here in the inner city, but it's such a small thing. If you find it and bring it back to me I will pay a reward.”.

```text
Journal SW_ExpRingJourn 5
```

### Stage 10 — Finished

I've returned the family ring back to Olias after finding it in the inner city. He's paid me in 1,000 credits for doing this for him.

**How this stage is set:**
- Dialogue INFO `154184862250023523` under topic **ring**; speaker Olias (`SW_ExpHumanRing`). locations: `Manaan, Inner City Cantina`. conditions: Journal `SW_ExpRingJourn` Equal 5; Item/ItemType `SW_ExpRing` GreaterEqual 1. response: “Fantastic! I wasn't even going to try to head back to Coruscant without it. Thank you, stranger, here, for your troubles.”.

```text
Journal SW_ExpRingJourn 10
player->removeitem SW_ExpRing 1
player->additem gold_001 1000
```

### Related records and locations

**Dialogue speakers:**
- Olias (`SW_ExpHumanRing`) — `Manaan, Inner City Cantina`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)
- Lost Ring (`SW_ExpRing`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Manaan, Inner City Cantina`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: Olias in the inner city cantina of Manaan has lost his family ring. He is certain that he lost it within the i…
- [ ] Reach index `10` (`Finished`): I've returned the family ring back to Olias after finding it in the inner city. He's paid me in 1,000 credits …
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_ExpRingJourn`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
