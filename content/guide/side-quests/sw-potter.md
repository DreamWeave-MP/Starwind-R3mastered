---
title: "The Potter"
description: "Walkthrough and QA reference for The Potter (SW_Potter)."
weight: 101
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_Potter"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_Potter` |
| **Category** | Side Quests |
| **Journal entries** | 3 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Kahaama** in **Kashyyk, Kahaama's Hut** and ask about **help**. |
| **Key locations** | Kashyyk, Kahaama's Hut |
| **Key characters** | Kahaama |

## Walkthrough

### 1. Speak with Kahaama in Kashyyk, Kahaama's Hut and ask about help

Speak with **Kahaama** in **Kashyyk, Kahaama's Hut** and ask about **help**.

> **Expected journal update — index 5:** A wookie named Kahaama has asked me to bring him a mykal egg so that he could turn it in for a favor with his chieftain.

### 2. Speak with Kahaama in Kashyyk, Kahaama's Hut and ask about help — Finished

Speak with **Kahaama** in **Kashyyk, Kahaama's Hut** and ask about **help**.

> **Expected journal update — index 10:** Kahaama was very grateful that I was able to attain the mykal egg. He has given me his handmade pottery as a token of appreciation, and I can now trade with him for the armor of the wookies. He told me to seek out Chokoon if I wished to access the weapons of the wookies.

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 10**:

> Kahaama was very grateful that I was able to attain the mykal egg. He has given me his handmade pottery as a token of appreciation, and I can now trade with him for the armor of the wookies. He told me to seek out Chokoon if I wished to access the weapons of the wookies.

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Kahaama** (`SW_WookieKahaama`) — `Kashyyk, Kahaama's Hut`

**Locations implicated by actor/object placement or explicit travel:**
- **Kashyyk, Kahaama's Hut**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_Potter`
**Generated category:** Side Quests
**Journal entries:** 3

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | A wookie named Kahaama has asked me to bring him a mykal egg so that he could turn it in for a favor with his chieftain. | 1 |
| 10 | Finished | Kahaama was very grateful that I was able to attain the mykal egg. He has given me his handmade pottery as a token of appreciation, and I can now trade with him for the armor of the wookies. He told me to seek out Chokoon if I wished to access the weapons of the wookies. | 1 |

### Record-level trigger map

### Stage 5

A wookie named Kahaama has asked me to bring him a mykal egg so that he could turn it in for a favor with his chieftain.

**How this stage is set:**
- Dialogue INFO `1016930611262214468` under topic **help**; speaker Kahaama (`SW_WookieKahaama`). locations: `Kashyyk, Kahaama's Hut`. conditions: Journal `SW_Potter` Equal 0. response: “You see I like making pottery, it's something I learned from an outsider once, but my equipment is broken and I need help fixing it. Azoozoo says he will allow the village to help if I bring him a mykal egg, which is an extremely rare ingredient. If you could bring me the egg, I would be able to get my equipment fixed, and I would be very grateful.”.

```text
Journal SW_Potter 5
```

### Stage 10 — Finished

Kahaama was very grateful that I was able to attain the mykal egg. He has given me his handmade pottery as a token of appreciation, and I can now trade with him for the armor of the wookies. He told me to seek out Chokoon if I wished to access the weapons of the wookies.

**How this stage is set:**
- Dialogue INFO `12900206002789417918` under topic **help**; speaker Kahaama (`SW_WookieKahaama`). locations: `Kashyyk, Kahaama's Hut`. conditions: Journal `SW_Potter` Equal 5; Item/ItemType `SW_MykalEgg` GreaterEqual 1. response: “A mykal egg, you are either a very lucky outsider, or an extraordinary one. Thank you my friend. You are always welcome in my hut. Here, take this pottery, and speak to me again if you wish to barter on the clothing of the wookies, they are available to you now friend. Seek out Chokoon if you wish to gain access to the weapons of the wookies.”.

```text
Journal SW_Potter 10
player->removeitem SW_MykalEgg 1
SW_BasketWookArmor->additem SW_WookHelm 2
```

### Related records and locations

**Dialogue speakers:**
- Kahaama (`SW_WookieKahaama`) — `Kashyyk, Kahaama's Hut`

**Items referenced by related script/result code:**
- misc_de_bowl_redware_01
- misc_de_bowl_redware_02
- Redware Pot (`misc_de_pot_redware_01`)
- Redware Pot (`misc_de_pot_redware_02`)
- Redware Pot (`Misc_DE_pot_redware_03`)
- Redware Pot (`misc_de_pot_redware_04`)
- Wookie Greaves (`SW_LeatherGreaves`)
- Mykal Egg (`SW_MykalEgg`)
- Wookie Boots (`SW_WookBoots`)
- Wookie Helmet (`SW_WookHelm`)
- Wookie Left Pauldron (`SW_WookPaulL`)
- Wookie Right Pauldron (`SW_WookPaulR`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Kashyyk, Kahaama's Hut`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: A wookie named Kahaama has asked me to bring him a mykal egg so that he could turn it in for a favor with his …
- [ ] Reach index `10` (`Finished`): Kahaama was very grateful that I was able to attain the mykal egg. He has given me his handmade pottery as a t…
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_Potter`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
