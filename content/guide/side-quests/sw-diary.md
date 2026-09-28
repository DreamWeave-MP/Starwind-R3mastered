---
title: "The Diary"
description: "Walkthrough and QA reference for The Diary (SW_Diary)."
weight: 86
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_Diary"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_Diary` |
| **Category** | Side Quests |
| **Journal entries** | 5 |
| **Completion branches** | No explicit Finished marker |
| **Starts by** | Speak with **Abby Odna** in **Nar Shaddaa, 135 Alley West** and ask about **slander**. |
| **Key locations** | Nar Shaddaa, 135 Alley West, Nar Shaddaa, 2448 Magari Alley |
| **Key characters** | Abby Odna |

## Walkthrough

### 1. Speak with Abby Odna in Nar Shaddaa, 135 Alley West and ask about slander

Speak with **Abby Odna** in **Nar Shaddaa, 135 Alley West** and ask about **slander**.

> **Expected journal update — index 5:** I met a woman named Abby Odna at 135 Alley West who says her datapad was stolen by another woman who is trying to slander her name, a spice addict who lives at 2248 Magari Alley. If I have time maybe I could stop by.

### 2. Activate Datapad Diary in Nar Shaddaa, 2448 Magari Alley

Activate **Datapad Diary** in **Nar Shaddaa, 2448 Magari Alley**.

> **Expected journal update — index 10:** The spice addicted thief attacked me when I entered her home; I found the datapad and should bring it back to Abby Odna.

### 3. Activate Datapad Diary in Nar Shaddaa, 2448 Magari Alley

Activate **Datapad Diary** in **Nar Shaddaa, 2448 Magari Alley**.

> **Expected journal update — index 12:** I found a datapad containing diary logs that, after reading some of it looks like it belongs to a Abby Odna who lives at 135 Alley West.

### 4. Speak with Abby Odna in Nar Shaddaa, 135 Alley West and ask about slander

Speak with **Abby Odna** in **Nar Shaddaa, 135 Alley West** and ask about **slander**.

> **Expected journal update — index 15:** Abby couldn't believe I had retrieved her datapad, she's given me 50 credits for helping her.

**Known item transfer:** 50 × **Credits** (`gold_001`).

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 50 × **Credits** (`gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Abby Odna** (`SW_NarDiaryProtag`) — `Nar Shaddaa, 135 Alley West`

**Locations implicated by actor/object placement or explicit travel:**
- **Nar Shaddaa, 135 Alley West**
- **Nar Shaddaa, 2448 Magari Alley**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_Diary`
**Generated category:** Side Quests
**Journal entries:** 5

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | I met a woman named Abby Odna at 135 Alley West who says her datapad was stolen by another woman who is trying to slander her name, a spice addict who lives at 2248 Magari Alley. If I have time maybe I could stop by. | 1 |
| 10 | — | The spice addicted thief attacked me when I entered her home; I found the datapad and should bring it back to Abby Odna. | 1 |
| 12 | — | I found a datapad containing diary logs that, after reading some of it looks like it belongs to a Abby Odna who lives at 135 Alley West. | 1 |
| 15 | — | Abby couldn't believe I had retrieved her datapad, she's given me 50 credits for helping her. | 1 |

### Record-level trigger map

### Stage 5

I met a woman named Abby Odna at 135 Alley West who says her datapad was stolen by another woman who is trying to slander her name, a spice addict who lives at 2248 Magari Alley. If I have time maybe I could stop by.

**How this stage is set:**
- Dialogue INFO `3223235412309923911` under topic **slander**; speaker Abby Odna (`SW_NarDiaryProtag`). locations: `Nar Shaddaa, 135 Alley West`. conditions: Journal `SW_Diary` Equal 0. response: “Oh, you don't know? That bitch Leanna Richarde stole my datapad and is planning to use it to slander my name. If I didn't know she was all hopped up on spice I would go over to her apartment at 2248 Magari Alley myself and take it back, but I know she's all pumped up on that stuff.”.

```text
Journal SW_Diary 5
```

### Stage 10

The spice addicted thief attacked me when I entered her home; I found the datapad and should bring it back to Abby Odna.

**How this stage is set:**
- Script `SW_DiaryScript`. attached to Book Datapad Diary (`SW_DiaryItem`); placed in `Nar Shaddaa, 2448 Magari Alley`.

```text
If ( OnActivate )
    If ( GetJournalIndex, SW_Diary == 5 )
        Journal SW_Diary 10
        Activate
    elseif ( GetJournalIndex, SW_Diary == 0 )
```

```text
Activate
    elseif ( GetJournalIndex, SW_Diary == 0 )
        Journal SW_Diary 12
    else
        Activate
```

### Stage 12

I found a datapad containing diary logs that, after reading some of it looks like it belongs to a Abby Odna who lives at 135 Alley West.

**How this stage is set:**
- Script `SW_DiaryScript`. attached to Book Datapad Diary (`SW_DiaryItem`); placed in `Nar Shaddaa, 2448 Magari Alley`.

```text
If ( OnActivate )
    If ( GetJournalIndex, SW_Diary == 5 )
        Journal SW_Diary 10
        Activate
    elseif ( GetJournalIndex, SW_Diary == 0 )
```

```text
Activate
    elseif ( GetJournalIndex, SW_Diary == 0 )
        Journal SW_Diary 12
    else
        Activate
```

### Stage 15

Abby couldn't believe I had retrieved her datapad, she's given me 50 credits for helping her.

**How this stage is set:**
- Dialogue INFO `2190417802922315853` under topic **slander**; speaker Abby Odna (`SW_NarDiaryProtag`). locations: `Nar Shaddaa, 135 Alley West`. conditions: Item/ItemType `SW_DiaryItem` GreaterEqual 1. response: “You brought me my datapad? What are you some kind of offworlder saint come to help out all of us Lower City cretins? Thank you! I don't have much, but you're not leaving without me paying you something.”.

```text
Journal SW_Diary 15
player->additem, gold_001, 50
player->removeitem, SW_DiaryItem 1
```

### Related records and locations

**Dialogue speakers:**
- Abby Odna (`SW_NarDiaryProtag`) — `Nar Shaddaa, 135 Alley West`

**Scripts that read or write this journal:**
- `SW_DiaryScript` — Book Datapad Diary (`SW_DiaryItem`); placed in `Nar Shaddaa, 2448 Magari Alley`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)
- Datapad Diary (`SW_DiaryItem`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Nar Shaddaa, 135 Alley West`
- `Nar Shaddaa, 2448 Magari Alley`

<details><summary>Journal-state readers (1 code sites)</summary>

- Script `SW_DiaryScript`. attached to Book Datapad Diary (`SW_DiaryItem`); placed in `Nar Shaddaa, 2448 Magari Alley`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: I met a woman named Abby Odna at 135 Alley West who says her datapad was stolen by another woman who is trying…
- [ ] Reach index `10`: The spice addicted thief attacked me when I entered her home; I found the datapad and should bring it back to …
- [ ] Reach index `12`: I found a datapad containing diary logs that, after reading some of it looks like it belongs to a Abby Odna wh…
- [ ] Reach index `15`: Abby couldn't believe I had retrieved her datapad, she's given me 50 credits for helping her.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_Diary`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
