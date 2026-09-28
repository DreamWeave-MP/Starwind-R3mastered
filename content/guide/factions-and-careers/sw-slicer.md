---
title: "Slicer (internal journal)"
description: "Walkthrough and QA reference for Slicer (internal journal) (SW_Slicer)."
weight: 31
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_Slicer"
  guide_status: record-derived
---


{% usage_note(title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_Slicer` |
| **Category** | Factions & Careers |
| **Journal entries** | 7 |
| **Completion branches** | 1 |
| **Starts by** | Record route requires playtest verification. |
| **Key locations** | Tatooine, Durelium Mine, Tatooine, Sandriver, TatooineRace |
| **Key characters** | Deke Turaner |

## Walkthrough

### 1. Reach journal stage 0

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 0:** The Durelium Mine

### 2. Speak with Deke Turaner in Tatooine, Sandriver and ask about slicer

Speak with **Deke Turaner** in **Tatooine, Sandriver** and ask about **slicer**.

> **Expected journal update — index 3:** Decisions, decisions...

### 3. Speak with Deke Turaner in Tatooine, Sandriver and ask about slicer

Speak with **Deke Turaner** in **Tatooine, Sandriver** and ask about **slicer**.

> **Expected journal update — index 5:** There is a man in Sandriver named Deke who wants me to break into an old Czerka durelium mine. I told him no for now but I may talk to him again.

### 4. Speak with Deke Turaner in Tatooine, Sandriver and ask about slicer

Speak with **Deke Turaner** in **Tatooine, Sandriver** and ask about **slicer**.

> **Expected journal update — index 10:** Deke told me about a durelium mine behind the tanker just to the left of the town's gates. I should use the security spikes he gave me to break in and find his datapad.

### 5. Activate Datapad Report in Tatooine, Durelium Mine

Activate **Datapad Report** in **Tatooine, Durelium Mine**.

> **Expected journal update — index 12:** I found something that may involve Deke, a datapad from what looks like it was written by his father. I should bring this to him.

### 6. Reach journal stage 15

**Route needs playtest verification.** No literal journal setter was found for this stage in the parsed dialogue/MWScript evidence. Follow the surrounding quest context and verify whether this entry is reachable, indirect, optional, or historical.

> **Expected journal update — index 15:** I found Deke's datapad, this place is insane, I should get back to him for my reward.

### 7. Speak with Deke Turaner in Tatooine, Sandriver and ask about slicer — Finished

Speak with **Deke Turaner** in **Tatooine, Sandriver** and ask about **slicer**.

> **Expected journal update — index 20:** Deke gave me some extra security spikes for what he says is a job well done. He also says he will sell me more if I ever need them.

**Outcome:** this journal entry is marked as a finished branch.

> **Playtest flag:** 2 journal stages on this page lack a literal setter in the current static scan.

## Endings & branches

The journal has one explicit finished state at **index 20**:

> Deke gave me some extra security spikes for what he says is a job well done. He also says he will sell me more if I ever need them.

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Deke Turaner** (`SW_DekeSlicer`) — `Tatooine, Sandriver`, `TatooineRace`

**Locations implicated by actor/object placement or explicit travel:**
- **Tatooine, Durelium Mine**
- **Tatooine, Sandriver**
- **TatooineRace**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_Slicer`
**Generated category:** Factions & Careers
**Journal entries:** 7

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 0 | — | The Durelium Mine | 0 |
| 3 | — | Decisions, decisions... | 1 |
| 5 | — | There is a man in Sandriver named Deke who wants me to break into an old Czerka durelium mine. I told him no for now but I may talk to him again. | 2 |
| 10 | — | Deke told me about a durelium mine behind the tanker just to the left of the town's gates. I should use the security spikes he gave me to break in and find his datapad. | 2 |
| 12 | — | I found something that may involve Deke, a datapad from what looks like it was written by his father. I should bring this to him. | 1 |
| 15 | — | I found Deke's datapad, this place is insane, I should get back to him for my reward. | 0 |
| 20 | Finished | Deke gave me some extra security spikes for what he says is a job well done. He also says he will sell me more if I ever need them. | 1 |

### Record-level trigger map

### Stage 0

The Durelium Mine

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 3

Decisions, decisions...

**How this stage is set:**
- Dialogue INFO `13887230033164223648` under topic **slicer**; speaker Deke Turaner (`SW_DekeSlicer`). locations: `Tatooine, Sandriver`, `TatooineRace`. conditions: Journal `SW_Slicer` Equal 0. response: “It's a way to get into locked programs and electronics. You see, I need a slicer to get into the old Czerka Durelium mine, and if you think you can get me in, I can supply you with the security spikes.”.

```text
Journal "SW_Slicer" 3
StopSound "SW_Slicer1"
StopSound "SW_Slicer3"
```

### Stage 5

There is a man in Sandriver named Deke who wants me to break into an old Czerka durelium mine. I told him no for now but I may talk to him again.

**How this stage is set:**
- Dialogue INFO `17965294672362217226` under topic **slicer**; speaker Deke Turaner (`SW_DekeSlicer`). locations: `Tatooine, Sandriver`, `TatooineRace`. conditions: Function/Choice Equal 2; Journal `SW_Slicer` Equal 3. response: “Well come back if you change your mind, and try to be discrete about it.”.

```text
Journal "SW_Slicer" 5
goodbye
```
- Dialogue INFO `2881315441748623166` under topic **slicer**; speaker Deke Turaner (`SW_DekeSlicer`). locations: `Tatooine, Sandriver`, `TatooineRace`. conditions: Journal `SW_Slicer` Equal 3; Function/Choice Equal 3. response: “They wouldn't do anything if you told them. Come back if you decide you want to be a slicer.”.

```text
Journal "SW_Slicer" 5
StopSound "SW_Slicer1"
StopSound "SW_Slicer2"
```

### Stage 10

Deke told me about a durelium mine behind the tanker just to the left of the town's gates. I should use the security spikes he gave me to break in and find his datapad.

**How this stage is set:**
- Dialogue INFO `10816183641881013260` under topic **slicer**; speaker Deke Turaner (`SW_DekeSlicer`). locations: `Tatooine, Sandriver`, `TatooineRace`. conditions: Journal `SW_Slicer` Equal 5. response: “I knew you would come back. If you go to the gates that lead out of Sandriver and hang a left; there is a tanker behind a building. Sneak behind the tanker and you will find the door that needs to be sliced. Here, take these spikes, I'm looking for an old Datapad in there. I'm sure there's multiple so I guess grab them all.”.

```text
Journal "SW_Slicer" 10
StopSound "SW_Slicer1"
StopSound "SW_Slicer2"
```
- Dialogue INFO `133581869442443956` under topic **slicer**; speaker Deke Turaner (`SW_DekeSlicer`). locations: `Tatooine, Sandriver`, `TatooineRace`. conditions: Function/Choice Equal 1; Journal `SW_Slicer` Equal 3. response: “Haha, I knew you could do it! If you go to the gates that lead out of Sandriver and hang a left; there is a tanker behind a building. Sneak behind the tanker and you will find the door that needs to be sliced. Here, take these spikes, I'm looking for an old Datapad in there. I'm sure there's multiple so I guess grab them all.”.

```text
Journal "SW_Slicer" 10
StopSound "SW_Slicer1"
StopSound "SW_Slicer2"
```

### Stage 12

I found something that may involve Deke, a datapad from what looks like it was written by his father. I should bring this to him.

**How this stage is set:**
- Script `SW_SlicerPad`. attached to Book Datapad Report (`SW_CzerkaMine4`); placed in `Tatooine, Durelium Mine`.

```text
If ( OnActivate )
    If ( GetJournalIndex "SW_Slicer" == 10 )
        Journal SW_Slicer 12
        Activate
    Else
```

### Stage 15

I found Deke's datapad, this place is insane, I should get back to him for my reward.

**Direct setter:** No literal `Journal <quest> <index>` command was found in the current plugin for this stage. Treat this as a QA flag: it may be a developer note, branch reached indirectly, or state written by code outside the parsed MWScript/result-script patterns.

### Stage 20 — Finished

Deke gave me some extra security spikes for what he says is a job well done. He also says he will sell me more if I ever need them.

**How this stage is set:**
- Dialogue INFO `3074278272540729889` under topic **slicer**; speaker Deke Turaner (`SW_DekeSlicer`). locations: `Tatooine, Sandriver`, `TatooineRace`. conditions: Journal `SW_Slicer` Equal 12; Item/ItemType `SW_CzerkaMine4` GreaterEqual 1. response: “Well, I guess that old bastard really is my father. This old datapad shows he was the medical engineer for the Czerka Corporation during the mine explosions. This is the proof I needed, thank you, stranger, why don't you take my old shield generator for your trouble.”.

```text
Journal "SW_Slicer" 20
StopSound "SW_Slicer1"
StopSound "SW_Slicer2"
```

### Related records and locations

**Dialogue speakers:**
- Deke Turaner (`SW_DekeSlicer`) — `Tatooine, Sandriver`, `TatooineRace`

**Scripts that read or write this journal:**
- `SW_SlicerPad` — Book Datapad Report (`SW_CzerkaMine4`); placed in `Tatooine, Durelium Mine`

**Items referenced by related script/result code:**
- Datapad Report (`SW_CzerkaMine4`)
- Security Spike (`SW_SecuritySpike`)
- Energy Shield (`SW_ShieldBeltMin`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Tatooine, Durelium Mine`
- `Tatooine, Sandriver`
- `TatooineRace`

<details><summary>Journal-state readers (1 code sites)</summary>

- Script `SW_SlicerPad`. attached to Book Datapad Report (`SW_CzerkaMine4`); placed in `Tatooine, Durelium Mine`.

</details>

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `0` is obtainable.
- [ ] Reach index `0`: The Durelium Mine
- [ ] Reach index `3`: Decisions, decisions...
- [ ] Reach index `5`: There is a man in Sandriver named Deke who wants me to break into an old Czerka durelium mine. I told him no f…
- [ ] Reach index `10`: Deke told me about a durelium mine behind the tanker just to the left of the town's gates. I should use the se…
- [ ] Reach index `12`: I found something that may involve Deke, a datapad from what looks like it was written by his father. I should…
- [ ] Reach index `15`: I found Deke's datapad, this place is insane, I should get back to him for my reward.
- [ ] Reach index `20` (`Finished`): Deke gave me some extra security spikes for what he says is a job well done. He also says he will sell me more…
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_Slicer`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
