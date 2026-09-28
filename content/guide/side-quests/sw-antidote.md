---
title: "The Rooze Disease"
description: "Walkthrough and QA reference for The Rooze Disease (SW_Antidote)."
weight: 103
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_Antidote"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_Antidote` |
| **Category** | Side Quests |
| **Journal entries** | 8 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Doctor Guril** in **Tatooine, Medical Bay** and ask about **antidote**. |
| **Key locations** | Tatooine, Medical Bay, Tatooine, Sandriver, TatooineRace |
| **Key characters** | Doctor Guril, Thavo Fum, Freddie Wallery |

## Walkthrough

### 1. Speak with Doctor Guril in Tatooine, Medical Bay and ask about antidote

Speak with **Doctor Guril** in **Tatooine, Medical Bay** and ask about **antidote**.

> **Expected journal update — index 5:** Dr. Guril told me that the rooze disease is running rampant in Sandriver, and that his last shipment didn't arrive from the docking bay, which held essential ingredients for an cure he was working on.

### 2. Speak with Freddie Wallery in Tatooine, Sandriver and ask about antidote

Speak with **Freddie Wallery** in **Tatooine, Sandriver** and ask about **antidote**.

> **Expected journal update — index 10:** I talked to Freddie Wallery at the docking bay, and he swears he was moving crates down from his ship and he saw a couple Twi'leks running off with ones he already brought down. He told me to check Hungox the Hutt's arena.

### 3. Speak with Thavo Fum in Tatooine, Sandriver and ask about antidote

Speak with **Thavo Fum** in **Tatooine, Sandriver** and ask about **antidote**.

> **Expected journal update — index 15:** I spoke to Hungox the Hutt's steward, who informed me that if I want the medical ingredients then I have to do a special fight in his arena against a man who guys buy Old Ten-Toes.

### 4. Reach journal stage 16

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 16:** I have killed Old Ten-Toes, I should return to the Hutt for my reward.

### 5. Reach journal stage 18

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 18:** I have spared Old Ten-Toes, but one my arena match, I should return to the  Hutt for my reward.

### 6. Speak with Thavo Fum in Tatooine, Sandriver and ask about antidote

Speak with **Thavo Fum** in **Tatooine, Sandriver** and ask about **antidote**.

> **Expected journal update — index 20:** I have received the medical ingredients, I should get them to the medical bay so Dr. Guril can get working on the cure.

### 7. Speak with Doctor Guril in Tatooine, Medical Bay and ask about antidote — Finished

Speak with **Doctor Guril** in **Tatooine, Medical Bay** and ask about **antidote**.

> **Expected journal update — index 22:** Dr. Guril was overjoyed when I gave him the ingredients, he awarded me with 100 gold and a couple medkits.

**Known item transfer:** 1 × **Bavakar Cardio Package** (`SW_ImplantHealthMinor`).

**Outcome:** this journal entry is marked as a finished branch.

{% callout(kind="warning", title="Playtest flag") %}
2 journal stages on this page lack a literal setter in the current static scan.
{% end %}

## Endings & branches

The journal has one explicit finished state at **index 22**:

> Dr. Guril was overjoyed when I gave him the ingredients, he awarded me with 100 gold and a couple medkits.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 1 × **Bavakar Cardio Package** (`SW_ImplantHealthMinor`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Doctor Guril** (`SW_DrGuril`) — `Tatooine, Medical Bay`
- **Thavo Fum** (`SW_HungoxSteward`) — `Tatooine, Sandriver`, `TatooineRace`
- **Freddie Wallery** (`SW_Wallery`) — `Tatooine, Sandriver`

**Locations implicated by actor/object placement or explicit travel:**
- **Tatooine, Medical Bay**
- **Tatooine, Sandriver**
- **TatooineRace**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_Antidote`
**Generated category:** Side Quests
**Journal entries:** 8

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | Dr. Guril told me that the rooze disease is running rampant in Sandriver, and that his last shipment didn't arrive from the docking bay, which held essential ingredients for an cure he was working on. | 1 |
| 10 | — | I talked to Freddie Wallery at the docking bay, and he swears he was moving crates down from his ship and he saw a couple Twi'leks running off with ones he already brought down. He told me to check Hungox the Hutt's arena. | 1 |
| 15 | — | I spoke to Hungox the Hutt's steward, who informed me that if I want the medical ingredients then I have to do a special fight in his arena against a man who guys buy Old Ten-Toes. | 1 |
| 16 | — | I have killed Old Ten-Toes, I should return to the Hutt for my reward. | 0 |
| 18 | — | I have spared Old Ten-Toes, but one my arena match, I should return to the  Hutt for my reward. | 0 |
| 20 | — | I have received the medical ingredients, I should get them to the medical bay so Dr. Guril can get working on the cure. | 1 |
| 22 | Finished | Dr. Guril was overjoyed when I gave him the ingredients, he awarded me with 100 gold and a couple medkits. | 1 |

### Record-level trigger map

### Stage 5

Dr. Guril told me that the rooze disease is running rampant in Sandriver, and that his last shipment didn't arrive from the docking bay, which held essential ingredients for an cure he was working on.

**How this stage is set:**
- Dialogue INFO `2439172031818010947` under topic **antidote**; speaker Doctor Guril (`SW_DrGuril`). locations: `Tatooine, Medical Bay`. conditions: Journal `SW_Antidote` Equal 0. response: “There are a couple ingredients I need, if you are interested. I'm attempting to create a substance that cures or, at least controls or sustains, the disease. I've almost got it, but my shipment didn't arrive from the docking bay. Beings that I am here holding down the medical bay I need someone to see why my shipment hasn't arrived. Sands, I hope it wasn't pirates!”.

```text
Journal "SW_Antidote" 5
PlaySound3d "GurilAntid1"
StopSound "GurilAntid2"
```

### Stage 10

I talked to Freddie Wallery at the docking bay, and he swears he was moving crates down from his ship and he saw a couple Twi'leks running off with ones he already brought down. He told me to check Hungox the Hutt's arena.

**How this stage is set:**
- Dialogue INFO `2666162042243014321` under topic **antidote**; speaker Freddie Wallery (`SW_Wallery`). locations: `Tatooine, Sandriver`. conditions: Journal `SW_Antidote` Equal 5. response: “Look I know I messed up. I was hauling crates down from my ship and when I came back with a crate I saw two Twi'leks running off with two I already brought down. They had to of been two of Hungox the Hutt's men, I know it! Please, see if you can get them back. The Czerka Corporation is going to kill me if they find out, not literally, but they will fire me.”.

```text
Journal "SW_Antidote" 10
PlaySound3d "SW_WalleryAntidote"
StopSound "SW_WalleryMurders"
```

### Stage 15

I spoke to Hungox the Hutt's steward, who informed me that if I want the medical ingredients then I have to do a special fight in his arena against a man who guys buy Old Ten-Toes.

**How this stage is set:**
- Dialogue INFO `298828281239731115` under topic **antidote**; speaker Thavo Fum (`SW_HungoxSteward`). locations: `Tatooine, Sandriver`, `TatooineRace`. conditions: Journal `SW_Antidote` Equal 10. response: “Yeah, we took them. You want them back? Hungox the Hutt already said whoever wants any stolen goods back has to do a special match for him. There is a man that goes by Old Ten-Toes that keeps coming in here. His time is up, we want you to step into the dueling arena and take him down.”.

```text
Journal "SW_Antidote" 15
StopSound "ThavoAntidote1"
StopSound "ThavoAntidote2"
```

### Stage 16

I have killed Old Ten-Toes, I should return to the Hutt for my reward.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 18

I have spared Old Ten-Toes, but one my arena match, I should return to the  Hutt for my reward.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 20

I have received the medical ingredients, I should get them to the medical bay so Dr. Guril can get working on the cure.

**How this stage is set:**
- Dialogue INFO `1019622902233695392` under topic **antidote**; speaker Thavo Fum (`SW_HungoxSteward`). locations: `Tatooine, Sandriver`, `TatooineRace`. conditions: Journal `SW_Antidote` Equal 15; Item/ItemType `SW_TenToesBigToe` GreaterEqual 1. response: “Haha, you killed him all right. I watched the whole thing! Here, take the goods, we didn't need them anyway. And come back if you ever want your next duel. We've always got young bodies looking to die here.”.

```text
Journal "SW_Antidote" 20
Journal "SW_ArenaFight" 1
player->removeitem "SW_TenToesBigToe",1
```

### Stage 22 — Finished

Dr. Guril was overjoyed when I gave him the ingredients, he awarded me with 100 gold and a couple medkits.

**How this stage is set:**
- Dialogue INFO `177569219566028595` under topic **antidote**; speaker Doctor Guril (`SW_DrGuril`). locations: `Tatooine, Medical Bay`. conditions: Item/ItemType `SW_MedShip` GreaterEqual 1; Journal `SW_Antidote` Equal 20. response: “I don't know how you did it, and I don't want to know. If you're hurt I'll fix you up, here, take this medkit, and this, it may save your life. Again, thank you, you've saved multiple lives today.”.

```text
Journal "SW_Antidote" 22
player->removeitem "SW_MedShip",1
player-> additem"SW_ImplantHealthMinor", 1
```

### Related records and locations

**Dialogue speakers:**
- Doctor Guril (`SW_DrGuril`) — `Tatooine, Medical Bay`
- Thavo Fum (`SW_HungoxSteward`) — `Tatooine, Sandriver`, `TatooineRace`
- Freddie Wallery (`SW_Wallery`) — `Tatooine, Sandriver`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)
- Bavakar Cardio Package (`SW_ImplantHealthMinor`)
- Medkit (`SW_Medkit`)
- Medical Shipment (`SW_MedShip`)
- Ten-Toes Big Toe (`SW_TenToesBigToe`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Tatooine, Medical Bay`
- `Tatooine, Sandriver`
- `TatooineRace`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: Dr. Guril told me that the rooze disease is running rampant in Sandriver, and that his last shipment didn't ar…
- [ ] Reach index `10`: I talked to Freddie Wallery at the docking bay, and he swears he was moving crates down from his ship and he s…
- [ ] Reach index `15`: I spoke to Hungox the Hutt's steward, who informed me that if I want the medical ingredients then I have to do…
- [ ] Reach index `16`: I have killed Old Ten-Toes, I should return to the Hutt for my reward.
- [ ] Reach index `18`: I have spared Old Ten-Toes, but one my arena match, I should return to the  Hutt for my reward.
- [ ] Reach index `20`: I have received the medical ingredients, I should get them to the medical bay so Dr. Guril can get working on …
- [ ] Reach index `22` (`Finished`): Dr. Guril was overjoyed when I gave him the ingredients, he awarded me with 100 gold and a couple medkits.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_Antidote`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
