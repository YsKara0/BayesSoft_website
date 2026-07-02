# Bayessoft Website

Premium corporate and portfolio website for **Bayessoft**, a software and technology team formed around the initials of its members: **Batuhan, Ahmet Buğrahan, Yavuz, Enes, and Sefa**.

The site is built as a sleek, modern, static-first Next.js experience with refined motion, responsive layouts, team profiles, project cards, and dark/light brand logo support.

## Tech Stack

- **Next.js** with App Router
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React**
- **GitHub Pages** static deployment

## Project Structure

```txt
app/                    App Router pages and global styles
components/             Reusable UI sections and interactive components
data/                   Site content and environment-backed config
public/                 Public static assets served by Next.js
assets/                 Source logo/team image assets
.github/workflows/      GitHub Pages deployment workflow
```

## Environment Variables

Copy `.env.example` to `.env` for local development:

```bash
cp .env.example .env
```

Current public config:

```env
NEXT_PUBLIC_SITE_URL=https://bayessoft.com.tr
NEXT_PUBLIC_CONTACT_EMAIL=hello@bayessoft.com
NEXT_PUBLIC_GITHUB_URL=https://github.com/bayessoft
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/company/bayessoft
NEXT_PUBLIC_X_URL=https://x.com/bayessoft
```

These are `NEXT_PUBLIC_*` values, so they are safe for static frontend usage and become part of the generated site.

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```txt
http://127.0.0.1:3000
```

## Quality Checks

```bash
npm run typecheck
npm run lint
npm run build
```

`npm run build` creates a static export in the `out/` folder because `next.config.mjs` uses:

```js
output: "export"
```

## Static Preview

After building:

```bash
npm run build
npm run preview
```

The preview command serves the generated `out/` folder.

## GitHub Pages Deployment

This repo includes a GitHub Actions workflow:

```txt
.github/workflows/pages.yml
```

On every push to `main`, the workflow:

1. Installs dependencies with `npm ci`
2. Builds the static site with `npm run build`
3. Uploads `out/` as a GitHub Pages artifact
4. Deploys it to GitHub Pages

In GitHub:

1. Open repository settings
2. Go to **Pages**
3. Set **Source** to **GitHub Actions**
4. Set custom domain to:

```txt
bayessoft.com.tr
```

### If the Domain Shows GitHub's 404 Page

If `bayessoft.com.tr` shows:

```txt
There isn't a GitHub Pages site here.
```

but GitHub says **DNS check successful**, the DNS is usually fine. The problem is normally that GitHub Pages has not deployed a site yet.

Check these items:

1. Go to **Repository > Settings > Pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions**
3. Go to **Repository > Actions**
4. Open **Deploy GitHub Pages**
5. If it has not run, click **Run workflow**
6. If it failed, open the failed run and check the error logs
7. After a successful deployment, wait a few minutes and refresh the domain

The workflow runs automatically when you push to `main` or `master`.

The repository already includes:

```txt
public/CNAME
```

with:

```txt
bayessoft.com.tr
```

## Cloudflare DNS

For the apex domain `bayessoft.com.tr`, add GitHub Pages A records:

```txt
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
```

For `www`:

```txt
CNAME www   YOUR_GITHUB_USERNAME.github.io
```

During initial setup, use **DNS only** in Cloudflare. After GitHub Pages verifies HTTPS successfully, Cloudflare proxy can be reviewed if needed.

## What Should Not Be Committed

The `.gitignore` excludes generated and local-only files such as:

```txt
node_modules/
.next/
out/
.env
*.log
*.tsbuildinfo
.agents/
.codex/
```

Team photos and logos inside `assets/` and `public/` are public website assets. If the repository is public, those files will also be public.

## Updating Content

Team members, projects, and social links live in:

```txt
data/site.ts
```

Site-level config is centralized in:

```txt
data/config.ts
```

## Deploying From GitHub to Coolify Later

If the site needs to move from GitHub Pages to Coolify later, there are two good options.

### Option 1: Keep It Static

Recommended if the site stays fully static.

In Coolify:

1. Create a new project/application
2. Choose **Public Git Repository** or connect the GitHub repo
3. Select this repository and branch, usually `main`
4. Set build command:

```bash
npm ci && npm run build
```

5. Set publish/output directory:

```txt
out
```

6. Add environment variables from `.env.example`
7. Attach the domain in Coolify:

```txt
bayessoft.com.tr
```

8. Update Cloudflare DNS to point to the Coolify server instead of GitHub Pages.

### Option 2: Run as a Next.js Server

Only use this if dynamic server features are added later.

Required code change:

1. Remove static export from `next.config.mjs`:

```js
output: "export"
```

2. Add a production start script in `package.json`:

```json
"start": "next start"
```

3. In Coolify, use:

```bash
npm ci
npm run build
npm run start -- --hostname 0.0.0.0 --port 3000
```

For the current version of this project, **Option 1** is simpler and more appropriate.
