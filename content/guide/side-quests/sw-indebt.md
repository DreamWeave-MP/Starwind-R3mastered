---
title: "Cartel Debt"
description: "Walkthrough and QA reference for Cartel Debt (SW_InDebt)."
weight: 26
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_InDebt"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_InDebt` |
| **Category** | Side Quests |
| **Journal entries** | 6 |
| **Completion branches** | 2 |
| **Starts by** | Record route requires playtest verification. |
| **Key locations** | Nar Shaddaa, 3227 Market Alley, Nar Shaddaa, Cantina |
| **Key characters** | Woonam the Hutt, Zander Brigs |

## Walkthrough

### 1. Reach journal stage 5

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 5:** Zander Brigs at 3227 Market Alley is in debt to Woonam the Hutt by 200 credits. He wants me to try to pay of his debt so Woonam doesn't have him killed. I could do that, or I could kill him myself and claim the bounty.

### 2. Find Zander Brigs in Nar Shaddaa, 3227 Market Alley and complete the encounter

Find **Zander Brigs** in **Nar Shaddaa, 3227 Market Alley** and complete the encounter.

> **Expected journal update — index 10:** I've killed Zander Brigs. I can now go to Woonam the Hutt to claim his bounty.

### 3. Reach journal stage 15 — Finished

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 15:** I've claimed Zander's bounty of 200 credits.

**Outcome:** this journal entry is marked as a finished branch.

### 4. Speak with Woonam the Hutt in Nar Shaddaa, Cantina and ask about debt

Speak with **Woonam the Hutt** in **Nar Shaddaa, Cantina** and ask about **debt**.

> **Expected journal update — index 20:** I have paid the 200 credits for Zander's bounty, I should let him know that he's safe now.

### 5. Speak with Zander Brigs in Nar Shaddaa, 3227 Market Alley and ask about debt — Finished

Speak with **Zander Brigs** in **Nar Shaddaa, 3227 Market Alley** and ask about **debt**.

> **Expected journal update — index 25:** Zander has given me his helmet in return for my kindness. He says it has a minor forcefield on it that helps deter blaster bolts.

**Known item transfer:** 1 × **Zander's Combat Helm** (`SW_CombHelmSanctuary`).

**Outcome:** this journal entry is marked as a finished branch.

> **Playtest flag:** 2 journal stages on this page lack a literal setter in the current static scan.

## Endings & branches

The journal has **2 explicit finished entries**. Treat them as branch coverage targets during playtesting:

- **Index 15:** I've claimed Zander's bounty of 200 credits.
- **Index 25:** Zander has given me his helmet in return for my kindness. He says it has a minor forcefield on it that helps deter blaster bolts.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 1 × **Zander's Combat Helm** (`SW_CombHelmSanctuary`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Woonam the Hutt** (`Bng_Woonam`) — `Nar Shaddaa, Cantina`
- **Zander Brigs** (`SW_Zander`) — `Nar Shaddaa, 3227 Market Alley`

**Locations implicated by actor/object placement or explicit travel:**
- **Nar Shaddaa, 3227 Market Alley**
- **Nar Shaddaa, Cantina**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_InDebt`
**Generated category:** Side Quests
**Journal entries:** 6

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | Zander Brigs at 3227 Market Alley is in debt to Woonam the Hutt by 200 credits. He wants me to try to pay of his debt so Woonam doesn't have him killed. I could do that, or I could kill him myself and claim the bounty. | 0 |
| 10 | — | I've killed Zander Brigs. I can now go to Woonam the Hutt to claim his bounty. | 1 |
| 15 | Finished | I've claimed Zander's bounty of 200 credits. | 0 |
| 20 | — | I have paid the 200 credits for Zander's bounty, I should let him know that he's safe now. | 1 |
| 25 | Finished | Zander has given me his helmet in return for my kindness. He says it has a minor forcefield on it that helps deter blaster bolts. | 1 |

### Record-level trigger map

### Stage 5

Zander Brigs at 3227 Market Alley is in debt to Woonam the Hutt by 200 credits. He wants me to try to pay of his debt so Woonam doesn't have him killed. I could do that, or I could kill him myself and claim the bounty.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 10

I've killed Zander Brigs. I can now go to Woonam the Hutt to claim his bounty.

**How this stage is set:**
- Script `SW_ZandersDead`. attached to Npc Zander Brigs (`SW_Zander`); placed in `Nar Shaddaa, 3227 Market Alley`.

```text
If ( GetDeadCount "SW_Zander" >= 1 )
    Journal SW_InDebt 10
endif
```

### Stage 15 — Finished

I've claimed Zander's bounty of 200 credits.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 20

I have paid the 200 credits for Zander's bounty, I should let him know that he's safe now.

**How this stage is set:**
- Dialogue INFO `27833199673025312182` under topic **debt**; speaker Woonam the Hutt (`Bng_Woonam`). locations: `Nar Shaddaa, Cantina`. conditions: Function/Choice Equal 1; Item/ItemType `Gold_001` GreaterEqual 200. response: “What a silly thing to do. You could have made 200 credits! But ah well, I am fine with taking your money. I'll call off his bounty, get out of here.”.

```text
player->removeitem, gold_001, 200
Journal SW_InDebt 20
goodbye
```

### Stage 25 — Finished

Zander has given me his helmet in return for my kindness. He says it has a minor forcefield on it that helps deter blaster bolts.

**How this stage is set:**
- Dialogue INFO `24724172489530395` under topic **debt**; speaker Zander Brigs (`SW_Zander`). locations: `Nar Shaddaa, 3227 Market Alley`. conditions: Journal `SW_InDebt` Equal 20. response: “You paid it? You really paid it? I don't really have anything worth anything. You could have my helmet! It has a minor forcefield on it and helps in deflecting blaster bolts.”.

```text
Journal SW_InDebt 25
player->additem, SW_CombHelmSanctuary, 1
```

### Related records and locations

**Dialogue speakers:**
- Woonam the Hutt (`Bng_Woonam`) — `Nar Shaddaa, Cantina`
- Zander Brigs (`SW_Zander`) — `Nar Shaddaa, 3227 Market Alley`

**Scripts that read or write this journal:**
- `SW_ZandersDead` — Npc Zander Brigs (`SW_Zander`); placed in `Nar Shaddaa, 3227 Market Alley`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)
- Zander's Combat Helm (`SW_CombHelmSanctuary`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Nar Shaddaa, 3227 Market Alley`
- `Nar Shaddaa, Cantina`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: Zander Brigs at 3227 Market Alley is in debt to Woonam the Hutt by 200 credits. He wants me to try to pay of h…
- [ ] Reach index `10`: I've killed Zander Brigs. I can now go to Woonam the Hutt to claim his bounty.
- [ ] Reach index `15` (`Finished`): I've claimed Zander's bounty of 200 credits.
- [ ] Reach index `20`: I have paid the 200 credits for Zander's bounty, I should let him know that he's safe now.
- [ ] Reach index `25` (`Finished`): Zander has given me his helmet in return for my kindness. He says it has a minor forcefield on it that helps d…
- [ ] Branch coverage: this journal has **2 different `Finished` entries**; test each reachable completion branch.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_InDebt`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
