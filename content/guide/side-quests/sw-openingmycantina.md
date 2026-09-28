---
title: "Opening My Cantina"
description: "Walkthrough and QA reference for Opening My Cantina (SW_OpeningMyCantina)."
weight: 59
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_OpeningMyCantina"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_OpeningMyCantina` |
| **Category** | Side Quests |
| **Journal entries** | 3 |
| **Completion branches** | 1 |
| **Starts by** | Record route requires playtest verification. |
| **Key locations** | The Outer Rim, Freighter |

## Walkthrough

### 1. Reach journal stage 5

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 5:** The Galactic Bartender's Guild has offered for me to open my very own traveling cantina in my freighter for 8,000 credits.

### 2. Speak with the relevant character and ask about bartending — Finished

Speak with **the relevant character** and ask about **bartending**.

> **Expected journal update — index 10:** I have opened a cantina in my ship.

**Outcome:** this journal entry is marked as a finished branch.

> **Playtest flag:** 1 journal stage on this page lack a literal setter in the current static scan.

## Endings & branches

The journal has one explicit finished state at **index 10**:

> I have opened a cantina in my ship.

## Characters & locations

**Locations implicated by actor/object placement or explicit travel:**
- **The Outer Rim, Freighter**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_OpeningMyCantina`
**Generated category:** Side Quests
**Journal entries:** 3

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | The Galactic Bartender's Guild has offered for me to open my very own traveling cantina in my freighter for 8,000 credits. | 0 |
| 10 | Finished | I have opened a cantina in my ship. | 1 |

### Record-level trigger map

### Stage 5

The Galactic Bartender's Guild has offered for me to open my very own traveling cantina in my freighter for 8,000 credits.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 10 — Finished

I have opened a cantina in my ship.

**How this stage is set:**
- Dialogue INFO `21958191633211031442` under topic **bartending**; speaker generic dialogue. conditions: Function/Choice Equal 4; Item/ItemType `Gold_001` GreaterEqual 8000. response: “Alright I'll have that delivered and set up before you can even make it back to your ship! Congratulations, you're the owner of your very own cantina!”.

```text
Journal SW_OpeningMyCantina 10
player->removeitem, "Gold_001", 8000
```

### Related records and locations

**Scripts that read or write this journal:**
- `SW_OpenABar` — Activator `SW_FreighterBar`; placed in `The Outer Rim, Freighter`
- `SW_OpenABarNoLore` — Npc Cantina Patron (`SW_FreighterPatron`); placed in `The Outer Rim, Freighter`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)

**Cells implicated by actor/object placement or explicit travel code:**
- `The Outer Rim, Freighter`

<details><summary>Journal-state readers (2 code sites)</summary>

- Script `SW_OpenABar`. attached to Activator `SW_FreighterBar`; placed in `The Outer Rim, Freighter`.
- Script `SW_OpenABarNoLore`. attached to Npc Cantina Patron (`SW_FreighterPatron`); placed in `The Outer Rim, Freighter`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: The Galactic Bartender's Guild has offered for me to open my very own traveling cantina in my freighter for 8,…
- [ ] Reach index `10` (`Finished`): I have opened a cantina in my ship.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_OpeningMyCantina`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
