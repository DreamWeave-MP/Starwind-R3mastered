---
title: "The Poison Tree"
description: "Walkthrough and QA reference for The Poison Tree (SW_PoisonQuest)."
weight: 100
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_PoisonQuest"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_PoisonQuest` |
| **Category** | Side Quests |
| **Journal entries** | 4 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Ithorian Botanist** in **Dantooine, Sea** and ask about **science**. |
| **Key locations** | Dantooine, Sea |
| **Key characters** | Ithorian Botanist |

## Walkthrough

### 1. Speak with Ithorian Botanist in Dantooine, Sea and ask about science

Speak with **Ithorian Botanist** in **Dantooine, Sea** and ask about **science**.

> **Expected journal update — index 5:** I met a botanist Southwest of Ballast who is studying a poisonous blba tree. He says he needs sap samples but the bark, though gelatinous and malleable is extremely poisonous and needs someone to reach into it and get the sap for him. He says he'll reward me if I can get the sap for him.

### 2. Reach Dantooine, Sea and allow the scripted event to complete

Reach **Dantooine, Sea** and allow the scripted event to complete.

> **Expected journal update — index 7:** I have retrieved the sap from the poisonous blba tree.

**Known item transfer:** 1 × **Sap Sample** (`SW_SapSample`).

### 3. Speak with Ithorian Botanist in Dantooine, Sea and ask about science — Finished

Speak with **Ithorian Botanist** in **Dantooine, Sea** and ask about **science**.

> **Expected journal update — index 10:** The Ithorian botanist has given me a serum made from some of the sap that he believes will make me have a slight immunity to poison for bringing him the sap sample.

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 10**:

> The Ithorian botanist has given me a serum made from some of the sap that he believes will make me have a slight immunity to poison for bringing him the sap sample.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 1 × **Sap Sample** (`SW_SapSample`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Ithorian Botanist** (`SW_IthorianDantStudy`) — `Dantooine, Sea`

**Locations implicated by actor/object placement or explicit travel:**
- **Dantooine, Sea**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_PoisonQuest`
**Generated category:** Side Quests
**Journal entries:** 4

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | I met a botanist Southwest of Ballast who is studying a poisonous blba tree. He says he needs sap samples but the bark, though gelatinous and malleable is extremely poisonous and needs someone to reach into it and get the sap for him. He says he'll reward me if I can get the sap for him. | 1 |
| 7 | — | I have retrieved the sap from the poisonous blba tree. | 1 |
| 10 | Finished | The Ithorian botanist has given me a serum made from some of the sap that he believes will make me have a slight immunity to poison for bringing him the sap sample. | 1 |

### Record-level trigger map

### Stage 5

I met a botanist Southwest of Ballast who is studying a poisonous blba tree. He says he needs sap samples but the bark, though gelatinous and malleable is extremely poisonous and needs someone to reach into it and get the sap for him. He says he'll reward me if I can get the sap for him.

**How this stage is set:**
- Dialogue INFO `207288840252993511` under topic **science**; speaker Ithorian Botanist (`SW_IthorianDantStudy`). locations: `Dantooine, Sea`. conditions: Journal `SW_PoisonQuest` Equal 0. response: “Yes there is an enormous black blba tree that I believe has rare properties that can be used in the field of medicine. I need a sap sample from it but the bark, though gelatinous and malleable is extremely poisonous. If you could retrieve the sap for me I could create you a reward from some of the sap.”.

```text
Journal SW_PoisonQuest 5
```

### Stage 7

I have retrieved the sap from the poisonous blba tree.

**How this stage is set:**
- Script `SW_PoisonTree`. attached to Activator Black Blba Tree (`SW_DantTreePois`); placed in `Dantooine, Sea`.

```text
MessageBox "You reach into the tree and grab the sap, ripping your arm out the poison burns your arm badly."
        player->additem, "SW_SapSample", 1
        Journal SW_PoisonQuest 7
        Cast, "poisonweak", Player
        Set PLevel to 10
```

### Stage 10 — Finished

The Ithorian botanist has given me a serum made from some of the sap that he believes will make me have a slight immunity to poison for bringing him the sap sample.

**How this stage is set:**
- Dialogue INFO `275066498515596` under topic **science**; speaker Ithorian Botanist (`SW_IthorianDantStudy`). locations: `Dantooine, Sea`. conditions: Journal `SW_PoisonQuest` Equal 7; Item/ItemType `SW_SapSample` GreaterEqual 1. response: “The sap! You are an impressive stranger. Here, let me just take some of the sap and mix it with.. this... yes... I'm going to stick you with this needle, just hold still one moment and I believe you'll be more than satisfied with the results. Yes.. there, if my calculations are correct then you should have a higher immunity to poison now. You've done a great deed in the name of science and medicine today!”.

```text
Journal SW_PoisonQuest 10
player->removeitem, "SW_SapSample", 1
player->AddSpell "SW_SapReward"
```

### Related records and locations

**Dialogue speakers:**
- Ithorian Botanist (`SW_IthorianDantStudy`) — `Dantooine, Sea`

**Scripts that read or write this journal:**
- `SW_PoisonTree` — Activator Black Blba Tree (`SW_DantTreePois`); placed in `Dantooine, Sea`

**Items referenced by related script/result code:**
- Sap Sample (`SW_SapSample`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Dantooine, Sea`

<details><summary>Journal-state readers (1 code sites)</summary>

- Script `SW_PoisonTree`. attached to Activator Black Blba Tree (`SW_DantTreePois`); placed in `Dantooine, Sea`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: I met a botanist Southwest of Ballast who is studying a poisonous blba tree. He says he needs sap samples but …
- [ ] Reach index `7`: I have retrieved the sap from the poisonous blba tree.
- [ ] Reach index `10` (`Finished`): The Ithorian botanist has given me a serum made from some of the sap that he believes will make me have a slig…
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_PoisonQuest`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
