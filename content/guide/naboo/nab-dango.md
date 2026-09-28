---
title: "Forever Growing"
description: "Walkthrough and QA reference for Forever Growing (Nab_Dango)."
weight: 5
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "Nab_Dango"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `Nab_Dango` |
| **Category** | Naboo |
| **Journal entries** | 5 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Dago** in **Naboo, Bingwie Village** and ask about **size**. |
| **Key locations** | Naboo, Bingwie Village |
| **Key characters** | Dago, Vago |

## Walkthrough

### 1. Speak with Dago in Naboo, Bingwie Village and ask about size

Speak with **Dago** in **Naboo, Bingwie Village** and ask about **size**.

> **Expected journal update — index 5:** Dago says that Bingwies grow indefinitely unless they eat Slug Salt to keep their size in check. He's alread almost twice the size of the other Bingwies though he won't eat Slug Salt because he doesn't like the taste. He wants me to check in with Vago who might have a solution.

### 2. Speak with Vago in Naboo, Bingwie Village and ask about size

Speak with **Vago** in **Naboo, Bingwie Village** and ask about **size**.

> **Expected journal update — index 10:** Vago says that he might be able to mix Slug Salt with a Glowbulb, Lavereach Root, and a Blueflower Petal to get Dago to eat it.

### 3. Speak with Vago in Naboo, Bingwie Village and ask about size

Speak with **Vago** in **Naboo, Bingwie Village** and ask about **size**.

> **Expected journal update — index 15:** Vago was able to make Tasty Slug Salt and I should see if Dago is able to eat it.

**Known item transfer:** 1 × **Tasty Slug Salt** (`Nab_SlugSaltTaste`).

### 4. Speak with Dago in Naboo, Bingwie Village and ask about size — Finished

Speak with **Dago** in **Naboo, Bingwie Village** and ask about **size**.

> **Expected journal update — index 20:** Dago ate the Tasty Slug Salt and shrank back down to the same size as the other Bingwies. I should see if any of the others need any help.

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 20**:

> Dago ate the Tasty Slug Salt and shrank back down to the same size as the other Bingwies. I should see if any of the others need any help.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 1 × **Tasty Slug Salt** (`Nab_SlugSaltTaste`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Dago** (`SW_Dago`) — `Naboo, Bingwie Village`
- **Vago** (`SW_Vago`) — `Naboo, Bingwie Village`

**Locations implicated by actor/object placement or explicit travel:**
- **Naboo, Bingwie Village**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `Nab_Dango`
**Generated category:** Naboo
**Journal entries:** 5

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | Dago says that Bingwies grow indefinitely unless they eat Slug Salt to keep their size in check. He's alread almost twice the size of the other Bingwies though he won't eat Slug Salt because he doesn't like the taste. He wants me to check in with Vago who might have a solution. | 1 |
| 10 | — | Vago says that he might be able to mix Slug Salt with a Glowbulb, Lavereach Root, and a Blueflower Petal to get Dago to eat it. | 1 |
| 15 | — | Vago was able to make Tasty Slug Salt and I should see if Dago is able to eat it. | 1 |
| 20 | Finished | Dago ate the Tasty Slug Salt and shrank back down to the same size as the other Bingwies. I should see if any of the others need any help. | 1 |

### Record-level trigger map

### Stage 5

Dago says that Bingwies grow indefinitely unless they eat Slug Salt to keep their size in check. He's alread almost twice the size of the other Bingwies though he won't eat Slug Salt because he doesn't like the taste. He wants me to check in with Vago who might have a solution.

**How this stage is set:**
- Dialogue INFO `2654975301280621686` under topic **size**; speaker Dago (`SW_Dago`). locations: `Naboo, Bingwie Village`. conditions: Journal `Nab_Dango` Equal 0. response: “Bingwies pick fun at Dago because Dago is too big. Bingwies stay little by eating Slug Salt. But Dago does not like Slug Salt. One day Dago will be as big as village, and then no one will ever want to play with Dago. Maybe Vago can help, he makes many tasty treats.”.

```text
Journal Nab_Dango 5
```

### Stage 10

Vago says that he might be able to mix Slug Salt with a Glowbulb, Lavereach Root, and a Blueflower Petal to get Dago to eat it.

**How this stage is set:**
- Dialogue INFO `1290303582296530340` under topic **size**; speaker Vago (`SW_Vago`). locations: `Naboo, Bingwie Village`. conditions: Journal `Nab_Dango` Equal 5. response: “Vago can make any treat tasty, although most Bingwies already love Slug Salt. Maybe you can help me, I might be able to make Dago some Tasty Slug Salt with one Slug Salt, one Glowbulb, one Lavereach Root, and a Blueflower Petal.”.

```text
Journal Nab_Dango 10
```

### Stage 15

Vago was able to make Tasty Slug Salt and I should see if Dago is able to eat it.

**How this stage is set:**
- Dialogue INFO `3000525475149018398` under topic **size**; speaker Vago (`SW_Vago`). locations: `Naboo, Bingwie Village`. conditions: Journal `Nab_Dango` Equal 10; Item/ItemType `Nab_SlugSalt` GreaterEqual 1; Item/ItemType `Nab_LavereachRoot` GreaterEqual 1; Item/ItemType `Nab_BlueflowerI` GreaterEqual 1; Item/ItemType `Nab_Glowbulbbulb` GreaterEqual 1. response: “Yes, with this Vago can make a tasty treat for Dago. Here, take this and bring it to Dago to see if he will eat it.”.

```text
player->removeitem Nab_Glowbulbbulb 1
player->additem Nab_SlugSaltTaste 1
Journal Nab_Dango 15
```

### Stage 20 — Finished

Dago ate the Tasty Slug Salt and shrank back down to the same size as the other Bingwies. I should see if any of the others need any help.

**How this stage is set:**
- Dialogue INFO `25440178829635744` under topic **size**; speaker Dago (`SW_Dago`). locations: `Naboo, Bingwie Village`. conditions: Journal `Nab_Dango` Equal 15; Item/ItemType `Nab_SlugSaltTaste` GreaterEqual 1. response: “Mmmm! This is yummy! Oh, do you see? I'm shrinking! Thank you stranger!”.

```text
SW_Dago->SetScale 0.5
Journal Nab_Dango 20
```

### Related records and locations

**Dialogue speakers:**
- Dago (`SW_Dago`) — `Naboo, Bingwie Village`
- Vago (`SW_Vago`) — `Naboo, Bingwie Village`

**Scripts that read or write this journal:**
- `Nab_BagoScript` — Creature Bago (`SW_Bago`); placed in `Naboo, Bingwie Village`

**Items referenced by related script/result code:**
- Blueflower Petal (`Nab_BlueflowerI`)
- Glowbulb (`Nab_Glowbulbbulb`)
- Lavereach Root (`Nab_LavereachRoot`)
- Slug Salt (`Nab_SlugSalt`)
- Tasty Slug Salt (`Nab_SlugSaltTaste`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Naboo, Bingwie Village`

<details><summary>Journal-state readers (1 code sites)</summary>

- Script `Nab_BagoScript`. attached to Creature Bago (`SW_Bago`); placed in `Naboo, Bingwie Village`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: Dago says that Bingwies grow indefinitely unless they eat Slug Salt to keep their size in check. He's alread a…
- [ ] Reach index `10`: Vago says that he might be able to mix Slug Salt with a Glowbulb, Lavereach Root, and a Blueflower Petal to ge…
- [ ] Reach index `15`: Vago was able to make Tasty Slug Salt and I should see if Dago is able to eat it.
- [ ] Reach index `20` (`Finished`): Dago ate the Tasty Slug Salt and shrank back down to the same size as the other Bingwies. I should see if any …
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `Nab_Dango`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
