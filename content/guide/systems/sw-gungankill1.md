---
title: "Gungan Kill1 (internal journal)"
description: "Walkthrough and QA reference for Gungan Kill1 (internal journal) (SW_GunganKill1)."
weight: 4
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_GunganKill1"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_GunganKill1` |
| **Category** | Systems & Internal Journals |
| **Journal entries** | 1 |
| **Completion branches** | No explicit Finished marker |
| **Starts by** | Defeat **Bluttier** in **Manaan, Bazaar** and allow its script to update the quest. |
| **Key locations** | Manaan, Bazaar |

## Walkthrough

### 1. Defeat Bluttier in Manaan, Bazaar and allow its script to update the quest

Defeat **Bluttier** in **Manaan, Bazaar** and allow its script to update the quest.

> **Expected journal update — index 5:** I have killed the Gungan Cehkeef.

## Characters & locations

**Locations implicated by actor/object placement or explicit travel:**
- **Manaan, Bazaar**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_GunganKill1`
**Generated category:** Systems & Internal Journals
**Journal entries:** 1

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | I have killed the Gungan Cehkeef. | 1 |

### Record-level trigger map

### Stage 5

I have killed the Gungan Cehkeef.

**How this stage is set:**
- Script `SW_GunganFirst`. attached to Npc Bluttier (`SW_Gungan`); placed in `Manaan, Bazaar`.

```text
If ( OnDeath )
    If ( DoOnce == 0 )
        Journal SW_GunganKill1 5
        Set DoOnce to 1
    endif
```

### Related records and locations

**Scripts that read or write this journal:**
- `SW_GunganFirst` — Npc Bluttier (`SW_Gungan`); placed in `Manaan, Bazaar`

**Cells implicated by actor/object placement or explicit travel code:**
- `Manaan, Bazaar`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: I have killed the Gungan Cehkeef.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_GunganKill1`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
