# Boards CoachingOnboarding Framework

## What this is
A Next.js-based onboarding framework for Diligent Boards' trial experience, designed to guide new users through initial setup and feature discovery. The prototype establishes a branded, accessible interface with a professional design system (using Diligent's red, green, blue, and neutral color palette) and integrates VibeSharing SDK for potential feedback or analytics capabilities.

## Key pages and components
- **Home page** (`app/page.tsx`) — Main entry point with Diligent Boards branding, typography system (DM Sans and DM Serif Display), and foundational layout structure
- **Root layout** (`app/layout.tsx`) — Metadata, VibeSharing SDK integration, and global HTML structure
- **Global styles** (`app/globals.css`) — CSS reset and base typography rules

## Tech stack
- **Framework:** Next.js (with TypeScript)
- **Styling:** CSS-in-JS (inline styles in page.tsx) and global CSS
- **Fonts:** Google Fonts (DM Sans, DM Serif Display)
- **Third-party:** VibeSharing SDK (for feedback/engagement)
- **Build config:** TypeScript, Next.js config

## Current state
The project has a design system and layout foundation in place with a comprehensive color palette and typography hierarchy defined, but the actual onboarding content, pages, and interactive components are not yet visible in the provided code snippets. The home page structure is started but incomplete—only the `<head>` and style definitions are shown. This is an early-stage prototype ready for content and feature development.