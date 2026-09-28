---
title: "The Dantooine Hermit"
description: "Walkthrough and QA reference for The Dantooine Hermit (SW_KagridJourn)."
weight: 85
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_KagridJourn"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_KagridJourn` |
| **Category** | Side Quests |
| **Journal entries** | 9 |
| **Completion branches** | 2 |
| **Starts by** | Speak with **Kagrid** in **Dantooine, Hunting Grounds**. |
| **Key locations** | Dantooine, Hunting Grounds, Dantooine, Kagrid's Hut |
| **Key characters** | Kagrid |

## Walkthrough

### 1. Speak with Kagrid in Dantooine, Hunting Grounds

Speak with **Kagrid** in **Dantooine, Hunting Grounds**.

> **Expected journal update — index 5:** I met a man named Kagrid on Dantooine who wants to teach someone his ways in taming creatures. He has told me that if I would like to learn then I should proceed into his house and use the item he gave me to tame the creature in the first room, and then return the creature to him.

**Known item transfer:** 1 × **Dipped Stick** (`SW_TameStaff`).

### 2. Reach Dantooine, Kagrid's Hut and allow the scripted event to complete

Reach **Dantooine, Kagrid's Hut** and allow the scripted event to complete.

> **Expected journal update — index 7:** The first creature is outside.

### 3. Speak with Kagrid in Dantooine, Hunting Grounds

Speak with **Kagrid** in **Dantooine, Hunting Grounds**.

> **Expected journal update — index 10:** I returned the first creature and Kagrid has told me that the next door will be unlocked, and that I should proceed to the 2nd creature.

### 4. Reach Dantooine, Kagrid's Hut and allow the scripted event to complete

Reach **Dantooine, Kagrid's Hut** and allow the scripted event to complete.

> **Expected journal update — index 13:** The second creature is outside.

### 5. Speak with Kagrid in Dantooine, Hunting Grounds

Speak with **Kagrid** in **Dantooine, Hunting Grounds**.

> **Expected journal update — index 15:** I have returned the second creature and Kagrid has told me that the final door is unlocked, and that the last creature is available to bring to him. If I bring this creature to him I will have earned the right for him to teach me his ways in taming creatures without the use of items.

### 6. Reach Dantooine, Kagrid's Hut and allow the scripted event to complete

Reach **Dantooine, Kagrid's Hut** and allow the scripted event to complete.

> **Expected journal update — index 17:** The last creature is outside.

### 7. Reach Dantooine, Kagrid's Hut and allow the scripted event to complete — Finished

Reach **Dantooine, Kagrid's Hut** and allow the scripted event to complete.

> **Expected journal update — index 20:** One of the creatures has died and Kagrid says I am not worthy of learning his ways.

**Outcome:** this journal entry is marked as a finished branch.

### 8. Speak with Kagrid in Dantooine, Hunting Grounds — Finished

Speak with **Kagrid** in **Dantooine, Hunting Grounds**.

> **Expected journal update — index 25:** I have returned the final creature and Kagrid has taught me his ways in taming creatures, I now have the ability to do so without items.

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has **2 explicit finished entries**. Treat them as branch coverage targets during playtesting:

- **Index 20:** One of the creatures has died and Kagrid says I am not worthy of learning his ways.
- **Index 25:** I have returned the final creature and Kagrid has taught me his ways in taming creatures, I now have the ability to do so without items.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 1 × **Dipped Stick** (`SW_TameStaff`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Kagrid** (`SW_KagridDant`) — `Dantooine, Hunting Grounds`

**Locations implicated by actor/object placement or explicit travel:**
- **Dantooine, Hunting Grounds**
- **Dantooine, Kagrid's Hut**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_KagridJourn`
**Generated category:** Side Quests
**Journal entries:** 9

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | I met a man named Kagrid on Dantooine who wants to teach someone his ways in taming creatures. He has told me that if I would like to learn then I should proceed into his house and use the item he gave me to tame the creature in the first room, and then return the creature to him. | 1 |
| 7 | — | The first creature is outside. | 1 |
| 10 | — | I returned the first creature and Kagrid has told me that the next door will be unlocked, and that I should proceed to the 2nd creature. | 1 |
| 13 | — | The second creature is outside. | 1 |
| 15 | — | I have returned the second creature and Kagrid has told me that the final door is unlocked, and that the last creature is available to bring to him. If I bring this creature to him I will have earned the right for him to teach me his ways in taming creatures without the use of items. | 1 |
| 17 | — | The last creature is outside. | 1 |
| 20 | Finished | One of the creatures has died and Kagrid says I am not worthy of learning his ways. | 3 |
| 25 | Finished | I have returned the final creature and Kagrid has taught me his ways in taming creatures, I now have the ability to do so without items. | 1 |

### Record-level trigger map

### Stage 5

I met a man named Kagrid on Dantooine who wants to teach someone his ways in taming creatures. He has told me that if I would like to learn then I should proceed into his house and use the item he gave me to tame the creature in the first room, and then return the creature to him.

**How this stage is set:**
- Dialogue INFO `20796169771580711502` under topic **Greeting 7**; speaker Kagrid (`SW_KagridDant`). locations: `Dantooine, Hunting Grounds`. conditions: Journal `SW_KagridJourn` Equal 0. response: “Hello there stranger. I haven't seen another person in quite some time. Look, I'd like to make you a deal. You see I'm too damn old, I'll be leaving this world before much longer and I have a set of skills I would like to pass on to another before I do. Befriending and understanding creatures is my life's work. If your interested I have some items here that will help you learn, take this stick, go into my home, and whack the first creature in the room. He should then follow you, bring him to me.”.

```text
Journal SW_KagridJourn 5
player->additem "SW_TameStaff", 1
"SW_KagridDoor1"->Unlock
```

### Stage 7

The first creature is outside.

**How this stage is set:**
- Script `SW_KagridCreature1`. attached to Creature Pet Wyyyschokk (`SW_KagridFriendly2`); placed in `Dantooine, Kagrid's Hut`.

```text
If ( "SW_KagridFriendly2"->GetDistance, "SW_KagridDant" <= 500 )
    "SW_KagridFriendly2"->SetFight 30
    Journal SW_KagridJourn 7
endif
```

```text
if ( OnDeath == 1 )
        Journal SW_KagridJourn 20
endif
```

### Stage 10

I returned the first creature and Kagrid has told me that the next door will be unlocked, and that I should proceed to the 2nd creature.

**How this stage is set:**
- Dialogue INFO `272448223750815198` under topic **Greeting 7**; speaker Kagrid (`SW_KagridDant`). locations: `Dantooine, Hunting Grounds`. conditions: Journal `SW_KagridJourn` Equal 7. response: “You did it! Hello there my beautiful little friend. Very well done, your a natural. The stick only helps to calm it, without a natural affinity for creatures he never would have followed you. The door to the next room in my hut is unlocked, bring me the second creature.”.

```text
Journal SW_KagridJourn 10
"SW_KagridDoor2"->Disable
```

### Stage 13

The second creature is outside.

**How this stage is set:**
- Script `SW_KagridCreature2`. attached to Creature Pet Kath Hound (`SW_KagridFriendly3`); placed in `Dantooine, Kagrid's Hut`; Creature Fluffy (`SW_KagridFriendly3Ob`); Creature Pet (`SW_KagridFriendly3Obsol`).

```text
If ( "SW_KagridFriendly3"->GetDistance, "SW_KagridDant" <= 500 )
    "SW_KagridFriendly3"->SetFight 30
    Journal SW_KagridJourn 13
endif
```

```text
if ( OnDeath == 1 )
        Journal SW_KagridJourn 20
endif
```

### Stage 15

I have returned the second creature and Kagrid has told me that the final door is unlocked, and that the last creature is available to bring to him. If I bring this creature to him I will have earned the right for him to teach me his ways in taming creatures without the use of items.

**How this stage is set:**
- Dialogue INFO `13701272522890328012` under topic **Greeting 7**; speaker Kagrid (`SW_KagridDant`). locations: `Dantooine, Hunting Grounds`. conditions: Journal `SW_KagridJourn` Equal 13. response: “Haha this is fantastic, I knew you had it in you. The last door will be unlocked when you enter, and the last creature ready for you to befriend. Bring her to me, and I will teach you skills that very few have in this galaxy.”.

```text
Journal SW_KagridJourn 15
"SW_KagridDoor3"->Disable
```

### Stage 17

The last creature is outside.

**How this stage is set:**
- Script `SW_KagridCreature3`. attached to Creature Buckbeak (`SW_KagridFriendly1`); placed in `Dantooine, Kagrid's Hut`.

```text
If ( "SW_KagridFriendly1"->GetDistance, "SW_KagridDant" <= 500 )
    "SW_KagridFriendly1"->SetFight 30
    Journal SW_KagridJourn 17
endif
```

```text
if ( OnDeath == 1 )
        Journal SW_KagridJourn 20
endif
```

### Stage 20 — Finished

One of the creatures has died and Kagrid says I am not worthy of learning his ways.

**How this stage is set:**
- Script `SW_KagridCreature1`. attached to Creature Pet Wyyyschokk (`SW_KagridFriendly2`); placed in `Dantooine, Kagrid's Hut`.

```text
If ( "SW_KagridFriendly2"->GetDistance, "SW_KagridDant" <= 500 )
    "SW_KagridFriendly2"->SetFight 30
    Journal SW_KagridJourn 7
endif
```

```text
if ( OnDeath == 1 )
        Journal SW_KagridJourn 20
endif
```
- Script `SW_KagridCreature2`. attached to Creature Pet Kath Hound (`SW_KagridFriendly3`); placed in `Dantooine, Kagrid's Hut`; Creature Fluffy (`SW_KagridFriendly3Ob`); Creature Pet (`SW_KagridFriendly3Obsol`).

```text
If ( "SW_KagridFriendly3"->GetDistance, "SW_KagridDant" <= 500 )
    "SW_KagridFriendly3"->SetFight 30
    Journal SW_KagridJourn 13
endif
```

```text
if ( OnDeath == 1 )
        Journal SW_KagridJourn 20
endif
```
- Script `SW_KagridCreature3`. attached to Creature Buckbeak (`SW_KagridFriendly1`); placed in `Dantooine, Kagrid's Hut`.

```text
If ( "SW_KagridFriendly1"->GetDistance, "SW_KagridDant" <= 500 )
    "SW_KagridFriendly1"->SetFight 30
    Journal SW_KagridJourn 17
endif
```

```text
if ( OnDeath == 1 )
        Journal SW_KagridJourn 20
endif
```

### Stage 25 — Finished

I have returned the final creature and Kagrid has taught me his ways in taming creatures, I now have the ability to do so without items.

**How this stage is set:**
- Dialogue INFO `2544129364215618729` under topic **Greeting 7**; speaker Kagrid (`SW_KagridDant`). locations: `Dantooine, Hunting Grounds`. conditions: Journal `SW_KagridJourn` Equal 17. response: “You've done it, you've brought all 3 to me. You've done so well. Come here, I will teach you the ways of commanding creatures.
 *You have gained new abilities*”.

```text
Journal SW_KagridJourn 25
player->removeitem, "SW_TameStaff", 1
player->addspell "SW_KagridCommand5"
```

### Related records and locations

**Dialogue speakers:**
- Kagrid (`SW_KagridDant`) — `Dantooine, Hunting Grounds`

**Scripts that read or write this journal:**
- `SW_KagridCreature1` — Creature Pet Wyyyschokk (`SW_KagridFriendly2`); placed in `Dantooine, Kagrid's Hut`
- `SW_KagridCreature2` — Creature Pet Kath Hound (`SW_KagridFriendly3`); placed in `Dantooine, Kagrid's Hut`; Creature Fluffy (`SW_KagridFriendly3Ob`); Creature Pet (`SW_KagridFriendly3Obsol`)
- `SW_KagridCreature3` — Creature Buckbeak (`SW_KagridFriendly1`); placed in `Dantooine, Kagrid's Hut`

**Items referenced by related script/result code:**
- Dipped Stick (`SW_TameStaff`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Dantooine, Hunting Grounds`
- `Dantooine, Kagrid's Hut`

<details><summary>Other directly addressed object IDs in related code</summary>

- Metal Door (`SW_KagridDoor1`)
- Metal Door (`SW_KagridDoor2`)
- Metal Door (`SW_KagridDoor3`)
- Buckbeak (`SW_KagridFriendly1`)
- Pet Wyyyschokk (`SW_KagridFriendly2`)
- Pet Kath Hound (`SW_KagridFriendly3`)

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: I met a man named Kagrid on Dantooine who wants to teach someone his ways in taming creatures. He has told me …
- [ ] Reach index `7`: The first creature is outside.
- [ ] Reach index `10`: I returned the first creature and Kagrid has told me that the next door will be unlocked, and that I should pr…
- [ ] Reach index `13`: The second creature is outside.
- [ ] Reach index `15`: I have returned the second creature and Kagrid has told me that the final door is unlocked, and that the last …
- [ ] Reach index `17`: The last creature is outside.
- [ ] Reach index `20` (`Finished`): One of the creatures has died and Kagrid says I am not worthy of learning his ways.
- [ ] Reach index `25` (`Finished`): I have returned the final creature and Kagrid has taught me his ways in taming creatures, I now have the abili…
- [ ] Branch coverage: this journal has **2 different `Finished` entries**; test each reachable completion branch.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_KagridJourn`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
