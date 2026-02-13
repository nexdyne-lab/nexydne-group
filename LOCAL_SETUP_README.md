# NewCo Website - Local Setup Guide

This package contains the complete source code for the NewCo website - a modern digital solutions platform for African SMEs.

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **pnpm** (v8 or higher) - Install with: `npm install -g pnpm`
- **Git** (optional, for version control)

### Installation Steps

1. **Extract the archive**
   ```bash
   tar -xzf newco-website-clean.tar.gz
   cd newco-website
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```
   
   This will install all required packages including:
   - React 19
   - Tailwind CSS 4
   - Vite (build tool)
   - shadcn/ui components
   - All other dependencies listed in package.json

3. **Start the development server**
   ```bash
   pnpm dev
   ```
   
   The site will be available at `http://localhost:3000`

## 📁 Project Structure

```
newco-website/
├── client/                 # Frontend application
│   ├── public/            # Static assets (images, fonts, etc.)
│   ├── src/
│   │   ├── pages/         # Page components
│   │   ├── components/    # Reusable UI components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility functions
│   │   ├── App.tsx        # Main app component with routes
│   │   ├── main.tsx       # Entry point
│   │   └── index.css      # Global styles and theme
│   ├── index.html         # HTML template
│   └── vite.config.ts     # Vite configuration
├── shared/                # Shared types and constants
├── package.json           # Dependencies and scripts
├── tailwind.config.ts     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## 🛠️ Available Scripts

- `pnpm dev` - Start development server (port 3000)
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build locally
- `pnpm lint` - Run ESLint to check code quality
- `pnpm type-check` - Run TypeScript type checking

## 🎨 Customization

### Updating Colors and Theme

Edit `client/src/index.css` to modify the color palette and theme variables.

### Adding New Pages

1. Create a new component in `client/src/pages/`
2. Add the route in `client/src/App.tsx`

### Modifying Components

All UI components are in `client/src/components/`. The project uses shadcn/ui components which can be customized in `client/src/components/ui/`.

## 🌐 Building for Production

```bash
pnpm build
```

This creates an optimized production build in the `client/dist/` directory. You can then:

1. **Deploy to any static hosting service:**
   - Vercel
   - Netlify
   - GitHub Pages
   - AWS S3 + CloudFront
   - Or any web server

2. **Test the production build locally:**
   ```bash
   pnpm preview
   ```

## 📦 Dependencies

### Core Dependencies
- **React 19** - UI framework
- **Wouter** - Lightweight routing
- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn/ui** - High-quality UI components
- **Vite** - Fast build tool and dev server

### All dependencies are listed in `package.json` and will be installed automatically with `pnpm install`.

## 🔧 Troubleshooting

### Port 3000 is already in use
```bash
# Use a different port
pnpm dev --port 3001
```

### Dependencies installation fails
```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Build errors
```bash
# Check TypeScript errors
pnpm type-check

# Check linting issues
pnpm lint
```

## 📝 Environment Variables

This is a static website and doesn't require environment variables for basic functionality. If you add API integrations, create a `.env.local` file:

```env
VITE_API_URL=your_api_url_here
```

## 🆘 Support

For issues or questions:
1. Check the console for error messages
2. Ensure all dependencies are installed correctly
3. Verify Node.js and pnpm versions meet requirements

## 📄 License

This project is proprietary to NewCo.

---

**Happy coding! 🚀**
