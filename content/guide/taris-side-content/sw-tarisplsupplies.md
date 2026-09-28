---
title: "Supplies for the Promised Land"
description: "Walkthrough and QA reference for Supplies for the Promised Land (SW_TarisPLSupplies)."
weight: 4
extra:
  kind: quest guide
  hide_from_sidebar: true
  journal_id: "SW_TarisPLSupplies"
  guide_status: record-derived
---


{% callout(kind="note", title="Guide status") %}
**Record-derived; awaiting full playtest verification.** The route below is reconstructed from the current Definitive journal, dialogue, scripts, placements and item records. If playtesting proves a different route, update the guide rather than forcing the game to match this draft.
{% end %}

## At a glance

| | |
|---|---|
| **Journal** | `SW_TarisPLSupplies` |
| **Category** | Taris Side Content |
| **Journal entries** | 4 |
| **Completion branches** | 1 |
| **Starts by** | Speak with **Kaylcha Titewisw** in **Taris, The Promised Land** and ask about **open a trade route**. |
| **Key locations** | Taris, The Promised Land, Taris, Upper City North: Marketplace |
| **Key characters** | Kaylcha Titewisw, Vux Broekz |

## Walkthrough

### 1. Speak with Kaylcha Titewisw in Taris, The Promised Land and ask about open a trade route

Speak with **Kaylcha Titewisw** in **Taris, The Promised Land** and ask about **open a trade route**.

> **Expected journal update — index 10:** Kaylcha Titewisw of the Promised Land asked me to go to the upper city and see if any vendors would be kind enough to open a trade route with them.

### 2. Speak with Vux Broekz in Taris, Upper City North: Marketplace and ask about open a trade route

Speak with **Vux Broekz** in **Taris, Upper City North: Marketplace** and ask about **open a trade route**.

> **Expected journal update — index 20:** Vux Broekz of the Upper City was willing to open a trade route with the Promised Land. I should return to Kaylcha and tell her of my success.

### 3. Speak with Kaylcha Titewisw in Taris, The Promised Land — Finished

Speak with **Kaylcha Titewisw** in **Taris, The Promised Land**.

> **Expected journal update — index 30:** Kaylcha thanked me for finding someone to trade and help out the Promised Land. She said she's a good trainer and can help me anytime.

**Known item transfer:** 300 × **Credits** (`Gold_001`).

**Outcome:** this journal entry is marked as a finished branch.

## Endings & branches

The journal has one explicit finished state at **index 30**:

> Kaylcha thanked me for finding someone to trade and help out the Promised Land. She said she's a good trainer and can help me anytime.

## Known rewards & item transfers

The following player-directed item transfers are visible in the parsed quest scripts/dialogue results. Playtest may reveal additional indirect rewards.

- 300 × **Credits** (`Gold_001`)

## Characters & locations

**Characters directly tied to quest dialogue:**
- **Kaylcha Titewisw** (`SW_TarisCitizen3`) — `Taris, The Promised Land`
- **Vux Broekz** (`SW_TarisUpperVendor3`) — `Taris, Upper City North: Marketplace`

**Locations implicated by actor/object placement or explicit travel:**
- **Taris, The Promised Land**
- **Taris, Upper City North: Marketplace**

{% technical_details(title="Technical / QA reference") %}
**Journal ID:** `SW_TarisPLSupplies`
**Generated category:** Taris Side Content
**Journal entries:** 4

### Exact journal progression

| Index | State | Journal text | Direct setters found |
|---:|---|---|---:|
| 10 | — | Kaylcha Titewisw of the Promised Land asked me to go to the upper city and see if any vendors would be kind enough to open a trade route with them. | 1 |
| 20 | — | Vux Broekz of the Upper City was willing to open a trade route with the Promised Land. I should return to Kaylcha and tell her of my success. | 1 |
| 30 | Finished | Kaylcha thanked me for finding someone to trade and help out the Promised Land. She said she's a good trainer and can help me anytime. | 1 |

### Record-level trigger map

### Stage 10

Kaylcha Titewisw of the Promised Land asked me to go to the upper city and see if any vendors would be kind enough to open a trade route with them.

**How this stage is set:**
- Dialogue INFO `677315416292687576` under topic **open a trade route**; speaker Kaylcha Titewisw (`SW_TarisCitizen3`). locations: `Taris, The Promised Land`. response: “We could really use the help from the upper city. We lost many things in the attack. We had droids that were able to help us with the farming and labor, but most of that is gone now. If you can ask any of the vendors in the upper city, give them our location, and see if they would be willing to trade with us down here. We could really use the supplies.”.

```text
Journal SW_TarisPLSupplies 10
```

### Stage 20

Vux Broekz of the Upper City was willing to open a trade route with the Promised Land. I should return to Kaylcha and tell her of my success.

**How this stage is set:**
- Dialogue INFO `981621126273413845` under topic **open a trade route**; speaker Vux Broekz (`SW_TarisUpperVendor3`). locations: `Taris, Upper City North: Marketplace`. conditions: Journal `SW_TarisPLSupplies` Equal 10. response: “Hmm, yes, I think I can find a way to make this worthwhile. I make plenty of profit up here, I think even if this would end up costing me some I could find a way to make me look better than the other vendors. Tell them I will help.”.

```text
Journal SW_TarisPLSupplies 20
ModDisposition 10
```

### Stage 30 — Finished

Kaylcha thanked me for finding someone to trade and help out the Promised Land. She said she's a good trainer and can help me anytime.

**How this stage is set:**
- Dialogue INFO `196709360240144661` under topic **Greeting 5**; speaker Kaylcha Titewisw (`SW_TarisCitizen3`). locations: `Taris, The Promised Land`. conditions: Journal `SW_TarisPLSupplies` Equal 20. response: “You did it? Oh, thank you! I really hope this will give us a better quality of life. I don't have much to give, but I'm a great trainer. Come back if you ever need training.”.

```text
Journal SW_TarisPLSupplies 30
player->AddItem "Gold_001" 300
ModDisposition 30
```

### Related records and locations

**Dialogue speakers:**
- Kaylcha Titewisw (`SW_TarisCitizen3`) — `Taris, The Promised Land`
- Vux Broekz (`SW_TarisUpperVendor3`) — `Taris, Upper City North: Marketplace`

**Items referenced by related script/result code:**
- Credits (`Gold_001`)

**Cells implicated by actor/object placement or explicit travel code:**
- `Taris, The Promised Land`
- `Taris, Upper City North: Marketplace`

### Generated playtest checklist

- [ ] Start/reach the quest naturally and verify journal index `10` is obtainable.
- [ ] Reach index `10`: Kaylcha Titewisw of the Promised Land asked me to go to the upper city and see if any vendors would be kind en…
- [ ] Reach index `20`: Vux Broekz of the Upper City was willing to open a trade route with the Promised Land. I should return to Kayl…
- [ ] Reach index `30` (`Finished`): Kaylcha thanked me for finding someone to trade and help out the Promised Land. She said she's a good trainer …
- [ ] Verify any scripted reward/item transfer shown above actually occurs.
- [ ] Verify involved NPCs/objects remain present and usable after the stage transition.
- [ ] Verify no unrelated vanilla Morrowind dialogue/quest state appears during the flow.

### QA console reference

Current journal state can be inspected with the OpenMW/Morrowind journal tooling for `SW_TarisPLSupplies`. Manually forcing journal indices is useful for diagnosis, but **does not substitute for testing the scripts/dialogue that normally cause the transition**.
{% end %}
