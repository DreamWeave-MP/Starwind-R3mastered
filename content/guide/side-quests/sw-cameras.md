---
title: "Czerka Experiments"
description: "Walkthrough and QA reference for Czerka Experiments (SW_Cameras)."
weight: 29
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_Cameras"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_Cameras` |
| **Category** | Side Quests |
| **Journal entries** | 4 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Doctor Yee'mar** in **Kashyyk, Boyle Research Facility** and ask about **cameras**. |
| **Key locations** | Kashyyk, Boyle Research Facility |
| **Key characters** | Doctor Yee'mar |

## Walkthrough

### 1. Speak with Doctor Yee'mar in Kashyyk, Boyle Research Facility and ask about cameras

Speak with **Doctor Yee'mar** in **Kashyyk, Boyle Research Facility** and ask about **cameras**.

> **Expected journal update — index 1:** I have spoken to a Duros doctor in Boyle who moved here to do research on the wildlife and local Wookies. He claims that the Czerka Corporation is hunting, enslaving, and even worse, experimenting on the local Wookies, and wants evidence. He has asked me to insert 2 cameras into the bloodspore next to the Czerka Lab and activate them so that he can spy on them.

**Known item transfer:** 2 × **Camera** (`SW_CameraItem`).

### 2. Interact with Bloodspore in Kashyyk, Boyle Research Facility

Interact with **Bloodspore** in **Kashyyk, Boyle Research Facility**.

> **Expected journal update — index 3:** I inserted all the cameras, I should report back to Doctor Yee'mar,

### 3. Speak with Doctor Yee'mar in Kashyyk, Boyle Research Facility and ask about cameras — Finished

Speak with **Doctor Yee'mar** in **Kashyyk, Boyle Research Facility** and ask about **cameras**.

> **Expected journal update — index 5:** I reported back to Doctor Yee'mar, he swears he will catch them doing something they are not supposed to do. I'm not sure what that's going to do for him, beings that they are the local authorities.

**Known item transfer:** 400 × **Credits** (`gold_001`).

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 5**:

> I reported back to Doctor Yee'mar, he swears he will catch them doing something they are not supposed to do. I'm not sure what that's going to do for him, beings that they are the local authorities.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 2 × **Camera** (`SW_CameraItem`)
- 400 × **Credits** (`gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Doctor Yee'mar** (`SW_DrKash`) — `Kashyyk, Boyle Research Facility`

**Locations implicated by actor/object placement or explicit travel:**
- **Kashyyk, Boyle Research Facility**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_Cameras`
**Generated category:** Side Quests
**Journal entries:** 4

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 1 | — | I have spoken to a Duros doctor in Boyle who moved here to do research on the wildlife and local Wookies. He claims that the Czerka Corporation is hunting, enslaving, and even worse, experimenting on the local Wookies, and wants evidence. He has asked me to insert 2 cameras into the bloodspore next to the Czerka Lab and activate them so that he can spy on them. | 1 |
| 3 | — | I inserted all the cameras, I should report back to Doctor Yee'mar, | 1 |
| 5 | Finished | I reported back to Doctor Yee'mar, he swears he will catch them doing something they are not supposed to do. I'm not sure what that's going to do for him, beings that they are the local authorities. | 1 |

### Record-level trigger map

### Stage 1

I have spoken to a Duros doctor in Boyle who moved here to do research on the wildlife and local Wookies. He claims that the Czerka Corporation is hunting, enslaving, and even worse, experimenting on the local Wookies, and wants evidence. He has asked me to insert 2 cameras into the bloodspore next to the Czerka Lab and activate them so that he can spy on them.

**How this stage is set:**
- Dialogue INFO `85442340895327699` under topic **cameras**; speaker Doctor Yee'mar (`SW_DrKash`). locations: `Kashyyk, Boyle Research Facility`. conditions: Journal `SW_Cameras` Equal 0. response: “Around Boyle you will find a strange planet called bloodspores. I need to know what's going on in the Czerka Corp's lab. There's a bloodspore right outside, simply put the cameras inside of the bloodspore and then activate it so that I can get a signal. I have two cameras here, just place them both in the bloodspore next to the Czerka Lab and activate them so that I can get a signal. And don't get caught!”.

```text
Journal SW_Cameras 1
player->additem "SW_CameraItem", 2
```

### Stage 3

I inserted all the cameras, I should report back to Doctor Yee'mar,

**How this stage is set:**
- Script `SW_CameraScript`. attached to Container Bloodspore (`SW_CameraContScript`); placed in `Kashyyk, Boyle Research Facility`.

```text
Set DoOnce to 1
            SW_CameraContScript->removeitem, "SW_CameraItem", 2
            Journal "SW_Cameras" 3
            MessageBox "Cameras are in place."
        Else
```

### Stage 5 — Finished

I reported back to Doctor Yee'mar, he swears he will catch them doing something they are not supposed to do. I'm not sure what that's going to do for him, beings that they are the local authorities.

**How this stage is set:**
- Dialogue INFO `69823861723212217` under topic **cameras**; speaker Doctor Yee'mar (`SW_DrKash`). locations: `Kashyyk, Boyle Research Facility`. conditions: Journal `SW_Cameras` Equal 3. response: “Looks like I'm getting a signal. It's good to know there are others around here that are not as vile as those Czerka hounds. Here's some credits for your work.”.

```text
Journal "SW_Cameras" 5
player->additem gold_001 400
player->modReputation 1
```

### Related records and locations

**Dialogue speakers:**
- Doctor Yee'mar (`SW_DrKash`) — `Kashyyk, Boyle Research Facility`

**Scripts that read or write this journal:**
- `SW_CameraScript` — Container Bloodspore (`SW_CameraContScript`); placed in `Kashyyk, Boyle Research Facility`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)
- Camera (`SW_CameraItem`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Kashyyk, Boyle Research Facility`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `1` is obtainable.
- [ ] Reach index `1`: I have spoken to a Duros doctor in Boyle who moved here to do research on the wildlife and local Wookies. He c…
- [ ] Reach index `3`: I inserted all the cameras, I should report back to Doctor Yee'mar,
- [ ] Reach index `5` (`Finished`): I reported back to Doctor Yee'mar, he swears he will catch them doing something they are not supposed to do. I…
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_Cameras`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
