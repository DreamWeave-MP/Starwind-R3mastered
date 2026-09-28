---
title: "The Cantina Troublemaker"
description: "Walkthrough and QA reference for The Cantina Troublemaker (SW_KylealiQuest)."
weight: 82
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_KylealiQuest"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_KylealiQuest` |
| **Category** | Side Quests |
| **Journal entries** | 7 |
| **Completion branches** | 3 |
| **Starts by** | Speak with **Kyleali Allrobb** in **Tatooine, Sandriver** and ask about **troublemaker**. |
| **Key locations** | Tatooine, Cantina, Tatooine, Sandriver |
| **Key characters** | Kyleali Allrobb, Seaconn Loanmow |

## Walkthrough

### 1. Speak with Kyleali Allrobb in Tatooine, Sandriver and ask about troublemaker

Speak with **Kyleali Allrobb** in **Tatooine, Sandriver** and ask about **troublemaker**.

> **Expected journal update — index 10:** I was approached by a Czerka Militant named Kyleali. She asked me to take care of a troublemaker in the nearby cantina in Sandriver. She offered a few credits, so I should at least go and see what this about.

### 2. Speak with Seaconn Loanmow in Tatooine, Cantina and ask about troublemaker

Speak with **Seaconn Loanmow** in **Tatooine, Cantina** and ask about **troublemaker**.

> **Expected journal update — index 15:** I let the troublemaker go. No doubt Kyleali is going to be angry with me.

### 3. Speak with Seaconn Loanmow in Tatooine, Cantina and ask about troublemaker

Speak with **Seaconn Loanmow** in **Tatooine, Cantina** and ask about **troublemaker**.

> **Expected journal update — index 20:** The troublemaker drew a vibroblade on me and I was forced to defend myself. It was a foolish action, and led to his untimely death. Kyleali didn't care what happened to him, though, so I suspect I'll still be rewarded for taking care of him.

### 4. Speak with Kyleali Allrobb in Tatooine, Sandriver and ask about troublemaker — Finished

Speak with **Kyleali Allrobb** in **Tatooine, Sandriver** and ask about **troublemaker**.

> **Expected journal update — index 25:** Kyleali wasn't pleased with how I handled the situation and practically threw me out of her sights. I suspect I'll be a little less welcome in Sandriver from here on out.

**Outcome:** this journal entry is marked as a finished branch.

### 5. Speak with Kyleali Allrobb in Tatooine, Sandriver and ask about troublemaker — Finished

Speak with **Kyleali Allrobb** in **Tatooine, Sandriver** and ask about **troublemaker**.

> **Expected journal update — index 30:** Kyleali rewarded me well for killing the troublemaker. The cantina owners may not be happy, but I suspect the people of Sandriver will appreciate this more than I realize.

**Known item transfer:** 200 × **Credits** (`gold_001`).

**Outcome:** this journal entry is marked as a finished branch.

### 6. Find Kyleali Allrobb in Tatooine, Sandriver and complete the encounter — Finished

Find **Kyleali Allrobb** in **Tatooine, Sandriver** and complete the encounter.

> **Expected journal update — index 35:** I murdered Kyleali.

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has **3 explicit finished entries**. Treat them as branch coverage targets during playtesting:

- **Index 25:** Kyleali wasn't pleased with how I handled the situation and practically threw me out of her sights. I suspect I'll be a little less welcome in Sandriver from here on out.
- **Index 30:** Kyleali rewarded me well for killing the troublemaker. The cantina owners may not be happy, but I suspect the people of Sandriver will appreciate this more than I realize.
- **Index 35:** I murdered Kyleali.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 200 × **Credits** (`gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Kyleali Allrobb** (`TatooineKyleali`) — `Tatooine, Sandriver`
- **Seaconn Loanmow** (`TatooineSeaconn`) — `Tatooine, Cantina`

**Locations implicated by actor/object placement or explicit travel:**
- **Tatooine, Cantina**
- **Tatooine, Sandriver**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_KylealiQuest`
**Generated category:** Side Quests
**Journal entries:** 7

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 10 | — | I was approached by a Czerka Militant named Kyleali. She asked me to take care of a troublemaker in the nearby cantina in Sandriver. She offered a few credits, so I should at least go and see what this about. | 1 |
| 15 | — | I let the troublemaker go. No doubt Kyleali is going to be angry with me. | 1 |
| 20 | — | The troublemaker drew a vibroblade on me and I was forced to defend myself. It was a foolish action, and led to his untimely death. Kyleali didn't care what happened to him, though, so I suspect I'll still be rewarded for taking care of him. | 1 |
| 25 | Finished | Kyleali wasn't pleased with how I handled the situation and practically threw me out of her sights. I suspect I'll be a little less welcome in Sandriver from here on out. | 1 |
| 30 | Finished | Kyleali rewarded me well for killing the troublemaker. The cantina owners may not be happy, but I suspect the people of Sandriver will appreciate this more than I realize. | 1 |
| 35 | Finished | I murdered Kyleali. | 1 |

### Record-level trigger map

### Stage 10

I was approached by a Czerka Militant named Kyleali. She asked me to take care of a troublemaker in the nearby cantina in Sandriver. She offered a few credits, so I should at least go and see what this about.

**How this stage is set:**
- Dialogue INFO `1630718618161021723` under topic **troublemaker**; speaker Kyleali Allrobb (`TatooineKyleali`). locations: `Tatooine, Sandriver`. conditions: Function/Choice Equal 1. response: “Looking forward to hearing some good news, the nasty bastard's been causing trouble for hours now in there. Just head on into the cantina right past me. He'll be by the bar most likely. Take care of him however you wish. Czerka will not interfere. Oh, by the name, his name is Seaconn.”.

```text
Journal, SW_KylealiQuest, 10
StopSound "SW_KylCzerka"
StopSound "SW_KylGreeting1"
```

### Stage 15

I let the troublemaker go. No doubt Kyleali is going to be angry with me.

**How this stage is set:**
- Dialogue INFO `2397813432993117642` under topic **troublemaker**; speaker Seaconn Loanmow (`TatooineSeaconn`). locations: `Tatooine, Cantina`. conditions: Function/Choice Equal 2. response: “Yeah, right. Git lost, bantha fodder. Before I make ya swallow yer teeth.”.

```text
Journal, SW_KylealiQuest, 15
Goodbye
Stopsound "SW_SeaGreet1"
```

### Stage 20

The troublemaker drew a vibroblade on me and I was forced to defend myself. It was a foolish action, and led to his untimely death. Kyleali didn't care what happened to him, though, so I suspect I'll still be rewarded for taking care of him.

**How this stage is set:**
- Dialogue INFO `1432139951428214560` under topic **troublemaker**; speaker Seaconn Loanmow (`TatooineSeaconn`). locations: `Tatooine, Cantina`. conditions: Function/Choice Equal 1. response: “I'm not about tae take sum shit from no one in this backwater. Die!”.

```text
Startcombat, player
Journal, SW_KylealiQuest, 20
Goodbye
Stopsound "SW_SeaGreet1"
```

### Stage 25 — Finished

Kyleali wasn't pleased with how I handled the situation and practically threw me out of her sights. I suspect I'll be a little less welcome in Sandriver from here on out.

**How this stage is set:**
- Dialogue INFO `549525560100023483` under topic **troublemaker**; speaker Kyleali Allrobb (`TatooineKyleali`). locations: `Tatooine, Sandriver`. conditions: Journal `SW_KylealiQuest` Equal 15. response: “You let him go? You unfiltered idiot! You complete failure! I told you to deal with him, not let him stir more trouble! Dammit, get outta here! You got no stomach for blood, so you're useless! Bah, filthy desert people....”.

```text
Moddisposition, -50
Journal, "SW_KylealiQuest", 25
StopSound "SW_KylCzerka"
StopSound "SW_KylGreeting1"
```

### Stage 30 — Finished

Kyleali rewarded me well for killing the troublemaker. The cantina owners may not be happy, but I suspect the people of Sandriver will appreciate this more than I realize.

**How this stage is set:**
- Dialogue INFO `19519192992373216806` under topic **troublemaker**; speaker Kyleali Allrobb (`TatooineKyleali`). locations: `Tatooine, Sandriver`. conditions: Journal `SW_KylealiQuest` Equal 20. response: “I heard there was a bigger ruckus in the cantina. Bigger than a Sand People attack. That was you? Well, since you're standing here I assume you offed the idiot. Very well, you did better than I ever could. Here. As promised. 200 credits. Spend them well, my friend. Spend them well.”.

```text
player->modreputation 1
Player->additem, gold_001, 200
Journal, "SW_KylealiQuest", 30
StopSound "SW_KylCzerka"
StopSound "SW_KylGreeting1"
```

### Stage 35 — Finished

I murdered Kyleali.

**How this stage is set:**
- Script `KylealiScript`. attached to Npc Kyleali Allrobb (`TatooineKyleali`); placed in `Tatooine, Sandriver`.

```text
if (GetJournalIndex "SW_KylealiQuest" >= 10)
        if (GetJournalIndex "SW_KylealiQuest" <= 20)
            Journal SW_KylealiQuest 35
        ENDIF
    endif
```

### Related records and locations

**Dialogue speakers:**
- Kyleali Allrobb (`TatooineKyleali`) — `Tatooine, Sandriver`
- Seaconn Loanmow (`TatooineSeaconn`) — `Tatooine, Cantina`

**Scripts that read or write this journal:**
- `KylealiScript` — Npc Kyleali Allrobb (`TatooineKyleali`); placed in `Tatooine, Sandriver`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Tatooine, Cantina`
- `Tatooine, Sandriver`

<details><summary>Journal-state readers (1 code sites)</summary>

- Script `KylealiScript`. attached to Npc Kyleali Allrobb (`TatooineKyleali`); placed in `Tatooine, Sandriver`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `10` is obtainable.
- [ ] Reach index `10`: I was approached by a Czerka Militant named Kyleali. She asked me to take care of a troublemaker in the nearby…
- [ ] Reach index `15`: I let the troublemaker go. No doubt Kyleali is going to be angry with me.
- [ ] Reach index `20`: The troublemaker drew a vibroblade on me and I was forced to defend myself. It was a foolish action, and led t…
- [ ] Reach index `25` (`Finished`): Kyleali wasn't pleased with how I handled the situation and practically threw me out of her sights. I suspect …
- [ ] Reach index `30` (`Finished`): Kyleali rewarded me well for killing the troublemaker. The cantina owners may not be happy, but I suspect the …
- [ ] Reach index `35` (`Finished`): I murdered Kyleali.
- [ ] Branch coverage: this journal has **3 different `Finished` entries**; test each reachable completion branch.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_KylealiQuest`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
