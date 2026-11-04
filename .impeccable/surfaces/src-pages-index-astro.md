---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/pages/work"]
---

# Surface brief: Homepage, Work index and case-study layout

Scope: `/` (home), `/work`, `/work/[slug]` case-study template. Visitor mode: **Experience** (the work leads), with Persuade obligations: role, level, domains and contact visible in the first viewport.

Audience/job: recruiters skim (under 3 minutes, often on a phone); hiring managers read 2–3 case studies. Action: open a case study; secondary action: email / resume.

Constraints: real portfolio-safe screens only; client logos and colours allowed; no invented metrics; contact on every page.

Decision history: the roll (degraded, no challengers) assigned "The Annotated Spec"; Andrés saw mocks of it, "The Identity Manual" and the category standard, and chose the standard (the canon/standing exit) for being timeless and scalable. He then picked variant A "Gallery" as base, with category chips and client-colour tiles from variant C, and asked for thoughtful UI moments of delight that flex his graphic design and UX background.

## Direction contract

THESIS: A calm, gallery-clean portfolio where each client's own brand colour carries its work; delight lives in precise, designerly details rather than decoration. Refuses the dark-mode neon portfolio and the editorial-serif portfolio.

OWN-WORLD: White ground, near-black ink, zinc greys; Geist variable as the single family (weight steps 450/550/650). Large rounded tiles (24px radius) in each client's brand colour with the real screen set inside; selected-work tiles in soft zinc. Pill buttons, hairline rules, chips for domains. A personal mark: the acute accent of "Andrés", which takes on the colour of whichever project is in focus.

STORY: In five seconds the visitor reads "Senior UX/UI & brand designer" plus his domains, sees four real shipped/complex projects in their clients' colours, and knows where to email. Deeper, they find case studies that state problem, role, decisions and result in first person.

FIRST VIEWPORT: Header (mark + name left; Work, About, Resume, pill "Get in touch" right). Two-tone statement headline at ~64px across eight columns; right column with "open to" line, years, location. Domain chips under the headline. The top edge of the first two client-colour tiles visible at the fold on desktop (1440×900).

FORM: Category standard played straight (canon) with A+C fusion; signature interactions: (1) domain chips that highlight matching projects, (2) brand-chip swatch on each tile that flips to show the client's colour and type spec, (3) accent mark tinting to the hovered project, (4) press "G" (or footer toggle) to overlay the site's own 12-column grid and spacing, proving it is hand-built. seed:c189db759656ba07

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
