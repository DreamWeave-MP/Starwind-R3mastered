---
title: "Chapter 2: The Black Vulkar Gang"
description: "Walkthrough and QA reference for Chapter 2: The Black Vulkar Gang (SW_TarisChap2-1)."
weight: 7
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_TarisChap2-1"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_TarisChap2-1` |
| **Category** | Main Quest |
| **Journal entries** | 5 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Shade Vendas** in **Taris, Central Plaza: Capital Tower**. |
| **Observed prerequisite journals** | `SW_TarisSectEnergy2`, `SW_TarisSectAgric`, `SW_TarisSectEnergy`, `SW_TarisSectManu`, `SW_TarisSectMedic`, `SW_TarisSectWater` |
| **Key locations** | Taris, Black Vulkar Base: Underdark, Taris, Central Plaza: Capital Tower, Taris, Lower City |
| **Key characters** | Gezeki, Shade Vendas |

## Walkthrough

### 1. Speak with Shade Vendas in Taris, Central Plaza: Capital Tower

Speak with **Shade Vendas** in **Taris, Central Plaza: Capital Tower**.

> **Expected journal update — index 5:** Shade told me rakghouls are spreading across the city. I'm to go meet Gekezi at the Black Vulkar base in the lower city to take care of the source of this issue.

### 2. Speak with Gezeki in Taris, Lower City

Speak with **Gezeki** in **Taris, Lower City**.

> **Expected journal update — index 10:** I met up with Gezeki, it's time to take care of the Black Vulkar gang.

### 3. Defeat Zox Ji in Taris, Black Vulkar Base: Underdark and allow its script to update the quest

Defeat **Zox Ji** in **Taris, Black Vulkar Base: Underdark** and allow its script to update the quest.

> **Expected journal update — index 12:** The Black Vulkar Boss is has been killed. Gezeki took off with the dagger and told me to loot the rest. I should return to Shade.

### 4. Speak with Shade Vendas in Taris, Central Plaza: Capital Tower — Finished

Speak with **Shade Vendas** in **Taris, Central Plaza: Capital Tower**.

> **Expected journal update — index 15:** The Black Vulkar mission was a success. Shade says things in the city should be easier to handle now that they've been taken care of.

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 15**:

> The Black Vulkar mission was a success. Shade says things in the city should be easier to handle now that they've been taken care of.

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Gezeki** (`SW_GezekVulkar`) — `Taris, Lower City`
- **Shade Vendas** (`SW_ShadeTower`) — `Taris, Central Plaza: Capital Tower`

**Locations implicated by actor/object placement or explicit travel:**
- **Taris, Black Vulkar Base: Underdark**
- **Taris, Central Plaza: Capital Tower**
- **Taris, Lower City**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_TarisChap2-1`
**Generated category:** Main Quest
**Journal entries:** 5

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | Shade told me rakghouls are spreading across the city. I'm to go meet Gekezi at the Black Vulkar base in the lower city to take care of the source of this issue. | 2 |
| 10 | — | I met up with Gezeki, it's time to take care of the Black Vulkar gang. | 1 |
| 12 | — | The Black Vulkar Boss is has been killed. Gezeki took off with the dagger and told me to loot the rest. I should return to Shade. | 1 |
| 15 | Finished | The Black Vulkar mission was a success. Shade says things in the city should be easier to handle now that they've been taken care of. | 1 |

### Record-level trigger map

### Stage 5

Shade told me rakghouls are spreading across the city. I'm to go meet Gekezi at the Black Vulkar base in the lower city to take care of the source of this issue.

**How this stage is set:**
- Dialogue INFO `28709522333217871` under topic **Greeting 7**; speaker Shade Vendas (`SW_ShadeTower`). locations: `Taris, Central Plaza: Capital Tower`. conditions: Journal `SW_TarisChap2-1` GreaterEqual 5; Journal `SW_TarisSectEnergy2` Equal 0. response: “Gezeki is waiting for you at the Black Vulkar base in the lower city.”.

```text
StopSound "KelliVulk3"
PlaySound3D "KelliVulk2"
Journal SW_TarisChap2-1 5
```
- Dialogue INFO `1938510641111621549` under topic **Greeting 7**; speaker Shade Vendas (`SW_ShadeTower`). locations: `Taris, Central Plaza: Capital Tower`. conditions: Journal `SW_TarisSectAgric` Equal 30; Journal `SW_TarisSectEnergy` Equal 40; Journal `SW_TarisSectManu` Equal 30; Journal `SW_TarisSectMedic` Equal 25; Journal `SW_TarisSectWater` Equal 15; Journal `SW_TarisChap2-1` Equal 0. response: “Gezeki just came over on his comlink, he's in the Lower City and rakghouls have been released among the population. Thegg has dispatched the honor guard to go door to door and keep it from spreading. I need you to meet with Gezeki at the Black Vulkar's base and end this once and for all. Be careful my friend, there are rumors about a weapon that the leader of the gang has, a dagger that has been infused with the rakghoul disease.”.

```text
StopSound "KelliVulk3"
PlaySound3D "KelliVulk1"
Journal SW_TarisChap2-1 5
```

### Stage 10

I met up with Gezeki, it's time to take care of the Black Vulkar gang.

**How this stage is set:**
- Dialogue INFO `1297819669198096892` under topic **Greeting 7**; speaker Gezeki (`SW_GezekVulkar`). locations: `Taris, Lower City`. conditions: Journal `SW_TarisChap2-1` Equal 5. response: “Through that doorway, it's time to put an end to the Black Vulkar Gang.”.

```text
SW_TarisDoorVulkarBase->Unlock
Journal SW_TarisChap2-1 10
AIFollow Player 0, 0, 0, 0
StopSound "GezekVulk1"
```

### Stage 12

The Black Vulkar Boss is has been killed. Gezeki took off with the dagger and told me to loot the rest. I should return to Shade.

**How this stage is set:**
- Script `SW_VulkarBossDeath`. attached to Npc Zox Ji (`SW_BlackVulkarLeader`); placed in `Taris, Black Vulkar Base: Underdark`.

```text
If ( OnDeath == 1 )
    If ( DoOnce == 0 )
        Journal SW_TarisChap2-1 12
        Removeitem SW_RakKnife 1
        SW_GezekVulkar->ForceGreeting
```

### Stage 15 — Finished

The Black Vulkar mission was a success. Shade says things in the city should be easier to handle now that they've been taken care of.

**How this stage is set:**
- Dialogue INFO `7244315323217817481` under topic **Greeting 7**; speaker Shade Vendas (`SW_ShadeTower`). locations: `Taris, Central Plaza: Capital Tower`. conditions: Journal `SW_TarisChap2-1` Equal 12. response: “Gezeki came through already, he told me the Black Vulkar leader is dead, and that his dagger has been confiscated. That will throw their gang into disarray and remove the fear that they have been spreading, the sith defectors can handle them from here. I know you just got through with a battle, so rest as long as you need, but there is another mission I need of you. The energy sector is failing, we just can't produce enough power. We've located a power source but it won't be easy to obtain.”.

```text
StopSound "KelliVulk3"
PlaySound3D "KelliVulk3"
Journal SW_TarisChap2-1 15
Choice "Continue" 1
```

### Related records and locations

**Dialogue speakers:**
- Gezeki (`SW_GezekVulkar`) — `Taris, Lower City`
- Shade Vendas (`SW_ShadeTower`) — `Taris, Central Plaza: Capital Tower`

**Scripts that read or write this journal:**
- `SW_CheckDoorVulkEnt` — Door Metal Door (`SW_TarisDoorVulkarBase`); placed in `Taris, Lower City`
- `SW_TarisVulkarRakg` — Creature Rakghoul (`SW_RakhoulVulkar`); placed in `Taris, Lower City`
- `SW_TarisVulkarSpawns` — Npc Gezeki (`SW_GezekVulkar`); placed in `Taris, Lower City`
- `SW_VulkarBossDeath` — Npc Zox Ji (`SW_BlackVulkarLeader`); placed in `Taris, Black Vulkar Base: Underdark`

**Items referenced by related script/result code:**
- Rakghoul Knife (`SW_RakKnife`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Taris, Black Vulkar Base: Underdark`
- `Taris, Central Plaza: Capital Tower`
- `Taris, Lower City`

<details><summary>Journal-state readers (3 code sites)</summary>

- Script `SW_CheckDoorVulkEnt`. attached to Door Metal Door (`SW_TarisDoorVulkarBase`); placed in `Taris, Lower City`.
- Script `SW_TarisVulkarRakg`. attached to Creature Rakghoul (`SW_RakhoulVulkar`); placed in `Taris, Lower City`.
- Script `SW_TarisVulkarSpawns`. attached to Npc Gezeki (`SW_GezekVulkar`); placed in `Taris, Lower City`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: Shade told me rakghouls are spreading across the city. I'm to go meet Gekezi at the Black Vulkar base in the l…
- [ ] Reach index `10`: I met up with Gezeki, it's time to take care of the Black Vulkar gang.
- [ ] Reach index `12`: The Black Vulkar Boss is has been killed. Gezeki took off with the dagger and told me to loot the rest. I shou…
- [ ] Reach index `15` (`Finished`): The Black Vulkar mission was a success. Shade says things in the city should be easier to handle now that they…
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_TarisChap2-1`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
