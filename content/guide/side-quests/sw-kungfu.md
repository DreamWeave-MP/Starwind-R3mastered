---
title: "Teras Kasi Style"
description: "Walkthrough and QA reference for Teras Kasi Style (SW_Kungfu)."
weight: 79
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_Kungfu"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_Kungfu` |
| **Category** | Side Quests |
| **Journal entries** | 4 |
| **Completion branches** | No explicit Finished marker |
| **Starts by** | Speak with **Zu Qui** in **Nar Shaddaa, Teras Kasi Dojo** and ask about **Teras Kasi Style**. |
| **Key locations** | Nar Shaddaa, Teras Kasi Dojo |
| **Key characters** | Zu Qui |

## Walkthrough

### 1. Speak with Zu Qui in Nar Shaddaa, Teras Kasi Dojo and ask about Teras Kasi Style

Speak with **Zu Qui** in **Nar Shaddaa, Teras Kasi Dojo** and ask about **Teras Kasi Style**.

> **Expected journal update — index 5:** I have learned that Zu Qui can teach me about on Nar Shaddaa can teach me about Teras Kasi Style combat. She charges a fee for her students but apparently it is a deadly art without the need for using weapons.

### 2. Speak with Zu Qui in Nar Shaddaa, Teras Kasi Dojo and ask about Teras Kasi Style

Speak with **Zu Qui** in **Nar Shaddaa, Teras Kasi Dojo** and ask about **Teras Kasi Style**.

> **Expected journal update — index 10:** I have learned the basics of Teras Kasi Style combat, I should return whenever I am ready to learn the advanced techniques.

**Known item transfer:** 1 × **Teras Kasi Style Blocking** (`sw_noshield`), 1 × **Common Pants** (`BM_Wool02_pants`).

### 3. Speak with Zu Qui in Nar Shaddaa, Teras Kasi Dojo and ask about Teras Kasi Style

Speak with **Zu Qui** in **Nar Shaddaa, Teras Kasi Dojo** and ask about **Teras Kasi Style**.

> **Expected journal update — index 15:** I have learned the advanced techniques of Teras Kasi Style combat, Zu Qui has told me she has nothing left to teach me, and that I should hone my skills outside against worthy opponents.

**Known item transfer:** 1 × **Adv. Teras Kasi Style Blocking** (`sw_noshield2`), 1 × **Common Shirt** (`common_shirt_03_b`).

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 1 × **Teras Kasi Style Blocking** (`sw_noshield`)
- 1 × **Common Pants** (`BM_Wool02_pants`)
- 1 × **Adv. Teras Kasi Style Blocking** (`sw_noshield2`)
- 1 × **Common Shirt** (`common_shirt_03_b`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Zu Qui** (`SW_TerasKasiMaster`) — `Nar Shaddaa, Teras Kasi Dojo`

**Locations implicated by actor/object placement or explicit travel:**
- **Nar Shaddaa, Teras Kasi Dojo**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_Kungfu`
**Generated category:** Side Quests
**Journal entries:** 4

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | I have learned that Zu Qui can teach me about on Nar Shaddaa can teach me about Teras Kasi Style combat. She charges a fee for her students but apparently it is a deadly art without the need for using weapons. | 2 |
| 10 | — | I have learned the basics of Teras Kasi Style combat, I should return whenever I am ready to learn the advanced techniques. | 1 |
| 15 | — | I have learned the advanced techniques of Teras Kasi Style combat, Zu Qui has told me she has nothing left to teach me, and that I should hone my skills outside against worthy opponents. | 1 |

### Record-level trigger map

### Stage 5

I have learned that Zu Qui can teach me about on Nar Shaddaa can teach me about Teras Kasi Style combat. She charges a fee for her students but apparently it is a deadly art without the need for using weapons.

**How this stage is set:**
- Dialogue INFO `23761310362445331434` under topic **Teras Kasi Style**; speaker Zu Qui (`SW_TerasKasiMaster`). locations: `Nar Shaddaa, Teras Kasi Dojo`. conditions: Journal `SW_Kungfu` Equal 5. response: “Teras Kasi Style combat is form of unarmed martial combat that was developed to combat force users. It is deadly, and does not require the use of weapons. I can teach you fighting styles or blocking styles, but I do charge a fee. 1,000 credits to learn the basic techniques.”.

```text
Journal SW_Kungfu 5
Choice "I'm in, teach me the Teras Kasi Style." 1 "No, not right now." 2
```
- Dialogue INFO `1281032014241925635` under topic **Teras Kasi Style**; speaker Zu Qui (`SW_TerasKasiMaster`). locations: `Nar Shaddaa, Teras Kasi Dojo`. conditions: Journal `SW_Kungfu` Equal 0. response: “Teras Kasi Style combat is form of unarmed martial combat that was developed to combat force users. It is deadly, and does not require the use of weapons. I can teach you fighting styles or blocking styles, but I do charge a fee. 1,000 credits to learn the basic techniques.”.

```text
Journal SW_Kungfu 5
Choice "I'm in, teach me the Teras Kasi Style." 1 "No, not right now." 2
```

### Stage 10

I have learned the basics of Teras Kasi Style combat, I should return whenever I am ready to learn the advanced techniques.

**How this stage is set:**
- Dialogue INFO `25642300321286017806` under topic **Teras Kasi Style**; speaker Zu Qui (`SW_TerasKasiMaster`). locations: `Nar Shaddaa, Teras Kasi Dojo`. conditions: Function/Choice Equal 1; Item/ItemType `Gold_001` GreaterEqual 1000. response: “Watch carefully, and I will show you the basics... You did well. Come find me again when you are ready to learn the advanced techniques.”.

```text
player->additem sw_noshield 1
player->additem BM_Wool02_pants 1
Journal SW_Kungfu 10
```

### Stage 15

I have learned the advanced techniques of Teras Kasi Style combat, Zu Qui has told me she has nothing left to teach me, and that I should hone my skills outside against worthy opponents.

**How this stage is set:**
- Dialogue INFO `632589304057376` under topic **Teras Kasi Style**; speaker Zu Qui (`SW_TerasKasiMaster`). locations: `Nar Shaddaa, Teras Kasi Dojo`. conditions: Function/Choice Equal 3; Item/ItemType `Gold_001` GreaterEqual 3000. response: “You are a natural. There is nothing more that I can teach you about technique. If you would like to practice, I offer standard training services, but I encourage you to travel and practice on worthy opponents in a real combat situation.”.

```text
player->additem sw_noshield2 1
player->additem common_shirt_03_b 1
Journal SW_Kungfu 15
```

### Related records and locations

**Dialogue speakers:**
- Zu Qui (`SW_TerasKasiMaster`) — `Nar Shaddaa, Teras Kasi Dojo`

**Items referenced by related script/result code:**
- Common Pants (`BM_Wool02_pants`)
- Common Shirt (`common_shirt_03_b`)
- Credits (`Gold_001`)
- Teras Kasi Style Blocking (`SW_NoShield`)
- Adv. Teras Kasi Style Blocking (`SW_NoShield2`)
- Teras Kasi Style Fighting (`SW_NoWeapon`)
- Adv. Teras Kasi Style Fighting (`SW_NoWeapon2`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Nar Shaddaa, Teras Kasi Dojo`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: I have learned that Zu Qui can teach me about on Nar Shaddaa can teach me about Teras Kasi Style combat. She c…
- [ ] Reach index `10`: I have learned the basics of Teras Kasi Style combat, I should return whenever I am ready to learn the advance…
- [ ] Reach index `15`: I have learned the advanced techniques of Teras Kasi Style combat, Zu Qui has told me she has nothing left to …
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_Kungfu`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
