# apple-web

A Claude Code skill and a small CSS/JS library for building pages in the style of Apple's
product marketing sites: exact type scale and tracking, grayscale palette with one blue,
sticky translucent nav, scroll reveals, scroll-scrubbed product moments, snap galleries,
count-up stats, tiles, compare cards and footnotes.

Every value was measured from a live apple.com product page. See
[`reference/measured-tokens.md`](reference/measured-tokens.md).

## Install as a skill

```bash
git clone https://github.com/<you>/apple-web ~/.claude/skills/apple-web
```

Then ask Claude for "an apple.com-style landing page for …" or invoke `/apple-web`.

## Use the library directly

```html
<link rel="stylesheet" href="library/apple-web.css">
<script src="library/apple-web.js" defer></script>
```

Open `demo/index.html` through any static server (`python -m http.server`) to see every component.

## What's inside

```
SKILL.md                     rules, workflow, no-slop checklist
library/apple-web.css        tokens, type classes, layout, components, a11y media queries
library/apple-web.js         reveals, sticky nav, scroll-scrub, galleries, count-up (no deps)
demo/index.html              full page for a fictional product
reference/measured-tokens.md type scale, colors, radii, easing, breakpoints
reference/page-anatomy.md    section order and copy pattern
reference/anti-slop.md       AI-looking patterns and their fixes
```

## Fonts

SF Pro is licensed only for Apple platforms, so it is not bundled. The stack uses
`-apple-system` (which renders SF Pro on macOS and iOS) and falls back to Inter from Google Fonts.

## Legal

Not affiliated with or endorsed by Apple Inc. This repo contains no Apple code, copy, images,
icons or fonts. Only measured numeric values (sizes, colors, timings) inform the design.
The demo uses a fictional brand. MIT licensed.
