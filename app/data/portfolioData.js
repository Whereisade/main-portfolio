export const profile = {
  name: "Adewuyi Fawaz",
  role: "Fullstack Web Developer & UI/UX Designer",
  location: "Lagos, Nigeria",
  email: "fawazadewuyi23@gmail.com",
  phone: "+234 815 507 3211",
  github: "https://github.com/Whereisade",
  linkedin: "https://www.linkedin.com/in/fawaz-adewuyi/",
  portfolio: "https://fawaz-portfolio-ashy.vercel.app/",
  cvFile: "/Fawaz-Adewuyi-CV.docx",
  heroIntro:
    "I build fast, responsive and interactive web apps and I also design clean, user-first interfaces. I’m passionate about creating digital experiences that are not only visually appealing but also intuitive",
  about:
    "I'm a versatile and detail-oriented Fullstack Web Developer and UI/UX Designer with a strong foundation in both frontend and backend development. I specialize in building scalable, responsive, and high-performance web applications using modern technologies like React, Next.js, and Tailwind CSS. On the backend, I work with Django and Django REST Framework to create clean, maintainable code and secure authentication systems. I'm also passionate about crafting intuitive, user-centered digital experiences with Figma and deploying production-ready projects using Vercel and Render",
  headshot:
    "https://res.cloudinary.com/ddrylpaqx/image/upload/v1780998079/my_pic_pyn3ht.jpg",
  highlights: [
    {
      label: "Core Stack",
      value: "React · Next.js · Django · DRF",
    },
    {
      label: "Focus",
      value: "Responsive · Interactive · UX",
    },
    {
      label: "Deployments",
      value: "AWS · Vercel · Render",
    },
  ],
};

export const skills = [
  {
    title: "Frontend",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    items: [
      "Python",
      "Django",
      "Django REST Framework",
      "JWT / Token Auth",
      "Node.js",
      "FastAPI",
    ],
  },
  {
    title: "Database",
    items: ["PostgreSQL", "Supabase", "MongoDB", "SQL", "ORMs (Django)"],
  },
  {
    title: "DevOps & Tools",
    items: ["Git", "GitHub", "CI/CD", "Vercel", "Render", "AWS", "Linux", "Docker"],
  },
  {
    title: "Design",
    items: ["Figma", "Adobe Photoshop", "Adobe Illustrator"],
  },
];

export const featuredProjects = [
  {
    title: "NIEMR — EMR System",
    type: "Fullstack",
    description:
      "Mobile-first EMR for Nigerian healthcare settings. Role-based workflows for facilities, providers and patients with clinical encounters and automatic sync.",
    highlights: [
      "Professional clinical workflows",
      "Role-based access + audit trails",
      "Labs/Pharmacy modules + notifications",
    ],
    tags: ["Next.js", "Django", "DRF", "PostgreSQL", "AWS"],
    liveLink: "https://niemr.com/",
    image:
      "https://res.cloudinary.com/ddrylpaqx/image/upload/v1771957336/Screenshot_2026-02-24_191940_m6pk7g.png",
    featured: true,
  },
  {
    title: "Omowunmi’s Kitchen",
    type: "Frontend",
    description:
      "Responsive Catering website showcasing professional services and a gallery, with strong UX, performance optimization and SEO-friendly structure.",
    highlights: ["Mobile-first layout", "Image optimization", "Service + gallery sections"],
    tags: ["Next.js", "Tailwind CSS", "SEO"],
    liveLink: "https://www.omowunmikitchen.com.ng/",
    image:
      "https://res.cloudinary.com/ddrylpaqx/image/upload/v1741865533/Screenshot_2025-03-13_122528_ts8cij.png",
  },
  {
    title: "Semis",
    type: "Frontend",
    description:
      "Collaborated on the end-to-end product for integrating B2B functionality into an existing B2C application, aligning user experience with business goals",
    highlights: ["Real Project Collaboration", "B2B functionality", "Automated Gap Analysis", "Figma Prototyping"],
    tags: ["Next.js", "Tailwind CSS", "Figma", "Agile", "B2B", "AWS"],
    liveLink: "https://www.semis.reispartechnologies.com/",
    image:
      "https://res.cloudinary.com/ddrylpaqx/image/upload/v1781025320/Screenshot_2026-06-09_181505_l9kclk.png",
  },
  {
    title: "Booking Management System",
    type: "Fullstack",
    description:
      "Admin dashboard for bookings and invoices with secure auth and PDF generation, integrated to a DRF API.",
    highlights: ["Token auth", "Dynamic forms", "PDF export (jsPDF)"],
    tags: ["Next.js", "Tailwind", "DRF"],
    liveLink: "https://wunmi-books.vercel.app/",
    githubLink: "https://github.com/Whereisade/wunmi-books-admin",
    image:
      "https://res.cloudinary.com/ddrylpaqx/image/upload/v1741865532/Screenshot_2025-03-13_123149_bvci9m.png",
  },
  {
    title: "Booking Management API",
    type: "Backend",
    description:
      "REST API for nested booking data, dynamic fee calculations, analytics and reporting.",
    highlights: ["DRF serializers", "Auth + permissions", "Reporting endpoints"],
    tags: ["Django", "DRF", "PostgreSQL"],
    liveLink: "https://wunmi-books.onrender.com/",
    githubLink: "https://github.com/Whereisade/Wunmi-books-api",
    image:
      "https://res.cloudinary.com/ddrylpaqx/image/upload/v1741865747/Gemini_Generated_Image_xi5iquxi5iquxi5i_lr2whu.jpg",
  },
  {
    title: "Ori‑Ire Hospital Website",
    type: "Frontend",
    description:
      "Healthcare website with strong hierarchy, responsive layouts and clear service presentation.",
    highlights: ["Clear service structure", "Fast pages", "Mobile-first"],
    tags: ["Next.js", "Tailwind CSS"],
    liveLink: "https://healthcare-eta-liard.vercel.app/",
    image:
      "https://res.cloudinary.com/ddrylpaqx/image/upload/v1741865533/Screenshot_2025-03-13_122555_gg08lw.png",
  },
];

export const designProjects = [
  {
    title: "FlexBuy — E‑commerce Web App",
    description:
      "E‑commerce experience with advanced search filters, streamlined cart/checkout and vendor review flows.",
    link: "https://shorturl.at/iNjNS",
  },
  {
    title: "BodySync — Fitness Mobile App",
    description:
      "Gym locator + trainer connection + workout/nutrition flows, backed by user research and prototyping.",
    link: "https://shorturl.at/OQbA1",
  },
  {
    title: "LaHome — iOS Hotel Booking",
    description:
      "iOS hotel booking interface following Apple HIG, with search, listing and booking flows.",
    link: "https://shorturl.at/2FIy6",
  },
  {
    title: "CareBridge — Healthcare Website Design",
    description:
      "Professional healthcare website with strong hierarchy, doctor profiles and appointment flows.",
    link: "https://www.figma.com/design/c4vgxKau729Dgks2HhD2xJ/Flex-Buy?node-id=443-3654",
  },
];

export const branding = [
  {
    title: "Press‑on Nails by NomNom",
    description:
      "Circular emblem logo with delicate natural accents for social and marketing assets.",
    image:
      "https://res.cloudinary.com/ddrylpaqx/image/upload/v1743203268/Nails_by_NomNom_1_dz8jyn.png",
    link: "https://res.cloudinary.com/ddrylpaqx/image/upload/v1743203268/Nails_by_NomNom_1_dz8jyn.png",
  },
  {
    title: "Raeven TV",
    description:
      "Bold entertainment brand identity optimized for social profile use (Instagram/TikTok/WhatsApp).",
    image:
      "https://res.cloudinary.com/ddrylpaqx/image/upload/v1741610323/cirlce_logo_hrceck.png",
    link: "https://res.cloudinary.com/ddrylpaqx/image/upload/v1741610323/cirlce_logo_hrceck.png",
  },
];

export const experience = [
  {
    title: "Full Stack Developer (Remote)",
    company: "Silicon Health Technologies Limited",
    points: [
      "Engineered RBAC for hospital, provider and patient flows with secure authentication and verification workflows.",
      "Designed offline-first encounters and background sync for low-connectivity environments.",
      "Built notifications, PDF export, abnormal-result flagging and global search to support clinical workflows.",
    ],
  },
  {
    title: "Fullstack Developer",
    company: "Omowunmi’s Kitchen (Lagos)",
    points: [
      "Built responsive web apps with Next.js, Tailwind CSS, Django and PostgreSQL.",
      "Integrated secure APIs, auth flows and data management for production use.",
      "Collaborated in an agile setup with designers and stakeholders to deliver features on time.",
    ],
  },
  {
    title: "Junior Product Engineer (Remote)",
    company: "Reispar Technologies",
    points: [
      "Led product design for B2B features added to an existing B2C product.",
      "Created user flows, wireframes and high-fidelity prototypes in Figma.",
      "Validated designs via feedback loops and usability testing in agile sprints.",
    ],
  },
  {
    title: "Fullstack Developer Intern",
    company: "Univelcity (Lagos)",
    points: [
      "Built responsive interfaces with React/Next.js and translated Figma designs into UI.",
      "Developed REST APIs with Django/DRF and integrated PostgreSQL.",
      "Worked with Git workflows and deployed projects using Vercel and Render.",
    ],
  },
];

export const certifications = [
  "UI/UX Design & Prototyping — Univelcity (2023)",
  "Frontend Web Development with React — Univelcity (2023)",
  "Backend with Python Django — Univelcity (2024)",
];

export const education = [
  "SSCE — Dee Unique College, Lagos",
  "B.Sc Accounting — Babcock University",
];
