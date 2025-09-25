# Zharko Prilep Vision - Project Documentation

## Project Overview
This is a modern React web application built for a political campaign website featuring an AI advisor section, candidate information, blog/projects, and contact functionality. The site is multilingual (Macedonian) and follows modern web development practices.

## Tech Stack
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS with custom campaign colors
- **UI Components**: shadcn/ui with Radix UI primitives
- **Routing**: React Router DOM
- **State Management**: React Query (TanStack Query)
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Charts**: Recharts
- **Development**: ESLint, TypeScript ESLint

## Project Structure
```
src/
├── components/           # Reusable UI components
│   ├── ui/              # shadcn/ui components
│   ├── Header.tsx       # Navigation header
│   ├── HeroSection.tsx  # Landing hero section
│   ├── AIProjectSection.tsx  # AI advisor showcase
│   ├── AboutSection.tsx # Candidate information
│   ├── ProjectsSection.tsx    # Projects display
│   ├── ContactSection.tsx     # Contact form
│   └── Footer.tsx       # Site footer
├── pages/               # Route components
│   ├── Index.tsx        # Homepage
│   ├── Blog.tsx         # Blog listing
│   ├── BlogPost.tsx     # Individual blog posts
│   └── NotFound.tsx     # 404 page
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── data/                # Static data files
└── assets/              # Images and static assets
```

## Development Scripts
- `npm run dev` - Start development server on port 8080
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Code Conventions

### Components
- Use functional components with TypeScript
- Follow PascalCase for component names
- Use arrow functions for component definitions
- Components should be default exports
- Props interfaces should be defined inline or above the component

### Styling
- Use Tailwind CSS classes exclusively
- Follow the established design system colors:
  - Campaign colors: `campaign-blue`, `campaign-yellow`, etc.
  - Semantic colors: `primary`, `secondary`, `accent`, etc.
- Use the `cn()` utility for conditional classes (from `@/lib/utils`)
- Responsive design with mobile-first approach

### File Organization
- Components in `/components` directory
- Pages in `/pages` directory
- Utilities in `/lib` directory
- Types can be inline or in separate `.types.ts` files
- Use absolute imports with `@/` alias for src directory

### State Management
- Use React Query for server state
- Use React hooks (`useState`, `useEffect`) for local state
- Custom hooks in `/hooks` directory
- Form state managed with React Hook Form

### TypeScript
- Strict TypeScript configuration with some relaxed rules:
  - `noImplicitAny: false`
  - `strictNullChecks: false`
  - `noUnusedLocals: false`
  - `noUnusedParameters: false`
- Use proper typing for props and function parameters
- Avoid `any` type when possible

### Navigation
- Use React Router DOM for routing
- Implement smooth scrolling for section navigation
- Handle both scroll-to-section and page navigation in Header component
- Mobile-responsive navigation menu

### Internationalization
- Content is in Macedonian language
- Consider implementing i18n if multiple languages needed
- Use semantic navigation labels

## UI Component Guidelines

### shadcn/ui Components
- All UI components are in `/components/ui`
- Use the established component library
- Customize through Tailwind classes and CSS variables
- Follow shadcn/ui patterns for consistency

### Forms
- Use React Hook Form with Zod validation
- Implement proper form validation and error handling
- Use shadcn/ui form components

### Responsive Design
- Mobile-first approach
- Breakpoints: `sm`, `md`, `lg`, `xl`, `2xl`
- Test on various screen sizes
- Collapsible mobile navigation

## Testing
- No testing framework currently configured
- Consider adding Jest/Vitest and React Testing Library
- Test critical user flows and components

## Deployment
- Built for Vercel deployment (vercel.json present)
- Production builds to `/dist` directory
- Environment variables should be prefixed with `VITE_`

## Performance Considerations
- Use React.lazy for code splitting when needed
- Optimize images in `/assets` directory
- Implement proper loading states
- Use React Query for caching

## Accessibility
- Use semantic HTML elements
- Implement proper ARIA labels
- Ensure keyboard navigation works
- Test with screen readers
- Maintain good color contrast ratios

## Git Workflow
- Use conventional commit messages
- Test builds before committing
- Use feature branches for new development
- Keep commits focused and atomic

## Common Tasks

### Adding New Components
1. Create component in appropriate directory
2. Use TypeScript for props interface
3. Follow established styling patterns
4. Export component properly
5. Update imports where needed

### Adding New Pages
1. Create page component in `/pages`
2. Add route to `App.tsx`
3. Update navigation in `Header.tsx` if needed
4. Implement proper meta tags and SEO

### Styling Updates
1. Use existing Tailwind classes
2. Add custom CSS variables for new colors
3. Update `tailwind.config.ts` for new utilities
4. Test responsive behavior

### Performance Optimization
1. Check bundle size with build analysis
2. Implement code splitting for large components
3. Optimize images and assets
4. Use React Query for API caching

## Troubleshooting

### Common Issues
- Path resolution: Ensure `@/` alias is working
- Build errors: Check TypeScript configuration
- Styling issues: Verify Tailwind classes and CSS variables
- Navigation: Test both desktop and mobile navigation

### Debug Tools
- React Developer Tools
- Vite dev server for hot reloading
- ESLint for code quality
- TypeScript compiler for type checking