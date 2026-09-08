import { skillsData } from '../../data/portfolioData';
import { SectionId } from '../../types/enums';
import { Layers, Server, Wrench } from 'lucide-react';
import styles from './Skills.module.css';

const Skills = () => {
  return (
    <section id={SectionId.Skills} className="section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className={styles.skillsGrid}>
          {/* Frontend Card */}
          <div className={`${styles.skillCard} card`}>
            <div className={styles.cardHeader}>
              <Layers className={styles.icon} size={28} />
              <h3>Frontend</h3>
            </div>
            <div className={styles.pills}>
              {skillsData.frontend.map((skill, idx) => (
                <span key={idx} className={styles.pill}>{skill}</span>
              ))}
            </div>
          </div>

          {/* Backend Card */}
          <div className={`${styles.skillCard} card`}>
            <div className={styles.cardHeader}>
              <Server className={styles.icon} size={28} />
              <h3>Backend</h3>
            </div>
            <div className={styles.pills}>
              {skillsData.backend.map((skill, idx) => (
                <span key={idx} className={styles.pill}>{skill}</span>
              ))}
            </div>
          </div>

          {/* Tools Card */}
          <div className={`${styles.skillCard} card`}>
            <div className={styles.cardHeader}>
              <Wrench className={styles.icon} size={28} />
              <h3>Tools & Architecture</h3>
            </div>
            <div className={styles.pills}>
              {skillsData.toolsAndArchitecture.map((skill, idx) => (
                <span key={idx} className={styles.pill}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
