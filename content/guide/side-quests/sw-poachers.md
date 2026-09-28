---
title: "Ocean Poachers"
description: "Walkthrough and QA reference for Ocean Poachers (SW_Poachers)."
weight: 57
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_Poachers"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_Poachers` |
| **Category** | Side Quests |
| **Journal entries** | 4 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Selkath Ambassador** in **Manaan, Ignatious' Reef** and ask about **poachers**. |
| **Key locations** | Manaan, Ignatious' Reef, Manaan, Melchior's Reef |
| **Key characters** | Selkath Ambassador |

## Walkthrough

### 1. Speak with Selkath Ambassador in Manaan, Ignatious' Reef and ask about poachers

Speak with **Selkath Ambassador** in **Manaan, Ignatious' Reef** and ask about **poachers**.

> **Expected journal update — index 5:** I have been asked by a Selkath ambassador to rid Ignatious Reef of Czerka poachers. I should bring to him 6 Czerka Badges to prove that I have rid the area of them.

### 2. Speak with Selkath Ambassador in Manaan, Ignatious' Reef and ask about poachers

Speak with **Selkath Ambassador** in **Manaan, Ignatious' Reef** and ask about **poachers**.

> **Expected journal update — index 10:** I have returned the badges to the ambassador and gained his favor.

### 3. Speak with Selkath Ambassador in Manaan, Ignatious' Reef and ask about Kintik Dwomutket — Finished

Speak with **Selkath Ambassador** in **Manaan, Ignatious' Reef** and ask about **Kintik Dwomutket**.

> **Expected journal update — index 15:** The ambassador translated for me the coordinates to the Sith Laboratory on Korriban. I should see about the soldiers taking the key and try to get transport arranged to Korriban.

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 15**:

> The ambassador translated for me the coordinates to the Sith Laboratory on Korriban. I should see about the soldiers taking the key and try to get transport arranged to Korriban.

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Selkath Ambassador** (`SW_SelkathAmbassador`) — `Manaan, Ignatious' Reef`, `Manaan, Melchior's Reef`

**Locations implicated by actor/object placement or explicit travel:**
- **Manaan, Ignatious' Reef**
- **Manaan, Melchior's Reef**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_Poachers`
**Generated category:** Side Quests
**Journal entries:** 4

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | I have been asked by a Selkath ambassador to rid Ignatious Reef of Czerka poachers. I should bring to him 6 Czerka Badges to prove that I have rid the area of them. | 1 |
| 10 | — | I have returned the badges to the ambassador and gained his favor. | 1 |
| 15 | Finished | The ambassador translated for me the coordinates to the Sith Laboratory on Korriban. I should see about the soldiers taking the key and try to get transport arranged to Korriban. | 2 |

### Record-level trigger map

### Stage 5

I have been asked by a Selkath ambassador to rid Ignatious Reef of Czerka poachers. I should bring to him 6 Czerka Badges to prove that I have rid the area of them.

**How this stage is set:**
- Dialogue INFO `27883051315589593` under topic **poachers**; speaker Selkath Ambassador (`SW_SelkathAmbassador`). locations: `Manaan, Ignatious' Reef`, `Manaan, Melchior's Reef`. conditions: Journal `SW_Poachers` Equal 0. response: “We have identified a group of poachers in Ignatious Reef as Czerka Corporation hunters, the corporation has recently been banned from Manaan for such crimes, among others, and these humans must be dealt with. Bring me 6 of their badges and you will be doing the Selkath a great favor.”.

```text
Journal "SW_Poachers" 5
```

### Stage 10

I have returned the badges to the ambassador and gained his favor.

**How this stage is set:**
- Dialogue INFO `12793126441174130658` under topic **poachers**; speaker Selkath Ambassador (`SW_SelkathAmbassador`). locations: `Manaan, Ignatious' Reef`, `Manaan, Melchior's Reef`. conditions: Journal `SW_Poachers` Equal 5; Item/ItemType `SW_CzerkaKeycard` GreaterEqual 6. response: “The badges, I assume that means you've taken care of the poachers? Very well, you have gained much favor with the Selkath, what can I do for you?”.

```text
Journal "SW_Poachers" 10
player->removeitem "SW_CzerkaKeycard" 6
player->modReputation 1
```

### Stage 15 — Finished

The ambassador translated for me the coordinates to the Sith Laboratory on Korriban. I should see about the soldiers taking the key and try to get transport arranged to Korriban.

**How this stage is set:**
- Dialogue INFO `171769220799020825` under topic **Kintik Dwomutket**; speaker Selkath Ambassador (`SW_SelkathAmbassador`). locations: `Manaan, Ignatious' Reef`, `Manaan, Melchior's Reef`. conditions: Journal `SW_Poachers` Equal 15. response: “They say they were entrusted with it hundreds of years ago, and the story has been passed down verbally. They told me of soldiers who recently came down, and protected them from poachers as well before we arrived. In exchange for their service they gave them a key to such a place, but were unable to tell them where they needed to go. These are the coordinates of their location, on the planet Korriban. Good luck offworlder!”.

```text
Journal SW_Poachers 15
```
- Dialogue INFO `56829539207031150` under topic **Kintik Dwomutket**; speaker Selkath Ambassador (`SW_SelkathAmbassador`). locations: `Manaan, Ignatious' Reef`, `Manaan, Melchior's Reef`. conditions: Journal `SW_Poachers` Equal 10. response: “I have spoken to the natives of this area about the topic you have brought to me. They say they were entrusted with it hundreds of years ago, and the story has been passed down verbally. They told me of soldiers who recently came down, and protected them from poachers as well before we arrived. In exchange for their service they gave them a key to such a place, but were unable to tell them where they needed to go. These are the coordinates of their location, on the planet Korriban. Good luck offworlder!”.

```text
Journal SW_Poachers 15
```

### Related records and locations

**Dialogue speakers:**
- Selkath Ambassador (`SW_SelkathAmbassador`) — `Manaan, Ignatious' Reef`, `Manaan, Melchior's Reef`

**Items referenced by related script/result code:**
- Czerka Badge (`SW_CzerkaKeycard`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Manaan, Ignatious' Reef`
- `Manaan, Melchior's Reef`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: I have been asked by a Selkath ambassador to rid Ignatious Reef of Czerka poachers. I should bring to him 6 Cz…
- [ ] Reach index `10`: I have returned the badges to the ambassador and gained his favor.
- [ ] Reach index `15` (`Finished`): The ambassador translated for me the coordinates to the Sith Laboratory on Korriban. I should see about the so…
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_Poachers`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
