# Case-study covers

Every case study opens with one top image, and they all follow the same pattern so the site reads as one body of work. The scenes that produce them live here, so any cover can be changed and re-rendered.

## Render

```sh
node tools/covers/render.mjs                 # every scene
node tools/covers/render.mjs holmes intact   # only these
```

Each scene writes the file named in its `<meta name="out">`, as a 2400 × 1260 JPEG (1600 × 840 at 1.5×). It needs Playwright with Chromium.

## The pattern

1. **Canvas.** 1600 × 840, the same crop on tiles, case-study pages and social cards.
2. **Background.** A soft tint of the client color with a 28px dot grid in the client color at 10% opacity. `Cover.setColor()` derives the tint, soft, mid and dark tones from the client color, so scenes only pass the hex.
3. **Objects.** White cards with generous corners (18–28px) and one soft shadow (`#sh`); circles and badges use `#sh2`; framed screenshots use `#shBig`.
4. **Story.** Left to right, connected by arrows in the client color: the steps of the work or of the product's flow, ideally the same steps as the page's `<Process>`.
5. **No words.** Text is shown as bars. The only exception is type when type is the subject (a type specimen).
6. **Product truth.** Proprietary screens never appear: illustrate them as colorful wireframes. Live, public sites appear as real screenshots in a browser frame, with a phone frame where the mobile site holds up (`shots/`).
7. **Fit.** `Cover.draw()` measures the artwork and scales it to fill the canvas with 64px side margins, so the bounding box is always tight.

## Writing a scene

```html
<!doctype html><html><head><meta charset="utf-8">
<meta name="out" content="src/assets/work/client/cover.jpg">
<link rel="stylesheet" href="../kit.css"><script src="../kit.js"></script></head><body><script>
const C = Cover.setColor('#306CD0');
const { card, bar, arrow, screen } = C;
C.draw(card(0, 200, 300, 400) + arrow('M308 400 H368') + screen(380, 150, 500, 500, { kind: 'table' }));
</script></body></html>
```

Draw in any coordinates; the fit step centers and scales. Primitives in `kit.js`: `card`, `head`, `rect`, `bar`, `lines`, `circle`, `line`, `arrow`, `icon` (Material icons), `badge`, `avatar`, `pill`, `sticky`, `check`, `bars`, `ring`, `screen` (wireframe app window: table, form, dashboard, doc), `browser` and `phone` (frames for screenshots).

The four Cargill scenes predate the kit and are plain SVG/HTML that follow the same rules.
