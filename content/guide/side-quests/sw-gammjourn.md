---
title: "Clan War"
description: "Walkthrough and QA reference for Clan War (SW_GammJourn)."
weight: 27
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_GammJourn"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_GammJourn` |
| **Category** | Side Quests |
| **Journal entries** | 4 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Ucksmug Chief** in **Gamorr, Ucksmug**. |
| **Key locations** | Gamorr, Redhair Lair, Gamorr, Ucksmug |
| **Key characters** | Ucksmug Chief |

## Walkthrough

### 1. Speak with Ucksmug Chief in Gamorr, Ucksmug

Speak with **Ucksmug Chief** in **Gamorr, Ucksmug**.

> **Expected journal update — index 5:** The chief of the Ugsmuck Clan wants me to take care of the Redhair Clan before his town will trade with me, I can find them in a cave system underneath the Oasis.

### 2. Defeat Redhair Chief in Gamorr, Redhair Lair and allow its script to update the quest

Defeat **Redhair Chief** in **Gamorr, Redhair Lair** and allow its script to update the quest.

> **Expected journal update — index 10:** The Redhair Chief is dead, I should return to Ugsmuck with the news.

### 3. Speak with Ucksmug Chief in Gamorr, Ucksmug — Finished

Speak with **Ucksmug Chief** in **Gamorr, Ucksmug**.

> **Expected journal update — index 15:** I am now a fully fledged member of the Ugsmuck Clan, and have access to all of their trade, I have also been given a home directly across from the cantina.

**Known item transfer:** 1 × **Gammorean Hut Key** (`SW_key_GammHouse`).

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 15**:

> I am now a fully fledged member of the Ugsmuck Clan, and have access to all of their trade, I have also been given a home directly across from the cantina.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 1 × **Gammorean Hut Key** (`SW_key_GammHouse`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Ucksmug Chief** (`SW_GamorrChief`) — `Gamorr, Ucksmug`

**Locations implicated by actor/object placement or explicit travel:**
- **Gamorr, Redhair Lair**
- **Gamorr, Ucksmug**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_GammJourn`
**Generated category:** Side Quests
**Journal entries:** 4

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | The chief of the Ugsmuck Clan wants me to take care of the Redhair Clan before his town will trade with me, I can find them in a cave system underneath the Oasis. | 1 |
| 10 | — | The Redhair Chief is dead, I should return to Ugsmuck with the news. | 1 |
| 15 | Finished | I am now a fully fledged member of the Ugsmuck Clan, and have access to all of their trade, I have also been given a home directly across from the cantina. | 1 |

### Record-level trigger map

### Stage 5

The chief of the Ugsmuck Clan wants me to take care of the Redhair Clan before his town will trade with me, I can find them in a cave system underneath the Oasis.

**How this stage is set:**
- Dialogue INFO `26318299881364527327` under topic **Greeting 7**; speaker Ucksmug Chief (`SW_GamorrChief`). locations: `Gamorr, Ucksmug`. conditions: Journal `SW_GammJourn` Equal 0. response: “You come to Ugsmuck and expect our clan to help you with what, food, blaster bolts, equipment? You must help Ugsmuck Clan first. Redhair raiders from the Redhair Clan have been raiding Ugsmuck scraphouse, hunter parties, and gatherer parties. They have dug a tunnel underneath the sand to sneak to us, and we believe we found it underneath the Oasis. Find them, kill their chief, and you may be welcomed into the Ugsmuck Clan.”.

```text
PlaySound3D "SW_Gamm03"
Journal SW_GammJourn 5
SW_GamChiefDoor->Unlock
```

### Stage 10

The Redhair Chief is dead, I should return to Ugsmuck with the news.

**How this stage is set:**
- Script `SW_RedDead`. attached to Npc Redhair Chief (`SW_GamorrRedChief`); placed in `Gamorr, Redhair Lair`.

```text
If ( OnDeath == 1 )
    Journal, "SW_GammJourn", 10
Endif
```

### Stage 15 — Finished

I am now a fully fledged member of the Ugsmuck Clan, and have access to all of their trade, I have also been given a home directly across from the cantina.

**How this stage is set:**
- Dialogue INFO `164359623168914469` under topic **Greeting 7**; speaker Ucksmug Chief (`SW_GamorrChief`). locations: `Gamorr, Ucksmug`. conditions: Journal `SW_GammJourn` Equal 10. response: “You killed the Redhair Chief? You are an honorable warrior, welcome, offworlder, you are now a member of the Ugsmuck Clan. Feel free to talk to our people, trade with our tradesman, and live among us. I give you a key to the hut across from the cantina, it belongs to you now.”.

```text
PlaySound3D "SW_Gamm03"
Journal SW_GammJourn 15
player->additem, SW_key_GammHouse, 1
PCJoinFaction "FacUcksmug"
```

### Related records and locations

**Dialogue speakers:**
- Ucksmug Chief (`SW_GamorrChief`) — `Gamorr, Ucksmug`

**Scripts that read or write this journal:**
- `SW_RedDead` — Npc Redhair Chief (`SW_GamorrRedChief`); placed in `Gamorr, Redhair Lair`

**Items referenced by related script/result code:**
- Gammorean Hut Key (`SW_key_GammHouse`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Gamorr, Redhair Lair`
- `Gamorr, Ucksmug`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: The chief of the Ugsmuck Clan wants me to take care of the Redhair Clan before his town will trade with me, I …
- [ ] Reach index `10`: The Redhair Chief is dead, I should return to Ugsmuck with the news.
- [ ] Reach index `15` (`Finished`): I am now a fully fledged member of the Ugsmuck Clan, and have access to all of their trade, I have also been g…
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_GammJourn`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
