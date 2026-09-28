---
title: "Stripes"
description: "Walkthrough and QA reference for Stripes (SW_ZabrakAlly)."
weight: 73
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_ZabrakAlly"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_ZabrakAlly` |
| **Category** | Side Quests |
| **Journal entries** | 2 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Stripes** in **Nar Shaddaa, Dark Jedi Enclave**. |
| **Key locations** | Nar Shaddaa, Dark Jedi Enclave |
| **Key characters** | Stripes, Stripes |

## Walkthrough

### 1. Speak with Stripes in Nar Shaddaa, Dark Jedi Enclave — Finished

The records expose more than one way to reach this journal update:
- Speak with **Stripes** in **Nar Shaddaa, Dark Jedi Enclave**.
- Speak with **Stripes**.

> **Expected journal update — index 5:** I spoke to a Zabrak who I broke out of a cell on Nar Shaddaa where I was also being held. For rescuing him he as asked if he could accompany me off planet.

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 5**:

> I spoke to a Zabrak who I broke out of a cell on Nar Shaddaa where I was also being held. For rescuing him he as asked if he could accompany me off planet.

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Stripes** (`SW_Stripes2`) — `Nar Shaddaa, Dark Jedi Enclave`
- **Stripes** (`SW_StripesFirst`)

**Locations implicated by actor/object placement or explicit travel:**
- **Nar Shaddaa, Dark Jedi Enclave**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_ZabrakAlly`
**Generated category:** Side Quests
**Journal entries:** 2

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | Finished | I spoke to a Zabrak who I broke out of a cell on Nar Shaddaa where I was also being held. For rescuing him he as asked if he could accompany me off planet. | 2 |

### Record-level trigger map

### Stage 5 — Finished

I spoke to a Zabrak who I broke out of a cell on Nar Shaddaa where I was also being held. For rescuing him he as asked if he could accompany me off planet.

**How this stage is set:**
- Dialogue INFO `13149169751009817495` under topic **Greeting 7**; speaker Stripes (`SW_Stripes2`). locations: `Nar Shaddaa, Dark Jedi Enclave`. conditions: Journal `SW_ZabrakAlly` Equal 0. response: “Woh are you breaking out of here? Haha, finally, I don't even know how long I've been being held for anymore. I used to belong to this dark jedi group, mercenaries in every sense really. But, I guess they decided they didn't want any "aliens" in their mist, so, me being a Zabrak, they locked me up in here. Hey, I was going to die in here, I don't know where your going, but you could obviously use a hand if your pissing off the likes of these. Let me come with you.”.

```text
Journal SW_ZabrakAlly 5
set companion to 1
Set GotStripes to 1
```
- Dialogue INFO `14069254198022894` under topic **Greeting 7**; speaker Stripes (`SW_StripesFirst`). conditions: Journal `SW_ZabrakAlly` Equal 0. response: “Woh are you breaking out of here? Haha, finally, I don't even know how long I've been being held for anymore. I used to belong to this dark jedi group, mercenaries in every sense really.”.

```text
Journal SW_ZabrakAlly 5
Player->AddSpell "SW_CallStripes"
```

### Related records and locations

**Dialogue speakers:**
- Stripes (`SW_Stripes2`) — `Nar Shaddaa, Dark Jedi Enclave`
- Stripes (`SW_StripesFirst`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Nar Shaddaa, Dark Jedi Enclave`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5` (`Finished`): I spoke to a Zabrak who I broke out of a cell on Nar Shaddaa where I was also being held. For rescuing him he …
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_ZabrakAlly`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
