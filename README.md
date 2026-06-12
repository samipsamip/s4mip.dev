# s4mip.dev

Personal portfolio. Astro 5 + Tailwind CSS 4, fully static, light theme, zero client-side JavaScript.

## Run locally

```sh
npm install
npm run dev      # http://localhost:4321
```

```sh
npm run build    # static output in dist/
npm run preview  # serve the production build locally
```

## Structure

```
src/
  layouts/Base.astro          shared shell: head, header nav, footer
  components/
    Hero.astro                name, title, statement, meta row
    Projects.astro            project list, driven by the content collection
    About.astro
    Writing.astro             latest blog posts on the homepage
    Skills.astro
    Contact.astro
    Tech.astro                tech name + svg icon (falls back to text if no icon)
  content/projects/*.md       one file per project — this is the only place project data lives
  content/blog/*.md           one file per blog post
  content.config.ts           frontmatter schemas for both collections
  pages/
    index.astro               homepage
    projects/[slug].astro     case-study page generated for every project file
    blog/index.astro          post listing
    blog/[slug].astro         post page generated for every blog file
  assets/                     project screenshots
  assets/icons/               tech stack svg icons
```

## Adding a project

Create `src/content/projects/<slug>.md`. The homepage list and the detail page
(`/projects/<slug>/`) are both generated from it — nothing else to touch.

```md
---
title: Project Name
description: One-line description.
order: 4                      # position in the homepage list
problem: What problem it solves.
role: Optional — only for work that wasn't a personal project.
highlights:
  - Two to four short bullets
stack: [Node.js, React]
github: https://github.com/...   # optional
live: https://...                # optional
cover: ../../assets/<slug>.png   # optional, see Screenshots
coverAlt: What the screenshot shows
---

The markdown body renders as "The solution" section on the case-study page.
```

## Screenshots

All three projects have a screenshot in `src/assets/`. To add one for a new project:

1. Drop the image in `src/assets/`.
2. Add to that project's frontmatter:
   ```yaml
   cover: ../../assets/uplerr.png
   coverAlt: Uplerr's skill-gap analysis screen
   ```

Astro validates the path at build time (a typo fails the build rather than
shipping a broken image) and generates optimized responsive sizes. Projects
without a `cover` simply render text-only — nothing breaks.

Prefer ~1280px-wide PNG/WebP screenshots cropped to the product UI.

## Adding a blog post

Create `src/content/blog/<slug>.md`:

```md
---
title: Post Title
description: One-line summary, used in the listing and meta description.
date: 2026-06-12
draft: false        # optional; true hides it everywhere
---

Markdown body.
```

It appears automatically on `/blog/`, on the homepage Writing section (latest
three), and in the sitemap.

## Adding a tech icon

Drop the svg in `src/assets/icons/` and register it in the `icons` map in
`src/components/Tech.astro`. Stack names without an icon render as plain text,
so nothing breaks in the meantime.

## Deploying

Pushes to `main` deploy to Cloudflare Pages via `.github/workflows/deploy.yml`.
Two repository secrets are required in GitHub (Settings → Secrets and variables → Actions):

- `CLOUDFLARE_API_TOKEN` — an API token with the "Cloudflare Pages: Edit" permission
- `CLOUDFLARE_ACCOUNT_ID` — found on the Cloudflare dashboard sidebar

The Pages project name is `s4mip-dev`; create it once in the Cloudflare dashboard
(or with `wrangler pages project create s4mip-dev`) and adjust the
`--project-name` flag in the workflow if you name it differently.

## Notes

- `site` in `astro.config.mjs` is set to `https://s4mip.dev` — update if deploying elsewhere (it only affects canonical/OG URLs).
- **The email address is display-only, on purpose.** It appears exactly once, as the obfuscated text `callmesamip[at]gmail[dot]com` in Contact. Never add a `mailto:` link or write the raw `user@domain` form anywhere in this codebase — not in HTML, not assembled in JS.
