# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro 7 (static output) with MDX content collections, hosted from a private GitHub repo on Vercel Hobby. GitHub + Vercel chosen by Andrés; Astro recommended in the research plan he approved.

## Users

- **Recruiters and talent partners** screening for senior design roles. Skim in under three minutes, often on a phone, forwarding links to hiring managers. Need role, seniority, domains and contact within the first viewport.
- **Hiring managers and design leaders** reading two or three case studies in depth after a shortlist. Judge decisions under constraint, personal contribution ("I", not "we"), and shipped results.

Target roles (confirmed): Senior Product/UX Designer, Design Lead / Manager, and UX + Brand hybrid roles.

## Product Purpose

The personal portfolio of Andrés Velasco, a senior UX/UI and brand designer based in Saint Paul, Minnesota. It exists to get him shortlisted and interviewed for the target roles. Success: a stranger can name his role, level, domains and top two projects after five seconds on the homepage, and every case study answers problem, role, decisions and result within its first screen.

## Positioning

Three things together, which a neighbouring portfolio can't truthfully copy (confirmed by Andrés):

1. **UX and brand in one person.** 15+ years spanning brand identity, campaigns and print (Harris County Public Health identity, conference systems) and product UX/UI (enterprise portals, design systems, internal tools).
2. **Regulated, complex industries.** Healthcare (HealthPartners, Twin Cities Orthopedics/Revo, Partners in Excellence), insurance (American National, ProAg crop insurance, Intact), agriculture (Cargill, ProAg), HR/professional education (Holmes Corp/SHRM).
3. **A designer who builds.** Ships with code and AI tools (HTML/CSS background as web master; now builds and deploys with Claude Code and Vercel). This site is itself evidence.

Also true and useful: bilingual English/Spanish; consultant at SDG (Solution Design Group) since March 2020.

## Operating Context

- Reviewers arrive from LinkedIn, a recruiter email, or an application tracking system; many open on mobile first.
- Links are forwarded, so every case study needs its own shareable URL and a strong link preview.
- Some screeners run AI-assisted parsing: name and role belong in page titles and meta, and essential text is never baked only into images.
- The work is client work done as a consultant, so contribution must be stated in first person and NDA limits respected.

## Capabilities and Constraints

- **Pages:** Home, Work (index), case studies, About, Resume. One level of navigation; contact (email, LinkedIn, resume) reachable from every page.
- **Featured case studies (confirmed):** Cargill, American National, HealthPartners, ProAg.
- **Selected work gallery:** Holmes Corp/SHRM, CAS, Harris County Public Health, EXCEL (Revo), Habits to Health (Revo), Partners in Excellence, Intact Insurance, Next Level Partners, DAP website audit.
- **NDA handling:** public pages show anonymized, "portfolio-safe" screens with business-specific details replaced by placeholders. Client logos and brand colours may be shown. A password-protected tier holds deeper material (files under `password only` folders). Protected pages are `noindex` and excluded from the sitemap; their images must not ship as public build assets.
- **Figma:** his Figma account is owned by SDG, so nothing links to or embeds Figma. Local exports are fine.
- **Prototypes are not rebuilt.** Static screens illustrate ideas.
- **Open decisions:** personal email, LinkedIn URL and resume PDF are placeholders until Andrés supplies them; domain name undecided; password mechanism (free middleware vs. Vercel Pro) to be settled before the protected tier launches.

## Brand Commitments

- Name as he writes it: **Andrés Velasco**.
- Existing personal identity from his previous portfolio deck (evidence, not yet confirmed as binding): deep teal-slate colour, a geometric grotesk typeface, a personal photo, and the line "Efficiency through empathy" with the supporting statement "Quickly building strong working relationships within organizations and collaborating with business partners for great outcomes."
- Voice: plain, confident, first person; no inflated claims.

## Evidence on Hand

- Resume with per-project responsibilities: `/mnt/user-data/uploads/Portfolio/Andrés Velasco-Resume.docx` (source of truth for role descriptions).
- Previous portfolio deck (29 pages, includes ProAg design system pages 15–18): `/mnt/user-data/uploads/Portfolio/Andrés Velasco's Portfolio.pdf`.
- Cleaned, portfolio-safe screens per project in `/mnt/user-data/outputs/` (american-national incl. desktop/, cargill/final, hp, medopt, holmes, rest) and on his Mac under `~/Desktop/Portfolio/<project>/portfolio-safe/`.
- American National flow is live at annuities.americannational.com; My Cargill is live at mycargill.com.
- Verified figures from the resume: Harris County site served 4.7 million residents; HealthPartners Specialty Pharmacy Network covered 25+ pharmacies and 12 vendors (per the deck).
- **Absent, must not be fabricated:** outcome metrics (conversion, time saved, revenue) for any project, testimonials, awards, press. Use concrete problem/result statements instead of invented numbers.

## Product Principles

1. **Five-second clarity beats cleverness.** Role, level, domains and top work come first, on every viewport.
2. **The work leads.** Real screens, large and zoomable; interface chrome recedes.
3. **Show his decisions, in his voice.** First person, constraints named, alternatives rejected.
4. **Truth over polish.** No invented metrics, logos or testimonials; anonymization is labelled.
5. **The site proves the claim.** Fast, accessible, hand-built: evidence that he designs and builds.

## Accessibility & Inclusion

WCAG 2.2 AA: 4.5:1 text contrast, visible focus, skip link, one H1 per page, alt text on every image, keyboard-operable image zoom with Esc, reduced motion honoured, targets ≥ 24px. Bilingual audience is possible, but the site launches in English.
