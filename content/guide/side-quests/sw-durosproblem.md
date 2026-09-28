---
title: "A Duros Problem"
description: "Walkthrough and QA reference for A Duros Problem (SW_DurosProblem)."
weight: 2
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_DurosProblem"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_DurosProblem` |
| **Category** | Side Quests |
| **Journal entries** | 15 |
| **Completion branches** | 3 |
| **Starts by** | Speak with **Isael Mountain** in **Tatooine, Sandriver** and ask about **Duros gang**. |
| **Key locations** | Tatooine, Carl Terro's Droid Shop, Tatooine, Cecil's Blasters and Shields, Tatooine, Medical Bay, Tatooine, Sandriver |
| **Key characters** | Rooard Perrin, Isael Mountain |

## Walkthrough

### 1. Speak with Isael Mountain in Tatooine, Sandriver and ask about Duros gang

The records expose more than one way to reach this journal update:
- Speak with **Isael Mountain** in **Tatooine, Sandriver** and ask about **Duros gang**.
- Speak with **Isael Mountain** in **Tatooine, Sandriver** and ask about **complex situation**.

> **Expected journal update — index 1:** Isael has told me he is having a problem with the Duros, who have been harassing him for quite some time now. If I want to look into it they are supposedly at the entrance to Sandriver.

### 2. Speak with Rooard Perrin in Tatooine, Sandriver and ask about Duros gang

Speak with **Rooard Perrin** in **Tatooine, Sandriver** and ask about **Duros gang**.

> **Expected journal update — index 2:** The Duros, Rooard, who seems to be the leader of the gang has informed me that they are going to continue to harass him until he decides to sell his home and move elsewhere, as they want that hut for themselves. I should see what I can make of this with Isael

### 3. Speak with Isael Mountain in Tatooine, Sandriver and ask about Duros gang

Speak with **Isael Mountain** in **Tatooine, Sandriver** and ask about **Duros gang**.

> **Expected journal update — index 3:** Isael was distraught when I relayed the information from Rooard but now I have to figure out what to do with him.

### 4. Reach journal stage 5

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 5:** Decisions, decisions...

### 5. Speak with Isael Mountain in Tatooine, Sandriver and ask about Duros gang

Speak with **Isael Mountain** in **Tatooine, Sandriver** and ask about **Duros gang**.

> **Expected journal update — index 10:** I have convinced Isael to move elsewhere, although he was not pleased with my results. I should return to Rooard for a reward.

### 6. Reach journal stage 12

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 12:** Decisions, decisions...

### 7. Speak with Rooard Perrin in Tatooine, Sandriver and ask about Duros gang — Finished

Speak with **Rooard Perrin** in **Tatooine, Sandriver** and ask about **Duros gang**.

> **Expected journal update — index 15:** Rooard has rewarded me with 100 credits, another job well done.

**Known item transfer:** 100 × **Credits** (`gold_001`).

**Outcome:** this journal entry is marked as a finished branch.

### 8. Reach journal stage 18

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 18:** Decisions, decisions...

### 9. Speak with Isael Mountain in Tatooine, Sandriver and ask about Duros gang

Speak with **Isael Mountain** in **Tatooine, Sandriver** and ask about **Duros gang**.

> **Expected journal update — index 20:** I have told Isael that I will help him with his Duros problem, although he protested saying it may end ugly.

### 10. Speak with Rooard Perrin in Tatooine, Sandriver and ask about Duros gang

Speak with **Rooard Perrin** in **Tatooine, Sandriver** and ask about **Duros gang**.

> **Expected journal update — index 22:** The Duros told me that there is no other way, as the Czerka Corporation won't sell them any buildings in Sandriver, and the desert is too dangerous for them to start their lives here in. They attacked me just as our conversation ended and I was forced to fight. I should return to Isael

### 11. Speak with Rooard Perrin in Tatooine, Sandriver and ask about Duros gang

Speak with **Rooard Perrin** in **Tatooine, Sandriver** and ask about **Duros gang**.

> **Expected journal update — index 24:** Decisions, decisions...

### 12. Speak with Isael Mountain in Tatooine, Sandriver and ask about Duros gang

Speak with **Isael Mountain** in **Tatooine, Sandriver** and ask about **Duros gang**.

> **Expected journal update — index 30:** I should return to Isael for a reward.

### 13. Speak with Isael Mountain in Tatooine, Sandriver and ask about Duros gang — Finished

Speak with **Isael Mountain** in **Tatooine, Sandriver** and ask about **Duros gang**.

> **Expected journal update — index 32:** Isael has thanked me greatly for not asking for a reward and said that I am just what Sandriver needs. He told me he would put in a good word with all the merchants in town, and that he is especially good friends with Dr. Guril, he also told me if there are any Gizka left in his house I am still more than willing to take them and do with them as I please.

**Known item transfer:** 150 × **Credits** (`gold_001`).

**Outcome:** this journal entry is marked as a finished branch.

### 14. Speak with Isael Mountain in Tatooine, Sandriver and ask about Duros gang — Finished

Speak with **Isael Mountain** in **Tatooine, Sandriver** and ask about **Duros gang**.

> **Expected journal update — index 34:** Isael has thanked me greatly for not asking for a reward and said that I am just what Sandriver needs. He told me he would put in a good word with all the merchants in town, and that he is especially good friends with Dr. Guril, he also told me if there are any Gizka left in his house I am still more than willing to take them and do with them as I please.

**Outcome:** this journal entry is marked as a finished branch.

> **Playtest flag:** 3 journal stages on this page lack a literal setter in the current static scan.

## Endings & branches

The journal has **3 explicit finished entries**. Treat them as branch coverage targets during playtesting:

- **Index 15:** Rooard has rewarded me with 100 credits, another job well done.
- **Index 32:** Isael has thanked me greatly for not asking for a reward and said that I am just what Sandriver needs. He told me he would put in a good word with all the merchants in town, and that he is especially good friends with Dr. Guril, he also told me if there are any Gizka left in his house I am still more than willing to take them and do with them as I please.
- **Index 34:** Isael has thanked me greatly for not asking for a reward and said that I am just what Sandriver needs. He told me he would put in a good word with all the merchants in town, and that he is especially good friends with Dr. Guril, he also told me if there are any Gizka left in his house I am still more than willing to take them and do with them as I please.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 100 × **Credits** (`gold_001`)
- 150 × **Credits** (`gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Rooard Perrin** (`SW_DurosRooard`) — `Tatooine, Sandriver`
- **Isael Mountain** (`SW_IsaelDurosEn`) — `Tatooine, Sandriver`

**Locations implicated by actor/object placement or explicit travel:**
- **Tatooine, Carl Terro's Droid Shop**
- **Tatooine, Cecil's Blasters and Shields**
- **Tatooine, Medical Bay**
- **Tatooine, Sandriver**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_DurosProblem`
**Generated category:** Side Quests
**Journal entries:** 15

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 1 | — | Isael has told me he is having a problem with the Duros, who have been harassing him for quite some time now. If I want to look into it they are supposedly at the entrance to Sandriver. | 2 |
| 2 | — | The Duros, Rooard, who seems to be the leader of the gang has informed me that they are going to continue to harass him until he decides to sell his home and move elsewhere, as they want that hut for themselves. I should see what I can make of this with Isael | 1 |
| 3 | — | Isael was distraught when I relayed the information from Rooard but now I have to figure out what to do with him. | 1 |
| 5 | — | Decisions, decisions... | 0 |
| 10 | — | I have convinced Isael to move elsewhere, although he was not pleased with my results. I should return to Rooard for a reward. | 1 |
| 12 | — | Decisions, decisions... | 0 |
| 15 | Finished | Rooard has rewarded me with 100 credits, another job well done. | 1 |
| 18 | — | Decisions, decisions... | 0 |
| 20 | — | I have told Isael that I will help him with his Duros problem, although he protested saying it may end ugly. | 1 |
| 22 | — | The Duros told me that there is no other way, as the Czerka Corporation won't sell them any buildings in Sandriver, and the desert is too dangerous for them to start their lives here in. They attacked me just as our conversation ended and I was forced to fight. I should return to Isael | 1 |
| 24 | — | Decisions, decisions... | 1 |
| 30 | — | I should return to Isael for a reward. | 1 |
| 32 | Finished | Isael has thanked me greatly for not asking for a reward and said that I am just what Sandriver needs. He told me he would put in a good word with all the merchants in town, and that he is especially good friends with Dr. Guril, he also told me if there are any Gizka left in his house I am still more than willing to take them and do with them as I please. | 1 |
| 34 | Finished | Isael has thanked me greatly for not asking for a reward and said that I am just what Sandriver needs. He told me he would put in a good word with all the merchants in town, and that he is especially good friends with Dr. Guril, he also told me if there are any Gizka left in his house I am still more than willing to take them and do with them as I please. | 1 |

### Record-level trigger map

### Stage 1

Isael has told me he is having a problem with the Duros, who have been harassing him for quite some time now. If I want to look into it they are supposedly at the entrance to Sandriver.

**How this stage is set:**
- Dialogue INFO `27364145011640417555` under topic **Duros gang**; speaker Isael Mountain (`SW_IsaelDurosEn`). locations: `Tatooine, Sandriver`. conditions: Journal `SW_DurosProblem` Equal 0. response: “Yes the Duros, Rooard and two others, they are at the entrance to Sandriver. They've been harassing me for some time now and I can't figure out why. I haven't done anything to them nor have I retaliated against them. If you could just figure out why they are doing this I would be grateful.”.

```text
Journal "SW_DurosProblem" 1
```
- Dialogue INFO `291412678603025194` under topic **complex situation**; speaker Isael Mountain (`SW_IsaelDurosEn`). locations: `Tatooine, Sandriver`. conditions: Journal `SW_DurosProblem` Equal 0. response: “Well you see, I have well, two issues. Firstly I have, Entomophobia, which means I am incredibly fearful of small animals, and the Duros gang in this area has released a family of Gizka, in my home. I don't know what to do, between the Gizka and the Duros gang I just want to explode.”.

```text
Journal SW_DurosProblem 1
```

### Stage 2

The Duros, Rooard, who seems to be the leader of the gang has informed me that they are going to continue to harass him until he decides to sell his home and move elsewhere, as they want that hut for themselves. I should see what I can make of this with Isael

**How this stage is set:**
- Dialogue INFO `17766258872770123450` under topic **Duros gang**; speaker Rooard Perrin (`SW_DurosRooard`). locations: `Tatooine, Sandriver`. conditions: Journal `SW_DurosProblem` Equal 1. response: “You've got a problem with the way I do things? Why don't you go back to that silly Ithorian with the name Mountain and tell him he needs to move out of town. The Czerka Corporation doesn't want to sell us any buildings in Sandriver so we're going to make Isael sell us his.”.

```text
Journal "SW_DurosProblem" 2
moddisposition -10
```

### Stage 3

Isael was distraught when I relayed the information from Rooard but now I have to figure out what to do with him.

**How this stage is set:**
- Dialogue INFO `383516494145548690` under topic **Duros gang**; speaker Isael Mountain (`SW_IsaelDurosEn`). locations: `Tatooine, Sandriver`. conditions: Journal `SW_DurosProblem` Equal 2. response: “He said what? That is absolutely insane. Does he really think that is going to work? What should I do now?”.

```text
Journal "SW_DurosProblem" 3
Choice "I think you need to get out of town, they're not going to stop." 1 "I suppose I could help you with the Duros situation." 2
```

### Stage 5

Decisions, decisions...

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 10

I have convinced Isael to move elsewhere, although he was not pleased with my results. I should return to Rooard for a reward.

**How this stage is set:**
- Dialogue INFO `8468288112979313446` under topic **Duros gang**; speaker Isael Mountain (`SW_IsaelDurosEn`). locations: `Tatooine, Sandriver`. conditions: Journal `SW_DurosProblem` Equal 3; Function/Choice Equal 1. response: “You really think I should leave town? That is grave news to me. I suppose I have enough research to head to a new planet though... Okay, I'm gone, you can tell Rooard and his gang to back off while I gather my things. I'll be gone soon.”.

```text
Journal "SW_DurosProblem" 10
moddisposition -10
```

### Stage 12

Decisions, decisions...

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 15 — Finished

Rooard has rewarded me with 100 credits, another job well done.

**How this stage is set:**
- Dialogue INFO `4193205112974922483` under topic **Duros gang**; speaker Rooard Perrin (`SW_DurosRooard`). locations: `Tatooine, Sandriver`. conditions: Journal `SW_DurosProblem` Equal 10. response: “He's leaving is he? You must be quite the convincing guy. I'll send one of my guys over there to make sure he does. Thanks a lot, and here, take these credits for your troubles. There's a new gang in town now. Oh and, if you want to rid us of that Gizka problem in that house, that's no problem at all. Take them if you have use for them.”.

```text
Journal "SW_DurosProblem" 15
player->additem "gold_001",100
player->modReputation 1
```

### Stage 18

Decisions, decisions...

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 20

I have told Isael that I will help him with his Duros problem, although he protested saying it may end ugly.

**How this stage is set:**
- Dialogue INFO `261917038258621735` under topic **Duros gang**; speaker Isael Mountain (`SW_IsaelDurosEn`). locations: `Tatooine, Sandriver`. conditions: Journal `SW_DurosProblem` Equal 3; Function/Choice Equal 2. response: “You will help me? That is wonderful news. Do not engage them though, those Duros are dangerous.”.

```text
Journal "SW_DurosProblem" 20
```

### Stage 22

The Duros told me that there is no other way, as the Czerka Corporation won't sell them any buildings in Sandriver, and the desert is too dangerous for them to start their lives here in. They attacked me just as our conversation ended and I was forced to fight. I should return to Isael

**How this stage is set:**
- Dialogue INFO `26046171812724424075` under topic **Duros gang**; speaker Rooard Perrin (`SW_DurosRooard`). locations: `Tatooine, Sandriver`. conditions: Journal `SW_DurosProblem` Equal 20. response: “Your treading a dangerous path, stranger. Do you really think you can take on all three of us? The Czerka Corporation won't even step in until one party is dead so they have less to deal with. We're getting that house, and you can't stop us, punk.”.

```text
Journal "SW_DurosProblem" 22
Choice "I'm going to enjoy this." 1 "Maybe we should rethink this." 2 "Your arrogance will be your death." 3
```

### Stage 24

Decisions, decisions...

**How this stage is set:**
- Dialogue INFO `3995128151039617708` under topic **Duros gang**; speaker Rooard Perrin (`SW_DurosRooard`). locations: `Tatooine, Sandriver`. conditions: Journal `SW_DurosProblem` Equal 22. response: “You're dead!”.

```text
Journal "SW_DurosProblem" 24
"SW_DurosGuard"->StartCombat Player
"SW_DurosGuard2"->StartCombat Player
```

### Stage 30

I should return to Isael for a reward.

**How this stage is set:**
- Dialogue INFO `132001897486602487` under topic **Duros gang**; speaker Isael Mountain (`SW_IsaelDurosEn`). locations: `Tatooine, Sandriver`. conditions: Journal `SW_DurosProblem` Equal 24. response: “You've bested all three of them? Wow, that is amazing. I just, how can I repay you?”.

```text
Journal "SW_DurosProblem" 30
Choice "Credits never hurt." 1 "Don't worry about it, it's on me." 2
```

### Stage 32 — Finished

Isael has thanked me greatly for not asking for a reward and said that I am just what Sandriver needs. He told me he would put in a good word with all the merchants in town, and that he is especially good friends with Dr. Guril, he also told me if there are any Gizka left in his house I am still more than willing to take them and do with them as I please.

**How this stage is set:**
- Dialogue INFO `26017233881505913560` under topic **Duros gang**; speaker Isael Mountain (`SW_IsaelDurosEn`). locations: `Tatooine, Sandriver`. conditions: Journal `SW_DurosProblem` Equal 30; Function/Choice Equal 1. response: “Oh yes, here take these credits. And, if you want to take those Gizka, you're still welcome to take them and do with them as you please.”.

```text
Journal "SW_DurosProblem" 32
moddisposition 15
player->additem "gold_001",150
```

### Stage 34 — Finished

Isael has thanked me greatly for not asking for a reward and said that I am just what Sandriver needs. He told me he would put in a good word with all the merchants in town, and that he is especially good friends with Dr. Guril, he also told me if there are any Gizka left in his house I am still more than willing to take them and do with them as I please.

**How this stage is set:**
- Dialogue INFO `1611221043500129621` under topic **Duros gang**; speaker Isael Mountain (`SW_IsaelDurosEn`). locations: `Tatooine, Sandriver`. conditions: Journal `SW_DurosProblem` Equal 30; Function/Choice Equal 2. response: “You have my utmost gratitude, %PCName. I am friends with the merchants here, especially Dr. Guril, who sells medkits to the public. I'll make sure you get better deals all around. And, if you want to take those Gizka, your still welcome to take them and do with them as you please.”.

```text
Journal "SW_DurosProblem" 34
moddisposition 40
"SW_DrGuril"->moddisposition 40
```

### Related records and locations

**Dialogue speakers:**
- Rooard Perrin (`SW_DurosRooard`) — `Tatooine, Sandriver`
- Isael Mountain (`SW_IsaelDurosEn`) — `Tatooine, Sandriver`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Tatooine, Carl Terro's Droid Shop`
- `Tatooine, Cecil's Blasters and Shields`
- `Tatooine, Medical Bay`
- `Tatooine, Sandriver`

<details><summary>Other directly addressed object IDs in related code</summary>

- Carlo Terro (`SW_CarlTerro`)
- Cecil Summit (`SW_Cecil`)
- Doctor Guril (`SW_DrGuril`)
- Leenam Dag (`SW_DurosGuard`)
- Phee Curoon (`SW_DurosGuard2`)
- Rooard Perrin (`SW_DurosRooard`)
- Isael Mountain (`SW_IsaelDurosEn`)

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `1` is obtainable.
- [ ] Reach index `1`: Isael has told me he is having a problem with the Duros, who have been harassing him for quite some time now. …
- [ ] Reach index `2`: The Duros, Rooard, who seems to be the leader of the gang has informed me that they are going to continue to h…
- [ ] Reach index `3`: Isael was distraught when I relayed the information from Rooard but now I have to figure out what to do with h…
- [ ] Reach index `5`: Decisions, decisions...
- [ ] Reach index `10`: I have convinced Isael to move elsewhere, although he was not pleased with my results. I should return to Rooa…
- [ ] Reach index `12`: Decisions, decisions...
- [ ] Reach index `15` (`Finished`): Rooard has rewarded me with 100 credits, another job well done.
- [ ] Reach index `18`: Decisions, decisions...
- [ ] Reach index `20`: I have told Isael that I will help him with his Duros problem, although he protested saying it may end ugly.
- [ ] Reach index `22`: The Duros told me that there is no other way, as the Czerka Corporation won't sell them any buildings in Sandr…
- [ ] Reach index `24`: Decisions, decisions...
- [ ] Reach index `30`: I should return to Isael for a reward.
- [ ] Reach index `32` (`Finished`): Isael has thanked me greatly for not asking for a reward and said that I am just what Sandriver needs. He told…
- [ ] Reach index `34` (`Finished`): Isael has thanked me greatly for not asking for a reward and said that I am just what Sandriver needs. He told…
- [ ] Branch coverage: this journal has **3 different `Finished` entries**; test each reachable completion branch.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_DurosProblem`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
