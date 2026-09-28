---
title: "Neb Wolfson"
description: "Walkthrough and QA reference for Neb Wolfson (SW_PreTarisNeb)."
weight: 55
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_PreTarisNeb"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_PreTarisNeb` |
| **Category** | Side Quests |
| **Journal entries** | 3 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Neb Wolfson** in **Taris, Across the Wall**. |
| **Key locations** | Taris, Across the Wall, Taris, Undercity |
| **Key characters** | Neb Wolfson, Neb Wolfson |

## Walkthrough

### 1. Speak with Neb Wolfson in Taris, Across the Wall

Speak with **Neb Wolfson** in **Taris, Across the Wall**.

> **Expected journal update — index 10:** I ran into Neb Wolfson in the Taris remnants who's determined to kill some Rakghuols. He seems like someone I can team up with.

### 2. Speak with Neb Wolfson in Taris, Undercity — Finished

Speak with **Neb Wolfson** in **Taris, Undercity**.

> **Expected journal update — index 20:** I've reunited with Neb Wolfson in the Taris Remnants. He agreed to come with me and slay more Rakghouls!

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 20**:

> I've reunited with Neb Wolfson in the Taris Remnants. He agreed to come with me and slay more Rakghouls!

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Neb Wolfson** (`SW_NebWolfson`) — `Taris, Across the Wall`
- **Neb Wolfson** (`SW_NebWolfsonPost`) — `Taris, Undercity`

**Locations implicated by actor/object placement or explicit travel:**
- **Taris, Across the Wall**
- **Taris, Undercity**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_PreTarisNeb`
**Generated category:** Side Quests
**Journal entries:** 3

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 10 | — | I ran into Neb Wolfson in the Taris remnants who's determined to kill some Rakghuols. He seems like someone I can team up with. | 1 |
| 20 | Finished | I've reunited with Neb Wolfson in the Taris Remnants. He agreed to come with me and slay more Rakghouls! | 1 |

### Record-level trigger map

### Stage 10

I ran into Neb Wolfson in the Taris remnants who's determined to kill some Rakghuols. He seems like someone I can team up with.

**How this stage is set:**
- Dialogue INFO `214945742062027908` under topic **Greeting 2**; speaker Neb Wolfson (`SW_NebWolfson`). locations: `Taris, Across the Wall`. response: “Hey there, what are you doing down in the ruins? You know, it's dangerous across the wall. I lost everything in the attack, so I've been spending my time slaying these never ending waves of Rakghouls. We should team up against these vile beasts. I'm %name by the way, nice to meet you!”.

```text
PlaySound "NebPre1"
Journal SW_PreTarisNeb 10
AiFollow "player" 0 0 0 0
```

### Stage 20 — Finished

I've reunited with Neb Wolfson in the Taris Remnants. He agreed to come with me and slay more Rakghouls!

**How this stage is set:**
- Dialogue INFO `2028320698141416785` under topic **Greeting 2**; speaker Neb Wolfson (`SW_NebWolfsonPost`). locations: `Taris, Undercity`. conditions: Function/Choice Equal 4. response: “Neb Wolfson, then, at your service my friend. Lead me to the next hunt!”.

```text
StopSound "Neb8"
StopSound "Neb9"
Journal SW_PreTarisNeb 20
AddTopic "Follow"
AddTopic "Wait"
```

### Related records and locations

**Dialogue speakers:**
- Neb Wolfson (`SW_NebWolfson`) — `Taris, Across the Wall`
- Neb Wolfson (`SW_NebWolfsonPost`) — `Taris, Undercity`

**Scripts that read or write this journal:**
- `SW_NebInPostScr` — Container Footlocker (`SW_FootlockerNeb`); placed in `Taris, Undercity`; Light `SW_NebPostLantern`; placed in `Taris, Undercity`; Activator `SW_Neb_overhang_01`; placed in `Taris, Undercity`
- `SW_NebsScript` — Npc Neb Wolfson (`SW_NebWolfsonPost`); placed in `Taris, Undercity`

**Cells implicated by actor/object placement or explicit travel code:**
- `Taris, Across the Wall`
- `Taris, Undercity`

<details><summary>Journal-state readers (2 code sites)</summary>

- Script `SW_NebInPostScr`. attached to Container Footlocker (`SW_FootlockerNeb`); placed in `Taris, Undercity`; Light `SW_NebPostLantern`; placed in `Taris, Undercity`; Activator `SW_Neb_overhang_01`; placed in `Taris, Undercity`.
- Script `SW_NebsScript`. attached to Npc Neb Wolfson (`SW_NebWolfsonPost`); placed in `Taris, Undercity`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `10` is obtainable.
- [ ] Reach index `10`: I ran into Neb Wolfson in the Taris remnants who's determined to kill some Rakghuols. He seems like someone I …
- [ ] Reach index `20` (`Finished`): I've reunited with Neb Wolfson in the Taris Remnants. He agreed to come with me and slay more Rakghouls!
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_PreTarisNeb`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
