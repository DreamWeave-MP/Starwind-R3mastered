---
title: "The Siddah Ca"
description: "Walkthrough and QA reference for The Siddah Ca (SW_SiddahCa)."
weight: 33
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_SiddahCa"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_SiddahCa` |
| **Category** | Factions & Careers |
| **Journal entries** | 7 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Them Cultoll** in **Tatooine Czerka Office** and ask about **Siddah Ca**. |
| **Key locations** | Tatooine, Tatooine Czerka Office, Tatooine, Rodian District, Tatooine, Sandriver |
| **Key characters** | Blaine Willikie, Them Cultoll, Ug' Tar' Tar' Oon' |

## Walkthrough

### 1. Speak with Them Cultoll in Tatooine Czerka Office and ask about Siddah Ca

The records expose more than one way to reach this journal update:
- Speak with **Them Cultoll** in **Tatooine Czerka Office** and ask about **Siddah Ca**.
- Speak with **Them Cultoll** in **Tatooine Czerka Office** and ask about **diplomacy**.

> **Expected journal update — index 5:** I was given a datapad by Them Cultoll, it contains the email that brought him to Sandriver in the first place. Information on the Siddah Ca. They are a group of Sand People that have begun adapting to a permanent residence, which is very odd for their kind. Them Cultoll would like me to meet his colleague there to begin diplomacy with them.

### 2. Speak with Ug' Tar' Tar' Oon' in Tatooine and ask about diplomacy

Speak with **Ug' Tar' Tar' Oon'** in **Tatooine** and ask about **diplomacy**.

> **Expected journal update — index 10:** I have spoken to the Sidda Ca Chieftain, who says I must earn their respect and slay a Krayt Dragon within a chamber of rock formations that they have trapped them in. I am to return the chieftain the pearl of the Krayt Dragon.

**Known item transfer:** 1 × **Siddah Ca Key** (`SW_KraytKey`).

### 3. Speak with Ug' Tar' Tar' Oon' in Tatooine and ask about diplomacy

Speak with **Ug' Tar' Tar' Oon'** in **Tatooine** and ask about **diplomacy**.

> **Expected journal update — index 15:** I have returned the Krayt Dragon to the chieftain, who is now willing to begin diplomacy. He claims that the people of Sandriver have crimed against them by hunting Sand People within the desert. To prove they want to bring peace between them and the Sidda Ca they are demanding a tribute of Bantha, which do not roam wildly in this part of the desert. I should speak with Blain Willikie.

### 4. Speak with Blaine Willikie in Tatooine Czerka Office and ask about diplomacy

Speak with **Blaine Willikie** in **Tatooine Czerka Office** and ask about **diplomacy**.

> **Expected journal update — index 18:** I have spoken to the Czerka Officer here in Sandriver, who is not pleased with my proposal. It's going to take more to convince him.

### 5. Speak with Blaine Willikie in Tatooine Czerka Office and ask about diplomacy

Speak with **Blaine Willikie** in **Tatooine Czerka Office** and ask about **diplomacy**.

> **Expected journal update — index 20:** The Czerka Office has agreed to send Bantha to the Sidda Ca, but in return they want a cut in the Bantha that the Sidda Ca breed. I should speak to the Sidda Ca Chieftain.

### 6. Speak with Ug' Tar' Tar' Oon' in Tatooine and ask about diplomacy — Finished

Speak with **Ug' Tar' Tar' Oon'** in **Tatooine** and ask about **diplomacy**.

> **Expected journal update — index 30:** Though displeased with the Czerka Corporation the chieftain has agreed to the terms and along with it has told me I am accepted as one of them. He awarded me with a Ceremonial Gaffi Stick. Diplomacy has prevailed and history will be made today as the Sand People interact with the town.

**Known item transfer:** 1 × **Ceremonial Gaffi Stick** (`SW_GaffiShield`), 1 × **Siddah Ca Helm** (`SW_TuskenHelmet`).

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 30**:

> Though displeased with the Czerka Corporation the chieftain has agreed to the terms and along with it has told me I am accepted as one of them. He awarded me with a Ceremonial Gaffi Stick. Diplomacy has prevailed and history will be made today as the Sand People interact with the town.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 1 × **Siddah Ca Key** (`SW_KraytKey`)
- 1 × **Ceremonial Gaffi Stick** (`SW_GaffiShield`)
- 1 × **Siddah Ca Helm** (`SW_TuskenHelmet`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Blaine Willikie** (`SW_CzerkaOfficeGuy`) — `Tatooine Czerka Office`
- **Them Cultoll** (`SW_IthCzerkaOff`) — `Tatooine Czerka Office`
- **Ug' Tar' Tar' Oon'** (`SW_TuskenPeaceChief`) — `Tatooine`

**Locations implicated by actor/object placement or explicit travel:**
- **Tatooine**
- **Tatooine Czerka Office**
- **Tatooine, Rodian District**
- **Tatooine, Sandriver**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_SiddahCa`
**Generated category:** Factions & Careers
**Journal entries:** 7

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | I was given a datapad by Them Cultoll, it contains the email that brought him to Sandriver in the first place. Information on the Siddah Ca. They are a group of Sand People that have begun adapting to a permanent residence, which is very odd for their kind. Them Cultoll would like me to meet his colleague there to begin diplomacy with them. | 2 |
| 10 | — | I have spoken to the Sidda Ca Chieftain, who says I must earn their respect and slay a Krayt Dragon within a chamber of rock formations that they have trapped them in. I am to return the chieftain the pearl of the Krayt Dragon. | 1 |
| 15 | — | I have returned the Krayt Dragon to the chieftain, who is now willing to begin diplomacy. He claims that the people of Sandriver have crimed against them by hunting Sand People within the desert. To prove they want to bring peace between them and the Sidda Ca they are demanding a tribute of Bantha, which do not roam wildly in this part of the desert. I should speak with Blain Willikie. | 1 |
| 18 | — | I have spoken to the Czerka Officer here in Sandriver, who is not pleased with my proposal. It's going to take more to convince him. | 1 |
| 20 | — | The Czerka Office has agreed to send Bantha to the Sidda Ca, but in return they want a cut in the Bantha that the Sidda Ca breed. I should speak to the Sidda Ca Chieftain. | 2 |
| 30 | Finished | Though displeased with the Czerka Corporation the chieftain has agreed to the terms and along with it has told me I am accepted as one of them. He awarded me with a Ceremonial Gaffi Stick. Diplomacy has prevailed and history will be made today as the Sand People interact with the town. | 1 |

### Record-level trigger map

### Stage 5

I was given a datapad by Them Cultoll, it contains the email that brought him to Sandriver in the first place. Information on the Siddah Ca. They are a group of Sand People that have begun adapting to a permanent residence, which is very odd for their kind. Them Cultoll would like me to meet his colleague there to begin diplomacy with them.

**How this stage is set:**
- Dialogue INFO `2600132424806829069` under topic **Siddah Ca**; speaker Them Cultoll (`SW_IthCzerkaOff`). locations: `Tatooine Czerka Office`. conditions: Journal `SW_SiddahCa` Equal 0. response: “It seems no one here has had a non hostile relation with the natives. The Siddah Ca are a tribe of Sand People that live in the desert. By civilized I mean they ask first shoot later, and they are the only tribe I have heard of doing this, so it is critical that I can reach the settlement to begin diplomacy. My friend went out into the desert to find him, I haven't heard from him since.”.

```text
Journal "SW_SiddahCa" 5
```
- Dialogue INFO `1748523085213865223` under topic **diplomacy**; speaker Them Cultoll (`SW_IthCzerkaOff`). locations: `Tatooine Czerka Office`. conditions: Journal `SW_SiddahCa` Equal 89. response: “My colleague has already set out for the village, though the Czerka Corporation won't let me leave due to not having a hunting license, which they won't sell me! Look, if you could get out there and talk to the Sidda Ca you could make history. This is not something that can be just brushed aside!”.

```text
Journal SW_SiddahCa 5
```

### Stage 10

I have spoken to the Sidda Ca Chieftain, who says I must earn their respect and slay a Krayt Dragon within a chamber of rock formations that they have trapped them in. I am to return the chieftain the pearl of the Krayt Dragon.

**How this stage is set:**
- Dialogue INFO `35392049131924323` under topic **diplomacy**; speaker Ug' Tar' Tar' Oon' (`SW_TuskenPeaceChief`). locations: `Tatooine`. conditions: Journal `SW_SiddahCa` Equal 5. response: “You must slay great beast. Bring pearl back to chieftain. Then we talk diplomacy.”.

```text
Journal SW_SiddahCa 10
player->additem SW_KraytKey, 1
```

### Stage 15

I have returned the Krayt Dragon to the chieftain, who is now willing to begin diplomacy. He claims that the people of Sandriver have crimed against them by hunting Sand People within the desert. To prove they want to bring peace between them and the Sidda Ca they are demanding a tribute of Bantha, which do not roam wildly in this part of the desert. I should speak with Blain Willikie.

**How this stage is set:**
- Dialogue INFO `2571914670737218096` under topic **diplomacy**; speaker Ug' Tar' Tar' Oon' (`SW_TuskenPeaceChief`). locations: `Tatooine`. conditions: Journal `SW_SiddahCa` Equal 10; Item/ItemType `SW_KraytPearl` Equal 1. response: “You slay great beast, you great warrior. Sidda Ca accept you as such. If you people want diplomacy, you must pay for crimes. You people hunt Sand People in desert for fun, kill many. Bring Siddah Ca bantha to pay for crimes, bantha no roam in desert this far.”.

```text
Journal SW_SiddahCa 15
```

### Stage 18

I have spoken to the Czerka Officer here in Sandriver, who is not pleased with my proposal. It's going to take more to convince him.

**How this stage is set:**
- Dialogue INFO `3006125882118911882` under topic **diplomacy**; speaker Blaine Willikie (`SW_CzerkaOfficeGuy`). locations: `Tatooine Czerka Office`. conditions: Journal `SW_SiddahCa` Equal 15. response: “Hah! We're not giving them Bantha are you out of your mind? We can make enough money just hunting them than we ever will using them as a resource.”.

```text
Journal SW_SiddahCa 18
StopSound "COBantha1"
PlaySound3d "COBantha3"
```

### Stage 20

The Czerka Office has agreed to send Bantha to the Sidda Ca, but in return they want a cut in the Bantha that the Sidda Ca breed. I should speak to the Sidda Ca Chieftain.

**How this stage is set:**
- Dialogue INFO `2088199051992524301` under topic **diplomacy**; speaker Blaine Willikie (`SW_CzerkaOfficeGuy`). locations: `Tatooine Czerka Office`. conditions: Journal `SW_SiddahCa` Equal 18. response: “Alright, alright fine! Look, here's what I can do for you. What if we purchase some Bantha and have them escorted to their village. In return when they breed those smelly creatures we get some of the new Bantha, that way we can make our money, make up for the money not hunting them, and they get to eat. Thanks, now run along.”.

```text
Journal SW_SiddahCa 20
goodbye
PlaySound3d "COBantha1"
```
- Dialogue INFO `1395830360571421028` under topic **diplomacy**; speaker Blaine Willikie (`SW_CzerkaOfficeGuy`). locations: `Tatooine Czerka Office`. conditions: Journal `SW_SiddahCa` Equal 15. response: “Alright, alright fine! Look, here's what I can do for you. What if we purchase some Bantha and have them escorted to their village. In return when they breed those smelly creatures we get some of the new Bantha, that way we can make our money, make up for the money not hunting them, and they get to eat. Thanks, now run along.”.

```text
Journal SW_SiddahCa 20
goodbye
PlaySound3d "COBantha1"
```

### Stage 30 — Finished

Though displeased with the Czerka Corporation the chieftain has agreed to the terms and along with it has told me I am accepted as one of them. He awarded me with a Ceremonial Gaffi Stick. Diplomacy has prevailed and history will be made today as the Sand People interact with the town.

**How this stage is set:**
- Dialogue INFO `426912559282082399` under topic **diplomacy**; speaker Ug' Tar' Tar' Oon' (`SW_TuskenPeaceChief`). locations: `Tatooine`. conditions: Journal `SW_SiddahCa` Equal 20. response: “Sidda Ca need food, but are no slave. Sidda Ca must accept, this make Siddah Ca hurt, but must happen to feed children. Thank you great warrior. Here, you Sidda Ca, you accept gift.”.

```text
Journal SW_SiddahCa 30
player->additem SW_GaffiShield 1
player->additem SW_TuskenHelmet 1
```

### Related records and locations

**Dialogue speakers:**
- Blaine Willikie (`SW_CzerkaOfficeGuy`) — `Tatooine Czerka Office`
- Them Cultoll (`SW_IthCzerkaOff`) — `Tatooine Czerka Office`
- Ug' Tar' Tar' Oon' (`SW_TuskenPeaceChief`) — `Tatooine`

**Scripts that read or write this journal:**
- `GrrDisablerScript` — Activator TuskenCompanionDumymDisabler (`TuskenCompanionDisabler`); placed in `Tatooine, Rodian District`, `Tatooine, Sandriver`
- `GrrScript` — Npc Gr'Raan Lozan (`TatooineSandPersonComp`); placed in `Tatooine`
- `KraytDragonQuestScript` — Creature Krayt Dragon (`SW_KraytDragonQuest`); placed in `Tatooine`

**Items referenced by related script/result code:**
- Ceremonial Gaffi Stick (`SW_GaffiShield`)
- Siddah Ca Key (`SW_KraytKey`)
- Siddah Ca Helm (`SW_TuskenHelmet`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Tatooine`
- `Tatooine Czerka Office`
- `Tatooine, Rodian District`
- `Tatooine, Sandriver`

<details><summary>Other directly addressed object IDs in related code</summary>

- Bantha (`SW_BanthaMove1`)
- Bantha (`SW_BanthaMove2`)

</details>

<details><summary>Journal-state readers (3 code sites)</summary>

- Script `GrrDisablerScript`. attached to Activator TuskenCompanionDumymDisabler (`TuskenCompanionDisabler`); placed in `Tatooine, Rodian District`, `Tatooine, Sandriver`.
- Script `GrrScript`. attached to Npc Gr'Raan Lozan (`TatooineSandPersonComp`); placed in `Tatooine`.
- Script `KraytDragonQuestScript`. attached to Creature Krayt Dragon (`SW_KraytDragonQuest`); placed in `Tatooine`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: I was given a datapad by Them Cultoll, it contains the email that brought him to Sandriver in the first place.…
- [ ] Reach index `10`: I have spoken to the Sidda Ca Chieftain, who says I must earn their respect and slay a Krayt Dragon within a c…
- [ ] Reach index `15`: I have returned the Krayt Dragon to the chieftain, who is now willing to begin diplomacy. He claims that the p…
- [ ] Reach index `18`: I have spoken to the Czerka Officer here in Sandriver, who is not pleased with my proposal. It's going to take…
- [ ] Reach index `20`: The Czerka Office has agreed to send Bantha to the Sidda Ca, but in return they want a cut in the Bantha that …
- [ ] Reach index `30` (`Finished`): Though displeased with the Czerka Corporation the chieftain has agreed to the terms and along with it has told…
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_SiddahCa`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
