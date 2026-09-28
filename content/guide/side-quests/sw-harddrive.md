---
title: "Missing Droid"
description: "Walkthrough and QA reference for Missing Droid (SW_HardDrive)."
weight: 53
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_HardDrive"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_HardDrive` |
| **Category** | Side Quests |
| **Journal entries** | 3 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Gary Sinnerman** in **Kashyyk, Boyle Research Facility** and ask about **hard drive**. |
| **Key locations** | Kashyyk, Boyle Research Facility, Kashyyk, Czerka Office |
| **Key characters** | Gary Sinnerman |

## Walkthrough

### 1. Speak with Gary Sinnerman in Kashyyk, Boyle Research Facility and ask about hard drive

Speak with **Gary Sinnerman** in **Kashyyk, Boyle Research Facility** and ask about **hard drive**.

> **Expected journal update — index 1:** The Czerka Office needs someone to find a missing droid in the Shadowlands of the Boyle Sector and bring back its hard drive.

### 2. Speak with Gary Sinnerman in Kashyyk, Boyle Research Facility and ask about hard drive — Finished

Speak with **Gary Sinnerman** in **Kashyyk, Boyle Research Facility** and ask about **hard drive**.

> **Expected journal update — index 5:** I have returned the hard drive and was paid for my time.

**Known item transfer:** 750 × **Credits** (`gold_001`).

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 5**:

> I have returned the hard drive and was paid for my time.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 750 × **Credits** (`gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Gary Sinnerman** (`SW_CzerkaOfficeGuyKash`) — `Kashyyk, Boyle Research Facility`, `Kashyyk, Czerka Office`

**Locations implicated by actor/object placement or explicit travel:**
- **Kashyyk, Boyle Research Facility**
- **Kashyyk, Czerka Office**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_HardDrive`
**Generated category:** Side Quests
**Journal entries:** 3

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 1 | — | The Czerka Office needs someone to find a missing droid in the Shadowlands of the Boyle Sector and bring back its hard drive. | 1 |
| 5 | Finished | I have returned the hard drive and was paid for my time. | 1 |

### Record-level trigger map

### Stage 1

The Czerka Office needs someone to find a missing droid in the Shadowlands of the Boyle Sector and bring back its hard drive.

**How this stage is set:**
- Dialogue INFO `12367242683530512` under topic **hard drive**; speaker Gary Sinnerman (`SW_CzerkaOfficeGuyKash`). locations: `Kashyyk, Boyle Research Facility`, `Kashyyk, Czerka Office`. conditions: Journal `SW_HardDrive` Equal 0. response: “Yes one of our protocol droids was killed during a scouting mission and my employees failed to retrieve its hard drive during the event. The droid was gathering data on the local fauna, if you can recover that hard drive for me you will be paid for it.”.

```text
Journal SW_HardDrive 1
```

### Stage 5 — Finished

I have returned the hard drive and was paid for my time.

**How this stage is set:**
- Dialogue INFO `23496149811846611835` under topic **hard drive**; speaker Gary Sinnerman (`SW_CzerkaOfficeGuyKash`). locations: `Kashyyk, Boyle Research Facility`, `Kashyyk, Czerka Office`. conditions: Journal `SW_HardDrive` Equal 1; Item/ItemType `SW_HardDrive` GreaterEqual 1. response: “You've found it, fantastic I'll get your credits right away.”.

```text
Journal SW_HardDrive 5
player->additem gold_001, 750
player->modReputation 1
```

### Related records and locations

**Dialogue speakers:**
- Gary Sinnerman (`SW_CzerkaOfficeGuyKash`) — `Kashyyk, Boyle Research Facility`, `Kashyyk, Czerka Office`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Kashyyk, Boyle Research Facility`
- `Kashyyk, Czerka Office`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `1` is obtainable.
- [ ] Reach index `1`: The Czerka Office needs someone to find a missing droid in the Shadowlands of the Boyle Sector and bring back …
- [ ] Reach index `5` (`Finished`): I have returned the hard drive and was paid for my time.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_HardDrive`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
