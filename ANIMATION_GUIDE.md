# Animation & Gradient Card Implementation Guide

This guide explains how to apply smooth fade-in animations and gradient card hover effects across all pages in the NEXDYNE website.

## Components Created

### 1. AnimatedSection Component
**Location:** `client/src/components/AnimatedSection.tsx`

A reusable component that adds fade-in animations to sections as they scroll into view.

**Usage:**
```tsx
import { AnimatedSection } from "@/components/AnimatedSection";

<AnimatedSection animation="fade-up" delay={100} className="py-20 bg-white">
  {/* Your section content */}
</AnimatedSection>
```

**Props:**
- `animation`: Type of animation (`"fade-up"`, `"fade-down"`, `"fade-left"`, `"fade-right"`, `"fade"`, `"scale"`)
- `delay`: Delay in milliseconds before animation starts (optional, default: 0)
- `duration`: Animation duration in milliseconds (optional, default: 600)
- `className`: Additional CSS classes

**Example Implementation:**
```tsx
// Replace regular <section> tags with <AnimatedSection>
// Before:
<section className="py-20 bg-white">
  <div className="container">
    {/* content */}
  </div>
</section>

// After:
<AnimatedSection animation="fade-up" delay={100} className="py-20 bg-white">
  <div className="container">
    {/* content */}
  </div>
</AnimatedSection>
```

### 2. GradientCard Component
**Location:** `client/src/components/ui/gradient-card.tsx`

A card component with cyan gradient border hover effects.

**Usage:**
```tsx
import { GradientCard } from "@/components/ui/gradient-card";

<GradientCard hoverScale={true} gradientIntensity="medium">
  {/* Your card content */}
</GradientCard>
```

**Props:**
- `hoverScale`: Enable scale animation on hover (optional, default: true)
- `gradientIntensity`: Gradient opacity (`"light"`, `"medium"`, `"strong"`, default: "medium")
- All standard div props (className, onClick, etc.)

### 3. Global CSS Utilities
**Location:** `client/src/index.css`

Added utility classes for quick gradient card effects:

```tsx
// Apply gradient card hover effect to any element
<div className="gradient-card-hover">
  {/* content */}
</div>
```

## Implementation Steps

### Step 1: Import Components
Add imports at the top of your page file:

```tsx
import { AnimatedSection } from "@/components/AnimatedSection";
import { GradientCard } from "@/components/ui/gradient-card";
```

### Step 2: Wrap Sections
Replace `<section>` tags with `<AnimatedSection>`:

```tsx
// Stagger animations with increasing delays
<AnimatedSection animation="fade-up" delay={0} className="py-20">
  {/* Section 1 */}
</AnimatedSection>

<AnimatedSection animation="fade-up" delay={100} className="py-20">
  {/* Section 2 */}
</AnimatedSection>

<AnimatedSection animation="fade-up" delay={200} className="py-20">
  {/* Section 3 */}
</AnimatedSection>
```

### Step 3: Apply Gradient Cards
Replace regular `<Card>` components with `<GradientCard>`:

```tsx
// Before:
<Card className="p-6">
  <h3>Service Title</h3>
  <p>Description</p>
</Card>

// After:
<GradientCard className="p-6" gradientIntensity="medium">
  <h3>Service Title</h3>
  <p>Description</p>
</GradientCard>
```

## Animation Best Practices

1. **Stagger Delays:** Use increasing delays (0, 100, 200, 300ms) for consecutive sections
2. **Consistent Animation:** Use `"fade-up"` for most sections for consistency
3. **Hero Sections:** Don't animate hero sections (keep them immediately visible)
4. **Performance:** AnimatedSection uses IntersectionObserver for efficient scroll detection

## Example: Complete Page Implementation

```tsx
import { AnimatedSection } from "@/components/AnimatedSection";
import { GradientCard } from "@/components/ui/gradient-card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function MyPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero - No animation */}
      <section className="py-32 bg-gradient-to-br from-[#0a0e3d] to-[#1a1f71]">
        <div className="container">
          <h1>Hero Title</h1>
        </div>
      </section>

      {/* Section 1 - Fade up */}
      <AnimatedSection animation="fade-up" delay={0} className="py-20 bg-white">
        <div className="container">
          <h2>Section 1</h2>
        </div>
      </AnimatedSection>

      {/* Section 2 - Fade up with delay */}
      <AnimatedSection animation="fade-up" delay={100} className="py-20 bg-blue-900">
        <div className="container">
          <div className="grid grid-cols-3 gap-6">
            <GradientCard className="p-6">
              <h3>Card 1</h3>
            </GradientCard>
            <GradientCard className="p-6">
              <h3>Card 2</h3>
            </GradientCard>
            <GradientCard className="p-6">
              <h3>Card 3</h3>
            </GradientCard>
          </div>
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  );
}
```

## Pages Already Updated

- ✅ `/services/ecommerce` - E-commerce page with full animations and gradient cards

## Pages To Update

Apply these patterns to:
- Homepage (`/`)
- All solution pages (`/solutions/*`)
- All case study pages (`/cases/*`)
- Insights pages (`/insights/*`)
- Other service pages

## Troubleshooting

**Animations not triggering:**
- Ensure `AnimatedSection` is imported correctly
- Check that sections have enough height to trigger intersection observer
- Verify `threshold` in `useScrollAnimation` hook (default: 0.1)

**Gradient cards not hovering:**
- Ensure `GradientCard` is imported from correct path
- Check that Tailwind CSS is processing the custom classes
- Verify cyan color values are defined in global CSS

**TypeScript errors:**
- Ensure all components are properly typed
- Check that `@/components` path alias is configured in tsconfig.json

## Color Palette Reference

**Block Collider-Inspired Colors:**
- Primary Blue: `#0a0e3d`, `#151a5f`, `#1a1f71`
- Cyan Accent: `#00d4ff`, `#00e5ff`
- White: `#ffffff`
- Text: `#0a0e3d` (on white), `#ffffff` (on blue)

Use these colors consistently across all pages for brand cohesion.
