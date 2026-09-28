---
title: "A Test Of Strength"
description: "Walkthrough and QA reference for A Test Of Strength (SW_WookTest)."
weight: 11
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_WookTest"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_WookTest` |
| **Category** | Side Quests |
| **Journal entries** | 4 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Wookie Warrior** in **Kashyyk, Chokoon's Hut**. |
| **Key locations** | Kashyyk, Chokoon's Hut |
| **Key characters** | Wookie Warrior |

## Walkthrough

### 1. Speak with Wookie Warrior in Kashyyk, Chokoon's Hut

Speak with **Wookie Warrior** in **Kashyyk, Chokoon's Hut**.

> **Expected journal update — index 5:** Chokoon has challenged me to test if I am worthy of being in their village. I must beat him in combat.

### 2. Defeat Wookie Warrior in Kashyyk, Chokoon's Hut and allow its script to update the quest

Defeat **Wookie Warrior** in **Kashyyk, Chokoon's Hut** and allow its script to update the quest.

> **Expected journal update — index 10:** Chokoon has yielded, congratulating me on earning my place among his people.

### 3. Speak with Wookie Warrior in Kashyyk, Chokoon's Hut — Finished

Speak with **Wookie Warrior** in **Kashyyk, Chokoon's Hut**.

> **Expected journal update — index 15:** Chokoon has advised I can now return to him if I wish to trade for wookie weapons.

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 15**:

> Chokoon has advised I can now return to him if I wish to trade for wookie weapons.

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Wookie Warrior** (`SW_WookieChokoon`) — `Kashyyk, Chokoon's Hut`

**Locations implicated by actor/object placement or explicit travel:**
- **Kashyyk, Chokoon's Hut**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_WookTest`
**Generated category:** Side Quests
**Journal entries:** 4

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | Chokoon has challenged me to test if I am worthy of being in their village. I must beat him in combat. | 1 |
| 10 | — | Chokoon has yielded, congratulating me on earning my place among his people. | 1 |
| 15 | Finished | Chokoon has advised I can now return to him if I wish to trade for wookie weapons. | 1 |

### Record-level trigger map

### Stage 5

Chokoon has challenged me to test if I am worthy of being in their village. I must beat him in combat.

**How this stage is set:**
- Dialogue INFO `90092482952017791` under topic **Greeting 7**; speaker Wookie Warrior (`SW_WookieChokoon`). locations: `Kashyyk, Chokoon's Hut`. conditions: Journal `SW_WookTest` Equal 0. response: “This village is not for outsiders. You have entered the hut of Chokoon and must now prove your strength, if you can beat me in battle you will earn your right among my people.”.

```text
Journal SW_WookTest 5
StartCombat Player
goodbye
```

### Stage 10

Chokoon has yielded, congratulating me on earning my place among his people.

**How this stage is set:**
- Script `SW_ChokoonScript`. attached to Npc Wookie Warrior (`SW_WookieChokoon`); placed in `Kashyyk, Chokoon's Hut`.

```text
If ( GetHealth <= 200 )
        StopCombat
        Journal SW_WookTest 10
        ForceGreeting
    Endif
```

### Stage 15 — Finished

Chokoon has advised I can now return to him if I wish to trade for wookie weapons.

**How this stage is set:**
- Dialogue INFO `2821920182143116646` under topic **Greeting 7**; speaker Wookie Warrior (`SW_WookieChokoon`). locations: `Kashyyk, Chokoon's Hut`. conditions: Journal `SW_WookTest` Equal 10. response: “You have bested me. No more, outsider. You have earned your right among my people, speak to me whenever you wish to trade, and I will barter with you the weapons of our tribe.”.

```text
Journal SW_WookTest 15
SW_BasketWookieWeap->additem SW_WookieBlade 5
SW_BasketWookieWeap->additem SW_BlasterRifleWook 3
```

### Related records and locations

**Dialogue speakers:**
- Wookie Warrior (`SW_WookieChokoon`) — `Kashyyk, Chokoon's Hut`

**Scripts that read or write this journal:**
- `SW_ChokoonScript` — Npc Wookie Warrior (`SW_WookieChokoon`); placed in `Kashyyk, Chokoon's Hut`

**Items referenced by related script/result code:**
- Bowcaster (`SW_BlasterRifleWook`)
- Wookie Warblade (`SW_WookieBlade`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Kashyyk, Chokoon's Hut`

<details><summary>Journal-state readers (1 code sites)</summary>

- Script `SW_ChokoonScript`. attached to Npc Wookie Warrior (`SW_WookieChokoon`); placed in `Kashyyk, Chokoon's Hut`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: Chokoon has challenged me to test if I am worthy of being in their village. I must beat him in combat.
- [ ] Reach index `10`: Chokoon has yielded, congratulating me on earning my place among his people.
- [ ] Reach index `15` (`Finished`): Chokoon has advised I can now return to him if I wish to trade for wookie weapons.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_WookTest`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
