---
title: "Piggies In Need"
description: "Walkthrough and QA reference for Piggies In Need (SW_ExpPiggies)."
weight: 7
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_ExpPiggies"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_ExpPiggies` |
| **Category** | Expansion / PlanExp |
| **Journal entries** | 7 |
| **Completion branches** | 1 |
| **Starts by** | Record route requires playtest verification. |
| **Key locations** | Gamorr, Czerka Brig, Gamorr, Czerka Storehouse, Gamorr, Shorthair Oasis |
| **Key characters** | Minsc |

## Walkthrough

### 1. Reach journal stage 3

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 3:** The Czerka Corporation is enslaving Gamorreans on Gamorr, I should explore the slave camp and find out more.

### 2. Reach journal stage 5

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 5:** I've heard of the leader of the shorthair clan being held in a brig nearby. It's locked, but if I can get in there he may be able to help me take out these Czerka slavers.

### 3. Speak with Minsc in Gamorr, Czerka Brig

Speak with **Minsc** in **Gamorr, Czerka Brig**.

> **Expected journal update — index 7:** I've found Minsc, who has a gravity axe that can take down the forcefield to the shorthair stronghold where the Czerka leader is. He says his equipment is in what is now the Czerka storeroom.

### 4. Interact with Footlocker in Gamorr, Czerka Storehouse

Interact with **Footlocker** in **Gamorr, Czerka Storehouse**.

> **Expected journal update — index 10:** Minsc has his equipment and we should be able to get inside the stronghold now.

### 5. Defeat Minsc in Gamorr, Czerka Brig and allow its script to update the quest

Defeat **Minsc** in **Gamorr, Czerka Brig** and allow its script to update the quest.

> **Expected journal update — index 13:** Minsc has died, I should search for his gravity axe in the Czerka storeroom.

### 6. Reach Gamorr, Shorthair Oasis and allow the scripted event to complete — Finished

Reach **Gamorr, Shorthair Oasis** and allow the scripted event to complete.

> **Expected journal update — index 15:** The forcefield is down and the Gamorreans are free, the shorthairs can go on to restore their stronghold now.

**Outcome:** this journal entry is marked as a finished branch.

> **Playtest flag:** 2 journal stages on this page lack a literal setter in the current static scan.

## Endings & branches

The journal has one explicit finished state at **index 15**:

> The forcefield is down and the Gamorreans are free, the shorthairs can go on to restore their stronghold now.

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Minsc** (`SW_ExpSlaveGamMinsc`) — `Gamorr, Czerka Brig`

**Locations implicated by actor/object placement or explicit travel:**
- **Gamorr, Czerka Brig**
- **Gamorr, Czerka Storehouse**
- **Gamorr, Shorthair Oasis**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_ExpPiggies`
**Generated category:** Expansion / PlanExp
**Journal entries:** 7

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 3 | — | The Czerka Corporation is enslaving Gamorreans on Gamorr, I should explore the slave camp and find out more. | 0 |
| 5 | — | I've heard of the leader of the shorthair clan being held in a brig nearby. It's locked, but if I can get in there he may be able to help me take out these Czerka slavers. | 0 |
| 7 | — | I've found Minsc, who has a gravity axe that can take down the forcefield to the shorthair stronghold where the Czerka leader is. He says his equipment is in what is now the Czerka storeroom. | 1 |
| 10 | — | Minsc has his equipment and we should be able to get inside the stronghold now. | 1 |
| 13 | — | Minsc has died, I should search for his gravity axe in the Czerka storeroom. | 1 |
| 15 | Finished | The forcefield is down and the Gamorreans are free, the shorthairs can go on to restore their stronghold now. | 1 |

### Record-level trigger map

### Stage 3

The Czerka Corporation is enslaving Gamorreans on Gamorr, I should explore the slave camp and find out more.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 5

I've heard of the leader of the shorthair clan being held in a brig nearby. It's locked, but if I can get in there he may be able to help me take out these Czerka slavers.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 7

I've found Minsc, who has a gravity axe that can take down the forcefield to the shorthair stronghold where the Czerka leader is. He says his equipment is in what is now the Czerka storeroom.

**How this stage is set:**
- Dialogue INFO `75316513518715786` under topic **Greeting 7**; speaker Minsc (`SW_ExpSlaveGamMinsc`). locations: `Gamorr, Czerka Brig`. conditions: Journal `SW_ExpPiggies` Less 7. response: “You're not Czerka? I know how to get into the stronghold and disable the forcefields, the stronghold gate won't budge, I know because it used to be my stronghold. I need my gravity axe, they took it and it's inside what is now the Czerka storeroom. If I can get that axe, I can use it to take down the door.”.

```text
Journal SW_ExpPiggies 7
AIFollow Player 0, 0, 0, 0
```

### Stage 10

Minsc has his equipment and we should be able to get inside the stronghold now.

**How this stage is set:**
- Script `SW_ExpEquipMinsc`. attached to Container Footlocker (`SW_ExpFootlockerEquip`); placed in `Gamorr, Czerka Storehouse`.

```text
If ( DoOnce == 0 )
    If ( GetDistance SW_ExpSlaveGamMinsc <= 1000 )
        Journal SW_ExpPiggies 10
        SW_ExpSlaveGamMinsc->Equip SW_ExpGravAxe 1
        SW_ExpSlaveGamMinsc->Equip SW_GammAChest 1
```

### Stage 13

Minsc has died, I should search for his gravity axe in the Czerka storeroom.

**How this stage is set:**
- Script `SW_ExpMinscScript`. attached to Npc Minsc (`SW_ExpSlaveGamMinsc`); placed in `Gamorr, Czerka Brig`.

```text
If ( OnDeath )
    If ( GetJournalIndex SW_ExpPiggies < 10 )
        Journal SW_ExpPiggies 13
        SW_ExpGravAxeExtra->Enable
    Endif
```

### Stage 15 — Finished

The forcefield is down and the Gamorreans are free, the shorthairs can go on to restore their stronghold now.

**How this stage is set:**
- Script `SW_ExpTerminalFree`. attached to Activator Control Terminal (`SW_ExpSlaveTerminal`); placed in `Gamorr, Shorthair Oasis`.

```text
If ( GetJournalIndex SW_ExpPiggies < 15 )
        If ( Player->GetItemCount SW_ExpTermKey >= 1 )
            Journal SW_ExpPiggies 15
            SW_ExpFreeForcefield->Disable
            SW_ExpSlaveGamA->Disable
```

### Related records and locations

**Dialogue speakers:**
- Minsc (`SW_ExpSlaveGamMinsc`) — `Gamorr, Czerka Brig`

**Scripts that read or write this journal:**
- `SW_ExpEquipMinsc` — Container Footlocker (`SW_ExpFootlockerEquip`); placed in `Gamorr, Czerka Storehouse`
- `SW_ExpMinscScript` — Npc Minsc (`SW_ExpSlaveGamMinsc`); placed in `Gamorr, Czerka Brig`
- `SW_ExpTerminalFree` — Activator Control Terminal (`SW_ExpSlaveTerminal`); placed in `Gamorr, Shorthair Oasis`

**Items referenced by related script/result code:**
- ment
- Minsc's Gravity Axe (`SW_ExpGravAxe`)
- Terminal Keycard (`SW_ExpTermKey`)
- Gammorean Boots (`SW_GammABoots`)
- Gammorean Armor (`SW_GammAChest`)
- Gammorean Right Pauldron (`SW_GammAPaul`)
- Gammorean Left Pauldron (`SW_GammAPaulLeft`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Gamorr, Czerka Brig`
- `Gamorr, Czerka Storehouse`
- `Gamorr, Shorthair Oasis`

<details><summary>Journal-state readers (2 code sites)</summary>

- Script `SW_ExpMinscScript`. attached to Npc Minsc (`SW_ExpSlaveGamMinsc`); placed in `Gamorr, Czerka Brig`.
- Script `SW_ExpTerminalFree`. attached to Activator Control Terminal (`SW_ExpSlaveTerminal`); placed in `Gamorr, Shorthair Oasis`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `3` is obtainable.
- [ ] Reach index `3`: The Czerka Corporation is enslaving Gamorreans on Gamorr, I should explore the slave camp and find out more.
- [ ] Reach index `5`: I've heard of the leader of the shorthair clan being held in a brig nearby. It's locked, but if I can get in t…
- [ ] Reach index `7`: I've found Minsc, who has a gravity axe that can take down the forcefield to the shorthair stronghold where th…
- [ ] Reach index `10`: Minsc has his equipment and we should be able to get inside the stronghold now.
- [ ] Reach index `13`: Minsc has died, I should search for his gravity axe in the Czerka storeroom.
- [ ] Reach index `15` (`Finished`): The forcefield is down and the Gamorreans are free, the shorthairs can go on to restore their stronghold now.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_ExpPiggies`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
