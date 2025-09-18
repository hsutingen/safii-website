# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run lint` - Run ESLint linter
- `npm run preview` - Preview production build locally

## Project Architecture

This is a React + Vite application using modern React 19 with functional components and hooks.

**Tech Stack:**
- **Frontend**: React 19 with JSX
- **Build Tool**: Vite 7 with HMR (Hot Module Replacement)
- **Linting**: ESLint 9 with React-specific plugins and rules
- **Styling**: CSS modules (App.css, index.css)

**Project Structure:**
- `src/main.jsx` - Application entry point, renders App in StrictMode
- `src/App.jsx` - Main application component (currently a simple counter demo)
- `src/assets/` - Static assets like images and icons
- `public/` - Public assets served directly by Vite
- `index.html` - HTML template with root div for React mounting

**Key Configuration:**
- ESLint configured for React with hooks and refresh plugins
- Vite uses @vitejs/plugin-react for Babel-based Fast Refresh
- ES modules with latest ECMAScript features enabled
- Custom ESLint rule ignores uppercase variables (likely for constants)

## Development Notes

The codebase follows modern React patterns with functional components and hooks. The current implementation is a basic Vite + React template with a simple counter component demonstration.