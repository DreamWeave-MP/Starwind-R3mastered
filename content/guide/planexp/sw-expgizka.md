---
title: "Tastes Like Fish"
description: "Walkthrough and QA reference for Tastes Like Fish (SW_ExpGizka)."
weight: 9
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_ExpGizka"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_ExpGizka` |
| **Category** | Expansion / PlanExp |
| **Journal entries** | 3 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Grgeen Chutaan** in **Manaan, Inner City Cantina** and ask about **gizka**. |
| **Key locations** | Manaan, Inner City Cantina |
| **Key characters** | Grgeen Chutaan |

## Walkthrough

### 1. Speak with Grgeen Chutaan in Manaan, Inner City Cantina and ask about gizka

Speak with **Grgeen Chutaan** in **Manaan, Inner City Cantina** and ask about **gizka**.

> **Expected journal update — index 3:** Grgeen Chutaan is looking for gizka meat, although he told his wife that he would refrain from spending credits on the dispensers. Grgeen will give me 200 credits for a single piece of processed gizka meat.

### 2. Speak with Grgeen Chutaan in Manaan, Inner City Cantina and ask about gizka — Finished

Speak with **Grgeen Chutaan** in **Manaan, Inner City Cantina** and ask about **gizka**.

> **Expected journal update — index 5:** I have given Grgeen the gizka meat and he held up his end of the bargain.

**Known item transfer:** 200 × **Credits** (`gold_001`).

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 5**:

> I have given Grgeen the gizka meat and he held up his end of the bargain.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 200 × **Credits** (`gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Grgeen Chutaan** (`SW_Exp1SelkathGizka`) — `Manaan, Inner City Cantina`

**Locations implicated by actor/object placement or explicit travel:**
- **Manaan, Inner City Cantina**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_ExpGizka`
**Generated category:** Expansion / PlanExp
**Journal entries:** 3

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 3 | — | Grgeen Chutaan is looking for gizka meat, although he told his wife that he would refrain from spending credits on the dispensers. Grgeen will give me 200 credits for a single piece of processed gizka meat. | 1 |
| 5 | Finished | I have given Grgeen the gizka meat and he held up his end of the bargain. | 1 |

### Record-level trigger map

### Stage 3

Grgeen Chutaan is looking for gizka meat, although he told his wife that he would refrain from spending credits on the dispensers. Grgeen will give me 200 credits for a single piece of processed gizka meat.

**How this stage is set:**
- Dialogue INFO `10004173262908413678` under topic **gizka**; speaker Grgeen Chutaan (`SW_Exp1SelkathGizka`). locations: `Manaan, Inner City Cantina`. conditions: Journal `SW_ExpGizka` Equal 0. response: “That's right, gizka meat. The wife is watching our budget, doesnt' want me spending any credits at the dispenary. But she doesn't know I've got credits already pulled out. I'll give you 200 credits for 1 of those processed gizka meats. I just have to have some.”.

```text
Journal SW_ExpGizka 3
```

### Stage 5 — Finished

I have given Grgeen the gizka meat and he held up his end of the bargain.

**How this stage is set:**
- Dialogue INFO `835627410981613869` under topic **gizka**; speaker Grgeen Chutaan (`SW_Exp1SelkathGizka`). locations: `Manaan, Inner City Cantina`. conditions: Journal `SW_ExpGizka` Equal 3; Item/ItemType `SW_Exp1GizMeat` GreaterEqual 1. response: “Oooooh yes! Thank you offworlder, you've made a happy gizka out of me.”.

```text
player->removeitem SW_Exp1GizMeat 1
player->additem gold_001 200
Journal SW_ExpGizka 5
```

### Related records and locations

**Dialogue speakers:**
- Grgeen Chutaan (`SW_Exp1SelkathGizka`) — `Manaan, Inner City Cantina`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)
- Gizka Meat (`SW_Exp1GizMeat`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Manaan, Inner City Cantina`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `3` is obtainable.
- [ ] Reach index `3`: Grgeen Chutaan is looking for gizka meat, although he told his wife that he would refrain from spending credit…
- [ ] Reach index `5` (`Finished`): I have given Grgeen the gizka meat and he held up his end of the bargain.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_ExpGizka`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
