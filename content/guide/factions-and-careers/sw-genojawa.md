---
title: "Contract: Tao Ooze"
description: "Walkthrough and QA reference for Contract: Tao Ooze (SW_GenoJawa)."
weight: 20
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_GenoJawa"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_GenoJawa` |
| **Category** | Factions & Careers |
| **Journal entries** | 3 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Rulan Prolik** in **Tatooine, GenoHaradan Guildhall** and ask about **Tao Ooze**. |
| **Key locations** | Tatooine, GenoHaradan Guildhall |
| **Key characters** | Rulan Prolik |

## Walkthrough

### 1. Speak with Rulan Prolik in Tatooine, GenoHaradan Guildhall and ask about Tao Ooze

Speak with **Rulan Prolik** in **Tatooine, GenoHaradan Guildhall** and ask about **Tao Ooze**.

> **Expected journal update — index 5:** The GenoHaradan have given me a contract to hunt down and kill a Jawa named Tao Ooze in the dune sea near Sandriver. He is apparently hiding away in a sandcrawler he is using to manufacture droids. I should return to Prolik when Tao is dead.

### 2. Speak with Rulan Prolik in Tatooine, GenoHaradan Guildhall and ask about Tao Ooze — Finished

Speak with **Rulan Prolik** in **Tatooine, GenoHaradan Guildhall** and ask about **Tao Ooze**.

> **Expected journal update — index 10:** I have turned in the contract for Tao Ooze and am ready to take on another contract.

**Known item transfer:** 2000 × **Credits** (`Gold_001`).

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 10**:

> I have turned in the contract for Tao Ooze and am ready to take on another contract.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 2000 × **Credits** (`Gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Rulan Prolik** (`SW_GenoProlik`) — `Tatooine, GenoHaradan Guildhall`

**Locations implicated by actor/object placement or explicit travel:**
- **Tatooine, GenoHaradan Guildhall**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_GenoJawa`
**Generated category:** Factions & Careers
**Journal entries:** 3

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | The GenoHaradan have given me a contract to hunt down and kill a Jawa named Tao Ooze in the dune sea near Sandriver. He is apparently hiding away in a sandcrawler he is using to manufacture droids. I should return to Prolik when Tao is dead. | 1 |
| 10 | Finished | I have turned in the contract for Tao Ooze and am ready to take on another contract. | 1 |

### Record-level trigger map

### Stage 5

The GenoHaradan have given me a contract to hunt down and kill a Jawa named Tao Ooze in the dune sea near Sandriver. He is apparently hiding away in a sandcrawler he is using to manufacture droids. I should return to Prolik when Tao is dead.

**How this stage is set:**
- Dialogue INFO `12434296952060422800` under topic **Tao Ooze**; speaker Rulan Prolik (`SW_GenoProlik`). locations: `Tatooine, GenoHaradan Guildhall`. conditions: Journal `SW_GenoJawa` Equal 0. response: “Don't let the fact that this hit being a Jawa will make it easy. Tao Ooze is resourceful, and his sandcrawler in the dune sea here is surely set up for attackers. If your going after this contract, I'd take him out as quickly as possible before he overruns you with droids.”.

```text
Journal SW_GenoJawa 5
```

### Stage 10 — Finished

I have turned in the contract for Tao Ooze and am ready to take on another contract.

**How this stage is set:**
- Dialogue INFO `747481592627531773` under topic **Tao Ooze**; speaker Rulan Prolik (`SW_GenoProlik`). locations: `Tatooine, GenoHaradan Guildhall`. conditions: Journal `SW_GenoJawa` Equal 5; Dead/DeadType `SW_JewaSandcrawler` GreaterEqual 1. response: “That should make our Republic client happy. Good work out there. Let me know when your ready for more contracts. If there aren't any left check back later.”.

```text
Journal SW_GenoJawa 10
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
- [ ] Reach index `5`: The GenoHaradan have given me a contract to hunt down and kill a Jawa named Tao Ooze in the dune sea near Sand…
- [ ] Reach index `10` (`Finished`): I have turned in the contract for Tao Ooze and am ready to take on another contract.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_GenoJawa`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
