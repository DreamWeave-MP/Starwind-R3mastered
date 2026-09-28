---
title: "The Japor Tree"
description: "Walkthrough and QA reference for The Japor Tree (SW_Japor)."
weight: 92
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_Japor"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_Japor` |
| **Category** | Side Quests |
| **Journal entries** | 3 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Czerka Archivist** in **Tatooine Czerka Office**. |
| **Observed prerequisite journals** | `SW_Work` |
| **Key locations** | Tatooine Czerka Office |
| **Key characters** | Czerka Archivist |

## Walkthrough

### 1. Speak with Czerka Archivist in Tatooine Czerka Office

Speak with **Czerka Archivist** in **Tatooine Czerka Office**.

> **Expected journal update — index 1:** A Czerka Archivist in the Czerka Office says they have a business deal for me if I'm interested, now that I have access out of the city. Apparently she is searching for some sort of tree made out of an ivory out in the desert. She claims she can make me an ivory quarterstaff with paralyzing effects if I can bring him some fresh materials from this alleged tree.

### 2. Speak with Czerka Archivist in Tatooine Czerka Office and ask about japor tree — Finished

Speak with **Czerka Archivist** in **Tatooine Czerka Office** and ask about **japor tree**.

> **Expected journal update — index 2:** I have received the staff, based on the shape of it I can assume it's made for Echani fighting styles. My reputation with the Czerka Corporation has improved as well.

**Known item transfer:** 1 × **Japor Quarterstaff** (`SW_JaporStaff`).

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 2**:

> I have received the staff, based on the shape of it I can assume it's made for Echani fighting styles. My reputation with the Czerka Corporation has improved as well.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 1 × **Japor Quarterstaff** (`SW_JaporStaff`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Czerka Archivist** (`SW_CzerkaJapor`) — `Tatooine Czerka Office`

**Locations implicated by actor/object placement or explicit travel:**
- **Tatooine Czerka Office**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_Japor`
**Generated category:** Side Quests
**Journal entries:** 3

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 1 | — | A Czerka Archivist in the Czerka Office says they have a business deal for me if I'm interested, now that I have access out of the city. Apparently she is searching for some sort of tree made out of an ivory out in the desert. She claims she can make me an ivory quarterstaff with paralyzing effects if I can bring him some fresh materials from this alleged tree. | 1 |
| 2 | Finished | I have received the staff, based on the shape of it I can assume it's made for Echani fighting styles. My reputation with the Czerka Corporation has improved as well. | 1 |

### Record-level trigger map

### Stage 1

A Czerka Archivist in the Czerka Office says they have a business deal for me if I'm interested, now that I have access out of the city. Apparently she is searching for some sort of tree made out of an ivory out in the desert. She claims she can make me an ivory quarterstaff with paralyzing effects if I can bring him some fresh materials from this alleged tree.

**How this stage is set:**
- Dialogue INFO `305251794920327661` under topic **Greeting 7**; speaker Czerka Archivist (`SW_CzerkaJapor`). locations: `Tatooine Czerka Office`. conditions: Journal `SW_Work` GreaterEqual 20. response: “Ah, it seems you have been given access out of Sandriver. I have a business deal for you if you are interested in a little something extra while you're out there. Somewhere in the Dune Sea is a fabled tree, called the Japor Tree. Bring me some snippets of this tree to study for my research, and in return I will make you a quarterstaff from its Ivory. They say the tree has paralyzing effects.”.

```text
Journal "SW_Japor" 1
StopSound "JaporGreet1"
PlaySound3d "JaporGreet2"
```

### Stage 2 — Finished

I have received the staff, based on the shape of it I can assume it's made for Echani fighting styles. My reputation with the Czerka Corporation has improved as well.

**How this stage is set:**
- Dialogue INFO `27226226711274020928` under topic **japor tree**; speaker Czerka Archivist (`SW_CzerkaJapor`). locations: `Tatooine Czerka Office`. conditions: Journal `SW_Japor` Equal 1; Item/ItemType `SW_JapSnip` GreaterEqual 1. response: “You've brought me the Ivory? Very well, the quarterstaff was already crafted, but I need raw materials in order to study them. Enjoy your staff, adventurer, I imagine it will come in handy in  your line of work, and thank you. I will put in a good word for you with my fellow colleagues.”.

```text
Journal "SW_Japor" 2
player->removeitem SW_JapSnip 1
player->additem SW_JaporStaff, 1
```

### Related records and locations

**Dialogue speakers:**
- Czerka Archivist (`SW_CzerkaJapor`) — `Tatooine Czerka Office`

**Items referenced by related script/result code:**
- Japor Quarterstaff (`SW_JaporStaff`)
- Japor Snippets (`SW_JapSnip`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Tatooine Czerka Office`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `1` is obtainable.
- [ ] Reach index `1`: A Czerka Archivist in the Czerka Office says they have a business deal for me if I'm interested, now that I ha…
- [ ] Reach index `2` (`Finished`): I have received the staff, based on the shape of it I can assume it's made for Echani fighting styles. My repu…
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_Japor`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
