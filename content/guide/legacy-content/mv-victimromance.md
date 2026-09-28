---
title: "The Beauty and the Bandit"
description: "Walkthrough and QA reference for The Beauty and the Bandit (MV_VictimRomance)."
weight: 2
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "MV_VictimRomance"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `MV_VictimRomance` |
| **Category** | Legacy & Additional Content |
| **Journal entries** | 11 |
| **Completion branches** | 4 |
| **Starts by** | Speak with **Maurrie Aurumane** in **Nar Shaddaa, Cantina**. |
| **Key locations** | Nar Shaddaa, Cantina |
| **Key characters** | Maurrie Aurumane |

## Walkthrough

### 1. Speak with Maurrie Aurumane in Nar Shaddaa, Cantina

Speak with **Maurrie Aurumane** in **Nar Shaddaa, Cantina**.

> **Expected journal update — index 10:** I met a beautiful young Breton woman in the Cantina in the Nar Shaddaa Customs Cantina, Maurrie Aurmine, who seemed distressed after being attacked by a gangster.

### 2. Speak with Maurrie Aurumane in Nar Shaddaa, Cantina and ask about bandit nearby

The records expose more than one way to reach this journal update:
- Speak with **Maurrie Aurumane** in **Nar Shaddaa, Cantina** and ask about **bandit nearby**.
- Speak with **Maurrie Aurumane** in **Nar Shaddaa, Cantina** and ask about **gangster nearby**.

> **Expected journal update — index 20:** It seems this young woman is not as distressed as I thought she was...or at least not for the reasons I thought she was. It seems that although this gangster, Nelos Onmar, has stolen her jewels and her gold, he has also stolen her heart. Foolish girl.

### 3. Speak with Maurrie Aurumane in Nar Shaddaa, Cantina and ask about jewels

Speak with **Maurrie Aurumane** in **Nar Shaddaa, Cantina** and ask about **jewels**.

> **Expected journal update — index 30:** Maurrie has asked me to track down this Nelos, and to deliver to him her glove as a token of her affection. It seems a silly task, as she offers no reward, and asks me to do this simply for the sake of love.

### 4. Speak with Maurrie Aurumane in Nar Shaddaa, Cantina and ask about jewels

Speak with **Maurrie Aurumane** in **Nar Shaddaa, Cantina** and ask about **jewels**.

> **Expected journal update — index 40:** I have agreed to try and find the gangster Nelos Onmar, and to deliver the glove of this young Breton woman. She believes he is in the Lower City, so perhaps I can find more out about him there. I fear for her heart, for these outlaws care nothing for others, only for the loot they can obtain.

### 5. Speak with Maurrie Aurumane in Nar Shaddaa, Cantina and ask about jewels — Finished

Speak with **Maurrie Aurumane** in **Nar Shaddaa, Cantina** and ask about **jewels**.

> **Expected journal update — index 50:** I've decided not to attempt to find the gangster Nelos Onmar. I have no time for this silly girl's childish fantasies.

**Outcome:** this journal entry is marked as a finished branch.

### 6. Reach journal stage 60

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 60:** I have located Nelos Onmar, and brought to him Maurrie's glove. He seemed moved by this, and has given me a note to give to her. Perhaps this rogue can be moved by the young woman's heart, but perhaps it is but a game to him. Either way, I have been given his note to deliver to her.

### 7. Speak with Maurrie Aurumane in Nar Shaddaa, Cantina and ask about note from Nelos

Speak with **Maurrie Aurumane** in **Nar Shaddaa, Cantina** and ask about **note from Nelos**.

> **Expected journal update — index 100:** I have brought the note from Nelos Onmar back to Maurrie Aurmine. She seemed overwhelmed by its contents, and is full of gratitude for my having delivered it. In return, she has given me two medkits that she had on her.

### 8. Speak with Maurrie Aurumane in Nar Shaddaa, Cantina and ask about note from Nelos — Finished

Speak with **Maurrie Aurumane** in **Nar Shaddaa, Cantina** and ask about **note from Nelos**.

> **Expected journal update — index 105:** I have brought the note from Nelos Onmar back to Maurrie Aurmine. She seemed overwhelmed by its contents, and is full of gratitude for my having delivered it. In return, she has given me two medkits that she had on her.

**Outcome:** this journal entry is marked as a finished branch.

### 9. Reach journal stage 110 — Finished

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 110:** I have visited Barnand Erelie, at the suggestion of Maurrie Aurmine. Barnand knew how I had helped Maurrie, and was grateful. He gave me some healing potions as a reward.

**Outcome:** this journal entry is marked as a finished branch.

### 10. Reach journal stage 115 — Finished

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 115:** I have visited Emusette Bracques, at the suggestion of Maurrie Aurmine. Emusette knew how I had helped Maurrie, and was grateful. She gave me some healing potions as a reward.

**Outcome:** this journal entry is marked as a finished branch.

{% callout(kind="warning", title="Playtest flag") %}
3 journal stages on this page lack a literal setter in the current static scan.
{% end %}

## Endings & branches

The journal has **4 explicit finished entries**. Treat them as branch coverage targets during playtesting:

- **Index 50:** I've decided not to attempt to find the gangster Nelos Onmar. I have no time for this silly girl's childish fantasies.
- **Index 105:** I have brought the note from Nelos Onmar back to Maurrie Aurmine. She seemed overwhelmed by its contents, and is full of gratitude for my having delivered it. In return, she has given me two medkits that she had on her.
- **Index 110:** I have visited Barnand Erelie, at the suggestion of Maurrie Aurmine. Barnand knew how I had helped Maurrie, and was grateful. He gave me some healing potions as a reward.
- **Index 115:** I have visited Emusette Bracques, at the suggestion of Maurrie Aurmine. Emusette knew how I had helped Maurrie, and was grateful. She gave me some healing potions as a reward.

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Maurrie Aurumane** (`maurrie aurmine`) — `Nar Shaddaa, Cantina`

**Locations implicated by actor/object placement or explicit travel:**
- **Nar Shaddaa, Cantina**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `MV_VictimRomance`
**Generated category:** Legacy & Additional Content
**Journal entries:** 11

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 10 | — | I met a beautiful young Breton woman in the Cantina in the Nar Shaddaa Customs Cantina, Maurrie Aurmine, who seemed distressed after being attacked by a gangster. | 3 |
| 20 | — | It seems this young woman is not as distressed as I thought she was...or at least not for the reasons I thought she was. It seems that although this gangster, Nelos Onmar, has stolen her jewels and her gold, he has also stolen her heart. Foolish girl. | 2 |
| 30 | — | Maurrie has asked me to track down this Nelos, and to deliver to him her glove as a token of her affection. It seems a silly task, as she offers no reward, and asks me to do this simply for the sake of love. | 2 |
| 40 | — | I have agreed to try and find the gangster Nelos Onmar, and to deliver the glove of this young Breton woman. She believes he is in the Lower City, so perhaps I can find more out about him there. I fear for her heart, for these outlaws care nothing for others, only for the loot they can obtain. | 2 |
| 50 | Finished | I've decided not to attempt to find the gangster Nelos Onmar. I have no time for this silly girl's childish fantasies. | 2 |
| 60 | — | I have located Nelos Onmar, and brought to him Maurrie's glove. He seemed moved by this, and has given me a note to give to her. Perhaps this rogue can be moved by the young woman's heart, but perhaps it is but a game to him. Either way, I have been given his note to deliver to her. | 0 |
| 100 | — | I have brought the note from Nelos Onmar back to Maurrie Aurmine. She seemed overwhelmed by its contents, and is full of gratitude for my having delivered it. In return, she has given me two medkits that she had on her. | 1 |
| 105 | Finished | I have brought the note from Nelos Onmar back to Maurrie Aurmine. She seemed overwhelmed by its contents, and is full of gratitude for my having delivered it. In return, she has given me two medkits that she had on her. | 1 |
| 110 | Finished | I have visited Barnand Erelie, at the suggestion of Maurrie Aurmine. Barnand knew how I had helped Maurrie, and was grateful. He gave me some healing potions as a reward. | 0 |
| 115 | Finished | I have visited Emusette Bracques, at the suggestion of Maurrie Aurmine. Emusette knew how I had helped Maurrie, and was grateful. She gave me some healing potions as a reward. | 0 |

### Record-level trigger map

### Stage 10

I met a beautiful young Breton woman in the Cantina in the Nar Shaddaa Customs Cantina, Maurrie Aurmine, who seemed distressed after being attacked by a gangster.

**How this stage is set:**
- Dialogue INFO `103891005352293535` under topic **Greeting 5**; speaker Maurrie Aurumane (`maurrie aurmine`). locations: `Nar Shaddaa, Cantina`. conditions: Dead/DeadType `nelos onmar` Equal 0; Journal `MV_VictimRomance` GreaterEqual 100. response: “If there's anything I can ever do for you, I would be happy to. Soon, I will be with Na-els, and all will be well.”.

```text
Journal "MV_VictimRomance" 10
```
- Dialogue INFO `54488037989317323` under topic **Greeting 5**; speaker Maurrie Aurumane (`maurrie aurmine`). locations: `Nar Shaddaa, Cantina`. conditions: Dead/DeadType `nelos onmar` Equal 0; Journal `MV_VictimRomance` GreaterEqual 10. response: “I must find that gangster! I believe he's in the Lower City. Perhaps he'll come back to find me, though....”.

```text
Journal "MV_VictimRomance" 10
```
- Dialogue INFO `21922250931343914764` under topic **Greeting 5**; speaker Maurrie Aurumane (`maurrie aurmine`). locations: `Nar Shaddaa, Cantina`. conditions: Dead/DeadType `nelos onmar` Equal 0; Journal `MV_VictimRomance` Less 10. response: “Begging your pardon. Have you seen a bandit nearby? I must find him!”.

```text
Journal "MV_VictimRomance" 10
```

### Stage 20

It seems this young woman is not as distressed as I thought she was...or at least not for the reasons I thought she was. It seems that although this gangster, Nelos Onmar, has stolen her jewels and her gold, he has also stolen her heart. Foolish girl.

**How this stage is set:**
- Dialogue INFO `3081131253116599307` under topic **bandit nearby**; speaker Maurrie Aurumane (`maurrie aurmine`). locations: `Nar Shaddaa, Cantina`. response: “Yes, I was just walking along here, minding my own business. Suddenly, a gangster jumped at me from behind. He was a Duros--a strong, dashing Duros. He didn't harm me in any way, although he did take my jewels. He was quite gentle, and he talked to me for what seemed like forever.”.

```text
Journal "MV_VictimRomance" 20
```
- Dialogue INFO `2053157342022427005` under topic **gangster nearby**; speaker Maurrie Aurumane (`maurrie aurmine`). locations: `Nar Shaddaa, Cantina`. response: “Yes, I was just walking along here, minding my own business. Suddenly, a bandit jumped at me from behind. He was a dark elf--a strong, dashing dark elf. He didn't harm me in any way, although he did take my jewels. He was quite gentle, and he talked to me for what seemed like forever.”.

```text
Journal "MV_VictimRomance" 20
```

### Stage 30

Maurrie has asked me to track down this Nelos, and to deliver to him her glove as a token of her affection. It seems a silly task, as she offers no reward, and asks me to do this simply for the sake of love.

**How this stage is set:**
- Dialogue INFO `31393271201148415693` under topic **jewels**; speaker Maurrie Aurumane (`maurrie aurmine`). locations: `Nar Shaddaa, Cantina`. response: “What's that? Oh, never mind the jewels! I just want to find the gangster again. He was charming, and funny, and I simply must see him again. His name? Nelos...Nelos Onmar...a name that will stay on my lips for eternity. Perhaps you can find him for me? Please, I cannot live without knowing if he could ever love me. I have nothing to offer you in return, but could you not help me for the sake of love?”.

```text
Journal "MV_VictimRomance" 30
Choice "I will try and find this man, if only for love's sake." 1 "I have no times for your foolish games, girl." 2
```
- Dialogue INFO `31393271201148415693` under topic **jewels**; speaker Maurrie Aurumane (`maurrie aurmine`). locations: `Nar Shaddaa, Cantina`. response: “What's that? Oh, never mind the jewels! I just want to find the gangster again. He was charming, and funny, and I simply must see him again. His name? Na-els...Na-els Londo...a name that will stay on my lips for eternity. Perhaps you can find him for me? Please, I cannot live without knowing if he could ever love me. I have nothing to offer you in return, but could you not help me for the sake of love?”.

```text
Journal "MV_VictimRomance" 30
AddTopic "Nelos Onmar"
Choice "I will try and find this man, if only for love's sake." 1 "I have no times for your foolish games, girl." 2
```

### Stage 40

I have agreed to try and find the gangster Nelos Onmar, and to deliver the glove of this young Breton woman. She believes he is in the Lower City, so perhaps I can find more out about him there. I fear for her heart, for these outlaws care nothing for others, only for the loot they can obtain.

**How this stage is set:**
- Dialogue INFO `3246023492512728471` under topic **jewels**; speaker Maurrie Aurumane (`maurrie aurmine`). locations: `Nar Shaddaa, Cantina`. conditions: Function/Choice Equal 1. response: “You'll try? Thank you so! I'm sure you'll be able to find him. He mentioned something about having to head to the Lower City, so I imagine he might be found there. Please, if you find him, give him this glove for me, as a token of my love. I'm certain he will want to find me again.”.

```text
Journal "MV_VictimRomance" 40
AddTopic "Maurrie's glove"
RemoveItem "Extravagant_Glove_Left_Maur" 1
```
- Dialogue INFO `3246023492512728471` under topic **jewels**; speaker Maurrie Aurumane (`maurrie aurmine`). locations: `Nar Shaddaa, Cantina`. conditions: Function/Choice Equal 1. response: “You'll try? Thank you so! I'm sure you'll be able to find him. He mentioned something about heading to Eddie's Den. Please, if you find him, give him this glove for me, as a token of my love. I'm certain he will want to find me again.”.

```text
Journal "MV_VictimRomance" 40
AddTopic "Maurrie's glove"
RemoveItem "Extravagant_Glove_Left_Maur" 1
```

### Stage 50 — Finished

I've decided not to attempt to find the gangster Nelos Onmar. I have no time for this silly girl's childish fantasies.

**How this stage is set:**
- Dialogue INFO `5354228191367424396` under topic **jewels**; speaker Maurrie Aurumane (`maurrie aurmine`). locations: `Nar Shaddaa, Cantina`. conditions: Function/Choice Equal 2. response: “Have you no heart? No soul? Can you not see that this must be true love? No matter. Though it may take years, I'm certain we will be reunited one day.”.

```text
Journal "MV_VictimRomance" 50
Goodbye
```
- Dialogue INFO `5354228191367424396` under topic **jewels**; speaker Maurrie Aurumane (`maurrie aurmine`). locations: `Nar Shaddaa, Cantina`. conditions: Function/Choice Equal 2. response: “Have you no heart? No soul? Can you not see that this must be true love? No matter. Though it may take years, I'm certain we will be reunited one day.”.

```text
Journal "MV_VictimRomance" 50
Goodbye
```

### Stage 60

I have located Nelos Onmar, and brought to him Maurrie's glove. He seemed moved by this, and has given me a note to give to her. Perhaps this rogue can be moved by the young woman's heart, but perhaps it is but a game to him. Either way, I have been given his note to deliver to her.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 100

I have brought the note from Nelos Onmar back to Maurrie Aurmine. She seemed overwhelmed by its contents, and is full of gratitude for my having delivered it. In return, she has given me two medkits that she had on her.

**How this stage is set:**
- Dialogue INFO `2829522118217825567` under topic **note from Nelos**; speaker Maurrie Aurumane (`maurrie aurmine`). locations: `Nar Shaddaa, Cantina`. conditions: Journal `MV_VictimRomance` Equal 60; Item/ItemType `bk_notefromnelos` Greater 0; Function/PcSex Equal 1. response: “He gave you a letter to give to me? Wonderful! Thank you so! I knew that he cared. You know, you didn't have to do all of this for me, and I really appreciate it. You're clearly a wonderful person! I do have these medkits on me, why don't you take them.”.

```text
Journal "MV_VictimRomance" 100
AddTopic "Maurrie Aurmine"
AddItem "bk_notefromnelos" 1
```

### Stage 105 — Finished

I have brought the note from Nelos Onmar back to Maurrie Aurmine. She seemed overwhelmed by its contents, and is full of gratitude for my having delivered it. In return, she has given me two medkits that she had on her.

**How this stage is set:**
- Dialogue INFO `1774643442223216683` under topic **note from Nelos**; speaker Maurrie Aurumane (`maurrie aurmine`). locations: `Nar Shaddaa, Cantina`. conditions: Journal `MV_VictimRomance` Equal 60; Item/ItemType `bk_notefromnelos` Greater 0; Function/PcSex Equal 0. response: “He gave you a letter to give to me? Wonderful! Thank you so! I knew that he cared. You know, you didn't have to do all of this for me, and I really appreciate it. You're clearly a wonderful person! I do have these medkits on me, why don't you take them.”.

```text
Journal "MV_VictimRomance" 105
AddTopic "Maurrie Aurmine"
AddItem "bk_notefromnelos" 1
```

### Stage 110 — Finished

I have visited Barnand Erelie, at the suggestion of Maurrie Aurmine. Barnand knew how I had helped Maurrie, and was grateful. He gave me some healing potions as a reward.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 115 — Finished

I have visited Emusette Bracques, at the suggestion of Maurrie Aurmine. Emusette knew how I had helped Maurrie, and was grateful. She gave me some healing potions as a reward.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Related records and locations

**Dialogue speakers:**
- Maurrie Aurumane (`maurrie aurmine`) — `Nar Shaddaa, Cantina`

**Items referenced by related script/result code:**
- bk_notefromnelos
- Black Left Glove (`extravagant_glove_left_maur`)
- Medkit (`SW_Medkit`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Nar Shaddaa, Cantina`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `10` is obtainable.
- [ ] Reach index `10`: I met a beautiful young Breton woman in the Cantina in the Nar Shaddaa Customs Cantina, Maurrie Aurmine, who s…
- [ ] Reach index `20`: It seems this young woman is not as distressed as I thought she was...or at least not for the reasons I though…
- [ ] Reach index `30`: Maurrie has asked me to track down this Nelos, and to deliver to him her glove as a token of her affection. It…
- [ ] Reach index `40`: I have agreed to try and find the gangster Nelos Onmar, and to deliver the glove of this young Breton woman. S…
- [ ] Reach index `50` (`Finished`): I've decided not to attempt to find the gangster Nelos Onmar. I have no time for this silly girl's childish fa…
- [ ] Reach index `60`: I have located Nelos Onmar, and brought to him Maurrie's glove. He seemed moved by this, and has given me a no…
- [ ] Reach index `100`: I have brought the note from Nelos Onmar back to Maurrie Aurmine. She seemed overwhelmed by its contents, and …
- [ ] Reach index `105` (`Finished`): I have brought the note from Nelos Onmar back to Maurrie Aurmine. She seemed overwhelmed by its contents, and …
- [ ] Reach index `110` (`Finished`): I have visited Barnand Erelie, at the suggestion of Maurrie Aurmine. Barnand knew how I had helped Maurrie, an…
- [ ] Reach index `115` (`Finished`): I have visited Emusette Bracques, at the suggestion of Maurrie Aurmine. Emusette knew how I had helped Maurrie…
- [ ] Branch coverage: this journal has **4 different `Finished` entries**; test each reachable completion branch.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `MV_VictimRomance`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
