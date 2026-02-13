# F100: Bain-Style Capability Page Framework

This document defines the standard formatting framework for capability subpages, inspired by Bain & Company's professional consulting website design.

## Page Structure (8 Sections)

### 1. Hero Section (Dark Background - Black)
- **Breadcrumb link** back to parent capability page (e.g., "← Operations")
- **Large serif heading** (text-5xl to text-7xl) with page title
- **Descriptive paragraph** (text-xl to text-2xl, white/70 opacity)
- **Two CTA buttons**: Primary (white bg) and Secondary (outline)
- **Hero image** on the right side (hidden on mobile)

```tsx
<section className="relative min-h-[70vh] flex items-center pt-20 bg-black">
```

### 2. Our Experience & Impact (White Background)
- **Section heading**: "Our Experience & Impact" (text-2xl font-bold)
- **3 metrics** in a grid with border-left separators
- **Large numbers** (text-5xl to text-6xl font-bold)
- **Supporting text** below each metric (text-lg, 60% opacity)

```tsx
<section className="py-20 bg-white border-b border-gray-200">
```

### 3. Thought Leadership Paragraphs (White Background)
- **4 paragraphs** of strategic content
- **Max width container** (max-w-4xl mx-auto)
- **Text styling**: text-xl, 80% opacity, relaxed leading
- **Staggered animation** with increasing delays

```tsx
<section className="py-20 bg-white">
```

### 4. Our Approach (Dark Navy Background - #0a1628)
- **Section label**: "Our Approach" (uppercase tracking, cyan color)
- **Section heading**: Descriptive title (text-4xl to text-5xl serif)
- **3-column grid** with approach steps
- **Each column**: Title (text-xl bold) + Description (white/70)
- **CTA button** centered below

```tsx
<section className="py-24 bg-[#0a1628] text-white">
```

### 5. How We Can Help - Capability Cards (Light Gray Background - #f8f8f7)
- **Section label**: "How We Can Help" (uppercase tracking, cyan)
- **Section heading**: "Our [Topic] Capabilities"
- **Supporting paragraph** (text-xl, 60% opacity)
- **6 cards** in 2x3 or 3x2 grid
- **Card styling**: White bg, gray border, hover effects (border-cyan, shadow)

```tsx
<section className="py-24 bg-[#f8f8f7]">
```

### 6. Client Results (White Background)
- **Section label**: "Client Results" (uppercase tracking, cyan)
- **Section heading**: "Driving [topic] transformation"
- **2 case study cards** with:
  - Category badge (cyan bg)
  - Image with hover zoom effect
  - Title (serif font)
  - Description paragraph
  - "Read case study" link with arrow

```tsx
<section className="py-24 bg-white">
```

### 7. Latest Insights (Light Gray Background - #f8f8f7)
- **Section label**: "Insights" (uppercase tracking, cyan)
- **Section heading**: "Latest Insights"
- **Supporting text** + "View all insights" button
- **3 insight cards** with:
  - Category + read time
  - Title (serif font)
  - Description
  - "Read article" link with arrow

```tsx
<section className="py-24 bg-[#f8f8f7]">
```

### 8. Related Capabilities (White Background)
- **Section label**: "Related Capabilities" (uppercase tracking, cyan)
- **Section heading**: "Explore related capabilities"
- **3 capability cards** (dark navy bg - #0a1628):
  - Icon in cyan/20 bg circle
  - Title with hover color change
  - Description (white/60)
  - "Learn more" link with arrow

```tsx
<section className="py-24 bg-white">
```

### 9. CTA Section (Cyan Background - #0077B5)
- **Centered content**
- **Heading** (text-4xl to text-5xl serif, white)
- **Supporting paragraph** (text-xl, white/80)
- **Primary CTA button** (white bg, dark text)

```tsx
<section className="py-24 bg-[#0077B5]">
```

---

## Color System

| Element | Color Code | Usage |
|---------|------------|-------|
| Primary Text | `#051C2C` | Headings, body text on light bg |
| Accent/Cyan | `#0077B5` | Labels, links, hover states, CTA bg |
| Dark Navy | `#0a1628` | Dark section backgrounds |
| Light Gray | `#f8f8f7` | Alternate section backgrounds |
| White | `#ffffff` | Primary backgrounds, button text |

---

## Typography

- **Headings**: `font-serif font-bold` (Georgia/Times-like)
- **Body**: `font-sans` (system font stack)
- **Labels**: `text-xs font-bold uppercase tracking-[0.2em]`
- **Metrics**: `text-5xl md:text-6xl font-bold`

---

## Animation Pattern

All sections use Framer Motion with:
```tsx
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5, delay: index * 0.1 }}
```

---

## Card Hover Effects

```tsx
className="hover:border-[#0077B5]/50 transition-all duration-300 hover:shadow-lg"
```

For links with arrows:
```tsx
className="group-hover:translate-x-2 transition-transform duration-300"
```

---

## Required Imports

```tsx
import { motion } from "framer-motion";
import { ArrowRight, [icons] } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
```

---

## Example Implementation

See these files for reference implementations:
- `/client/src/pages/operations/SupplyChain.tsx`
- `/client/src/pages/operations/ProcessAutomation.tsx`
- `/client/src/pages/operations/QualityManagement.tsx`
- `/client/src/pages/operations/ProductionOptimization.tsx`
- `/client/src/pages/operations/WorkforceOptimization.tsx`
- `/client/src/pages/operations/PerformanceAnalytics.tsx`

---

## Checklist for New Pages

- [ ] Hero section with breadcrumb, heading, description, 2 CTAs, image
- [ ] Our Experience & Impact with 3 metrics
- [ ] 4 thought leadership paragraphs
- [ ] Our Approach with 3 columns
- [ ] How We Can Help with 6 capability cards
- [ ] Client Results with 2 case studies
- [ ] Latest Insights with 3 articles
- [ ] Related Capabilities with 3 linked capabilities
- [ ] CTA section with heading, description, button
- [ ] SEO component with title, description, canonical URL
- [ ] Navbar and Footer components
