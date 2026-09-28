---
title: "One Man's Junk"
description: "Walkthrough and QA reference for One Man's Junk (SW_JunkJourn)."
weight: 58
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_JunkJourn"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_JunkJourn` |
| **Category** | Side Quests |
| **Journal entries** | 3 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Jawa** in **Nar Shaddaa, Lower City**. |
| **Key locations** | Nar Shaddaa, Lower City |
| **Key characters** | Jawa |

## Walkthrough

### 1. Speak with Jawa in Nar Shaddaa, Lower City

Speak with **Jawa** in **Nar Shaddaa, Lower City**.

> **Expected journal update — index 5:** I met a Jawa in the Lower City of Nar Shaddaa in a junkyard who tells me there is a chest here that can be open by 10 keys found in the mass of this junkyard.

### 2. Interact with Chest in Nar Shaddaa, Lower City — Finished

Interact with **Chest** in **Nar Shaddaa, Lower City**.

> **Expected journal update — index 10:** I have opened the chest and am ready to reap my reward.

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 10**:

> I have opened the chest and am ready to reap my reward.

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Jawa** (`SW_JunkyardJawa`) — `Nar Shaddaa, Lower City`

**Locations implicated by actor/object placement or explicit travel:**
- **Nar Shaddaa, Lower City**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_JunkJourn`
**Generated category:** Side Quests
**Journal entries:** 3

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | I met a Jawa in the Lower City of Nar Shaddaa in a junkyard who tells me there is a chest here that can be open by 10 keys found in the mass of this junkyard. | 1 |
| 10 | Finished | I have opened the chest and am ready to reap my reward. | 1 |

### Record-level trigger map

### Stage 5

I met a Jawa in the Lower City of Nar Shaddaa in a junkyard who tells me there is a chest here that can be open by 10 keys found in the mass of this junkyard.

**How this stage is set:**
- Dialogue INFO `1232321250252494590` under topic **Greeting 7**; speaker Jawa (`SW_JunkyardJawa`). locations: `Nar Shaddaa, Lower City`. conditions: Journal `SW_JunkJourn` Equal 0. response: “This chest requires 10 keys to open, I've been looking for them in here for ages.”.

```text
PlaySound3d "SW_TtokkGreet"
Journal SW_JunkJourn 5
```

### Stage 10 — Finished

I have opened the chest and am ready to reap my reward.

**How this stage is set:**
- Script `SW_JunkyardReward`. attached to Container Chest (`SW_ChestJunkyard`); placed in `Nar Shaddaa, Lower City`.

```text
Activate
        player->removeitem, "SW_JunkyardKey", 10
        Journal SW_JunkJourn 10
    else
        MessageBox "This chest looks like it requires ten keys."
```

### Related records and locations

**Dialogue speakers:**
- Jawa (`SW_JunkyardJawa`) — `Nar Shaddaa, Lower City`

**Scripts that read or write this journal:**
- `SW_JunkyardReward` — Container Chest (`SW_ChestJunkyard`); placed in `Nar Shaddaa, Lower City`

**Items referenced by related script/result code:**
- Junkyard Key (`SW_JunkyardKey`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Nar Shaddaa, Lower City`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: I met a Jawa in the Lower City of Nar Shaddaa in a junkyard who tells me there is a chest here that can be ope…
- [ ] Reach index `10` (`Finished`): I have opened the chest and am ready to reap my reward.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_JunkJourn`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
