---
title: "Meeta The Kid"
description: "Walkthrough and QA reference for Meeta The Kid (SW_Meeta)."
weight: 50
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_Meeta"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_Meeta` |
| **Category** | Side Quests |
| **Journal entries** | 10 |
| **Completion branches** | 2 |
| **Starts by** | Speak with **Phillino** in **Tatooine, Cantina** and ask about **a few credits**. |
| **Key locations** | Tatooine, Cantina, Tatooine, Carl Terro's Droid Shop, Tatooine, Rodian District |
| **Key characters** | Carlo Terro, Phillino, Meeta |

## Walkthrough

### 1. Speak with Phillino in Tatooine, Cantina and ask about a few credits

Speak with **Phillino** in **Tatooine, Cantina** and ask about **a few credits**.

> **Expected journal update — index 10:** I spoke to a Twi'lek in the Sandriver cantina and was offered a job for credits. He told me about a Rodian kid named Meeta, and that Hungox the Hutt wants him to do some swoop racing for him, but that the kid didn't want to deal with him. If I convince Meeta to come with me, then Hungox the Hutt will pay me through the Twi'lek in the cantina.

### 2. Reach journal stage 11

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 11:** Decisions, decisions.

### 3. Speak with Meeta in Tatooine, Rodian District and ask about swoop racing

Speak with **Meeta** in **Tatooine, Rodian District** and ask about **swoop racing**.

> **Expected journal update — index 15:** I told Meeta he should go for the love of the sport, but he is saying that dealing with those gangsters is not worth it.

### 4. Speak with Meeta in Tatooine, Rodian District and ask about swoop racing

Speak with **Meeta** in **Tatooine, Rodian District** and ask about **swoop racing**.

> **Expected journal update — index 16:** I told Meeta maybe we can find him another sponsor, I should check with all the different merchants in town.

### 5. Speak with Meeta in Tatooine, Rodian District and ask about swoop racing

Speak with **Meeta** in **Tatooine, Rodian District** and ask about **swoop racing**.

> **Expected journal update — index 17:** Meeta wants me to assure him that the gangsters will treat him like one of their own.

### 6. Speak with Phillino in Tatooine, Cantina and ask about swoop racing

Speak with **Phillino** in **Tatooine, Cantina** and ask about **swoop racing**.

> **Expected journal update — index 18:** Phillino told me that if Meeta decides to race this time they will treat him as one of Hungox's men, just like Phillino

### 7. Speak with Carlo Terro in Tatooine, Carl Terro's Droid Shop and ask about swoop racing — Finished

Speak with **Carlo Terro** in **Tatooine, Carl Terro's Droid Shop** and ask about **swoop racing**.

> **Expected journal update — index 20:** Carl Terro told me that he will sponsor the kids, just to spite that Hutt, and that he'll build him the best bike he can. That's a job well done on my part, I should probably steer clear of Hungox the Hutt's men though.

**Outcome:** this journal entry is marked as a finished branch.

### 8. Speak with Meeta in Tatooine, Rodian District and ask about swoop racing

Speak with **Meeta** in **Tatooine, Rodian District** and ask about **swoop racing**.

> **Expected journal update — index 21:** I have convinced Meeta that he needs to race for the Hutt, may not have been the best decision but it worked out for everybody. It's time I claim my reward.

### 9. Speak with Phillino in Tatooine, Cantina and ask about swoop racing — Finished

Speak with **Phillino** in **Tatooine, Cantina** and ask about **swoop racing**.

> **Expected journal update — index 22:** I have been paid for my services by Phillino, my job here is done.

**Known item transfer:** 100 × **Credits** (`Gold_001`).

**Outcome:** this journal entry is marked as a finished branch.

{% callout(kind="warning", title="Playtest flag") %}
1 journal stage on this page lack a literal setter in the current static scan.
{% end %}

## Endings & branches

The journal has **2 explicit finished entries**. Treat them as branch coverage targets during playtesting:

- **Index 20:** Carl Terro told me that he will sponsor the kids, just to spite that Hutt, and that he'll build him the best bike he can. That's a job well done on my part, I should probably steer clear of Hungox the Hutt's men though.
- **Index 22:** I have been paid for my services by Phillino, my job here is done.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 100 × **Credits** (`Gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Carlo Terro** (`SW_CarlTerro`) — `Tatooine, Carl Terro's Droid Shop`
- **Phillino** (`SW_PhillinoTroublecant`) — `Tatooine, Cantina`
- **Meeta** (`SW_RodianMeeta`) — `Tatooine, Rodian District`

**Locations implicated by actor/object placement or explicit travel:**
- **Tatooine, Cantina**
- **Tatooine, Carl Terro's Droid Shop**
- **Tatooine, Rodian District**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_Meeta`
**Generated category:** Side Quests
**Journal entries:** 10

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 10 | — | I spoke to a Twi'lek in the Sandriver cantina and was offered a job for credits. He told me about a Rodian kid named Meeta, and that Hungox the Hutt wants him to do some swoop racing for him, but that the kid didn't want to deal with him. If I convince Meeta to come with me, then Hungox the Hutt will pay me through the Twi'lek in the cantina. | 1 |
| 11 | — | Decisions, decisions. | 0 |
| 15 | — | I told Meeta he should go for the love of the sport, but he is saying that dealing with those gangsters is not worth it. | 2 |
| 16 | — | I told Meeta maybe we can find him another sponsor, I should check with all the different merchants in town. | 1 |
| 17 | — | Meeta wants me to assure him that the gangsters will treat him like one of their own. | 1 |
| 18 | — | Phillino told me that if Meeta decides to race this time they will treat him as one of Hungox's men, just like Phillino | 1 |
| 20 | Finished | Carl Terro told me that he will sponsor the kids, just to spite that Hutt, and that he'll build him the best bike he can. That's a job well done on my part, I should probably steer clear of Hungox the Hutt's men though. | 1 |
| 21 | — | I have convinced Meeta that he needs to race for the Hutt, may not have been the best decision but it worked out for everybody. It's time I claim my reward. | 1 |
| 22 | Finished | I have been paid for my services by Phillino, my job here is done. | 1 |

### Record-level trigger map

### Stage 10

I spoke to a Twi'lek in the Sandriver cantina and was offered a job for credits. He told me about a Rodian kid named Meeta, and that Hungox the Hutt wants him to do some swoop racing for him, but that the kid didn't want to deal with him. If I convince Meeta to come with me, then Hungox the Hutt will pay me through the Twi'lek in the cantina.

**How this stage is set:**
- Dialogue INFO `809141312225210993` under topic **a few credits**; speaker Phillino (`SW_PhillinoTroublecant`). locations: `Tatooine, Cantina`. conditions: Journal `SW_Meeta` Equal 0. response: “Nothing dangerous, no fighting involved, just a little diplomacy is all. There's a kid named Meeta over in the Rodian side of town. Hungox the Hutt wants him to do a swoop race for him, but the kid is refusing. The Rodians there won't let us near him, but they don't know you...”.

```text
Journal "SW_Meeta" 10
```

### Stage 11

Decisions, decisions.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 15

I told Meeta he should go for the love of the sport, but he is saying that dealing with those gangsters is not worth it.

**How this stage is set:**
- Dialogue INFO `308271579431571115` under topic **swoop racing**; speaker Meeta (`SW_RodianMeeta`). locations: `Tatooine, Rodian District`. conditions: Journal `SW_Meeta` Equal 10; Function/Choice Equal 1. response: “You're right, I should go because I love swoop racing. But, those gangsters just make it awful. They shove me around and pick on me and I don't even get paid, it's not worth it.”.

```text
Journal "SW_Meeta" 15
Choice "Do you really have any other choice?" 1 "What if I find you another sponsor?." 2
```
- Dialogue INFO `304014838141857105` under topic **swoop racing**; speaker Meeta (`SW_RodianMeeta`). locations: `Tatooine, Rodian District`. conditions: Journal `SW_Meeta` Equal 10; Function/Choice Equal 2. response: “But how do I not go? I can't stay in the Rodian section forever, and eventually the Zillows gang isn't going to be able to protect me. Maybe you can help?”.

```text
Journal "SW_Meeta" 15
Choice "What if I can find you another sponsor?." 1
```

### Stage 16

I told Meeta maybe we can find him another sponsor, I should check with all the different merchants in town.

**How this stage is set:**
- Dialogue INFO `3126124489219882429` under topic **swoop racing**; speaker Meeta (`SW_RodianMeeta`). locations: `Tatooine, Rodian District`. conditions: Journal `SW_Meeta` Equal 15; Function/Choice Equal 2. response: “That's a great idea, but who would want to sponsor a young Rodian? Maybe the Twi'lek that sells weapons out of a stall in the market?”.

```text
Journal "SW_Meeta" 16
```

### Stage 17

Meeta wants me to assure him that the gangsters will treat him like one of their own.

**How this stage is set:**
- Dialogue INFO `4785129372734027394` under topic **swoop racing**; speaker Meeta (`SW_RodianMeeta`). locations: `Tatooine, Rodian District`. conditions: Journal `SW_Meeta` Equal 15; Function/Choice Equal 1. response: “No, it looks like I don't. Is there any way you can make sure they'll just let me do what I do. They are so horrible, tell them I'll race for them, if they treat me like one of them.”.

```text
Choice "I'll pay the Twi'lek a little visit in the Cantina I think." 1
Journal "SW_Meeta"17
```

### Stage 18

Phillino told me that if Meeta decides to race this time they will treat him as one of Hungox's men, just like Phillino

**How this stage is set:**
- Dialogue INFO `2150697393255032341` under topic **swoop racing**; speaker Phillino (`SW_PhillinoTroublecant`). locations: `Tatooine, Cantina`. conditions: Journal `SW_Meeta` Equal 17. response: “Interesting, but fair. If the boy works for the Hutt, then he is one of the Hutt's, just as I am. I will make it happen for you. Let the boy know, then if he accepts come back to me for your reward.”.

```text
Journal "SW_Meeta" 18
```

### Stage 20 — Finished

Carl Terro told me that he will sponsor the kids, just to spite that Hutt, and that he'll build him the best bike he can. That's a job well done on my part, I should probably steer clear of Hungox the Hutt's men though.

**How this stage is set:**
- Dialogue INFO `2830010052353313670` under topic **swoop racing**; speaker Carlo Terro (`SW_CarlTerro`). locations: `Tatooine, Carl Terro's Droid Shop`. conditions: Journal `SW_Meeta` Equal 16. response: “Sponsor Meeta for a swoop race? That may not be a bad idea. Usually I turn the racers away but Meeta has a lot of potential and who knows how well he will do not being pressured and harassed by the Hutt and his men. You've got yourself a sponsor, and here, for all your troubles. You may want to use that money to buy a ticket for the race, I'm sure the Hutt will be putting it together soon.”.

```text
Journal "SW_Meeta" 20
Journal "SW_Race" 1
player->modReputation 1
```

### Stage 21

I have convinced Meeta that he needs to race for the Hutt, may not have been the best decision but it worked out for everybody. It's time I claim my reward.

**How this stage is set:**
- Dialogue INFO `2188221629413717940` under topic **swoop racing**; speaker Meeta (`SW_RodianMeeta`). locations: `Tatooine, Rodian District`. conditions: Journal `SW_Meeta` Equal 18. response: “Okay, I'll do it. I didn't want to, but I think it's for the best. Thank you, %PCName, I owe you one.”.

```text
Journal "SW_Meeta" 21
```

### Stage 22 — Finished

I have been paid for my services by Phillino, my job here is done.

**How this stage is set:**
- Dialogue INFO `2451528377234248443` under topic **swoop racing**; speaker Phillino (`SW_PhillinoTroublecant`). locations: `Tatooine, Cantina`. conditions: Journal `SW_Meeta` Equal 21. response: “Here's your credits, as promised. Hungox the Hutt will appreciate your assistance. By the way, you may want to stop by his Dueling Ring, he should be putting the races together shortly.”.

```text
Journal "SW_Meeta" 22
player->additem "Gold_001",100
player->modReputation 1
```

### Related records and locations

**Dialogue speakers:**
- Carlo Terro (`SW_CarlTerro`) — `Tatooine, Carl Terro's Droid Shop`
- Phillino (`SW_PhillinoTroublecant`) — `Tatooine, Cantina`
- Meeta (`SW_RodianMeeta`) — `Tatooine, Rodian District`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Tatooine, Cantina`
- `Tatooine, Carl Terro's Droid Shop`
- `Tatooine, Rodian District`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `10` is obtainable.
- [ ] Reach index `10`: I spoke to a Twi'lek in the Sandriver cantina and was offered a job for credits. He told me about a Rodian kid…
- [ ] Reach index `11`: Decisions, decisions.
- [ ] Reach index `15`: I told Meeta he should go for the love of the sport, but he is saying that dealing with those gangsters is not…
- [ ] Reach index `16`: I told Meeta maybe we can find him another sponsor, I should check with all the different merchants in town.
- [ ] Reach index `17`: Meeta wants me to assure him that the gangsters will treat him like one of their own.
- [ ] Reach index `18`: Phillino told me that if Meeta decides to race this time they will treat him as one of Hungox's men, just like…
- [ ] Reach index `20` (`Finished`): Carl Terro told me that he will sponsor the kids, just to spite that Hutt, and that he'll build him the best b…
- [ ] Reach index `21`: I have convinced Meeta that he needs to race for the Hutt, may not have been the best decision but it worked o…
- [ ] Reach index `22` (`Finished`): I have been paid for my services by Phillino, my job here is done.
- [ ] Branch coverage: this journal has **2 different `Finished` entries**; test each reachable completion branch.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_Meeta`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
