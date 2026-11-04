---
name: apple-web
description: Build web pages in the style of Apple's product marketing sites (apple.com product pages) — exact type scale, tracking, colors, easing, spacing, sticky translucent nav, scroll reveals, tile galleries, stat blocks — using a ready CSS/JS library. Use when the user asks for an Apple-like / apple.com-style site, a premium product landing page, a "no AI slop" marketing page, or references apple.com design, fonts or animation.
---

# Apple Web

Build product marketing pages that read like apple.com: quiet, confident, type-led, with
motion that serves the product. Every value in this skill was measured from a live apple.com
product page (Nov 2026) and is in `reference/measured-tokens.md`.

This is a style system, not a clone. Never copy Apple's copy, product names, logos,
photography, icons or font files. Write original content for the user's product.

## Files

| Path | Use |
| --- | --- |
| `library/apple-web.css` | Tokens, type classes, layout, components. Link it first. |
| `library/apple-web.js` | Scroll reveals, sticky nav state, scroll-scrub, galleries, count-up. No deps. |
| `demo/index.html` | Full working page using every component. Copy it as the starting point. |
| `reference/measured-tokens.md` | Raw measurements: type scale, colors, radii, easing, breakpoints. |
| `reference/page-anatomy.md` | How an Apple product page is sequenced, section by section. |
| `reference/anti-slop.md` | What makes a page look AI-made, and the Apple-style fix for each. |

## Workflow

1. Copy `library/` into the project. Link `apple-web.css` in `<head>` and `apple-web.js` with `defer`.
2. Start from `demo/index.html`. Keep the section order from `reference/page-anatomy.md`.
3. Write copy first. Headlines are 2–5 words with a full stop ("Fast. Really fast."). Body copy is gray with one white highlighted phrase.
4. Pick one theme per section: `theme-dark` (black) or `theme-light` (#f5f5f7) or `theme-white`. Alternate in long runs, never more than three in a row of the same.
5. Run the checklist below before calling it done.

## Rules that make it Apple

**Type**
- One family. System SF Pro on Apple devices, Inter elsewhere (the stack in the CSS handles it). No second display font, no serif accents.
- Weight 600 for every headline. 400 for body. Never 700–900, never 300.
- Tracking changes with size: negative at body (17px → -0.022em) and hero (64px+ → -0.009em), slightly positive at 19–32px. Use the type classes; never set one `letter-spacing` everywhere.
- Headlines are short and centered on marketing sections; left-aligned in lockups next to media.
- Body copy on dark sections is `#86868b`; emphasise a phrase with `<strong>` (renders `#f5f5f7`, same weight). No bold body.

**Color**
- Grayscale page. One accent: link/action blue `#0071e3` (dark sections use `#2997ff` for links). Color comes from product imagery, not UI.
- No gradients on UI or text, no glows, no colored shadows.

**Layout**
- Content width 980px for text, 1260px for media rows, 1440px max viewport. Breakpoints 1068px / 734px.
- Section padding 120px top / 120–176px bottom on desktop. Generous, never cramped.
- Rounded tiles: radius 28px on large tiles, 18px on small cards. Buttons are pills (980px radius).

**Motion**
- Easing `cubic-bezier(0.4, 0, 0.6, 1)` for UI state; durations 100ms (hover), 240ms (opacity), 320ms (color/nav), up to 1s for scroll reveals.
- Reveals are opacity + a 30–40px rise, once, when the element is ~15% into view. Stagger siblings by 80–120ms.
- Product moments use scroll-scrub (progress tied to scroll position), not autoplay.
- Hover on tiles: subtle scale 1.02 on the media inside, never the card shadow.
- `prefers-reduced-motion`: everything becomes an instant fade. The library does this.

**Navigation**
- 44px global nav, then a 52px sticky local nav with product name left, links + small blue "Buy" pill right. It turns translucent (`blur(20px) saturate(180%)`) once it sticks.

## Checklist (no AI slop)

- [ ] No emoji, no icon-in-a-circle feature grids, no "✨", no purple/teal gradients.
- [ ] Headlines are statements, not questions or "Unlock / Elevate / Seamless / Revolutionize".
- [ ] Every number in a stat has a unit and a footnote marker if it is a claim.
- [ ] Max one CTA style per section (blue pill or blue text link with `›`), never both big.
- [ ] Media dominates; text never sits in a card that floats over a busy gradient.
- [ ] Tracking set by class on every text element; no default browser bold.
- [ ] Footnotes section at the bottom in 12px `#86868b`.
- [ ] Checked at 1440, 1068, 734 and 375px widths, and with reduced motion on.

See `reference/anti-slop.md` for the full list with fixes.
