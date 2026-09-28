---
title: "The Perl Gang"
description: "Walkthrough and QA reference for The Perl Gang (SW_ExpPerlJourn)."
weight: 12
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_ExpPerlJourn"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_ExpPerlJourn` |
| **Category** | Expansion / PlanExp |
| **Journal entries** | 3 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Mazkul** in **Lok, Graveridge** and ask about **perl gang**. |
| **Key locations** | Lok, Graveridge, Lok, Greeve's Augmentations, Lok, Perl Base, Lok, Perl Hideout |
| **Key characters** | Mazkul |

## Walkthrough

### 1. Speak with Mazkul in Lok, Graveridge and ask about perl gang

Speak with **Mazkul** in **Lok, Graveridge** and ask about **perl gang**.

> **Expected journal update — index 5:** Apparently the perl gang owns territory outside of Graveridge and will shoot trespassers on sight. I should be careful if exploring their areas.

### 2. Defeat Moiran in Lok, Perl Base and allow its script to update the quest — Finished

Defeat **Moiran** in **Lok, Perl Base** and allow its script to update the quest.

> **Expected journal update — index 15:** The Perl Gang's leader is dead, and the gang members have yielded to me as their new authority. Now that the area will no longer shoot at me on site, I should take a look around and get aquainted with the resources here.

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 15**:

> The Perl Gang's leader is dead, and the gang members have yielded to me as their new authority. Now that the area will no longer shoot at me on site, I should take a look around and get aquainted with the resources here.

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Mazkul** (`SW_ExpIthorian`) — `Lok, Graveridge`

**Locations implicated by actor/object placement or explicit travel:**
- **Lok, Graveridge**
- **Lok, Greeve's Augmentations**
- **Lok, Perl Base**
- **Lok, Perl Hideout**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_ExpPerlJourn`
**Generated category:** Expansion / PlanExp
**Journal entries:** 3

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | Apparently the perl gang owns territory outside of Graveridge and will shoot trespassers on sight. I should be careful if exploring their areas. | 1 |
| 15 | Finished | The Perl Gang's leader is dead, and the gang members have yielded to me as their new authority. Now that the area will no longer shoot at me on site, I should take a look around and get aquainted with the resources here. | 1 |

### Record-level trigger map

### Stage 5

Apparently the perl gang owns territory outside of Graveridge and will shoot trespassers on sight. I should be careful if exploring their areas.

**How this stage is set:**
- Dialogue INFO `1354832319203702700` under topic **perl gang**; speaker Mazkul (`SW_ExpIthorian`). locations: `Lok, Graveridge`. conditions: Journal `SW_ExpPerlJourn` Equal 0. response: “They run the perlek egg industry in this area, and they're handy with blasters. They make trips to Graveridge from time to time to sell food but they shoot on site to anyone that enters their territory.”.

```text
Journal SW_ExpPerlJourn 5
```

### Stage 15 — Finished

The Perl Gang's leader is dead, and the gang members have yielded to me as their new authority. Now that the area will no longer shoot at me on site, I should take a look around and get aquainted with the resources here.

**How this stage is set:**
- Script `SW_ExpBossScript`. attached to Npc Moiran (`SW_ExpLokGangerBoss`); placed in `Lok, Perl Base`.

```text
If ( OnDeath )
    If ( DoOnce == 0 )
        Journal SW_ExpPerlJourn 15
        Set DoOnce to 1
    Endif
```

### Related records and locations

**Dialogue speakers:**
- Mazkul (`SW_ExpIthorian`) — `Lok, Graveridge`

**Scripts that read or write this journal:**
- `SW_ExpBossScript` — Npc Moiran (`SW_ExpLokGangerBoss`); placed in `Lok, Perl Base`
- `SW_ExpPerlAlly` — Npc Perl Outlaw (`SW_ExpOutlaw`); placed in `Lok, Perl Hideout`; Npc Perl Outlaw (`SW_ExpOutlaw2`); placed in `Lok, Perl Hideout`; Npc Perl Outlaw (`SW_ExpOutlaw3`); placed in `Lok, Perl Hideout`; Npc Perl Outlaw (`SW_ExpOutlaw4`); placed in `Lok, Perl Hideout`; Npc Perl Outlaw (`SW_ExpOutlaw5`); placed in `Lok, Perl Hideout`
- `SW_ExpPerlSpawn` — Door Ship to Graveridge (`SW_ExpToGrave`); placed in `Lok, Perl Hideout`; Door Ship to Perl Hideout (`SW_ExpToPerl`); placed in `Lok, Graveridge`; Container Egg Haul (`SW_ExpGurkCrate`); placed in `Lok, Perl Hideout`; Creature Gurk Worker (`SW_ExpGurkQuest`); placed in `Lok, Perl Hideout`; Npc Loronzo E-9 (`SW_ExpLokOutlawAug`); placed in `Lok, Greeve's Augmentations`
- `SW_ExpPerlUnlock` — Door Metal Door (`SW_ExpDoorAugment`); placed in `Lok, Perl Hideout`
- `SW_ExpStewGreet` — Npc Perl Steward (`SW_ExpLokOutlawStew`); placed in `Lok, Perl Base`

**Cells implicated by actor/object placement or explicit travel code:**
- `Lok, Graveridge`
- `Lok, Greeve's Augmentations`
- `Lok, Perl Base`
- `Lok, Perl Hideout`

<details><summary>Journal-state readers (4 code sites)</summary>

- Script `SW_ExpPerlAlly`. attached to Npc Perl Outlaw (`SW_ExpOutlaw`); placed in `Lok, Perl Hideout`; Npc Perl Outlaw (`SW_ExpOutlaw2`); placed in `Lok, Perl Hideout`; Npc Perl Outlaw (`SW_ExpOutlaw3`); placed in `Lok, Perl Hideout`; Npc Perl Outlaw (`SW_ExpOutlaw4`); placed in `Lok, Perl Hideout`; Npc Perl Outlaw (`SW_ExpOutlaw5`); placed in `Lok, Perl Hideout`; Npc Perl Outlaw (`SW_ExpOutlaw6`); placed in `Lok, Perl Hideout`; Npc Perl Outlaw (`SW_ExpOutlaw7`); placed in `Lok, Perl Hideout`; Npc Perl Outlaw (`SW_ExpOutlaw8`); placed in `Lok, Perl Hideout`.
- Script `SW_ExpPerlSpawn`. attached to Door Ship to Graveridge (`SW_ExpToGrave`); placed in `Lok, Perl Hideout`; Door Ship to Perl Hideout (`SW_ExpToPerl`); placed in `Lok, Graveridge`; Container Egg Haul (`SW_ExpGurkCrate`); placed in `Lok, Perl Hideout`; Creature Gurk Worker (`SW_ExpGurkQuest`); placed in `Lok, Perl Hideout`; Npc Loronzo E-9 (`SW_ExpLokOutlawAug`); placed in `Lok, Greeve's Augmentations`; Npc Perl Quartermaster (`SW_ExpLokOutlawQuat`); placed in `Lok, Perl Base`; Npc Perl Register (`SW_ExpOutlawFine`); placed in `Lok, Perl Hideout`; Npc Perl Outlaw (`SW_ExpOutlawFollow`); placed in `Lok, Perl Hideout`.
- Script `SW_ExpPerlUnlock`. attached to Door Metal Door (`SW_ExpDoorAugment`); placed in `Lok, Perl Hideout`.
- Script `SW_ExpStewGreet`. attached to Npc Perl Steward (`SW_ExpLokOutlawStew`); placed in `Lok, Perl Base`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: Apparently the perl gang owns territory outside of Graveridge and will shoot trespassers on sight. I should be…
- [ ] Reach index `15` (`Finished`): The Perl Gang's leader is dead, and the gang members have yielded to me as their new authority. Now that the a…
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_ExpPerlJourn`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
