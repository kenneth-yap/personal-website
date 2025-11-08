# 📁 Project Structure Visual Guide

## 🏗️ Folder Architecture

```
kenneth-portfolio/
│
├── 📱 app/                          # Next.js App Router (pages live here)
│   ├── page.tsx                     # 🏠 Homepage (your main content)
│   ├── layout.tsx                   # 🎨 Root layout & SEO metadata
│   └── globals.css                  # 🎨 Global styles + Tailwind
│
├── 🧩 components/                   # Reusable UI components
│   ├── ProjectCard.tsx              # 📇 Individual project cards
│   └── TimelineItem.tsx             # 📅 Timeline event items
│
├── 📊 data/                         # Content management
│   └── content.ts                   # ⭐ YOUR CONTENT HERE (easy to edit!)
│
├── 🖼️ public/                       # Static files (images, etc.)
│   └── images/                      # Put your images here
│       └── fulls/                   # Project images
│
├── 🔧 Configuration Files
│   ├── package.json                 # 📦 Dependencies
│   ├── tsconfig.json                # 📘 TypeScript config
│   ├── tailwind.config.ts           # 🎨 Design system
│   ├── next.config.mjs              # ⚙️ Next.js settings
│   ├── postcss.config.js            # 🎨 CSS processing
│   └── .eslintrc.json               # ✅ Code quality
│
├── 📚 Documentation
│   ├── START-HERE.md                # 👈 Overview (you are here!)
│   ├── QUICKSTART.md                # 🚀 5-minute deployment
│   ├── README.md                    # 📖 Full documentation
│   ├── MIGRATION.md                 # 🔄 Migration guide
│   └── DEPLOYMENT-COMPARISON.md     # ⚖️ Hosting options
│
└── 🔄 .github/workflows/
    └── deploy.yml                   # 🤖 Auto-deployment (GitHub Pages)
```

## 🎯 Where to Make Changes

### ✏️ Content Updates (Most Common)
```
data/content.ts
├── projects[]           # Add/edit projects
├── timeline2024[]       # Update journey
└── timeline2023[]       # Past achievements
```

**This is where you'll spend 90% of your time!**

### 🎨 Design Changes
```
tailwind.config.ts       # Colors, animations, spacing
app/globals.css          # Global styles
```

### 📝 Structure Changes
```
app/page.tsx            # Layout of homepage
components/             # How things look
```

### ⚙️ Technical Settings
```
next.config.mjs         # Next.js configuration
tsconfig.json           # TypeScript settings
```

## 🔄 Data Flow

```
User visits site
    ↓
app/layout.tsx (loads metadata, styles)
    ↓
app/page.tsx (main content)
    ↓
Imports from data/content.ts
    ↓
Maps through arrays to create components
    ↓
<ProjectCard /> and <TimelineItem />
    ↓
Renders with Framer Motion animations
    ↓
Beautiful, animated portfolio! ✨
```

## 📦 Component Hierarchy

```
page.tsx (Main Page)
│
├── Hero Section
│   ├── Location badge
│   ├── Name heading
│   └── Bio paragraph
│
├── Journey Timeline Section
│   ├── 2024 heading
│   ├── TimelineItem (January)
│   ├── TimelineItem (March)
│   ├── TimelineItem (...)
│   ├── 2023 heading
│   └── TimelineItem (...)
│
├── Quote Section
│   └── Blockquote
│
├── Projects Section
│   ├── Section heading
│   ├── Grid container
│   │   ├── ProjectCard (TBM)
│   │   ├── ProjectCard (Finance)
│   │   ├── ProjectCard (Kaggle)
│   │   └── ProjectCard (...)
│
└── Footer
```

## 🎨 Styling System

### Tailwind Classes
```
Spacing:     p-4, m-8, space-y-6
Layout:      flex, grid, container
Text:        text-xl, font-bold
Colors:      bg-slate-900, text-blue-400
Effects:     hover:scale-105, transition
```

### Custom Animations (in tailwind.config.ts)
```
animate-fade-in          # Fade in effect
animate-slide-up         # Slide up from bottom
```

### Framer Motion
```
initial={{ opacity: 0 }}       # Starting state
animate={{ opacity: 1 }}       # End state
whileHover={{ scale: 1.05 }}   # Hover effect
```

## 📱 Responsive Breakpoints

```
Default:     Mobile (< 768px)
md:          Tablet (≥ 768px)
lg:          Desktop (≥ 1024px)
xl:          Large screens (≥ 1280px)

Example:
className="text-xl md:text-2xl lg:text-3xl"
          Mobile    Tablet      Desktop
```

## 🚀 Build Process

```
Development:
npm run dev
    ↓
Hot reload enabled
See changes instantly
http://localhost:3000

Production:
npm run build
    ↓
Optimizes code
Generates static files
Creates /out folder
    ↓
Deploy to hosting
Vercel or GitHub Pages
```

## 🔌 How Next.js Works

```
1. Server-Side Rendering (SSR)
   - Page generated on server
   - Fast initial load
   - Great for SEO

2. Static Site Generation (SSG)
   - Pre-built at build time
   - Super fast delivery
   - Perfect for portfolios

3. Client-Side Routing
   - No full page reloads
   - Smooth transitions
   - App-like experience
```

## 📊 File Size Reference

```
Small:     content.ts, config files
Medium:    components, single pages
Large:     Images (put in public/)
Huge:      node_modules (auto-managed)
```

## 🎯 Quick Reference

### Want to...
| Task | File to Edit |
|------|--------------|
| Add project | `data/content.ts` |
| Update journey | `data/content.ts` |
| Change colors | `tailwind.config.ts` |
| Edit homepage | `app/page.tsx` |
| Update SEO | `app/layout.tsx` |
| Add images | `public/images/` |
| Modify animations | `components/*.tsx` |

## 💡 Pro Tips

1. **Start with content.ts** - Easiest changes, biggest impact
2. **Use Tailwind classes** - Faster than custom CSS
3. **Test in dev mode** - See changes instantly
4. **Keep components small** - Easier to maintain
5. **Use TypeScript hints** - Catch errors early

## 🎓 Learning Path

```
Week 1: Get comfortable with content.ts
    ↓
Week 2: Experiment with Tailwind classes
    ↓
Week 3: Understand component structure
    ↓
Week 4: Add custom features
    ↓
Month 2+: Build advanced features (blog, CMS, etc.)
```

## 🔍 Finding Things

**Need to change text content?**
→ `data/content.ts`

**Need to change colors/design?**
→ `tailwind.config.ts` or component files

**Need to add a page?**
→ Create folder in `app/` (e.g., `app/blog/page.tsx`)

**Need to add images?**
→ `public/images/`

**Need to change animations?**
→ Component files (`.tsx` files)

## 🎉 You're Ready to Explore!

The structure is simple and logical:
- **app/** = Pages
- **components/** = Building blocks
- **data/** = Your content
- **public/** = Static files

Start by exploring `data/content.ts` - it's the easiest entry point!
