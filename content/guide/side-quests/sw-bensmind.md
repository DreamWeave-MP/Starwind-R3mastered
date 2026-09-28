---
title: "Treasure of a Droid's Mind"
description: "Walkthrough and QA reference for Treasure of a Droid's Mind (SW_BensMind)."
weight: 108
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_BensMind"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_BensMind` |
| **Category** | Side Quests |
| **Journal entries** | 5 |
| **Completion branches** | No explicit Finished marker |
| **Starts by** | Speak with **B.E.N.** in **Manaan, Central**. |
| **Key locations** | Kashyyk, Boyle Research Facility, Manaan, Central |
| **Key characters** | B.E.N., Suspicious Cathar |

## Walkthrough

### 1. Speak with B.E.N. in Manaan, Central

Speak with **B.E.N.** in **Manaan, Central**.

> **Expected journal update — index 1:** I have met a droid in Manaan, Central that has lost his memory, if I find it I should return to the droid and see how or why this happened in the first place.

### 2. Speak with B.E.N. in Manaan, Central

Speak with **B.E.N.** in **Manaan, Central**.

> **Expected journal update — index 5:** I found the Cathar that was holding the key to Flint's treasure. He said it is guarded by a dangerous beast that he has seen with his own eyes. He doesn't know where Flint stored the creature and treasure, but he was told to remember this; You'll find me in the dune sea. But you'll need this note to unlock me. The Tw'ileks won't flee. Near the Japor Tree.

**Known item transfer:** 1 × **Treasure Clue 1** (`SW_BenMap`).

### 3. Speak with B.E.N. in Manaan, Central

Speak with **B.E.N.** in **Manaan, Central**.

> **Expected journal update — index 5:** I gave B.E.N. his memory back and he gave to me a clue to some treasure his master was chasing after.

**Known item transfer:** 1 × **Treasure Clue 1** (`SW_BenMap`).

### 4. Allow the scripted event handled by `SW_ReadBen` to complete

The records expose more than one way to reach this journal update:
- Allow the scripted event handled by `SW_ReadBen` to complete.
- Speak with **B.E.N.** in **Manaan, Central**.

> **Expected journal update — index 7:** The clue reads; I speak to no one in this shaded boil. I'm waiting for Flint's life to spoil. I have his key waiting for you to attain. Hidden within, my magnificent mane.

**Known item transfer:** 1 × **Treasure Clue 1** (`SW_BenMap`).

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 1 × **Treasure Clue 1** (`SW_BenMap`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **B.E.N.** (`SW_Ben`) — `Manaan, Central`
- **Suspicious Cathar** (`SW_BenCathar`) — `Kashyyk, Boyle Research Facility`

**Locations implicated by actor/object placement or explicit travel:**
- **Kashyyk, Boyle Research Facility**
- **Manaan, Central**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_BensMind`
**Generated category:** Side Quests
**Journal entries:** 5

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 1 | — | I have met a droid in Manaan, Central that has lost his memory, if I find it I should return to the droid and see how or why this happened in the first place. | 1 |
| 5 | — | I found the Cathar that was holding the key to Flint's treasure. He said it is guarded by a dangerous beast that he has seen with his own eyes. He doesn't know where Flint stored the creature and treasure, but he was told to remember this;
<br>You'll find me in the dune sea.
<br>But you'll need this note to unlock me.
<br>The Tw'ileks won't flee.
<br>Near the Japor Tree. | 1 |
| 5 | — | I gave B.E.N. his memory back and he gave to me a clue to some treasure his master was chasing after. | 1 |
| 7 | — | The clue reads;
<br>I speak to no one in this shaded boil.
<br>I'm waiting for Flint's life to spoil.
<br>I have his key waiting for you to attain.
<br>Hidden within, my magnificent mane. | 2 |

### Record-level trigger map

### Stage 1

I have met a droid in Manaan, Central that has lost his memory, if I find it I should return to the droid and see how or why this happened in the first place.

**How this stage is set:**
- Dialogue INFO `1434911786128557927` under topic **Greeting 7**; speaker B.E.N. (`SW_Ben`). locations: `Manaan, Central`. conditions: Journal `SW_BensMind` Equal 0. response: “Calculating, checking information, rechecking. I am sorry, but it seems I have lost, my mind. If you could find it that would be fantastic. But you see I can't, checking information, rechecking, I can't remember what happened to it.”.

```text
Journal SW_BensMind 1
```

### Stage 5

I found the Cathar that was holding the key to Flint's treasure. He said it is guarded by a dangerous beast that he has seen with his own eyes. He doesn't know where Flint stored the creature and treasure, but he was told to remember this;
You'll find me in the dune sea.
But you'll need this note to unlock me.
The Tw'ileks won't flee.
Near the Japor Tree.

**How this stage is set:**
- Dialogue INFO `2171670481806827080` under topic **Greeting 7**; speaker B.E.N. (`SW_Ben`). locations: `Manaan, Central`. conditions: Journal `SW_BensMind` Equal 1; Item/ItemType `SW_DroidMemory` GreaterEqual 1. response: “Scanning, Installing Memory.. Shutting Down for System Reboot.. My memory, thank you, stranger, I am B.E.N. Bio Extraction Navigator. I was designed to plan out extractions for criminal activities. Luckily my master was killed when we crashed into the ocean here on this planet. I don't have much to repay you with, but I do have this clue to a treasure. Take it, I wish I could give you more.”.

```text
player->removeitem "SW_DroidMemory", 1
Journal SW_BensMind 5
Journal SW_BensMind 7
player->additem "SW_BenMap", 1
```

### Stage 5

I gave B.E.N. his memory back and he gave to me a clue to some treasure his master was chasing after.

**How this stage is set:**
- Dialogue INFO `2171670481806827080` under topic **Greeting 7**; speaker B.E.N. (`SW_Ben`). locations: `Manaan, Central`. conditions: Journal `SW_BensMind` Equal 1; Item/ItemType `SW_DroidMemory` GreaterEqual 1. response: “Scanning, Installing Memory.. Shutting Down for System Reboot.. My memory, thank you, stranger, I am B.E.N. Bio Extraction Navigator. I was designed to plan out extractions for criminal activities. Luckily my master was killed when we crashed into the ocean here on this planet. I don't have much to repay you with, but I do have this clue to a treasure. Take it, I wish I could give you more.”.

```text
player->removeitem "SW_DroidMemory", 1
Journal SW_BensMind 5
Journal SW_BensMind 7
player->additem "SW_BenMap", 1
```

### Stage 7

The clue reads;
I speak to no one in this shaded boil.
I'm waiting for Flint's life to spoil.
I have his key waiting for you to attain.
Hidden within, my magnificent mane.

**How this stage is set:**
- Script `SW_ReadBen`.

```text
If ( OnActivate == 1 )
        If ( DoOnce == 0 )
               Journal SW_BensMind 7
            activate
            Set DoOnce to 1
```
- Dialogue INFO `2171670481806827080` under topic **Greeting 7**; speaker B.E.N. (`SW_Ben`). locations: `Manaan, Central`. conditions: Journal `SW_BensMind` Equal 1; Item/ItemType `SW_DroidMemory` GreaterEqual 1. response: “Scanning, Installing Memory.. Shutting Down for System Reboot.. My memory, thank you, stranger, I am B.E.N. Bio Extraction Navigator. I was designed to plan out extractions for criminal activities. Luckily my master was killed when we crashed into the ocean here on this planet. I don't have much to repay you with, but I do have this clue to a treasure. Take it, I wish I could give you more.”.

```text
player->removeitem "SW_DroidMemory", 1
Journal SW_BensMind 5
Journal SW_BensMind 7
player->additem "SW_BenMap", 1
```

### Related records and locations

**Dialogue speakers:**
- B.E.N. (`SW_Ben`) — `Manaan, Central`
- Suspicious Cathar (`SW_BenCathar`) — `Kashyyk, Boyle Research Facility`

**Scripts that read or write this journal:**
- `SW_ReadBen`

**Items referenced by related script/result code:**
- Treasure Key (`SW_BenKey`)
- Treasure Clue 1 (`SW_BenMap`)
- Treasure Clue 1 (`SW_BenMap2`)
- Droid's Memory (`SW_DroidMemory`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Kashyyk, Boyle Research Facility`
- `Manaan, Central`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `1` is obtainable.
- [ ] Reach index `1`: I have met a droid in Manaan, Central that has lost his memory, if I find it I should return to the droid and …
- [ ] Reach index `5`: I found the Cathar that was holding the key to Flint's treasure. He said it is guarded by a dangerous beast th…
- [ ] Reach index `5`: I gave B.E.N. his memory back and he gave to me a clue to some treasure his master was chasing after.
- [ ] Reach index `7`: The clue reads;
I speak to no one in this shaded boil.
I'm waiting for Flint's life to spoil.
I have his ke…
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_BensMind`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
