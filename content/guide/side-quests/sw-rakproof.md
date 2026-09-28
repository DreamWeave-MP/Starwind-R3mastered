---
title: "Rakghoul Roots"
description: "Walkthrough and QA reference for Rakghoul Roots (SW_RakProof)."
weight: 64
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_RakProof"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_RakProof` |
| **Category** | Side Quests |
| **Journal entries** | 3 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Czerka Protocol Officer** in **Dantooine, Czerka Mining Office** and ask about **proof**. |
| **Key locations** | Dantooine, Czerka Mining Office |
| **Key characters** | Czerka Protocol Officer |

## Walkthrough

### 1. Speak with Czerka Protocol Officer in Dantooine, Czerka Mining Office and ask about proof

Speak with **Czerka Protocol Officer** in **Dantooine, Czerka Mining Office** and ask about **proof**.

> **Expected journal update — index 5:** The Czerka Mining Office on Dantooine believes that someone intentionally placed the rakghoul disease in their Terenthium Mine and would like proof.

### 2. Speak with Czerka Protocol Officer in Dantooine, Czerka Mining Office and ask about proof — Finished

Speak with **Czerka Protocol Officer** in **Dantooine, Czerka Mining Office** and ask about **proof**.

> **Expected journal update — index 10:** I have returned with proof and was paid in 400 credits for completion of my job.

**Known item transfer:** 400 × **Credits** (`gold_001`).

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 10**:

> I have returned with proof and was paid in 400 credits for completion of my job.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 400 × **Credits** (`gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Czerka Protocol Officer** (`SW_CzerkaMineHead`) — `Dantooine, Czerka Mining Office`

**Locations implicated by actor/object placement or explicit travel:**
- **Dantooine, Czerka Mining Office**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_RakProof`
**Generated category:** Side Quests
**Journal entries:** 3

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | The Czerka Mining Office on Dantooine believes that someone intentionally placed the rakghoul disease in their Terenthium Mine and would like proof. | 1 |
| 10 | Finished | I have returned with proof and was paid in 400 credits for completion of my job. | 1 |

### Record-level trigger map

### Stage 5

The Czerka Mining Office on Dantooine believes that someone intentionally placed the rakghoul disease in their Terenthium Mine and would like proof.

**How this stage is set:**
- Dialogue INFO `19742103071143512068` under topic **proof**; speaker Czerka Protocol Officer (`SW_CzerkaMineHead`). locations: `Dantooine, Czerka Mining Office`. conditions: Journal `SW_RakProof` Equal 0. response: “We believe the rakghoul infestation was done intentionally, to keep us here longer or prevent us from getting the terenthium in the mine. Why we don't know, but we want solid proof that this was a malicious act. If you find any we'll pay you for it.”.

```text
Journal SW_RakProof 5
```

### Stage 10 — Finished

I have returned with proof and was paid in 400 credits for completion of my job.

**How this stage is set:**
- Dialogue INFO `304386681886719089` under topic **proof**; speaker Czerka Protocol Officer (`SW_CzerkaMineHead`). locations: `Dantooine, Czerka Mining Office`. conditions: Journal `SW_RakProof` Equal 5; Item/ItemType `SW_Biohazard` GreaterEqual 1. response: “These containers aren't anything of ours, not to my knowledge anyway. This must be it, I'll have one sent off to a lab to be investigated further. You can keep the rest, we don't want them in here anyway.”.

```text
Journal SW_RakProof 10
player->additem "gold_001", 400
player->removeitem "SW_Biohazard", 1
```

### Related records and locations

**Dialogue speakers:**
- Czerka Protocol Officer (`SW_CzerkaMineHead`) — `Dantooine, Czerka Mining Office`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)
- Biohazard Container (`SW_Biohazard`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Dantooine, Czerka Mining Office`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: The Czerka Mining Office on Dantooine believes that someone intentionally placed the rakghoul disease in their…
- [ ] Reach index `10` (`Finished`): I have returned with proof and was paid in 400 credits for completion of my job.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_RakProof`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
