---
title: "Wedding (internal journal)"
description: "Walkthrough and QA reference for Wedding (internal journal) (Bng_Wedding)."
weight: 8
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "Bng_Wedding"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `Bng_Wedding` |
| **Category** | Bing's Race Pack |
| **Journal entries** | 6 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **M'iiyoom Onith** in **Tatooine, Sandriver** and ask about **officiant**. |
| **Key locations** | Gamorr, Mama Gorsak's House, Gamorr, Ucksmug, Tatooine, Sandriver |
| **Key characters** | Mama Gorsak, M'iiyoom Onith |

## Walkthrough

### 1. Speak with M'iiyoom Onith in Tatooine, Sandriver and ask about officiant

Speak with **M'iiyoom Onith** in **Tatooine, Sandriver** and ask about **officiant**.

> **Expected journal update — index 10:** I met back up with M'iiyoom on Gamorr and she asked me to officiate her wedding! they're all waiting for me at the bar in Gamorr.

### 2. Find Balch in Gamorr, Mama Gorsak's House and complete the encounter

Find **Balch** in **Gamorr, Mama Gorsak's House** and complete the encounter.

> **Expected journal update — index 20:** I have heard everyone's vows.

### 3. Speak with M'iiyoom Onith in Tatooine, Sandriver

Speak with **M'iiyoom Onith** in **Tatooine, Sandriver**.

> **Expected journal update — index 30:** The two couples have been married! I should stick around and chat with the guests for a while.

### 4. Speak with Mama Gorsak in Gamorr, Mama Gorsak's House and ask about mating rituals

Speak with **Mama Gorsak** in **Gamorr, Mama Gorsak's House** and ask about **mating rituals**.

> **Expected journal update — index 40:** The two newlywed couples have snuck back to Mama Gorsak's House.

### 5. Speak with M'iiyoom Onith in Tatooine, Sandriver

Speak with **M'iiyoom Onith** in **Tatooine, Sandriver**.

> **Expected journal update — index 50:** It looks like M'iiyoom and Vishki have eaten their grooms.

### 6. Speak with Mama Gorsak in Gamorr, Mama Gorsak's House — Finished

Speak with **Mama Gorsak** in **Gamorr, Mama Gorsak's House**.

> **Expected journal update — index 60:** M'iiyoom and Vishki have completed their Pursuits, and Mama Gorsak is getting her grandkids, so it looks like everything worked out.

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 60**:

> M'iiyoom and Vishki have completed their Pursuits, and Mama Gorsak is getting her grandkids, so it looks like everything worked out.

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Mama Gorsak** (`Bng_Mama_Gorsak`) — `Gamorr, Mama Gorsak's House`
- **M'iiyoom Onith** (`Bng_Miiyoom_Onith`) — `Tatooine, Sandriver`

**Locations implicated by actor/object placement or explicit travel:**
- **Gamorr, Mama Gorsak's House**
- **Gamorr, Ucksmug**
- **Tatooine, Sandriver**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `Bng_Wedding`
**Generated category:** Bing's Race Pack
**Journal entries:** 6

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 10 | — | I met back up with M'iiyoom on Gamorr and she asked me to officiate her wedding! they're all waiting for me at the bar in Gamorr. | 1 |
| 20 | — | I have heard everyone's vows. | 1 |
| 30 | — | The two couples have been married! I should stick around and chat with the guests for a while. | 1 |
| 40 | — | The two newlywed couples have snuck back to Mama Gorsak's House. | 1 |
| 50 | — | It looks like M'iiyoom and Vishki have eaten their grooms. | 1 |
| 60 | Finished | M'iiyoom and Vishki have completed their Pursuits, and Mama Gorsak is getting her grandkids, so it looks like everything worked out. | 1 |

### Record-level trigger map

### Stage 10

I met back up with M'iiyoom on Gamorr and she asked me to officiate her wedding! they're all waiting for me at the bar in Gamorr.

**How this stage is set:**
- Dialogue INFO `15133312133053329863` under topic **officiant**; speaker M'iiyoom Onith (`Bng_Miiyoom_Onith`). locations: `Tatooine, Sandriver`. conditions: Journal `Bng_Wedding` Equal 5; Function/Choice Equal 1. response: “Perfect! Thank You! *COOO* We'll go to the bar right now. Everyone else is already here! Meet you there, %PCName.”.

```text
Journal "Bng_Wedding" 10
Bng_Balch-> PositionCell, 9734.690430, 5699.025879, 411.293732, 0, "Gamorr, Ucksmug"
Bng_Miiyoom_Onith-> PositionCell, 9835.626953, 5594.020020, 411.293732, 0, "Gamorr, Ucksmug"
```

### Stage 20

I have heard everyone's vows.

**How this stage is set:**
- Script `Vowcheck`. attached to Npc Balch (`Bng_Balch`); placed in `Gamorr, Mama Gorsak's House`; Npc Gurkhob (`Bng_Gurkhob`); placed in `Gamorr, Mama Gorsak's House`; Npc Vishki Onith (`Bng_Vishki_Onith`); placed in `Gamorr, Mama Gorsak's House`.

```text
if Bng_Vows == 4

     Journal, "Bng_Wedding" 20

endif
```

### Stage 30

The two couples have been married! I should stick around and chat with the guests for a while.

**How this stage is set:**
- Dialogue INFO `1701815723273935935` under topic **Greeting 5**; speaker M'iiyoom Onith (`Bng_Miiyoom_Onith`). locations: `Tatooine, Sandriver`. cell constraint `Gamorr, Ucksmug`. conditions: Journal `Bng_Wedding` Equal 20. response: “*COOO* We're married! I seriously can't thank you enough for all your help. stick around as long as you'd like and enjoy the wedding.”.

```text
Journal Bng_Wedding 30
```

### Stage 40

The two newlywed couples have snuck back to Mama Gorsak's House.

**How this stage is set:**
- Dialogue INFO `144653165374579733` under topic **mating rituals**; speaker Mama Gorsak (`Bng_Mama_Gorsak`). locations: `Gamorr, Mama Gorsak's House`. conditions: Journal `Bng_Wedding` Equal 30. response: “Looks like the lovely couples are sneaking back to the house right now! Young love is so precious.”.

```text
journal Bng_Wedding 40
Bng_Miiyoom_Onith->PositionCell, 3587.223145, 3909.435547, 11940.339844, 0, "Gamorr, Mama Gorsak's House"
Bng_Vishki_Onith->PositionCell, 3339.376465, 3857.503662, 11940.339844, 0, "Gamorr, Mama Gorsak's House"
```

### Stage 50

It looks like M'iiyoom and Vishki have eaten their grooms.

**How this stage is set:**
- Dialogue INFO `4111221321622025158` under topic **Greeting 5**; speaker M'iiyoom Onith (`Bng_Miiyoom_Onith`). locations: `Tatooine, Sandriver`. conditions: Journal `Bng_Wedding` Equal 40. response: “That. Was delicious. *Cooo*”.

```text
journal Bng_Wedding 50
Bng_Mama_Gorsak-> PositionCell, 4473.602051, 3782.528564, 11940.339844, 0, "Gamorr, Mama Gorsak's House"
Bng_Pylokam->PositionCell, 5253.693359, 6618.549805, 9855.075195, 0, "Tatooine, Rodian District"
```

### Stage 60 — Finished

M'iiyoom and Vishki have completed their Pursuits, and Mama Gorsak is getting her grandkids, so it looks like everything worked out.

**How this stage is set:**
- Dialogue INFO `3081830896220513418` under topic **Greeting 5**; speaker Mama Gorsak (`Bng_Mama_Gorsak`). locations: `Gamorr, Mama Gorsak's House`. conditions: Journal `Bng_Wedding` Equal 50. response: “My Boys! Damn! Damn Good job boys, looks like I'm going to be a grandmother!”.

```text
Journal "Bng_Wedding" 60
```

### Related records and locations

**Dialogue speakers:**
- Mama Gorsak (`Bng_Mama_Gorsak`) — `Gamorr, Mama Gorsak's House`
- M'iiyoom Onith (`Bng_Miiyoom_Onith`) — `Tatooine, Sandriver`

**Scripts that read or write this journal:**
- `Vowcheck` — Npc Balch (`Bng_Balch`); placed in `Gamorr, Mama Gorsak's House`; Npc Gurkhob (`Bng_Gurkhob`); placed in `Gamorr, Mama Gorsak's House`; Npc Vishki Onith (`Bng_Vishki_Onith`); placed in `Gamorr, Mama Gorsak's House`

**Cells implicated by actor/object placement or explicit travel code:**
- `Gamorr, Mama Gorsak's House`
- `Gamorr, Ucksmug`
- `Tatooine, Sandriver`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `10` is obtainable.
- [ ] Reach index `10`: I met back up with M'iiyoom on Gamorr and she asked me to officiate her wedding! they're all waiting for me at…
- [ ] Reach index `20`: I have heard everyone's vows.
- [ ] Reach index `30`: The two couples have been married! I should stick around and chat with the guests for a while.
- [ ] Reach index `40`: The two newlywed couples have snuck back to Mama Gorsak's House.
- [ ] Reach index `50`: It looks like M'iiyoom and Vishki have eaten their grooms.
- [ ] Reach index `60` (`Finished`): M'iiyoom and Vishki have completed their Pursuits, and Mama Gorsak is getting her grandkids, so it looks like …
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `Bng_Wedding`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
