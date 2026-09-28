---
title: "Geno Jounr (internal journal)"
description: "Walkthrough and QA reference for Geno Jounr (internal journal) (SW_GenoJounr)."
weight: 23
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_GenoJounr"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_GenoJounr` |
| **Category** | Factions & Careers |
| **Journal entries** | 4 |
| **Completion branches** | 1 |
| **Starts by** | Record route requires playtest verification. |
| **Key locations** | Tatooine, Tatooine, GenoHaradan Guildhall |
| **Key characters** | Axel-J-K, Rulan Prolik |

## Walkthrough

### 1. Reach journal stage 0

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 0:** The GenoHaradan

### 2. Speak with Axel-J-K in Tatooine

Speak with **Axel-J-K** in **Tatooine**.

> **Expected journal update — index 5:** I have gained access to the manor outside of Tatooine by the droid Axel-J-K.

### 3. Speak with Rulan Prolik in Tatooine, GenoHaradan Guildhall

Speak with **Rulan Prolik** in **Tatooine, GenoHaradan Guildhall**.

> **Expected journal update — index 10:** I rejected an invitation to the GenoHaradan and have made a new enemy today.

### 4. Speak with Rulan Prolik in Tatooine, GenoHaradan Guildhall — Finished

Speak with **Rulan Prolik** in **Tatooine, GenoHaradan Guildhall**.

> **Expected journal update — index 15:** I have joined the GenoHaradan and have use of its facilities in Prolik's Manor. I should go to him when I am ready to take on one of the sitting contracts.

**Known item transfer:** 1 × **GenoHaradan Helmet** (`SW_GenoHelm`).

**Outcome:** this journal entry is marked as a finished branch.

{% callout(kind="warning", title="Playtest flag") %}
1 journal stage on this page lack a literal setter in the current static scan.
{% end %}

## Endings & branches

The journal has one explicit finished state at **index 15**:

> I have joined the GenoHaradan and have use of its facilities in Prolik's Manor. I should go to him when I am ready to take on one of the sitting contracts.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 1 × **GenoHaradan Helmet** (`SW_GenoHelm`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Axel-J-K** (`SW_Axel`) — `Tatooine`
- **Rulan Prolik** (`SW_GenoProlik`) — `Tatooine, GenoHaradan Guildhall`

**Locations implicated by actor/object placement or explicit travel:**
- **Tatooine**
- **Tatooine, GenoHaradan Guildhall**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_GenoJounr`
**Generated category:** Factions & Careers
**Journal entries:** 4

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 0 | — | The GenoHaradan | 0 |
| 5 | — | I have gained access to the manor outside of Tatooine by the droid Axel-J-K. | 1 |
| 10 | — | I rejected an invitation to the GenoHaradan and have made a new enemy today. | 1 |
| 15 | Finished | I have joined the GenoHaradan and have use of its facilities in Prolik's Manor. I should go to him when I am ready to take on one of the sitting contracts. | 1 |

### Record-level trigger map

### Stage 0

The GenoHaradan

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 5

I have gained access to the manor outside of Tatooine by the droid Axel-J-K.

**How this stage is set:**
- Dialogue INFO `22805259523181222772` under topic **Greeting 7**; speaker Axel-J-K (`SW_Axel`). locations: `Tatooine`. conditions: Item/ItemType `SW_Geno1` Equal 1; Journal `SW_GenoJounr` Equal 0. response: “Enter, and speak to the Master.”.

```text
SW_Geno->Unlock
Journal SW_GenoJounr 5
```

### Stage 10

I rejected an invitation to the GenoHaradan and have made a new enemy today.

**How this stage is set:**
- Dialogue INFO `12493170952242026396` under topic **Greeting 7**; speaker Rulan Prolik (`SW_GenoProlik`). locations: `Tatooine, GenoHaradan Guildhall`. conditions: Function/Choice Equal 2. response: “Hahahaha!”.

```text
ModPCFacRep, -100, "SW_GenoHaradan"
Journal SW_GenoJounr 10
goodbye
```

### Stage 15 — Finished

I have joined the GenoHaradan and have use of its facilities in Prolik's Manor. I should go to him when I am ready to take on one of the sitting contracts.

**How this stage is set:**
- Dialogue INFO `32709298482095226505` under topic **Greeting 7**; speaker Rulan Prolik (`SW_GenoProlik`). locations: `Tatooine, GenoHaradan Guildhall`. conditions: Function/Choice Equal 1. response: “Then you have made a pact. Wear this helmet, as your identity is no longer. Our facilities are at your disposal now as well; below you will find a training room, a storage room with our hall's quartermaster, and a lounge room with beds for resting. Our contracts pay well and are ordered from very influential members of this galaxy's societies. Let me know when you are ready for one of the contracts.”.

```text
ModDisposition 10
player->additem "SW_GenoHelm", 1
Journal SW_GenoJounr 15
SW_GenoTrapdoor->Disable
```

### Related records and locations

**Dialogue speakers:**
- Axel-J-K (`SW_Axel`) — `Tatooine`
- Rulan Prolik (`SW_GenoProlik`) — `Tatooine, GenoHaradan Guildhall`

**Items referenced by related script/result code:**
- GenoHaradan Helmet (`SW_GenoHelm`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Tatooine`
- `Tatooine, GenoHaradan Guildhall`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `0` is obtainable.
- [ ] Reach index `0`: The GenoHaradan
- [ ] Reach index `5`: I have gained access to the manor outside of Tatooine by the droid Axel-J-K.
- [ ] Reach index `10`: I rejected an invitation to the GenoHaradan and have made a new enemy today.
- [ ] Reach index `15` (`Finished`): I have joined the GenoHaradan and have use of its facilities in Prolik's Manor. I should go to him when I am r…
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_GenoJounr`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
