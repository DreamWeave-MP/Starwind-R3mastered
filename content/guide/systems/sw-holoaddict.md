---
title: "Holo Addict (internal journal)"
description: "Walkthrough and QA reference for Holo Addict (internal journal) (SW_HoloAddict)."
weight: 7
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_HoloAddict"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_HoloAddict` |
| **Category** | Systems & Internal Journals |
| **Journal entries** | 3 |
| **Completion branches** | 1 |
| **Starts by** | Record route requires playtest verification. |
| **Key locations** | Manaan, Cantina |
| **Key characters** | Republic Soldier |

## Walkthrough

### 1. Reach journal stage 0 — Finished

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 0:** Holo Addiction

**Outcome:** this journal entry is marked as a finished branch.

### 2. Speak with Republic Soldier in Manaan, Cantina and ask about booster pack

Speak with **Republic Soldier** in **Manaan, Cantina** and ask about **booster pack**.

> **Expected journal update — index 5:** There is a Republic soldier in the Manaan Cantina addicted to war dejarik. He wants to buy 200 holo coins for 500 credits. I should speak to him if I'm looking to sell them.

### 3. Speak with Republic Soldier in Manaan, Cantina and ask about booster pack

Speak with **Republic Soldier** in **Manaan, Cantina** and ask about **booster pack**.

> **Expected journal update — index 10:** I've sold the holo coins and have made a decent paycheck of 500 credits. Who would've known you could make money playing a game!

**Known item transfer:** 500 × **Credits** (`Gold_001`).

> **Playtest flag:** 1 journal stage on this page lack a literal setter in the current static scan.

## Endings & branches

The journal has one explicit finished state at **index 0**:

> Holo Addiction

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 500 × **Credits** (`Gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Republic Soldier** (`SW_RepublicSoldierHoloC`) — `Manaan, Cantina`

**Locations implicated by actor/object placement or explicit travel:**
- **Manaan, Cantina**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_HoloAddict`
**Generated category:** Systems & Internal Journals
**Journal entries:** 3

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 0 | Finished | Holo Addiction | 0 |
| 5 | — | There is a Republic soldier in the Manaan Cantina addicted to war dejarik. He wants to buy 200 holo coins for 500 credits. I should speak to him if I'm looking to sell them. | 1 |
| 10 | — | I've sold the holo coins and have made a decent paycheck of 500 credits. Who would've known you could make money playing a game! | 1 |

### Record-level trigger map

### Stage 0 — Finished

Holo Addiction

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 5

There is a Republic soldier in the Manaan Cantina addicted to war dejarik. He wants to buy 200 holo coins for 500 credits. I should speak to him if I'm looking to sell them.

**How this stage is set:**
- Dialogue INFO `27999213771500725132` under topic **booster pack**; speaker Republic Soldier (`SW_RepublicSoldierHoloC`). locations: `Manaan, Cantina`. conditions: Journal `SW_HoloAddict` Equal 0. response: “Yeah I need more of them, I'm trying to get the Terentatek Pack! Say, if you can make 200 holo coins I'll buy them from you for 500 credits.”.

```text
Journal SW_HoloAddict 5
```

### Stage 10

I've sold the holo coins and have made a decent paycheck of 500 credits. Who would've known you could make money playing a game!

**How this stage is set:**
- Dialogue INFO `10556316272891329087` under topic **booster pack**; speaker Republic Soldier (`SW_RepublicSoldierHoloC`). locations: `Manaan, Cantina`. conditions: Journal `SW_HoloAddict` Equal 5; Function/Choice Equal 1; Item/ItemType `SW_HoloCoin` GreaterEqual 200. response: “Deal! Here's the 500 credits, time for me to go buy more booster packs!”.

```text
player->removeitem, SW_HoloCoin, 200
player->additem, Gold_001, 500
Journal SW_HoloAddict 10
```

### Related records and locations

**Dialogue speakers:**
- Republic Soldier (`SW_RepublicSoldierHoloC`) — `Manaan, Cantina`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)
- Holo Coin (`SW_HoloCoin`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Manaan, Cantina`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `0` is obtainable.
- [ ] Reach index `0` (`Finished`): Holo Addiction
- [ ] Reach index `5`: There is a Republic soldier in the Manaan Cantina addicted to war dejarik. He wants to buy 200 holo coins for …
- [ ] Reach index `10`: I've sold the holo coins and have made a decent paycheck of 500 credits. Who would've known you could make mon…
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_HoloAddict`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
