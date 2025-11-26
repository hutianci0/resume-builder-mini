# Resume Builder Mini

A modern, interactive web application for creating, customizing, and previewing professional resumes in real-time.

## Project Overview

**Resume Builder Mini** is a full-stack React application that provides a split-pane editor/preview interface for resume creation. Users can add multiple resume sections (Basic Info, Education, Experience, Skills, Custom), reorder them via drag-and-drop, customize styling in real-time, and instantly see changes in the live preview pane.

### Key Features

- **Split-Pane UI** – Real-time editor ↔ preview sync with side-by-side layout
- **Live Preview** – WYSIWYG editor with instant visual feedback
- **Drag & Drop Reordering** – Rearrange resume sections with intuitive drag-and-drop (powered by dnd-kit)
- **Dynamic Styling** – Customize typography, spacing, colors, and layout from a dedicated style panel
- **Multiple Sections** – Pre-built forms for Education, Experience, Skills, plus custom sections
- **Modal Forms** – Clean dialog-based UX for adding/editing content (Radix UI)
- **Responsive Design** – Mobile-first layout; adapts from single-column (mobile) to two-column desktop (lg breakpoint)
- **Theme Support** – Dark/light mode toggle
- **Export-Ready** – Preview pane structured for print/PDF export workflow
- **Notifications** – Toast feedback for user actions (Sonner)

## Tech Stack

| Layer                | Technologies                                                    |
| -------------------- | --------------------------------------------------------------- |
| **Frontend**         | React 19, TypeScript                                            |
| **Styling**          | Tailwind CSS 4, CVA (Class Variance Authority)                  |
| **State Management** | Zustand                                                         |
| **UI Components**    | Radix UI primitives (Dialog, Accordion, Tabs, Separator, Label) |
| **Drag & Drop**      | dnd-kit (@dnd-kit/core, @dnd-kit/sortable)                      |
| **Icons**            | Lucide React                                                    |
| **Notifications**    | Sonner                                                          |
| **Theme**            | next-themes                                                     |
| **Build Tool**       | Vite                                                            |
| **Type Checking**    | TypeScript (strict mode)                                        |
| **Linting**          | ESLint, Prettier                                                |
| **Deployment**       | GitHub Pages                                                    |

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: pnpm package manager)

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

Starts Vite dev server with HMR at \`http://localhost:5173\`.

### Build

```bash
pnpm build
```

Compiles TypeScript and bundles for production (\`dist/\` directory).

### Type Checking

```bash
tsc -b
```

Validates TypeScript types without emitting JavaScript.

### Linting & Formatting

```bash
pnpm lint # Run ESLint
pnpm lint --fix # Auto-fix issues
```

### Preview

```bash
pnpm preview
```

Serves the production build locally.

### Deploy to GitHub Pages

```bash
pnpm run deploy
```

Builds and deploys to \`https://hutianci0.github.io/resume-builder-mini/\`.

## Project Structure

```
src/
├── component/
│ ├── editor/ # Form components for each resume section
│ │ ├── basic-form.tsx
│ │ ├── edu-form.tsx
│ │ ├── exp-form.tsx
│ │ ├── skill-form.tsx
│ │ └── custome-form.tsx
│ ├── preview/ # Preview components for each section
│ │ ├── pre-p.tsx # Personal info preview
│ │ ├── pre_edu.tsx
│ │ ├── pre_exp.tsx
│ │ ├── pre_sk.tsx
│ │ └── pre-c.tsx # Custom section preview
│ ├── editor-panel.tsx # Main editor container
│ └── preview-panel.tsx # Main preview container
├── components/ # Reusable UI components (Radix UI wrappers)
│ └── ui/
│ ├── button.tsx
│ ├── dialog.tsx
│ ├── input.tsx
│ └── ...
├── store/ # Zustand stores
│ ├── form-store.ts # Form data (education, experience, skills)
│ ├── style-store.ts # Styling options
│ ├── custome-store.ts # Custom sections
│ ├── order-store.ts # Section ordering (drag-drop)
│ └── coun-store.ts # Editor carousel state
├── utils/ # Utility functions
│ └── cn.ts # Class name merging (Tailwind + clsx)
├── App.tsx # Root component
├── main.tsx # React entry point
└── index.css # Global styles
```

## Architecture

### State Management

Zustand stores manage all application state:

- **form-store** – Resume content (education, experience, skills)
- **style-store** – Typography and layout customization
- **custome-store** – Custom sections
- **order-store** – Section ordering for drag-and-drop
- **coun-store** – Editor carousel state for section navigation

### UI Pattern

- **Editor Panel** – Multi-step form carousel; users navigate between sections via buttons
- **Preview Panel** – Real-time rendered resume; sections are drag-and-droppable (dnd-kit)
- **Radix UI Dialogs** – Modal forms for adding/editing individual items within sections

## Future Enhancements

- [ ] Multiple resume templates

**Deployed at:** [hutianci0.github.io/resume-builder-mini](https://hutianci0.github.io/resume-builder-mini/)
