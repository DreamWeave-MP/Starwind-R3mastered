---
title: "Jaina Neetu"
description: "Walkthrough and QA reference for Jaina Neetu (SW_Jaina)."
weight: 45
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_Jaina"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_Jaina` |
| **Category** | Side Quests |
| **Journal entries** | 4 |
| **Completion branches** | 1 |
| **Starts by** | Record route requires playtest verification. |
| **Key locations** | Kashyyk, Gray Jedi Camp |
| **Key characters** | Joseph Evans |

## Walkthrough

### 1. Reach journal stage 2

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 2:** Jaina Neetu has died, I have her as a companion no more.

### 2. Speak with Joseph Evans in Kashyyk, Gray Jedi Camp and ask about Mandalorians

Speak with **Joseph Evans** in **Kashyyk, Gray Jedi Camp** and ask about **Mandalorians**.

> **Expected journal update — index 5:** Joseph Evans has sent Jaina Neetu with me to assist in taking out the Mandalorian forces in the Boyle sect of Kashyyk.

### 3. Speak with Joseph Evans in Kashyyk, Gray Jedi Camp and ask about Kintik Dwomutket — Finished

Speak with **Joseph Evans** in **Kashyyk, Gray Jedi Camp** and ask about **Kintik Dwomutket**.

> **Expected journal update — index 10:** Jaina Neetu will continue to accompany me in my travels, she has asked to finish out this journey with me.

**Outcome:** this journal entry is marked as a finished branch.

> **Playtest flag:** 1 journal stage on this page lack a literal setter in the current static scan.

## Endings & branches

The journal has one explicit finished state at **index 10**:

> Jaina Neetu will continue to accompany me in my travels, she has asked to finish out this journey with me.

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Joseph Evans** (`SW_GrayLeader`) — `Kashyyk, Gray Jedi Camp`

**Locations implicated by actor/object placement or explicit travel:**
- **Kashyyk, Gray Jedi Camp**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_Jaina`
**Generated category:** Side Quests
**Journal entries:** 4

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 2 | — | Jaina Neetu has died, I have her as a companion no more. | 0 |
| 5 | — | Joseph Evans has sent Jaina Neetu with me to assist in taking out the Mandalorian forces in the Boyle sect of Kashyyk. | 1 |
| 10 | Finished | Jaina Neetu will continue to accompany me in my travels, she has asked to finish out this journey with me. | 1 |

### Record-level trigger map

### Stage 2

Jaina Neetu has died, I have her as a companion no more.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 5

Joseph Evans has sent Jaina Neetu with me to assist in taking out the Mandalorian forces in the Boyle sect of Kashyyk.

**How this stage is set:**
- Dialogue INFO `376915616174430897` under topic **Mandalorians**; speaker Joseph Evans (`SW_GrayLeader`). locations: `Kashyyk, Gray Jedi Camp`. conditions: Journal `SW_Jedi` Equal 10. response: “They are passionate warriors, and have decided that they are going to prove their honor by hunting us down as we leave our camp. The force is strong with you, if you can take care of these Mandalorians we can take these Terentateks. We have little resources here in town but we have some, you are welcome to whatever you find. And, you are not expected to do this task alone; Jaina Neetu will assist you with this task, she is, like you, strong in the force and well versed in battle.”.

```text
Journal "SW_Jedi" 15
Journal "SW_Jaina" 5
SW_GrayCompanion->AiFollow Player 0, 0, 0, 0
SW_MandoLeader->Enable
```

### Stage 10 — Finished

Jaina Neetu will continue to accompany me in my travels, she has asked to finish out this journey with me.

**How this stage is set:**
- Dialogue INFO `2676418886166717960` under topic **Kintik Dwomutket**; speaker Joseph Evans (`SW_GrayLeader`). locations: `Kashyyk, Gray Jedi Camp`. conditions: Journal `SW_Jedi` Equal 30. response: “The hidden alchemy lab of Ancient Sith alchemists who have kept themselves alive through the darkest depths of the force. This lab is said to be where Terentateks are created, mutated through ancient Sith methods and experimentation from your already monstrous ranchor. We need you to go to Manaan, to Ahto City and find the clues that lie there about the location of the Kintik Dwomutket. We will be dispersing shortly on our own tasks as well, Jaina Neetu has asked to continue with you on your journey.”.

```text
Journal "SW_Jedi" 35
Journal "SW_Jaina" 10
AddTopic "follow"
AddTopic "wait"
```

### Related records and locations

**Dialogue speakers:**
- Joseph Evans (`SW_GrayLeader`) — `Kashyyk, Gray Jedi Camp`

**Scripts that read or write this journal:**
- `SW_JainaScript` — Npc Jaina Neetu (`SW_GrayCompanion`); placed in `Kashyyk, Gray Jedi Camp`

**Cells implicated by actor/object placement or explicit travel code:**
- `Kashyyk, Gray Jedi Camp`

<details><summary>Journal-state readers (1 code sites)</summary>

- Script `SW_JainaScript`. attached to Npc Jaina Neetu (`SW_GrayCompanion`); placed in `Kashyyk, Gray Jedi Camp`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `2` is obtainable.
- [ ] Reach index `2`: Jaina Neetu has died, I have her as a companion no more.
- [ ] Reach index `5`: Joseph Evans has sent Jaina Neetu with me to assist in taking out the Mandalorian forces in the Boyle sect of …
- [ ] Reach index `10` (`Finished`): Jaina Neetu will continue to accompany me in my travels, she has asked to finish out this journey with me.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_Jaina`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
