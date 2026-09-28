---
title: "Exp Red Journ (internal journal)"
description: "Walkthrough and QA reference for Exp Red Journ (internal journal) (SW_ExpRedJourn)."
weight: 3
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_ExpRedJourn"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_ExpRedJourn` |
| **Category** | Expansion / PlanExp |
| **Journal entries** | 3 |
| **Completion branches** | 1 |
| **Starts by** | Record route requires playtest verification. |
| **Key locations** | Dantooine, Ballast, Dathomir, Exterior, Gamorr, Ucksmug, Hoth, Wasteland, Kashyyk, Banished Lands, Lok, Cliffside … |

## Walkthrough

### 1. Reach journal stage 0

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 0:** The Red Bandit

### 2. Find Billy the Red Bandit in Lok, Perl Hideout and complete the encounter

Find **Billy the Red Bandit** in **Lok, Perl Hideout** and complete the encounter.

> **Expected journal update — index 5:** I've been defeated an outlaw in red although he managed to escape. He has sworn that he will come back for my head.

### 3. Find Billy the Red Bandit in Lok, Perl Hideout and complete the encounter — Finished

Find **Billy the Red Bandit** in **Lok, Perl Hideout** and complete the encounter.

> **Expected journal update — index 10:** The red bandit is dead and will no longer hunt me.

**Outcome:** this journal entry is marked as a finished branch.

{% callout(kind="warning", title="Playtest flag") %}
1 journal stage on this page lack a literal setter in the current static scan.
{% end %}

## Endings & branches

The journal has one explicit finished state at **index 10**:

> The red bandit is dead and will no longer hunt me.

## Characters & locations

**Locations implicated by actor/object placement or explicit travel:**
- **Dantooine, Ballast**
- **Dathomir, Exterior**
- **Gamorr, Ucksmug**
- **Hoth, Wasteland**
- **Kashyyk, Banished Lands**
- **Lok, Cliffside**
- **Lok, Graveridge**
- **Lok, Perl Hideout**
- **Manaan, Inner City**
- **Nar Shaddaa, Makacheesa Market**
- **Tatooine, Sandriver**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_ExpRedJourn`
**Generated category:** Expansion / PlanExp
**Journal entries:** 3

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 0 | — | The Red Bandit | 0 |
| 5 | — | I've been defeated an outlaw in red although he managed to escape. He has sworn that he will come back for my head. | 1 |
| 10 | Finished | The red bandit is dead and will no longer hunt me. | 1 |

### Record-level trigger map

### Stage 0

The Red Bandit

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 5

I've been defeated an outlaw in red although he managed to escape. He has sworn that he will come back for my head.

**How this stage is set:**
- Script `SW_ExpRedBandit`. attached to Npc Billy the Red Bandit (`SW_ExpLokRed`); placed in `Lok, Perl Hideout`.

```text
Set deleteobj to 0
    Set deletetimer to 0
    Journal SW_ExpRedJourn 10
    enable
    sethealth 0
```

```text
Set Redspawned to 0
        If ( GetJournalIndex SW_ExpRedJourn < 5 )
            Journal SW_ExpRedJourn 5
        Endif
    Endif
```

### Stage 10 — Finished

The red bandit is dead and will no longer hunt me.

**How this stage is set:**
- Script `SW_ExpRedBandit`. attached to Npc Billy the Red Bandit (`SW_ExpLokRed`); placed in `Lok, Perl Hideout`.

```text
Set deleteobj to 0
    Set deletetimer to 0
    Journal SW_ExpRedJourn 10
    enable
    sethealth 0
```

```text
Set Redspawned to 0
        If ( GetJournalIndex SW_ExpRedJourn < 5 )
            Journal SW_ExpRedJourn 5
        Endif
    Endif
```

### Related records and locations

**Scripts that read or write this journal:**
- `SW_ExpRedBandit` — Npc Billy the Red Bandit (`SW_ExpLokRed`); placed in `Lok, Perl Hideout`
- `SW_ExpRedControllerScript` — Activator `SW_ExpRedController`; placed in `Dantooine, Ballast`, `Dathomir, Exterior`, `Gamorr, Ucksmug`, `Hoth, Wasteland`, `Kashyyk, Banished Lands`, `Lok, Cliffside`, `Lok, Graveridge`, `Lok, Perl Hideout` (+3 more)

**Cells implicated by actor/object placement or explicit travel code:**
- `Dantooine, Ballast`
- `Dathomir, Exterior`
- `Gamorr, Ucksmug`
- `Hoth, Wasteland`
- `Kashyyk, Banished Lands`
- `Lok, Cliffside`
- `Lok, Graveridge`
- `Lok, Perl Hideout`
- `Manaan, Inner City`
- `Nar Shaddaa, Makacheesa Market`
- `Tatooine, Sandriver`

<details><summary>Journal-state readers (2 code sites)</summary>

- Script `SW_ExpRedBandit`. attached to Npc Billy the Red Bandit (`SW_ExpLokRed`); placed in `Lok, Perl Hideout`.
- Script `SW_ExpRedControllerScript`. attached to Activator `SW_ExpRedController`; placed in `Dantooine, Ballast`, `Dathomir, Exterior`, `Gamorr, Ucksmug`, `Hoth, Wasteland`, `Kashyyk, Banished Lands`, `Lok, Cliffside`, `Lok, Graveridge`, `Lok, Perl Hideout` (+3 more).

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `0` is obtainable.
- [ ] Reach index `0`: The Red Bandit
- [ ] Reach index `5`: I've been defeated an outlaw in red although he managed to escape. He has sworn that he will come back for my …
- [ ] Reach index `10` (`Finished`): The red bandit is dead and will no longer hunt me.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_ExpRedJourn`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
