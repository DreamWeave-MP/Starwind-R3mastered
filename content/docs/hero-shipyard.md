---
title: The Hero's Shipyard
weight: 20
description: Every ship the front page's hero flies, checked against canon and Legends, and the Gungan ships it invents.
---
The hero at the top of the front page flies ships from five eras. Each one claims a class, a length,
a navy and a colour of fire. This page is the audit of those claims: what the hero showed, what the
sources say, and what changed.

**The rule.** Canon where canon speaks. Legends for the Old Republic, because Starwind is set in
*Knights of the Old Republic*'s era and canon says almost nothing about it. Anything neither says is
marked as extrapolation.

**Where to look.** Ships are defined in `static/js/r3-shipyard.js` (factions and eras) and
`static/js/r3-shipyard-lore.js` (the hulls added here). Lengths are Wookieepedia's infobox figures
unless the article itself settles a conflict otherwise.

## Capital ships

| Navy | The hero showed | Verdict | Source | Now |
|---|---|---|---|---|
| Imperial Navy | Imperial-class · 1,600 m | Correct: 1,600.52 m | Canon | Unchanged |
| Imperial Navy | Victory-class · 900 m | Correct | Canon | Unchanged |
| Imperial Navy | Tector-class · 1,600 m | Canon gives no length; Legends gives 1,600 m | Legends | Unchanged |
| Imperial Navy | Interdictor · 1,129 m | **Wrong.** The canon Interdictor-class Star Destroyer is 1,600 m, built on the Imperial-class line | Canon | Interdictor-class · 1,600 m |
| Rebel Alliance | MC80 Liberty · 1,200 m | Legends' standard length; canon gives none | Legends | Unchanged |
| Rebel Alliance | MC80 Home One · 1,300 m | Length correct; the type is the MC80**A** | Canon | MC80A Home One · 1,300 m |
| Rebel Alliance | Sphyrna-class · 315 m | **Wrong.** The Sphyrna-class Hammerhead corvette is 117 m; 315 m belongs to the Old Republic's Hammerhead-class cruiser | Canon | Sphyrna-class · 117 m |
| Republic Navy | Venator-class · 1,137 m | Correct: canon spans 1,137 to 1,155.0 m | Canon | Unchanged |
| Republic Navy | Acclamator-class · 752 m | Length correct; the class is the Acclamator I | Canon | Acclamator I-class · 752 m |
| Separatist Navy | Lucrehulk-class · 3,170 m | **Outdated.** 3,170 m is Legends'. The canon article gives 3,356.9 m and calls the 3,170 m figure incorrect | Canon | Lucrehulk-class · 3,357 m |
| First Order | Resurgent-class · 2,916 m | Correct: 2,915.81 m precisely, 2,900 m rounded | Canon | Unchanged |
| Resistance | MC85 Raddus · 3,438 m | Correct: 3,438.37 m | Canon | Unchanged |
| Resistance | Hammerhead corvette · 315 m | The Resistance did fly Sphyrna-class corvettes; the length was **wrong** | Canon | Sphyrna-class · 117 m |
| Old Republic | Hammerhead-class · 314 m | **Wrong** by a metre: 315 m | Legends | Hammerhead-class · 315 m |
| Old Republic | Endar Spire · Hammerhead-class | Correct: the *Endar Spire* was a Hammerhead-class cruiser | Legends | Length added: 315 m |
| Sith Empire | Leviathan · Interdictor-class | Correct class, but drawn as an Imperial star destroyer | Legends | Its own hull: see below |
| Sith Empire | Interdictor-class · 600 m | Correct length, same problem | Legends | Its own hull |

The *Leviathan* was a Republic ship, built by Republic Sienar Systems for the Mandalorian Wars. It
served the Sith only after Admiral Saul Karath defected with it. Flying it for the Sith Empire of
Revan and Malak is right for Starwind's moment.

## Proportions

Every star destroyer was one model, 0.76 as wide as it was long. None is that wide. Each class now
carries its own beam, measured from its length and width:

| Class | Length × width | Beam, for a length of one |
|---|---|---|
| Imperial-class, and the Victory, Tector and Interdictor built on its line | 1,600.52 × 985.17 m | 0.62 |
| Venator-class | 1,137–1,155 × 548 m | 0.48 |
| Acclamator I-class | 752 × 460 m | 0.61 |
| Resurgent-class | 2,915.81 × 1,483.5 m | 0.51 |

The Venator also gets its two command towers, side by side, where the wedge had one.

The Lucrehulk's central sphere and tower stood 0.39 of its length tall. The canon ship is
3,356.9 m long and 1,028.77 m high, 0.31, so the core is smaller.

The hero does not draw capital ships to scale against each other: every one passes at a similar size
on screen, so a 98 m transport and a 3,357 m battleship read equally well. That is a composition
choice, not a claim.

## Fighters

| Navy | The hero flew | Verdict | Now |
|---|---|---|---|
| Imperial Navy | TIE fighter | Correct | Unchanged |
| First Order | TIE fighter | Correct: the TIE/fo is the same silhouette | Unchanged |
| Rebel Alliance | X-wing, A-wing | Correct | Unchanged |
| Resistance | X-wing, A-wing | Correct: T-70 X-wings and RZ-2 A-wings | Unchanged |
| Separatist Navy | Droid tri-fighter | Correct | Unchanged |
| Republic Navy | A-wing, X-wing | **Anachronism.** Both came a generation after the Clone Wars | ARC-170 (canon, 12.71 m), the X-wing's ancestor |
| Old Republic | A-wing | A stand-in. The Republic's fighter of the Jedi Civil War was the Aurek-class tactical strikefighter (Legends, 9.2 m), a delta-winged craft also called an A-wing | Unchanged: the silhouette is close |
| Sith Empire | TIE fighter | **Anachronism.** The TIE is four thousand years later | The Sith fighter from the Star Forge (Legends, 7 m with its wings out) |

## Colours of fire

| Navy | Bolts | Verdict |
|---|---|---|
| Imperial Navy | Green | Correct |
| First Order | Red | **Wrong.** The TIE/fo fires green, in the Empire's tradition. Now green |
| Rebel Alliance, Resistance | Red | Correct |
| Republic Navy | Blue | Correct: the Clone Wars' convention, blue for the Republic and red for the Separatists |
| Separatist Navy | Red | Correct |
| Old Republic, Sith Empire | Orange-red, red | Not verified. Neither canon nor the Legends articles checked name a colour. Unchanged |
| Gungan Grand Armada | Boomas | Not bolts: see below |

## Eras

A load shows one era: one navy on patrol, or two at war. The pairs are the Rebellion and the Empire,
the Republic and the Separatists, the Resistance and the First Order, and the Old Republic and the
Sith Empire. None mixes eras.

The fifth era is new: the Gungans and the Separatists. The Gungan Grand Army fought beside the
Republic, and fought Separatist droid armies in *The Clone Wars* episode "Shadow Warrior".

## The rare events

| Event | Claim | Verdict |
|---|---|---|
| Probe droid | An Imperial Arakyd Viper probe droid | Correct |
| Raiders on a convoy | Pirates in TIEs and tri-fighters | Plausible: salvaged fighters are common in both continuities |
| Bounty | Named targets | Invented names, not characters. "Oppo Rancisis Jr." borrows a Jedi Master's name as a joke; "Rhen Var-Oto" a planet's |
| *Ebon Hawk* | New | See below |

## Ships added for Starwind's era

**The Interdictor-class cruiser** (Legends, 600 m) is the *Leviathan*'s class. Its hull splits into a
dorsal and a ventral structure. It is commanded from a sternward tower, driven by three main
thrusters and four auxiliaries, and carries four gravity-well projectors. The articles do not say
where the projectors sit; here they stand on the flanks of the two hulls.

**The Sith fighter** (Legends, 7 m) was mass-produced at the Star Forge. It has a short, stubby
carriage for cockpit and reactor, wings that fold out for combat with a laser cannon at each outward
edge, and a twin ion drive. The shape follows that description; the proportions are extrapolation.

**The *Ebon Hawk*** is a Dynamic-class freighter (Legends; 24 m in the StarWars.com databank, 27.24 m
for the class). From above it is roughly the Aurebesh letter "ae":
- three prongs forward, the middle one flush with the outer two, with only a small prong on the
  starboard side;
- white, with its prongs picked out in red;
- two cylindrical engines across the stern, meeting the middle prong at its base, with red stripes
  curving back from them;
- a turret above and one below.

It is a rare event, and appears only where the Old Republic or the Sith fly, or over a world it
visited in the two games. It runs past with two Sith fighters on its tail, and its dorsal turret
answers now and then. Its turret fire's colour is not described; it is drawn orange to tell it from
the Sith's red.

## The Gungan Grand Armada

Canon gives the Gungans no warships in space. Legends gives them two facts to build on:

- **The Mantaris-class amphibious medium transport**, "the Ray" (Legends, 98 m). It was built jointly
  by the Naboo and the Gungans on a bongo's frame, and it is the Gungans' principal means of travel
  between worlds.
- **The bongo**: "The Gungans based their starfighter designs on the bongo."

Everything else here is extrapolation, meant to stay Gungan.

**The Mantaris** is drawn as described:
- a manta ray with flat, swept wings;
- two sabre-like tails, which are heat-sink finials 30 m long, a little under a third of its length;
- knobs at the wingtips that shine red;
- horn-like fins at the bow, which are its twin concussion-missile launchers.

Its cockpit bubbles follow the tribubble bongo it grew from.

**The Bombad-class war bongo** (410 m) is invented. "Bombad" is Gungan for great, and the Gungans
called the Mantaris "big bongo ship". It is the Mantaris taken further:
- a coral hull grown to capital size, as a bongo's is grown;
- a tribubble bridge;
- its back crowded with hydrostatic bubbles like Otoh Gunga's, lit from within;
- cradles of booma plasma along its fins, for its catapults;
- a crown of electromotive tentacles astern that spin for propulsion, as a bongo's do.

**The bongo starfighter** is invented within the one line Legends gives:
- a small manta with a bubble cockpit and two smaller bubbles, the tribubble;
- a ball of booma plasma slung under the belly;
- three electromotive tentacles.

**Boomas instead of bolts.** Boomas are the Gungans' plasma weapon, made from the plasma in Naboo's
crust and thrown by hand, sling or catapult. So the armada throws slow, crackling balls of blue
plasma rather than firing laser bolts.

**A bubble instead of a shield grid.** The Gungans' city walls, cockpits and field shields are
hydrostatic membranes. So a Gungan capital sits inside one smooth bubble:
- always faintly visible;
- flaring where it is hit;
- gone when it fails.

The name "Gungan Grand Armada" is also extrapolation. The Gungan Grand Army is canon; it had no
navy.

## Not verified

- The Old Republic's and the Sith's bolt colours.
- Where the Interdictor-class cruiser's gravity-well projectors sit.
- The Sith fighter's exact proportions.
- Everything the Gungan section marks as extrapolation.

## Sources

Wookieepedia:
- [Imperial I-class Star Destroyer](https://starwars.fandom.com/wiki/Imperial_I-class_Star_Destroyer)
- [Victory I-class Star Destroyer](https://starwars.fandom.com/wiki/Victory_I-class_Star_Destroyer)
- [Tector-class Star Destroyer](https://starwars.fandom.com/wiki/Tector-class_Star_Destroyer) (Legends)
- [Interdictor-class Star Destroyer](https://starwars.fandom.com/wiki/Interdictor-class_Star_Destroyer)
- [MC80 Liberty type Star Cruiser](https://starwars.fandom.com/wiki/MC80_Liberty_Type_Heavy_Star_Cruiser/Legends) (Legends)
- [Home One](https://starwars.fandom.com/wiki/Home_One)
- [Sphyrna-class Hammerhead corvette](https://starwars.fandom.com/wiki/Sphyrna-class_Hammerhead_corvette)
- [Venator-class Star Destroyer](https://starwars.fandom.com/wiki/Venator-class_Star_Destroyer)
- [Acclamator I-class Assault Ship](https://starwars.fandom.com/wiki/Acclamator_I-class_Assault_Ship)
- [Lucrehulk-class battleship](https://starwars.fandom.com/wiki/Lucrehulk-class_battleship)
- [Resurgent-class Star Destroyer](https://starwars.fandom.com/wiki/Resurgent-class_Star_Destroyer)
- [MC85 Star Cruiser](https://starwars.fandom.com/wiki/MC85_Star_Cruiser)
- [Hammerhead-class cruiser](https://starwars.fandom.com/wiki/Hammerhead-class_cruiser) (Legends)
- [*Endar Spire*](https://starwars.fandom.com/wiki/Endar_Spire) (Legends)
- [*Leviathan*](https://starwars.fandom.com/wiki/Leviathan_(Interdictor-class_cruiser)) (Legends)
- [Interdictor-class cruiser](https://starwars.fandom.com/wiki/Interdictor-class_cruiser) (Legends)
- [Sith fighter](https://starwars.fandom.com/wiki/Sith_fighter) (Legends)
- [Aurek-class tactical strikefighter](https://starwars.fandom.com/wiki/Aurek-class_tactical_strikefighter) (Legends)
- [ARC-170 starfighter](https://starwars.fandom.com/wiki/Aggressive_ReConnaissance-170_starfighter)
- [Droid tri-fighter](https://starwars.fandom.com/wiki/Droid_tri-fighter)
- [TIE/fo space superiority fighter](https://starwars.fandom.com/wiki/TIE/fo_space_superiority_fighter)
- [*Ebon Hawk*](https://starwars.fandom.com/wiki/Ebon_Hawk) (Legends)
- [Dynamic-class freighter](https://starwars.fandom.com/wiki/Dynamic-class_freighter/Legends) (Legends)
- [Mantaris-class amphibious medium transport](https://starwars.fandom.com/wiki/Mantaris-class_amphibious_medium_transport) (Legends)
- [Tribubble bongo](https://starwars.fandom.com/wiki/Tribubble_bongo) and [its Legends article](https://starwars.fandom.com/wiki/Tribubble_bongo/Legends)
- [Booma](https://starwars.fandom.com/wiki/Booma)
- [Gungan Grand Army](https://starwars.fandom.com/wiki/Gungan_Grand_Army)
- [Hydrostatic bubble](https://starwars.fandom.com/wiki/Hydrostatic_bubble)

On bolt colours: [Blaster (Star Wars)](https://en.wikipedia.org/wiki/Blaster_(Star_Wars)) on
Wikipedia.
