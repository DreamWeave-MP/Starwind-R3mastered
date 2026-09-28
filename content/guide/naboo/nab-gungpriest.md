---
title: "The Temple of the Eye"
description: "Walkthrough and QA reference for The Temple of the Eye (Nab_GungPriest)."
weight: 11
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "Nab_GungPriest"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `Nab_GungPriest` |
| **Category** | Naboo |
| **Journal entries** | 6 |
| **Completion branches** | No explicit Finished marker |
| **Starts by** | Speak with **Gungan Priest** in **Naboo, Palace** and ask about **duties**. |
| **Key locations** | Naboo, Bingwie Village, Naboo, Palace, Naboo, Temple of the Eye |
| **Key characters** | Bago, Gungan Priest |

## Walkthrough

### 1. Speak with Gungan Priest in Naboo, Palace and ask about duties

Speak with **Gungan Priest** in **Naboo, Palace** and ask about **duties**.

> **Expected journal update — index 5:** The Gungan Priest of Otoh Savgah has tasked me with ridding a heretical species that is actively combatting the Gungan's rituals. I should head to the Bamboo Forest and find the Elder Temple, slay their priest, and return with his scepter to prove the task is complete.

### 2. Speak with Gungan Priest in Naboo, Palace and ask about duties

Speak with **Gungan Priest** in **Naboo, Palace** and ask about **duties**.

> **Expected journal update — index 10:** After returning to the priest of Otoh Savgah I was awarded 10 Chagga Pearls and asked to retreive 10 Bubble Wort from Hydenock trees. He claims the humans are invading Naboo and trying to steal their ancestral resources.

**Known item transfer:** 10 × **Chagga Pearl** (`Nab_ChaggaPearl`).

### 3. Speak with Gungan Priest in Naboo, Palace and ask about duties

Speak with **Gungan Priest** in **Naboo, Palace** and ask about **duties**.

> **Expected journal update — index 15:** After returning to the priest of Otoh Savgah and exchanging the Bubble Wort I was awarded with 10 more Chagga Pearls and asked to befriend the Bingwie. The priest advised that there is a rare stone that they want from the Bingwies but that they refuse to trade with the Gungan city.

**Known item transfer:** 10 × **Chagga Pearl** (`Nab_ChaggaPearl`).

### 4. Speak with Bago in Naboo, Bingwie Village and ask about duties

Speak with **Bago** in **Naboo, Bingwie Village** and ask about **duties**.

> **Expected journal update — index 18:** Bago has given me their precious stone and I should return to the priest of Otoh Savgah.

**Known item transfer:** 1 × **Warpstone** (`Nab_Warpstone`).

### 5. Speak with Gungan Priest in Naboo, Palace and ask about duties

Speak with **Gungan Priest** in **Naboo, Palace** and ask about **duties**.

> **Expected journal update — index 20:** I have returned the stone to the priest of Otoh Savgah who advised that they can now complete their ritual. He said I should join the Hunters in combatting the human invasion, but that I now have access to the Temple of the Eye and can use the portal that was possible due to the ritual.

**Known item transfer:** 10 × **Chagga Pearl** (`Nab_ChaggaPearl`).

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 10 × **Chagga Pearl** (`Nab_ChaggaPearl`)
- 1 × **Warpstone** (`Nab_Warpstone`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Bago** (`SW_Bago`) — `Naboo, Bingwie Village`
- **Gungan Priest** (`SW_Nab_GunganPriest`) — `Naboo, Palace`

**Locations implicated by actor/object placement or explicit travel:**
- **Naboo, Bingwie Village**
- **Naboo, Palace**
- **Naboo, Temple of the Eye**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `Nab_GungPriest`
**Generated category:** Naboo
**Journal entries:** 6

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | The Gungan Priest of Otoh Savgah has tasked me with ridding a heretical species that is actively combatting the Gungan's rituals. I should head to the Bamboo Forest and find the Elder Temple, slay their priest, and return with his scepter to prove the task is complete. | 1 |
| 10 | — | After returning to the priest of Otoh Savgah I was awarded 10 Chagga Pearls and asked to retreive 10 Bubble Wort from Hydenock trees. He claims the humans are invading Naboo and trying to steal their ancestral resources. | 1 |
| 15 | — | After returning to the priest of Otoh Savgah and exchanging the Bubble Wort I was awarded with 10 more Chagga Pearls and asked to befriend the Bingwie. The priest advised that there is a rare stone that they want from the Bingwies but that they refuse to trade with the Gungan city. | 1 |
| 18 | — | Bago has given me their precious stone and I should return to the priest of Otoh Savgah. | 1 |
| 20 | — | I have returned the stone to the priest of Otoh Savgah who advised that they can now complete their ritual. He said I should join the Hunters in combatting the human invasion, but that I now have access to the Temple of the Eye and can use the portal that was possible due to the ritual. | 2 |

### Record-level trigger map

### Stage 5

The Gungan Priest of Otoh Savgah has tasked me with ridding a heretical species that is actively combatting the Gungan's rituals. I should head to the Bamboo Forest and find the Elder Temple, slay their priest, and return with his scepter to prove the task is complete.

**How this stage is set:**
- Dialogue INFO `24971163542643228843` under topic **duties**; speaker Gungan Priest (`SW_Nab_GunganPriest`). locations: `Naboo, Palace`. conditions: Journal `Nab_GungPriest` Equal 0; Global/VariableCompare `JoinGung` Equal 1. response: “Our rituals are being sabotaged by another species native to Naboo. They'sa are an unfriendly race, known only to us as Elders. Find the'sa heretics, slay their priest, and return with his'sa scepter to prove that the task is complete. Their temple can be found within the Bamboo Forest.”.

```text
Journal Nab_GungPriest 5
```

### Stage 10

After returning to the priest of Otoh Savgah I was awarded 10 Chagga Pearls and asked to retreive 10 Bubble Wort from Hydenock trees. He claims the humans are invading Naboo and trying to steal their ancestral resources.

**How this stage is set:**
- Dialogue INFO `14624127124026099` under topic **duties**; speaker Gungan Priest (`SW_Nab_GunganPriest`). locations: `Naboo, Palace`. conditions: Journal `Nab_GungPriest` Equal 5; Item/ItemType `Nab_ScepterEld` GreaterEqual 1. response: “Very good. Another hostile peoples have landed on Naboo. They'sa harvest the sacred Hydenock trees, kill wildlife, and destroy nature. We'sa must keep these resources for ourselves. Bring to me 10 Bubble Wort harvested from native Hydenock Trees, return to meesa with this so that we can keep theesa offworlders from robbing Naboo.”.

```text
Journal Nab_GungPriest 10
player->additem Nab_ChaggaPearl 10
player->removeitem Nab_ScepterEld 1
```

### Stage 15

After returning to the priest of Otoh Savgah and exchanging the Bubble Wort I was awarded with 10 more Chagga Pearls and asked to befriend the Bingwie. The priest advised that there is a rare stone that they want from the Bingwies but that they refuse to trade with the Gungan city.

**How this stage is set:**
- Dialogue INFO `203071028188782843` under topic **duties**; speaker Gungan Priest (`SW_Nab_GunganPriest`). locations: `Naboo, Palace`. conditions: Journal `Nab_GungPriest` Equal 10; Item/ItemType `Nab_HydenockIng` GreaterEqual 10. response: “Very good. You'sa are a very good citizen of Ohto Savgha. Now we'sa need to befriend the Bingwies. The Bingwies are a peaceful species, but they do not want to trade with us'a Gungans. Befriend them, convince them to give you a special stone that they have. Bring this stone to meesa.”.

```text
Journal Nab_GungPriest 15
player->removeitem Nab_HydenockIng 10
player->additem Nab_ChaggaPearl 10
```

### Stage 18

Bago has given me their precious stone and I should return to the priest of Otoh Savgah.

**How this stage is set:**
- Dialogue INFO `1405513467242032705` under topic **duties**; speaker Bago (`SW_Bago`). locations: `Naboo, Bingwie Village`. conditions: Journal `Nab_GungPriest` Equal 15; Journal `Nab_BingFriend` Equal 10. response: “You are a trusted friend of the Bingwies, take the stone. Guard it well.”.

```text
Journal Nab_GungPriest 18
player->additem Nab_Warpstone 1
```

### Stage 20

I have returned the stone to the priest of Otoh Savgah who advised that they can now complete their ritual. He said I should join the Hunters in combatting the human invasion, but that I now have access to the Temple of the Eye and can use the portal that was possible due to the ritual.

**How this stage is set:**
- Dialogue INFO `2443019822624212702` under topic **duties**; speaker Gungan Priest (`SW_Nab_GunganPriest`). locations: `Naboo, Palace`. conditions: Journal `Nab_GungPriest` Equal 15; Item/ItemType `Nab_Warpstone` GreaterEqual 1. response: “After all this time weesa can finally complete our ritual. Thank you for helping Ohto Savgha reach enlightenment. Now that the portal is activated you'sa can now enter our temple here and use its destined service. May knowledge be bountiful ahead. I also urge you to join our Hunters, who are battling the humans as they continue to expand on Naboo.”.

```text
Journal Nab_GungPriest 20
player->removeitem Nab_Warpstone 1
player->additem Nab_ChaggaPearl 10
```
- Dialogue INFO `6610282311117510481` under topic **duties**; speaker Gungan Priest (`SW_Nab_GunganPriest`). locations: `Naboo, Palace`. conditions: Journal `Nab_GungPriest` Equal 18; Item/ItemType `Nab_Warpstone` GreaterEqual 1. response: “After all this time weesa can finally complete our ritual. Thank you for helping Ohto Savgha reach enlightenment. Now that the portal is activated you'sa can now enter our temple here and use its destined service. May knowledge be bountiful ahead. I also urge you to join our Hunters, who are battling the humans as they continue to expand on Naboo.”.

```text
Journal Nab_GungPriest 20
player->removeitem Nab_Warpstone 1
player->additem Nab_ChaggaPearl 10
```

### Related records and locations

**Dialogue speakers:**
- Bago (`SW_Bago`) — `Naboo, Bingwie Village`
- Gungan Priest (`SW_Nab_GunganPriest`) — `Naboo, Palace`

**Scripts that read or write this journal:**
- `Nab_TempleEntr` — Door Entrance (`Nab_G_DoorDown`); placed in `Naboo, Palace`, `Naboo, Temple of the Eye`

**Items referenced by related script/result code:**
- Chagga Pearl (`Nab_ChaggaPearl`)
- Bubble Wort (`Nab_HydenockIng`)
- Elder Scepter (`Nab_ScepterEld`)
- Warpstone (`Nab_Warpstone`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Naboo, Bingwie Village`
- `Naboo, Palace`
- `Naboo, Temple of the Eye`

<details><summary>Journal-state readers (1 code sites)</summary>

- Script `Nab_TempleEntr`. attached to Door Entrance (`Nab_G_DoorDown`); placed in `Naboo, Palace`, `Naboo, Temple of the Eye`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: The Gungan Priest of Otoh Savgah has tasked me with ridding a heretical species that is actively combatting th…
- [ ] Reach index `10`: After returning to the priest of Otoh Savgah I was awarded 10 Chagga Pearls and asked to retreive 10 Bubble Wo…
- [ ] Reach index `15`: After returning to the priest of Otoh Savgah and exchanging the Bubble Wort I was awarded with 10 more Chagga …
- [ ] Reach index `18`: Bago has given me their precious stone and I should return to the priest of Otoh Savgah.
- [ ] Reach index `20`: I have returned the stone to the priest of Otoh Savgah who advised that they can now complete their ritual. He…
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `Nab_GungPriest`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
