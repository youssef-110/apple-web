# Page anatomy

The order an apple.com product page uses, and the library component for each part.
Build in this order; drop sections you have no content for rather than padding them.

1. **Global nav** (`.globalnav`) — 44px, logo left, 8–10 caption-size links, search/bag icons.
   Translucent black. Keep it simple: on a non-Apple site this is the brand's site nav.
2. **Ribbon** (`.ribbon`) — one line of 14px text with a blue `›` link. Offers, launch dates.
3. **Local nav** (`.localnav`) — sticky 52px bar: product name (21px/600) left; caption links and a
   small blue pill ("Buy") right. Gains blur and a hairline when stuck.
4. **Hero** (`.hero`) — eyebrow (product name, 21px), giant short headline (64px), availability
   line and price (14px), one product visual filling the width. Black background.
5. **Highlights** (`.section-header` + `.gallery`) — "Get the highlights." header with a text link,
   then a horizontal snap gallery of rounded tiles with a caption in each and dots + play/paddles.
6. **Feature sections** (`.lockup`) — eyebrow word, 48px headline, 21px gray intro paragraph with
   white highlighted phrases, then a big visual. Repeat per feature: display, performance, battery…
7. **Stat block** (`.stats`) — 40px centered statement, then 2–4 columns: a small label, a big number
   (`data-count`), a unit. Numbers count up once on reveal.
8. **Scroll moment** (`.scrub`) — one tall section where a visual transforms with scroll progress
   (`--p` from 0 to 1). Use for one hero-level product moment, not everywhere.
9. **Tile grid** (`.tiles`) — 2–3 column rounded tiles mixing text-only and media tiles.
10. **Compare** (`.compare`) — product cards on white: name, color dots, price, Buy pill, "Learn more ›".
11. **Footnotes** (`.footnotes`) — numbered 12px gray notes that back every claim marked `¹`.
12. **Footer** (`.footer`) — 12px link columns on `#f5f5f7`.

## Copy pattern

- Eyebrow: the feature name, one or two words.
- Headline: short, declarative, ends with a period. Plays on one idea. "Brighter. Everywhere."
- Intro: 2–3 sentences, gray. Wrap the one key claim in `<strong>` to light it up.
- CTA: "Buy", "Learn more ›", "Watch the film ›". Never "Get started now!".
