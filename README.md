# The Haptic Journal — Portfolio

> "I don't use the tech, I feel the tech."

A product thinking journal and portfolio showcasing analysis of smartphone ecosystems, UX patterns, and consumer technology through the lens of psychology and systems design.

## 🎯 About This Portfolio

This is not a typical developer portfolio. It's an editorial-style product journal that documents insights on:
- Smartphone ecosystem strategy
- UX patterns and cognitive design
- AI integration and behavior change
- Product psychology in consumer tech

**Built by**: Rishi Parmar  
**Role**: Computer Science Engineering Student | Product Analyst | Operations Lead  
**Domain**: Consumer Technology, Mobile UX, Product Strategy

## 📁 Project Structure

```
site/
├── index.html          # Main portfolio page
├── styles.css          # Editorial design system with ambient effects
├── script.js           # Interactive elements and form handling
├── images/             # AI-generated editorial images
│   ├── samsung_ecosystem.png
│   ├── cognitive_flow.png
│   └── ai_behavior.png
└── README.md           # This file
```

## 🎨 Design Philosophy

**Editorial & Analytical**
- Calm, confident, analytical tone
- No hype, no buzzwords
- Minimalist with purpose
- Dark theme with subtle ambient effects

**Typography**
- Headings: Playfair Display (editorial serif)
- Body: Inter (clean sans-serif)
- Code: JetBrains Mono (monospace)

**Color Palette**
- Background: Deep slate with noise texture
- Accents: Subtle amber and muted tones
- Focus on readability and sophistication

## 📄 Sections

1. **Manifesto** — Product philosophy and approach
2. **The Lens** — Writing and analysis on consumer tech
3. **Builds** — Projects framed as Problem → Insight → Outcome
4. **Curiosity** — Current research interests
5. **About** — Journey from engineering to product thinking
6. **Contact** — Professional contact form

## 🚀 Deployment

### GitHub Pages

```bash
# Initialize repository
git init
git add .
git commit -m "Initial commit: Product portfolio"
git branch -M main

# Add remote (replace with your repo URL)
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

Then enable GitHub Pages:
1. Go to repository **Settings** → **Pages**
2. Select `main` branch as source
3. Save and wait for deployment

### Netlify (Recommended for custom domains)

1. Drag the `site` folder to [netlify.com](https://www.netlify.com/)
2. Configure custom domain if needed
3. Site is live instantly

### Vercel

```bash
npm install -g vercel
cd site
vercel
```

## 🔧 Customization

### Update Content

All text content is in `index.html`. Key sections to customize:

**Manifesto** (lines 34-42)
```html
<div class="manifesto-body">
    <p>Your product philosophy here...</p>
</div>
```

**The Lens Articles** (lines 57-96)
- Update article titles, summaries, dates, and tags
- Replace images in `images/` folder

**Builds/Projects** (lines 109-187)
- Modify project names and descriptions
- Update Problem/Assumption/Build sections

**About Section** (lines 226-232)
- Update your personal narrative

### Contact Form

The portfolio uses [Web3Forms](https://web3forms.com/) for contact form submissions.

To use your own access key:
1. Sign up at web3forms.com
2. Get your access key
3. Update line 268 in `index.html`:
```html
<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY">
```

### Update Contact Info

Footer contact details (lines 289-301):
- Email: `contact@starsophile.qzz.io`
- LinkedIn: Update href
- Instagram: Update href
- Work link: Update href

## 🖼️ Images

The portfolio includes AI-generated editorial images:
- **samsung_ecosystem.png** — Ecosystem connectivity visualization
- **cognitive_flow.png** — Cognitive load vs. intuitive flow
- **ai_behavior.png** — AI behavior transformation concept

To replace images:
1. Add new images to `images/` folder
2. Update `src` attributes in `index.html` (lines 67, 81, 95)

## 📱 Browser Support

- ✅ Chrome/Edge (Chromium)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers

## 🛠️ Technical Features

- **Ambient Background**: Animated gradient with noise texture overlay
- **Scroll Animations**: Intersection Observer for fade-in effects
- **Glassmorphism**: Subtle backdrop blur effects
- **Responsive Design**: Mobile-first approach
- **Form Validation**: Client-side validation with Web3Forms integration
- **Expandable Details**: Toggle buttons for technical project details

## 📧 Contact

- **Email**: contact@starsophile.qzz.io
- **LinkedIn**: [Rishi Parmar](https://www.linkedin.com/in/rishiparmar01/)
- **Instagram**: [@starsophile](https://www.instagram.com/starsophile/)
- **Work**: [GadgetsTurbo](https://www.gadgetsturbo.in/)

## 🙏 Credits

- **Design & Content**: Rishi Parmar
- **AI Assistance**: Google Antigravity (Claude 4.5 Sonnet)
- **Fonts**: Google Fonts (Playfair Display, Inter, JetBrains Mono)
- **Form Service**: Web3Forms
- **Images**: AI-generated editorial visuals

## 📝 License

This portfolio is open source and free to use as inspiration. Please customize it to reflect your own work and experiences.

---

**Built with systems thinking and product intuition**

*Last Updated: January 2026*
