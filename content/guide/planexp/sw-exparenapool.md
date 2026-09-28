---
title: "Testing Waters"
description: "Walkthrough and QA reference for Testing Waters (SW_ExpArenaPool)."
weight: 10
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_ExpArenaPool"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_ExpArenaPool` |
| **Category** | Expansion / PlanExp |
| **Journal entries** | 19 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Rehrohmanta** in **Manaan, Inner City** and ask about **arena pool**. |
| **Key locations** | Manaan, Inner City |
| **Key characters** | Rehrohmanta |

## Walkthrough

### 1. Speak with Rehrohmanta in Manaan, Inner City and ask about arena pool

Speak with **Rehrohmanta** in **Manaan, Inner City** and ask about **arena pool**.

> **Expected journal update — index 3:** I have learned of an underwater arena inside of Manaan's inner city. I can choose to compete if I feel I am ready for increasingly challenging underwater combat.

### 2. Speak with Rehrohmanta in Manaan, Inner City and ask about arena pool

Speak with **Rehrohmanta** in **Manaan, Inner City** and ask about **arena pool**.

> **Expected journal update — index 5:** I have accepted my first underwater challenge and must face a firaxian shark.

### 3. Use Metal Ladder in Manaan, Inner City

Use **Metal Ladder** in **Manaan, Inner City**.

> **Expected journal update — index 7:** The firaxian shark is dead and I should speak with the arena pool coordinator.

### 4. Speak with Rehrohmanta in Manaan, Inner City and ask about arena pool

Speak with **Rehrohmanta** in **Manaan, Inner City** and ask about **arena pool**.

> **Expected journal update — index 10:** I've been paid for defeating the firaxian shark and should return if I wish to continue with the challenges.

**Known item transfer:** 1000 × **Credits** (`gold_001`).

### 5. Speak with Rehrohmanta in Manaan, Inner City and ask about arena pool

Speak with **Rehrohmanta** in **Manaan, Inner City** and ask about **arena pool**.

> **Expected journal update — index 13:** My next challenge is two firaxian sharks at one time. This will be more difficult.

### 6. Reach Manaan, Inner City and allow the scripted event to complete

Reach **Manaan, Inner City** and allow the scripted event to complete.

> **Expected journal update — index 15:** Both firaxian sharks have been defeated and I should return to the arena pool coordinator.

### 7. Speak with Rehrohmanta in Manaan, Inner City and ask about arena pool

Speak with **Rehrohmanta** in **Manaan, Inner City** and ask about **arena pool**.

> **Expected journal update — index 17:** I've been paid for defeating the two firaxian sharks and should return if I wish to continue with the challenges.

**Known item transfer:** 2000 × **Credits** (`gold_001`).

### 8. Speak with Rehrohmanta in Manaan, Inner City and ask about arena pool

Speak with **Rehrohmanta** in **Manaan, Inner City** and ask about **arena pool**.

> **Expected journal update — index 20:** My next challenge is to defeat a whale nettle.

### 9. Reach Manaan, Inner City and allow the scripted event to complete

Reach **Manaan, Inner City** and allow the scripted event to complete.

> **Expected journal update — index 23:** The whale nettle is defeated and I should return to the arena pool coordinator.

### 10. Speak with Rehrohmanta in Manaan, Inner City and ask about arena pool

Speak with **Rehrohmanta** in **Manaan, Inner City** and ask about **arena pool**.

> **Expected journal update — index 25:** I've been paid for defeating the whale nettle and should return if I wish to continue with the challenges.

**Known item transfer:** 2000 × **Credits** (`gold_001`).

### 11. Speak with Rehrohmanta in Manaan, Inner City and ask about arena pool

Speak with **Rehrohmanta** in **Manaan, Inner City** and ask about **arena pool**.

> **Expected journal update — index 27:** My next challenge is to defeat two nauthers at one time.

### 12. Reach Manaan, Inner City and allow the scripted event to complete

Reach **Manaan, Inner City** and allow the scripted event to complete.

> **Expected journal update — index 30:** The nauthers were challenging but I defeated them both. I should return to the arena pool coordinator.

### 13. Speak with Rehrohmanta in Manaan, Inner City and ask about arena pool

Speak with **Rehrohmanta** in **Manaan, Inner City** and ask about **arena pool**.

> **Expected journal update — index 33:** I've been paid for defeating the nauthers and should return if I wish to continue with the challenges.

**Known item transfer:** 3000 × **Credits** (`gold_001`).

### 14. Speak with Rehrohmanta in Manaan, Inner City and ask about arena pool

Speak with **Rehrohmanta** in **Manaan, Inner City** and ask about **arena pool**.

> **Expected journal update — index 35:** The arena pool has been stocked with a firaxian hunter shark. This will be dangerous.

### 15. Reach Manaan, Inner City and allow the scripted event to complete

Reach **Manaan, Inner City** and allow the scripted event to complete.

> **Expected journal update — index 37:** The firaxian hunter shark is defeated and I should return to the arena pool coordinator.

### 16. Speak with Rehrohmanta in Manaan, Inner City and ask about arena pool

Speak with **Rehrohmanta** in **Manaan, Inner City** and ask about **arena pool**.

> **Expected journal update — index 40:** I've been paid for defeating the firaxian hunter shark and should return if I wish to continue with the challenges.

**Known item transfer:** 4000 × **Credits** (`gold_001`).

### 17. Speak with Rehrohmanta in Manaan, Inner City and ask about arena pool

Speak with **Rehrohmanta** in **Manaan, Inner City** and ask about **arena pool**.

> **Expected journal update — index 43:** I have been challenged to slay a selkath who is being sentenced to death for embracing violence and commiting murder on numerous worlds, including now Manaan. The selkath mandalorian's name is Bretara Rugheer, and is extremely dangerous.

### 18. Find Bretara Rugheer in Manaan, Inner City and complete the encounter — Finished

Find **Bretara Rugheer** in **Manaan, Inner City** and complete the encounter.

> **Expected journal update — index 45:** I have been rewarded for slaying Bretara, and the arena pool coordinator has no further challenges for me at this time.

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 45**:

> I have been rewarded for slaying Bretara, and the arena pool coordinator has no further challenges for me at this time.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 1000 × **Credits** (`gold_001`)
- 2000 × **Credits** (`gold_001`)
- 3000 × **Credits** (`gold_001`)
- 4000 × **Credits** (`gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Rehrohmanta** (`SW_Exp1ArenaSelk`) — `Manaan, Inner City`

**Locations implicated by actor/object placement or explicit travel:**
- **Manaan, Inner City**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_ExpArenaPool`
**Generated category:** Expansion / PlanExp
**Journal entries:** 19

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 3 | — | I have learned of an underwater arena inside of Manaan's inner city. I can choose to compete if I feel I am ready for increasingly challenging underwater combat. | 1 |
| 5 | — | I have accepted my first underwater challenge and must face a firaxian shark. | 1 |
| 7 | — | The firaxian shark is dead and I should speak with the arena pool coordinator. | 1 |
| 10 | — | I've been paid for defeating the firaxian shark and should return if I wish to continue with the challenges. | 1 |
| 13 | — | My next challenge is two firaxian sharks at one time. This will be more difficult. | 1 |
| 15 | — | Both firaxian sharks have been defeated and I should return to the arena pool coordinator. | 1 |
| 17 | — | I've been paid for defeating the two firaxian sharks and should return if I wish to continue with the challenges. | 1 |
| 20 | — | My next challenge is to defeat a whale nettle. | 1 |
| 23 | — | The whale nettle is defeated and I should return to the arena pool coordinator. | 1 |
| 25 | — | I've been paid for defeating the whale nettle and should return if I wish to continue with the challenges. | 1 |
| 27 | — | My next challenge is to defeat two nauthers at one time. | 1 |
| 30 | — | The nauthers were challenging but I defeated them both. I should return to the arena pool coordinator. | 1 |
| 33 | — | I've been paid for defeating the nauthers and should return if I wish to continue with the challenges. | 1 |
| 35 | — | The arena pool has been stocked with a firaxian hunter shark. This will be dangerous. | 1 |
| 37 | — | The firaxian hunter shark is defeated and I should return to the arena pool coordinator. | 1 |
| 40 | — | I've been paid for defeating the firaxian hunter shark and should return if I wish to continue with the challenges. | 1 |
| 43 | — | I have been challenged to slay a selkath who is being sentenced to death for embracing violence and commiting murder on numerous worlds, including now Manaan. The selkath mandalorian's name is Bretara Rugheer, and is extremely dangerous. | 1 |
| 45 | Finished | I have been rewarded for slaying Bretara, and the arena pool coordinator has no further challenges for me at this time. | 1 |

### Record-level trigger map

### Stage 3

I have learned of an underwater arena inside of Manaan's inner city. I can choose to compete if I feel I am ready for increasingly challenging underwater combat.

**How this stage is set:**
- Dialogue INFO `1624542211007023480` under topic **arena pool**; speaker Rehrohmanta (`SW_Exp1ArenaSelk`). locations: `Manaan, Inner City`. conditions: Journal `SW_ExpArenaPool` Equal 0. response: “The arena pool is before you, contained for punishment and for challenging. I can set up a challenge for you in the arena pool, simply talk to me again about this if you wish to do so. Be warned, though, you will not get the liberty of knowing what you face prior to entering the arena pool, and once inside you cannot leave until whatever is stocked has been defeated.”.

```text
Journal SW_ExpArenaPool 3
```

### Stage 5

I have accepted my first underwater challenge and must face a firaxian shark.

**How this stage is set:**
- Dialogue INFO `10738277761233718420` under topic **arena pool**; speaker Rehrohmanta (`SW_Exp1ArenaSelk`). locations: `Manaan, Inner City`. conditions: Journal `SW_ExpArenaPool` Equal 3. response: “Good luck, challenger.”.

```text
Journal SW_ExpArenaPool 5
SW_Exp1Shark1->Enable
SW_Exp1Ladder->Disable
```

### Stage 7

The firaxian shark is dead and I should speak with the arena pool coordinator.

**How this stage is set:**
- Script `SW_ExpFight1`. attached to Door Metal Ladder (`SW_Exp1Ladder2`); placed in `Manaan, Inner City`; Creature Firaxian Shark (`SW_Exp1Shark1`); placed in `Manaan, Inner City`.

```text
SW_Exp1Ladder->Enable
    SW_Exp1Ladder2->Enable
    Journal SW_ExpArenaPool 7
endif
```

### Stage 10

I've been paid for defeating the firaxian shark and should return if I wish to continue with the challenges.

**How this stage is set:**
- Dialogue INFO `23229319051247026157` under topic **arena pool**; speaker Rehrohmanta (`SW_Exp1ArenaSelk`). locations: `Manaan, Inner City`. conditions: Journal `SW_ExpArenaPool` Equal 7. response: “You have slayed the noble firaxian shark, but what is luck, or are you a warrior of the water? Speak to me again about this if you wish to continue.”.

```text
Journal SW_ExpArenaPool 10
player->additem gold_001 1000
```

### Stage 13

My next challenge is two firaxian sharks at one time. This will be more difficult.

**How this stage is set:**
- Dialogue INFO `12251804558828035` under topic **arena pool**; speaker Rehrohmanta (`SW_Exp1ArenaSelk`). locations: `Manaan, Inner City`. conditions: Journal `SW_ExpArenaPool` Equal 10. response: “Good luck, challenger.”.

```text
SW_Exp1Shark2A->Enable
SW_Exp1Shark2B->Enable
Journal SW_ExpArenaPool 13
SW_Exp1Ladder->Disable
SW_Exp1Ladder2->Disable
```

### Stage 15

Both firaxian sharks have been defeated and I should return to the arena pool coordinator.

**How this stage is set:**
- Script `SW_ExpFight2`. attached to Creature Firaxian Shark (`SW_Exp1Shark2A`); placed in `Manaan, Inner City`; Creature Firaxian Shark (`SW_Exp1Shark2B`); placed in `Manaan, Inner City`.

```text
SW_Exp1Ladder->Enable
    SW_Exp1Ladder2->Enable
    Journal SW_ExpArenaPool 15
endif
```

### Stage 17

I've been paid for defeating the two firaxian sharks and should return if I wish to continue with the challenges.

**How this stage is set:**
- Dialogue INFO `2092853511325489` under topic **arena pool**; speaker Rehrohmanta (`SW_Exp1ArenaSelk`). locations: `Manaan, Inner City`. conditions: Journal `SW_ExpArenaPool` Equal 15. response: “You are one with the ocean, and understand its food chain. Speak to me again if you wish to continue.”.

```text
player->additem gold_001 2000
Journal SW_ExpArenaPool 17
```

### Stage 20

My next challenge is to defeat a whale nettle.

**How this stage is set:**
- Dialogue INFO `228154107308989728` under topic **arena pool**; speaker Rehrohmanta (`SW_Exp1ArenaSelk`). locations: `Manaan, Inner City`. conditions: Journal `SW_ExpArenaPool` Equal 17. response: “Good luck, challenger.”.

```text
SW_ExpWhale->Enable
Journal SW_ExpArenaPool 20
SW_Exp1Ladder->Disable
SW_Exp1Ladder2->Disable
```

### Stage 23

The whale nettle is defeated and I should return to the arena pool coordinator.

**How this stage is set:**
- Script `SW_ExpFight3`. attached to Creature Whale Nettle (`SW_ExpWhale`); placed in `Manaan, Inner City`.

```text
SW_Exp1Ladder->Enable
    SW_Exp1Ladder2->Enable
    Journal SW_ExpArenaPool 23
endif
```

### Stage 25

I've been paid for defeating the whale nettle and should return if I wish to continue with the challenges.

**How this stage is set:**
- Dialogue INFO `1537057312991122586` under topic **arena pool**; speaker Rehrohmanta (`SW_Exp1ArenaSelk`). locations: `Manaan, Inner City`. conditions: Journal `SW_ExpArenaPool` Equal 23. response: “The giant has fallen. Speak to me again about this if you wish to continue.”.

```text
player->additem gold_001 2000
Journal SW_ExpArenaPool 25
```

### Stage 27

My next challenge is to defeat two nauthers at one time.

**How this stage is set:**
- Dialogue INFO `2191885557416882` under topic **arena pool**; speaker Rehrohmanta (`SW_Exp1ArenaSelk`). locations: `Manaan, Inner City`. conditions: Journal `SW_ExpArenaPool` Equal 25. response: “Good luck, challenger.”.

```text
SW_ExpNauther->Enable
SW_ExpNautherB->Enable
Journal SW_ExpArenaPool 27
SW_Exp1Ladder->Disable
SW_Exp1Ladder2->Disable
```

### Stage 30

The nauthers were challenging but I defeated them both. I should return to the arena pool coordinator.

**How this stage is set:**
- Script `SW_ExpFight4`. attached to Creature Nauther (`SW_ExpNauther`); placed in `Manaan, Inner City`; Creature Nauther (`SW_ExpNautherB`); placed in `Manaan, Inner City`.

```text
SW_Exp1Ladder->Enable
    SW_Exp1Ladder2->Enable
    Journal SW_ExpArenaPool 30
endif
```

### Stage 33

I've been paid for defeating the nauthers and should return if I wish to continue with the challenges.

**How this stage is set:**
- Dialogue INFO `156041690635623938` under topic **arena pool**; speaker Rehrohmanta (`SW_Exp1ArenaSelk`). locations: `Manaan, Inner City`. conditions: Journal `SW_ExpArenaPool` Equal 30. response: “I'm actually not even sure how those got in there, it was supposed to be a school of Volantes. No matter, speak to me again if you wish to continue.”.

```text
player->additem gold_001 3000
Journal SW_ExpArenaPool 33
```

### Stage 35

The arena pool has been stocked with a firaxian hunter shark. This will be dangerous.

**How this stage is set:**
- Dialogue INFO `11185117702210421253` under topic **arena pool**; speaker Rehrohmanta (`SW_Exp1ArenaSelk`). locations: `Manaan, Inner City`. conditions: Journal `SW_ExpArenaPool` Equal 33. response: “Good luck, challenger.”.

```text
SW_ExpFirHunter->Enable
Journal SW_ExpArenaPool 35
SW_Exp1Ladder->Disable
SW_Exp1Ladder2->Disable
```

### Stage 37

The firaxian hunter shark is defeated and I should return to the arena pool coordinator.

**How this stage is set:**
- Script `SW_ExpFight5`. attached to Creature Firaxian Hunter Shark (`SW_ExpFirHunter`); placed in `Manaan, Inner City`.

```text
SW_Exp1Ladder->Enable
    SW_Exp1Ladder2->Enable
    Journal SW_ExpArenaPool 37
endif
```

### Stage 40

I've been paid for defeating the firaxian hunter shark and should return if I wish to continue with the challenges.

**How this stage is set:**
- Dialogue INFO `201755336145226726` under topic **arena pool**; speaker Rehrohmanta (`SW_Exp1ArenaSelk`). locations: `Manaan, Inner City`. conditions: Journal `SW_ExpArenaPool` Equal 37. response: “You are truly a predator of the deep. Speak to me again about this if you wish to continue.”.

```text
player->additem gold_001 4000
Journal SW_ExpArenaPool 40
```

### Stage 43

I have been challenged to slay a selkath who is being sentenced to death for embracing violence and commiting murder on numerous worlds, including now Manaan. The selkath mandalorian's name is Bretara Rugheer, and is extremely dangerous.

**How this stage is set:**
- Dialogue INFO `528019319955021801` under topic **arena pool**; speaker Rehrohmanta (`SW_Exp1ArenaSelk`). locations: `Manaan, Inner City`. conditions: Journal `SW_ExpArenaPool` Equal 40. response: “The next challenge you may know. It is a murderous offender by the name of Bretara Rugheer. A selkath who has taken up with mandalorians, ravaging worlds and murdering many lives. This path of destruction has been brought to Manaan, and it will end here. Good luck, challenger.”.

```text
SW_Exp1ArenaChamp->Enable
Journal SW_ExpArenaPool 43
SW_Exp1Ladder->Disable
SW_Exp1Ladder2->Disable
```

### Stage 45 — Finished

I have been rewarded for slaying Bretara, and the arena pool coordinator has no further challenges for me at this time.

**How this stage is set:**
- Script `SW_ExpFight6`. attached to Npc Bretara Rugheer (`SW_Exp1ArenaChamp`); placed in `Manaan, Inner City`.

```text
SW_Exp1Ladder->Enable
    SW_Exp1Ladder2->Enable
    Journal SW_ExpArenaPool 45
endif
```

### Related records and locations

**Dialogue speakers:**
- Rehrohmanta (`SW_Exp1ArenaSelk`) — `Manaan, Inner City`

**Scripts that read or write this journal:**
- `SW_ExpFight1` — Door Metal Ladder (`SW_Exp1Ladder2`); placed in `Manaan, Inner City`; Creature Firaxian Shark (`SW_Exp1Shark1`); placed in `Manaan, Inner City`
- `SW_ExpFight2` — Creature Firaxian Shark (`SW_Exp1Shark2A`); placed in `Manaan, Inner City`; Creature Firaxian Shark (`SW_Exp1Shark2B`); placed in `Manaan, Inner City`
- `SW_ExpFight3` — Creature Whale Nettle (`SW_ExpWhale`); placed in `Manaan, Inner City`
- `SW_ExpFight4` — Creature Nauther (`SW_ExpNauther`); placed in `Manaan, Inner City`; Creature Nauther (`SW_ExpNautherB`); placed in `Manaan, Inner City`
- `SW_ExpFight5` — Creature Firaxian Hunter Shark (`SW_ExpFirHunter`); placed in `Manaan, Inner City`
- `SW_ExpFight6` — Npc Bretara Rugheer (`SW_Exp1ArenaChamp`); placed in `Manaan, Inner City`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Manaan, Inner City`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `3` is obtainable.
- [ ] Reach index `3`: I have learned of an underwater arena inside of Manaan's inner city. I can choose to compete if I feel I am re…
- [ ] Reach index `5`: I have accepted my first underwater challenge and must face a firaxian shark.
- [ ] Reach index `7`: The firaxian shark is dead and I should speak with the arena pool coordinator.
- [ ] Reach index `10`: I've been paid for defeating the firaxian shark and should return if I wish to continue with the challenges.
- [ ] Reach index `13`: My next challenge is two firaxian sharks at one time. This will be more difficult.
- [ ] Reach index `15`: Both firaxian sharks have been defeated and I should return to the arena pool coordinator.
- [ ] Reach index `17`: I've been paid for defeating the two firaxian sharks and should return if I wish to continue with the challeng…
- [ ] Reach index `20`: My next challenge is to defeat a whale nettle.
- [ ] Reach index `23`: The whale nettle is defeated and I should return to the arena pool coordinator.
- [ ] Reach index `25`: I've been paid for defeating the whale nettle and should return if I wish to continue with the challenges.
- [ ] Reach index `27`: My next challenge is to defeat two nauthers at one time.
- [ ] Reach index `30`: The nauthers were challenging but I defeated them both. I should return to the arena pool coordinator.
- [ ] Reach index `33`: I've been paid for defeating the nauthers and should return if I wish to continue with the challenges.
- [ ] Reach index `35`: The arena pool has been stocked with a firaxian hunter shark. This will be dangerous.
- [ ] Reach index `37`: The firaxian hunter shark is defeated and I should return to the arena pool coordinator.
- [ ] Reach index `40`: I've been paid for defeating the firaxian hunter shark and should return if I wish to continue with the challe…
- [ ] Reach index `43`: I have been challenged to slay a selkath who is being sentenced to death for embracing violence and commiting …
- [ ] Reach index `45` (`Finished`): I have been rewarded for slaying Bretara, and the arena pool coordinator has no further challenges for me at t…
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_ExpArenaPool`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
