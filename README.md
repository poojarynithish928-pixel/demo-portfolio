# Nithish Poojary — Personal Portfolio Website

A modern, high-performance, and visually impressive personal portfolio website built for **Nithish Poojary**. The website serves as a technical calling card for recruiters, engineering managers, and collaborators.

All personal details are grounded directly in Nithish's verified biodata/LinkedIn export (`Profile.pdf`), and all unverified areas (projects, skills, timeline) feature clearly labeled, editable placeholders that can be customized in seconds.

---

## 🌟 Highlights & Key Features

- **Accurate Personal Data:** 100% verified name, email, location (Bengaluru, Karnataka, India), and LinkedIn profile link directly extracted from `Profile.pdf`.
- **Honest Presentation:** Zero fabricated credentials or artificial work history. Sections with demonstration content are clearly marked with `[Placeholder]` and `[Sample Project]` tags.
- **Modern Obsidian & Cyan Aesthetic:** High-contrast dark theme, glassmorphism cards, glowing spotlights, and responsive typography using Google Fonts (*Plus Jakarta Sans* and *JetBrains Mono*).
- **Centralized Data File:** All personal details, project cards, skill badges, and timeline entries are isolated in `src/data/portfolioData.js`.
- **Interactive Capabilities:**
  - One-click "Copy Email Address" with animated clipboard confirmation toast.
  - Direct `mailto:` action pre-configured with inquiry subject.
  - Direct LinkedIn profile link with safe outbound attributes (`rel="noopener noreferrer"`).
  - Downloadable source biodata PDF via `/Profile.pdf`.
  - In-app "Edit & Customize Data" guide modal.
  - Smooth-scrolling sticky navbar with active section detection and responsive mobile drawer.
- **Production-Ready Performance:** Blazing fast build with Vite, static tree-shaking, and zero heavy CSS frameworks.

---

## 🛠️ Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [React 18](https://react.dev/) |
| **Build Tool & Dev Server** | [Vite 5](https://vitejs.dev/) |
| **Styling** | Modular Vanilla CSS with CSS Custom Properties (Design Tokens) |
| **Typography** | Plus Jakarta Sans & JetBrains Mono (Google Fonts) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Data Architecture** | Single-source JavaScript configuration (`src/data/portfolioData.js`) |

---

## 📁 Project Structure

```
c:/Users/PC - 01/Desktop/2days/
├── implementation.md          # Complete technical design & implementation document
├── README.md                  # Project overview, run instructions, and customization guide
├── Profile.pdf                # Original source biodata PDF
├── package.json               # Dependencies and build scripts
├── vite.config.js             # Vite development server configuration
├── index.html                 # HTML entry with SEO, OpenGraph, and Google Fonts
├── public/
│   ├── favicon.svg            # Custom SVG monogram favicon ("NP")
│   └── Profile.pdf            # Publicly downloadable copy of verified biodata
└── src/
    ├── main.jsx               # React DOM entry mount
    ├── App.jsx                # Layout orchestrator
    ├── data/
    │   └── portfolioData.js   # ⭐ Centralized data file (Edit your content here!)
    ├── components/
    │   ├── Navbar.jsx          # Sticky navigation & responsive mobile drawer
    │   ├── Hero.jsx            # Verified name, location chip, status badge & CTAs
    │   ├── About.jsx           # Grounded bio, quick facts & resume download
    │   ├── Skills.jsx          # Categorized skill badges with placeholder tag
    │   ├── Projects.jsx        # Reusable project cards with tags & repository links
    │   ├── Experience.jsx      # Modular education & career timeline
    │   ├── Contact.jsx         # Email copy action, mailto link & LinkedIn connection
    │   ├── Footer.jsx          # Copyright, verified links & back-to-top button
    │   └── QuickCustomizer.jsx # In-app guide modal for editing portfolioData.js
    └── styles/
        ├── index.css           # Global design tokens, reset, typography, utilities
        ├── navbar.css          # Navigation bar & mobile menu styling
        ├── hero.css            # Hero visual effects, glow spotlight & stats grid
        ├── sections.css        # Layouts for About, Skills, Projects, and Timeline
        └── contact.css         # Contact card, toast notification & footer styles
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18.0.0 or later recommended; currently tested on Node v22.13.1)
- **npm** (v9.0.0 or later)

### Installation
Clone or navigate to the repository folder:
```bash
cd "c:\Users\PC - 01\Desktop\2days"
```

Install dependencies:
```bash
npm install
```

### Running the Development Server
Launch the local dev server with hot-module reloading:
```bash
npm run dev
```
Open your browser and navigate to:
```
http://localhost:3000
```

### Production Build & Preview
To create an optimized production build:
```bash
npm run build
```
To preview the compiled production build locally:
```bash
npm run preview
```

---

## ✏️ How to Personalize Your Content

All data is decoupled from the UI components. You do **not** need to touch React JSX code to update your portfolio.

Simply open [`src/data/portfolioData.js`](file:///c:/Users/PC%20-%2001/Desktop/2days/src/data/portfolioData.js):

### 1. Update Bio & Personal Info
Modify the `personalInfo` object:
```javascript
export const personalInfo = {
  name: "Nithish Poojary",
  headline: "Your Custom Headline Here",
  location: "Bengaluru, Karnataka, India",
  email: "poojarynithish357@gmail.com",
  linkedin: "https://www.linkedin.com/in/nithish-poojary-11003b297/",
  bio: [
    "Your updated bio paragraph 1...",
    "Your updated bio paragraph 2..."
  ]
};
```

### 2. Add or Edit Projects
Locate `projectsData.projects` in `src/data/portfolioData.js`:
```javascript
{
  id: "my-real-project",
  title: "Your Project Name",
  description: "A summary of what the project does and the problem it solves.",
  tags: ["React", "Node.js", "MongoDB"],
  category: "Full Stack",
  githubUrl: "https://github.com/your-username/repo-name",
  demoUrl: "https://your-demo-url.com",
  highlights: [
    "Key engineering achievement 1",
    "Key engineering achievement 2"
  ]
}
```

### 3. Update Skills
Edit `skillsData.categories` to list your verified technologies under Frontend, Backend, Tools, etc.

### 4. Update Education & Experience
Edit `timelineData.items` to list your actual university degree, college name, internships, or work history.

### 5. Update Your Resume PDF
To update your downloadable resume, simply drop your new PDF file into the `public/` directory with the name `Profile.pdf`.

---

## 🔍 Verification & Testing

- **Production Build:** Passes with zero errors (`npm run build`).
- **HTTP Routing:** Verified endpoints (`/`, `/Profile.pdf`, `/favicon.svg`) return HTTP 200 OK.
- **Link Integrity:** Verified active email (`poojarynithish357@gmail.com`) and LinkedIn profile URL (`https://www.linkedin.com/in/nithish-poojary-11003b297/`).
- **Responsive Layout:** Flexbox and CSS Grid designs adapt seamlessly across mobile (< 640px), tablet (641px - 1024px), and desktop (> 1024px).

---

## 📄 License & Credits
- Portfolio Template designed and engineered for **Nithish Poojary**.
- Source data verified from LinkedIn resume export (`Profile.pdf`).
