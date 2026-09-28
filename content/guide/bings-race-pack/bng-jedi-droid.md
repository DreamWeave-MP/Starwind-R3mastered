---
title: "Jedi Droid (internal journal)"
description: "Walkthrough and QA reference for Jedi Droid (internal journal) (Bng_Jedi_Droid)."
weight: 4
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "Bng_Jedi_Droid"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `Bng_Jedi_Droid` |
| **Category** | Bing's Race Pack |
| **Journal entries** | 6 |
| **Completion branches** | 1 |
| **Starts by** | Record route requires playtest verification. |
| **Key locations** | Dantooine, Ballast, Dantooine, Valley of the Jedi, Nar Shaddaa, Cantina, Nar Shaddaa, Droid Shop |
| **Key characters** | Aneesa Dym, Ooroo, Bashi, Skippy, Yapda Hopkyo, Braiz Vinnapt |

## Walkthrough

### 1. Reach journal stage 10

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 10:** A waitress in the Nar Shaddaa Cantina asked me to help find Skippy, a missing server droid. I should look around there and see if I can find any clues.

### 2. Speak with Bashi in Nar Shaddaa, Cantina and ask about D6

The records expose more than one way to reach this journal update:
- Speak with **Bashi** in **Nar Shaddaa, Cantina** and ask about **D6**.
- Speak with **Yapda Hopkyo** in **Nar Shaddaa, Cantina** and ask about **D6**.

> **Expected journal update — index 20:** A D6 droid named Skippy was seen fleeing out the door of the nar shaddaa cantina. I should check at  the Droid Shop in Makacheesa market to see if he went there.

### 3. Speak with Braiz Vinnapt in Nar Shaddaa, Droid Shop and ask about D6

Speak with **Braiz Vinnapt** in **Nar Shaddaa, Droid Shop** and ask about **D6**.

> **Expected journal update — index 30:** Skippy was seen fleeing the droid shop. Braiz mentioned the droid said something about Dantooine.

### 4. Speak with Aneesa Dym in Dantooine, Ballast and ask about D6

Speak with **Aneesa Dym** in **Dantooine, Ballast** and ask about **D6**.

> **Expected journal update — index 40:** A smuggler in Ballast told me Skippy ran into the Dantooine Wilds looking for crystals.

### 5. Speak with Ooroo in Dantooine, Valley of the Jedi and ask about D6

Speak with **Ooroo** in **Dantooine, Valley of the Jedi** and ask about **D6**.

> **Expected journal update — index 50:** The Jedi Master Ooroo told me somehow Skippy can use the force

### 6. Speak with Skippy in Dantooine, Valley of the Jedi — Finished

Speak with **Skippy** in **Dantooine, Valley of the Jedi**.

> **Expected journal update — index 60:** Skippy joined the team and told me to meet him in Ballast!

**Outcome:** this journal entry is marked as a finished branch.

{% callout(kind="warning", title="Playtest flag") %}
1 journal stage on this page lack a literal setter in the current static scan.
{% end %}

## Endings & branches

The journal has one explicit finished state at **index 60**:

> Skippy joined the team and told me to meet him in Ballast!

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Aneesa Dym** (`Bng_Aneesa_Dym`) — `Dantooine, Ballast`
- **Ooroo** (`Bng_MC_Tester_Jedi`) — `Dantooine, Valley of the Jedi`
- **Bashi** (`Bng_Nar_Waitress`) — `Nar Shaddaa, Cantina`
- **Skippy** (`Bng_Skippy`) — `Dantooine, Valley of the Jedi`
- **Yapda Hopkyo** (`SW_BartenderNar`) — `Nar Shaddaa, Cantina`
- **Braiz Vinnapt** (`SW_NarDoidDealer`) — `Nar Shaddaa, Droid Shop`

**Locations implicated by actor/object placement or explicit travel:**
- **Dantooine, Ballast**
- **Dantooine, Valley of the Jedi**
- **Nar Shaddaa, Cantina**
- **Nar Shaddaa, Droid Shop**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `Bng_Jedi_Droid`
**Generated category:** Bing's Race Pack
**Journal entries:** 6

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 10 | — | A waitress in the Nar Shaddaa Cantina asked me to help find Skippy, a missing server droid. I should look around there and see if I can find any clues. | 0 |
| 20 | — | A D6 droid named Skippy was seen fleeing out the door of the nar shaddaa cantina. I should check at  the Droid Shop in Makacheesa market to see if he went there. | 2 |
| 30 | — | Skippy was seen fleeing the droid shop. Braiz mentioned the droid said something about Dantooine. | 1 |
| 40 | — | A smuggler in Ballast told me Skippy ran into the Dantooine Wilds looking for crystals. | 1 |
| 50 | — | The Jedi Master Ooroo told me somehow Skippy can use the force | 1 |
| 60 | Finished | Skippy joined the team and told me to meet him in Ballast! | 1 |

### Record-level trigger map

### Stage 10

A waitress in the Nar Shaddaa Cantina asked me to help find Skippy, a missing server droid. I should look around there and see if I can find any clues.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 20

A D6 droid named Skippy was seen fleeing out the door of the nar shaddaa cantina. I should check at  the Droid Shop in Makacheesa market to see if he went there.

**How this stage is set:**
- Dialogue INFO `14737182630832263` under topic **D6**; speaker Bashi (`Bng_Nar_Waitress`). locations: `Nar Shaddaa, Cantina`. response: “Did you see a D6 on your way in? He's a server droid, we call him Skippy. Everything seemed fine until he started bleeping and blooping like crazy, and he ran out the door! Maybe he went to the Droid shop in makacheesa market, that's where we took him for maintenance. I hope he's okay.”.

```text
Journal "Bng_Jedi_Droid" 20
```
- Dialogue INFO `29240136701197430687` under topic **D6**; speaker Yapda Hopkyo (`SW_BartenderNar`). locations: `Nar Shaddaa, Cantina`. conditions: Journal `Bng_Jedi_Droid` GreaterEqual 10. response: “Skippy is missing? maybe he went to see Braiz Vinnapt at the droid shop in Makacheesa Market. We took him there regularly whenever he needed maintenance done”.

```text
Journal "Bng_Jedi_Droid" 20
```

### Stage 30

Skippy was seen fleeing the droid shop. Braiz mentioned the droid said something about Dantooine.

**How this stage is set:**
- Dialogue INFO `215382160666654510` under topic **D6**; speaker Braiz Vinnapt (`SW_NarDoidDealer`). locations: `Nar Shaddaa, Droid Shop`. conditions: Journal `Bng_Jedi_Droid` Equal 20. response: “Yeah, he was in here. He kept rambling on about "Dantooine" and a  "great destiny he had to fulfill." We tried to grab him so we could do a memory wipe and send him back, but he ran out the door faster than anything I've ever seen.”.

```text
Journal "Bng_Jedi_Droid" 30
```

### Stage 40

A smuggler in Ballast told me Skippy ran into the Dantooine Wilds looking for crystals.

**How this stage is set:**
- Dialogue INFO `20859239653253828848` under topic **D6**; speaker Aneesa Dym (`Bng_Aneesa_Dym`). locations: `Dantooine, Ballast`. conditions: Journal `Bng_Jedi_Droid` Equal 30. response: “A D6!? that rusty tin can stowed away on my ship! as soon as I landed he wizzed by me and ran off bleeping and blooping about Crystals. If I could catch him I would have showed him how we deal with stowaways back on Nal Hutta.”.

```text
journal "Bng_Jedi_Droid" 40
```

### Stage 50

The Jedi Master Ooroo told me somehow Skippy can use the force

**How this stage is set:**
- Dialogue INFO `267882485381411757` under topic **D6**; speaker Ooroo (`Bng_MC_Tester_Jedi`). locations: `Dantooine, Valley of the Jedi`. conditions: Journal `Bng_Jedi_Droid` GreaterEqual 30. response: “Skippy has been waiting for you.  He told me all about the great adventures that await you both. I don't fully understand it myself, however we tested an oil sample and it does appear that he's full up of midi-chlorians. perhaps your future journies together will shed some light on this mystery.”.

```text
journal "Bng_Jedi_Droid" 50
addtopic "follow"
addtopic "wait"
```

### Stage 60 — Finished

Skippy joined the team and told me to meet him in Ballast!

**How this stage is set:**
- Dialogue INFO `189117971668517352` under topic **Greeting 7**; speaker Skippy (`Bng_Skippy`). locations: `Dantooine, Valley of the Jedi`. conditions: Journal `Bng_Jedi_Droid` Equal 50. response: “Bweeep beetle booop! (I'll meet you back in Ballast)”.

```text
Bng_Skippy->PositionCell, 9187, 2935, 111.33, 0, "Dantooine, Ballast"
Journal "Bng_Jedi_Droid" 60
set companion to 1
```

### Related records and locations

**Dialogue speakers:**
- Aneesa Dym (`Bng_Aneesa_Dym`) — `Dantooine, Ballast`
- Ooroo (`Bng_MC_Tester_Jedi`) — `Dantooine, Valley of the Jedi`
- Bashi (`Bng_Nar_Waitress`) — `Nar Shaddaa, Cantina`
- Skippy (`Bng_Skippy`) — `Dantooine, Valley of the Jedi`
- Yapda Hopkyo (`SW_BartenderNar`) — `Nar Shaddaa, Cantina`
- Braiz Vinnapt (`SW_NarDoidDealer`) — `Nar Shaddaa, Droid Shop`

**Cells implicated by actor/object placement or explicit travel code:**
- `Dantooine, Ballast`
- `Dantooine, Valley of the Jedi`
- `Nar Shaddaa, Cantina`
- `Nar Shaddaa, Droid Shop`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `10` is obtainable.
- [ ] Reach index `10`: A waitress in the Nar Shaddaa Cantina asked me to help find Skippy, a missing server droid. I should look arou…
- [ ] Reach index `20`: A D6 droid named Skippy was seen fleeing out the door of the nar shaddaa cantina. I should check at  the Droid…
- [ ] Reach index `30`: Skippy was seen fleeing the droid shop. Braiz mentioned the droid said something about Dantooine.
- [ ] Reach index `40`: A smuggler in Ballast told me Skippy ran into the Dantooine Wilds looking for crystals.
- [ ] Reach index `50`: The Jedi Master Ooroo told me somehow Skippy can use the force
- [ ] Reach index `60` (`Finished`): Skippy joined the team and told me to meet him in Ballast!
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `Bng_Jedi_Droid`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
