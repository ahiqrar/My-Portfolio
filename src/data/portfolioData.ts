import { SectionId } from '../types/enums';

export const personalInfo = {
  name: 'Iqrar Ahmed',
  role: 'Software Engineer | Web Developer | .Net MVC | Reactjs | Nextjs | API Integration | SalesForce CRM',
  phone: '+92 333 7244639',
  email: 'iqrar.soomro.ahmed@gmail.com',
  location: 'Karachi, Pakistan',
  linkedin: 'https://linkedin.com/in/iqrar-ahmed-68018226b',
  github: 'https://github.com/ahiqrar',
};

export const aboutContent = {
  description: `I am a Software Engineering student at Mohammad Ali Jinnah University with hands-on experience in full-stack web development. I am confident that my technical skills, internship experience, and strong foundation in computer science fundamentals make me a valuable addition to any organization. I am eager to bring my problem-solving mindset, adaptability, and dedication to writing clean, efficient code to a team where I can contribute meaningfully while continuing to grow as an engineer.`
};

export const experienceData = [
  {
    id: 1,
    role: 'Frontend Intern',
    company: 'Jami Partners',
    duration: 'Aug 2025 - Jan 2026',
    responsibilities: [
      'Built responsive UIs with React.js and Next.js, and integrated REST APIs for dynamic data.',
      'Improved UI consistency and performance across multiple modules of a visa consultancy e-service portal.',
      'Implemented robust state management solutions to streamline complex data flows and enhance user experience.',
      'Partnered with backend developers and designers to ship production-ready, accessible features.'
    ]
  },
  {
    id: 2,
    role: 'C# Intern',
    company: 'Logiciel Services Pvt Ltd',
    duration: 'Jun 2024 - Sep 2024',
    responsibilities: [
      'Built inventory management modules with C#, ASP.NET MVC, and SQL Server.',
      'Optimized backend logic and database queries, improving system performance and reliability.',
      'Designed and developed RESTful API endpoints for seamless frontend-backend communication.',
      'Automated routine data reporting tasks by creating scheduled SQL jobs, significantly reducing manual workload.'
    ]
  }
];

export const skillsData = {
  frontend: ['React.js', 'Next.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS'],
  backend: ['Node.js', 'C#', 'ASP.NET', 'SQL Server', 'MongoDB', 'C++'],
  toolsAndArchitecture: ['Git', 'GitHub', 'Postman', 'VS Code', 'Visual Studio', 'Salesforce CRM', 'OOP', 'Data Structures & Algorithms', 'MVC Architecture']
};

export const educationData = [
  {
    id: 1,
    degree: 'BS Software Engineering',
    institution: 'Mohammad Ali Jinnah University (MAJU), Karachi',
    duration: 'Feb 2023 - Present'
  }
];

export const certificationsData = [
  'Microservices Architecture - Certified',
  'Data Structures & Algorithms - Certified',
  'MongoDB for Developers - Certified',
  'React.js Development - Certified (Ongoing)'
];

export const navLinks = [
  { id: SectionId.Home, label: 'Home' },
  { id: SectionId.About, label: 'About' },
  { id: SectionId.Experience, label: 'Experience' },
  { id: SectionId.Projects, label: 'Projects' },
  { id: SectionId.Skills, label: 'Skills' },
  { id: SectionId.Education, label: 'Education' },
  { id: SectionId.Contact, label: 'Contact' },
];
