# Migration Guide: HTML/CSS/JS → Next.js

## 🎯 Overview

This guide will help you migrate from your current GitHub Pages site to the new Next.js version.

## 📋 Prerequisites

- Node.js 18+ installed ([download here](https://nodejs.org/))
- Git installed
- GitHub account
- Your current site repository

## 🚀 Quick Start (Recommended Path)

### Option A: Deploy to Vercel (Easiest - 5 minutes)

1. **Create a new GitHub repository** for your Next.js portfolio
   ```bash
   # On your local machine
   cd kenneth-portfolio
   git init
   git add .
   git commit -m "Initial Next.js portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-NEW-REPO.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your new repository
   - Click "Deploy" (no configuration needed!)
   - Get your live URL: `your-name.vercel.app`

3. **Point your domain** (optional)
   - In Vercel dashboard → Settings → Domains
   - Add `kenneth-yap.com` (or keep the .vercel.app domain)

**Advantages of Vercel:**
- ✅ Zero configuration
- ✅ Automatic deployments when you push to GitHub
- ✅ Free SSL certificate
- ✅ Lightning fast CDN
- ✅ Preview deployments for branches
- ✅ No build process needed on your machine

### Option B: Keep GitHub Pages (More Setup)

1. **Update your repository**
   - Option 1: Replace contents of `kenneth-yap.github.io` with Next.js files
   - Option 2: Create new repo and migrate later

2. **Configure for GitHub Pages**
   
   In `next.config.mjs`, update the basePath:
   ```javascript
   basePath: process.env.NODE_ENV === 'production' ? '' : '',
   // Leave empty if using username.github.io
   // Or set to '/repo-name' if using project pages
   ```

3. **Enable GitHub Actions**
   - The `.github/workflows/deploy.yml` file is already set up
   - Push your code to GitHub
   - Go to repo Settings → Pages
   - Source: "GitHub Actions"
   - Your site will build and deploy automatically!

## 📦 Adding Your Images

You currently have images in your old site. Here's how to migrate them:

1. **Create images folder**
   ```bash
   mkdir -p public/images/fulls
   ```

2. **Copy your images**
   - Copy all images from your old site to `public/images/fulls/`
   - Or download them from your current site

3. **Update the ProjectCard component**
   
   In `components/ProjectCard.tsx`, replace the placeholder with:
   ```tsx
   import Image from 'next/image';
   
   // Inside ProjectContent function:
   <div className="relative h-48 bg-slate-700">
     <Image
       src={`/images/fulls/${project.image}`}
       alt={project.title}
       fill
       className="object-cover"
     />
   </div>
   ```

## 🎨 Customization Checklist

- [ ] Update colors in `tailwind.config.ts`
- [ ] Add your images to `public/images/`
- [ ] Update metadata in `app/layout.tsx`
- [ ] Add new projects to `data/content.ts`
- [ ] Update timeline with 2025 events
- [ ] Add social media links
- [ ] Create additional pages (blog, detailed projects)

## 🔧 Common Tasks

### Adding a Navigation Menu

Create `components/Navigation.tsx`:
```tsx
export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-xl font-bold">Kenneth Yap</a>
        <div className="space-x-6">
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}
```

Then add to `app/layout.tsx` or `app/page.tsx`.

### Adding a Contact Form

Create `app/contact/page.tsx`:
```tsx
export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-8">Get In Touch</h1>
      {/* Add your contact form here */}
    </div>
  );
}
```

### Adding a Blog

Create `app/blog/page.tsx` for the blog list and `app/blog/[slug]/page.tsx` for individual posts.

## 🐛 Troubleshooting

### "Module not found" errors
```bash
npm install
```

### Images not loading
- Check images are in `public/` folder
- Paths should start with `/` (e.g., `/images/photo.jpg`)
- Update `next.config.mjs` if using a basePath

### Build fails
```bash
# Clear cache and rebuild
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

### GitHub Pages shows 404
- Make sure GitHub Actions workflow completed successfully
- Check Pages settings: should be deploying from GitHub Actions
- Verify `basePath` in `next.config.mjs` matches your repo name

## 📊 Comparing Old vs New

| Feature | Old (HTML/CSS/JS) | New (Next.js) |
|---------|------------------|---------------|
| Performance | Good | Excellent (auto-optimization) |
| SEO | Manual | Built-in |
| Animations | jQuery/manual | Framer Motion |
| Maintenance | Edit HTML directly | Edit data files |
| Scalability | Hard to scale | Easy to add pages |
| Modern Features | Limited | Unlimited |
| Type Safety | None | TypeScript |

## 🎓 Next Steps

1. **Learn the basics**
   - Get comfortable with the project structure
   - Make small changes to see how it works
   - Read the Next.js docs: https://nextjs.org/docs

2. **Enhance your site**
   - Add a blog section
   - Create detailed project pages
   - Add a contact form
   - Integrate with a CMS (like Sanity or Contentful)

3. **Showcase your skills**
   - Add interactive demos
   - Embed notebooks or visualizations
   - Create case studies for major projects
   - Show your coding journey

## 🆘 Need Help?

- Check the README.md for common questions
- Next.js Discord: https://discord.gg/nextjs
- Stack Overflow: Tag questions with `next.js`
- Open an issue in your repo

## 🎉 You're Ready!

Your new portfolio is modern, fast, and ready to showcase your skills. The best part? It's much easier to maintain and extend than your old HTML site.

Happy coding! 🚀
