---
title: "Chapter 2: Manufacturing Sector"
description: "Walkthrough and QA reference for Chapter 2: Manufacturing Sector (SW_TarisSectManu)."
weight: 10
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_TarisSectManu"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_TarisSectManu` |
| **Category** | Main Quest |
| **Journal entries** | 8 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Shade Vendas** in **Taris, Central Plaza: Capital Tower** and ask about **Manufacturing Sector**. |
| **Key locations** | Nar Shaddaa, Hutt Cartel, Nar Shaddaa, Union Headquarters, Taris, Central Plaza: Capital Tower, Taris, Central Plaza: Government Office B |
| **Key characters** | Badhiya, Union Steward, Shade Vendas |

## Walkthrough

### 1. Speak with Shade Vendas in Taris, Central Plaza: Capital Tower and ask about Manufacturing Sector

Speak with **Shade Vendas** in **Taris, Central Plaza: Capital Tower** and ask about **Manufacturing Sector**.

> **Expected journal update — index 5:** An enormous amount of construction is going to take place to restore this city. Shade would like me to head to Nar Shaddaa and discuss with the unions about gaining their aid for Taris.

### 2. Speak with Union Steward in Nar Shaddaa, Union Headquarters and ask about Manufacturing Sector

Speak with **Union Steward** in **Nar Shaddaa, Union Headquarters** and ask about **Manufacturing Sector**.

> **Expected journal update — index 10:** I spoke to the Union Steward in Peyuska Plaza who told me that they have to have loyalty to the Hutts. I need to discuss this with Badhiya the Hutt.

### 3. Speak with Badhiya in Nar Shaddaa, Hutt Cartel and ask about Manufacturing Sector

Speak with **Badhiya** in **Nar Shaddaa, Hutt Cartel** and ask about **Manufacturing Sector**.

> **Expected journal update — index 15:** Badhiya the Hutt wants me to rise in the ranks of the Hutt Cartel and do his bidding before he will release the union workers to Taris.

### 4. Reach journal stage 18

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 18:** I've paid Badhiya the Hutt sufficiently to release the union workers of Nar Shaddaa to Taris.

### 5. Speak with Badhiya in Nar Shaddaa, Hutt Cartel and ask about Manufacturing Sector

Speak with **Badhiya** in **Nar Shaddaa, Hutt Cartel** and ask about **Manufacturing Sector**.

> **Expected journal update — index 20:** Badhiya the Hutt has released the union workers, I should return to their steward to ask when they'll arrive.

### 6. Speak with Union Steward in Nar Shaddaa, Union Headquarters and ask about Manufacturing Sector

Speak with **Union Steward** in **Nar Shaddaa, Union Headquarters** and ask about **Manufacturing Sector**.

> **Expected journal update — index 25:** The unions of Nar Shaddaa will come to the aid of Taris, I should return to Shade and report this to her.

### 7. Speak with Shade Vendas in Taris, Central Plaza: Capital Tower and ask about Manufacturing Sector — Finished

Speak with **Shade Vendas** in **Taris, Central Plaza: Capital Tower** and ask about **Manufacturing Sector**.

> **Expected journal update — index 30:** Shade paid me for my efforts and is grateful for Nar Shaddaas aid. I should look into other contacts we need to gather.

**Known item transfer:** 2500 × **Credits** (`gold_001`).

**Outcome:** this journal entry is marked as a finished branch.

{% callout(kind="warning", title="Playtest flag") %}
1 journal stage on this page lack a literal setter in the current static scan.
{% end %}

## Endings & branches

The journal has one explicit finished state at **index 30**:

> Shade paid me for my efforts and is grateful for Nar Shaddaas aid. I should look into other contacts we need to gather.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 2500 × **Credits** (`gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Badhiya** (`Bng_Badhiya`) — `Nar Shaddaa, Hutt Cartel`
- **Union Steward** (`SW_NarUnionBoss`) — `Nar Shaddaa, Union Headquarters`
- **Shade Vendas** (`SW_ShadeTower`) — `Taris, Central Plaza: Capital Tower`

**Locations implicated by actor/object placement or explicit travel:**
- **Nar Shaddaa, Hutt Cartel**
- **Nar Shaddaa, Union Headquarters**
- **Taris, Central Plaza: Capital Tower**
- **Taris, Central Plaza: Government Office B**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_TarisSectManu`
**Generated category:** Main Quest
**Journal entries:** 8

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | An enormous amount of construction is going to take place to restore this city. Shade would like me to head to Nar Shaddaa and discuss with the unions about gaining their aid for Taris. | 1 |
| 10 | — | I spoke to the Union Steward in Peyuska Plaza who told me that they have to have loyalty to the Hutts. I need to discuss this with Badhiya the Hutt. | 1 |
| 15 | — | Badhiya the Hutt wants me to rise in the ranks of the Hutt Cartel and do his bidding before he will release the union workers to Taris. | 1 |
| 18 | — | I've paid Badhiya the Hutt sufficiently to release the union workers of Nar Shaddaa to Taris. | 0 |
| 20 | — | Badhiya the Hutt has released the union workers, I should return to their steward to ask when they'll arrive. | 2 |
| 25 | — | The unions of Nar Shaddaa will come to the aid of Taris, I should return to Shade and report this to her. | 2 |
| 30 | Finished | Shade paid me for my efforts and is grateful for Nar Shaddaas aid. I should look into other contacts we need to gather. | 1 |

### Record-level trigger map

### Stage 5

An enormous amount of construction is going to take place to restore this city. Shade would like me to head to Nar Shaddaa and discuss with the unions about gaining their aid for Taris.

**How this stage is set:**
- Dialogue INFO `22158155131640030764` under topic **Manufacturing Sector**; speaker Shade Vendas (`SW_ShadeTower`). locations: `Taris, Central Plaza: Capital Tower`. conditions: Journal `SW_TarisSectManu` Equal 0. response: “There's just too much to build, we need skilled hands, and expert engineers. It hurts me to say it but, I need you to go to Nar Shaddaa and speak to the unions there, no one is in a constant state of rebuilding like those craftsman. Be careful not to run into the Hutts there, they are as evil as they come.”.

```text
StopSound "KelliMan3"
PlaySound3D "KelliMan1"
Journal SW_TarisSectManu 5
```

### Stage 10

I spoke to the Union Steward in Peyuska Plaza who told me that they have to have loyalty to the Hutts. I need to discuss this with Badhiya the Hutt.

**How this stage is set:**
- Dialogue INFO `2415010823985513313` under topic **Manufacturing Sector**; speaker Union Steward (`SW_NarUnionBoss`). locations: `Nar Shaddaa, Union Headquarters`. conditions: Journal `SW_TarisSectManu` Equal 5. response: “You ask this so simply. The workers here would help anyone in need, but the Hutts don't let us leave Nar Shaddaa. Union is a false word, everyone on Nar Shaddaa works for the Hutts. Speak to Badhiya the Hutt, he's in his headquarters, just exit the union headquarters and take a right, it'll lead you right to the door. Be careful, though, the Hutts are not generous creatures.”.

```text
Journal SW_TarisSectManu 10
```

### Stage 15

Badhiya the Hutt wants me to rise in the ranks of the Hutt Cartel and do his bidding before he will release the union workers to Taris.

**How this stage is set:**
- Dialogue INFO `35277995323005924` under topic **Manufacturing Sector**; speaker Badhiya (`Bng_Badhiya`). locations: `Nar Shaddaa, Hutt Cartel`. conditions: Journal `SW_TarisSectManu` Equal 10. response: “This does not concern Badhiya. I need payment if you want my people to help Taris. Hmm. You travel the galaxy, serve Taris and hold your own. Join the Hutt Cartel and prove your worth, pay for the unions dues my way and I will allow them to travel to Taris.”.

```text
Journal SW_TarisSectManu 15
PlaySound3d "HuttVA1"
Choice "If this is the only way." 1 "What if I hire them? I can pay 10,000 credits." 2
```

### Stage 18

I've paid Badhiya the Hutt sufficiently to release the union workers of Nar Shaddaa to Taris.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 20

Badhiya the Hutt has released the union workers, I should return to their steward to ask when they'll arrive.

**How this stage is set:**
- Dialogue INFO `2696268181368617081` under topic **Manufacturing Sector**; speaker Badhiya (`Bng_Badhiya`). locations: `Nar Shaddaa, Hutt Cartel`. conditions: Journal `SW_TarisSectManu` Equal 15; Journal `SW_HuttCartel` Equal 170. response: “You have earned my aid, and are a legend among the underworld. I will release these workers to Taris. Now leave Badhiya.”.

```text
Journal SW_TarisSectManu 20
StartScript SW_TarisCapTowerQuickBuild
PlaySound3d "HuttVA1"
```
- Dialogue INFO `764563483087813810` under topic **Manufacturing Sector**; speaker Badhiya (`Bng_Badhiya`). locations: `Nar Shaddaa, Hutt Cartel`. conditions: Journal `SW_TarisSectManu` Equal 15; Function/Choice Equal 2; Item/ItemType `Gold_001` GreaterEqual 10000. response: “This I will accept, I will release these workers to Taris. Now leave Badhiya.”.

```text
PlaySound3d "HuttVA1"
Journal SW_TarisSectManu 20
player->removeitem gold_001 10000
Goodbye
```

### Stage 25

The unions of Nar Shaddaa will come to the aid of Taris, I should return to Shade and report this to her.

**How this stage is set:**
- Dialogue INFO `795130934246235791` under topic **Manufacturing Sector**; speaker Union Steward (`SW_NarUnionBoss`). locations: `Nar Shaddaa, Union Headquarters`. conditions: Journal `SW_TarisSectManu` Equal 18. response: “You paid off the Hutts? You came prepared, I wasn't expecting that. I'm glad you made it out of there in one piece, our workers will arrive soon on Taris to give you aid. If it can be built, we can be build it.”.

```text
Journal SW_TarisSectManu 25
```
- Dialogue INFO `46131855649794198` under topic **Manufacturing Sector**; speaker Union Steward (`SW_NarUnionBoss`). locations: `Nar Shaddaa, Union Headquarters`. conditions: Journal `SW_TarisSectManu` Equal 20. response: “We've heard of your deeds, you are not someone to be trifled with. I'm sorry the Hutts dragged you into their messes, but our workers will arrive soon on Taris to give you aid. If it can be built, we can be build it.”.

```text
Journal SW_TarisSectManu 25
```

### Stage 30 — Finished

Shade paid me for my efforts and is grateful for Nar Shaddaas aid. I should look into other contacts we need to gather.

**How this stage is set:**
- Dialogue INFO `1289775263021317529` under topic **Manufacturing Sector**; speaker Shade Vendas (`SW_ShadeTower`). locations: `Taris, Central Plaza: Capital Tower`. conditions: Journal `SW_TarisSectManu` Equal 25. response: “Nar Shaddaa is sending aid? Please, I don't want to know what you had to do to make this happen, but I am forever grateful.”.

```text
StopSound "KelliMan3"
PlaySound3D "KelliMan3"
Journal SW_TarisSectManu 30
player->additem gold_001 2500
```

### Related records and locations

**Dialogue speakers:**
- Badhiya (`Bng_Badhiya`) — `Nar Shaddaa, Hutt Cartel`
- Union Steward (`SW_NarUnionBoss`) — `Nar Shaddaa, Union Headquarters`
- Shade Vendas (`SW_ShadeTower`) — `Taris, Central Plaza: Capital Tower`

**Scripts that read or write this journal:**
- `SW_TarisGvnBldNpcManu` — Npc Erneash Hullpas (`SW_TarisGvnNpc3`); placed in `Taris, Central Plaza: Government Office B`; Npc Conntyre Gilsgar (`SW_TarisGvnNpc4`); placed in `Taris, Central Plaza: Government Office B`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Nar Shaddaa, Hutt Cartel`
- `Nar Shaddaa, Union Headquarters`
- `Taris, Central Plaza: Capital Tower`
- `Taris, Central Plaza: Government Office B`

<details><summary>Journal-state readers (1 code sites)</summary>

- Script `SW_TarisGvnBldNpcManu`. attached to Npc Erneash Hullpas (`SW_TarisGvnNpc3`); placed in `Taris, Central Plaza: Government Office B`; Npc Conntyre Gilsgar (`SW_TarisGvnNpc4`); placed in `Taris, Central Plaza: Government Office B`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: An enormous amount of construction is going to take place to restore this city. Shade would like me to head to…
- [ ] Reach index `10`: I spoke to the Union Steward in Peyuska Plaza who told me that they have to have loyalty to the Hutts. I need …
- [ ] Reach index `15`: Badhiya the Hutt wants me to rise in the ranks of the Hutt Cartel and do his bidding before he will release th…
- [ ] Reach index `18`: I've paid Badhiya the Hutt sufficiently to release the union workers of Nar Shaddaa to Taris.
- [ ] Reach index `20`: Badhiya the Hutt has released the union workers, I should return to their steward to ask when they'll arrive.
- [ ] Reach index `25`: The unions of Nar Shaddaa will come to the aid of Taris, I should return to Shade and report this to her.
- [ ] Reach index `30` (`Finished`): Shade paid me for my efforts and is grateful for Nar Shaddaas aid. I should look into other contacts we need t…
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_TarisSectManu`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
