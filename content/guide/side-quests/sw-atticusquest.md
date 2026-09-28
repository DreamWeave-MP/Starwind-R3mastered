---
title: "The Bravado-Ridden Wookie"
description: "Walkthrough and QA reference for The Bravado-Ridden Wookie (SW_AtticusQuest)."
weight: 81
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_AtticusQuest"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_AtticusQuest` |
| **Category** | Side Quests |
| **Journal entries** | 9 |
| **Completion branches** | 4 |
| **Starts by** | Speak with **Atticus** in **Tatooine, Dune Sea**. |
| **Key locations** | Tatooine, Tatooine, Dune Sea, Tatooine, Sandriver |
| **Key characters** | Atticus, Rolf Dirulion |

## Walkthrough

### 1. Speak with Atticus in Tatooine, Dune Sea

Speak with **Atticus** in **Tatooine, Dune Sea**.

> **Expected journal update — index 5:** I found a Wookie in the deeper dune sea on Tatooine, surrounded by Sand People corpses. He doesn't seem interested in me, however. He seems to be waiting on something. What happened here?

### 2. Speak with Rolf Dirulion in Tatooine

Speak with **Rolf Dirulion** in **Tatooine**.

> **Expected journal update — index 10:** I met a man in a camp on Tatooine named Rolf. He claims he and his Wookie friend were ambushed by a group of Sand People and they fended them off. This is backed up by the nearby Tusken corpses. He said his friend ran into the dune sea to get revenge on the Sand People, and Rolf is worried. He doesn't want to in alone, but he won't leave his friend behind. Should I help them?

### 3. Speak with Rolf Dirulion in Tatooine and ask about bit of a pickle — Finished

Speak with **Rolf Dirulion** in **Tatooine** and ask about **bit of a pickle**.

> **Expected journal update — index 15:** I decided not to get involved. This sounds dangerous, and I'd likely lose my life if I assisted him. I'm sure the Wookie will be fine. Wookies are tough people, able to rip men apart with ease. The Wookie will no doubt be fine on his own.

**Outcome:** this journal entry is marked as a finished branch.

### 4. Speak with Rolf Dirulion in Tatooine and ask about bit of a pickle

Speak with **Rolf Dirulion** in **Tatooine** and ask about **bit of a pickle**.

> **Expected journal update — index 20:** I decided to offer my aid to Rolf and we're going to set off into the cave to find his Wookie friend, Atticus. I pray that we make it out alive.

### 5. Find Rolf Dirulion in Tatooine and complete the encounter — Finished

Find **Rolf Dirulion** in **Tatooine** and complete the encounter.

> **Expected journal update — index 25:** Rolf died in my company.

**Outcome:** this journal entry is marked as a finished branch.

### 6. Find Atticus in Tatooine, Dune Sea and complete the encounter — Finished

Find **Atticus** in **Tatooine, Dune Sea** and complete the encounter.

> **Expected journal update — index 30:** Atticus died in my company.

**Outcome:** this journal entry is marked as a finished branch.

### 7. Speak with Atticus in Tatooine, Dune Sea and ask about Rolf

Speak with **Atticus** in **Tatooine, Dune Sea** and ask about **Rolf**.

> **Expected journal update — index 35:** We found Atticus. He was surrounded by many, many, many Sand People corpes and didn't look to be wounded at all. With the area likely clear of Sand People now, we should be able to make a safe exit.

### 8. Speak with Rolf Dirulion in Tatooine and ask about bit of a pickle — Finished

Speak with **Rolf Dirulion** in **Tatooine** and ask about **bit of a pickle**.

> **Expected journal update — index 40:** Rolf and Atticus have been safely escorted out of the area and Rolf, grateful for my assistance, rewarded me appropriately. Next time, I should bring more help into such a situation, lest both of us lose our lives to the locals.

**Known item transfer:** 200 × **Credits** (`Gold_001`).

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has **4 explicit finished entries**. Treat them as branch coverage targets during playtesting:

- **Index 15:** I decided not to get involved. This sounds dangerous, and I'd likely lose my life if I assisted him. I'm sure the Wookie will be fine. Wookies are tough people, able to rip men apart with ease. The Wookie will no doubt be fine on his own.
- **Index 25:** Rolf died in my company.
- **Index 30:** Atticus died in my company.
- **Index 40:** Rolf and Atticus have been safely escorted out of the area and Rolf, grateful for my assistance, rewarded me appropriately. Next time, I should bring more help into such a situation, lest both of us lose our lives to the locals.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 200 × **Credits** (`Gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Atticus** (`TatooineAtticus`) — `Tatooine, Dune Sea`
- **Rolf Dirulion** (`TatooineZabrak`) — `Tatooine`

**Locations implicated by actor/object placement or explicit travel:**
- **Tatooine**
- **Tatooine, Dune Sea**
- **Tatooine, Sandriver**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_AtticusQuest`
**Generated category:** Side Quests
**Journal entries:** 9

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | I found a Wookie in the deeper dune sea on Tatooine, surrounded by Sand People corpses. He doesn't seem interested in me, however. He seems to be waiting on something. What happened here? | 2 |
| 10 | — | I met a man in a camp on Tatooine named Rolf. He claims he and his Wookie friend were ambushed by a group of Sand People and they fended them off. This is backed up by the nearby Tusken corpses. He said his friend ran into the dune sea to get revenge on the Sand People, and Rolf is worried. He doesn't want to in alone, but he won't leave his friend behind. Should I help them? | 1 |
| 15 | Finished | I decided not to get involved. This sounds dangerous, and I'd likely lose my life if I assisted him. I'm sure the Wookie will be fine. Wookies are tough people, able to rip men apart with ease. The Wookie will no doubt be fine on his own. | 1 |
| 20 | — | I decided to offer my aid to Rolf and we're going to set off into the cave to find his Wookie friend, Atticus. I pray that we make it out alive. | 1 |
| 25 | Finished | Rolf died in my company. | 1 |
| 30 | Finished | Atticus died in my company. | 1 |
| 35 | — | We found Atticus. He was surrounded by many, many, many Sand People corpes and didn't look to be wounded at all. With the area likely clear of Sand People now, we should be able to make a safe exit. | 1 |
| 40 | Finished | Rolf and Atticus have been safely escorted out of the area and Rolf, grateful for my assistance, rewarded me appropriately. Next time, I should bring more help into such a situation, lest both of us lose our lives to the locals. | 1 |

### Record-level trigger map

### Stage 5

I found a Wookie in the deeper dune sea on Tatooine, surrounded by Sand People corpses. He doesn't seem interested in me, however. He seems to be waiting on something. What happened here?

**How this stage is set:**
- Dialogue INFO `15363277173049822559` under topic **Greeting 5**; speaker Atticus (`TatooineAtticus`). locations: `Tatooine, Dune Sea`. cell constraint `Tatooine, Dune Sea`. conditions: Journal `SW_AtticusQuest` GreaterEqual 0; Journal `SW_AtticusQuest` LessEqual 10. response: “Raaaaaah-Rggggg. Rrrrrrraaaahhh, raaaaaaahhh.

 (Who are you? Don't bother me, I'm waiting for someone. Go away now. It's dangerous here.)”.

```text
Journal, "SW_AtticusQuest", 5
Goodbye
StopSound "SW_AtticusRolf"
```
- Dialogue INFO `8203170371986515172` under topic **Greeting 5**; speaker Atticus (`TatooineAtticus`). locations: `Tatooine, Dune Sea`. conditions: Journal `SW_AtticusQuest` GreaterEqual 0; Journal `SW_AtticusQuest` LessEqual 10. response: “Raaaaaah-Rggggg. Rrrrrrraaaahhh, raaaaaaahhh.

 (Who are you? Don't bother me, I'm waiting for someone. Go away now. It's dangerous here.)”.

```text
Journal, "SW_AtticusQuest", 5
Goodbye
StopSound "SW_AtticusRolf"
```

### Stage 10

I met a man in a camp on Tatooine named Rolf. He claims he and his Wookie friend were ambushed by a group of Sand People and they fended them off. This is backed up by the nearby Tusken corpses. He said his friend ran into the dune sea to get revenge on the Sand People, and Rolf is worried. He doesn't want to in alone, but he won't leave his friend behind. Should I help them?

**How this stage is set:**
- Dialogue INFO `65033033786420981` under topic **Greeting 5**; speaker Rolf Dirulion (`TatooineZabrak`). locations: `Tatooine`. conditions: Journal `SW_AtticusQuest` GreaterEqual 0; Journal `SW_AtticusQuest` LessEqual 5. response: “Oh my! A friendly face! How quaint. Good to meet you, friend. I'm in a bit of a pickle right now so please excuse me. I wouldn't go in that sea right now though, Sand People are all inside there right now. They attacked us not too long ago, and my Wookie friend ran inside without me to kill them.”.

```text
Journal, "SW_AtticusQuest", 10
Playsound3D "SW_RolfGreet1"
Stopsound "SW_RolfGreet2"
```

### Stage 15 — Finished

I decided not to get involved. This sounds dangerous, and I'd likely lose my life if I assisted him. I'm sure the Wookie will be fine. Wookies are tough people, able to rip men apart with ease. The Wookie will no doubt be fine on his own.

**How this stage is set:**
- Dialogue INFO `168807106137902998` under topic **bit of a pickle**; speaker Rolf Dirulion (`TatooineZabrak`). locations: `Tatooine`. conditions: Function/Choice Equal 3. response: “Yeah, I s'pose he will.... He's a very tough Wookie. I'm sure he'll be fine... I'll just have to wait for him.... You should head back to Sandriver. It's dangerous out here.”.

```text
Journal, "SW_AtticusQuest", 15
Goodbye
Stopsound "SW_RolfGreet1"
```

### Stage 20

I decided to offer my aid to Rolf and we're going to set off into the cave to find his Wookie friend, Atticus. I pray that we make it out alive.

**How this stage is set:**
- Dialogue INFO `29935421384930983` under topic **bit of a pickle**; speaker Rolf Dirulion (`TatooineZabrak`). locations: `Tatooine`. conditions: Function/Choice Equal 2. response: “Yo-You will? You're gonna go get Atticus? By yourself?! No.... No I'm not sending you into danger alone, friend. I'll have your back. If you're serious about this, we should head in immediately. No detours or delays. Let's go. I'm sure he'll be fine by himself, but I can't help but worry.... We should find him before it's too late.”.

```text
Moddisposition, 10
AIFollow, Player, 0, 0, 0, 0
Journal, "SW_AtticusQuest", 20
Stopsound "SW_RolfGreet1"
Stopsound "SW_RolfGreet2"
```

### Stage 25 — Finished

Rolf died in my company.

**How this stage is set:**
- Script `RolfScript`. attached to Npc Rolf Dirulion (`TatooineZabrak`); placed in `Tatooine`.

```text
If ( getJournalIndex "SW_AtticusQuest" >= 20 )
            If ( getJournalIndex "SW_AtticusQuest" <= 35 )
                Journal, "SW_AtticusQuest", 25
                TatooineAtticus->AITravel, 0, 0, 0, 0
            endif
```

### Stage 30 — Finished

Atticus died in my company.

**How this stage is set:**
- Script `AtticusScript`. attached to Npc Atticus (`TatooineAtticus`); placed in `Tatooine, Dune Sea`.

```text
If ( getJournalIndex "SW_AtticusQuest" >= 20 )
            If ( getJournalIndex "SW_AtticusQuest" <= 35 )
                Journal, "SW_AtticusQuest", 30
                TatooineZabrak->AITravel, 0, 0, 0, 0
            endif
```

### Stage 35

We found Atticus. He was surrounded by many, many, many Sand People corpes and didn't look to be wounded at all. With the area likely clear of Sand People now, we should be able to make a safe exit.

**How this stage is set:**
- Dialogue INFO `1427482442859524318` under topic **Rolf**; speaker Atticus (`TatooineAtticus`). locations: `Tatooine, Dune Sea`. conditions: Journal `SW_AtticusQuest` Equal 20. response: “Reeeeaaaaarrrh!

 (I see Rolf couldn't stop worrying about me... Well. Whatever. Let's go. I killed most of the bastards anyways. Let's get out of here.)”.

```text
AiFollow, Player, 0, 0, 0, 0
Journal, "SW_AtticusQuest", 35
Goodbye
PlaySound3D "SW_AtticusRolf"
```

### Stage 40 — Finished

Rolf and Atticus have been safely escorted out of the area and Rolf, grateful for my assistance, rewarded me appropriately. Next time, I should bring more help into such a situation, lest both of us lose our lives to the locals.

**How this stage is set:**
- Dialogue INFO `6522104222564228653` under topic **bit of a pickle**; speaker Rolf Dirulion (`TatooineZabrak`). locations: `Tatooine`. cell constraint `Tatooine`. conditions: Journal `SW_AtticusQuest` Equal 35. response: “Thank you, friend. I suppose I was foolish to worry so much about Atticus... But he's my only friend. I couldn't bear to lose him. Sometimes I forget how much he takes me for granted, though... Well, anyways, I suppose I owe you something. Here. All the credits I have. Plus, I'll be sure to tell the Hunter's Federation how reliable you are. Thank you so much.”.

```text
player->modreputation 2
Player->additem "Gold_001", 200
Journal, "SW_AtticusQuest", 40
Moddisposition 30
TatooineAtticus->AIWander, 400, 0, 0, 0
```

### Related records and locations

**Dialogue speakers:**
- Atticus (`TatooineAtticus`) — `Tatooine, Dune Sea`
- Rolf Dirulion (`TatooineZabrak`) — `Tatooine`

**Scripts that read or write this journal:**
- `AtticusRolfRelocateScript` — Activator Sandriver (`AtticusScriptHolder`); placed in `Tatooine, Sandriver`
- `AtticusScript` — Npc Atticus (`TatooineAtticus`); placed in `Tatooine, Dune Sea`
- `RolfScript` — Npc Rolf Dirulion (`TatooineZabrak`); placed in `Tatooine`
- `SW_AtticusInCamp`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Tatooine`
- `Tatooine, Dune Sea`
- `Tatooine, Sandriver`

<details><summary>Other directly addressed object IDs in related code</summary>

- Atticus (`TatooineAtticus`)
- Rolf Dirulion (`TatooineZabrak`)

</details>

<details><summary>Journal-state readers (3 code sites)</summary>

- Script `AtticusRolfRelocateScript`. attached to Activator Sandriver (`AtticusScriptHolder`); placed in `Tatooine, Sandriver`.
- Script `AtticusScript`. attached to Npc Atticus (`TatooineAtticus`); placed in `Tatooine, Dune Sea`.
- Script `RolfScript`. attached to Npc Rolf Dirulion (`TatooineZabrak`); placed in `Tatooine`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: I found a Wookie in the deeper dune sea on Tatooine, surrounded by Sand People corpses. He doesn't seem intere…
- [ ] Reach index `10`: I met a man in a camp on Tatooine named Rolf. He claims he and his Wookie friend were ambushed by a group of S…
- [ ] Reach index `15` (`Finished`): I decided not to get involved. This sounds dangerous, and I'd likely lose my life if I assisted him. I'm sure …
- [ ] Reach index `20`: I decided to offer my aid to Rolf and we're going to set off into the cave to find his Wookie friend, Atticus.…
- [ ] Reach index `25` (`Finished`): Rolf died in my company.
- [ ] Reach index `30` (`Finished`): Atticus died in my company.
- [ ] Reach index `35`: We found Atticus. He was surrounded by many, many, many Sand People corpes and didn't look to be wounded at al…
- [ ] Reach index `40` (`Finished`): Rolf and Atticus have been safely escorted out of the area and Rolf, grateful for my assistance, rewarded me a…
- [ ] Branch coverage: this journal has **4 different `Finished` entries**; test each reachable completion branch.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_AtticusQuest`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
