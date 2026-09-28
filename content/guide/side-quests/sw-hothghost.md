---
title: "The Frozen Ghost"
description: "Walkthrough and QA reference for The Frozen Ghost (SW_HothGhost)."
weight: 90
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_HothGhost"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_HothGhost` |
| **Category** | Side Quests |
| **Journal entries** | 4 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Jha'vere** in **Hoth, Wasteland** and ask about **help**. |
| **Key locations** | Hoth, Wampa Cave, Hoth, Wasteland |
| **Key characters** | Jha'vere |

## Walkthrough

### 1. Speak with Jha'vere in Hoth, Wasteland and ask about help

Speak with **Jha'vere** in **Hoth, Wasteland** and ask about **help**.

> **Expected journal update — index 5:** I landed on Hoth and met a jedi living in an ice hut. He's investigating a cave here where there is a strong connection to the dark side of the force. He would like me to help with the investigation as the wampas have been giving him more trouble than he first imagined.

### 2. Reach Hoth, Wampa Cave and allow the scripted event to complete

Reach **Hoth, Wampa Cave** and allow the scripted event to complete.

> **Expected journal update — index 10:** I've angered a force ghost after investigating the cave and have rid this planet of him, I should return to the jedi and inform him of what's happened.

### 3. Speak with Jha'vere in Hoth, Wasteland and ask about help — Finished

Speak with **Jha'vere** in **Hoth, Wasteland** and ask about **help**.

> **Expected journal update — index 15:** The connection this cave once had to the dark side of the force is gone, and although the jedi had nothing in return to give me, he did find a wampa he befriended who I bonded with almost immediately.

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 15**:

> The connection this cave once had to the dark side of the force is gone, and although the jedi had nothing in return to give me, he did find a wampa he befriended who I bonded with almost immediately.

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Jha'vere** (`SW_JediHoth`) — `Hoth, Wasteland`

**Locations implicated by actor/object placement or explicit travel:**
- **Hoth, Wampa Cave**
- **Hoth, Wasteland**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_HothGhost`
**Generated category:** Side Quests
**Journal entries:** 4

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | I landed on Hoth and met a jedi living in an ice hut. He's investigating a cave here where there is a strong connection to the dark side of the force. He would like me to help with the investigation as the wampas have been giving him more trouble than he first imagined. | 1 |
| 10 | — | I've angered a force ghost after investigating the cave and have rid this planet of him, I should return to the jedi and inform him of what's happened. | 1 |
| 15 | Finished | The connection this cave once had to the dark side of the force is gone, and although the jedi had nothing in return to give me, he did find a wampa he befriended who I bonded with almost immediately. | 1 |

### Record-level trigger map

### Stage 5

I landed on Hoth and met a jedi living in an ice hut. He's investigating a cave here where there is a strong connection to the dark side of the force. He would like me to help with the investigation as the wampas have been giving him more trouble than he first imagined.

**How this stage is set:**
- Dialogue INFO `31077904224928216` under topic **help**; speaker Jha'vere (`SW_JediHoth`). locations: `Hoth, Wasteland`. conditions: Journal `SW_HothGhost` Equal 0. response: “I came to this planet to investigate a corrupt site that holds a strong connection to the Force. A cave nearby that is inhabited by a large number of wampas. The wampas have kept me from getting far enough into the cave to investigate, if you can, I would very much like your help.”.

```text
Journal SW_HothGhost 5
```

### Stage 10

I've angered a force ghost after investigating the cave and have rid this planet of him, I should return to the jedi and inform him of what's happened.

**How this stage is set:**
- Script `SW_HothCountScript`. attached to Activator HothCounter (`SW_HothScriptAct`); placed in `Hoth, Wampa Cave`.

```text
If ( GetDeadCount, "SW_HothGhost" >= 1 )
    If ( DoTwice == 0 )
        Journal SW_HothGhost 10
        SW_HothGhost->Disable
        PlaySound "ancestor ghost scream"
```

### Stage 15 — Finished

The connection this cave once had to the dark side of the force is gone, and although the jedi had nothing in return to give me, he did find a wampa he befriended who I bonded with almost immediately.

**How this stage is set:**
- Dialogue INFO `1974813324616410871` under topic **help**; speaker Jha'vere (`SW_JediHoth`). locations: `Hoth, Wasteland`. conditions: Journal `SW_HothGhost` Equal 10. response: “A force ghost? That explains the connection, this place is now purged of its corruption thanks to you, I met a friend while you were gone, maybe he can assist you on your travels here.”.

```text
Journal SW_HothGhost 15
SW_WampaFollow->Enable
SW_WampaFollow->AIFollow Player 0, 0, 0, 0
```

### Related records and locations

**Dialogue speakers:**
- Jha'vere (`SW_JediHoth`) — `Hoth, Wasteland`

**Scripts that read or write this journal:**
- `SW_HothCountScript` — Activator HothCounter (`SW_HothScriptAct`); placed in `Hoth, Wampa Cave`
- `SW_HothLoot1` — Npc Dead Adventurer (`SW_HothDead1`); placed in `Hoth, Wampa Cave`
- `SW_HothLoot2` — Npc Mandalorian Hunter (`SW_HothDead2`); placed in `Hoth, Wampa Cave`
- `SW_HothLoot3` — Npc Dead Soldier (`SW_SW_HothDead3b`); placed in `Hoth, Wampa Cave`
- `SW_HothLoot4` — Npc Sith Acolyte (`SW_HothDead4`); placed in `Hoth, Wampa Cave`

**Cells implicated by actor/object placement or explicit travel code:**
- `Hoth, Wampa Cave`
- `Hoth, Wasteland`

<details><summary>Journal-state readers (4 code sites)</summary>

- Script `SW_HothLoot1`. attached to Npc Dead Adventurer (`SW_HothDead1`); placed in `Hoth, Wampa Cave`.
- Script `SW_HothLoot2`. attached to Npc Mandalorian Hunter (`SW_HothDead2`); placed in `Hoth, Wampa Cave`.
- Script `SW_HothLoot3`. attached to Npc Dead Soldier (`SW_SW_HothDead3b`); placed in `Hoth, Wampa Cave`.
- Script `SW_HothLoot4`. attached to Npc Sith Acolyte (`SW_HothDead4`); placed in `Hoth, Wampa Cave`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: I landed on Hoth and met a jedi living in an ice hut. He's investigating a cave here where there is a strong c…
- [ ] Reach index `10`: I've angered a force ghost after investigating the cave and have rid this planet of him, I should return to th…
- [ ] Reach index `15` (`Finished`): The connection this cave once had to the dark side of the force is gone, and although the jedi had nothing in …
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_HothGhost`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
