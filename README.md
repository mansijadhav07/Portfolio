# Mansi Jadhav - Portfolio Website

A modern, responsive personal portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, minimal UI with glassmorphism effects and smooth animations
- **Dark/Light Mode**: Seamless theme switching with system preference detection
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth scrolling, hover effects, and micro-interactions
- **Accessible**: Semantic HTML with ARIA labels and keyboard navigation
- **SEO Optimized**: Meta tags, structured data, and search engine friendly
- **Type Safe**: Full TypeScript implementation for better development experience

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animation**: CSS animations and transitions
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── navbar.tsx           # Navigation with theme toggle
│   ├── hero.tsx             # Hero section with animated text
│   ├── about.tsx            # About section
│   ├── skills.tsx           # Skills showcase with icons
│   ├── projects.tsx         # Project cards and gallery
│   ├── experience.tsx      # Experience and achievements
│   ├── contact.tsx          # Contact form and social links
│   └── footer.tsx           # Footer with back-to-top
├── lib/
│   ├── data.ts              # Portfolio data and content
│   └── utils.ts              # Utility functions
├── package.json
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Personal Information

Edit `lib/data.ts` to update:

- Personal details (name, bio, contact info)
- Skills and technologies
- Project information
- Experience and achievements
- Social media links

### Styling

- Modify `tailwind.config.ts` for theme customization
- Update `app/globals.css` for custom CSS variables and animations
- Adjust component styles in individual component files

### Colors and Theme

The theme uses CSS variables defined in `globals.css`. You can customize:

- Primary colors (blue/purple/cyan gradients)
- Dark mode colors
- Glassmorphism effects
- Animation keyframes

## 📱 Sections

1. **Hero**: Animated introduction with call-to-action buttons
2. **About**: Professional bio and key highlights
3. **Skills**: Categorized technical skills with icons
4. **Projects**: Featured projects with tech stack and links
5. **Experience**: Achievements, certifications, and work experience
6. **Contact**: Contact form and social media links
7. **Footer**: Quick links and back-to-top button

## 🌟 Features Implemented

- ✅ Responsive design for all screen sizes
- ✅ Dark/light theme toggle with system preference
- ✅ Smooth scrolling navigation
- ✅ Active section highlighting in navbar
- ✅ Animated hero text with typing effect
- ✅ Glassmorphism cards with hover effects
- ✅ Project cards with tech stack badges
- ✅ Contact form with validation
- ✅ Social media integration
- ✅ Back-to-top button
- ✅ SEO optimization
- ✅ Accessibility features

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on push to main branch

### Netlify

1. Run `npm run build`
2. Upload the `.next` folder to Netlify
3. Configure build settings

### Other Platforms

The project can be deployed to any platform that supports Next.js applications.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](issues).

## 📞 Contact

Built with ❤️ by Mansi Jadhav

- GitHub: [@mansijadhav](https://github.com/mansijadhav)
- LinkedIn: [Mansi Jadhav](https://linkedin.com/in/mansijadhav)
- Email: mansi.jadhav@example.com

---

"Let's build something impactful together!"
