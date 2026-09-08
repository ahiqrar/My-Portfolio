import { useState, useEffect } from 'react';
import { SectionId } from '../../types/enums';
import { navLinks, personalInfo } from '../../data/portfolioData';
import { Menu, X, Mail } from 'lucide-react';

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>(SectionId.Home);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = Object.values(SectionId) as string[];
      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          setActiveSection(section as SectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''} glass`}>
      <div className={`container ${styles.navContainer}`}>
        <div className={styles.logo} onClick={() => scrollToSection(SectionId.Home)}>
          <span className="gradient-text">{personalInfo.name.split(' ')[0]}</span>.
        </div>

        {/* Desktop Menu */}
        <ul className={styles.navLinks}>
          {navLinks.map((link: any) => (
            <li key={link.id}>
              <button 
                onClick={() => scrollToSection(link.id)}
                className={`${styles.navLink} ${activeSection === link.id ? styles.active : ''}`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Links */}
        <div className={styles.socialLinks}>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
            <GithubIcon size={20} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
            <LinkedinIcon size={20} />
          </a>
          <a href={`mailto:${personalInfo.email}`} className={styles.iconLink}>
            <Mail size={20} />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={styles.mobileToggle}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileOpen : ''} glass`}>
        <ul className={styles.mobileNavLinks}>
          {navLinks.map((link: any) => (
            <li key={link.id}>
              <button 
                onClick={() => scrollToSection(link.id)}
                className={`${styles.mobileNavLink} ${activeSection === link.id ? styles.active : ''}`}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li className={styles.mobileSocials}>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
              <GithubIcon size={20} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedinIcon size={20} />
            </a>
            <a href={`mailto:${personalInfo.email}`}>
              <Mail size={20} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
