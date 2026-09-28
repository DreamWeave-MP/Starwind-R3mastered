---
title: "A Lost Miner"
description: "Walkthrough and QA reference for A Lost Miner (SW_DantBroth)."
weight: 4
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_DantBroth"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_DantBroth` |
| **Category** | Side Quests |
| **Journal entries** | 3 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Qaec Ztez** in **Nar Shaddaa, Cantina** and ask about **my brother**. |
| **Key locations** | Nar Shaddaa, Cantina |
| **Key characters** | Qaec Ztez |

## Walkthrough

### 1. Speak with Qaec Ztez in Nar Shaddaa, Cantina and ask about my brother

Speak with **Qaec Ztez** in **Nar Shaddaa, Cantina** and ask about **my brother**.

> **Expected journal update — index 5:** I met a Rodian named Qaec Ztez in the Nar Shaddaa Cantina who is trying to get a hold of his brother on Dantooine, if I run across a Vin Ztez I should let him know.

### 2. Speak with Qaec Ztez in Nar Shaddaa, Cantina and ask about my brother — Finished

Speak with **Qaec Ztez** in **Nar Shaddaa, Cantina** and ask about **my brother**.

> **Expected journal update — index 10:** I gave Qaec the datapad I found of his brother's and gave him the news. He wasn't as heartbroken as I had feared, he had time to prepare for this situation already.

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 10**:

> I gave Qaec the datapad I found of his brother's and gave him the news. He wasn't as heartbroken as I had feared, he had time to prepare for this situation already.

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Qaec Ztez** (`SW_DantBrother`) — `Nar Shaddaa, Cantina`

**Locations implicated by actor/object placement or explicit travel:**
- **Nar Shaddaa, Cantina**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_DantBroth`
**Generated category:** Side Quests
**Journal entries:** 3

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | I met a Rodian named Qaec Ztez in the Nar Shaddaa Cantina who is trying to get a hold of his brother on Dantooine, if I run across a Vin Ztez I should let him know. | 1 |
| 10 | Finished | I gave Qaec the datapad I found of his brother's and gave him the news. He wasn't as heartbroken as I had feared, he had time to prepare for this situation already. | 1 |

### Record-level trigger map

### Stage 5

I met a Rodian named Qaec Ztez in the Nar Shaddaa Cantina who is trying to get a hold of his brother on Dantooine, if I run across a Vin Ztez I should let him know.

**How this stage is set:**
- Dialogue INFO `920735901819727353` under topic **my brother**; speaker Qaec Ztez (`SW_DantBrother`). locations: `Nar Shaddaa, Cantina`. conditions: Journal `SW_DantBroth` Equal 0. response: “Yeah my brother went off to work in a mine that the Czerka was hiring for on Dantooine. This was a couple years ago, but he never came back and I haven't heard from him since. If you happen that way and run in to him tell him to reach out to me? His name is Vin Ztez.”.

```text
Journal SW_DantBroth 5
```

### Stage 10 — Finished

I gave Qaec the datapad I found of his brother's and gave him the news. He wasn't as heartbroken as I had feared, he had time to prepare for this situation already.

**How this stage is set:**
- Dialogue INFO `824434772709031883` under topic **my brother**; speaker Qaec Ztez (`SW_DantBrother`). locations: `Nar Shaddaa, Cantina`. conditions: Journal `SW_DantBroth` Equal 5; Item/ItemType `SW_DantBrotherData` GreaterEqual 1. response: “That's one wild story, but this is his datapad. He's had it as long as I can remember. It's amazing how something terrible happening so far away can reach us all the way over here. Thank you, I have nothing to give, but I am very grateful that at least I know now.”.

```text
Journal SW_DantBroth 10
moddisposition 100
```

### Related records and locations

**Dialogue speakers:**
- Qaec Ztez (`SW_DantBrother`) — `Nar Shaddaa, Cantina`

**Cells implicated by actor/object placement or explicit travel code:**
- `Nar Shaddaa, Cantina`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: I met a Rodian named Qaec Ztez in the Nar Shaddaa Cantina who is trying to get a hold of his brother on Dantoo…
- [ ] Reach index `10` (`Finished`): I gave Qaec the datapad I found of his brother's and gave him the news. He wasn't as heartbroken as I had fear…
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_DantBroth`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
