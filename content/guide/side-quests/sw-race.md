---
title: "The Race"
description: "Walkthrough and QA reference for The Race (SW_Race)."
weight: 102
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_Race"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_Race` |
| **Category** | Side Quests |
| **Journal entries** | 10 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Carlo Terro** in **Tatooine, Carl Terro's Droid Shop** and ask about **swoop racing**. |
| **Observed prerequisite journals** | `SW_Meeta` |
| **Key locations** | Tatooine Czerka Office, Tatooine, Carl Terro's Droid Shop, Tatooine, Hutt Base, Tatooine, Sandriver, TatooineRace |
| **Key characters** | Carlo Terro, Henro Ambeedo, Blaine Willikie, Thavo Fum |

## Walkthrough

### 1. Speak with Carlo Terro in Tatooine, Carl Terro's Droid Shop and ask about swoop racing

Speak with **Carlo Terro** in **Tatooine, Carl Terro's Droid Shop** and ask about **swoop racing**.

> **Expected journal update — index 1:** Now that there are enough racers for the local swoop race I should meet up with Hungox the Hutt to buy a ticket and see the show.

**Known item transfer:** 100 × **Credits** (`Gold_001`).

### 2. Speak with Thavo Fum in Tatooine, Sandriver and ask about swoop racing

Speak with **Thavo Fum** in **Tatooine, Sandriver** and ask about **swoop racing**.

> **Expected journal update — index 5:** I spoke with the Hungox's Steward and was told my ticket was already paid for by an anonymous buyer. I should speak with him about it again soon to make sure I make it on time.

### 3. Speak with Thavo Fum in Tatooine, Sandriver and ask about swoop racing

Speak with **Thavo Fum** in **Tatooine, Sandriver** and ask about **swoop racing**.

> **Expected journal update — index 10:** The race is beginning, I should pay attention.

### 4. Allow the scripted event handled by `SW_RaceBegin` to complete

The records expose more than one way to reach this journal update:
- Allow the scripted event handled by `SW_RaceBegin` to complete.
- Speak with **Henro Ambeedo** in **TatooineRace** and ask about **done with the race**.

> **Expected journal update — index 15:** It seems like a lot of problems happened at the race, maybe I should check in with the Czerka Office and see if they have any related work now.

### 5. Speak with Blaine Willikie in Tatooine Czerka Office and ask about investigate the race

Speak with **Blaine Willikie** in **Tatooine Czerka Office** and ask about **investigate the race**.

> **Expected journal update — index 20:** The Czerka Corporation is convinced that the Hutt cheated, they asked me to infiltrate their base and find out what they've done.

### 6. Speak with Thavo Fum in Tatooine, Sandriver and ask about join the crew

Speak with **Thavo Fum** in **Tatooine, Sandriver** and ask about **join the crew**.

> **Expected journal update — index 25:** The Hutt says I have to prove myself, apparently the Zillows gang has gotten out of hand and they want me to kill their local recruiter, Beero Baskin. They've given me a key to his home and told me to return with his engraved blaster to prove that he's been killed.

### 7. Speak with Thavo Fum in Tatooine, Sandriver and ask about join the crew

Speak with **Thavo Fum** in **Tatooine, Sandriver** and ask about **join the crew**.

> **Expected journal update — index 30:** Hungox has recruited me into his Cartel, and I've gained a key to his base around the back of the Dueling Ring. I'm supposed to be on patrol in his base today, perfect, now I can look for evidence.

**Known item transfer:** 1 × **Key to Hutt Base** (`SW_HuttBaseKey`).

### 8. Activate Pod Racer in Tatooine, Hutt Base

Activate **Pod Racer** in **Tatooine, Hutt Base**.

> **Expected journal update — index 35:** I found their pod racer and after examining it I have found it's pretty obvious it was heavily modified to a point that it violates the rules of the swoop race. I should return to the Czerka Office.

### 9. Speak with Blaine Willikie in Tatooine Czerka Office and ask about investigate the race — Finished

Speak with **Blaine Willikie** in **Tatooine Czerka Office** and ask about **investigate the race**.

> **Expected journal update — index 40:** The Czerka Corporation awarded me with 1,000 credits and my reputation with their company has increased.

**Known item transfer:** 1000 × **Credits** (`Gold_001`).

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 40**:

> The Czerka Corporation awarded me with 1,000 credits and my reputation with their company has increased.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 100 × **Credits** (`Gold_001`)
- 1 × **Key to Hutt Base** (`SW_HuttBaseKey`)
- 1000 × **Credits** (`Gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Carlo Terro** (`SW_CarlTerro`) — `Tatooine, Carl Terro's Droid Shop`
- **Henro Ambeedo** (`SW_CzerkaArena`) — `TatooineRace`
- **Blaine Willikie** (`SW_CzerkaOfficeGuy`) — `Tatooine Czerka Office`
- **Thavo Fum** (`SW_HungoxSteward`) — `Tatooine, Sandriver`, `TatooineRace`

**Locations implicated by actor/object placement or explicit travel:**
- **Tatooine Czerka Office**
- **Tatooine, Carl Terro's Droid Shop**
- **Tatooine, Hutt Base**
- **Tatooine, Sandriver**
- **TatooineRace**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_Race`
**Generated category:** Side Quests
**Journal entries:** 10

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 1 | — | Now that there are enough racers for the local swoop race I should meet up with Hungox the Hutt to buy a ticket and see the show. | 1 |
| 5 | — | I spoke with the Hungox's Steward and was told my ticket was already paid for by an anonymous buyer. I should speak with him about it again soon to make sure I make it on time. | 1 |
| 10 | — | The race is beginning, I should pay attention. | 1 |
| 15 | — | It seems like a lot of problems happened at the race, maybe I should check in with the Czerka Office and see if they have any related work now. | 2 |
| 20 | — | The Czerka Corporation is convinced that the Hutt cheated, they asked me to infiltrate their base and find out what they've done. | 1 |
| 25 | — | The Hutt says I have to prove myself, apparently the Zillows gang has gotten out of hand and they want me to kill their local recruiter, Beero Baskin. They've given me a key to his home and told me to return with his engraved blaster to prove that he's been killed. | 1 |
| 30 | — | Hungox has recruited me into his Cartel, and I've gained a key to his base around the back of the Dueling Ring. I'm supposed to be on patrol in his base today, perfect, now I can look for evidence. | 1 |
| 35 | — | I found their pod racer and after examining it I have found it's pretty obvious it was heavily modified to a point that it violates the rules of the swoop race. I should return to the Czerka Office. | 1 |
| 40 | Finished | The Czerka Corporation awarded me with 1,000 credits and my reputation with their company has increased. | 1 |

### Record-level trigger map

### Stage 1

Now that there are enough racers for the local swoop race I should meet up with Hungox the Hutt to buy a ticket and see the show.

**How this stage is set:**
- Dialogue INFO `2830010052353313670` under topic **swoop racing**; speaker Carlo Terro (`SW_CarlTerro`). locations: `Tatooine, Carl Terro's Droid Shop`. conditions: Journal `SW_Meeta` Equal 16. response: “Sponsor Meeta for a swoop race? That may not be a bad idea. Usually I turn the racers away but Meeta has a lot of potential and who knows how well he will do not being pressured and harassed by the Hutt and his men. You've got yourself a sponsor, and here, for all your troubles. You may want to use that money to buy a ticket for the race, I'm sure the Hutt will be putting it together soon.”.

```text
Journal "SW_Meeta" 20
Journal "SW_Race" 1
player->modReputation 1
player->additem "Gold_001",100
```

### Stage 5

I spoke with the Hungox's Steward and was told my ticket was already paid for by an anonymous buyer. I should speak with him about it again soon to make sure I make it on time.

**How this stage is set:**
- Dialogue INFO `164183268392131493` under topic **swoop racing**; speaker Thavo Fum (`SW_HungoxSteward`). locations: `Tatooine, Sandriver`, `TatooineRace`. conditions: Journal `SW_Race` Equal 1. response: “Looks like your ticket has already been bought by an anonymous buyer. Check up again when your ready, the race will be starting soon. You will ride their on our ship, we have built a track farther into the desert.”.

```text
Journal "SW_Race" 5
StopSound "ThavoAntidote1"
StopSound "ThavoAntidote2"
```

### Stage 10

The race is beginning, I should pay attention.

**How this stage is set:**
- Dialogue INFO `2321270623021025193` under topic **swoop racing**; speaker Thavo Fum (`SW_HungoxSteward`). locations: `Tatooine, Sandriver`, `TatooineRace`. conditions: Journal `SW_Race` Equal 5. response: “Load up onto the ship and let's get this started.”.

```text
Journal "SW_Race" 10
Player->PositionCell, 2228, 27938, 8793, 263, TatooineRace
PlaySound "SatchelBlast"
```

### Stage 15

It seems like a lot of problems happened at the race, maybe I should check in with the Czerka Office and see if they have any related work now.

**How this stage is set:**
- Script `SW_RaceBegin`.

```text
StopSound "SW_SoRaceStart"
                    MessageBox "And the Hutt wins the race!"
                    Journal SW_Race 15
                    PlaySound "SW_SoRaceWin"
                    StopScript SW_RaceBegin
```
- Dialogue INFO `2867614245275102238` under topic **done with the race**; speaker Henro Ambeedo (`SW_CzerkaArena`). locations: `TatooineRace`. conditions: Journal `SW_Race` Equal 10. response: “But it's not over yet? Okay, let's go.”.

```text
Player->PositionCell, 6070, 6382, 12290, 166, "Tatooine, Sandriver"
Journal SW_Race 15
```

### Stage 20

The Czerka Corporation is convinced that the Hutt cheated, they asked me to infiltrate their base and find out what they've done.

**How this stage is set:**
- Dialogue INFO `2925468961404125417` under topic **investigate the race**; speaker Blaine Willikie (`SW_CzerkaOfficeGuy`). locations: `Tatooine Czerka Office`. conditions: Journal `SW_Race` Equal 15. response: “Yep we need proof that the Hutt cheated, it's pretty obvious but accusations without evidence is useless. I need someone to infilitrate their base and find their pod racer; let me know if you find anything. We will spread rumors that you're looking to join them, maybe that will help, make it look like you've got the local authorities nervous.”.

```text
Journal "SW_Race" 20
StopSound "COBantha1"
StopSound "COBantha3"
```

### Stage 25

The Hutt says I have to prove myself, apparently the Zillows gang has gotten out of hand and they want me to kill their local recruiter, Beero Baskin. They've given me a key to his home and told me to return with his engraved blaster to prove that he's been killed.

**How this stage is set:**
- Dialogue INFO `8705253542939816804` under topic **join the crew**; speaker Thavo Fum (`SW_HungoxSteward`). locations: `Tatooine, Sandriver`, `TatooineRace`. conditions: Journal `SW_Race` Equal 20. response: “I hear your looking to join the crew, got a pretty good name for yourself out there. I tell you what, there's a Rodian named Peero Baskin in the Rodian District causing some trouble for us in the name of the Zillow gang. Take him out, then come talk to me. Oh, and bring me his engraved blaster as proof.”.

```text
Journal "SW_Race" 25
StopSound "ThavoAntidote1"
StopSound "ThavoAntidote2"
```

### Stage 30

Hungox has recruited me into his Cartel, and I've gained a key to his base around the back of the Dueling Ring. I'm supposed to be on patrol in his base today, perfect, now I can look for evidence.

**How this stage is set:**
- Dialogue INFO `23364313691160010210` under topic **join the crew**; speaker Thavo Fum (`SW_HungoxSteward`). locations: `Tatooine, Sandriver`, `TatooineRace`. conditions: Journal `SW_Race` Equal 25; Item/ItemType `SW_BlasterPistolBeero` Equal 1. response: “Fine job, that punk was becoming a nuisance. Here, take this key and go around back, the entrance to the base is inside the fence. Your on guard duty today, just stay in the main entrance.”.

```text
Journal "SW_Race" 30
player->additem SW_HuttBaseKey, 1
StopSound "ThavoAntidote1"
```

### Stage 35

I found their pod racer and after examining it I have found it's pretty obvious it was heavily modified to a point that it violates the rules of the swoop race. I should return to the Czerka Office.

**How this stage is set:**
- Script `SW_HuttPodRacer`. attached to Activator Pod Racer (`SW_PodRacer`); placed in `Tatooine, Hutt Base`.

```text
if ( OnActivate )
     MessageBox "This racer is heavily modified, far beyond any regulations of a race."
    Journal "SW_Race" 35
   endif
```

### Stage 40 — Finished

The Czerka Corporation awarded me with 1,000 credits and my reputation with their company has increased.

**How this stage is set:**
- Dialogue INFO `141112732411421727` under topic **investigate the race**; speaker Blaine Willikie (`SW_CzerkaOfficeGuy`). locations: `Tatooine Czerka Office`. conditions: Journal `SW_Race` Equal 35. response: “Well done, that's all the proof we need. We can force them to give us the winnings now. Here's 1,000 credits for your service. Also you've proven to be pretty capable, you may want to try swoop racing out for yourself, the track is open for business now. Unfortunately, it's ran by Hungox, but if you can take their credits from them then I say go for it.”.

```text
Journal "SW_Race" 40
Journal "SW_Racing" 1
player->additem Gold_001, 1000
```

### Related records and locations

**Dialogue speakers:**
- Carlo Terro (`SW_CarlTerro`) — `Tatooine, Carl Terro's Droid Shop`
- Henro Ambeedo (`SW_CzerkaArena`) — `TatooineRace`
- Blaine Willikie (`SW_CzerkaOfficeGuy`) — `Tatooine Czerka Office`
- Thavo Fum (`SW_HungoxSteward`) — `Tatooine, Sandriver`, `TatooineRace`

**Scripts that read or write this journal:**
- `SW_HuttPodRacer` — Activator Pod Racer (`SW_PodRacer`); placed in `Tatooine, Hutt Base`
- `SW_RaceBegin`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)
- Key to Hutt Base (`SW_HuttBaseKey`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Tatooine Czerka Office`
- `Tatooine, Carl Terro's Droid Shop`
- `Tatooine, Hutt Base`
- `Tatooine, Sandriver`
- `TatooineRace`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `1` is obtainable.
- [ ] Reach index `1`: Now that there are enough racers for the local swoop race I should meet up with Hungox the Hutt to buy a ticke…
- [ ] Reach index `5`: I spoke with the Hungox's Steward and was told my ticket was already paid for by an anonymous buyer. I should …
- [ ] Reach index `10`: The race is beginning, I should pay attention.
- [ ] Reach index `15`: It seems like a lot of problems happened at the race, maybe I should check in with the Czerka Office and see i…
- [ ] Reach index `20`: The Czerka Corporation is convinced that the Hutt cheated, they asked me to infiltrate their base and find out…
- [ ] Reach index `25`: The Hutt says I have to prove myself, apparently the Zillows gang has gotten out of hand and they want me to k…
- [ ] Reach index `30`: Hungox has recruited me into his Cartel, and I've gained a key to his base around the back of the Dueling Ring…
- [ ] Reach index `35`: I found their pod racer and after examining it I have found it's pretty obvious it was heavily modified to a p…
- [ ] Reach index `40` (`Finished`): The Czerka Corporation awarded me with 1,000 credits and my reputation with their company has increased.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_Race`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
