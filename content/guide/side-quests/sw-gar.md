---
title: "The Talking Rakghoul"
description: "Walkthrough and QA reference for The Talking Rakghoul (SW_Gar)."
weight: 104
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_Gar"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_Gar` |
| **Category** | Side Quests |
| **Journal entries** | 6 |
| **Completion branches** | 2 |
| **Starts by** | Speak with **the relevant character** in **Nar Shaddaa, H.T. Parnell's Oddities**. |
| **Key locations** | Nar Shaddaa, H.T. Parnell's Oddities |
| **Key characters** | `SW_Gar` — `Nar Shaddaa, H.T. Parnell's Oddities`, H.T. Parnell |

## Walkthrough

### 1. Speak with the relevant character in Nar Shaddaa, H.T. Parnell's Oddities

Speak with **the relevant character** in **Nar Shaddaa, H.T. Parnell's Oddities**.

> **Expected journal update — index 5:** I have met a talking Rakghoul inside of H.T. Parnell's Oddity Museum who seems to know numerous facts about hyper travel, the Rakghoul disease, and the museum.

### 2. Speak with the relevant character in Nar Shaddaa, H.T. Parnell's Oddities and ask about rakghoul

Speak with **the relevant character** in **Nar Shaddaa, H.T. Parnell's Oddities** and ask about **rakghoul**.

> **Expected journal update — index 10:** I have spoken to the Rakghoul about the disease and he slipped up after I caught him in a mistake. He confessed he was a fraud, his real name is Gar, and that he is a slave owned by H.T. Parnell that has been surgically modified to look like a Rakghoul.

### 3. Speak with H.T. Parnell in Nar Shaddaa, H.T. Parnell's Oddities and ask about rakghoul — Finished

Speak with **H.T. Parnell** in **Nar Shaddaa, H.T. Parnell's Oddities** and ask about **rakghoul**.

> **Expected journal update — index 15:** After confronting H.T. Parnell he has confessed about Ray, I blackmailed him for 5,000 credits and I will keep his secret.

**Known item transfer:** 5000 × **Credits** (`gold_001`).

**Outcome:** this journal entry is marked as a finished branch.

### 4. Speak with H.T. Parnell in Nar Shaddaa, H.T. Parnell's Oddities and ask about rakghoul

Speak with **H.T. Parnell** in **Nar Shaddaa, H.T. Parnell's Oddities** and ask about **rakghoul**.

> **Expected journal update — index 20:** After confronting H.T. Parnell he has confessed about Gar and has released him to be free in exchange for me keeping his secret. I should speak to Gar about this.

### 5. Speak with the relevant character in Nar Shaddaa, H.T. Parnell's Oddities and ask about rakghoul — Finished

Speak with **the relevant character** in **Nar Shaddaa, H.T. Parnell's Oddities** and ask about **rakghoul**.

> **Expected journal update — index 25:** Gar was overly excited about the news, but is afraid he has no place in the world anymore, he has offered his services to me in my travels as a butler and bodyguard. If I refuse his service he will stay in the museum.

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has **2 explicit finished entries**. Treat them as branch coverage targets during playtesting:

- **Index 15:** After confronting H.T. Parnell he has confessed about Ray, I blackmailed him for 5,000 credits and I will keep his secret.
- **Index 25:** Gar was overly excited about the news, but is afraid he has no place in the world anymore, he has offered his services to me in my travels as a butler and bodyguard. If I refuse his service he will stay in the museum.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 5000 × **Credits** (`gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **`SW_Gar` — `Nar Shaddaa, H.T. Parnell's Oddities`** (``)
- **H.T. Parnell** (`SW_zParnell`) — `Nar Shaddaa, H.T. Parnell's Oddities`

**Locations implicated by actor/object placement or explicit travel:**
- **Nar Shaddaa, H.T. Parnell's Oddities**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_Gar`
**Generated category:** Side Quests
**Journal entries:** 6

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | I have met a talking Rakghoul inside of H.T. Parnell's Oddity Museum who seems to know numerous facts about hyper travel, the Rakghoul disease, and the museum. | 1 |
| 10 | — | I have spoken to the Rakghoul about the disease and he slipped up after I caught him in a mistake. He confessed he was a fraud, his real name is Gar, and that he is a slave owned by H.T. Parnell that has been surgically modified to look like a Rakghoul. | 1 |
| 15 | Finished | After confronting H.T. Parnell he has confessed about Ray, I blackmailed him for 5,000 credits and I will keep his secret. | 1 |
| 20 | — | After confronting H.T. Parnell he has confessed about Gar and has released him to be free in exchange for me keeping his secret. I should speak to Gar about this. | 1 |
| 25 | Finished | Gar was overly excited about the news, but is afraid he has no place in the world anymore, he has offered his services to me in my travels as a butler and bodyguard. If I refuse his service he will stay in the museum. | 1 |

### Record-level trigger map

### Stage 5

I have met a talking Rakghoul inside of H.T. Parnell's Oddity Museum who seems to know numerous facts about hyper travel, the Rakghoul disease, and the museum.

**How this stage is set:**
- Dialogue INFO `2415214091683917963` under topic **Greeting 7**; speaker `SW_Gar`. locations: `Nar Shaddaa, H.T. Parnell's Oddities`. conditions: Journal `SW_Gar` Equal 0. response: “Hello, do not be alarmed, I'm sure you have never seen a talking Rakghoul before. Do not fear me, I am not primal like others in my state. I am here to answer your questions. What would you like to know about, I can tell you about hyper travel, the Rakghoul disease, or about the oddity museum.”.

```text
Journal SW_Gar 5
StopSound "GarAlarm1"
StopSound "GarAlarm2"
```

### Stage 10

I have spoken to the Rakghoul about the disease and he slipped up after I caught him in a mistake. He confessed he was a fraud, his real name is Gar, and that he is a slave owned by H.T. Parnell that has been surgically modified to look like a Rakghoul.

**How this stage is set:**
- Dialogue INFO `15883102742205914948` under topic **rakghoul**; speaker `SW_Gar`. locations: `Nar Shaddaa, H.T. Parnell's Oddities`. conditions: Journal `SW_Gar` Less 10; Function/Choice Equal 3. response: “I - uh.. Look, you caught me, I can't keep doing this. My name is Gar, I'm a slave owned by H.T. Parnell, I have been my entire life. A few years ago he had me surgically modified to look like a Rakghoul, and I've been doing this performance ever since. But, what else am I to do now? Look at me...”.

```text
Journal SW_Gar 10
StopSound "GarAlarm1"
StopSound "GarAlarm2"
```

### Stage 15 — Finished

After confronting H.T. Parnell he has confessed about Ray, I blackmailed him for 5,000 credits and I will keep his secret.

**How this stage is set:**
- Dialogue INFO `6957163173377391` under topic **rakghoul**; speaker H.T. Parnell (`SW_zParnell`). locations: `Nar Shaddaa, H.T. Parnell's Oddities`. conditions: Journal `SW_Gar` Equal 10; Function/Choice Equal 1. response: “Hey now, hey now, calm down. 5,000 credits? I think I can spare that, as long as this little secret stay between you and me. I can deal with Gar, just don't tell anyone, all right?”.

```text
Journal SW_Gar 15
player->additem "gold_001", 5000
```

### Stage 20

After confronting H.T. Parnell he has confessed about Gar and has released him to be free in exchange for me keeping his secret. I should speak to Gar about this.

**How this stage is set:**
- Dialogue INFO `291612121957565265` under topic **rakghoul**; speaker H.T. Parnell (`SW_zParnell`). locations: `Nar Shaddaa, H.T. Parnell's Oddities`. conditions: Journal `SW_Gar` Equal 10; Function/Choice Equal 2. response: “Alright, alright! This museum is everything I have, I can let one exhibit go. But if I do you can't tell anybody about my exhibits, understand? You can tell him yourself, he's free, but don't let that disgusting excuse for a life speak to me on the way out.”.

```text
Journal SW_Gar 20
```

### Stage 25 — Finished

Gar was overly excited about the news, but is afraid he has no place in the world anymore, he has offered his services to me in my travels as a butler and bodyguard. If I refuse his service he will stay in the museum.

**How this stage is set:**
- Dialogue INFO `2693922428283086665` under topic **rakghoul**; speaker `SW_Gar`. locations: `Nar Shaddaa, H.T. Parnell's Oddities`. conditions: Journal `SW_Gar` Equal 20. response: “You did what? I'm free? Well that's incredible. But, what will I do? I'm a monster now! I know, why don't I join you? I could be your butler, your bodyguard, both! If not I may as well just stay here, I can't very well go out on the street looking like this by myself now can I? Gar, at your service, Master. I will follow you whenever you wish.”.

```text
Journal SW_Gar 25
moddisposition 100
AddTopic "follow"
```

### Related records and locations

**Dialogue speakers:**
- `SW_Gar` — `Nar Shaddaa, H.T. Parnell's Oddities`
- H.T. Parnell (`SW_zParnell`) — `Nar Shaddaa, H.T. Parnell's Oddities`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Nar Shaddaa, H.T. Parnell's Oddities`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: I have met a talking Rakghoul inside of H.T. Parnell's Oddity Museum who seems to know numerous facts about hy…
- [ ] Reach index `10`: I have spoken to the Rakghoul about the disease and he slipped up after I caught him in a mistake. He confesse…
- [ ] Reach index `15` (`Finished`): After confronting H.T. Parnell he has confessed about Ray, I blackmailed him for 5,000 credits and I will keep…
- [ ] Reach index `20`: After confronting H.T. Parnell he has confessed about Gar and has released him to be free in exchange for me k…
- [ ] Reach index `25` (`Finished`): Gar was overly excited about the news, but is afraid he has no place in the world anymore, he has offered his …
- [ ] Branch coverage: this journal has **2 different `Finished` entries**; test each reachable completion branch.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_Gar`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
