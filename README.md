# Next.js 15 Starter

This is a concise starter template built with **Next.js 15.4.2**, TypeScript, Tailwind CSS, and Turbopack. It demonstrates:

- App Router with Server & Client Components
- Partial Prerendering (`export const dynamic = "auto"`)
- **Server Actions** for form handling (`/contact`)
- API Route Handlers (`/api/hello`)
- Middleware
- Tailwind-powered styling

## Getting Started

```bash
pnpm create next-app --typescript  # or use this repo directly

pnpm install
pnpm dev
```

Open <http://localhost:3000> with your browser to see the result.

## Project Structure

```
nextjs15-starter/
├── app/
│   ├── layout.tsx
│   ├── globals.css
│   ├── page.tsx
│   ├── posts/
│   │   ├── page.tsx
│   │   └── [id]/page.tsx
│   ├── contact/page.tsx
│   ├── api/hello/route.ts
│   └── middleware.ts
├── actions/sendMessage.ts
├── components/
│   ├── NavBar.tsx
│   └── ThemeSwitcher.tsx
├── lib/posts.ts
├── public/
│   └── next.svg
├── package.json
├── next.config.mjs
├── tsconfig.json
├── .eslintrc.json
├── tailwind.config.cjs
└── postcss.config.cjs
```

## Deploying

Deploy with [Vercel](https://vercel.com/new) for optimal performance and DX.
