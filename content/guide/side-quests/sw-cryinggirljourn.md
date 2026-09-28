---
title: "The Crying Girl"
description: "Walkthrough and QA reference for The Crying Girl (SW_CryingGirlJourn)."
weight: 83
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_CryingGirlJourn"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_CryingGirlJourn` |
| **Category** | Side Quests |
| **Journal entries** | 6 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Elisa Zerring** in **Tatooine, Sandriver** and ask about **someone in my house**. |
| **Key locations** | Tatooine Czerka Office, Tatooine, Elisa's Hut, Tatooine, Sandriver, Tatooine, Sewers |
| **Key characters** | Elisa Zerring, Emily Benson, Blaine Willikie, Zhoola, Injured Twilek |

## Walkthrough

### 1. Speak with Elisa Zerring in Tatooine, Sandriver and ask about someone in my house

Speak with **Elisa Zerring** in **Tatooine, Sandriver** and ask about **someone in my house**.

> **Expected journal update — index 10:** I met a girl named Elisa Zerring who claims someone has broken into her house and is still there. She says she has reported it to the Czerka office but they have turned her away for some reason. Perhaps I should investigate.

**Known item transfer:** 1 × **Key to Elisa's Home** (`SW_ElisaHouse1`).

### 2. Speak with Emily Benson in Tatooine, Elisa's Hut

Speak with **Emily Benson** in **Tatooine, Elisa's Hut**.

> **Expected journal update — index 15:** I found a woman inside of her house and was forced to kill her, I also found a key on her that may open the basement. Perhaps I should investigate.

### 3. Speak with Injured Twilek in Tatooine, Sewers

Speak with **Injured Twilek** in **Tatooine, Sewers**.

> **Expected journal update — index 20:** I met a Twilek in the Sandriver Sewers, which I am now trapped in. Before he died, he told me something about the forcefields, maybe they are my way out of here. I should definitely tell someone about this if I can make it out...

### 4. Speak with Zhoola in Tatooine, Sewers

Speak with **Zhoola** in **Tatooine, Sewers**.

> **Expected journal update — index 25:** I met an old Czerka Employee who has gone mad from being a prisoner of Hungox's Gammoreans. I should report this to the Czerka Corporation

**Known item transfer:** 1 × **Security Spike** (`SW_SecuritySpike`).

### 5. Speak with Blaine Willikie in Tatooine Czerka Office and ask about women — Finished

Speak with **Blaine Willikie** in **Tatooine Czerka Office** and ask about **women**.

> **Expected journal update — index 30:** The Czerka Corporation told me that I could return to the sewers whenever I wish to kill Hungox's men, they even gave me a few medkits to get started.

**Known item transfer:** 3 × **Medkit** (`SW_Medkit`).

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 30**:

> The Czerka Corporation told me that I could return to the sewers whenever I wish to kill Hungox's men, they even gave me a few medkits to get started.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 1 × **Key to Elisa's Home** (`SW_ElisaHouse1`)
- 1 × **Security Spike** (`SW_SecuritySpike`)
- 3 × **Medkit** (`SW_Medkit`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Elisa Zerring** (`SW_Cryinggirl`) — `Tatooine, Sandriver`
- **Emily Benson** (`SW_CryinggirlEvil`) — `Tatooine, Elisa's Hut`
- **Blaine Willikie** (`SW_CzerkaOfficeGuy`) — `Tatooine Czerka Office`
- **Zhoola** (`SW_CzerkaSewer`) — `Tatooine, Sewers`
- **Injured Twilek** (`SW_TwilekSewersPris`) — `Tatooine, Sewers`

**Locations implicated by actor/object placement or explicit travel:**
- **Tatooine Czerka Office**
- **Tatooine, Elisa's Hut**
- **Tatooine, Sandriver**
- **Tatooine, Sewers**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_CryingGirlJourn`
**Generated category:** Side Quests
**Journal entries:** 6

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 10 | — | I met a girl named Elisa Zerring who claims someone has broken into her house and is still there. She says she has reported it to the Czerka office but they have turned her away for some reason. Perhaps I should investigate. | 1 |
| 15 | — | I found a woman inside of her house and was forced to kill her, I also found a key on her that may open the basement. Perhaps I should investigate. | 1 |
| 20 | — | I met a Twilek in the Sandriver Sewers, which I am now trapped in. Before he died, he told me something about the forcefields, maybe they are my way out of here. I should definitely tell someone about this if I can make it out... | 1 |
| 25 | — | I met an old Czerka Employee who has gone mad from being a prisoner of Hungox's Gammoreans. I should report this to the Czerka Corporation | 1 |
| 30 | Finished | The Czerka Corporation told me that I could return to the sewers whenever I wish to kill Hungox's men, they even gave me a few medkits to get started. | 1 |

### Record-level trigger map

### Stage 10

I met a girl named Elisa Zerring who claims someone has broken into her house and is still there. She says she has reported it to the Czerka office but they have turned her away for some reason. Perhaps I should investigate.

**How this stage is set:**
- Dialogue INFO `2762410951284541217` under topic **someone in my house**; speaker Elisa Zerring (`SW_Cryinggirl`). locations: `Tatooine, Sandriver`. conditions: Function/Choice Equal 1; Journal `SW_CryingGirlJourn` Equal 0. response: “Oh thank you, thank you! Here's the key!”.

```text
Journal "SW_CryingGirlJourn" 10
player->additem "SW_ElisaHouse1",1
StopSound "ElisaZGreet"
```

### Stage 15

I found a woman inside of her house and was forced to kill her, I also found a key on her that may open the basement. Perhaps I should investigate.

**How this stage is set:**
- Dialogue INFO `3005416558537225374` under topic **Greeting 7**; speaker Emily Benson (`SW_CryinggirlEvil`). locations: `Tatooine, Elisa's Hut`. response: “It's a tough planet for a woman, and unfortunately for you, this is the only way I've found to survive. We don't get many visitors on Sandriver, but the ones that look the weakest I lead here and well. I'm sorry.”.

```text
goodbye
"SW_CryinggirlEvil"->StartCombat Player
Journal "SW_CryingGirlJourn" 15
"SW_Cryinggirl"->Disable
PlaySound3d "Emily"
```

### Stage 20

I met a Twilek in the Sandriver Sewers, which I am now trapped in. Before he died, he told me something about the forcefields, maybe they are my way out of here. I should definitely tell someone about this if I can make it out...

**How this stage is set:**
- Dialogue INFO `229106359152931521` under topic **Greeting 7**; speaker Injured Twilek (`SW_TwilekSewersPris`). locations: `Tatooine, Sewers`. response: “Couldn't have been better timing, making it down here now. I'm afraid it's too late for me though, I must have been down here for a week now. Damn women dragged me into this hole. Those forcefields, I've hit them with everything I had, they're weak but I just couldn't break through them....”.

```text
Journal "SW_CryingGirlJourn" 20
goodbye
MessageBox "Seems I'm trapped in here, I'd better find a way out."
```

### Stage 25

I met an old Czerka Employee who has gone mad from being a prisoner of Hungox's Gammoreans. I should report this to the Czerka Corporation

**How this stage is set:**
- Dialogue INFO `25558171462548815544` under topic **Greeting 7**; speaker Zhoola (`SW_CzerkaSewer`). locations: `Tatooine, Sewers`. conditions: Journal `SW_CryingGirlJourn` Equal 20. response: “Saved at last, I can leave this room freely now. I was the Operator for the lift station facility down here in the sewers. A shame those damn pigs broke my knee. I won't be leaving any time soon. Get up to the Czerka Corporation, send for help, if you tell them I'm here then they will. My name's Zhoola, by the way, and you have no idea how glad I am to see you. How are you in here by the way? Don't tell me it was the women.”.

```text
Journal "SW_CryingGirlJourn" 25
player->additem "SW_SecuritySpike",1
```

### Stage 30 — Finished

The Czerka Corporation told me that I could return to the sewers whenever I wish to kill Hungox's men, they even gave me a few medkits to get started.

**How this stage is set:**
- Dialogue INFO `9000628831222094` under topic **women**; speaker Blaine Willikie (`SW_CzerkaOfficeGuy`). locations: `Tatooine Czerka Office`. conditions: Journal `SW_CryingGirlJourn` Equal 25. response: “That is a most disturbing story. Elisa Zerring has been on the bounty board for quite some time now, I'm sure she's off planet by now. As for Zhoola, I will send a team immediately to retrieve him. Rest assured we will retaliate as soon as I get these datapads formally signed, processed, returned, resigned, and then sent to headquarters to wait for approval.”.

```text
Journal "SW_CryingGirlJourn" 30
"SW_CzerkaSewer"->Disable
player->additem "SW_Medkit",3
```

### Related records and locations

**Dialogue speakers:**
- Elisa Zerring (`SW_Cryinggirl`) — `Tatooine, Sandriver`
- Emily Benson (`SW_CryinggirlEvil`) — `Tatooine, Elisa's Hut`
- Blaine Willikie (`SW_CzerkaOfficeGuy`) — `Tatooine Czerka Office`
- Zhoola (`SW_CzerkaSewer`) — `Tatooine, Sewers`
- Injured Twilek (`SW_TwilekSewersPris`) — `Tatooine, Sewers`

**Items referenced by related script/result code:**
- Key to Elisa's Home (`SW_ElisaHouse1`)
- Medkit (`SW_Medkit`)
- Security Spike (`SW_SecuritySpike`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Tatooine Czerka Office`
- `Tatooine, Elisa's Hut`
- `Tatooine, Sandriver`
- `Tatooine, Sewers`

<details><summary>Other directly addressed object IDs in related code</summary>

- Elisa Zerring (`SW_Cryinggirl`)
- Emily Benson (`SW_CryinggirlEvil`)
- Zhoola (`SW_CzerkaSewer`)
- Grate (`SW_SewersGate2`)

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `10` is obtainable.
- [ ] Reach index `10`: I met a girl named Elisa Zerring who claims someone has broken into her house and is still there. She says she…
- [ ] Reach index `15`: I found a woman inside of her house and was forced to kill her, I also found a key on her that may open the ba…
- [ ] Reach index `20`: I met a Twilek in the Sandriver Sewers, which I am now trapped in. Before he died, he told me something about …
- [ ] Reach index `25`: I met an old Czerka Employee who has gone mad from being a prisoner of Hungox's Gammoreans. I should report th…
- [ ] Reach index `30` (`Finished`): The Czerka Corporation told me that I could return to the sewers whenever I wish to kill Hungox's men, they ev…
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_CryingGirlJourn`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
