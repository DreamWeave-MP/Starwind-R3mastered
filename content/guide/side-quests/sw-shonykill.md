---
title: "Killing a Titan"
description: "Walkthrough and QA reference for Killing a Titan (SW_ShonyKill)."
weight: 47
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_ShonyKill"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_ShonyKill` |
| **Category** | Side Quests |
| **Journal entries** | 4 |
| **Completion branches** | No explicit Finished marker |
| **Starts by** | Speak with **Gill Bates** in **Nar Shaddaa, Eddie's Den**. |
| **Observed prerequisite journals** | `SW_BatesJourn` |
| **Key locations** | Nar Shaddaa, Eddie's Den, Nar Shaddaa, Shony Factory |
| **Key characters** | Gill Bates |

## Walkthrough

### 1. Speak with Gill Bates in Nar Shaddaa, Eddie's Den

Speak with **Gill Bates** in **Nar Shaddaa, Eddie's Den**.

> **Expected journal update — index 5:** Gill Bates wants me to kill Danae Shony, owner of the Shony Corporation. He gave me what looks like the access key to her office in their factory.

**Known item transfer:** 1 × **Access Key** (`SW_ShonyAccess`).

### 2. Find Danae Shony in Nar Shaddaa, Shony Factory and complete the encounter

Find **Danae Shony** in **Nar Shaddaa, Shony Factory** and complete the encounter.

> **Expected journal update — index 10:** Danae Shony is dead, I should return to Gill Bates.

### 3. Reach journal stage 15

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 15:** Gill Bates has paid me 500 credits for assassinating Shony, he told me not to speak to him again.

{% callout(kind="warning", title="Playtest flag") %}
1 journal stage on this page lack a literal setter in the current static scan.
{% end %}

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 1 × **Access Key** (`SW_ShonyAccess`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Gill Bates** (`SW_Gates`) — `Nar Shaddaa, Eddie's Den`

**Locations implicated by actor/object placement or explicit travel:**
- **Nar Shaddaa, Eddie's Den**
- **Nar Shaddaa, Shony Factory**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_ShonyKill`
**Generated category:** Side Quests
**Journal entries:** 4

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | Gill Bates wants me to kill Danae Shony, owner of the Shony Corporation. He gave me what looks like the access key to her office in their factory. | 1 |
| 10 | — | Danae Shony is dead, I should return to Gill Bates. | 1 |
| 15 | — | Gill Bates has paid me 500 credits for assassinating Shony, he told me not to speak to him again. | 0 |

### Record-level trigger map

### Stage 5

Gill Bates wants me to kill Danae Shony, owner of the Shony Corporation. He gave me what looks like the access key to her office in their factory.

**How this stage is set:**
- Dialogue INFO `20141240511198914200` under topic **Greeting 7**; speaker Gill Bates (`SW_Gates`). locations: `Nar Shaddaa, Eddie's Den`. conditions: Journal `SW_BatesJourn` Equal 15; Journal `SW_ShonyKill` Equal 0. response: “I know my prototype was stolen, and I know you're the one that found it. I have another job if you're interested. There's a certain someone upstairs in the Shony Factory that quite frankly I'm tired of dealing with. I need someone to deal with this problem for me. Whoops, looks like I dropped something.”.

```text
Journal SW_ShonyKill 5
player->additem, "SW_ShonyAccess", 1
goodbye
```

### Stage 10

Danae Shony is dead, I should return to Gill Bates.

**How this stage is set:**
- Script `SW_ShonysDead`. attached to Npc Danae Shony (`SW_Shony`); placed in `Nar Shaddaa, Shony Factory`.

```text
If ( GetDeadCount "SW_Shony" >= 1 )
    Journal SW_ShonyKill 10
endif
```

### Stage 15

Gill Bates has paid me 500 credits for assassinating Shony, he told me not to speak to him again.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Related records and locations

**Dialogue speakers:**
- Gill Bates (`SW_Gates`) — `Nar Shaddaa, Eddie's Den`

**Scripts that read or write this journal:**
- `SW_ShonysDead` — Npc Danae Shony (`SW_Shony`); placed in `Nar Shaddaa, Shony Factory`

**Items referenced by related script/result code:**
- Access Key (`SW_ShonyAccess`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Nar Shaddaa, Eddie's Den`
- `Nar Shaddaa, Shony Factory`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: Gill Bates wants me to kill Danae Shony, owner of the Shony Corporation. He gave me what looks like the access…
- [ ] Reach index `10`: Danae Shony is dead, I should return to Gill Bates.
- [ ] Reach index `15`: Gill Bates has paid me 500 credits for assassinating Shony, he told me not to speak to him again.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_ShonyKill`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
