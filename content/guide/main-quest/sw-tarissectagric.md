---
title: "Chapter 2: Agricultural Sector"
description: "Walkthrough and QA reference for Chapter 2: Agricultural Sector (SW_TarisSectAgric)."
weight: 8
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_TarisSectAgric"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_TarisSectAgric` |
| **Category** | Main Quest |
| **Journal entries** | 8 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Shade Vendas** in **Taris, Central Plaza: Capital Tower** and ask about **Agricultural Sector**. |
| **Key locations** | Dantooine, Farmhouse, Ship Interior: The Lestat, Taris, Central Plaza: Capital Tower, Taris, Central Plaza: Government Office A, The Outer Rim |
| **Key characters** | Danir Tal'Othas, Danir Tal'Othas, Shade Vendas |

## Walkthrough

### 1. Speak with Shade Vendas in Taris, Central Plaza: Capital Tower and ask about Agricultural Sector

Speak with **Shade Vendas** in **Taris, Central Plaza: Capital Tower** and ask about **Agricultural Sector**.

> **Expected journal update — index 5:** Shade would like the agricultural plans Dantooine has, but says the estate owners are too greedy to help. She wants me to talk with some local farmers and make a plan to retreive some of their data.

### 2. Speak with Danir Tal'Othas in Dantooine, Farmhouse and ask about Agricultural Sector

Speak with **Danir Tal'Othas** in **Dantooine, Farmhouse** and ask about **Agricultural Sector**.

> **Expected journal update — index 10:** Danir Tal'Othas is one of the workers who are oppressed in the Lucienelle Estate. He said he and some others travel with droid guards by ship to Manaan from time to time to deliver exports. If I intercept their ship in space he will guide me to the terminal that shared data is stored.

### 3. Speak with Danir Tal'Othas in Ship Interior: The Lestat

Speak with **Danir Tal'Othas** in **Ship Interior: The Lestat**.

> **Expected journal update — index 15:** I met with Danir Tal'Othas on Lucienelle's ship and should make my way to their communications room.

### 4. Use Locked Console in Ship Interior: The Lestat

Use **Locked Console** in **Ship Interior: The Lestat**.

> **Expected journal update — index 20:** I've opened the way to the bridge, that will be my last stop before I can get off of The Lestat.

### 5. Use Locked Console in Ship Interior: The Lestat

Use **Locked Console** in **Ship Interior: The Lestat**.

> **Expected journal update — index 25:** I have Lucienelle's data, I should return to Shade as soon as possible.

### 6. Speak with Shade Vendas in Taris, Central Plaza: Capital Tower and ask about Agricultural Sector — Finished

Speak with **Shade Vendas** in **Taris, Central Plaza: Capital Tower** and ask about **Agricultural Sector**.

> **Expected journal update — index 30:** Shade was beyond words when I told her how I managed to retreive the data, Taris can now begin constructing an industrial facility to supply food to the citizens. I should look into other contacts that still need to be met.

**Known item transfer:** 1000 × **Credits** (`gold_001`).

**Outcome:** this journal entry is marked as a finished branch.

### 7. Reach journal stage 100

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 100:** Notes:  SW_HumanFarmerMQ SW_HumanFarmerMQDant

{% callout(kind="warning", title="Playtest flag") %}
1 journal stage on this page lack a literal setter in the current static scan.
{% end %}

## Endings & branches

The journal has one explicit finished state at **index 30**:

> Shade was beyond words when I told her how I managed to retreive the data, Taris can now begin constructing an industrial facility to supply food to the citizens. I should look into other contacts that still need to be met.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 1000 × **Credits** (`gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Danir Tal'Othas** (`SW_HumanFarmerMQ`) — `Ship Interior: The Lestat`
- **Danir Tal'Othas** (`SW_HumanFarmerMQDant`) — `Dantooine, Farmhouse`
- **Shade Vendas** (`SW_ShadeTower`) — `Taris, Central Plaza: Capital Tower`

**Locations implicated by actor/object placement or explicit travel:**
- **Dantooine, Farmhouse**
- **Ship Interior: The Lestat**
- **Taris, Central Plaza: Capital Tower**
- **Taris, Central Plaza: Government Office A**
- **The Outer Rim**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_TarisSectAgric`
**Generated category:** Main Quest
**Journal entries:** 8

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | Shade would like the agricultural plans Dantooine has, but says the estate owners are too greedy to help. She wants me to talk with some local farmers and make a plan to retreive some of their data. | 1 |
| 10 | — | Danir Tal'Othas is one of the workers who are oppressed in the Lucienelle Estate. He said he and some others travel with droid guards by ship to Manaan from time to time to deliver exports. If I intercept their ship in space he will guide me to the terminal that shared data is stored. | 1 |
| 15 | — | I met with Danir Tal'Othas on Lucienelle's ship and should make my way to their communications room. | 1 |
| 20 | — | I've opened the way to the bridge, that will be my last stop before I can get off of The Lestat. | 1 |
| 25 | — | I have Lucienelle's data, I should return to Shade as soon as possible. | 1 |
| 30 | Finished | Shade was beyond words when I told her how I managed to retreive the data, Taris can now begin constructing an industrial facility to supply food to the citizens. I should look into other contacts that still need to be met. | 1 |
| 100 | — | Notes:
<br>
<br>SW_HumanFarmerMQ
<br>SW_HumanFarmerMQDant | 0 |

### Record-level trigger map

### Stage 5

Shade would like the agricultural plans Dantooine has, but says the estate owners are too greedy to help. She wants me to talk with some local farmers and make a plan to retreive some of their data.

**How this stage is set:**
- Dialogue INFO `202049761135767665` under topic **Agricultural Sector**; speaker Shade Vendas (`SW_ShadeTower`). locations: `Taris, Central Plaza: Capital Tower`. conditions: Journal `SW_TarisSectAgric` Equal 0. response: “Our people are going to starve, and we have to find some way to produce food on this planet again. Without having the money to import it we're going to have to industrialize some type of farming system. I need you to go to Dantooine, learn what those farmers have going on there, what details are required for growing their fruits and grain and get that data back to me. If you do that we can feed the people of Taris. Now, our time there was brief, but it was apparent those people are oppressed...”.

```text
StopSound "KelliAg3"
PlaySound3D "KelliAg1"
Journal SW_TarisSectAgric 5
Choice "Continue." 1
```

### Stage 10

Danir Tal'Othas is one of the workers who are oppressed in the Lucienelle Estate. He said he and some others travel with droid guards by ship to Manaan from time to time to deliver exports. If I intercept their ship in space he will guide me to the terminal that shared data is stored.

**How this stage is set:**
- Dialogue INFO `1145010918974128428` under topic **Agricultural Sector**; speaker Danir Tal'Othas (`SW_HumanFarmerMQDant`). locations: `Dantooine, Farmhouse`. conditions: Journal `SW_TarisSectAgric` Equal 5. response: “Sssh.. not so loud. Those damn droids hear everything. You want to learn how we farm it, that's fine, we want liberation. From time to time myself and a few others head off on a cargo ship to Manaan to deliver cargo. Board the ship, we'll direct you to the right place.”.

```text
SW_SPEventCargoShipMQ->Enable
Journal SW_TarisSectAgric 10
```

### Stage 15

I met with Danir Tal'Othas on Lucienelle's ship and should make my way to their communications room.

**How this stage is set:**
- Dialogue INFO `2442010327140701971` under topic **Greeting 7**; speaker Danir Tal'Othas (`SW_HumanFarmerMQ`). locations: `Ship Interior: The Lestat`. conditions: Journal `SW_TarisSectAgric` Equal 10. response: “You made it. You'll have to get access to the bridge. I'm not sure where the control room is. Lucienelle droids aren't cheap, I hope you're ready for them.”.

```text
Journal SW_TarisSectAgric 15
```

### Stage 20

I've opened the way to the bridge, that will be my last stop before I can get off of The Lestat.

**How this stage is set:**
- Script `SW_LestatShipEnd`. attached to Door Locked Console (`SW_LestatConsole`); placed in `Ship Interior: The Lestat`.

```text
SW_LestatDoorBridge->Disable
        SW_LestatCargoDoor->Disable
        Journal SW_TarisSectAgric 20
        MessageBox "The bridge has been unlocked."
        Set OpenedtheDoor to 1
```

### Stage 25

I have Lucienelle's data, I should return to Shade as soon as possible.

**How this stage is set:**
- Script `SW_LestatConsoleScript`. attached to Door Locked Console (`SW_LestatConsoleBridge`); placed in `Ship Interior: The Lestat`.

```text
set SW_CapitalTower to ( SW_CapitalTower + 1 )
        endif
        Journal SW_TarisSectAgric 25
        MessageBox "Lucienelle data has been retreived." "OK"
    Else
```

### Stage 30 — Finished

Shade was beyond words when I told her how I managed to retreive the data, Taris can now begin constructing an industrial facility to supply food to the citizens. I should look into other contacts that still need to be met.

**How this stage is set:**
- Dialogue INFO `20469204232910510417` under topic **Agricultural Sector**; speaker Shade Vendas (`SW_ShadeTower`). locations: `Taris, Central Plaza: Capital Tower`. conditions: Journal `SW_TarisSectAgric` Equal 25. response: “You intercepted an entire cargo ship? I.. I don't know how to express my gratitude, you do so much for us, and because of it the people of Taris and their families will have food to eat. Thank you.”.

```text
StopSound "KelliAg3"
PlaySound3D "KelliAg3"
Journal SW_TarisSectAgric 30
Player->additem gold_001 1000
SW_HumanFarmerMQDant->Disable
```

### Stage 100

Notes:

SW_HumanFarmerMQ
SW_HumanFarmerMQDant

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Related records and locations

**Dialogue speakers:**
- Danir Tal'Othas (`SW_HumanFarmerMQ`) — `Ship Interior: The Lestat`
- Danir Tal'Othas (`SW_HumanFarmerMQDant`) — `Dantooine, Farmhouse`
- Shade Vendas (`SW_ShadeTower`) — `Taris, Central Plaza: Capital Tower`

**Scripts that read or write this journal:**
- `SW_CargoShipMQScript` — Creature Cargo Ship (`SW_SPEventCargoShipMQ`); placed in `The Outer Rim`
- `SW_LestatConsoleScript` — Door Locked Console (`SW_LestatConsoleBridge`); placed in `Ship Interior: The Lestat`
- `SW_LestatShipEnd` — Door Locked Console (`SW_LestatConsole`); placed in `Ship Interior: The Lestat`
- `SW_TarisGvnBldNpcAgr` — Npc Corcart Smulaw (`SW_TarisGvnNpc1`); placed in `Taris, Central Plaza: Government Office A`; Npc Willdar Newevall (`SW_TarisGvnNpc2`); placed in `Taris, Central Plaza: Government Office A`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Dantooine, Farmhouse`
- `Ship Interior: The Lestat`
- `Taris, Central Plaza: Capital Tower`
- `Taris, Central Plaza: Government Office A`
- `The Outer Rim`

<details><summary>Journal-state readers (3 code sites)</summary>

- Script `SW_CargoShipMQScript`. attached to Creature Cargo Ship (`SW_SPEventCargoShipMQ`); placed in `The Outer Rim`.
- Script `SW_LestatConsoleScript`. attached to Door Locked Console (`SW_LestatConsoleBridge`); placed in `Ship Interior: The Lestat`.
- Script `SW_TarisGvnBldNpcAgr`. attached to Npc Corcart Smulaw (`SW_TarisGvnNpc1`); placed in `Taris, Central Plaza: Government Office A`; Npc Willdar Newevall (`SW_TarisGvnNpc2`); placed in `Taris, Central Plaza: Government Office A`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: Shade would like the agricultural plans Dantooine has, but says the estate owners are too greedy to help. She …
- [ ] Reach index `10`: Danir Tal'Othas is one of the workers who are oppressed in the Lucienelle Estate. He said he and some others t…
- [ ] Reach index `15`: I met with Danir Tal'Othas on Lucienelle's ship and should make my way to their communications room.
- [ ] Reach index `20`: I've opened the way to the bridge, that will be my last stop before I can get off of The Lestat.
- [ ] Reach index `25`: I have Lucienelle's data, I should return to Shade as soon as possible.
- [ ] Reach index `30` (`Finished`): Shade was beyond words when I told her how I managed to retreive the data, Taris can now begin constructing an…
- [ ] Reach index `100`: Notes:

SW_HumanFarmerMQ
SW_HumanFarmerMQDant
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_TarisSectAgric`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
