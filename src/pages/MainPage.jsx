import React, { useState, useEffect, useRef } from 'react';
import { SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb, SiJavascript, SiZapier, SiSupabase, SiFirebase, SiAuth0 } from 'react-icons/si';
import { FaJava, FaEnvelope, FaLinkedin, FaGithub, FaAws, FaMicrosoft, FaKey } from 'react-icons/fa';

const ClerkIcon = <img src="/Clerk.png" alt="Clerk" style={{ width: '60%', height: '60%', objectFit: 'contain' }} />;
const ConvexIcon = <img src="/Convex.png" alt="Convex" style={{ width: '60%', height: '60%', objectFit: 'contain' }} />;


// Data Arrays
const orbit1Icons = [
  { icon: <SiReact />, color: '#61dafb' },
  { icon: <SiNodedotjs />, color: '#68a063' },
  { icon: <SiMongodb />, color: '#4db33d' },
  { icon: <FaJava />, color: '#f89820' },
  { icon: <SiJavascript />, color: '#F7DF1E' },
  { icon: <SiExpress />, color: '#fbbf24' },
  { icon: <SiNextdotjs />, color: '#fff' }
];
const orbit2Icons = [
  { icon: <SiFirebase />, color: '#FFCA28' },
  { icon: <SiSupabase />, color: '#3ECF8E' },
  { icon: <FaAws />, color: '#FF9900' },
  { icon: <SiAuth0 />, color: '#EB5424' },
  { icon: <FaKey />, color: '#fff' },
  { icon: <SiZapier />, color: '#FF4A00' },
  { icon: <FaMicrosoft />, color: '#00A4EF' }
];

const skillsData = [
  { icon: <SiReact />, name: 'React JS', desc: 'Building dynamic, component-driven UIs with hooks, context & advanced patterns.', level: 0.9, color: '#61dafb' },
  { icon: <SiNextdotjs />, name: 'Next JS', desc: 'Full-stack React with SSR, SSG, API routes & edge rendering for blazing performance.', level: 0.85, color: '#fff' },
  { icon: <FaJava />, name: 'Java', desc: 'Object-oriented programming, data structures & algorithms in Java.', level: 0.78, color: '#f89820' },
  { icon: ClerkIcon, name: 'Clerk', desc: 'Seamless authentication & user management — drop-in auth for modern apps.', level: 0.8, color: '#6c47ff' },
  { icon: <SiNodedotjs />, name: 'Node JS', desc: 'Scalable server-side JavaScript runtime powering high-throughput APIs.', level: 0.88, color: '#68a063' },
  { icon: <SiExpress />, name: 'Express JS', desc: 'Minimalist web framework for Node — rapid REST API development.', level: 0.87, color: '#fbbf24' },
  { icon: <SiMongodb />, name: 'MongoDB', desc: 'Flexible NoSQL database design, aggregation pipelines & Atlas cloud hosting.', level: 0.82, color: '#4db33d' },
  { icon: ConvexIcon, name: 'Convex', desc: 'Real-time reactive backend — zero-config, serverless functions & live queries.', level: 0.75, color: '#f97316' },
  { icon: <SiFirebase />, name: 'Firebase', desc: 'Backend-as-a-service for realtime databases, authentication, and hosting.', level: 0.85, color: '#FFCA28' },
  { icon: <SiSupabase />, name: 'Supabase', desc: 'Open source Firebase alternative with Postgres, authentication, and realtime subscriptions.', level: 0.8, color: '#3ECF8E' },
  { icon: <FaAws />, name: 'DynamoDB', desc: 'Fast and flexible NoSQL database service for any scale.', level: 0.75, color: '#FF9900' },
  { icon: <SiAuth0 />, name: 'Auth0', desc: 'Adaptable authentication and authorization platform.', level: 0.8, color: '#EB5424' },
  { icon: <FaKey />, name: 'Kinde', desc: 'Simple, powerful authentication for modern applications.', level: 0.75, color: '#fff' },
  { icon: <SiZapier />, name: 'Zapier', desc: 'Automation platform connecting apps and services to streamline workflows.', level: 0.8, color: '#FF4A00' },
  { icon: <FaMicrosoft />, name: 'Power Automate', desc: 'Service that helps create automated workflows between apps and services.', level: 0.75, color: '#00A4EF' },
];

const projectsData = [
  {
    image: 'Pass_OP.jpg', num: 'PROJECT_01',
    name: 'LockGenius',
    desc: 'LockGenius is a secure, encrypted password manager that stores all your credentials in a tamper-proof digital vault. It features AES-256 encryption, a built-in password generator, and auto-fill capabilities across devices. With zero-knowledge architecture and biometric unlock support, VaultCore puts security and convenience in your hands..',
    tags: ['React JS', 'Node JS', 'MongoDB', 'Express JS', 'Clerk'],
    liveLink: 'https://ecommerce.example.com',
    githubLink: 'https://github.com/shiva23-byte/Pass_OP'
  },
  {
    image: 'Chai.png', num: 'PROJECT_02',
    name: 'The Chai Stack: From Order to Analytics',
    desc: 'The Chai Stack is a full-stack application with three distinct dashboards for customers, employees, and managers. The platform features real-time order management, secure role-based authentication, and interactive analytics for business owners. Built to demonstrate clean architecture and seamless user experiences across all access levels.',
    tags: ['Next JS', 'Convex', 'Clerk', 'Tailwind CSS'],
    liveLink: 'https://chat.example.com',
    githubLink: 'https://github.com/biswojitRout/chat-app'
  },
  {
    image: 'Others/URL.png', num: 'PROJECT_03',
    name: 'LinkSqueeze: Intelligent URL Shortener',
    desc: 'LinkSqueeze transforms long, messy URLs into clean, shareable short links with custom aliases. Every click is tracked with detailed analytics including geolocation, device type, and referral sources. Built for marketers, developers, and anyone who wants data behind every link.',
    tags: ['React JS', 'Node JS', 'Express JS', 'MongoDB'],
    liveLink: 'https://tasks.example.com',
    githubLink: 'https://github.com/biswojitRout/task-manager'
  },
];

const fIconsData = [
  { front: <SiReact />, back: 'React', color: '#61dafb' },
  { front: <SiNextdotjs />, back: 'Next', color: '#fff' },
  { front: <SiNodedotjs />, back: 'Node', color: '#68a063' },
  { front: <SiMongodb />, back: 'Mongo', color: '#4db33d' },
  { front: <SiExpress />, back: 'Express', color: '#fbbf24' },
  { front: <FaJava />, back: 'Java', color: '#f89820' },
  { front: ClerkIcon, back: 'Clerk', color: '#6c47ff' },
  { front: ConvexIcon, back: 'Convex', color: '#f97316' },
];

export default function MainPage() {
  const [redFlash, setRedFlash] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isCertificationsOpen, setIsCertificationsOpen] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  // Canvas Refs
  const rippleRef = useRef(null);
  const starsRef = useRef(null);

  // Handle Scroll Progress
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
      setScrollProgress(scrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track window width for responsive orbits
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Compute orbit radii based on viewport
  const orbit1Radius = windowWidth <= 480 ? 80 : windowWidth <= 768 ? 95 : 130;
  const orbit2Radius = windowWidth <= 480 ? 102 : windowWidth <= 768 ? 120 : 160;

  // Intersection Observer for .reveal elements
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in-view');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Ripple Cursor Logic
  useEffect(() => {
    const rc = rippleRef.current;
    if (!rc) return;
    const rctx = rc.getContext('2d');

    let animationFrameId;
    let mx = -999, my = -999;
    const ripples = [];
    const trail = [];
    const MAX_TRAIL = 28;

    const resize = () => { rc.width = window.innerWidth; rc.height = window.innerHeight; };
    resize();
    window.addEventListener('resize', resize);

    const onMouseMove = (e) => {
      mx = e.clientX; my = e.clientY;
      trail.push({ x: mx, y: my, age: 0 });
      if (trail.length > MAX_TRAIL) trail.shift();
      if (Math.random() < 0.35) {
        ripples.push({ x: mx, y: my, r: 0, maxR: 38 + Math.random() * 28, alpha: 0.7, speed: 1.4 + Math.random() * 1.2 });
      }
    };

    const onClick = (e) => {
      for (let i = 0; i < 4; i++) {
        ripples.push({ x: e.clientX, y: e.clientY, r: 0, maxR: 60 + i * 28, alpha: 0.9, speed: 2.2 + i * 0.5 });
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('click', onClick);

    function drawRipple() {
      rctx.clearRect(0, 0, rc.width, rc.height);
      if (mx > 0) {
        const grad = rctx.createRadialGradient(mx, my, 0, mx, my, 18);
        grad.addColorStop(0, 'rgba(56,189,248,0.9)');
        grad.addColorStop(0.4, 'rgba(56,189,248,0.25)');
        grad.addColorStop(1, 'rgba(56,189,248,0)');
        rctx.beginPath(); rctx.arc(mx, my, 18, 0, Math.PI * 2);
        rctx.fillStyle = grad; rctx.fill();

        rctx.beginPath(); rctx.arc(mx, my, 4, 0, Math.PI * 2);
        rctx.fillStyle = 'rgba(240,244,255,0.95)'; rctx.fill();
      }
      for (let i = ripples.length - 1; i >= 0; i--) {
        const rp = ripples[i];
        rp.r += rp.speed; rp.alpha -= 0.018;
        if (rp.alpha <= 0 || rp.r > rp.maxR) { ripples.splice(i, 1); continue; }
        rctx.beginPath(); rctx.arc(rp.x, rp.y, rp.r, 0, Math.PI * 2);
        rctx.strokeStyle = `rgba(56,189,248,${rp.alpha})`;
        rctx.lineWidth = 1.5;
        rctx.stroke();
        if (rp.r > 10) {
          rctx.beginPath(); rctx.arc(rp.x, rp.y, rp.r * 0.6, 0, Math.PI * 2);
          rctx.strokeStyle = `rgba(251,191,36,${rp.alpha * 0.4})`;
          rctx.lineWidth = 1;
          rctx.stroke();
        }
      }
      trail.forEach(t => t.age++);
      animationFrameId = requestAnimationFrame(drawRipple);
    }
    drawRipple();

    return () => {
      window.removeEventListener('resize', resize);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('click', onClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Stars Canvas Logic
  useEffect(() => {
    const canvas = starsRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let stars = [];

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    const makeStars = () => {
      stars = [];
      for (let i = 0; i < 200; i++) {
        stars.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, r: Math.random() * 1.4 + 0.3, o: Math.random(), s: Math.random() * 0.002 + 0.0005 });
      }
    };

    resize(); makeStars();
    window.addEventListener('resize', () => { resize(); makeStars(); });

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(s => {
        s.o += s.s; if (s.o > 1 || s.o < 0) s.s *= -1;
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(240,244,255,${s.o})`; ctx.fill();
      });
      animationFrameId = requestAnimationFrame(drawStars);
    };
    drawStars();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        if (isAboutOpen) closeAbout();
        if (isContactOpen) closeContact();
        if (isCertificationsOpen) closeCertifications();
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  });

  const openAbout = () => {
    setRedFlash(true);
    setTimeout(() => {
      setRedFlash(false);
      setIsAboutOpen(true);
      document.body.style.overflow = 'hidden';
    }, 200);
  };

  const closeAbout = () => {
    setRedFlash(true);
    setTimeout(() => {
      setRedFlash(false);
      setIsAboutOpen(false);
      document.body.style.overflow = 'auto';
    }, 200);
  };

  const openContact = () => {
    setRedFlash(true);
    setTimeout(() => {
      setRedFlash(false);
      setIsContactOpen(true);
      document.body.style.overflow = 'hidden';
    }, 200);
  };

  const closeContact = () => {
    setRedFlash(true);
    setTimeout(() => {
      setRedFlash(false);
      setIsContactOpen(false);
      document.body.style.overflow = 'auto';
    }, 200);
  };

  const openCertifications = () => {
    setRedFlash(true);
    setTimeout(() => {
      setRedFlash(false);
      setIsCertificationsOpen(true);
      document.body.style.overflow = 'hidden';
    }, 200);
  };

  const closeCertifications = () => {
    setRedFlash(true);
    setTimeout(() => {
      setRedFlash(false);
      setIsCertificationsOpen(false);
      document.body.style.overflow = 'auto';
    }, 200);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('.cf-submit');
    btn.textContent = 'Message Sent ✓';
    btn.style.background = '#22c55e';
    btn.style.boxShadow = '0 0 30px rgba(34,197,94,.5)';
    setShowSuccessToast(true);
    setTimeout(() => {
      btn.textContent = 'Send Message ↵';
      btn.style.background = '';
      btn.style.boxShadow = '';
      e.target.reset();
    }, 3000);
    setTimeout(() => { setShowSuccessToast(false); }, 5000);
  };

  return (
    <>
      <canvas id="rippleCanvas" ref={rippleRef}></canvas>
      <canvas id="stars" ref={starsRef}></canvas>
      <div className="scroll-line" style={{ height: `${scrollProgress}%` }}></div>
      <div className={`red-flash ${redFlash ? 'on' : ''}`}></div>

      <div id="portfolio" className="visible">
        <header>
          <div className="logo">
            <div className="logo-icon">
              <div className="logo-cube">
                <div className="logo-face lf">B</div>
                <div className="logo-face lb">R</div>
                <div className="logo-face lr">⚡</div>
                <div className="logo-face ll">💻</div>
                <div className="logo-face lt">🚀</div>
                <div className="logo-face lbt">🌐</div>
              </div>
            </div>
            BR
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span className="nav-title">MERN STACK DEVELOPER / SOFTWARE DEVELOPER</span>
          </div>
          <nav>
            <a href="#" onClick={(e) => { e.preventDefault(); openAbout(); }}>About</a>
            <a href="#" onClick={(e) => { e.preventDefault(); openContact(); }}>Contact Me</a>
            <a href="#" onClick={(e) => { e.preventDefault(); openCertifications(); }}>Certifications</a>
          </nav>
        </header>

        <section id="hero">
          <div className="hero-glow"></div>
          <HeroSvgObjects />

          <div className="hero-left">
            <div className="hero-greeting">"Hello World"</div>
            <h1 className="hero-name">Hi, I'm<br /><span className="highlight">Biswojit Rout</span></h1>
            <p className="hero-role">MERN Stack Developer & <span>Software Engineer</span></p>
            <p className="hero-desc">With a deep background in full-stack engineering and enterprise system logic, I specialize in building software that lasts. I bridge the gap between modern web frameworks and complex data requirements, ensuring every line of code is modular, maintainable, and secure. Whether it’s optimizing data flow in high-availability systems or developing custom freelance portfolios, I deliver high-performance software tailored to specific business goals.</p>
            <p className="hero-quote">"Code is not just syntax — it's architecture, art, and ambition."</p>
          </div>
          <div className="hero-photo-wrap">
            <div className="orbit orbit-1">
              {orbit1Icons.map((item, i) => {
                const angle = (i / orbit1Icons.length) * Math.PI * 2;
                return <div key={i} className="orbit-icon" style={{ marginLeft: `${Math.cos(angle) * orbit1Radius}px`, marginTop: `${Math.sin(angle) * orbit1Radius}px`, color: item.color }}>{item.icon}</div>
              })}
            </div>
            <div className="orbit orbit-2">
              {orbit2Icons.map((item, i) => {
                const angle = (i / orbit2Icons.length) * Math.PI * 2;
                return <div key={i} className="orbit-icon" style={{ marginLeft: `${Math.cos(angle) * orbit2Radius}px`, marginTop: `${Math.sin(angle) * orbit2Radius}px`, color: item.color }}>{item.icon}</div>
              })}
            </div>
            <div className="photo-ring">
              <img src="Image.jpeg" alt="Biswojit Rout Profile" />
            </div>
          </div>
        </section>

        <section id="skills">
          <div className="skills-bg">
            <div className="skills-stack-wrap">
              <div className="skills-stack left">
                <div className="stack-card"><span className="stack-icon">📊</span> Social media post</div>
                <div className="stack-card"><span className="stack-icon">👥</span> Employee Tracking</div>
                <div className="stack-card"><span className="stack-icon">💳</span> Payment reminder</div>
                <div className="stack-card"><span className="stack-icon">💰</span> Cost Management</div>
              </div>
              <div className="skills-stack right">
                <div className="stack-card"><span className="stack-icon">🚀</span> System Launch</div>
                <div className="stack-card"><span className="stack-icon">🛡️</span> Security Patch</div>
                <div className="stack-card"><span className="stack-icon">📡</span> API Integration</div>
                <div className="stack-card"><span className="stack-icon">⚙️</span> Core Update</div>
              </div>
            </div>
          </div>
          <div className="reveal">
            <div className="section-label">Expertise</div>
            <h2 className="section-title">My <span>Skills</span></h2>
          </div>
          <div className="skills-grid reveal">
            {skillsData.map((s, i) => (
              <div key={i} className="skill-card">
                <span className="skill-icon" style={{ color: s.color }}>{s.icon}</span>
                <div className="skill-name">{s.name}</div>
                <div className="skill-desc">{s.desc}</div>
                <div className="skill-bar"><div className="skill-fill" style={{ width: `${s.level * 100}%` }}></div></div>
                <div className="skill-level">{Math.round(s.level * 100)}%</div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects">
          <div className="reveal">
            <div className="section-label">Work</div>
            <h2 className="section-title">My <span>Projects</span></h2>
          </div>
          <div className="projects-grid reveal">
            {projectsData.map((p, i) => (
              <div key={i} className="project-card">
                <div className="project-header">
                  {p.image ? (
                    <img src={p.image} alt={p.name} className="project-image" />
                  ) : (
                    <div className="project-image-placeholder"></div>
                  )}
                </div>
                <div className="project-body">
                  <div className="project-num">{p.num}</div>
                  <div className="project-name">{p.name}</div>
                  <div className="project-desc">{p.desc}</div>
                  <div className="project-tags">{p.tags.map((t, j) => <span key={j} className="tag">{t}</span>)}</div>
                  <div className="project-links">
                    <a href={p.liveLink} target="_blank" rel="noreferrer" className="plink">⬡ Live Demo</a>
                    <a href={p.githubLink} target="_blank" rel="noreferrer" className="plink">🔗 GitHub</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer>
          <div className="footer-icons reveal">
            {fIconsData.map((f, i) => (
              <div key={i} className="footer-icon-3d">
                <div className="fi3d-inner">
                  <div className="fi3d-front" style={{ color: f.color }}>{f.front}</div>
                  <div className="fi3d-back">{f.back}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="footer-social reveal">
            <a href="https://github.com/dashboard" target="_blank" rel="noreferrer" className="social-btn">
              <span className="sbicon" style={{ display: 'flex', alignItems: 'center' }}><FaGithub /></span><span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/biswojit-rout-792369379?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="social-btn">
              <span className="sbicon" style={{ display: 'flex', alignItems: 'center' }}><FaLinkedin /></span><span>LinkedIn</span>
            </a>
          </div>
          <div className="footer-thanks reveal">Thanks for <span>exploring</span> my website ✦</div>
          <div className="footer-copy">© 2026 Biswojit Rout · Built with passion & pixels</div>
        </footer>
      </div>

      {/* ABOUT OVERLAY */}
      <div id="aboutPage" className={isAboutOpen ? 'open' : ''}>
        <div className="about-page-grid">
          <div className="code-float-side" style={{ top: '10%', left: '5%', animationDelay: '0s' }}>git clone https://github.com/biswojitRout/portfolio.git</div>
          <div className="code-float-side" style={{ top: '25%', right: '10%', animationDelay: '2s' }}>const [skills, setSkills] = useState([]);</div>
          <div className="code-float-side" style={{ bottom: '15%', left: '8%', animationDelay: '4s' }}>npm install --force 🚀</div>
          <div className="code-float-side" style={{ top: '50%', right: '5%', animationDelay: '1s' }}>docker-compose up -d</div>
          <div className="code-float-side" style={{ bottom: '30%', right: '15%', animationDelay: '3s' }}>await brain.load(passion);</div>
        </div>
        <button className="about-close-btn" onClick={closeAbout} title="Close">✕</button>
        <div className="about-page-inner">
          <div className="about-hero">
            <div className="about-avatar">
              <img src="Image.jpeg" alt="Biswojit Rout" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
            </div>
            <div className="about-intro">
              <div className="section-label">Who I Am</div>
              <h2>About <span>Biswojit</span></h2>
              <span className="role-badge">MERN Stack Developer · Software Engineer</span>
              <p>Hey! I'm Biswojit Rout — a passionate full-stack developer who lives and breathes the web. I love turning complex problems into clean, scalable, and beautiful digital experiences.</p>
            </div>
          </div>
          <div>
            <div className="section-label">By The Numbers</div>
            <div className="about-stats-row" style={{ marginTop: '1.5rem' }}>
              <div className="stat-box"><div className="stat-num">5+</div><div className="stat-label">Projects Built</div></div>
              <div className="stat-box"><div className="stat-num">15+</div><div className="stat-label">Technologies</div></div>
              <div className="stat-box"><div className="stat-num">100%</div><div className="stat-label">Passion</div></div>
              <div className="stat-box"><div className="stat-num">∞</div><div className="stat-label">Learning Mode</div></div>
            </div>
          </div>
          <div>
            <div className="section-label">My Story</div>
            <div className="about-story" style={{ marginTop: '1.5rem' }}>
              <div className="story-card"><span className="story-card-icon">🚀</span><h3>How I Started</h3><p>My journey began with curiosity — a simple "how does a website work?" question that spiralled into hours of building, breaking, and rebuilding.</p></div>
              <div className="story-card"><span className="story-card-icon">💡</span><h3>What Drives Me</h3><p>I'm driven by the idea that best code can genuinely improve people's lives. Every project is a chance to craft something meaningful, fast, and elegant.</p></div>
              <div className="story-card"><span className="story-card-icon">🌐</span><h3>Full-Stack Focus</h3><p>From pixel-perfect UIs in React and Next.js to robust Node.js APIs backed by MongoDB — I own the entire stack and love the challenge of making every layer work in harmony.</p></div>
              <div className="story-card"><span className="story-card-icon">📈</span><h3>Always Growing</h3><p>Technology evolves fast and so do I. Whether it's picking up Convex for real-time backends or diving deep into system design, I stay sharp and stay hungry.</p></div>
            </div>
          </div>
          <div>
            <div className="section-label">Journey</div>
            <div className="about-timeline" style={{ marginTop: '1.5rem' }}>
              <div className="tl-item"><div className="tl-year">2022</div><div className="tl-title">Started Web Development</div><div className="tl-desc">Began learning HTML, CSS and JavaScript. Built my first projects and fell in love with the craft of building for the web.</div></div>
              <div className="tl-item"><div className="tl-year">2023</div><div className="tl-title">Dived into the MERN Stack</div><div className="tl-desc">Mastered React, Node.js, Express and MongoDB. Started building full-stack applications end-to-end with real authentication and database layers.</div></div>
              <div className="tl-item"><div className="tl-year">2024</div><div className="tl-title">Expanded to Next.js & Modern Tools</div><div className="tl-desc">Adopted Next.js for SSR and performance. Integrated Clerk for auth and Convex for real-time backends — building production-grade apps.</div></div>
              <div className="tl-item"><div className="tl-year">Now</div><div className="tl-title">Building, Learning & Shipping</div><div className="tl-desc">Actively working on exciting projects, contributing to open-source, and sharpening Java & data structures skills alongside full-stack work.</div></div>
            </div>
          </div>
          <div>
            <div className="section-label">Tech Stack</div>
            <div className="about-tech-grid" style={{ marginTop: '1.5rem' }}>
              {[
                { icon: <SiReact />, name: "React JS", color: "#61dafb" },
                { icon: <SiNextdotjs />, name: "Next JS", color: "#fff" },
                { icon: <SiNodedotjs />, name: "Node JS", color: "#68a063" },
                { icon: <SiExpress />, name: "Express JS", color: "#fbbf24" },
                { icon: <SiMongodb />, name: "MongoDB", color: "#4db33d" },
                { icon: ClerkIcon, name: "Clerk", color: "#6c47ff" },
                { icon: ConvexIcon, name: "Convex", color: "#f97316" },
                { icon: <FaJava />, name: "Java", color: "#f89820" },
                { icon: <SiJavascript />, name: "JavaScript", color: "#F7DF1E" },
                { icon: <SiFirebase />, name: "Firebase", color: "#FFCA28" },
                { icon: <SiSupabase />, name: "Supabase", color: "#3ECF8E" },
                { icon: <FaAws />, name: "DynamoDB", color: "#FF9900" },
                { icon: <SiAuth0 />, name: "Auth0", color: "#EB5424" },
                { icon: <FaKey />, name: "Kinde", color: "#fff" },
                { icon: <SiZapier />, name: "Zapier", color: "#FF4A00" },
                { icon: <FaMicrosoft />, name: "Power Automate", color: "#00A4EF" },
              ].map((t, i) => (
                <span key={i} className="tech-pill">
                  <span style={{ marginRight: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: t.color, width: '1.2em', height: '1.2em' }}>{t.icon}</span>
                  {t.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CONTACT OVERLAY */}
      <div id="contactPage" className={isContactOpen ? 'open' : ''}>
        <div className="contact-page-grid">
          <div className="code-float-side" style={{ top: '15%', left: '10%', animationDelay: '0.5s' }}>ssh biswojit@portfolio.dev</div>
          <div className="code-float-side" style={{ top: '35%', right: '8%', animationDelay: '2.5s' }}>POST /api/contact_me</div>
          <div className="code-float-side" style={{ bottom: '20%', left: '5%', animationDelay: '1.5s' }}>ping -c 4 127.0.0.1</div>
          <div className="code-float-side" style={{ top: '60%', left: '12%', animationDelay: '3.5s' }}>git push origin master --force</div>
          <div className="code-float-side" style={{ bottom: '40%', right: '12%', animationDelay: '4.5s' }}>curl -X GET contact-details</div>
        </div>
        <button className="contact-close-btn" onClick={closeContact} title="Close">✕</button>
        <div className="contact-page-inner">
          <div className="contact-page-header">
            <h2>Let's <span>Connect</span></h2>
            <p>Whether you have a question, a project in mind, or just want to say hi — I'd love to hear from you. My inbox is always open.</p>
          </div>
          <div className="contact-cards-grid">
            <a href="mailto:biswojit@example.com" className="contact-card">
              <div className="cc-icon" style={{ color: '#ef4444' }}><FaEnvelope /></div>
              <div>
                <div className="cc-label">Email</div>
                <div className="cc-value">yourname@example.com</div>
                <div className="cc-action">Send a message</div>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/biswojit-rout-792369379?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="contact-card">
              <div className="cc-icon" style={{ color: '#0077b5' }}><FaLinkedin /></div>
              <div>
                <div className="cc-label">LinkedIn</div>
                <div className="cc-value">/in/yourname</div>
                <div className="cc-action">Connect with me</div>
              </div>
            </a>
            <a href="https://github.com/dashboard" target="_blank" rel="noreferrer" className="contact-card">
              <div className="cc-icon" style={{ color: '#fff' }}><FaGithub /></div>
              <div>
                <div className="cc-label">GitHub</div>
                <div className="cc-value">github.com/</div>
                <div className="cc-action">View my code</div>
              </div>
            </a>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div className="avail-badge">
              <div className="avail-dot"></div> Available for new opportunities
            </div>
          </div>
          <form className="contact-form" onSubmit={handleContactSubmit}>
            <div className="cf-row">
              <div className="cf-field"><label>Your Name</label><input type="text" required placeholder="John Cena" /></div>
              <div className="cf-field"><label>Your Email</label><input type="email" required placeholder="yourname@example.com" /></div>
            </div>
            <div className="cf-field"><label>Message</label><textarea rows="5" required placeholder="How can I help you?"></textarea></div>
            <button type="submit" className="cf-submit">Send Message ↵</button>
          </form>
        </div>
      </div>

      {/* CERTIFICATIONS OVERLAY */}
      <div id="certificationsPage" className={isCertificationsOpen ? 'open' : ''}>
        <div className="cert-page-grid">
          <div className="code-float-side" style={{ top: '15%', left: '10%', animationDelay: '0.5s' }}>const [certs, setCerts] = useState([]);</div>
          <div className="code-float-side" style={{ top: '35%', right: '8%', animationDelay: '2.5s' }}>await loadCertifications();</div>
          <div className="code-float-side" style={{ bottom: '20%', left: '5%', animationDelay: '1.5s' }}>console.log('Achievements Unlocked');</div>
        </div>
        <button className="contact-close-btn" onClick={closeCertifications} title="Close">✕</button>
        <div className="contact-page-inner">
          <div className="contact-page-header">
            <h2>My <span>Certifications</span></h2>
            <p>My journey in skills, achievements, and professional certifications.</p>
          </div>
          <div className="cert-cards-grid">
            <div className="cert-space-3d">
              <div className="cert-space-inner" style={{ padding: '4px' }}>
                <img src="/Basic.jpg" alt="Basic Certification" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
              </div>
            </div>
            <div className="cert-space-3d">
              <div className="cert-space-inner" style={{ padding: '4px' }}>
                <img src="/TCS.jpg" alt="TCS Certification" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
              </div>
            </div>
            <div className="cert-space-3d">
              <div className="cert-space-inner" style={{ padding: '4px' }}>
                <img src="/RAP.jpg" alt="RAP Certification" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
              </div>
            </div>
            <div className="cert-space-3d">
              <div className="cert-space-inner" style={{ padding: '4px' }}>
                <img src="/Oracle.jpg" alt="Oracle Certification" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3D SUCCESS TOAST */}
      <div className={`success-toast ${showSuccessToast ? 'show' : ''}`}>
        <div className="toast-content">
          <div className="toast-icon">✓</div>
          <div className="toast-text">
            <strong>Thanks!</strong>
            <span>The owner will connect with you shortly</span>
          </div>
        </div>
      </div>
    </>
  );
}

// Subcomponent for SVG 3D Objects
function HeroSvgObjects() {
  const torusRef = useRef(); const octaRef = useRef();
  const helixRef = useRef(); const diamondRef = useRef();

  useEffect(() => {
    let t = 0; let animationId;
    const sky = 'rgba(56,189,248,', yellow = 'rgba(251,191,36,', red = 'rgba(239,68,68,', white = 'rgba(240,244,255,';

    function project(x, y, z, cx, cy, fov = 280) {
      const scale = fov / (fov + z);
      return { x: cx + x * scale, y: cy + y * scale, s: scale };
    }
    function clearSvg(el) { while (el.firstChild) el.removeChild(el.firstChild); }
    function line(svg, x1, y1, x2, y2, stroke, sw = 1) {
      const l = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      l.setAttribute('x1', x1); l.setAttribute('y1', y1); l.setAttribute('x2', x2); l.setAttribute('y2', y2);
      l.setAttribute('stroke', stroke); l.setAttribute('stroke-width', sw); l.setAttribute('stroke-linecap', 'round');
      svg.appendChild(l); return l;
    }
    function circle(svg, cx, cy, r, fill, stroke, sw = 1) {
      const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      c.setAttribute('cx', cx); c.setAttribute('cy', cy); c.setAttribute('r', r);
      c.setAttribute('fill', fill || 'none'); c.setAttribute('stroke', stroke || 'none'); c.setAttribute('stroke-width', sw);
      svg.appendChild(c); return c;
    }
    function polygon(svg, pts, fill, stroke, sw = 1, opacity = 1) {
      const p = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
      p.setAttribute('points', pts.map(p => p[0] + ',' + p[1]).join(' '));
      p.setAttribute('fill', fill); p.setAttribute('stroke', stroke); p.setAttribute('stroke-width', sw); p.setAttribute('opacity', opacity);
      svg.appendChild(p); return p;
    }

    function drawTorus() {
      if (!torusRef.current) return;
      clearSvg(torusRef.current);
      const cx = 60, cy = 60, R = 32, r = 10, segs = 24, tubeSegs = 12; const dots = [];
      for (let i = 0; i < segs; i++) {
        const a = (i / segs) * Math.PI * 2;
        for (let j = 0; j < tubeSegs; j++) {
          const b = (j / tubeSegs) * Math.PI * 2;
          const x = (R + r * Math.cos(b + t * 1.5)) * Math.cos(a + t * 0.6);
          const z = (R + r * Math.cos(b + t * 1.5)) * Math.sin(a + t * 0.6);
          const y = r * Math.sin(b + t * 1.5);
          const p = project(x, y, z, cx, cy, 200);
          dots.push({ ...p, z });
        }
      }
      dots.sort((a, b) => a.z - b.z);
      dots.forEach(d => {
        const br = Math.min(1, (d.z + 50) / 80);
        circle(torusRef.current, d.x, d.y, d.s * 2.2, yellow + (0.05 + br * 0.35) + ')', yellow + (0.4 + br * 0.5) + ')', 0.5);
      });
    }

    function drawOcta() {
      if (!octaRef.current) return;
      clearSvg(octaRef.current);
      const cx = 40, cy = 40, s = 28, ry = t * 0.9, rx = t * 0.5;
      const cosY = Math.cos(ry), sinY = Math.sin(ry), cosX = Math.cos(rx), sinX = Math.sin(rx);
      function rot(x, y, z) { let x1 = x * cosY - z * sinY, z1 = x * sinY + z * cosY; let y1 = y * cosX - z1 * sinX, z2 = y * sinX + z1 * cosX; return project(x1, y1, z2, cx, cy, 200); }
      const verts = [rot(0, -s, 0), rot(s, 0, 0), rot(0, 0, s), rot(-s, 0, 0), rot(0, 0, -s), rot(0, s, 0)];
      const faces = [[0, 1, 2], [0, 2, 3], [0, 3, 4], [0, 4, 1], [5, 2, 1], [5, 3, 2], [5, 4, 3], [5, 1, 4]];
      faces.sort((a, b) => { const za = (verts[a[0]].s + verts[a[1]].s + verts[a[2]].s) / 3; const zb = (verts[b[0]].s + verts[b[1]].s + verts[b[2]].s) / 3; return za - zb; });
      faces.forEach((f, i) => {
        const pts = f.map(i => verts[i]); const bright = 0.04 + ((Math.sin(t * 1.3 + i) * .5 + .5) * .08);
        polygon(octaRef.current, pts.map(p => [p.x, p.y]), red + bright + ')', red + '0.75)', 1, 0.9);
      });
    }

    function drawHelix() {
      if (!helixRef.current) return;
      clearSvg(helixRef.current);
      const cx = 30, steps = 20;
      for (let i = 0; i < steps; i++) {
        const y = 5 + i * (120 / steps); const angle = (i / steps) * Math.PI * 4 + t * 1.8;
        const x1 = cx + 18 * Math.cos(angle); const x2 = cx + 18 * Math.cos(angle + Math.PI);
        const r1 = 2.5 + 1.5 * Math.cos(angle); const r2 = 2.5 + 1.5 * Math.cos(angle + Math.PI);
        const a1 = 0.4 + 0.5 * (Math.cos(angle) + 1) / 2; const a2 = 0.4 + 0.5 * (Math.cos(angle + Math.PI) + 1) / 2;
        if (i < steps - 1) {
          const ny = 5 + (i + 1) * (120 / steps); const na = ((i + 1) / steps) * Math.PI * 4 + t * 1.8;
          line(helixRef.current, x1, y, cx + 18 * Math.cos(na), ny, red + '' + a1 + ')', 1);
          line(helixRef.current, x2, y, cx + 18 * Math.cos(na + Math.PI), ny, sky + '' + a2 + ')', 1);
        }
        if (i % 3 === 0) line(helixRef.current, x1, y, x2, y, white + '0.12)', 0.8);
        circle(helixRef.current, x1, y, r1, red + a1 + ')', red + '0.3)', 0.5);
        circle(helixRef.current, x2, y, r2, sky + a2 + ')', sky + '0.3)', 0.5);
      }
    }

    function drawDiamond() {
      if (!diamondRef.current) return;
      clearSvg(diamondRef.current);
      const cx = 25, cy = 25, s = 18, ry = t * 1.1, rx = t * 0.7;
      const cosY = Math.cos(ry), sinY = Math.sin(ry), cosX = Math.cos(rx), sinX = Math.sin(rx);
      function rot(x, y, z) { let x1 = x * cosY - z * sinY, z1 = x * sinY + z * cosY; let y1 = y * cosX - z1 * sinX, z2 = y * sinX + z1 * cosX; return project(x1, y1, z2, cx, cy, 150); }
      const v = [rot(0, -s, 0), rot(s * .7, s * .3, 0), rot(0, s * .3, s * .7), rot(-s * .7, s * .3, 0), rot(0, s * .3, -s * .7), rot(0, s, 0)];
      const edges = [[0, 1], [0, 2], [0, 3], [0, 4], [1, 2], [2, 3], [3, 4], [4, 1], [1, 5], [2, 5], [3, 5], [4, 5]];
      edges.forEach(([a, b]) => line(diamondRef.current, v[a].x, v[a].y, v[b].x, v[b].y, yellow + '0.8)', 1));
      v.forEach(p => circle(diamondRef.current, p.x, p.y, 2, yellow + '0.9)', yellow + '0.4)', 0.4));
    }

    function animateAll() {
      t += 0.018;
      drawTorus(); drawOcta(); drawHelix(); drawDiamond();

      const applyFloat = (id, ax, ay, period) => {
        const el = document.getElementById(id);
        if (el) {
          const dx = Math.sin(t / period * Math.PI * 2) * 12 * ax;
          const dy = Math.cos(t / period * Math.PI * 2) * 10 * ay;
          el.style.transform = `translate(${dx}px,${dy}px)`;
        }
      }
      applyFloat('torusWrap', .5, .8, 9);
      applyFloat('octaWrap', .6, .9, 11);
      applyFloat('helixWrap', .4, .7, 13);
      applyFloat('diamondWrap', .9, .5, 6);

      animationId = requestAnimationFrame(animateAll);
    }
    animateAll();

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div id="heroObjects">
      <div className="obj3d" style={{ bottom: '12%', left: '3%', width: '120px', height: '120px' }} id="torusWrap">
        <svg className="torus-svg" width="120" height="120" viewBox="0 0 120 120" ref={torusRef}></svg>
      </div>
      <div className="obj3d" style={{ top: '45%', right: '2%', width: '80px', height: '80px' }} id="octaWrap">
        <svg width="80" height="80" viewBox="0 0 80 80" ref={octaRef} style={{ filter: 'drop-shadow(0 0 8px rgba(239,68,68,.5))' }}></svg>
      </div>
      <div className="obj3d" style={{ bottom: '5%', right: '12%', width: '60px', height: '130px' }} id="helixWrap">
        <svg className="helix-svg" width="60" height="130" viewBox="0 0 60 130" ref={helixRef}></svg>
      </div>
      <div className="code-float" style={{ top: '20%', left: '0%', animationDelay: '0s' }}>const dev = "Biswojit";</div>
      <div className="code-float" style={{ bottom: '25%', right: '5%', animationDelay: '2.5s' }}>{`{"stack": "MERN"}`}</div>
      <div className="code-float" style={{ top: '65%', left: '1%', animationDelay: '5s' }}>npm run build 🚀</div>
      <div className="obj3d" style={{ top: '35%', left: '3%', width: '50px', height: '50px' }} id="diamondWrap">
        <svg width="50" height="50" viewBox="0 0 50 50" ref={diamondRef} style={{ filter: 'drop-shadow(0 0 8px rgba(251,191,36,.5))' }}></svg>
      </div>
    </div>
  );
}
