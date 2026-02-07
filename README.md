# Genesis Event - Marketing Website

Experience homes that heal. June 26-28, 2026.

## Overview
Marketing website for the Genesis Event—an invitation-only mastermind for conscious community creators expanding TerraLux villages.

## Tech Stack
- Pure HTML/CSS (no build step)
- Eco-luxury design system
- Netlify Forms for applications & newsletter
- Netlify hosting with auto-deploy

## Local Development

```bash
# Serve locally (any static server works)
npx serve .

# Or with Python
python3 -m http.server 8000

# Or with PHP
php -S localhost:8000
```

Visit: `http://localhost:8000`

## Deployment
Automatically deployed via Netlify on push to `main` branch.

### Netlify Forms
Two forms configured:
1. **Application form** (`name="genesis-application"`)
   - Name, Email, Phone, Dream manifestation question
2. **Newsletter** (`name="newsletter"`)
   - Email subscription for future events

Forms are handled by Netlify with built-in spam protection (honeypot).

## Project Structure
```
website/
├── index.html              # Main marketing page
├── netlify.toml           # Netlify configuration
├── src/
│   ├── styles/
│   │   └── eco-luxury.css # Eco-luxury design system
│   └── assets/
│       └── logo.png       # Integrative Organizing logo
└── README.md
```

## Brand Guidelines
- **Colors**: Cream/warm-linen backgrounds, terralux-gold accents
- **Typography**: Inter (primary), Lora (secondary/italic)
- **Aesthetic**: Aesop/Kinfolk-inspired—light, warm, breathable, refined

## Contact
genesis@terralux.org
