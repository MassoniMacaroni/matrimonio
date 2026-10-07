## Context

See [proposal.md](file:///Users/jono/workspaces/github.com/MassoniMacaroni/matrimonio/openspec/changes/setup-wedding-site/proposal.md) for motivation and [specs](file:///Users/jono/workspaces/github.com/MassoniMacaroni/matrimonio/openspec/changes/setup-wedding-site/specs) for normative requirements.

The workspace (`matrimonio`) is currently an uninitialized directory containing only OpenSpec configuration and agent skills. The target site is `julesnjon.com`, an upcoming wedding and save-the-date website. The site needs to be deployed to Vercel, designed with a mobile-first philosophy, built with Next.js and Tailwind CSS, editable visually via Puck, and enhanced with cute/kitschy Framer Motion animations in custom React components.

## Goals / Non-Goals

**Goals:**
- Initialize Git version control and project structure for clean tracking and CI/CD linkage.
- Bootstrap a Next.js App Router application with TypeScript, Tailwind CSS, and ESLint.
- Configure Puck editor (`@puckeditor/core`) with a Next.js App Router setup supporting live visual editing at `/edit` (or `/puck/[...puckPath]`) and public rendering at `/`.
- Establish a local JSON page data persistence mechanism (e.g. `/api/puck` and `puck.json`) that works out of the box locally and in preview environments.
- Create initial custom Puck blocks with Framer Motion animations (e.g., Hero/Save-the-Date banner, animated decorative text/cards), built mobile-first.
- Ensure full support for `prefers-reduced-motion` accessibility.
- Ensure the project builds cleanly for Vercel deployment (`next build`).

**Non-Goals:**
- Implementing the final visual artwork, custom illustrations, or photography (this will be done in subsequent design/styling iterations).
- Implementing the RSVP form and backend data collection (planned as a separate page and workflow in a future change).
- Configuring custom domain DNS records or purchasing domains (handled externally in Vercel/registrar settings).
- Setting up third-party database services (e.g. Supabase, Postgres) in this initial phase; static/file-based seed data suffices for local and preview publishing.

## Decisions

### 1. Project Initialization & Puck Template Setup
- **Decision**: Scaffold the project using Next.js App Router with TypeScript and Tailwind CSS, integrating Puck editor components. We can leverage Puck's init guidance (`npx @puckeditor/cli init --ai`) or assemble the App Router integration cleanly directly in the repo root.
- **Rationale**: Next.js App Router provides optimal server-side rendering for public visitors (fast mobile loading) while allowing the Puck editor canvas to run seamlessly as a client application under `/edit`.
- **Alternatives Considered**:
  - *Next.js Pages Router*: Less modern, doesn't benefit from App Router server components and modern streaming.
  - *Standalone CMS (e.g., Strapi, Sanity)*: Heavyweight and complex to host for a personal wedding/save-the-date site compared to an embedded Puck visual editor.

### 2. Puck Layout & Data Architecture
- **Decision**:
  - Keep Puck configuration in `puck.config.tsx` with defined component schemas (Props, fields, renderers).
  - Public route `app/page.tsx` renders the page using `<Render config={config} data={data} />`.
  - Editor route `app/edit/page.tsx` renders `<Puck config={config} data={data} onPublish={...} />`.
  - Initial seed data stored in `data/puck.json` with an API endpoint (`app/api/puck/route.ts`) to read and persist draft changes.
- **Rationale**: Decoupling the public render path from the editor view keeps client bundle sizes minimal for mobile guests while giving site authors a rich drag-and-drop editing canvas.
- **Alternatives Considered**:
  - *Hardcoded React page*: Lacks visual editing flexibility for quickly tweaking text, order, and styling.

### 3. Animation Strategy with Framer Motion
- **Decision**: Encapsulate Framer Motion inside dedicated client components (`"use client"`) that serve as Puck block renderers or layout wrappers.
- **Rationale**: Puck component renderers can be client components that freely use Framer Motion's `motion.*`, `useReducedMotion()`, and spring physics without affecting server component boundaries.
- **Cute & Kitschy Design Primitives**:
  - Soft bounce springs (`type: "spring", stiffness: 300, damping: 20`).
  - Viewport-triggered reveal animations (`whileInView={{ opacity: 1, y: 0 }}`).
  - Tap/hover micro-interactions (`whileTap={{ scale: 0.96 }}`) designed for touch screens.
- **Alternatives Considered**:
  - *Pure CSS animations*: Harder to coordinate complex springs and sequence transitions than Framer Motion.

### 4. Mobile-First Responsive Foundation
- **Decision**: Build all components mobile-first using Tailwind responsive utilities (`sm:`, `md:`, `lg:`), ensuring max-width constraints, touch-friendly hit areas (minimum 44px), and viewport meta `viewport-fit=cover`.
- **Rationale**: The majority of wedding site visitors open links from messaging apps (SMS, WhatsApp, Instagram) on smartphones.

## Risks / Trade-offs

- **[Risk] Puck editor bundle size impact on public pages** → *Mitigation*: The public route (`app/page.tsx`) uses only `@puckeditor/core`'s lightweight `<Render />` component, while the heavy editor bundle (`<Puck />`) is loaded strictly on the `/edit` route.
- **[Risk] React 19 vs Puck dependency compatibility** → *Mitigation*: Ensure dependencies (React, Puck, Framer Motion) resolve cleanly during install, pinning React to 18 or 19 depending on Puck's latest package peer dependencies.
- **[Risk] Framer Motion performance on low-end mobile devices** → *Mitigation*: Restrict animations to hardware-accelerated CSS properties (`transform`, `opacity`), avoid continuous infinite repaints, and respect `prefers-reduced-motion`.
- **[Risk] Persistence in read-only serverless deployment** → *Mitigation*: Vercel serverless functions have a read-only filesystem at runtime. The local `puck.json` serves as the committed default/published state for Vercel static deployment. Future database persistence can plug into `/api/puck` seamlessly when needed.

## Migration Plan

1. Initialize Git in `/Users/jono/workspaces/github.com/MassoniMacaroni/matrimonio`.
2. Bootstrap Next.js, Tailwind CSS, Puck, and Framer Motion dependencies.
3. Configure `puck.config.tsx`, public page, editor page, and API route.
4. Verify local development server (`npm run dev`) and test `/` and `/edit`.
5. Run production build test (`npm run build`) to guarantee Vercel build compatibility.
