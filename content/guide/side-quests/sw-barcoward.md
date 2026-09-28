---
title: "Cowardly Bartender"
description: "Walkthrough and QA reference for Cowardly Bartender (SW_BarCoward)."
weight: 28
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_BarCoward"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_BarCoward` |
| **Category** | Side Quests |
| **Journal entries** | 4 |
| **Completion branches** | No explicit Finished marker |
| **Starts by** | Record route requires playtest verification. |
| **Key locations** | Nar Shaddaa, Lower City |
| **Key characters** | Kwaio Jaim |

## Walkthrough

### 1. Reach journal stage 5

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 5:** Veeko Bin is a bartender in the bazaar who has left due to his shipments being intercepted by gangsters. Badhiya the Hutt has canceled the shipments but the gangsters haven't caught on yet. Kwaio Jaim wants me to head down market alley and confront the market

### 2. Reach journal stage 10

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 10:** The gangsters raiding Veeko Bin's shipments are dead, I should return to Kwaio Jaim in the bazaar.

### 3. Speak with Kwaio Jaim in Nar Shaddaa, Lower City and ask about bartending

Speak with **Kwaio Jaim** in **Nar Shaddaa, Lower City** and ask about **bartending**.

> **Expected journal update — index 15:** Kwaio Jaim gave me 50 credits for dispatching those low lifes, and Veeko Bin should be returning to the bazaar now. That should bring some more life to the place.

**Known item transfer:** 50 × **Credits** (`gold_001`).

{% callout(kind="warning", title="Playtest flag") %}
2 journal stages on this page lack a literal setter in the current static scan.
{% end %}

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 50 × **Credits** (`gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Kwaio Jaim** (`SW_NarGuardBountyHunteP`) — `Nar Shaddaa, Lower City`

**Locations implicated by actor/object placement or explicit travel:**
- **Nar Shaddaa, Lower City**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_BarCoward`
**Generated category:** Side Quests
**Journal entries:** 4

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | Veeko Bin is a bartender in the bazaar who has left due to his shipments being intercepted by gangsters. Badhiya the Hutt has canceled the shipments but the gangsters haven't caught on yet. Kwaio Jaim wants me to head down market alley and confront the market | 0 |
| 10 | — | The gangsters raiding Veeko Bin's shipments are dead, I should return to Kwaio Jaim in the bazaar. | 0 |
| 15 | — | Kwaio Jaim gave me 50 credits for dispatching those low lifes, and Veeko Bin should be returning to the bazaar now. That should bring some more life to the place. | 1 |

### Record-level trigger map

### Stage 5

Veeko Bin is a bartender in the bazaar who has left due to his shipments being intercepted by gangsters. Badhiya the Hutt has canceled the shipments but the gangsters haven't caught on yet. Kwaio Jaim wants me to head down market alley and confront the market

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 10

The gangsters raiding Veeko Bin's shipments are dead, I should return to Kwaio Jaim in the bazaar.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 15

Kwaio Jaim gave me 50 credits for dispatching those low lifes, and Veeko Bin should be returning to the bazaar now. That should bring some more life to the place.

**How this stage is set:**
- Dialogue INFO `16992133471950829176` under topic **bartending**; speaker Kwaio Jaim (`SW_NarGuardBountyHunteP`). locations: `Nar Shaddaa, Lower City`. conditions: Journal `SW_BarCoward` Equal 10. response: “You killed them, huh? You would make a good bounty hunter. Here, take these credits, what you did should bring some life back to this bazaar.”.

```text
player->additem, gold_001, 50
Journal SW_BarCoward 15
```

### Related records and locations

**Dialogue speakers:**
- Kwaio Jaim (`SW_NarGuardBountyHunteP`) — `Nar Shaddaa, Lower City`

**Scripts that read or write this journal:**
- `SW_BarRaid` — Npc Gangster (`SW_NarGangsterBarC1`); placed in `Nar Shaddaa, Lower City`; Npc Gangster (`SW_NarGangsterBarC2`); placed in `Nar Shaddaa, Lower City`
- `SW_BarReturn` — Npc Veeko Bin (`SW_BartenderNar2`); placed in `Nar Shaddaa, Lower City`; Npc Rodian Patron (`SW_NarBarMiss1`); placed in `Nar Shaddaa, Lower City`; Npc Arkanian Patron (`SW_NarBarMiss2`); placed in `Nar Shaddaa, Lower City`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Nar Shaddaa, Lower City`

<details><summary>Journal-state readers (2 code sites)</summary>

- Script `SW_BarRaid`. attached to Npc Gangster (`SW_NarGangsterBarC1`); placed in `Nar Shaddaa, Lower City`; Npc Gangster (`SW_NarGangsterBarC2`); placed in `Nar Shaddaa, Lower City`.
- Script `SW_BarReturn`. attached to Npc Veeko Bin (`SW_BartenderNar2`); placed in `Nar Shaddaa, Lower City`; Npc Rodian Patron (`SW_NarBarMiss1`); placed in `Nar Shaddaa, Lower City`; Npc Arkanian Patron (`SW_NarBarMiss2`); placed in `Nar Shaddaa, Lower City`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: Veeko Bin is a bartender in the bazaar who has left due to his shipments being intercepted by gangsters. Badhi…
- [ ] Reach index `10`: The gangsters raiding Veeko Bin's shipments are dead, I should return to Kwaio Jaim in the bazaar.
- [ ] Reach index `15`: Kwaio Jaim gave me 50 credits for dispatching those low lifes, and Veeko Bin should be returning to the bazaar…
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_BarCoward`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
