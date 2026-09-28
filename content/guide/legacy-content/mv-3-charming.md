---
title: "Na-els Londo"
description: "Walkthrough and QA reference for Na-els Londo (MV_3_Charming)."
weight: 1
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "MV_3_Charming"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `MV_3_Charming` |
| **Category** | Legacy & Additional Content |
| **Journal entries** | 6 |
| **Completion branches** | 5 |
| **Starts by** | Speak with **the relevant character** in **Nar Shaddaa, Lower City** and ask about **proposition**. |
| **Key locations** | Nar Shaddaa, Lower City |
| **Key characters** | `Nels Llendo` — `Nar Shaddaa, Lower City` |

## Walkthrough

### 1. Speak with the relevant character in Nar Shaddaa, Lower City and ask about proposition — Finished

Speak with **the relevant character** in **Nar Shaddaa, Lower City** and ask about **proposition**.

> **Expected journal update — index 90:** Because I did not give the bandit Nels Llendo the money he desired, he attacked me.

**Outcome:** this journal entry is marked as a finished branch.

### 2. Speak with the relevant character in Nar Shaddaa, Lower City and ask about proposition — Finished

Speak with **the relevant character** in **Nar Shaddaa, Lower City** and ask about **proposition**.

> **Expected journal update — index 100:** I met the "famed" gangster, Na-els Londo. After I paid the pompous ass 50 gold, he took his leave. However, he did mention he was staying at Eddie's Den, and I could find him there. Perhaps he can be of some use later. Or I can get my money back.

**Outcome:** this journal entry is marked as a finished branch.

### 3. Speak with the relevant character in Nar Shaddaa, Lower City and ask about kiss — Finished

Speak with **the relevant character** in **Nar Shaddaa, Lower City** and ask about **kiss**.

> **Expected journal update — index 120:** I met the "famed" gangster, Na-els Londo. While he did not attempt to rob me, he did ask for a kiss, which seemed harmless enough. It seems he is rather smitten with me, for he asked me to visit him at Eddie's Den. He might be of some use.

**Outcome:** this journal entry is marked as a finished branch.

### 4. Speak with the relevant character in Nar Shaddaa, Lower City and ask about kiss — Finished

Speak with **the relevant character** in **Nar Shaddaa, Lower City** and ask about **kiss**.

> **Expected journal update — index 130:** I met the "famed" gangster, Na-els Londo. While he did not attempt to rob me, he did ask for a kiss, which I found to be utterly distasteful. He was polite enough, though, and told me if I ever changed my mind, he could be found at Eddie's Den. It's possible he might be of some use, though the thought of kissing the rogue turns my stomach.

**Outcome:** this journal entry is marked as a finished branch.

### 5. Find Npc `Nels Llendo` in Nar Shaddaa, Lower City and complete the encounter — Finished

Find **Npc `Nels Llendo`** in **Nar Shaddaa, Lower City** and complete the encounter.

> **Expected journal update — index 140:** While Nels Llendo is a gangster and a rogue, he was not an unpleasant sort. I'll have to remember to look him up when I next visit the Lower City.

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has **5 explicit finished entries**. Treat them as branch coverage targets during playtesting:

- **Index 90:** Because I did not give the bandit Nels Llendo the money he desired, he attacked me.
- **Index 100:** I met the "famed" gangster, Na-els Londo. After I paid the pompous ass 50 gold, he took his leave. However, he did mention he was staying at Eddie's Den, and I could find him there. Perhaps he can be of some use later. Or I can get my money back.
- **Index 120:** I met the "famed" gangster, Na-els Londo. While he did not attempt to rob me, he did ask for a kiss, which seemed harmless enough. It seems he is rather smitten with me, for he asked me to visit him at Eddie's Den. He might be of some use.
- **Index 130:** I met the "famed" gangster, Na-els Londo. While he did not attempt to rob me, he did ask for a kiss, which I found to be utterly distasteful. He was polite enough, though, and told me if I ever changed my mind, he could be found at Eddie's Den. It's possible he might be of some use, though the thought of kissing the rogue turns my stomach.
- **Index 140:** While Nels Llendo is a gangster and a rogue, he was not an unpleasant sort. I'll have to remember to look him up when I next visit the Lower City.

## Characters & locations

**Characters directly tied to quest dialogue:**
- **`Nels Llendo` — `Nar Shaddaa, Lower City`** (``)

**Locations implicated by actor/object placement or explicit travel:**
- **Nar Shaddaa, Lower City**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `MV_3_Charming`
**Generated category:** Legacy & Additional Content
**Journal entries:** 6

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 90 | Finished | Because I did not give the bandit Nels Llendo the money he desired, he attacked me. | 2 |
| 100 | Finished | I met the "famed" gangster, Na-els Londo. After I paid the pompous ass 50 gold, he took his leave. However, he did mention he was staying at Eddie's Den, and I could find him there. Perhaps he can be of some use later. Or I can get my money back. | 1 |
| 120 | Finished | I met the "famed" gangster, Na-els Londo. While he did not attempt to rob me, he did ask for a kiss, which seemed harmless enough. It seems he is rather smitten with me, for he asked me to visit him at Eddie's Den. He might be of some use. | 1 |
| 130 | Finished | I met the "famed" gangster, Na-els Londo. While he did not attempt to rob me, he did ask for a kiss, which I found to be utterly distasteful. He was polite enough, though, and told me if I ever changed my mind, he could be found at Eddie's Den. It's possible he might be of some use, though the thought of kissing the rogue turns my stomach. | 1 |
| 140 | Finished | While Nels Llendo is a gangster and a rogue, he was not an unpleasant sort. I'll have to remember to look him up when I next visit the Lower City. | 1 |

### Record-level trigger map

### Stage 90 — Finished

Because I did not give the bandit Nels Llendo the money he desired, he attacked me.

**How this stage is set:**
- Dialogue INFO `5184237901321513008` under topic **proposition**; speaker `Nels Llendo`. locations: `Nar Shaddaa, Lower City`. conditions: Function/Choice Equal 2. response: “I fear you are making an unwise decision, my friend. But, so be it...though I hate to soil my clothes with your blood. No matter. Such is the life of Na-els Londo.”.

```text
journal "MV_3_Charming" 90
ModDisposition -30
SetFight 100
```
- Dialogue INFO `2151217716230119273` under topic **proposition**; speaker `Nels Llendo`. locations: `Nar Shaddaa, Lower City`. conditions: Function/Choice Equal 1; Item/ItemType `Gold_001` Less 50. response: “Hmmmm...you don't seem to have the gold that Na-els Londo requires. That is a problem.”.

```text
journal "MV_3_Charming" 90
ModDisposition -30
SetFight 100
```

### Stage 100 — Finished

I met the "famed" gangster, Na-els Londo. After I paid the pompous ass 50 gold, he took his leave. However, he did mention he was staying at Eddie's Den, and I could find him there. Perhaps he can be of some use later. Or I can get my money back.

**How this stage is set:**
- Dialogue INFO `25678167392892913449` under topic **proposition**; speaker `Nels Llendo`. locations: `Nar Shaddaa, Lower City`. conditions: Function/Choice Equal 1; Item/ItemType `Gold_001` GreaterEqual 50. response: “An excellent choice, my friend. As I said, Na-els Londo can be a very good friend to have. Now, I must be off. Good day to you, sir!”.

```text
journal "MV_3_Charming" 100
additem "Gold_001" 50
player->removeitem "Gold_001" 50
```

### Stage 120 — Finished

I met the "famed" gangster, Na-els Londo. While he did not attempt to rob me, he did ask for a kiss, which seemed harmless enough. It seems he is rather smitten with me, for he asked me to visit him at Eddie's Den. He might be of some use.

**How this stage is set:**
- Dialogue INFO `19700265441214810192` under topic **kiss**; speaker `Nels Llendo`. locations: `Nar Shaddaa, Lower City`. conditions: Function/Choice Equal 1. response: “Ahhhh...yes. Though it is Na-els Londo they call thief, it is you, %PCName, who has stolen my heart. Your kiss is worth more gold than I might find in a Duke's treasury. I must take my leave of you now, dear lady. Perhaps we may see another again one day. I'm certain I will be able to be of some service to you then. Until that time, good bye.”.

```text
journal "MV_3_Charming" 120
ModDisposition 30
Goodbye
```

### Stage 130 — Finished

I met the "famed" gangster, Na-els Londo. While he did not attempt to rob me, he did ask for a kiss, which I found to be utterly distasteful. He was polite enough, though, and told me if I ever changed my mind, he could be found at Eddie's Den. It's possible he might be of some use, though the thought of kissing the rogue turns my stomach.

**How this stage is set:**
- Dialogue INFO `2521766932062316625` under topic **kiss**; speaker `Nels Llendo`. locations: `Nar Shaddaa, Lower City`. conditions: Function/Choice Equal 2. response: “No? Ah well, perhaps it was too much to hope for a simple man such as Na-els Londo. But, if you ever change your mind, you need only to call on me. Good day, madam.”.

```text
journal "MV_3_Charming" 130
ModDisposition -10
Goodbye
```

### Stage 140 — Finished

While Nels Llendo is a gangster and a rogue, he was not an unpleasant sort. I'll have to remember to look him up when I next visit the Lower City.

**How this stage is set:**
- Script `nels_llendoScript`. attached to Npc `Nels Llendo`; placed in `Nar Shaddaa, Lower City`.

```text
"nels llendo"->PositionCell 3797, 9636, 11519, 291 "Nar Shaddaa, Eddie's Den"
    "nels llendo"->AIWander 0 0 0 60 30 10 0 0 0
    Journal "MV_3_Charming" 140
endif
```

### Related records and locations

**Dialogue speakers:**
- `Nels Llendo` — `Nar Shaddaa, Lower City`

**Scripts that read or write this journal:**
- `nels_llendoScript` — Npc `Nels Llendo`; placed in `Nar Shaddaa, Lower City`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Nar Shaddaa, Lower City`

<details><summary>Other directly addressed object IDs in related code</summary>

- `Nels Llendo`

</details>

<details><summary>Journal-state readers (1 code sites)</summary>

- Script `nels_llendoScript`. attached to Npc `Nels Llendo`; placed in `Nar Shaddaa, Lower City`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `90` is obtainable.
- [ ] Reach index `90` (`Finished`): Because I did not give the bandit Nels Llendo the money he desired, he attacked me.
- [ ] Reach index `100` (`Finished`): I met the "famed" gangster, Na-els Londo. After I paid the pompous ass 50 gold, he took his leave. However, he…
- [ ] Reach index `120` (`Finished`): I met the "famed" gangster, Na-els Londo. While he did not attempt to rob me, he did ask for a kiss, which see…
- [ ] Reach index `130` (`Finished`): I met the "famed" gangster, Na-els Londo. While he did not attempt to rob me, he did ask for a kiss, which I f…
- [ ] Reach index `140` (`Finished`): While Nels Llendo is a gangster and a rogue, he was not an unpleasant sort. I'll have to remember to look him …
- [ ] Branch coverage: this journal has **5 different `Finished` entries**; test each reachable completion branch.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `MV_3_Charming`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
