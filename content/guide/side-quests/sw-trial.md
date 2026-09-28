---
title: "Trial on Manaan"
description: "Walkthrough and QA reference for Trial on Manaan (SW_Trial)."
weight: 109
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_Trial"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_Trial` |
| **Category** | Side Quests |
| **Journal entries** | 7 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Captain Shell** in **Manaan, Republic Embassy** and ask about **Orders**. |
| **Observed prerequisite journals** | `SW_Republic` |
| **Key locations** | Manaan, Central, Manaan, Kogal's Office, Manaan, Republic Embassy |
| **Key characters** | Kogal, Captain Shell |

## Walkthrough

### 1. Speak with Captain Shell in Manaan, Republic Embassy and ask about Orders

Speak with **Captain Shell** in **Manaan, Republic Embassy** and ask about **Orders**.

> **Expected journal update — index 5:** I have been ordered to represent the Republic in a trial where a Republic Officer is at risk of being banned off planet for defending himself against a violent Sith Soldier in the Manaan Cantina.

### 2. Speak with Kogal in Manaan, Kogal's Office

Speak with **Kogal** in **Manaan, Kogal's Office**.

> **Expected journal update — index 10:** The Selkath Kogal has told me if I was to represent the Republic Soldier that I should speak with the witnesses of the event and then talk to Kogal again.

### 3. Speak with Kogal in Manaan, Kogal's Office and ask about trial

The records expose more than one way to reach this journal update:
- Speak with **Kogal** in **Manaan, Kogal's Office** and ask about **trial**.
- Speak with **Kogal** in **Manaan, Kogal's Office**.

> **Expected journal update — index 15:** I did not gain enough evidence to prevent the Republic Soldier from being banned from Manaan.

### 4. Speak with Kogal in Manaan, Kogal's Office and ask about trial

Speak with **Kogal** in **Manaan, Kogal's Office** and ask about **trial**.

> **Expected journal update — index 20:** I gained enough evidence and the Republic Soldier is being released back to the embassy.

### 5. Reach journal stage 25

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 25:** I spoke to the Captain, he says the mission was a lost cause. I was still thanked for my involvement.

### 6. Reach journal stage 30 — Finished

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 30:** The Captain is overly pleased with my success, he says if I keep it up I'll end up Captain one day.

**Outcome:** this journal entry is marked as a finished branch.

> **Playtest flag:** 2 journal stages on this page lack a literal setter in the current static scan.

## Endings & branches

The journal has one explicit finished state at **index 30**:

> The Captain is overly pleased with my success, he says if I keep it up I'll end up Captain one day.

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Kogal** (`SW_Judge`) — `Manaan, Kogal's Office`
- **Captain Shell** (`SW_RepublicQuester`) — `Manaan, Republic Embassy`

**Locations implicated by actor/object placement or explicit travel:**
- **Manaan, Central**
- **Manaan, Kogal's Office**
- **Manaan, Republic Embassy**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_Trial`
**Generated category:** Side Quests
**Journal entries:** 7

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | I have been ordered to represent the Republic in a trial where a Republic Officer is at risk of being banned off planet for defending himself against a violent Sith Soldier in the Manaan Cantina. | 1 |
| 10 | — | The Selkath Kogal has told me if I was to represent the Republic Soldier that I should speak with the witnesses of the event and then talk to Kogal again. | 1 |
| 15 | — | I did not gain enough evidence to prevent the Republic Soldier from being banned from Manaan. | 3 |
| 20 | — | I gained enough evidence and the Republic Soldier is being released back to the embassy. | 1 |
| 25 | — | I spoke to the Captain, he says the mission was a lost cause. I was still thanked for my involvement. | 0 |
| 30 | Finished | The Captain is overly pleased with my success, he says if I keep it up I'll end up Captain one day. | 0 |

### Record-level trigger map

### Stage 5

I have been ordered to represent the Republic in a trial where a Republic Officer is at risk of being banned off planet for defending himself against a violent Sith Soldier in the Manaan Cantina.

**How this stage is set:**
- Dialogue INFO `4752676426128671` under topic **Orders**; speaker Captain Shell (`SW_RepublicQuester`). locations: `Manaan, Republic Embassy`. conditions: Journal `SW_Republic` Equal 50; Journal `SW_Trial` Equal 0. response: “Ready for more orders already? Alright, here's the briefing; we have a Republic soldier on trial, we need someone to represent him. Go outside of the embassy to Manaan, Central and head towards the Civil Authorities office, there's a door to the right of the building, that's Kogal's Office. Get in there and see that this soldier walks free, we don't want him getting banished from the planet and sent back up to the fleet.”.

```text
Journal SW_Republic 55
Journal SW_Trial 5
"SW_ManaDoorKogal"->unlock
```

### Stage 10

The Selkath Kogal has told me if I was to represent the Republic Soldier that I should speak with the witnesses of the event and then talk to Kogal again.

**How this stage is set:**
- Dialogue INFO `3697323032314219716` under topic **Greeting 7**; speaker Kogal (`SW_Judge`). locations: `Manaan, Kogal's Office`. conditions: Journal `SW_Trial` Equal 5. response: “You must be the Republic Representative. The accused is on trial for assault here on Manaan, which is punishable by banishment from the planet. Speak to the witnesses to the right of my desk, then when you feel confident to represent this man come talk to me.”.

```text
Journal SW_Trial 10
Choice "As you wish." 1 "On second thought I don't think I'm going to be able to represent this man." 2
```

### Stage 15

I did not gain enough evidence to prevent the Republic Soldier from being banned from Manaan.

**How this stage is set:**
- Dialogue INFO `121043026917250489` under topic **trial**; speaker Kogal (`SW_Judge`). locations: `Manaan, Kogal's Office`. conditions: Journal `SW_Trial` Equal 10; Journal `SW_TrialCathar` Equal 5; Journal `SW_TrialRodian` Equal 5; Journal `SW_TrialSelkath` Equal 10; Function/Choice Equal 1. response: “I see. But the Rodians testimony is invalid as the Selkath claims he witnessed the opposite. This is not enough evidence, the accused Republic soldier is to be banned from Manaan. Please remove yourselves from my court.”.

```text
Journal SW_Trial 15
goodbye
```
- Dialogue INFO `702921153307322370` under topic **trial**; speaker Kogal (`SW_Judge`). locations: `Manaan, Kogal's Office`. conditions: Function/Choice Equal 1. response: “His punishment is decided then. Please remove yourselves from my court.”.

```text
Journal SW_Trial 15
goodbye
```
- Dialogue INFO `65738799346332560` under topic **Greeting 7**; speaker Kogal (`SW_Judge`). locations: `Manaan, Kogal's Office`. conditions: Journal `SW_Trial` Equal 10; Function/Choice Equal 2. response: “Then his punishment is decided.”.

```text
Journal SW_Trial 15
```

### Stage 20

I gained enough evidence and the Republic Soldier is being released back to the embassy.

**How this stage is set:**
- Dialogue INFO `28736107116148452` under topic **trial**; speaker Kogal (`SW_Judge`). locations: `Manaan, Kogal's Office`. conditions: Journal `SW_Trial` Equal 10; Journal `SW_TrialCathar` Equal 5; Journal `SW_TrialRodian` Equal 5; Journal `SW_TrialSelkath` Equal 15; Function/Choice Equal 1. response: “I see. Violence is still illegal on Manaan, but in this case this man did what he had to do to possibly defend his life. He may return to your embassy, but any more incidents with this man and he will not have the liberty of a trial.”.

```text
Journal SW_Trial 20
goodbye
```

### Stage 25

I spoke to the Captain, he says the mission was a lost cause. I was still thanked for my involvement.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 30 — Finished

The Captain is overly pleased with my success, he says if I keep it up I'll end up Captain one day.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Related records and locations

**Dialogue speakers:**
- Kogal (`SW_Judge`) — `Manaan, Kogal's Office`
- Captain Shell (`SW_RepublicQuester`) — `Manaan, Republic Embassy`

**Cells implicated by actor/object placement or explicit travel code:**
- `Manaan, Central`
- `Manaan, Kogal's Office`
- `Manaan, Republic Embassy`

<details><summary>Other directly addressed object IDs in related code</summary>

- Metal Door (`SW_ManaDoorKogal`)

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: I have been ordered to represent the Republic in a trial where a Republic Officer is at risk of being banned o…
- [ ] Reach index `10`: The Selkath Kogal has told me if I was to represent the Republic Soldier that I should speak with the witnesse…
- [ ] Reach index `15`: I did not gain enough evidence to prevent the Republic Soldier from being banned from Manaan.
- [ ] Reach index `20`: I gained enough evidence and the Republic Soldier is being released back to the embassy.
- [ ] Reach index `25`: I spoke to the Captain, he says the mission was a lost cause. I was still thanked for my involvement.
- [ ] Reach index `30` (`Finished`): The Captain is overly pleased with my success, he says if I keep it up I'll end up Captain one day.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_Trial`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
