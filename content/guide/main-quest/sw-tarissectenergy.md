---
title: "Chapter 2: Energy Sector"
description: "Walkthrough and QA reference for Chapter 2: Energy Sector (SW_TarisSectEnergy)."
weight: 9
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_TarisSectEnergy"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_TarisSectEnergy` |
| **Category** | Main Quest |
| **Journal entries** | 10 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Shade Vendas** in **Taris, Central Plaza: Capital Tower** and ask about **Energy Sector**. |
| **Key locations** | M4-78: Reactor, Nar Shaddaa, Cantina, Nar Shaddaa, Eddie's Den, Nar Shaddaa, Lower City, Taris, Central Plaza: Capital Tower, The Outer Rim |
| **Key characters** | Bo, Hashim, Z'nak 'Xter, Bounty Hunter, Shade Vendas |

## Walkthrough

### 1. Speak with Shade Vendas in Taris, Central Plaza: Capital Tower and ask about Energy Sector

Speak with **Shade Vendas** in **Taris, Central Plaza: Capital Tower** and ask about **Energy Sector**.

> **Expected journal update — index 5:** We have the data for the power grid, but we need engineers who understand it. Shade would like me to head to Nar Shaddaa and find a Zabrak named Z'nak 'Xter who should be working somewhere in the planet's Lower City.

### 2. Speak with Z'nak 'Xter in Nar Shaddaa, Lower City and ask about Energy Sector

Speak with **Z'nak 'Xter** in **Nar Shaddaa, Lower City** and ask about **Energy Sector**.

> **Expected journal update — index 10:** I found Z'nak 'Xter, who would love to come to Shade's aid, but his post is critical to the infrastructure of the lower city which he's assigned to. The only way for someone to replace him safely is if he "dies". Z'nak 'Xter and I are going to fake his death so that the Hutts don't come after him. I should talk to Hashim in Eddie's Den, who is influencial in lower city gangs.

### 3. Speak with Hashim in Nar Shaddaa, Eddie's Den and ask about Energy Sector

Speak with **Hashim** in **Nar Shaddaa, Eddie's Den** and ask about **Energy Sector**.

> **Expected journal update — index 15:** I talked to Hashim, he'll play along for a price. He wants a matrix energy shield, a hard one to find but he says he overheard some Gammoreans talking about on in the customs cantina. I should investigate this.

### 4. Speak with Bo in Nar Shaddaa, Cantina and ask about shield

Speak with **Bo** in **Nar Shaddaa, Cantina** and ask about **shield**.

> **Expected journal update — index 20:** I believe I found the Gammoreans in the customs cantina, they won't tell me anything about a matrix energy shield, they look like all they want is a fight.

### 5. Speak with Bo in Nar Shaddaa, Cantina and ask about shield

Speak with **Bo** in **Nar Shaddaa, Cantina** and ask about **shield**.

> **Expected journal update — index 25:** The Gammorean cantina patrons forced me into a fight, they definitely had a matrix energy shield, I should bring it to Hashim.

### 6. Speak with Hashim in Nar Shaddaa, Eddie's Den and ask about shield

Speak with **Hashim** in **Nar Shaddaa, Eddie's Den** and ask about **shield**.

> **Expected journal update — index 30:** Hashim is happy with the shield, and he said he will stage the "murder". I should return to Z'nak 'Xter.

### 7. Speak with Bounty Hunter in Nar Shaddaa, Lower City

Speak with **Bounty Hunter** in **Nar Shaddaa, Lower City**.

> **Expected journal update — index 35:** I ran into a Hutt authority who told me an maintenance worker had just been shot and killed. I should return to Shade and let her know that Z'nak will be joining us soon.

### 8. Speak with Shade Vendas in Taris, Central Plaza: Capital Tower and ask about Energy Sector — Finished

Speak with **Shade Vendas** in **Taris, Central Plaza: Capital Tower** and ask about **Energy Sector**.

> **Expected journal update — index 40:** Shade is thrilled knowing that Z'nak 'Xter is okay and will be joining our efforts on Taris. I should look into other contacts that still need to be met.

**Known item transfer:** 1000 × **Credits** (`gold_001`).

**Outcome:** this journal entry is marked as a finished branch.

### 9. Reach journal stage 100

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 100:** Notes: SW_NarElecEngineer    Z'nak 'Xter SW_NarDeathFaker    Hashim SW_GammCantina2 SW_ShieldBeltMatrix

> **Playtest flag:** 1 journal stage on this page lack a literal setter in the current static scan.

## Endings & branches

The journal has one explicit finished state at **index 40**:

> Shade is thrilled knowing that Z'nak 'Xter is okay and will be joining our efforts on Taris. I should look into other contacts that still need to be met.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 1000 × **Credits** (`gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Bo** (`SW_GammCantina2`) — `Nar Shaddaa, Cantina`
- **Hashim** (`SW_NarDeathFaker`) — `Nar Shaddaa, Eddie's Den`
- **Z'nak 'Xter** (`SW_NarElecEngineer`) — `Nar Shaddaa, Lower City`
- **Bounty Hunter** (`SW_NarGuardDeathFaker`) — `Nar Shaddaa, Lower City`
- **Shade Vendas** (`SW_ShadeTower`) — `Taris, Central Plaza: Capital Tower`

**Locations implicated by actor/object placement or explicit travel:**
- **M4-78: Reactor**
- **Nar Shaddaa, Cantina**
- **Nar Shaddaa, Eddie's Den**
- **Nar Shaddaa, Lower City**
- **Taris, Central Plaza: Capital Tower**
- **The Outer Rim**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_TarisSectEnergy`
**Generated category:** Main Quest
**Journal entries:** 10

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | We have the data for the power grid, but we need engineers who understand it. Shade would like me to head to Nar Shaddaa and find a Zabrak named Z'nak 'Xter who should be working somewhere in the planet's Lower City. | 1 |
| 10 | — | I found Z'nak 'Xter, who would love to come to Shade's aid, but his post is critical to the infrastructure of the lower city which he's assigned to. The only way for someone to replace him safely is if he "dies". Z'nak 'Xter and I are going to fake his death so that the Hutts don't come after him. I should talk to Hashim in Eddie's Den, who is influencial in lower city gangs. | 1 |
| 15 | — | I talked to Hashim, he'll play along for a price. He wants a matrix energy shield, a hard one to find but he says he overheard some Gammoreans talking about on in the customs cantina. I should investigate this. | 1 |
| 20 | — | I believe I found the Gammoreans in the customs cantina, they won't tell me anything about a matrix energy shield, they look like all they want is a fight. | 1 |
| 25 | — | The Gammorean cantina patrons forced me into a fight, they definitely had a matrix energy shield, I should bring it to Hashim. | 1 |
| 30 | — | Hashim is happy with the shield, and he said he will stage the "murder". I should return to Z'nak 'Xter. | 1 |
| 35 | — | I ran into a Hutt authority who told me an maintenance worker had just been shot and killed. I should return to Shade and let her know that Z'nak will be joining us soon. | 1 |
| 40 | Finished | Shade is thrilled knowing that Z'nak 'Xter is okay and will be joining our efforts on Taris. I should look into other contacts that still need to be met. | 1 |
| 100 | — | Notes:
<br>SW_NarElecEngineer
<br>    Z'nak 'Xter
<br>SW_NarDeathFaker
<br>    Hashim
<br>SW_GammCantina2
<br>SW_ShieldBeltMatrix | 0 |

### Record-level trigger map

### Stage 5

We have the data for the power grid, but we need engineers who understand it. Shade would like me to head to Nar Shaddaa and find a Zabrak named Z'nak 'Xter who should be working somewhere in the planet's Lower City.

**How this stage is set:**
- Dialogue INFO `256613668139414394` under topic **Energy Sector**; speaker Shade Vendas (`SW_ShadeTower`). locations: `Taris, Central Plaza: Capital Tower`. conditions: Journal `SW_TarisSectEnergy` Equal 0. response: “Well we have the data that we need to get the Energy Sector fully functional and stabilized again, but we need experts who can run it, or at least train some more people to run it. There's an old contact of my fathers on Nar Shaddaa, a Zabrak named Z'nak 'Xter. I bet he can help. Be careful on Nar Shaddaa, it's incredibly dangerous, just lay low and look for Z'nak.”.

```text
StopSound "KelliEn3"
PlaySound3D "KelliEn1"
Journal SW_TarisSectEnergy 5
```

### Stage 10

I found Z'nak 'Xter, who would love to come to Shade's aid, but his post is critical to the infrastructure of the lower city which he's assigned to. The only way for someone to replace him safely is if he "dies". Z'nak 'Xter and I are going to fake his death so that the Hutts don't come after him. I should talk to Hashim in Eddie's Den, who is influencial in lower city gangs.

**How this stage is set:**
- Dialogue INFO `1445920007646622495` under topic **Energy Sector**; speaker Z'nak 'Xter (`SW_NarElecEngineer`). locations: `Nar Shaddaa, Lower City`. conditions: Function/Choice Equal 1. response: “ You could try Eddie's Den down here in the Lower City, look for a Cathar named Hashim. If anyone knows how to set something like that up it would be him. Be careful though, the gangsters around here are ruthless.”.

```text
Journal SW_TarisSectEnergy 10
```

### Stage 15

I talked to Hashim, he'll play along for a price. He wants a matrix energy shield, a hard one to find but he says he overheard some Gammoreans talking about on in the customs cantina. I should investigate this.

**How this stage is set:**
- Dialogue INFO `19412213833276718610` under topic **Energy Sector**; speaker Hashim (`SW_NarDeathFaker`). locations: `Nar Shaddaa, Eddie's Den`. conditions: Journal `SW_TarisSectEnergy` Equal 10. response: “Dyeesh! You want me to do what? You know this will attract the attention of the Hutts? Ferglutz... I can arrange for his murder to be faked, but I'll need protection. I've heard of a powerful energy shield, a Matrix Shield Belt. It's supposed to be the best of the best, and I heard some Gammoreans talking about one in the customs cantina. You get me one of those, I'll do it.”.

```text
Journal SW_TarisSectEnergy 15
```

### Stage 20

I believe I found the Gammoreans in the customs cantina, they won't tell me anything about a matrix energy shield, they look like all they want is a fight.

**How this stage is set:**
- Dialogue INFO `21932207511231525830` under topic **shield**; speaker Bo (`SW_GammCantina2`). locations: `Nar Shaddaa, Cantina`. conditions: Journal `SW_TarisSectEnergy` Equal 15. response: “You think I'm here to talk to you, kung? Kark it, Bludfly!”.

```text
Journal SW_TarisSectEnergy 20
Choice "You're going to tell me about this shield." 1
PlaySound3d "SW_Gamm01"
```

### Stage 25

The Gammorean cantina patrons forced me into a fight, they definitely had a matrix energy shield, I should bring it to Hashim.

**How this stage is set:**
- Dialogue INFO `606818603790721832` under topic **shield**; speaker Bo (`SW_GammCantina2`). locations: `Nar Shaddaa, Cantina`. conditions: Function/Choice Equal 1. response: “Chuba stoopa!”.

```text
StartCombat Player
SW_GammCantina3->StartCombat Player
Journal SW_TarisSectEnergy 25
SW_NarGuardDeathFaker->Enable
SW_NarElecEngineer->Disable
```

### Stage 30

Hashim is happy with the shield, and he said he will stage the "murder". I should return to Z'nak 'Xter.

**How this stage is set:**
- Dialogue INFO `2473290921171830436` under topic **shield**; speaker Hashim (`SW_NarDeathFaker`). locations: `Nar Shaddaa, Eddie's Den`. conditions: Journal `SW_TarisSectEnergy` LessEqual 25; Item/ItemType `SW_ShieldBeltMatrix` GreaterEqual 1. response: “Looks like they do exist. Alright, I'll set up the "murder". No gangster is going to be shooting me with this on, now get out of here sleemo, before someone catches on.”.

```text
additem SW_ShieldBeltMatrix 1
SW_NarGuardDeathFaker->Enable
Journal SW_TarisSectEnergy 30
StartScript SW_TarisCapTowerQuickBuild
```

### Stage 35

I ran into a Hutt authority who told me an maintenance worker had just been shot and killed. I should return to Shade and let her know that Z'nak will be joining us soon.

**How this stage is set:**
- Dialogue INFO `20233205763244630093` under topic **Greeting 7**; speaker Bounty Hunter (`SW_NarGuardDeathFaker`). locations: `Nar Shaddaa, Lower City`. conditions: Journal `SW_TarisSectEnergy` Equal 30. response: “Back up! There's been a shooting, no unauthorized maintenance personnel are allowed in this room at the moment. Just move along.”.

```text
PlaySound3D "SW_Gamm03"
Journal SW_TarisSectEnergy 35
```

### Stage 40 — Finished

Shade is thrilled knowing that Z'nak 'Xter is okay and will be joining our efforts on Taris. I should look into other contacts that still need to be met.

**How this stage is set:**
- Dialogue INFO `64472883298372701` under topic **Energy Sector**; speaker Shade Vendas (`SW_ShadeTower`). locations: `Taris, Central Plaza: Capital Tower`. conditions: Journal `SW_TarisSectEnergy` Equal 35. response: “Z'nak is coming from Nar Shaddaa? You're a miracle worker, with him helping get everything in order we'll have proper energy in no time. No more blackouts for the survivors of Taris. Thank you again my friend.”.

```text
player->additem gold_001 1000
SW_NarGuardDeathFaker->Disable
Journal SW_TarisSectEnergy 40
```

### Stage 100

Notes:
SW_NarElecEngineer
    Z'nak 'Xter
SW_NarDeathFaker
    Hashim
SW_GammCantina2
SW_ShieldBeltMatrix

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Related records and locations

**Dialogue speakers:**
- Bo (`SW_GammCantina2`) — `Nar Shaddaa, Cantina`
- Hashim (`SW_NarDeathFaker`) — `Nar Shaddaa, Eddie's Den`
- Z'nak 'Xter (`SW_NarElecEngineer`) — `Nar Shaddaa, Lower City`
- Bounty Hunter (`SW_NarGuardDeathFaker`) — `Nar Shaddaa, Lower City`
- Shade Vendas (`SW_ShadeTower`) — `Taris, Central Plaza: Capital Tower`

**Scripts that read or write this journal:**
- `SW_EnterM478` — Activator M4-78 (`SW_PlanM478`); placed in `The Outer Rim`
- `SW_M4PickupCore` — MiscItem Reactor Core (`SW_ReactorCore`); placed in `M4-78: Reactor`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)
- Plasma Grenade (`SW_PlasmaGrenadee`)
- Reactor Core (`SW_ReactorCore`)
- Matrix Energy Shield (`SW_ShieldBeltMatrix`)
- Unequip (`SW_SpCarNone`)

**Cells implicated by actor/object placement or explicit travel code:**
- `M4-78: Reactor`
- `Nar Shaddaa, Cantina`
- `Nar Shaddaa, Eddie's Den`
- `Nar Shaddaa, Lower City`
- `Taris, Central Plaza: Capital Tower`
- `The Outer Rim`

<details><summary>Journal-state readers (2 code sites)</summary>

- Script `SW_EnterM478`. attached to Activator M4-78 (`SW_PlanM478`); placed in `The Outer Rim`.
- Script `SW_M4PickupCore`. attached to MiscItem Reactor Core (`SW_ReactorCore`); placed in `M4-78: Reactor`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: We have the data for the power grid, but we need engineers who understand it. Shade would like me to head to N…
- [ ] Reach index `10`: I found Z'nak 'Xter, who would love to come to Shade's aid, but his post is critical to the infrastructure of …
- [ ] Reach index `15`: I talked to Hashim, he'll play along for a price. He wants a matrix energy shield, a hard one to find but he s…
- [ ] Reach index `20`: I believe I found the Gammoreans in the customs cantina, they won't tell me anything about a matrix energy shi…
- [ ] Reach index `25`: The Gammorean cantina patrons forced me into a fight, they definitely had a matrix energy shield, I should bri…
- [ ] Reach index `30`: Hashim is happy with the shield, and he said he will stage the "murder". I should return to Z'nak 'Xter.
- [ ] Reach index `35`: I ran into a Hutt authority who told me an maintenance worker had just been shot and killed. I should return t…
- [ ] Reach index `40` (`Finished`): Shade is thrilled knowing that Z'nak 'Xter is okay and will be joining our efforts on Taris. I should look int…
- [ ] Reach index `100`: Notes:
SW_NarElecEngineer
    Z'nak 'Xter
SW_NarDeathFaker
    Hashim
SW_GammCantina2
SW_ShieldBeltMatrix
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_TarisSectEnergy`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
