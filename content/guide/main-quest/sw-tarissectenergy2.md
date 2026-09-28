---
title: "Chapter 2: A Final Piece"
description: "Walkthrough and QA reference for Chapter 2: A Final Piece (SW_TarisSectEnergy2)."
weight: 13
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_TarisSectEnergy2"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_TarisSectEnergy2` |
| **Category** | Main Quest |
| **Journal entries** | 4 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Shade Vendas** in **Taris, Central Plaza: Capital Tower**. |
| **Observed prerequisite journals** | `SW_TarisChap2-1` |
| **Key locations** | M4-78: Reactor, Taris, Central Plaza: Capital Tower, The Outer Rim |
| **Key characters** | Shade Vendas |

## Walkthrough

### 1. Speak with Shade Vendas in Taris, Central Plaza: Capital Tower

Speak with **Shade Vendas** in **Taris, Central Plaza: Capital Tower**.

> **Expected journal update — index 5:** Shade wants me to go to M4-78 to steal a reactor core from a Sith droid depot. She has uploaded the docking coordinates to my ship and I should be able to land there now.

**Known item transfer:** 15 × **Plasma Grenade** (`SW_PlasmaGrenadee`).

### 2. Activate Reactor Core in M4-78: Reactor

Activate **Reactor Core** in **M4-78: Reactor**.

> **Expected journal update — index 10:** I've got the reactor core, I should return to Shade.

### 3. Speak with Shade Vendas in Taris, Central Plaza: Capital Tower and ask about M4:78 — Finished

Speak with **Shade Vendas** in **Taris, Central Plaza: Capital Tower** and ask about **M4:78**.

> **Expected journal update — index 15:** I gave Shade the reactor core from M4:78, she says Gezeki wants to meet me in the lab as soon as possible, and that it is urgent.

**Known item transfer:** 2000 × **Credits** (`gold_001`).

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 15**:

> I gave Shade the reactor core from M4:78, she says Gezeki wants to meet me in the lab as soon as possible, and that it is urgent.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 15 × **Plasma Grenade** (`SW_PlasmaGrenadee`)
- 2000 × **Credits** (`gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Shade Vendas** (`SW_ShadeTower`) — `Taris, Central Plaza: Capital Tower`

**Locations implicated by actor/object placement or explicit travel:**
- **M4-78: Reactor**
- **Taris, Central Plaza: Capital Tower**
- **The Outer Rim**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_TarisSectEnergy2`
**Generated category:** Main Quest
**Journal entries:** 4

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | Shade wants me to go to M4-78 to steal a reactor core from a Sith droid depot. She has uploaded the docking coordinates to my ship and I should be able to land there now. | 1 |
| 10 | — | I've got the reactor core, I should return to Shade. | 1 |
| 15 | Finished | I gave Shade the reactor core from M4:78, she says Gezeki wants to meet me in the lab as soon as possible, and that it is urgent. | 1 |

### Record-level trigger map

### Stage 5

Shade wants me to go to M4-78 to steal a reactor core from a Sith droid depot. She has uploaded the docking coordinates to my ship and I should be able to land there now.

**How this stage is set:**
- Dialogue INFO `28428212891711926674` under topic **Greeting 7**; speaker Shade Vendas (`SW_ShadeTower`). locations: `Taris, Central Plaza: Capital Tower`. conditions: Journal `SW_TarisChap2-1` Equal 15; Function/Choice Equal 1; Journal `SW_TarisSectEnergy2` Equal 0. response: “There is a planet being built for the Sith by an enormous population of droids called M4-78. I have coordinates not only to the planet but to a landing platform for an energy reactor. If we can get into the reactor there then we can steal the reactor core and use it to power the infrastructure here. I've downloaded the coordinates to your ship, it should be an easy flight, and there shouldn't be many Sith troops stationed there. Just be careful. And take these, they will be most effective on the droids.”.

```text
PlaySound3D "KelliM4D1"
Player->additem SW_PlasmaGrenadee 15
Journal SW_TarisSectEnergy2 5
AddTopic "M4:78"
```

### Stage 10

I've got the reactor core, I should return to Shade.

**How this stage is set:**
- Script `SW_M4PickupCore`. attached to MiscItem Reactor Core (`SW_ReactorCore`); placed in `M4-78: Reactor`.

```text
If ( OnActivate )
    If ( GetJournalIndex SW_TarisSectEnergy2 == 5 )
        Journal SW_TarisSectEnergy2 10
        Activate
    Else
```

### Stage 15 — Finished

I gave Shade the reactor core from M4:78, she says Gezeki wants to meet me in the lab as soon as possible, and that it is urgent.

**How this stage is set:**
- Dialogue INFO `2869412902321175966` under topic **M4:78**; speaker Shade Vendas (`SW_ShadeTower`). locations: `Taris, Central Plaza: Capital Tower`. conditions: Item/ItemType `SW_ReactorCore` GreaterEqual 1. response: “With this we can reinforce the infrastructure to power the whole sector. You are the most impressive individual I have ever met. Gezeki has asked if you'd meet him in his lab, he said it was urgent.”.

```text
Player->removeitem SW_ReactorCore 1
player->additem gold_001 2000
Journal SW_TarisSectEnergy2 15
Journal SW_TarisChapX3-1 10
```

### Related records and locations

**Dialogue speakers:**
- Shade Vendas (`SW_ShadeTower`) — `Taris, Central Plaza: Capital Tower`

**Scripts that read or write this journal:**
- `SW_EnterM478` — Activator M4-78 (`SW_PlanM478`); placed in `The Outer Rim`
- `SW_M4PickupCore` — MiscItem Reactor Core (`SW_ReactorCore`); placed in `M4-78: Reactor`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)
- Plasma Grenade (`SW_PlasmaGrenadee`)
- Reactor Core (`SW_ReactorCore`)
- Unequip (`SW_SpCarNone`)

**Cells implicated by actor/object placement or explicit travel code:**
- `M4-78: Reactor`
- `Taris, Central Plaza: Capital Tower`
- `The Outer Rim`

<details><summary>Journal-state readers (2 code sites)</summary>

- Script `SW_EnterM478`. attached to Activator M4-78 (`SW_PlanM478`); placed in `The Outer Rim`.
- Script `SW_M4PickupCore`. attached to MiscItem Reactor Core (`SW_ReactorCore`); placed in `M4-78: Reactor`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: Shade wants me to go to M4-78 to steal a reactor core from a Sith droid depot. She has uploaded the docking co…
- [ ] Reach index `10`: I've got the reactor core, I should return to Shade.
- [ ] Reach index `15` (`Finished`): I gave Shade the reactor core from M4:78, she says Gezeki wants to meet me in the lab as soon as possible, and…
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_TarisSectEnergy2`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
