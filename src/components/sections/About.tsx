import { SectionId } from '../../types/enums';
import { Globe, Database } from 'lucide-react';
import styles from './About.module.css';

const About = () => {
  return (
    <section id={SectionId.About} className="section">
      <div className="container animate-fade-in" style={{ animationFillMode: 'both', animationDelay: '0.1s' }}>
        
        <div className={styles.sectionHeader}>
          <span className={styles.subtitle}>About Me</span>
          <h2 className={styles.title}>Who I Am</h2>
          <div className={styles.underline}></div>
        </div>

        <div className={styles.aboutGrid}>
          <div className={styles.aboutContent}>
            {/* -- [Option 1 text pasted here for demo purposes] -- */}
            <p className={styles.description}>
              I’m a Software Engineering student at Muhammad Ali Jinnah University, focused on building responsive interfaces, scalable APIs, and efficient data-driven applications. Working seamlessly across frontend, backend, and databases, I engineer full-stack solutions tailored to solve complex real-world problems.
            </p>
            <p className={styles.description}>
              Whether I'm architecting a robust SQL Server database or crafting user-friendly React interfaces, I prioritize writing clean, maintainable code. I thrive on turning ambitious ideas into reliable web experiences that perform at scale.
            </p>
          </div>

          <div className={styles.rightSide}>
            <div className={styles.projectsContainer}>
              
              {/* Project Card 1 */}
              <div className={styles.projectCard}>
                <div className={styles.projectHeader}>
                  <div className={styles.projectIcon}>
                    <Globe size={24} />
                  </div>
                  <div className={styles.projectTitleWrapper}>
                    <h3 className={styles.projectTitle}>Service Desk</h3>
                    <span className={styles.projectSubtitle}>Government Services Platform</span>
                  </div>
                </div>
                <p className={styles.projectDesc}>
                  Built a full-stack platform for a consultancy firm, enabling users to securely request civic services like CNIC renewals and pay utility bills in a centralized hub.
                </p>
                <div className={styles.tags}>
                  <span className={styles.tag}>Next.js</span>
                  <span className={styles.tag}>Node.js</span>
                  <span className={styles.tag}>REST APIs</span>
                  <span className={styles.tag}>JavaScript</span>
                </div>
              </div>

              {/* Project Card 2 */}
              <div className={styles.projectCard}>
                <div className={styles.projectHeader}>
                  <div className={styles.projectIcon}>
                    <Database size={24} />
                  </div>
                  <div className={styles.projectTitleWrapper}>
                    <h3 className={styles.projectTitle}>IT Inventory Management</h3>
                    <span className={styles.projectSubtitle}>Enterprise Asset Tracking</span>
                  </div>
                </div>
                <p className={styles.projectDesc}>
                  Engineered an MVC architecture to track and manage hardware equipment, keeping business logic strictly separated from UI with a reliable SQL Server backbone.
                </p>
                <div className={styles.tags}>
                  <span className={styles.tag}>C#</span>
                  <span className={styles.tag}>ASP.NET MVC</span>
                  <span className={styles.tag}>SQL Server</span>
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
