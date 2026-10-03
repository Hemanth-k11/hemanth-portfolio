# Portfolio – React + Vite

This is the portfolio project converted from **Next.js 15** to **React.js (Vite)**.

## What changed from Next.js

| Next.js (original) | React + Vite (this version) |
|---|---|
| `next/image` | `<img>` with lazy loading |
| `next/link` | `react-router-dom` `<Link>` |
| `useRouter` (Next) | `useNavigate` (React Router) |
| App Router layouts | `BrowserRouter` + `Routes` |
| Server Components | All components are client-side |
| `ReactLenis` wrapper | Lenis initialized in `useEffect` |
| `next/font/google` | Google Fonts via `<link>` in `index.html` |
| Footer async fetch | `useEffect` fetch in Footer |
| `html-react-parser` | `dangerouslySetInnerHTML` |

## Setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Adding your assets

Copy your logo and project images into the `public/` folder:

```
public/
  logo/          ← skill icons (js.png, react.png, etc.)
  projects/
    thumbnail/   ← project card images
    long/        ← project long images
    images/      ← project detail images
```

The image paths in `src/lib/data.ts` reference `/logo/...` and `/projects/...` which map to the `public/` directory.

## Customization

All content (name, bio, projects, experience, skills, social links) is in:

```
src/lib/data.ts
```

Edit that file to personalize the portfolio.
