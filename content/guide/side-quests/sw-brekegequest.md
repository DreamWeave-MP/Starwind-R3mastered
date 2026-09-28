---
title: "Not For Vengeance, But For Right"
description: "Walkthrough and QA reference for Not For Vengeance, But For Right (SW_BrekegeQuest)."
weight: 56
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_BrekegeQuest"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_BrekegeQuest` |
| **Category** | Side Quests |
| **Journal entries** | 11 |
| **Completion branches** | 4 |
| **Starts by** | Speak with **Brekege** in **Tatooine**. |
| **Key locations** | Tatooine, Tatooine, Republic Base |
| **Key characters** | Brekege, Lieutenant Inri Krait |

## Walkthrough

### 1. Speak with Brekege in Tatooine

Speak with **Brekege** in **Tatooine**.

> **Expected journal update — index 5:** I met a group of Republic soldiers led by a Zabrak Jedi near Sandriver. They are about to attack a nearby squad of Sith.

### 2. Speak with Lieutenant Inri Krait in Tatooine

Speak with **Lieutenant Inri Krait** in **Tatooine**.

> **Expected journal update — index 10:** I met a group of Sith soldiers led by a Lothalite Lieutenant near Sandriver. They are readying themselves to counter an ambush by Republic forces.

### 3. Speak with Brekege in Tatooine and ask about launch an attack

Speak with **Brekege** in **Tatooine** and ask about **launch an attack**.

> **Expected journal update — index 15:** I decided to aid the Republic forces in the ambush.

### 4. Speak with Lieutenant Inri Krait in Tatooine and ask about self defense

Speak with **Lieutenant Inri Krait** in **Tatooine** and ask about **self defense**.

> **Expected journal update — index 20:** I decided to aid the Sith forces in the fending off the Republic ambush.

### 5. Defeat Lieutenant Inri Krait in Tatooine and allow its script to update the quest

Defeat **Lieutenant Inri Krait** in **Tatooine** and allow its script to update the quest.

> **Expected journal update — index 21:** The Sith Squad leader has perished. I should speak to Brekege.

### 6. Find Brekege in Tatooine and complete the encounter

Find **Brekege** in **Tatooine** and complete the encounter.

> **Expected journal update — index 22:** The Republic Squad leader has perished. I should speak to Inri Krait.

### 7. Speak with Lieutenant Inri Krait in Tatooine — Finished

The records expose more than one way to reach this journal update:
- Speak with **Lieutenant Inri Krait** in **Tatooine**.
- Speak with **Brekege** in **Tatooine**.

> **Expected journal update — index 25:** The enemies have been defeated, and the leader of the soldiers rewarded me for my aid with a large pouch of credits. Should I really have gotten involved in something so dangerous as that? Well, I suppose it's over with now. No doubt the side I chose will think more highly of me.

**Known item transfer:** 250 × **Credits** (`Gold_001`).

**Outcome:** this journal entry is marked as a finished branch.

### 8. Defeat Brekege in Tatooine and allow its script to update the quest — Finished

The records expose more than one way to reach this journal update:
- Defeat **Brekege** in **Tatooine** and allow its script to update the quest.
- Defeat **Lieutenant Inri Krait** in **Tatooine** and allow its script to update the quest.

> **Expected journal update — index 30:** A leader of one of the squads has died. I cannot help with the skirmish, now.

**Outcome:** this journal entry is marked as a finished branch.

### 9. Find Brekege in Tatooine and complete the encounter — Finished

Find **Brekege** in **Tatooine** and complete the encounter.

> **Expected journal update — index 35:** The Jedi, Brekege, died during battle. Whatever reward he offered is surely lost now.

**Outcome:** this journal entry is marked as a finished branch.

### 10. Defeat Lieutenant Inri Krait in Tatooine and allow its script to update the quest — Finished

Defeat **Lieutenant Inri Krait** in **Tatooine** and allow its script to update the quest.

> **Expected journal update — index 40:** The Sith Lieutenant, Inri Krait, has died during battle. Whatever reward she offered is truly lost now.

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has **4 explicit finished entries**. Treat them as branch coverage targets during playtesting:

- **Index 25:** The enemies have been defeated, and the leader of the soldiers rewarded me for my aid with a large pouch of credits. Should I really have gotten involved in something so dangerous as that? Well, I suppose it's over with now. No doubt the side I chose will think more highly of me.
- **Index 30:** A leader of one of the squads has died. I cannot help with the skirmish, now.
- **Index 35:** The Jedi, Brekege, died during battle. Whatever reward he offered is surely lost now.
- **Index 40:** The Sith Lieutenant, Inri Krait, has died during battle. Whatever reward she offered is truly lost now.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 250 × **Credits** (`Gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Brekege** (`TatooineBrekege`) — `Tatooine`
- **Lieutenant Inri Krait** (`TatooineInri`) — `Tatooine`

**Locations implicated by actor/object placement or explicit travel:**
- **Tatooine**
- **Tatooine, Republic Base**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_BrekegeQuest`
**Generated category:** Side Quests
**Journal entries:** 11

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | I met a group of Republic soldiers led by a Zabrak Jedi near Sandriver. They are about to attack a nearby squad of Sith. | 1 |
| 10 | — | I met a group of Sith soldiers led by a Lothalite Lieutenant near Sandriver. They are readying themselves to counter an ambush by Republic forces. | 1 |
| 15 | — | I decided to aid the Republic forces in the ambush. | 1 |
| 20 | — | I decided to aid the Sith forces in the fending off the Republic ambush. | 1 |
| 21 | — | The Sith Squad leader has perished. I should speak to Brekege. | 1 |
| 22 | — | The Republic Squad leader has perished. I should speak to Inri Krait. | 1 |
| 25 | Finished | The enemies have been defeated, and the leader of the soldiers rewarded me for my aid with a large pouch of credits. Should I really have gotten involved in something so dangerous as that? Well, I suppose it's over with now. No doubt the side I chose will think more highly of me. | 2 |
| 30 | Finished | A leader of one of the squads has died. I cannot help with the skirmish, now. | 2 |
| 35 | Finished | The Jedi, Brekege, died during battle. Whatever reward he offered is surely lost now. | 1 |
| 40 | Finished | The Sith Lieutenant, Inri Krait, has died during battle. Whatever reward she offered is truly lost now. | 1 |

### Record-level trigger map

### Stage 5

I met a group of Republic soldiers led by a Zabrak Jedi near Sandriver. They are about to attack a nearby squad of Sith.

**How this stage is set:**
- Dialogue INFO `1012862092918230631` under topic **Greeting 5**; speaker Brekege (`TatooineBrekege`). locations: `Tatooine`. conditions: Journal `SW_BrekegeQuest` GreaterEqual 0; Journal `SW_BrekegeQuest` LessEqual 10. response: “Clarnfa, traveler. Be wary of the cave nearby. A foul group of Sith soldiers lie in hiding inside. Any minute now, me and my men are going to launch an attack and eliminate the Sith squad. To avoid being caught in the crossfire, you should leave immediately.”.

```text
Journal, SW_BrekegeQuest, 5
Stopsound "SW_BrekGreet1"
Stopsound "SW_BrekGreet2"
```

### Stage 10

I met a group of Sith soldiers led by a Lothalite Lieutenant near Sandriver. They are readying themselves to counter an ambush by Republic forces.

**How this stage is set:**
- Dialogue INFO `107081967011225638` under topic **Greeting 5**; speaker Lieutenant Inri Krait (`TatooineInri`). locations: `Tatooine`. conditions: Journal `SW_BrekegeQuest` GreaterEqual 0; Journal `SW_BrekegeQuest` LessEqual 10. response: “You stumbled upon the sight of death, my friend. But I am magnanimous today, for I have bigger concerns. Walk away, lest we target you in our own self defense.”.

```text
Journal, SW_BrekegeQuest, 10
StopSound "SW_InriHello1"
StopSound "SW_InriHello2"
```

### Stage 15

I decided to aid the Republic forces in the ambush.

**How this stage is set:**
- Dialogue INFO `2424886141155331158` under topic **launch an attack**; speaker Brekege (`TatooineBrekege`). locations: `Tatooine`. conditions: Function/Choice Equal 3. response: “Very well, let's attack now then! Lead us into battle, friend! We shall be right behind you! Remember, the holocron is the objective. I'll secure it as soon as the area has been cleared of Sith soldiers. Let's go!”.

```text
Journal, SW_BrekegeQuest, 15
Moddisposition 15
AIFollow, Player, 0, 0, 0, 0
```

### Stage 20

I decided to aid the Sith forces in the fending off the Republic ambush.

**How this stage is set:**
- Dialogue INFO `23449285401452814289` under topic **self defense**; speaker Lieutenant Inri Krait (`TatooineInri`). locations: `Tatooine`. conditions: Function/Choice Equal 3. response: “Ha! I like your attitude, you know that? If you really wish to throw your life away for our mighty Empire, then I'll allow it. We will attack the Republic dogs before they attack us. Sometimes the best defense is a good offense, after all. Now come on, lead us to the Republic bastards! They hide outside this cave! Let's go!”.

```text
Moddisposition 10
Journal, SW_BrekegeQuest, 20
AIFollow, Player, 0, 0, 0, 0
TatooineBrekege->Setfight 100
```

### Stage 21

The Sith Squad leader has perished. I should speak to Brekege.

**How this stage is set:**
- Script `InriScript`. attached to Npc Lieutenant Inri Krait (`TatooineInri`); placed in `Tatooine`.

```text
if (OnDeath == 1)
            if (GetJournalIndex SW_BrekegeQuest <= 10)
                Journal, SW_BrekegeQuest, 30
            Elseif (GetJournalIndex SW_BrekegeQuest == 15)
                TatooineBrekege->AiTravel 0, 0, 0, 0
```

```text
Elseif (GetJournalIndex SW_BrekegeQuest == 15)
                TatooineBrekege->AiTravel 0, 0, 0, 0
                     journal, SW_BrekegeQuest, 21
            Elseif (GetJournalIndex SW_BrekegeQuest == 20)
                     journal, SW_BrekegeQuest, 40
```

```text
journal, SW_BrekegeQuest, 21
            Elseif (GetJournalIndex SW_BrekegeQuest == 20)
                     journal, SW_BrekegeQuest, 40
            endif
            endif
```

### Stage 22

The Republic Squad leader has perished. I should speak to Inri Krait.

**How this stage is set:**
- Script `BrekegeScript`. attached to Npc Brekege (`TatooineBrekege`); placed in `Tatooine`.

```text
if (GetJournalIndex SW_BrekegeQuest <= 10)
                removeitem, "SW_LightSabSenBlue", 1
                Journal, SW_BrekegeQuest, 30
            Elseif (GetJournalIndex SW_BrekegeQuest == 15)
                     removeitem, "SW_LightSabSenBlue", 1
```

```text
Elseif (GetJournalIndex SW_BrekegeQuest == 15)
                     removeitem, "SW_LightSabSenBlue", 1
                     journal, SW_BrekegeQuest, 35
            Elseif (GetJournalIndex SW_BrekegeQuest == 20)
                removeitem, "SW_LightSabSenBlue", 1
```

```text
removeitem, "SW_LightSabSenBlue", 1
                TatooineInri->AiTravel 0, 0, 0, 0
                     journal, SW_BrekegeQuest, 22
            endif
            endif
```

### Stage 25 — Finished

The enemies have been defeated, and the leader of the soldiers rewarded me for my aid with a large pouch of credits. Should I really have gotten involved in something so dangerous as that? Well, I suppose it's over with now. No doubt the side I chose will think more highly of me.

**How this stage is set:**
- Dialogue INFO `11166314692727419226` under topic **Greeting 5**; speaker Lieutenant Inri Krait (`TatooineInri`). locations: `Tatooine`. conditions: Journal `SW_BrekegeQuest` Equal 22. response: “*fatigued breathing* Well.... That was a good scrap, no? And yet you still live? What a surprise... But it is a welcome one. I'm not to mince words with the unworthy, but you have some worth I'll admit. Here. Take some credits and get out of here. Go drink them away or something. We're done here. Get out of here before the Wraids decide to eat you too.”.

```text
ModPCFacRep 1 "The Sith"
Moddisposition 15
Journal, SW_BrekegeQuest, 25
StopSound "SW_InriHello1"
PlaySound3D "SW_InriHello2"
```
- Dialogue INFO `26071382425568880` under topic **Greeting 5**; speaker Brekege (`TatooineBrekege`). locations: `Tatooine`. conditions: Journal `SW_BrekegeQuest` Equal 21. response: “We have triumphed, well fought friend! I myself have secured the holocron, and will soon be returning to base. Thank you for your help in all this, I suppose I should give you something to thank you properly. Mere words aren't enough. Here. Make good use of them. Now, we should all leave before the Wraids come to feast. Thank you friend. The Jedi Order owes you one severely.”.

```text
Journal, SW_BrekegeQuest, 25
Player->additem Gold_001 250
ModPCFacRep 1 "The Republic"
```

### Stage 30 — Finished

A leader of one of the squads has died. I cannot help with the skirmish, now.

**How this stage is set:**
- Script `BrekegeScript`. attached to Npc Brekege (`TatooineBrekege`); placed in `Tatooine`.

```text
if (GetJournalIndex SW_BrekegeQuest <= 10)
                removeitem, "SW_LightSabSenBlue", 1
                Journal, SW_BrekegeQuest, 30
            Elseif (GetJournalIndex SW_BrekegeQuest == 15)
                     removeitem, "SW_LightSabSenBlue", 1
```

```text
Elseif (GetJournalIndex SW_BrekegeQuest == 15)
                     removeitem, "SW_LightSabSenBlue", 1
                     journal, SW_BrekegeQuest, 35
            Elseif (GetJournalIndex SW_BrekegeQuest == 20)
                removeitem, "SW_LightSabSenBlue", 1
```

```text
removeitem, "SW_LightSabSenBlue", 1
                TatooineInri->AiTravel 0, 0, 0, 0
                     journal, SW_BrekegeQuest, 22
            endif
            endif
```
- Script `InriScript`. attached to Npc Lieutenant Inri Krait (`TatooineInri`); placed in `Tatooine`.

```text
if (OnDeath == 1)
            if (GetJournalIndex SW_BrekegeQuest <= 10)
                Journal, SW_BrekegeQuest, 30
            Elseif (GetJournalIndex SW_BrekegeQuest == 15)
                TatooineBrekege->AiTravel 0, 0, 0, 0
```

```text
Elseif (GetJournalIndex SW_BrekegeQuest == 15)
                TatooineBrekege->AiTravel 0, 0, 0, 0
                     journal, SW_BrekegeQuest, 21
            Elseif (GetJournalIndex SW_BrekegeQuest == 20)
                     journal, SW_BrekegeQuest, 40
```

```text
journal, SW_BrekegeQuest, 21
            Elseif (GetJournalIndex SW_BrekegeQuest == 20)
                     journal, SW_BrekegeQuest, 40
            endif
            endif
```

### Stage 35 — Finished

The Jedi, Brekege, died during battle. Whatever reward he offered is surely lost now.

**How this stage is set:**
- Script `BrekegeScript`. attached to Npc Brekege (`TatooineBrekege`); placed in `Tatooine`.

```text
if (GetJournalIndex SW_BrekegeQuest <= 10)
                removeitem, "SW_LightSabSenBlue", 1
                Journal, SW_BrekegeQuest, 30
            Elseif (GetJournalIndex SW_BrekegeQuest == 15)
                     removeitem, "SW_LightSabSenBlue", 1
```

```text
Elseif (GetJournalIndex SW_BrekegeQuest == 15)
                     removeitem, "SW_LightSabSenBlue", 1
                     journal, SW_BrekegeQuest, 35
            Elseif (GetJournalIndex SW_BrekegeQuest == 20)
                removeitem, "SW_LightSabSenBlue", 1
```

```text
removeitem, "SW_LightSabSenBlue", 1
                TatooineInri->AiTravel 0, 0, 0, 0
                     journal, SW_BrekegeQuest, 22
            endif
            endif
```

### Stage 40 — Finished

The Sith Lieutenant, Inri Krait, has died during battle. Whatever reward she offered is truly lost now.

**How this stage is set:**
- Script `InriScript`. attached to Npc Lieutenant Inri Krait (`TatooineInri`); placed in `Tatooine`.

```text
if (OnDeath == 1)
            if (GetJournalIndex SW_BrekegeQuest <= 10)
                Journal, SW_BrekegeQuest, 30
            Elseif (GetJournalIndex SW_BrekegeQuest == 15)
                TatooineBrekege->AiTravel 0, 0, 0, 0
```

```text
Elseif (GetJournalIndex SW_BrekegeQuest == 15)
                TatooineBrekege->AiTravel 0, 0, 0, 0
                     journal, SW_BrekegeQuest, 21
            Elseif (GetJournalIndex SW_BrekegeQuest == 20)
                     journal, SW_BrekegeQuest, 40
```

```text
journal, SW_BrekegeQuest, 21
            Elseif (GetJournalIndex SW_BrekegeQuest == 20)
                     journal, SW_BrekegeQuest, 40
            endif
            endif
```

### Related records and locations

**Dialogue speakers:**
- Brekege (`TatooineBrekege`) — `Tatooine`
- Lieutenant Inri Krait (`TatooineInri`) — `Tatooine`

**Scripts that read or write this journal:**
- `BrekegeRelocateScript` — Activator Brekege Dummy Mover (`SW_BrekegeMover`); placed in `Tatooine, Republic Base`
- `BrekegeScript` — Npc Brekege (`TatooineBrekege`); placed in `Tatooine`
- `InriRelocateScript` — Activator Inri Dummy Mover (`SW_InriMover`); placed in `Tatooine, Republic Base`
- `InriScript` — Npc Lieutenant Inri Krait (`TatooineInri`); placed in `Tatooine`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)
- Blue Lightsaber (`SW_LightSabSenBlue`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Tatooine`
- `Tatooine, Republic Base`

<details><summary>Journal-state readers (4 code sites)</summary>

- Script `BrekegeRelocateScript`. attached to Activator Brekege Dummy Mover (`SW_BrekegeMover`); placed in `Tatooine, Republic Base`.
- Script `BrekegeScript`. attached to Npc Brekege (`TatooineBrekege`); placed in `Tatooine`.
- Script `InriRelocateScript`. attached to Activator Inri Dummy Mover (`SW_InriMover`); placed in `Tatooine, Republic Base`.
- Script `InriScript`. attached to Npc Lieutenant Inri Krait (`TatooineInri`); placed in `Tatooine`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: I met a group of Republic soldiers led by a Zabrak Jedi near Sandriver. They are about to attack a nearby squa…
- [ ] Reach index `10`: I met a group of Sith soldiers led by a Lothalite Lieutenant near Sandriver. They are readying themselves to c…
- [ ] Reach index `15`: I decided to aid the Republic forces in the ambush.
- [ ] Reach index `20`: I decided to aid the Sith forces in the fending off the Republic ambush.
- [ ] Reach index `21`: The Sith Squad leader has perished. I should speak to Brekege.
- [ ] Reach index `22`: The Republic Squad leader has perished. I should speak to Inri Krait.
- [ ] Reach index `25` (`Finished`): The enemies have been defeated, and the leader of the soldiers rewarded me for my aid with a large pouch of cr…
- [ ] Reach index `30` (`Finished`): A leader of one of the squads has died. I cannot help with the skirmish, now.
- [ ] Reach index `35` (`Finished`): The Jedi, Brekege, died during battle. Whatever reward he offered is surely lost now.
- [ ] Reach index `40` (`Finished`): The Sith Lieutenant, Inri Krait, has died during battle. Whatever reward she offered is truly lost now.
- [ ] Branch coverage: this journal has **4 different `Finished` entries**; test each reachable completion branch.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_BrekegeQuest`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
