---
title: "A Matchmaking Decision"
description: "Walkthrough and QA reference for A Matchmaking Decision (SW_Tiiona)."
weight: 8
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_Tiiona"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_Tiiona` |
| **Category** | Side Quests |
| **Journal entries** | 6 |
| **Completion branches** | 2 |
| **Starts by** | Speak with **the relevant character** in **Dantooine, Tiiona's Weapons** and ask about **complicated**. |
| **Key locations** | Dantooine, Czerka Office, Dantooine, Tiiona's Weapons, Dantooine, Zanotti Estate |
| **Key characters** | Deonor Vale, `SW_Tiiona` — `Dantooine, Tiiona's Weapons`, Romeo Zanotti |

## Walkthrough

### 1. Speak with the relevant character in Dantooine, Tiiona's Weapons and ask about complicated

Speak with **the relevant character** in **Dantooine, Tiiona's Weapons** and ask about **complicated**.

> **Expected journal update — index 5:** I have met a woman named Tiiona who owns a weapon shop on Dantooine who is crossed between two men that are in love with her. She wants me to help her choose, I should speak with Deonor Vale, a Czerka Militant inside the Dantooine Czerka Office, and Romeo Zanotti, who is inside the Zanotti Estate.

### 2. Speak with Deonor Vale in Dantooine, Czerka Office and ask about Tiiona

Speak with **Deonor Vale** in **Dantooine, Czerka Office** and ask about **Tiiona**.

> **Expected journal update — index 10:** I have spoken to Deonar Vale, who says he doesn't come from much money, but that he can give her the galaxy, as she could come with him as he travels it for work.

### 3. Speak with Romeo Zanotti in Dantooine, Zanotti Estate and ask about Tiiona

Speak with **Romeo Zanotti** in **Dantooine, Zanotti Estate** and ask about **Tiiona**.

> **Expected journal update — index 15:** I have spoken to Romeo Zanotti, who says he won't leave his Estate, or leave behind his family's legacy here on Dantooine, but that she would live like royalty with him.

### 4. Speak with the relevant character in Dantooine, Tiiona's Weapons and ask about complicated — Finished

Speak with **the relevant character** in **Dantooine, Tiiona's Weapons** and ask about **complicated**.

> **Expected journal update — index 20:** I have told Tiiona that I advise her life would be happiest with Deonar Vale. She is going to leave with him as soon as his post is over here. She gave me a unique Double Vibroblade as a reward.

**Known item transfer:** 1 × **Tiiona's Doubleblade** (`SW_DblBldTiiona`).

**Outcome:** this journal entry is marked as a finished branch.

### 5. Speak with the relevant character in Dantooine, Tiiona's Weapons and ask about complicated — Finished

Speak with **the relevant character** in **Dantooine, Tiiona's Weapons** and ask about **complicated**.

> **Expected journal update — index 25:** I have told Tiiona that I advise her life would be happiest with Romeo Zanotti. She didn't seem as happy as I thought she would with the answer but she has taken my advisement to heart and has chosen Romeo. She gave me a unique Double Vibroblade as a reward.

**Known item transfer:** 1 × **Tiiona's Doubleblade** (`SW_DblBldTiiona`).

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has **2 explicit finished entries**. Treat them as branch coverage targets during playtesting:

- **Index 20:** I have told Tiiona that I advise her life would be happiest with Deonar Vale. She is going to leave with him as soon as his post is over here. She gave me a unique Double Vibroblade as a reward.
- **Index 25:** I have told Tiiona that I advise her life would be happiest with Romeo Zanotti. She didn't seem as happy as I thought she would with the answer but she has taken my advisement to heart and has chosen Romeo. She gave me a unique Double Vibroblade as a reward.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 1 × **Tiiona's Doubleblade** (`SW_DblBldTiiona`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Deonor Vale** (`SW_CzerkaLoverboy`) — `Dantooine, Czerka Office`
- **`SW_Tiiona` — `Dantooine, Tiiona's Weapons`** (``)
- **Romeo Zanotti** (`SW_ZanottiSon`) — `Dantooine, Zanotti Estate`

**Locations implicated by actor/object placement or explicit travel:**
- **Dantooine, Czerka Office**
- **Dantooine, Tiiona's Weapons**
- **Dantooine, Zanotti Estate**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_Tiiona`
**Generated category:** Side Quests
**Journal entries:** 6

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | I have met a woman named Tiiona who owns a weapon shop on Dantooine who is crossed between two men that are in love with her. She wants me to help her choose, I should speak with Deonor Vale, a Czerka Militant inside the Dantooine Czerka Office, and Romeo Zanotti, who is inside the Zanotti Estate. | 1 |
| 10 | — | I have spoken to Deonar Vale, who says he doesn't come from much money, but that he can give her the galaxy, as she could come with him as he travels it for work. | 1 |
| 15 | — | I have spoken to Romeo Zanotti, who says he won't leave his Estate, or leave behind his family's legacy here on Dantooine, but that she would live like royalty with him. | 2 |
| 20 | Finished | I have told Tiiona that I advise her life would be happiest with Deonar Vale. She is going to leave with him as soon as his post is over here. She gave me a unique Double Vibroblade as a reward. | 1 |
| 25 | Finished | I have told Tiiona that I advise her life would be happiest with Romeo Zanotti. She didn't seem as happy as I thought she would with the answer but she has taken my advisement to heart and has chosen Romeo. She gave me a unique Double Vibroblade as a reward. | 1 |

### Record-level trigger map

### Stage 5

I have met a woman named Tiiona who owns a weapon shop on Dantooine who is crossed between two men that are in love with her. She wants me to help her choose, I should speak with Deonor Vale, a Czerka Militant inside the Dantooine Czerka Office, and Romeo Zanotti, who is inside the Zanotti Estate.

**How this stage is set:**
- Dialogue INFO `1951972732215026039` under topic **complicated**; speaker `SW_Tiiona`. locations: `Dantooine, Tiiona's Weapons`. conditions: Journal `SW_Tiiona` Equal 0; Function/Choice Equal 2. response: “I - I wasn't expecting that, to be honest. Most people don't even pass through here, much take the time to help out with commoner's problems. So, one of them is Romeo Zanotti of the Zanotti Estate, he lives outside of town where his family's Estate resides. The other is Deonar Vale, a Czerka guy in the office across the street. Speak to them both for me? I can't wait for your return.”.

```text
Journal SW_Tiiona 5
```

### Stage 10

I have spoken to Deonar Vale, who says he doesn't come from much money, but that he can give her the galaxy, as she could come with him as he travels it for work.

**How this stage is set:**
- Dialogue INFO `65852089491371008` under topic **Tiiona**; speaker Deonor Vale (`SW_CzerkaLoverboy`). locations: `Dantooine, Czerka Office`. conditions: Journal `SW_Tiiona` Equal 5. response: “Tiiona? She asked you to come speak to me on her behalf? I would give her the galaxy, any planet she pleased, take her to every place she's ever dreamed about. I don't have much money, not like that Zanotti boy, but I have freedom, and I would share that with her for the rest of my life.”.

```text
Journal SW_Tiiona 10
```

### Stage 15

I have spoken to Romeo Zanotti, who says he won't leave his Estate, or leave behind his family's legacy here on Dantooine, but that she would live like royalty with him.

**How this stage is set:**
- Dialogue INFO `2489024714366111815` under topic **Tiiona**; speaker Romeo Zanotti (`SW_ZanottiSon`). locations: `Dantooine, Zanotti Estate`. conditions: Journal `SW_Tiiona` Equal 10. response: “Ah, the beautiful Tiiona. Please, let her know that she will be treated like royalty with me. I can give her whatever she wants, order it from anywhere she pleases. There is nothing exotic my family can not afford.”.

```text
Journal SW_Tiiona 15
```
- Dialogue INFO `279623834146038053` under topic **Tiiona**; speaker Romeo Zanotti (`SW_ZanottiSon`). locations: `Dantooine, Zanotti Estate`. conditions: Journal `SW_Tiiona` Equal 5. response: “Ah, the beautiful Tiiona. Please, let her know that she will be treated like royalty with me. I can give her whatever she wants, order it from anywhere she pleases. There is nothing exotic my family can not afford.”.

```text
Journal SW_Tiiona 15
```

### Stage 20 — Finished

I have told Tiiona that I advise her life would be happiest with Deonar Vale. She is going to leave with him as soon as his post is over here. She gave me a unique Double Vibroblade as a reward.

**How this stage is set:**
- Dialogue INFO `2400325786347129885` under topic **complicated**; speaker `SW_Tiiona`. locations: `Dantooine, Tiiona's Weapons`. conditions: Journal `SW_Tiiona` Equal 15; Function/Choice Equal 1. response: “Deonar? He did tell me he would take me across the galaxy. How exciting that would be! Okay, I'll let him know, and I'll leave with him as soon as his post ends here on Dantooine! Thank you, here, take this, it's my special vibroblade.”.

```text
Journal SW_Tiiona 20
player->ModReputation 1
player->additem "SW_DblBldTiiona", 1
```

### Stage 25 — Finished

I have told Tiiona that I advise her life would be happiest with Romeo Zanotti. She didn't seem as happy as I thought she would with the answer but she has taken my advisement to heart and has chosen Romeo. She gave me a unique Double Vibroblade as a reward.

**How this stage is set:**
- Dialogue INFO `221030246124273259` under topic **complicated**; speaker `SW_Tiiona`. locations: `Dantooine, Tiiona's Weapons`. conditions: Journal `SW_Tiiona` Equal 15; Function/Choice Equal 2. response: “Romeo? He's been trying to get me to marry him for years.. I never thought I would but, if it is your advise I know your looking at more than what I am. I'll do it. I know he'll treat me well. Thank you, here, take this, it's my special vibroblade.”.

```text
Journal SW_Tiiona 25
player->ModReputation 1
player->additem "SW_DblBldTiiona", 1
```

### Related records and locations

**Dialogue speakers:**
- Deonor Vale (`SW_CzerkaLoverboy`) — `Dantooine, Czerka Office`
- `SW_Tiiona` — `Dantooine, Tiiona's Weapons`
- Romeo Zanotti (`SW_ZanottiSon`) — `Dantooine, Zanotti Estate`

**Items referenced by related script/result code:**
- Tiiona's Doubleblade (`SW_DblBldTiiona`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Dantooine, Czerka Office`
- `Dantooine, Tiiona's Weapons`
- `Dantooine, Zanotti Estate`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: I have met a woman named Tiiona who owns a weapon shop on Dantooine who is crossed between two men that are in…
- [ ] Reach index `10`: I have spoken to Deonar Vale, who says he doesn't come from much money, but that he can give her the galaxy, a…
- [ ] Reach index `15`: I have spoken to Romeo Zanotti, who says he won't leave his Estate, or leave behind his family's legacy here o…
- [ ] Reach index `20` (`Finished`): I have told Tiiona that I advise her life would be happiest with Deonar Vale. She is going to leave with him a…
- [ ] Reach index `25` (`Finished`): I have told Tiiona that I advise her life would be happiest with Romeo Zanotti. She didn't seem as happy as I …
- [ ] Branch coverage: this journal has **2 different `Finished` entries**; test each reachable completion branch.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_Tiiona`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
