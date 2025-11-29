# Rishi's Portfolio Website

A modern, minimalistic, and premium personal portfolio website showcasing my journey as a B.Tech CSE student and aspiring Product Manager in the smartphone and AI industry.

## 🎨 Design Features

- **Minimalistic & Modern**: Clean, professional design with tech/futuristic vibes
- **Glassmorphism Effects**: Frosted glass cards with backdrop blur
- **Smooth Gradients**: Dynamic purple, indigo, and cyan color scheme
- **Premium Typography**: Inter for headings, Outfit for body text
- **Smooth Animations**: Scroll-triggered fade-ins and micro-interactions
- **Fully Responsive**: Mobile-first design that works on all devices
- **Dark Theme**: Sleek dark mode with vibrant accent colors

## 📁 File Structure

```
site/
├── index.html          # Main HTML file with all sections
├── styles.css          # Complete CSS styling with animations
├── script.js           # JavaScript for interactivity
├── README.md           # This file
└── assets/             # (Optional) For future images/media
```

## 🎯 Sections Included

1. **Hero Section** - Eye-catching introduction with animated gradient background
2. **About Me** - Compelling story and statistics
3. **Experience** - Timeline of professional and college activities
4. **Projects** - Showcase of research, case studies, and technical work
5. **Skills** - Visual representation of expertise areas
6. **Contact** - Form and social media links

## 🎨 Color Palette

| Color | Hex Code | Usage |
|-------|----------|-------|
| Primary (Indigo) | `#6366f1` | Main brand color, buttons, accents |
| Secondary (Purple) | `#8b5cf6` | Gradient accents, highlights |
| Accent (Cyan) | `#06b6d4` | Additional accents, variety |
| Background Dark | `#0f172a` | Main background (Slate 900) |
| Background Light | `#1e293b` | Card backgrounds (Slate 800) |
| Text Primary | `#f1f5f9` | Main text (Slate 100) |
| Text Secondary | `#cbd5e1` | Secondary text (Slate 300) |
| Text Muted | `#94a3b8` | Muted text (Slate 400) |

## 🔤 Typography

- **Headings**: [Inter](https://fonts.google.com/specimen/Inter) - Modern, clean sans-serif
- **Body**: [Outfit](https://fonts.google.com/specimen/Outfit) - Friendly, readable sans-serif

## ⚙️ Customization Guide

### Updating Personal Information

#### 1. Change Name and Tagline
In `index.html`, find the hero section (around line 50):
```html
<h1 class="hero-title animate-fade-in">
    Hi, I'm <span class="gradient-text">Rishi</span>
</h1>
<p class="hero-subtitle animate-fade-in-delay-1">
    CSE Undergrad | Product & Tech Enthusiast | Content Writer
</p>
```

#### 2. Update About Me Section
In `index.html`, find the about section (around line 80) and modify the paragraphs to reflect your story.

#### 3. Modify Experience
In `index.html`, find the experience timeline (around line 130) and update:
- Job titles
- Company names
- Dates
- Descriptions
- Tags

#### 4. Add/Remove Projects
In `index.html`, find the projects grid (around line 200). Each project card follows this structure:
```html
<div class="project-card glass-card">
    <div class="project-icon">
        <!-- SVG icon here -->
    </div>
    <h3 class="project-title">Project Name</h3>
    <p class="project-description">Description here</p>
    <div class="project-tags">
        <span class="tag">Tag1</span>
        <span class="tag">Tag2</span>
    </div>
</div>
```

#### 5. Update Skills
In `index.html`, find the skills section (around line 350) and modify skill names and percentages:
```html
<div class="skill-item">
    <span class="skill-name">Skill Name</span>
    <div class="skill-bar">
        <div class="skill-progress" style="width: 85%"></div>
    </div>
</div>
```

#### 6. Update Social Links
In `index.html`, find the contact section (around line 450) and update the `href` attributes:
```html
<a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" class="social-link glass-card">
```

### Changing Colors

Edit `styles.css` at the top (CSS custom properties):
```css
:root {
    --color-primary: #6366f1;    /* Change this */
    --color-secondary: #8b5cf6;  /* Change this */
    --color-accent: #06b6d4;     /* Change this */
}
```

### Modifying Animations

In `styles.css`, find the animation keyframes and adjust timing:
```css
@keyframes fadeInUp {
    /* Modify animation here */
}
```

In `script.js`, adjust animation observer options:
```javascript
const observerOptions = {
    threshold: 0.1,           /* When to trigger */
    rootMargin: '0px 0px -50px 0px'
};
```

## 🚀 Deployment Guide

### Option 1: GitHub Pages (Recommended)

1. **Create a GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under "Source", select `main` branch
   - Click **Save**
   - Your site will be live at `https://yourusername.github.io/portfolio/`

### Option 2: Netlify

1. **Install Netlify CLI** (optional)
   ```bash
   npm install -g netlify-cli
   ```

2. **Deploy via Drag & Drop**
   - Go to [netlify.com](https://www.netlify.com/)
   - Drag your `site` folder to the deploy zone
   - Your site is live instantly!

3. **Deploy via CLI**
   ```bash
   netlify deploy --prod
   ```

### Option 3: Vercel

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   cd site
   vercel
   ```

### Option 4: Local Testing

Simply open `index.html` in your browser:
- **Windows**: Double-click `index.html`
- **Mac**: Right-click → Open With → Browser
- **Linux**: `xdg-open index.html`

For a local server (recommended for testing):
```bash
# Python 3
python -m http.server 8000

# Node.js (install http-server first)
npx http-server

# PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## 📝 Adding New Projects

1. Copy an existing project card in `index.html`
2. Update the content:
   - Change the SVG icon (find icons at [Feather Icons](https://feathericons.com/))
   - Update title and description
   - Modify tags
3. Save and refresh!

## 🎨 Finding Icons

- [Feather Icons](https://feathericons.com/) - Used in this portfolio
- [Hero Icons](https://heroicons.com/)
- [Font Awesome](https://fontawesome.com/)
- [Lucide](https://lucide.dev/)

## 🔧 Troubleshooting

### Animations Not Working
- Check browser console for JavaScript errors
- Ensure `script.js` is properly linked in `index.html`
- Try clearing browser cache

### Fonts Not Loading
- Check internet connection (Google Fonts requires internet)
- Verify the Google Fonts link in `<head>` of `index.html`

### Mobile Menu Not Opening
- Check JavaScript console for errors
- Ensure the mobile menu toggle button has the correct ID
- Verify `script.js` is loaded

### Styling Issues
- Clear browser cache
- Check that `styles.css` is properly linked
- Inspect element in browser DevTools to debug

## 🌟 Future Enhancements

- Add a blog section
- Implement dark/light mode toggle
- Add project detail pages
- Include testimonials section
- Add resume download button
- Implement contact form backend (EmailJS, Formspree, etc.)
- Add Google Analytics
- Include loading animations

## 📱 Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera
- ⚠️ IE11 (limited support)

## 📄 License

This portfolio template is free to use for personal projects. Feel free to customize it to your needs!

## 🙏 Credits

- **Design & Development**: Rishi
- **Fonts**: Google Fonts (Inter, Outfit)
- **Icons**: Feather Icons
- **Inspiration**: Modern web design trends

## 📧 Contact

For questions or suggestions about this portfolio:
- **LinkedIn**: [Your Profile](https://linkedin.com/in/yourprofile)
- **Twitter/X**: [@yourhandle](https://twitter.com/yourhandle)
- **Email**: your.email@example.com

---

**Built with ❤️ and passion for product & technology**

*Last Updated: November 2025*
