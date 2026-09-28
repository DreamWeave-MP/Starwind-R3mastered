---
title: "Selkath History"
description: "Walkthrough and QA reference for Selkath History (SW_SelkathHist)."
weight: 69
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_SelkathHist"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_SelkathHist` |
| **Category** | Side Quests |
| **Journal entries** | 3 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Submersible Attendant** in **Manaan, Submersible Docking Bay** and ask about **archeological research**. |
| **Key locations** | Manaan, Submersible Docking Bay |
| **Key characters** | Submersible Attendant |

## Walkthrough

### 1. Speak with Submersible Attendant in Manaan, Submersible Docking Bay and ask about archeological research

Speak with **Submersible Attendant** in **Manaan, Submersible Docking Bay** and ask about **archeological research**.

> **Expected journal update — index 5:** I have been informed that there is a possibility of an unkown set of structures within the Ignatious Reef. I should investigate this if I wish to be paid by the Selkath for archeological research with evidence of a finding.

### 2. Speak with Submersible Attendant in Manaan, Submersible Docking Bay and ask about archeological research — Finished

Speak with **Submersible Attendant** in **Manaan, Submersible Docking Bay** and ask about **archeological research**.

> **Expected journal update — index 10:** I have brought back to the Selkath Attendant an Ancient Selkath Spear that i found within some sunken remains of what looks to be an ancient selkath settlement. He has rewarded me with 3,000 credits.

**Known item transfer:** 3000 × **Credits** (`Gold_001`).

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 10**:

> I have brought back to the Selkath Attendant an Ancient Selkath Spear that i found within some sunken remains of what looks to be an ancient selkath settlement. He has rewarded me with 3,000 credits.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 3000 × **Credits** (`Gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Submersible Attendant** (`SW_SelkathSubmerse`) — `Manaan, Submersible Docking Bay`

**Locations implicated by actor/object placement or explicit travel:**
- **Manaan, Submersible Docking Bay**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_SelkathHist`
**Generated category:** Side Quests
**Journal entries:** 3

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | I have been informed that there is a possibility of an unkown set of structures within the Ignatious Reef. I should investigate this if I wish to be paid by the Selkath for archeological research with evidence of a finding. | 1 |
| 10 | Finished | I have brought back to the Selkath Attendant an Ancient Selkath Spear that i found within some sunken remains of what looks to be an ancient selkath settlement. He has rewarded me with 3,000 credits. | 1 |

### Record-level trigger map

### Stage 5

I have been informed that there is a possibility of an unkown set of structures within the Ignatious Reef. I should investigate this if I wish to be paid by the Selkath for archeological research with evidence of a finding.

**How this stage is set:**
- Dialogue INFO `90432636518550603` under topic **archeological research**; speaker Submersible Attendant (`SW_SelkathSubmerse`). locations: `Manaan, Submersible Docking Bay`. conditions: Journal `SW_SelkathHist` Equal 0. response: “Yes there seems to be an area of surface waves that are consistently standing waves, topography studies show they may even raise when flowing over this area, suggesting there may be some sort of structure at the ocean floor. All attempts to investigate this area have been in vain, and none of our researchers have returned. We're willing to give 3,000 credits to the diver that can give us evidence on what is in this area.”.

```text
Journal SW_SelkathHist 5
```

### Stage 10 — Finished

I have brought back to the Selkath Attendant an Ancient Selkath Spear that i found within some sunken remains of what looks to be an ancient selkath settlement. He has rewarded me with 3,000 credits.

**How this stage is set:**
- Dialogue INFO `1461261051189310055` under topic **archeological research**; speaker Submersible Attendant (`SW_SelkathSubmerse`). locations: `Manaan, Submersible Docking Bay`. conditions: Journal `SW_SelkathHist` Equal 5; Item/ItemType `SW_SelkathSpear` GreaterEqual 1. response: “A spear, hmm, yes it resembles old Selkath craftsmanship. There must be an ancient settlement that has sunk underneath the ocean floor there over time. We will dispatch a force along with a research team soon. Thank you, Offworlder, here's your credits, and keep the spear we will find much, much more soon.”.

```text
Journal SW_SelkathHist 10
player->additem "Gold_001" 3000
player->modReputation 1
```

### Related records and locations

**Dialogue speakers:**
- Submersible Attendant (`SW_SelkathSubmerse`) — `Manaan, Submersible Docking Bay`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Manaan, Submersible Docking Bay`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: I have been informed that there is a possibility of an unkown set of structures within the Ignatious Reef. I s…
- [ ] Reach index `10` (`Finished`): I have brought back to the Selkath Attendant an Ancient Selkath Spear that i found within some sunken remains …
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_SelkathHist`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
