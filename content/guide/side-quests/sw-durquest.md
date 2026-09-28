---
title: "Durelium Armor"
description: "Walkthrough and QA reference for Durelium Armor (SW_DurQuest)."
weight: 36
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_DurQuest"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_DurQuest` |
| **Category** | Side Quests |
| **Journal entries** | 3 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Greatness Seven** in **Nar Shaddaa, Modification Shop** and ask about **durelium armor**. |
| **Key locations** | Nar Shaddaa, Modification Shop |
| **Key characters** | Greatness Seven |

## Walkthrough

### 1. Speak with Greatness Seven in Nar Shaddaa, Modification Shop and ask about durelium armor

Speak with **Greatness Seven** in **Nar Shaddaa, Modification Shop** and ask about **durelium armor**.

> **Expected journal update — index 1:** Greatness Seven, a Droid modifications expert has told me that he will craft me a powerful set of Durelium armor if I bring him 20 pieces of Durelium and 8,000 credits.

### 2. Speak with Greatness Seven in Nar Shaddaa, Modification Shop and ask about durelium armor — Finished

Speak with **Greatness Seven** in **Nar Shaddaa, Modification Shop** and ask about **durelium armor**.

> **Expected journal update — index 5:** I have traded 20 Durelium and 8,000 credits for the Durelium Armor. It's definitely heavy.

**Known item transfer:** 1 × **Right Durelium Bracer** (`SW_DureliumRBrace`), 1 × **Right Durelium Pauldron** (`SW_DureliumRPaul`).

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 5**:

> I have traded 20 Durelium and 8,000 credits for the Durelium Armor. It's definitely heavy.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 1 × **Right Durelium Bracer** (`SW_DureliumRBrace`)
- 1 × **Right Durelium Pauldron** (`SW_DureliumRPaul`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Greatness Seven** (`SW_Greatness7`) — `Nar Shaddaa, Modification Shop`

**Locations implicated by actor/object placement or explicit travel:**
- **Nar Shaddaa, Modification Shop**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_DurQuest`
**Generated category:** Side Quests
**Journal entries:** 3

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 1 | — | Greatness Seven, a Droid modifications expert has told me that he will craft me a powerful set of Durelium armor if I bring him 20 pieces of Durelium and 8,000 credits. | 1 |
| 5 | Finished | I have traded 20 Durelium and 8,000 credits for the Durelium Armor. It's definitely heavy. | 1 |

### Record-level trigger map

### Stage 1

Greatness Seven, a Droid modifications expert has told me that he will craft me a powerful set of Durelium armor if I bring him 20 pieces of Durelium and 8,000 credits.

**How this stage is set:**
- Dialogue INFO `6494273713248425264` under topic **durelium armor**; speaker Greatness Seven (`SW_Greatness7`). locations: `Nar Shaddaa, Modification Shop`. conditions: Journal `SW_DurQuest` Equal 0. response: “Ah yes the new mineral everybody keeps talking about. I have made the plans for a very powerful armor powered by this mineral. If your interested bring me 20 pieces of Durelium along with 8,000 credits and I will craft it for you.”.

```text
Journal SW_DurQuest 1
StopSound "G7Dur1"
StopSound "G7Dur2"
```

### Stage 5 — Finished

I have traded 20 Durelium and 8,000 credits for the Durelium Armor. It's definitely heavy.

**How this stage is set:**
- Dialogue INFO `2055615940424622811` under topic **durelium armor**; speaker Greatness Seven (`SW_Greatness7`). locations: `Nar Shaddaa, Modification Shop`. conditions: Item/ItemType `SW_DurItem` GreaterEqual 20; Item/ItemType `Gold_001` GreaterEqual 8000; Journal `SW_DurQuest` Equal 1. response: “Splendid, I'll take your Durelium and your credits and here is a full suit of Durelium Armor. Pleasure doing business with you.”.

```text
player->additem "SW_DureliumRBrace", 1
player->additem "SW_DureliumRPaul", 1
Journal SW_DurQuest 5
StopSound "G7Dur1"
StopSound "G7Dur2"
```

### Related records and locations

**Dialogue speakers:**
- Greatness Seven (`SW_Greatness7`) — `Nar Shaddaa, Modification Shop`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)
- Durelium Boots (`SW_DureliumBoots`)
- Durelium Cuirass (`SW_DureliumCuirass`)
- Durelium Greaves (`SW_DureliumGreaves`)
- Durelium Helm (`SW_DureliumHelm`)
- Left Durelium Bracer (`SW_DureliumLBrace`)
- Left Durelium Pauldron (`SW_DureliumLPaul`)
- Right Durelium Bracer (`SW_DureliumRBrace`)
- Right Durelium Pauldron (`SW_DureliumRPaul`)
- Durelium (`SW_DurItem`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Nar Shaddaa, Modification Shop`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `1` is obtainable.
- [ ] Reach index `1`: Greatness Seven, a Droid modifications expert has told me that he will craft me a powerful set of Durelium arm…
- [ ] Reach index `5` (`Finished`): I have traded 20 Durelium and 8,000 credits for the Durelium Armor. It's definitely heavy.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_DurQuest`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
