---
title: "Sandriver Herders"
description: "Walkthrough and QA reference for Sandriver Herders (SW_GinQuest)."
weight: 67
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_GinQuest"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_GinQuest` |
| **Category** | Side Quests |
| **Journal entries** | 7 |
| **Completion branches** | 3 |
| **Starts by** | Speak with **Gin Hardora** in **Tatooine, Gin's Hut** and ask about **job offer**. |
| **Key locations** | Tatooine, Cantina, Tatooine, Gin's Hut |
| **Key characters** | Gin Hardora, Greck Jujo |

## Walkthrough

### 1. Speak with Gin Hardora in Tatooine, Gin's Hut and ask about job offer

Speak with **Gin Hardora** in **Tatooine, Gin's Hut** and ask about **job offer**.

> **Expected journal update — index 5:** I've met a herder near Sandriver on Tatooine. He and his wife herd Wraids and cull them for their hides. Lately, things have been getting troubling as a hunter from Sandriver has been stalking and killing their Wraids. They asked me if I could help them

### 2. Speak with Gin Hardora in Tatooine, Gin's Hut and ask about job offer — Finished

Speak with **Gin Hardora** in **Tatooine, Gin's Hut** and ask about **job offer**.

> **Expected journal update — index 10:** I've decided not to get involved with the Wraid's herders business. It's not my concern what happens to people out here.

**Outcome:** this journal entry is marked as a finished branch.

### 3. Speak with Gin Hardora in Tatooine, Gin's Hut and ask about job offer

Speak with **Gin Hardora** in **Tatooine, Gin's Hut** and ask about **job offer**.

> **Expected journal update — index 15:** I've agreed to help them. They said the hunter's name is Greck Jujo, and apparently he spends a lot of time in the cantina of Sandriver. I should head there immediately if I am to stop him.

### 4. Defeat Greck Jujo in Tatooine, Cantina and allow its script to update the quest

The records expose more than one way to reach this journal update:
- Defeat **Greck Jujo** in **Tatooine, Cantina** and allow its script to update the quest.
- Speak with **Greck Jujo** in **Tatooine, Cantina** and ask about **herder**.
- Speak with **Greck Jujo** in **Tatooine, Cantina**.

> **Expected journal update — index 20:** I've dealt with Greck Jujo. The herder, Gin Hardora, will no doubt be happy about this. I should report back.

### 5. Speak with Gin Hardora in Tatooine, Gin's Hut and ask about job offer — Finished

Speak with **Gin Hardora** in **Tatooine, Gin's Hut** and ask about **job offer**.

> **Expected journal update — index 25:** Gin Hardora rewarded me for dealing with the hunter. He and his wife didn't have much, but gave me every last credit they had.

**Known item transfer:** 5 × **Wraid Plate** (`SW_WraidPelt`).

**Outcome:** this journal entry is marked as a finished branch.

### 6. Defeat Gin Hardora in Tatooine, Gin's Hut and allow its script to update the quest — Finished

Defeat **Gin Hardora** in **Tatooine, Gin's Hut** and allow its script to update the quest.

> **Expected journal update — index 30:** I murdered the herder, Gin Hardora.

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has **3 explicit finished entries**. Treat them as branch coverage targets during playtesting:

- **Index 10:** I've decided not to get involved with the Wraid's herders business. It's not my concern what happens to people out here.
- **Index 25:** Gin Hardora rewarded me for dealing with the hunter. He and his wife didn't have much, but gave me every last credit they had.
- **Index 30:** I murdered the herder, Gin Hardora.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 5 × **Wraid Plate** (`SW_WraidPelt`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Gin Hardora** (`TatooineGin`) — `Tatooine, Gin's Hut`
- **Greck Jujo** (`TatooineGreck`) — `Tatooine, Cantina`

**Locations implicated by actor/object placement or explicit travel:**
- **Tatooine, Cantina**
- **Tatooine, Gin's Hut**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_GinQuest`
**Generated category:** Side Quests
**Journal entries:** 7

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | I've met a herder near Sandriver on Tatooine. He and his wife herd Wraids and cull them for their hides. Lately, things have been getting troubling as a hunter from Sandriver has been stalking and killing their Wraids. They asked me if I could help them | 1 |
| 10 | Finished | I've decided not to get involved with the Wraid's herders business. It's not my concern what happens to people out here. | 1 |
| 15 | — | I've agreed to help them. They said the hunter's name is Greck Jujo, and apparently he spends a lot of time in the cantina of Sandriver. I should head there immediately if I am to stop him. | 1 |
| 20 | — | I've dealt with Greck Jujo. The herder, Gin Hardora, will no doubt be happy about this. I should report back. | 3 |
| 25 | Finished | Gin Hardora rewarded me for dealing with the hunter. He and his wife didn't have much, but gave me every last credit they had. | 1 |
| 30 | Finished | I murdered the herder, Gin Hardora. | 1 |

### Record-level trigger map

### Stage 5

I've met a herder near Sandriver on Tatooine. He and his wife herd Wraids and cull them for their hides. Lately, things have been getting troubling as a hunter from Sandriver has been stalking and killing their Wraids. They asked me if I could help them

**How this stage is set:**
- Dialogue INFO `21892233752153730905` under topic **job offer**; speaker Gin Hardora (`TatooineGin`). locations: `Tatooine, Gin's Hut`. conditions: Function/Choice Equal 1. response: “Y'see, it began a few days ago. A few of our Wraids were dead when we came outside in the morning. Our Jawa herd hands wouldn't tell us what happened, either. They were scared. The next day, two more of our Wraids were found dead, shot and skinned. But this time, the perpetrator was nearby. We confronted him and he claimed to be a hunter from the Hunter's Federation. His name is Greck Jujo. If you can convince him to stop killing our Wraids, we'll be in your debt. Please, can you help us?”.

```text
Choice "You got it." 3 "I've got enough problems on my chest, I don't need yours." 4
Journal, SW_GinQuest, 5
```

### Stage 10 — Finished

I've decided not to get involved with the Wraid's herders business. It's not my concern what happens to people out here.

**How this stage is set:**
- Dialogue INFO `32078231051451619435` under topic **job offer**; speaker Gin Hardora (`TatooineGin`). locations: `Tatooine, Gin's Hut`. conditions: Function/Choice Equal 4. response: “Alright, well.... I suppose we'll have to find someone else... Thank you for your time.”.

```text
Moddisposition -10
Journal, SW_GinQuest, 10
Goodbye
```

### Stage 15

I've agreed to help them. They said the hunter's name is Greck Jujo, and apparently he spends a lot of time in the cantina of Sandriver. I should head there immediately if I am to stop him.

**How this stage is set:**
- Dialogue INFO `15992118463013132441` under topic **job offer**; speaker Gin Hardora (`TatooineGin`). locations: `Tatooine, Gin's Hut`. conditions: Function/Choice Equal 3. response: “You'll help us? Really?! Thank goodness, I wasn't sure you'd actually offer there... Well, the sooner the better, yeah? I heard Greck Jujo was in Sandriver. If I didn't know any better, I'd say he'd be in the cantina. We're counting on you. Please, deal with him some way. We'll give you whatever we can.”.

```text
Moddisposition 20
Journal, SW_GinQuest, 15
```

### Stage 20

I've dealt with Greck Jujo. The herder, Gin Hardora, will no doubt be happy about this. I should report back.

**How this stage is set:**
- Script `GreckScript`. attached to Npc Greck Jujo (`TatooineGreck`); placed in `Tatooine, Cantina`.

```text
if ( GetJournalIndex "SW_GinQuest" == 15 )
        if ( OnDeath == 1)
            Journal, SW_GinQuest, 20
        endif
    endif
```
- Dialogue INFO `2166018318142934649` under topic **herder**; speaker Greck Jujo (`TatooineGreck`). locations: `Tatooine, Cantina`. response: “Wait, so, ALL those Wraids belong to Gin? I... I had no idea. Well, I'm not trying to step on anyone's toes here. Wraid pelts sell really good in the galactic market so... But if they belong to him.... Well.. Looks like I gotta find a new location for my hunting grounds. You go and tell Gin I'll never set foot on his land again. He won't have to worry anymore. I'm very, truly, honestly sorry.”.

```text
Journal, SW_GinQuest, 20
Goodbye
Stopsound "SW_GreckGreet1"
```
- Dialogue INFO `15319213131761532117` under topic **Greeting 5**; speaker Greck Jujo (`TatooineGreck`). locations: `Tatooine, Cantina`. conditions: Journal `SW_GinQuest` Greater 15; Journal `SW_GinQuest` LessEqual 25. response: “I promised you I won't harm his Wraids again. I'm sorry. But if that's all the business you had with me, then please excuse me....”.

```text
Journal SW_GinQuest 20
goodbye
Stopsound "SW_GreckGreet1"
```

### Stage 25 — Finished

Gin Hardora rewarded me for dealing with the hunter. He and his wife didn't have much, but gave me every last credit they had.

**How this stage is set:**
- Dialogue INFO `22518323951552116900` under topic **job offer**; speaker Gin Hardora (`TatooineGin`). locations: `Tatooine, Gin's Hut`. conditions: Journal `SW_GinQuest` Equal 20. response: “He's agreed to leave our livelihood alone? Seriously? Somehow, I knew you'd be able to do it. You look like a capable sort. Well, if he's agreed to leave us and our Wraids alone, I suppose we can get back on track with our herd. We lost so many Wraids recently... Time to start breeding. Here. We don't have much to give, so here. These'll fetch a good price at Sandriver. I guarantee it.”.

```text
Moddisposition 20
Journal SW_GinQuest 25
player->modreputation 1
Player->additem, "SW_WraidPelt", 5
```

### Stage 30 — Finished

I murdered the herder, Gin Hardora.

**How this stage is set:**
- Script `GinScript`. attached to Npc Gin Hardora (`TatooineGin`); placed in `Tatooine, Gin's Hut`.

```text
if ( GetJournalIndex "SW_GinQuest" == 15 )
        if ( OnDeath == 1)
            Journal, SW_GinQuest, 30
        endif
    endif
```

### Related records and locations

**Dialogue speakers:**
- Gin Hardora (`TatooineGin`) — `Tatooine, Gin's Hut`
- Greck Jujo (`TatooineGreck`) — `Tatooine, Cantina`

**Scripts that read or write this journal:**
- `GinScript` — Npc Gin Hardora (`TatooineGin`); placed in `Tatooine, Gin's Hut`
- `GreckScript` — Npc Greck Jujo (`TatooineGreck`); placed in `Tatooine, Cantina`

**Items referenced by related script/result code:**
- Wraid Plate (`SW_WraidPelt`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Tatooine, Cantina`
- `Tatooine, Gin's Hut`

<details><summary>Journal-state readers (2 code sites)</summary>

- Script `GinScript`. attached to Npc Gin Hardora (`TatooineGin`); placed in `Tatooine, Gin's Hut`.
- Script `GreckScript`. attached to Npc Greck Jujo (`TatooineGreck`); placed in `Tatooine, Cantina`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: I've met a herder near Sandriver on Tatooine. He and his wife herd Wraids and cull them for their hides. Latel…
- [ ] Reach index `10` (`Finished`): I've decided not to get involved with the Wraid's herders business. It's not my concern what happens to people…
- [ ] Reach index `15`: I've agreed to help them. They said the hunter's name is Greck Jujo, and apparently he spends a lot of time in…
- [ ] Reach index `20`: I've dealt with Greck Jujo. The herder, Gin Hardora, will no doubt be happy about this. I should report back.
- [ ] Reach index `25` (`Finished`): Gin Hardora rewarded me for dealing with the hunter. He and his wife didn't have much, but gave me every last …
- [ ] Reach index `30` (`Finished`): I murdered the herder, Gin Hardora.
- [ ] Branch coverage: this journal has **3 different `Finished` entries**; test each reachable completion branch.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_GinQuest`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
