---
title: "Pazaak Collect (internal journal)"
description: "Walkthrough and QA reference for Pazaak Collect (internal journal) (SW_PazaakCollect)."
weight: 11
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_PazaakCollect"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_PazaakCollect` |
| **Category** | Systems & Internal Journals |
| **Journal entries** | 3 |
| **Completion branches** | 2 |
| **Starts by** | Record route requires playtest verification. |
| **Key locations** | Nar Shaddaa, Cantina |
| **Key characters** | Zin Grahl |

## Walkthrough

### 1. Reach journal stage 0 — Finished

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 0:** Pazaak Addiction

**Outcome:** this journal entry is marked as a finished branch.

### 2. Speak with Zin Grahl in Nar Shaddaa, Cantina

Speak with **Zin Grahl** in **Nar Shaddaa, Cantina**.

> **Expected journal update — index 5:** There is an Arkanian in the Nar Shaddaa Cantina that is addicted to pazaak. He needs a 1, 5, 7, -1, and a -5 out of a pazaak deck and will pay 80 credits for them.

### 3. Speak with Zin Grahl in Nar Shaddaa, Cantina and ask about pazaak — Finished

Speak with **Zin Grahl** in **Nar Shaddaa, Cantina** and ask about **pazaak**.

> **Expected journal update — index 10:** I have sold the pazaak cards to Zin Grahl and have been paid the 80 credits for them.

**Known item transfer:** 80 × **Credits** (`Gold_001`).

**Outcome:** this journal entry is marked as a finished branch.

{% callout(kind="warning", title="Playtest flag") %}
1 journal stage on this page lack a literal setter in the current static scan.
{% end %}

## Endings & branches

The journal has **2 explicit finished entries**. Treat them as branch coverage targets during playtesting:

- **Index 0:** Pazaak Addiction
- **Index 10:** I have sold the pazaak cards to Zin Grahl and have been paid the 80 credits for them.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 80 × **Credits** (`Gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Zin Grahl** (`SW_PazaakAddict`) — `Nar Shaddaa, Cantina`

**Locations implicated by actor/object placement or explicit travel:**
- **Nar Shaddaa, Cantina**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_PazaakCollect`
**Generated category:** Systems & Internal Journals
**Journal entries:** 3

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 0 | Finished | Pazaak Addiction | 0 |
| 5 | — | There is an Arkanian in the Nar Shaddaa Cantina that is addicted to pazaak. He needs a 1, 5, 7, -1, and a -5 out of a pazaak deck and will pay 80 credits for them. | 1 |
| 10 | Finished | I have sold the pazaak cards to Zin Grahl and have been paid the 80 credits for them. | 1 |

### Record-level trigger map

### Stage 0 — Finished

Pazaak Addiction

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 5

There is an Arkanian in the Nar Shaddaa Cantina that is addicted to pazaak. He needs a 1, 5, 7, -1, and a -5 out of a pazaak deck and will pay 80 credits for them.

**How this stage is set:**
- Dialogue INFO `43330499444016689` under topic **Greeting 7**; speaker Zin Grahl (`SW_PazaakAddict`). locations: `Nar Shaddaa, Cantina`. conditions: Journal `SW_PazaakCollect` Equal 0. response: “I love Pazaak, I can't get enough of Pazaak. As a matter of fact, I want to play Pazaak right now, but I lost my deck. I've gotten some of the cards but I still need a 1, 5, 7, -1, and a -5. I'll give you 80 credits if you can gather them all up for me.”.

```text
Journal SW_PazaakCollect 5
```

### Stage 10 — Finished

I have sold the pazaak cards to Zin Grahl and have been paid the 80 credits for them.

**How this stage is set:**
- Dialogue INFO `2990823574201747025` under topic **pazaak**; speaker Zin Grahl (`SW_PazaakAddict`). locations: `Nar Shaddaa, Cantina`. conditions: Function/Choice Equal 1; Item/ItemType `SW_ItemPaz1` GreaterEqual 1; Item/ItemType `SW_ItemPaz5` GreaterEqual 1; Item/ItemType `SW_ItemPaz7` GreaterEqual 1; Item/ItemType `SW_ItemPazNeg1` GreaterEqual 1; Item/ItemType `SW_ItemPazNeg5` GreaterEqual 1. response: “That's a shame, it's a great game!”.

```text
player->removeitem, SW_ItemPazNeg5, 1
player->additem, Gold_001, 80
Journal SW_PazaakCollect 10
```

### Related records and locations

**Dialogue speakers:**
- Zin Grahl (`SW_PazaakAddict`) — `Nar Shaddaa, Cantina`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)
- Pazaak +1 (`SW_ItemPaz1`)
- Pazaak +5 (`SW_ItemPaz5`)
- Pazaak +7 (`SW_ItemPaz7`)
- Pazaak -1 (`SW_ItemPazNeg1`)
- Pazaak -5 (`SW_ItemPazNeg5`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Nar Shaddaa, Cantina`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `0` is obtainable.
- [ ] Reach index `0` (`Finished`): Pazaak Addiction
- [ ] Reach index `5`: There is an Arkanian in the Nar Shaddaa Cantina that is addicted to pazaak. He needs a 1, 5, 7, -1, and a -5 o…
- [ ] Reach index `10` (`Finished`): I have sold the pazaak cards to Zin Grahl and have been paid the 80 credits for them.
- [ ] Branch coverage: this journal has **2 different `Finished` entries**; test each reachable completion branch.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_PazaakCollect`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
