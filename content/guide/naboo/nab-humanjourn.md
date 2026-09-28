---
title: "The Colony"
description: "Walkthrough and QA reference for The Colony (Nab_HumanJourn)."
weight: 10
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "Nab_HumanJourn"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `Nab_HumanJourn` |
| **Category** | Naboo |
| **Journal entries** | 4 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Gill Bates** in **Naboo, Spice Mine** and ask about **citizen**. |
| **Key locations** | Naboo, Spice Mine |
| **Key characters** | Gill Bates |

## Walkthrough

### 1. Speak with Gill Bates in Naboo, Spice Mine and ask about citizen

Speak with **Gill Bates** in **Naboo, Spice Mine** and ask about **citizen**.

> **Expected journal update — index 5:** I have spoken to Gill Bates who says in order to be accepted into their new settlement I must first partake in it. I should prove that I have become an active member of his settlement by bringing to him 400 Thrones.

### 2. Speak with Gill Bates in Naboo, Spice Mine and ask about citizen

Speak with **Gill Bates** in **Naboo, Spice Mine** and ask about **citizen**.

> **Expected journal update — index 10:** I have given 400 Thrones to Gill Bates who has granted me citizenship to his new settlement. He has given me a key to an available home in the underground city.

**Known item transfer:** 1 × **Mine Home Key** (`Nab_HumeHomeKey`).

### 3. Speak with Gill Bates in Naboo, Spice Mine and ask about citizen — Finished

Speak with **Gill Bates** in **Naboo, Spice Mine** and ask about **citizen**.

> **Expected journal update — index 15:** Gill Bates does not have the time to give citizens orders, he has directed me to the resident Guardsman to further help the settlement.

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 15**:

> Gill Bates does not have the time to give citizens orders, he has directed me to the resident Guardsman to further help the settlement.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 1 × **Mine Home Key** (`Nab_HumeHomeKey`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Gill Bates** (`SW_Nab_Gates`) — `Naboo, Spice Mine`

**Locations implicated by actor/object placement or explicit travel:**
- **Naboo, Spice Mine**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `Nab_HumanJourn`
**Generated category:** Naboo
**Journal entries:** 4

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | I have spoken to Gill Bates who says in order to be accepted into their new settlement I must first partake in it. I should prove that I have become an active member of his settlement by bringing to him 400 Thrones. | 1 |
| 10 | — | I have given 400 Thrones to Gill Bates who has granted me citizenship to his new settlement. He has given me a key to an available home in the underground city. | 1 |
| 15 | Finished | Gill Bates does not have the time to give citizens orders, he has directed me to the resident Guardsman to further help the settlement. | 1 |

### Record-level trigger map

### Stage 5

I have spoken to Gill Bates who says in order to be accepted into their new settlement I must first partake in it. I should prove that I have become an active member of his settlement by bringing to him 400 Thrones.

**How this stage is set:**
- Dialogue INFO `1693865321258031096` under topic **citizen**; speaker Gill Bates (`SW_Nab_Gates`). locations: `Naboo, Spice Mine`. conditions: Journal `Nab_HumanJourn` Equal 0. response: “You're new around here. See to the settlement, help where help is needed, trade where trade can be done, fight where fighting is asked. When you've gathered up 400 Thrones you bring those back to me and I'll make you a citizen of this colony. There's a lot of money to be made here.”.

```text
Journal Nab_HumanJourn 5
```

### Stage 10

I have given 400 Thrones to Gill Bates who has granted me citizenship to his new settlement. He has given me a key to an available home in the underground city.

**How this stage is set:**
- Dialogue INFO `772030236327467012` under topic **citizen**; speaker Gill Bates (`SW_Nab_Gates`). locations: `Naboo, Spice Mine`. conditions: Journal `Nab_HumanJourn` Equal 5; Item/ItemType `Nab_Thrones` GreaterEqual 400. response: “Your active, your tough, and your dedicated. That's exactly what we're looking for here. Welcome to the settlement, here's the key to your new home.”.

```text
Journal Nab_HumanJourn 10
player->removeitem Nab_Thrones 400
player->additem Nab_HumeHomeKey 1
```

### Stage 15 — Finished

Gill Bates does not have the time to give citizens orders, he has directed me to the resident Guardsman to further help the settlement.

**How this stage is set:**
- Dialogue INFO `3620174203185425677` under topic **citizen**; speaker Gill Bates (`SW_Nab_Gates`). locations: `Naboo, Spice Mine`. conditions: Journal `Nab_HumanJourn` Equal 10. response: “There's a Guardsman on the other side of the mining facility, go see him if you're looking for more work to do.”.

```text
Journal Nab_HumanJourn 15
```

### Related records and locations

**Dialogue speakers:**
- Gill Bates (`SW_Nab_Gates`) — `Naboo, Spice Mine`

**Items referenced by related script/result code:**
- Mine Home Key (`Nab_HumeHomeKey`)
- Thrones (`Nab_Thrones`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Naboo, Spice Mine`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: I have spoken to Gill Bates who says in order to be accepted into their new settlement I must first partake in…
- [ ] Reach index `10`: I have given 400 Thrones to Gill Bates who has granted me citizenship to his new settlement. He has given me a…
- [ ] Reach index `15` (`Finished`): Gill Bates does not have the time to give citizens orders, he has directed me to the resident Guardsman to fur…
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `Nab_HumanJourn`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
