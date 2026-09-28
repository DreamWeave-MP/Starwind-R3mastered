---
title: "The Jedi Knight"
description: "Walkthrough and QA reference for The Jedi Knight (SW_StripesRevenge)."
weight: 93
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_StripesRevenge"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_StripesRevenge` |
| **Category** | Side Quests |
| **Journal entries** | 6 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Stripes** in **Nar Shaddaa, Dark Jedi Enclave** and ask about **friend**. |
| **Key locations** | Kashyyk, Jaa Vene's Hut, Nar Shaddaa, Dark Jedi Enclave |
| **Key characters** | Stripes |

## Walkthrough

### 1. Speak with Stripes in Nar Shaddaa, Dark Jedi Enclave and ask about friend

Speak with **Stripes** in **Nar Shaddaa, Dark Jedi Enclave** and ask about **friend**.

> **Expected journal update — index 5:** I have agreed to hunt down the Jedi Knight Jaa Vene for Stripes, for revenge of his master's death.

### 2. Speak with Stripes in Nar Shaddaa, Dark Jedi Enclave and ask about friend

Speak with **Stripes** in **Nar Shaddaa, Dark Jedi Enclave** and ask about **friend**.

> **Expected journal update — index 10:** I have attempted to sway Stripes' obsession with revenge.

### 3. Speak with Stripes in Nar Shaddaa, Dark Jedi Enclave and ask about friend

Speak with **Stripes** in **Nar Shaddaa, Dark Jedi Enclave** and ask about **friend**.

> **Expected journal update — index 15:** After joking around with Stripes' I have agreed to hunt down the Jedi Knight Jaa Vene for Stripes, for revenge of his master's death.

### 4. Speak with Stripes in Nar Shaddaa, Dark Jedi Enclave and ask about friend

Speak with **Stripes** in **Nar Shaddaa, Dark Jedi Enclave** and ask about **friend**.

> **Expected journal update — index 20:** Jaa Vene is dead, and Stripes could not be happier with me as his companion.

### 5. Speak with Stripes in Nar Shaddaa, Dark Jedi Enclave and ask about friend — Finished

Speak with **Stripes** in **Nar Shaddaa, Dark Jedi Enclave** and ask about **friend**.

> **Expected journal update — index 25:** I have convinced Stripes to let go of his anger, and reflect on the Force.

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 25**:

> I have convinced Stripes to let go of his anger, and reflect on the Force.

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Stripes** (`SW_Stripes2`) — `Nar Shaddaa, Dark Jedi Enclave`

**Locations implicated by actor/object placement or explicit travel:**
- **Kashyyk, Jaa Vene's Hut**
- **Nar Shaddaa, Dark Jedi Enclave**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_StripesRevenge`
**Generated category:** Side Quests
**Journal entries:** 6

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | I have agreed to hunt down the Jedi Knight Jaa Vene for Stripes, for revenge of his master's death. | 1 |
| 10 | — | I have attempted to sway Stripes' obsession with revenge. | 1 |
| 15 | — | After joking around with Stripes' I have agreed to hunt down the Jedi Knight Jaa Vene for Stripes, for revenge of his master's death. | 1 |
| 20 | — | Jaa Vene is dead, and Stripes could not be happier with me as his companion. | 2 |
| 25 | Finished | I have convinced Stripes to let go of his anger, and reflect on the Force. | 1 |

### Record-level trigger map

### Stage 5

I have agreed to hunt down the Jedi Knight Jaa Vene for Stripes, for revenge of his master's death.

**How this stage is set:**
- Dialogue INFO `777840141056710622` under topic **friend**; speaker Stripes (`SW_Stripes2`). locations: `Nar Shaddaa, Dark Jedi Enclave`. conditions: Function/Choice Equal 1; Journal `SW_StripesRevenge` Equal 0. response: “She will not be able to survive the both of us.”.

```text
Journal SW_StripesRevenge 5
StopSound "StripesFollow"
StopSound "StripesForce"
```

### Stage 10

I have attempted to sway Stripes' obsession with revenge.

**How this stage is set:**
- Dialogue INFO `64755172244824865` under topic **friend**; speaker Stripes (`SW_Stripes2`). locations: `Nar Shaddaa, Dark Jedi Enclave`. conditions: Function/Choice Equal 2; Journal `SW_StripesRevenge` Equal 0. response: “She must pay for what she did, my master is dead now, and no meditation will bring him back.”.

```text
StopSound "StripesZabrak"
Choice "And how many have we killed in the same, it is an inevitable end." 1 "I'm just messing with you Stripes, let's go kill this Jedi." 2
Journal SW_StripesRevenge 10
```

### Stage 15

After joking around with Stripes' I have agreed to hunt down the Jedi Knight Jaa Vene for Stripes, for revenge of his master's death.

**How this stage is set:**
- Dialogue INFO `686420441954119329` under topic **friend**; speaker Stripes (`SW_Stripes2`). locations: `Nar Shaddaa, Dark Jedi Enclave`. conditions: Function/Choice Equal 2; Journal `SW_StripesRevenge` Equal 10. response: “Haha, you dirty joker, let's put an end to the order's soldier.”.

```text
Journal SW_StripesRevenge 15
StopSound "StripesFollow"
StopSound "StripesForce"
```

### Stage 20

Jaa Vene is dead, and Stripes could not be happier with me as his companion.

**How this stage is set:**
- Dialogue INFO `1234731076115387743` under topic **friend**; speaker Stripes (`SW_Stripes2`). locations: `Nar Shaddaa, Dark Jedi Enclave`. conditions: Dead/DeadType `SW_JaaVene` GreaterEqual 1; Journal `SW_StripesRevenge` Equal 5. response: “My master's death has been avenged, and this Jedi Knight will hunt no more. Thank you my friend, you are a most true companion.”.

```text
Journal SW_StripesRevenge 20
StopSound "StripesFollow"
StopSound "StripesForce"
```
- Dialogue INFO `28023195672945825847` under topic **friend**; speaker Stripes (`SW_Stripes2`). locations: `Nar Shaddaa, Dark Jedi Enclave`. conditions: Dead/DeadType `SW_JaaVene` GreaterEqual 1; Journal `SW_StripesRevenge` Equal 15. response: “My master's death has been avenged, and this Jedi Knight will hunt no more. Thank you my friend, you are a most true companion.”.

```text
Journal SW_StripesRevenge 20
StopSound "StripesFollow"
StopSound "StripesForce"
```

### Stage 25 — Finished

I have convinced Stripes to let go of his anger, and reflect on the Force.

**How this stage is set:**
- Dialogue INFO `2299026641138892836` under topic **friend**; speaker Stripes (`SW_Stripes2`). locations: `Nar Shaddaa, Dark Jedi Enclave`. conditions: Function/Choice Equal 1; Journal `SW_StripesRevenge` Equal 10. response: “I see what you're saying. I suppose he made his enemies plenty, I will reflect on this, thank you.”.

```text
Journal SW_StripesRevenge 25
StopSound "StripesFollow"
StopSound "StripesForce"
```

### Related records and locations

**Dialogue speakers:**
- Stripes (`SW_Stripes2`) — `Nar Shaddaa, Dark Jedi Enclave`

**Scripts that read or write this journal:**
- `SW_VeneScript` — Npc Jaa Vene (`SW_JaaVene`); placed in `Kashyyk, Jaa Vene's Hut`

**Cells implicated by actor/object placement or explicit travel code:**
- `Kashyyk, Jaa Vene's Hut`
- `Nar Shaddaa, Dark Jedi Enclave`

<details><summary>Journal-state readers (1 code sites)</summary>

- Script `SW_VeneScript`. attached to Npc Jaa Vene (`SW_JaaVene`); placed in `Kashyyk, Jaa Vene's Hut`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: I have agreed to hunt down the Jedi Knight Jaa Vene for Stripes, for revenge of his master's death.
- [ ] Reach index `10`: I have attempted to sway Stripes' obsession with revenge.
- [ ] Reach index `15`: After joking around with Stripes' I have agreed to hunt down the Jedi Knight Jaa Vene for Stripes, for revenge…
- [ ] Reach index `20`: Jaa Vene is dead, and Stripes could not be happier with me as his companion.
- [ ] Reach index `25` (`Finished`): I have convinced Stripes to let go of his anger, and reflect on the Force.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_StripesRevenge`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
