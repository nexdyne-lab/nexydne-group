# The NexDyne Blueprint
**Design Standards & Page Architecture for Capability Pages**

This document serves as the single source of truth for all future capability pages, based on the finalized design of the **Generative AI** page. All new pages must strictly adhere to these standards to ensure consistency.

## 1. Core Color System

| Element | Color Name | Hex Code | Usage |
| :--- | :--- | :--- | :--- |
| **Primary Background** | Deep Navy | `#0a0e3d` | Used for the majority of the page (Hero, Content sections). |
| **Accent / Highlights** | Electric Blue | `#00d4ff` | Used for bullet points, icons, text highlights, and secondary buttons. |
| **CTA Background** | Royal Blue | `#2352ff` | **Strictly** used for the final "Impact" / Call-to-Action section at the bottom. |
| **Card Background (Default)** | Deep Navy | `#0a0e3d` | Cards blend into the background initially (often with a subtle border `border-white/10`). |
| **Card Background (Hover)** | White | `#ffffff` | "Midnight to Day" effect. |
| **Text (Dark Backgrounds)** | White / Slate | `text-white` / `text-slate-400` | Standard text on Deep Navy sections. |
| **Text (Light Backgrounds)** | Slate 900 | `text-slate-900` | Used inside cards when hovered (on white background). |

## 2. Component Behaviors

### The "Midnight to Day" Card Interaction
All feature/service cards must follow this specific hover interaction pattern:
*   **Default State:**
    *   Background: `#0a0e3d` (Deep Navy)
    *   Border: `border-white/10`
    *   Text: White / Slate 400
*   **Hover State:**
    *   Background: `bg-white`
    *   Text: Inverts to Dark (`text-slate-900` for headings, `text-slate-600` for body)
    *   Transition: Smooth `duration-300`
    *   *Note: This creates a high-contrast "light up" effect.*

### Buttons & Links
*   **Primary Buttons:** `bg-white text-[#0a0e3d]` (or Royal Blue text in CTA section). Rounded full (`rounded-full`).
*   **Secondary/Ghost Buttons:** `text-white border border-white/20 hover:bg-white/10`.
*   **Text Links:** `text-[#00d4ff]` (Electric Blue) with arrow icon.

### Visual Accents
*   **Bullet Points:** Must use **Electric Blue (`#00d4ff`)**. Do not use standard white bullets.
*   **Pill Tags:** **FORBIDDEN.** Do not use rounded "badge" or "pill" tags for categories. Keep the design clean.
*   **Dividers:** Subtle `border-white/5` for section separation.

## 3. Standard Page Architecture

Every capability page should follow this narrative flow:

1.  **Hero Section:**
    *   Deep Navy background.
    *   Strong, value-driven headline (No "hype" language).
    *   Subheadline focusing on business outcome.

2.  **Strategic Context / Stats:**
    *   High-impact numbers or a strategic statement setting the stage.

3.  **Methodology / Journey:**
    *   Step-by-step process (e.g., "The Path to Value").
    *   Uses the "Midnight to Day" cards.

4.  **Innovation / Labs Section:**
    *   (Optional but recommended) "NexDyne Labs" or "Innovation Hub" section.
    *   Focus on R&D and future-proofing.

5.  **Governance & Trust:**
    *   Dedicated section for Security, Compliance, or Ethics.
    *   Critical for the "Premium/Enterprise" trust factor.

6.  **Impact / CTA Section:**
    *   **MUST use Royal Blue (`#2352ff`) background.**
    *   Clear invitation to connect.

## 4. Content Guidelines
*   **Tone:** Professional, authoritative, understated. Avoid exclamation marks.
*   **Vocabulary:** Use "Strategic," "Enterprise-grade," "Scalable," "Governance." Avoid "Revolutionary," "Magic," "Game-changer."
*   **Formatting:** Use ample whitespace (`py-24` or `py-32` for sections).

---
*Reference: Derived from `GenerativeAI.tsx` evolution (Dec 2025).*

## 5. Content Originality & Voice
**Rule:** Never copy headers, titles, or key phrases directly from reference material.
*   **Transformation:** Always paraphrase and rebrand concepts to fit the "NexDyne" voice (authoritative, innovative, engineering-led).
*   **Verification:** Before finalizing any page, cross-check key terms against the source material to ensure distinctness.
