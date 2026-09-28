---
title: "Mining Protocol"
description: "Walkthrough and QA reference for Mining Protocol (SW_MiningProtocol)."
weight: 52
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_MiningProtocol"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_MiningProtocol` |
| **Category** | Side Quests |
| **Journal entries** | 6 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Protocol Droid** in **Dantooine, Terenthium Mine**. |
| **Key locations** | Dantooine, Czerka Mining Office, Dantooine, Terenthium Mine |
| **Key characters** | Czerka Protocol Officer, Protocol Droid |

## Walkthrough

### 1. Speak with Protocol Droid in Dantooine, Terenthium Mine

Speak with **Protocol Droid** in **Dantooine, Terenthium Mine**.

> **Expected journal update — index 5:** I have found a droid in the Terenthium Mine on Dantooine that needs escort back to the Mining Office outside.

### 2. Speak with Protocol Droid in Dantooine, Terenthium Mine and ask about help me

Speak with **Protocol Droid** in **Dantooine, Terenthium Mine** and ask about **help me**.

> **Expected journal update — index 10:** I have decided to help the droid return to the mining office.

### 3. Reach journal stage 15

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 15:** The Czerka Corporation droid has died in my company.

### 4. Speak with Protocol Droid in Dantooine, Terenthium Mine

Speak with **Protocol Droid** in **Dantooine, Terenthium Mine**.

> **Expected journal update — index 20:** I have safely returned the droid from the Terenthium Mine. I should speak to its owners for a reward.

### 5. Speak with Czerka Protocol Officer in Dantooine, Czerka Mining Office and ask about help me — Finished

Speak with **Czerka Protocol Officer** in **Dantooine, Czerka Mining Office** and ask about **help me**.

> **Expected journal update — index 25:** The Czerka Corporation was very pleased that I returned their droid and rewarded me with 500 credits.

**Known item transfer:** 500 × **Credits** (`gold_001`).

**Outcome:** this journal entry is marked as a finished branch.

> **Playtest flag:** 1 journal stage on this page lack a literal setter in the current static scan.

## Endings & branches

The journal has one explicit finished state at **index 25**:

> The Czerka Corporation was very pleased that I returned their droid and rewarded me with 500 credits.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 500 × **Credits** (`gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Czerka Protocol Officer** (`SW_CzerkaMineHead`) — `Dantooine, Czerka Mining Office`
- **Protocol Droid** (`SW_ProtocolTerenth`) — `Dantooine, Terenthium Mine`

**Locations implicated by actor/object placement or explicit travel:**
- **Dantooine, Czerka Mining Office**
- **Dantooine, Terenthium Mine**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_MiningProtocol`
**Generated category:** Side Quests
**Journal entries:** 6

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | I have found a droid in the Terenthium Mine on Dantooine that needs escort back to the Mining Office outside. | 1 |
| 10 | — | I have decided to help the droid return to the mining office. | 2 |
| 15 | — | The Czerka Corporation droid has died in my company. | 0 |
| 20 | — | I have safely returned the droid from the Terenthium Mine. I should speak to its owners for a reward. | 1 |
| 25 | Finished | The Czerka Corporation was very pleased that I returned their droid and rewarded me with 500 credits. | 1 |

### Record-level trigger map

### Stage 5

I have found a droid in the Terenthium Mine on Dantooine that needs escort back to the Mining Office outside.

**How this stage is set:**
- Dialogue INFO `100779496268004614` under topic **Greeting 7**; speaker Protocol Droid (`SW_ProtocolTerenth`). locations: `Dantooine, Terenthium Mine`. conditions: Journal `SW_MiningProtocol` Equal 0. response: “Ah, finally someone has sent a rescue party. You are here to help me, aren't you?”.

```text
Journal SW_MiningProtocol 5
```

### Stage 10

I have decided to help the droid return to the mining office.

**How this stage is set:**
- Dialogue INFO `312622120173707221` under topic **help me**; speaker Protocol Droid (`SW_ProtocolTerenth`). locations: `Dantooine, Terenthium Mine`. conditions: Journal `SW_MiningProtocol` Equal 5; Function/Choice Equal 2. response: “Oh my, I shall follow you then.”.

```text
"SW_ProtocolTerenth"->AiFollow, Player 0, 0, 0, 0
Journal SW_MiningProtocol 10
```
- Dialogue INFO `24332609575615890` under topic **help me**; speaker Protocol Droid (`SW_ProtocolTerenth`). locations: `Dantooine, Terenthium Mine`. conditions: Journal `SW_MiningProtocol` Equal 5; Function/Choice Equal 1. response: “Very good, very good, I shall follow you then.”.

```text
"SW_ProtocolTerenth"->AiFollow, Player 0, 0, 0, 0
Journal SW_MiningProtocol 10
```

### Stage 15

The Czerka Corporation droid has died in my company.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 20

I have safely returned the droid from the Terenthium Mine. I should speak to its owners for a reward.

**How this stage is set:**
- Dialogue INFO `113071648427686139` under topic **Greeting 7**; speaker Protocol Droid (`SW_ProtocolTerenth`). locations: `Dantooine, Terenthium Mine`. cell constraint `Dantooine, Czerka Mining Office`. conditions: Journal `SW_MiningProtocol` Equal 10. response: “And here we are, you should speak to the protocol officer for payment, I will ensure everyone here knows of your brave deed.”.

```text
Journal SW_MiningProtocol 20
"SW_ProtocolTerenth"->AIWander, 128, 0, 0, 60, 30, 10, 0, 0, 0, 0, 0, 0
```

### Stage 25 — Finished

The Czerka Corporation was very pleased that I returned their droid and rewarded me with 500 credits.

**How this stage is set:**
- Dialogue INFO `299915699150206092` under topic **help me**; speaker Czerka Protocol Officer (`SW_CzerkaMineHead`). locations: `Dantooine, Czerka Mining Office`. conditions: Journal `SW_MiningProtocol` Equal 20. response: “You've found a droid from the mine and returned it? That's exceptional news, thank you very much. You should be compensated fairly, a lot of people would have kept the droid, here's 500 credits.”.

```text
Journal SW_MiningProtocol 25
player->additem "gold_001", 500
player->ModReputation 1
```

### Related records and locations

**Dialogue speakers:**
- Czerka Protocol Officer (`SW_CzerkaMineHead`) — `Dantooine, Czerka Mining Office`
- Protocol Droid (`SW_ProtocolTerenth`) — `Dantooine, Terenthium Mine`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Dantooine, Czerka Mining Office`
- `Dantooine, Terenthium Mine`

<details><summary>Other directly addressed object IDs in related code</summary>

- Protocol Droid (`SW_ProtocolTerenth`)

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: I have found a droid in the Terenthium Mine on Dantooine that needs escort back to the Mining Office outside.
- [ ] Reach index `10`: I have decided to help the droid return to the mining office.
- [ ] Reach index `15`: The Czerka Corporation droid has died in my company.
- [ ] Reach index `20`: I have safely returned the droid from the Terenthium Mine. I should speak to its owners for a reward.
- [ ] Reach index `25` (`Finished`): The Czerka Corporation was very pleased that I returned their droid and rewarded me with 500 credits.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_MiningProtocol`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
