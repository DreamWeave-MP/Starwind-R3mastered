---
title: "Rakanishu"
description: "Walkthrough and QA reference for Rakanishu (SW_Rakanishu)."
weight: 62
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_Rakanishu"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_Rakanishu` |
| **Category** | Side Quests |
| **Journal entries** | 6 |
| **Completion branches** | 2 |
| **Starts by** | Record route requires playtest verification. |
| **Key locations** | Manaan, Bazaar |
| **Key characters** | Rakanishu |

## Walkthrough

### 1. Reach journal stage 5

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 5:** I have met again with Rakanishu on Manaan.

### 2. Reach journal stage 10

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 10:** I have swindled Rakanishu into giving me a reward for saving him, he will not speak to me again.

### 3. Speak with Rakanishu in Manaan, Bazaar

Speak with **Rakanishu** in **Manaan, Bazaar**.

> **Expected journal update — index 15:** Rakanishu is on Manaan seeking a different life than he had on Tatooine. He is tired of the hostility of the desert.

### 4. Speak with Rakanishu in Manaan, Bazaar and ask about different life — Finished

The records expose more than one way to reach this journal update:
- Speak with **Rakanishu** in **Manaan, Bazaar** and ask about **different life**.
- Speak with **Rakanishu** in **Manaan, Bazaar**.

> **Expected journal update — index 20:** I have offended Rakanishu and he will not speak to me again.

**Known item transfer:** 400 × **Credits** (`gold_001`).

**Outcome:** this journal entry is marked as a finished branch.

### 5. Speak with Rakanishu in Manaan, Bazaar and ask about different life — Finished

Speak with **Rakanishu** in **Manaan, Bazaar** and ask about **different life**.

> **Expected journal update — index 25:** I have recruited Rakanishu in joining me in exploring the galaxy.

**Outcome:** this journal entry is marked as a finished branch.

{% callout(kind="warning", title="Playtest flag") %}
2 journal stages on this page lack a literal setter in the current static scan.
{% end %}

## Endings & branches

The journal has **2 explicit finished entries**. Treat them as branch coverage targets during playtesting:

- **Index 20:** I have offended Rakanishu and he will not speak to me again.
- **Index 25:** I have recruited Rakanishu in joining me in exploring the galaxy.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 400 × **Credits** (`gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Rakanishu** (`SW_JawaComp`) — `Manaan, Bazaar`

**Locations implicated by actor/object placement or explicit travel:**
- **Manaan, Bazaar**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_Rakanishu`
**Generated category:** Side Quests
**Journal entries:** 6

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | I have met again with Rakanishu on Manaan. | 0 |
| 10 | — | I have swindled Rakanishu into giving me a reward for saving him, he will not speak to me again. | 0 |
| 15 | — | Rakanishu is on Manaan seeking a different life than he had on Tatooine. He is tired of the hostility of the desert. | 1 |
| 20 | Finished | I have offended Rakanishu and he will not speak to me again. | 2 |
| 25 | Finished | I have recruited Rakanishu in joining me in exploring the galaxy. | 1 |

### Record-level trigger map

### Stage 5

I have met again with Rakanishu on Manaan.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 10

I have swindled Rakanishu into giving me a reward for saving him, he will not speak to me again.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 15

Rakanishu is on Manaan seeking a different life than he had on Tatooine. He is tired of the hostility of the desert.

**How this stage is set:**
- Dialogue INFO `1873853411594623813` under topic **Greeting 7**; speaker Rakanishu (`SW_JawaComp`). locations: `Manaan, Bazaar`. conditions: Journal `SW_Rakanishu` Equal 0; Function/Choice Equal 2. response: “Yes the life on Tatooine was hard, unforgiving, hostile, and pointless. I'm looking for a different life now.”.

```text
PlaySound3d "SW_PludetiGreet"
Journal SW_Rakanishu 15
AddTopic "different life"
```

### Stage 20 — Finished

I have offended Rakanishu and he will not speak to me again.

**How this stage is set:**
- Dialogue INFO `246811771860311411` under topic **different life**; speaker Rakanishu (`SW_JawaComp`). locations: `Manaan, Bazaar`. conditions: Journal `SW_Rakanishu` Equal 15; Function/Choice Equal 1. response: “Bantha fodder! Leave me be.”.

```text
PlaySound3d "SW_PludetiGreet"
Journal SW_Rakanishu 20
goodbye
```
- Dialogue INFO `22868133221692221238` under topic **Greeting 7**; speaker Rakanishu (`SW_JawaComp`). locations: `Manaan, Bazaar`. conditions: Journal `SW_Rakanishu` Equal 0; Function/Choice Equal 1. response: “A reward? Here, take these credits, and do not speak to me again.”.

```text
PlaySound3d "SW_PludetiGreet"
Journal SW_Rakanishu 20
player->additem "gold_001", 400
```

### Stage 25 — Finished

I have recruited Rakanishu in joining me in exploring the galaxy.

**How this stage is set:**
- Dialogue INFO `28595226821842927321` under topic **different life**; speaker Rakanishu (`SW_JawaComp`). locations: `Manaan, Bazaar`. conditions: Journal `SW_Rakanishu` Equal 15; Function/Choice Equal 2. response: “Interesting, I suppose for the time being that could be appropriate. Where to?”.

```text
PlaySound3d "SW_TtokkGreet"
Journal SW_Rakanishu 25
AddTopic "friend"
AddTopic "follow"
```

### Related records and locations

**Dialogue speakers:**
- Rakanishu (`SW_JawaComp`) — `Manaan, Bazaar`

**Scripts that read or write this journal:**
- `SW_RakanishuScript` — Npc Rakanishu (`SW_JawaComp`); placed in `Manaan, Bazaar`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Manaan, Bazaar`

<details><summary>Journal-state readers (1 code sites)</summary>

- Script `SW_RakanishuScript`. attached to Npc Rakanishu (`SW_JawaComp`); placed in `Manaan, Bazaar`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: I have met again with Rakanishu on Manaan.
- [ ] Reach index `10`: I have swindled Rakanishu into giving me a reward for saving him, he will not speak to me again.
- [ ] Reach index `15`: Rakanishu is on Manaan seeking a different life than he had on Tatooine. He is tired of the hostility of the d…
- [ ] Reach index `20` (`Finished`): I have offended Rakanishu and he will not speak to me again.
- [ ] Reach index `25` (`Finished`): I have recruited Rakanishu in joining me in exploring the galaxy.
- [ ] Branch coverage: this journal has **2 different `Finished` entries**; test each reachable completion branch.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_Rakanishu`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
