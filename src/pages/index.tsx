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
import { faDatabase, faMicrophone, faPhone, faCode, faServer, faFileCode, faMobileScreen, faMicrochip, faTerminal} from '@fortawesome/free-solid-svg-icons';
import { faLaravel, faHtml5, faJs, faBootstrap, faPython, faLinux, faGitAlt} from '@fortawesome/free-brands-svg-icons';
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
                to="/showcase">
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
  const Project = ({ title, date, children }: { title: string; date: string; children: ReactNode }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
      <div className={styles.project}>
        <div 
          className={styles.projectHeader} 
          onClick={() => setIsExpanded(!isExpanded)}
          role="button"
          tabIndex={0}
        >
        <h4>{title}</h4>
        <div className={styles.headerRight}>
          <span className={styles.projectDate}>({date})</span>
          <FontAwesomeIcon 
            icon={faCaretDown} 
            className={`${styles.projectChevron} ${isExpanded ? styles.expanded : ''}`}
          />
        </div>
          
        </div>
        {isExpanded && (
          <ul className={styles.timelineList}>
            {children}
          </ul>
        )}
      </div>
    );
  };

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
          </p>
          <p>
            My expertise lies in full-stack development, with a strong focus on backend systems, particularly using PHP with Laravel. I have experience in API integrations, database management, infrastructure deployment, and scripting automation.
          </p>
          <p>
            Over the years, I have been involved in projects related to VoIP solutions, including automating phone calls for various use cases, real-time call monitoring with Asterisk, and developing platforms for enterprise clients to manage their telecommunication services.
          </p>
          <p>
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
                  
                  <div className={styles.projectsContainer}>
                    <h4 className={styles.experienceRole}>Key Achievements:</h4>
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

                    <h4 className={styles.experienceRole}>Core Responsibilities:</h4>
                    <ul className={styles.timelineList}>
                      <li>System integration with Asterisk PBX and VTiger CRM</li>
                      <li>Database design and optimization for high-volume call data management</li>
                      <li>Implementation of security features including Role-Based Access Control (RBAC)</li>
                      <li>Development of real-time monitoring dashboards and automated reporting systems</li>
                      <li>Creation of technical documentation and client onboarding materials</li>
                      <li>Implementation of unit testing for core platform functionalities</li>
                    </ul>

                    <h4 className={styles.experienceRole}>Notable Projects:</h4>
                    <Project 
                      title="Automated Calling System" 
                      date="2021-Present"
                    >
                      <li>Completed and maintained legacy call automation project as primary developer</li>
                      <li>Implemented modular architecture for client-specific customizations</li>
                      <li>Integrated Asterisk PBX for call handling and monitoring</li>
                      <li>Developed administration interface for call scheduling and tracking</li>
                    </Project>

                    <Project 
                      title="Government Telecom Monitoring Platform" 
                      date="2022"
                    >
                      <li>Developed web platform for real-time call agent monitoring</li>
                      <li>Created bash scripts for processing Asterisk call events</li>
                      <li>Implemented CSV/PDF report generation for daily operations</li>
                      <li>Built dashboard displaying real-time call metrics and statistics</li>
                    </Project>

                    <Project 
                      title="Client Services Portal" 
                      date="2023-Present"
                    >
                      <li>Restructured database schema for improved scalability</li>
                      <li>Modernized core platform with role-based access control</li>
                      <li>Integrated VTiger CRM with internal systems through centralized data hub</li>
                      <li>Created internal automation tools reducing manual work</li>
                    </Project>
                  </div>
                </div>

                <div className={styles.experienceItem}>
                  <div className={styles.companyLogo}>
                    <img src="/img/bellvitge-logo.jpg" alt="Hospital Bellvitge Logo" />
                  </div>
                  <div className={styles.experienceHeader}>
                    <h4>Hospital Universitario Bellvitge - Patient Care Assistant</h4>
                    <span className={styles.experienceDate}>2017 - 2021</span>
                  </div>
                  <h5 className={styles.experienceRole}></h5>
                  <ul className={styles.timelineList}>
                    <li>Balanced full-time engineering studies with healthcare work</li>
                    <li>Provided critical support during COVID-19 pandemic surge</li>
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

                <div className={styles.experienceItem}>
        <div className={styles.companyLogo}>
          <img src="/img/firstB2.png" alt="Cambridge English Logo" />
        </div>
        <div className={styles.experienceHeader}>
          <h4>First Certificate in English - B2 Level - Cambridge English Assessment</h4>
          <span className={styles.experienceDate}>2016</span>
        </div>

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
    'PHP/Laravel': {
      description: 'Developed and maintained core backend systems for VoIP platforms. Migrated legacy codebases to Laravel, created REST APIs for frontend/third-party integrations, and implemented queue workers for call processing tasks.',
      icon: faLaravel
    },
    'MySQL Database': {
      description: 'Designed relational database schemas for telecom systems, optimized query performance, and implemented complex reporting queries for call analytics.',
      icon: faDatabase
    },
    'Voice APIs (Google/Amazon)': {
      description: 'Integrated speech-to-text and text-to-speech capabilities for interactive voice systems. Implemented natural language processing for phone calls navigation.',
      icon: faMicrophone
    },
    'Asterisk PBX': {
      description: 'Configured applications interacting with Asterisk PBX. Developed call monitoring programs and reporting dashboards. Created custom call flows using LLMs for specific client requirements.',
      icon: faPhone
    },
    'REST API Development': {
      description: 'Built Laravel APIs to enable clients to interact with our services through their own portals/platforms. Developed documentation and integration examples for third-party developers.',
      icon: faCode
    },
    'Web Server Management': {
      description: 'Managed both Nginx and Apache web servers across development and production environments. Configured web applications, development frameworks, and database connections.',
      icon: faServer
    },
    'HTML5/CSS3': {
      description: 'Built responsive admin interfaces and client portals. Implemented complex layouts for real-time dashboards while maintaining cross-browser compatibility.',
      icon: faHtml5
    },
    'JavaScript/jQuery': {
      description: 'Developed interactive UI components for call monitoring dashboards. Implemented real-time updates using AJAX and WebSockets.',
      icon: faJs
    },
    'Bootstrap': {
      description: 'Created consistent UI designs across multiple admin panels and customer-facing interfaces. Served as the primary styling library for component cohesion throughout projects.',
      icon: faBootstrap
    },
    'Laravel Blade': {
      description: 'Developed dynamic server-rendered templates with reusable components for efficient frontend-backend integration.',
      icon: faFileCode
    },
    'Responsive Design': {
      description: 'Implemented mobile-first approaches for all client-facing web applications.',
      icon: faMobileScreen
    },
    'C++ (Microcontrollers)': {
      description: 'Used during university studies and as a hobbyist. Develop programs for microcontrollers using platforms like Arduino, PlatformIO, and ESP-IDF for personal electronics projects.',
      icon: faMicrochip
    },
    'Python (Fast Prototyping)': {
      description: 'Created custom applications for clients and rapid proof-of-concept development. Used for scripting, automation, and quick implementation of ideas.',
      icon: faPython
    },
    'Bash Scripting': {
      description: 'Developed deployment scripts and automation tools for server maintenance and log analysis.',
      icon: faTerminal
    },
    'Linux Administration': {
      description: 'Managed production servers including performance monitoring, security hardening, and package management. Administered Proxmox-based servers both in cloud and local environments.',
      icon: faLinux
    },
    'Git Version Control': {
      description: 'Used Git for version control across personal and professional projects. Managed repositories, branches, and collaborative workflows for development teams.',
      icon: faGitAlt
    }
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
                      <div className={styles.skillNameContainer}>

                    <FontAwesomeIcon 
                      icon={skillDescriptions[skill].icon} 
                      className={styles.skillIcon}
                    />
                    <span>{skill}</span>
                    </div>
                    <FontAwesomeIcon 
                      icon={faCaretDown} 
                      className={`${styles.expandIcon} ${
                        expandedSkill === skill ? styles.expanded : ''
                      }`}
                    />
                  </div>
                  {expandedSkill === skill && (
                    <div className={styles.skillDescription}>
                      {skillDescriptions[skill].description}
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
                'Laravel Blade', 'Responsive Design'].map((skill) => ( // Eliminado Cross-browser Compatibility
                <li key={skill}>
                  <div 
                    className={`${styles.skillItem} ${expandedSkill === skill ? styles.activeSkill : ''}`} 
                    onClick={() => toggleSkill(skill)}
                  >
                      <div className={styles.skillNameContainer}>

                    <FontAwesomeIcon 
                      icon={skillDescriptions[skill].icon} 
                      className={styles.skillIcon}
                    />
                    <span>{skill}</span>
                    </div>
                    <FontAwesomeIcon 
                      icon={faCaretDown} 
                      className={`${styles.expandIcon} ${
                        expandedSkill === skill ? styles.expanded : ''
                      }`}
                    />
                  </div>
                  {expandedSkill === skill && (
                    <div className={styles.skillDescription}>
                      {skillDescriptions[skill].description} {/* Acceso correcto a la descripción */}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.skillCard}>
            <h3>Others</h3>
            <ul>
              {['Bash Scripting', 'Linux Administration', 'C++ (Microcontrollers)', 
                'Python (Fast Prototyping)', 'Git Version Control'].map((skill) => (
                <li key={skill}>
                  <div 
                    className={`${styles.skillItem} ${expandedSkill === skill ? styles.activeSkill : ''}`} 
                    onClick={() => toggleSkill(skill)}
                  >
                      <div className={styles.skillNameContainer}>

                    <FontAwesomeIcon 
                      icon={skillDescriptions[skill].icon} 
                      className={styles.skillIcon}
                    />
                    <span>{skill}</span>
                    </div>
                    <FontAwesomeIcon 
                      icon={faCaretDown} 
                      className={`${styles.expandIcon} ${
                        expandedSkill === skill ? styles.expanded : ''
                      }`}
                    />
                  </div>
                  {expandedSkill === skill && (
                    <div className={styles.skillDescription}>
                      {skillDescriptions[skill].description} {/* Acceso correcto a la descripción */}
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