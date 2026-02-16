# SJ Enterprises - React + Tailwind CSS Website

Modern, professional website for SJ Enterprises built with React and Tailwind CSS.

## 🚀 Features

- ✅ Modern React 18 with Vite
- ✅ Tailwind CSS for styling
- ✅ React Router for navigation
- ✅ Fully responsive design
- ✅ Professional gradient designs
- ✅ Smooth animations and transitions
- ✅ WhatsApp integration
- ✅ Optimized performance

## 📁 Project Structure

```
sj-enterprises-react/
├── public/
│   └── logo.png                 # Company logo
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header
│   │   ├── Footer.jsx          # Footer component
│   │   └── WhatsAppButton.jsx  # Floating WhatsApp button
│   ├── pages/
│   │   ├── Home.jsx            # Home page
│   │   ├── About.jsx           # About Us page
│   │   ├── Products.jsx        # Products page
│   │   ├── Industries.jsx      # Industries page
│   │   ├── Pricing.jsx         # Pricing page
│   │   ├── Gallery.jsx         # Project Gallery
│   │   └── Contact.jsx         # Contact page
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── index.html                  # HTML template
├── package.json                # Dependencies
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind configuration
├── postcss.config.js          # PostCSS configuration
└── README.md                   # This file
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Run Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Step 3: Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Step 4: Preview Production Build

```bash
npm run preview
```

## 📦 Deployment Options

### Option 1: Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel auto-detects Vite and deploys

### Option 2: Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist/` folder to [netlify.com/drop](https://netlify.com/drop)

### Option 3: GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/repo-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Update `vite.config.js`:
   ```js
   export default defineConfig({
     plugins: [react()],
     base: '/repo-name/', // your repo name
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to change colors:

```js
colors: {
  primary: {
    dark: '#0a2540',
    blue: '#1565c0',
  },
  accent: {
    orange: '#ff6b35',
    teal: '#00bfa5',
    gold: '#ffa726',
  },
}
```

### Contact Information

Update phone and email in:
- `src/components/Footer.jsx`
- `src/components/WhatsAppButton.jsx`
- `src/pages/Contact.jsx`

Current: +91 9823460907, sjgrppne@gmail.com

### Logo

Replace `public/logo.png` with your logo file.

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Google Fonts** - Inter & Poppins fonts

## 📄 Pages

1. **Home** - Hero section, company intro, products overview
2. **About** - Company history, values, approach
3. **Products** - Product categories (placeholder)
4. **Industries** - Industries served (placeholder)
5. **Pricing** - BOQ-based pricing info (placeholder)
6. **Gallery** - Real project portfolio with 6 actual projects
7. **Contact** - Contact information and form

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 💡 Development Tips

### Hot Module Replacement (HMR)
Vite provides instant HMR - changes reflect immediately without full page reload.

### Tailwind IntelliSense
Install the Tailwind CSS IntelliSense extension in VS Code for autocomplete.

### Performance
- Images are optimized
- Code splitting is automatic with Vite
- Lazy loading can be added for routes if needed

## 🐛 Troubleshooting

### Port already in use
```bash
npm run dev -- --port 3000
```

### Build errors
```bash
rm -rf node_modules dist
npm install
npm run build
```

### Styling not working
Make sure Tailwind is properly configured in `postcss.config.js` and imported in `index.css`.

## 📞 Support

For questions or issues:
- Email: sjgrppne@gmail.com
- WhatsApp: +91 9823460907

## 📝 License

© 2025 SJ Enterprises. All rights reserved.

---

**Built with ❤️ using React and Tailwind CSS**
