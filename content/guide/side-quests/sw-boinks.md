---
title: "Scoobly Snacks"
description: "Walkthrough and QA reference for Scoobly Snacks (SW_Boinks)."
weight: 68
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_Boinks"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_Boinks` |
| **Category** | Side Quests |
| **Journal entries** | 3 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Raggy Roo** in **Dantooine, Ballast**. |
| **Key locations** | Dantooine, Ballast |
| **Key characters** | Raggy Roo |

## Walkthrough

### 1. Speak with Raggy Roo in Dantooine, Ballast

Speak with **Raggy Roo** in **Dantooine, Ballast**.

> **Expected journal update — index 5:** I met an odd space crew named Scoobly and Raggy who are trying to get off planet, but first they need to find their... Scoobly Snacks? They said they must have dropped them in one of the lakes on their way in, which is a very odd circumstance.

### 2. Speak with Raggy Roo in Dantooine, Ballast and ask about Scoobly Snacks — Finished

Speak with **Raggy Roo** in **Dantooine, Ballast** and ask about **Scoobly Snacks**.

> **Expected journal update — index 10:** I brought Raggy and Scoobly their Scoobly Snacks and now they can get on their way. They didn't have anything to give as a reward but they said they would spread the word of our deed.

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 10**:

> I brought Raggy and Scoobly their Scoobly Snacks and now they can get on their way. They didn't have anything to give as a reward but they said they would spread the word of our deed.

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Raggy Roo** (`SW_ScoobRaggy`) — `Dantooine, Ballast`

**Locations implicated by actor/object placement or explicit travel:**
- **Dantooine, Ballast**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_Boinks`
**Generated category:** Side Quests
**Journal entries:** 3

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | I met an odd space crew named Scoobly and Raggy who are trying to get off planet, but first they need to find their... Scoobly Snacks? They said they must have dropped them in one of the lakes on their way in, which is a very odd circumstance. | 1 |
| 10 | Finished | I brought Raggy and Scoobly their Scoobly Snacks and now they can get on their way. They didn't have anything to give as a reward but they said they would spread the word of our deed. | 3 |

### Record-level trigger map

### Stage 5

I met an odd space crew named Scoobly and Raggy who are trying to get off planet, but first they need to find their... Scoobly Snacks? They said they must have dropped them in one of the lakes on their way in, which is a very odd circumstance.

**How this stage is set:**
- Dialogue INFO `7013158852886812665` under topic **Greeting 7**; speaker Raggy Roo (`SW_ScoobRaggy`). locations: `Dantooine, Ballast`. conditions: Journal `SW_Boinks` Equal 0. response: “Like Boinks! We've got to get out of here and meet up with our friends! But, we can't leave till we get our Scoobly Snacks! I think we dropped them in one of the lakes one our way in while we were, eh, you know, airing out the ship! Like, we need two of them though!”.

```text
AddTopic "Scoobly Snacks"
Journal SW_Boinks 5
PlaySound3d "RaggyGreet"
StopSound "RaggyGreet2"
```

### Stage 10 — Finished

I brought Raggy and Scoobly their Scoobly Snacks and now they can get on their way. They didn't have anything to give as a reward but they said they would spread the word of our deed.

**How this stage is set:**
- Dialogue INFO `508128734103011412` under topic **Scoobly Snacks**; speaker Raggy Roo (`SW_ScoobRaggy`). locations: `Dantooine, Ballast`. conditions: Journal `SW_Boinks` Equal 5; Item/ItemType `SW_ScoobSnack` GreaterEqual 3. response: “Like thanks friend! Now we can eat our Scoobly Snacks and get out of here! Say, we don't have anything to give you but we can spread the word of what you did for us, we know a lot of important people.”.

```text
Journal SW_Boinks 10
player->removeitem "SW_ScoobSnack", 3
MessageBox "Your reputation has increased, as well as your personality."
```
- Dialogue INFO `31841107983253518876` under topic **Scoobly Snacks**; speaker Raggy Roo (`SW_ScoobRaggy`). locations: `Dantooine, Ballast`. conditions: Journal `SW_Boinks` Equal 5; Item/ItemType `SW_ScoobSnack` GreaterEqual 2. response: “Like thanks friend! Now we can eat our Scoobly Snacks and get out of here! Say, we don't have anything to give you but we can spread the word of what you did for us, we know a lot of important people.”.

```text
Journal SW_Boinks 10
player->removeitem "SW_ScoobSnack", 2
MessageBox "Your reputation has increased, as well as your personality."
```
- Dialogue INFO `497228048834331639` under topic **Scoobly Snacks**; speaker Raggy Roo (`SW_ScoobRaggy`). locations: `Dantooine, Ballast`. conditions: Journal `SW_Boinks` Equal 5; Item/ItemType `SW_ScoobSnack` GreaterEqual 2. response: “Like thanks friend! Now we can eat our Scoobly Snacks and get out of here! Say, we don't have anything to give you but we can spread the word of what you did for us, we know a lot of important people.”.

```text
Journal SW_Boinks 10
player->removeitem "SW_ScoobSnack", 2
MessageBox "Your reputation has increased, as well as your personality."
```

### Related records and locations

**Dialogue speakers:**
- Raggy Roo (`SW_ScoobRaggy`) — `Dantooine, Ballast`

**Items referenced by related script/result code:**
- Scoobly Snack (`SW_ScoobSnack`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Dantooine, Ballast`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: I met an odd space crew named Scoobly and Raggy who are trying to get off planet, but first they need to find …
- [ ] Reach index `10` (`Finished`): I brought Raggy and Scoobly their Scoobly Snacks and now they can get on their way. They didn't have anything …
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_Boinks`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
