---
title: "Contract: Alister Capostrophic"
description: "Walkthrough and QA reference for Contract: Alister Capostrophic (SW_GenoAlister)."
weight: 17
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_GenoAlister"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_GenoAlister` |
| **Category** | Factions & Careers |
| **Journal entries** | 3 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Rulan Prolik** in **Tatooine, GenoHaradan Guildhall** and ask about **Alister Capostrophic**. |
| **Key locations** | Tatooine, GenoHaradan Guildhall |
| **Key characters** | Rulan Prolik |

## Walkthrough

### 1. Speak with Rulan Prolik in Tatooine, GenoHaradan Guildhall and ask about Alister Capostrophic

Speak with **Rulan Prolik** in **Tatooine, GenoHaradan Guildhall** and ask about **Alister Capostrophic**.

> **Expected journal update — index 5:** Alister Capostrophic is a GenoHaradan assassin gone rogue and was last spotted on a Hutt Cartel rooftop in Nar Shadda taking out shuttles that are in the air. I was told to be careful as Alister is extremely dangerous.

### 2. Speak with Rulan Prolik in Tatooine, GenoHaradan Guildhall and ask about Alister Capostrophic — Finished

Speak with **Rulan Prolik** in **Tatooine, GenoHaradan Guildhall** and ask about **Alister Capostrophic**.

> **Expected journal update — index 10:** This was a well paying contract, and the fact I killed Alister alone impressed Prolik.

**Known item transfer:** 2500 × **Credits** (`Gold_001`).

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 10**:

> This was a well paying contract, and the fact I killed Alister alone impressed Prolik.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 2500 × **Credits** (`Gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Rulan Prolik** (`SW_GenoProlik`) — `Tatooine, GenoHaradan Guildhall`

**Locations implicated by actor/object placement or explicit travel:**
- **Tatooine, GenoHaradan Guildhall**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_GenoAlister`
**Generated category:** Factions & Careers
**Journal entries:** 3

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | Alister Capostrophic is a GenoHaradan assassin gone rogue and was last spotted on a Hutt Cartel rooftop in Nar Shadda taking out shuttles that are in the air. I was told to be careful as Alister is extremely dangerous. | 1 |
| 10 | Finished | This was a well paying contract, and the fact I killed Alister alone impressed Prolik. | 1 |

### Record-level trigger map

### Stage 5

Alister Capostrophic is a GenoHaradan assassin gone rogue and was last spotted on a Hutt Cartel rooftop in Nar Shadda taking out shuttles that are in the air. I was told to be careful as Alister is extremely dangerous.

**How this stage is set:**
- Dialogue INFO `2280432402212663860` under topic **Alister Capostrophic**; speaker Rulan Prolik (`SW_GenoProlik`). locations: `Tatooine, GenoHaradan Guildhall`. conditions: Journal `SW_GenoAlister` Equal 0. response: “This contract is not to be taken lightly. One of our own assassins, Alister Capostrophic has decided to take rogue hits on the Hutt Cartel in Nar Shadda. He has been waiting for them to launch from on top of one of their buildings there and taking out their shuttles mid-air. Find him, and kill him, do not give him a chance, just end him. He is causing far too much trouble with our relations with the Hutt Cartel and was already warned once.”.

```text
Journal SW_GenoAlister 5
```

### Stage 10 — Finished

This was a well paying contract, and the fact I killed Alister alone impressed Prolik.

**How this stage is set:**
- Dialogue INFO `49188542899119375` under topic **Alister Capostrophic**; speaker Rulan Prolik (`SW_GenoProlik`). locations: `Tatooine, GenoHaradan Guildhall`. conditions: Journal `SW_GenoAlister` Equal 5; Dead/DeadType `SW_GenoAssassinQuest` GreaterEqual 1. response: “Honestly I wasn't sure if you were going to come back or not on that one. We don't like to dispatch more than one assassin at a time unless we believe there is no other choice as it has a higher risk of drawing attention. Your a killer, there is no doubt there, good work. At this rate we will run out of contracts, but don't worry, more will come.”.

```text
Journal SW_GenoAlister 10
player->additem "Gold_001", 2500
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
- [ ] Reach index `5`: Alister Capostrophic is a GenoHaradan assassin gone rogue and was last spotted on a Hutt Cartel rooftop in Nar…
- [ ] Reach index `10` (`Finished`): This was a well paying contract, and the fact I killed Alister alone impressed Prolik.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_GenoAlister`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
