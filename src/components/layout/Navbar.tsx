import { useState, useEffect } from 'react';
import { SectionId } from '../../types/enums';
import { navLinks, personalInfo } from '../../data/portfolioData';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>(SectionId.Home);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
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
    <nav className={`navbar navbar-expand-lg fixed-top transition-all ${isScrolled ? 'py-2 shadow-sm' : 'py-3'} glass`} style={{ borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.1)' : '1px solid transparent', transition: 'all 0.3s ease' }}>
      <div className="container">
        {/* Brand */}
        <a 
          className="navbar-brand fw-bold fs-3" 
          style={{ cursor: 'pointer', letterSpacing: '-0.5px' }}
          onClick={() => scrollToSection(SectionId.Home)}
        >
          <span className="text-white">{personalInfo.name.split(' ')[0]}</span><span style={{ color: 'var(--primary-color)' }}>.</span>
        </a>

        {/* Mobile Toggle */}
        <button 
          className="navbar-toggler border-0 shadow-none text-white p-0" 
          type="button" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navbar Links & Socials */}
        <div className={`collapse navbar-collapse ${mobileMenuOpen ? 'show mt-4' : ''}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center gap-2 gap-lg-2">
            {navLinks.map((link: any) => (
              <li className="nav-item" key={link.id}>
                <a 
                  className={`nav-link fw-medium px-3 rounded-pill ${activeSection === link.id ? 'text-white' : 'text-white-50'}`}
                  style={{ cursor: 'pointer', transition: 'all 0.3s', backgroundColor: activeSection === link.id ? 'rgba(255, 255, 255, 0.1)' : 'transparent' }}
                  onClick={() => scrollToSection(link.id)}
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
