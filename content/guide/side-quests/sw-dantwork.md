---
title: "Dantooine's Flavor"
description: "Walkthrough and QA reference for Dantooine's Flavor (SW_DantWork)."
weight: 31
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_DantWork"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_DantWork` |
| **Category** | Side Quests |
| **Journal entries** | 3 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Dron Anden** in **Dantooine, Czerka Office** and ask about **work**. |
| **Key locations** | Dantooine, Czerka Office |
| **Key characters** | Dron Anden |

## Walkthrough

### 1. Speak with Dron Anden in Dantooine, Czerka Office and ask about work

Speak with **Dron Anden** in **Dantooine, Czerka Office** and ask about **work**.

> **Expected journal update — index 5:** The Czerka Office on Dantooine says they will pay me for 5 Tritacale, apparently it's the only decent indigenous spice for food flavoring on the planet.

### 2. Speak with Dron Anden in Dantooine, Czerka Office and ask about work — Finished

Speak with **Dron Anden** in **Dantooine, Czerka Office** and ask about **work**.

> **Expected journal update — index 10:** I have been given 400 credits for the Tritacale I brought the Czerka Office on Dantooine.

**Known item transfer:** 400 × **Credits** (`gold_001`).

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 10**:

> I have been given 400 credits for the Tritacale I brought the Czerka Office on Dantooine.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 400 × **Credits** (`gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Dron Anden** (`SW_CzerkaOfficeGuyDant`) — `Dantooine, Czerka Office`

**Locations implicated by actor/object placement or explicit travel:**
- **Dantooine, Czerka Office**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_DantWork`
**Generated category:** Side Quests
**Journal entries:** 3

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | The Czerka Office on Dantooine says they will pay me for 5 Tritacale, apparently it's the only decent indigenous spice for food flavoring on the planet. | 1 |
| 10 | Finished | I have been given 400 credits for the Tritacale I brought the Czerka Office on Dantooine. | 1 |

### Record-level trigger map

### Stage 5

The Czerka Office on Dantooine says they will pay me for 5 Tritacale, apparently it's the only decent indigenous spice for food flavoring on the planet.

**How this stage is set:**
- Dialogue INFO `13428290441234614854` under topic **work**; speaker Dron Anden (`SW_CzerkaOfficeGuyDant`). locations: `Dantooine, Czerka Office`. conditions: Journal `SW_DantWork` Equal 0. response: “Well we have a problem around here. The food has no flavor, it's like the people around here are brainwashed to think they can eat basic farm food to survive and that there's nothing else out there. There's this wheat-like plant that grows around and in water known as Tritacale. If you bring me 5 of them I'll pay you in credits.”.

```text
Journal SW_DantWork 5
```

### Stage 10 — Finished

I have been given 400 credits for the Tritacale I brought the Czerka Office on Dantooine.

**How this stage is set:**
- Dialogue INFO `533817222322018511` under topic **work**; speaker Dron Anden (`SW_CzerkaOfficeGuyDant`). locations: `Dantooine, Czerka Office`. conditions: Journal `SW_DantWork` Equal 5; Item/ItemType `SW_DantooieFloraTrit` GreaterEqual 5. response: “The tritacale? Finally, I have longed for something that doesn't taste like dirt, I'm going to savor these, here's your credits.”.

```text
Journal SW_DantWork 10
player->removeitem "SW_DantooineFloraTrit", 5
player->additem "gold_001", 400
```

### Related records and locations

**Dialogue speakers:**
- Dron Anden (`SW_CzerkaOfficeGuyDant`) — `Dantooine, Czerka Office`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)
- SW_DantooineFloraTrit

**Cells implicated by actor/object placement or explicit travel code:**
- `Dantooine, Czerka Office`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: The Czerka Office on Dantooine says they will pay me for 5 Tritacale, apparently it's the only decent indigeno…
- [ ] Reach index `10` (`Finished`): I have been given 400 credits for the Tritacale I brought the Czerka Office on Dantooine.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_DantWork`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
