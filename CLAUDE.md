# Boards CoachingOnboarding Framework

## What this is
A Next.js-based onboarding framework prototype for Diligent Boards' trial experience. The project establishes a foundational layout and styling system with a custom design token palette (reds, greens, blues, ambers, purples) and typography (DM Sans and DM Serif Display). It integrates VibeSharing SDK for potential feedback or analytics. The framework is designed to support structured onboarding flows but currently shows only the initial setup without visible feature implementation.

## Key pages and components
- **Root layout** (`app/layout.tsx`) — Sets up the HTML structure, metadata, and loads the VibeSharing SDK
- **Home page** (`app/page.tsx`) — Contains the main onboarding UI with styled HTML, color variables, and typography setup; appears to be the primary entry point

## Tech stack
- **Framework:** Next.js (with TypeScript)
- **Styling:** CSS-in-JS (inline styles in page.tsx) with CSS custom properties (variables)
- **Fonts:** Google Fonts (DM Sans, DM Serif Display)
- **Third-party:** VibeSharing SDK (for feedback/analytics)
- **Build config:** next.config.mjs, tsconfig.json

## Current state
The project has a complete design system foundation (color palette, typography, reset styles) and layout structure in place, but the actual onboarding content and interactive components are not visible in the provided code snippets. The home page appears to be partially implemented with styling setup but lacks the full HTML/component structure needed to render the onboarding flow.