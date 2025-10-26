## Vacation App – Ulaman Eco Luxury Resort

> Crafted by **Nur Wahid Azhar** · nur.wahid.azhar@gmail.com · [Portfolio](https://porto-ku.excitech.id/user?id=nur.wahid.azhar)

Next.js 16 single-page marketing experience for Ulaman Eco Luxury Resort. The site layers cinematic hero video, curated villa highlights, wellness programming, and dining showcases with a high-end typographic system inspired by resort collateral.

### Tech Stack
- Next.js 16 (App Router disabled in favor of file-based `pages/` for quick landing page iteration)
- React 19 with the React Compiler beta-enabled Babel plugin
- TypeScript for strict component contracts
- Tailwind CSS v4 (utility-first styling with custom brand tokens)

### Getting Started
1. Install dependencies: `pnpm install`
2. Run the dev server: `pnpm dev` then open http://localhost:3000
3. Production build: `pnpm build && pnpm start`
4. Quality checks: `pnpm lint`

### Project Structure
```
src/
  components/        UI sections (Hero, Villas, Dining, Wellness, etc.)
  components/ui/     Primitive elements (buttons, layout helpers)
  hooks/             Custom hooks for shared logic
  lib/               Utilities such as `cn` for class merging
  pages/             Next.js routes (currently single `index.tsx`)
  styles/            Tailwind setup and design tokens
```

## Front End Implementation

### 1. Component Structure: Ensuring Reusability & Maintainability
- **Section-as-component**: Each homepage stripe (Hero, About, Villas, Experience, Wellness, Dining, Location, Footer) lives in its own file under `src/components/`. This isolates design/logic and makes the sections portable for future pages or A/B tests.
- **Primitive layer**: Shared building blocks (e.g., `Button`, typography helpers) reside in `src/components/ui/`. The goal is to keep surface-level components declarative while the primitives carry accessibility, focus states, and interaction rules.
- **Configuration-first content**: Data such as nav links, villa collections, and contact channels are arrays co-located with the component. This allows quick content edits without jumping through multiple files, yet keeps the structure reusable by simply swapping config.
- **Clear separation of concerns**: Layout wrappers (`app-container`, spacing utilities) stay in CSS/Tailwind, while behavioral logic (menu toggles, scroll handlers) lives in the component. This avoids style drift and simplifies future refactors (e.g., moving Navbar into a layout file).

### 2. State Management: Picking Between Local and Global
- **Local by default**: Interactive pieces (e.g., Navbar scroll state, mobile menu toggling, hero scroll button) rely on React’s local `useState` and `useEffect`. The interactions are scoped, so colocating state keeps components self-contained and testable.
- **Context only when data must span sections**: If we later expose booking availability or visitor personalization, we would lift state into React Context (or a lightweight store like Zustand) to avoid prop drilling. The heuristic is:
  - *Local state* when only one component (or a tight cluster) reads/writes it.
  - *Global context/store* when many distant components need the same data or when server state must be cached client-side.
- **Server data via Next.js data fetchers**: For CMS-fed sections we’d use `getStaticProps`/`getServerSideProps` (or App Router data functions) to keep requests server-side and hydrate only the needed JSON on the client, reducing global client state entirely.

### 3. Responsive Strategy: Consistency Across Screens
- **Fluid grid & container**: The shared `app-container` utility constrains content width and applies horizontal padding that scales by breakpoint, giving every section the same breathing room.
- **Tailwind responsive modifiers**: Utility classes like `sm:text-lg`, `md:text-6xl`, `lg:grid-cols-3`, etc., make typography, spacing, and layout adjustments straightforward without separate stylesheets.
- **Adaptive media + progressive enhancement**: Motion-heavy sections (hero video iframe) are wrapped with overlays ensuring text remains legible on both large and small screens, while CTA buttons collapse into stacked layouts on mobile (`flex-wrap gap-5` patterns).
- **Interaction fallbacks**: Mobile navigation swaps to an overlay menu rendered via React portals, while desktop keeps inline links. Scroll-triggered state monitors viewport height (`window.innerHeight`) so color inversions happen consistently regardless of device size.

### 4. Performance Optimization in Next.js
- **Code splitting & lazy loading**: Next.js automatically code-splits per page; we keep the app single-route today, but any heavy sections (e.g., video lightboxes) can be wrapped in `dynamic()` imports with `ssr: false` to defer cost until needed.
- **Static asset optimization**: Hero logos and background imagery use `next/image` where applicable to leverage responsive images and WebP/AVIF output. Videos stream from YouTube, so the bundle avoids large media payloads.
- **CSS & font efficiency**: Tailwind v4 builds tree-shaken utilities, producing only the classes we use. Custom fonts would be loaded via `next/font` (not yet necessary) to get automatic subsetting.
- **Runtime hygiene**: Event listeners are properly cleaned up in `useEffect`, preventing leaks. When data fetching is introduced, we’d lean on Next’s Route Handlers or server components to move work off the client, shrinking hydration payloads.
- **Bundle guarding**: ESLint + TypeScript rules catch accidental dynamic requires or unused imports. During CI, `next build` surfaces bundle size hints, letting us set budgets before shipping.

## Data Management

### 5. Data Fetching with Local JSON
- **Composable data modules**: Create `src/data/` with typed exports such as `villas.ts`, `wellness.ts`, and `dining.ts`. Each file exports both the schema (TypeScript interfaces) and the content array.
- **Page adapters**: Introduce lightweight adapter functions per page (`getLandingContent`, `getRetreatContent`) that compose the raw JSON into the exact shape each page expects, keeping future page types isolated from one another.
- **Versioning & fallbacks**: Maintain a `meta` block (e.g., `version`, `lastUpdated`, `locale`) inside each JSON snippet to support incremental adoption of CMS data or localization without breaking older pages.

### 6. API Integration Patterns
- **Request hooks**: Wrap fetch logic in hooks like `useApiResource(key, fetcher, options)` that centralize loading/error/caching concerns. Under the hood rely on `SWR` or React Query only if requirements justify; otherwise craft a minimal cache with `Map`.
- **Status modeling**: Store `status: 'idle' | 'loading' | 'success' | 'error'` alongside `data` and `error` objects to render skeletons, retry UI, or message banners consistently.
- **Error boundaries**: Use React Error Boundaries around major sections (e.g., Villas) so a failed API call does not crash the whole landing page.

### 7. Content Structure
- **Atomic content types**: Model each type (rooms, facilities, galleries) with a shared base shape (`id`, `slug`, `title`, `summary`, `media`). Extend per type via discriminated unions so future sections can narrow types precisely.
- **Relational references**: For facilities referencing galleries, store IDs rather than nested blobs to keep payloads smaller; resolve the relationships in the adapter layer when needed.
- **Localization-ready fields**: Store copy as `{ en: "...", id: "...", fr?: "..." }` or link to translation keys so the schema scales to multiple locales.

## Deployment & Infrastructure

### 8. Vercel Deployment Config
- **Framework preset**: Use the default Next.js preset; Vercel auto-detects build command `pnpm build` and output `.next`.
- **Edge-friendly options**: Enable the experimental React Compiler (already in `.babelrc`/plugins) and consider moving data routes to the Edge runtime (`export const runtime = 'edge'`) for faster global response once dynamic data is added.
- **Caching headers**: Configure `next.config.ts` with `headers()` to set long-lived cache for static assets and short cache for APIs; Vercel respects these during deployment.

### 9. Environment Setup
- **`.env.local` vs `.env.production`**: Store dev API endpoints, preview keys, and analytics toggles in `.env.local` (gitignored). Production secrets stay in Vercel Project Settings → Environment Variables, scoped to Production/Preview/Development as needed.
- **Type-safe access**: Create `src/lib/env.ts` that validates required keys at build time (using `zod` or manual checks) so missing variables fail fast.

### 10. Asset Optimization
- **Images**: Host hero photography in `/public` for instant caching, but use `next/image` with `fill` or `responsive` layouts to auto-generate multiple sizes and formats.
- **Fonts**: Import via `next/font` (e.g., `local()` for brand fonts, `google()` for headings) to get automatic subsetting and self-hosting benefits without CLS.
- **Static files**: Version filenames (`logo-v2.svg`) and configure cache-control headers to leverage immutable caching on Vercel’s CDN.

## CMS Integration (Bonus)

### 11. API Design with Laravel Filament
- **REST Resources**: Expose endpoints like `/api/v1/villas`, `/api/v1/facilities`, `/api/v1/galleries`, each returning paginated, meta-rich responses (`data`, `links`, `meta`).
- **Transformers**: Use Laravel API Resources to shape responses (ensuring consistent casing, date formats, asset URLs). Include `included` arrays for relationships if we mimic JSON:API-style payloads.
- **Authentication**: Issue Personal Access Tokens with scoped abilities (read-only for frontend). Support ETag headers so the frontend can leverage conditional requests.

### 12. Content Modeling
- **Database layout**: Core tables `rooms`, `facilities`, `experiences`, `media_assets`, plus pivot tables (e.g., `facility_media`). Store structured fields (amenities JSON, SEO metadata) in dedicated columns to keep queries indexable.
- **Scheduling & localization**: Add `published_at`, `locale`, and `version` fields to support future scheduling and translations without duplicating rows.

### 13. Admin UX Considerations
- **Structured forms**: Use Filament’s repeater fields for galleries, relation managers for linking media, and preview panes for hero sections so editors see updates live.
- **Role-based access**: Provide distinct roles (Content Editor vs Marketing Manager) with tailored navigation to prevent accidental edits.
- **Audit & rollback**: Enable activity logs and revision history so editors can restore previous content versions quickly.

## Best Practices

### 14. Code Organization
- **Domain folders**: Group sections and related hooks together (e.g., `components/villas/`, `hooks/useVillas.ts`) and expose index files for clear imports.
- **Shared utilities**: Keep `src/lib/` for helpers (formatters, analytics, env validation) to avoid duplication and ease onboarding for new contributors.
- **Linting & formatting**: ESLint via `eslint.config.mjs` plus Prettier (optional) ensures consistent style across contributors; add husky hooks later if needed.

### 15. Error Handling
- **Network**: Show toast/banner plus retry button when fetch fails; log details to an observability service (Vercel Analytics, Sentry).
- **Data**: Validate incoming payloads with TypeScript + runtime guards; render fallback copy when optional fields are absent.
- **UI**: Wrap critical sections with React Error Boundaries and provide skeleton/loading states to avoid layout jumps.

## Important Notes & Submission Checklist
- CMS integration is optional but the architecture above keeps the door open for a Laravel Filament backend.
- External libraries stay lean—React, Next.js, Tailwind, and lucide-react cover most needs.
- Emphasis remains on maintainability, accessibility, and polish over feature count.
- To submit:
  1. Push this repo to GitHub and share the URL.
  2. Deploy on Vercel (attach the live link).
  3. Keep this README updated with setup instructions + answers.
  4. If a CMS is added, include admin credentials for reviewers and link to API docs.
