export const personalInfo = {
  name: "Mansi Jadhav",
  title: "Computer Engineering Student | DevOps | Cloud | AI/ML | Blockchain",
  bio: "I am a passionate developer dedicated to building impactful digital solutions. My expertise ranges from crafting seamless Full-Stack Web and Mobile applications to uncovering insights through Data Analysis and Machine Learning.",
  intro: "I love transforming complex problems into elegant, efficient solutions. From automating infrastructure to deploying intelligent systems, I'm driven by innovation and continuous learning.",
  email: "mansikj07@gmail.com",
  github: "https://github.com/mansijadhav07",
  linkedin: "https://linkedin.com/in/mansijadhav07",
};

export const skills = {
  programming: [
    { name: "Python", icon: "Code" },
    { name: "Java", icon: "Code" },
    { name: "C", icon: "Code" },
    { name: "Bash", icon: "Terminal" },
    { name: "JavaScript", icon: "Code" },
  ],
  web: [
    { name: "React", icon: "Globe" },
    { name: "Next.js", icon: "Layout" },
    { name: "HTML", icon: "Code" },
    { name: "CSS", icon: "Palette" },
    { name: "Tailwind", icon: "Zap" },
  ],
  devops: [
    { name: "AWS", icon: "Cloud" },
    { name: "EC2", icon: "Server" },
    { name: "Nginx", icon: "Shield" },
    { name: "Jenkins", icon: "Settings" },
    { name: "Docker", icon: "Package" },
    { name: "Linux", icon: "Terminal" },
  ],
  databases: [
    { name: "MySQL", icon: "Database" },
    { name: "PostgreSQL", icon: "Database" },
  ],
  tools: [
    { name: "Git", icon: "GitBranch" },
    { name: "GitHub", icon: "Github" },
    { name: "APIs", icon: "Plug" },
    { name: "Networking", icon: "Network" },
  ],
};

export const projects = [
  {
    id: 1,
    name: "Zero Downtime Deployment using AWS, Nginx & Jenkins",
    description: "Implemented a robust CI/CD pipeline with zero downtime deployment strategy using AWS EC2, Nginx load balancing, and Jenkins automation.",
    techStack: ["AWS", "Nginx", "Jenkins", "Docker", "Linux"],
    github: "https://github.com/mansijadhav/zero-downtime-deployment",
    liveDemo: "",
  },
  {
    id: 2,
    name: "Self-Healing Infrastructure Monitoring System",
    description: "Built an intelligent monitoring system that automatically detects and resolves infrastructure issues using custom scripts and cloud-native tools.",
    techStack: ["Python", "AWS", "Docker", "Bash", "Monitoring"],
    github: "https://github.com/mansijadhav/self-healing-monitoring",
    liveDemo: "",
  },
  {
    id: 3,
    name: "AI-powered Financial Assistant",
    description: "Developed an AI-driven financial advisor that provides personalized investment recommendations and portfolio management insights.",
    techStack: ["Python", "Machine Learning", "React", "FastAPI", "PostgreSQL"],
    github: "https://github.com/mansijadhav/ai-financial-assistant",
    liveDemo: "https://ai-finance-demo.vercel.app",
  },
  {
    id: 4,
    name: "Hospital Management System",
    description: "Comprehensive hospital management solution with patient records, appointment scheduling, and billing system.",
    techStack: ["React", "Node.js", "MySQL", "Express", "Tailwind"],
    github: "https://github.com/mansijadhav/hospital-management",
    liveDemo: "",
  },
  {
    id: 5,
    name: "College Companion App",
    description: "All-in-one student companion app featuring timetable management, assignment tracking, and campus resources.",
    techStack: ["React Native", "Firebase", "Node.js", "MongoDB"],
    github: "https://github.com/mansijadhav/college-companion",
    liveDemo: "",
  },
  {
    id: 6,
    name: "Private AI Oracle for DeFi (ZK-based)",
    description: "Zero-knowledge proof-based private oracle system for decentralized finance applications ensuring data privacy.",
    techStack: ["Blockchain", "Zero-Knowledge", "Solidity", "Python", "Cryptography"],
    github: "https://github.com/mansijadhav/zk-defi-oracle",
    liveDemo: "",
  },
];

export const experiences = [
  {
    id: 1,
    title: "Hackathon Winner",
    organization: "Tech Innovation Hackathon 2023",
    period: "2023",
    description: "Won first place for developing an AI-powered sustainability solution using machine learning and IoT.",
    type: "achievement",
  },
  {
    id: 2,
    title: "AWS Certified Cloud Practitioner",
    organization: "Amazon Web Services",
    period: "2023",
    description: "Demonstrated understanding of AWS Cloud concepts, services, and best practices.",
    type: "certification",
  },
  {
    id: 3,
    title: "DevOps Intern",
    organization: "Tech Solutions Inc.",
    period: "Summer 2023",
    description: "Implemented CI/CD pipelines and automated infrastructure deployment using Docker and Jenkins.",
    type: "experience",
  },
  {
    id: 4,
    title: "Technical Lead - College Tech Club",
    organization: "Engineering College",
    period: "2022-2023",
    description: "Led technical workshops and organized hackathons for 200+ students.",
    type: "experience",
  },
];

export const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];
