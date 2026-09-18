import { useState, useEffect } from 'react';
import { SectionId } from '../../types/enums';
import { navLinks, personalInfo } from '../../data/portfolioData';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>(SectionId.Home);

  useEffect(() => {
    let currentSection: SectionId = SectionId.Home;

    // Handle initial routing from URL path
    const initialPath = window.location.pathname.replace('/', '');
    if (initialPath && Object.values(SectionId).includes(initialPath as SectionId)) {
      setTimeout(() => {
        const element = document.getElementById(initialPath);
        if (element) {
          window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
        }
      }, 100);
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = Object.values(SectionId) as string[];
      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          if (currentSection !== section) {
            currentSection = section as SectionId;
            setActiveSection(section as SectionId);
            // Update URL path without hash
            const newPath = section === SectionId.Home ? '/' : `/${section}`;
            window.history.replaceState(null, '', newPath);
          }
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      const newPath = id === SectionId.Home ? '/' : `/${id}`;
      window.history.pushState(null, '', newPath);
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg fixed-top transition-all ${isScrolled ? 'py-2 shadow-sm' : 'py-3'} glass`} style={{ borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.1)' : '1px solid transparent', transition: 'all 0.3s ease' }}>
      <div className="container">
        {/* Brand */}
        <a 
          className="navbar-brand fw-bold fs-3" 
          href="/"
          style={{ cursor: 'pointer', letterSpacing: '-0.5px' }}
          onClick={(e) => scrollToSection(e, SectionId.Home)}
        >
          <span className="text-white">{personalInfo.name.split(' ')[0]}</span><span style={{ color: 'var(--primary-color)' }}>.</span>
        </a>

        {/* Mobile Toggle */}
        <button 
          className="navbar-toggler border-0 shadow-none text-white p-0" 
          type="button" 
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="navbar-menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navbar Links & Socials */}
        <div id="navbar-menu" className={`collapse navbar-collapse ${mobileMenuOpen ? 'show mt-4' : ''}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center gap-2 gap-lg-2">
            {navLinks.map((link: any) => (
              <li className="nav-item" key={link.id}>
                <a 
                  className={`nav-link fw-medium px-3 py-3 py-lg-2 rounded-pill ${activeSection === link.id ? 'text-white' : 'text-white-50'}`}
                  style={{ cursor: 'pointer', transition: 'all 0.3s', backgroundColor: activeSection === link.id ? 'rgba(255, 255, 255, 0.1)' : 'transparent' }}
                  href={link.id === SectionId.Home ? '/' : `/${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  onMouseOver={(e) => {
                    if (activeSection !== link.id) {
                      e.currentTarget.classList.remove('text-white-50');
                      e.currentTarget.classList.add('text-white');
                    }
                  }}
                  onMouseOut={(e) => {
                    if (activeSection !== link.id) {
                      e.currentTarget.classList.remove('text-white');
                      e.currentTarget.classList.add('text-white-50');
                    }
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
