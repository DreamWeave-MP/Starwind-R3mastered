---
title: "Red Bad?"
description: "Walkthrough and QA reference for Red Bad? (SW_ExpGurkJourn)."
weight: 8
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_ExpGurkJourn"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_ExpGurkJourn` |
| **Category** | Expansion / PlanExp |
| **Journal entries** | 5 |
| **Completion branches** | No explicit Finished marker |
| **Starts by** | Speak with **Gurk Worker** in **Lok, Perl Hideout**. |
| **Key locations** | Lok, Perl Hideout, Lok, Perlek Egg Mine |
| **Key characters** | Gurk Worker |

## Walkthrough

### 1. Speak with Gurk Worker in Lok, Perl Hideout

Speak with **Gurk Worker** in **Lok, Perl Hideout**.

> **Expected journal update — index 5:** A gurk outside of the mine was trying to tell me something, although it could barely do so. Something in the mine is red and bad, that's all I know.

### 2. Reach Lok, Perlek Egg Mine and allow the scripted event to complete

Reach **Lok, Perlek Egg Mine** and allow the scripted event to complete.

> **Expected journal update — index 10:** I found a red perlek rampaging throughout the mine, this must be what the gurk was 'talking' about.

### 3. Reach Lok, Perlek Egg Mine and allow the scripted event to complete

Reach **Lok, Perlek Egg Mine** and allow the scripted event to complete.

> **Expected journal update — index 15:** The rampaging perlek is dead. I should try to tell the gurk of this, although I'm not sure it will understand.

### 4. Speak with Gurk Worker in Lok, Perl Hideout

Speak with **Gurk Worker** in **Lok, Perl Hideout**.

> **Expected journal update — index 20:** I'm not sure how much the gurk understood, but it seemed happy. At least my workers are safe within the mine again.

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Gurk Worker** (`SW_ExpGurkQuest`) — `Lok, Perl Hideout`

**Locations implicated by actor/object placement or explicit travel:**
- **Lok, Perl Hideout**
- **Lok, Perlek Egg Mine**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_ExpGurkJourn`
**Generated category:** Expansion / PlanExp
**Journal entries:** 5

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | A gurk outside of the mine was trying to tell me something, although it could barely do so. Something in the mine is red and bad, that's all I know. | 1 |
| 10 | — | I found a red perlek rampaging throughout the mine, this must be what the gurk was 'talking' about. | 1 |
| 15 | — | The rampaging perlek is dead. I should try to tell the gurk of this, although I'm not sure it will understand. | 1 |
| 20 | — | I'm not sure how much the gurk understood, but it seemed happy. At least my workers are safe within the mine again. | 1 |

### Record-level trigger map

### Stage 5

A gurk outside of the mine was trying to tell me something, although it could barely do so. Something in the mine is red and bad, that's all I know.

**How this stage is set:**
- Dialogue INFO `310275053157028120` under topic **Greeting 7**; speaker Gurk Worker (`SW_ExpGurkQuest`). locations: `Lok, Perl Hideout`. conditions: Journal `SW_ExpGurkJourn` Equal 0. response: “Red... Red Baaaaad...”.

```text
Journal SW_ExpGurkJourn 5
```

### Stage 10

I found a red perlek rampaging throughout the mine, this must be what the gurk was 'talking' about.

**How this stage is set:**
- Script `SW_ExpRampage`. attached to Creature Rampaging Perlek (`SW_ExpPerlekLokBoss`); placed in `Lok, Perlek Egg Mine`.

```text
If ( GetDisabled == 0 )
    If ( GetDistance Player <= 450 )
        Journal SW_ExpGurkJourn 10
    Endif
Endif
```

```text
If ( OnDeath )
    Journal SW_ExpGurkJourn 15
Endif
```

### Stage 15

The rampaging perlek is dead. I should try to tell the gurk of this, although I'm not sure it will understand.

**How this stage is set:**
- Script `SW_ExpRampage`. attached to Creature Rampaging Perlek (`SW_ExpPerlekLokBoss`); placed in `Lok, Perlek Egg Mine`.

```text
If ( GetDisabled == 0 )
    If ( GetDistance Player <= 450 )
        Journal SW_ExpGurkJourn 10
    Endif
Endif
```

```text
If ( OnDeath )
    Journal SW_ExpGurkJourn 15
Endif
```

### Stage 20

I'm not sure how much the gurk understood, but it seemed happy. At least my workers are safe within the mine again.

**How this stage is set:**
- Dialogue INFO `2086412177629210478` under topic **Greeting 7**; speaker Gurk Worker (`SW_ExpGurkQuest`). locations: `Lok, Perl Hideout`. conditions: Journal `SW_ExpGurkJourn` Equal 15. response: “*The gurk is confused in how to react to the news that the red perlek is dead, it simply yells loudly and dances about after failing to say anything legible.*”.

```text
Journal SW_ExpGurkJourn 20
```

### Related records and locations

**Dialogue speakers:**
- Gurk Worker (`SW_ExpGurkQuest`) — `Lok, Perl Hideout`

**Scripts that read or write this journal:**
- `SW_ExpRampage` — Creature Rampaging Perlek (`SW_ExpPerlekLokBoss`); placed in `Lok, Perlek Egg Mine`

**Cells implicated by actor/object placement or explicit travel code:**
- `Lok, Perl Hideout`
- `Lok, Perlek Egg Mine`

<details><summary>Journal-state readers (1 code sites)</summary>

- Script `SW_ExpRampage`. attached to Creature Rampaging Perlek (`SW_ExpPerlekLokBoss`); placed in `Lok, Perlek Egg Mine`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: A gurk outside of the mine was trying to tell me something, although it could barely do so. Something in the m…
- [ ] Reach index `10`: I found a red perlek rampaging throughout the mine, this must be what the gurk was 'talking' about.
- [ ] Reach index `15`: The rampaging perlek is dead. I should try to tell the gurk of this, although I'm not sure it will understand.
- [ ] Reach index `20`: I'm not sure how much the gurk understood, but it seemed happy. At least my workers are safe within the mine a…
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_ExpGurkJourn`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
