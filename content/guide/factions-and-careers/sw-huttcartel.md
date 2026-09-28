---
title: "Hutt Cartel (internal journal)"
description: "Walkthrough and QA reference for Hutt Cartel (internal journal) (SW_HuttCartel)."
weight: 26
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_HuttCartel"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_HuttCartel` |
| **Category** | Factions & Careers |
| **Journal entries** | 36 |
| **Completion branches** | 4 |
| **Starts by** | Record route requires playtest verification. |
| **Key locations** | Kashyyk, Orange Manor, Manaan, Central, Manaan, Docking Bay, Nar Shaddaa, 1134 Central Alley, Nar Shaddaa, 173 Alley East, Nar Shaddaa, 2500 Magari Alley … |
| **Key characters** | Badhiya, Dar'Ning"Bobbin, Drifter Bima, Drifter Hoa, Drifter Malone, Drifter Malone … |

## Walkthrough

### 1. Reach journal stage 0 — Finished

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 0:** The Hutt Cartel

**Outcome:** this journal entry is marked as a finished branch.

### 2. Speak with Badhiya in Nar Shaddaa, Hutt Cartel and ask about join the Hutt Cartel

Speak with **Badhiya** in **Nar Shaddaa, Hutt Cartel** and ask about **join the Hutt Cartel**.

> **Expected journal update — index 5:** I have been offered a job with the Hutt Cartel, I should speak to the Hutt again if I'm interested.

### 3. Speak with Badhiya in Nar Shaddaa, Hutt Cartel and ask about join the Hutt Cartel

Speak with **Badhiya** in **Nar Shaddaa, Hutt Cartel** and ask about **join the Hutt Cartel**.

> **Expected journal update — index 10:** I have agreed to join the Hutt Cartel, and should speak with Drifter Malone to get my first assignment.

### 4. Speak with Drifter Malone in Nar Shaddaa, Hutt Cartel and ask about assignment

Speak with **Drifter Malone** in **Nar Shaddaa, Hutt Cartel** and ask about **assignment**.

> **Expected journal update — index 15:** Drifter Malone has given me some spice I'm supposed to deliver and deal to a Coruscanti named Karl Camp at 2500 Magari Alley in the Lower City.

**Known item transfer:** 1 × **Spice** (`SW_Spice`).

### 5. Speak with Karl Camp in Nar Shaddaa, 2500 Magari Alley and ask about spice

Speak with **Karl Camp** in **Nar Shaddaa, 2500 Magari Alley** and ask about **spice**.

> **Expected journal update — index 20:** I have sold the spice to Karl and should report to Drifter Malone.

**Known item transfer:** 100 × **Credits** (`gold_001`).

### 6. Speak with Drifter Malone in Nar Shaddaa, Hutt Cartel and ask about assignment

Speak with **Drifter Malone** in **Nar Shaddaa, Hutt Cartel** and ask about **assignment**.

> **Expected journal update — index 25:** 50 credits for dealing the drugs, it seems I'm in it now as he didn't ask this time, I need to resupply the Drifter with this package of contraband inside of the cantina in Sandriver, Tatooine.

**Known item transfer:** 50 × **Credits** (`gold_001`), 1 × **Contraband Package** (`SW_HuttCartel30`).

### 7. Speak with Drifter Bima in Tatooine, Cantina and ask about assignment

Speak with **Drifter Bima** in **Tatooine, Cantina** and ask about **assignment**.

> **Expected journal update — index 30:** I have resupplied the Drifter on Tatooine and should return to Drifter Malone.

### 8. Speak with Drifter Malone in Nar Shaddaa, Hutt Cartel and ask about assignment

Speak with **Drifter Malone** in **Nar Shaddaa, Hutt Cartel** and ask about **assignment**.

> **Expected journal update — index 35:** Another 50 credits, that was an easy one, Drifter Malone told me to take a day off and to go spend all my credits in one place. I should return to him and get my next assignment.

**Known item transfer:** 50 × **Credits** (`gold_001`).

### 9. Speak with Drifter Malone in Nar Shaddaa, Hutt Cartel and ask about assignment

Speak with **Drifter Malone** in **Nar Shaddaa, Hutt Cartel** and ask about **assignment**.

> **Expected journal update — index 40:** I've been given another spice deal assignement by Drifter Malone, this time to a Duros named Vee Roa at 1134 Central Alley in the Lower City.

**Known item transfer:** 1 × **Spice** (`SW_Spice`).

### 10. Speak with Vee Roa in Nar Shaddaa, 1134 Central Alley and ask about spice

Speak with **Vee Roa** in **Nar Shaddaa, 1134 Central Alley** and ask about **spice**.

> **Expected journal update — index 45:** I've made the deal, I should head back to Drifter Malone.

**Known item transfer:** 100 × **Credits** (`gold_001`).

### 11. Speak with Drifter Malone in Nar Shaddaa, Hutt Cartel and ask about assignment

Speak with **Drifter Malone** in **Nar Shaddaa, Hutt Cartel** and ask about **assignment**.

> **Expected journal update — index 50:** 60 credits this time, looks like I'm getting a raise, Drifter Malone wants me to steal a slave from the Wampa Suite in the Deluxe Apartments. the Slave is a Togruta woman named Fey, I should bring her back here when I'm done, and Malone says I should be sneaky due to the high security of the apartment.

### 12. Speak with Fey in Nar Shaddaa, Wampa Suite and ask about assignment

Speak with **Fey** in **Nar Shaddaa, Wampa Suite** and ask about **assignment**.

> **Expected journal update — index 55:** I have the slave Fey in my possession, I should return her to the Hutt Cartel.

### 13. Find Fey in Nar Shaddaa, Wampa Suite and complete the encounter

Find **Fey** in **Nar Shaddaa, Wampa Suite** and complete the encounter.

> **Expected journal update — index 57:** Fey has been delivered to the Hutt Cartel.

### 14. Speak with Drifter Malone in Nar Shaddaa, Hutt Cartel and ask about assignment

Speak with **Drifter Malone** in **Nar Shaddaa, Hutt Cartel** and ask about **assignment**.

> **Expected journal update — index 60:** I have been paid in 100 credits for stealing the slave. Drifter Malone told me to take a break and come back when I'm ready for my next assignment.

**Known item transfer:** 100 × **Credits** (`gold_001`).

### 15. Speak with Drifter Malone in Nar Shaddaa, Hutt Cartel and ask about assignment

Speak with **Drifter Malone** in **Nar Shaddaa, Hutt Cartel** and ask about **assignment**.

> **Expected journal update — index 65:** Drifter Malone wants me to resupply a Drifter in the Lower City currently working in Eddie's Den, he gave me a contraband package to deliver to him.

**Known item transfer:** 1 × **Contraband Package** (`SW_HuttCartel65`).

### 16. Speak with Drifter Hoa in Nar Shaddaa, Eddie's Den and ask about assignment

Speak with **Drifter Hoa** in **Nar Shaddaa, Eddie's Den** and ask about **assignment**.

> **Expected journal update — index 70:** I have resupplied the Drifter in Eddie's Den.

### 17. Speak with Drifter Malone in Nar Shaddaa, Hutt Cartel and ask about assignment

Speak with **Drifter Malone** in **Nar Shaddaa, Hutt Cartel** and ask about **assignment**.

> **Expected journal update — index 75:** Drifter Malone has paid me with 100 credits and a medkit, he wants me to secort a slave now to a shop, Starko's Arms, over on Dantooine.

**Known item transfer:** 100 × **Credits** (`gold_001`), 1 × **Medkit** (`SW_Medkit`).

### 18. Find Slave in Nar Shaddaa, Hutt Cartel and complete the encounter

Find **Slave** in **Nar Shaddaa, Hutt Cartel** and complete the encounter.

> **Expected journal update — index 80:** I have delivered the slave and should return to Drifter Malone.

### 19. Speak with Drifter Malone in Nar Shaddaa, Hutt Cartel and ask about assignment

Speak with **Drifter Malone** in **Nar Shaddaa, Hutt Cartel** and ask about **assignment**.

> **Expected journal update — index 85:** 70 credits, I guess for an easy one, but now he wants me to steal some data from a member of the exchange, Oohn Rivers, an Ithorian in the Lower City Bazaar. I should pickpocket him to avoid getting caught.

**Known item transfer:** 70 × **Credits** (`gold_001`).

### 20. Reach journal stage 90

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 90:** I have the data and should report to Drifter Malone now.

### 21. Speak with Drifter Malone in Nar Shaddaa, Hutt Cartel and ask about assignment

Speak with **Drifter Malone** in **Nar Shaddaa, Hutt Cartel** and ask about **assignment**.

> **Expected journal update — index 95:** Drifter Malone says this is the last assignment he can give me, I'm supposed to sneak into a hut on Kashyyk owned by an Ithorian doctor to get some kind of new age surveillance equipment he has been designing. I should do this without getting caught.

**Known item transfer:** 150 × **Credits** (`gold_001`).

### 22. Activate Experimental Device in Kashyyk, Orange Manor

Activate **Experimental Device** in **Kashyyk, Orange Manor**.

> **Expected journal update — index 100:** I now have the experimental device and should return to Drifter Malone.

### 23. Speak with Drifter Malone in Nar Shaddaa, Hutt Cartel and ask about assignment

Speak with **Drifter Malone** in **Nar Shaddaa, Hutt Cartel** and ask about **assignment**.

> **Expected journal update — index 105:** Another 100 credits, Drifter Malone isn't allowed to give me assignments now, he says I made it to the big leagues and should report to Badhiya the Hutt from here on out.

**Known item transfer:** 150 × **Credits** (`gold_001`).

### 24. Speak with Badhiya in Nar Shaddaa, Hutt Cartel and ask about assignment

Speak with **Badhiya** in **Nar Shaddaa, Hutt Cartel** and ask about **assignment**.

> **Expected journal update — index 110:** Badhiya the Hutt wants me to steal five unprocessed kolto from the processing plant on Manaan. He told me if I was caught I would never be able to finish the mission, and that he doesn't like to be disappointed.

### 25. Reach journal stage 115

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 115:** I have 5 unprocessed kolto, I should return to Badhiya the Hutt.

### 26. Speak with Badhiya in Nar Shaddaa, Hutt Cartel and ask about assignment

Speak with **Badhiya** in **Nar Shaddaa, Hutt Cartel** and ask about **assignment**.

> **Expected journal update — index 120:** The Hutt was overly pleased and paid me in 200 credits, he told me to go gamble or rest and then to return to him.

**Known item transfer:** 200 × **Credits** (`gold_001`).

### 27. Speak with Badhiya in Nar Shaddaa, Hutt Cartel and ask about assignment

Speak with **Badhiya** in **Nar Shaddaa, Hutt Cartel** and ask about **assignment**.

> **Expected journal update — index 125:** We're framing a public official that lives in the Ginx Suite of the Deluxe Apartments, he wants me to plant these three deathsticks in a chest at the foot of his bed.

**Known item transfer:** 3 × **Deathsticks** (`SW_StrongSpice`).

### 28. Interact with Container in Nar Shaddaa, Ginx Suite

Interact with **Container** in **Nar Shaddaa, Ginx Suite**.

> **Expected journal update — index 130:** After planting the deathsticks I was ambushed by a bounty hunter, I should search him to learn more.

### 29. Activate Assassin's Datapad

Activate **Assassin's Datapad**.

> **Expected journal update — index 135:** I found a datapad identifying the bounty hunter as Gru Bajari, it looks like he was sent by Badhiya the Hutt, I guess he didn't want me to slip about framing the public official. I wonder if I should confront him?

### 30. Speak with Dar'Ning"Bobbin in Nar Shaddaa, Makacheesa Market and ask about assignment — Finished

Speak with **Dar'Ning"Bobbin** in **Nar Shaddaa, Makacheesa Market** and ask about **assignment**.

> **Expected journal update — index 140:** The Hutt confessed and told his guards to open fire on me, it seems I have no more friends in the Cartel.

**Outcome:** this journal entry is marked as a finished branch.

### 31. Speak with Drifter Malone in Nar Shaddaa, Peyuska Plaza — Finished

Speak with **Drifter Malone** in **Nar Shaddaa, Peyuska Plaza**.

> **Expected journal update — index 145:** I ran into Drifter Malone outside of the Hutt Cartel who told me to meet him at his safe house at 173 Alley East if I wanted to live.

**Outcome:** this journal entry is marked as a finished branch.

### 32. Speak with Drifter Malone in Nar Shaddaa, 173 Alley East

Speak with **Drifter Malone** in **Nar Shaddaa, 173 Alley East**.

> **Expected journal update — index 150:** Drifter Malone met me at his safe house, and he told me any time I needed to come here I was welcome, and then he confirmed that the Hutt put a hit on me and an infamous bounty hunter named Daga Evga is looking for me. If I want to prove myself worthy enough to live I can find Daga in the Nar shaddaa Cantina and kill him, then return to the Hutt.

### 33. Find Dava Evga in Nar Shaddaa, Cantina and complete the encounter

Find **Dava Evga** in **Nar Shaddaa, Cantina** and complete the encounter.

> **Expected journal update — index 155:** Daga Evga is dead, and I have a chance now of returning to the Hutt without being killed.

### 34. Speak with Badhiya in Nar Shaddaa, Hutt Cartel and ask about assignment

Speak with **Badhiya** in **Nar Shaddaa, Hutt Cartel** and ask about **assignment**.

> **Expected journal update — index 160:** Badhiya the Hutt was very pleased with how I handled my situation and told me I am true Cartel material. He wants me to do a job for him to prove my loyalty by murdering Judge Cathod, a selkath that hangs around in the Manaan, Bazaar, in front of everyone, and return with my bounty from my crimes intact. I should find a travel agent in one of the docking bays whenever I'm ready to escape.

### 35. Find Judge Cathod in Manaan, Central and complete the encounter

Find **Judge Cathod** in **Manaan, Central** and complete the encounter.

> **Expected journal update — index 165:** Judge Cathod is dead, and I am surely wanted dead now as well. I should get to the docking bay and find the travel agent to return to the Hutt.

### 36. Speak with Badhiya in Nar Shaddaa, Hutt Cartel and ask about assignment — Finished

Speak with **Badhiya** in **Nar Shaddaa, Hutt Cartel** and ask about **assignment**.

> **Expected journal update — index 170:** Badhiya the Hutt was wildly impressed with me, he told me my bounty was cleared and if he ever needs me again he will send for me. He also told me to take a rookie gangster with me (generic follower not companion with respawn flag enabled), that gangsters live and dide and if he does die to come back and he will have another one for me.

**Outcome:** this journal entry is marked as a finished branch.

> **Playtest flag:** 3 journal stages on this page lack a literal setter in the current static scan.

## Endings & branches

The journal has **4 explicit finished entries**. Treat them as branch coverage targets during playtesting:

- **Index 0:** The Hutt Cartel
- **Index 140:** The Hutt confessed and told his guards to open fire on me, it seems I have no more friends in the Cartel.
- **Index 145:** I ran into Drifter Malone outside of the Hutt Cartel who told me to meet him at his safe house at 173 Alley East if I wanted to live.
- **Index 170:** Badhiya the Hutt was wildly impressed with me, he told me my bounty was cleared and if he ever needs me again he will send for me. He also told me to take a rookie gangster with me (generic follower not companion with respawn flag enabled), that gangsters live and dide and if he does die to come back and he will have another one for me.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 1 × **Spice** (`SW_Spice`)
- 100 × **Credits** (`gold_001`)
- 50 × **Credits** (`gold_001`)
- 1 × **Contraband Package** (`SW_HuttCartel30`)
- 1 × **Contraband Package** (`SW_HuttCartel65`)
- 1 × **Medkit** (`SW_Medkit`)
- 70 × **Credits** (`gold_001`)
- 150 × **Credits** (`gold_001`)
- 200 × **Credits** (`gold_001`)
- 3 × **Deathsticks** (`SW_StrongSpice`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Badhiya** (`Bng_Badhiya`) — `Nar Shaddaa, Hutt Cartel`
- **Dar'Ning"Bobbin** (`Bng_Dar_Ning`) — `Nar Shaddaa, Makacheesa Market`
- **Drifter Bima** (`SW_Drifter30`) — `Tatooine, Cantina`
- **Drifter Hoa** (`SW_Drifter70`) — `Nar Shaddaa, Eddie's Den`
- **Drifter Malone** (`SW_DrifterMalone`) — `Nar Shaddaa, Hutt Cartel`
- **Drifter Malone** (`SW_DrifterMalone2`) — `Nar Shaddaa, Peyuska Plaza`
- **Drifter Malone** (`SW_DrifterMalone3`) — `Nar Shaddaa, 173 Alley East`
- **Karl Camp** (`SW_HuttCartel15`) — `Nar Shaddaa, 2500 Magari Alley`
- **Vee Roa** (`SW_HuttCartel40`) — `Nar Shaddaa, 1134 Central Alley`
- **Fey** (`SW_HuttCartel55`) — `Nar Shaddaa, Wampa Suite`

**Locations implicated by actor/object placement or explicit travel:**
- **Kashyyk, Orange Manor**
- **Manaan, Central**
- **Manaan, Docking Bay**
- **Nar Shaddaa, 1134 Central Alley**
- **Nar Shaddaa, 173 Alley East**
- **Nar Shaddaa, 2500 Magari Alley**
- **Nar Shaddaa, Cantina**
- **Nar Shaddaa, Eddie's Den**
- **Nar Shaddaa, Ginx Suite**
- **Nar Shaddaa, Hutt Cartel**
- **Nar Shaddaa, Makacheesa Market**
- **Nar Shaddaa, Peyuska Plaza**
- **Nar Shaddaa, Wampa Suite**
- **Tatooine, Cantina**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_HuttCartel`
**Generated category:** Factions & Careers
**Journal entries:** 36

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 0 | Finished | The Hutt Cartel | 0 |
| 5 | — | I have been offered a job with the Hutt Cartel, I should speak to the Hutt again if I'm interested. | 1 |
| 10 | — | I have agreed to join the Hutt Cartel, and should speak with Drifter Malone to get my first assignment. | 1 |
| 15 | — | Drifter Malone has given me some spice I'm supposed to deliver and deal to a Coruscanti named Karl Camp at 2500 Magari Alley in the Lower City. | 1 |
| 20 | — | I have sold the spice to Karl and should report to Drifter Malone. | 1 |
| 25 | — | 50 credits for dealing the drugs, it seems I'm in it now as he didn't ask this time, I need to resupply the Drifter with this package of contraband inside of the cantina in Sandriver, Tatooine. | 1 |
| 30 | — | I have resupplied the Drifter on Tatooine and should return to Drifter Malone. | 1 |
| 35 | — | Another 50 credits, that was an easy one, Drifter Malone told me to take a day off and to go spend all my credits in one place. I should return to him and get my next assignment. | 1 |
| 40 | — | I've been given another spice deal assignement by Drifter Malone, this time to a Duros named Vee Roa at 1134 Central Alley in the Lower City. | 1 |
| 45 | — | I've made the deal, I should head back to Drifter Malone. | 1 |
| 50 | — | 60 credits this time, looks like I'm getting a raise, Drifter Malone wants me to steal a slave from the Wampa Suite in the Deluxe Apartments. the Slave is a Togruta woman named Fey, I should bring her back here when I'm done, and Malone says I should be sneaky due to the high security of the apartment. | 1 |
| 55 | — | I have the slave Fey in my possession, I should return her to the Hutt Cartel. | 1 |
| 57 | — | Fey has been delivered to the Hutt Cartel. | 2 |
| 60 | — | I have been paid in 100 credits for stealing the slave. Drifter Malone told me to take a break and come back when I'm ready for my next assignment. | 1 |
| 65 | — | Drifter Malone wants me to resupply a Drifter in the Lower City currently working in Eddie's Den, he gave me a contraband package to deliver to him. | 1 |
| 70 | — | I have resupplied the Drifter in Eddie's Den. | 1 |
| 75 | — | Drifter Malone has paid me with 100 credits and a medkit, he wants me to secort a slave now to a shop, Starko's Arms, over on Dantooine. | 1 |
| 80 | — | I have delivered the slave and should return to Drifter Malone. | 1 |
| 85 | — | 70 credits, I guess for an easy one, but now he wants me to steal some data from a member of the exchange, Oohn Rivers, an Ithorian in the Lower City Bazaar. I should pickpocket him to avoid getting caught. | 1 |
| 90 | — | I have the data and should report to Drifter Malone now. | 0 |
| 95 | — | Drifter Malone says this is the last assignment he can give me, I'm supposed to sneak into a hut on Kashyyk owned by an Ithorian doctor to get some kind of new age surveillance equipment he has been designing. I should do this without getting caught. | 1 |
| 100 | — | I now have the experimental device and should return to Drifter Malone. | 1 |
| 105 | — | Another 100 credits, Drifter Malone isn't allowed to give me assignments now, he says I made it to the big leagues and should report to Badhiya the Hutt from here on out. | 1 |
| 110 | — | Badhiya the Hutt wants me to steal five unprocessed kolto from the processing plant on Manaan. He told me if I was caught I would never be able to finish the mission, and that he doesn't like to be disappointed. | 1 |
| 115 | — | I have 5 unprocessed kolto, I should return to Badhiya the Hutt. | 0 |
| 120 | — | The Hutt was overly pleased and paid me in 200 credits, he told me to go gamble or rest and then to return to him. | 1 |
| 125 | — | We're framing a public official that lives in the Ginx Suite of the Deluxe Apartments, he wants me to plant these three deathsticks in a chest at the foot of his bed. | 1 |
| 130 | — | After planting the deathsticks I was ambushed by a bounty hunter, I should search him to learn more. | 1 |
| 135 | — | I found a datapad identifying the bounty hunter as Gru Bajari, it looks like he was sent by Badhiya the Hutt, I guess he didn't want me to slip about framing the public official. I wonder if I should confront him? | 3 |
| 140 | Finished | The Hutt confessed and told his guards to open fire on me, it seems I have no more friends in the Cartel. | 1 |
| 145 | Finished | I ran into Drifter Malone outside of the Hutt Cartel who told me to meet him at his safe house at 173 Alley East if I wanted to live. | 1 |
| 150 | — | Drifter Malone met me at his safe house, and he told me any time I needed to come here I was welcome, and then he confirmed that the Hutt put a hit on me and an infamous bounty hunter named Daga Evga is looking for me. If I want to prove myself worthy enough to live I can find Daga in the Nar shaddaa Cantina and kill him, then return to the Hutt. | 1 |
| 155 | — | Daga Evga is dead, and I have a chance now of returning to the Hutt without being killed. | 1 |
| 160 | — | Badhiya the Hutt was very pleased with how I handled my situation and told me I am true Cartel material. He wants me to do a job for him to prove my loyalty by murdering Judge Cathod, a selkath that hangs around in the Manaan, Bazaar, in front of everyone, and return with my bounty from my crimes intact. I should find a travel agent in one of the docking bays whenever I'm ready to escape. | 1 |
| 165 | — | Judge Cathod is dead, and I am surely wanted dead now as well. I should get to the docking bay and find the travel agent to return to the Hutt. | 1 |
| 170 | Finished | Badhiya the Hutt was wildly impressed with me, he told me my bounty was cleared and if he ever needs me again he will send for me. He also told me to take a rookie gangster with me (generic follower not companion with respawn flag enabled), that gangsters live and dide and if he does die to come back and he will have another one for me. | 1 |

### Record-level trigger map

### Stage 0 — Finished

The Hutt Cartel

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 5

I have been offered a job with the Hutt Cartel, I should speak to the Hutt again if I'm interested.

**How this stage is set:**
- Dialogue INFO `236233052892221832` under topic **join the Hutt Cartel**; speaker Badhiya (`Bng_Badhiya`). locations: `Nar Shaddaa, Hutt Cartel`. response: “You want to join the Hutt Cartel? Do you think you have what it takes?”.

```text
Journal SW_HuttCartel 5
PlaySound3d "HuttVA1"
StopSound "HuttVA2"
```

### Stage 10

I have agreed to join the Hutt Cartel, and should speak with Drifter Malone to get my first assignment.

**How this stage is set:**
- Dialogue INFO `1523828576661912175` under topic **join the Hutt Cartel**; speaker Badhiya (`Bng_Badhiya`). locations: `Nar Shaddaa, Hutt Cartel`. conditions: Function/Choice Equal 1. response: “You want to try your luck, do you? Go speak with Drifter Malone at the other side of the building. He will get you started, little creature.”.

```text
PlaySound3d "HuttVA2"
StopSound "HuttVA1"
Journal SW_HuttCartel 10
ModDisposition 5
```

### Stage 15

Drifter Malone has given me some spice I'm supposed to deliver and deal to a Coruscanti named Karl Camp at 2500 Magari Alley in the Lower City.

**How this stage is set:**
- Dialogue INFO `242159092825031731` under topic **assignment**; speaker Drifter Malone (`SW_DrifterMalone`). locations: `Nar Shaddaa, Hutt Cartel`. conditions: Journal `SW_HuttCartel` Equal 10. response: “You're wanting to get wrapped up in this mess, are you? Well it's too late to back out now. Take this spice, deliver it to 2500 Magari Alley in the lower city and sell it to a man named Karl Camp for 100 credits. Come back to me when you've done that.”.

```text
player->additem, SW_Spice, 1
Journal SW_HuttCartel 15
AddTopic "spice"
```

### Stage 20

I have sold the spice to Karl and should report to Drifter Malone.

**How this stage is set:**
- Dialogue INFO `8775276111519821148` under topic **spice**; speaker Karl Camp (`SW_HuttCartel15`). locations: `Nar Shaddaa, 2500 Magari Alley`. conditions: Journal `SW_HuttCartel` Equal 15; Item/ItemType `SW_Spice` GreaterEqual 1. response: “My spice, yes, give it here, hurry now, go, go, go. I have much to do.”.

```text
player->removeitem, sw_spice, 1
player->additem, gold_001, 100
Journal SW_HuttCartel 20
```

### Stage 25

50 credits for dealing the drugs, it seems I'm in it now as he didn't ask this time, I need to resupply the Drifter with this package of contraband inside of the cantina in Sandriver, Tatooine.

**How this stage is set:**
- Dialogue INFO `23340138072842927756` under topic **assignment**; speaker Drifter Malone (`SW_DrifterMalone`). locations: `Nar Shaddaa, Hutt Cartel`. conditions: Journal `SW_HuttCartel` Equal 20. response: “Good, now take this package to Drifter Bima on Tatooine. He needs to be resupplied and he should be posted in the Cantina in Sandriver.”.

```text
player->additem, gold_001, 50
player->additem SW_HuttCartel30, 1
Journal SW_HuttCartel 25
```

### Stage 30

I have resupplied the Drifter on Tatooine and should return to Drifter Malone.

**How this stage is set:**
- Dialogue INFO `524430973911820170` under topic **assignment**; speaker Drifter Bima (`SW_Drifter30`). locations: `Tatooine, Cantina`. conditions: Journal `SW_HuttCartel` Equal 25; Item/ItemType `SW_HuttCartel30` GreaterEqual 1. response: “Yes, I was running low on supplies, give Drifter Malone my thanks.”.

```text
player->removeitem, SW_HuttCartel30, 1
Journal SW_HuttCartel 30
```

### Stage 35

Another 50 credits, that was an easy one, Drifter Malone told me to take a day off and to go spend all my credits in one place. I should return to him and get my next assignment.

**How this stage is set:**
- Dialogue INFO `654286512772321926` under topic **assignment**; speaker Drifter Malone (`SW_DrifterMalone`). locations: `Nar Shaddaa, Hutt Cartel`. conditions: Journal `SW_HuttCartel` Equal 30. response: “Easy money, right? Take the day off, go spend your money in one place. Come see me after to get your next assignment.”.

```text
player->additem, gold_001, 50
Journal SW_HuttCartel 35
```

### Stage 40

I've been given another spice deal assignement by Drifter Malone, this time to a Duros named Vee Roa at 1134 Central Alley in the Lower City.

**How this stage is set:**
- Dialogue INFO `23490322072086021904` under topic **assignment**; speaker Drifter Malone (`SW_DrifterMalone`). locations: `Nar Shaddaa, Hutt Cartel`. conditions: Journal `SW_HuttCartel` Equal 35. response: “I've got another spice deal for you. Sell this spice to a Duros named Vee Roa at 1134 Central Alley in the Lower City. 100 credits for the spice. Get going.”.

```text
player->additem, SW_Spice, 1
Journal SW_HuttCartel 40
```

### Stage 45

I've made the deal, I should head back to Drifter Malone.

**How this stage is set:**
- Dialogue INFO `30518299641742927036` under topic **spice**; speaker Vee Roa (`SW_HuttCartel40`). locations: `Nar Shaddaa, 1134 Central Alley`. conditions: Journal `SW_HuttCartel` Equal 40; Item/ItemType `SW_Spice` GreaterEqual 1. response: “My delivery? Much appreciated, stranger, I've been waiting on this one for a minute.”.

```text
player->removeitem, sw_spice, 1
player->additem, gold_001, 100
Journal SW_HuttCartel 45
```

### Stage 50

60 credits this time, looks like I'm getting a raise, Drifter Malone wants me to steal a slave from the Wampa Suite in the Deluxe Apartments. the Slave is a Togruta woman named Fey, I should bring her back here when I'm done, and Malone says I should be sneaky due to the high security of the apartment.

**How this stage is set:**
- Dialogue INFO `1213111880265503992` under topic **assignment**; speaker Drifter Malone (`SW_DrifterMalone`). locations: `Nar Shaddaa, Hutt Cartel`. conditions: Journal `SW_HuttCartel` Equal 45. response: “Here's your cut, this time I need you to steal a slave from some rich guy named Beff Jezos over at the Wampa Suite in the Deluxe Apartments. Badhiya the Hutt wants her and Jezos doesn't want to sell her. The slave is a Togruta woman named Fey, try to be sneaky, there's a lot of security in that apartment.”.

```text
Journal SW_HuttCartel 50
```

### Stage 55

I have the slave Fey in my possession, I should return her to the Hutt Cartel.

**How this stage is set:**
- Dialogue INFO `928028137435114203` under topic **assignment**; speaker Fey (`SW_HuttCartel55`). locations: `Nar Shaddaa, Wampa Suite`. conditions: Journal `SW_HuttCartel` Equal 50. response: “Let's go then, I want no trouble with Badhiya the Hutt.”.

```text
Journal SW_HuttCartel 55
AIFollow Player 0, 0, 0, 0
```

### Stage 57

Fey has been delivered to the Hutt Cartel.

**How this stage is set:**
- Script `SW_HuttEscort1`. attached to Npc Fey (`SW_HuttCartel55`); placed in `Nar Shaddaa, Wampa Suite`.

```text
; Move position, stop from following, update journal
    AiWander 0 0 0 0
    Journal SW_HuttCartel 57
endif
```
- Script `SW_HuttEscort1`. attached to Npc Fey (`SW_HuttCartel55`); placed in `Nar Shaddaa, Wampa Suite`.

```text
; Move position, stop from following, update journal
    AiWander 0 0 0 0
    Journal SW_HuttCartel 57
endif
```

### Stage 60

I have been paid in 100 credits for stealing the slave. Drifter Malone told me to take a break and come back when I'm ready for my next assignment.

**How this stage is set:**
- Dialogue INFO `1951531365425614664` under topic **assignment**; speaker Drifter Malone (`SW_DrifterMalone`). locations: `Nar Shaddaa, Hutt Cartel`. conditions: Journal `SW_HuttCartel` Equal 57. response: “Now that's how you get promoted to Smuggler, keep up the good work. Go take a break, come back when you're ready for your next assignment.”.

```text
player->additem, gold_001, 100
Journal SW_HuttCartel 60
```

### Stage 65

Drifter Malone wants me to resupply a Drifter in the Lower City currently working in Eddie's Den, he gave me a contraband package to deliver to him.

**How this stage is set:**
- Dialogue INFO `547041531893019289` under topic **assignment**; speaker Drifter Malone (`SW_DrifterMalone`). locations: `Nar Shaddaa, Hutt Cartel`. conditions: Journal `SW_HuttCartel` Equal 60. response: “I've got another Drifter, Drifter Hoa, here on Nar Shaddaa that needs to be resupplied. He should be in Eddie's Den in the Lower City, take this package to him and then get back here.”.

```text
Journal SW_HuttCartel 65
player->additem SW_HuttCartel65, 1
```

### Stage 70

I have resupplied the Drifter in Eddie's Den.

**How this stage is set:**
- Dialogue INFO `127639623529328406` under topic **assignment**; speaker Drifter Hoa (`SW_Drifter70`). locations: `Nar Shaddaa, Eddie's Den`. conditions: Journal `SW_HuttCartel` Equal 65; Item/ItemType `SW_HuttCartel65` GreaterEqual 1. response: “Yes, I was running low on supplies, give Drifter Malone my thanks.”.

```text
player->removeitem, SW_HuttCartel65, 1
Journal SW_HuttCartel 70
```

### Stage 75

Drifter Malone has paid me with 100 credits and a medkit, he wants me to secort a slave now to a shop, Starko's Arms, over on Dantooine.

**How this stage is set:**
- Dialogue INFO `29349299102878025455` under topic **assignment**; speaker Drifter Malone (`SW_DrifterMalone`). locations: `Nar Shaddaa, Hutt Cartel`. conditions: Journal `SW_HuttCartel` Equal 70. response: “Have to keep the wheels turning down here, good job. I've got a slave here I need you to deliver to Starkos' Arms over on Dantooine. Hurry back if you want this good assignment I have here waiting.”.

```text
player->additem, gold_001, 100
player->additem, SW_Medkit, 1
Journal SW_HuttCartel 75
SW_HuttCartel80->AIFollow Player 0, 0, 0, 0
```

### Stage 80

I have delivered the slave and should return to Drifter Malone.

**How this stage is set:**
- Script `SW_HuttEscort2`. attached to Npc Slave (`SW_HuttCartel80`); placed in `Nar Shaddaa, Hutt Cartel`.

```text
; Move position, stop from following, update journal
    AiWander 0 0 0 0
    Journal SW_HuttCartel 80
endif
```

### Stage 85

70 credits, I guess for an easy one, but now he wants me to steal some data from a member of the exchange, Oohn Rivers, an Ithorian in the Lower City Bazaar. I should pickpocket him to avoid getting caught.

**How this stage is set:**
- Dialogue INFO `2836227597196628804` under topic **assignment**; speaker Drifter Malone (`SW_DrifterMalone`). locations: `Nar Shaddaa, Hutt Cartel`. conditions: Journal `SW_HuttCartel` Equal 80. response: “That was an easy one, now I've got a pickpocketing assignment for you. This has to be done with stealth, if you get caught this assignment is failed, and Badhiya the Hutt does not tolerate failure. There's an Ithorian named Oohn Rivers in the bazaar down in the Lower City, I need you to pickpocket some data from him. Don't try this if you're not ready, you have to be sneaky.”.

```text
player->additem, gold_001, 70
Journal SW_HuttCartel 85
```

### Stage 90

I have the data and should report to Drifter Malone now.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 95

Drifter Malone says this is the last assignment he can give me, I'm supposed to sneak into a hut on Kashyyk owned by an Ithorian doctor to get some kind of new age surveillance equipment he has been designing. I should do this without getting caught.

**How this stage is set:**
- Dialogue INFO `585726994111054922` under topic **assignment**; speaker Drifter Malone (`SW_DrifterMalone`). locations: `Nar Shaddaa, Hutt Cartel`. conditions: Journal `SW_HuttCartel` Equal 85; Item/ItemType `SW_HutCartel90` GreaterEqual 1. response: “You got the data? I think it's time you've earned a promotion, congratulations %PCName, you're a Smuggler now. So this assignment will be the last one that I can give you, you've made it into the big leagues now. Some damn doctor on Kashyyk has been creating an experimental surviellance device that could cause trouble for the Hutts. Find him, break into his hut, and take the device, then bring it back to me. Get going Smuggler.”.

```text
player->removeitem, SW_HutCartel90, 1
player->additem, gold_001, 150
Journal SW_HuttCartel 95
PCRaiseRank
```

### Stage 100

I now have the experimental device and should return to Drifter Malone.

**How this stage is set:**
- Script `SW_HuttDevice`. attached to MiscItem Experimental Device (`SW_HuttCartel100`); placed in `Kashyyk, Orange Manor`.

```text
If ( OnActivate )
    If ( GetJournalIndex SW_HuttCartel >= 95 )
        Journal SW_HuttCartel 100
        Activate
    else
```

### Stage 105

Another 100 credits, Drifter Malone isn't allowed to give me assignments now, he says I made it to the big leagues and should report to Badhiya the Hutt from here on out.

**How this stage is set:**
- Dialogue INFO `192513209316459759` under topic **assignment**; speaker Drifter Malone (`SW_DrifterMalone`). locations: `Nar Shaddaa, Hutt Cartel`. conditions: Journal `SW_HuttCartel` Greater 95; Item/ItemType `SW_HuttCartel100` GreaterEqual 1. response: “I can pay you pretty good for that one, but that's all I can do for you. You've done well, but tread carefully from here on out, the Hutts are not a joke. You'll have to see Badhiya the Hutt for new assignments.”.

```text
player->removeitem, SW_HuttCartel100, 1
player->additem gold_001, 150
Journal SW_HuttCartel 105
```

### Stage 110

Badhiya the Hutt wants me to steal five unprocessed kolto from the processing plant on Manaan. He told me if I was caught I would never be able to finish the mission, and that he doesn't like to be disappointed.

**How this stage is set:**
- Dialogue INFO `6754257422597914099` under topic **assignment**; speaker Badhiya (`Bng_Badhiya`). locations: `Nar Shaddaa, Hutt Cartel`. conditions: Journal `SW_HuttCartel` Equal 105. response: “You have done good for The Hutt Cartel, %PCName. But this one will not be easy, we need unprocessed kolto, stolen from the processing plant on Manaan. If you get caught, you may never be able to complete this assignment. I do not like to be disappointed.”.

```text
Journal SW_HuttCartel 110
PlaySound3d "HuttVA2"
StopSound "HuttVA1"
```

### Stage 115

I have 5 unprocessed kolto, I should return to Badhiya the Hutt.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 120

The Hutt was overly pleased and paid me in 200 credits, he told me to go gamble or rest and then to return to him.

**How this stage is set:**
- Dialogue INFO `25469911884310735` under topic **assignment**; speaker Badhiya (`Bng_Badhiya`). locations: `Nar Shaddaa, Hutt Cartel`. conditions: Journal `SW_HuttCartel` Equal 110; Item/ItemType `SW_KoltoIngred` GreaterEqual 5. response: “Unprocessed kolto, yes, this will do good for Badhiya the Hutt. I pay you more now, Smuggler. Go gamble the credits, or go rest, then return to me.”.

```text
player->removeitem, sw_koltoingred, 5
player->additem, gold_001, 200
Journal SW_HuttCartel 120
PlaySound3d "HuttVA2"
StopSound "HuttVA1"
```

### Stage 125

We're framing a public official that lives in the Ginx Suite of the Deluxe Apartments, he wants me to plant these three deathsticks in a chest at the foot of his bed.

**How this stage is set:**
- Dialogue INFO `3659182991116014522` under topic **assignment**; speaker Badhiya (`Bng_Badhiya`). locations: `Nar Shaddaa, Hutt Cartel`. conditions: Journal `SW_HuttCartel` Equal 120. response: “We are going to frame a public official that lives in the Ginx Suite of the Deluxe Apartments. I want you to plant these three deathsticks in a chest at the foot of his bed.”.

```text
Journal SW_HuttCartel 125
player->additem, SW_StrongSpice, 3
SW_DrifterMalone->Disable
```

### Stage 130

After planting the deathsticks I was ambushed by a bounty hunter, I should search him to learn more.

**How this stage is set:**
- Script `SW_ChestDeathsticks`. attached to Container Container (`SW_Chest130`); placed in `Nar Shaddaa, Ginx Suite`.

```text
If ( GetJournalIndex SW_HuttCartel == 125 )
        If ( GetItemCount, "SW_StrongSpice" >= 3 )
            Journal SW_HuttCartel 130
            MessageBox "You hear the door to the Suite open and close."
            SW_HuttCartel132->Enable
```

### Stage 135

I found a datapad identifying the bounty hunter as Gru Bajari, it looks like he was sent by Badhiya the Hutt, I guess he didn't want me to slip about framing the public official. I wonder if I should confront him?

**How this stage is set:**
- Script `SW_HuttDatapadActivate`. attached to Book Assassin's Datapad (`SW_HuttCartel135`).

```text
If ( OnActivate )
    If (GetJournalIndex SW_HuttCartel != 135 )
        Journal SW_HuttCartel 135
        SW_DrifterMalone2->Enable
        Return
```

```text
If ( OnPCEquip )
    If (GetJournalIndex SW_HuttCartel != 135 )
        Journal SW_HuttCartel 135
        SW_DrifterMalone2->Enable
        Return
```

```text
If ( Player->GetItemCount, SW_HuttCartel135 >= 1 )
    If (GetJournalIndex SW_HuttCartel != 135 )
        Journal SW_HuttCartel 135
        SW_DrifterMalone2->Enable
        Return
```
- Script `SW_HuttDatapadActivate`. attached to Book Assassin's Datapad (`SW_HuttCartel135`).

```text
If ( OnActivate )
    If (GetJournalIndex SW_HuttCartel != 135 )
        Journal SW_HuttCartel 135
        SW_DrifterMalone2->Enable
        Return
```

```text
If ( OnPCEquip )
    If (GetJournalIndex SW_HuttCartel != 135 )
        Journal SW_HuttCartel 135
        SW_DrifterMalone2->Enable
        Return
```

```text
If ( Player->GetItemCount, SW_HuttCartel135 >= 1 )
    If (GetJournalIndex SW_HuttCartel != 135 )
        Journal SW_HuttCartel 135
        SW_DrifterMalone2->Enable
        Return
```
- Script `SW_HuttDatapadActivate`. attached to Book Assassin's Datapad (`SW_HuttCartel135`).

```text
If ( OnActivate )
    If (GetJournalIndex SW_HuttCartel != 135 )
        Journal SW_HuttCartel 135
        SW_DrifterMalone2->Enable
        Return
```

```text
If ( OnPCEquip )
    If (GetJournalIndex SW_HuttCartel != 135 )
        Journal SW_HuttCartel 135
        SW_DrifterMalone2->Enable
        Return
```

```text
If ( Player->GetItemCount, SW_HuttCartel135 >= 1 )
    If (GetJournalIndex SW_HuttCartel != 135 )
        Journal SW_HuttCartel 135
        SW_DrifterMalone2->Enable
        Return
```

### Stage 140 — Finished

The Hutt confessed and told his guards to open fire on me, it seems I have no more friends in the Cartel.

**How this stage is set:**
- Dialogue INFO `2720412411707917058` under topic **assignment**; speaker Dar'Ning"Bobbin (`Bng_Dar_Ning`). locations: `Nar Shaddaa, Makacheesa Market`. conditions: Journal `SW_HuttCartel` Equal 135. response: “Badhiya thought you were dead. I guess Bajari wasn't as good as they say he is. This is no matter, my Gammoreans will take care of you.”.

```text
Journal SW_HuttCartel 140
SW_GammGuardian->StartCombat, Player
SW_GammGuardian2->StartCombat, Player
```

### Stage 145 — Finished

I ran into Drifter Malone outside of the Hutt Cartel who told me to meet him at his safe house at 173 Alley East if I wanted to live.

**How this stage is set:**
- Dialogue INFO `1031229532681331651` under topic **Greeting 7**; speaker Drifter Malone (`SW_DrifterMalone2`). locations: `Nar Shaddaa, Peyuska Plaza`. conditions: Journal `SW_HuttCartel` Equal 135. response: “If you want to leave, don't go in there, meet me at my safe house at 173 Alley East in the Lower City.”.

```text
Journal SW_HuttCartel 145
```

### Stage 150

Drifter Malone met me at his safe house, and he told me any time I needed to come here I was welcome, and then he confirmed that the Hutt put a hit on me and an infamous bounty hunter named Daga Evga is looking for me. If I want to prove myself worthy enough to live I can find Daga in the Nar shaddaa Cantina and kill him, then return to the Hutt.

**How this stage is set:**
- Dialogue INFO `2724013872644230704` under topic **Greeting 7**; speaker Drifter Malone (`SW_DrifterMalone3`). locations: `Nar Shaddaa, 173 Alley East`. conditions: Journal `SW_HuttCartel` Equal 145. response: “This is my safe house, %PCName, you're welcome to come here any time you need. Badhiya the Hutt has put a hit on you to keep you quiet about framing the public official. There is an infamous bounty hunter that goes by the name of Daga Evga that is looking to fill your bounty. If you kill Evga, then Badhiya will surely be impressed, I wouldn't return to the Hutt Cartel until Evga is dead. Last I heard Dava Evga was in the Cantina by the docking bays.”.

```text
SW_DrifterMalone2->Disable
Journal SW_HuttCartel 150
```

### Stage 155

Daga Evga is dead, and I have a chance now of returning to the Hutt without being killed.

**How this stage is set:**
- Script `SW_EvgasDead`. attached to Npc Dava Evga (`SW_Evga`); placed in `Nar Shaddaa, Cantina`.

```text
If ( GetDeadCount "SW_Evga" >= 1 )
    Journal SW_HuttCartel 155
endif
```

### Stage 160

Badhiya the Hutt was very pleased with how I handled my situation and told me I am true Cartel material. He wants me to do a job for him to prove my loyalty by murdering Judge Cathod, a selkath that hangs around in the Manaan, Bazaar, in front of everyone, and return with my bounty from my crimes intact. I should find a travel agent in one of the docking bays whenever I'm ready to escape.

**How this stage is set:**
- Dialogue INFO `158789767209664680` under topic **assignment**; speaker Badhiya (`Bng_Badhiya`). locations: `Nar Shaddaa, Hutt Cartel`. conditions: Journal `SW_HuttCartel` Equal 155. response: “You killed Dava Evga? And Gru Bajari? Maybe I was wrong to put a bounty on you, I will have it removed. You have proved to be most useful to Badhiya. I have one final assignment for you for now, to prove that you are still loyal to The Hutt Cartel. There is a Selkath on Manaan, Judge Cathod, who hangs around in Manaan, Central. Kill him, in front of everyone, and then make it back to the Manaan Docking Bays. I will clear your bounty when, if, you return. A travel agent will be waiting in a docking bay.”.

```text
Journal SW_HuttCartel 160
PlaySound3d "HuttVA2"
StopSound "HuttVA1"
```

### Stage 165

Judge Cathod is dead, and I am surely wanted dead now as well. I should get to the docking bay and find the travel agent to return to the Hutt.

**How this stage is set:**
- Script `SW_CathodsDead`. attached to Npc Judge Cathod (`SW_Cathod`); placed in `Manaan, Central`.

```text
If ( GetDeadCount "SW_Cathod" >= 1 )
    If ( DoOnce == 0 )
    Journal SW_HuttCartel 165
    ModPCCrimeLevel, 99999
    Set DoOnce to 1
```

### Stage 170 — Finished

Badhiya the Hutt was wildly impressed with me, he told me my bounty was cleared and if he ever needs me again he will send for me. He also told me to take a rookie gangster with me (generic follower not companion with respawn flag enabled), that gangsters live and dide and if he does die to come back and he will have another one for me.

**How this stage is set:**
- Dialogue INFO `169614141235448792` under topic **assignment**; speaker Badhiya (`Bng_Badhiya`). locations: `Nar Shaddaa, Hutt Cartel`. conditions: Journal `SW_HuttCartel` Equal 165. response: “Judge Cathod is dead, I have heard this. You have done well for The Hutt Cartel, and if I ever have more need of you I will call for you. For now, enjoy some time off, take these credits, and have a gangster to accompany you in the name of The Hutt Cartel. Gangsters live, gangsters die, if he dies come back and get another one. I am very impressed with you, %PCName.”.

```text
Journal SW_HuttCartel 170
SetPCCrimeLevel, 0
player->removeitem, SW_HuttBeacon, 1
```

### Related records and locations

**Dialogue speakers:**
- Badhiya (`Bng_Badhiya`) — `Nar Shaddaa, Hutt Cartel`
- Dar'Ning"Bobbin (`Bng_Dar_Ning`) — `Nar Shaddaa, Makacheesa Market`
- Drifter Bima (`SW_Drifter30`) — `Tatooine, Cantina`
- Drifter Hoa (`SW_Drifter70`) — `Nar Shaddaa, Eddie's Den`
- Drifter Malone (`SW_DrifterMalone`) — `Nar Shaddaa, Hutt Cartel`
- Drifter Malone (`SW_DrifterMalone2`) — `Nar Shaddaa, Peyuska Plaza`
- Drifter Malone (`SW_DrifterMalone3`) — `Nar Shaddaa, 173 Alley East`
- Karl Camp (`SW_HuttCartel15`) — `Nar Shaddaa, 2500 Magari Alley`
- Vee Roa (`SW_HuttCartel40`) — `Nar Shaddaa, 1134 Central Alley`
- Fey (`SW_HuttCartel55`) — `Nar Shaddaa, Wampa Suite`

**Scripts that read or write this journal:**
- `SW_CathodsDead` — Npc Judge Cathod (`SW_Cathod`); placed in `Manaan, Central`
- `SW_ChestDeathsticks` — Container Container (`SW_Chest130`); placed in `Nar Shaddaa, Ginx Suite`
- `SW_DisableJudge`
- `SW_DisableMalone` — Npc Drifter Malone (`SW_DrifterMalone3`); placed in `Nar Shaddaa, 173 Alley East`
- `SW_EvgasDead` — Npc Dava Evga (`SW_Evga`); placed in `Nar Shaddaa, Cantina`
- `SW_HuttDatapadActivate` — Book Assassin's Datapad (`SW_HuttCartel135`)
- `SW_HuttDevice` — MiscItem Experimental Device (`SW_HuttCartel100`); placed in `Kashyyk, Orange Manor`
- `SW_HuttDriverDisable` — Npc Hutt Pilot (`SW_HuttDriver`); placed in `Manaan, Docking Bay`
- `SW_HuttEscort1` — Npc Fey (`SW_HuttCartel55`); placed in `Nar Shaddaa, Wampa Suite`
- `SW_HuttEscort2` — Npc Slave (`SW_HuttCartel80`); placed in `Nar Shaddaa, Hutt Cartel`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)
- Contraband Datapad (`SW_HutCartel90`)
- Beacon Horn (`SW_HuttBeacon`)
- Experimental Device (`SW_HuttCartel100`)
- Assassin's Datapad (`SW_HuttCartel135`)
- Contraband Package (`SW_HuttCartel30`)
- Contraband Package (`SW_HuttCartel65`)
- Unprocessed Kolto (`SW_KoltoIngred`)
- Medkit (`SW_Medkit`)
- Spice (`SW_Spice`)
- Spice (`SW_Spice`)
- Deathsticks (`SW_StrongSpice`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Kashyyk, Orange Manor`
- `Manaan, Central`
- `Manaan, Docking Bay`
- `Nar Shaddaa, 1134 Central Alley`
- `Nar Shaddaa, 173 Alley East`
- `Nar Shaddaa, 2500 Magari Alley`
- `Nar Shaddaa, Cantina`
- `Nar Shaddaa, Eddie's Den`
- `Nar Shaddaa, Ginx Suite`
- `Nar Shaddaa, Hutt Cartel`
- `Nar Shaddaa, Makacheesa Market`
- `Nar Shaddaa, Peyuska Plaza`
- `Nar Shaddaa, Wampa Suite`
- `Tatooine, Cantina`

<details><summary>Journal-state readers (7 code sites)</summary>

- Script `SW_CathodsDead`. attached to Npc Judge Cathod (`SW_Cathod`); placed in `Manaan, Central`.
- Script `SW_ChestDeathsticks`. attached to Container Container (`SW_Chest130`); placed in `Nar Shaddaa, Ginx Suite`.
- Script `SW_DisableJudge`.
- Script `SW_DisableMalone`. attached to Npc Drifter Malone (`SW_DrifterMalone3`); placed in `Nar Shaddaa, 173 Alley East`.
- Script `SW_HuttDatapadActivate`. attached to Book Assassin's Datapad (`SW_HuttCartel135`).
- Script `SW_HuttDevice`. attached to MiscItem Experimental Device (`SW_HuttCartel100`); placed in `Kashyyk, Orange Manor`.
- Script `SW_HuttDriverDisable`. attached to Npc Hutt Pilot (`SW_HuttDriver`); placed in `Manaan, Docking Bay`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `0` is obtainable.
- [ ] Reach index `0` (`Finished`): The Hutt Cartel
- [ ] Reach index `5`: I have been offered a job with the Hutt Cartel, I should speak to the Hutt again if I'm interested.
- [ ] Reach index `10`: I have agreed to join the Hutt Cartel, and should speak with Drifter Malone to get my first assignment.
- [ ] Reach index `15`: Drifter Malone has given me some spice I'm supposed to deliver and deal to a Coruscanti named Karl Camp at 250…
- [ ] Reach index `20`: I have sold the spice to Karl and should report to Drifter Malone.
- [ ] Reach index `25`: 50 credits for dealing the drugs, it seems I'm in it now as he didn't ask this time, I need to resupply the Dr…
- [ ] Reach index `30`: I have resupplied the Drifter on Tatooine and should return to Drifter Malone.
- [ ] Reach index `35`: Another 50 credits, that was an easy one, Drifter Malone told me to take a day off and to go spend all my cred…
- [ ] Reach index `40`: I've been given another spice deal assignement by Drifter Malone, this time to a Duros named Vee Roa at 1134 C…
- [ ] Reach index `45`: I've made the deal, I should head back to Drifter Malone.
- [ ] Reach index `50`: 60 credits this time, looks like I'm getting a raise, Drifter Malone wants me to steal a slave from the Wampa …
- [ ] Reach index `55`: I have the slave Fey in my possession, I should return her to the Hutt Cartel.
- [ ] Reach index `57`: Fey has been delivered to the Hutt Cartel.
- [ ] Reach index `60`: I have been paid in 100 credits for stealing the slave. Drifter Malone told me to take a break and come back w…
- [ ] Reach index `65`: Drifter Malone wants me to resupply a Drifter in the Lower City currently working in Eddie's Den, he gave me a…
- [ ] Reach index `70`: I have resupplied the Drifter in Eddie's Den.
- [ ] Reach index `75`: Drifter Malone has paid me with 100 credits and a medkit, he wants me to secort a slave now to a shop, Starko'…
- [ ] Reach index `80`: I have delivered the slave and should return to Drifter Malone.
- [ ] Reach index `85`: 70 credits, I guess for an easy one, but now he wants me to steal some data from a member of the exchange, Ooh…
- [ ] Reach index `90`: I have the data and should report to Drifter Malone now.
- [ ] Reach index `95`: Drifter Malone says this is the last assignment he can give me, I'm supposed to sneak into a hut on Kashyyk ow…
- [ ] Reach index `100`: I now have the experimental device and should return to Drifter Malone.
- [ ] Reach index `105`: Another 100 credits, Drifter Malone isn't allowed to give me assignments now, he says I made it to the big lea…
- [ ] Reach index `110`: Badhiya the Hutt wants me to steal five unprocessed kolto from the processing plant on Manaan. He told me if I…
- [ ] Reach index `115`: I have 5 unprocessed kolto, I should return to Badhiya the Hutt.
- [ ] Reach index `120`: The Hutt was overly pleased and paid me in 200 credits, he told me to go gamble or rest and then to return to …
- [ ] Reach index `125`: We're framing a public official that lives in the Ginx Suite of the Deluxe Apartments, he wants me to plant th…
- [ ] Reach index `130`: After planting the deathsticks I was ambushed by a bounty hunter, I should search him to learn more.
- [ ] Reach index `135`: I found a datapad identifying the bounty hunter as Gru Bajari, it looks like he was sent by Badhiya the Hutt, …
- [ ] Reach index `140` (`Finished`): The Hutt confessed and told his guards to open fire on me, it seems I have no more friends in the Cartel.
- [ ] Reach index `145` (`Finished`): I ran into Drifter Malone outside of the Hutt Cartel who told me to meet him at his safe house at 173 Alley Ea…
- [ ] Reach index `150`: Drifter Malone met me at his safe house, and he told me any time I needed to come here I was welcome, and then…
- [ ] Reach index `155`: Daga Evga is dead, and I have a chance now of returning to the Hutt without being killed.
- [ ] Reach index `160`: Badhiya the Hutt was very pleased with how I handled my situation and told me I am true Cartel material. He wa…
- [ ] Reach index `165`: Judge Cathod is dead, and I am surely wanted dead now as well. I should get to the docking bay and find the tr…
- [ ] Reach index `170` (`Finished`): Badhiya the Hutt was wildly impressed with me, he told me my bounty was cleared and if he ever needs me again …
- [ ] Branch coverage: this journal has **4 different `Finished` entries**; test each reachable completion branch.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_HuttCartel`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
