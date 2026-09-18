import { SectionId } from '../../types/enums';
import styles from './Experience.module.css';

// Add or edit jobs here
const experienceData = [
  {
    id: 1,
    company: "Jami Partners",
    role: "Frontend Intern",
    duration: "Aug 2025 – Jan 2026",
    summary: "Government e-service portal development.",
    responsibilities: [
      "Built responsive user interfaces with React.js and Next.js, integrating REST APIs for dynamic data retrieval.",
      "Enhanced UI consistency and performance across multiple modules of a government e-service portal.",
      "Collaborated with backend developers and designers to deliver accessible, production-ready features."
    ],
    tech: ["React.js", "Next.js", "REST APIs"]
  },
  {
    id: 2,
    company: "Logiciel Services Pvt Ltd",
    role: "C# Intern",
    duration: "Jun 2024 – Sep 2024",
    summary: "Enterprise inventory management system.",
    responsibilities: [
      "Developed inventory management modules utilizing C#, ASP.NET MVC, and SQL Server.",
      "Optimized backend logic and database queries, improving system performance and reliability."
    ],
    tech: ["C#", "ASP.NET MVC", "SQL Server"]
  }
];

const Experience = () => {
  return (
    <section id={SectionId.Experience} className="section">
      <div className="container animate-fade-in" style={{ animationFillMode: 'both', animationDelay: '0.2s' }}>
        
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.subtitle}>Experience</span>
          <h2 className={styles.title}>Where I've Worked</h2>
          <div className={styles.underline}></div>
        </div>

        <div className={styles.timelineContainer}>
          {experienceData.map((job) => (
            <div key={job.id} className={styles.timelineItem}>
              
              {/* Timeline Line and Dot */}
              <div className={styles.timelineMarker}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineLine}></div>
              </div>

              {/* Job Card */}
              <div className={styles.jobCard}>
                
                <div className={styles.jobHeader}>
                  <div className={styles.jobHeaderLeft}>
                    <h3 className={styles.role}>{job.role}</h3>
                    <span className={styles.internshipTag}>Internship</span>
                  </div>
                  <span className={styles.duration}>{job.duration}</span>
                </div>
                
                <h4 className={styles.company}>{job.company}</h4>
                <p className={styles.summary}>{job.summary}</p>
                
                <ul className={styles.responsibilities}>
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>

                <div className={styles.techStack}>
                  {job.tech.map((tech, idx) => (
                    <span key={idx} className={styles.techChip}>{tech}</span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
