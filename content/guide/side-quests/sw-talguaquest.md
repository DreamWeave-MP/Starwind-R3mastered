---
title: "Deal with the Tusken Raiders"
description: "Walkthrough and QA reference for Deal with the Tusken Raiders (SW_TalguaQuest)."
weight: 33
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_TalguaQuest"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_TalguaQuest` |
| **Category** | Side Quests |
| **Journal entries** | 5 |
| **Completion branches** | 2 |
| **Starts by** | Speak with **Talgua Lylhai** in **Tatooine, Cantina** and ask about **Some work**. |
| **Key locations** | Tatooine, Cantina, Tatooine, Sandriver, Tatooine, Tusken Raider Hut |
| **Key characters** | Talgua Lylhai |

## Walkthrough

### 1. Speak with Talgua Lylhai in Tatooine, Cantina and ask about Some work

Speak with **Talgua Lylhai** in **Tatooine, Cantina** and ask about **Some work**.

> **Expected journal update — index 10:** I've met a man named Talgua in the Cantina of Sandriver. He says he's a moisture farmer from the Dune Sea that has been suffering from attacks by Sand People. He said he'll pay me well if I "remove" one particular group near the town. They have a tent located just oustide the town to ambush people coming from Sandriver. It's located past the dune right outside the doors to Sandriver. I should hurry and deal with them before they vanish into the desert.

### 2. Reach Tatooine, Cantina and allow the scripted event to complete

Reach **Tatooine, Cantina** and allow the scripted event to complete.

> **Expected journal update — index 20:** I've dealt with the Sand People Raiders. I should return to Talgua if I seek a reward.

### 3. Speak with Talgua Lylhai in Tatooine, Cantina and ask about Some work — Finished

Speak with **Talgua Lylhai** in **Tatooine, Cantina** and ask about **Some work**.

> **Expected journal update — index 30:** Talgua rewarded me for my daring deed with 70 credits. With the raiders dealt with, I haven't just made him safe, but likely most of the area around Sandriver.

**Known item transfer:** 70 × **Credits** (`Gold_001`).

**Outcome:** this journal entry is marked as a finished branch.

### 4. Find Talgua Lylhai in Tatooine, Cantina and complete the encounter — Finished

Find **Talgua Lylhai** in **Tatooine, Cantina** and complete the encounter.

> **Expected journal update — index 35:** I murdered Talgua.

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has **2 explicit finished entries**. Treat them as branch coverage targets during playtesting:

- **Index 30:** Talgua rewarded me for my daring deed with 70 credits. With the raiders dealt with, I haven't just made him safe, but likely most of the area around Sandriver.
- **Index 35:** I murdered Talgua.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 70 × **Credits** (`Gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Talgua Lylhai** (`TatooineTalgua`) — `Tatooine, Cantina`

**Locations implicated by actor/object placement or explicit travel:**
- **Tatooine, Cantina**
- **Tatooine, Sandriver**
- **Tatooine, Tusken Raider Hut**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_TalguaQuest`
**Generated category:** Side Quests
**Journal entries:** 5

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 10 | — | I've met a man named Talgua in the Cantina of Sandriver. He says he's a moisture farmer from the Dune Sea that has been suffering from attacks by Sand People. He said he'll pay me well if I "remove" one particular group near the town. They have a tent located just oustide the town to ambush people coming from Sandriver. It's located past the dune right outside the doors to Sandriver. I should hurry and deal with them before they vanish into the desert. | 1 |
| 20 | — | I've dealt with the Sand People Raiders. I should return to Talgua if I seek a reward. | 1 |
| 30 | Finished | Talgua rewarded me for my daring deed with 70 credits. With the raiders dealt with, I haven't just made him safe, but likely most of the area around Sandriver. | 1 |
| 35 | Finished | I murdered Talgua. | 1 |

### Record-level trigger map

### Stage 10

I've met a man named Talgua in the Cantina of Sandriver. He says he's a moisture farmer from the Dune Sea that has been suffering from attacks by Sand People. He said he'll pay me well if I "remove" one particular group near the town. They have a tent located just oustide the town to ambush people coming from Sandriver. It's located past the dune right outside the doors to Sandriver. I should hurry and deal with them before they vanish into the desert.

**How this stage is set:**
- Dialogue INFO `104276162299416706` under topic **Some work**; speaker Talgua Lylhai (`TatooineTalgua`). locations: `Tatooine, Cantina`. conditions: Function/Choice Equal 2. response: “Really? And here I was thinking you'd be another lost cause. I've asked so many people to help me.... Not many really care what we moisture farmers go through, you see? Well anyways, I tracked the most recent group of raiders to a small tent just outside the town. Hidden well to ambush people coming to and from Sandriver. Go over the dune just outside the gates and the tent will be there. Kill every last one of the bastards.”.

```text
Journal, "SW_TalguaQuest", 10
StopSound "SW_TalGre1"
StopSound "SW_TalGre2"
```

### Stage 20

I've dealt with the Sand People Raiders. I should return to Talgua if I seek a reward.

**How this stage is set:**
- Script `SW_TuskCtTotalScr`. attached to Activator `SW_TuskCountTotalActivator`; placed in `Tatooine, Cantina`, `Tatooine, Tusken Raider Hut`.

```text
if ( SW_TuskCount >= 3 )
if ( GetJournalIndex "SW_TalguaQuest" >= 10 )
Journal SW_TalguaQuest 20
set doOnce to 1
endif
```

### Stage 30 — Finished

Talgua rewarded me for my daring deed with 70 credits. With the raiders dealt with, I haven't just made him safe, but likely most of the area around Sandriver.

**How this stage is set:**
- Dialogue INFO `2789311449495620899` under topic **Some work**; speaker Talgua Lylhai (`TatooineTalgua`). locations: `Tatooine, Cantina`. conditions: Journal `SW_TalguaQuest` Equal 20. response: “They're dead? All of them! Oh, happy day! Thank you! Thank you so much! You have no idea, but you've probably saved my life and the life of my wife. I hope the bastards rot in the hot desert air. Here, it's all I can offer. The Sand People put me on the verge of bankruptcy with all damage to my equipment. But maybe these credits can do you some good.”.

```text
Player->additem, "Gold_001", 70
Moddisposition, 60
Journal, "SW_TalguaQuest", 30
player->modreputation 1
StopSound "SW_TalGre1"
```

### Stage 35 — Finished

I murdered Talgua.

**How this stage is set:**
- Script `TalguaScript`. attached to Npc Talgua Lylhai (`TatooineTalgua`); placed in `Tatooine, Cantina`.

```text
if (GetJournalIndex "SW_TalguaQuest" >= 10)
        if (GetJournalIndex "SW_TalguaQuest" <= 20)
            Journal SW_TalguaQuest 35
        endif
    endif
```

### Related records and locations

**Dialogue speakers:**
- Talgua Lylhai (`TatooineTalgua`) — `Tatooine, Cantina`

**Scripts that read or write this journal:**
- `SW_TuskCtTotalScr` — Activator `SW_TuskCountTotalActivator`; placed in `Tatooine, Cantina`, `Tatooine, Tusken Raider Hut`
- `TalguaLeaveSandriverScript` — Activator Talgua Dummy Disabler (`TalguaDisabler`); placed in `Tatooine, Sandriver`
- `TalguaScript` — Npc Talgua Lylhai (`TatooineTalgua`); placed in `Tatooine, Cantina`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Tatooine, Cantina`
- `Tatooine, Sandriver`
- `Tatooine, Tusken Raider Hut`

<details><summary>Journal-state readers (3 code sites)</summary>

- Script `SW_TuskCtTotalScr`. attached to Activator `SW_TuskCountTotalActivator`; placed in `Tatooine, Cantina`, `Tatooine, Tusken Raider Hut`.
- Script `TalguaLeaveSandriverScript`. attached to Activator Talgua Dummy Disabler (`TalguaDisabler`); placed in `Tatooine, Sandriver`.
- Script `TalguaScript`. attached to Npc Talgua Lylhai (`TatooineTalgua`); placed in `Tatooine, Cantina`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `10` is obtainable.
- [ ] Reach index `10`: I've met a man named Talgua in the Cantina of Sandriver. He says he's a moisture farmer from the Dune Sea that…
- [ ] Reach index `20`: I've dealt with the Sand People Raiders. I should return to Talgua if I seek a reward.
- [ ] Reach index `30` (`Finished`): Talgua rewarded me for my daring deed with 70 credits. With the raiders dealt with, I haven't just made him sa…
- [ ] Reach index `35` (`Finished`): I murdered Talgua.
- [ ] Branch coverage: this journal has **2 different `Finished` entries**; test each reachable completion branch.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_TalguaQuest`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
