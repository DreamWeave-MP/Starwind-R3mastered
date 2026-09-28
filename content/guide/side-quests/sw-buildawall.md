---
title: "Building a Wall"
description: "Walkthrough and QA reference for Building a Wall (SW_BuildAWall)."
weight: 19
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_BuildAWall"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_BuildAWall` |
| **Category** | Side Quests |
| **Journal entries** | 6 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Dexter Kurp** in **Dantooine, Dantari Wilds** and ask about **engineer**. |
| **Key locations** | Dantooine, Dantari Wilds |
| **Key characters** | Dexter Kurp |

## Walkthrough

### 1. Speak with Dexter Kurp in Dantooine, Dantari Wilds and ask about engineer

Speak with **Dexter Kurp** in **Dantooine, Dantari Wilds** and ask about **engineer**.

> **Expected journal update — index 5:** I have met a Czerka Employee named Dexter Kurp at a mining facility in the Dantari Wildlands that has need of an engineer to assist in finishing the construction of a wall around the complex.

### 2. Speak with Dexter Kurp in Dantooine, Dantari Wilds and ask about engineer

Speak with **Dexter Kurp** in **Dantooine, Dantari Wilds** and ask about **engineer**.

> **Expected journal update — index 7:** I have told Dexter that I do not have time to construct a wall right now, if I have the engineering skill and happen to be in the area I could finish the construction for a reward.

### 3. Speak with Dexter Kurp in Dantooine, Dantari Wilds and ask about engineer

Speak with **Dexter Kurp** in **Dantooine, Dantari Wilds** and ask about **engineer**.

> **Expected journal update — index 10:** I have told Dexter that I will complete the construction of the wall around the mining complex, I am told I will be paid well for this service.

### 4. Reach Dantooine, Dantari Wilds and allow the scripted event to complete

Reach **Dantooine, Dantari Wilds** and allow the scripted event to complete.

> **Expected journal update — index 15:** The wall at the Czerka mining facility within the Dantari Wildlands is now finished and I should speak to Dexter Kurp to claim my payment.

### 5. Speak with Dexter Kurp in Dantooine, Dantari Wilds — Finished

Speak with **Dexter Kurp** in **Dantooine, Dantari Wilds**.

> **Expected journal update — index 20:** Dexter Kurp has paid me 500 credits for finishing the construction of the wall around their mining complex.

**Known item transfer:** 500 × **Credits** (`gold_001`).

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 20**:

> Dexter Kurp has paid me 500 credits for finishing the construction of the wall around their mining complex.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 500 × **Credits** (`gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Dexter Kurp** (`SW_CzerkaBuildingWall`) — `Dantooine, Dantari Wilds`

**Locations implicated by actor/object placement or explicit travel:**
- **Dantooine, Dantari Wilds**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_BuildAWall`
**Generated category:** Side Quests
**Journal entries:** 6

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | I have met a Czerka Employee named Dexter Kurp at a mining facility in the Dantari Wildlands that has need of an engineer to assist in finishing the construction of a wall around the complex. | 2 |
| 7 | — | I have told Dexter that I do not have time to construct a wall right now, if I have the engineering skill and happen to be in the area I could finish the construction for a reward. | 1 |
| 10 | — | I have told Dexter that I will complete the construction of the wall around the mining complex, I am told I will be paid well for this service. | 1 |
| 15 | — | The wall at the Czerka mining facility within the Dantari Wildlands is now finished and I should speak to Dexter Kurp to claim my payment. | 1 |
| 20 | Finished | Dexter Kurp has paid me 500 credits for finishing the construction of the wall around their mining complex. | 1 |

### Record-level trigger map

### Stage 5

I have met a Czerka Employee named Dexter Kurp at a mining facility in the Dantari Wildlands that has need of an engineer to assist in finishing the construction of a wall around the complex.

**How this stage is set:**
- Dialogue INFO `23870189502144411768` under topic **engineer**; speaker Dexter Kurp (`SW_CzerkaBuildingWall`). locations: `Dantooine, Dantari Wilds`. conditions: Journal `SW_BuildAWall` LessEqual 5; Function/PcConjuration GreaterEqual 60. response: “Yes our engineer recently was called off planet to head to Dromund Kaas for some big project and now we're left with this half constructed wall and all the materials to build it. But nobody here has the skills. You wouldn't happen to be an engineer, would you?”.

```text
Journal SW_BuildAWall 5
Choice "As a matter of fact I am, I can do this job no problem." 1 "I don't have time to construct an entire wall right now!" 2
```
- Dialogue INFO `441157992724730488` under topic **engineer**; speaker Dexter Kurp (`SW_CzerkaBuildingWall`). locations: `Dantooine, Dantari Wilds`. conditions: Journal `SW_BuildAWall` Equal 0; Function/PcConjuration Less 60. response: “Yes our engineer recently was called off planet to head to Dromund Kaas for some big project and now we're left with this half constructed wall and all the materials to build it. But nobody here has the skills. You don't look like much of an engineer.
 [Must have an engineering skill of 60 in order to do this quest]”.

```text
Journal SW_BuildAWall 5
```

### Stage 7

I have told Dexter that I do not have time to construct a wall right now, if I have the engineering skill and happen to be in the area I could finish the construction for a reward.

**How this stage is set:**
- Dialogue INFO `31998258891250931439` under topic **engineer**; speaker Dexter Kurp (`SW_CzerkaBuildingWall`). locations: `Dantooine, Dantari Wilds`. conditions: Function/Choice Equal 2. response: “I understand, this is no easy task. If you change your mind, you can always come back here and get to work, you will be paid handsomely.”.

```text
Journal SW_BuildAWall 7
```

### Stage 10

I have told Dexter that I will complete the construction of the wall around the mining complex, I am told I will be paid well for this service.

**How this stage is set:**
- Dialogue INFO `154953342833212189` under topic **engineer**; speaker Dexter Kurp (`SW_CzerkaBuildingWall`). locations: `Dantooine, Dantari Wilds`. conditions: Function/Choice Equal 1. response: “This is great news, I can't believe they didn't let him finish construction before he left. All of the material is here, just go ahead and work on it when you can, you will be paid appropriately. Thank you.”.

```text
Journal SW_BuildAWall 10
```

### Stage 15

The wall at the Czerka mining facility within the Dantari Wildlands is now finished and I should speak to Dexter Kurp to claim my payment.

**How this stage is set:**
- Script `SW_BuildWallDant2`. attached to Activator Wall Construction (`SW_DantooineWallBuild2`); placed in `Dantooine, Dantari Wilds`.

```text
PlaySound "SothaSpark"
            SW_DantooineWallBuild2->Disable
            Journal SW_BuildAWall 15
        Endif
    Endif
```

### Stage 20 — Finished

Dexter Kurp has paid me 500 credits for finishing the construction of the wall around their mining complex.

**How this stage is set:**
- Dialogue INFO `13453725039841960` under topic **Greeting 7**; speaker Dexter Kurp (`SW_CzerkaBuildingWall`). locations: `Dantooine, Dantari Wilds`. conditions: Journal `SW_BuildAWall` Equal 15. response: “Now that is a fine job right there, I don't think our engineer could have done any better, here take these credits you've earned them.”.

```text
Journal SW_BuildAWall 20
player->additem, gold_001, 500
```

### Related records and locations

**Dialogue speakers:**
- Dexter Kurp (`SW_CzerkaBuildingWall`) — `Dantooine, Dantari Wilds`

**Scripts that read or write this journal:**
- `SW_BuildWallDant` — Activator Wall Construction (`SW_DantooineWallBuild`); placed in `Dantooine, Dantari Wilds`
- `SW_BuildWallDant2` — Activator Wall Construction (`SW_DantooineWallBuild2`); placed in `Dantooine, Dantari Wilds`
- `SW_BuiltWallDant` — Activator `SW_DantooineWallBuildFinished`; placed in `Dantooine, Dantari Wilds`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Dantooine, Dantari Wilds`

<details><summary>Journal-state readers (3 code sites)</summary>

- Script `SW_BuildWallDant`. attached to Activator Wall Construction (`SW_DantooineWallBuild`); placed in `Dantooine, Dantari Wilds`.
- Script `SW_BuildWallDant2`. attached to Activator Wall Construction (`SW_DantooineWallBuild2`); placed in `Dantooine, Dantari Wilds`.
- Script `SW_BuiltWallDant`. attached to Activator `SW_DantooineWallBuildFinished`; placed in `Dantooine, Dantari Wilds`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: I have met a Czerka Employee named Dexter Kurp at a mining facility in the Dantari Wildlands that has need of …
- [ ] Reach index `7`: I have told Dexter that I do not have time to construct a wall right now, if I have the engineering skill and …
- [ ] Reach index `10`: I have told Dexter that I will complete the construction of the wall around the mining complex, I am told I wi…
- [ ] Reach index `15`: The wall at the Czerka mining facility within the Dantari Wildlands is now finished and I should speak to Dext…
- [ ] Reach index `20` (`Finished`): Dexter Kurp has paid me 500 credits for finishing the construction of the wall around their mining complex.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_BuildAWall`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
