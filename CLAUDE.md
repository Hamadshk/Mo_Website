# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js-based marketing website for an AI Solutions company, showcasing AI voice agents, intelligent automation, and marketing intelligence services. The site features heavy animations using Framer Motion, glassmorphism design, and a dark theme with golden accents.

## Tech Stack

- **Framework**: Next.js 15 (Pages Router, not App Router)
- **UI Library**: React 19
- **Styling**: CSS (styled-jsx), globals.css
- **Animations**: Framer Motion
- **Icons**: lucide-react

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm lint
```

## Architecture & Structure

### Page Structure
- Uses Next.js **Pages Router** (not App Router)
- Main entry: `pages/index.js` - Homepage with all sections
- App wrapper: `pages/_app.js` - Global styles and DigitalRain background
- Secondary page: `pages/agentcorti.js` - Dedicated product page

### Component Organization
The site is built as a **single-page application** with sectioned components:

1. **Hero** - Top section with animated background (MatrixRain, TechAnimation, gradient orbs, coding chars)
2. **DualCalculators** - ROI calculators (AIVoiceReceptionist + AIAutomation)
3. **Services** - 4 service cards (Voice Agents, Automation, Marketing Intelligence, Lead Generation)
4. **Industries** - 6 industry-specific solutions (Legal, Finance, Healthcare, Real Estate, Wellness, Home Services)
5. **Contact** - Contact form with CalendlyEmbed

### Key Animation Components
- `DigitalRain.js` - Global background effect (Matrix-style rain)
- `MatrixRain.js` - Hero-specific Matrix rain effect
- `TechAnimation.js` - Animated tech company logos at bottom of hero
- `BottomScrollAnimation.js` - Scroll-triggered animations (unused in current index.js)

### Styling System
- **Design System**: Golden (#FFD700) and navy blue (#1e3a8a) color scheme
- **CSS Variables**: Defined in `styles/globals.css` with spacing system (--space-xs to --space-5xl)
- **Effects**: Heavy use of glassmorphism (`backdrop-filter: blur()`), gradient text, glow effects
- **Styled-JSX**: Component-scoped styles using `<style jsx>` tags in components
- **Animation Pattern**: Framer Motion with `useInView` hooks for scroll-triggered animations

## Code Patterns

### Framer Motion Usage
All major sections use this pattern:
```javascript
const ref = useRef(null)
const isInView = useInView(ref, { once: true, threshold: 0.1 })

<motion.div
  initial={{ opacity: 0, y: 60 }}
  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
  transition={{ duration: 0.8, delay: index * 0.2 }}
>
```

### Client-Side Only Rendering
Components use `'use client'` directive and client-side state initialization to avoid hydration mismatches:
```javascript
const [isMounted, setIsMounted] = useState(false)
useEffect(() => { setIsMounted(true) }, [])
{isMounted && <DynamicContent />}
```

### Card Components
Services and Industries sections share similar card structure:
- Glass card with hover effects
- Icon with glow effect
- Metrics display with gradient text
- Feature list with staggered animations
- CTA button with motion effects

## Important Notes

- **Router**: Uses Pages Router, NOT App Router - place pages in `pages/` directory
- **Python Script**: `tech_animation.py` is a standalone CLI demo (not used in production site)
- **No TypeScript**: This is a pure JavaScript project
- **Testing**: Playwright is configured for E2E testing - tests are in `tests/` directory
- **Calendly**: Contact section uses embedded Calendly widget
- **External Page**: `pages/agentcorti.js` uses separate styling (`styles/agentcorti.css`)

## Git Configuration

When making commits or pushing code, use the following GitHub username:
- **GitHub Username**: `hammedyousaf`

Configure git locally with:
```bash
git config user.name "hammedyousaf"
git config user.email "gsky925@gmail.com"  # Use your actual GitHub email
```

## Design System Reference

### Color Palette
- Primary: Gold (#FFD700)
- Secondary: Navy Blue (#1e3a8a)
- Tertiary: Brown (#92400e)
- Backgrounds: Pure black (#000000) with layered effects
- Text: White (#ffffff), Light Gray (#b4b4b4), Gray (#808080)

### Glow Colors
- `glow-emerald`: Green glow for certain services
- `glow-blue`: Blue glow for automation/tech
- `glow-pink`: Pink glow for healthcare/wellness

### Typography
- Primary: 'Inter' (body text, UI elements)
- Headings: 'Space Grotesk' (imported but usage varies)

## Common Tasks

When adding new sections, follow the established pattern:
1. Create component in `components/` with `'use client'` directive
2. Import Framer Motion and lucide-react icons
3. Use `useInView` hook for scroll animations
4. Add to `pages/index.js` in appropriate order
5. Style with styled-jsx or extend globals.css
6. Match the glassmorphism + gradient aesthetic
