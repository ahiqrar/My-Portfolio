import { useState, useEffect } from 'react';
import { SectionId } from '../../types/enums';
import { Mail, ArrowUp, MapPin } from 'lucide-react';
import styles from './Footer.module.css';

// 📝 Edit all footer content here
const footerConfig = {
  name: "Iqrar Ahmed",
  tagline: "Software Engineer building responsive, scalable web applications.",
  email: "iqrar.soomro.ahmed@gmail.com",
  location: "Karachi, Pakistan",
  socials: {
    github: "https://github.com/ahiqrar",
    linkedin: "https://linkedin.com/in/iqrar-ahmed-68018226b",
  },
  navLinks: [
    { id: SectionId.Home, label: "Home" },
    { id: SectionId.About, label: "About" },
    { id: SectionId.Experience, label: "Experience" },
    { id: SectionId.Skills, label: "Skills" },
    { id: SectionId.Education, label: "Education" },
    { id: SectionId.Contact, label: "Contact" }
  ],
  builtWith: "Built with React.js and pure CSS Modules"
};

const GithubIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(SectionId.Home);
  const prefersReducedMotion = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;

  useEffect(() => {
    // Show back-to-top button after 400px
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Intersection Observer to highlight current nav link
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    footerConfig.navLinks.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth'
    });
  };

  const scrollToSection = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        
        {/* Main 3-Column Grid */}
        <div className={styles.mainGrid}>
          
          {/* Column 1: Brand */}
          <div className={styles.colBrand}>
            <div className={styles.logo}>
              {footerConfig.name.split(' ')[0]}<span className={styles.logoDot}>.</span>
            </div>
            <p className={styles.tagline}>{footerConfig.tagline}</p>
            <div className={styles.socials}>
              <a href={footerConfig.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={styles.socialBtn}>
                <GithubIcon size={18} />
              </a>
              <a href={footerConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialBtn}>
                <LinkedinIcon size={18} />
              </a>
              <a href={`mailto:${footerConfig.email}`} aria-label="Email" className={styles.socialBtn}>
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className={styles.colNav}>
            <h4 className={styles.colHeading}>Navigation</h4>
            <nav aria-label="Footer" className={styles.navLinks}>
              {footerConfig.navLinks.map((link) => (
                <a 
                  key={link.id} 
                  href={`#${link.id}`} 
                  onClick={(e) => scrollToSection(link.id, e)}
                  className={`${styles.navLink} ${activeSection === link.id ? styles.activeNavLink : ''}`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact */}
          <div className={styles.colContact}>
            <h4 className={styles.colHeading}>Contact</h4>
            <div className={styles.contactItems}>
              <a href={`mailto:${footerConfig.email}`} className={styles.contactItem}>
                <Mail size={16} className={styles.contactIcon} />
                <span>{footerConfig.email}</span>
              </a>
              <div className={styles.contactItem}>
                <MapPin size={16} className={styles.contactIcon} />
                <span>{footerConfig.location}</span>
              </div>
            </div>
            <div className={styles.availability}>
              <span className={styles.pulseDot}></span>
              Available for work
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>&copy; {new Date().getFullYear()} {footerConfig.name}. All rights reserved.</p>
          
          <div className={styles.bottomRight}>
            <span className={styles.builtWith}>{footerConfig.builtWith}</span>
            <button onClick={scrollToTop} className={styles.backToTopInline} aria-label="Back to top">
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

      </div>

      {/* Floating Back To Top Button */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop} 
          className={styles.floatingBackToTop} 
          aria-label="Back to top"
          title="Back to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </footer>
  );
};

export default Footer;
