# PickStack — Product Roadmap

## Overview

PickStack is an AI-powered app for generating structured rankings on any topic.  
The product already supports list generation, saved collections, onboarding, and user-scoped data.

This document outlines the full roadmap for evolving PickStack into a complete AI product.

---

## Current State

- AI-powered ranking generation
- Home screen with empty / loading / loaded states
- Saved collections
- Ranking detail & item detail screens
- Onboarding with permissions (microphone, location)
- Anonymous authentication (Supabase)
- User-scoped data with RLS policies
- Basic personalization

---

## Phase 1 — Core Experience

### Media for Items
Add visual content to items:
- Images (primary)
- Optional video previews
- Store as URLs, not assets
- Render in cards and detail views

**Goal:** Improve UI richness and engagement

---

### Dynamic Suggested Prompts
Replace hardcoded suggestions with dynamic generation:
- Based on location
- Based on user history
- Based on trends

**Goal:** Personalized discovery

---

### Loading Improvements
- Add shimmer/skeleton loaders
- Match real card layouts
- Smooth transition to loaded state

**Goal:** Polished UX

---

## Phase 2 — AI Power Features

### Prompt Builder
A structured way to build prompts:
- Tags (genre, theme, context)
- Saved items as context
- Previous lists
- Multi-parameter input

**Goal:** More control over AI output

---

### Image Input Support
- Attach images to prompts
- Enable multimodal input

**Goal:** Expand use cases beyond text

---

### Contextual Actions
Dynamic buttons generated per item:
- "Find recipe"
- "Show alternatives"
- "Plan trip"

Each action includes:
- Label
- Prompt payload

**Goal:** Turn static lists into interactive flows

---

## Phase 3 — Account System

### Authentication
- Google Sign-In
- Apple Sign-In
- Maintain current user-based architecture

---

### Profile Expansion
- Avatar upload
- Editable profile fields
- Sign-out functionality

---

### Security & Notifications

#### Security
- Linked accounts
- Session management
- Account actions

#### Notifications
- Push notifications
- Activity reminders
- Updates

---

## Phase 4 — Monetization

### Paywall & Subscriptions
- Subscription plans
- One-time purchases
- RevenueCat integration
- UI integration in profile/settings

---

### Onboarding Improvements
- Generate demo list at the end
- Introduce value immediately
- Show paywall after onboarding

---

### Internal Currency
- Credits per request
- Subscription-based limits
- Gamification elements

---

## Phase 5 — Analytics

### Product Analytics
Track:
- All clicks
- Prompt submissions
- User flows
- Conversion funnels
- Retention

**Goal:** Data-driven decisions

---

## Future Directions

### Rich Content Output
- Styled responses
- HTML-like output
- Structured notes

---

## Priorities

### High Priority
- Media content
- Auth (Google/Apple)
- Paywall
- Analytics
- Dynamic suggestions
- Loading polish

### Medium Priority
- Prompt builder
- Contextual actions
- Profile expansion

### Experimental
- Image input
- Internal currency
- Rich content output

---

## Summary

PickStack evolves from a simple AI list generator into:
- A personalized assistant
- A discovery engine
- A structured AI interaction system