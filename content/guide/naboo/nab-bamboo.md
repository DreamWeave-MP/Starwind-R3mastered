---
title: "Bingwie Engineering"
description: "Walkthrough and QA reference for Bingwie Engineering (Nab_Bamboo)."
weight: 2
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "Nab_Bamboo"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `Nab_Bamboo` |
| **Category** | Naboo |
| **Journal entries** | 4 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Zago** in **Naboo, Bingwie Village** and ask about **repair**. |
| **Key locations** | Naboo, Bingwie Village |
| **Key characters** | Zago |

## Walkthrough

### 1. Speak with Zago in Naboo, Bingwie Village and ask about repair

Speak with **Zago** in **Naboo, Bingwie Village** and ask about **repair**.

> **Expected journal update — index 5:** Zago has asked that I bring to him 5 Bamboo Pulps so that he can repair some of the damage to their homes.

### 2. Reach journal stage 10

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 10:** I have 5 Bamboo Pulps and can return to Zago so that he can make the repairs.

### 3. Speak with Zago in Naboo, Bingwie Village and ask about repair — Finished

Speak with **Zago** in **Naboo, Bingwie Village** and ask about **repair**.

> **Expected journal update — index 15:** Zago was very grateful for the Bamboo Pulps and says that he can now make the necessary repairs for his fellow Bingwie. He's asked that I look around for other Bingwies in need.

**Outcome:** this journal entry is marked as a finished branch.

{% callout(kind="warning", title="Playtest flag") %}
1 journal stage on this page lack a literal setter in the current static scan.
{% end %}

## Endings & branches

The journal has one explicit finished state at **index 15**:

> Zago was very grateful for the Bamboo Pulps and says that he can now make the necessary repairs for his fellow Bingwie. He's asked that I look around for other Bingwies in need.

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Zago** (`SW_Zago`) — `Naboo, Bingwie Village`

**Locations implicated by actor/object placement or explicit travel:**
- **Naboo, Bingwie Village**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `Nab_Bamboo`
**Generated category:** Naboo
**Journal entries:** 4

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | Zago has asked that I bring to him 5 Bamboo Pulps so that he can repair some of the damage to their homes. | 1 |
| 10 | — | I have 5 Bamboo Pulps and can return to Zago so that he can make the repairs. | 0 |
| 15 | Finished | Zago was very grateful for the Bamboo Pulps and says that he can now make the necessary repairs for his fellow Bingwie. He's asked that I look around for other Bingwies in need. | 2 |

### Record-level trigger map

### Stage 5

Zago has asked that I bring to him 5 Bamboo Pulps so that he can repair some of the damage to their homes.

**How this stage is set:**
- Dialogue INFO `297581673653524702` under topic **repair**; speaker Zago (`SW_Zago`). locations: `Naboo, Bingwie Village`. conditions: Journal `Nab_Bamboo` Equal 0. response: “Repairing Bingwie homes means stuffing Bamboo Pulp into cracks to keep them strong. Zago does all the repairs in Bingwie Village, but there is no more Bamboo Pulp to do the work. If you can help Zago get 5 more Bamboo Pulp I can finish repairing Bingwie Village.”.

```text
Journal Nab_Bamboo 5
```

### Stage 10

I have 5 Bamboo Pulps and can return to Zago so that he can make the repairs.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 15 — Finished

Zago was very grateful for the Bamboo Pulps and says that he can now make the necessary repairs for his fellow Bingwie. He's asked that I look around for other Bingwies in need.

**How this stage is set:**
- Dialogue INFO `131689372813726239` under topic **repair**; speaker Zago (`SW_Zago`). locations: `Naboo, Bingwie Village`. conditions: Journal `Nab_Bamboo` Equal 10; Item/ItemType `Nab_BambooPulp` GreaterEqual 5. response: “This is enough! Now Zago can repair all the Bingwie homes, maybe some other Bingwie needs your help?”.

```text
Journal Nab_Bamboo 15
```
- Dialogue INFO `12352243401401712970` under topic **repair**; speaker Zago (`SW_Zago`). locations: `Naboo, Bingwie Village`. conditions: Journal `Nab_Bamboo` Equal 5; Item/ItemType `Nab_BambooPulp` GreaterEqual 5. response: “This is enough! Now Zago can repair all the Bingwie homes, maybe some other Bingwie needs your help?”.

```text
Journal Nab_Bamboo 15
```

### Related records and locations

**Dialogue speakers:**
- Zago (`SW_Zago`) — `Naboo, Bingwie Village`

**Scripts that read or write this journal:**
- `Nab_BagoScript` — Creature Bago (`SW_Bago`); placed in `Naboo, Bingwie Village`

**Cells implicated by actor/object placement or explicit travel code:**
- `Naboo, Bingwie Village`

<details><summary>Journal-state readers (1 code sites)</summary>

- Script `Nab_BagoScript`. attached to Creature Bago (`SW_Bago`); placed in `Naboo, Bingwie Village`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: Zago has asked that I bring to him 5 Bamboo Pulps so that he can repair some of the damage to their homes.
- [ ] Reach index `10`: I have 5 Bamboo Pulps and can return to Zago so that he can make the repairs.
- [ ] Reach index `15` (`Finished`): Zago was very grateful for the Bamboo Pulps and says that he can now make the necessary repairs for his fellow…
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `Nab_Bamboo`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
