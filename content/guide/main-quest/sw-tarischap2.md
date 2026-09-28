---
title: "Chapter 2: Taris Operations"
description: "Walkthrough and QA reference for Chapter 2: Taris Operations (SW_TarisChap2)."
weight: 6
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_TarisChap2"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_TarisChap2` |
| **Category** | Main Quest |
| **Journal entries** | 3 |
| **Completion branches** | 1 |
| **Starts by** | Allow the scripted event handled by `SW_BuildCapitalTower` to complete. |
| **Key locations** | Taris, Black Vulkar Base: Underdark, Taris, Central Plaza: Capital Tower, Taris, Lower City |
| **Key characters** | Gezeki, Shade Vendas |

## Walkthrough

### 1. Allow the scripted event handled by `SW_BuildCapitalTower` to complete — Finished

Allow the scripted event handled by `SW_BuildCapitalTower` to complete.

> **Expected journal update — index 10:** The government building on Taris should be just about finished. I should return to Shade at the Taris Central Plaza and see if she has any new tasks for me.

**Outcome:** this journal entry is marked as a finished branch.

### 2. Reach journal stage 15

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 15:** Not actually using this journal entry at all SW_TarisSect[Part]

> **Playtest flag:** 1 journal stage on this page lack a literal setter in the current static scan.

## Endings & branches

The journal has one explicit finished state at **index 10**:

> The government building on Taris should be just about finished. I should return to Shade at the Taris Central Plaza and see if she has any new tasks for me.

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Gezeki** (`SW_GezekVulkar`) — `Taris, Lower City`
- **Shade Vendas** (`SW_ShadeTower`) — `Taris, Central Plaza: Capital Tower`

**Locations implicated by actor/object placement or explicit travel:**
- **Taris, Black Vulkar Base: Underdark**
- **Taris, Central Plaza: Capital Tower**
- **Taris, Lower City**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_TarisChap2`
**Generated category:** Main Quest
**Journal entries:** 3

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 10 | Finished | The government building on Taris should be just about finished. I should return to Shade at the Taris Central Plaza and see if she has any new tasks for me. | 1 |
| 15 | — | Not actually using this journal entry at all
<br>SW_TarisSect[Part] | 0 |

### Record-level trigger map

### Stage 10 — Finished

The government building on Taris should be just about finished. I should return to Shade at the Taris Central Plaza and see if she has any new tasks for me.

**How this stage is set:**
- Script `SW_BuildCapitalTower`.

```text
if ( GetPCCell "Taris, Central Plaza" == 0 )
    if ( daysPassed > 5 )
        Journal SW_TarisChap2 10
        set SW_CapitalTower to 1
        SW_GezekOutpost3->Enable
```

### Stage 15

Not actually using this journal entry at all
SW_TarisSect[Part]

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Related records and locations

**Dialogue speakers:**
- Gezeki (`SW_GezekVulkar`) — `Taris, Lower City`
- Shade Vendas (`SW_ShadeTower`) — `Taris, Central Plaza: Capital Tower`

**Scripts that read or write this journal:**
- `SW_BuildCapitalTower`
- `SW_CheckDoorVulkEnt` — Door Metal Door (`SW_TarisDoorVulkarBase`); placed in `Taris, Lower City`
- `SW_TarisVulkarRakg` — Creature Rakghoul (`SW_RakhoulVulkar`); placed in `Taris, Lower City`
- `SW_TarisVulkarSpawns` — Npc Gezeki (`SW_GezekVulkar`); placed in `Taris, Lower City`
- `SW_VulkarBossDeath` — Npc Zox Ji (`SW_BlackVulkarLeader`); placed in `Taris, Black Vulkar Base: Underdark`

**Items referenced by related script/result code:**
- Rakghoul Knife (`SW_RakKnife`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Taris, Black Vulkar Base: Underdark`
- `Taris, Central Plaza: Capital Tower`
- `Taris, Lower City`

<details><summary>Journal-state readers (3 code sites)</summary>

- Script `SW_CheckDoorVulkEnt`. attached to Door Metal Door (`SW_TarisDoorVulkarBase`); placed in `Taris, Lower City`.
- Script `SW_TarisVulkarRakg`. attached to Creature Rakghoul (`SW_RakhoulVulkar`); placed in `Taris, Lower City`.
- Script `SW_TarisVulkarSpawns`. attached to Npc Gezeki (`SW_GezekVulkar`); placed in `Taris, Lower City`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `10` is obtainable.
- [ ] Reach index `10` (`Finished`): The government building on Taris should be just about finished. I should return to Shade at the Taris Central …
- [ ] Reach index `15`: Not actually using this journal entry at all
SW_TarisSect[Part]
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_TarisChap2`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
