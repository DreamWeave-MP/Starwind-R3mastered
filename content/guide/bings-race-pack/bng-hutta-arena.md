---
title: "Hutta Arena (internal journal)"
description: "Walkthrough and QA reference for Hutta Arena (internal journal) (Bng_Hutta_Arena)."
weight: 3
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "Bng_Hutta_Arena"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `Bng_Hutta_Arena` |
| **Category** | Bing's Race Pack |
| **Journal entries** | 7 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Mondo Mod** in **Nal Hutta, Arena Office** and ask about **Arena of Doom**. |
| **Key locations** | Nal Hutta, Arena Office |
| **Key characters** | Mondo Mod |

## Walkthrough

### 1. Speak with Mondo Mod in Nal Hutta, Arena Office and ask about Arena of Doom

Speak with **Mondo Mod** in **Nal Hutta, Arena Office** and ask about **Arena of Doom**.

> **Expected journal update — index 10:** I signed up for the Arena of Doom on Nal Hutta. speak to Mondo Mod when you're ready to fight.

### 2. Defeat Quin Amarant in Nal Hutta, Arena Office and allow its script to update the quest

Defeat **Quin Amarant** in **Nal Hutta, Arena Office** and allow its script to update the quest.

> **Expected journal update — index 20:** I killed Quin Amarant in the Arena of Doom

### 3. Defeat Rozatta in Nal Hutta, Arena Office and allow its script to update the quest

Defeat **Rozatta** in **Nal Hutta, Arena Office** and allow its script to update the quest.

> **Expected journal update — index 40:** I killed Rozatta in the Arena of Doom

### 4. Defeat Umwak in Nal Hutta, Arena Office and allow its script to update the quest

Defeat **Umwak** in **Nal Hutta, Arena Office** and allow its script to update the quest.

> **Expected journal update — index 60:** I killed Umwak in the Arena of Doom

### 5. Defeat Double Dutch in Nal Hutta, Arena Office and allow its script to update the quest

Defeat **Double Dutch** in **Nal Hutta, Arena Office** and allow its script to update the quest.

> **Expected journal update — index 80:** I killed Double Dutch in the Arena of Doom.

### 6. Defeat The Gorax in Nal Hutta, Arena Office and allow its script to update the quest

Defeat **The Gorax** in **Nal Hutta, Arena Office** and allow its script to update the quest.

> **Expected journal update — index 100:** You killed the Gorax in the Arena of Doom!

### 7. Speak with Mondo Mod in Nal Hutta, Arena Office and ask about Arena of Doom — Finished

Speak with **Mondo Mod** in **Nal Hutta, Arena Office** and ask about **Arena of Doom**.

> **Expected journal update — index 110:** You killed everyone at the Arena of Doom. Congratulations!

**Known item transfer:** 5000 × **Credits** (`gold_001`).

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 110**:

> You killed everyone at the Arena of Doom. Congratulations!

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 5000 × **Credits** (`gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Mondo Mod** (`Bng_Mondo_Mod`) — `Nal Hutta, Arena Office`

**Locations implicated by actor/object placement or explicit travel:**
- **Nal Hutta, Arena Office**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `Bng_Hutta_Arena`
**Generated category:** Bing's Race Pack
**Journal entries:** 7

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 10 | — | I signed up for the Arena of Doom on Nal Hutta. speak to Mondo Mod when you're ready to fight. | 1 |
| 20 | — | I killed Quin Amarant in the Arena of Doom | 1 |
| 40 | — | I killed Rozatta in the Arena of Doom | 1 |
| 60 | — | I killed Umwak in the Arena of Doom | 1 |
| 80 | — | I killed Double Dutch in the Arena of Doom. | 1 |
| 100 | — | You killed the Gorax in the Arena of Doom! | 1 |
| 110 | Finished | You killed everyone at the Arena of Doom. Congratulations! | 1 |

### Record-level trigger map

### Stage 10

I signed up for the Arena of Doom on Nal Hutta. speak to Mondo Mod when you're ready to fight.

**How this stage is set:**
- Dialogue INFO `144983407290829658` under topic **Arena of Doom**; speaker Mondo Mod (`Bng_Mondo_Mod`). locations: `Nal Hutta, Arena Office`. conditions: Function/Choice Equal 2. response: “Great! Let me know when you're ready to taste blood and I'll arrange a match for you”.

```text
journal "Bng_Hutta_Arena" 10
```

### Stage 20

I killed Quin Amarant in the Arena of Doom

**How this stage is set:**
- Script `Bng_Quin`. attached to Npc Quin Amarant (`Bng_Quin_Amarant`); placed in `Nal Hutta, Arena Office`.

```text
if ( Bng_Quin_Amarant->Gethealth = 0 )
Journal "Bng_Hutta_Arena" 20
endif
```

### Stage 40

I killed Rozatta in the Arena of Doom

**How this stage is set:**
- Script `Bng_Rozatta`. attached to Npc Rozatta (`Bng_Rozatta`); placed in `Nal Hutta, Arena Office`.

```text
if ( Bng_Rozatta->Gethealth = 0 )
Journal "Bng_Hutta_Arena" 40
endif
```

### Stage 60

I killed Umwak in the Arena of Doom

**How this stage is set:**
- Script `Bng_Umwak`. attached to Npc Umwak (`Bng_Umwak`); placed in `Nal Hutta, Arena Office`.

```text
if ( Bng_Umwak->Gethealth = 0 )
Journal "Bng_Hutta_Arena" 60
endif
```

### Stage 80

I killed Double Dutch in the Arena of Doom.

**How this stage is set:**
- Script `Bng_Double_Dutch`. attached to Npc Double Dutch (`Bng_Double_Dutch`); placed in `Nal Hutta, Arena Office`.

```text
if ( Bng_Double_Dutch->Gethealth = 0 )
Journal "Bng_Hutta_Arena" 80
endif
```

### Stage 100

You killed the Gorax in the Arena of Doom!

**How this stage is set:**
- Script `Bng_Arena_Gorax`. attached to Npc The Gorax (`Bng_Arena_Gorax`); placed in `Nal Hutta, Arena Office`.

```text
if ( Bng_Arena_Gorax->Gethealth = 0 )
Journal "Bng_Hutta_Arena" 100
endif
```

### Stage 110 — Finished

You killed everyone at the Arena of Doom. Congratulations!

**How this stage is set:**
- Dialogue INFO `1940916297268674360` under topic **Arena of Doom**; speaker Mondo Mod (`Bng_Mondo_Mod`). locations: `Nal Hutta, Arena Office`. conditions: Journal `Bng_Hutta_Arena` Equal 100. response: “Holy shit. you killed her. You killed all of them. Congratulations, Champ!”.

```text
player->additem "gold_001" 5000
journal "Bng_Hutta_Arena" 110
```

### Related records and locations

**Dialogue speakers:**
- Mondo Mod (`Bng_Mondo_Mod`) — `Nal Hutta, Arena Office`

**Scripts that read or write this journal:**
- `Bng_Arena_Gorax` — Npc The Gorax (`Bng_Arena_Gorax`); placed in `Nal Hutta, Arena Office`
- `Bng_Double_Dutch` — Npc Double Dutch (`Bng_Double_Dutch`); placed in `Nal Hutta, Arena Office`
- `Bng_Quin` — Npc Quin Amarant (`Bng_Quin_Amarant`); placed in `Nal Hutta, Arena Office`
- `Bng_Rozatta` — Npc Rozatta (`Bng_Rozatta`); placed in `Nal Hutta, Arena Office`
- `Bng_Umwak` — Npc Umwak (`Bng_Umwak`); placed in `Nal Hutta, Arena Office`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Nal Hutta, Arena Office`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `10` is obtainable.
- [ ] Reach index `10`: I signed up for the Arena of Doom on Nal Hutta. speak to Mondo Mod when you're ready to fight.
- [ ] Reach index `20`: I killed Quin Amarant in the Arena of Doom
- [ ] Reach index `40`: I killed Rozatta in the Arena of Doom
- [ ] Reach index `60`: I killed Umwak in the Arena of Doom
- [ ] Reach index `80`: I killed Double Dutch in the Arena of Doom.
- [ ] Reach index `100`: You killed the Gorax in the Arena of Doom!
- [ ] Reach index `110` (`Finished`): You killed everyone at the Arena of Doom. Congratulations!
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `Bng_Hutta_Arena`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
