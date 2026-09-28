---
title: "Major Contract"
description: "Walkthrough and QA reference for Major Contract (SW_GenoFinish)."
weight: 28
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_GenoFinish"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_GenoFinish` |
| **Category** | Factions & Careers |
| **Journal entries** | 7 |
| **Completion branches** | 2 |
| **Starts by** | Speak with **Rulan Prolik** in **Tatooine, GenoHaradan Guildhall** and ask about **major contract**. |
| **Key locations** | Tatooine, GenoHaradan Guildhall |
| **Key characters** | Rulan Prolik |

## Walkthrough

### 1. Speak with Rulan Prolik in Tatooine, GenoHaradan Guildhall and ask about major contract

Speak with **Rulan Prolik** in **Tatooine, GenoHaradan Guildhall** and ask about **major contract**.

> **Expected journal update — index 5:** I have to find Hulas somewhere on Manaan, he may already be suspecting an assassin as he has apparently pissed off a lot of people. Prolik gave me a GenoHaradan Stealth Unit to assist me on this contract.

**Known item transfer:** 1 × **GenoHaradan Stealth Unit** (`SW_BeltGeno`).

### 2. Speak with Rulan Prolik in Tatooine, GenoHaradan Guildhall and ask about major contract

Speak with **Rulan Prolik** in **Tatooine, GenoHaradan Guildhall** and ask about **major contract**.

> **Expected journal update — index 10:** Next up is a Gammorean named Vorn Daasraad somewhere nearby the guild hall hiding in a hutt in the desert. Prolik wants him dead, so I'm going to kill him.

**Known item transfer:** 1000 × **Credits** (`Gold_001`).

### 3. Speak with Rulan Prolik in Tatooine, GenoHaradan Guildhall and ask about major contract

Speak with **Rulan Prolik** in **Tatooine, GenoHaradan Guildhall** and ask about **major contract**.

> **Expected journal update — index 15:** Next on the list is a Selkath named Ithorak Guldar that works often in the Civil Authorities Office in Manaan Central.

**Known item transfer:** 500 × **Credits** (`Gold_001`).

### 4. Speak with Rulan Prolik in Tatooine, GenoHaradan Guildhall and ask about major contract — Finished

Speak with **Rulan Prolik** in **Tatooine, GenoHaradan Guildhall** and ask about **major contract**.

> **Expected journal update — index 20:** After reporting Ithorak was dead Prolik revealed that he had the last three hits done so that he could become the sole commander of the GenoHaradan and that it was only a matter of time before I revealed that knowledge myself.

**Outcome:** this journal entry is marked as a finished branch.

### 5. Find Rulan Prolik in Tatooine, GenoHaradan Guildhall and complete the encounter

Find **Rulan Prolik** in **Tatooine, GenoHaradan Guildhall** and complete the encounter.

> **Expected journal update — index 25:** Prolik shapeshifted and in his transformation manages to escape. After the battle I found a key he must have dropped during the transformation. I should try to find out what it goes to.

**Known item transfer:** 1 × **Prolik's Key** (`SW_ProliksKey`).

### 6. Defeat Rulan Prolik and allow its script to update the quest — Finished

Defeat **Rulan Prolik** and allow its script to update the quest.

> **Expected journal update — index 30:** Prolik again shapeshifted, this time into a terentatek, but I was able to defeat him. On him was the key to his chambers, I guess they are mine now.

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has **2 explicit finished entries**. Treat them as branch coverage targets during playtesting:

- **Index 20:** After reporting Ithorak was dead Prolik revealed that he had the last three hits done so that he could become the sole commander of the GenoHaradan and that it was only a matter of time before I revealed that knowledge myself.
- **Index 30:** Prolik again shapeshifted, this time into a terentatek, but I was able to defeat him. On him was the key to his chambers, I guess they are mine now.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 1 × **GenoHaradan Stealth Unit** (`SW_BeltGeno`)
- 1000 × **Credits** (`Gold_001`)
- 500 × **Credits** (`Gold_001`)
- 1 × **Prolik's Key** (`SW_ProliksKey`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Rulan Prolik** (`SW_GenoProlik`) — `Tatooine, GenoHaradan Guildhall`

**Locations implicated by actor/object placement or explicit travel:**
- **Tatooine, GenoHaradan Guildhall**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_GenoFinish`
**Generated category:** Factions & Careers
**Journal entries:** 7

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | I have to find Hulas somewhere on Manaan, he may already be suspecting an assassin as he has apparently pissed off a lot of people. Prolik gave me a GenoHaradan Stealth Unit to assist me on this contract. | 1 |
| 10 | — | Next up is a Gammorean named Vorn Daasraad somewhere nearby the guild hall hiding in a hutt in the desert. Prolik wants him dead, so I'm going to kill him. | 1 |
| 15 | — | Next on the list is a Selkath named Ithorak Guldar that works often in the Civil Authorities Office in Manaan Central. | 1 |
| 20 | Finished | After reporting Ithorak was dead Prolik revealed that he had the last three hits done so that he could become the sole commander of the GenoHaradan and that it was only a matter of time before I revealed that knowledge myself. | 1 |
| 25 | — | Prolik shapeshifted and in his transformation manages to escape. After the battle I found a key he must have dropped during the transformation. I should try to find out what it goes to. | 1 |
| 30 | Finished | Prolik again shapeshifted, this time into a terentatek, but I was able to defeat him. On him was the key to his chambers, I guess they are mine now. | 1 |

### Record-level trigger map

### Stage 5

I have to find Hulas somewhere on Manaan, he may already be suspecting an assassin as he has apparently pissed off a lot of people. Prolik gave me a GenoHaradan Stealth Unit to assist me on this contract.

**How this stage is set:**
- Dialogue INFO `1906229762313124116` under topic **major contract**; speaker Rulan Prolik (`SW_GenoProlik`). locations: `Tatooine, GenoHaradan Guildhall`. conditions: Journal `SW_GenoFinish` Equal 0. response: “This contract is very important, and we'll keep coming back to it until everyone on this list is erased from existence. First on the list we have a Rodian named Hulas. He's currently in Manaan and knows he has enemies after him. I happen to know this man, so he may suspect we are coming, I wouldn't be surprised if has surrounded himself with witnesses. Go to Manaan, find him, kill him, you know the drill. Take this stealth unit to assist on you on this one.”.

```text
player->additem "SW_BeltGeno", 1
Journal SW_GenoFinish 5
```

### Stage 10

Next up is a Gammorean named Vorn Daasraad somewhere nearby the guild hall hiding in a hutt in the desert. Prolik wants him dead, so I'm going to kill him.

**How this stage is set:**
- Dialogue INFO `3262328572904932262` under topic **major contract**; speaker Rulan Prolik (`SW_GenoProlik`). locations: `Tatooine, GenoHaradan Guildhall`. conditions: Journal `SW_GenoFinish` Equal 5; Dead/DeadType `SW_Hulas` GreaterEqual 1. response: “One down, two more to go. The next hit is nearby so a killer of your ability should be able to knock it out pretty quick. A Gammorean by the name of Vorn Daasraad is hiding out around here. I've gotten intel that he is staying in a hutt landspeeder distance from here. Find him, break in, kill anything and everything that moves. No need to be quiet on this one he's trapped himself right where we want him.”.

```text
Journal SW_GenoFinish 10
player->additem "Gold_001", 1000
```

### Stage 15

Next on the list is a Selkath named Ithorak Guldar that works often in the Civil Authorities Office in Manaan Central.

**How this stage is set:**
- Dialogue INFO `30821245522066712848` under topic **major contract**; speaker Rulan Prolik (`SW_GenoProlik`). locations: `Tatooine, GenoHaradan Guildhall`. conditions: Journal `SW_GenoFinish` Equal 10; Dead/DeadType `SW_Vorn` GreaterEqual 1. response: “Quick, fast, easy. Wish they were all that way sometimes. Next up is a Selkath named Ithorak Guldar. Looks like your going back to Manaan. Intel says he works often in the Civil Authorities Office in Manaan Central. Kill him.”.

```text
Journal SW_GenoFinish 15
player->additem "Gold_001", 500
```

### Stage 20 — Finished

After reporting Ithorak was dead Prolik revealed that he had the last three hits done so that he could become the sole commander of the GenoHaradan and that it was only a matter of time before I revealed that knowledge myself.

**How this stage is set:**
- Dialogue INFO `326232722733831194` under topic **major contract**; speaker Rulan Prolik (`SW_GenoProlik`). locations: `Tatooine, GenoHaradan Guildhall`. conditions: Journal `SW_GenoFinish` Equal 15; Dead/DeadType `SW_Ithorak` GreaterEqual 1. response: “Well. I brought you here, proved you had the skills, and had you kill the other three commanders of the GenoHaradan before you could learn better. Good work, but it would only be a matter of time before you figured it out, and I can't have someone with the knowledge you have alive. You've done well for me, and you are a true GenoHaradan, but unfortunately I have to kill you.”.

```text
Journal SW_GenoFinish 20
"SW_GenoProlik"->StartCombat Player
```

### Stage 25

Prolik shapeshifted and in his transformation manages to escape. After the battle I found a key he must have dropped during the transformation. I should try to find out what it goes to.

**How this stage is set:**
- Script `SW_ProlikShift1`. attached to Npc Rulan Prolik (`SW_GenoProlik`); placed in `Tatooine, GenoHaradan Guildhall`.

```text
MessageBox "Prolik shapeshifts and in his transformation manages to escape. You look around to make sure he isn't playing a trick in order to flip the tables on the battle and manage to find a key. [Prolik's Key has been added to your inventory]" "OK"
                player->additem "SW_ProliksKey", 1
                Journal SW_GenoFinish 25
                Disable
            else
```

### Stage 30 — Finished

Prolik again shapeshifted, this time into a terentatek, but I was able to defeat him. On him was the key to his chambers, I guess they are mine now.

**How this stage is set:**
- Script `SW_ProlikShift2`. attached to Npc Rulan Prolik (`SW_ProlikWookie`).

```text
if ( OnDeath == 1 )
        MessageBox "Prolik shapeshifts again into the form of a Terentatek!"
        Journal SW_GenoFinish 30
        Disable
    endif
```

### Related records and locations

**Dialogue speakers:**
- Rulan Prolik (`SW_GenoProlik`) — `Tatooine, GenoHaradan Guildhall`

**Scripts that read or write this journal:**
- `SW_ProlikShift1` — Npc Rulan Prolik (`SW_GenoProlik`); placed in `Tatooine, GenoHaradan Guildhall`
- `SW_ProlikShift2` — Npc Rulan Prolik (`SW_ProlikWookie`)
- `SW_ProlikShift3` — Creature Rulan Prolik (`SW_TerentatekProlik`)

**Items referenced by related script/result code:**
- Credits (`Gold_001`)
- GenoHaradan Stealth Unit (`SW_BeltGeno`)
- Prolik's Key (`SW_ProliksKey`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Tatooine, GenoHaradan Guildhall`

<details><summary>Other directly addressed object IDs in related code</summary>

- Rulan Prolik (`SW_GenoProlik`)

</details>

<details><summary>Journal-state readers (3 code sites)</summary>

- Script `SW_ProlikShift1`. attached to Npc Rulan Prolik (`SW_GenoProlik`); placed in `Tatooine, GenoHaradan Guildhall`.
- Script `SW_ProlikShift2`. attached to Npc Rulan Prolik (`SW_ProlikWookie`).
- Script `SW_ProlikShift3`. attached to Creature Rulan Prolik (`SW_TerentatekProlik`).

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: I have to find Hulas somewhere on Manaan, he may already be suspecting an assassin as he has apparently pissed…
- [ ] Reach index `10`: Next up is a Gammorean named Vorn Daasraad somewhere nearby the guild hall hiding in a hutt in the desert. Pro…
- [ ] Reach index `15`: Next on the list is a Selkath named Ithorak Guldar that works often in the Civil Authorities Office in Manaan …
- [ ] Reach index `20` (`Finished`): After reporting Ithorak was dead Prolik revealed that he had the last three hits done so that he could become …
- [ ] Reach index `25`: Prolik shapeshifted and in his transformation manages to escape. After the battle I found a key he must have d…
- [ ] Reach index `30` (`Finished`): Prolik again shapeshifted, this time into a terentatek, but I was able to defeat him. On him was the key to hi…
- [ ] Branch coverage: this journal has **2 different `Finished` entries**; test each reachable completion branch.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_GenoFinish`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
