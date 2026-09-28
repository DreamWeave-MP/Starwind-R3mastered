---
title: "Mandalore's Mask"
description: "Walkthrough and QA reference for Mandalore's Mask (SW_Mask)."
weight: 48
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_Mask"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_Mask` |
| **Category** | Side Quests |
| **Journal entries** | 3 |
| **Completion branches** | No explicit Finished marker |
| **Starts by** | Speak with **Dejarik Spectator** in **Manaan, Cantina** and ask about **anything**. |
| **Key locations** | Manaan, Cantina |
| **Key characters** | Dejarik Spectator |

## Walkthrough

### 1. Speak with Dejarik Spectator in Manaan, Cantina and ask about anything

Speak with **Dejarik Spectator** in **Manaan, Cantina** and ask about **anything**.

> **Expected journal update — index 5:** I met a cantina patron on Manaan who was spectating War Dejarik. He says he will trade his mask for a Terentatek Pack.

### 2. Speak with Dejarik Spectator in Manaan, Cantina and ask about anything

Speak with **Dejarik Spectator** in **Manaan, Cantina** and ask about **anything**.

> **Expected journal update — index 10:** I traded the Terentatek Pack for the cantina patron's mask, it is an exquisite piece of armor.

**Known item transfer:** 1 × **Mandalore's Mask** (`SW_Mandalore`).

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 1 × **Mandalore's Mask** (`SW_Mandalore`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Dejarik Spectator** (`SW_ManCantMandalore`) — `Manaan, Cantina`

**Locations implicated by actor/object placement or explicit travel:**
- **Manaan, Cantina**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_Mask`
**Generated category:** Side Quests
**Journal entries:** 3

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | I met a cantina patron on Manaan who was spectating War Dejarik. He says he will trade his mask for a Terentatek Pack. | 1 |
| 10 | — | I traded the Terentatek Pack for the cantina patron's mask, it is an exquisite piece of armor. | 1 |

### Record-level trigger map

### Stage 5

I met a cantina patron on Manaan who was spectating War Dejarik. He says he will trade his mask for a Terentatek Pack.

**How this stage is set:**
- Dialogue INFO `16645104761565313977` under topic **anything**; speaker Dejarik Spectator (`SW_ManCantMandalore`). locations: `Manaan, Cantina`. response: “My mask? Yeah I would give this mask for a Terentatek Pack, I found it in the savannah back on Lothal.”.

```text
Journal SW_Mask 5
Choice "Here you go, one Terentatek Pack." 1 "I'll be back when I have one." 2
```

### Stage 10

I traded the Terentatek Pack for the cantina patron's mask, it is an exquisite piece of armor.

**How this stage is set:**
- Dialogue INFO `136413439617813772` under topic **anything**; speaker Dejarik Spectator (`SW_ManCantMandalore`). locations: `Manaan, Cantina`. conditions: Function/Choice Equal 1; Item/ItemType `SW_MGTerenPack` GreaterEqual 1. response: “Really? Yes! Here, take it, I'm ready to play some War Dejarik!”.

```text
player->additem, "SW_Mandalore", 1
player->removeitem, "SW_MGTerenPack", 1
Journal SW_Mask 10
```

### Related records and locations

**Dialogue speakers:**
- Dejarik Spectator (`SW_ManCantMandalore`) — `Manaan, Cantina`

**Items referenced by related script/result code:**
- Mandalore's Mask (`SW_Mandalore`)
- Holo Terentatek Pack (`SW_MGTerenPack`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Manaan, Cantina`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: I met a cantina patron on Manaan who was spectating War Dejarik. He says he will trade his mask for a Terentat…
- [ ] Reach index `10`: I traded the Terentatek Pack for the cantina patron's mask, it is an exquisite piece of armor.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_Mask`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
