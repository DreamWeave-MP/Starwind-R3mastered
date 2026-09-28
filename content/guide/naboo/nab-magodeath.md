---
title: "A Bingwie's Death"
description: "Walkthrough and QA reference for A Bingwie's Death (Nab_MagoDeath)."
weight: 1
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "Nab_MagoDeath"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `Nab_MagoDeath` |
| **Category** | Naboo |
| **Journal entries** | 4 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Mago** in **Naboo, Bingwie Village** and ask about **die**. |
| **Key locations** | Naboo, Bingwie Village |
| **Key characters** | Mago |

## Walkthrough

### 1. Speak with Mago in Naboo, Bingwie Village and ask about die

Speak with **Mago** in **Naboo, Bingwie Village** and ask about **die**.

> **Expected journal update — index 5:** Mago is old and is ready to go "to the place where Bingwies die". He's asked me to escort him in the Bamboo Forest to a grove of boulders where he will drink a Bingwie poison and move on to his next life.

### 2. Reach Naboo, Bingwie Village and allow the scripted event to complete — Finished

Reach **Naboo, Bingwie Village** and allow the scripted event to complete.

> **Expected journal update — index 10:** Mago has died, I can return now to the Bingwies without him.

**Outcome:** this journal entry is marked as a finished branch.

### 3. Reach journal stage 15

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 15:** Unused

{% callout(kind="warning", title="Playtest flag") %}
1 journal stage on this page lack a literal setter in the current static scan.
{% end %}

## Endings & branches

The journal has one explicit finished state at **index 10**:

> Mago has died, I can return now to the Bingwies without him.

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Mago** (`SW_Mago`) — `Naboo, Bingwie Village`

**Locations implicated by actor/object placement or explicit travel:**
- **Naboo, Bingwie Village**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `Nab_MagoDeath`
**Generated category:** Naboo
**Journal entries:** 4

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | Mago is old and is ready to go "to the place where Bingwies die". He's asked me to escort him in the Bamboo Forest to a grove of boulders where he will drink a Bingwie poison and move on to his next life. | 1 |
| 10 | Finished | Mago has died, I can return now to the Bingwies without him. | 1 |
| 15 | — | Unused | 0 |

### Record-level trigger map

### Stage 5

Mago is old and is ready to go "to the place where Bingwies die". He's asked me to escort him in the Bamboo Forest to a grove of boulders where he will drink a Bingwie poison and move on to his next life.

**How this stage is set:**
- Dialogue INFO `268148204657125260` under topic **die**; speaker Mago (`SW_Mago`). locations: `Naboo, Bingwie Village`. conditions: Journal `Nab_MagoDeath` Equal 0. response: “Yes, I am ready to go to the place where Bingwies die. A grove of boulders nearby in the Bamboo Forest. Will you escort me?”.

```text
Journal Nab_MagoDeath 5
AddTopic "follow"
AddTopic "wait"
```

### Stage 10 — Finished

Mago has died, I can return now to the Bingwies without him.

**How this stage is set:**
- Script `Nab_MagoUpdate`. attached to Creature Mago (`SW_Mago`); placed in `Naboo, Bingwie Village`.

```text
If ( OnDeath )
    If ( GetJournalIndex Nab_MagoDeath == 5 )
        Journal Nab_MagoDeath 10
    Endif
Endif
```

### Stage 15

Unused

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Related records and locations

**Dialogue speakers:**
- Mago (`SW_Mago`) — `Naboo, Bingwie Village`

**Scripts that read or write this journal:**
- `Nab_BagoScript` — Creature Bago (`SW_Bago`); placed in `Naboo, Bingwie Village`
- `Nab_MagoUpdate` — Creature Mago (`SW_Mago`); placed in `Naboo, Bingwie Village`

**Cells implicated by actor/object placement or explicit travel code:**
- `Naboo, Bingwie Village`

<details><summary>Journal-state readers (2 code sites)</summary>

- Script `Nab_BagoScript`. attached to Creature Bago (`SW_Bago`); placed in `Naboo, Bingwie Village`.
- Script `Nab_MagoUpdate`. attached to Creature Mago (`SW_Mago`); placed in `Naboo, Bingwie Village`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: Mago is old and is ready to go "to the place where Bingwies die". He's asked me to escort him in the Bamboo Fo…
- [ ] Reach index `10` (`Finished`): Mago has died, I can return now to the Bingwies without him.
- [ ] Reach index `15`: Unused
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `Nab_MagoDeath`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
