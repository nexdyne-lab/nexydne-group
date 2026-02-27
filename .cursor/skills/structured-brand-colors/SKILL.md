 ---
name: structured-brand-colors
description: Implements a structured brand color system with global design tokens (CSS variables and Tailwind theme), semantic color hierarchy, interaction states, and accessibility. Use when adding or refactoring brand colors, replacing hardcoded hex values, or when the user asks for a brand color system, design tokens, or consistent color styling across the project.
---

# Structured Brand Color System

Apply a consistent brand color system using global tokens. Do not change layout, spacing, or typography—only color styling.

## 1. Define Global Color Tokens

**Tailwind v4 (`@theme inline` + `:root`):**

Add brand tokens in your main CSS (e.g. `index.css`):

```css
@theme inline {
  /* Brand tokens - use hex for clarity */
  --color-base: #000080;           /* Deep Navy - structure */
  --color-primary: #005CFF;       /* Vivid Blue - actions */
  --color-primary-hover: #0047cc; /* Darkened primary */
  --color-secondary: #2291FA;     /* Azure - support, focus */
  --color-charcoal: #1A1A1A;      /* Dark neutral */
  --color-text-light: #F5F7FA;    /* On dark backgrounds */
  --color-text-dark: #111111;     /* On light backgrounds */
  --color-on-dark: #F5F7FA;      /* Alias for utilities */
}

:root {
  --primary: var(--color-primary);
  --primary-foreground: var(--color-text-light);
  --ring: var(--color-secondary);
  --foreground: var(--color-text-dark);
  /* Map card, popover, sidebar as needed */
}
```

**Plain CSS/SCSS:** Define the same hex values in `:root` and use semantic names (e.g. `--brand-base`, `--brand-primary`). Replace hardcoded hex with `var(--brand-base)` etc.

## 2. Color Hierarchy Rules

| Token | Use for |
|-------|--------|
| **Base** | Main backgrounds, header, footer, hero, section dividers, major dark sections |
| **Primary** | Primary buttons, CTAs, active nav links, important highlights, badges |
| **Secondary** | Link hover, icons, secondary buttons, focus rings, underlines, subtle highlights |
| **Charcoal** | Body text on light backgrounds, dark panels, overlays, cards on light sections |
| **Text light** | All text on base/dark backgrounds |
| **Text dark** | Body and headings on white/light backgrounds |

Keep hierarchy: Base → structure; Primary → action; Secondary → support; Charcoal → typography and depth. Do not oversaturate with one hue.

## 3. Where to Apply

- **Header:** Base or white background; charcoal text when light, text-light when on base; active/hover nav → primary.
- **Footer:** Base or white; links/icons hover → primary; primary button for main CTA.
- **Hero:** Base background; text-light; progress/active indicators → primary.
- **Navigation:** Default text per context (charcoal on light, text-light on dark); hover/active → primary.
- **Buttons:** Primary = `bg-primary` / `hover:bg-primary/90` or `var(--color-primary-hover)`; secondary = outline with primary or secondary.
- **Links:** Underline or color secondary; hover → primary. Use `transition: color 0.2s ease-in-out`.
- **Cards:** Background white or subtle; titles hover → primary; borders/accents → primary or secondary as appropriate.
- **Icons:** Default inherit or charcoal; hover/active → primary or secondary.
- **Form inputs:** Focus ring → secondary (Azure); `transition: box-shadow 0.2s ease-in-out`.

## 4. Interaction States

- **Transitions:** Use `transition: all 0.2s ease-in-out` (or `color`, `background-color`, `border-color` as needed) on buttons, links, and interactive elements.
- **Hover:** Buttons darken ~8–12% or use `--color-primary-hover`; links shift to primary or secondary.
- **Focus:** Visible focus ring (e.g. 2px) using secondary; `:focus-visible` preferred.
- **Active:** Slightly darker than hover where it helps clarity.

Ensure links and buttons have a clear hover and focus state.

## 5. Accessibility

- Maintain WCAG AA contrast: light text on dark (base), dark text on light.
- Avoid vivid accent text on navy/base; use text-light on base.
- Buttons and CTAs must stay highly readable (e.g. text-light on primary).

## 6. Replacing Hardcoded Hex

1. Add or confirm tokens in `@theme` / `:root` as above.
2. Replace in components:
   - `bg-[#…]` → `bg-base` / `bg-primary` / `bg-charcoal` as per hierarchy.
   - `text-[#…]` → `text-charcoal` / `text-primary` / `text-secondary` / `text-on-dark`.
   - `border-[#…]` → `border-primary` / `border-secondary` / `border-charcoal`.
   - Gradients: `from-base`, `to-base`, `via-base` (or primary/secondary where appropriate).
3. Opacity: use Tailwind opacity modifiers, e.g. `bg-primary/20`, `text-charcoal/70`.
4. Bulk replace: use consistent patterns (e.g. old navy hex → base, old accent hex → primary, old link blue → secondary) across TSX/CSS.

## 7. Logo and Balance

- Leave existing logo colors unchanged unless explicitly requested.
- Do not overuse primary/secondary; keep visual hierarchy so base provides structure and primary draws attention to actions.

## Summary Checklist

- [ ] Tokens defined in `@theme` and/or `:root` with semantic names
- [ ] Header, footer, hero, nav, buttons, links, cards, icons, form focus use tokens
- [ ] Hover/focus use 0.2s ease-in-out and clear state change
- [ ] Light text on dark backgrounds; dark text on light; buttons readable
- [ ] Hardcoded hex replaced with token-based classes or variables
