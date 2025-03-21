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
              Hi, I'm <span className={styles.heroR}>Raul A.R. </span>
            </Heading>
            <p className="hero__subtitle">
              Computer Engineer and Full Stack Developer based in Barcelona, specializing in backend development and custom VoIP solutions.
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
          I'm a Computer Engineer based in Barcelona, graduated from the {" "}
          <a 
            href="https://www.uab.cat/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.inlineLink}
          >
            Universitat Autònoma de Barcelona
          </a>{" "}
          with a specialization in Computer Science.
          {/* , and since then, I have been fully immersed in the world of software development. */}
        </p>
        <p>
        My expertise lies in full-stack development, with a strong focus on backend systems, particularly using PHP with Laravel. I have experience in API integrations, database management, infrastructure deployment, and scripting automation.
        </p>
        <p >
        Over the years, I have been involved in projects related to VoIP solutions, including automating phone calls for various use cases, real-time call monitoring with Asterisk, and developing platforms for enterprise clients to manage their telecommunication services.
        </p>
        <p >
        In addition to backend development, I have experience with frontend technologies, system administration, and scripting. <br></br>
        I enjoy working in small, collaborative teams where I can contribute to the entire development cycle, from architecture design to deployment and maintenance.
        </p>
        <p>
        Outside of my professional work, I maintain a home lab environment where I develop projects like <a href="/docs/Websites/hack4good">ECO2 </a>, a website that helped my team win a Hackathon. I also enjoy working on personal projects involving C++ for microcontrollers and Python for rapid prototyping.
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
                <h4>Nubelfon - Full Stack Developer & Solutions Developer</h4>
                <span className={styles.experienceDate}>2021 - Present</span>
              </div>
              <h5 className={styles.experienceRole}>Full Stack Developer & Solutions Developer</h5>
              
              <div className={styles.projectsContainer}>
                <h6>Key Achievements:</h6>
                <ul className={styles.timelineList}>
                  <li>Led and developed enterprise VoIP solutions for government and corporate clients</li>
                  <li>Modernized legacy systems through:
                    <ul className={styles.nestedList}>
                      <li>Migration from legacy codebase to Laravel framework</li>
                      <li>Implementation of REST APIs for third-party integrations</li>
                      <li>Database schema optimization for improved performance</li>
                    </ul>
                  </li>
                  <li>Architected 2 major platform upgrades enhancing scalability and maintainability</li>
                  <li>Developed automation scripts reducing repetitive tasks through queue workers</li>
                </ul>

                <h6>Core Responsibilities:</h6>
                <ul className={styles.timelineList}>
                  <li>System integration with Asterisk PBX and VTiger CRM</li>
                  <li>Database design and optimization for high-volume call data management</li>
                  <li>Implementation of security features including Role-Based Access Control (RBAC)</li>
                  <li>Development of real-time monitoring dashboards and automated reporting systems</li>
                  <li>Creation of technical documentation and client onboarding materials</li>
                  <li>Implementation of unit testing for core platform functionalities</li>
                </ul>

                <h6>Notable Projects: (hacer minimizable)</h6>
                <div className={styles.project}>
                  <h4>Automated Calling System <span className={styles.projectDate}>(2021-Present)</span></h4>
                  <ul className={styles.timelineList}>
                    <li>Completed and maintained legacy call automation project as primary developer</li>
                    <li>Implemented modular architecture for client-specific customizations</li>
                    <li>Integrated Asterisk PBX for call handling and monitoring</li>
                    <li>Developed administration interface for call scheduling and tracking</li>
                  </ul>
                </div>

                <div className={styles.project}>
                  <h4>Government Telecom Monitoring Platform <span className={styles.projectDate}>(2022)</span></h4>
                  <ul className={styles.timelineList}>
                    <li>Developed web platform for real-time call agent monitoring</li>
                    <li>Created bash scripts for processing Asterisk call events</li>
                    <li>Implemented CSV/PDF report generation for daily operations</li>
                    <li>Built dashboard displaying real-time call metrics and statistics</li>
                  </ul>
                </div>

                <div className={styles.project}>
                  <h4>Client Services Portal <span className={styles.projectDate}>(2023-Present)</span></h4>
                  <ul className={styles.timelineList}>
                    <li>Restructured database schema for improved scalability</li>
                    <li>Modernized core platform with role-based access control</li>
                    <li>Integrated VTiger CRM with internal systems through centralized data hub</li>
                    <li>Created internal automation tools reducing manual work</li>
                  </ul>
                </div>
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
                <h5 className={styles.experienceRole}>Patient Care Assistant</h5>
                <ul className={styles.timelineList}>
                <li>Balanced full-time engineering studies with healthcare work</li>
                <li>Provided critical support during COVID-19 pandemic surge</li>                </ul>
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