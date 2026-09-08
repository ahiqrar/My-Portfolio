import { experienceData } from '../../data/portfolioData';
import { SectionId } from '../../types/enums';
import { Briefcase } from 'lucide-react';
import styles from './Experience.module.css';

const Experience = () => {
  return (
    <section id={SectionId.Experience} className={`section ${styles.experienceSection}`}>
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        
        <div className={styles.experienceGrid}>
          {experienceData.map((exp, index) => (
            <div key={exp.id} className={`${styles.experienceCard} card animate-fade-in`} style={{ animationDelay: `${index * 0.2}s` }}>
              <div className={styles.cardHeader}>
                <Briefcase className={styles.icon} size={28} />
                <div>
                  <h3 className={styles.role}>{exp.role}</h3>
                  <h4 className={styles.company}>{exp.company}</h4>
                </div>
              </div>
              
              <span className={styles.duration}>{exp.duration}</span>
              
              <ul className={styles.responsibilities}>
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
