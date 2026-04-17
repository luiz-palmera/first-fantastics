## Project Goal

First Fantastics is a fan-made single-page application (SPA) about the Fantastic Four, a Marvel Comics superhero team.

The goal is to create a visually polished and responsive experience that presents the team's history, characters, and major villains in an engaging and easy-to-navigate way.

## Tech Stack

- React
- TypeScript
- Styled Components
- Vite

## Rules

- Always use TypeScript
- Always use React
- Always use Styled Components
- Do not add dependencies without a clear reason
- Prioritize simple, clean, and readable code
- Do not use a backend
- Use local mock data only
- Do not introduce server-side rendering or API integration

## App Type

- This is a client-side SPA
- There is no authentication
- There is no backend
- All content must come from local mock data

## Project Structure

- components/
- pages/
- hooks/
- context/
- theme/
- assets/
- data/
- App.tsx
- main.tsx

## Folder Responsibilities

- src/components/: reusable UI components
- src/pages/: top-level page sections
- src/hooks/: reusable React logic
- src/context/: shared global state only when necessary
- src/theme/: theme tokens and global styles
- src/assets/: static assets such as images and icons
- src/data/: mock data and static content

## Guidelines

- Components should be small and reusable
- Prefer composition over overly complex components
- Keep logic out of styled files
- Keep large content blocks out of components
- Store structured content in data files when possible

## Hooks Guidelines

- Use custom hooks for reusable stateful logic
- Avoid unnecessary abstractions
- Do not create hooks for logic that can stay inside the component

## Context Guidelines

- Use context only for truly shared global state
- Avoid context when props are enough

## Conventions

- Use strict TypeScript
- Avoid `any`
- Use `unknown` only when necessary and narrow it properly
- Use clear function and variable names
- Prefer semantic HTML
- Avoid inline styles
- Keep files organized and easy to scan

## UI Rules

- Prioritize a polished and modern UI
- Keep the layout responsive
- Reuse tokens from theme/
- Avoid visual inconsistency across pages
- Prefer accessible markup when possible

## Content Tone

- Content should feel engaging, informative, and readable
- Avoid overly long paragraphs
- Prioritize concise descriptions

## Pages

- Home: landing page introducing the Fantastic Four project
- StoryBoard: timeline with important milestones in the team's comic history
- Characters: team members and main villains, with short descriptions and powers

## Data Source

- This project does NOT use external APIs
- All content must come from local mock data
- The goal is to keep the project simple, reliable, and independent of third-party services
- Do not introduce API calls or async data fetching unless explicitly requested
