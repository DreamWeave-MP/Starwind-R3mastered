---
title: "Rakghoul Host"
description: "Walkthrough and QA reference for Rakghoul Host (SW_RakHost)."
weight: 63
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_RakHost"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_RakHost` |
| **Category** | Side Quests |
| **Journal entries** | 3 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Czerka Protocol Officer** in **Dantooine, Czerka Mining Office** and ask about **host**. |
| **Key locations** | Dantooine, Czerka Mining Office |
| **Key characters** | Czerka Protocol Officer |

## Walkthrough

### 1. Speak with Czerka Protocol Officer in Dantooine, Czerka Mining Office and ask about host

Speak with **Czerka Protocol Officer** in **Dantooine, Czerka Mining Office** and ask about **host**.

> **Expected journal update — index 5:** The Czerka Mining Office on Dantooine would like me to find a host rakghoul they believe was the first infected, and is supposedly much stronger than the other rakghouls in the mine. I should return to their office if I kill this creature.

### 2. Speak with Czerka Protocol Officer in Dantooine, Czerka Mining Office and ask about host — Finished

Speak with **Czerka Protocol Officer** in **Dantooine, Czerka Mining Office** and ask about **host**.

> **Expected journal update — index 10:** The Czerka Mining Office has paid me in 400 credits for destroying the rakghoul creature inside of the Terenthium Mine.

**Known item transfer:** 400 × **Credits** (`gold_001`).

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 10**:

> The Czerka Mining Office has paid me in 400 credits for destroying the rakghoul creature inside of the Terenthium Mine.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 400 × **Credits** (`gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Czerka Protocol Officer** (`SW_CzerkaMineHead`) — `Dantooine, Czerka Mining Office`

**Locations implicated by actor/object placement or explicit travel:**
- **Dantooine, Czerka Mining Office**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_RakHost`
**Generated category:** Side Quests
**Journal entries:** 3

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | The Czerka Mining Office on Dantooine would like me to find a host rakghoul they believe was the first infected, and is supposedly much stronger than the other rakghouls in the mine. I should return to their office if I kill this creature. | 2 |
| 10 | Finished | The Czerka Mining Office has paid me in 400 credits for destroying the rakghoul creature inside of the Terenthium Mine. | 1 |

### Record-level trigger map

### Stage 5

The Czerka Mining Office on Dantooine would like me to find a host rakghoul they believe was the first infected, and is supposedly much stronger than the other rakghouls in the mine. I should return to their office if I kill this creature.

**How this stage is set:**
- Dialogue INFO `262540371448822662` under topic **host**; speaker Czerka Protocol Officer (`SW_CzerkaMineHead`). locations: `Dantooine, Czerka Mining Office`. conditions: Journal `SW_RakHost` Equal 5. response: “We have a rakghoul infestation inside of the Terenthium Mine, we've sent in people to try to take care of it but we've just increased their numbers. They've destroyed all our droids and one of them seems to be particularly stronger than the rest. Kill them, and we'll pay you for your work. A good mercenary is hard to come by around here.”.

```text
Journal SW_RakHost 5
```
- Dialogue INFO `115594380301275363` under topic **host**; speaker Czerka Protocol Officer (`SW_CzerkaMineHead`). locations: `Dantooine, Czerka Mining Office`. conditions: Journal `SW_RakHost` Equal 0. response: “We have a rakghoul infestation inside of the Terenthium Mine, we've sent in people to try to take care of it but we've just increased their numbers. They've destroyed all our droids and one of them seems to be particularly stronger than the rest. Kill them, and we'll pay you for your work. A good mercenary is hard to come by around here.”.

```text
Journal SW_RakHost 5
```

### Stage 10 — Finished

The Czerka Mining Office has paid me in 400 credits for destroying the rakghoul creature inside of the Terenthium Mine.

**How this stage is set:**
- Dialogue INFO `1687099951585310288` under topic **host**; speaker Czerka Protocol Officer (`SW_CzerkaMineHead`). locations: `Dantooine, Czerka Mining Office`. conditions: Journal `SW_RakHost` Equal 5; Dead/DeadType `SW_RakhoulDantBoss` GreaterEqual 1. response: “That's the best news I've had all week. Here, your credits. Is there anything else I can do for you, Mercenary?”.

```text
Journal SW_RakHost 10
player->additem "gold_001", 400
```

### Related records and locations

**Dialogue speakers:**
- Czerka Protocol Officer (`SW_CzerkaMineHead`) — `Dantooine, Czerka Mining Office`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Dantooine, Czerka Mining Office`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: The Czerka Mining Office on Dantooine would like me to find a host rakghoul they believe was the first infecte…
- [ ] Reach index `10` (`Finished`): The Czerka Mining Office has paid me in 400 credits for destroying the rakghoul creature inside of the Terenth…
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_RakHost`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
