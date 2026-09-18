import { useState, useEffect, useRef } from 'react';
import { SectionId } from '../../types/enums';
import { ArrowRight, Download, Minus, Square, X, Mail, ChevronDown } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';
import styles from './Hero.module.css';

const GithubIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

// 📝 Edit all hero content here
const heroConfig = {
  name: "Iqrar Ahmed",
  roles: [
    "Software Engineer",
    "Full-Stack Web Developer",
    "React.js and Next.js Developer",
    "C# and ASP.NET MVC Developer"
  ],
  description: "I build responsive, high-performance frontends and architect scalable backend systems. Whether I'm shipping a government services platform or an enterprise inventory management system, I focus on delivering clean, maintainable, and impactful solutions.",
  socials: {
    github: "https://github.com/ahiqrar",
    linkedin: "https://linkedin.com/in/iqrar-ahmed-68018226b",
    email: "mailto:iqrar.soomro.ahmed@gmail.com"
  },
  stats: [
    { label: "Internships", value: 2 },
    { label: "Full-Stack Projects", value: 2 },
    { label: "Certifications", value: 4 }
  ],
  codeCard: {
    name: "Iqrar Ahmed",
    role: "Software Engineer",
    stack: ["React.js", "Next.js", "Node.js", "C#", "ASP.NET MVC", "SQL Server", "MongoDB", "Salesforce CRM"],
    location: "Karachi, Pakistan",
    available: true
  }
};

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [visibleCodeLines, setVisibleCodeLines] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;

  // Handle Mouse Movement for Spotlight
  const handleMouseMove = (e: React.MouseEvent) => {
    if (prefersReducedMotion || !heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const scrollToContact = () => {
    const element = document.getElementById(SectionId.Contact);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  // Code typing effect
  const totalCodeLines = 11;
  useEffect(() => {
    if (prefersReducedMotion) {
      setVisibleCodeLines(totalCodeLines);
      return;
    }
    const timer = setInterval(() => {
      setVisibleCodeLines(prev => {
        if (prev >= totalCodeLines) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 150);
    return () => clearInterval(timer);
  }, [prefersReducedMotion]);

  // Generate code string block based on visible lines
  const renderCode = () => {
    const { codeCard } = heroConfig;
    const lines = [
      <div key="1"><span className={styles.keyword}>const</span> <span className={styles.variable}>developer</span> <span className={styles.operator}>=</span> {'{'}</div>,
      <div key="2" className={styles.indent}><span className={styles.property}>name:</span> <span className={styles.string}>"{codeCard.name}"</span>,</div>,
      <div key="3" className={styles.indent}><span className={styles.property}>role:</span> <span className={styles.string}>"{codeCard.role}"</span>,</div>,
      <div key="4" className={styles.indent}><span className={styles.property}>stack:</span> {'['}</div>,
      <div key="5" className={styles.indentDouble}>
        {codeCard.stack.slice(0, 4).map((s, i) => <span key={i}><span className={styles.string}>"{s}"</span>{i < 3 ? ', ' : ','}</span>)}
      </div>,
      <div key="6" className={styles.indentDouble}>
        {codeCard.stack.slice(4).map((s, i, arr) => <span key={i}><span className={styles.string}>"{s}"</span>{i < arr.length - 1 ? ', ' : ''}</span>)}
      </div>,
      <div key="7" className={styles.indent}>{'],'}</div>,
      <div key="8" className={styles.indent}><span className={styles.property}>location:</span> <span className={styles.string}>"{codeCard.location}"</span>,</div>,
      <div key="9" className={styles.indent}><span className={styles.property}>available:</span> <span className={styles.boolean}>{codeCard.available ? 'true' : 'false'}</span></div>,
      <div key="10">{'};'}</div>,
      <div key="11"><span className={styles.keyword}>module</span>.<span className={styles.property}>exports</span> <span className={styles.operator}>=</span> <span className={styles.variable}>developer</span>;</div>
    ];

    return (
      <pre className={styles.codePre}>
        <code>
          {lines.slice(0, visibleCodeLines)}
          {visibleCodeLines < totalCodeLines && !prefersReducedMotion && <span className={styles.cursorBlock}>█</span>}
        </code>
      </pre>
    );
  };

  // Simple CountUp Component
  const CountUp = ({ end }: { end: number }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      if (prefersReducedMotion) {
        setCount(end);
        return;
      }
      let start = 0;
      const duration = 1500;
      const stepTime = Math.abs(Math.floor(duration / end));
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, stepTime);
      return () => clearInterval(timer);
    }, [end, prefersReducedMotion]);
    return <span>{count}</span>;
  };

  return (
    <section 
      id={SectionId.Home} 
      className={styles.hero}
      ref={heroRef}
      onMouseMove={handleMouseMove}
      style={{
        '--mouse-x': `${mousePos.x}px`,
        '--mouse-y': `${mousePos.y}px`
      } as React.CSSProperties}
    >
      {/* Background Spotlight */}
      <div className={styles.spotlight}></div>
      <div className={styles.gridOverlay}></div>

      <div className={`container ${styles.heroContainer} animate-fade-in`} style={{ animationFillMode: 'both' }}>
        
        {/* Left Column */}
        <div className={styles.content}>
          <div className={`${styles.availability} ${styles.fadeUp1}`}>
            <span className={styles.pulseDot}></span>
            Available for work
          </div>
          
          <h2 className={`${styles.greeting} ${styles.fadeUp2}`}>HELLO, I'M</h2>
          <h1 className={`${styles.name} ${styles.fadeUp3}`}>
            {heroConfig.name}
          </h1>
          
          <div className={`${styles.roleContainer} ${styles.fadeUp4}`}>
            <h3 className={styles.role}>
              {prefersReducedMotion ? (
                heroConfig.roles[0]
              ) : (
                <Typewriter
                  words={heroConfig.roles}
                  loop={true}
                  cursor
                  cursorStyle='|'
                  typeSpeed={50}
                  deleteSpeed={30}
                  delaySpeed={2000}
                />
              )}
            </h3>
          </div>
          
          <p className={`${styles.description} ${styles.fadeUp5}`}>
            {heroConfig.description}
          </p>

          <div className={`${styles.socialRow} ${styles.fadeUp6}`}>
            <a href={heroConfig.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={styles.socialIcon}><GithubIcon size={22} /></a>
            <a href={heroConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialIcon}><LinkedinIcon size={22} /></a>
            <a href={heroConfig.socials.email} aria-label="Email" className={styles.socialIcon}><Mail size={22} /></a>
          </div>
          
          <div className={`${styles.actions} ${styles.fadeUp7}`}>
            <button onClick={scrollToContact} className={`btn ${styles.primaryBtn} ${styles.magnetic}`}>
              Let's Talk <ArrowRight size={18} className={styles.arrowIcon} />
            </button>
            <a href="/Iqrar_Ahmed_CV.pdf" target="_blank" rel="noopener noreferrer" className={`btn ${styles.secondaryBtn} ${styles.magnetic}`}>
              Resume <Download size={18} />
            </a>
          </div>

          <div className={`${styles.statsRow} ${styles.fadeUp8}`}>
            {heroConfig.stats.map((stat, i) => (
              <div key={i} className={styles.statItem}>
                <span className={styles.statNumber}><CountUp end={stat.value} />{stat.label === "Certifications" && "+"}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column (Code Card) */}
        <div className={`${styles.codeWrapper} ${styles.fadeUp9}`}>
          
          {/* Floating tech icons */}
          <div className={`${styles.floatingIcon} ${styles.float1}`}><img src="https://cdn.simpleicons.org/react/3b82f6" alt="React" /></div>
          <div className={`${styles.floatingIcon} ${styles.float2}`}><img src="https://cdn.simpleicons.org/nextdotjs/ffffff" alt="Next.js" /></div>
          <div className={`${styles.floatingIcon} ${styles.float3}`}><img src="https://cdn.simpleicons.org/nodedotjs/3b82f6" alt="Node.js" /></div>

          <div className={styles.codeEditor}>
            <div className={styles.editorHeader}>
              <div className={styles.editorTitle}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" alt="VS Code" width="16" height="16" />
                iqrar.config.js
              </div>
              <div className={styles.windowsControls}>
                <span className={styles.winMinimize}><Minus size={14} /></span>
                <span className={styles.winMaximize}><Square size={12} /></span>
                <span className={styles.winClose}><X size={16} /></span>
              </div>
            </div>
            <div className={styles.editorBody}>
              {renderCode()}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
        <ChevronDown size={20} className={styles.chevron} />
      </div>
    </section>
  );
};

export default Hero;
