---
title: "Gungan Geno (internal journal)"
description: "Walkthrough and QA reference for Gungan Geno (internal journal) (SW_GunganGeno)."
weight: 3
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_GunganGeno"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_GunganGeno` |
| **Category** | Systems & Internal Journals |
| **Journal entries** | 4 |
| **Completion branches** | 1 |
| **Starts by** | Record route requires playtest verification. |
| **Key locations** | Nar Shaddaa, Cantina |
| **Key characters** | Dark Jedi |

## Walkthrough

### 1. Reach journal stage 0 — Finished

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 0:** The Death of a Race

**Outcome:** this journal entry is marked as a finished branch.

### 2. Speak with Dark Jedi in Nar Shaddaa, Cantina and ask about Gungans

Speak with **Dark Jedi** in **Nar Shaddaa, Cantina** and ask about **Gungans**.

> **Expected journal update — index 5:** A Tarisian that goes by the name Tel Shadow gave me a quest to eradicate some Gungans he has found in the nearby area, I can find CehKeef in Nar Shaddaa, Eddie's Den, Jeffy in Manaan, Cantina, and Bluttier in Manaan, Bazaar. He wants me to kill them all and then return to him for a reward.

### 3. Reach journal stage 10

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 10:** I have killed all the Gungans and should return to Tel Shadow at the Nar Shaddaa Cantina.

### 4. Speak with Dark Jedi in Nar Shaddaa, Cantina and ask about Gungans

Speak with **Dark Jedi** in **Nar Shaddaa, Cantina** and ask about **Gungans**.

> **Expected journal update — index 15:** Tel Shadow has awarded me with 400 credits for eradicating the Gungans.

**Known item transfer:** 400 × **Credits** (`Gold_001`).

> **Playtest flag:** 2 journal stages on this page lack a literal setter in the current static scan.

## Endings & branches

The journal has one explicit finished state at **index 0**:

> The Death of a Race

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 400 × **Credits** (`Gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Dark Jedi** (`SW_DarkJediEddies2`) — `Nar Shaddaa, Cantina`

**Locations implicated by actor/object placement or explicit travel:**
- **Nar Shaddaa, Cantina**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_GunganGeno`
**Generated category:** Systems & Internal Journals
**Journal entries:** 4

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 0 | Finished | The Death of a Race | 0 |
| 5 | — | A Tarisian that goes by the name Tel Shadow gave me a quest to eradicate some Gungans he has found in the nearby area, I can find CehKeef in Nar Shaddaa, Eddie's Den, Jeffy in Manaan, Cantina, and Bluttier in Manaan, Bazaar. He wants me to kill them all and then return to him for a reward. | 1 |
| 10 | — | I have killed all the Gungans and should return to Tel Shadow at the Nar Shaddaa Cantina. | 0 |
| 15 | — | Tel Shadow has awarded me with 400 credits for eradicating the Gungans. | 2 |

### Record-level trigger map

### Stage 0 — Finished

The Death of a Race

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 5

A Tarisian that goes by the name Tel Shadow gave me a quest to eradicate some Gungans he has found in the nearby area, I can find CehKeef in Nar Shaddaa, Eddie's Den, Jeffy in Manaan, Cantina, and Bluttier in Manaan, Bazaar. He wants me to kill them all and then return to him for a reward.

**How this stage is set:**
- Dialogue INFO `339610161453317803` under topic **Gungans**; speaker Dark Jedi (`SW_DarkJediEddies2`). locations: `Nar Shaddaa, Cantina`. conditions: Journal `SW_GunganGeno` Equal 0. response: “Yes, disgusting, slimy, illiterate abominations. I want them dead, all of them. I've been tracking them.. The Gungans. It's here on my Datapad. There's one named Cehkeef in Eddie's Den here on Nar Shaddaa, one in the Manaan Cantina named Jeffy, and another named Bluttier in the Manaan Bazaar. Kill them, and then return to me, I'll give you a reward if you do this.”.

```text
Journal SW_GunganGeno 5
```

### Stage 10

I have killed all the Gungans and should return to Tel Shadow at the Nar Shaddaa Cantina.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 15

Tel Shadow has awarded me with 400 credits for eradicating the Gungans.

**How this stage is set:**
- Dialogue INFO `127293189543064372` under topic **Gungans**; speaker Dark Jedi (`SW_DarkJediEddies2`). locations: `Nar Shaddaa, Cantina`. conditions: Journal `SW_GunganGeno` Equal 5; Journal `SW_GunganKill1` Equal 5; Journal `SW_GunganKill2` Equal 5; Journal `SW_GunganKill3` Equal 5. response: “They're all dead? All of them? Hahahahaha! You're a good person, here, take these credits. I'll see you around.”.

```text
Journal SW_GunganGeno 15
player->additem, Gold_001, 400
player->ModReputation 1
```
- Dialogue INFO `22105127773224121299` under topic **Gungans**; speaker Dark Jedi (`SW_DarkJediEddies2`). locations: `Nar Shaddaa, Cantina`. conditions: Journal `SW_GunganGeno` Equal 10; Journal `SW_GunganKill1` Equal 5; Journal `SW_GunganKill2` Equal 5; Journal `SW_GunganKill3` Equal 5. response: “They're all dead? All of them? Hahahahaha! You're a good person, here, take these credits. I'll see you around.”.

```text
Journal SW_GunganGeno 15
player->additem, Gold_001, 400
player->ModReputation 1
```

### Related records and locations

**Dialogue speakers:**
- Dark Jedi (`SW_DarkJediEddies2`) — `Nar Shaddaa, Cantina`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Nar Shaddaa, Cantina`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `0` is obtainable.
- [ ] Reach index `0` (`Finished`): The Death of a Race
- [ ] Reach index `5`: A Tarisian that goes by the name Tel Shadow gave me a quest to eradicate some Gungans he has found in the near…
- [ ] Reach index `10`: I have killed all the Gungans and should return to Tel Shadow at the Nar Shaddaa Cantina.
- [ ] Reach index `15`: Tel Shadow has awarded me with 400 credits for eradicating the Gungans.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_GunganGeno`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
