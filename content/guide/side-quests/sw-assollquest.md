---
title: "Acquire the contraband"
description: "Walkthrough and QA reference for Acquire the contraband (SW_AssollQuest)."
weight: 12
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_AssollQuest"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_AssollQuest` |
| **Category** | Side Quests |
| **Journal entries** | 11 |
| **Completion branches** | 4 |
| **Starts by** | Speak with **Assoll Hil** in **Tatooine, Sandriver** and ask about **help**. |
| **Key locations** | Tatooine, Cantina, Tatooine, Sandriver |
| **Key characters** | Assoll Hil, Ninulin Villaks |

## Walkthrough

### 1. Speak with Assoll Hil in Tatooine, Sandriver and ask about help

Speak with **Assoll Hil** in **Tatooine, Sandriver** and ask about **help**.

> **Expected journal update — index 5:** I was approached in Sandriver by a Czerka representative. He claims that a smuggler is hiding out in the nearby cantina and holds something of extreme value to Czerka. Sounds shady, should I get involved in this?

### 2. Speak with Assoll Hil in Tatooine, Sandriver and ask about help

Speak with **Assoll Hil** in **Tatooine, Sandriver** and ask about **help**.

> **Expected journal update — index 10:** I was asked by the Czerka representative to contact a Duros smuggler in the cantina who goes by the name Ninulin Villaks. I agreed to the request upon the mention of payment.

### 3. Reach journal stage 15

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 15:** I confronted the smuggler, who seemed to be surprised I knew about the "contraband" he possessed.

### 4. Speak with Ninulin Villaks in Tatooine, Cantina and ask about something rare

Speak with **Ninulin Villaks** in **Tatooine, Cantina** and ask about **something rare**.

> **Expected journal update — index 20:** I warned him about Czerka's interest in his "contraband". Thankful, the smuggler decided to skip town, but gave me the "contraband" he had as a token of thanks. It turned out to be a rifle from the planet of Serenno. How he got it offworld with the current state of affairs as they are, I'll never know.  Perhaps I'll see him again, at a later date in time. I should return to Assoll.

**Known item transfer:** 1 × **Serennian Civil Rifle** (`SW_BlasterRifleGavan`).

### 5. Speak with Ninulin Villaks in Tatooine, Cantina and ask about something rare

Speak with **Ninulin Villaks** in **Tatooine, Cantina** and ask about **something rare**.

> **Expected journal update — index 25:** I mentioned his "contraband", and he offered to sell it to me for a low price. Czerka is likely to pay me more than what I bought it for, so I bought it. It turned out to be a rifle from the planet of Serenno. How he got it offworld with the current state of affairs as they are, I'll never know. I should take it back to Assoll.

**Known item transfer:** 1 × **Serennian Civil Rifle** (`SW_BlasterRifleGavan`).

### 6. Speak with Ninulin Villaks in Tatooine, Cantina and ask about something rare

Speak with **Ninulin Villaks** in **Tatooine, Cantina** and ask about **something rare**.

> **Expected journal update — index 30:** I murdered the Duros smuggler and took the "contraband" off his corpse. It turned out to be a rifle from the planet of Serenno. How he got it offworld with the current state of affairs as they are, I'll never know. I should return to Assholl.

### 7. Defeat Assoll Hil in Tatooine, Sandriver and allow its script to update the quest — Finished

The records expose more than one way to reach this journal update:
- Defeat **Assoll Hil** in **Tatooine, Sandriver** and allow its script to update the quest.
- Defeat **Ninulin Villaks** in **Tatooine, Cantina** and allow its script to update the quest.

> **Expected journal update — index 35:** One of the players in this little game between Czerka and the smuggler died. Now I'll never know what the contraband is.

**Outcome:** this journal entry is marked as a finished branch.

### 8. Speak with Assoll Hil in Tatooine, Sandriver and ask about help — Finished

Speak with **Assoll Hil** in **Tatooine, Sandriver** and ask about **help**.

> **Expected journal update — index 40:** I gave the rifle to the Czerka rep and he rewarded me appropriately.

**Known item transfer:** 3 × **Medkit** (`SW_Medkit`).

**Outcome:** this journal entry is marked as a finished branch.

### 9. Speak with Assoll Hil in Tatooine, Sandriver and ask about help — Finished

Speak with **Assoll Hil** in **Tatooine, Sandriver** and ask about **help**.

> **Expected journal update — index 45:** I refused to give the rifle to the Czerka rep. I decided to keep it for myself, and as such received no reward.

**Outcome:** this journal entry is marked as a finished branch.

### 10. Speak with Assoll Hil in Tatooine, Sandriver and ask about help — Finished

Speak with **Assoll Hil** in **Tatooine, Sandriver** and ask about **help**.

> **Expected journal update — index 50:** I outright refused to give the rifle to the Czerka rep, and he had me arrested. I managed to hide the weapon, and I still have it though.

**Outcome:** this journal entry is marked as a finished branch.

{% callout(kind="warning", title="Playtest flag") %}
1 journal stage on this page lack a literal setter in the current static scan.
{% end %}

## Endings & branches

The journal has **4 explicit finished entries**. Treat them as branch coverage targets during playtesting:

- **Index 35:** One of the players in this little game between Czerka and the smuggler died. Now I'll never know what the contraband is.
- **Index 40:** I gave the rifle to the Czerka rep and he rewarded me appropriately.
- **Index 45:** I refused to give the rifle to the Czerka rep. I decided to keep it for myself, and as such received no reward.
- **Index 50:** I outright refused to give the rifle to the Czerka rep, and he had me arrested. I managed to hide the weapon, and I still have it though.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 1 × **Serennian Civil Rifle** (`SW_BlasterRifleGavan`)
- 3 × **Medkit** (`SW_Medkit`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Assoll Hil** (`TatooineAssoll`) — `Tatooine, Sandriver`
- **Ninulin Villaks** (`TatooineNinulin`) — `Tatooine, Cantina`

**Locations implicated by actor/object placement or explicit travel:**
- **Tatooine, Cantina**
- **Tatooine, Sandriver**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_AssollQuest`
**Generated category:** Side Quests
**Journal entries:** 11

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | I was approached in Sandriver by a Czerka representative. He claims that a smuggler is hiding out in the nearby cantina and holds something of extreme value to Czerka. Sounds shady, should I get involved in this? | 1 |
| 10 | — | I was asked by the Czerka representative to contact a Duros smuggler in the cantina who goes by the name Ninulin Villaks. I agreed to the request upon the mention of payment. | 1 |
| 15 | — | I confronted the smuggler, who seemed to be surprised I knew about the "contraband" he possessed. | 0 |
| 20 | — | I warned him about Czerka's interest in his "contraband". Thankful, the smuggler decided to skip town, but gave me the "contraband" he had as a token of thanks. It turned out to be a rifle from the planet of Serenno. How he got it offworld with the current state of affairs as they are, I'll never know.  Perhaps I'll see him again, at a later date in time. I should return to Assoll. | 1 |
| 25 | — | I mentioned his "contraband", and he offered to sell it to me for a low price. Czerka is likely to pay me more than what I bought it for, so I bought it. It turned out to be a rifle from the planet of Serenno. How he got it offworld with the current state of affairs as they are, I'll never know. I should take it back to Assoll. | 1 |
| 30 | — | I murdered the Duros smuggler and took the "contraband" off his corpse. It turned out to be a rifle from the planet of Serenno. How he got it offworld with the current state of affairs as they are, I'll never know. I should return to Assholl. | 1 |
| 35 | Finished | One of the players in this little game between Czerka and the smuggler died. Now I'll never know what the contraband is. | 2 |
| 40 | Finished | I gave the rifle to the Czerka rep and he rewarded me appropriately. | 2 |
| 45 | Finished | I refused to give the rifle to the Czerka rep. I decided to keep it for myself, and as such received no reward. | 1 |
| 50 | Finished | I outright refused to give the rifle to the Czerka rep, and he had me arrested. I managed to hide the weapon, and I still have it though. | 1 |

### Record-level trigger map

### Stage 5

I was approached in Sandriver by a Czerka representative. He claims that a smuggler is hiding out in the nearby cantina and holds something of extreme value to Czerka. Sounds shady, should I get involved in this?

**How this stage is set:**
- Dialogue INFO `16805399153016153` under topic **help**; speaker Assoll Hil (`TatooineAssoll`). locations: `Tatooine, Sandriver`. conditions: Journal `SW_AssollQuest` Equal 0. response: “Yes, y'see, recently Czerka gotten word of a smuggler operating nearby in town. He's just arrived in Sandriver - a Duros by the name of Ninulin Villaks - and has been very obvious to us. He's been trying to offload something he claims to have stolen for a "low price" of five hundred credits. We want it, whatever it is, but can't move to confront him directly otherwise we might have a bloody shootout. Smugglers are no joke when they are angered. So how about it, want to earn some credits?”.

```text
Journal, SW_AssollQuest, 5
Choice "I'm game. Tell me what I have to do." 1 "Not interested." 2
```

### Stage 10

I was asked by the Czerka representative to contact a Duros smuggler in the cantina who goes by the name Ninulin Villaks. I agreed to the request upon the mention of payment.

**How this stage is set:**
- Dialogue INFO `176046983293188115` under topic **help**; speaker Assoll Hil (`TatooineAssoll`). locations: `Tatooine, Sandriver`. conditions: Function/Choice Equal 1. response: “Alright, so all you have to do is go to the Cantina and locate the Duros among the crowd. Tell him you heard about the contraband and you want to buy it. Whatever he offers you, take it and we will reimburse you the full amount and pay you three hundred credits in addition. Simple. I expect good news.”.

```text
Journal, "SW_AssollQuest", 10
Moddisposition 5
Goodbye
```

### Stage 15

I confronted the smuggler, who seemed to be surprised I knew about the "contraband" he possessed.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 20

I warned him about Czerka's interest in his "contraband". Thankful, the smuggler decided to skip town, but gave me the "contraband" he had as a token of thanks. It turned out to be a rifle from the planet of Serenno. How he got it offworld with the current state of affairs as they are, I'll never know.  Perhaps I'll see him again, at a later date in time. I should return to Assoll.

**How this stage is set:**
- Dialogue INFO `209331072654639361` under topic **something rare**; speaker Ninulin Villaks (`TatooineNinulin`). locations: `Tatooine, Cantina`. conditions: Function/Choice Equal 3. response: “I see. Thank you friend. If they're sending free agents now, it's probably not long before they catch up with me. I'm going to have to move up my schedule. I'm guessing that you missed out on a pay day for this. Have the rifle, for your troubles. Here, take it. I'll see you around.”.

```text
Journal SW_AssollQuest 20
player->additem SW_BlasterRifleGavan 1
Moddisposition 5
```

### Stage 25

I mentioned his "contraband", and he offered to sell it to me for a low price. Czerka is likely to pay me more than what I bought it for, so I bought it. It turned out to be a rifle from the planet of Serenno. How he got it offworld with the current state of affairs as they are, I'll never know. I should take it back to Assoll.

**How this stage is set:**
- Dialogue INFO `25033103962540922141` under topic **something rare**; speaker Ninulin Villaks (`TatooineNinulin`). locations: `Tatooine, Cantina`. conditions: Function/Choice Equal 1. response: “Good choice. Now, we have no more business with one another. Keep moving.”.

```text
player->removeitem gold_001 500
player->additem SW_BlasterRifleGavan 1
Journal SW_AssollQuest 25
Moddisposition 5
goodbye
```

### Stage 30

I murdered the Duros smuggler and took the "contraband" off his corpse. It turned out to be a rifle from the planet of Serenno. How he got it offworld with the current state of affairs as they are, I'll never know. I should return to Assholl.

**How this stage is set:**
- Dialogue INFO `22766319221026430194` under topic **something rare**; speaker Ninulin Villaks (`TatooineNinulin`). locations: `Tatooine, Cantina`. conditions: Function/Choice Equal 2. response: “You're with Czerka! I'll die before you take me there!”.

```text
Startcombat player
Journal SW_AssollQuest 30
additem SW_BlasterRifleGavan 1
Moddisposition -20
```

### Stage 35 — Finished

One of the players in this little game between Czerka and the smuggler died. Now I'll never know what the contraband is.

**How this stage is set:**
- Script `AssholeScript`. attached to Npc Assoll Hil (`TatooineAssoll`); placed in `Tatooine, Sandriver`.

```text
if (GetJournalIndex "SW_AssollQuest" <= 35)
        If (Ondeath == 1)
            Journal, SW_AssollQuest 35
        endif
    endif
```
- Script `VillaksScript`. attached to Npc Ninulin Villaks (`TatooineNinulin`); placed in `Tatooine, Cantina`.

```text
if (GetJournalIndex "SW_AssollQuest" >= 5)
        if (GetJournalIndex "SW_AssollQuest" <= 25)
            Journal SW_AssollQuest 35
        endif
    endif
```

### Stage 40 — Finished

I gave the rifle to the Czerka rep and he rewarded me appropriately.

**How this stage is set:**
- Dialogue INFO `1027923936310912782` under topic **help**; speaker Assoll Hil (`TatooineAssoll`). locations: `Tatooine, Sandriver`. conditions: Journal `SW_AssollQuest` Equal 30; Function/Choice Equal 4; Journal `SW_AssollQuest` NotEqual 20; Journal `SW_AssollQuest` NotEqual 25. response: “Ah, pity. It's a shame it had to end in death but then again he was scum so he will not be missed. Here. Your reward and a few medkits, on me of course. Now let's take a look at that contraband..... Oh my. I've never seen a blaster rifle like this before. This is....unique. I'll just take that, thank you very much. I believe our business is concluded. So goodbye.”.

```text
player->additem SW_Medkit 3
Moddisposition 20
Journal SW_AssollQuest 40
player->modreputation 1
Goodbye
```
- Dialogue INFO `1181789202502430789` under topic **help**; speaker Assoll Hil (`TatooineAssoll`). locations: `Tatooine, Sandriver`. conditions: Function/Choice Equal 3; Journal `SW_AssollQuest` GreaterEqual 20; Journal `SW_AssollQuest` LessEqual 25. response: “Ah, this is an odd sight.... I've never seen a blaster rifle like this before. Interesting. Well, here's your reward, plus reimbursement for what you paid him. Thank you very much for assisting us in this matter.”.

```text
TatooineNinulin->Disable
Moddisposition 20
Journal SW_AssollQuest 40
player->modreputation 1
Goodbye
```

### Stage 45 — Finished

I refused to give the rifle to the Czerka rep. I decided to keep it for myself, and as such received no reward.

**How this stage is set:**
- Dialogue INFO `3154213052742929431` under topic **help**; speaker Assoll Hil (`TatooineAssoll`). locations: `Tatooine, Sandriver`. conditions: Function/Choice Equal 5; Journal `SW_AssollQuest` GreaterEqual 20; Journal `SW_AssollQuest` LessEqual 30. response: “Really? He left Sandriver? Even Tatooine itself? Goddammit, that was our one chance to get our hands on what he had.... Well shit.... You know I can't pay you unless you fulfilled your end of the bargain, which you haven't. I'll just bid you good day, our business is concluded.”.

```text
Journal SW_AssollQuest 45
TatooineNinulin->Disable
Goodbye
```

### Stage 50 — Finished

I outright refused to give the rifle to the Czerka rep, and he had me arrested. I managed to hide the weapon, and I still have it though.

**How this stage is set:**
- Dialogue INFO `2441920958129394413` under topic **help**; speaker Assoll Hil (`TatooineAssoll`). locations: `Tatooine, Sandriver`. conditions: Function/Choice Equal 6; Journal `SW_AssollQuest` GreaterEqual 20; Journal `SW_AssollQuest` LessEqual 30. response: “What? What did you just say to me?! I gave you a simple job, and now you betray me?! Oh boy, you're in a Czerka settlement you moron! Guards! We have a thief over here! Guards!”.

```text
Startcombat Player
TatooineNinulin->Disable
Journal SW_AssollQuest 50
Moddisposition -100
TatooineAssollGoon->Enable
```

### Related records and locations

**Dialogue speakers:**
- Assoll Hil (`TatooineAssoll`) — `Tatooine, Sandriver`
- Ninulin Villaks (`TatooineNinulin`) — `Tatooine, Cantina`

**Scripts that read or write this journal:**
- `AssholeScript` — Npc Assoll Hil (`TatooineAssoll`); placed in `Tatooine, Sandriver`
- `VillaksScript` — Npc Ninulin Villaks (`TatooineNinulin`); placed in `Tatooine, Cantina`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)
- Serennian Civil Rifle (`SW_BlasterRifleGavan`)
- Medkit (`SW_Medkit`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Tatooine, Cantina`
- `Tatooine, Sandriver`

<details><summary>Journal-state readers (2 code sites)</summary>

- Script `AssholeScript`. attached to Npc Assoll Hil (`TatooineAssoll`); placed in `Tatooine, Sandriver`.
- Script `VillaksScript`. attached to Npc Ninulin Villaks (`TatooineNinulin`); placed in `Tatooine, Cantina`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: I was approached in Sandriver by a Czerka representative. He claims that a smuggler is hiding out in the nearb…
- [ ] Reach index `10`: I was asked by the Czerka representative to contact a Duros smuggler in the cantina who goes by the name Ninul…
- [ ] Reach index `15`: I confronted the smuggler, who seemed to be surprised I knew about the "contraband" he possessed.
- [ ] Reach index `20`: I warned him about Czerka's interest in his "contraband". Thankful, the smuggler decided to skip town, but gav…
- [ ] Reach index `25`: I mentioned his "contraband", and he offered to sell it to me for a low price. Czerka is likely to pay me more…
- [ ] Reach index `30`: I murdered the Duros smuggler and took the "contraband" off his corpse. It turned out to be a rifle from the p…
- [ ] Reach index `35` (`Finished`): One of the players in this little game between Czerka and the smuggler died. Now I'll never know what the cont…
- [ ] Reach index `40` (`Finished`): I gave the rifle to the Czerka rep and he rewarded me appropriately.
- [ ] Reach index `45` (`Finished`): I refused to give the rifle to the Czerka rep. I decided to keep it for myself, and as such received no reward…
- [ ] Reach index `50` (`Finished`): I outright refused to give the rifle to the Czerka rep, and he had me arrested. I managed to hide the weapon, …
- [ ] Branch coverage: this journal has **4 different `Finished` entries**; test each reachable completion branch.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_AssollQuest`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
