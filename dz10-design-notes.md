# DZ10 Design System Notes

## Current Growth, Marketing & Sales Page Analysis

The main GrowthMarketingSales.tsx page already has DZ10 design applied:

### DZ10 Design Elements Identified:
1. **Color Scheme**: 
   - Primary background: #051C2C (deep navy)
   - Accent color: #0077B5 (electric blue)
   - White sections for contrast
   - Text colors: white/60, white/70 for muted text

2. **Typography**:
   - Font-serif for headings
   - Uppercase tracking-[0.2em] for labels
   - text-xs font-bold for category labels

3. **Section Structure**:
   - Hero with background image and gradient overlay
   - Philosophy section (white bg)
   - Offerings grid (dark bg)
   - Extended capabilities (white bg)
   - Case studies (dark bg)
   - Related capabilities
   - Related content/insights

4. **Card Styling**:
   - Hover effects with scale and color transitions
   - Icon boxes with bg-white/5 or bg-[#0077B5]/10
   - Group hover states for interactive elements
   - ArrowRight icons that appear on hover

5. **Spacing**:
   - py-24 md:py-32 for sections
   - gap-10 for grids
   - mb-16 for section headers

## Subpages to Update with DZ10:
Based on the images provided, the subpages need to be updated:

### Primary Capabilities (6):
1. Growth Strategy
2. Marketing Operations
3. Consumer & Shopper Insights
4. Customer Experience
5. Pricing & Monetization
6. Sales Excellence

### Specialized Capabilities (8):
1. Digital Marketing
2. E-commerce
3. MarTech Stack
4. Retention & Loyalty
5. Green Growth
6. Personalization at Scale
7. Insights & Analytics
8. Portfolio Optimization

## Current Subpage Style (GrowthStrategy.tsx):
- Uses white background with slate colors
- Editorial style with prose sections
- Sidebar layout with experts
- NOT using DZ10 design system
- Has good content that needs to be preserved

## Required Changes for Subpages:
1. Change from white/slate to #051C2C/white scheme
2. Apply DZ10 hero section style with background image and gradient
3. Use DZ10 card patterns for capabilities
4. Add proper section structure with alternating dark/white backgrounds
5. Maintain ALL existing text/copy content
6. Add breadcrumbs component
7. Use font-serif for headings
8. Apply proper spacing (py-24 md:py-32)
9. Add Related Content section
10. Keep case studies and insights sections
