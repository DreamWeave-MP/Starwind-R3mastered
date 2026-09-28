---
title: "Whodunnit?"
description: "Walkthrough and QA reference for Whodunnit? (SW_WhoDunnit)."
weight: 111
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_WhoDunnit"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_WhoDunnit` |
| **Category** | Side Quests |
| **Journal entries** | 16 |
| **Completion branches** | No explicit Finished marker |
| **Starts by** | Speak with **Group Captain Drumgdond** in **Serenno, House Comprassi** and ask about **task**. |
| **Observed prerequisite journals** | `SW_LoveAndWar` |
| **Key locations** | Serenno, House Comprassi, Serenno, Mar Madas' Home, Serenno, Military Headquarters, Serenno, Wrecked Store |
| **Key characters** | Group Captain Drumgdond, Captain Dunes Birgid, Investigator, Gudi Jin, Mar Madas |

## Walkthrough

### 1. Speak with Group Captain Drumgdond in Serenno, House Comprassi and ask about task

Speak with **Group Captain Drumgdond** in **Serenno, House Comprassi** and ask about **task**.

> **Expected journal update — index 5:** I spoke with Group Captain Drumgdond, and he told me of a murder that occurred in the heart of the Market District. I am to go see Captain Dunes in the Military Headquarters to be filled in.

### 2. Speak with Captain Dunes Birgid in Serenno, Military Headquarters and ask about murder

Speak with **Captain Dunes Birgid** in **Serenno, Military Headquarters** and ask about **murder**.

> **Expected journal update — index 10:** Speaking with Captain Dunes, there is a crime scene in the Market District. A merchant murdered right in his store. They have no leads at the moment, but refuse to leave the crime unsolved. I am to head to the Market District and speak with the Investigator on site. There is also a P.O.I. on site as well. A Bith named Gudi Jin. To find the store, I need to head to the Market District. It will left of the front gates, right if I'm facing them.

### 3. Speak with Investigator in Serenno, Wrecked Store and ask about murder

Speak with **Investigator** in **Serenno, Wrecked Store** and ask about **murder**.

> **Expected journal update — index 11:** Speaking with the Investigator, I have learned that the victim's name was Brim Naldi, a local nobleman and aspiring merchant. But aside from that and the vibroblade slashes, there aren't a whole lotta clues on the crime scene. There is a Bith P.O.I. however, and the Investigator recommened that I speak with them and try to learn something she couldn't.

### 4. Speak with Gudi Jin in Serenno, Wrecked Store and ask about murder

Speak with **Gudi Jin** in **Serenno, Wrecked Store** and ask about **murder**.

> **Expected journal update — index 12:** I spoke with Gudi Jin, and she told me of three regulars that piqued my interest. Mar Madas. Ropixi. And Vera Tisu. I should gather more info from Gudi Jin and then speak to the Investigator on what to do next.

### 5. Speak with Gudi Jin in Serenno, Wrecked Store and ask about Ropixi

Speak with **Gudi Jin** in **Serenno, Wrecked Store** and ask about **Ropixi**.

> **Expected journal update — index 13:** Ropixi is a Zabrak noblewoman that works at the Carannian Office of Commerce. I can find the building in the Government District.

### 6. Speak with Gudi Jin in Serenno, Wrecked Store and ask about Mar Madas

Speak with **Gudi Jin** in **Serenno, Wrecked Store** and ask about **Mar Madas**.

> **Expected journal update — index 14:** Mar Madas is Gudi Jin's Togruta Neighbor. He can be found living in the Slums District, next to Gudi Jin's house.

### 7. Speak with Gudi Jin in Serenno, Wrecked Store and ask about Vera Tisu

Speak with **Gudi Jin** in **Serenno, Wrecked Store** and ask about **Vera Tisu**.

> **Expected journal update — index 15:** Vera Tisu is a human mercenary who frequents The Tirra'Taka's Den in the Market District. Apparently, he is a foul-mouted person. Typical of a mercenary.

### 8. Speak with Mar Madas in Serenno, Mar Madas' Home and ask about accuse

The records expose more than one way to reach this journal update:
- Speak with **Mar Madas** in **Serenno, Mar Madas' Home** and ask about **accuse**.
- Speak with **Investigator** in **Serenno, Wrecked Store** and ask about **murder**.

> **Expected journal update — index 16:** The Investigator, with the information I gave her, told me that she looked over the crime scene again and found a glove belonging to the GenoHaradan Assassination Guild. She said, if all else fails, show them the glove and see their reaction. I have to remember that Mar Madas lives in the Slums, Vera Tisu is in the Market District, and Ropixi is in the Government District. Once I have my man, I should speak with Captain Dunes about filing an arrest, or risk accusing them directly.

**Known item transfer:** 1 × **GenoHaradan Right Glove** (`SW_BrownGloveGeno`).

### 9. Reach journal stage 17

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 17:** I accused Mar Madas of murdering Brim Naldi and he attacked! I must defend myself!

### 10. Defeat Mar Madas in Serenno, Mar Madas' Home and allow its script to update the quest

Defeat **Mar Madas** in **Serenno, Mar Madas' Home** and allow its script to update the quest.

> **Expected journal update — index 18:** After accusing Mar Madas of the crime, he attacked me. Before attacking, he outright admitted to killing him - but with no clear reason as to why. Now that he is dead, I should report back to Captain Dunes.

### 11. Speak with Captain Dunes Birgid in Serenno, Military Headquarters and ask about Mar Madas

Speak with **Captain Dunes Birgid** in **Serenno, Military Headquarters** and ask about **Mar Madas**.

> **Expected journal update — index 19:** Captain Dunes was disappointed in that it ended in further bloodshed, but was pleased that the murderer was caught at least. I should report back to my commanding officer.

### 12. Reach journal stage 20

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 20:** Captain Dunes told me he would file an arrest warrant have Mar Madas brought in. I should speak with my commanding officer.

### 13. Reach journal stage 21

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 21:** Captain Dunes told me he would file an arrest warrant have Ropixi brought in. I should speak with my commanding officer.

### 14. Reach journal stage 22

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 22:** Captain Dunes told me he would file an arrest warrant have Vera Tisu brought in. I should speak with my commanding officer.

### 15. Reach journal stage 30

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 30:** Captain Drumgdond was pleased that I solved the crime, and rewarded me appropriately. He then ordered me to take a breather, believing that it must've been tiring to have been running all over the city "chasing ghosts". When I am ready for my next task, I should go and see him.

> **Playtest flag:** 5 journal stages on this page lack a literal setter in the current static scan.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 1 × **GenoHaradan Right Glove** (`SW_BrownGloveGeno`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Group Captain Drumgdond** (`PathfinderGate4`) — `Serenno, House Comprassi`
- **Captain Dunes Birgid** (`SerennoGuardCaptain`) — `Serenno, Military Headquarters`
- **Investigator** (`SerennoMurderInvestigat`) — `Serenno, Wrecked Store`
- **Gudi Jin** (`SerennoMurderWitness`) — `Serenno, Wrecked Store`
- **Mar Madas** (`SW_MarMadas`) — `Serenno, Mar Madas' Home`

**Locations implicated by actor/object placement or explicit travel:**
- **Serenno, House Comprassi**
- **Serenno, Mar Madas' Home**
- **Serenno, Military Headquarters**
- **Serenno, Wrecked Store**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_WhoDunnit`
**Generated category:** Side Quests
**Journal entries:** 16

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | I spoke with Group Captain Drumgdond, and he told me of a murder that occurred in the heart of the Market District. I am to go see Captain Dunes in the Military Headquarters to be filled in. | 1 |
| 10 | — | Speaking with Captain Dunes, there is a crime scene in the Market District. A merchant murdered right in his store. They have no leads at the moment, but refuse to leave the crime unsolved. I am to head to the Market District and speak with the Investigator on site. There is also a P.O.I. on site as well. A Bith named Gudi Jin. To find the store, I need to head to the Market District. It will left of the front gates, right if I'm facing them. | 1 |
| 11 | — | Speaking with the Investigator, I have learned that the victim's name was Brim Naldi, a local nobleman and aspiring merchant. But aside from that and the vibroblade slashes, there aren't a whole lotta clues on the crime scene. There is a Bith P.O.I. however, and the Investigator recommened that I speak with them and try to learn something she couldn't. | 1 |
| 12 | — | I spoke with Gudi Jin, and she told me of three regulars that piqued my interest. Mar Madas. Ropixi. And Vera Tisu. I should gather more info from Gudi Jin and then speak to the Investigator on what to do next. | 1 |
| 13 | — | Ropixi is a Zabrak noblewoman that works at the Carannian Office of Commerce. I can find the building in the Government District. | 1 |
| 14 | — | Mar Madas is Gudi Jin's Togruta Neighbor. He can be found living in the Slums District, next to Gudi Jin's house. | 1 |
| 15 | — | Vera Tisu is a human mercenary who frequents The Tirra'Taka's Den in the Market District. Apparently, he is a foul-mouted person. Typical of a mercenary. | 1 |
| 16 | — | The Investigator, with the information I gave her, told me that she looked over the crime scene again and found a glove belonging to the GenoHaradan Assassination Guild. She said, if all else fails, show them the glove and see their reaction. I have to remember that Mar Madas lives in the Slums, Vera Tisu is in the Market District, and Ropixi is in the Government District. Once I have my man, I should speak with Captain Dunes about filing an arrest, or risk accusing them directly. | 2 |
| 17 | — | I accused Mar Madas of murdering Brim Naldi and he attacked! I must defend myself! | 0 |
| 18 | — | After accusing Mar Madas of the crime, he attacked me. Before attacking, he outright admitted to killing him - but with no clear reason as to why. Now that he is dead, I should report back to Captain Dunes. | 1 |
| 19 | — | Captain Dunes was disappointed in that it ended in further bloodshed, but was pleased that the murderer was caught at least. I should report back to my commanding officer. | 1 |
| 20 | — | Captain Dunes told me he would file an arrest warrant have Mar Madas brought in. I should speak with my commanding officer. | 0 |
| 21 | — | Captain Dunes told me he would file an arrest warrant have Ropixi brought in. I should speak with my commanding officer. | 0 |
| 22 | — | Captain Dunes told me he would file an arrest warrant have Vera Tisu brought in. I should speak with my commanding officer. | 0 |
| 30 | — | Captain Drumgdond was pleased that I solved the crime, and rewarded me appropriately. He then ordered me to take a breather, believing that it must've been tiring to have been running all over the city "chasing ghosts". When I am ready for my next task, I should go and see him. | 0 |

### Record-level trigger map

### Stage 5

I spoke with Group Captain Drumgdond, and he told me of a murder that occurred in the heart of the Market District. I am to go see Captain Dunes in the Military Headquarters to be filled in.

**How this stage is set:**
- Dialogue INFO `14219150342370911166` under topic **task**; speaker Group Captain Drumgdond (`PathfinderGate4`). locations: `Serenno, House Comprassi`. conditions: Journal `SW_LoveAndWar` GreaterEqual 39. response: “Ah, welcome back %PCRace. Yes, I've got another task for you. We're doing our best to keep order for the Serennian Defense Force but there's only so much ground we ourselves can cover. Things slip past us. And sometimes they are bad. We've got a murder in the Market District. Go speak to Captain Dunes in the Military Headquarters, and he'll fill you in.”.

```text
Journal, SW_Whodunnit, 5
```

### Stage 10

Speaking with Captain Dunes, there is a crime scene in the Market District. A merchant murdered right in his store. They have no leads at the moment, but refuse to leave the crime unsolved. I am to head to the Market District and speak with the Investigator on site. There is also a P.O.I. on site as well. A Bith named Gudi Jin. To find the store, I need to head to the Market District. It will left of the front gates, right if I'm facing them.

**How this stage is set:**
- Dialogue INFO `1225613905247085762` under topic **murder**; speaker Captain Dunes Birgid (`SerennoGuardCaptain`). locations: `Serenno, Military Headquarters`. conditions: Journal `SW_WhoDunnit` Equal 5. response: “M-murder? OH! You're that Republic Soldier. You're commanding officer sent you then, I take it? OK. Well. Here's the run down: A merchant in the Market District was found dead not long ago by a prospective patron. A Female Bith named Gudi Jin. An Investigator is already on scene. We don't have any leads as of right now, but that doesn't mean we can't find any. Get down there and see what you can figure out. The building in question is in the Market District, left of the front gates.”.

```text
Journal, SW_Whodunnit, 10
```

### Stage 11

Speaking with the Investigator, I have learned that the victim's name was Brim Naldi, a local nobleman and aspiring merchant. But aside from that and the vibroblade slashes, there aren't a whole lotta clues on the crime scene. There is a Bith P.O.I. however, and the Investigator recommened that I speak with them and try to learn something she couldn't.

**How this stage is set:**
- Dialogue INFO `16929107332880125005` under topic **murder**; speaker Investigator (`SerennoMurderInvestigat`). locations: `Serenno, Wrecked Store`. conditions: Journal `SW_WhoDunnit` Equal 10. response: “Victim is a local male. One Brim Naldi. He was a young aspiring shop owner that got his wish, and a pillar of the noble community. Staunch Republic supporter, too. He was found long dead by this Bith over here. P.O.I. is a Bith Female named Gudi Jin. She claimed to have just walked in on the scene and called us immediately. Her alibi checks out. One final thing to note are the vibroblade cuts on the body, which indicates the murder weapon is a vibroblade.”.

```text
Choice "If her alibi is clear, then why is she still here?" 1 "The murder weapon is a vibroblade?" 2 "Are there any other clues that I should know about? 3
Journal, SW_Whodunnit, 11
```

### Stage 12

I spoke with Gudi Jin, and she told me of three regulars that piqued my interest. Mar Madas. Ropixi. And Vera Tisu. I should gather more info from Gudi Jin and then speak to the Investigator on what to do next.

**How this stage is set:**
- Dialogue INFO `24279164481065027021` under topic **murder**; speaker Gudi Jin (`SerennoMurderWitness`). locations: `Serenno, Wrecked Store`. conditions: Journal `SW_WhoDunnit` Equal 11. response: “I'll tell you what I told her. I was in the neighborhood and I wanted to purchase this flask that Brim Naldi was selling. It was a beautiful, ornate flask that would've made me look like a noblewoman - I live in the Slums, you see... Well, anyways, I walked in and he was already dead. I immediately holophoned the Authorities and here we are. I'm not sure what else I could tell you.”.

```text
Choice "Did Brim Naldi have any regulars?" 1 "Do you know anyone that would've wanted Brim Naldi dead?" 2 "You didn't notice any suspicious characters hanging around, did you?" 3
Journal, SW_WhoDunnit, 12
```

### Stage 13

Ropixi is a Zabrak noblewoman that works at the Carannian Office of Commerce. I can find the building in the Government District.

**How this stage is set:**
- Dialogue INFO `342328692300936698` under topic **Ropixi**; speaker Gudi Jin (`SerennoMurderWitness`). locations: `Serenno, Wrecked Store`. response: “She's a Zabrak noblewoman who works at the Carannian Office of Commerce in the Government District. She's a kind soul, although we don't talk often. I actually never venture to the Government District to begin with, either. But we do talk when we run into each other here. She liked to browse the antiques he often sold.”.

```text
Journal, SW_Whodunnit, 13
```

### Stage 14

Mar Madas is Gudi Jin's Togruta Neighbor. He can be found living in the Slums District, next to Gudi Jin's house.

**How this stage is set:**
- Dialogue INFO `232797941122313836` under topic **Mar Madas**; speaker Gudi Jin (`SerennoMurderWitness`). locations: `Serenno, Wrecked Store`. response: “Mar Madas is my Togruta neighbor, actually. He's a quiet man, keeps to himself, and has never caused anyone any trouble. I think he just has social anxiety, honestly. When he does come out, he either goes to The Tirra'Taka's Den or he visited this shop. We never talked much, but from our few interactions, he was a very friendly man.”.

```text
Journal, SW_Whodunnit, 14
```

### Stage 15

Vera Tisu is a human mercenary who frequents The Tirra'Taka's Den in the Market District. Apparently, he is a foul-mouted person. Typical of a mercenary.

**How this stage is set:**
- Dialogue INFO `29926202542880528021` under topic **Vera Tisu**; speaker Gudi Jin (`SerennoMurderWitness`). locations: `Serenno, Wrecked Store`. response: “A foul-mouthed human mercenary that frequents The Tirra'Taka's Den. I can't tell you much about him since we never spoke with one another, but he often came by not to purchase anything, but to speak with Brim Naldi. I think he knew him personally.”.

```text
Journal, SW_Whodunnit, 15
```

### Stage 16

The Investigator, with the information I gave her, told me that she looked over the crime scene again and found a glove belonging to the GenoHaradan Assassination Guild. She said, if all else fails, show them the glove and see their reaction. I have to remember that Mar Madas lives in the Slums, Vera Tisu is in the Market District, and Ropixi is in the Government District. Once I have my man, I should speak with Captain Dunes about filing an arrest, or risk accusing them directly.

**How this stage is set:**
- Dialogue INFO `8410212872581327824` under topic **accuse**; speaker Mar Madas (`SW_MarMadas`). locations: `Serenno, Mar Madas' Home`. conditions: Function/Choice Equal 17. response: “So it all comes full circle. I thought my alibi was iron-clad, but it seems you're more competent than you look. Seems something'll have to be done about that. Right. Now.”.

```text
Moddisposition, -50
Startcombat player
Journal, SW_Whodunnit, 16
Goodbye
```
- Dialogue INFO `17491177862029130536` under topic **murder**; speaker Investigator (`SerennoMurderInvestigat`). locations: `Serenno, Wrecked Store`. conditions: Function/Choice Equal 4. response: “Oh, and look at this: I found it while you speaking with the Bith. Don't worry, I'll release her soon enough. But this glove belongs to the GenoHaradan Assassin's Guild, which tells us that this was an arranged hit. If interrogation fails, then show them this glove. It may give you a clue as to who it is. Make sure to ask for a motive, their alibi, the glove, and their relation to the victim. You can also accuse them, but it may not end well if you find the right one. Instead, go to Captain Dunes.”.

```text
player->additem "SW_BrownGloveGeno", 1
Journal, SW_Whodunnit, 16
```

### Stage 17

I accused Mar Madas of murdering Brim Naldi and he attacked! I must defend myself!

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 18

After accusing Mar Madas of the crime, he attacked me. Before attacking, he outright admitted to killing him - but with no clear reason as to why. Now that he is dead, I should report back to Captain Dunes.

**How this stage is set:**
- Script `MarMadasScript`. attached to Npc Mar Madas (`SW_MarMadas`); placed in `Serenno, Mar Madas' Home`.

```text
If (OnDeath == 1)
    if (GetJournalIndex, SW_Whodunnit == 16)
        Journal, SW_Whodunnit, 18
    endif
endif
```

### Stage 19

Captain Dunes was disappointed in that it ended in further bloodshed, but was pleased that the murderer was caught at least. I should report back to my commanding officer.

**How this stage is set:**
- Dialogue INFO `3005030534510626443` under topic **Mar Madas**; speaker Captain Dunes Birgid (`SerennoGuardCaptain`). locations: `Serenno, Military Headquarters`. conditions: Journal `SW_WhoDunnit` Equal 18. response: “So Mar Madas was the killer, huh? Shame it had to end in further bloodshed, now he can't face true justice. But it is what it is. Good work. Go back to your commanding officer and report in. You guys are doing good work here, so thank you.”.

```text
Journal, "SW_Whodunnit", 19
```

### Stage 20

Captain Dunes told me he would file an arrest warrant have Mar Madas brought in. I should speak with my commanding officer.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 21

Captain Dunes told me he would file an arrest warrant have Ropixi brought in. I should speak with my commanding officer.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 22

Captain Dunes told me he would file an arrest warrant have Vera Tisu brought in. I should speak with my commanding officer.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 30

Captain Drumgdond was pleased that I solved the crime, and rewarded me appropriately. He then ordered me to take a breather, believing that it must've been tiring to have been running all over the city "chasing ghosts". When I am ready for my next task, I should go and see him.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Related records and locations

**Dialogue speakers:**
- Group Captain Drumgdond (`PathfinderGate4`) — `Serenno, House Comprassi`
- Captain Dunes Birgid (`SerennoGuardCaptain`) — `Serenno, Military Headquarters`
- Investigator (`SerennoMurderInvestigat`) — `Serenno, Wrecked Store`
- Gudi Jin (`SerennoMurderWitness`) — `Serenno, Wrecked Store`
- Mar Madas (`SW_MarMadas`) — `Serenno, Mar Madas' Home`

**Scripts that read or write this journal:**
- `MarMadasScript` — Npc Mar Madas (`SW_MarMadas`); placed in `Serenno, Mar Madas' Home`

**Items referenced by related script/result code:**
- GenoHaradan Right Glove (`SW_BrownGloveGeno`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Serenno, House Comprassi`
- `Serenno, Mar Madas' Home`
- `Serenno, Military Headquarters`
- `Serenno, Wrecked Store`

<details><summary>Journal-state readers (1 code sites)</summary>

- Script `MarMadasScript`. attached to Npc Mar Madas (`SW_MarMadas`); placed in `Serenno, Mar Madas' Home`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: I spoke with Group Captain Drumgdond, and he told me of a murder that occurred in the heart of the Market Dist…
- [ ] Reach index `10`: Speaking with Captain Dunes, there is a crime scene in the Market District. A merchant murdered right in his s…
- [ ] Reach index `11`: Speaking with the Investigator, I have learned that the victim's name was Brim Naldi, a local nobleman and asp…
- [ ] Reach index `12`: I spoke with Gudi Jin, and she told me of three regulars that piqued my interest. Mar Madas. Ropixi. And Vera …
- [ ] Reach index `13`: Ropixi is a Zabrak noblewoman that works at the Carannian Office of Commerce. I can find the building in the G…
- [ ] Reach index `14`: Mar Madas is Gudi Jin's Togruta Neighbor. He can be found living in the Slums District, next to Gudi Jin's hou…
- [ ] Reach index `15`: Vera Tisu is a human mercenary who frequents The Tirra'Taka's Den in the Market District. Apparently, he is a …
- [ ] Reach index `16`: The Investigator, with the information I gave her, told me that she looked over the crime scene again and foun…
- [ ] Reach index `17`: I accused Mar Madas of murdering Brim Naldi and he attacked! I must defend myself!
- [ ] Reach index `18`: After accusing Mar Madas of the crime, he attacked me. Before attacking, he outright admitted to killing him -…
- [ ] Reach index `19`: Captain Dunes was disappointed in that it ended in further bloodshed, but was pleased that the murderer was ca…
- [ ] Reach index `20`: Captain Dunes told me he would file an arrest warrant have Mar Madas brought in. I should speak with my comman…
- [ ] Reach index `21`: Captain Dunes told me he would file an arrest warrant have Ropixi brought in. I should speak with my commandin…
- [ ] Reach index `22`: Captain Dunes told me he would file an arrest warrant have Vera Tisu brought in. I should speak with my comman…
- [ ] Reach index `30`: Captain Drumgdond was pleased that I solved the crime, and rewarded me appropriately. He then ordered me to ta…
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_WhoDunnit`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
