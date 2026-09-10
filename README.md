# Portfolio

Next.js portfolio with content managed by [Keystatic](https://keystatic.com).

## Develop

```bash
npm install
npm run dev
```

- Site: [http://localhost:3000](http://localhost:3000)
- Admin UI: [http://127.0.0.1:3000/keystatic](http://127.0.0.1:3000/keystatic)

Edit site copy, experience, projects, images, and CVs in Keystatic (local storage). Changes are written under `content/` and `public/`; commit and push to deploy on Vercel.

## Content

| Keystatic | Path |
|-----------|------|
| Site (profile, links, CVs) | `content/site.yaml` |
| UI labels (EN/ES) | `content/labels.yaml` |
| Experiences | `content/experiences/*.yaml` |
| Projects | `content/projects/*.yaml` |
| Media | `public/images`, `public/files` |
