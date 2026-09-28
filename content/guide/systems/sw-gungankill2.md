---
title: "Gungan Kill2 (internal journal)"
description: "Walkthrough and QA reference for Gungan Kill2 (internal journal) (SW_GunganKill2)."
weight: 5
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_GunganKill2"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_GunganKill2` |
| **Category** | Systems & Internal Journals |
| **Journal entries** | 1 |
| **Completion branches** | No explicit Finished marker |
| **Starts by** | Defeat **Jeffy** in **Manaan, Cantina** and allow its script to update the quest. |
| **Key locations** | Manaan, Cantina |

## Walkthrough

### 1. Defeat Jeffy in Manaan, Cantina and allow its script to update the quest

Defeat **Jeffy** in **Manaan, Cantina** and allow its script to update the quest.

> **Expected journal update — index 5:** I have killed the Gungan Jeffy.

## Characters & locations

**Locations implicated by actor/object placement or explicit travel:**
- **Manaan, Cantina**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_GunganKill2`
**Generated category:** Systems & Internal Journals
**Journal entries:** 1

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | I have killed the Gungan Jeffy. | 1 |

### Record-level trigger map

### Stage 5

I have killed the Gungan Jeffy.

**How this stage is set:**
- Script `SW_GunganSecond`. attached to Npc Jeffy (`SW_Gungan2`); placed in `Manaan, Cantina`.

```text
If ( OnDeath )
    If ( DoOnce == 0 )
        Journal SW_GunganKill2 5
        Set DoOnce to 1
    endif
```

### Related records and locations

**Scripts that read or write this journal:**
- `SW_GunganSecond` — Npc Jeffy (`SW_Gungan2`); placed in `Manaan, Cantina`

**Cells implicated by actor/object placement or explicit travel code:**
- `Manaan, Cantina`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: I have killed the Gungan Jeffy.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_GunganKill2`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
