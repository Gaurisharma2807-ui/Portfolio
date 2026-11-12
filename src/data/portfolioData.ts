export type ProjectCategory = 'All' | 'Full-Stack & AI' | 'Data Science';

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: Exclude<ProjectCategory, 'All'>;
  stack: string[];
  summary: string;
  highlights: string[];
  architectureModules: string[];
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  duration: string;
  focus: string;
  bullets: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  note?: string;
}

export type SkillDomainId = 'all' | 'backend' | 'data-science' | 'frontend-ai';

export interface SkillGroup {
  id: string;
  domain: Exclude<SkillDomainId, 'all'>;
  category: string;
  items: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
}

export interface PillarFocus {
  id: string;
  label: string;
  headline: string;
  description: string;
  modules: { name: string; detail: string }[];
}

export const RESUME_PDF_URL = '/assets/aistudio/Gauri_Sharma_Final_Resume_790eb225.pdf';

export const PROFILE = {
  name: 'Gauri Sharma',
  roleLine: 'B.Tech CSE Student · Java & Spring Boot Developer · Data Science',
  location: 'Bareilly, India',
  graduation: 'Expected 2027',
  phone: '+91 9410075379',
  email: 'gaurisharma2807@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/gauri-sharma-84b84b32b',
  linkedinHandle: 'linkedin.com/in/gauri-sharma-84b84b32b',
  githubUrl: 'https://github.com/Gaurisharma2807-ui',
  githubHandle: 'github.com/Gaurisharma2807-ui',
  summary:
    'Computer Science undergraduate graduating in 2027 with hands-on experience in Java, Spring Boot, RESTful APIs, MySQL, Python, data science, and AI-enabled web applications. Strong foundation in Data Structures and Algorithms, OOP, problem solving, debugging, and building responsive database-driven solutions.',
  achievement: 'Academic Scholarship Holder',
};

export const PROOF_METRICS = [
  {
    value: '03',
    label: 'Industry Internships',
    context: 'IBM · Ensino R&D · Main Flow',
  },
  {
    value: '04',
    label: 'Core Engineering Projects',
    context: 'Spring Boot · React · Python',
  },
  {
    value: '07',
    label: 'Verified Certifications',
    context: 'IBM · AWS · Tata · Accenture',
  },
  {
    value: '2027',
    label: 'B.Tech CSE Graduation',
    context: 'Academic Scholarship Holder',
  },
];

export const ENGINEERING_PILLARS: PillarFocus[] = [
  {
    id: 'backend',
    label: 'Java Backend',
    headline: 'Layered REST APIs & Relational Persistence',
    description:
      'Modular backend services built with Spring Boot, JDBC, Servlets, MySQL, and MongoDB with clean authentication and CRUD workflows.',
    modules: [
      { name: 'REST Controllers', detail: 'Spring Boot endpoints & validation' },
      { name: 'Auth & Persistence', detail: 'User sessions, MySQL & MongoDB' },
      { name: 'Core Java OOP', detail: 'Collections, exceptions & modular code' },
    ],
  },
  {
    id: 'ai-apps',
    label: 'AI Systems',
    headline: 'Context-Aware LLM & Media Pipelines',
    description:
      'Production-style web applications integrating Google Gemini and OpenRouter APIs with React and conversational dashboards.',
    modules: [
      { name: 'Gemini & OpenRouter', detail: 'Itineraries, notes, summaries & quizzes' },
      { name: 'Media Extraction', detail: 'yt-dlp captions & async processing' },
      { name: 'Interactive UI', detail: 'React, Tailwind & 2D route maps' },
    ],
  },
  {
    id: 'data-science',
    label: 'Data Science',
    headline: 'Reproducible EDA & Predictive Modeling',
    description:
      'End-to-end data cleaning, statistical visualization, and supervised model evaluation documented in reproducible Jupyter workflows.',
    modules: [
      { name: 'Preprocessing & EDA', detail: 'pandas, NumPy & anomaly detection' },
      { name: 'Visual Storytelling', detail: 'matplotlib, seaborn & Power BI' },
      { name: 'ML Evaluation', detail: 'scikit-learn training & validation' },
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'studyai',
    title: 'StudyAI — AI Video Learning Tool',
    subtitle: 'Full-Stack Learning Platform with 5 Integrated Backend Modules',
    category: 'Full-Stack & AI',
    featured: true,
    stack: ['Java', 'Spring Boot', 'MySQL', 'JavaScript', 'yt-dlp', 'Gemini API', 'OpenRouter API'],
    summary:
      'Developed a full-stack learning platform supporting video processing, AI-generated notes, summaries, quizzes, and contextual question answering through five integrated backend modules.',
    highlights: [
      'Implemented Spring Boot REST APIs with MySQL persistence, user authentication, and searchable video history.',
      'Integrated automated caption extraction using yt-dlp piped directly into LLM prompt workflows.',
      'Built a responsive conversational dashboard delivering structured notes, summaries, quizzes, and contextual Q&A.',
    ],
    architectureModules: [
      'Auth & User Session Service',
      'yt-dlp Caption Extractor',
      'Spring Boot REST Gateway',
      'LLM Notes & Quiz Synthesizer',
      'MySQL Video History Store',
    ],
  },
  {
    id: 'wanderplan-ai',
    title: 'WanderPlan AI',
    subtitle: 'Personalized Multi-Day AI Travel Planner & Interactive Route Map',
    category: 'Full-Stack & AI',
    featured: true,
    stack: ['React', 'Spring Boot', 'MySQL', 'Google Gemini API', 'Tailwind CSS'],
    summary:
      'Architected a full-stack AI travel application that generates personalized, multi-day itineraries tailored to user destinations, budgets, and specific interests using Google Gemini LLM.',
    highlights: [
      'Engineered WanderBot, a context-aware AI assistant for dynamic itinerary adjustments and local recommendations.',
      'Built an interactive 2D vector map allowing travelers to visualize daily routes, accommodations, and dining stops in real time.',
      'Connected React frontend workflows to Spring Boot APIs and MySQL persistence for saved trip plans.',
    ],
    architectureModules: [
      'Gemini Itinerary Generator',
      'WanderBot Context Engine',
      '2D Vector Route Visualizer',
      'Spring Boot Trip API & MySQL',
    ],
  },
  {
    id: 'campusfind',
    title: 'CampusFind',
    subtitle: 'University Lost & Found Portal with Verified Claim Workflows',
    category: 'Full-Stack & AI',
    stack: ['React.js', 'Spring Boot', 'Java', 'MySQL', 'MongoDB', 'Tailwind CSS'],
    summary:
      'Built a campus portal for reporting, searching, matching, and claiming lost or found items with image uploads, student verification records, and admin supervision.',
    highlights: [
      'Designed structured claim workflows capturing roll number, branch, batch, and contact details for accurate item verification.',
      'Implemented dual-database persistence patterns across MySQL and MongoDB alongside image upload handling.',
      'Created administrative supervision views to review claims, match reports, and coordinate item handoffs.',
    ],
    architectureModules: [
      'Item Reporting & Image Upload',
      'Search & Match Engine',
      'Student Verification Form',
      'Admin Supervision Console',
    ],
  },
  {
    id: 'data-science-project',
    title: 'End-to-End Data Science & ML Pipeline',
    subtitle: 'Exploratory Analysis, Preprocessing & Scikit-Learn Evaluation',
    category: 'Data Science',
    stack: ['Python', 'pandas', 'NumPy', 'matplotlib', 'seaborn', 'scikit-learn', 'Jupyter'],
    summary:
      'Performed data cleaning, preprocessing, transformation, visualization, and exploratory data analysis (EDA) on structured and unstructured datasets with reproducible machine learning workflows.',
    highlights: [
      'Cleaned missing values, normalized features, and engineered analytical dimensions using pandas and NumPy.',
      'Uncovered statistical distributions, correlations, and anomalies through matplotlib and seaborn visualizations.',
      'Trained and evaluated scikit-learn models with clear metrics and documented findings in Jupyter Notebooks.',
    ],
    architectureModules: [
      'Data Cleaning & Transformation',
      'Statistical EDA & Plotting',
      'Scikit-Learn Model Training',
      'Reproducible Notebook Report',
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'main-flow',
    company: 'Main Flow Services and Technology Pvt. Ltd.',
    role: 'Data Science Intern',
    duration: 'Aug 2025 - Sep 2025',
    focus: 'Python · pandas · NumPy · scikit-learn · EDA',
    bullets: [
      'Cleaned, transformed, analyzed, and visualized datasets using Python, pandas, NumPy, matplotlib, and seaborn; performed exploratory data analysis to identify patterns, correlations, and anomalies.',
      'Built and evaluated machine-learning models with scikit-learn and documented reproducible workflows in Jupyter Notebooks.',
    ],
  },
  {
    id: 'ensino',
    company: 'Ensino Research and Development Pvt. Ltd.',
    role: 'Core Java Intern',
    duration: '2 Months',
    focus: 'Core Java · OOP · Collections · Debugging',
    bullets: [
      'Applied Core Java concepts including classes, objects, inheritance, polymorphism, abstraction, exception handling, collections, and file handling through hands-on programming exercises.',
      'Strengthened logical reasoning and problem-solving skills by debugging Java programs, identifying errors, and developing modular application-oriented solutions.',
    ],
  },
  {
    id: 'ibm',
    company: 'IBM',
    role: 'Cloud Computing Intern',
    duration: '2 Months',
    focus: 'Cloud Architecture · Virtualization · IaaS / PaaS / SaaS',
    bullets: [
      'Studied cloud architecture, virtualization, deployment models, and IaaS/PaaS/SaaS, with exposure to scalable infrastructure, availability, security fundamentals, and practical cloud use cases.',
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'btech',
    degree: 'Bachelor of Technology (B.Tech), Computer Science',
    institution: 'Shri Ram Murti Smarak College of Engineering & Technology, Bareilly',
    period: '2023 - Present (Expected 2027)',
    note: 'Academic Scholarship Holder',
  },
  {
    id: 'class-xii',
    degree: 'Senior Secondary (Class XII), CBSE',
    institution: 'Madhavrao Scindia Public School',
    period: 'Apr 2022 - May 2023',
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'programming',
    domain: 'backend',
    category: 'Programming Languages',
    items: ['Java', 'Python', 'JavaScript', 'SQL'],
  },
  {
    id: 'cs-fundamentals',
    domain: 'backend',
    category: 'Computer Science Foundations',
    items: ['Data Structures & Algorithms (DSA)', 'Algorithms', 'Problem Solving', 'OOP', 'Debugging'],
  },
  {
    id: 'backend-db',
    domain: 'backend',
    category: 'Backend & Databases',
    items: [
      'Spring Boot',
      'RESTful APIs',
      'JSP',
      'Servlets',
      'JDBC',
      'MySQL',
      'MongoDB',
      'CRUD Operations',
      'Authentication',
    ],
  },
  {
    id: 'frontend',
    domain: 'frontend-ai',
    category: 'Frontend Engineering',
    items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'Responsive Web Design'],
  },
  {
    id: 'data-ml',
    domain: 'data-science',
    category: 'Data Science & Machine Learning',
    items: [
      'pandas',
      'NumPy',
      'matplotlib',
      'seaborn',
      'scikit-learn',
      'EDA',
      'Data Preprocessing',
      'Data Visualization',
      'Power BI',
    ],
  },
  {
    id: 'ai-tools',
    domain: 'frontend-ai',
    category: 'AI & Developer Tooling',
    items: ['Gemini API', 'OpenRouter API', 'Generative AI', 'LLM API', 'yt-dlp', 'Git', 'GitHub', 'Jupyter Notebooks'],
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'ibm-python',
    title: 'Python for Data Science, AI & Development',
    issuer: 'IBM (Coursera)',
  },
  {
    id: 'aws-genai',
    title: 'AWS Academy Graduate — Generative AI Foundation',
    issuer: 'AWS Academy',
  },
  {
    id: 'tata-genai',
    title: 'GenAI-Powered Data Analytics Job Simulation',
    issuer: 'Tata (Forage)',
  },
  {
    id: 'accenture-swe',
    title: 'Nordics Software Engineering Job Simulation',
    issuer: 'Accenture (Forage)',
  },
  {
    id: 'techvision-ds',
    title: 'Data Science Certification',
    issuer: 'TechVision Technologies',
  },
  {
    id: 'powerbi-workshop',
    title: 'Power BI Workshop',
    issuer: 'United Latino Student Association',
  },
  {
    id: 'udemy-python',
    title: 'Learning Python Programming with ChatGPT',
    issuer: 'Udemy',
  },
];
