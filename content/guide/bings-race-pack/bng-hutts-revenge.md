---
title: "Hutt's Revenge"
description: "Walkthrough and QA reference for Hutt's Revenge (Bng_Hutts_Revenge)."
weight: 2
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "Bng_Hutts_Revenge"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `Bng_Hutts_Revenge` |
| **Category** | Bing's Race Pack |
| **Journal entries** | 4 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Moghra** in **Nal Hutta, Moghra's house** and ask about **Lintra Tan**. |
| **Key locations** | Nal Hutta, Dreddon's Den, Nal Hutta, Moghra's house |
| **Key characters** | Moghra |

## Walkthrough

### 1. Speak with Moghra in Nal Hutta, Moghra's house and ask about Lintra Tan

Speak with **Moghra** in **Nal Hutta, Moghra's house** and ask about **Lintra Tan**.

> **Expected journal update — index 10:** Moghra claims Lintra Tan stole thousands of credits from him and now he wants Lintra dead.

### 2. Defeat Lintra Tan in Nal Hutta, Dreddon's Den and allow its script to update the quest

Defeat **Lintra Tan** in **Nal Hutta, Dreddon's Den** and allow its script to update the quest.

> **Expected journal update — index 20:** Lintra Tan is Dead

### 3. Speak with Moghra in Nal Hutta, Moghra's house and ask about Lintra Tan — Finished

Speak with **Moghra** in **Nal Hutta, Moghra's house** and ask about **Lintra Tan**.

> **Expected journal update — index 30:** Moghra rewarded me for killing Lintra Tan.

**Known item transfer:** 500 × **Credits** (`Gold_001`).

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 30**:

> Moghra rewarded me for killing Lintra Tan.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 500 × **Credits** (`Gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Moghra** (`Bng_Moghra`) — `Nal Hutta, Moghra's house`

**Locations implicated by actor/object placement or explicit travel:**
- **Nal Hutta, Dreddon's Den**
- **Nal Hutta, Moghra's house**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `Bng_Hutts_Revenge`
**Generated category:** Bing's Race Pack
**Journal entries:** 4

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 10 | — | Moghra claims Lintra Tan stole thousands of credits from him and now he wants Lintra dead. | 1 |
| 20 | — | Lintra Tan is Dead | 1 |
| 30 | Finished | Moghra rewarded me for killing Lintra Tan. | 1 |

### Record-level trigger map

### Stage 10

Moghra claims Lintra Tan stole thousands of credits from him and now he wants Lintra dead.

**How this stage is set:**
- Dialogue INFO `1605177582619717103` under topic **Lintra Tan**; speaker Moghra (`Bng_Moghra`). locations: `Nal Hutta, Moghra's house`. conditions: Journal `Bng_Hutts_Revenge` Less 10. response: “That scoundrel stole thousands of credits from me! Unfortunately, She is also one of Deddon's favorite pilots, which means putting an official bounty on her head isn't going to fly. I had to resort to word of mouth, hoping a worthy hunter would find their way here. Do you have it in you?”.

```text
Journal "Bng_Hutts_Revenge" 10
```

### Stage 20

Lintra Tan is Dead

**How this stage is set:**
- Script `Bng_LintraQuest`. attached to Npc Lintra Tan (`Bng_Nal_Shuttle`); placed in `Nal Hutta, Dreddon's Den`.

```text
if ( Bng_Nal_Shuttle->Gethealth = 0 )
Journal "Bng_Hutts_revenge" 20
endif
```

### Stage 30 — Finished

Moghra rewarded me for killing Lintra Tan.

**How this stage is set:**
- Dialogue INFO `2812812367678523609` under topic **Lintra Tan**; speaker Moghra (`Bng_Moghra`). locations: `Nal Hutta, Moghra's house`. conditions: Journal `Bng_Hutts_Revenge` Equal 20. response: “Good work, %PCName. Here's a little bit for your troubles.”.

```text
journal "Bng_Hutts_Revenge" 30
player->additem "Gold_001" 500
Bng_Nar->disable
```

### Related records and locations

**Dialogue speakers:**
- Moghra (`Bng_Moghra`) — `Nal Hutta, Moghra's house`

**Scripts that read or write this journal:**
- `Bng_LintraQuest` — Npc Lintra Tan (`Bng_Nal_Shuttle`); placed in `Nal Hutta, Dreddon's Den`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Nal Hutta, Dreddon's Den`
- `Nal Hutta, Moghra's house`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `10` is obtainable.
- [ ] Reach index `10`: Moghra claims Lintra Tan stole thousands of credits from him and now he wants Lintra dead.
- [ ] Reach index `20`: Lintra Tan is Dead
- [ ] Reach index `30` (`Finished`): Moghra rewarded me for killing Lintra Tan.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `Bng_Hutts_Revenge`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
