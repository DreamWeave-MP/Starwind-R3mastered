---
title: "Canerous"
description: "Walkthrough and QA reference for Canerous (SW_ExpMando)."
weight: 2
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_ExpMando"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_ExpMando` |
| **Category** | Expansion / PlanExp |
| **Journal entries** | 4 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Jean Lavigne** in **Dantooine, Lavigne Estate** and ask about **bounty**. |
| **Key locations** | Dantooine, Dantari Wilds, Dantooine, Lavigne Estate |
| **Key characters** | Jean Lavigne |

## Walkthrough

### 1. Speak with Jean Lavigne in Dantooine, Lavigne Estate and ask about bounty

Speak with **Jean Lavigne** in **Dantooine, Lavigne Estate** and ask about **bounty**.

> **Expected journal update — index 5:** Jean Lavigne has a bounty on him and has a mandalorian bounty hunter by the name of Canerous looking for him on Dantooine. Jean believes Canerous is looking through the dantari wilds. Jean says dispatching Canerous should be rewarding for me as well, due to some whistle that allegedly charms the local Kath Hounds.

### 2. Defeat Canerous Morto in Dantooine, Dantari Wilds and allow its script to update the quest

Defeat **Canerous Morto** in **Dantooine, Dantari Wilds** and allow its script to update the quest.

> **Expected journal update — index 10:** Canerous is dead, and the whistle turned out to be real. If I end up in Jean's area I could let him know that Canerous is dead.

### 3. Speak with Jean Lavigne in Dantooine, Lavigne Estate and ask about bounty — Finished

Speak with **Jean Lavigne** in **Dantooine, Lavigne Estate** and ask about **bounty**.

> **Expected journal update — index 15:** Jean was grateful to hear about Canerous' demise. He says I'm always welcome at his manor if I need sanctuary.

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 15**:

> Jean was grateful to hear about Canerous' demise. He says I'm always welcome at his manor if I need sanctuary.

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Jean Lavigne** (`SW_ExpLavJo`) — `Dantooine, Lavigne Estate`

**Locations implicated by actor/object placement or explicit travel:**
- **Dantooine, Dantari Wilds**
- **Dantooine, Lavigne Estate**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_ExpMando`
**Generated category:** Expansion / PlanExp
**Journal entries:** 4

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | Jean Lavigne has a bounty on him and has a mandalorian bounty hunter by the name of Canerous looking for him on Dantooine. Jean believes Canerous is looking through the dantari wilds. Jean says dispatching Canerous should be rewarding for me as well, due to some whistle that allegedly charms the local Kath Hounds. | 1 |
| 10 | — | Canerous is dead, and the whistle turned out to be real. If I end up in Jean's area I could let him know that Canerous is dead. | 1 |
| 15 | Finished | Jean was grateful to hear about Canerous' demise. He says I'm always welcome at his manor if I need sanctuary. | 1 |

### Record-level trigger map

### Stage 5

Jean Lavigne has a bounty on him and has a mandalorian bounty hunter by the name of Canerous looking for him on Dantooine. Jean believes Canerous is looking through the dantari wilds. Jean says dispatching Canerous should be rewarding for me as well, due to some whistle that allegedly charms the local Kath Hounds.

**How this stage is set:**
- Dialogue INFO `1546318301722027734` under topic **bounty**; speaker Jean Lavigne (`SW_ExpLavJo`). locations: `Dantooine, Lavigne Estate`. conditions: Journal `SW_ExpMando` Equal 0. response: “One of my expeditions seems to have rubbed a competitor on Nar Shaddaa the wrong way. They've sent a mandalorian bounty hunter by the name of Canerous to assassinate me. Luckily he hasn't found me yet, but I've found him. I have no reward for killing him, but he's worth enough as it is. In his posession is a whistle that charms the nearby kath hounds, an item useful to any adventurer. It could be in both of our interests if you're heading that direction.”.

```text
Journal SW_ExpMando 5
SW_ExpCanerous->Enable
```

### Stage 10

Canerous is dead, and the whistle turned out to be real. If I end up in Jean's area I could let him know that Canerous is dead.

**How this stage is set:**
- Script `SW_ExpCanScript`. attached to Npc Canerous Morto (`SW_ExpCanerous`); placed in `Dantooine, Dantari Wilds`.

```text
If ( OnDeath )
    Journal SW_ExpMando 10
Endif
```

### Stage 15 — Finished

Jean was grateful to hear about Canerous' demise. He says I'm always welcome at his manor if I need sanctuary.

**How this stage is set:**
- Dialogue INFO `75039392509117159` under topic **bounty**; speaker Jean Lavigne (`SW_ExpLavJo`). locations: `Dantooine, Lavigne Estate`. conditions: Journal `SW_ExpMando` Equal 10. response: “That is a relief to hear. Canerous was competent, which means you're even moreso. If you ever end up on the wrong lists, you're always welcome to seek sanctuary in our estate.”.

```text
Journal SW_ExpMando 15
```

### Related records and locations

**Dialogue speakers:**
- Jean Lavigne (`SW_ExpLavJo`) — `Dantooine, Lavigne Estate`

**Scripts that read or write this journal:**
- `SW_ExpCanScript` — Npc Canerous Morto (`SW_ExpCanerous`); placed in `Dantooine, Dantari Wilds`

**Cells implicated by actor/object placement or explicit travel code:**
- `Dantooine, Dantari Wilds`
- `Dantooine, Lavigne Estate`

<details><summary>Journal-state readers (1 code sites)</summary>

- Script `SW_ExpCanScript`. attached to Npc Canerous Morto (`SW_ExpCanerous`); placed in `Dantooine, Dantari Wilds`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: Jean Lavigne has a bounty on him and has a mandalorian bounty hunter by the name of Canerous looking for him o…
- [ ] Reach index `10`: Canerous is dead, and the whistle turned out to be real. If I end up in Jean's area I could let him know that …
- [ ] Reach index `15` (`Finished`): Jean was grateful to hear about Canerous' demise. He says I'm always welcome at his manor if I need sanctuary.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_ExpMando`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
