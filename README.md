# Robert Feradett - Political Portfolio

A modern, responsive political portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Next.js for optimal performance
- **SEO Optimized**: Proper meta tags and structured data
- **Accessible**: Follows accessibility best practices
- **Interactive**: Smooth scrolling navigation and engaging animations

## Sections

- **Hero**: Eye-catching introduction with call-to-action buttons
- **About**: Personal story and core values
- **Issues**: Key policy positions and priorities
- **Experience**: Professional background and achievements
- **Contact**: Contact form and information

## Technologies Used

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js`. The current theme uses:
- Primary: Blue tones (#3b82f6)
- Secondary: Gray tones (#64748b)

### Content
Update the content in each component file:
- `src/components/Hero.tsx` - Main headline and tagline
- `src/components/About.tsx` - Personal information and values
- `src/components/Issues.tsx` - Policy positions
- `src/components/Experience.tsx` - Professional background
- `src/components/Contact.tsx` - Contact information

### Images
Replace placeholder images in the components with actual photos:
- Professional headshot in About section
- Campaign photos in Hero section

## Deployment

The site can be deployed to any platform that supports Next.js:

- **Vercel** (recommended): Connect your GitHub repository
- **Netlify**: Build command: `npm run build`, Publish directory: `.next`
- **AWS Amplify**: Connect your repository and use default settings

## License

This project is for political campaign use. Please ensure compliance with local campaign finance laws.
