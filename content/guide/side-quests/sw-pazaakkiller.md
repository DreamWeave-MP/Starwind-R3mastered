---
title: "Pazaak Killer"
description: "Walkthrough and QA reference for Pazaak Killer (SW_PazaakKiller)."
weight: 60
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_PazaakKiller"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_PazaakKiller` |
| **Category** | Side Quests |
| **Journal entries** | 4 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Yapda Hopkyo** in **Nar Shaddaa, Cantina** and ask about **dead person**. |
| **Key locations** | Nar Shaddaa, Cantina, Nar Shaddaa, Lower City |
| **Key characters** | Yapda Hopkyo, `SW_PazaakKiller` — `Nar Shaddaa, Lower City` |

## Walkthrough

### 1. Speak with Yapda Hopkyo in Nar Shaddaa, Cantina and ask about dead person

Speak with **Yapda Hopkyo** in **Nar Shaddaa, Cantina** and ask about **dead person**.

> **Expected journal update — index 5:** Someone has been killing pazaak players on Nar Shaddaa. I should ask around and see if I can find out anything.

### 2. Speak with the relevant character in Nar Shaddaa, Lower City and ask about Pazaak Killer

Speak with **the relevant character** in **Nar Shaddaa, Lower City** and ask about **Pazaak Killer**.

> **Expected journal update — index 10:** I was attacked by the Pazaak Killer, he was out on the street and I was asking around about the killer and told him I was a pazaak player. He immediately attacked me and I was forced to defend myself.

### 3. Speak with Yapda Hopkyo in Nar Shaddaa, Cantina and ask about dead person — Finished

Speak with **Yapda Hopkyo** in **Nar Shaddaa, Cantina** and ask about **dead person**.

> **Expected journal update — index 15:** I turned in the information about killing the Pazaak Killer to the bartender on Nar Shaddaa, he has awarded me with 1,000 credits.

**Known item transfer:** 1000 × **Credits** (`Gold_001`).

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 15**:

> I turned in the information about killing the Pazaak Killer to the bartender on Nar Shaddaa, he has awarded me with 1,000 credits.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 1000 × **Credits** (`Gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Yapda Hopkyo** (`SW_BartenderNar`) — `Nar Shaddaa, Cantina`
- **`SW_PazaakKiller` — `Nar Shaddaa, Lower City`** (``)

**Locations implicated by actor/object placement or explicit travel:**
- **Nar Shaddaa, Cantina**
- **Nar Shaddaa, Lower City**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_PazaakKiller`
**Generated category:** Side Quests
**Journal entries:** 4

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | Someone has been killing pazaak players on Nar Shaddaa. I should ask around and see if I can find out anything. | 1 |
| 10 | — | I was attacked by the Pazaak Killer, he was out on the street and I was asking around about the killer and told him I was a pazaak player. He immediately attacked me and I was forced to defend myself. | 1 |
| 15 | Finished | I turned in the information about killing the Pazaak Killer to the bartender on Nar Shaddaa, he has awarded me with 1,000 credits. | 1 |

### Record-level trigger map

### Stage 5

Someone has been killing pazaak players on Nar Shaddaa. I should ask around and see if I can find out anything.

**How this stage is set:**
- Dialogue INFO `26188253932879130101` under topic **dead person**; speaker Yapda Hopkyo (`SW_BartenderNar`). locations: `Nar Shaddaa, Cantina`. conditions: Journal `SW_PazaakKiller` Equal 0. response: “Yeah some guy has been running around killing pazaak players, they've been appropriately calling him the Pazaak Killer. No one has been able to see his face or identify him in any way. I'll reward anyone who can take the guy out.”.

```text
Journal SW_PazaakKiller 5
AddTopic "Pazaak Killer"
```

### Stage 10

I was attacked by the Pazaak Killer, he was out on the street and I was asking around about the killer and told him I was a pazaak player. He immediately attacked me and I was forced to defend myself.

**How this stage is set:**
- Dialogue INFO `27792188662192710561` under topic **Pazaak Killer**; speaker `SW_PazaakKiller`. locations: `Nar Shaddaa, Lower City`. conditions: Function/Choice Equal 2. response: “Well in that case...”.

```text
StartCombat Player
Journal SW_PazaakKiller 10
```

### Stage 15 — Finished

I turned in the information about killing the Pazaak Killer to the bartender on Nar Shaddaa, he has awarded me with 1,000 credits.

**How this stage is set:**
- Dialogue INFO `333922732855419473` under topic **dead person**; speaker Yapda Hopkyo (`SW_BartenderNar`). locations: `Nar Shaddaa, Cantina`. conditions: Journal `SW_PazaakKiller` Equal 10. response: “Now that's what I'm talking about, with all the bounty hunters around here no one was able to get that guy. Maybe just luck, huh? Glad you took care of that problem for us, here's 1,000 credits, now by a drink or get out.”.

```text
Journal SW_PazaakKiller 15
player->additem "Gold_001", 1000
```

### Related records and locations

**Dialogue speakers:**
- Yapda Hopkyo (`SW_BartenderNar`) — `Nar Shaddaa, Cantina`
- `SW_PazaakKiller` — `Nar Shaddaa, Lower City`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Nar Shaddaa, Cantina`
- `Nar Shaddaa, Lower City`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: Someone has been killing pazaak players on Nar Shaddaa. I should ask around and see if I can find out anything…
- [ ] Reach index `10`: I was attacked by the Pazaak Killer, he was out on the street and I was asking around about the killer and tol…
- [ ] Reach index `15` (`Finished`): I turned in the information about killing the Pazaak Killer to the bartender on Nar Shaddaa, he has awarded me…
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_PazaakKiller`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
