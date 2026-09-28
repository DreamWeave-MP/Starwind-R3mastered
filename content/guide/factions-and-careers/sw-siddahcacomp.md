---
title: "Gr'Raan Lozan"
description: "Walkthrough and QA reference for Gr'Raan Lozan (SW_SiddahCaComp)."
weight: 24
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_SiddahCaComp"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_SiddahCaComp` |
| **Category** | Factions & Careers |
| **Journal entries** | 8 |
| **Completion branches** | 3 |
| **Starts by** | Speak with **Gr'Raan Lozan** in **Tatooine**. |
| **Observed prerequisite journals** | `SW_SiddahCa` |
| **Key locations** | Tatooine, Tatooine, Rodian District, Tatooine, Sandriver |
| **Key characters** | Gr'Raan Lozan |

## Walkthrough

### 1. Speak with Gr'Raan Lozan in Tatooine

Speak with **Gr'Raan Lozan** in **Tatooine**.

> **Expected journal update — index 5:** I met a Siddah Ca warrior named Gr'Raan Lozan. He does not respect me, and offers me a challenge to earn his respect.

### 2. Speak with Gr'Raan Lozan in Tatooine and ask about my challenge

Speak with **Gr'Raan Lozan** in **Tatooine** and ask about **my challenge**.

> **Expected journal update — index 10:** To earn Gr'Raan Lozan's respect, I am to slay a Krayt Dragon alongside him. Until that happens, he will not speak further with me about anything regarding the Siddah Ca or Tatooine itself. Should I really be bothered with such a trifle?

### 3. Speak with Gr'Raan Lozan in Tatooine and ask about my challenge

Speak with **Gr'Raan Lozan** in **Tatooine** and ask about **my challenge**.

> **Expected journal update — index 15:** I agreed to his request, and we will set off to find the Krayt Dragon he spoke of. It lies in a cave to the northeast, in an area before Sandriver. Rodian smugglers were spotted near the cave, so we should be careful.

### 4. Defeat Gr'Raan Lozan in Tatooine and allow its script to update the quest — Finished

Defeat **Gr'Raan Lozan** in **Tatooine** and allow its script to update the quest.

> **Expected journal update — index 25:** Gr'Raan Lozan died in my company. Whatever he had to offer or say died with him.

**Outcome:** this journal entry is marked as a finished branch.

### 5. Reach Tatooine and allow the scripted event to complete

Reach **Tatooine** and allow the scripted event to complete.

> **Expected journal update — index 30:** We slew the Krayt Dragon together. I should speak with Gr'Raan Lozan.

### 6. Speak with Gr'Raan Lozan in Tatooine and ask about my challenge — Finished

Speak with **Gr'Raan Lozan** in **Tatooine** and ask about **my challenge**.

> **Expected journal update — index 35:** After slaying the Krayt Dragon, I spoke with Gr'Raan Lozan. Impressed with my skill and prowess, he has offered to join me in my galactic travels and I took him on. I can only hope having a Sand Person accompany me doesn't get me shot by the more civilized people on this planet.

**Outcome:** this journal entry is marked as a finished branch.

### 7. Speak with Gr'Raan Lozan in Tatooine and ask about my challenge — Finished

Speak with **Gr'Raan Lozan** in **Tatooine** and ask about **my challenge**.

> **Expected journal update — index 40:** After slaying the Krayt Dragon, I spoke with Gr'Raan Lozan. Impressed with my skill and prowess, he has offered to join me in my galactic travels but I declined his offer. Having a Sand Person tag along with me sounds like more trouble than it's worth.

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has **3 explicit finished entries**. Treat them as branch coverage targets during playtesting:

- **Index 25:** Gr'Raan Lozan died in my company. Whatever he had to offer or say died with him.
- **Index 35:** After slaying the Krayt Dragon, I spoke with Gr'Raan Lozan. Impressed with my skill and prowess, he has offered to join me in my galactic travels and I took him on. I can only hope having a Sand Person accompany me doesn't get me shot by the more civilized people on this planet.
- **Index 40:** After slaying the Krayt Dragon, I spoke with Gr'Raan Lozan. Impressed with my skill and prowess, he has offered to join me in my galactic travels but I declined his offer. Having a Sand Person tag along with me sounds like more trouble than it's worth.

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Gr'Raan Lozan** (`TatooineSandPersonComp`) — `Tatooine`

**Locations implicated by actor/object placement or explicit travel:**
- **Tatooine**
- **Tatooine, Rodian District**
- **Tatooine, Sandriver**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_SiddahCaComp`
**Generated category:** Factions & Careers
**Journal entries:** 8

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 5 | — | I met a Siddah Ca warrior named Gr'Raan Lozan. He does not respect me, and offers me a challenge to earn his respect. | 1 |
| 10 | — | To earn Gr'Raan Lozan's respect, I am to slay a Krayt Dragon alongside him. Until that happens, he will not speak further with me about anything regarding the Siddah Ca or Tatooine itself. Should I really be bothered with such a trifle? | 1 |
| 15 | — | I agreed to his request, and we will set off to find the Krayt Dragon he spoke of. It lies in a cave to the northeast, in an area before Sandriver. Rodian smugglers were spotted near the cave, so we should be careful. | 1 |
| 25 | Finished | Gr'Raan Lozan died in my company. Whatever he had to offer or say died with him. | 1 |
| 30 | — | We slew the Krayt Dragon together. I should speak with Gr'Raan Lozan. | 1 |
| 35 | Finished | After slaying the Krayt Dragon, I spoke with Gr'Raan Lozan. Impressed with my skill and prowess, he has offered to join me in my galactic travels and I took him on. I can only hope having a Sand Person accompany me doesn't get me shot by the more civilized people on this planet. | 1 |
| 40 | Finished | After slaying the Krayt Dragon, I spoke with Gr'Raan Lozan. Impressed with my skill and prowess, he has offered to join me in my galactic travels but I declined his offer. Having a Sand Person tag along with me sounds like more trouble than it's worth. | 1 |

### Record-level trigger map

### Stage 5

I met a Siddah Ca warrior named Gr'Raan Lozan. He does not respect me, and offers me a challenge to earn his respect.

**How this stage is set:**
- Dialogue INFO `9833302952796130509` under topic **Greeting 5**; speaker Gr'Raan Lozan (`TatooineSandPersonComp`). locations: `Tatooine`. conditions: Journal `SW_SiddahCa` Equal 30; Journal `SW_SiddahCaComp` Equal 0. response: “Herr! Herr herr herr nerr herr!

 (You there! Offworlder! You have done much for the Siddah Ca. You have earned the respect of our chieftain, and our people. But you have not yet earned mine. No, not yet. If you want to earn my respect, you must accept and conquer my challenge.)”.

```text
Journal SW_SiddahCaComp 5
```

### Stage 10

To earn Gr'Raan Lozan's respect, I am to slay a Krayt Dragon alongside him. Until that happens, he will not speak further with me about anything regarding the Siddah Ca or Tatooine itself. Should I really be bothered with such a trifle?

**How this stage is set:**
- Dialogue INFO `19367250872632122610` under topic **my challenge**; speaker Gr'Raan Lozan (`TatooineSandPersonComp`). locations: `Tatooine`. conditions: Journal `SW_SiddahCaComp` GreaterEqual 0; Journal `SW_SiddahCaComp` LessEqual 10. response: “Rug herr herr nerr herr!

 (Yes. My challenge is very simple. You have done it once already for the chieftain, no doubt this will be but a trifle to you. I'll be blunt. If you want my respect and the right to speak to me, you must slay a Krayt Dragon right in front of me. But not just any Krayt Dragon. The one specified by me to slay. Will you accept my challenge?)”.

```text
journal SW_SiddahCaComp 10
Choice "I accept your challenge." 1 "I'm not interested right now." 2
```

### Stage 15

I agreed to his request, and we will set off to find the Krayt Dragon he spoke of. It lies in a cave to the northeast, in an area before Sandriver. Rodian smugglers were spotted near the cave, so we should be careful.

**How this stage is set:**
- Dialogue INFO `5430118171894520362` under topic **my challenge**; speaker Gr'Raan Lozan (`TatooineSandPersonComp`). locations: `Tatooine`. conditions: Function/Choice Equal 1. response: “Herr herr herr herr!

 (Very well, let us depart immediately then. This Krayt Dragon lives in a cave to the northeast, just before the large turret structure near the offworlder settlement of Sandriver. We should be careful, though, as a group of Rodian smugglers were sighted near the cave entrance. We'll need all of our strength to fight the Krayt Dragon. Let's go.)”.

```text
Journal SW_SiddahCaComp 15
SW_KraytDragonQuest->Enable
Moddisposition 5
```

### Stage 25 — Finished

Gr'Raan Lozan died in my company. Whatever he had to offer or say died with him.

**How this stage is set:**
- Script `GrrScript`. attached to Npc Gr'Raan Lozan (`TatooineSandPersonComp`); placed in `Tatooine`.

```text
If (OnDeath = 1)
    if (GetJournalIndex "SW_SiddahCaComp" == 15)
        Journal SW_SiddahCaComp 25
    endif
endif
```

### Stage 30

We slew the Krayt Dragon together. I should speak with Gr'Raan Lozan.

**How this stage is set:**
- Script `KraytDragonQuestScript`. attached to Creature Krayt Dragon (`SW_KraytDragonQuest`); placed in `Tatooine`.

```text
if (OnDeath == 1)
    if (GetJournalIndex "SW_SiddahCaComp" == 15)
        Journal SW_SiddahCaComp 30
        TatooineSandPersonComp->AITravel 0, 0, 0, 0
    endif
```

### Stage 35 — Finished

After slaying the Krayt Dragon, I spoke with Gr'Raan Lozan. Impressed with my skill and prowess, he has offered to join me in my galactic travels and I took him on. I can only hope having a Sand Person accompany me doesn't get me shot by the more civilized people on this planet.

**How this stage is set:**
- Dialogue INFO `3786194062704619501` under topic **my challenge**; speaker Gr'Raan Lozan (`TatooineSandPersonComp`). locations: `Tatooine`. conditions: Function/Choice Equal 5. response: “Rug? Rug! Herr herr nerr herr!

 (Very well. Time to say goodbye to my old life, and welcome the new. I shall follow you to Hell and back. Your enemies are my enemies. Your friends are my friends. Tell me to wait if you need to be alone for a bit, but make sure you always tell me to follow you when you are ready to travel together again. Lead on, friend. Oh, by the way, I can offer a little tip, if you ever need it. Just ask.)”.

```text
Journal SW_SiddahCaComp 35
AiFollow Player 0, 0, 0, 0
Set Companion to 1
```

### Stage 40 — Finished

After slaying the Krayt Dragon, I spoke with Gr'Raan Lozan. Impressed with my skill and prowess, he has offered to join me in my galactic travels but I declined his offer. Having a Sand Person tag along with me sounds like more trouble than it's worth.

**How this stage is set:**
- Dialogue INFO `2585132772736232240` under topic **my challenge**; speaker Gr'Raan Lozan (`TatooineSandPersonComp`). locations: `Tatooine`. conditions: Function/Choice Equal 6. response: “Nerr.... Herr nerr herr herr...

 (Then so be it. There are no obligations, offworlder. Thank you for your consideration anyways. I suppose I should just strike out on my own then. See the world for what it really is. We shall take our leave from one another now, offworlder. We may never meet again, so ask your questions now. Before it is too late.)”.

```text
Moddisposition -100
Journal SW_SiddahCaComp 40
```

### Related records and locations

**Dialogue speakers:**
- Gr'Raan Lozan (`TatooineSandPersonComp`) — `Tatooine`

**Scripts that read or write this journal:**
- `GrrDisablerScript` — Activator TuskenCompanionDumymDisabler (`TuskenCompanionDisabler`); placed in `Tatooine, Rodian District`, `Tatooine, Sandriver`
- `GrrScript` — Npc Gr'Raan Lozan (`TatooineSandPersonComp`); placed in `Tatooine`
- `KraytDragonQuestScript` — Creature Krayt Dragon (`SW_KraytDragonQuest`); placed in `Tatooine`

**Cells implicated by actor/object placement or explicit travel code:**
- `Tatooine`
- `Tatooine, Rodian District`
- `Tatooine, Sandriver`

<details><summary>Journal-state readers (3 code sites)</summary>

- Script `GrrDisablerScript`. attached to Activator TuskenCompanionDumymDisabler (`TuskenCompanionDisabler`); placed in `Tatooine, Rodian District`, `Tatooine, Sandriver`.
- Script `GrrScript`. attached to Npc Gr'Raan Lozan (`TatooineSandPersonComp`); placed in `Tatooine`.
- Script `KraytDragonQuestScript`. attached to Creature Krayt Dragon (`SW_KraytDragonQuest`); placed in `Tatooine`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `5` is obtainable.
- [ ] Reach index `5`: I met a Siddah Ca warrior named Gr'Raan Lozan. He does not respect me, and offers me a challenge to earn his r…
- [ ] Reach index `10`: To earn Gr'Raan Lozan's respect, I am to slay a Krayt Dragon alongside him. Until that happens, he will not sp…
- [ ] Reach index `15`: I agreed to his request, and we will set off to find the Krayt Dragon he spoke of. It lies in a cave to the no…
- [ ] Reach index `25` (`Finished`): Gr'Raan Lozan died in my company. Whatever he had to offer or say died with him.
- [ ] Reach index `30`: We slew the Krayt Dragon together. I should speak with Gr'Raan Lozan.
- [ ] Reach index `35` (`Finished`): After slaying the Krayt Dragon, I spoke with Gr'Raan Lozan. Impressed with my skill and prowess, he has offere…
- [ ] Reach index `40` (`Finished`): After slaying the Krayt Dragon, I spoke with Gr'Raan Lozan. Impressed with my skill and prowess, he has offere…
- [ ] Branch coverage: this journal has **3 different `Finished` entries**; test each reachable completion branch.
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_SiddahCaComp`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
