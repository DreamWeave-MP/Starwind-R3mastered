---
title: "Merc Calvus (internal journal)"
description: "Walkthrough and QA reference for Merc Calvus (internal journal) (Merc_Calvus)."
weight: 8
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "Merc_Calvus"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `Merc_Calvus` |
| **Category** | Systems & Internal Journals |
| **Journal entries** | 4 |
| **Completion branches** | No explicit Finished marker |
| **Starts by** | Speak with **Rhin Ayari** in **Tatooine, Cantina** and ask about **available for hire**. |
| **Key locations** | Tatooine, Cantina |
| **Key characters** | Rhin Ayari |

## Walkthrough

### 1. Speak with Rhin Ayari in Tatooine, Cantina and ask about available for hire

Speak with **Rhin Ayari** in **Tatooine, Cantina** and ask about **available for hire**.

> **Expected journal update — index 1:** I've hired the mercenary Rhin Ayari as a bodyguard and companion for a thirty-day contract. He will follow me everywhere, and fight when I fight. I should keep him healthy and safe. He will follow or stay, at my command. If I want to change the plan, I should just talk to him about it.

### 2. Find Rhin Ayari in Tatooine, Cantina and complete the encounter

Find **Rhin Ayari** in **Tatooine, Cantina** and complete the encounter.

> **Expected journal update — index 10:** The mercenary Rhin Ayari has completed his first thirty-day contract with me, and has left my service.

### 3. Speak with Rhin Ayari in Tatooine, Cantina and ask about available for hire

Speak with **Rhin Ayari** in **Tatooine, Cantina** and ask about **available for hire**.

> **Expected journal update — index 11:** I've re-hired the mercenary Rhin Ayari as a bodyguard and companion for a thirty-day contract. The terms are the same. He will follow me everywhere, and fight when I fight. I should keep him healthy and safe. He will follow or stay, at my command. If I want to change the plan, I should just talk to him about it.

### 4. Find Rhin Ayari in Tatooine, Cantina and complete the encounter

Find **Rhin Ayari** in **Tatooine, Cantina** and complete the encounter.

> **Expected journal update — index 20:** The mercenary Rhin Ayari has completed another thirty-day contract with me, and has left my service.

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Rhin Ayari** (`Calvus Horatius`) — `Tatooine, Cantina`

**Locations implicated by actor/object placement or explicit travel:**
- **Tatooine, Cantina**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `Merc_Calvus`
**Generated category:** Systems & Internal Journals
**Journal entries:** 4

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 1 | — | I've hired the mercenary Rhin Ayari as a bodyguard and companion for a thirty-day contract. He will follow me everywhere, and fight when I fight. I should keep him healthy and safe. He will follow or stay, at my command. If I want to change the plan, I should just talk to him about it. | 1 |
| 10 | — | The mercenary Rhin Ayari has completed his first thirty-day contract with me, and has left my service. | 1 |
| 11 | — | I've re-hired the mercenary Rhin Ayari as a bodyguard and companion for a thirty-day contract. The terms are the same. He will follow me everywhere, and fight when I fight. I should keep him healthy and safe. He will follow or stay, at my command. If I want to change the plan, I should just talk to him about it. | 1 |
| 20 | — | The mercenary Rhin Ayari has completed another thirty-day contract with me, and has left my service. | 1 |

### Record-level trigger map

### Stage 1

I've hired the mercenary Rhin Ayari as a bodyguard and companion for a thirty-day contract. He will follow me everywhere, and fight when I fight. I should keep him healthy and safe. He will follow or stay, at my command. If I want to change the plan, I should just talk to him about it.

**How this stage is set:**
- Dialogue INFO `180439746220217800` under topic **available for hire**; speaker Rhin Ayari (`Calvus Horatius`). locations: `Tatooine, Cantina`. conditions: Function/Choice Equal 3. response: “Good. Our contract is for 30 days. Here are the terms. I follow you everywhere, and fight when you fight. I'm always on duty. I follow or stay, at your command. And you'll keep me healthy and safe, if you want to get your money's worth. If you want to change the plan, just talk to me about it.”.

```text
additem gold_001 250
Set Contract_Calvus to 1
Journal Merc_Calvus 1
StartScript Contract_Calvus
Set Companion to 1
```

### Stage 10

The mercenary Rhin Ayari has completed his first thirty-day contract with me, and has left my service.

**How this stage is set:**
- Script `Mercenary_Calvus`. attached to Npc Rhin Ayari (`Calvus Horatius`); placed in `Tatooine, Cantina`.

```text
if ( GetJournalIndex Merc_Calvus < 10 )
                            Journal Merc_Calvus 10      ;tells player the first mercenary contract is expired
                        else
                            Journal Merc_Calvus 20      ;tells player the most recent mercenary contract is expired
```

```text
Journal Merc_Calvus 10      ;tells player the first mercenary contract is expired
                        else
                            Journal Merc_Calvus 20      ;tells player the most recent mercenary contract is expired
                    endif
```

### Stage 11

I've re-hired the mercenary Rhin Ayari as a bodyguard and companion for a thirty-day contract. The terms are the same. He will follow me everywhere, and fight when I fight. I should keep him healthy and safe. He will follow or stay, at my command. If I want to change the plan, I should just talk to him about it.

**How this stage is set:**
- Dialogue INFO `764412791127635506` under topic **available for hire**; speaker Rhin Ayari (`Calvus Horatius`). locations: `Tatooine, Cantina`. conditions: Function/Choice Equal 4. response: “Good. Our contract is for 30 days. Here are the terms. I follow you everywhere, and fight when you fight. I'm always on duty. I follow or stay, at your command. And you'll keep me healthy and safe, if you want to get your money's worth. If you want to change the plan, just talk to me about it.”.

```text
additem gold_001 250
Set Contract_Calvus to 1
Journal Merc_Calvus 11
StartScript Contract_Calvus
Set Companion to 1
```

### Stage 20

The mercenary Rhin Ayari has completed another thirty-day contract with me, and has left my service.

**How this stage is set:**
- Script `Mercenary_Calvus`. attached to Npc Rhin Ayari (`Calvus Horatius`); placed in `Tatooine, Cantina`.

```text
if ( GetJournalIndex Merc_Calvus < 10 )
                            Journal Merc_Calvus 10      ;tells player the first mercenary contract is expired
                        else
                            Journal Merc_Calvus 20      ;tells player the most recent mercenary contract is expired
```

```text
Journal Merc_Calvus 10      ;tells player the first mercenary contract is expired
                        else
                            Journal Merc_Calvus 20      ;tells player the most recent mercenary contract is expired
                    endif
```

### Related records and locations

**Dialogue speakers:**
- Rhin Ayari (`Calvus Horatius`) — `Tatooine, Cantina`

**Scripts that read or write this journal:**
- `Mercenary_Calvus` — Npc Rhin Ayari (`Calvus Horatius`); placed in `Tatooine, Cantina`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Tatooine, Cantina`

<details><summary>Journal-state readers (1 code sites)</summary>

- Script `Mercenary_Calvus`. attached to Npc Rhin Ayari (`Calvus Horatius`); placed in `Tatooine, Cantina`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `1` is obtainable.
- [ ] Reach index `1`: I've hired the mercenary Rhin Ayari as a bodyguard and companion for a thirty-day contract. He will follow me …
- [ ] Reach index `10`: The mercenary Rhin Ayari has completed his first thirty-day contract with me, and has left my service.
- [ ] Reach index `11`: I've re-hired the mercenary Rhin Ayari as a bodyguard and companion for a thirty-day contract. The terms are t…
- [ ] Reach index `20`: The mercenary Rhin Ayari has completed another thirty-day contract with me, and has left my service.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `Merc_Calvus`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
