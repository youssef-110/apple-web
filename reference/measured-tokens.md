# Measured tokens

Measured with `getComputedStyle` on a live apple.com product page (German MacBook Pro page,
4 Nov 2026, 1440px viewport). These are numeric facts about the layout, not Apple's code.
`library/apple-web.css` encodes them as custom properties and classes.

## Type scale

Apple switches between two optical cuts: **SF Pro Text below 20px, SF Pro Display at 20px and up.**
Tracking follows the cut: Text is tracked tight, Display is tracked slightly open, and only very
large Display sizes go negative again.

| Role (library class) | Size / line-height | Tracking (px → em) | Weight | Measured on |
| --- | --- | --- | --- | --- |
| `.t-hero` | 64 / 68 | -0.576 → -0.009em | 600 | hero headline |
| `.t-headline` | 48 / 52 | -0.144 → -0.003em | 600 | section lockup headline |
| `.t-section` | 40 / 44 | 0 | 600 | "The highlights." style headers, stat headline |
| `.t-headline-reduced` | 32 / 36 | +0.128 → +0.004em | 600 | sub-section headline |
| `.t-eyebrow-large` | 28 / 32 | +0.196 → +0.007em | 600 | big tout / stat label |
| `.t-eyebrow` | 21 / 25 | +0.231 → +0.011em | 600 | product-name eyebrow above hero |
| `.t-intro` | 21 / 29 | +0.231 → +0.011em | 400 | large gray intro copy |
| `.t-body-large` | 19 / 27 | +0.228 → +0.012em | 400 | modal / large body |
| `.t-body` | 17 / 25 | -0.374 → -0.022em | 400 | body, links, CTA lists |
| `.t-body-reduced` | 14 / 20 | -0.224 → -0.016em | 400 | banners, pricing line |
| `.t-caption` | 12 / 16 | -0.12 → -0.01em | 400 | nav links, footnotes |

Responsive: at ≤1068px the hero drops to 56px and headlines one step; at ≤734px hero 40px,
headline 32px, section 32px, intro 19px.

Font stack measured: `"SF Pro Display" | "SF Pro Text", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif`.
SF Pro is licensed only for Apple platforms, so the library uses
`-apple-system, BlinkMacSystemFont` (which resolves to SF Pro on Apple devices) and **Inter**
as the cross-platform fallback.

## Color

| Token | Value | Use |
| --- | --- | --- |
| `--c-black` | `#000000` | dark section background (most sections on this page) |
| `--c-ink` | `#1d1d1f` | text on light, light-theme body color |
| `--c-snow` | `#f5f5f7` | text on dark, light-gray section background |
| `--c-mist` | `#e8e8ed` | nav submenu links, hairlines on light |
| `--c-gray` | `#86868b` | secondary text, footnotes, captions |
| `--c-gray-dark` | `#6e6e73` | intro copy (gray) on dark, with white highlights |
| `--c-graphite` | `#1d1d1f` / `#2a2a2d` | tiles on dark |
| `--c-blue` | `#0071e3` | buttons |
| `--c-link-dark` | `#2997ff` | text links on dark |
| `--c-link` | `#0066cc` | text links on light |

Translucent surfaces measured:
- Nav curtain: `rgba(0,0,0,.4)` + `blur(20px)`.
- Floating panel on dark: `rgba(42,42,45,.72)` + `blur(7px)`.
- Control chips: `rgba(66,66,69,.72)`; on light `rgba(210,210,215,.64)`.

## Shape

| Token | Value | Use |
| --- | --- | --- |
| `--r-pill` | `980px` | all buttons |
| `--r-tile` | `28px` | large media tiles (most common radius after 5px) |
| `--r-tile-lg` | `36px` | hero-size tiles |
| `--r-card` | `18px` | small cards |
| `--r-sm` | `5px` | inputs, tiny chips |

Buttons: 14px text → padding `8px 15px`; 17px text → padding `11px 21px`. Weight 400.

## Layout

- Max widths seen: 980 (text column), 1024, 1260 (content), 1440 (viewport), 1680 (wide media).
- Breakpoints: **1068px**, **734px** (dominant), plus 1441px (wide), 833px and 480px for edge cases.
- Section padding: 120px top, 120px or 176px bottom on desktop.
- Global nav: 44px tall. Local nav: 52px, `position: sticky; top: 0`, transparent until stuck.
- Side gutters: 22px on small screens (`max-width: calc(100% - 44px)` pattern).

## Motion

- Dominant easing: `cubic-bezier(0.4, 0, 0.6, 1)` (symmetric ease-in-out, gentler than CSS `ease-in-out`).
- Also present: `ease`, `ease-out`, `cubic-bezier(0.25, 0.1, 0.3, 1)`, `cubic-bezier(0.28, 0.11, 0.32, 1)` (soft decelerate for reveals).
- Durations by frequency: 320ms color, 240ms opacity, 100ms opacity/background (hover), 344ms background-color, 300ms transform, 400ms opacity.
- Scroll-linked elements ("fade-gallery", "staggered-start") reveal as they enter; product sequences are scrubbed by scroll position.
