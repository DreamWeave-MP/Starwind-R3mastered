---
title: "Fishing for Bingwies"
description: "Walkthrough and QA reference for Fishing for Bingwies (Nab_Fish)."
weight: 4
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "Nab_Fish"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `Nab_Fish` |
| **Category** | Naboo |
| **Journal entries** | 4 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Rago** in **Naboo, Bingwie Village** and ask about **fish**. |
| **Key locations** | Naboo, Bingwie Village |
| **Key characters** | Rago |

## Walkthrough

### 1. Speak with Rago in Naboo, Bingwie Village and ask about fish

Speak with **Rago** in **Naboo, Bingwie Village** and ask about **fish**.

> **Expected journal update — index 5:** Rago says that all Bingwies love fish, but that they are not fast enough to catch fish. Rago has asked me if I would bring to him 15 Fish Meats to feed the village.

### 2. Reach journal stage 10

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 10:** I have 15 fish meat and I can now return to Rago to feed the Bingwies.

### 3. Speak with Rago in Naboo, Bingwie Village and ask about fish — Finished

Speak with **Rago** in **Naboo, Bingwie Village** and ask about **fish**.

> **Expected journal update — index 15:** Rago has thanked me for the fish meats and has asked me to keep asking around to see if the other Bingwies need any help.

**Outcome:** this journal entry is marked as a finished branch.

> **Playtest flag:** 1 journal stage on this page lack a literal setter in the current static scan.

## Endings & branches

The journal has one explicit finished state at **index 15**:

> Rago has thanked me for the fish meats and has asked me to keep asking around to see if the other Bingwies need any help.

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Rago** (`SW_Rago`) — `Naboo, Bingwie Village`

**Locations implicated by actor/object placement or explicit travel:**
- **Naboo, Bingwie Village**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `Nab_Fish`
**Generated category:** Naboo
**Journal entries:** 4

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | Rago says that all Bingwies love fish, but that they are not fast enough to catch fish. Rago has asked me if I would bring to him 15 Fish Meats to feed the village. | 2 |
| 10 | — | I have 15 fish meat and I can now return to Rago to feed the Bingwies. | 0 |
| 15 | Finished | Rago has thanked me for the fish meats and has asked me to keep asking around to see if the other Bingwies need any help. | 2 |

### Record-level trigger map

### Stage 5

Rago says that all Bingwies love fish, but that they are not fast enough to catch fish. Rago has asked me if I would bring to him 15 Fish Meats to feed the village.

**How this stage is set:**
- Dialogue INFO `135532163300701839` under topic **fish**; speaker Rago (`SW_Rago`). locations: `Naboo, Bingwie Village`. conditions: Journal `Nab_Fish` Equal 5. response: “You are best friend of Bingwies, with 15 Fish Meats we can feed the whole village.”.

```text
Journal Nab_Fish 5
```
- Dialogue INFO `20665123462006628816` under topic **fish**; speaker Rago (`SW_Rago`). locations: `Naboo, Bingwie Village`. conditions: Journal `Nab_Fish` Equal 0. response: “You will help the Bingwies catch fish? Hooray! What a great day for Bingwies. If you bring Rago 15 Fish Meats we can feed the entire village!”.

```text
Journal Nab_Fish 5
```

### Stage 10

I have 15 fish meat and I can now return to Rago to feed the Bingwies.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 15 — Finished

Rago has thanked me for the fish meats and has asked me to keep asking around to see if the other Bingwies need any help.

**How this stage is set:**
- Dialogue INFO `1345179262992832374` under topic **fish**; speaker Rago (`SW_Rago`). locations: `Naboo, Bingwie Village`. conditions: Journal `Nab_Fish` Equal 10; Item/ItemType `Nab_FishMeat` GreaterEqual 15. response: “You caught all the fish? You must be very fast, Bingwies will eat good tonight, keep one and eat it too! Maybe some other Bingwies around the village need help too?”.

```text
Journal Nab_Fish 15
Player->removeitem Nab_FishMeat 14
```
- Dialogue INFO `23102144922261716964` under topic **fish**; speaker Rago (`SW_Rago`). locations: `Naboo, Bingwie Village`. conditions: Journal `Nab_Fish` Equal 5; Item/ItemType `Nab_FishMeat` GreaterEqual 15. response: “You caught all the fish? You must be very fast, Bingwies will eat good tonight, keep one and eat it too! Maybe some other Bingwies around the village need help too?”.

```text
Journal Nab_Fish 15
Player->removeitem Nab_FishMeat 14
```

### Related records and locations

**Dialogue speakers:**
- Rago (`SW_Rago`) — `Naboo, Bingwie Village`

**Scripts that read or write this journal:**
- `Nab_BagoScript` — Creature Bago (`SW_Bago`); placed in `Naboo, Bingwie Village`

**Items referenced by related script/result code:**
- Fish Meat (`Nab_FishMeat`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Naboo, Bingwie Village`

<details><summary>Journal-state readers (1 code sites)</summary>

- Script `Nab_BagoScript`. attached to Creature Bago (`SW_Bago`); placed in `Naboo, Bingwie Village`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: Rago says that all Bingwies love fish, but that they are not fast enough to catch fish. Rago has asked me if I…
- [ ] Reach index `10`: I have 15 fish meat and I can now return to Rago to feed the Bingwies.
- [ ] Reach index `15` (`Finished`): Rago has thanked me for the fish meats and has asked me to keep asking around to see if the other Bingwies nee…
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `Nab_Fish`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
