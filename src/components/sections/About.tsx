import { aboutContent } from '../../data/portfolioData';
import { SectionId } from '../../types/enums';
import { Code, Terminal, Database } from 'lucide-react';
import styles from './About.module.css';

const About = () => {
  return (
    <section id={SectionId.About} className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className={styles.aboutGrid}>
          <div className={`${styles.aboutContent} card`}>
            <p className={styles.description}>{aboutContent.description}</p>
            
            <div className={styles.highlights}>
              <div className={styles.highlightItem}>
                <div className={styles.iconWrapper}>
                  <Code size={24} className={styles.icon} />
                </div>
                <div>
                  <h4>Frontend</h4>
                  <p>Building responsive, accessible UIs.</p>
                </div>
              </div>
              
              <div className={styles.highlightItem}>
                <div className={styles.iconWrapper}>
                  <Terminal size={24} className={styles.icon} />
                </div>
                <div>
                  <h4>Backend</h4>
                  <p>Developing robust APIs and server logic.</p>
                </div>
              </div>
              
              <div className={styles.highlightItem}>
                <div className={styles.iconWrapper}>
                  <Database size={24} className={styles.icon} />
                </div>
                <div>
                  <h4>Database</h4>
                  <p>Optimizing queries and managing data.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
