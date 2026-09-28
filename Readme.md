# Starwind: R3mastered

This repository is the project home for **Starwind: R3mastered**, the modern
OpenMW reconstruction and continuation of Starwind's merged-content,
compatibility, asset, and Lua-modernization work.

Project site: <https://DreamWeave-MP.github.io/Starwind-R3mastered>

## What lives here

| Path | What |
|---|---|
| [`content/home/`](content/home/) | The project page (`index.md`) and its facts (`mod.toml`) |
| [`content/guide/`](content/guide/) | The Starwind Definitive Game Guide: walkthroughs and record-level QA references |
| [`content/docs/`](content/docs/) | Developer documentation, and the project's history under [`content/docs/history/`](content/docs/history/) |
| `sass/brand.sass` | Starwind's look, on top of the DreamWeave Mod Template |
| `templates/shortcodes/technical_details.html` | The collapsible QA reference under each guide page |

Start the history with the [chronology](content/docs/history/chronology.md) and the
[source ledger](content/docs/history/source-ledger.md). The historical section deliberately
distinguishes public Git evidence, private primary sources, published mod and issue pages,
artifacts, oral history, and later interpretation.

## Working on the site

The site is built with the [DreamWeave Mod Template](https://github.com/DreamWeave-MP/DreamWeave-Mod-Template)
V5. Preview it with [Zola](https://www.getzola.org/) 0.22 or newer:

```sh
zola serve
```

Push, and CI validates the project, builds the site and publishes it. When R3mastered has content
to ship, declare a release in `content/home/mod.toml` and push the tag
`starwind_r3mastered-<version>`; CI builds the archive and records it.

## Status

Early development. The repository is the long-term home for project documentation and the
integrated R3mastered implementation.
