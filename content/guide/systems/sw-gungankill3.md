---
title: "Gungan Kill3 (internal journal)"
description: "Walkthrough and QA reference for Gungan Kill3 (internal journal) (SW_GunganKill3)."
weight: 6
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_GunganKill3"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_GunganKill3` |
| **Category** | Systems & Internal Journals |
| **Journal entries** | 1 |
| **Completion branches** | No explicit Finished marker |
| **Starts by** | Defeat **Cehkeef** in **Nar Shaddaa, Eddie's Den** and allow its script to update the quest. |
| **Key locations** | Nar Shaddaa, Eddie's Den |

## Walkthrough

### 1. Defeat Cehkeef in Nar Shaddaa, Eddie's Den and allow its script to update the quest

Defeat **Cehkeef** in **Nar Shaddaa, Eddie's Den** and allow its script to update the quest.

> **Expected journal update — index 5:** I have killed the Gungan Bluttier.

## Characters & locations

**Locations implicated by actor/object placement or explicit travel:**
- **Nar Shaddaa, Eddie's Den**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_GunganKill3`
**Generated category:** Systems & Internal Journals
**Journal entries:** 1

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | I have killed the Gungan Bluttier. | 1 |

### Record-level trigger map

### Stage 5

I have killed the Gungan Bluttier.

**How this stage is set:**
- Script `SW_GunganThird`. attached to Npc Cehkeef (`SW_Gungan3`); placed in `Nar Shaddaa, Eddie's Den`.

```text
If ( OnDeath )
    If ( DoOnce == 0 )
        Journal SW_GunganKill3 5
        Set DoOnce to 1
    endif
```

### Related records and locations

**Scripts that read or write this journal:**
- `SW_GunganThird` — Npc Cehkeef (`SW_Gungan3`); placed in `Nar Shaddaa, Eddie's Den`

**Cells implicated by actor/object placement or explicit travel code:**
- `Nar Shaddaa, Eddie's Den`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: I have killed the Gungan Bluttier.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_GunganKill3`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
