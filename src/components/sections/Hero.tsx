import { personalInfo } from '../../data/portfolioData';
import { SectionId } from '../../types/enums';
import { ArrowRight, Download } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById(SectionId.Contact);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id={SectionId.Home} className={styles.hero}>
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.content}>
          <h2 className={styles.greeting}>Hello, I'm</h2>
          <h1 className={styles.name}>
            <span className="gradient-text">{personalInfo.name}</span>
          </h1>
          <h3 className={styles.role}>{personalInfo.role}</h3>
          <p className={styles.description}>
            Building responsive interfaces & robust backend solutions.
          </p>
          
          <div className={styles.actions}>
            <button onClick={scrollToContact} className="btn btn-primary">
              Let's Talk <ArrowRight size={18} />
            </button>
            <a href="/Iqrar_Ahmed_CV.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              Resume <Download size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
