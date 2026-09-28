---
title: "Research (internal journal)"
description: "Walkthrough and QA reference for Research (internal journal) (SW_Research)."
weight: 13
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_Research"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_Research` |
| **Category** | Systems & Internal Journals |
| **Journal entries** | 3 |
| **Completion branches** | 2 |
| **Starts by** | Record route requires playtest verification. |
| **Key locations** | Kashyyk, Boyle Research Facility, Kashyyk, Czerka Office |
| **Key characters** | Gary Sinnerman |

## Walkthrough

### 1. Reach journal stage 0

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 0:** Flora Research

### 2. Speak with Gary Sinnerman in Kashyyk, Boyle Research Facility and ask about research — Finished

Speak with **Gary Sinnerman** in **Kashyyk, Boyle Research Facility** and ask about **research**.

> **Expected journal update — index 1:** The Czerka Office in Boyle wants me to gather some flora ingredients for their research here on Kashyyyk. If I would like the job I should return with 3 Mushblooms, 3 Saava Petals, 3 Rrwii Roots, 3 Gaart Flowers, and 3 Kinnat.

**Outcome:** this journal entry is marked as a finished branch.

### 3. Speak with Gary Sinnerman in Kashyyk, Boyle Research Facility and ask about research — Finished

Speak with **Gary Sinnerman** in **Kashyyk, Boyle Research Facility** and ask about **research**.

> **Expected journal update — index 5:** The Czerka Office has paid me 1,000 credits for the ingredients from the Shadowlands.

**Outcome:** this journal entry is marked as a finished branch.

{% callout(kind="warning", title="Playtest flag") %}
1 journal stage on this page lack a literal setter in the current static scan.
{% end %}

## Endings & branches

The journal has **2 explicit finished entries**. Treat them as branch coverage targets during playtesting:

- **Index 1:** The Czerka Office in Boyle wants me to gather some flora ingredients for their research here on Kashyyyk. If I would like the job I should return with 3 Mushblooms, 3 Saava Petals, 3 Rrwii Roots, 3 Gaart Flowers, and 3 Kinnat.
- **Index 5:** The Czerka Office has paid me 1,000 credits for the ingredients from the Shadowlands.

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Gary Sinnerman** (`SW_CzerkaOfficeGuyKash`) — `Kashyyk, Boyle Research Facility`, `Kashyyk, Czerka Office`

**Locations implicated by actor/object placement or explicit travel:**
- **Kashyyk, Boyle Research Facility**
- **Kashyyk, Czerka Office**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_Research`
**Generated category:** Systems & Internal Journals
**Journal entries:** 3

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 0 | — | Flora Research | 0 |
| 1 | Finished | The Czerka Office in Boyle wants me to gather some flora ingredients for their research here on Kashyyyk. If I would like the job I should return with 3 Mushblooms, 3 Saava Petals, 3 Rrwii Roots, 3 Gaart Flowers, and 3 Kinnat. | 1 |
| 5 | Finished | The Czerka Office has paid me 1,000 credits for the ingredients from the Shadowlands. | 1 |

### Record-level trigger map

### Stage 0

Flora Research

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 1 — Finished

The Czerka Office in Boyle wants me to gather some flora ingredients for their research here on Kashyyyk. If I would like the job I should return with 3 Mushblooms, 3 Saava Petals, 3 Rrwii Roots, 3 Gaart Flowers, and 3 Kinnat.

**How this stage is set:**
- Dialogue INFO `32623206222783124524` under topic **research**; speaker Gary Sinnerman (`SW_CzerkaOfficeGuyKash`). locations: `Kashyyk, Boyle Research Facility`, `Kashyyk, Czerka Office`. conditions: Journal `SW_Research` Equal 0. response: “The Czerka Corporation is here in Boyle for research, and we are interested in the plant life you can find here. We will pay 1,000 credits for 3 Mushblooms, 3 Saava Petals, 3 Rrwii Roots, 3 Gaart Flowers, and 3 Kinnat.”.

```text
Journal "SW_Research" 1
StopSound "BoyleGreet"
StopSound "BoyleJob1"
```

### Stage 5 — Finished

The Czerka Office has paid me 1,000 credits for the ingredients from the Shadowlands.

**How this stage is set:**
- Dialogue INFO `247103169315433865` under topic **research**; speaker Gary Sinnerman (`SW_CzerkaOfficeGuyKash`). locations: `Kashyyk, Boyle Research Facility`, `Kashyyk, Czerka Office`. conditions: Journal `SW_Research` Equal 1; Item/ItemType `SW_MushbloomIng` GreaterEqual 3; Item/ItemType `SW_SaavaPetal` GreaterEqual 3; Item/ItemType `SW_RrwiiRoot` GreaterEqual 3; Item/ItemType `SW_GaartFlower` GreaterEqual 3; Item/ItemType `SW_Kinnat` GreaterEqual 3. response: “Here's 1,000 credits, I'm sure it took a while to gather all of those plants in that dangerous place.”.

```text
Journal "SW_Research" 5
player->removeitem "SW_MushbloomIng", 3
player->removeitem "SW_SaavaPetal", 3
```

### Related records and locations

**Dialogue speakers:**
- Gary Sinnerman (`SW_CzerkaOfficeGuyKash`) — `Kashyyk, Boyle Research Facility`, `Kashyyk, Czerka Office`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)
- Gaart Flower (`SW_GaartFlower`)
- Golden Kinnat (`SW_Kinnat`)
- Mushbloom (`SW_MushbloomIng`)
- Rrwii Root (`SW_RrwiiRoot`)
- Saava Petal (`SW_SaavaPetal`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Kashyyk, Boyle Research Facility`
- `Kashyyk, Czerka Office`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `0` is obtainable.
- [ ] Reach index `0`: Flora Research
- [ ] Reach index `1` (`Finished`): The Czerka Office in Boyle wants me to gather some flora ingredients for their research here on Kashyyyk. If I…
- [ ] Reach index `5` (`Finished`): The Czerka Office has paid me 1,000 credits for the ingredients from the Shadowlands.
- [ ] Branch coverage: this journal has **2 different `Finished` entries**; test each reachable completion branch.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_Research`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
