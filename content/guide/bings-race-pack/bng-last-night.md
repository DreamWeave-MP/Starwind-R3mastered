---
title: "One Last Night"
description: "Walkthrough and QA reference for One Last Night (Bng_Last_Night)."
weight: 6
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "Bng_Last_Night"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `Bng_Last_Night` |
| **Category** | Bing's Race Pack |
| **Journal entries** | 6 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Lak Sivrak** in **Nal Hutta, Groola's Place** and ask about **lost love**. |
| **Key locations** | Manaan, Republic Embassy, Nal Hutta, Groola's Place |
| **Key characters** | Groola, Lak Sivrak, Republic Receptionist |

## Walkthrough

### 1. Speak with Lak Sivrak in Nal Hutta, Groola's Place and ask about lost love

Speak with **Lak Sivrak** in **Nal Hutta, Groola's Place** and ask about **lost love**.

> **Expected journal update — index 10:** I met Lak Sivrak at Groola's place. He told me the story of how he met his love, Dice Ibegon, who disappeared on a Republic mission to scout a location for a secret base.

### 2. Activate Letter for Lak

The records expose more than one way to reach this journal update:
- Activate **Letter for Lak**.
- Activate **Letter for Dice**.

> **Expected journal update — index 20:** I found Dice Ibegon's body in the Wampa's Cave on Hoth. She was carrying a letter for her husband, Lak Sivrak.

### 3. Speak with Groola in Nal Hutta, Groola's Place and ask about Lak Sivrak

Speak with **Groola** in **Nal Hutta, Groola's Place** and ask about **Lak Sivrak**.

> **Expected journal update — index 30:** Groola told Me Lak Sivrak sobered up a week ago and left to join back up with the Republic Army.

### 4. Speak with Republic Receptionist in Manaan, Republic Embassy and ask about Lak Sivrak

Speak with **Republic Receptionist** in **Manaan, Republic Embassy** and ask about **Lak Sivrak**.

> **Expected journal update — index 40:** Lak Sivrak has gone missing. The Receptionist at the Republic Embassy said she suspects the Sith had something to do with it, however without proof there's nothing to do about it.

### 5. Activate Letter for Dice — Finished

Activate **Letter for Dice**.

> **Expected journal update — index 50:** I found Lak's body in the Sith Embasssy. He had a letter to Dice on him. At least they can finally reunite in the Force.

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 50**:

> I found Lak's body in the Sith Embasssy. He had a letter to Dice on him. At least they can finally reunite in the Force.

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Groola** (`Bng_Groola`) — `Nal Hutta, Groola's Place`
- **Lak Sivrak** (`Bng_Lak_Sivrak`) — `Nal Hutta, Groola's Place`
- **Republic Receptionist** (`SW_RepublicReceptionist`) — `Manaan, Republic Embassy`

**Locations implicated by actor/object placement or explicit travel:**
- **Manaan, Republic Embassy**
- **Nal Hutta, Groola's Place**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `Bng_Last_Night`
**Generated category:** Bing's Race Pack
**Journal entries:** 6

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 10 | — | I met Lak Sivrak at Groola's place. He told me the story of how he met his love, Dice Ibegon, who disappeared on a Republic mission to scout a location for a secret base. | 1 |
| 20 | — | I found Dice Ibegon's body in the Wampa's Cave on Hoth. She was carrying a letter for her husband, Lak Sivrak. | 3 |
| 30 | — | Groola told Me Lak Sivrak sobered up a week ago and left to join back up with the Republic Army. | 1 |
| 40 | — | Lak Sivrak has gone missing. The Receptionist at the Republic Embassy said she suspects the Sith had something to do with it, however without proof there's nothing to do about it. | 1 |
| 50 | Finished | I found Lak's body in the Sith Embasssy. He had a letter to Dice on him. At least they can finally reunite in the Force. | 1 |

### Record-level trigger map

### Stage 10

I met Lak Sivrak at Groola's place. He told me the story of how he met his love, Dice Ibegon, who disappeared on a Republic mission to scout a location for a secret base.

**How this stage is set:**
- Dialogue INFO `2714430964267166618` under topic **lost love**; speaker Lak Sivrak (`Bng_Lak_Sivrak`). locations: `Nal Hutta, Groola's Place`. conditions: Function/Choice Equal 1; Journal `Bng_Last_Night` Equal 5. response: “Dice was assigned on a special mission, to scout the planet Hoth for a location to build a secret Republic base. She and her crew set out and after they landed we never heard from them again. I waited for months hoping for her miraculous return, but when it became clear she was gone, then I decided to get gone too. I hopped on the nearest ship and got as far away as I could. Dreddon's been good to me and now I'm a half decent shot, but I would do anything for one last six armed hug from Dice Ibegon.”.

```text
Journal "Bng_Last_Night" 10
```

### Stage 20

I found Dice Ibegon's body in the Wampa's Cave on Hoth. She was carrying a letter for her husband, Lak Sivrak.

**How this stage is set:**
- Script `Bng_Dice_Letter`. attached to Book Letter for Lak (`Bng_Letter_For_Lak`).

```text
if ( OnActivate == 1)
Journal "Bng_Last_Night" 20
set ReadNote to 1
Activate
```

```text
If ( OnPCEquip == 1 )
Journal "Bng_Last_Night" 20
Bng_Lak_Sivrak->Positioncell, 2965.7, 2175.3, 11957.8, 0, "manaan, sith embassy"
Bng_Lak_Sivrak->sethealth 0
```
- Script `Bng_Dice_Letter`. attached to Book Letter for Lak (`Bng_Letter_For_Lak`).

```text
if ( OnActivate == 1)
Journal "Bng_Last_Night" 20
set ReadNote to 1
Activate
```

```text
If ( OnPCEquip == 1 )
Journal "Bng_Last_Night" 20
Bng_Lak_Sivrak->Positioncell, 2965.7, 2175.3, 11957.8, 0, "manaan, sith embassy"
Bng_Lak_Sivrak->sethealth 0
```
- Script `Bng_Lak_Letter`. attached to Book Letter for Dice (`Bng_Letter_For_Dice`).

```text
if ( OnActivate == 1)
Journal "Bng_Last_Night" 20
set ReadNote to 1
Activate
```

```text
If ( OnPCEquip == 1 )
Journal "Bng_Last_Night" 50
set ReadNote to 1
set OnPCEquip to 0
```

### Stage 30

Groola told Me Lak Sivrak sobered up a week ago and left to join back up with the Republic Army.

**How this stage is set:**
- Dialogue INFO `631314570294120245` under topic **Lak Sivrak**; speaker Groola (`Bng_Groola`). locations: `Nal Hutta, Groola's Place`. conditions: Journal `Bng_Last_Night` Equal 20. response: “The sad ol' hound?  He sobered up about a week ago and told me he was going back to the the Republic.”.

```text
Journal "Bng_Last_Night" 30
```

### Stage 40

Lak Sivrak has gone missing. The Receptionist at the Republic Embassy said she suspects the Sith had something to do with it, however without proof there's nothing to do about it.

**How this stage is set:**
- Dialogue INFO `3019853581178320871` under topic **Lak Sivrak**; speaker Republic Receptionist (`SW_RepublicReceptionist`). locations: `Manaan, Republic Embassy`. conditions: Journal `Bng_Last_Night` Equal 30. response: “Oh, I'm so sorry. Lak Sivrak went missing a few days ago. We suspect the Sith had something to do with it, but without proof there's nothing we can do about it.”.

```text
Journal "Bng_Last_Night" 40
```

### Stage 50 — Finished

I found Lak's body in the Sith Embasssy. He had a letter to Dice on him. At least they can finally reunite in the Force.

**How this stage is set:**
- Script `Bng_Lak_Letter`. attached to Book Letter for Dice (`Bng_Letter_For_Dice`).

```text
if ( OnActivate == 1)
Journal "Bng_Last_Night" 20
set ReadNote to 1
Activate
```

```text
If ( OnPCEquip == 1 )
Journal "Bng_Last_Night" 50
set ReadNote to 1
set OnPCEquip to 0
```

### Related records and locations

**Dialogue speakers:**
- Groola (`Bng_Groola`) — `Nal Hutta, Groola's Place`
- Lak Sivrak (`Bng_Lak_Sivrak`) — `Nal Hutta, Groola's Place`
- Republic Receptionist (`SW_RepublicReceptionist`) — `Manaan, Republic Embassy`

**Scripts that read or write this journal:**
- `Bng_Dice_Letter` — Book Letter for Lak (`Bng_Letter_For_Lak`)
- `Bng_Lak_Letter` — Book Letter for Dice (`Bng_Letter_For_Dice`)

**Items referenced by related script/result code:**
- Letter for Dice (`Bng_Letter_For_Dice`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Manaan, Republic Embassy`
- `Nal Hutta, Groola's Place`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `10` is obtainable.
- [ ] Reach index `10`: I met Lak Sivrak at Groola's place. He told me the story of how he met his love, Dice Ibegon, who disappeared …
- [ ] Reach index `20`: I found Dice Ibegon's body in the Wampa's Cave on Hoth. She was carrying a letter for her husband, Lak Sivrak.
- [ ] Reach index `30`: Groola told Me Lak Sivrak sobered up a week ago and left to join back up with the Republic Army.
- [ ] Reach index `40`: Lak Sivrak has gone missing. The Receptionist at the Republic Embassy said she suspects the Sith had something…
- [ ] Reach index `50` (`Finished`): I found Lak's body in the Sith Embasssy. He had a letter to Dice on him. At least they can finally reunite in …
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `Bng_Last_Night`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
