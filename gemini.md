# Project Context for Gemini AI

## Nexus

Mini Social Network MVP

## Purpose of This File

This document provides **context and constraints** for Gemini (and other AI assistants) working on this repository. The goal is to speed up development, reduce unnecessary suggestions, and keep decisions aligned with the project vision.

Gemini should treat this as the **source of truth** for assumptions about architecture, scope, and priorities.

---

## Project Overview

This project is a **minimal, low-cost social network MVP** built to validate an idea quickly. It is not intended to be feature-complete or enterprise-ready.

Core goals:

- Validate user interest
- Ship fast
- Keep infrastructure and operational costs as close to zero as possible
- Prefer simplicity over scalability (until proven necessary)

---

## Target Users

- Early adopters / small user base
- Friends, family, or a limited public audience
- No requirement to handle large-scale traffic

---

## Core Features (MVP Scope)

Only suggest features inside this scope unless explicitly asked otherwise.

### Authentication

- User sign up / sign in
- Email + password
- Basic session handling (JWT token valid for 24 hours long)
- Email confirmation with resend api

### Users

- User profile (name, bio)
- Public profile page

### Posts

- Create text-based posts - videos for pitches most be handled via iframe. The user will provide the youtube link or something else.
- View feed (chronological)
- View user posts

### Interactions (Optional / Nice-to-have)

- Likes or reactions (simple counter)
- Possibility to get in touch with the post author - (freemium - max 2 before paying to reveal contact info) user most pay to reveal phone and email of the possible partner.

---

## Out of Scope (For Now)

Gemini should **avoid proposing** these unless explicitly requested:

- Real-time chat
- Stories, reels, or video
- Advanced recommendation algorithms
- Complex moderation systems
- Multi-language support
- Mobile apps (iOS/Android)
- Microservices architecture

---

## Tech Stack (Preferred)

Favor tools that are cheap, simple, and fast to iterate.

### Frontend

- Next.js (App Router)
- React
- Tailwind CSS (minimal styling)

### Backend

- Next.js API routes / Server Actions
- Resend for E-mail services

### Database

Preferred options (in order):

1. PostgreSQL (Supabase / Neon) - docker image for local development

ORM:

- Prisma

### Authentication

- NextAuth / Auth.js

### Hosting

- Vercel (free tier)

---

## Cost Constraints

- Must run on free tiers initially
- Avoid paid APIs unless unavoidable
- Avoid heavy compute or background workers

---

## Development Principles

Gemini should follow these principles when suggesting code or architecture:

- **Keep it simple**
- TDD - do first the tests and then implement the solution
- Prefer boring, proven solutions
- Avoid premature optimization
- Avoid overengineering
- One repo, one deployment

---

## Code Style Guidelines

- TDD
- MVC
- Clear and readable code
- Small functions
- Explicit naming over clever abstractions
- Minimal dependencies

---

## Data Model (Initial Suggestion)

High-level entities only:

- User
  - id
  - name
  - email
  - phone
  - createdAt
  - password

- Post
  - id
  - userId
  - content
  - createdAt

---

## How Gemini Should Help

Gemini is expected to:

- Propose **MVP-first** solutions
- Optimize for speed of delivery
- Provide production-safe but lightweight code
- Explain trade-offs clearly

Gemini should NOT:

- Suggest enterprise-scale architectures
- Assume high traffic
- Introduce unnecessary abstractions

---

## Future (Only If MVP Succeeds)

These are **not current requirements**, only potential future ideas:

- Comments
- Notifications
- Basic moderation
- Paid plans

---

## Final Note

When in doubt, choose:

> The simplest solution that works today.

This project values **learning and validation** over perfection.

Do not delete the tests after completing the tasks

Use shadcn components for a better pattern

Don't change the base pallete of this project
Navbar's color should be #1d1d1d
body's color should be black

You should create first the tests, then implement the task

Never remove the spec/test file, it's meant to be ran everytime I deploy the app

The app must be done responsively

You again removed the Test file after completing the task. You should keep it

The app must be in brazillian portuguese - all strings must be in pt-br

Cards in this app must follow this style:
bg-gray-900 rounded-lg shadow-lg shadow-blue-400/60 text-white

### Documentation

- Navbar
  Logo Sign in / Sign up option
