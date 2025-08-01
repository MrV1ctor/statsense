# Statsense Website

This is the official website for Statsense, a Chrome extension for Twitch prediction analytics.

## 🌟 Features

- **Modern Design**: Dark theme with purple accents matching the extension
- **Responsive**: Fully responsive design that works on all devices
- **Animated**: Smooth animations and transitions using Framer Motion
- **Fast**: Built with Vite and optimized for performance
- **Accessible**: Built with accessibility in mind

## 🛠️ Technology Stack

- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons

## 🚀 Development

### Prerequisites

- Node.js 18+ 
- npm

### Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## 📦 Deployment

This website is configured for GitHub Pages deployment. The GitHub Actions workflow in `.github/workflows/deploy.yml` automatically deploys the site when changes are pushed to the main branch.

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to your hosting provider.

## 🎨 Design System

### Colors
- **Primary**: Purple gradient (#843dff to #7916ff)
- **Background**: Dark theme (#0f172a, #1e293b, etc.)
- **Text**: White and gray variants

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800, 900

### Components
- Glass morphism effects
- Gradient text
- Hover animations
- Particle background
- Interactive charts placeholders

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero.jsx           # Hero section with main CTA
│   ├── Features.jsx       # Features showcase
│   ├── Screenshots.jsx    # Screenshot gallery
│   ├── Installation.jsx   # Installation guide
│   ├── Footer.jsx         # Site footer
│   ├── Navigation.jsx     # Navigation bar
│   └── ParticleBackground.jsx # Animated background
├── App.jsx               # Main app component
├── main.jsx             # App entry point
└── index.css            # Global styles and Tailwind
```

## 🎯 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Bundle Size**: ~340KB gzipped
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s

## 🔧 Configuration

### Tailwind CSS
Custom configuration in `tailwind.config.js` with:
- Custom color palette
- Animation keyframes
- Extended spacing and sizing

### Vite
Configured for GitHub Pages deployment with proper base path.

### PostCSS
Configured with Tailwind CSS and Autoprefixer.

## 📝 License

This project is part of the Statsense Chrome extension ecosystem.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For questions or support, please open an issue in the GitHub repository.

---

Built with ❤️ for the Twitch community
