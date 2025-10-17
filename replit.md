# Dazzling Academy - Education Consultancy Website

## Overview

Dazzling Academy is a modern, SEO-optimized educational consultancy website built for a client based in Siliguri, West Bengal, India. The application serves as a marketing and information platform for an education consultancy that helps students from North Bengal (Siliguri, Bagdogra, Jalpaiguri, Darjeeling) with study abroad guidance, career counseling, university admissions, and placement support.

The website is built as a static React application with strong local SEO focus, animated UI components, and comprehensive security headers for deployment on Vercel.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System:**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server for fast HMR (Hot Module Replacement)
- **Wouter** for lightweight client-side routing instead of React Router
- **Tailwind CSS** for utility-first styling with custom design tokens
- **Framer Motion** for performant animations with reduced-motion support

**UI Component System:**
- **Radix UI** primitives for accessible, unstyled component foundation
- **shadcn/ui** component library built on top of Radix UI
- Custom theme system supporting light/dark modes via CSS variables
- Design system follows "new-york" style with custom color palette focused on education/trust (deep blue primary, purple secondary, cyan accents)

**State Management:**
- **TanStack Query (React Query)** for server state management
- Local state managed through React hooks
- Theme state persisted to localStorage

**SEO & Performance:**
- Dynamic meta tag management via `SEOHead` component
- Structured data (JSON-LD) for local business schema
- Service Worker for PWA functionality (offline support, caching)
- Optimized animations with `prefers-reduced-motion` detection
- Lazy-loaded fonts with fallback strategy

### Backend Architecture

**Server Framework:**
- **Express.js** with TypeScript for the Node.js backend
- Development mode runs Vite dev server middleware for HMR
- Production mode serves pre-built static assets

**Security Implementation:**
- Rate limiting via `express-rate-limit` (100 requests per 15 minutes in development)
- Comprehensive security headers configured in `vercel.json`:
  - Content Security Policy (CSP)
  - X-Frame-Options, X-XSS-Protection, X-Content-Type-Options
  - HSTS (Strict-Transport-Security)
  - Permissions-Policy for browser feature restrictions
- Session security with trust proxy enabled for production environments

**Build & Deployment:**
- TypeScript compiled with `esbuild` for production server bundle
- Client assets built with Vite to `dist/public`
- Server bundle output to `dist/index.js`
- Vercel-specific configuration for SPA routing and headers

### Data Storage Solutions

**Database (Currently Minimal):**
- **Drizzle ORM** configured for PostgreSQL support
- Schema defined for user authentication (username/password)
- Uses Neon Database serverless PostgreSQL (via `@neondatabase/serverless`)
- Currently implements in-memory storage via `MemStorage` class
- Database migrations handled via `drizzle-kit`

**Note:** The application currently uses in-memory storage with a basic user schema. Database functionality appears minimal and may be expanded for future features like contact forms, user dashboards, or admin panels.

### External Dependencies

**Third-Party Services:**
- **Vercel** - Primary hosting platform with edge network, automatic HTTPS, and DDoS protection
- **Neon Database** - Serverless PostgreSQL database (configured but minimally utilized)
- **Google Fonts** - Inter font family loaded with performance optimizations

**Development Tools:**
- **Replit-specific plugins** for development environment (cartographer, dev-banner, runtime-error-modal)
- **TypeScript** for static type checking
- **ESLint/Prettier** implied by code style (not explicitly configured in visible files)

**Analytics & Monitoring:**
- No explicit analytics service configured (Google Analytics, Plausible, etc. could be added)
- Performance monitoring relies on browser DevTools and Vercel Analytics (if enabled)

**Content & Assets:**
- Static images stored in `attached_assets` directory
- Content is hardcoded in React components (no CMS integration)
- Local SEO strategy documented in `SEO_STRATEGY.md` with keyword targeting for Siliguri/North Bengal region

### API Structure

The application currently has minimal API implementation:
- Routes defined in `server/routes.ts` are placeholders
- Storage interface (`IStorage`) supports basic CRUD operations for users
- No active API endpoints for forms, contact submissions, or dynamic content
- All content is static and rendered client-side

### Key Architectural Decisions

1. **Static-First Approach:** Chose static site generation over server-side rendering for better performance, SEO, and Vercel edge deployment
2. **Component-Driven Architecture:** Reusable UI components with consistent props interface for animations (index-based delays)
3. **Accessibility Focus:** Radix UI primitives ensure WCAG compliance, keyboard navigation, and screen reader support
4. **Local SEO Optimization:** Heavy focus on location-based keywords, structured data, and meta tags for regional search visibility
5. **Performance-First Animations:** Framer Motion with viewport-based lazy loading and motion preference detection
6. **Security Hardening:** Comprehensive CSP and security headers configured for production deployment despite being a static marketing site