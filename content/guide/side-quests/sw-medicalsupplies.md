---
title: "Doctor in Need"
description: "Walkthrough and QA reference for Doctor in Need (SW_MedicalSupplies)."
weight: 35
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_MedicalSupplies"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_MedicalSupplies` |
| **Category** | Side Quests |
| **Journal entries** | 4 |
| **Completion branches** | No explicit Finished marker |
| **Starts by** | Speak with **Doctor Goodhue** in **Nar Shaddaa, Cantina** and ask about **supplies**. |
| **Key locations** | Nar Shaddaa, Cantina, Nar Shaddaa, Lower City |
| **Key characters** | Doctor Goodhue |

## Walkthrough

### 1. Speak with Doctor Goodhue in Nar Shaddaa, Cantina and ask about supplies

Speak with **Doctor Goodhue** in **Nar Shaddaa, Cantina** and ask about **supplies**.

> **Expected journal update — index 5:** I met a Doctor Goodhue in the Cantina on Nar Shaddaa, he was preparing to head to coruscant since all his medical supplies were stolen; apparently, some gangsters took the supplies and ran off toward Quanun Alley. I should look there to try to recover his supplies.

### 2. Reach journal stage 10

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 10:** I have found the medical supplies, the gangsters were getting ready to load them up disguised as dock workers, I should give the supplies to Doctor Goodhue.

### 3. Speak with Doctor Goodhue in Nar Shaddaa, Cantina and ask about supplies

Speak with **Doctor Goodhue** in **Nar Shaddaa, Cantina** and ask about **supplies**.

> **Expected journal update — index 15:** The doctor was overwhelmed with joy and relief, he said he came here to help people in need but those supplies were all he had to give out. He will be returning to the Bazaar where he was set up before now to tend to the sick of the Lower City.

**Known item transfer:** 2 × **Medkit** (`SW_Medkit`).

{% callout(kind="warning", title="Playtest flag") %}
1 journal stage on this page lack a literal setter in the current static scan.
{% end %}

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 2 × **Medkit** (`SW_Medkit`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Doctor Goodhue** (`SW_DrGoodhue2`) — `Nar Shaddaa, Cantina`

**Locations implicated by actor/object placement or explicit travel:**
- **Nar Shaddaa, Cantina**
- **Nar Shaddaa, Lower City**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_MedicalSupplies`
**Generated category:** Side Quests
**Journal entries:** 4

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | I met a Doctor Goodhue in the Cantina on Nar Shaddaa, he was preparing to head to coruscant since all his medical supplies were stolen; apparently, some gangsters took the supplies and ran off toward Quanun Alley. I should look there to try to recover his supplies. | 1 |
| 10 | — | I have found the medical supplies, the gangsters were getting ready to load them up disguised as dock workers, I should give the supplies to Doctor Goodhue. | 0 |
| 15 | — | The doctor was overwhelmed with joy and relief, he said he came here to help people in need but those supplies were all he had to give out. He will be returning to the Bazaar where he was set up before now to tend to the sick of the Lower City. | 2 |

### Record-level trigger map

### Stage 5

I met a Doctor Goodhue in the Cantina on Nar Shaddaa, he was preparing to head to coruscant since all his medical supplies were stolen; apparently, some gangsters took the supplies and ran off toward Quanun Alley. I should look there to try to recover his supplies.

**How this stage is set:**
- Dialogue INFO `27479270231103925417` under topic **supplies**; speaker Doctor Goodhue (`SW_DrGoodhue2`). locations: `Nar Shaddaa, Cantina`. conditions: Journal `SW_MedicalSupplies` Equal 0. response: “Yeah I was set up in the bazaar in the Lower City, but some gangsters stole my supplies and ran off towards Quanun Alley. There's nothing left here for me now.”.

```text
Journal SW_MedicalSupplies 5
```

### Stage 10

I have found the medical supplies, the gangsters were getting ready to load them up disguised as dock workers, I should give the supplies to Doctor Goodhue.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 15

The doctor was overwhelmed with joy and relief, he said he came here to help people in need but those supplies were all he had to give out. He will be returning to the Bazaar where he was set up before now to tend to the sick of the Lower City.

**How this stage is set:**
- Dialogue INFO `28483169201939131318` under topic **supplies**; speaker Doctor Goodhue (`SW_DrGoodhue2`). locations: `Nar Shaddaa, Cantina`. conditions: Item/ItemType `SW_MedSupplies` GreaterEqual 1; Journal `SW_MedicalSupplies` Equal 10. response: “You found my supplies? You are a saint. I came here from Coruscant to help the needy and sick in the Lower City here on Nar Shaddaa. Everything that I brought to give away is in those supplies, I can get back to work now in the bazaar. Thank you, here, take a couple of medkits for your help, you've saved lives today.”.

```text
SW_DrGoodhue2->Disable
SW_DrGoodhue->Enable
Journal SW_MedicalSupplies 15
player->ModReputation 1
```
- Dialogue INFO `268847226285277268` under topic **supplies**; speaker Doctor Goodhue (`SW_DrGoodhue2`). locations: `Nar Shaddaa, Cantina`. conditions: Item/ItemType `SW_MedSupplies` GreaterEqual 1; Journal `SW_MedicalSupplies` Equal 5. response: “You found my supplies? You are a saint. I came here from Coruscant to help the needy and sick in the Lower City here on Nar Shaddaa. Everything that I brought to give away is in those supplies, I can get back to work now in the bazaar. Thank you, here, take a couple of medkits for your help, you've saved lives today.”.

```text
player->removeitem, SW_MedSupplies, 1
player->additem, SW_Medkit, 2
Journal SW_MedicalSupplies 15
SW_DrGoodhue2->Disable
SW_DrGoodhue->Enable
```

### Related records and locations

**Dialogue speakers:**
- Doctor Goodhue (`SW_DrGoodhue2`) — `Nar Shaddaa, Cantina`

**Scripts that read or write this journal:**
- `SW_GoodhueDisable` — Npc Doctor Goodhue (`SW_DrGoodhue`); placed in `Nar Shaddaa, Lower City`

**Items referenced by related script/result code:**
- Medkit (`SW_Medkit`)
- Medical Supplies (`SW_MedSupplies`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Nar Shaddaa, Cantina`
- `Nar Shaddaa, Lower City`

<details><summary>Journal-state readers (1 code sites)</summary>

- Script `SW_GoodhueDisable`. attached to Npc Doctor Goodhue (`SW_DrGoodhue`); placed in `Nar Shaddaa, Lower City`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: I met a Doctor Goodhue in the Cantina on Nar Shaddaa, he was preparing to head to coruscant since all his medi…
- [ ] Reach index `10`: I have found the medical supplies, the gangsters were getting ready to load them up disguised as dock workers,…
- [ ] Reach index `15`: The doctor was overwhelmed with joy and relief, he said he came here to help people in need but those supplies…
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_MedicalSupplies`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
