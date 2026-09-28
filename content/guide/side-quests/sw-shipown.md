---
title: "A Ship of My Own"
description: "Walkthrough and QA reference for A Ship of My Own (SW_ShipOwn)."
weight: 10
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_ShipOwn"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_ShipOwn` |
| **Category** | Side Quests |
| **Journal entries** | 5 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Yapda Hopkyo** in **Nar Shaddaa, Cantina** and ask about **rumor**. |
| **Key locations** | Dantooine, Ballast, Dathomir, Exterior, Gamorr, Ucksmug, Hoth, Wasteland, Kashyyk, Boyle Research Facility, Lok, Graveridge … |
| **Key characters** | Simon Watts, Yapda Hopkyo |

## Walkthrough

### 1. Speak with Yapda Hopkyo in Nar Shaddaa, Cantina and ask about rumor

The records expose more than one way to reach this journal update:
- Speak with **Yapda Hopkyo** in **Nar Shaddaa, Cantina** and ask about **rumor**.
- Speak with **Simon Watts** in **Manaan, Cantina** and ask about **rumor**.

> **Expected journal update — index 1:** I have heard that the famous cargo runner, Sasha, is selling her renowned freighter in one of the docking bays on Manaan.

### 2. Reach journal stage 5

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 5:** Sasha in one of the Manaan docking bays has offered to sell me her ship for 10,000 credits. Apparently I can use it to travel around the galaxy, as well as use it as a home. The ship needs some new parts, which she says match up with drop ships reported to have fell on Tatooine, Dantooine, Kashyyk, and Manaan. She also says that her crew inside was infected with the Rakghoul Disease.

### 3. Reach journal stage 10

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 10:** I have bought the freighter from Sasha.

### 4. Use Ship Captain — Finished

The records expose more than one way to reach this journal update:
- Use **Ship Captain**.
- Reach **Lok, Graveridge** and allow the scripted event to complete.
- Use **Freighter** in **Dantooine, Ballast**.

> **Expected journal update — index 15:** I can now tell my companions to head to the ship.

**Known item transfer:** 1 × **Freighter Pilot Codes** (`SW_SpCarFreight`).

**Outcome:** this journal entry is marked as a finished branch.

{% callout(kind="warning", title="Playtest flag") %}
2 journal stages on this page lack a literal setter in the current static scan.
{% end %}

## Endings & branches

The journal has one explicit finished state at **index 15**:

> I can now tell my companions to head to the ship.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 1 × **Freighter Pilot Codes** (`SW_SpCarFreight`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Simon Watts** (`SW_BartenderManaan`) — `Manaan, Cantina`
- **Yapda Hopkyo** (`SW_BartenderNar`) — `Nar Shaddaa, Cantina`

**Locations implicated by actor/object placement or explicit travel:**
- **Dantooine, Ballast**
- **Dathomir, Exterior**
- **Gamorr, Ucksmug**
- **Hoth, Wasteland**
- **Kashyyk, Boyle Research Facility**
- **Lok, Graveridge**
- **M4-78: Landing Arm**
- **Manaan, Cantina**
- **Manaan, Docking Bay**
- **Naboo, Beachhead**
- **Naboo, Landing Site**
- **Nar Shaddaa**
- **Nar Shaddaa, Cantina**
- **Nar Shaddaa, North Hanger**
- **Taris, Central Plaza: Capital Tower**
- **Taris, Central Plaza: Capital Tower Upper Level**
- **Taris, Sith Headquarters: Level 2**
- **Taris, Sith Headquarters: Level 3**
- **Taris, Sith Headquarters: OC Office**
- **Taris, Upper City Apartments**
- **Tatooine, Sandriver**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_ShipOwn`
**Generated category:** Side Quests
**Journal entries:** 5

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 1 | — | I have heard that the famous cargo runner, Sasha, is selling her renowned freighter in one of the docking bays on Manaan. | 2 |
| 5 | — | Sasha in one of the Manaan docking bays has offered to sell me her ship for 10,000 credits. Apparently I can use it to travel around the galaxy, as well as use it as a home. The ship needs some new parts, which she says match up with drop ships reported to have fell on Tatooine, Dantooine, Kashyyk, and Manaan. She also says that her crew inside was infected with the Rakghoul Disease. | 0 |
| 10 | — | I have bought the freighter from Sasha. | 0 |
| 15 | Finished | I can now tell my companions to head to the ship. | 3 |

### Record-level trigger map

### Stage 1

I have heard that the famous cargo runner, Sasha, is selling her renowned freighter in one of the docking bays on Manaan.

**How this stage is set:**
- Dialogue INFO `253321079225615270` under topic **rumor**; speaker Yapda Hopkyo (`SW_BartenderNar`). locations: `Nar Shaddaa, Cantina`. conditions: Journal `SW_ShipOwn` Equal 0. response: “I heard the famous cargo runner Sasha is selling her renowned freighter in one of the docking bays on Manaan. That has to be one fast ship.”.

```text
Journal SW_ShipOwn 1
```
- Dialogue INFO `2805530912292111175` under topic **rumor**; speaker Simon Watts (`SW_BartenderManaan`). locations: `Manaan, Cantina`. conditions: Journal `SW_ShipOwn` Equal 0. response: “I heard the famous cargo runner Sasha is selling her renowned freighter in one of the docking bays on Manaan. That has to be one fast ship.”.

```text
Journal SW_ShipOwn 1
```

### Stage 5

Sasha in one of the Manaan docking bays has offered to sell me her ship for 10,000 credits. Apparently I can use it to travel around the galaxy, as well as use it as a home. The ship needs some new parts, which she says match up with drop ships reported to have fell on Tatooine, Dantooine, Kashyyk, and Manaan. She also says that her crew inside was infected with the Rakghoul Disease.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 10

I have bought the freighter from Sasha.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 15 — Finished

I can now tell my companions to head to the ship.

**How this stage is set:**
- Script `Alt_Ship`. attached to Door Ship Captain (`SW_CharGenPodDoorShipCap`).

```text
player->additem SW_SpCarFreight 1
        Journal SW_TarisChap1-2 15
        Journal SW_ShipOwn 15
        SW_StorySceneAct4->Disable
        SW_ShipQuester->Disable
```
- Script `SW_EnterFreighter`. attached to Activator Freighter (`SW_PlayersShipMana`); placed in `Lok, Graveridge`, `Nar Shaddaa`, `Taris, Central Plaza: Capital Tower`, `Taris, Central Plaza: Capital Tower Upper Level`, `Taris, Sith Headquarters: Level 2`, `Taris, Sith Headquarters: Level 3`, `Taris, Sith Headquarters: OC Office`, `Taris, Upper City Apartments`.

```text
AddTopic "head to ship"
            Journal SW_TarisChap1-2 15
            Journal SW_ShipOwn 15
            ;Shade Talks
            Player->PlaySound3D "KelliShipFix"
```
- Script `SW_EnterFreighterNEW`. attached to Door Freighter (`SW_PlayerShipNEW`); placed in `Dantooine, Ballast`, `Dathomir, Exterior`, `Gamorr, Ucksmug`, `Hoth, Wasteland`, `Kashyyk, Boyle Research Facility`, `M4-78: Landing Arm`, `Manaan, Docking Bay`, `Naboo, Beachhead` (+3 more).

```text
AddTopic "head to ship"
            Journal SW_TarisChap1-2 15
            Journal SW_ShipOwn 15
            ;Shade Talks
            Player->PlaySound3D "KelliShipFix"
```

### Related records and locations

**Dialogue speakers:**
- Simon Watts (`SW_BartenderManaan`) — `Manaan, Cantina`
- Yapda Hopkyo (`SW_BartenderNar`) — `Nar Shaddaa, Cantina`

**Scripts that read or write this journal:**
- `Alt_Ship` — Door Ship Captain (`SW_CharGenPodDoorShipCap`)
- `SW_EnterFreighter` — Activator Freighter (`SW_PlayersShipMana`); placed in `Lok, Graveridge`, `Nar Shaddaa`, `Taris, Central Plaza: Capital Tower`, `Taris, Central Plaza: Capital Tower Upper Level`, `Taris, Sith Headquarters: Level 2`, `Taris, Sith Headquarters: Level 3`, `Taris, Sith Headquarters: OC Office`, `Taris, Upper City Apartments`
- `SW_EnterFreighterNEW` — Door Freighter (`SW_PlayerShipNEW`); placed in `Dantooine, Ballast`, `Dathomir, Exterior`, `Gamorr, Ucksmug`, `Hoth, Wasteland`, `Kashyyk, Boyle Research Facility`, `M4-78: Landing Arm`, `Manaan, Docking Bay`, `Naboo, Beachhead` (+3 more)

**Items referenced by related script/result code:**
- Credits (`Gold_001`)
- Dropship Components (`SW_EnviroFilter`)
- Freighter Pilot Codes (`SW_SpCarFreight`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Dantooine, Ballast`
- `Dathomir, Exterior`
- `Gamorr, Ucksmug`
- `Hoth, Wasteland`
- `Kashyyk, Boyle Research Facility`
- `Lok, Graveridge`
- `M4-78: Landing Arm`
- `Manaan, Cantina`
- `Manaan, Docking Bay`
- `Naboo, Beachhead`
- `Naboo, Landing Site`
- `Nar Shaddaa`
- `Nar Shaddaa, Cantina`
- `Nar Shaddaa, North Hanger`
- `Taris, Central Plaza: Capital Tower`
- `Taris, Central Plaza: Capital Tower Upper Level`
- `Taris, Sith Headquarters: Level 2`
- `Taris, Sith Headquarters: Level 3`
- `Taris, Sith Headquarters: OC Office`
- `Taris, Upper City Apartments`
- `Tatooine, Sandriver`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `1` is obtainable.
- [ ] Reach index `1`: I have heard that the famous cargo runner, Sasha, is selling her renowned freighter in one of the docking bays…
- [ ] Reach index `5`: Sasha in one of the Manaan docking bays has offered to sell me her ship for 10,000 credits. Apparently I can u…
- [ ] Reach index `10`: I have bought the freighter from Sasha.
- [ ] Reach index `15` (`Finished`): I can now tell my companions to head to the ship.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_ShipOwn`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
