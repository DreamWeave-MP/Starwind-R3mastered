---
title: "Find the lost Siddah Ca brother."
description: "Walkthrough and QA reference for Find the lost Siddah Ca brother. (SW_TuskenQuest)."
weight: 41
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_TuskenQuest"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_TuskenQuest` |
| **Category** | Side Quests |
| **Journal entries** | 5 |
| **Completion branches** | 2 |
| **Starts by** | Speak with **Grrurr'urruk'rrur** in **Tatooine** and ask about **have a moment**. |
| **Key locations** | Tatooine |
| **Key characters** | Grrurr'urruk'rrur |

## Walkthrough

### 1. Speak with Grrurr'urruk'rrur in Tatooine and ask about have a moment

Speak with **Grrurr'urruk'rrur** in **Tatooine** and ask about **have a moment**.

> **Expected journal update — index 5:** A Siddah Ca villager asked me, if I am able, to keep an eye out on my travels on Tatooine for his missing brother. His brother's name is Ururur'ururr'rat, and he left a while back to join the Tusken Raider tribes. He sent a message to his brother a while back stating how he wishes to return to the Siddah Ca and was due back in the village a week prior to my meeting with his brother. He wears a charm made by their mother, and should be easily distinguishable by that momento.

### 2. Allow the scripted event handled by `TuskenCharm` to complete

Allow the scripted event handled by `TuskenCharm` to complete.

> **Expected journal update — index 10:** I found Ururur'ururr'rat, dead. Killed by the very Tusken Raiders he sought to join. He was not far from the Siddah Ca village when he died. I took the momento off his corpse and I should return it to Grrurr'urruk'rrur in the Siddah Ca village.

### 3. Speak with Grrurr'urruk'rrur in Tatooine — Finished

Speak with **Grrurr'urruk'rrur** in **Tatooine**.

> **Expected journal update — index 15:** I returned the momento to Grrurr'urruk'rrur and, distraught by the news, he ushered me away. At least I was able to bring closure to him.

**Outcome:** this journal entry is marked as a finished branch.

### 4. Find Grrurr'urruk'rrur in Tatooine and complete the encounter — Finished

Find **Grrurr'urruk'rrur** in **Tatooine** and complete the encounter.

> **Expected journal update — index 20:** I killed Grrurr'urruk'rrur.

**Known item transfer:** 1 × **Siddah Ca Tribal Amulet** (`common_amulet_01_TuskenQuest`).

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has **2 explicit finished entries**. Treat them as branch coverage targets during playtesting:

- **Index 15:** I returned the momento to Grrurr'urruk'rrur and, distraught by the news, he ushered me away. At least I was able to bring closure to him.
- **Index 20:** I killed Grrurr'urruk'rrur.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 1 × **Siddah Ca Tribal Amulet** (`common_amulet_01_TuskenQuest`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Grrurr'urruk'rrur** (`TatooineGrr`) — `Tatooine`

**Locations implicated by actor/object placement or explicit travel:**
- **Tatooine**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_TuskenQuest`
**Generated category:** Side Quests
**Journal entries:** 5

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | A Siddah Ca villager asked me, if I am able, to keep an eye out on my travels on Tatooine for his missing brother. His brother's name is Ururur'ururr'rat, and he left a while back to join the Tusken Raider tribes. He sent a message to his brother a while back stating how he wishes to return to the Siddah Ca and was due back in the village a week prior to my meeting with his brother. He wears a charm made by their mother, and should be easily distinguishable by that momento. | 1 |
| 10 | — | I found Ururur'ururr'rat, dead. Killed by the very Tusken Raiders he sought to join. He was not far from the Siddah Ca village when he died. I took the momento off his corpse and I should return it to Grrurr'urruk'rrur in the Siddah Ca village. | 1 |
| 15 | Finished | I returned the momento to Grrurr'urruk'rrur and, distraught by the news, he ushered me away. At least I was able to bring closure to him. | 1 |
| 20 | Finished | I killed Grrurr'urruk'rrur. | 1 |

### Record-level trigger map

### Stage 5

A Siddah Ca villager asked me, if I am able, to keep an eye out on my travels on Tatooine for his missing brother. His brother's name is Ururur'ururr'rat, and he left a while back to join the Tusken Raider tribes. He sent a message to his brother a while back stating how he wishes to return to the Siddah Ca and was due back in the village a week prior to my meeting with his brother. He wears a charm made by their mother, and should be easily distinguishable by that momento.

**How this stage is set:**
- Dialogue INFO `15637276711565814345` under topic **have a moment**; speaker Grrurr'urruk'rrur (`TatooineGrr`). locations: `Tatooine`. conditions: Journal `SW_TuskenQuest` Equal 0. response: “Rug gur gerrr herr nerrr!

 (You're an offworlder. I just wanted to ask you if you've seen my brother... A Sand Person named Ururur'ururr'rat..... No? Damn... Well, thanks anyways.... Uh, wait! If you, I hate to ask, but if you come across him in your travels, could you please tell him to come home? He ran off to join the Tusken Raider tribes a while ago but told me he wished to return to the Siddah Ca. He was due back a week ago, but we haven't heard from him since. He wears an amulet made by our mother.)”.

```text
Journal, SW_TuskenQuest 5
```

### Stage 10

I found Ururur'ururr'rat, dead. Killed by the very Tusken Raiders he sought to join. He was not far from the Siddah Ca village when he died. I took the momento off his corpse and I should return it to Grrurr'urruk'rrur in the Siddah Ca village.

**How this stage is set:**
- Script `TuskenCharm`. attached to Clothing Siddah Ca Tribal Amulet (`common_amulet_01_TuskenQuest`).

```text
if (OnPCAdd == 1)
    if (DoOnce == 0)
        journal SW_TuskenQuest 10
        set DoOnce to 1
    endif
```

### Stage 15 — Finished

I returned the momento to Grrurr'urruk'rrur and, distraught by the news, he ushered me away. At least I was able to bring closure to him.

**How this stage is set:**
- Dialogue INFO `1703253271160213023` under topic **Greeting 5**; speaker Grrurr'urruk'rrur (`TatooineGrr`). locations: `Tatooine`. conditions: Journal `SW_TuskenQuest` Equal 10. response: “Rug..... Nerr herr rug? Nug rerr herrr herr!

 (This.... is his.... Damn.... I suppose the Tusken Raiders wouldn't have let him out so easily.... Thank you, I suppose.... Please, just leave me now... Leave me to my grief...)”.

```text
TatooineGrr->Additem Common_amulet_01_tuskenquest 1
Player->removeitem common_amulet_01_tuskenquest 1
Journal, SW_TuskenQuest 15
Moddisposition -20
Goodbye
```

### Stage 20 — Finished

I killed Grrurr'urruk'rrur.

**How this stage is set:**
- Script `TuskenBrotherScript`. attached to Npc Grrurr'urruk'rrur (`TatooineGrr`); placed in `Tatooine`; Npc Ururur'ururr'rat (`TatooineUrurur`); placed in `Tatooine`.

```text
if (GetJournalIndex "SW_TuskenQuest" <= 10)
            Player->additem common_amulet_01_TuskenQuest 1
            Journal, SW_TuskenQuest, 20
        endif
    endif
```

### Related records and locations

**Dialogue speakers:**
- Grrurr'urruk'rrur (`TatooineGrr`) — `Tatooine`

**Scripts that read or write this journal:**
- `TuskenBrotherScript` — Npc Grrurr'urruk'rrur (`TatooineGrr`); placed in `Tatooine`; Npc Ururur'ururr'rat (`TatooineUrurur`); placed in `Tatooine`
- `TuskenCharm` — Clothing Siddah Ca Tribal Amulet (`common_amulet_01_TuskenQuest`)

**Items referenced by related script/result code:**
- Siddah Ca Tribal Amulet (`common_amulet_01_TuskenQuest`)
- Siddah Ca Tribal Amulet (`common_amulet_01_TuskenQuest`)
- Siddah Ca Tribal Amulet (`common_amulet_01_TuskenQuest`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Tatooine`

<details><summary>Journal-state readers (1 code sites)</summary>

- Script `TuskenBrotherScript`. attached to Npc Grrurr'urruk'rrur (`TatooineGrr`); placed in `Tatooine`; Npc Ururur'ururr'rat (`TatooineUrurur`); placed in `Tatooine`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: A Siddah Ca villager asked me, if I am able, to keep an eye out on my travels on Tatooine for his missing brot…
- [ ] Reach index `10`: I found Ururur'ururr'rat, dead. Killed by the very Tusken Raiders he sought to join. He was not far from the S…
- [ ] Reach index `15` (`Finished`): I returned the momento to Grrurr'urruk'rrur and, distraught by the news, he ushered me away. At least I was ab…
- [ ] Reach index `20` (`Finished`): I killed Grrurr'urruk'rrur.
- [ ] Branch coverage: this journal has **2 different `Finished` entries**; test each reachable completion branch.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_TuskenQuest`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
