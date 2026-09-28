---
title: "More trouble in Sandriver"
description: "Walkthrough and QA reference for More trouble in Sandriver (SW_Work)."
weight: 54
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_Work"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_Work` |
| **Category** | Side Quests |
| **Journal entries** | 6 |
| **Completion branches** | 2 |
| **Starts by** | Record route requires playtest verification. |
| **Key locations** | Tatooine Czerka Office, Tatooine, Sandriver |
| **Key characters** | Blaine Willikie |

## Walkthrough

### 1. Reach journal stage 1

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 1:** The Czerka Corporation offered me a job to dispatch some local gangsters out of their warehouse. I told them no but they told me the offer still stands as long as no one else completes it first.

### 2. Reach journal stage 20

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 20:** I've killed the Zillows gangsters within the Sandriver warehouse and found a symbol on one of their bodies. I should return to the Czerka Office there and claim my reward.

### 3. Reach journal stage 30 — Finished

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 30:** I brought the symbol of the Zillows to the Czerka office and was awarded with 500 gold, they also asked me to consider joining the Czerka Corporation as they were impressed with how I dispatched of the gangsters.

**Outcome:** this journal entry is marked as a finished branch.

### 4. Use Born To Hunt — Finished

The records expose more than one way to reach this journal update:
- Use **Born To Hunt**.
- Speak with **Blaine Willikie** in **Tatooine Czerka Office** and ask about **a job**.

> **Expected journal update — index 31:** The Czerka Corporation office has unlocked the gates to Sandriver for me. I wonder what's out there?

**Outcome:** this journal entry is marked as a finished branch.

> **Playtest flag:** 3 journal stages on this page lack a literal setter in the current static scan.

## Endings & branches

The journal has **2 explicit finished entries**. Treat them as branch coverage targets during playtesting:

- **Index 30:** I brought the symbol of the Zillows to the Czerka office and was awarded with 500 gold, they also asked me to consider joining the Czerka Corporation as they were impressed with how I dispatched of the gangsters.
- **Index 31:** The Czerka Corporation office has unlocked the gates to Sandriver for me. I wonder what's out there?

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Blaine Willikie** (`SW_CzerkaOfficeGuy`) — `Tatooine Czerka Office`

**Locations implicated by actor/object placement or explicit travel:**
- **Tatooine Czerka Office**
- **Tatooine, Sandriver**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_Work`
**Generated category:** Side Quests
**Journal entries:** 6

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 1 | Restart | The Czerka Corporation offered me a job to dispatch some local gangsters out of their warehouse. I told them no but they told me the offer still stands as long as no one else completes it first. | 0 |
| 20 | — | I've killed the Zillows gangsters within the Sandriver warehouse and found a symbol on one of their bodies. I should return to the Czerka Office there and claim my reward. | 0 |
| 30 | Finished | I brought the symbol of the Zillows to the Czerka office and was awarded with 500 gold, they also asked me to consider joining the Czerka Corporation as they were impressed with how I dispatched of the gangsters. | 0 |
| 31 | Finished | The Czerka Corporation office has unlocked the gates to Sandriver for me. I wonder what's out there? | 2 |

### Record-level trigger map

### Stage 1 — Restart

The Czerka Corporation offered me a job to dispatch some local gangsters out of their warehouse. I told them no but they told me the offer still stands as long as no one else completes it first.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 20

I've killed the Zillows gangsters within the Sandriver warehouse and found a symbol on one of their bodies. I should return to the Czerka Office there and claim my reward.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 30 — Finished

I brought the symbol of the Zillows to the Czerka office and was awarded with 500 gold, they also asked me to consider joining the Czerka Corporation as they were impressed with how I dispatched of the gangsters.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 31 — Finished

The Czerka Corporation office has unlocked the gates to Sandriver for me. I wonder what's out there?

**How this stage is set:**
- Script `manlyman`. attached to Door Born To Hunt (`SW_CharGenPodDoor3`).

```text
journal sw_czerkamurd 25
journal sw_czerkamurd 30
Journal sw_work 31

journal sw_tarischap1 20
```
- Dialogue INFO `272335403198825906` under topic **a job**; speaker Blaine Willikie (`SW_CzerkaOfficeGuy`). locations: `Tatooine Czerka Office`. conditions: Journal `SW_Work` Equal 10; Item/ItemType `SW_ZillowsSymbol` GreaterEqual 1. response: “You took care of the Zillows? Let me see. That is an impressive feat. Here, %PCName, this should cover the job, it's more than it should be but if they'd let me I would've given more to get rid of those gangsters. We're granting you a hunting license to leave the city as well now that we know you can handle yourself.”.

```text
Choice "It will be nice to be able to leave the city." 1
player->modReputation 1
Journal "SW_Work" 31
player->modReputation 1
moddisposition 10
```

### Related records and locations

**Dialogue speakers:**
- Blaine Willikie (`SW_CzerkaOfficeGuy`) — `Tatooine Czerka Office`

**Scripts that read or write this journal:**
- `manlyman` — Door Born To Hunt (`SW_CharGenPodDoor3`)
- `SW_SandriverGates` — Door Heavy Door (`SW_SandriverGate2Persist`); placed in `Tatooine, Sandriver`; Door Heavy Door (`SW_SandriverGatePersist`); placed in `Tatooine, Sandriver`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)
- Credits (`Gold_001`)
- Heavy Shirt (`SW_ShirtHeavy`)
- Tusken Shockspear (`SW_TuskenMelee`)
- Whip (`SW_Whip`)
- Zillows Symbol (`SW_ZillowsSymbol`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Tatooine Czerka Office`
- `Tatooine, Sandriver`

<details><summary>Other directly addressed object IDs in related code</summary>

- Metal Door (`SW_CzerkaOfficeDoorTat`)

</details>

<details><summary>Journal-state readers (1 code sites)</summary>

- Script `SW_SandriverGates`. attached to Door Heavy Door (`SW_SandriverGate2Persist`); placed in `Tatooine, Sandriver`; Door Heavy Door (`SW_SandriverGatePersist`); placed in `Tatooine, Sandriver`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `1` is obtainable.
- [ ] Reach index `1` (`Restart`): The Czerka Corporation offered me a job to dispatch some local gangsters out of their warehouse. I told them n…
- [ ] Reach index `20`: I've killed the Zillows gangsters within the Sandriver warehouse and found a symbol on one of their bodies. I …
- [ ] Reach index `30` (`Finished`): I brought the symbol of the Zillows to the Czerka office and was awarded with 500 gold, they also asked me to …
- [ ] Reach index `31` (`Finished`): The Czerka Corporation office has unlocked the gates to Sandriver for me. I wonder what's out there?
- [ ] Branch coverage: this journal has **2 different `Finished` entries**; test each reachable completion branch.
- [ ] Exercise at least one restart/repeat cycle; this journal contains a `Restart` marker.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_Work`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
