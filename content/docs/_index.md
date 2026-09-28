---
title: R3mastered Documentation
description: "Long-form user, developer, API, and project documentation for Starwind: R3mastered."
template: docs/section.html
page_template: docs/page.html
sort_by: weight

extra:
  docs_root: true
  docs_project_name: "Starwind: R3mastered"
  docs_short_title: R3mastered Docs
  docs_project_path: '@/home/index.md'
  docs_repository_url: https://github.com/DreamWeave-MP/Starwind-R3mastered/tree/main/content/docs
  docs_sidebar_label: Documentation
  kind: guide
---
This is the durable documentation root for **Starwind: R3mastered**.

R3mastered is being assembled from several years of Starwind integration,
server operation, OpenMW compatibility work, build automation, Lua experiments,
and tooling. The documentation is therefore organized as a long-lived project
reference rather than as a release README.

At project inception, the first populated category is **[Project history](./history/)**.
The player-facing **[Starwind Definitive Game Guide](@/guide/_index.md)** now lives in its own navigable site section. Developer references, build documentation, architecture material, and public APIs belong here beside the historical record rather than being folded into it.

## Documentation policy

The history is intentionally evidence-heavy. Public claims link to public
commits, issue trackers, mod pages, and release pages wherever those sources
exist. Private or local primary sources are labeled as such rather than given
fabricated links. Recollections from project participants are preserved as
**oral history** and are never silently promoted to Git-proven fact.

That distinction is important. Starwind predates this repository by years, and
much of its creative development happened outside version control entirely.
The repository history begins with the people who started integrating,
operating, patching, and automating Starwind—not with the beginning of Starwind
itself.
