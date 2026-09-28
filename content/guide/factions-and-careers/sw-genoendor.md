---
title: "Contract: Endoral Sataniel"
description: "Walkthrough and QA reference for Contract: Endoral Sataniel (SW_GenoEndor)."
weight: 19
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_GenoEndor"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_GenoEndor` |
| **Category** | Factions & Careers |
| **Journal entries** | 3 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Rulan Prolik** in **Tatooine, GenoHaradan Guildhall** and ask about **Endoran Sataniel**. |
| **Key locations** | Tatooine, GenoHaradan Guildhall |
| **Key characters** | Rulan Prolik |

## Walkthrough

### 1. Speak with Rulan Prolik in Tatooine, GenoHaradan Guildhall and ask about Endoran Sataniel

Speak with **Rulan Prolik** in **Tatooine, GenoHaradan Guildhall** and ask about **Endoran Sataniel**.

> **Expected journal update — index 5:** This GenoHaradan contract I have is for a human male in Sandriver, Tatooine by the name of Endoral Sataniel. He needs to be killed silenty and swiftly before he is allowed to leave the city.

### 2. Speak with Rulan Prolik in Tatooine, GenoHaradan Guildhall and ask about Endoran Sataniel — Finished

Speak with **Rulan Prolik** in **Tatooine, GenoHaradan Guildhall** and ask about **Endoran Sataniel**.

> **Expected journal update — index 10:** I've been rewarded for silencing the Republic agent, I should check with Prolik for more contracts.

**Known item transfer:** 2000 × **Credits** (`Gold_001`).

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 10**:

> I've been rewarded for silencing the Republic agent, I should check with Prolik for more contracts.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 2000 × **Credits** (`Gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Rulan Prolik** (`SW_GenoProlik`) — `Tatooine, GenoHaradan Guildhall`

**Locations implicated by actor/object placement or explicit travel:**
- **Tatooine, GenoHaradan Guildhall**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_GenoEndor`
**Generated category:** Factions & Careers
**Journal entries:** 3

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | This GenoHaradan contract I have is for a human male in Sandriver, Tatooine by the name of Endoral Sataniel. He needs to be killed silenty and swiftly before he is allowed to leave the city. | 1 |
| 10 | Finished | I've been rewarded for silencing the Republic agent, I should check with Prolik for more contracts. | 1 |

### Record-level trigger map

### Stage 5

This GenoHaradan contract I have is for a human male in Sandriver, Tatooine by the name of Endoral Sataniel. He needs to be killed silenty and swiftly before he is allowed to leave the city.

**How this stage is set:**
- Dialogue INFO `2016019818312729070` under topic **Endoran Sataniel**; speaker Rulan Prolik (`SW_GenoProlik`). locations: `Tatooine, GenoHaradan Guildhall`. conditions: Journal `SW_GenoEndor` Equal 0. response: “A human undercover agent of the Republic Fleet. He's on a mission to discover this guild hall and we are going to silence him before he figures out where we are. Right now he's fighting with the Czerka Corporation over a hunting license trying not to blow his cover, we need to corner him while he's trapped.”.

```text
Journal SW_GenoEndor 5
```

### Stage 10 — Finished

I've been rewarded for silencing the Republic agent, I should check with Prolik for more contracts.

**How this stage is set:**
- Dialogue INFO `7226147669829757` under topic **Endoran Sataniel**; speaker Rulan Prolik (`SW_GenoProlik`). locations: `Tatooine, GenoHaradan Guildhall`. conditions: Journal `SW_GenoEndor` Equal 5; Dead/DeadType `SW_RepubSpy` GreaterEqual 1. response: “More silent than the sand itself, that should wrap up that little mistake. I'll let my contacts in the Republic know not to let this happen again. Check back with me when you would like to see what contracts we currently have.”.

```text
Journal SW_GenoEndor 10
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
- [ ] Reach index `5`: This GenoHaradan contract I have is for a human male in Sandriver, Tatooine by the name of Endoral Sataniel. H…
- [ ] Reach index `10` (`Finished`): I've been rewarded for silencing the Republic agent, I should check with Prolik for more contracts.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_GenoEndor`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
