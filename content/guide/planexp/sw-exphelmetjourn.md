---
title: "Matrix Helmet"
description: "Walkthrough and QA reference for Matrix Helmet (SW_ExpHelmetJourn)."
weight: 6
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_ExpHelmetJourn"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_ExpHelmetJourn` |
| **Category** | Expansion / PlanExp |
| **Journal entries** | 3 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Roderick Hones** in **Manaan, Inner City** and ask about **helmet**. |
| **Key locations** | Manaan, Inner City |
| **Key characters** | Roderick Hones |

## Walkthrough

### 1. Speak with Roderick Hones in Manaan, Inner City and ask about helmet

Speak with **Roderick Hones** in **Manaan, Inner City** and ask about **helmet**.

> **Expected journal update — index 5:** Roderick in the Inner City on Manaan has a matrix helmet that he is willing to sell for 800 credits.

### 2. Speak with Roderick Hones in Manaan, Inner City and ask about helmet — Finished

Speak with **Roderick Hones** in **Manaan, Inner City** and ask about **helmet**.

> **Expected journal update — index 10:** Roderick in the Inner City on Manaan has a matrix helmet that he is willing to sell for 800 credits.

**Known item transfer:** 1 × **Matrix Helm** (`SW_ExpMatrixHelm`).

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 10**:

> Roderick in the Inner City on Manaan has a matrix helmet that he is willing to sell for 800 credits.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 1 × **Matrix Helm** (`SW_ExpMatrixHelm`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Roderick Hones** (`SW_ExpHumanBully`) — `Manaan, Inner City`

**Locations implicated by actor/object placement or explicit travel:**
- **Manaan, Inner City**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_ExpHelmetJourn`
**Generated category:** Expansion / PlanExp
**Journal entries:** 3

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | Roderick in the Inner City on Manaan has a matrix helmet that he is willing to sell for 800 credits. | 1 |
| 10 | Finished | Roderick in the Inner City on Manaan has a matrix helmet that he is willing to sell for 800 credits. | 2 |

### Record-level trigger map

### Stage 5

Roderick in the Inner City on Manaan has a matrix helmet that he is willing to sell for 800 credits.

**How this stage is set:**
- Dialogue INFO `28847276712003910689` under topic **helmet**; speaker Roderick Hones (`SW_ExpHumanBully`). locations: `Manaan, Inner City`. conditions: Journal `SW_ExpHelmetJourn` NotEqual 10. response: “My helmet? I suppose I could part with it. I'll sell it for 800 credits.”.

```text
Journal SW_ExpHelmetJourn 5
Choice "That's too steep of a price." 1 "Sounds like a good deal to me." 2 "That's an outrageous price for matrix armor, but I'll pay it as I haven't seen another helmet like it." 3
```

### Stage 10 — Finished

Roderick in the Inner City on Manaan has a matrix helmet that he is willing to sell for 800 credits.

**How this stage is set:**
- Dialogue INFO `1879217568239115086` under topic **helmet**; speaker Roderick Hones (`SW_ExpHumanBully`). locations: `Manaan, Inner City`. conditions: Function/Choice Equal 3; Item/ItemType `Gold_001` GreaterEqual 800. response: “Hey, it's a good deal!”.

```text
Journal SW_ExpHelmetJourn 10
removeitem SW_ExpMatrixHelm 1
player->additem SW_ExpMatrixHelm 1
```
- Dialogue INFO `324831441158263671` under topic **helmet**; speaker Roderick Hones (`SW_ExpHumanBully`). locations: `Manaan, Inner City`. conditions: Function/Choice Equal 2; Item/ItemType `Gold_001` GreaterEqual 800. response: “You've got yourself a deal, friend.”.

```text
Journal SW_ExpHelmetJourn 10
removeitem SW_ExpMatrixHelm 1
player->additem SW_ExpMatrixHelm 1
```

### Related records and locations

**Dialogue speakers:**
- Roderick Hones (`SW_ExpHumanBully`) — `Manaan, Inner City`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)
- Matrix Helm (`SW_ExpMatrixHelm`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Manaan, Inner City`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: Roderick in the Inner City on Manaan has a matrix helmet that he is willing to sell for 800 credits.
- [ ] Reach index `10` (`Finished`): Roderick in the Inner City on Manaan has a matrix helmet that he is willing to sell for 800 credits.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_ExpHelmetJourn`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
