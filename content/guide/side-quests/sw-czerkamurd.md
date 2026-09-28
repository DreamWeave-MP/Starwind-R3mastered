---
title: "Trouble in Sandriver"
description: "Walkthrough and QA reference for Trouble in Sandriver (SW_CzerkaMurd)."
weight: 110
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_CzerkaMurd"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_CzerkaMurd` |
| **Category** | Side Quests |
| **Journal entries** | 8 |
| **Completion branches** | 1 |
| **Starts by** | Use **Born To Hunt**. |
| **Key locations** | Tatooine, Cantina, Tatooine, Coro's Hut, Tatooine, Sandriver |
| **Key characters** | Czerka Office Guard, Barney Halligan, Uzik Breek, Coro |

## Walkthrough

### 1. Use Born To Hunt

The records expose more than one way to reach this journal update:
- Use **Born To Hunt**.
- Speak with **Czerka Office Guard** in **Tatooine, Sandriver** and ask about **Authority Murders**.

> **Expected journal update — index 1:** The Czerka Corporation has closed its office due to a series of murders of Czerka Employees. If I want access to the Czerka Office I will need to assist in the investigation. The only leads point towards the Rodian District in Sandriver.

### 2. Use Born To Hunt

The records expose more than one way to reach this journal update:
- Use **Born To Hunt**.
- Speak with **Coro** in **Tatooine, Coro's Hut** and ask about **Authority Murders**.

> **Expected journal update — index 5:** I have discovered that a Rodian named Uzik has been speaking openly about this situation while drunk in the Sandriver Cantina. I should check up on this information.

### 3. Use Born To Hunt

The records expose more than one way to reach this journal update:
- Use **Born To Hunt**.
- Speak with **Uzik Breek** in **Tatooine, Cantina** and ask about **Authority Murders**.

> **Expected journal update — index 10:** Uzik will not speak of the murders unless I bring him a bottle of booze. I can purchase one from the Cantina.

### 4. Use Born a jedi

The records expose more than one way to reach this journal update:
- Use **Born a jedi**.
- Use **Drug boss**.
- Use **Richie Rich**.
- Use **Gangster**.
- Use **Born To Hunt**.
- Speak with **Uzik Breek** in **Tatooine, Cantina** and ask about **Authority Murders**.

> **Expected journal update — index 15:** I have traded some booze for information on the murders. Uzik claims that the Rodian gangs commiting the murders were just propaganda, and that the real murderer is actually a human that works for the Czerka Corporation. I should report this information.

**Known item transfer:** 3000 × **Credits** (`Gold_001`), 100000 × **Credits** (`Gold_001`), 300 × **Credits** (`Gold_001`), 1 × **Vibroblade** (`SW_Vibrobladestrong`).

### 5. Use Born To Hunt

The records expose more than one way to reach this journal update:
- Use **Born To Hunt**.
- Speak with **Czerka Office Guard** in **Tatooine, Sandriver** and ask about **Authority Murders**.

> **Expected journal update — index 20:** The Czerka Officer told me I should check with three Czerka Employees; a clothing vendor just outside of the Czerka Office, the Flight Agent in the docking bay, near the cantina, and a guard stationed near the medical bay.

**Known item transfer:** 1 × **Blaster Rifle** (`SW_BlasterRifle`).

### 6. Use Born To Hunt

The records expose more than one way to reach this journal update:
- Use **Born To Hunt**.
- Speak with **Barney Halligan** in **Tatooine, Sandriver** and ask about **Authority Murders**.

> **Expected journal update — index 25:** Barney attacked me when I accused him of the murders, I should report to the Czerka Office.

### 7. Use Born To Hunt — Finished

The records expose more than one way to reach this journal update:
- Use **Born To Hunt**.
- Speak with **Czerka Office Guard** in **Tatooine, Sandriver** and ask about **Authority Murders**.

> **Expected journal update — index 30:** The Czerka Office is now open again, and I have been awarded with 200 credits.

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 30**:

> The Czerka Office is now open again, and I have been awarded with 200 credits.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 3000 × **Credits** (`Gold_001`)
- 100000 × **Credits** (`Gold_001`)
- 300 × **Credits** (`Gold_001`)
- 1 × **Vibroblade** (`SW_Vibrobladestrong`)
- 1 × **Blaster Rifle** (`SW_BlasterRifle`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Czerka Office Guard** (`SW_CzerkaOfficeTatGuard`) — `Tatooine, Sandriver`
- **Barney Halligan** (`SW_Grumpy`) — `Tatooine, Sandriver`
- **Uzik Breek** (`SW_RodianCantinaRude`) — `Tatooine, Cantina`
- **Coro** (`SW_RodianCoro`) — `Tatooine, Coro's Hut`

**Locations implicated by actor/object placement or explicit travel:**
- **Tatooine, Cantina**
- **Tatooine, Coro's Hut**
- **Tatooine, Sandriver**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_CzerkaMurd`
**Generated category:** Side Quests
**Journal entries:** 8

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 1 | — | The Czerka Corporation has closed its office due to a series of murders of Czerka Employees. If I want access to the Czerka Office I will need to assist in the investigation. The only leads point towards the Rodian District in Sandriver. | 2 |
| 5 | — | I have discovered that a Rodian named Uzik has been speaking openly about this situation while drunk in the Sandriver Cantina. I should check up on this information. | 2 |
| 10 | — | Uzik will not speak of the murders unless I bring him a bottle of booze. I can purchase one from the Cantina. | 2 |
| 15 | — | I have traded some booze for information on the murders. Uzik claims that the Rodian gangs commiting the murders were just propaganda, and that the real murderer is actually a human that works for the Czerka Corporation. I should report this information. | 6 |
| 20 | — | The Czerka Officer told me I should check with three Czerka Employees; a clothing vendor just outside of the Czerka Office, the Flight Agent in the docking bay, near the cantina, and a guard stationed near the medical bay. | 2 |
| 25 | — | Barney attacked me when I accused him of the murders, I should report to the Czerka Office. | 2 |
| 30 | Finished | The Czerka Office is now open again, and I have been awarded with 200 credits. | 2 |

### Record-level trigger map

### Stage 1

The Czerka Corporation has closed its office due to a series of murders of Czerka Employees. If I want access to the Czerka Office I will need to assist in the investigation. The only leads point towards the Rodian District in Sandriver.

**How this stage is set:**
- Script `manlyman`. attached to Door Born To Hunt (`SW_CharGenPodDoor3`).

```text
Journal SW_TarisChap1 5
journal sw_tarischap1 10
journal sw_czerkamurd 1
journal sw_tarischap1 12
journal sw_czerkamurd 5
```

```text
journal sw_czerkamurd 1
journal sw_tarischap1 12
journal sw_czerkamurd 5
journal sw_czerkamurd 10
journal sw_czerkamurd 15
```

```text
journal sw_tarischap1 12
journal sw_czerkamurd 5
journal sw_czerkamurd 10
journal sw_czerkamurd 15
journal sw_czerkamurd 20
```
- Dialogue INFO `975531815979025118` under topic **Authority Murders**; speaker Czerka Office Guard (`SW_CzerkaOfficeTatGuard`). locations: `Tatooine, Sandriver`. conditions: Journal `SW_CzerkaMurd` Less 15. response: “Someone or a group of outlaws have been murdering Czerka employees in Sandriver. We believe it's some outlaws in the Rodian District, they are always causing us problems. If you need access to the Czerka Office, you could always give us a hand in the investigation.”.

```text
StartScript SW_StoryComlink1
Journal SW_TarisChap1 10
Journal "SW_CzerkaMurd" 1
PlaySound3d "AMurders1"
StopSound "AMurders2"
```

### Stage 5

I have discovered that a Rodian named Uzik has been speaking openly about this situation while drunk in the Sandriver Cantina. I should check up on this information.

**How this stage is set:**
- Script `manlyman`. attached to Door Born To Hunt (`SW_CharGenPodDoor3`).

```text
Journal SW_TarisChap1 5
journal sw_tarischap1 10
journal sw_czerkamurd 1
journal sw_tarischap1 12
journal sw_czerkamurd 5
```

```text
journal sw_czerkamurd 1
journal sw_tarischap1 12
journal sw_czerkamurd 5
journal sw_czerkamurd 10
journal sw_czerkamurd 15
```

```text
journal sw_tarischap1 12
journal sw_czerkamurd 5
journal sw_czerkamurd 10
journal sw_czerkamurd 15
journal sw_czerkamurd 20
```
- Dialogue INFO `95892801736927609` under topic **Authority Murders**; speaker Coro (`SW_RodianCoro`). locations: `Tatooine, Coro's Hut`. response: “If it will get you out of Rodian District I'll give you something. There's a Rodian named Uzik, he's been blabbing his mouth drunk at the Cantina everyday. People have heard him talk about it, I'd check there. Now get out of here before you get yourself killed”.

```text
Journal "SW_CzerkaMurd" 5
```

### Stage 10

Uzik will not speak of the murders unless I bring him a bottle of booze. I can purchase one from the Cantina.

**How this stage is set:**
- Script `manlyman`. attached to Door Born To Hunt (`SW_CharGenPodDoor3`).

```text
Journal SW_TarisChap1 5
journal sw_tarischap1 10
journal sw_czerkamurd 1
journal sw_tarischap1 12
journal sw_czerkamurd 5
```

```text
journal sw_czerkamurd 1
journal sw_tarischap1 12
journal sw_czerkamurd 5
journal sw_czerkamurd 10
journal sw_czerkamurd 15
```

```text
journal sw_tarischap1 12
journal sw_czerkamurd 5
journal sw_czerkamurd 10
journal sw_czerkamurd 15
journal sw_czerkamurd 20
```
- Dialogue INFO `10579263082340229695` under topic **Authority Murders**; speaker Uzik Breek (`SW_RodianCantinaRude`). locations: `Tatooine, Cantina`. conditions: Journal `SW_CzerkaMurd` Equal 5. response: “Uzik knows of this. But he needs more booze... That droid over there will sell you some. Come talk to me then.”.

```text
Journal "SW_CzerkaMurd" 10
```

### Stage 15

I have traded some booze for information on the murders. Uzik claims that the Rodian gangs commiting the murders were just propaganda, and that the real murderer is actually a human that works for the Czerka Corporation. I should report this information.

**How this stage is set:**
- Script `BornaJedi`. attached to Door Born a jedi (`SW_CharGenPodDoor2`).

```text
SW_ShadeLandingTat->Disable
        SW_ShadeMedicalTat->Enable
        journal sw_czerkamurd 15
        journal sw_tarischap1 10
        Journal SW_JitaiiJourn 15
```
- Script `Drugdealer`. attached to Door Drug boss (`SW_CharGenPodDoor5`).

```text
SW_ShadeLandingTat->Disable
SW_ShadeMedicalTat->Enable
journal sw_czerkamurd 15
journal sw_tarischap1 10
        player->additem Gold_001 3000
```
- Script `dickrich`. attached to Door Richie Rich (`SW_CharGenPodDoor4`).

```text
SW_ShadeMedicalTat->Enable
        journal sw_tarischap1 10
        journal sw_czerkamurd 15
        player->additem Gold_001 100000
        SW_CzerkaCourte22->Enable
```
- Script `gangster`. attached to Door Gangster (`SW_CharGenPodDoor6`); Door Rodian gangster (`SW_CharGenPodDoor7`).

```text
SW_ShadeMedicalTat->Enable
        journal sw_tarischap1 10
        journal sw_czerkamurd 15
        player->additem Gold_001 300
        player->additem SW_Vibrobladestrong 1
```
- Script `manlyman`. attached to Door Born To Hunt (`SW_CharGenPodDoor3`).

```text
Journal SW_TarisChap1 5
journal sw_tarischap1 10
journal sw_czerkamurd 1
journal sw_tarischap1 12
journal sw_czerkamurd 5
```

```text
journal sw_czerkamurd 1
journal sw_tarischap1 12
journal sw_czerkamurd 5
journal sw_czerkamurd 10
journal sw_czerkamurd 15
```

```text
journal sw_tarischap1 12
journal sw_czerkamurd 5
journal sw_czerkamurd 10
journal sw_czerkamurd 15
journal sw_czerkamurd 20
```
- Dialogue INFO `12049114581647830592` under topic **Authority Murders**; speaker Uzik Breek (`SW_RodianCantinaRude`). locations: `Tatooine, Cantina`. conditions: Journal `SW_CzerkaMurd` Equal 10; Item/ItemType `SW_Booze` GreaterEqual 1. response: “That's better. You humans always look at the *hic* Rodians. Maybe you should look at the humans! Maybe even one of those Czerka freaks... Hmm? That's all I know.”.

```text
Journal SW_CzerkaMurd 15
player->removeitem SW_Booze 1
MessageBox "I should report this information to the Czerka Office."
```

### Stage 20

The Czerka Officer told me I should check with three Czerka Employees; a clothing vendor just outside of the Czerka Office, the Flight Agent in the docking bay, near the cantina, and a guard stationed near the medical bay.

**How this stage is set:**
- Script `manlyman`. attached to Door Born To Hunt (`SW_CharGenPodDoor3`).

```text
Journal SW_TarisChap1 5
journal sw_tarischap1 10
journal sw_czerkamurd 1
journal sw_tarischap1 12
journal sw_czerkamurd 5
```

```text
journal sw_czerkamurd 1
journal sw_tarischap1 12
journal sw_czerkamurd 5
journal sw_czerkamurd 10
journal sw_czerkamurd 15
```

```text
journal sw_tarischap1 12
journal sw_czerkamurd 5
journal sw_czerkamurd 10
journal sw_czerkamurd 15
journal sw_czerkamurd 20
```
- Dialogue INFO `10626318732243215459` under topic **Authority Murders**; speaker Czerka Office Guard (`SW_CzerkaOfficeTatGuard`). locations: `Tatooine, Sandriver`. conditions: Journal `SW_CzerkaMurd` Equal 15. response: “That's interesting. So the murderer may be a Czerka Employee? Let me think, I've got three less active employees, lets start there. One is a clothing vendor just across from this Czerka Office. Another is the Flight Agent in the spacing dock by the Cantina. And the other is an on duty guard that is stationed at the medical bay. Let me know what you can find out, and take this.”.

```text
Journal "SW_CzerkaMurd" 20
player->additem"SW_BlasterRifle" 1
StopSound "AMurders1"
```

### Stage 25

Barney attacked me when I accused him of the murders, I should report to the Czerka Office.

**How this stage is set:**
- Script `manlyman`. attached to Door Born To Hunt (`SW_CharGenPodDoor3`).

```text
Journal SW_TarisChap1 5
journal sw_tarischap1 10
journal sw_czerkamurd 1
journal sw_tarischap1 12
journal sw_czerkamurd 5
```

```text
journal sw_czerkamurd 1
journal sw_tarischap1 12
journal sw_czerkamurd 5
journal sw_czerkamurd 10
journal sw_czerkamurd 15
```

```text
journal sw_tarischap1 12
journal sw_czerkamurd 5
journal sw_czerkamurd 10
journal sw_czerkamurd 15
journal sw_czerkamurd 20
```
- Dialogue INFO `305145253498031338` under topic **Authority Murders**; speaker Barney Halligan (`SW_Grumpy`). locations: `Tatooine, Sandriver`. conditions: Journal `SW_CzerkaMurd` Equal 20. response: “So you got it past the Rodians did you? I assumed they wouldn't skip a beat, taking in all that heat for their own personal gain. No matter, when I kill you I'll just say you attacked an officer of the law!”.

```text
Journal "SW_CzerkaMurd" 25
"SW_Grumpy"->StartCombat Player
```

### Stage 30 — Finished

The Czerka Office is now open again, and I have been awarded with 200 credits.

**How this stage is set:**
- Script `manlyman`. attached to Door Born To Hunt (`SW_CharGenPodDoor3`).

```text
Journal SW_TarisChap1 5
journal sw_tarischap1 10
journal sw_czerkamurd 1
journal sw_tarischap1 12
journal sw_czerkamurd 5
```

```text
journal sw_czerkamurd 1
journal sw_tarischap1 12
journal sw_czerkamurd 5
journal sw_czerkamurd 10
journal sw_czerkamurd 15
```

```text
journal sw_tarischap1 12
journal sw_czerkamurd 5
journal sw_czerkamurd 10
journal sw_czerkamurd 15
journal sw_czerkamurd 20
```
- Dialogue INFO `27092150533120432315` under topic **Authority Murders**; speaker Czerka Office Guard (`SW_CzerkaOfficeTatGuard`). locations: `Tatooine, Sandriver`. conditions: Journal `SW_CzerkaMurd` Equal 25. response: “Barney Halligan? No good trash was as worthless as a Cathar! The Czerka Office is now reopened to the public. Thank you, stranger, and welcome to Sandriver.”.

```text
Journal SW_CzerkaMurd 30
"SW_CzerkaOfficeDoorTat"->unlock
SW_ShadeCantinaTat->Enable
```

### Related records and locations

**Dialogue speakers:**
- Czerka Office Guard (`SW_CzerkaOfficeTatGuard`) — `Tatooine, Sandriver`
- Barney Halligan (`SW_Grumpy`) — `Tatooine, Sandriver`
- Uzik Breek (`SW_RodianCantinaRude`) — `Tatooine, Cantina`
- Coro (`SW_RodianCoro`) — `Tatooine, Coro's Hut`

**Scripts that read or write this journal:**
- `BornaJedi` — Door Born a jedi (`SW_CharGenPodDoor2`)
- `dickrich` — Door Richie Rich (`SW_CharGenPodDoor4`)
- `Drugdealer` — Door Drug boss (`SW_CharGenPodDoor5`)
- `gangster` — Door Gangster (`SW_CharGenPodDoor6`); Door Rodian gangster (`SW_CharGenPodDoor7`)
- `manlyman` — Door Born To Hunt (`SW_CharGenPodDoor3`)

**Items referenced by related script/result code:**
- Credits (`Gold_001`)
- Spoon (`misc_com_silverware_spoon`)
- Blaster Bolt (`SW_BlastBolt`)
- Pistol Bolt (`SW_BlastBoltArrow`)
- Twitch's Blaster Rifle (`SW_BlasterPistolTwitch`)
- Blaster Rifle (`SW_BlasterRifle`)
- Booze (`SW_Booze`)
- Human Meat (`SW_HumanMeat`)
- Midichlorian Implant (`SW_ImplantManaMinor`)
- Jedi Robe Bottoms (`SW_JRobeBrownPant`)
- Jedi Robe Top (`SW_JRobeBrownTop`)
- Guardian's Green Lightsaber (`SW_LightSabGrdGreenB`)
- Heavy Shirt (`SW_ShirtHeavy`)
- Spice (`SW_Spice`)
- Tusken Shockspear (`SW_TuskenMelee`)
- Tusken Rifle (`SW_TuskenRifle`)
- Vibroblade (`SW_VibrobladeStrong`)
- Whip (`SW_Whip`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Tatooine, Cantina`
- `Tatooine, Coro's Hut`
- `Tatooine, Sandriver`

<details><summary>Other directly addressed object IDs in related code</summary>

- Metal Door (`SW_CzerkaOfficeDoorTat`)
- Barney Halligan (`SW_Grumpy`)

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `1` is obtainable.
- [ ] Reach index `1`: The Czerka Corporation has closed its office due to a series of murders of Czerka Employees. If I want access …
- [ ] Reach index `5`: I have discovered that a Rodian named Uzik has been speaking openly about this situation while drunk in the Sa…
- [ ] Reach index `10`: Uzik will not speak of the murders unless I bring him a bottle of booze. I can purchase one from the Cantina.
- [ ] Reach index `15`: I have traded some booze for information on the murders. Uzik claims that the Rodian gangs commiting the murde…
- [ ] Reach index `20`: The Czerka Officer told me I should check with three Czerka Employees; a clothing vendor just outside of the C…
- [ ] Reach index `25`: Barney attacked me when I accused him of the murders, I should report to the Czerka Office.
- [ ] Reach index `30` (`Finished`): The Czerka Office is now open again, and I have been awarded with 200 credits.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_CzerkaMurd`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
