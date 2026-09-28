---
title: "The Lost Hunter III"
description: "Walkthrough and QA reference for The Lost Hunter III (SW_GavanQuest3)."
weight: 98
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_GavanQuest3"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_GavanQuest3` |
| **Category** | Side Quests |
| **Journal entries** | 6 |
| **Completion branches** | 2 |
| **Starts by** | Speak with **Gavan Dakrih** in **Manaan, Ignatious' Reef**. |
| **Key locations** | Manaan, Cantina, Manaan, Ignatious' Reef, Manaan, Submersible Docking Bay |
| **Key characters** | Gavan Dakrih |

## Walkthrough

### 1. Speak with Gavan Dakrih in Manaan, Ignatious' Reef

Speak with **Gavan Dakrih** in **Manaan, Ignatious' Reef**.

> **Expected journal update — index 5:** I honestly don't even know anymore. I encountered Gavan Dakrih once more, this time in the waters deep below Manaan's surface. As expected, he was lost once again. I question this man's ability to even take basic care of himself.

### 2. Speak with Gavan Dakrih in Manaan, Ignatious' Reef and ask about lost

Speak with **Gavan Dakrih** in **Manaan, Ignatious' Reef** and ask about **lost**.

> **Expected journal update — index 10:** I'm not exactly certain why, but I decided to help Gavan once more against my better judgement. He needs to get to Ahto City. He hasn't promised me anything, but if our last two encounters are anything to go by, I may get something out of this.

### 3. Defeat Gavan Dakrih in Manaan, Ignatious' Reef and allow its script to update the quest

Defeat **Gavan Dakrih** in **Manaan, Ignatious' Reef** and allow its script to update the quest.

> **Expected journal update — index 15:** We have reached Ahto City. Gavan should speak to me.

### 4. Speak with Gavan Dakrih in Manaan, Ignatious' Reef and ask about lost — Finished

Speak with **Gavan Dakrih** in **Manaan, Ignatious' Reef** and ask about **lost**.

> **Expected journal update — index 20:** After bringing Gavan back to Ahto City, he thanked me profusely before proclaiming that he's giving up the life of a hunter. He said he doesn't know what he'll do, but he finally realizes that he can't take care of himself. As a token of his thanks, he increased my credit account and gave me a spear from one of the Liphos that he had claimed to have killed. For his sake, he better not go around boasting about that....

**Outcome:** this journal entry is marked as a finished branch.

### 5. Defeat Gavan Dakrih in Manaan, Ignatious' Reef and allow its script to update the quest — Finished

Defeat **Gavan Dakrih** in **Manaan, Ignatious' Reef** and allow its script to update the quest.

> **Expected journal update — index 25:** Gavan died in my company.

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has **2 explicit finished entries**. Treat them as branch coverage targets during playtesting:

- **Index 20:** After bringing Gavan back to Ahto City, he thanked me profusely before proclaiming that he's giving up the life of a hunter. He said he doesn't know what he'll do, but he finally realizes that he can't take care of himself. As a token of his thanks, he increased my credit account and gave me a spear from one of the Liphos that he had claimed to have killed. For his sake, he better not go around boasting about that....
- **Index 25:** Gavan died in my company.

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Gavan Dakrih** (`ManaanGavan`) — `Manaan, Ignatious' Reef`

**Locations implicated by actor/object placement or explicit travel:**
- **Manaan, Cantina**
- **Manaan, Ignatious' Reef**
- **Manaan, Submersible Docking Bay**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_GavanQuest3`
**Generated category:** Side Quests
**Journal entries:** 6

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | I honestly don't even know anymore. I encountered Gavan Dakrih once more, this time in the waters deep below Manaan's surface. As expected, he was lost once again. I question this man's ability to even take basic care of himself. | 1 |
| 10 | — | I'm not exactly certain why, but I decided to help Gavan once more against my better judgement. He needs to get to Ahto City. He hasn't promised me anything, but if our last two encounters are anything to go by, I may get something out of this. | 1 |
| 15 | — | We have reached Ahto City. Gavan should speak to me. | 1 |
| 20 | Finished | After bringing Gavan back to Ahto City, he thanked me profusely before proclaiming that he's giving up the life of a hunter. He said he doesn't know what he'll do, but he finally realizes that he can't take care of himself. As a token of his thanks, he increased my credit account and gave me a spear from one of the Liphos that he had claimed to have killed. For his sake, he better not go around boasting about that.... | 1 |
| 25 | Finished | Gavan died in my company. | 1 |

### Record-level trigger map

### Stage 5

I honestly don't even know anymore. I encountered Gavan Dakrih once more, this time in the waters deep below Manaan's surface. As expected, he was lost once again. I question this man's ability to even take basic care of himself.

**How this stage is set:**
- Dialogue INFO `9231114051226815506` under topic **Greeting 5**; speaker Gavan Dakrih (`ManaanGavan`). locations: `Manaan, Ignatious' Reef`. conditions: Function/TalkedToPc Equal 0; Journal `SW_GavanQuest3` Less 5. response: “What on earth... It's you! What are you doing out here?! Oh, this must be fate itself! I had never believed in it before but this just proves it! How are you doing? It's been a while, yes? I've been up and down myself... Right now, I'm trying to get my bearings... I'm a little lost.”.

```text
Journal, SW_GavanQuest3, 5
KashyyykGavan->Disable
```

### Stage 10

I'm not exactly certain why, but I decided to help Gavan once more against my better judgement. He needs to get to Ahto City. He hasn't promised me anything, but if our last two encounters are anything to go by, I may get something out of this.

**How this stage is set:**
- Dialogue INFO `17742216362973916155` under topic **lost**; speaker Gavan Dakrih (`ManaanGavan`). locations: `Manaan, Ignatious' Reef`. conditions: Function/Choice Equal 4. response: “I know, I know... But you have no idea how thankful I am of you... You've saved my life twice now. I hope one day I can repay you.... Alright. Let's go. I need to get to Ahto City. When we get to Ahto City, I'll speak with you again.”.

```text
Journal, SW_GavanQuest3, 10
Moddisposition, 5
AIFollow, Player, 0, 0, 0, 0
```

### Stage 15

We have reached Ahto City. Gavan should speak to me.

**How this stage is set:**
- Script `GavanManaanScript`. attached to Npc Gavan Dakrih (`ManaanGavan`); placed in `Manaan, Ignatious' Reef`.

```text
if (GetJournalIndex, "SW_GavanQuest3" == 10)
    If (OnDeath == 1)
        Journal, SW_GavanQuest3, 25
    endif
endif
```

```text
If (GetDistance SW_SelkathSubmerse <= 1000)
    if (DoThrice == 2)
        journal, SW_GavanQuest3, 15
        forcegreeting
        set DoThrice to 3
```

### Stage 20 — Finished

After bringing Gavan back to Ahto City, he thanked me profusely before proclaiming that he's giving up the life of a hunter. He said he doesn't know what he'll do, but he finally realizes that he can't take care of himself. As a token of his thanks, he increased my credit account and gave me a spear from one of the Liphos that he had claimed to have killed. For his sake, he better not go around boasting about that....

**How this stage is set:**
- Dialogue INFO `1247012536145316722` under topic **lost**; speaker Gavan Dakrih (`ManaanGavan`). locations: `Manaan, Ignatious' Reef`. cell constraint `Manaan, Submersible Docking Bay`. conditions: Journal `SW_GavanQuest3` Equal 10. response: “Ah, and here we are. Ahto City. Amazing. You truly are something, my friend.Thank you. Thank you, thank you, thank you. I wish I was half the adventurer you are... And that makes me believe that being a hunter isn't the life for me. I'm gonna stop this nonsense starting now... but I'm not sure what else to do. I'll figure it out, I suppose. Here. As thanks. Some credits. Oh, and this spear I got from one of those freaky Liphos. It was a daring fight, but I got the better of that fishthing. See you around!”.

```text
Moddisposition, 50
AIWander, 200, 0, 0, 20, 20, 20, 20, 0, 0, 0, 20, 0
Journal, SW_GavanQuest3, 20
ModPCFacRep 1 "SW_Hunters"
player->modreputation 1
```

### Stage 25 — Finished

Gavan died in my company.

**How this stage is set:**
- Script `GavanManaanScript`. attached to Npc Gavan Dakrih (`ManaanGavan`); placed in `Manaan, Ignatious' Reef`.

```text
if (GetJournalIndex, "SW_GavanQuest3" == 10)
    If (OnDeath == 1)
        Journal, SW_GavanQuest3, 25
    endif
endif
```

```text
If (GetDistance SW_SelkathSubmerse <= 1000)
    if (DoThrice == 2)
        journal, SW_GavanQuest3, 15
        forcegreeting
        set DoThrice to 3
```

### Related records and locations

**Dialogue speakers:**
- Gavan Dakrih (`ManaanGavan`) — `Manaan, Ignatious' Reef`

**Scripts that read or write this journal:**
- `GavanManaanScript` — Npc Gavan Dakrih (`ManaanGavan`); placed in `Manaan, Ignatious' Reef`
- `GavanRelocate2ManaanScript` — Activator Gavan Dummy Mover (`SW_GavanMover3`); placed in `Manaan, Cantina`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)
- Breath Mask (`SW_GMask1`)
- Liphoformian Adapted Spear (`SW_LiphoSpear`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Manaan, Cantina`
- `Manaan, Ignatious' Reef`
- `Manaan, Submersible Docking Bay`

<details><summary>Journal-state readers (2 code sites)</summary>

- Script `GavanManaanScript`. attached to Npc Gavan Dakrih (`ManaanGavan`); placed in `Manaan, Ignatious' Reef`.
- Script `GavanRelocate2ManaanScript`. attached to Activator Gavan Dummy Mover (`SW_GavanMover3`); placed in `Manaan, Cantina`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: I honestly don't even know anymore. I encountered Gavan Dakrih once more, this time in the waters deep below M…
- [ ] Reach index `10`: I'm not exactly certain why, but I decided to help Gavan once more against my better judgement. He needs to ge…
- [ ] Reach index `15`: We have reached Ahto City. Gavan should speak to me.
- [ ] Reach index `20` (`Finished`): After bringing Gavan back to Ahto City, he thanked me profusely before proclaiming that he's giving up the lif…
- [ ] Reach index `25` (`Finished`): Gavan died in my company.
- [ ] Branch coverage: this journal has **2 different `Finished` entries**; test each reachable completion branch.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_GavanQuest3`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
