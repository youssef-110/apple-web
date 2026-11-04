# Anti-slop

Patterns that make a page read as AI-generated, and the Apple-style replacement.

| Slop | Fix |
| --- | --- |
| Purple-to-blue gradient hero, glowing blobs | Black or `#f5f5f7` section; the product is the only color. |
| Three feature cards with an icon in a colored circle | One feature per section: headline, gray intro, big visual. |
| "Unlock", "Elevate", "Seamless", "Supercharge", "Next-level" | Concrete claim with a number: "Up to 24 hours of battery." |
| Headline as a question ("Ready to transform…?") | Statement with a period. |
| Emoji in headings or bullets | None. Ever. |
| Bold 700–800 headlines, mixed fonts | One family, weight 600 for headlines. |
| One `letter-spacing` for all text | Size-specific tracking from the type classes. |
| Big drop shadows on cards, colored glows | Flat tiles; depth from contrast and translucency only. |
| Two equal CTAs side by side everywhere | One blue pill per section, or a `›` text link. |
| Everything fades in on load with bounce | Reveal once on scroll with `cubic-bezier(.25,.1,.3,1)`, no overshoot. |
| Testimonials carousel, logo wall, pricing table with "Most popular" badge | Stats with footnotes; a compare row of products. |
| Center-aligned paragraphs of 6+ lines | Intro max ~3 lines; long copy left-aligned at 980px max. |
| Gray-on-gray low contrast body | `#86868b` on black passes; on white use `#6e6e73` or `#1d1d1f`. |
| Badges like "NEW ✨" in pill gradients | "New" as an orange 12px eyebrow (`#bf4800`), plain text. |
| Placeholder stock photo of people at laptops | Product render, or a crafted CSS/SVG visual. Never generic stock. |
