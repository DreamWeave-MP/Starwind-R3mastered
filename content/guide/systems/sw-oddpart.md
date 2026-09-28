---
title: "Odd Part (internal journal)"
description: "Walkthrough and QA reference for Odd Part (internal journal) (SW_OddPart)."
weight: 9
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_OddPart"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_OddPart` |
| **Category** | Systems & Internal Journals |
| **Journal entries** | 1 |
| **Completion branches** | No explicit Finished marker |
| **Starts by** | Speak with **Rakanishu** in **Tatooine**. |
| **Key locations** | Manaan, Bazaar, Tatooine |
| **Key characters** | Rakanishu |

## Walkthrough

### 1. Speak with Rakanishu in Tatooine

Speak with **Rakanishu** in **Tatooine**.

> **Expected journal update — index 1:** I have received an odd droid part from a Jawa I rescued from Sand People.

**Known item transfer:** 1 × **Protocol Droid Part** (`SW_ProtoPart`).

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 1 × **Protocol Droid Part** (`SW_ProtoPart`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Rakanishu** (`SW_JewaCaptive`) — `Tatooine`

**Locations implicated by actor/object placement or explicit travel:**
- **Manaan, Bazaar**
- **Tatooine**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_OddPart`
**Generated category:** Systems & Internal Journals
**Journal entries:** 1

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 1 | — | I have received an odd droid part from a Jawa I rescued from Sand People. | 1 |

### Record-level trigger map

### Stage 1

I have received an odd droid part from a Jawa I rescued from Sand People.

**How this stage is set:**
- Dialogue INFO `23046467410715442` under topic **Greeting 7**; speaker Rakanishu (`SW_JewaCaptive`). locations: `Tatooine`. conditions: Journal `SW_OddPart` Equal 0. response: “Thank you for freeing me, here, take this, it is all I have.”.

```text
Journal SW_OddPart 1
player->additem "SW_ProtoPart", 1
PlaySound3d "SW_TtokkGreet"
```

### Related records and locations

**Dialogue speakers:**
- Rakanishu (`SW_JewaCaptive`) — `Tatooine`

**Items referenced by related script/result code:**
- Protocol Droid Part (`SW_ProtoPart`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Manaan, Bazaar`
- `Tatooine`

<details><summary>Other directly addressed object IDs in related code</summary>

- Rakanishu (`SW_JawaComp`)
- Rakanishu (`SW_JewaCaptive`)

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `1` is obtainable.
- [ ] Reach index `1`: I have received an odd droid part from a Jawa I rescued from Sand People.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_OddPart`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
