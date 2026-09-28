---
title: "Desert Jedi (internal journal)"
description: "Walkthrough and QA reference for Desert Jedi (internal journal) (Bng_DesertJedi)."
weight: 1
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "Bng_DesertJedi"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `Bng_DesertJedi` |
| **Category** | Bing's Race Pack |
| **Journal entries** | 8 |
| **Completion branches** | 3 |
| **Starts by** | Allow the scripted event handled by `Bng_Sandwich_Order` to complete. |
| **Key locations** | Kashyyk, Gray Jedi Camp, Rohlan Darach's Cave, Tatooine, Rodian District, Tatooine, Sandriver |
| **Key characters** | Jan Jorden, Pylokam, Rohlan Darach, Shade Smith |

## Walkthrough

### 1. Allow the scripted event handled by `Bng_Sandwich_Order` to complete

The records expose more than one way to reach this journal update:
- Allow the scripted event handled by `Bng_Sandwich_Order` to complete.
- Speak with **Pylokam** in **Tatooine, Rodian District** and ask about **Jedi**.

> **Expected journal update — index 10:** I learned Rohlan Darach lives in a cave Southeast of Sandriver, past the Sand People's camp.

### 2. Speak with Jan Jorden in Tatooine, Sandriver

Speak with **Jan Jorden** in **Tatooine, Sandriver**.

> **Expected journal update — index 20:** The Sith captain Jan Jorden attacked me when I told her I didn't want to aid her in the assassination of Rohlan Darach.

### 3. Defeat Rohlan Darach in Tatooine, Rodian District and allow its script to update the quest

Defeat **Rohlan Darach** in **Tatooine, Rodian District** and allow its script to update the quest.

> **Expected journal update — index 23:** I killed the Jedi knight Rohlan Darach

### 4. Speak with Jan Jorden in Tatooine, Sandriver and ask about Rohlan Darach

The records expose more than one way to reach this journal update:
- Speak with **Jan Jorden** in **Tatooine, Sandriver** and ask about **Rohlan Darach**.
- Speak with **Rohlan Darach** in **Tatooine, Rodian District** and ask about **Rohlan Darach**.

> **Expected journal update — index 25:** Jan Jorden told me to talk to her in Sandriver for a reward.

### 5. Speak with Jan Jorden in Tatooine, Sandriver and ask about Rohlan Darach — Finished

Speak with **Jan Jorden** in **Tatooine, Sandriver** and ask about **Rohlan Darach**.

> **Expected journal update — index 27:** Jan Jorden paid me for assisting the sith, and decided to aid me on my travels

**Known item transfer:** 1000 × **Credits** (`Gold_001`).

**Outcome:** this journal entry is marked as a finished branch.

### 6. Speak with Rohlan Darach in Tatooine, Rodian District and ask about Rohlan Darach — Finished

Speak with **Rohlan Darach** in **Tatooine, Rodian District** and ask about **Rohlan Darach**.

> **Expected journal update — index 30:** I told Rohlan Darach He was on his own to get to Kashyyyk.

**Outcome:** this journal entry is marked as a finished branch.

### 7. Speak with Rohlan Darach in Tatooine, Rodian District and ask about Jedi

The records expose more than one way to reach this journal update:
- Speak with **Rohlan Darach** in **Tatooine, Rodian District** and ask about **Jedi**.
- Speak with **Rohlan Darach** in **Tatooine, Rodian District** and ask about **Rohlan Darach**.

> **Expected journal update — index 40:** Rohlan Darach asked if I could take him to the Grey Jedi camp in Kashyyyk to show off his new lightsaber design.

### 8. Speak with Shade Smith in Kashyyk, Gray Jedi Camp and ask about prototype lightsaber — Finished

Speak with **Shade Smith** in **Kashyyk, Gray Jedi Camp** and ask about **prototype lightsaber**.

> **Expected journal update — index 50:** I brought the prototype tonfa lightsabers to the gray jedi smith on Kashyyyk and he added them to his shop selection

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has **3 explicit finished entries**. Treat them as branch coverage targets during playtesting:

- **Index 27:** Jan Jorden paid me for assisting the sith, and decided to aid me on my travels
- **Index 30:** I told Rohlan Darach He was on his own to get to Kashyyyk.
- **Index 50:** I brought the prototype tonfa lightsabers to the gray jedi smith on Kashyyyk and he added them to his shop selection

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 1000 × **Credits** (`Gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Jan Jorden** (`Bng_Jan_Jorden`) — `Tatooine, Sandriver`
- **Pylokam** (`Bng_Pylokam`) — `Tatooine, Rodian District`
- **Rohlan Darach** (`Bng_Rohlan_Darach`) — `Tatooine, Rodian District`
- **Shade Smith** (`SW_GraySmith`) — `Kashyyk, Gray Jedi Camp`

**Locations implicated by actor/object placement or explicit travel:**
- **Kashyyk, Gray Jedi Camp**
- **Rohlan Darach's Cave**
- **Tatooine, Rodian District**
- **Tatooine, Sandriver**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `Bng_DesertJedi`
**Generated category:** Bing's Race Pack
**Journal entries:** 8

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 10 | — | I learned Rohlan Darach lives in a cave Southeast of Sandriver, past the Sand People's camp. | 2 |
| 20 | — | The Sith captain Jan Jorden attacked me when I told her I didn't want to aid her in the assassination of Rohlan Darach. | 1 |
| 23 | — | I killed the Jedi knight Rohlan Darach | 1 |
| 25 | — | Jan Jorden told me to talk to her in Sandriver for a reward. | 2 |
| 27 | Finished | Jan Jorden paid me for assisting the sith, and decided to aid me on my travels | 1 |
| 30 | Finished | I told Rohlan Darach He was on his own to get to Kashyyyk. | 1 |
| 40 | — | Rohlan Darach asked if I could take him to the Grey Jedi camp in Kashyyyk to show off his new lightsaber design. | 2 |
| 50 | Finished | I brought the prototype tonfa lightsabers to the gray jedi smith on Kashyyyk and he added them to his shop selection | 1 |

### Record-level trigger map

### Stage 10

I learned Rohlan Darach lives in a cave Southeast of Sandriver, past the Sand People's camp.

**How this stage is set:**
- Script `Bng_Sandwich_Order`. attached to Book Sandwich order (`Bng_Sandwich_Receipt`).

```text
begin Bng_Sandwich_Order

journal "Bng_DesertJedi" 10

end
```
- Dialogue INFO `2848596803194916926` under topic **Jedi**; speaker Pylokam (`Bng_Pylokam`). locations: `Tatooine, Rodian District`. conditions: Journal `Bng_DesertJedi` Less 10. response: “Rohlan Darach lives in a cave past the sand people camp to the southeast”.

```text
Journal "Bng_DesertJedi"10
```

### Stage 20

The Sith captain Jan Jorden attacked me when I told her I didn't want to aid her in the assassination of Rohlan Darach.

**How this stage is set:**
- Dialogue INFO `1407866542137326616` under topic **Greeting 5**; speaker Jan Jorden (`Bng_Jan_Jorden`). locations: `Tatooine, Sandriver`. cell constraint `Rohlan Darach's Cave`. conditions: Journal `Bng_DesertJedi` Equal 18; Function/Choice Equal 2. response: “Then you will die with him!”.

```text
Journal "Bng_DesertJedi" 20
setfight 100
Bng_Dennis_Sandhopper->setfight 100
```

### Stage 23

I killed the Jedi knight Rohlan Darach

**How this stage is set:**
- Script `Bng_RohlanScript`. attached to Npc Rohlan Darach (`Bng_Rohlan_Darach`); placed in `Tatooine, Rodian District`.

```text
if ( OnDeath == 1 )
     Journal "Bng_DesertJedi" 23
endif
```

### Stage 25

Jan Jorden told me to talk to her in Sandriver for a reward.

**How this stage is set:**
- Dialogue INFO `666427310209017443` under topic **Rohlan Darach**; speaker Jan Jorden (`Bng_Jan_Jorden`). locations: `Tatooine, Sandriver`. conditions: Journal `Bng_DesertJedi` Equal 23. response: “Good work %PCName, with your help we've rid the galaxy of one more horrible Jedi. You can take anything from here and we can talk more in Sandriver to discuss a reward.”.

```text
Journal "Bng_DesertJedi" 25
Bng_Jan_Jorden->PositionCell, 7471.670898, 3478.347412, 12284.957031, 0, "Tatooine, Sandriver"
Bng_Robert_Sandhopper->PositionCell, 1366.750000, 6610.631348, 12268.796875, 0, "Tatooine, Sandriver"
```
- Dialogue INFO `365143981329030199` under topic **Rohlan Darach**; speaker Rohlan Darach (`Bng_Rohlan_Darach`). locations: `Tatooine, Rodian District`. conditions: Journal `Bng_DesertJedi` Equal 20. response: “Thank's for taking out those sith for me. Jan's been on my tail for weeks. You would't happen to be going to Kashyyyk would you? There's an expert lightsaber smith there and I want to show him my new prototype lightsaber design.”.

```text
Choice "I can take you there." 1 "I can't do that.." 2
Journal "Bng_DesertJedi" 25
```

### Stage 27 — Finished

Jan Jorden paid me for assisting the sith, and decided to aid me on my travels

**How this stage is set:**
- Dialogue INFO `823293242956621391` under topic **Rohlan Darach**; speaker Jan Jorden (`Bng_Jan_Jorden`). locations: `Tatooine, Sandriver`. conditions: Journal `Bng_DesertJedi` Equal 25. response: “Here's for a job well done, %PCName. I sent the boys back home to report our success. Sometimes you get a feeling about a person, and I feel like if I follow you around I'm gonna meet a lot more jedi.”.

```text
player->additem "Gold_001" 1000
Journal "Bng_DesertJedi" 27
```

### Stage 30 — Finished

I told Rohlan Darach He was on his own to get to Kashyyyk.

**How this stage is set:**
- Dialogue INFO `26041262242585622449` under topic **Rohlan Darach**; speaker Rohlan Darach (`Bng_Rohlan_Darach`). locations: `Tatooine, Rodian District`. conditions: Journal `Bng_DesertJedi` Equal 25; Function/Choice Equal 2. response: “I guess I'll just wait in this cave then.”.

```text
Journal "Bng_DesertJedi" 30
```

### Stage 40

Rohlan Darach asked if I could take him to the Grey Jedi camp in Kashyyyk to show off his new lightsaber design.

**How this stage is set:**
- Dialogue INFO `2272810893220022409` under topic **Jedi**; speaker Rohlan Darach (`Bng_Rohlan_Darach`). locations: `Tatooine, Rodian District`. conditions: Function/Choice Equal 1; Journal `Bng_DesertJedi` Equal 19. response: “Perfect. I'll meet you in Sandriver then follow you  from there.”.

```text
Journal "Bng_DesertJedi" 40
Bng_Rohlan_Darach->PositionCell, 7471.670898, 3478.347412, 12284.957031, 0, "Tatooine, Sandriver"
Bng_Jan_Jorden->PositionCell, 6833.443848, 7077.680664, 12294.144531, 0, "Tatooine, Sandriver"
```
- Dialogue INFO `218736632216744189` under topic **Rohlan Darach**; speaker Rohlan Darach (`Bng_Rohlan_Darach`). locations: `Tatooine, Rodian District`. conditions: Journal `Bng_DesertJedi` Equal 25; Function/Choice Equal 1. response: “Perfect. I'll meet you in Sandriver then follow you  from there.”.

```text
Journal "Bng_DesertJedi" 40
Bng_Rohlan_Darach->PositionCell, 7471.670898, 3478.347412, 12284.957031, 0, "Tatooine, Sandriver"
goodbye
```

### Stage 50 — Finished

I brought the prototype tonfa lightsabers to the gray jedi smith on Kashyyyk and he added them to his shop selection

**How this stage is set:**
- Dialogue INFO `2381547721639718509` under topic **prototype lightsaber**; speaker Shade Smith (`SW_GraySmith`). locations: `Kashyyk, Gray Jedi Camp`. conditions: Journal `Bng_DesertJedi` Less 50; Item/ItemType `Bng_Proto_Tonfa_saber_Offhand` GreaterEqual 1. response: “Interesting! I can get to work on adding these to my inventory as soon as possible.”.

```text
Journal "Bng_DesertJedi" 50
SW_FootlockerSabersEnc->AddItem "Bng_Tonfasaber_Blue_OffHand" 1
SW_FootlockerSabersEnc->AddItem "Bng_Tonfasaber_Red_OffHand" 1
```

### Related records and locations

**Dialogue speakers:**
- Jan Jorden (`Bng_Jan_Jorden`) — `Tatooine, Sandriver`
- Pylokam (`Bng_Pylokam`) — `Tatooine, Rodian District`
- Rohlan Darach (`Bng_Rohlan_Darach`) — `Tatooine, Rodian District`
- Shade Smith (`SW_GraySmith`) — `Kashyyk, Gray Jedi Camp`

**Scripts that read or write this journal:**
- `Bng_JanJorden` — Npc Jan Jorden (`Bng_Jan_Jorden`); placed in `Tatooine, Sandriver`
- `Bng_RohlanScript` — Npc Rohlan Darach (`Bng_Rohlan_Darach`); placed in `Tatooine, Rodian District`
- `Bng_Sandwich_Order` — Book Sandwich order (`Bng_Sandwich_Receipt`)

**Items referenced by related script/result code:**
- Blue Tonfa Lightsaber (`Bng_Blue_TonfaSaber`)
- Green Tonfa Lightsaber (`Bng_Green_TonfaSaber`)
- Orange Tonfa Lightsaber (`Bng_Orange_TonfaSaber`)
- Purple Tonfa Lightsaber (`Bng_Purple_TonfaSaber`)
- Red Tonfa Lightsaber (`Bng_red_TonfaSaber`)
- Blue Off-hand Tonfa Saber (`Bng_Tonfasaber_Blue_OffHand`)
- Green Off-hand Tonfa Saber (`Bng_Tonfasaber_Green_OffHand`)
- Orange Off-hand Tonfa Saber (`Bng_Tonfasaber_Orange_OffHand`)
- Purple Off-hand Tonfa Saber (`Bng_Tonfasaber_Purple_OffHand`)
- Red Off-hand Tonfa Saber (`Bng_Tonfasaber_Red_OffHand`)
- Yellow Off-hand Tonfa Saber (`Bng_Tonfasaber_Yellow_OffHand`)
- Yellow Tonfa Lightsaber (`Bng_Yellow_TonfaSaber`)
- Credits (`Gold_001`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Kashyyk, Gray Jedi Camp`
- `Rohlan Darach's Cave`
- `Tatooine, Rodian District`
- `Tatooine, Sandriver`

<details><summary>Journal-state readers (2 code sites)</summary>

- Script `Bng_JanJorden`. attached to Npc Jan Jorden (`Bng_Jan_Jorden`); placed in `Tatooine, Sandriver`.
- Script `Bng_RohlanScript`. attached to Npc Rohlan Darach (`Bng_Rohlan_Darach`); placed in `Tatooine, Rodian District`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `10` is obtainable.
- [ ] Reach index `10`: I learned Rohlan Darach lives in a cave Southeast of Sandriver, past the Sand People's camp.
- [ ] Reach index `20`: The Sith captain Jan Jorden attacked me when I told her I didn't want to aid her in the assassination of Rohla…
- [ ] Reach index `23`: I killed the Jedi knight Rohlan Darach
- [ ] Reach index `25`: Jan Jorden told me to talk to her in Sandriver for a reward.
- [ ] Reach index `27` (`Finished`): Jan Jorden paid me for assisting the sith, and decided to aid me on my travels
- [ ] Reach index `30` (`Finished`): I told Rohlan Darach He was on his own to get to Kashyyyk.
- [ ] Reach index `40`: Rohlan Darach asked if I could take him to the Grey Jedi camp in Kashyyyk to show off his new lightsaber desig…
- [ ] Reach index `50` (`Finished`): I brought the prototype tonfa lightsabers to the gray jedi smith on Kashyyyk and he added them to his shop sel…
- [ ] Branch coverage: this journal has **3 different `Finished` entries**; test each reachable completion branch.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `Bng_DesertJedi`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
