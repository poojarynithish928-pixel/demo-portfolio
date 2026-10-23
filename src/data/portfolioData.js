/**
 * ====================================================================
 * PORTFOLIO DATA CONFIGURATION
 * ====================================================================
 * Source of truth for Nithish Poojary's portfolio website.
 * 
 * Verified Personal Information:
 * - Extracted directly from uploaded biodata (Profile.pdf)
 * - Name: Nithish Poojary
 * - Location: Bengaluru, Karnataka, India
 * - Email: poojarynithish357@gmail.com
 * - LinkedIn: https://www.linkedin.com/in/nithish-poojary-11003b297/
 * 
 * NOTE ON PLACEHOLDERS:
 * As per guidelines, no skills, projects, certifications, or work
 * history have been invented. Sections with sample/placeholder items
 * are clearly marked with `isPlaceholder: true` and visible UI tags so
 * they can be easily identified and customized.
 */

export const personalInfo = {
  name: "Nithish Poojary",
  headline: "Technology & Software Development",
  location: "Bengaluru, Karnataka, India",
  email: "poojarynithish357@gmail.com",
  linkedin: "https://www.linkedin.com/in/nithish-poojary-11003b297/",
  resumeUrl: "/Profile.pdf",
  status: "Open to opportunities & collaboration",
  availability: "Available for internships, full-time roles & projects",
  bio: [
    "Welcome to my personal portfolio. I am based in Bengaluru, Karnataka, India — the technological hub of India. I am passionate about technology, software engineering, and creating reliable, high-impact digital solutions.",
    "This portfolio website is connected to my verified LinkedIn profile and contact channels. All project and skill cards below include editable templates so I can showcase new repositories, technical milestones, and engineering achievements as they are completed."
  ],
  stats: [
    { label: "Location", value: "Bengaluru, IN", isVerified: true },
    { label: "Status", value: "Available", isVerified: true },
    { label: "Network", value: "LinkedIn Verified", isVerified: true },
    { label: "Portfolio Status", value: "Active", isVerified: true },
  ]
};

export const skillsData = {
  sectionTitle: "Technical Competencies",
  sectionSubtitle: "Core technologies, frameworks, and developer workflows",
  isPlaceholder: true,
  placeholderNotice: "Skills below are structured placeholders. You can edit or replace them in src/data/portfolioData.js.",
  categories: [
    {
      name: "Frontend Development",
      description: "Modern web user interfaces & responsive experiences",
      skills: ["React", "JavaScript (ES6+)", "HTML5 & CSS3", "Responsive UI/UX", "Vite"]
    },
    {
      name: "Backend & Systems",
      description: "Server architecture, API design & data storage",
      skills: ["Node.js", "RESTful APIs", "Python", "SQL / Relational DBs", "JSON"]
    },
    {
      name: "Tools & Practices",
      description: "Version control, deployment & engineering workflows",
      skills: ["Git & GitHub", "VS Code", "Terminal / CLI", "Component Architecture", "Vercel / Netlify"]
    }
  ]
};

export const projectsData = {
  sectionTitle: "Featured Projects",
  sectionSubtitle: "A showcase of engineering builds, architecture patterns, and applications",
  isPlaceholder: true,
  placeholderNotice: "The items below are sample project layouts designed to demonstrate visual presentation. Replace them with your actual GitHub projects in src/data/portfolioData.js.",
  projects: [
    {
      id: "project-1",
      title: "Interactive Full-Stack Web Application",
      description: "A modern, high-performance web application featuring component-driven design, real-time client-state synchronization, and responsive layouts.",
      tags: ["React", "JavaScript", "CSS Modules", "Vite"],
      category: "Full Stack",
      featured: true,
      isPlaceholder: true,
      githubUrl: "https://github.com/",
      demoUrl: "https://example.com",
      highlights: [
        "Modular component hierarchy with reusable UI patterns",
        "Optimized client-side rendering and asset delivery",
        "Accessible ARIA landmarks and keyboard navigation"
      ]
    },
    {
      id: "project-2",
      title: "Cloud Data Center Optimization Architecture",
      description: "An analytical platform evaluating resource allocation, reliability metrics, and operational efficiency across distributed cloud environments.",
      tags: ["Python", "Data Processing", "System Design", "Cloud Infrastructure"],
      category: "Systems & Cloud",
      featured: true,
      isPlaceholder: true,
      githubUrl: "https://github.com/",
      demoUrl: "https://example.com",
      highlights: [
        "Simulated load balancing and energy-aware server clustering",
        "Algorithmic cost vs. reliability trade-off modeling",
        "Modular data pipelines ready for real-time telemetry"
      ]
    },
    {
      id: "project-3",
      title: "Network Intrusion & Anomaly Detection Prototype",
      description: "A defensive cybersecurity framework prototype detecting anomalous traffic patterns and security deviations in networked systems.",
      tags: ["Python", "Network Protocols", "Security Analysis", "Telemetry"],
      category: "Security & Networking",
      featured: false,
      isPlaceholder: true,
      githubUrl: "https://github.com/",
      demoUrl: "https://example.com",
      highlights: [
        "Packet flow inspection and statistical variance detection",
        "Custom heuristic thresholding for threat mitigation",
        "Structured alert logging and reporting dashboard"
      ]
    }
  ]
};

export const timelineData = {
  sectionTitle: "Education & Experience",
  sectionSubtitle: "Academic milestones, practical training, and engineering journeys",
  isPlaceholder: true,
  placeholderNotice: "Education and professional milestones can be populated here in src/data/portfolioData.js when ready.",
  items: [
    {
      id: "timeline-1",
      type: "education",
      title: "Bachelor of Engineering / Technology",
      institution: "[Your University / College Name]",
      location: "Karnataka, India",
      period: "Present / Expected",
      description: "Pursuing engineering studies focusing on computer science, software engineering principles, and data systems. Update this item with your institution and specialization.",
      isPlaceholder: true
    },
    {
      id: "timeline-2",
      type: "experience",
      title: "Software Engineering & Academic Projects",
      institution: "Project Labs & Independent Development",
      location: "Bengaluru, Karnataka, India",
      period: "Ongoing",
      description: "Developing practical applications, studying cloud computing fundamentals, and collaborating on academic laboratory coursework.",
      isPlaceholder: true
    }
  ]
};

export const navigationLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Timeline", href: "#timeline" },
  { name: "Contact", href: "#contact" }
];
