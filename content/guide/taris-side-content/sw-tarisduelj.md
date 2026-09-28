---
title: "Taris Dueling Arena"
description: "Walkthrough and QA reference for Taris Dueling Arena (SW_TarisDuelJ)."
weight: 5
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_TarisDuelJ"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_TarisDuelJ` |
| **Category** | Taris Side Content |
| **Journal entries** | 6 |
| **Completion branches** | 1 |
| **Starts by** | Defeat **Pep** in **Taris, Upper City Cantina: Arena** and allow its script to update the quest. |
| **Key locations** | Taris, Upper City Cantina: Arena |

## Walkthrough

### 1. Defeat Pep in Taris, Upper City Cantina: Arena and allow its script to update the quest

Defeat **Pep** in **Taris, Upper City Cantina: Arena** and allow its script to update the quest.

> **Expected journal update — index 10:** I've killed Pep in the Taris dueling arena.

### 2. Defeat Khodu Pomu in Taris, Upper City Cantina: Arena and allow its script to update the quest

Defeat **Khodu Pomu** in **Taris, Upper City Cantina: Arena** and allow its script to update the quest.

> **Expected journal update — index 20:** I've killed Khodu Pomu in the Taris dueling arena.

### 3. Defeat Yeebo in Taris, Upper City Cantina: Arena and allow its script to update the quest

Defeat **Yeebo** in **Taris, Upper City Cantina: Arena** and allow its script to update the quest.

> **Expected journal update — index 30:** I've killed Yeebo in the Taris dueling arena.

### 4. Defeat Dorn in Taris, Upper City Cantina: Arena and allow its script to update the quest

Defeat **Dorn** in **Taris, Upper City Cantina: Arena** and allow its script to update the quest.

> **Expected journal update — index 40:** I've killed Dorn in the Taris dueling arena.

### 5. Defeat Zurtim in Taris, Upper City Cantina: Arena and allow its script to update the quest — Finished

Defeat **Zurtim** in **Taris, Upper City Cantina: Arena** and allow its script to update the quest.

> **Expected journal update — index 50:** I've killed Zurtim in the Taris dueling arena.

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 50**:

> I've killed Zurtim in the Taris dueling arena.

## Characters & locations

**Locations implicated by actor/object placement or explicit travel:**
- **Taris, Upper City Cantina: Arena**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_TarisDuelJ`
**Generated category:** Taris Side Content
**Journal entries:** 6

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 10 | — | I've killed Pep in the Taris dueling arena. | 1 |
| 20 | — | I've killed Khodu Pomu in the Taris dueling arena. | 1 |
| 30 | — | I've killed Yeebo in the Taris dueling arena. | 1 |
| 40 | — | I've killed Dorn in the Taris dueling arena. | 1 |
| 50 | Finished | I've killed Zurtim in the Taris dueling arena. | 1 |

### Record-level trigger map

### Stage 10

I've killed Pep in the Taris dueling arena.

**How this stage is set:**
- Script `SW_TarisDuelist1Scr`. attached to Npc Pep (`SW_TarisDuelist1`); placed in `Taris, Upper City Cantina: Arena`.

```text
if ( doOnce == 0 )
if ( OnDeath == 1 )
Journal SW_TarisDuelJ 10
Playsound "enchant success"
player->modReputation 1
```

### Stage 20

I've killed Khodu Pomu in the Taris dueling arena.

**How this stage is set:**
- Script `SW_TarisDuelist2Scr`. attached to Npc Khodu Pomu (`SW_TarisDuelist2`); placed in `Taris, Upper City Cantina: Arena`.

```text
if ( doOnce == 0 )
if ( OnDeath == 1 )
Journal SW_TarisDuelJ 20
Playsound "enchant success"
player->modReputation 1
```

### Stage 30

I've killed Yeebo in the Taris dueling arena.

**How this stage is set:**
- Script `SW_TarisDuelist3Scr`. attached to Npc Yeebo (`SW_TarisDuelist3`); placed in `Taris, Upper City Cantina: Arena`.

```text
if ( doOnce == 0 )
if ( OnDeath == 1 )
Journal SW_TarisDuelJ 30
Playsound "enchant success"
player->modReputation 1
```

### Stage 40

I've killed Dorn in the Taris dueling arena.

**How this stage is set:**
- Script `SW_TarisDuelist4Scr`. attached to Npc Dorn (`SW_TarisDuelist4`); placed in `Taris, Upper City Cantina: Arena`.

```text
if ( doOnce == 0 )
if ( OnDeath == 1 )
Journal SW_TarisDuelJ 40
Playsound "enchant success"
player->modReputation 1
```

### Stage 50 — Finished

I've killed Zurtim in the Taris dueling arena.

**How this stage is set:**
- Script `SW_TarisDuelist5Scr`. attached to Npc Zurtim (`SW_TarisDuelist5`); placed in `Taris, Upper City Cantina: Arena`.

```text
if ( doOnce == 0 )
if ( OnDeath == 1 )
Journal SW_TarisDuelJ 50
Playsound "enchant success"
player->modReputation 1
```

### Related records and locations

**Scripts that read or write this journal:**
- `SW_TarisDuelist1Scr` — Npc Pep (`SW_TarisDuelist1`); placed in `Taris, Upper City Cantina: Arena`
- `SW_TarisDuelist2Scr` — Npc Khodu Pomu (`SW_TarisDuelist2`); placed in `Taris, Upper City Cantina: Arena`
- `SW_TarisDuelist3Scr` — Npc Yeebo (`SW_TarisDuelist3`); placed in `Taris, Upper City Cantina: Arena`
- `SW_TarisDuelist4Scr` — Npc Dorn (`SW_TarisDuelist4`); placed in `Taris, Upper City Cantina: Arena`
- `SW_TarisDuelist5Scr` — Npc Zurtim (`SW_TarisDuelist5`); placed in `Taris, Upper City Cantina: Arena`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Taris, Upper City Cantina: Arena`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `10` is obtainable.
- [ ] Reach index `10`: I've killed Pep in the Taris dueling arena.
- [ ] Reach index `20`: I've killed Khodu Pomu in the Taris dueling arena.
- [ ] Reach index `30`: I've killed Yeebo in the Taris dueling arena.
- [ ] Reach index `40`: I've killed Dorn in the Taris dueling arena.
- [ ] Reach index `50` (`Finished`): I've killed Zurtim in the Taris dueling arena.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_TarisDuelJ`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
