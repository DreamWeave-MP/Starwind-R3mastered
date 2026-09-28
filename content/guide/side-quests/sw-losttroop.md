---
title: "A Lost Trooper"
description: "Walkthrough and QA reference for A Lost Trooper (SW_LostTroop)."
weight: 6
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_LostTroop"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_LostTroop` |
| **Category** | Side Quests |
| **Journal entries** | 4 |
| **Completion branches** | No explicit Finished marker |
| **Starts by** | Speak with **Sarna** in **Taris, The Promised Land** and ask about **there**. |
| **Key locations** | Taris, Remnants, Taris, The Promised Land |
| **Key characters** | Sarna |

## Walkthrough

### 1. Speak with Sarna in Taris, The Promised Land and ask about there

Speak with **Sarna** in **Taris, The Promised Land** and ask about **there**.

> **Expected journal update — index 5:** I met a Sith survivor in the promised land on Taris, she's asked me to let her know if I find another sith trooper in the area that recently wandered off.

### 2. Find Dead Trooper in Taris, Remnants and complete the encounter

Find **Dead Trooper** in **Taris, Remnants** and complete the encounter.

> **Expected journal update — index 10:** I have found the lost trooper, he's been killed out in the Undercity of Taris. I should let Sarna know.

### 3. Speak with Sarna in Taris, The Promised Land and ask about there

Speak with **Sarna** in **Taris, The Promised Land** and ask about **there**.

> **Expected journal update — index 15:** Sarna has given me her modified Sith Cuirass in gratitude of returning to her with the fate of her lost trooper.

**Known item transfer:** 1 × **Sith Trooper Armor** (`SW_SithCuirassSarna`).

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 1 × **Sith Trooper Armor** (`SW_SithCuirassSarna`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Sarna** (`SW_TarisSithQuester`) — `Taris, The Promised Land`

**Locations implicated by actor/object placement or explicit travel:**
- **Taris, Remnants**
- **Taris, The Promised Land**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_LostTroop`
**Generated category:** Side Quests
**Journal entries:** 4

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | I met a Sith survivor in the promised land on Taris, she's asked me to let her know if I find another sith trooper in the area that recently wandered off. | 1 |
| 10 | — | I have found the lost trooper, he's been killed out in the Undercity of Taris. I should let Sarna know. | 1 |
| 15 | — | Sarna has given me her modified Sith Cuirass in gratitude of returning to her with the fate of her lost trooper. | 1 |

### Record-level trigger map

### Stage 5

I met a Sith survivor in the promised land on Taris, she's asked me to let her know if I find another sith trooper in the area that recently wandered off.

**How this stage is set:**
- Dialogue INFO `1448860422160024151` under topic **there**; speaker Sarna (`SW_TarisSithQuester`). locations: `Taris, The Promised Land`. conditions: Journal `SW_LostTroop` Equal 0. response: “One of my troopers chased off a rakghoul a few days ago, he hasn't made it back though and I'm starting to get worried. If you find him, can you please just help him get back home?”.

```text
Journal SW_LostTroop 5
```

### Stage 10

I have found the lost trooper, he's been killed out in the Undercity of Taris. I should let Sarna know.

**How this stage is set:**
- Script `SW_TrooperFind`. attached to Npc Dead Trooper (`SW_TarisSithDead`); placed in `Taris, Remnants`.

```text
If ( OnActivate )
    If ( GetJournalIndex, "SW_LostTroop" == 5 )
        Journal SW_LostTroop 10
        Activate
    Else
```

### Stage 15

Sarna has given me her modified Sith Cuirass in gratitude of returning to her with the fate of her lost trooper.

**How this stage is set:**
- Dialogue INFO `23580269612412313104` under topic **there**; speaker Sarna (`SW_TarisSithQuester`). locations: `Taris, The Promised Land`. conditions: Journal `SW_LostTroop` Equal 10. response: “You found him? I see, well I'm glad to at least know his fate, we can honor his death now. Thank you, and here take this, it's a modified Sith cuirass I got before the bombardment, you'll need it more than I will, since you're going out there and all.”.

```text
Journal SW_LostTroop 15
Player->additem, SW_SithCuirassSarna, 1
Removeitem, SW_SithCuirassSarna, 1
```

### Related records and locations

**Dialogue speakers:**
- Sarna (`SW_TarisSithQuester`) — `Taris, The Promised Land`

**Scripts that read or write this journal:**
- `SW_TrooperFind` — Npc Dead Trooper (`SW_TarisSithDead`); placed in `Taris, Remnants`

**Items referenced by related script/result code:**
- Sith Trooper Armor (`SW_SithCuirassSarna`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Taris, Remnants`
- `Taris, The Promised Land`

<details><summary>Journal-state readers (1 code sites)</summary>

- Script `SW_TrooperFind`. attached to Npc Dead Trooper (`SW_TarisSithDead`); placed in `Taris, Remnants`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: I met a Sith survivor in the promised land on Taris, she's asked me to let her know if I find another sith tro…
- [ ] Reach index `10`: I have found the lost trooper, he's been killed out in the Undercity of Taris. I should let Sarna know.
- [ ] Reach index `15`: Sarna has given me her modified Sith Cuirass in gratitude of returning to her with the fate of her lost troope…
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_LostTroop`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
