# Case-study pattern

Every leaf case study follows the same outline, so a reader can skim any of them the same way. The Cargill design system page is the reference.

## Top image

One cover per case study, made with the shared kit in `tools/covers` (see its README): a dotted tint of the client color, white cards, a left-to-right story connected by arrows, no words. Live public sites use a framed screenshot instead. Set `coverPosition: center` so tiles crop from the middle.

## Outline

1. **Context.** `## The challenge`, `## The problem` or `## Who they are`: why the work existed, in two short paragraphs at most.
2. **Summary of steps.** `## How the work ran` (or "How the flow runs" when the steps are the product's own flow) with a `<Process>` of three to six steps. Each step gets a short title and one line.
3. **Numbered steps.** One `<Step n={…}>` heading per Process step, same titles in the same order. Each holds the paragraphs and figures for that step.
4. **Result.** `## Result` (or "What came out of it"), only with outcomes that are confirmed. If there is none yet, leave a TODO, not a guess.

```mdx
import Process from '../../components/Process.astro';
import Step from '../../components/Step.astro';

## How the work ran

<Process label="How the work ran" steps={[
  { title: 'Audit', text: 'Review the legacy system and the teams using it.' },
  { title: 'Document', text: 'Write down the foundations and components.' },
]} />

<Step n={1}>Audit</Step>

Paragraphs and figures for the audit.

<Step n={2}>Document</Step>

Paragraphs and figures for the documentation.
```

## Rules

- Steps describe what was done, in the order it was done. When the work happened in parallel, the steps can follow the product's flow instead, and the label says so.
- Write steps only from confirmed material. Missing pieces become `{/* TODO(Andrés): … */}` comments, never invented detail.
- Proprietary screens stay wireframed or blurred on public pages; the rest goes behind the password with `<ProtectedNote>`.
- A page with too little material for steps (for example, the Harris County Public Health website) keeps its prose and a TODO until there is more.
