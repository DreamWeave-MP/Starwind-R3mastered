---
title: "Guard Journ (internal journal)"
description: "Walkthrough and QA reference for Guard Journ (internal journal) (Nab_GuardJourn)."
weight: 7
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "Nab_GuardJourn"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `Nab_GuardJourn` |
| **Category** | Naboo |
| **Journal entries** | 6 |
| **Completion branches** | No explicit Finished marker |
| **Starts by** | Record route requires playtest verification. |
| **Key locations** | Naboo, Bingwie Village, Naboo, Spice Mine |
| **Key characters** | Bago, Guardsman |

## Walkthrough

### 1. Reach journal stage 0

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 0:** asdf

### 2. Speak with Guardsman in Naboo, Spice Mine and ask about duties

Speak with **Guardsman** in **Naboo, Spice Mine** and ask about **duties**.

> **Expected journal update — index 5:** The Guardsman on Naboo has tasked me with retreiving a scepter from an ancient species on Naboo that the Gungans plan to use to create some sort of weapon. I should head to the Bamboo Forest and findd the Elder Temple, slay their priest, and return with his scepter to prove the task is complete.

### 3. Speak with Guardsman in Naboo, Spice Mine and ask about duties

Speak with **Guardsman** in **Naboo, Spice Mine** and ask about **duties**.

> **Expected journal update — index 10:** After returning to the Guardsman I was awarded 20 Thrones and asked to retreive 10 Bubble Wort from Hydenock trees. He claims the Gungans have been harvesting it on land to use for their weapon and that we need to stop them at every opportunity.

**Known item transfer:** 20 × **Thrones** (`Nab_Thrones`).

### 4. Speak with Guardsman in Naboo, Spice Mine and ask about duties

Speak with **Guardsman** in **Naboo, Spice Mine** and ask about **duties**.

> **Expected journal update — index 15:** After returning  to the Guardsman and exchanging the Bubble Wort I was awarded with 20 more Thrones and asked to befriend the Bingwie. The Guardsman advised that there is a rare stone that they want from the Bingwies but that they refuse to trade with the settlement. If the Gungans get a hold of this stone they may still be able to complete their weapon.

**Known item transfer:** 20 × **Thrones** (`Nab_Thrones`).

### 5. Speak with Bago in Naboo, Bingwie Village and ask about duties

Speak with **Bago** in **Naboo, Bingwie Village** and ask about **duties**.

> **Expected journal update — index 18:** Bago has given me their precious stone and I should return to the Guardsman at Bate's settlement.

**Known item transfer:** 1 × **Warpstone** (`Nab_Warpstone`).

### 6. Speak with Guardsman in Naboo, Spice Mine and ask about duties

Speak with **Guardsman** in **Naboo, Spice Mine** and ask about **duties**.

> **Expected journal update — index 20:** I have returned the stone to the Guardsman who advised that this should stop the Gungans from building their weapon. He said I should join the Hunters in combatting the Gungan threat, but that I now have access to the Sanctorum and can use the entrance as I please.

**Known item transfer:** 20 × **Thrones** (`Nab_Thrones`).

> **Playtest flag:** 1 journal stage on this page lack a literal setter in the current static scan.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 20 × **Thrones** (`Nab_Thrones`)
- 1 × **Warpstone** (`Nab_Warpstone`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Bago** (`SW_Bago`) — `Naboo, Bingwie Village`
- **Guardsman** (`SW_Nab_HumanPriest`) — `Naboo, Spice Mine`

**Locations implicated by actor/object placement or explicit travel:**
- **Naboo, Bingwie Village**
- **Naboo, Spice Mine**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `Nab_GuardJourn`
**Generated category:** Naboo
**Journal entries:** 6

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 0 | — | asdf | 0 |
| 5 | — | The Guardsman on Naboo has tasked me with retreiving a scepter from an ancient species on Naboo that the Gungans plan to use to create some sort of weapon. I should head to the Bamboo Forest and findd the Elder Temple, slay their priest, and return with his scepter to prove the task is complete. | 1 |
| 10 | — | After returning to the Guardsman I was awarded 20 Thrones and asked to retreive 10 Bubble Wort from Hydenock trees. He claims the Gungans have been harvesting it on land to use for their weapon and that we need to stop them at every opportunity. | 1 |
| 15 | — | After returning  to the Guardsman and exchanging the Bubble Wort I was awarded with 20 more Thrones and asked to befriend the Bingwie. The Guardsman advised that there is a rare stone that they want from the Bingwies but that they refuse to trade with the settlement. If the Gungans get a hold of this stone they may still be able to complete their weapon. | 1 |
| 18 | — | Bago has given me their precious stone and I should return to the Guardsman at Bate's settlement. | 1 |
| 20 | — | I have returned the stone to the Guardsman who advised that this should stop the Gungans from building their weapon. He said I should join the Hunters in combatting the Gungan threat, but that I now have access to the Sanctorum and can use the entrance as I please. | 2 |

### Record-level trigger map

### Stage 0

asdf

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 5

The Guardsman on Naboo has tasked me with retreiving a scepter from an ancient species on Naboo that the Gungans plan to use to create some sort of weapon. I should head to the Bamboo Forest and findd the Elder Temple, slay their priest, and return with his scepter to prove the task is complete.

**How this stage is set:**
- Dialogue INFO `63652615528723096` under topic **duties**; speaker Guardsman (`SW_Nab_HumanPriest`). locations: `Naboo, Spice Mine`. conditions: Journal `Nab_GuardJourn` Equal 0; Global/VariableCompare `JoinHuman` Equal 1. response: “The Gungans are building some sort of super weapon. We're going to stop them. I know they're looking for some kind of scepter in the custody of an ancient species here on Naboo. Find their temple in the Bamboo Forest, kill the priest, bring back the scepter.”.

```text
Journal Nab_GuardJourn 5
```

### Stage 10

After returning to the Guardsman I was awarded 20 Thrones and asked to retreive 10 Bubble Wort from Hydenock trees. He claims the Gungans have been harvesting it on land to use for their weapon and that we need to stop them at every opportunity.

**How this stage is set:**
- Dialogue INFO `414820038132117695` under topic **duties**; speaker Guardsman (`SW_Nab_HumanPriest`). locations: `Naboo, Spice Mine`. conditions: Journal `Nab_GuardJourn` Equal 5; Item/ItemType `Nab_ScepterEld` GreaterEqual 1. response: “A regular soldier, nice work. The Hydenock Trees on this planet are all over, and the Gungans have been surfacing to harvest them. We believe that it's part of their weapon's production. Bring to me 10 Bubble Wort harvested from native Hydenock Trees, return to me with them so we know that we're keeping them out of their hands.”.

```text
Journal Nab_GuardJourn 10
player->additem Nab_Thrones 20
player->removeitem Nab_ScepterEld 1
```

### Stage 15

After returning  to the Guardsman and exchanging the Bubble Wort I was awarded with 20 more Thrones and asked to befriend the Bingwie. The Guardsman advised that there is a rare stone that they want from the Bingwies but that they refuse to trade with the settlement. If the Gungans get a hold of this stone they may still be able to complete their weapon.

**How this stage is set:**
- Dialogue INFO `2691021832122945281` under topic **duties**; speaker Guardsman (`SW_Nab_HumanPriest`). locations: `Naboo, Spice Mine`. conditions: Journal `Nab_GuardJourn` Equal 10; Item/ItemType `Nab_HydenockIng` GreaterEqual 10. response: “We've been all over that forest battling with these Gungans and we found the main part for their weapon. It belongs to a species known as the Bingwies, but they won't trade with us. All attempts to take the the part by force have yielded negative results. Befriend the Bingwies, take this stone from them, and then the usual; bring it back here.”.

```text
Journal Nab_GuardJourn 15
player->removeitem Nab_HydenockIng 10
player->additem Nab_Thrones 20
```

### Stage 18

Bago has given me their precious stone and I should return to the Guardsman at Bate's settlement.

**How this stage is set:**
- Dialogue INFO `3184231017581523080` under topic **duties**; speaker Bago (`SW_Bago`). locations: `Naboo, Bingwie Village`. conditions: Journal `Nab_GuardJourn` Equal 15; Journal `Nab_BingFriend` Equal 10. response: “You are a trusted friend of the Bingwies, take the stone. Guard it well.”.

```text
Journal Nab_GuardJourn 18
player->additem Nab_Warpstone 1
```

### Stage 20

I have returned the stone to the Guardsman who advised that this should stop the Gungans from building their weapon. He said I should join the Hunters in combatting the Gungan threat, but that I now have access to the Sanctorum and can use the entrance as I please.

**How this stage is set:**
- Dialogue INFO `32178152995678675` under topic **duties**; speaker Guardsman (`SW_Nab_HumanPriest`). locations: `Naboo, Spice Mine`. conditions: Journal `Nab_GuardJourn` Equal 15; Item/ItemType `Nab_Warpstone` GreaterEqual 1. response: “You can't even comprehend how much you've just helped this galaxy. We'll keep the stone safe. The door behind me leads to the Sanctorum, you have free access from here on out. Oh, and don't forget about our guys out there, they still need help fighting off those disgusting Gungans.”.

```text
Journal Nab_GuardJourn 20
player->removeitem Nab_Warpstone 1
player->additem Nab_Thrones 20
```
- Dialogue INFO `184732589175869468` under topic **duties**; speaker Guardsman (`SW_Nab_HumanPriest`). locations: `Naboo, Spice Mine`. conditions: Journal `Nab_GuardJourn` Equal 18; Item/ItemType `Nab_Warpstone` GreaterEqual 1. response: “You can't even comprehend how much you've just helped this galaxy. We'll keep the stone safe. The door behind me leads to the Sanctorum, you have free access from here on out. Oh, and don't forget about our guys out there, they still need help fighting off those disgusting Gungans.”.

```text
Journal Nab_GuardJourn 20
player->removeitem Nab_Warpstone 1
player->additem Nab_Thrones 20
```

### Related records and locations

**Dialogue speakers:**
- Bago (`SW_Bago`) — `Naboo, Bingwie Village`
- Guardsman (`SW_Nab_HumanPriest`) — `Naboo, Spice Mine`

**Scripts that read or write this journal:**
- `Nab_SanctEntr` — Door Imperial Door (`Nab_ImDoorSanct`); placed in `Naboo, Spice Mine`

**Items referenced by related script/result code:**
- Bubble Wort (`Nab_HydenockIng`)
- Elder Scepter (`Nab_ScepterEld`)
- Thrones (`Nab_Thrones`)
- Warpstone (`Nab_Warpstone`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Naboo, Bingwie Village`
- `Naboo, Spice Mine`

<details><summary>Journal-state readers (1 code sites)</summary>

- Script `Nab_SanctEntr`. attached to Door Imperial Door (`Nab_ImDoorSanct`); placed in `Naboo, Spice Mine`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `0` is obtainable.
- [ ] Reach index `0`: asdf
- [ ] Reach index `5`: The Guardsman on Naboo has tasked me with retreiving a scepter from an ancient species on Naboo that the Gunga…
- [ ] Reach index `10`: After returning to the Guardsman I was awarded 20 Thrones and asked to retreive 10 Bubble Wort from Hydenock t…
- [ ] Reach index `15`: After returning  to the Guardsman and exchanging the Bubble Wort I was awarded with 20 more Thrones and asked …
- [ ] Reach index `18`: Bago has given me their precious stone and I should return to the Guardsman at Bate's settlement.
- [ ] Reach index `20`: I have returned the stone to the Guardsman who advised that this should stop the Gungans from building their w…
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `Nab_GuardJourn`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
