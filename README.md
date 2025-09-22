# Abdul-afeez Hassan - Portfolio Website

A premium portfolio website showcasing the professional expertise of Abdul-afeez Hassan, DevOps Engineer and Cloud Solutions Architect.

## 🚀 Live Demo

Visit the live website: [Abdul-afeez Hassan Portfolio](https://abdul-afeez-hassan.netlify.app)

## 🛠 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v3
- **Animations:** Framer Motion
- **Deployment:** Netlify
- **Build:** Static Export

## ✨ Features

### Design & UX
- 🎨 Unique dark theme with gradient backgrounds
- 🌟 Smooth animations and micro-interactions
- 📱 Fully responsive mobile-first design
- ♿ Accessibility compliant (WCAG AA)
- ⚡ Optimized performance (90+ Lighthouse score)

### Content Sections
- 👤 **Hero Section** - Animated introduction with typewriter effect
- 📖 **About** - Professional summary and achievements
- 🛠 **Skills** - Interactive categorized skill display
- 💼 **Experience** - Timeline-based career journey
- 🎓 **Certifications** - Professional credentials showcase
- 📞 **Contact** - Multiple contact methods and form

### Technical Features
- 🔍 **SEO Optimized** - Meta tags, OpenGraph, JSON-LD
- 📊 **Analytics Ready** - Performance tracking setup
- 🔒 **Security Headers** - CSP and security configurations
- 🎯 **Type Safe** - Full TypeScript implementation
- 🚀 **Fast Loading** - Static export with optimized assets

## 🏗 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### 1. Clone Repository
```bash
git clone https://github.com/yourusername/abdul-afeez-portfolio.git
cd abdul-afeez-portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### 4. Build for Production
```bash
npm run build
npm run export
```

## 📁 Project Structure

```
abdul-afeez-portfolio/
├── app/
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Certifications.tsx
│   │   └── Contact.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   └── assets/
│       └── Abdul-afeez-Hassan-CV.pdf
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
├── netlify.toml
└── _redirects
```

## 🚀 Deployment

### Netlify (Recommended)

1. **Git-based Deployment:**
   - Connect repository to Netlify
   - Build command: `npm run build && npm run export`
   - Publish directory: `out`

2. **Manual Deployment:**
   - Run `npm run build && npm run export`
   - Upload `out` folder to Netlify

### Vercel Alternative
```bash
npm install -g vercel
vercel --prod
```

## 🎨 Customization

### Update Content
- **Personal Info:** Edit `app/components/Hero.tsx` and `app/components/Contact.tsx`
- **Experience:** Modify `app/components/Experience.tsx`
- **Skills:** Update `app/components/Skills.tsx`
- **Certifications:** Edit `app/components/Certifications.tsx`

### Design Changes
- **Colors:** Update `tailwind.config.js`
- **Animations:** Modify Framer Motion configs in components
- **Layout:** Adjust component structure and spacing

### Adding New Sections
1. Create new component in `app/components/`
2. Import and add to `app/page.tsx`
3. Update navigation in main page component

## 📊 Performance Metrics

- **Lighthouse Performance:** 90+
- **First Contentful Paint:** <2s
- **Largest Contentful Paint:** <2.5s
- **Cumulative Layout Shift:** <0.1
- **Time to Interactive:** <3s

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run export` - Export static files
- `npm run lint` - Run ESLint
- `npm run start` - Start production server

## 📝 Environment Variables

Create `.env.local` for any environment-specific configurations:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 About Abdul-afeez Hassan

DevOps Engineer and Cloud Solutions Architect specializing in:
- ☁️ AWS Cloud Architecture
- 🏗️ Infrastructure as Code (Terraform)
- 🐳 Containerization (Docker, Kubernetes)
- 🔄 CI/CD Pipeline Optimization
- 📊 Monitoring & Observability
- 🔒 Security & Compliance

### Connect
- 📧 Email: [yinkxdevops@gmail.com](mailto:yinkxdevops@gmail.com)
- 💼 LinkedIn: [abdul-afeez-hassan](https://linkedin.com/in/abdul-afeez-hassan-327882108)
- 📱 Phone: [+44 7760 944935](tel:+447760944935)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://framer.com/motion/)
- Deployed on [Netlify](https://netlify.com/)

---

**Built with ❤️ and modern web technologies**