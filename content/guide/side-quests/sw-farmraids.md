---
title: "Farm Raids"
description: "Walkthrough and QA reference for Farm Raids (SW_FarmRaids)."
weight: 39
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_FarmRaids"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_FarmRaids` |
| **Category** | Side Quests |
| **Journal entries** | 6 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Urm Bluttier** in **Dantooine, Ballast** and ask about **raiders**. |
| **Key locations** | Dantooine, Ballast, Dantooine, Kath Cave |
| **Key characters** | Urm Bluttier |

## Walkthrough

### 1. Speak with Urm Bluttier in Dantooine, Ballast and ask about raiders

Speak with **Urm Bluttier** in **Dantooine, Ballast** and ask about **raiders**.

> **Expected journal update — index 5:** I spoke to a farmer named Urm Bluttier who told me that Dantari Raiders have been attacking his farm, and that in the last attack they burnt his crop fields and his home. The Lucienelle Estate sent a patrol into the Dantari Wilds to investigate but Urm is insisting that they are in a cave somewhere on Lucienelle grounds.

### 2. Speak with Urm Bluttier in Dantooine, Ballast and ask about raiders

Speak with **Urm Bluttier** in **Dantooine, Ballast** and ask about **raiders**.

> **Expected journal update — index 7:** I told the farmer Urm Bluttier that I don't have time to help him with his raider problem, but if I have time or happen in the cave near Ballast I could take care of those raiders and return for a reward.

### 3. Speak with Urm Bluttier in Dantooine, Ballast and ask about raiders

Speak with **Urm Bluttier** in **Dantooine, Ballast** and ask about **raiders**.

> **Expected journal update — index 10:** I have told the farmer Urm Bluttier that I would take care of these raiders, if they are indeed in a cave on Lucienelle grounds.

### 4. Find Daranti Raider in Dantooine, Kath Cave and complete the encounter

Find **Daranti Raider** in **Dantooine, Kath Cave** and complete the encounter.

> **Expected journal update — index 15:** The Dantari raiders are dead, I should return to Urm Bluttier and inform him they've been taken care of.

### 5. Speak with Urm Bluttier in Dantooine, Ballast and ask about raiders — Finished

Speak with **Urm Bluttier** in **Dantooine, Ballast** and ask about **raiders**.

> **Expected journal update — index 20:** Urm was grateful that I dispatched the raiders in the area, he gave me what credits he could, and is abandoning him destroyed farm to nature now.

**Known item transfer:** 100 × **Credits** (`Gold_001`).

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 20**:

> Urm was grateful that I dispatched the raiders in the area, he gave me what credits he could, and is abandoning him destroyed farm to nature now.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 100 × **Credits** (`Gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Urm Bluttier** (`SW_HumanFarmerQuester`) — `Dantooine, Ballast`

**Locations implicated by actor/object placement or explicit travel:**
- **Dantooine, Ballast**
- **Dantooine, Kath Cave**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_FarmRaids`
**Generated category:** Side Quests
**Journal entries:** 6

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | I spoke to a farmer named Urm Bluttier who told me that Dantari Raiders have been attacking his farm, and that in the last attack they burnt his crop fields and his home. The Lucienelle Estate sent a patrol into the Dantari Wilds to investigate but Urm is insisting that they are in a cave somewhere on Lucienelle grounds. | 1 |
| 7 | — | I told the farmer Urm Bluttier that I don't have time to help him with his raider problem, but if I have time or happen in the cave near Ballast I could take care of those raiders and return for a reward. | 1 |
| 10 | — | I have told the farmer Urm Bluttier that I would take care of these raiders, if they are indeed in a cave on Lucienelle grounds. | 1 |
| 15 | — | The Dantari raiders are dead, I should return to Urm Bluttier and inform him they've been taken care of. | 1 |
| 20 | Finished | Urm was grateful that I dispatched the raiders in the area, he gave me what credits he could, and is abandoning him destroyed farm to nature now. | 1 |

### Record-level trigger map

### Stage 5

I spoke to a farmer named Urm Bluttier who told me that Dantari Raiders have been attacking his farm, and that in the last attack they burnt his crop fields and his home. The Lucienelle Estate sent a patrol into the Dantari Wilds to investigate but Urm is insisting that they are in a cave somewhere on Lucienelle grounds.

**How this stage is set:**
- Dialogue INFO `2536329493736312571` under topic **raiders**; speaker Urm Bluttier (`SW_HumanFarmerQuester`). locations: `Dantooine, Ballast`. conditions: Journal `SW_FarmRaids` Equal 0. response: “Yes, Dantari natives. They burned my crops, and in their last attack they burned my home. I have nothing left, my home is destroyed and I'll be back to being a slave for Lucienelle. That doesn't matter though, I just want justice. Lucienelle sent a patrol into the wildlands to look for the raiders, but I know they're here on Lucienelle grounds. They're hiding in a cave somwhere with the animals. Kill them, kill them all, please, they are a danger to anyone that roams this land.”.

```text
Journal SW_FarmRaids 5
Choice "I'll deal with these raiders." 1 "I don't have time for this." 2
```

### Stage 7

I told the farmer Urm Bluttier that I don't have time to help him with his raider problem, but if I have time or happen in the cave near Ballast I could take care of those raiders and return for a reward.

**How this stage is set:**
- Dialogue INFO `3182440622992015242` under topic **raiders**; speaker Urm Bluttier (`SW_HumanFarmerQuester`). locations: `Dantooine, Ballast`. conditions: Function/Choice Equal 2. response: “Then they will continue to burn and murder.”.

```text
Journal SW_FarmRaids 7
goodbye
```

### Stage 10

I have told the farmer Urm Bluttier that I would take care of these raiders, if they are indeed in a cave on Lucienelle grounds.

**How this stage is set:**
- Dialogue INFO `29229439968371900` under topic **raiders**; speaker Urm Bluttier (`SW_HumanFarmerQuester`). locations: `Dantooine, Ballast`. conditions: Function/Choice Equal 1. response: “Finally, someone comes to Ballast that has a heart. They must be hiding in a cave near here, otherwise the patrols would catch them. I will be here to celebrate your return.”.

```text
Journal SW_FarmRaids 10
```

### Stage 15

The Dantari raiders are dead, I should return to Urm Bluttier and inform him they've been taken care of.

**How this stage is set:**
- Script `SW_DarantiCaveScript`. attached to Npc Daranti Raider (`SW_DarantiCaveQuestNPC`); placed in `Dantooine, Kath Cave`.

```text
If ( GetDeadCount, "SW_DarantiCaveQuestNPC" >= 3 )
    Journal SW_FarmRaids 15
Endif
```

### Stage 20 — Finished

Urm was grateful that I dispatched the raiders in the area, he gave me what credits he could, and is abandoning him destroyed farm to nature now.

**How this stage is set:**
- Dialogue INFO `13710191442554822540` under topic **raiders**; speaker Urm Bluttier (`SW_HumanFarmerQuester`). locations: `Dantooine, Ballast`. conditions: Journal `SW_FarmRaids` Equal 15. response: “You've killed them? I'll see you always as a lord for what you've done, if you are ever in need, you will find me in Ballast. I have nowhere else to go, and I'll never rebuild this home, it's food for the grass now. Thank you again stranger.”.

```text
Journal SW_FarmRaids 20
Player->AddItem Gold_001, 100
```

### Related records and locations

**Dialogue speakers:**
- Urm Bluttier (`SW_HumanFarmerQuester`) — `Dantooine, Ballast`

**Scripts that read or write this journal:**
- `SW_DarantiCaveScript` — Npc Daranti Raider (`SW_DarantiCaveQuestNPC`); placed in `Dantooine, Kath Cave`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Dantooine, Ballast`
- `Dantooine, Kath Cave`

<details><summary>Journal-state readers (1 code sites)</summary>

- Script `SW_DarantiCaveScript`. attached to Npc Daranti Raider (`SW_DarantiCaveQuestNPC`); placed in `Dantooine, Kath Cave`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: I spoke to a farmer named Urm Bluttier who told me that Dantari Raiders have been attacking his farm, and that…
- [ ] Reach index `7`: I told the farmer Urm Bluttier that I don't have time to help him with his raider problem, but if I have time …
- [ ] Reach index `10`: I have told the farmer Urm Bluttier that I would take care of these raiders, if they are indeed in a cave on L…
- [ ] Reach index `15`: The Dantari raiders are dead, I should return to Urm Bluttier and inform him they've been taken care of.
- [ ] Reach index `20` (`Finished`): Urm was grateful that I dispatched the raiders in the area, he gave me what credits he could, and is abandonin…
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_FarmRaids`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
