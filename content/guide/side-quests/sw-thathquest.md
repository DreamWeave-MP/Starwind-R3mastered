---
title: "Czerka's Sand Dispute"
description: "Walkthrough and QA reference for Czerka's Sand Dispute (SW_ThathQuest)."
weight: 30
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_ThathQuest"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_ThathQuest` |
| **Category** | Side Quests |
| **Journal entries** | 7 |
| **Completion branches** | 4 |
| **Starts by** | Speak with **Thath Krott** in **Tatooine**. |
| **Key locations** | Tatooine, Tatooine, Sandriver |
| **Key characters** | Thath Krott, A'Ga Qrit |

## Walkthrough

### 1. Speak with Thath Krott in Tatooine

Speak with **Thath Krott** in **Tatooine**.

> **Expected journal update — index 5:** I've met a Czerka militant named Thath Krott. It seems he's drawn some angry Siddah Ca villagers outside the village and aims to fight them. Should I get involved?

### 2. Reach journal stage 10

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 10:** I've met an angry Siddah Ca villager named A'Ga Qrit. He seems to be on the defensive from some Czerka militants, but is ready to fight. What is Czerka's business here?

### 3. Speak with A'Ga Qrit in Tatooine and ask about Czerka fools — Finished

The records expose more than one way to reach this journal update:
- Speak with **A'Ga Qrit** in **Tatooine** and ask about **Czerka fools**.
- Speak with **Thath Krott** in **Tatooine** and ask about **what they did**.

> **Expected journal update — index 15:** I've agreed to help Czerka enact revenge on the Siddah Ca villagers. We fought them, and destroyed them to the last man. Hopefully the girl they murdered in cold blood can rest easy now that justice has been served.

**Outcome:** this journal entry is marked as a finished branch.

### 4. Speak with A'Ga Qrit in Tatooine and ask about Czerka fools — Finished

The records expose more than one way to reach this journal update:
- Speak with **A'Ga Qrit** in **Tatooine** and ask about **Czerka fools**.
- Speak with **Thath Krott** in **Tatooine** and ask about **what they did**.

> **Expected journal update — index 20:** Czerka lost their patience and attacked the Siddah Ca villagers. Despite their superior gear and training, I stood up and defended the villagers, at the cost of the lives of the Czerka militants.

**Outcome:** this journal entry is marked as a finished branch.

### 5. Speak with Thath Krott in Tatooine and ask about what they did — Finished

Speak with **Thath Krott** in **Tatooine** and ask about **what they did**.

> **Expected journal update — index 25:** I managed to peacefully resolve the situation between the Czerka militants and the Siddah Ca villagers. Hopefully this will result in less confrontations between the two in the future.

**Outcome:** this journal entry is marked as a finished branch.

### 6. Defeat A'Ga Qrit in Tatooine and allow its script to update the quest — Finished

The records expose more than one way to reach this journal update:
- Defeat **A'Ga Qrit** in **Tatooine** and allow its script to update the quest.
- Defeat **Thath Krott** in **Tatooine** and allow its script to update the quest.

> **Expected journal update — index 30:** One of the group leaders died. The confrontation thus sparked into a full blown fight that I couldn't stop. Hopefully the repercussions of this aren't far and wide.

**Outcome:** this journal entry is marked as a finished branch.

{% callout(kind="warning", title="Playtest flag") %}
1 journal stage on this page lack a literal setter in the current static scan.
{% end %}

## Endings & branches

The journal has **4 explicit finished entries**. Treat them as branch coverage targets during playtesting:

- **Index 15:** I've agreed to help Czerka enact revenge on the Siddah Ca villagers. We fought them, and destroyed them to the last man. Hopefully the girl they murdered in cold blood can rest easy now that justice has been served.
- **Index 20:** Czerka lost their patience and attacked the Siddah Ca villagers. Despite their superior gear and training, I stood up and defended the villagers, at the cost of the lives of the Czerka militants.
- **Index 25:** I managed to peacefully resolve the situation between the Czerka militants and the Siddah Ca villagers. Hopefully this will result in less confrontations between the two in the future.
- **Index 30:** One of the group leaders died. The confrontation thus sparked into a full blown fight that I couldn't stop. Hopefully the repercussions of this aren't far and wide.

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Thath Krott** (`TatooineCzerkaMilitantL`) — `Tatooine`
- **A'Ga Qrit** (`TatooineSiddahCaLeader`) — `Tatooine`

**Locations implicated by actor/object placement or explicit travel:**
- **Tatooine**
- **Tatooine, Sandriver**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_ThathQuest`
**Generated category:** Side Quests
**Journal entries:** 7

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | I've met a Czerka militant named Thath Krott. It seems he's drawn some angry Siddah Ca villagers outside the village and aims to fight them. Should I get involved? | 1 |
| 10 | — | I've met an angry Siddah Ca villager named A'Ga Qrit. He seems to be on the defensive from some Czerka militants, but is ready to fight. What is Czerka's business here? | 0 |
| 15 | Finished | I've agreed to help Czerka enact revenge on the Siddah Ca villagers. We fought them, and destroyed them to the last man. Hopefully the girl they murdered in cold blood can rest easy now that justice has been served. | 2 |
| 20 | Finished | Czerka lost their patience and attacked the Siddah Ca villagers. Despite their superior gear and training, I stood up and defended the villagers, at the cost of the lives of the Czerka militants. | 2 |
| 25 | Finished | I managed to peacefully resolve the situation between the Czerka militants and the Siddah Ca villagers. Hopefully this will result in less confrontations between the two in the future. | 1 |
| 30 | Finished | One of the group leaders died. The confrontation thus sparked into a full blown fight that I couldn't stop. Hopefully the repercussions of this aren't far and wide. | 2 |

### Record-level trigger map

### Stage 5

I've met a Czerka militant named Thath Krott. It seems he's drawn some angry Siddah Ca villagers outside the village and aims to fight them. Should I get involved?

**How this stage is set:**
- Dialogue INFO `110727093151129554` under topic **Greeting 5**; speaker Thath Krott (`TatooineCzerkaMilitantL`). locations: `Tatooine`. conditions: Journal `SW_ThathQuest` GreaterEqual 0; Journal `SW_ThathQuest` LessEqual 10. response: “Damn Sand People don't want to own up to what they did! The bastards are gonna pay for their crimes, one way or another! What?! Do you actually have a care for these Tusken bastards?! If so, you'll join them!”.

```text
Journal, SW_ThathQuest, 5
```

### Stage 10

I've met an angry Siddah Ca villager named A'Ga Qrit. He seems to be on the defensive from some Czerka militants, but is ready to fight. What is Czerka's business here?

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 15 — Finished

I've agreed to help Czerka enact revenge on the Siddah Ca villagers. We fought them, and destroyed them to the last man. Hopefully the girl they murdered in cold blood can rest easy now that justice has been served.

**How this stage is set:**
- Dialogue INFO `19641100971222729554` under topic **Czerka fools**; speaker A'Ga Qrit (`TatooineSiddahCaLeader`). locations: `Tatooine`. conditions: Function/Choice Equal 5. response: “Herr herr herr!

 (Then so be it. We have no more need of words, now we have a need of weapons! To the death!)”.

```text
TatooineCzerkaMilitantL->AIFollow Player 0, 0, 0, 0
player->modreputation 1
Journal, SW_ThathQuest, 15
Goodbye
Stopsound "SW_AgaGreet1"
```
- Dialogue INFO `2839635393160820530` under topic **what they did**; speaker Thath Krott (`TatooineCzerkaMilitantL`). locations: `Tatooine`. conditions: Function/Choice Equal 1. response: “That's exactly what I plan to do. Enough talking! Time to die, you Tusken bastards!”.

```text
Goodbye
Journal, SW_ThathQuest, 15
startcombat TatooineSiddahCaLeader
TatooineSiddahCaLeader->setfight 100
```

### Stage 20 — Finished

Czerka lost their patience and attacked the Siddah Ca villagers. Despite their superior gear and training, I stood up and defended the villagers, at the cost of the lives of the Czerka militants.

**How this stage is set:**
- Dialogue INFO `3188569221692323036` under topic **Czerka fools**; speaker A'Ga Qrit (`TatooineSiddahCaLeader`). locations: `Tatooine`. conditions: Function/Choice Equal 7. response: “Herr herr herr herr!

 (If left no other option, then we must fight! Kill the Czerka fools!)”.

```text
player->modreputation 1
AiFollow Player 0, 0, 0, 0
Journal, SW_ThathQuest, 20
Stopsound "SW_AgaGreet1"
Stopsound "SW_AgaGreet2"
```
- Dialogue INFO `9346263993037814846` under topic **what they did**; speaker Thath Krott (`TatooineCzerkaMilitantL`). locations: `Tatooine`. conditions: Function/Choice Equal 5. response: “Really? What are you gonna do about it then? Huh?! Sit there and die, that's what! Come on, men! Enough talking! Now we fight! Kill them! Kill them all!”.

```text
TatooineSiddahCaLeader->AiFollow Player 0, 0, 0, 0
player->modreputation 1
journal, SW_ThathQuest, 20
Goodbye
```

### Stage 25 — Finished

I managed to peacefully resolve the situation between the Czerka militants and the Siddah Ca villagers. Hopefully this will result in less confrontations between the two in the future.

**How this stage is set:**
- Dialogue INFO `278968647193594396` under topic **what they did**; speaker Thath Krott (`TatooineCzerkaMilitantL`). locations: `Tatooine`. conditions: Function/Choice Equal 8. response: “I.... suppose you're right. As much as I hate to admit it, I'm not angry at these people really. I'm angry at the ones who did it. I was just so blinded and angry that I was willing to punish people who did nothing for the actions of others.... I'll go back to Sandriver and tell them these people are innocent. Come good or bad, they'll just have to find the real murderers... Shit... I'm gonna be in so much trouble...”.

```text
Journal, SW_ThathQuest, 25
player->modreputation 1
Goodbye
```

### Stage 30 — Finished

One of the group leaders died. The confrontation thus sparked into a full blown fight that I couldn't stop. Hopefully the repercussions of this aren't far and wide.

**How this stage is set:**
- Script `AgaQritScript`. attached to Npc A'Ga Qrit (`TatooineSiddahCaLeader`); placed in `Tatooine`.

```text
if (OnDeath == 1)
           if (GetJournalIndex SW_ThathQuest <= 10)
              Journal, SW_ThathQuest, 30
            "TatooineCzerkaMilitantL"->startcombat TatooineSiddahCaMilitan
        Elseif (GetJournalIndex SW_ThathQuest == 15)
```

```text
"TatooineCzerkaMilitantL"->startcombat TatooineSiddahCaMilitan
        Elseif (GetJournalIndex SW_ThathQuest == 15)
                   Journal, SW_ThathQuest, 35
                "TatooineCzerkaMilitantL"->Aitravel 0, 0, 0
                endif
```
- Script `ThathScript`. attached to Npc Thath Krott (`TatooineCzerkaMilitantL`); placed in `Tatooine`.

```text
if ( OnDeath == 1 )
           if (GetJournalIndex SW_ThathQuest <= 10)
              Journal, SW_ThathQuest, 30
            "TatooineSiddahCaMilitan"->startcombat "TatooineCzerkaMilitant1"
        Elseif (GetJournalIndex SW_ThathQuest == 20)
```

### Related records and locations

**Dialogue speakers:**
- Thath Krott (`TatooineCzerkaMilitantL`) — `Tatooine`
- A'Ga Qrit (`TatooineSiddahCaLeader`) — `Tatooine`

**Scripts that read or write this journal:**
- `AgaQritScript` — Npc A'Ga Qrit (`TatooineSiddahCaLeader`); placed in `Tatooine`
- `ThathRelocateScript` — Activator Thath Dummy Relocater (`ThathRelocateBanner`); placed in `Tatooine, Sandriver`
- `ThathScript` — Npc Thath Krott (`TatooineCzerkaMilitantL`); placed in `Tatooine`

**Cells implicated by actor/object placement or explicit travel code:**
- `Tatooine`
- `Tatooine, Sandriver`

<details><summary>Other directly addressed object IDs in related code</summary>

- Thath Krott (`TatooineCzerkaMilitantL`)
- A'Ga Qrit (`TatooineSiddahCaLeader`)
- Siddah Ca Warrior (`TatooineSiddahCaMilitan`)

</details>

<details><summary>Journal-state readers (3 code sites)</summary>

- Script `AgaQritScript`. attached to Npc A'Ga Qrit (`TatooineSiddahCaLeader`); placed in `Tatooine`.
- Script `ThathRelocateScript`. attached to Activator Thath Dummy Relocater (`ThathRelocateBanner`); placed in `Tatooine, Sandriver`.
- Script `ThathScript`. attached to Npc Thath Krott (`TatooineCzerkaMilitantL`); placed in `Tatooine`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: I've met a Czerka militant named Thath Krott. It seems he's drawn some angry Siddah Ca villagers outside the v…
- [ ] Reach index `10`: I've met an angry Siddah Ca villager named A'Ga Qrit. He seems to be on the defensive from some Czerka militan…
- [ ] Reach index `15` (`Finished`): I've agreed to help Czerka enact revenge on the Siddah Ca villagers. We fought them, and destroyed them to the…
- [ ] Reach index `20` (`Finished`): Czerka lost their patience and attacked the Siddah Ca villagers. Despite their superior gear and training, I s…
- [ ] Reach index `25` (`Finished`): I managed to peacefully resolve the situation between the Czerka militants and the Siddah Ca villagers. Hopefu…
- [ ] Reach index `30` (`Finished`): One of the group leaders died. The confrontation thus sparked into a full blown fight that I couldn't stop. Ho…
- [ ] Branch coverage: this journal has **4 different `Finished` entries**; test each reachable completion branch.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_ThathQuest`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
