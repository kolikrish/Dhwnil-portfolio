# Dhwanil Bhavsar — Personal Portfolio & Showcase

> **Product Growth Engineer · Cybersecurity Enthusiast · Community Builder · Photographer**  
> *Based in Indore, Madhya Pradesh, India*

A personal portfolio website celebrating the intersection of **product engineering, SaaS growth, cybersecurity research, tech communities, and creative photography**. Built with a modern "developer's sketchbook" design language featuring handcrafted annotations, interactive scroll storytelling, and custom typography.

🌐 **Live Website**: [https://dhwanilbhavsar.vercel.app/](https://dhwanilbhavsar.vercel.app/)  
📬 **Contact**: [dhwanilb8@gmail.com](mailto:dhwanilb8@gmail.com) · [LinkedIn](https://www.linkedin.com/in/dhwanilll/) · [GitHub](https://github.com/dhwanill)

---

## ⚡ Highlights & Sections

- **Hero & Identity** — Sketchbook greeting system, interactive presence cursors, live location chip, and framed portrait with SVG doodles.
- **About & Toolbox** — Tabbed story panels (*"The intersection"*, *"Quick bits"*, *"Path so far"*), interactive sticker toolbox, and taped camera-roll polaroids.
- **Scroll Story (*"How I Work"*)** — Three-stage scroll-driven celestial narrative transitioning through night sky and dot-grid paper:
  1. `01 — Explore & Create` (hands-on curiosity across threat vectors and SaaS automations)
  2. `02 — Speak & Educate` (demystifying tech on stage at workshops and auditoriums)
  3. `03 — Rally the Community` (co-leading 600+ developers and mentoring in the open)
- **Work & Projects** — Interactive case studies with simulated terminal outputs, code architecture previews, and outcome metrics:
  - **PhishNet Sentinel** — Real-time ML-powered phishing & communication threat detection engine.
  - **Walkover: Ship It!** — Fast-paced 2D delivery platformer on HTML5 Canvas & Phaser 3.
  - **Godot 4 3D Platformer** — Low-poly tactical survival game powered by GDScript & Vulkan Forward+.
- **Leadership & Community** — Co-host of **The Hackers Meetup Indore** (600+ members), **Breaking Byte** (@breaking.byte), **viaSocket**, and an interactive **Events, Workshops & Seminars** 14-photo gallery with category filtering.
- **Writing & Thought Leadership** — Medium articles covering AI security, OSINT, product subtraction, and tech careers.
- **Verified Certifications** — Verified credentials from Google, Microsoft, Google Cloud Skills Boost, and TryHackMe.
- **Photography Gallery (*@starrry.lens*)** — Visual storytelling captured on a Sony A6000 (astrophotography, nocturnal light painting, urban geometry, and heritage architecture).
- **Navigation & Utilities** — Real-time live clock (IST / UTC+5:30), live weather widget for Indore powered by Open-Meteo, and custom visitor counter.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | [Next.js](https://nextjs.org/) 15 (App Router, Server & Client Components) |
| **Library** | [React](https://react.dev/) 19 |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) v4 (`@theme inline` design tokens & custom `@font-face` bindings) |
| **Typography** | **Gilroy** (Display & Headings), **Poppins Light** (Body & Reading text), Caveat & Gochi Hand (Doodles & Annotations) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) (scroll-driven transforms, sticky tracks, spring physics) |
| **Icons & Art** | Custom Lucide-based SVG icons & bespoke SVG hand-drawn sketchbook doodles |
| **Architecture** | 100% Client-optimized static frontend showcase (Zero external DB dependencies) |

---

## 📁 Project Structure

```text
portfolio-website/
├── public/
│   ├── fonts/
│   │   ├── Gilroy-Light.ttf        # Display & Heading typeface
│   │   └── Poppins-Light.ttf       # Body & Sans typeface
│   └── images/
│       ├── Dhwnil1.jpeg            # Primary profile portrait
│       ├── Dhwnil2.jpeg            # Secondary profile portrait
│       ├── events/                 # 14 event, workshop & seminar photos
│       └── photography/            # 7 Starrry Lens photography captures
├── src/
│   ├── app/
│   │   ├── globals.css             # Tailwind v4 theme, font-face & tokens
│   │   ├── layout.tsx              # Root HTML layout, local fonts, and SEO metadata
│   │   └── page.tsx                # Single-page portfolio composition
│   ├── components/
│   │   ├── about/                  # Story tabs, polaroid stack, toolbox
│   │   ├── certifications/         # Verified security & AI certificates
│   │   ├── community/              # Community leadership & 14-photo events gallery
│   │   ├── contact/                # Contact card & social connection links
│   │   ├── footer/                 # Footer & session-based visitor counter
│   │   ├── hero/                   # Hero section, doodle notes & presence cursor
│   │   ├── nav/                    # Fixed glass navbar, live clock & weather chip
│   │   ├── showcase/               # Dark-mode transition & photography gallery
│   │   ├── story/                  # 3-stage scroll storytelling & scenery canvas
│   │   ├── ui/                     # Hand-drawn doodles, SVGs, typography & reveal
│   │   └── work/                   # Project showcases & simulated terminal cards
│   └── lib/
│       ├── content.ts              # Single source of truth for all portfolio data
│       ├── hooks.ts                # Scroll spy, dark mode detection, media queries
│       └── styles.ts               # Shared design system utility classes
├── package.json
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18.18 or newer recommended)
- `npm`, `pnpm`, or `yarn`

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/dhwanill/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to view the live website.

---

## 📜 Available Scripts

- `npm run dev` — Starts the local Next.js development server with Turbopack.
- `npm run build` — Generates an optimized production build.
- `npm run start` — Runs the compiled production application.
- `npm run typecheck` — Runs `tsc --noEmit` to ensure 100% strict TypeScript type safety.
- `npm run lint` — Lints files using Next.js ESLint configuration.

---

## 📬 Connect with Dhwanil

- **Portfolio**: [dhwanilbhavsar.vercel.app](https://dhwanilbhavsar.vercel.app/)
- **LinkedIn**: [linkedin.com/in/dhwanilll](https://www.linkedin.com/in/dhwanilll/)
- **GitHub**: [github.com/dhwanill](https://github.com/dhwanill)
- **Medium**: [medium.com/@dhwanill](https://medium.com/@dhwanill)
- **Instagram**: [@breaking.byte](https://www.instagram.com/breaking.byte) · [@starrry.lens](https://www.instagram.com/starrry.lens/?hl=hi) · [@viasocket](https://www.instagram.com/viasocket/)
- **Email**: [dhwanilb8@gmail.com](mailto:dhwanilb8@gmail.com)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
