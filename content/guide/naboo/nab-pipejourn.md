---
title: "Call of the Fambaa"
description: "Walkthrough and QA reference for Call of the Fambaa (Nab_PipeJourn)."
weight: 3
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "Nab_PipeJourn"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `Nab_PipeJourn` |
| **Category** | Naboo |
| **Journal entries** | 2 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Pago** in **Naboo, Bingwie Village**. |
| **Key locations** | Naboo, Bingwie Village |
| **Key characters** | Pago |

## Walkthrough

### 1. Speak with Pago in Naboo, Bingwie Village — Finished

Speak with **Pago** in **Naboo, Bingwie Village**.

> **Expected journal update — index 5:** Pago the Bingwie is impressed that I knew the call of a Fambaa using the Bingwie Pipes. He says he will call me a friend of the Bingwies.

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 5**:

> Pago the Bingwie is impressed that I knew the call of a Fambaa using the Bingwie Pipes. He says he will call me a friend of the Bingwies.

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Pago** (`SW_Pago`) — `Naboo, Bingwie Village`

**Locations implicated by actor/object placement or explicit travel:**
- **Naboo, Bingwie Village**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `Nab_PipeJourn`
**Generated category:** Naboo
**Journal entries:** 2

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | Finished | Pago the Bingwie is impressed that I knew the call of a Fambaa using the Bingwie Pipes. He says he will call me a friend of the Bingwies. | 1 |

### Record-level trigger map

### Stage 5 — Finished

Pago the Bingwie is impressed that I knew the call of a Fambaa using the Bingwie Pipes. He says he will call me a friend of the Bingwies.

**How this stage is set:**
- Dialogue INFO `20560163742542321514` under topic **Greeting 7**; speaker Pago (`SW_Pago`). locations: `Naboo, Bingwie Village`. response: “The call of a Fambaa. You must be a master of the Bingwie Pipes! Very good, I have been trying to figure out that combination for a very, very long time. Thank you! My name is Pago and I say you are a friend of Bingwies.”.

```text
playsound3d "scamp roar"
Journal Nab_PipeJourn 5
```

### Related records and locations

**Dialogue speakers:**
- Pago (`SW_Pago`) — `Naboo, Bingwie Village`

**Scripts that read or write this journal:**
- `Nab_BagoScript` — Creature Bago (`SW_Bago`); placed in `Naboo, Bingwie Village`
- `Nab_PagoSpawn` — Activator `Nab_Music_Pipe1Stand`; placed in `Naboo, Bingwie Village`

**Cells implicated by actor/object placement or explicit travel code:**
- `Naboo, Bingwie Village`

<details><summary>Journal-state readers (2 code sites)</summary>

- Script `Nab_BagoScript`. attached to Creature Bago (`SW_Bago`); placed in `Naboo, Bingwie Village`.
- Script `Nab_PagoSpawn`. attached to Activator `Nab_Music_Pipe1Stand`; placed in `Naboo, Bingwie Village`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5` (`Finished`): Pago the Bingwie is impressed that I knew the call of a Fambaa using the Bingwie Pipes. He says he will call m…
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `Nab_PipeJourn`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
