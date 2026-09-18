import { SectionId } from '../../types/enums';
import { GraduationCap, Award, CheckCircle2, Clock } from 'lucide-react';
import styles from './Education.module.css';

// 📝 Add or edit education here
const educationData = [
  {
    id: 1,
    degree: "BS Software Engineering",
    university: "Muhammad Ali Jinnah University (MAJU)",
    location: "Karachi",
    duration: "Feb 2023 – Present",
    status: "Currently studying"
  }
];

// 📝 Add or edit certifications here
// Status should be either "Completed" or "In Progress"
const certificationsData = [
  {
    id: 1,
    name: "Microservices Architecture",
    status: "Completed"
    // link: "https://example.com/certificate", // optional link
    // issuer: "Coursera" // optional issuer
  },
  {
    id: 2,
    name: "Data Structures & Algorithms",
    status: "Completed"
  },
  {
    id: 3,
    name: "MongoDB for Developers",
    status: "Completed"
  },
  {
    id: 4,
    name: "Node.js",
    status: "Completed"
  },
  {
    id: 5,
    name: "Scrum Fundamentals",
    status: "Completed"
  }
];

const Education = () => {
  return (
    <section id={SectionId.Education} className="section">
      <div className="container animate-fade-in" style={{ animationFillMode: 'both', animationDelay: '0.4s' }}>
        
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.subtitle}>Education</span>
          <h2 className={styles.title}>Education & Certifications</h2>
          <div className={styles.underline}></div>
        </div>

        <div className={styles.grid}>
          
          {/* Education Column */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}>
                <GraduationCap size={24} />
              </div>
              <h3 className={styles.cardTitle}>Academic Background</h3>
            </div>
            
            <div className={styles.educationContent}>
              {educationData.map((edu) => (
                <div key={edu.id} className={styles.eduItem}>
                  <h4 className={styles.degree}>{edu.degree}</h4>
                  <p className={styles.university}>{edu.university}</p>
                  
                  <div className={styles.metaRow}>
                    <span className={styles.metaText}>{edu.location} &bull; {edu.duration}</span>
                  </div>
                  
                  {edu.status === "Currently studying" && (
                    <span className={styles.studyingBadge}>{edu.status}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}>
                <Award size={24} />
              </div>
              <h3 className={styles.cardTitle}>Certifications & Learning</h3>
            </div>
            
            <ul className={styles.certList}>
              {certificationsData.map((cert) => (
                <li key={cert.id} className={styles.certRow}>
                  <span className={styles.certName}>{cert.name}</span>
                  
                  {cert.status === "Completed" ? (
                    <div className={`${styles.badge} ${styles.badgeCompleted}`}>
                      <CheckCircle2 size={14} />
                      <span>Certified</span>
                    </div>
                  ) : (
                    <div className={`${styles.badge} ${styles.badgeProgress}`}>
                      <Clock size={14} />
                      <span>In progress</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
