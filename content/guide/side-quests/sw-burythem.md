---
title: "Burial Rites"
description: "Walkthrough and QA reference for Burial Rites (SW_BuryThem)."
weight: 20
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_BuryThem"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_BuryThem` |
| **Category** | Side Quests |
| **Journal entries** | 4 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Saul** in **Dantooine, Ballast** and ask about **burials**. |
| **Key locations** | Dantooine, Ballast, Dantooine, Dantari Wilds |
| **Key characters** | Saul |

## Walkthrough

### 1. Speak with Saul in Dantooine, Ballast and ask about burials

Speak with **Saul** in **Dantooine, Ballast** and ask about **burials**.

> **Expected journal update — index 5:** I spoke with Saul outside of Ballast. He needs assistance due to the dangers of the Dantooine wilderness lately with burying some of his friends. He would like me to carry them to the burial site in the Dantari Wilds.

### 2. Reach Dantooine, Dantari Wilds and allow the scripted event to complete

The records expose more than one way to reach this journal update:
- Reach **Dantooine, Dantari Wilds** and allow the scripted event to complete.
- Speak with **Saul** in **Dantooine, Ballast**.

> **Expected journal update — index 10:** The bodies of Alec, Misael, and Rhys have been buried. I should return to Saul to let him know the burial rites have been completed.

### 3. Speak with Saul in Dantooine, Ballast and ask about burials — Finished

Speak with **Saul** in **Dantooine, Ballast** and ask about **burials**.

> **Expected journal update — index 15:** Saul was grateful for my assistance with burying his fellow farmers. In return he told me that there was a hidden jedi temple in a cave that can be found in the hunting grounds on Dantooine.

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 15**:

> Saul was grateful for my assistance with burying his fellow farmers. In return he told me that there was a hidden jedi temple in a cave that can be found in the hunting grounds on Dantooine.

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Saul** (`SW_HumanFarmerBuryGiver`) — `Dantooine, Ballast`

**Locations implicated by actor/object placement or explicit travel:**
- **Dantooine, Ballast**
- **Dantooine, Dantari Wilds**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_BuryThem`
**Generated category:** Side Quests
**Journal entries:** 4

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | I spoke with Saul outside of Ballast. He needs assistance due to the dangers of the Dantooine wilderness lately with burying some of his friends. He would like me to carry them to the burial site in the Dantari Wilds. | 1 |
| 10 | — | The bodies of Alec, Misael, and Rhys have been buried. I should return to Saul to let him know the burial rites have been completed. | 4 |
| 15 | Finished | Saul was grateful for my assistance with burying his fellow farmers. In return he told me that there was a hidden jedi temple in a cave that can be found in the hunting grounds on Dantooine. | 1 |

### Record-level trigger map

### Stage 5

I spoke with Saul outside of Ballast. He needs assistance due to the dangers of the Dantooine wilderness lately with burying some of his friends. He would like me to carry them to the burial site in the Dantari Wilds.

**How this stage is set:**
- Dialogue INFO `12868326252192916235` under topic **burials**; speaker Saul (`SW_HumanFarmerBuryGiver`). locations: `Dantooine, Ballast`. conditions: Function/Choice Equal 1. response: “Thank you, stranger. We have all the material we need here, it's custom for the one performing the burying ritual to wrap the bodies, as you will be setting them to rest. When you enter the Dantari Wilds, you'll find the burial site at the far end of the region from the Dantari stronghold.”.

```text
Journal SW_BuryThem 5
```

### Stage 10

The bodies of Alec, Misael, and Rhys have been buried. I should return to Saul to let him know the burial rites have been completed.

**How this stage is set:**
- Script `SW_GraveScript1`. attached to Activator Grave Stick (`SW_GraveStick1`); placed in `Dantooine, Dantari Wilds`.

```text
If ( SW_Grave3->Enabled ==1 )
            If ( DoGrave == 0 )
                Journal SW_BuryThem 10
                Set DoGrave to 1
            Endif
```
- Script `SW_GraveScript2`. attached to Activator Grave Stick (`SW_GraveStick2`); placed in `Dantooine, Dantari Wilds`.

```text
If ( SW_Grave3->Enabled ==1 )
            If ( DoGrave == 0 )
                Journal SW_BuryThem 10
                Set DoGrave to 1
            Endif
```
- Script `SW_GraveScript3`. attached to Activator Grave Stick (`SW_GraveStick3`); placed in `Dantooine, Dantari Wilds`.

```text
If ( SW_Grave3->Enabled ==1 )
            If ( DoGrave == 0 )
                Journal SW_BuryThem 10
                Set DoGrave to 1
            Endif
```
- Dialogue INFO `202223109423412426` under topic **Greeting 7**; speaker Saul (`SW_HumanFarmerBuryGiver`). locations: `Dantooine, Ballast`. conditions: Journal `SW_BuryAlec` Equal 10; Journal `SW_BuryMisael` Equal 10; Journal `SW_BuryRhys` Equal 10; Journal `SW_BuryThem` NotEqual 10. response: “It's one tragedy after another here on Dantooine. Working for the Lucienelle's is slavery is what it is, and I help Danir Tal'Othas with taking care of those who live here the best I can.”.

```text
Journal SW_BuryThem 10
```

### Stage 15 — Finished

Saul was grateful for my assistance with burying his fellow farmers. In return he told me that there was a hidden jedi temple in a cave that can be found in the hunting grounds on Dantooine.

**How this stage is set:**
- Dialogue INFO `20601198163573893` under topic **burials**; speaker Saul (`SW_HumanFarmerBuryGiver`). locations: `Dantooine, Ballast`. conditions: Journal `SW_BuryThem` Equal 10. response: “They've been put to rest then? We don't have much to give, we don't really gain anything from work here, other than the bare necessities. I do know something that may interest an adventurer like yourself though. There is a cave in the estate's Hunting Grounds. Inside that cave is rumored to be a secret passage to an old Jedi Temple. The people here aren't much for gossip, so there must be some manner of merit to the rumor.”.

```text
Journal SW_BuryThem 15
```

### Related records and locations

**Dialogue speakers:**
- Saul (`SW_HumanFarmerBuryGiver`) — `Dantooine, Ballast`

**Scripts that read or write this journal:**
- `SW_GraveScript1` — Activator Grave Stick (`SW_GraveStick1`); placed in `Dantooine, Dantari Wilds`
- `SW_GraveScript2` — Activator Grave Stick (`SW_GraveStick2`); placed in `Dantooine, Dantari Wilds`
- `SW_GraveScript3` — Activator Grave Stick (`SW_GraveStick3`); placed in `Dantooine, Dantari Wilds`
- `SW_WrapTheBody1` — Npc Alec (`SW_HumanFarmerBury1`); placed in `Dantooine, Ballast`
- `SW_WrapTheBody2` — Npc Misael (`SW_HumanFarmerBury2`); placed in `Dantooine, Ballast`
- `SW_WrapTheBody3` — Npc Rhys (`SW_HumanFarmerBury3`); placed in `Dantooine, Ballast`

**Items referenced by related script/result code:**
- Body Bag (`SW_BodyBag`)
- Body Bag (`SW_BodyBag2`)
- Body Bag (`SW_BodyBag3`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Dantooine, Ballast`
- `Dantooine, Dantari Wilds`

<details><summary>Journal-state readers (3 code sites)</summary>

- Script `SW_WrapTheBody1`. attached to Npc Alec (`SW_HumanFarmerBury1`); placed in `Dantooine, Ballast`.
- Script `SW_WrapTheBody2`. attached to Npc Misael (`SW_HumanFarmerBury2`); placed in `Dantooine, Ballast`.
- Script `SW_WrapTheBody3`. attached to Npc Rhys (`SW_HumanFarmerBury3`); placed in `Dantooine, Ballast`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: I spoke with Saul outside of Ballast. He needs assistance due to the dangers of the Dantooine wilderness latel…
- [ ] Reach index `10`: The bodies of Alec, Misael, and Rhys have been buried. I should return to Saul to let him know the burial rite…
- [ ] Reach index `15` (`Finished`): Saul was grateful for my assistance with burying his fellow farmers. In return he told me that there was a hid…
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_BuryThem`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
