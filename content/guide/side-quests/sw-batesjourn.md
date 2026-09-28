---
title: "Thievery in the Elite"
description: "Walkthrough and QA reference for Thievery in the Elite (SW_BatesJourn)."
weight: 107
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_BatesJourn"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_BatesJourn` |
| **Category** | Side Quests |
| **Journal entries** | 4 |
| **Completion branches** | No explicit Finished marker |
| **Starts by** | Speak with **Endoran** in **Nar Shaddaa, Bate's Corp**. |
| **Key locations** | Nar Shaddaa, Bate's Corp, Nar Shaddaa, Shony Factory |
| **Key characters** | Endoran |

## Walkthrough

### 1. Speak with Endoran in Nar Shaddaa, Bate's Corp

Speak with **Endoran** in **Nar Shaddaa, Bate's Corp**.

> **Expected journal update — index 5:** The operating manager, Endoran, at the Bate's Corporation office has tasked me with finding a hyperdrive prototype stolen by the Shony Corporation. Their factory is in the Southwest portion of the lower city.

### 2. Reach Nar Shaddaa, Shony Factory and allow the scripted event to complete

Reach **Nar Shaddaa, Shony Factory** and allow the scripted event to complete.

> **Expected journal update — index 10:** I have found the hyperdrive prototype in the Shony factory, I should return this to the Bate's Corporation.

### 3. Speak with Endoran in Nar Shaddaa, Bate's Corp and ask about prototype

Speak with **Endoran** in **Nar Shaddaa, Bate's Corp** and ask about **prototype**.

> **Expected journal update — index 15:** After returning the prototype to Endoran I was awarded with 400 credits.

**Known item transfer:** 400 × **Credits** (`Gold_001`).

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 400 × **Credits** (`Gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Endoran** (`SW_GatesAgentOM`) — `Nar Shaddaa, Bate's Corp`

**Locations implicated by actor/object placement or explicit travel:**
- **Nar Shaddaa, Bate's Corp**
- **Nar Shaddaa, Shony Factory**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_BatesJourn`
**Generated category:** Side Quests
**Journal entries:** 4

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | The operating manager, Endoran, at the Bate's Corporation office has tasked me with finding a hyperdrive prototype stolen by the Shony Corporation. Their factory is in the Southwest portion of the lower city. | 1 |
| 10 | — | I have found the hyperdrive prototype in the Shony factory, I should return this to the Bate's Corporation. | 1 |
| 15 | — | After returning the prototype to Endoran I was awarded with 400 credits. | 2 |

### Record-level trigger map

### Stage 5

The operating manager, Endoran, at the Bate's Corporation office has tasked me with finding a hyperdrive prototype stolen by the Shony Corporation. Their factory is in the Southwest portion of the lower city.

**How this stage is set:**
- Dialogue INFO `1301386522355120171` under topic **Greeting 7**; speaker Endoran (`SW_GatesAgentOM`). locations: `Nar Shaddaa, Bate's Corp`. conditions: Journal `SW_BatesJourn` Equal 0; Function/Choice Equal 1. response: “So you have no customer service skills, have never worked in a corporate office, and you say you're a %PCClass? I think I have a better job for you. The Shony Corporation has stolen a hyperdrive prototype from us, their factory is in the Southwest side of the lower city, if you can get it from them come back and talk to me.”.

```text
Journal SW_BatesJourn 5
AddTopic "prototype"
```

### Stage 10

I have found the hyperdrive prototype in the Shony factory, I should return this to the Bate's Corporation.

**How this stage is set:**
- Script `SW_HyperActivate`. attached to MiscItem Hyperdrive Prototype (`SW_HyperModule`); placed in `Nar Shaddaa, Shony Factory`.

```text
If ( GetJournalIndex, "SW_BatesJourn" == 5 )
        activate
        Journal SW_BatesJourn 10
    else
        MessageBox "This object is humming."
```

### Stage 15

After returning the prototype to Endoran I was awarded with 400 credits.

**How this stage is set:**
- Dialogue INFO `4962589943354975` under topic **prototype**; speaker Endoran (`SW_GatesAgentOM`). locations: `Nar Shaddaa, Bate's Corp`. conditions: Journal `SW_BatesJourn` Equal 10; Item/ItemType `SW_HyperModule` GreaterEqual 1. response: “You found the prototype? If Bates would have found out we lost this he would've replaced everyone in this office, thank you. Here, for all your work.”.

```text
Journal SW_BatesJourn 15
player->removeitem, "SW_HyperModule", 1
player->additem, "Gold_001", 400
```
- Dialogue INFO `22434293652617520003` under topic **prototype**; speaker Endoran (`SW_GatesAgentOM`). locations: `Nar Shaddaa, Bate's Corp`. conditions: Journal `SW_BatesJourn` Equal 5; Item/ItemType `SW_HyperModule` GreaterEqual 1. response: “You found the prototype? If Bates would have found out we lost this he would've replaced everyone in this office, thank you. Here, for all your work.”.

```text
Journal SW_BatesJourn 15
player->removeitem, "SW_HyperModule", 1
player->additem, "Gold_001", 400
```

### Related records and locations

**Dialogue speakers:**
- Endoran (`SW_GatesAgentOM`) — `Nar Shaddaa, Bate's Corp`

**Scripts that read or write this journal:**
- `SW_HyperActivate` — MiscItem Hyperdrive Prototype (`SW_HyperModule`); placed in `Nar Shaddaa, Shony Factory`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)
- Hyperdrive Prototype (`SW_HyperModule`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Nar Shaddaa, Bate's Corp`
- `Nar Shaddaa, Shony Factory`

<details><summary>Journal-state readers (1 code sites)</summary>

- Script `SW_HyperActivate`. attached to MiscItem Hyperdrive Prototype (`SW_HyperModule`); placed in `Nar Shaddaa, Shony Factory`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: The operating manager, Endoran, at the Bate's Corporation office has tasked me with finding a hyperdrive proto…
- [ ] Reach index `10`: I have found the hyperdrive prototype in the Shony factory, I should return this to the Bate's Corporation.
- [ ] Reach index `15`: After returning the prototype to Endoran I was awarded with 400 credits.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_BatesJourn`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
