---
title: "A Helpless Father"
description: "Walkthrough and QA reference for A Helpless Father (SW_NarBeggarJourn)."
weight: 3
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_NarBeggarJourn"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_NarBeggarJourn` |
| **Category** | Side Quests |
| **Journal entries** | 5 |
| **Completion branches** | 2 |
| **Starts by** | Speak with **Saf Lingar** in **Nar Shaddaa, 485 Olivier Alley** and ask about **humiliate**. |
| **Key locations** | Nar Shaddaa, 485 Olivier Alley |
| **Key characters** | Saf Lingar |

## Walkthrough

### 1. Speak with Saf Lingar in Nar Shaddaa, 485 Olivier Alley and ask about humiliate

Speak with **Saf Lingar** in **Nar Shaddaa, 485 Olivier Alley** and ask about **humiliate**.

> **Expected journal update — index 5:** I went into 485 Olivier Alley where a father had just sent his family to Manaan to visit a family friend. He says they've been robbedand have lost everything, and can't make it to his family, buy food, or do anything and has asked if I can spare any credits.

### 2. Reach journal stage 10

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 10:** I have given the unlucky man 10 credits, he said that this will help him survive just a little longer.

### 3. Speak with Saf Lingar in Nar Shaddaa, 485 Olivier Alley and ask about humiliate — Finished

Speak with **Saf Lingar** in **Nar Shaddaa, 485 Olivier Alley** and ask about **humiliate**.

> **Expected journal update — index 15:** I have given the man 50 credits, and he is setting off to go to his family, he gave me his vibroblade in return.

**Known item transfer:** 1 × **Saf's Vibroblade** (`SW_VibrobladeBeggar`).

**Outcome:** this journal entry is marked as a finished branch.

### 4. Speak with Saf Lingar in Nar Shaddaa, 485 Olivier Alley and ask about humiliate — Finished

Speak with **Saf Lingar** in **Nar Shaddaa, 485 Olivier Alley** and ask about **humiliate**.

> **Expected journal update — index 20:** I have given the man 100 credits and he is setting off to his family. He has given me his vibroblade in return, but I feel a growth in my own character for this.

**Known item transfer:** 1 × **Saf's Vibroblade** (`SW_VibrobladeBeggar`).

**Outcome:** this journal entry is marked as a finished branch.

> **Playtest flag:** 1 journal stage on this page lack a literal setter in the current static scan.

## Endings & branches

The journal has **2 explicit finished entries**. Treat them as branch coverage targets during playtesting:

- **Index 15:** I have given the man 50 credits, and he is setting off to go to his family, he gave me his vibroblade in return.
- **Index 20:** I have given the man 100 credits and he is setting off to his family. He has given me his vibroblade in return, but I feel a growth in my own character for this.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 1 × **Saf's Vibroblade** (`SW_VibrobladeBeggar`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Saf Lingar** (`SW_NarBeggar`) — `Nar Shaddaa, 485 Olivier Alley`

**Locations implicated by actor/object placement or explicit travel:**
- **Nar Shaddaa, 485 Olivier Alley**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_NarBeggarJourn`
**Generated category:** Side Quests
**Journal entries:** 5

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | I went into 485 Olivier Alley where a father had just sent his family to Manaan to visit a family friend. He says they've been robbedand have lost everything, and can't make it to his family, buy food, or do anything and has asked if I can spare any credits. | 1 |
| 10 | — | I have given the unlucky man 10 credits, he said that this will help him survive just a little longer. | 0 |
| 15 | Finished | I have given the man 50 credits, and he is setting off to go to his family, he gave me his vibroblade in return. | 1 |
| 20 | Finished | I have given the man 100 credits and he is setting off to his family. He has given me his vibroblade in return, but I feel a growth in my own character for this. | 1 |

### Record-level trigger map

### Stage 5

I went into 485 Olivier Alley where a father had just sent his family to Manaan to visit a family friend. He says they've been robbedand have lost everything, and can't make it to his family, buy food, or do anything and has asked if I can spare any credits.

**How this stage is set:**
- Dialogue INFO `1281920566469910180` under topic **humiliate**; speaker Saf Lingar (`SW_NarBeggar`). locations: `Nar Shaddaa, 485 Olivier Alley`. conditions: Journal `SW_NarBeggarJourn` Equal 0. response: “I've been robbed, and I've lost everything. I've even had to send my family to Manaan to visit a family friend. I have no money for food, for transportation, so I lost my job, no money for anything. You don't happen to have any credits you can spare, do you?”.

```text
Journal SW_NarBeggarJourn 5
Choice "Yeah I can spare 10 credits." 1 "Here, take 50 credits and go to your family." 2 "Nar Shaddaa is a rough place, if I give you 100 credits can you recover?" 3 "No, I can't spare any credits." 4
```

### Stage 10

I have given the unlucky man 10 credits, he said that this will help him survive just a little longer.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 15 — Finished

I have given the man 50 credits, and he is setting off to go to his family, he gave me his vibroblade in return.

**How this stage is set:**
- Dialogue INFO `16042198252010924024` under topic **humiliate**; speaker Saf Lingar (`SW_NarBeggar`). locations: `Nar Shaddaa, 485 Olivier Alley`. conditions: Function/Choice Equal 2; Item/ItemType `Gold_001` GreaterEqual 50. response: “With 50 credits I can get some food and head to Manaan to my family. I'll figure it out from there. Take my vibroblade, it's all I have left. You're a true saint, stranger.”.

```text
Journal SW_NarBeggarJourn 15
player->removeitem, gold_001, 50
player->additem, SW_VibrobladeBeggar, 1
```

### Stage 20 — Finished

I have given the man 100 credits and he is setting off to his family. He has given me his vibroblade in return, but I feel a growth in my own character for this.

**How this stage is set:**
- Dialogue INFO `16840123931120112321` under topic **humiliate**; speaker Saf Lingar (`SW_NarBeggar`). locations: `Nar Shaddaa, 485 Olivier Alley`. conditions: Function/Choice Equal 3; Item/ItemType `Gold_001` GreaterEqual 100. response: “100 credits? I can probably bounce back once on Manaan with that, and keep my family off of this horrible planet! Thank you so much, here, take my vibroblade, it's all I have left.
 [You're Personality has increased]”.

```text
Journal SW_NarBeggarJourn 20
player->removeitem, gold_001, 100
player->additem, SW_VibrobladeBeggar, 1
```

### Related records and locations

**Dialogue speakers:**
- Saf Lingar (`SW_NarBeggar`) — `Nar Shaddaa, 485 Olivier Alley`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)
- Saf's Vibroblade (`SW_VibrobladeBeggar`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Nar Shaddaa, 485 Olivier Alley`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: I went into 485 Olivier Alley where a father had just sent his family to Manaan to visit a family friend. He s…
- [ ] Reach index `10`: I have given the unlucky man 10 credits, he said that this will help him survive just a little longer.
- [ ] Reach index `15` (`Finished`): I have given the man 50 credits, and he is setting off to go to his family, he gave me his vibroblade in retur…
- [ ] Reach index `20` (`Finished`): I have given the man 100 credits and he is setting off to his family. He has given me his vibroblade in return…
- [ ] Branch coverage: this journal has **2 different `Finished` entries**; test each reachable completion branch.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_NarBeggarJourn`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
