---
title: "Chapter 2: Medical Sector"
description: "Walkthrough and QA reference for Chapter 2: Medical Sector (SW_TarisSectMedic)."
weight: 11
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_TarisSectMedic"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_TarisSectMedic` |
| **Category** | Main Quest |
| **Journal entries** | 6 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Shade Vendas** in **Taris, Central Plaza: Capital Tower** and ask about **Medical Sector**. |
| **Key locations** | Manaan, Apartments, Manaan, Bazaar, Manaan, Derivian's Waterwear, Manaan, Docking Bay, Manaan, Kolto Processing Facility, Manaan, Melchior's Reef … |
| **Key characters** | Doctor Jhalasha, Doctor Jhalasha, Doctor Jhalasha, Shade Vendas |

## Walkthrough

### 1. Speak with Shade Vendas in Taris, Central Plaza: Capital Tower and ask about Medical Sector

Speak with **Shade Vendas** in **Taris, Central Plaza: Capital Tower** and ask about **Medical Sector**.

> **Expected journal update — index 5:** The rakghoul disease is rampant, and many people are ill and sick from other ailments. Shade would like me to head to Manaan and find a Selkath doctor named Jhalasha to seek their aid as Taris is restored. Shade warned me that Jhalasha suffers from a mental health disorder called multiple personality disorder, and can be very hard to deal with at times.

### 2. Speak with Doctor Jhalasha in Manaan, Derivian's Waterwear and ask about Medical Sector

The records expose more than one way to reach this journal update:
- Speak with **Doctor Jhalasha** in **Manaan, Derivian's Waterwear** and ask about **Medical Sector**.
- Speak with **Doctor Jhalasha** in **Manaan, Kolto Processing Facility** and ask about **Medical Sector**.

> **Expected journal update — index 10:** I found Jhalasha but he doesn't seem willing to help. Maybe I should ask around and see if I can find other aid from this planet.

### 3. Reach journal stage 15

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 15:** I've learned Jhalasha will in fact help, and that one of his personalities leaves notes for the other ones in order to accomplish his tasks throughout the week. I've learned that I should find him between the inconvenient hours of 10 PM and 12 AM when he is most sound of mind.

### 4. Speak with Doctor Jhalasha in Manaan, Melchior's Reef and ask about Medical Sector

Speak with **Doctor Jhalasha** in **Manaan, Melchior's Reef** and ask about **Medical Sector**.

> **Expected journal update — index 20:** I've spoken with Jhalasha in his regular state. He says it will be difficult but he's made the trip to Taris numerous times, and Shade should be expecting him before long.

### 5. Speak with Shade Vendas in Taris, Central Plaza: Capital Tower and ask about Medical Sector — Finished

Speak with **Shade Vendas** in **Taris, Central Plaza: Capital Tower** and ask about **Medical Sector**.

> **Expected journal update — index 25:** Shade is grateful I was able to get through to Jhalasha. I should look into other contacts we need to gather.

**Known item transfer:** 1000 × **Credits** (`gold_001`).

**Outcome:** this journal entry is marked as a finished branch.

{% callout(kind="warning", title="Playtest flag") %}
1 journal stage on this page lack a literal setter in the current static scan.
{% end %}

## Endings & branches

The journal has one explicit finished state at **index 25**:

> Shade is grateful I was able to get through to Jhalasha. I should look into other contacts we need to gather.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 1000 × **Credits** (`gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Doctor Jhalasha** (`SW_JhalashaKolto`) — `Manaan, Kolto Processing Facility`
- **Doctor Jhalasha** (`SW_JhalashaReef`) — `Manaan, Melchior's Reef`
- **Doctor Jhalasha** (`SW_JhalashaShop`) — `Manaan, Derivian's Waterwear`
- **Shade Vendas** (`SW_ShadeTower`) — `Taris, Central Plaza: Capital Tower`

**Locations implicated by actor/object placement or explicit travel:**
- **Manaan, Apartments**
- **Manaan, Bazaar**
- **Manaan, Derivian's Waterwear**
- **Manaan, Docking Bay**
- **Manaan, Kolto Processing Facility**
- **Manaan, Melchior's Reef**
- **Taris, Central Plaza: Capital Tower**
- **Taris, Central Plaza: Government Office C**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_TarisSectMedic`
**Generated category:** Main Quest
**Journal entries:** 6

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | The rakghoul disease is rampant, and many people are ill and sick from other ailments. Shade would like me to head to Manaan and find a Selkath doctor named Jhalasha to seek their aid as Taris is restored. Shade warned me that Jhalasha suffers from a mental health disorder called multiple personality disorder, and can be very hard to deal with at times. | 2 |
| 10 | — | I found Jhalasha but he doesn't seem willing to help. Maybe I should ask around and see if I can find other aid from this planet. | 2 |
| 15 | — | I've learned Jhalasha will in fact help, and that one of his personalities leaves notes for the other ones in order to accomplish his tasks throughout the week. I've learned that I should find him between the inconvenient hours of 10 PM and 12 AM when he is most sound of mind. | 0 |
| 20 | — | I've spoken with Jhalasha in his regular state. He says it will be difficult but he's made the trip to Taris numerous times, and Shade should be expecting him before long. | 1 |
| 25 | Finished | Shade is grateful I was able to get through to Jhalasha. I should look into other contacts we need to gather. | 1 |

### Record-level trigger map

### Stage 5

The rakghoul disease is rampant, and many people are ill and sick from other ailments. Shade would like me to head to Manaan and find a Selkath doctor named Jhalasha to seek their aid as Taris is restored. Shade warned me that Jhalasha suffers from a mental health disorder called multiple personality disorder, and can be very hard to deal with at times.

**How this stage is set:**
- Dialogue INFO `1800207401518132209` under topic **Medical Sector**; speaker Shade Vendas (`SW_ShadeTower`). locations: `Taris, Central Plaza: Capital Tower`. conditions: Journal `SW_TarisSectMedic` Equal 5. response: “Jhalasha is difficult to communicate with at times, but I'm sure you'll find others in the medical field on Manaan who can assist you with him.”.

```text
StopSound "KelliMed3"
PlaySound3D "KelliMed2"
Journal SW_TarisSectMedic 5
```
- Dialogue INFO `20994524390401541` under topic **Medical Sector**; speaker Shade Vendas (`SW_ShadeTower`). locations: `Taris, Central Plaza: Capital Tower`. conditions: Journal `SW_TarisSectMedic` Equal 0. response: “The rakghoul disease is rampant, and many people are ill from other ailments. There is a doctor named Jhalasha on Manaan who I think can help. He is... difficult. He suffers from a mental health disorder called multiple personality disorder, so he may be hard to catch at the right time. But one of his personalities knows me and my family well, and I know if you can catch it then he will come to our aid.”.

```text
StopSound "KelliMed3"
PlaySound3D "KelliMed1"
Journal SW_TarisSectMedic 5
```

### Stage 10

I found Jhalasha but he doesn't seem willing to help. Maybe I should ask around and see if I can find other aid from this planet.

**How this stage is set:**
- Dialogue INFO `571821641185210504` under topic **Medical Sector**; speaker Doctor Jhalasha (`SW_JhalashaShop`). locations: `Manaan, Derivian's Waterwear`. conditions: Journal `SW_TarisSectMedic` Less 20. response: “I think you have the wrong person, I'm just trying to explore this new reef.”.

```text
Journal SW_TarisSectMedic 10
```
- Dialogue INFO `12106223102884913388` under topic **Medical Sector**; speaker Doctor Jhalasha (`SW_JhalashaKolto`). locations: `Manaan, Kolto Processing Facility`. conditions: Journal `SW_TarisSectMedic` Less 20. response: “I told you I'm busy. I can't help you.”.

```text
Journal SW_TarisSectMedic 10
```

### Stage 15

I've learned Jhalasha will in fact help, and that one of his personalities leaves notes for the other ones in order to accomplish his tasks throughout the week. I've learned that I should find him between the inconvenient hours of 10 PM and 12 AM when he is most sound of mind.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 20

I've spoken with Jhalasha in his regular state. He says it will be difficult but he's made the trip to Taris numerous times, and Shade should be expecting him before long.

**How this stage is set:**
- Dialogue INFO `3850107322999028548` under topic **Medical Sector**; speaker Doctor Jhalasha (`SW_JhalashaReef`). locations: `Manaan, Melchior's Reef`. conditions: Journal `SW_TarisSectMedic` LessEqual 15. response: “Shade Vendas? I heard what happened to Taris. It's difficult but it's a trip I've made before. I'll leave here shortly and add make a note of this, you can count on my aid.”.

```text
StartScript SW_TarisCapTowerQuickBuild
Journal SW_TarisSectMedic 20
```

### Stage 25 — Finished

Shade is grateful I was able to get through to Jhalasha. I should look into other contacts we need to gather.

**How this stage is set:**
- Dialogue INFO `3026430471120526767` under topic **Medical Sector**; speaker Shade Vendas (`SW_ShadeTower`). locations: `Taris, Central Plaza: Capital Tower`. conditions: Journal `SW_TarisSectMedic` Equal 20. response: “You are a blessing to Taris, and the people will feel this blessing now that Jhalasha will be bringing his knowledge and supplies. Thank you, my friend.”.

```text
StopSound "KelliMed3"
PlaySound3D "KelliMed3"
Journal SW_TarisSectMedic 25
player->additem gold_001 1000
```

### Related records and locations

**Dialogue speakers:**
- Doctor Jhalasha (`SW_JhalashaKolto`) — `Manaan, Kolto Processing Facility`
- Doctor Jhalasha (`SW_JhalashaReef`) — `Manaan, Melchior's Reef`
- Doctor Jhalasha (`SW_JhalashaShop`) — `Manaan, Derivian's Waterwear`
- Shade Vendas (`SW_ShadeTower`) — `Taris, Central Plaza: Capital Tower`

**Scripts that read or write this journal:**
- `SW_JashaSpawnAppt` — Npc Doctor Jhalasha (`SW_JhalashaApartment`); placed in `Manaan, Apartments`
- `SW_JashaSpawnBazaar` — Npc Doctor Jhalasha (`SW_JhalashaBazaar`); placed in `Manaan, Bazaar`
- `SW_JashaSpawnDock` — Npc Doctor Jhalasha (`SW_JhalashaDocking`); placed in `Manaan, Docking Bay`
- `SW_JashaSpawnKolto` — Npc Doctor Jhalasha (`SW_JhalashaKolto`); placed in `Manaan, Kolto Processing Facility`
- `SW_JashaSpawnReef` — Npc Doctor Jhalasha (`SW_JhalashaReef`); placed in `Manaan, Melchior's Reef`
- `SW_JashaSpawnShop` — Npc Doctor Jhalasha (`SW_JhalashaShop`); placed in `Manaan, Derivian's Waterwear`
- `SW_TarisGvnBldNpcMedic` — Npc Ferjen Raymdar (`SW_TarisGvnNpc5`); placed in `Taris, Central Plaza: Government Office C`; Npc Liznin Brachar (`SW_TarisGvnNpc7`); placed in `Taris, Central Plaza: Government Office C`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Manaan, Apartments`
- `Manaan, Bazaar`
- `Manaan, Derivian's Waterwear`
- `Manaan, Docking Bay`
- `Manaan, Kolto Processing Facility`
- `Manaan, Melchior's Reef`
- `Taris, Central Plaza: Capital Tower`
- `Taris, Central Plaza: Government Office C`

<details><summary>Journal-state readers (7 code sites)</summary>

- Script `SW_JashaSpawnAppt`. attached to Npc Doctor Jhalasha (`SW_JhalashaApartment`); placed in `Manaan, Apartments`.
- Script `SW_JashaSpawnBazaar`. attached to Npc Doctor Jhalasha (`SW_JhalashaBazaar`); placed in `Manaan, Bazaar`.
- Script `SW_JashaSpawnDock`. attached to Npc Doctor Jhalasha (`SW_JhalashaDocking`); placed in `Manaan, Docking Bay`.
- Script `SW_JashaSpawnKolto`. attached to Npc Doctor Jhalasha (`SW_JhalashaKolto`); placed in `Manaan, Kolto Processing Facility`.
- Script `SW_JashaSpawnReef`. attached to Npc Doctor Jhalasha (`SW_JhalashaReef`); placed in `Manaan, Melchior's Reef`.
- Script `SW_JashaSpawnShop`. attached to Npc Doctor Jhalasha (`SW_JhalashaShop`); placed in `Manaan, Derivian's Waterwear`.
- Script `SW_TarisGvnBldNpcMedic`. attached to Npc Ferjen Raymdar (`SW_TarisGvnNpc5`); placed in `Taris, Central Plaza: Government Office C`; Npc Liznin Brachar (`SW_TarisGvnNpc7`); placed in `Taris, Central Plaza: Government Office C`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: The rakghoul disease is rampant, and many people are ill and sick from other ailments. Shade would like me to …
- [ ] Reach index `10`: I found Jhalasha but he doesn't seem willing to help. Maybe I should ask around and see if I can find other ai…
- [ ] Reach index `15`: I've learned Jhalasha will in fact help, and that one of his personalities leaves notes for the other ones in …
- [ ] Reach index `20`: I've spoken with Jhalasha in his regular state. He says it will be difficult but he's made the trip to Taris n…
- [ ] Reach index `25` (`Finished`): Shade is grateful I was able to get through to Jhalasha. I should look into other contacts we need to gather.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_TarisSectMedic`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
