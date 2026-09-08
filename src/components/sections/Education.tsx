import { educationData, certificationsData } from '../../data/portfolioData';
import { SectionId } from '../../types/enums';
import { GraduationCap, Award } from 'lucide-react';
import styles from './Education.module.css';

const Education = () => {
  return (
    <section id={SectionId.Education} className={`section ${styles.educationSection}`}>
      <div className="container">
        <h2 className="section-title">Education & Certifications</h2>
        
        <div className={styles.educationGrid}>
          {/* Education Column */}
          <div className={styles.column}>
            <div className={styles.columnHeader}>
              <GraduationCap className={styles.icon} size={28} />
              <h3>Academic Background</h3>
            </div>
            
            <div className={styles.cards}>
              {educationData.map((edu) => (
                <div key={edu.id} className={`${styles.eduCard} card`}>
                  <h4 className={styles.degree}>{edu.degree}</h4>
                  <p className={styles.institution}>{edu.institution}</p>
                  <span className={styles.duration}>{edu.duration}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div className={styles.column}>
            <div className={styles.columnHeader}>
              <Award className={styles.icon} size={28} />
              <h3>Certifications</h3>
            </div>
            
            <div className={`${styles.certCard} card`}>
              <ul className={styles.certList}>
                {certificationsData.map((cert, idx) => (
                  <li key={idx}>
                    <span className={styles.check}>✓</span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
