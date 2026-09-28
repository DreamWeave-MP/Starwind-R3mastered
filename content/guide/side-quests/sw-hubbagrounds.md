---
title: "The Hubba Grounds"
description: "Walkthrough and QA reference for The Hubba Grounds (SW_HubbaGrounds)."
weight: 91
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_HubbaGrounds"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_HubbaGrounds` |
| **Category** | Side Quests |
| **Journal entries** | 10 |
| **Completion branches** | 2 |
| **Starts by** | Speak with **Duvont Mallari** in **Tatooine** and ask about **trouble in paradise**. |
| **Key locations** | Tatooine, Tatooine, Sandriver, Tatooine, Sewers, TatooineRace |
| **Key characters** | Duvont Mallari, Thavo Fum |

## Walkthrough

### 1. Speak with Duvont Mallari in Tatooine and ask about trouble in paradise

Speak with **Duvont Mallari** in **Tatooine** and ask about **trouble in paradise**.

> **Expected journal update — index 1:** Duvont Malleri has asked me to help him with a problem Hungox the Hutt is giving him by purposefully importing hubba gourds in attempt to force Duvont in to becoming a moisture farmer.

### 2. Reach journal stage 2

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 2:** Decisions, decisions...

### 3. Allow the scripted event handled by `SW_CamScript` to complete

The records expose more than one way to reach this journal update:
- Allow the scripted event handled by `SW_CamScript` to complete.
- Speak with **Duvont Mallari** in **Tatooine** and ask about **trouble in paradise**.

> **Expected journal update — index 3:** Duvont Malleri wants me to sabatoge Sandriver's water supply by replacing holding pins in a wheel that supposedly is attached to a water tanker in Sandriver just before you get to the arena. I should replace the pins with the Hub-G Injector and not get caught during the process.

### 4. Speak with Duvont Mallari in Tatooine and ask about trouble in paradise

Speak with **Duvont Mallari** in **Tatooine** and ask about **trouble in paradise**.

> **Expected journal update — index 4:** Hungox has a pump station in the sewers underneath Sandriver. Duvont Malleri believes if I can insert the Hub-G Injector into the pump station that it would sabatoge their water supply to the point that he becomes an asset instead of a target.

### 5. Speak with Duvont Mallari in Tatooine and ask about trouble in paradise

Speak with **Duvont Mallari** in **Tatooine** and ask about **trouble in paradise**.

> **Expected journal update — index 5:** I have told Duvont I work for Hungox and that he had better start paying Hungox double in water what he is paying him now. I should return to Hungox and see if I can claim a reward for this.

### 6. Speak with Thavo Fum in Tatooine, Sandriver and ask about trouble in paradise — Finished

Speak with **Thavo Fum** in **Tatooine, Sandriver** and ask about **trouble in paradise**.

> **Expected journal update — index 8:** Hungox the Hutt and his steward were hysterical when I told them what I have done, they gave me a micro-mini moisture vaporizor they say will help me in my travels.

**Known item transfer:** 1 × **Micro-Mini Moisturizer** (`SW_GMask4`).

**Outcome:** this journal entry is marked as a finished branch.

### 7. Interact with Wheel in Tatooine, Sandriver

Interact with **Wheel** in **Tatooine, Sandriver**.

> **Expected journal update — index 10:** The Hub-G Injector has sucessfully been planted. I should return to Duvont to claim my reward.

### 8. Speak with Duvont Mallari in Tatooine and ask about trouble in paradise — Finished

Speak with **Duvont Mallari** in **Tatooine** and ask about **trouble in paradise**.

> **Expected journal update — index 12:** Duvont was so pleased he practically gave me his year's worth of profit, he also gave me the key to what was going to be his new warehouse and said that building is mine, and that if he wanted he would help me in growing hubba gourds there to sell.

**Known item transfer:** 1 × **Hubba Farm Key** (`SW_HubbaKey`).

**Outcome:** this journal entry is marked as a finished branch.

### 9. Reach journal stage 15

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 15:** Decisions, decisions...

> **Playtest flag:** 2 journal stages on this page lack a literal setter in the current static scan.

## Endings & branches

The journal has **2 explicit finished entries**. Treat them as branch coverage targets during playtesting:

- **Index 8:** Hungox the Hutt and his steward were hysterical when I told them what I have done, they gave me a micro-mini moisture vaporizor they say will help me in my travels.
- **Index 12:** Duvont was so pleased he practically gave me his year's worth of profit, he also gave me the key to what was going to be his new warehouse and said that building is mine, and that if he wanted he would help me in growing hubba gourds there to sell.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 1 × **Micro-Mini Moisturizer** (`SW_GMask4`)
- 1 × **Hubba Farm Key** (`SW_HubbaKey`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Duvont Mallari** (`SW_HubbaFarmer`) — `Tatooine`
- **Thavo Fum** (`SW_HungoxSteward`) — `Tatooine, Sandriver`, `TatooineRace`

**Locations implicated by actor/object placement or explicit travel:**
- **Tatooine**
- **Tatooine, Sandriver**
- **Tatooine, Sewers**
- **TatooineRace**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_HubbaGrounds`
**Generated category:** Side Quests
**Journal entries:** 10

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 1 | — | Duvont Malleri has asked me to help him with a problem Hungox the Hutt is giving him by purposefully importing hubba gourds in attempt to force Duvont in to becoming a moisture farmer. | 1 |
| 2 | — | Decisions, decisions... | 0 |
| 3 | — | Duvont Malleri wants me to sabatoge Sandriver's water supply by replacing holding pins in a wheel that supposedly is attached to a water tanker in Sandriver just before you get to the arena. I should replace the pins with the Hub-G Injector and not get caught during the process. | 2 |
| 4 | — | Hungox has a pump station in the sewers underneath Sandriver. Duvont Malleri believes if I can insert the Hub-G Injector into the pump station that it would sabatoge their water supply to the point that he becomes an asset instead of a target. | 1 |
| 5 | — | I have told Duvont I work for Hungox and that he had better start paying Hungox double in water what he is paying him now. I should return to Hungox and see if I can claim a reward for this. | 1 |
| 8 | Finished | Hungox the Hutt and his steward were hysterical when I told them what I have done, they gave me a micro-mini moisture vaporizor they say will help me in my travels. | 1 |
| 10 | — | The Hub-G Injector has sucessfully been planted. I should return to Duvont to claim my reward. | 1 |
| 12 | Finished | Duvont was so pleased he practically gave me his year's worth of profit, he also gave me the key to what was going to be his new warehouse and said that building is mine, and that if he wanted he would help me in growing hubba gourds there to sell. | 1 |
| 15 | — | Decisions, decisions... | 0 |

### Record-level trigger map

### Stage 1

Duvont Malleri has asked me to help him with a problem Hungox the Hutt is giving him by purposefully importing hubba gourds in attempt to force Duvont in to becoming a moisture farmer.

**How this stage is set:**
- Dialogue INFO `1410625223261231719` under topic **trouble in paradise**; speaker Duvont Mallari (`SW_HubbaFarmer`). locations: `Tatooine`. conditions: Journal `SW_HubbaGrounds` Equal 0. response: “I'm having a lot of trouble with Hungox the Hutt trying to steal my water. He keeps importing hubba gourds in to the landing dock in Sandriver to combat my farm, and he's forcing me to sell him my water at a very low cost. I want to do something about this. I have an idea, I have made a new type of low grade poison I call the Hub-G Injector, and I think it could make the perfect counter attack. Tell me, stranger, would you help a farmer out?”.

```text
Journal "SW_HubbaGrounds" 1
Choice "What would you have me do?" 1 "I would love to sabatoge that slime Hungox." 2 "[Bluff] I'm here to collect for Hungox the Hutt, he said you'll be paying double what you did last time." 3
```

### Stage 2

Decisions, decisions...

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 3

Duvont Malleri wants me to sabatoge Sandriver's water supply by replacing holding pins in a wheel that supposedly is attached to a water tanker in Sandriver just before you get to the arena. I should replace the pins with the Hub-G Injector and not get caught during the process.

**How this stage is set:**
- Script `SW_CamScript`.

```text
if ( GetJournalIndex "SW_HubbaGrounds"  = 1 )
                RemoveItem, "SW_CameraItem", 1
                Journal "SW_HubbaGrounds" 3
            Endif
        Endif
```
- Dialogue INFO `142753692252819684` under topic **trouble in paradise**; speaker Duvont Mallari (`SW_HubbaFarmer`). locations: `Tatooine`. conditions: Journal `SW_HubbaGrounds` Equal 1; Function/Choice Equal 1. response: “Well, it is complicated. I made a strand of poison from natural hubba gourds that makes water hard to digest and sour to taste. It's not dangerous, it will just allow me to sell my products at their fair price, if not more. There is a moisture farm inside of Sandriver, just before the arena. It's heavily guarded, but if you can sneak your way to a wheel on the water tanker there and remove the holding pins, and replacing them with this Hub-G Injector then everyone in Sandriver would be forced to come here.”.

```text
moddisposition 10
Journal "SW_HubbaGrounds" 3
Choice "Continue." 1
```

### Stage 4

Hungox has a pump station in the sewers underneath Sandriver. Duvont Malleri believes if I can insert the Hub-G Injector into the pump station that it would sabatoge their water supply to the point that he becomes an asset instead of a target.

**How this stage is set:**
- Dialogue INFO `196962788546275130` under topic **trouble in paradise**; speaker Duvont Mallari (`SW_HubbaFarmer`). locations: `Tatooine`. conditions: Journal `SW_HubbaGrounds` Equal 1; Function/Choice Equal 2. response: “I happen to know the best way to do it, too. The Hutt gets all of his water illegally using a pump station in the sewers that steals water from all the water vaporizors in Sandriver before they can reach the main tank. It doesn't take all of their water but it adds up. If we could get past his goons down there and somehow insert the Hub-G Injector into their pump it would poison the water supply, making it hard to digest as if it was a natural hubba gourd, without tampering with Sandriver's personal supply.”.

```text
moddisposition 10
Journal "SW_HubbaGrounds" 4
Choice "Continue." 1
```

### Stage 5

I have told Duvont I work for Hungox and that he had better start paying Hungox double in water what he is paying him now. I should return to Hungox and see if I can claim a reward for this.

**How this stage is set:**
- Dialogue INFO `11469149261115820214` under topic **trouble in paradise**; speaker Duvont Mallari (`SW_HubbaFarmer`). locations: `Tatooine`. conditions: Journal `SW_HubbaGrounds` Equal 1; Function/Choice Equal 3. response: “I don't have any credits to spare, I haven't been able to sell any hubba gourds. But, I'll bring Hungox some water tomorrow, I swear, just don't kill me.”.

```text
moddisposition -40
Journal "SW_HubbaGrounds" 5
```

### Stage 8 — Finished

Hungox the Hutt and his steward were hysterical when I told them what I have done, they gave me a micro-mini moisture vaporizor they say will help me in my travels.

**How this stage is set:**
- Dialogue INFO `7748133621137315803` under topic **trouble in paradise**; speaker Thavo Fum (`SW_HungoxSteward`). locations: `Tatooine, Sandriver`, `TatooineRace`. conditions: Journal `SW_HubbaGrounds` Equal 5. response: “Hahaha, Hungox the Hutt is very amused. You handled that like a true hutt gangster, you know. Tell you what, why don't you take this little gadget, since you like wandering the desert, it can come in handy when traveling long distances. Nice doing business with you.”.

```text
Journal "SW_HubbaGrounds" 8
moddisposition 5
player->additem "SW_GMask4",1
```

### Stage 10

The Hub-G Injector has sucessfully been planted. I should return to Duvont to claim my reward.

**How this stage is set:**
- Script `SW_HubGInjector`. attached to Container Wheel (`SW_WaterWheel`); placed in `Tatooine, Sandriver`, `Tatooine, Sewers`.

```text
Set DoOnce to 1
            RemoveItem SW_HubG 1
            Journal SW_HubbaGrounds 10
            PlaySound "FabBossWhir"
        Elseif ( GetJournalIndex SW_HubbaGrounds < 10 )
```

### Stage 12 — Finished

Duvont was so pleased he practically gave me his year's worth of profit, he also gave me the key to what was going to be his new warehouse and said that building is mine, and that if he wanted he would help me in growing hubba gourds there to sell.

**How this stage is set:**
- Dialogue INFO `23144071154194133` under topic **trouble in paradise**; speaker Duvont Mallari (`SW_HubbaFarmer`). locations: `Tatooine`. conditions: Journal `SW_HubbaGrounds` Equal 10. response: “I can't believe you actually did it. No one has ever helped me in my entire life. I tell you what, I've been building that warehouse in the back of the hubba farm for quite some time now. I was going to store hubba gourds in there but, take it, it's all yours, here's the key. Check in with me from time to time, maybe I can even lend you a hand in growing some hubba gourds, if you're interested.”.

```text
Journal "SW_HubbaGrounds" 12
player->additem "SW_HubbaKey",1
player->modReputation 1
```

### Stage 15

Decisions, decisions...

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Related records and locations

**Dialogue speakers:**
- Duvont Mallari (`SW_HubbaFarmer`) — `Tatooine`
- Thavo Fum (`SW_HungoxSteward`) — `Tatooine, Sandriver`, `TatooineRace`

**Scripts that read or write this journal:**
- `SW_CamScript`
- `SW_HubGInjector` — Container Wheel (`SW_WaterWheel`); placed in `Tatooine, Sandriver`, `Tatooine, Sewers`

**Items referenced by related script/result code:**
- Camera (`SW_CameraItem`)
- Micro-Mini Moisturizer (`SW_GMask4`)
- Hubba Farm Key (`SW_HubbaKey`)
- Hub-G Injector (`SW_HubG`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Tatooine`
- `Tatooine, Sandriver`
- `Tatooine, Sewers`
- `TatooineRace`

<details><summary>Journal-state readers (2 code sites)</summary>

- Script `SW_CamScript`.
- Script `SW_HubGInjector`. attached to Container Wheel (`SW_WaterWheel`); placed in `Tatooine, Sandriver`, `Tatooine, Sewers`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `1` is obtainable.
- [ ] Reach index `1`: Duvont Malleri has asked me to help him with a problem Hungox the Hutt is giving him by purposefully importing…
- [ ] Reach index `2`: Decisions, decisions...
- [ ] Reach index `3`: Duvont Malleri wants me to sabatoge Sandriver's water supply by replacing holding pins in a wheel that suppose…
- [ ] Reach index `4`: Hungox has a pump station in the sewers underneath Sandriver. Duvont Malleri believes if I can insert the Hub-…
- [ ] Reach index `5`: I have told Duvont I work for Hungox and that he had better start paying Hungox double in water what he is pay…
- [ ] Reach index `8` (`Finished`): Hungox the Hutt and his steward were hysterical when I told them what I have done, they gave me a micro-mini m…
- [ ] Reach index `10`: The Hub-G Injector has sucessfully been planted. I should return to Duvont to claim my reward.
- [ ] Reach index `12` (`Finished`): Duvont was so pleased he practically gave me his year's worth of profit, he also gave me the key to what was g…
- [ ] Reach index `15`: Decisions, decisions...
- [ ] Branch coverage: this journal has **2 different `Finished` entries**; test each reachable completion branch.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_HubbaGrounds`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
