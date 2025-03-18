import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faDownload, faCopy, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useRef } from 'react'; // Añade esta importación

function HeroSection() {
  const githubUsername = "netraular"; // Tu nombre de usuario de GitHub
  const githubProfilePic = `https://github.com/${githubUsername}.png`;

  const [isSpinning, setIsSpinning] = useState(false);
  const [activeButton, setActiveButton] = useState<number | null>(null);  
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Inicializa el audio cuando el componente se monta
    audioRef.current = new Audio('/sounds/spin.mp3'); // Ruta relativa desde la carpeta static
    audioRef.current.volume = 0.3; // Ajusta el volumen si es necesario
  }, []);
  const handleImageClick = () => {
    setIsSpinning(true);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

 // Efecto para manejar el tiempo de la animación
 useEffect(() => {
    if (isSpinning) {
      const timeout = setTimeout(() => setIsSpinning(false), 1000);
      return () => clearTimeout(timeout);
    }
  }, [isSpinning]);

  useEffect(() => {
    let timeouts: NodeJS.Timeout[] = [];
    
    const startSequence = () => {
      setActiveButton(0);
      timeouts.push(setTimeout(() => {
        setActiveButton(1);
        timeouts.push(setTimeout(() => {
          setActiveButton(2);
          timeouts.push(setTimeout(() => {
            setActiveButton(null);
            timeouts.push(setTimeout(startSequence, 8000)); // Espera 10s después del último
          }, 1000));
        }, 1000));
      }, 1000));
    };

    startSequence();
    
    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <header className={ styles.heroBanner}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <Heading as="h1" className="hero__title">
              Hi, I'm Raul A.R.
            </Heading>
            <p className="hero__subtitle">
              Computer Engineer and Full Stack Developer based in Barcelona, specializing in backend development and custom VoIP solutions integrated with web applications.
            </p>
            <p className={styles.heroLocation}>
              💼 Currently building custom VoIp solutions at{" "}
              <a
                href="https://nubelfon.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.companyLink}
              >
                Nubelfon
              </a>
            </p>
            <div className={styles.buttons}>
            <div className={styles.customBorderWrapper}>

            <Link
                className={`button button--primary button--lg ${
                  activeButton === 0 ? styles.activeGlow : ''
                }`}
                to="/">
                View Projects <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={styles.icon}/>
              </Link>
              </div>
              
              <a className={`button button--secondary button--lg ${
                  activeButton === 1 ? styles.activeGlow : ''
                }`}
                href="/resume.pdf"
                download="Raul_AR_CV.pdf">
                Download CV <FontAwesomeIcon icon={faDownload} className={styles.icon}/>
              </a>
              <div className={`${styles.emailContainer} ${
                activeButton === 2 ? styles.activeGlow : ''
              }`}>

                <span className={`button button--lg ${styles.emailText}`} id="emailText">netraular@gmail.com</span>
                <button 
                  className={styles.copyButton}
                  data-tooltip="Copy"
                  onClick={() => {
                    navigator.clipboard.writeText('netraular@gmail.com');
                    // Cambiar el texto temporalmente para indicar que se ha copiado
                    const emailText = document.getElementById('emailText');
                    if (emailText) {
                      emailText.textContent = 'Copied!';
                      setTimeout(() => {
                        emailText.textContent = 'netraular@gmail.com';
                      }, 1000); // Volver al correo después de 2 segundos
                    }
                  }}
                  title="Copy email"
                >
                  <span className={styles.copyIcon}> <FontAwesomeIcon icon={faCopy} className={'${styles.copyIcon} ${styles.icon}'}/> </span>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.imageWrapper}>
              <img 
                src={githubProfilePic} 
                alt="Raul A.R." 
                className={`${styles.profileImage} ${
                  isSpinning ? styles.spin : ''
                }`}
                onClick={handleImageClick} // Usar el handler correcto
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <div className="container">

      <Heading as="h2" className={styles.sectionTitle}>
          About Me
        </Heading>
        <div className={styles.aboutText}>
        <p>
          I'm a Computer Engineer based in Barcelona, I graduated from the {" "}
          <a 
            href="https://www.uab.cat/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.inlineLink}
          >
            Universitat Autònoma de Barcelona
          </a>{" "}
          with a specialization in Computer Science, and since then, I have been fully immersed in the world of software development.
        </p>
        <p>
          My expertise lies in full-stack development, with a strong focus on backend systems, particularly using PHP with Laravel, working on everything from API integrations and database management to infrastructure deployment and automation.
        </p>
        <p >
          Over the years, I have worked on projects involving VoIP solutions, automation of phone calls for different use cases, real-time call monitoring with Asterisk, and building platforms for enterprise clients to manage their telecommunication services.
        </p>
        <p >
          Beyond backend development, I also have experience in frontend technologies, system administration, and scripting. <br></br>
          I enjoy working in small, collaborative teams where I can take part in the entire development cycle, from architecture design to deployment and maintenance.
        </p>
        <p>
          In addition to my professional work, I maintain a home lab environment where I apply and test concepts from my current professional work in a controlled setting. I also enjoy working on projects involving C++ for microcontrollers and Python for AI prototyping.
        </p>
        </div>

        <Tabs>          
        <TabItem value="experience" label={"💼 Professional Experience" as unknown as string} >
            <div className={styles.infoCard}>
              <h3>Work Experience</h3>
              <div className={styles.timelineContent}>
              <div className={styles.experienceItem}>
              <div className={styles.companyLogo}>
                <img src="/img/nubelfon-logo.jpg" alt="Nubelfon Logo" />
              </div>
              <div className={styles.experienceHeader}>
                <h4>Nubelfon</h4>
                <span className={styles.experienceDate}>2021 - Present</span>
              </div>
              <h5 className={styles.experienceRole}>Full Stack Developer & Solutions Developer</h5>
              
              <div className={styles.projectsContainer}>
                <h6>Core Projects:</h6>
                
                <div className={styles.project}>
                  <h4>Automated Calling System (2021-Present)</h4>
                  <ul className={styles.timelineList}>
                    <li>Joined as intern to complete legacy call automation project</li>
                    <li>Took ownership of project after internship, becoming main maintainer</li>
                    <li>Implemented modular architecture for client-specific adaptations</li>
                    <li>Collaborated on Asterisk PBX integration for call handling</li>
                    <li>Migrated legacy codebase to Laravel framework</li>
                    <li>Created administration interface for call scheduling and monitoring</li>
                    <li>Adapted base system for 4+ client-specific implementations including:
                      <ul className={styles.nestedList}>
                        <li>Medical appointment reminders</li>
                        <li>Utility payment notifications</li>
                      </ul>
                    </li>
                  </ul>
                </div>

                <div className={styles.project}>
                  <h4>Government Telecom Monitoring (2022)</h4>
                  <ul className={styles.timelineList}>
                    <li>Developed web platform for call agent monitoring and reporting</li>
                    <li>Created real-time dashboard showing call metrics and statistics</li>
                    <li>Implemented bash scripts for Asterisk call event processing</li>
                    <li>Designed role-based access system for different user types</li>
                    <li>Built CSV/PDF report generators for daily operations review</li>
                  </ul>
                </div>

                <div className={styles.project}>
                <h4>Client Services Portal (2023-Present)</h4>
                  <ul className={styles.timelineList}>
                    <li>Initiated platform modernization:
                      <ul className={styles.nestedList}>
                        <li>Upgraded core libraries while maintaining backwards compatibility</li>
                        <li>Restructured database schema for scalability</li>
                        <li>Implemented Laravel Scheduler for automated tasks</li>
                        <li>Converted legacy scripts to queueable jobs</li>
                      </ul>
                    </li>
                    <li>Key feature developments:
                      <ul className={styles.nestedList}>
                        <li>Centralized data hub integrating VTiger CRM and internal systems</li>
                        <li>Custom reporting engine with PDF/CSV export</li>
                        <li>Role-based service configuration interface</li>
                        <li>Real-time service monitoring dashboard</li>
                      </ul>
                    </li>
                    <li>Developed internal tooling for support team efficiency</li>
                  </ul>
                </div>

                <h6>Development Practices and Technical Contributions:</h6>
                <ul className={styles.timelineList}>
                  <li>Designed system architectures with future scalability in mind, enabling easier feature expansion</li>
                  <li>Developed reusable Laravel modules following modular design principles</li>
                  <li>Created comprehensive client onboarding documentation and tutorials</li>
                  <li>Built automation tools reducing repetitive tasks by 60% for support and accounting teams</li>
                  <li>Managed hybrid infrastructure (bare metal + cloud)</li>
                  <li>Introduced automated unit testing for core functionalities and client-specific implementations</li>
                  <li>Maintained detailed technical documentation including system architecture diagrams</li>
                </ul>
              </div>
            </div>

                <div className={styles.experienceItem}>
                <div className={styles.companyLogo}>
                  <img src="/img/bellvitge-logo.jpg" alt="Hospital Bellvitge Logo" />
                </div>
                <div className={styles.experienceHeader}>
                  <h4>Hospital Universitario Bellvitge</h4>
                  <span className={styles.experienceDate}>2017 - 2021</span>
                </div>
                <h5 className={styles.experienceRole}>Patient Care Assistant (Celador)</h5>
                <ul className={styles.timelineList}>
                  <li>Worked part-time while completing my Computer Engineering degree</li>
                  <li>Increased work hours during the COVID-19 pandemic (March 2020 - July 2021), providing essential support in critical care units and emergency services</li>
                </ul>
              </div>
              </div>
            </div>
          </TabItem>

          <TabItem value="education" label={"🎓 Education" as unknown as string}>
            <div className={styles.infoCard}>
              <h3>Education Background</h3>
              <div className={styles.timelineContent}>
                <div className={styles.experienceItem}>
                  <div className={styles.companyLogo}>
                    <img src="/img/uab-logo.jpg" alt="UAB Logo" />
                  </div>
                  <div className={styles.experienceHeader}>
                    <h4>Universitat Autònoma de Barcelona</h4>
                    <span className={styles.experienceDate}>2017 - 2022</span>
                  </div>
                  <h5 className={styles.experienceRole}>Bachelor's Degree in Computer Engineering</h5>
                  <ul className={styles.timelineList}>
                    <li>Software Engineering with Specialization in computing</li>
                    <li>
                      Final Project: Local Voice Assistant Natural Language to SQL - {' '}
                      <a 
                        href="https://raular.com/docs/Websites/Bachelor%20Thesis" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.inlineLink}
                      >
                        View Thesis Documentation
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </TabItem>

        </Tabs>
      </div>
    </section>
  );
}

function SkillsSection() {
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

  const skillDescriptions = {
    'PHP/Laravel': 'Developed and maintained core backend systems for VoIP platforms. Migrated legacy codebases to Laravel, created REST APIs for frontend/third-party integrations, and implemented queue workers for call processing tasks.',
    'MySQL Database': 'Designed relational database schemas for telecom systems, optimized query performance, and implemented complex reporting queries for call analytics.',
    'Voice APIs (Google/Amazon)': 'Integrated speech-to-text and text-to-speech capabilities for interactive voice systems. Implemented natural language processing for phone calls navigation.',
    'Asterisk PBX': 'Configured and maintained Asterisk servers for call handling. Developed real-time monitoring interfaces and created custom dialplans for client-specific call flows.',
    'REST API Development': 'Built secure and scalable APIs for internal and external integrations, implementing JWT authentication and rate limiting.',
    'Web Server Management': 'Configured and maintained Nginx servers, optimized performance for high-traffic applications, and implemented SSL/TLS encryption.',
    'HTML5/CSS3': 'Built responsive admin interfaces and client portals. Implemented complex layouts for real-time dashboards while maintaining cross-browser compatibility.',
    'JavaScript/jQuery': 'Developed interactive UI components for call monitoring dashboards. Implemented real-time updates using AJAX and WebSockets.',
    'Bootstrap': 'Created consistent UI designs across multiple admin panels and customer-facing interfaces.',
    'Laravel Blade': 'Developed dynamic server-rendered templates with reusable components and optimized caching strategies.',
    'Responsive Design': 'Implemented mobile-first approaches for all client-facing web applications.',
    'Cross-browser Compatibility': 'Ensured consistent rendering across modern browsers and legacy systems used by enterprise clients.',
    'C++ (Microcontrollers)': 'Prototyped IoT devices for environmental monitoring in telecom infrastructure. Developed firmware for custom hardware interfaces.',
    'Python (AI Prototyping)': 'Created proof-of-concept models for call pattern analysis and customer behavior prediction using scikit-learn and TensorFlow.',
    'Bash Scripting': 'Developed deployment scripts and automation tools for server maintenance and log analysis.',
    'Linux Administration': 'Managed production servers including performance monitoring, security hardening, and package management.',
    'Git Version Control': 'Implemented Git workflows for team collaboration and CI/CD pipelines for automated deployments.'
  };

  const toggleSkill = (skill: string) => {
    setExpandedSkill(expandedSkill === skill ? null : skill);
  };

  return (
    <section className={styles.skillsSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Technical Skills
        </Heading>
        <div className={styles.skillsGrid}>
          <div className={styles.skillCard}>
            <h3>Backend & Telecom</h3>
            <ul>
              {['PHP/Laravel', 'MySQL Database', 'Voice APIs (Google/Amazon)', 
                'Asterisk PBX', 'REST API Development', 'Web Server Management'].map((skill) => (
                  <li key={skill}>
                  <div 
                    className={`${styles.skillItem} ${expandedSkill === skill ? styles.activeSkill : ''}`} 
                    onClick={() => toggleSkill(skill)}
                  >
                    <span>{skill}</span>
                    <FontAwesomeIcon 
                      icon={faCaretDown} 
                      className={`${styles.expandIcon} ${
                        expandedSkill === skill ? styles.expanded : ''
                      }`}
                    />
                  </div>
                  {expandedSkill === skill && (
                    <div className={styles.skillDescription}>
                      {skillDescriptions[skill]}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.skillCard}>
            <h3>Frontend & UI</h3>
            <ul>
              {['HTML5/CSS3', 'JavaScript/jQuery', 'Bootstrap', 
                'Laravel Blade', 'Responsive Design', 'Cross-browser Compatibility'].map((skill) => (
                <li key={skill}>
                  <div className={styles.skillItem} onClick={() => toggleSkill(skill)}>
                    <span>{skill}</span>
                    <FontAwesomeIcon 
                      icon={faCaretDown} 
                      className={`${styles.expandIcon} ${
                        expandedSkill === skill ? styles.expanded : ''
                      }`}
                    />
                  </div>
                  {expandedSkill === skill && (
                    <div className={styles.skillDescription}>
                      {skillDescriptions[skill]}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.skillCard}>
            <h3>Others</h3>
            <ul>
              {['C++ (Microcontrollers)', 'Python (AI Prototyping)', 
                'Bash Scripting', 'Linux Administration', 'Git Version Control'].map((skill) => (
                <li key={skill}>
                  <div className={styles.skillItem} onClick={() => toggleSkill(skill)}>
                    <span>{skill}</span>
                    <FontAwesomeIcon 
                      icon={faCaretDown} 
                      className={`${styles.expandIcon} ${
                        expandedSkill === skill ? styles.expanded : ''
                      }`}
                    />
                  </div>
                  {expandedSkill === skill && (
                    <div className={styles.skillDescription}>
                      {skillDescriptions[skill]}
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
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Computer Engineer & Full Stack Developer"
      description="Portfolio of Raul A.R. - Computer Engineer and Full Stack Developer from Barcelona specializing in backend development and telecom solutions">
      <HeroSection />
      <main>
        <AboutSection />
        <SkillsSection />
      </main>
    </Layout>
  );
}