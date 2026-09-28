---
title: "Friend of Bingwies"
description: "Walkthrough and QA reference for Friend of Bingwies (Nab_BingFriend)."
weight: 6
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "Nab_BingFriend"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `Nab_BingFriend` |
| **Category** | Naboo |
| **Journal entries** | 3 |
| **Completion branches** | 1 |
| **Starts by** | Reach **Naboo, Bingwie Village** and allow the scripted event to complete. |
| **Key locations** | Naboo, Bingwie Village |
| **Key characters** | Bago |

## Walkthrough

### 1. Reach Naboo, Bingwie Village and allow the scripted event to complete

Reach **Naboo, Bingwie Village** and allow the scripted event to complete.

> **Expected journal update — index 5:** I have helped all of the Bingwies that need assistance in their village and should return to Bago.

### 2. Speak with Bago in Naboo, Bingwie Village — Finished

Speak with **Bago** in **Naboo, Bingwie Village**.

> **Expected journal update — index 10:** Bago says that I will always be a friend of the Bingwies and has given me the skull of Mago, which they have gone out and retrieved and placed some kind of dark side curse on to reanimate the corpse of Mago to aid me in my travels.

**Known item transfer:** 1 × **The Skull of Mago** (`SW_MagoSkull`).

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 10**:

> Bago says that I will always be a friend of the Bingwies and has given me the skull of Mago, which they have gone out and retrieved and placed some kind of dark side curse on to reanimate the corpse of Mago to aid me in my travels.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 1 × **The Skull of Mago** (`SW_MagoSkull`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Bago** (`SW_Bago`) — `Naboo, Bingwie Village`

**Locations implicated by actor/object placement or explicit travel:**
- **Naboo, Bingwie Village**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `Nab_BingFriend`
**Generated category:** Naboo
**Journal entries:** 3

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | I have helped all of the Bingwies that need assistance in their village and should return to Bago. | 1 |
| 10 | Finished | Bago says that I will always be a friend of the Bingwies and has given me the skull of Mago, which they have gone out and retrieved and placed some kind of dark side curse on to reanimate the corpse of Mago to aid me in my travels. | 1 |

### Record-level trigger map

### Stage 5

I have helped all of the Bingwies that need assistance in their village and should return to Bago.

**How this stage is set:**
- Script `Nab_BagoScript`. attached to Creature Bago (`SW_Bago`); placed in `Naboo, Bingwie Village`.

```text
If ( GetJournalIndex Nab_PipeJourn == 5 )
                        If ( DoOnce == 0 )
                            Journal Nab_BingFriend 5
                            Set DoOnce to 1
                        Endif
```

### Stage 10 — Finished

Bago says that I will always be a friend of the Bingwies and has given me the skull of Mago, which they have gone out and retrieved and placed some kind of dark side curse on to reanimate the corpse of Mago to aid me in my travels.

**How this stage is set:**
- Dialogue INFO `1036814302157326180` under topic **Greeting 7**; speaker Bago (`SW_Bago`). locations: `Naboo, Bingwie Village`. conditions: Journal `Nab_BingFriend` Equal 5. response: “You have helped the Bingwie, and have proven that you are a friend to us. Please, Mago would want you to have this. It's his skull, imbued with the collective power of the Bingwie and can bring him back to aid you whenever you are in need.”.

```text
Journal Nab_BingFriend 10
player->additem SW_MagoSkull 1
```

### Related records and locations

**Dialogue speakers:**
- Bago (`SW_Bago`) — `Naboo, Bingwie Village`

**Scripts that read or write this journal:**
- `Nab_BagoScript` — Creature Bago (`SW_Bago`); placed in `Naboo, Bingwie Village`

**Items referenced by related script/result code:**
- The Skull of Mago (`SW_MagoSkull`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Naboo, Bingwie Village`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: I have helped all of the Bingwies that need assistance in their village and should return to Bago.
- [ ] Reach index `10` (`Finished`): Bago says that I will always be a friend of the Bingwies and has given me the skull of Mago, which they have g…
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `Nab_BingFriend`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
