---
title: "Chapter 3: Abomination"
description: "Walkthrough and QA reference for Chapter 3: Abomination (SW_TarisChapX3-1)."
weight: 14
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_TarisChapX3-1"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_TarisChapX3-1` |
| **Category** | Main Quest |
| **Journal entries** | 6 |
| **Completion branches** | 2 |
| **Starts by** | Speak with **Shade Vendas** in **Taris, Central Plaza: Capital Tower** and ask about **M4:78**. |
| **Key locations** | Taris, Central Plaza: Capital Tower, Taris, Central Plaza: Capital Tower Lab, Taris, Central Plaza: Capital Tower Underground Lab |
| **Key characters** | Shade Vendas |

## Walkthrough

### 1. Speak with Shade Vendas in Taris, Central Plaza: Capital Tower and ask about M4:78

Speak with **Shade Vendas** in **Taris, Central Plaza: Capital Tower** and ask about **M4:78**.

> **Expected journal update — index 10:** Shade told me Gezeki wanted to meet me in this lab. She's given me access to this mysterious underground area here in the capital tower. I should see what this is about.

**Known item transfer:** 2000 × **Credits** (`gold_001`).

### 2. Reach Taris, Central Plaza: Capital Tower Lab and allow the scripted event to complete

Reach **Taris, Central Plaza: Capital Tower Lab** and allow the scripted event to complete.

> **Expected journal update — index 20:** Gezeki has been working on some interesting... projects. He's invited me to see what his research is about.

### 3. Reach Taris, Central Plaza: Capital Tower Underground Lab and allow the scripted event to complete

Reach **Taris, Central Plaza: Capital Tower Underground Lab** and allow the scripted event to complete.

> **Expected journal update — index 30:** I've been asked by Gezeki to inject myself with his enhanced Rakghoul serum...

### 4. Reach Taris, Central Plaza: Capital Tower Underground Lab and allow the scripted event to complete — Finished

Reach **Taris, Central Plaza: Capital Tower Underground Lab** and allow the scripted event to complete.

> **Expected journal update — index 40:** I refused to inject myself with Gezeki's rakghoul serum.

**Outcome:** this journal entry is marked as a finished branch.

### 5. Reach Taris, Central Plaza: Capital Tower Underground Lab and allow the scripted event to complete — Finished

Reach **Taris, Central Plaza: Capital Tower Underground Lab** and allow the scripted event to complete.

> **Expected journal update — index 50:** I injected myself with Gezeki's rakghoul serum.

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has **2 explicit finished entries**. Treat them as branch coverage targets during playtesting:

- **Index 40:** I refused to inject myself with Gezeki's rakghoul serum.
- **Index 50:** I injected myself with Gezeki's rakghoul serum.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 2000 × **Credits** (`gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Shade Vendas** (`SW_ShadeTower`) — `Taris, Central Plaza: Capital Tower`

**Locations implicated by actor/object placement or explicit travel:**
- **Taris, Central Plaza: Capital Tower**
- **Taris, Central Plaza: Capital Tower Lab**
- **Taris, Central Plaza: Capital Tower Underground Lab**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_TarisChapX3-1`
**Generated category:** Main Quest
**Journal entries:** 6

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 10 | — | Shade told me Gezeki wanted to meet me in this lab. She's given me access to this mysterious underground area here in the capital tower. I should see what this is about. | 1 |
| 20 | — | Gezeki has been working on some interesting... projects. He's invited me to see what his research is about. | 1 |
| 30 | — | I've been asked by Gezeki to inject myself with his enhanced Rakghoul serum... | 1 |
| 40 | Finished | I refused to inject myself with Gezeki's rakghoul serum. | 1 |
| 50 | Finished | I injected myself with Gezeki's rakghoul serum. | 1 |

### Record-level trigger map

### Stage 10

Shade told me Gezeki wanted to meet me in this lab. She's given me access to this mysterious underground area here in the capital tower. I should see what this is about.

**How this stage is set:**
- Dialogue INFO `2869412902321175966` under topic **M4:78**; speaker Shade Vendas (`SW_ShadeTower`). locations: `Taris, Central Plaza: Capital Tower`. conditions: Item/ItemType `SW_ReactorCore` GreaterEqual 1. response: “With this we can reinforce the infrastructure to power the whole sector. You are the most impressive individual I have ever met. Gezeki has asked if you'd meet him in his lab, he said it was urgent.”.

```text
player->additem gold_001 2000
Journal SW_TarisSectEnergy2 15
Journal SW_TarisChapX3-1 10
```

### Stage 20

Gezeki has been working on some interesting... projects. He's invited me to see what his research is about.

**How this stage is set:**
- Script `SW_StorySceneX3-1`. attached to Activator `SW_StorySceneActX31`; placed in `Taris, Central Plaza: Capital Tower Lab`.

```text
if ( timer > 15 )
;change time to sound file length
Journal "SW_TarisChapX3-1" 20
endif
endif
```

### Stage 30

I've been asked by Gezeki to inject myself with his enhanced Rakghoul serum...

**How this stage is set:**
- Script `SW_StorySceneX3-2`. attached to Activator `SW_StorySceneActX3-2`; placed in `Taris, Central Plaza: Capital Tower Underground Lab`.

```text
if ( timer > 23 )
;change time to sound file length
Journal "SW_TarisChapX3-1" 30
endif
endif
```

### Stage 40 — Finished

I refused to inject myself with Gezeki's rakghoul serum.

**How this stage is set:**
- Script `SW_StoryRakghoulSerumInjectScr`. attached to Activator Advanced Rakghoul Serum (`SW_RakghoulSerumEventAct`); placed in `Taris, Central Plaza: Capital Tower Underground Lab`.

```text
if ( doOnce == 0 )
Journal "SW_TarisChapX3-1" 50
DisablePlayerControls
Fadeout 2.0
```

```text
MessageBox "Sorry, but I cannot take no for an answer. You've been useful to us, and I thank you, but I'm afraid there are things I must do to reach our end goals."
;playsound gezeki voice
Journal "SW_TarisChapX3-1" 40
set doOnce to 2
endif
```

### Stage 50 — Finished

I injected myself with Gezeki's rakghoul serum.

**How this stage is set:**
- Script `SW_StoryRakghoulSerumInjectScr`. attached to Activator Advanced Rakghoul Serum (`SW_RakghoulSerumEventAct`); placed in `Taris, Central Plaza: Capital Tower Underground Lab`.

```text
if ( doOnce == 0 )
Journal "SW_TarisChapX3-1" 50
DisablePlayerControls
Fadeout 2.0
```

```text
MessageBox "Sorry, but I cannot take no for an answer. You've been useful to us, and I thank you, but I'm afraid there are things I must do to reach our end goals."
;playsound gezeki voice
Journal "SW_TarisChapX3-1" 40
set doOnce to 2
endif
```

### Related records and locations

**Dialogue speakers:**
- Shade Vendas (`SW_ShadeTower`) — `Taris, Central Plaza: Capital Tower`

**Scripts that read or write this journal:**
- `SW_RakghoulULSpawn` — Creature Rakghoul (`SW_RakhoulUL`); placed in `Taris, Central Plaza: Capital Tower Underground Lab`
- `SW_StoryRakghoulSerumInjectScr` — Activator Advanced Rakghoul Serum (`SW_RakghoulSerumEventAct`); placed in `Taris, Central Plaza: Capital Tower Underground Lab`
- `SW_StorySceneX3-1` — Activator `SW_StorySceneActX31`; placed in `Taris, Central Plaza: Capital Tower Lab`
- `SW_StorySceneX3-2` — Activator `SW_StorySceneActX3-2`; placed in `Taris, Central Plaza: Capital Tower Underground Lab`
- `SW_TarisCTLabDoor1` — Door Elevator Door (`SW_TarisLabDoor1`); placed in `Taris, Central Plaza: Capital Tower`
- `SW_TarisCTLabDoor2` — Door Metal Door (`SW_TarisLabDoor2`); placed in `Taris, Central Plaza: Capital Tower Lab`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)
- Reactor Core (`SW_ReactorCore`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Taris, Central Plaza: Capital Tower`
- `Taris, Central Plaza: Capital Tower Lab`
- `Taris, Central Plaza: Capital Tower Underground Lab`

<details><summary>Journal-state readers (4 code sites)</summary>

- Script `SW_RakghoulULSpawn`. attached to Creature Rakghoul (`SW_RakhoulUL`); placed in `Taris, Central Plaza: Capital Tower Underground Lab`.
- Script `SW_StoryRakghoulSerumInjectScr`. attached to Activator Advanced Rakghoul Serum (`SW_RakghoulSerumEventAct`); placed in `Taris, Central Plaza: Capital Tower Underground Lab`.
- Script `SW_TarisCTLabDoor1`. attached to Door Elevator Door (`SW_TarisLabDoor1`); placed in `Taris, Central Plaza: Capital Tower`.
- Script `SW_TarisCTLabDoor2`. attached to Door Metal Door (`SW_TarisLabDoor2`); placed in `Taris, Central Plaza: Capital Tower Lab`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `10` is obtainable.
- [ ] Reach index `10`: Shade told me Gezeki wanted to meet me in this lab. She's given me access to this mysterious underground area …
- [ ] Reach index `20`: Gezeki has been working on some interesting... projects. He's invited me to see what his research is about.
- [ ] Reach index `30`: I've been asked by Gezeki to inject myself with his enhanced Rakghoul serum...
- [ ] Reach index `40` (`Finished`): I refused to inject myself with Gezeki's rakghoul serum.
- [ ] Reach index `50` (`Finished`): I injected myself with Gezeki's rakghoul serum.
- [ ] Branch coverage: this journal has **2 different `Finished` entries**; test each reachable completion branch.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_TarisChapX3-1`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
