---
title: "Lavigne Expeditions"
description: "Walkthrough and QA reference for Lavigne Expeditions (SW_ExpExpeditions)."
weight: 5
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_ExpExpeditions"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_ExpExpeditions` |
| **Category** | Expansion / PlanExp |
| **Journal entries** | 4 |
| **Completion branches** | No explicit Finished marker |
| **Starts by** | Speak with **Jean Lavigne** in **Dantooine, Lavigne Estate** and ask about **expedition**. |
| **Key locations** | Dantooine, Lavigne Estate |
| **Key characters** | Jean Lavigne |

## Walkthrough

### 1. Speak with Jean Lavigne in Dantooine, Lavigne Estate and ask about expedition

Speak with **Jean Lavigne** in **Dantooine, Lavigne Estate** and ask about **expedition**.

> **Expected journal update — index 5:** Jean Lavigne on Dantooine has advised that he is exploring the nearby sea and that he has lost communications with his submersible ship. He has asked that if I come across any evidence of his ship to return it to him.

### 2. Speak with Jean Lavigne in Dantooine, Lavigne Estate and ask about expedition

Speak with **Jean Lavigne** in **Dantooine, Lavigne Estate** and ask about **expedition**.

> **Expected journal update — index 10:** I've returned to Jean with the logs from his submersible ship. He's advised that the logs reveal what they were looking for and asked if I would be willing to go on the second expedition. He's willing to pay 10,000 credits for a treasure hidden inside of a grotto in the same area of the Dantooine sea.

**Known item transfer:** 1 × **Lavigne Mysterious Key** (`SW_ExpLavigneUnKey`).

### 3. Speak with Jean Lavigne in Dantooine, Lavigne Estate and ask about expedition

Speak with **Jean Lavigne** in **Dantooine, Lavigne Estate** and ask about **expedition**.

> **Expected journal update — index 15:** I have returned with the ancient object found within a temple I discovered underneath the seaside. Jean has honored his charter and has paid me 10,000 credits.

**Known item transfer:** 10000 × **Credits** (`gold_001`).

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 1 × **Lavigne Mysterious Key** (`SW_ExpLavigneUnKey`)
- 10000 × **Credits** (`gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Jean Lavigne** (`SW_ExpLavJo`) — `Dantooine, Lavigne Estate`

**Locations implicated by actor/object placement or explicit travel:**
- **Dantooine, Lavigne Estate**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_ExpExpeditions`
**Generated category:** Expansion / PlanExp
**Journal entries:** 4

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | Jean Lavigne on Dantooine has advised that he is exploring the nearby sea and that he has lost communications with his submersible ship. He has asked that if I come across any evidence of his ship to return it to him. | 1 |
| 10 | — | I've returned to Jean with the logs from his submersible ship. He's advised that the logs reveal what they were looking for and asked if I would be willing to go on the second expedition. He's willing to pay 10,000 credits for a treasure hidden inside of a grotto in the same area of the Dantooine sea. | 1 |
| 15 | — | I have returned with the ancient object found within a temple I discovered underneath the seaside. Jean has honored his charter and has paid me 10,000 credits. | 1 |

### Record-level trigger map

### Stage 5

Jean Lavigne on Dantooine has advised that he is exploring the nearby sea and that he has lost communications with his submersible ship. He has asked that if I come across any evidence of his ship to return it to him.

**How this stage is set:**
- Dialogue INFO `2896326895300216423` under topic **expedition**; speaker Jean Lavigne (`SW_ExpLavJo`). locations: `Dantooine, Lavigne Estate`. conditions: Journal `SW_ExpExpeditions` Equal 0. response: “I'm a scholar of the ancient world. I recently chartered a submersible ship to investigate a legend of an ancient site that was buried in the sands just off the coast nearby. It would be deep underwater by my calculations, although I've lost communications with my ship crew. I'd be willing to reward anyone who found evidence of what has happened to them.”.

```text
Journal SW_ExpExpeditions 5
```

### Stage 10

I've returned to Jean with the logs from his submersible ship. He's advised that the logs reveal what they were looking for and asked if I would be willing to go on the second expedition. He's willing to pay 10,000 credits for a treasure hidden inside of a grotto in the same area of the Dantooine sea.

**How this stage is set:**
- Dialogue INFO `25853218631942729731` under topic **expedition**; speaker Jean Lavigne (`SW_ExpLavJo`). locations: `Dantooine, Lavigne Estate`. conditions: Journal `SW_ExpExpeditions` Equal 5; Item/ItemType `SW_ExpLavigneLogs` GreaterEqual 1. response: “It is as I suspected then. Here are some credits for your work. You wouldn't happen to be interested in a charter, would you? I need a second crew now. There is a grotto in the same area that the submersible went down, whatever was down there must have interrupted the ship's systems, so I can only trust that a diving team would be able to do the job. I've made copies of these keys, take one. If I'm correct, and if these logs are correct, this key should open what is inside of the grotto.”.

```text
Journal SW_ExpExpeditions 10
player->removeitem SW_ExpLavigneLogs 1
player->additem SW_ExpLavigneUnKey 1
```

### Stage 15

I have returned with the ancient object found within a temple I discovered underneath the seaside. Jean has honored his charter and has paid me 10,000 credits.

**How this stage is set:**
- Dialogue INFO `2549529485536223065` under topic **expedition**; speaker Jean Lavigne (`SW_ExpLavJo`). locations: `Dantooine, Lavigne Estate`. conditions: Journal `SW_ExpExpeditions` Equal 10; Item/ItemType `SW_ExpHolocron` GreaterEqual 1. response: “10,000 credits, per our contract. If you haven't already, you might want to speak with my sister inside for more work. I hear she's making a mess of things with the expansion to our manor.”.

```text
player->removeitem SW_ExpHolocron 1
player->additem gold_001 10000
Journal SW_ExpExpeditions 15
```

### Related records and locations

**Dialogue speakers:**
- Jean Lavigne (`SW_ExpLavJo`) — `Dantooine, Lavigne Estate`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)
- Ancient Holocron (`SW_ExpHolocron`)
- Lavigne Ship Logs (`SW_ExpLavigneLogs`)
- Lavigne Mysterious Key (`SW_ExpLavigneUnKey`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Dantooine, Lavigne Estate`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: Jean Lavigne on Dantooine has advised that he is exploring the nearby sea and that he has lost communications …
- [ ] Reach index `10`: I've returned to Jean with the logs from his submersible ship. He's advised that the logs reveal what they wer…
- [ ] Reach index `15`: I have returned with the ancient object found within a temple I discovered underneath the seaside. Jean has ho…
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_ExpExpeditions`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
