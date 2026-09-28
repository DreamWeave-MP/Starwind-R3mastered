---
title: "Gungan Society"
description: "Walkthrough and QA reference for Gungan Society (Nab_GungJourn)."
weight: 8
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "Nab_GungJourn"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `Nab_GungJourn` |
| **Category** | Naboo |
| **Journal entries** | 4 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Boss Kass** in **Naboo, Palace** and ask about **citizen**. |
| **Key locations** | Naboo, Palace |
| **Key characters** | Boss Kass |

## Walkthrough

### 1. Speak with Boss Kass in Naboo, Palace and ask about citizen

Speak with **Boss Kass** in **Naboo, Palace** and ask about **citizen**.

> **Expected journal update — index 5:** I have spoken to Boss Kass who says in order to be accepted into their society I must first partake in it. I should prove that I have become an active member of his city by bringing to him 250 Chagga Pearls.

### 2. Speak with Boss Kass in Naboo, Palace and ask about citizen

Speak with **Boss Kass** in **Naboo, Palace** and ask about **citizen**.

> **Expected journal update — index 10:** I have given 250 Chagga Pearls to Boss Kass who has granted me citizenship to Otoh Savgah. He has given me a key to an available home in the city.

**Known item transfer:** 1 × **Gungan Home Key** (`Nab_GungHomeKey`).

### 3. Reach journal stage 15 — Finished

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 15:** Boss Kass does not have the time to give citizens orders, he has directed me to the temple priest to further help Otoh Savgah.

**Outcome:** this journal entry is marked as a finished branch.

> **Playtest flag:** 1 journal stage on this page lack a literal setter in the current static scan.

## Endings & branches

The journal has one explicit finished state at **index 15**:

> Boss Kass does not have the time to give citizens orders, he has directed me to the temple priest to further help Otoh Savgah.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 1 × **Gungan Home Key** (`Nab_GungHomeKey`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Boss Kass** (`Nab_BossKass`) — `Naboo, Palace`

**Locations implicated by actor/object placement or explicit travel:**
- **Naboo, Palace**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `Nab_GungJourn`
**Generated category:** Naboo
**Journal entries:** 4

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | I have spoken to Boss Kass who says in order to be accepted into their society I must first partake in it. I should prove that I have become an active member of his city by bringing to him 250 Chagga Pearls. | 1 |
| 10 | — | I have given 250 Chagga Pearls to Boss Kass who has granted me citizenship to Otoh Savgah. He has given me a key to an available home in the city. | 1 |
| 15 | Finished | Boss Kass does not have the time to give citizens orders, he has directed me to the temple priest to further help Otoh Savgah. | 0 |

### Record-level trigger map

### Stage 5

I have spoken to Boss Kass who says in order to be accepted into their society I must first partake in it. I should prove that I have become an active member of his city by bringing to him 250 Chagga Pearls.

**How this stage is set:**
- Dialogue INFO `153229541876814691` under topic **citizen**; speaker Boss Kass (`Nab_BossKass`). locations: `Naboo, Palace`. conditions: Journal `Nab_GungJourn` Equal 0. response: “You'sa not a citzien of Otoh Savgha. See to the city, help where help is needed, trade where trade can be done, fight where fighting is asked. You'sa do this, bring me 250 Chagga Pearls and prove that you'sa worthy of joining Otoh Savgah, and meesa make you citizen.”.

```text
Journal Nab_GungJourn 5
```

### Stage 10

I have given 250 Chagga Pearls to Boss Kass who has granted me citizenship to Otoh Savgah. He has given me a key to an available home in the city.

**How this stage is set:**
- Dialogue INFO `62386833166697885` under topic **citizen**; speaker Boss Kass (`Nab_BossKass`). locations: `Naboo, Palace`. conditions: Journal `Nab_GungJourn` Equal 5; Item/ItemType `Nab_ChaggaPearl` GreaterEqual 250. response: “You'sa have been busy! You'sa active member of Otoh Savgha. Meesa will take these Chagga Pearls for the city and meesa hereby make you citizen of Otoh Savgha. Welcome, and take this key to your new home.”.

```text
Journal Nab_GungJourn 10
player->removeitem Nab_ChaggaPearl 250
player->additem Nab_GungHomeKey 1
```

### Stage 15 — Finished

Boss Kass does not have the time to give citizens orders, he has directed me to the temple priest to further help Otoh Savgah.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Related records and locations

**Dialogue speakers:**
- Boss Kass (`Nab_BossKass`) — `Naboo, Palace`

**Items referenced by related script/result code:**
- Chagga Pearl (`Nab_ChaggaPearl`)
- Gungan Home Key (`Nab_GungHomeKey`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Naboo, Palace`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: I have spoken to Boss Kass who says in order to be accepted into their society I must first partake in it. I s…
- [ ] Reach index `10`: I have given 250 Chagga Pearls to Boss Kass who has granted me citizenship to Otoh Savgah. He has given me a k…
- [ ] Reach index `15` (`Finished`): Boss Kass does not have the time to give citizens orders, he has directed me to the temple priest to further h…
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `Nab_GungJourn`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
