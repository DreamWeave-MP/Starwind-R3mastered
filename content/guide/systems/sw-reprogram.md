---
title: "Reprogram (internal journal)"
description: "Walkthrough and QA reference for Reprogram (internal journal) (SW_Reprogram)."
weight: 12
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_Reprogram"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_Reprogram` |
| **Category** | Systems & Internal Journals |
| **Journal entries** | 2 |
| **Completion branches** | 2 |
| **Starts by** | Speak with **Malfunctioning Droid** in **Imperial Prison Ship** and ask about **Reprogram**. |
| **Key locations** | Imperial Prison Ship, The Outer Rim, Endar Spire |
| **Key characters** | Malfunctioning Droid |

## Walkthrough

### 1. Speak with Malfunctioning Droid in Imperial Prison Ship and ask about Reprogram — Finished

Speak with **Malfunctioning Droid** in **Imperial Prison Ship** and ask about **Reprogram**.

> **Expected journal update — index 5:** I have reprogrammed the droid on the Endar Spire.

**Outcome:** this journal entry is marked as a finished branch.

### 2. Speak with Malfunctioning Droid in Imperial Prison Ship and ask about Scrap — Finished

Speak with **Malfunctioning Droid** in **Imperial Prison Ship** and ask about **Scrap**.

> **Expected journal update — index 10:** I have scrapped the droid on the Endar Spire.

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has **2 explicit finished entries**. Treat them as branch coverage targets during playtesting:

- **Index 5:** I have reprogrammed the droid on the Endar Spire.
- **Index 10:** I have scrapped the droid on the Endar Spire.

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Malfunctioning Droid** (`SW_FlyingDroidCharGenNe`) — `Imperial Prison Ship`, `The Outer Rim, Endar Spire`

**Locations implicated by actor/object placement or explicit travel:**
- **Imperial Prison Ship**
- **The Outer Rim, Endar Spire**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_Reprogram`
**Generated category:** Systems & Internal Journals
**Journal entries:** 2

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | Finished | I have reprogrammed the droid on the Endar Spire. | 1 |
| 10 | Finished | I have scrapped the droid on the Endar Spire. | 1 |

### Record-level trigger map

### Stage 5 — Finished

I have reprogrammed the droid on the Endar Spire.

**How this stage is set:**
- Dialogue INFO `2446313985264708376` under topic **Reprogram**; speaker Malfunctioning Droid (`SW_FlyingDroidCharGenNe`). locations: `Imperial Prison Ship`, `The Outer Rim, Endar Spire`. conditions: Journal `SW_Reprogram` NotEqual 5. response: “You reprogram the droid and it hovers towards the local hostiles.”.

```text
AIFollow Player 0, 0, 0, 0
Playsound "RobotHostiles"
Journal SW_Reprogram 5
"SW_CharGenSithFighterPS"->StartCombat "SW_CharGenRepFighter4"
"SW_CharGenSithFighterP2"->StartCombat "SW_CharGenRepFighter4"
```

### Stage 10 — Finished

I have scrapped the droid on the Endar Spire.

**How this stage is set:**
- Dialogue INFO `7526194062729029434` under topic **Scrap**; speaker Malfunctioning Droid (`SW_FlyingDroidCharGenNe`). locations: `Imperial Prison Ship`, `The Outer Rim, Endar Spire`. conditions: Journal `SW_Reprogram` NotEqual 5. response: “You scrap the droid and get a few spare parts out of it.”.

```text
sethealth 0
Playsound "fabBossLeft"
Journal SW_Reprogram 10
"SW_CharGenSithFighterPS"->StartCombat "SW_CharGenRepFighter4"
"SW_CharGenSithFighterP2"->StartCombat "SW_CharGenRepFighter4"
```

### Related records and locations

**Dialogue speakers:**
- Malfunctioning Droid (`SW_FlyingDroidCharGenNe`) — `Imperial Prison Ship`, `The Outer Rim, Endar Spire`

**Cells implicated by actor/object placement or explicit travel code:**
- `Imperial Prison Ship`
- `The Outer Rim, Endar Spire`

<details><summary>Other directly addressed object IDs in related code</summary>

- Republic Soldier (`SW_CharGenRepFighter4`)
- Sith Trooper (`SW_CharGenSithFighterP2`)
- Sith Trooper (`SW_CharGenSithFighterPS`)

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5` (`Finished`): I have reprogrammed the droid on the Endar Spire.
- [ ] Reach index `10` (`Finished`): I have scrapped the droid on the Endar Spire.
- [ ] Branch coverage: this journal has **2 different `Finished` entries**; test each reachable completion branch.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_Reprogram`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
