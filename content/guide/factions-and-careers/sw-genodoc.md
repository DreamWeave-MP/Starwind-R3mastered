---
title: "Contract: Doctor Yee'mar"
description: "Walkthrough and QA reference for Contract: Doctor Yee'mar (SW_GenoDoc)."
weight: 18
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_GenoDoc"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_GenoDoc` |
| **Category** | Factions & Careers |
| **Journal entries** | 3 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Rulan Prolik** in **Tatooine, GenoHaradan Guildhall** and ask about **Doctor Yee'mar**. |
| **Key locations** | Tatooine, GenoHaradan Guildhall |
| **Key characters** | Rulan Prolik |

## Walkthrough

### 1. Speak with Rulan Prolik in Tatooine, GenoHaradan Guildhall and ask about Doctor Yee'mar

Speak with **Rulan Prolik** in **Tatooine, GenoHaradan Guildhall** and ask about **Doctor Yee'mar**.

> **Expected journal update — index 5:** I was given a contract by the GenoHaradan to assassinate an Ithorian named Doctor Yee'mar who is currently in Boyle, Kashyyyk.

### 2. Speak with Rulan Prolik in Tatooine, GenoHaradan Guildhall and ask about Doctor Yee'mar — Finished

Speak with **Rulan Prolik** in **Tatooine, GenoHaradan Guildhall** and ask about **Doctor Yee'mar**.

> **Expected journal update — index 10:** e been rewarded for silencing Doctor Yee'mar, I should check with Prolik for more contracts.

**Known item transfer:** 2000 × **Credits** (`Gold_001`).

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 10**:

> e been rewarded for silencing Doctor Yee'mar, I should check with Prolik for more contracts.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 2000 × **Credits** (`Gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Rulan Prolik** (`SW_GenoProlik`) — `Tatooine, GenoHaradan Guildhall`

**Locations implicated by actor/object placement or explicit travel:**
- **Tatooine, GenoHaradan Guildhall**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_GenoDoc`
**Generated category:** Factions & Careers
**Journal entries:** 3

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | I was given a contract by the GenoHaradan to assassinate an Ithorian named Doctor Yee'mar who is currently in Boyle, Kashyyyk. | 1 |
| 10 | Finished | e been rewarded for silencing Doctor Yee'mar, I should check with Prolik for more contracts. | 1 |

### Record-level trigger map

### Stage 5

I was given a contract by the GenoHaradan to assassinate an Ithorian named Doctor Yee'mar who is currently in Boyle, Kashyyyk.

**How this stage is set:**
- Dialogue INFO `67961917179012246` under topic **Doctor Yee'mar**; speaker Rulan Prolik (`SW_GenoProlik`). locations: `Tatooine, GenoHaradan Guildhall`. conditions: Journal `SW_GenoDoc` Equal 0. response: “An Ithorian scientist digging too deep into Czerka experiments on Kashyyyk. He's in the town of Boyle, find him, go kill him, and don't let anyone see it. This should be fairly easy as far as our work goes.”.

```text
Journal SW_GenoDoc 5
```

### Stage 10 — Finished

e been rewarded for silencing Doctor Yee'mar, I should check with Prolik for more contracts.

**How this stage is set:**
- Dialogue INFO `16744242429124100` under topic **Doctor Yee'mar**; speaker Rulan Prolik (`SW_GenoProlik`). locations: `Tatooine, GenoHaradan Guildhall`. conditions: Journal `SW_GenoDoc` Equal 5; Dead/DeadType `SW_DrKash` GreaterEqual 1. response: “The Czerka Corporation will stay filling our pockets as long as they don't sway too far from our own political agenda. Let me know when you would like to look at other contracts, and if we're out just check back later and use the facilities here as you please.”.

```text
Journal SW_GenoDoc 10
player->additem "Gold_001", 2000
```

### Related records and locations

**Dialogue speakers:**
- Rulan Prolik (`SW_GenoProlik`) — `Tatooine, GenoHaradan Guildhall`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Tatooine, GenoHaradan Guildhall`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: I was given a contract by the GenoHaradan to assassinate an Ithorian named Doctor Yee'mar who is currently in …
- [ ] Reach index `10` (`Finished`): e been rewarded for silencing Doctor Yee'mar, I should check with Prolik for more contracts.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_GenoDoc`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
