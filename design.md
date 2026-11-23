# Design: Mospace website

The locked design system for this site. Every page reads this file before emitting code. Amend this file when the system needs to grow; do not override it per page. The palette and type come from the Mospace macOS app (`BazaarSimulator/Core/DesignSystem/Tokens`), so the site looks like the app it describes.

## Genre

Atmospheric. Dark navy canvas with two fixed radial glows (blue top left, warm orange right), the same treatment as the app's sidebar.

## Macrostructure family

- Marketing (`/`): 19 Map / Diagram. One hand-built SVG floor plan organises the page. Five numbered zones on the plan (Import, Edit, Visitors, Simulate, Analyze) each link to a short note below or beside the map. Heat-coloured crowd spots on the plan use the heat tokens. One outlined CTA below the map, linking to support.
- Content (`/privacy`, `/support`): 02 Long Document. A single readable column, inline section heads, no cards. Support uses question-as-heading blocks in the same column.

## Theme

- `--color-paper` oklch(15.5% 0.049 254), app background #000C20
- `--color-paper-2` oklch(24.0% 0.048 261), app surface #121F36
- `--color-paper-3` oklch(20.6% 0.044 260), app sidebar #0B172B
- `--color-ink` oklch(89.8% 0 0), app primary text #DDDDDD
- `--color-ink-2` oklch(66.0% 0 0), app secondary text #929292
- `--color-rule` oklch(30.7% 0.044 259), app surface border #223046
- `--color-accent` oklch(70.2% 0.196 41), logo orange #FF6A2A
- `--color-accent-ink` oklch(15.5% 0.049 254), navy text on orange
- `--color-link` oklch(67.4% 0.099 249), app accent text #659BD1
- `--color-focus` oklch(67.4% 0.099 249)
- `--color-glow-blue` oklch(27.6% 0.081 260), app glow #0E264F
- `--color-glow-warm` oklch(30.7% 0.027 15), app glow #3C2A2B
- `--color-plan-line` oklch(42.2% 0.106 255), app canvas line #1F4E86
- `--color-heat-low` oklch(78.2% 0.176 142), `--color-heat-mid` oklch(90.7% 0.193 107), `--color-heat-orange` oklch(72.3% 0.183 53), `--color-heat-high` oklch(63.0% 0.238 32)

Orange appears on the primary CTA, the zone numerals on the map, and the focus of the floor plan. It stays under 5 percent of any viewport. Never on display text, never as gradient text.

## Typography

- Display: system SF Pro Display stack (`-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif`), weight 700, tracking -0.03em, roman only.
- Body: system SF Pro Text stack, weight 400, line height 1.6, measure 66ch on content pages.
- Mono: `ui-monospace, "SF Mono", Menlo, monospace`, weight 500, for zone numerals and small map labels only.
- Display scale: `--text-display` clamp(2.5rem, 5vw + 1rem, 4.5rem). Hero headline 7 words or fewer.

## Spacing and radius

4-point named scale in `tokens.css` (`--space-3xs` to `--space-3xl`). Radius: `--radius-card` 14px, `--radius-pill` 999px, `--radius-input` 10px, matching the app's 10 to 16px corners.

## Motion

- `--ease-out` cubic-bezier(0.16, 1, 0.3, 1), `--dur-short` 220ms.
- Reveal: fade only. The five map zones fade in one after another on first view, capped at five.
- Reduced motion: no reveal, everything visible.

## Microinteractions

- Hover on a map zone raises its outline to the accent and underlines its note link; focus shows the same instantly.
- Links: `--color-link`, underline on hover and focus.
- No toasts, no counters, no scroll-linked effects.

## CTA voice

- Primary: pill, orange fill, navy text, used once per page at most.
- Secondary: pill, 1px rule border, ink text.

## Chrome

- Nav: N5 floating pill, centred, blur over the canvas: icon plus "Mospace", then Home, Privacy, Support.
- Footer: Ft5 statement. One sentence, "Your floor plans stay on your Mac.", then "© 2026 Wiraprasoneva Devs" and the contact email.

## What pages must share

The app icon (`public/mospace-icon.png`), the canvas glows, the type stacks, the CTA voice, the nav and footer.

## Content rules

macOS only, requires macOS 27. Never mention iPhone, iPad, iOS, Apple Watch or watchOS. Developer is Wiraprasoneva Devs. Contact email arya.pras17@gmail.com. Features limited to what the app does: import a PDF legend and PDF floor plan, edit the layout, set visitors, run a 3D crowd simulation, analyse and compare layouts. All data stays on the user's Mac. No invented numbers, testimonials, screenshots or prices. No em dashes.
