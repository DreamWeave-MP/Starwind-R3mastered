---
title: "Water Tax"
description: "Walkthrough and QA reference for Water Tax (Bng_WaterTax)."
weight: 7
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "Bng_WaterTax"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `Bng_WaterTax` |
| **Category** | Bing's Race Pack |
| **Journal entries** | 10 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Predne Balu** in **Tatooine Czerka Office** and ask about **Narva**. |
| **Key locations** | Tatooine Czerka Office, Tatooine, Narva's Hut, Tatooine, Rodian District, Tatooine, Sandriver |
| **Key characters** | Predne Balu, Jan Jorden, Narva, Rohlan Darach |

## Walkthrough

### 1. Speak with Predne Balu in Tatooine Czerka Office and ask about Narva

Speak with **Predne Balu** in **Tatooine Czerka Office** and ask about **Narva**.

> **Expected journal update — index 10:** Tax Officer Predne Balu has tasked me with collecting 500 credits far an overdue water tax from Narva in the Rodian District.

### 2. Speak with Narva in Tatooine, Narva's Hut and ask about Narva

Speak with **Narva** in **Tatooine, Narva's Hut** and ask about **Narva**.

> **Expected journal update — index 30:** Narva says she can't afford the 500 credits.

### 3. Defeat Narva in Tatooine, Narva's Hut and allow its script to update the quest

Defeat **Narva** in **Tatooine, Narva's Hut** and allow its script to update the quest.

> **Expected journal update — index 35:** Narva has died.

### 4. Speak with Narva in Tatooine, Narva's Hut and ask about Narva

Speak with **Narva** in **Tatooine, Narva's Hut** and ask about **Narva**.

> **Expected journal update — index 40:** I got 400 credits from Narva. I should report back to Predne Balu

**Known item transfer:** 400 × **Credits** (`Gold_001`).

### 5. Speak with Narva in Tatooine, Narva's Hut and ask about Narva

Speak with **Narva** in **Tatooine, Narva's Hut** and ask about **Narva**.

> **Expected journal update — index 45:** I agreed to pay off Narva's debt for her.

### 6. Speak with Rohlan Darach in Tatooine, Rodian District

Speak with **Rohlan Darach** in **Tatooine, Rodian District**.

> **Expected journal update — index 50:** I bumped into a strange Zabrak in the Rodian District

### 7. Speak with Jan Jorden in Tatooine, Sandriver

Speak with **Jan Jorden** in **Tatooine, Sandriver**.

> **Expected journal update — index 60:** A Squad of Sith Soldiers has arrived at the Czerka office looking for a jedi in hiding. I told them I saw someone like that at Pylokam's food stall.

### 8. Speak with Jan Jorden in Tatooine, Sandriver

Speak with **Jan Jorden** in **Tatooine, Sandriver**.

> **Expected journal update — index 65:** A Squad of Sith Soldiers has arrived at the Czerka office looking for a jedi in hiding. I did'nt tell them anything.

### 9. Speak with Predne Balu in Tatooine Czerka Office and ask about Narva — Finished

Speak with **Predne Balu** in **Tatooine Czerka Office** and ask about **Narva**.

> **Expected journal update — index 70:** Predne Balu thanked me for collecting Narva's overdue tax.

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 70**:

> Predne Balu thanked me for collecting Narva's overdue tax.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 400 × **Credits** (`Gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Predne Balu** (`Bng_Czerka_Tax_Officer`) — `Tatooine Czerka Office`
- **Jan Jorden** (`Bng_Jan_Jorden`) — `Tatooine, Sandriver`
- **Narva** (`Bng_Narva`) — `Tatooine, Narva's Hut`
- **Rohlan Darach** (`Bng_Rohlan_Darach`) — `Tatooine, Rodian District`

**Locations implicated by actor/object placement or explicit travel:**
- **Tatooine Czerka Office**
- **Tatooine, Narva's Hut**
- **Tatooine, Rodian District**
- **Tatooine, Sandriver**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `Bng_WaterTax`
**Generated category:** Bing's Race Pack
**Journal entries:** 10

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 10 | — | Tax Officer Predne Balu has tasked me with collecting 500 credits far an overdue water tax from Narva in the Rodian District. | 1 |
| 30 | — | Narva says she can't afford the 500 credits. | 1 |
| 35 | — | Narva has died. | 1 |
| 40 | — | I got 400 credits from Narva. I should report back to Predne Balu | 1 |
| 45 | — | I agreed to pay off Narva's debt for her. | 1 |
| 50 | — | I bumped into a strange Zabrak in the Rodian District | 1 |
| 60 | — | A Squad of Sith Soldiers has arrived at the Czerka office looking for a jedi in hiding. I told them I saw someone like that at Pylokam's food stall. | 1 |
| 65 | — | A Squad of Sith Soldiers has arrived at the Czerka office looking for a jedi in hiding. I did'nt tell them anything. | 2 |
| 70 | Finished | Predne Balu thanked me for collecting Narva's overdue tax. | 1 |

### Record-level trigger map

### Stage 10

Tax Officer Predne Balu has tasked me with collecting 500 credits far an overdue water tax from Narva in the Rodian District.

**How this stage is set:**
- Dialogue INFO `282394992978030350` under topic **Narva**; speaker Predne Balu (`Bng_Czerka_Tax_Officer`). locations: `Tatooine Czerka Office`. conditions: Journal `Bng_WaterTax` Less 10. response: “She owes Czerka 500 credits in water tax. You can find her in the Rodian district.”.

```text
Journal "Bng_WaterTax" 10
```

### Stage 30

Narva says she can't afford the 500 credits.

**How this stage is set:**
- Dialogue INFO `1326919217147469061` under topic **Narva**; speaker Narva (`Bng_Narva`). locations: `Tatooine, Narva's Hut`. conditions: Journal `Bng_WaterTax` Equal 10. response: “I'll be able to pay the water tax next month, I just started working at the Cantina as a tunic checker.”.

```text
Journal "Bng_Watertax" 30
Choice " Pay me the 500 or I'll shut yor water off." 1 "I guess I could pay it for you." 2
```

### Stage 35

Narva has died.

**How this stage is set:**
- Script `Bng_Narvascript`. attached to Npc Narva (`Bng_Narva`); placed in `Tatooine, Narva's Hut`.

```text
if ( OnDeath == 1 )
    Journal "Bng_Watertax" 35
    Bng_Rohlan_Darach->PositionCell, 5136.870117, 6515.564941, 9851.413086, 90, "Tatooine, Rodian District"
    Bng_Jan_Jorden->PositionCell, 3539.044434, 3987.837402, 13728.400391,0, "Tatooine Czerka Office"
```

### Stage 40

I got 400 credits from Narva. I should report back to Predne Balu

**How this stage is set:**
- Dialogue INFO `110868384885565` under topic **Narva**; speaker Narva (`Bng_Narva`). locations: `Tatooine, Narva's Hut`. conditions: Journal `Bng_WaterTax` Equal 30; Function/Choice Equal 1. response: “Okay okay! I'm sorry, It's all that I have right now.”.

```text
Journal "Bng_WaterTax" 40
Player->AddItem "Gold_001" 400
Bng_Rohlan_Darach->PositionCell, 5136.870117, 6515.564941, 9851.413086, 90, "Tatooine, Rodian District"
```

### Stage 45

I agreed to pay off Narva's debt for her.

**How this stage is set:**
- Dialogue INFO `104684110966925345` under topic **Narva**; speaker Narva (`Bng_Narva`). locations: `Tatooine, Narva's Hut`. conditions: Journal `Bng_WaterTax` Equal 30; Function/Choice Equal 2. response: “Really? Thank you thank you! This will never happen again, I promise.”.

```text
Journal "Bng_WaterTax" 45
Bng_Rohlan_Darach->PositionCell, 5136.870117, 6515.564941, 9851.413086, 90, "Tatooine, Rodian District"
Bng_Jan_Jorden->PositionCell, 3539.044434, 3987.837402, 13728.400391,0, "Tatooine Czerka Office"
```

### Stage 50

I bumped into a strange Zabrak in the Rodian District

**How this stage is set:**
- Dialogue INFO `27741232232023113841` under topic **Greeting 5**; speaker Rohlan Darach (`Bng_Rohlan_Darach`). locations: `Tatooine, Rodian District`. conditions: Journal `Bng_WaterTax` GreaterEqual 35; Journal `Bng_WaterTax` LessEqual 45. response: “Oh Hi, are you a fan of Rodian food too? Any time I'm in town I always stop by Pylokam's”.

```text
Journal "Bng_WaterTax" 50
```

### Stage 60

A Squad of Sith Soldiers has arrived at the Czerka office looking for a jedi in hiding. I told them I saw someone like that at Pylokam's food stall.

**How this stage is set:**
- Dialogue INFO `889416298544927989` under topic **Greeting 5**; speaker Jan Jorden (`Bng_Jan_Jorden`). locations: `Tatooine, Sandriver`. conditions: Journal `Bng_WaterTax` Equal 52; Function/Choice Equal 1. response: “That sounds like him. You did the right thing %pcrace. We'll follow up on this right away.”.

```text
Journal "Bng_WaterTax" 60
Bng_Rohlan_Darach->PositionCell, -1711.520752, -17300.568359, 59937.882812, 0, "Rohlan Darach's Cave"
Bng_Jan_Jorden->PositionCell, 965.085938, -17108.648438, 60097.996094, 0, "Rohlan Darach's Cave"
```

### Stage 65

A Squad of Sith Soldiers has arrived at the Czerka office looking for a jedi in hiding. I did'nt tell them anything.

**How this stage is set:**
- Dialogue INFO `343277841970314347` under topic **Greeting 5**; speaker Jan Jorden (`Bng_Jan_Jorden`). locations: `Tatooine, Sandriver`. conditions: Journal `Bng_WaterTax` Equal 52; Function/Choice Equal 2. response: “Very well. I think we've finished up here. It's a shame Czerka lacks the rescources to care for it's city.”.

```text
Journal "Bng_WaterTax" 65
Bng_Rohlan_Darach->PositionCell, -1711.520752, -17300.568359, 59937.882812, 0, "Rohlan Darach's Cave"
Bng_Jan_Jorden->PositionCell, 11509.785156, 6608.144531, 12266.816406, 0, "tatooine, sandriver"
```
- Dialogue INFO `2858770381255509` under topic **Greeting 5**; speaker Jan Jorden (`Bng_Jan_Jorden`). locations: `Tatooine, Sandriver`. conditions: Journal `Bng_WaterTax` Equal 46; Function/Choice Equal 1. response: “Very well. I think we've finished up here. It's a shame Czerka lacks the rescources to care for it's city.”.

```text
Journal "Bng_WaterTax" 65
Bng_Rohlan_Darach->PositionCell, -1711.520752, -17300.568359, 59937.882812, 0, "Rohlan Darach's Cave"
Bng_Jan_Jorden->PositionCell, 11509.785156, 6608.144531, 12266.816406, 0, "tatooine, sandriver"
```

### Stage 70 — Finished

Predne Balu thanked me for collecting Narva's overdue tax.

**How this stage is set:**
- Dialogue INFO `26309124131898223601` under topic **Narva**; speaker Predne Balu (`Bng_Czerka_Tax_Officer`). locations: `Tatooine Czerka Office`. conditions: Journal `Bng_WaterTax` Equal 66; Function/Choice Equal 1. response: “Very good work %pcname. As a reward I'll let you keep half.”.

```text
Journal "Bng_WaterTax" 70
player->removeitem "gold_001" 250
```

### Related records and locations

**Dialogue speakers:**
- Predne Balu (`Bng_Czerka_Tax_Officer`) — `Tatooine Czerka Office`
- Jan Jorden (`Bng_Jan_Jorden`) — `Tatooine, Sandriver`
- Narva (`Bng_Narva`) — `Tatooine, Narva's Hut`
- Rohlan Darach (`Bng_Rohlan_Darach`) — `Tatooine, Rodian District`

**Scripts that read or write this journal:**
- `Bng_Narvascript` — Npc Narva (`Bng_Narva`); placed in `Tatooine, Narva's Hut`
- `Bng_Rohlan_Darach`

**Items referenced by related script/result code:**
- Prototype Offhand Tonfa Saber (`Bng_Proto_Tonfa_saber_Offhand`)
- Credits (`Gold_001`)
- Credits (`Gold_001`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Tatooine Czerka Office`
- `Tatooine, Narva's Hut`
- `Tatooine, Rodian District`
- `Tatooine, Sandriver`

<details><summary>Journal-state readers (1 code sites)</summary>

- Script `Bng_Rohlan_Darach`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `10` is obtainable.
- [ ] Reach index `10`: Tax Officer Predne Balu has tasked me with collecting 500 credits far an overdue water tax from Narva in the R…
- [ ] Reach index `30`: Narva says she can't afford the 500 credits.
- [ ] Reach index `35`: Narva has died.
- [ ] Reach index `40`: I got 400 credits from Narva. I should report back to Predne Balu
- [ ] Reach index `45`: I agreed to pay off Narva's debt for her.
- [ ] Reach index `50`: I bumped into a strange Zabrak in the Rodian District
- [ ] Reach index `60`: A Squad of Sith Soldiers has arrived at the Czerka office looking for a jedi in hiding. I told them I saw some…
- [ ] Reach index `65`: A Squad of Sith Soldiers has arrived at the Czerka office looking for a jedi in hiding. I did'nt tell them any…
- [ ] Reach index `70` (`Finished`): Predne Balu thanked me for collecting Narva's overdue tax.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `Bng_WaterTax`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
