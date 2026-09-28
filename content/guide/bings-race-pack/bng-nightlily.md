---
title: "Night Lily (internal journal)"
description: "Walkthrough and QA reference for Night Lily (internal journal) (Bng_NightLily)."
weight: 5
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "Bng_NightLily"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `Bng_NightLily` |
| **Category** | Bing's Race Pack |
| **Journal entries** | 11 |
| **Completion branches** | 2 |
| **Starts by** | Speak with **Predne Balu** in **Tatooine Czerka Office** and ask about **Tax Work**. |
| **Observed prerequisite journals** | `Bng_WaterTax` |
| **Key locations** | Tatooine Czerka Office, Tatooine, Sandriver |
| **Key characters** | Predne Balu, M'iiyoom Onith, Freddie Wallery |

## Walkthrough

### 1. Speak with Predne Balu in Tatooine Czerka Office and ask about Tax Work

Speak with **Predne Balu** in **Tatooine Czerka Office** and ask about **Tax Work**.

> **Expected journal update — index 10:** Predne Balu has asked me to aid a H'nemthe woman who can't afford the travel tax.

### 2. Speak with M'iiyoom Onith in Tatooine, Sandriver and ask about M'iiyoom Onith

Speak with **M'iiyoom Onith** in **Tatooine, Sandriver** and ask about **M'iiyoom Onith**.

> **Expected journal update — index 20:** M'iiyoom Onith couldn't afford a special ticket to Gamorr due to Czerka's travel tax. I should speak with Freddie Wallery at the spaceport to set up a new flight.

### 3. Speak with Freddie Wallery in Tatooine, Sandriver and ask about M'iiyoom Onith

Speak with **Freddie Wallery** in **Tatooine, Sandriver** and ask about **M'iiyoom Onith**.

> **Expected journal update — index 30:** Freddie Wallery said he can get M'iiyoom Onith on a free flight.

### 4. Speak with M'iiyoom Onith in Tatooine, Sandriver and ask about M'iiyoom Onith

Speak with **M'iiyoom Onith** in **Tatooine, Sandriver** and ask about **M'iiyoom Onith**.

> **Expected journal update — index 40:** M'iiyoom Onith went to the cantina since she's goin to be stuck here a while. She said she was really craving a rodian sandwich.

### 5. Speak with M'iiyoom Onith in Tatooine, Sandriver and ask about sandwich

Speak with **M'iiyoom Onith** in **Tatooine, Sandriver** and ask about **sandwich**.

> **Expected journal update — index 50:** M'iiyoom asked for some booze to wash down her sandwich

### 6. Speak with M'iiyoom Onith in Tatooine, Sandriver and ask about booze

Speak with **M'iiyoom Onith** in **Tatooine, Sandriver** and ask about **booze**.

> **Expected journal update — index 60:** M'iiyoom invited me to sit and drink with her

### 7. Speak with M'iiyoom Onith in Tatooine, Sandriver and ask about spendig the day with you

Speak with **M'iiyoom Onith** in **Tatooine, Sandriver** and ask about **spendig the day with you**.

> **Expected journal update — index 70:** M'iiyoom asked me to join her in her room.

### 8. Speak with M'iiyoom Onith in Tatooine, Sandriver and ask about booze

The records expose more than one way to reach this journal update:
- Speak with **M'iiyoom Onith** in **Tatooine, Sandriver** and ask about **booze**.
- Speak with **M'iiyoom Onith** in **Tatooine, Sandriver** and ask about **spendig the day with you**.
- Speak with **M'iiyoom Onith** in **Tatooine, Sandriver**.

> **Expected journal update — index 73:** I told M'iiyoom I couldn't stay with her tonight, and she said I could find her if I'm ever on Gamorr

### 9. Speak with Predne Balu in Tatooine Czerka Office and ask about M'iiyoom Onith — Finished

Speak with **Predne Balu** in **Tatooine Czerka Office** and ask about **M'iiyoom Onith**.

> **Expected journal update — index 75:** Predne Balu paid me for helping M'iiyoom Onith with her flight and said he's out of work for me.

**Known item transfer:** 300 × **Credits** (`gold_001`).

**Outcome:** this journal entry is marked as a finished branch.

### 10. Speak with M'iiyoom Onith in Tatooine, Sandriver

Speak with **M'iiyoom Onith** in **Tatooine, Sandriver**.

> **Expected journal update — index 80:** M'iiyoom Onith attacked me when we were alone!

### 11. Speak with Predne Balu in Tatooine Czerka Office and ask about M'iiyoom Onith — Finished

Speak with **Predne Balu** in **Tatooine Czerka Office** and ask about **M'iiyoom Onith**.

> **Expected journal update — index 100:** Predne Balu heard what happened in the cantina and said it would be best if we parted ways

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has **2 explicit finished entries**. Treat them as branch coverage targets during playtesting:

- **Index 75:** Predne Balu paid me for helping M'iiyoom Onith with her flight and said he's out of work for me.
- **Index 100:** Predne Balu heard what happened in the cantina and said it would be best if we parted ways

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 300 × **Credits** (`gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Predne Balu** (`Bng_Czerka_Tax_Officer`) — `Tatooine Czerka Office`
- **M'iiyoom Onith** (`Bng_Miiyoom_Onith`) — `Tatooine, Sandriver`
- **Freddie Wallery** (`SW_Wallery`) — `Tatooine, Sandriver`

**Locations implicated by actor/object placement or explicit travel:**
- **Tatooine Czerka Office**
- **Tatooine, Sandriver**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `Bng_NightLily`
**Generated category:** Bing's Race Pack
**Journal entries:** 11

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 10 | — | Predne Balu has asked me to aid a H'nemthe woman who can't afford the travel tax. | 1 |
| 20 | — | M'iiyoom Onith couldn't afford a special ticket to Gamorr due to Czerka's travel tax. I should speak with Freddie Wallery at the spaceport to set up a new flight. | 1 |
| 30 | — | Freddie Wallery said he can get M'iiyoom Onith on a free flight. | 1 |
| 40 | — | M'iiyoom Onith went to the cantina since she's goin to be stuck here a while. She said she was really craving a rodian sandwich. | 1 |
| 50 | — | M'iiyoom asked for some booze to wash down her sandwich | 1 |
| 60 | — | M'iiyoom invited me to sit and drink with her | 1 |
| 70 | — | M'iiyoom asked me to join her in her room. | 1 |
| 73 | — | I told M'iiyoom I couldn't stay with her tonight, and she said I could find her if I'm ever on Gamorr | 3 |
| 75 | Finished | Predne Balu paid me for helping M'iiyoom Onith with her flight and said he's out of work for me. | 1 |
| 80 | — | M'iiyoom Onith attacked me when we were alone! | 1 |
| 100 | Finished | Predne Balu heard what happened in the cantina and said it would be best if we parted ways | 1 |

### Record-level trigger map

### Stage 10

Predne Balu has asked me to aid a H'nemthe woman who can't afford the travel tax.

**How this stage is set:**
- Dialogue INFO `25429166412570111864` under topic **Tax Work**; speaker Predne Balu (`Bng_Czerka_Tax_Officer`). locations: `Tatooine Czerka Office`. conditions: Journal `Bng_WaterTax` GreaterEqual 70. response: “A H'nemthe woman named M'iiyoom Onith has just missed her flight to Gamorr because she couldn't afford the travel tax. She's sulking in the spacesport right now, see if you can keep things from escalating.”.

```text
Journal "Bng_NightLily" 10
Bng_Miiyoom_Onith->PositionCell, 8041.542480, 6628.583008, 12281.703125, 90, "tatooine, sandriver"
AddTopic "M'iiyoom Onith"
```

### Stage 20

M'iiyoom Onith couldn't afford a special ticket to Gamorr due to Czerka's travel tax. I should speak with Freddie Wallery at the spaceport to set up a new flight.

**How this stage is set:**
- Dialogue INFO `250681995250254692` under topic **M'iiyoom Onith**; speaker M'iiyoom Onith (`Bng_Miiyoom_Onith`). locations: `Tatooine, Sandriver`. conditions: Journal `Bng_NightLily` Equal 10. response: “You're an official Czerka representative? Maybe you'll have better luck. I've Just began my Pursuit, and I was going to start by visiting my sister and her fiance' on Gamorr. Unfortunately, I didn't know about the travel tax here, and I couldn't afford to board my flight. Could you speak to the travel agent for me?”.

```text
Journal "Bng_NightLily" 20
```

### Stage 30

Freddie Wallery said he can get M'iiyoom Onith on a free flight.

**How this stage is set:**
- Dialogue INFO `30449270604856114` under topic **M'iiyoom Onith**; speaker Freddie Wallery (`SW_Wallery`). locations: `Tatooine, Sandriver`. conditions: Journal `Bng_NightLily` Equal 20. response: “If Czerka is getting involved I could probably make it happen. I have a friend who runs shipments to Gamorr. It's not a passenger ship so it won't be comfortable, but I bet I could get her on board for free.”.

```text
Journal "Bng_NightLily" 30
```

### Stage 40

M'iiyoom Onith went to the cantina since she's goin to be stuck here a while. She said she was really craving a rodian sandwich.

**How this stage is set:**
- Dialogue INFO `57902188191952677` under topic **M'iiyoom Onith**; speaker M'iiyoom Onith (`Bng_Miiyoom_Onith`). locations: `Tatooine, Sandriver`. conditions: Journal `Bng_NightLily` Equal 30. response: “I have to wait even longer? I guess I can wait in the cantina. Maybe I can find a suitor or at least a good sandwich. I've always heard Rodian food is incredible. *Cooo*”.

```text
Journal "Bng_NightLily" 40
Bng_Miiyoom_Onith->PositionCell, 4312.379883, 4404.312988, 12250.391602, 0, "Tatooine, Cantina"
```

### Stage 50

M'iiyoom asked for some booze to wash down her sandwich

**How this stage is set:**
- Dialogue INFO `19742243631666529` under topic **sandwich**; speaker M'iiyoom Onith (`Bng_Miiyoom_Onith`). locations: `Tatooine, Sandriver`. conditions: Item/ItemType `Bng_Rodian_Sandwich` GreaterEqual 1. response: “Oh it's delicious! I've been starving all day. Thank you so much, could you please get me some booze too?”.

```text
Journal "Bng_NightLily" 50
player->removeitem "Bng_Rodian_Sandwich" 1
```

### Stage 60

M'iiyoom invited me to sit and drink with her

**How this stage is set:**
- Dialogue INFO `27805101561718225490` under topic **booze**; speaker M'iiyoom Onith (`Bng_Miiyoom_Onith`). locations: `Tatooine, Sandriver`. conditions: Journal `Bng_NightLily` Equal 50; Item/ItemType `SW_Booze` GreaterEqual 1. response: “*sip*  Ooh that's stronger than I thought. Would you want to stay with me while I finish this?”.

```text
Journal "Bng_NightLily" 60
player->removeitem "SW_Booze" 1
Choice "Yeah, That sounds like fun." 1 "I don't know if that's a good idea." 2
```

### Stage 70

M'iiyoom asked me to join her in her room.

**How this stage is set:**
- Dialogue INFO `25337164152624815644` under topic **spendig the day with you**; speaker M'iiyoom Onith (`Bng_Miiyoom_Onith`). locations: `Tatooine, Sandriver`. conditions: Journal `Bng_NightLily` Equal 62; Function/Choice Equal 1. response: “*COOO* I'm staying in the last room on the right. I'll meet you there”.

```text
Journal "Bng_NightLily" 70
Bng_Miiyoom_Onith->PositionCell, -2926.978516, 5630.683594, 17768.148438, 180, "Cantina Lodgings"
```

### Stage 73

I told M'iiyoom I couldn't stay with her tonight, and she said I could find her if I'm ever on Gamorr

**How this stage is set:**
- Dialogue INFO `155582252522125433` under topic **booze**; speaker M'iiyoom Onith (`Bng_Miiyoom_Onith`). locations: `Tatooine, Sandriver`. conditions: Function/Choice Equal 2. response: “Oh, Okay. Thanks for all the help today. I'll be staying in Gamorr until my sister's wedding if you ever feel like tracking me down.”.

```text
Journal "Bng_NightLily" 73
```
- Dialogue INFO `186032574950713304` under topic **spendig the day with you**; speaker M'iiyoom Onith (`Bng_Miiyoom_Onith`). locations: `Tatooine, Sandriver`. conditions: Journal `Bng_NightLily` Equal 62; Function/Choice Equal 2. response: “Fair enough. Maybe we can pick things up if you ever come to Gamorr”.

```text
Journal "Bng_NightLily" 73
```
- Dialogue INFO `11038553517003085` under topic **Greeting 5**; speaker M'iiyoom Onith (`Bng_Miiyoom_Onith`). locations: `Tatooine, Sandriver`. conditions: Journal `Bng_NightLily` Equal 71; Function/Choice Equal 2. response: “I understand. It's a big commitment to make.  Maybe you can find me on Gamorr and we can pick up from there.”.

```text
Journal "Bng_NightLily" 73
```

### Stage 75 — Finished

Predne Balu paid me for helping M'iiyoom Onith with her flight and said he's out of work for me.

**How this stage is set:**
- Dialogue INFO `6437123883123527262` under topic **M'iiyoom Onith**; speaker Predne Balu (`Bng_Czerka_Tax_Officer`). locations: `Tatooine Czerka Office`. conditions: Journal `Bng_NightLily` Equal 73. response: “Good work getting her a new flight. That's all the work I have for you.”.

```text
Journal "Bng_NightLily" 75
Bng_Miiyoom_Onith-> PositionCell, 4864.676270, 3532.997803, 11940.339844, 0, "Gamorr, Mama Gorsak's House"
Player->additem "gold_001" 300
```

### Stage 80

M'iiyoom Onith attacked me when we were alone!

**How this stage is set:**
- Dialogue INFO `1713917935287874406` under topic **Greeting 5**; speaker M'iiyoom Onith (`Bng_Miiyoom_Onith`). locations: `Tatooine, Sandriver`. conditions: Journal `Bng_NightLily` Equal 71; Function/Choice Equal 1. response: “Cooo Cooooo CoooOOOOAAAAAAAGHGHGH!!!!

 *A razor sharp tongue flicks towards you, nearly missing your throat.*”.

```text
Journal "Bng_NightLily" 80
ModDisposition +100
setfight 100
```

### Stage 100 — Finished

Predne Balu heard what happened in the cantina and said it would be best if we parted ways

**How this stage is set:**
- Dialogue INFO `28509354812319240` under topic **M'iiyoom Onith**; speaker Predne Balu (`Bng_Czerka_Tax_Officer`). locations: `Tatooine Czerka Office`. conditions: Journal `Bng_NightLily` Equal 80. response: “I heard what happened in the Cantina %PCName. I think it might be best if we stop working together.”.

```text
Journal "Bng_NightLily" 100
```

### Related records and locations

**Dialogue speakers:**
- Predne Balu (`Bng_Czerka_Tax_Officer`) — `Tatooine Czerka Office`
- M'iiyoom Onith (`Bng_Miiyoom_Onith`) — `Tatooine, Sandriver`
- Freddie Wallery (`SW_Wallery`) — `Tatooine, Sandriver`

**Items referenced by related script/result code:**
- Rodian Veggie Sandwich (`Bng_Rodian_Sandwich`)
- Credits (`Gold_001`)
- Booze (`SW_Booze`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Tatooine Czerka Office`
- `Tatooine, Sandriver`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `10` is obtainable.
- [ ] Reach index `10`: Predne Balu has asked me to aid a H'nemthe woman who can't afford the travel tax.
- [ ] Reach index `20`: M'iiyoom Onith couldn't afford a special ticket to Gamorr due to Czerka's travel tax. I should speak with Fred…
- [ ] Reach index `30`: Freddie Wallery said he can get M'iiyoom Onith on a free flight.
- [ ] Reach index `40`: M'iiyoom Onith went to the cantina since she's goin to be stuck here a while. She said she was really craving …
- [ ] Reach index `50`: M'iiyoom asked for some booze to wash down her sandwich
- [ ] Reach index `60`: M'iiyoom invited me to sit and drink with her
- [ ] Reach index `70`: M'iiyoom asked me to join her in her room.
- [ ] Reach index `73`: I told M'iiyoom I couldn't stay with her tonight, and she said I could find her if I'm ever on Gamorr
- [ ] Reach index `75` (`Finished`): Predne Balu paid me for helping M'iiyoom Onith with her flight and said he's out of work for me.
- [ ] Reach index `80`: M'iiyoom Onith attacked me when we were alone!
- [ ] Reach index `100` (`Finished`): Predne Balu heard what happened in the cantina and said it would be best if we parted ways
- [ ] Branch coverage: this journal has **2 different `Finished` entries**; test each reachable completion branch.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `Bng_NightLily`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
