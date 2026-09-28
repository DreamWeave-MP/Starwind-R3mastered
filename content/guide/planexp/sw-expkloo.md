---
title: "The Missing Kloo"
description: "Walkthrough and QA reference for The Missing Kloo (SW_ExpKloo)."
weight: 11
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_ExpKloo"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_ExpKloo` |
| **Category** | Expansion / PlanExp |
| **Journal entries** | 3 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Hroot** in **Manaan, Inner City Cantina** and ask about **instrument**. |
| **Key locations** | Manaan, Inner City Cantina |
| **Key characters** | Hroot |

## Walkthrough

### 1. Speak with Hroot in Manaan, Inner City Cantina and ask about instrument

Speak with **Hroot** in **Manaan, Inner City Cantina** and ask about **instrument**.

> **Expected journal update — index 5:** Hroot forgot his kloo horn back on planet Bith. He's willing to pay in advanced medkits to anyone who can bring him a kloo horn as a backup.

### 2. Speak with Hroot in Manaan, Inner City Cantina and ask about instrument — Finished

Speak with **Hroot** in **Manaan, Inner City Cantina** and ask about **instrument**.

> **Expected journal update — index 10:** I brought Hroot a kloo horn who gave me 4 advanced medkits and a disease cure for helping him out.

**Known item transfer:** 4 × **Advanced Medkit** (`SW_MedkitAdv`).

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 10**:

> I brought Hroot a kloo horn who gave me 4 advanced medkits and a disease cure for helping him out.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 4 × **Advanced Medkit** (`SW_MedkitAdv`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Hroot** (`SW_ExpBith`) — `Manaan, Inner City Cantina`

**Locations implicated by actor/object placement or explicit travel:**
- **Manaan, Inner City Cantina**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_ExpKloo`
**Generated category:** Expansion / PlanExp
**Journal entries:** 3

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | Hroot forgot his kloo horn back on planet Bith. He's willing to pay in advanced medkits to anyone who can bring him a kloo horn as a backup. | 1 |
| 10 | Finished | I brought Hroot a kloo horn who gave me 4 advanced medkits and a disease cure for helping him out. | 1 |

### Record-level trigger map

### Stage 5

Hroot forgot his kloo horn back on planet Bith. He's willing to pay in advanced medkits to anyone who can bring him a kloo horn as a backup.

**How this stage is set:**
- Dialogue INFO `320311113315591796` under topic **instrument**; speaker Hroot (`SW_ExpBith`). locations: `Manaan, Inner City Cantina`. conditions: Journal `SW_ExpKloo` Equal 0. response: “I came all the way here from planet Bith to play in this cantina, and I forgot my kloo horn back home. I'm willing to pay in advanced medkits to anyone who can bring me a backup kloo horn.”.

```text
Journal SW_ExpKloo 5
```

### Stage 10 — Finished

I brought Hroot a kloo horn who gave me 4 advanced medkits and a disease cure for helping him out.

**How this stage is set:**
- Dialogue INFO `93936481273491453` under topic **instrument**; speaker Hroot (`SW_ExpBith`). locations: `Manaan, Inner City Cantina`. conditions: Journal `SW_ExpKloo` Equal 5; Item/ItemType `SW_KlooHorn` GreaterEqual 1. response: “Thank you my friend, you must understand how important the music really is.”.

```text
Journal SW_ExpKloo 10
player->removeitem SW_KlooHorn 1
player->additem SW_MedkitAdv 4
```

### Related records and locations

**Dialogue speakers:**
- Hroot (`SW_ExpBith`) — `Manaan, Inner City Cantina`

**Items referenced by related script/result code:**
- Disease Cure (`SW_CureDisease`)
- Kloo Horn (`SW_KlooHorn`)
- Advanced Medkit (`SW_MedkitAdv`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Manaan, Inner City Cantina`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: Hroot forgot his kloo horn back on planet Bith. He's willing to pay in advanced medkits to anyone who can brin…
- [ ] Reach index `10` (`Finished`): I brought Hroot a kloo horn who gave me 4 advanced medkits and a disease cure for helping him out.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_ExpKloo`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
