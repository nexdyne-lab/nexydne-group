# H100 - Bain-Style Hover Effect

A sophisticated card hover interaction pattern inspired by Bain & Company's website. This effect creates an engaging reveal animation where the card title shrinks and description text fades in on hover.

---

## Visual Behavior

### Default State
- **Large bold title** (text-2xl font-serif font-bold)
- **Description hidden** (max-h-0, opacity-0, overflow-hidden)
- **"Read More →"** link in red (#CC0000) at bottom
- **White background** with subtle gray border
- **Transparent left border** (border-l-4 border-l-transparent)

### Hover State
- **Title shrinks** (text-base) with smooth transition
- **Description fades in** (max-h-[120px], opacity-100, mt-3)
- **Red left border appears** (border-l-[#CC0000])
- **Arrow translates right** (translate-x-1)

---

## Implementation Code

```tsx
<Link href={item.link} className="group block h-full">
  <div className="h-full min-h-[200px] p-8 bg-white border-l-4 border-l-transparent group-hover:border-l-[#CC0000] border border-gray-200 transition-all duration-300 flex flex-col">
    <div className="flex-1">
      <h3 className="text-2xl font-serif font-bold text-[#051C2C] leading-tight origin-top-left transition-all duration-300 group-hover:text-base group-hover:mb-2">
        {item.title}
      </h3>
      
      <p className="text-[#051C2C]/70 leading-relaxed text-sm max-h-0 overflow-hidden opacity-0 group-hover:max-h-[120px] group-hover:opacity-100 group-hover:mt-3 transition-all duration-300 ease-in-out">
        {item.description}
      </p>
    </div>
    
    <div className="flex items-center text-[#CC0000] text-sm font-semibold mt-auto pt-4">
      Read More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
    </div>
  </div>
</Link>
```

---

## Key CSS Classes

| Element | Default Classes | Hover Classes |
|---------|----------------|---------------|
| Container | `h-full min-h-[200px] p-8 bg-white border-l-4 border-l-transparent border border-gray-200 transition-all duration-300 flex flex-col` | `group-hover:border-l-[#CC0000]` |
| Title | `text-2xl font-serif font-bold text-[#051C2C] leading-tight origin-top-left transition-all duration-300` | `group-hover:text-base group-hover:mb-2` |
| Description | `text-[#051C2C]/70 leading-relaxed text-sm max-h-0 overflow-hidden opacity-0 transition-all duration-300 ease-in-out` | `group-hover:max-h-[120px] group-hover:opacity-100 group-hover:mt-3` |
| Link/Arrow | `text-[#CC0000] text-sm font-semibold mt-auto pt-4` | Arrow: `group-hover:translate-x-1` |

---

## Color System

| Color | Hex Code | Usage |
|-------|----------|-------|
| Primary Text | `#051C2C` | Title, description |
| Accent Red | `#CC0000` | Left border, "Read More" link |
| Description Text | `#051C2C/70` | 70% opacity for secondary text |
| Background | `white` | Card background |
| Border | `gray-200` | Card border |

---

## Usage Guidelines

### Apply H100 to:
- "How We Can Help" capability card sections
- "Related Capabilities" sections
- Service listing cards on capability pages

### Do NOT apply H100 to:
- Case study cards (use image-based hover instead)
- Insight/blog article cards (keep description always visible)
- Methodology framework cards (no link interaction needed)
- Navigation menu items

---

## Data Structure

```tsx
const items = [
  {
    title: "Supply Chain Optimization",
    description: "Build resilient, cost-effective supply chains that adapt to disruption. Optimize inventory management, supplier relationships, and logistics networks.",
    link: "/capabilities/operations/supply-chain"
  },
  // ... more items
];
```

---

## Animation Timing

- **Transition duration**: 300ms (`duration-300`)
- **Easing**: ease-in-out for description reveal
- **All properties**: `transition-all` for smooth multi-property animation

---

## Accessibility Notes

- Uses semantic `<Link>` component for navigation
- `group` class enables hover state propagation to child elements
- Sufficient color contrast for text readability
- Arrow provides visual affordance for clickable action

---

## Related Documentation

- **F100**: Bain-Style Page Framework (full page layout structure)
- See `/docs/F100-bain-style-framework.md` for complete page template

---

*Last updated: February 2026*
