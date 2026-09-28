---
title: "Bolotaur Problem"
description: "Walkthrough and QA reference for Bolotaur Problem (SW_OutBolo)."
weight: 18
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_OutBolo"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_OutBolo` |
| **Category** | Side Quests |
| **Journal entries** | 4 |
| **Completion branches** | No explicit Finished marker |
| **Starts by** | Speak with **Tompson Wohl** in **Kashyyk, Shadowlands** and ask about **bolotaurs**. |
| **Key locations** | Kashyyk, Bolotaur Den, Kashyyk, Shadowlands |
| **Key characters** | Tompson Wohl |

## Walkthrough

### 1. Speak with Tompson Wohl in Kashyyk, Shadowlands and ask about bolotaurs

Speak with **Tompson Wohl** in **Kashyyk, Shadowlands** and ask about **bolotaurs**.

> **Expected journal update — index 5:** Tompson Wohl in the Kashyyk shadowlands is having a problem with bolotaurs and kinraths attacking his outpost. He thinks the bolotaurs are coming from this region and that an alpha bolotaur is making them even more aggressive than normal. He will reward me if I can find and exterminate it.

### 2. Reach Kashyyk, Bolotaur Den and allow the scripted event to complete

Reach **Kashyyk, Bolotaur Den** and allow the scripted event to complete.

> **Expected journal update — index 10:** I have killed the bolotaur alpha and should return to Tompson Wohl for my reward.

### 3. Speak with Tompson Wohl in Kashyyk, Shadowlands and ask about bolotaurs

Speak with **Tompson Wohl** in **Kashyyk, Shadowlands** and ask about **bolotaurs**.

> **Expected journal update — index 15:** I returned to Tompson Wohl who has paid me 800 credits for hunting his bolotaur alpha.

**Known item transfer:** 800 × **Credits** (`gold_001`).

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 800 × **Credits** (`gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Tompson Wohl** (`SW_CzerkaSciOutpost`) — `Kashyyk, Shadowlands`

**Locations implicated by actor/object placement or explicit travel:**
- **Kashyyk, Bolotaur Den**
- **Kashyyk, Shadowlands**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_OutBolo`
**Generated category:** Side Quests
**Journal entries:** 4

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | Tompson Wohl in the Kashyyk shadowlands is having a problem with bolotaurs and kinraths attacking his outpost. He thinks the bolotaurs are coming from this region and that an alpha bolotaur is making them even more aggressive than normal. He will reward me if I can find and exterminate it. | 1 |
| 10 | — | I have killed the bolotaur alpha and should return to Tompson Wohl for my reward. | 1 |
| 15 | — | I returned to Tompson Wohl who has paid me 800 credits for hunting his bolotaur alpha. | 1 |

### Record-level trigger map

### Stage 5

Tompson Wohl in the Kashyyk shadowlands is having a problem with bolotaurs and kinraths attacking his outpost. He thinks the bolotaurs are coming from this region and that an alpha bolotaur is making them even more aggressive than normal. He will reward me if I can find and exterminate it.

**How this stage is set:**
- Dialogue INFO `1032824745295234080` under topic **bolotaurs**; speaker Tompson Wohl (`SW_CzerkaSciOutpost`). locations: `Kashyyk, Shadowlands`. conditions: Journal `SW_OutBolo` Equal 0. response: “They have to have a den around here somewhere. I don't think they're coming from the South region. Based on our observations they are likely being rallied by an alpha male somewhere. If you can kill it, I'll reward you in credits.”.

```text
Journal SW_OutBolo 5
```

### Stage 10

I have killed the bolotaur alpha and should return to Tompson Wohl for my reward.

**How this stage is set:**
- Script `SW_SpawnBoloAlpha`. attached to Creature Bolotaur Alpha (`SW_BolotaurQuestBoss`); placed in `Kashyyk, Bolotaur Den`.

```text
If ( OnDeath )
    Journal SW_OutBolo 10
Endif
```

### Stage 15

I returned to Tompson Wohl who has paid me 800 credits for hunting his bolotaur alpha.

**How this stage is set:**
- Dialogue INFO `1711046191595430174` under topic **bolotaurs**; speaker Tompson Wohl (`SW_CzerkaSciOutpost`). locations: `Kashyyk, Shadowlands`. conditions: Journal `SW_OutBolo` Equal 10. response: “Thank you, I don't know how much longer we could've held our own without having to call in for heavy cannons. This place is an absolute nightmare.”.

```text
player->additem gold_001 800
Journal SW_OutBolo 15
```

### Related records and locations

**Dialogue speakers:**
- Tompson Wohl (`SW_CzerkaSciOutpost`) — `Kashyyk, Shadowlands`

**Scripts that read or write this journal:**
- `SW_SpawnBoloAlpha` — Creature Bolotaur Alpha (`SW_BolotaurQuestBoss`); placed in `Kashyyk, Bolotaur Den`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Kashyyk, Bolotaur Den`
- `Kashyyk, Shadowlands`

<details><summary>Journal-state readers (1 code sites)</summary>

- Script `SW_SpawnBoloAlpha`. attached to Creature Bolotaur Alpha (`SW_BolotaurQuestBoss`); placed in `Kashyyk, Bolotaur Den`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: Tompson Wohl in the Kashyyk shadowlands is having a problem with bolotaurs and kinraths attacking his outpost.…
- [ ] Reach index `10`: I have killed the bolotaur alpha and should return to Tompson Wohl for my reward.
- [ ] Reach index `15`: I returned to Tompson Wohl who has paid me 800 credits for hunting his bolotaur alpha.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_OutBolo`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
