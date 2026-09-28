---
title: "Stolen from Sandreach"
description: "Walkthrough and QA reference for Stolen from Sandreach (SWE_DeathCanyon)."
weight: 2
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SWE_DeathCanyon"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SWE_DeathCanyon` |
| **Category** | Starwind Enhanced |
| **Journal entries** | 3 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Borg Reegh** in **Tatooine, Sandreach: South Bay** and ask about **stole from my bay**. |
| **Key locations** | Tatooine, Sandreach: South Bay |
| **Key characters** | Borg Reegh |

## Walkthrough

### 1. Speak with Borg Reegh in Tatooine, Sandreach: South Bay and ask about stole from my bay

Speak with **Borg Reegh** in **Tatooine, Sandreach: South Bay** and ask about **stole from my bay**.

> **Expected journal update — index 10:** Borg Reegh, a resident at Sandreach South Bay mentioned some stolen ship parts the sand people nearby took from him. If I find any stolen ship parts I should bring it to him.

### 2. Speak with Borg Reegh in Tatooine, Sandreach: South Bay and ask about stolen ship parts — Finished

Speak with **Borg Reegh** in **Tatooine, Sandreach: South Bay** and ask about **stolen ship parts**.

> **Expected journal update — index 20:** I returned Borg Reegh's stolen ship parts and he rewarded me.

**Known item transfer:** 200 × **Credits** (`Gold_001`).

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 20**:

> I returned Borg Reegh's stolen ship parts and he rewarded me.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 200 × **Credits** (`Gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Borg Reegh** (`SWE_SRCitizen4`) — `Tatooine, Sandreach: South Bay`

**Locations implicated by actor/object placement or explicit travel:**
- **Tatooine, Sandreach: South Bay**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SWE_DeathCanyon`
**Generated category:** Starwind Enhanced
**Journal entries:** 3

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 10 | — | Borg Reegh, a resident at Sandreach South Bay mentioned some stolen ship parts the sand people nearby took from him. If I find any stolen ship parts I should bring it to him. | 1 |
| 20 | Finished | I returned Borg Reegh's stolen ship parts and he rewarded me. | 1 |

### Record-level trigger map

### Stage 10

Borg Reegh, a resident at Sandreach South Bay mentioned some stolen ship parts the sand people nearby took from him. If I find any stolen ship parts I should bring it to him.

**How this stage is set:**
- Dialogue INFO `785921148773318665` under topic **stole from my bay**; speaker Borg Reegh (`SWE_SRCitizen4`). locations: `Tatooine, Sandreach: South Bay`. conditions: Journal `SWE_DeathCanyon` Equal 0. response: “Yeah, those sand people in Death Canyon I bet. They they took some crates which have stuff that belongs to my ship in em'. If you find any stolen ship parts bring em' here.”.

```text
AddTopic "stolen ship parts"
Journal SWE_DeathCanyon 10
```

### Stage 20 — Finished

I returned Borg Reegh's stolen ship parts and he rewarded me.

**How this stage is set:**
- Dialogue INFO `24968239041414932541` under topic **stolen ship parts**; speaker Borg Reegh (`SWE_SRCitizen4`). locations: `Tatooine, Sandreach: South Bay`. conditions: Item/ItemType `SWE_SandReStolenPart` Equal 1; Journal `SWE_DeathCanyon` Equal 10. response: “My stuff! Thank you. Did you perhaps find a key in that crate? No worries, it was a spare. You can use that door anytime you want. I get a lot of people trying to use that route from Sandriver, but I'll give you a pass. Here's your reward.”.

```text
player->RemoveItem "SWE_SandReStolenPart" 1
player->AddItem "Gold_001" 200
Journal SWE_DeathCanyon 20
```

### Related records and locations

**Dialogue speakers:**
- Borg Reegh (`SWE_SRCitizen4`) — `Tatooine, Sandreach: South Bay`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)
- Stolen Ship Part (`SWE_SandReStolenPart`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Tatooine, Sandreach: South Bay`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `10` is obtainable.
- [ ] Reach index `10`: Borg Reegh, a resident at Sandreach South Bay mentioned some stolen ship parts the sand people nearby took fro…
- [ ] Reach index `20` (`Finished`): I returned Borg Reegh's stolen ship parts and he rewarded me.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SWE_DeathCanyon`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
