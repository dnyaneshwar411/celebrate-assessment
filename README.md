# 📷 Photo Gallery

A modern, minimal photo gallery built with **React 19**, **TypeScript**, and **Tailwind CSS v4**. Photos are fetched from the [Picsum Photos](https://picsum.photos) API and displayed in a responsive grid with fuzzy search, persistent likes, and smooth hover interactions.

---

## ✨ Features

- **Responsive grid** — 4 columns on desktop, 2 on tablet, 1 on mobile
- **Fuzzy search** — filter photos by author name in real time
- **Like / unlike** — heart button per photo, persisted to `localStorage` across sessions
- **Loading skeletons** — shimmer placeholders that match the card layout while photos load
- **Error & empty states** — graceful fallbacks for network failures and no search results
- **Smooth interactions** — card lift on hover, image zoom, fade-in on load
- **Sticky frosted-glass header** — stays in view while scrolling

---

## 🗂 Project Structure

```
src/
├── components/
│   ├── PhotoGallery.tsx   # Grid container, search logic, state routing
│   ├── PhotoCard.tsx      # Individual photo card with overlay + like button
│   ├── SearchBar.tsx      # Controlled search input with clear button
│   ├── LoadingState.tsx   # Shimmer skeleton grid
│   ├── EmptyState.tsx     # No results UI
│   └── ErrorState.tsx     # Fetch error UI
├── hooks/
│   ├── useFetchPhotos.ts  # Fetches photos from the Picsum API
│   └── useLocalStorage.ts # Generic localStorage hook with cross-tab sync
├── state/
│   └── GlobalStore.tsx    # useReducer + Context for liked photos
├── utils/
│   └── fuzzy.ts           # Builds a fuzzy-match RegExp from a query string
├── config/
│   └── index.ts           # App-wide constants (API base URL)
├── types/
│   └── index.ts           # Shared TypeScript types (Photo, etc.)
├── App.tsx
├── main.tsx
└── index.css              # CSS variables, Tailwind base, shimmer animation
```

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | [React 19](https://react.dev) |
| Language | [TypeScript 7](https://www.typescriptlang.org) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| Build tool | [Vite 8](https://vite.dev) |
| Data source | [Picsum Photos API](https://picsum.photos/v2/list) |
| State | `useReducer` + React Context |
| Persistence | `localStorage` via `useLocalStorage` hook |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) **v18+**
- [npm](https://www.npmjs.com) v9+ (or `pnpm` / `yarn`)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/dnyaneshwar411/celebrate-assessment.git
cd celebrate

# 2. Install dependencies
npm install

# 3. Set up environment variables
echo "VITE_API='https://picsum.photos/v2/list'" > .env
# Edit .env if you need to point to a different API
```

### Environment Variables

Create a `.env` file in the project root (one already exists):

```env
VITE_API="https://picsum.photos/v2/list"
```

| Variable | Description | Default |
|---|---|---|
| `VITE_API` | Base URL for the photos API | `https://picsum.photos/v2/list` |

> All Vite env variables must be prefixed with `VITE_` to be accessible in the browser.

---

## 💻 Development

```bash
# Start the dev server with hot module replacement
npm run dev
```

The app will be available at **http://localhost:5173** by default.

---

## 📦 Building for Production

```bash
# Type-check and bundle for production
npm run build

# Preview the production build locally
npm run preview
```

The output lands in the `dist/` directory, ready to deploy to any static host (Vercel, Netlify, GitHub Pages, etc.).

---

## 🔍 Linting

```bash
npm run lint
```

Uses [ESLint](https://eslint.org) with `typescript-eslint`, `eslint-plugin-react-hooks`, and `eslint-plugin-react-refresh`.

---

## 🧠 Architecture Notes

### State Management

Global state (liked photo IDs) lives in [`GlobalStore.tsx`](src/state/GlobalStore.tsx) — a `useReducer` wrapped in a React Context. The store syncs to `localStorage` on every change via a `useEffect`, so likes survive page refreshes.

### Fuzzy Search

[`fuzzy.ts`](src/utils/fuzzy.ts) converts the user's query into a regex where each character is separated by `.*`, enabling partial matching (e.g. `"jhn"` matches `"John"`). Filtering runs in a `useMemo` to avoid redundant recomputation.

### Data Fetching

[`useFetchPhotos.ts`](src/hooks/useFetchPhotos.ts) fetches `?limit=30` photos from the Picsum API on mount. It exposes `{ loading, error, photos }` — the three states are rendered as `<LoadingState>`, `<ErrorState>`, or the photo grid respectively.

---
