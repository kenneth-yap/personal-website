# Kenneth's Portfolio - Next.js Migration

A modern portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, and Tailwind CSS
- **Smooth Animations**: Framer Motion for elegant transitions and interactions
- **Responsive Design**: Mobile-first approach with beautiful gradients
- **SEO Optimized**: Meta tags and OpenGraph support
- **Static Export**: Can be deployed to GitHub Pages or any static hosting
- **Easy Content Management**: Simple data files for projects and timeline

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

## 🏗️ Project Structure

```
kenneth-portfolio/
├── app/
│   ├── layout.tsx        # Root layout with metadata
│   ├── page.tsx          # Main homepage
│   └── globals.css       # Global styles with Tailwind
├── components/
│   ├── ProjectCard.tsx   # Project card component
│   └── TimelineItem.tsx  # Timeline item component
├── data/
│   └── content.ts        # All your content (easy to update!)
├── public/               # Static assets (add your images here)
└── next.config.mjs       # Next.js configuration
```

## ✏️ Customization

### Adding New Projects

Edit `data/content.ts` and add to the `projects` array:

```typescript
{
  title: "Your Project Title",
  subtitle: "Brief description",
  image: "image-name.jpg",
  technologies: "Python, TensorFlow, etc.",
  link: "https://github.com/your-repo", // optional
}
```

### Adding Timeline Events

Add new events to `timeline2024` or create a new year array in `data/content.ts`:

```typescript
{
  month: "December",
  content: "Your achievement or milestone here.",
}
```

### Adding Images

1. Place your images in the `public/images/` folder
2. Reference them in your content data
3. Update the ProjectCard component to use Next.js Image component for optimization

## 🌐 Deployment Options

### Option 1: Vercel (Recommended - Easiest)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy
5. Get a free `.vercel.app` domain (or connect your own)

**Advantages**: 
- Zero configuration
- Automatic deployments on push
- Preview deployments for PRs
- Edge network CDN
- No need to build locally

### Option 2: GitHub Pages (Static Export)

1. Update `next.config.mjs` to set the correct `basePath`:
   ```javascript
   basePath: '/your-repo-name'
   ```

2. Add GitHub Actions workflow (`.github/workflows/deploy.yml`):

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

3. Enable GitHub Pages in your repo settings (deploy from `gh-pages` branch)

### Option 3: Netlify

1. Push to GitHub
2. Connect your repo on [netlify.com](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `out`

## 🎨 Customization Tips

### Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
    }
  }
}
```

### Fonts

Add Google Fonts in `app/layout.tsx`:

```typescript
import { Inter, Roboto } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
```

### Animations

All animations are in `tailwind.config.ts` - customize or add new ones!

## 🔧 Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📱 Mobile Responsive

The site is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Performance Features

- Code splitting
- Lazy loading images
- Optimized animations
- Static generation where possible
- Minimal JavaScript bundle

## 📄 Adding More Pages

Create a new folder in `app/` directory:

```
app/
├── projects/
│   └── page.tsx     # Creates /projects route
├── blog/
│   └── page.tsx     # Creates /blog route
└── about/
    └── page.tsx     # Creates /about route
```

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 📝 License

MIT License - Feel free to use this template for your own portfolio!

## 🙋‍♂️ Questions?

Open an issue or reach out if you need help customizing!
