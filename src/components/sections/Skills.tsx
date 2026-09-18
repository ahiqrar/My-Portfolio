import { SectionId } from '../../types/enums';
import { Code, Layout, Server, Wrench, Lightbulb } from 'lucide-react';
import styles from './Skills.module.css';

// 📝 Add or edit skills here
const skillsData = [
  {
    category: "Languages",
    icon: Code,
    skills: [
      { name: "JavaScript (ES6+)", logo: "javascript" },
      { name: "C#", logo: "csharp" },
      { name: "C++", logo: "cplusplus" },
      { name: "SQL", logo: "" }
    ]
  },
  {
    category: "Frontend",
    icon: Layout,
    skills: [
      { name: "React.js", logo: "react" },
      { name: "Next.js", logo: "nextdotjs" },
      { name: "HTML5", logo: "html5" },
      { name: "CSS3", logo: "css3" },
      { name: "Tailwind CSS", logo: "tailwindcss" }
    ]
  },
  {
    category: "Backend and Databases",
    icon: Server,
    skills: [
      { name: "Node.js", logo: "nodedotjs" },
      { name: "ASP.NET MVC", logo: "dotnet" },
      { name: "REST APIs", logo: "" },
      { name: "SQL Server", logo: "microsoftsqlserver" },
      { name: "MongoDB", logo: "mongodb" }
    ]
  },
  {
    category: "Tools and Platforms",
    icon: Wrench,
    skills: [
      { name: "Git", logo: "git" },
      { name: "GitHub", logo: "github" },
      { name: "Postman", logo: "postman" },
      { name: "VS Code", logo: "visualstudiocode" },
      { name: "Visual Studio", logo: "visualstudio" },
      { name: "Salesforce CRM", logo: "salesforce" }
    ]
  },
  {
    category: "Core Concepts",
    icon: Lightbulb,
    skills: [
      { name: "Object-Oriented Programming (OOP)", logo: "" },
      { name: "Data Structures and Algorithms", logo: "" },
      { name: "MVC Architecture", logo: "" }
    ]
  }
];

const Skills = () => {
  return (
    <section id={SectionId.Skills} className="section">
      <div className="container animate-fade-in" style={{ animationFillMode: 'both', animationDelay: '0.3s' }}>
        
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.subtitle}>Skills</span>
          <h2 className={styles.title}>Technical Skills</h2>
          <div className={styles.underline}></div>
          <p className={styles.headerDescription}>Technologies I use to build full-stack web applications.</p>
        </div>
        
        <div className={styles.skillsGrid}>
          {skillsData.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className={styles.skillCard}>
                
                <div className={styles.cardHeader}>
                  <div className={styles.iconWrapper}>
                    <Icon size={20} />
                  </div>
                  <h3 className={styles.categoryTitle}>{category.category}</h3>
                </div>
                
                <div className={styles.divider}></div>
                
                <ul className={styles.pills}>
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className={styles.pill}>
                      {skill.logo && (
                        <img 
                          src={`https://cdn.simpleicons.org/${skill.logo}/a1a1aa`} 
                          alt="" 
                          className={styles.skillLogo}
                          onError={(e) => (e.currentTarget.style.display = 'none')}
                        />
                      )}
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};

export default Skills;
