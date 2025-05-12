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
import { useState, useEffect, useRef } from 'react';
import Translate, { translate } from '@docusaurus/Translate';


function HeroSection() {
  const githubUsername = "netraular"; 
  const githubProfilePic = `https://github.com/${githubUsername}.png`;

  const [isSpinning, setIsSpinning] = useState(false);
  const [activeButton, setActiveButton] = useState<number | null>(null);  
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Inicializa el audio cuando el componente se monta
    audioRef.current = new Audio('/sounds/spin.mp3');
    audioRef.current.volume = 0.3;
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

            <Translate
                id="homepage.hero.title"
                description="The main title on the homepage greeting"
                values={{
                  name: <span className={styles.heroR}>Raul A.R.</span>
                }}>
                {'Hi, I\'m {name}'}
              </Translate>

            </Heading>
            <p className="hero__subtitle">
              <Translate
                id="homepage.hero.subtitle"
                description="The subtitle describing the role and location">
                Computer Engineer and Full Stack Developer based in Barcelona, specializing in backend development and custom VoIP solutions.
              </Translate>
            </p>
            <p className={styles.heroLocation}>
            <Translate
                id="homepage.hero.currentWork"
                description="Sentence indicating current workplace"
                values={{
                  companyLink: (
                    <a
                      href="https://nubelfon.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.companyLink}
                    >
                    <Translate
                      id="homepage.hero.companyName.nubelfon"
                      description="The name of the company Nubelfon"
                    >
                      Nubelfon
                    </Translate>
                    </a>
                  ),
                }}>
                {'💼 Currently building custom VoIp solutions at {companyLink}'}
              </Translate>
            </p>
            <div className={styles.buttons}>
            <div className={styles.customBorderWrapper}>

            <Link
                className={`button button--primary button--lg ${
                  activeButton === 0 ? styles.activeGlow : ''
                }`}
                to="/showcase">
                <Translate
                    id="homepage.hero.button.viewProjects"
                    description="Text for the View Projects button">
                    View Projects
                  </Translate>
                  {" "}<FontAwesomeIcon icon={faArrowUpRightFromSquare} className={styles.icon}/>
              </Link>
              </div>
              
              <a className={`button button--secondary button--lg ${
                  activeButton === 1 ? styles.activeGlow : ''
                }`}
                href="/resume.pdf"
                download="Raul_AR_CV.pdf">
                <Translate
                  id="homepage.hero.button.downloadCV"
                  description="Text for the Download CV button">
                  Download CV
                </Translate>
                {" "}<FontAwesomeIcon icon={faDownload} className={styles.icon}/>
              </a>
              <div className={`${styles.emailContainer} ${
                activeButton === 2 ? styles.activeGlow : ''
              }`}>

                <span className={`button button--lg ${styles.emailText}`} id="emailText">netraular@gmail.com</span>
                <button 
                  className={styles.copyButton}
                  data-tooltip={translate({
                    id: 'homepage.hero.copyButton.tooltip',
                    message: 'Copy',
                    description: 'Tooltip for the copy email button',
                  })}
                  onClick={() => {
                    navigator.clipboard.writeText('netraular@gmail.com');
                    const emailTextElement = document.getElementById('emailText');
                    if (emailTextElement) {
                      emailTextElement.textContent = translate({
                        id: 'homepage.hero.copyButton.copied',
                        message: 'Copied!',
                        description: 'Text displayed after copying the email address',
                      });
                      setTimeout(() => {
                        emailTextElement.textContent = 'netraular@gmail.com';
                      }, 1000);
                    }
                  }}
                  title={translate({
                    id: 'homepage.hero.copyButton.title',
                    message: 'Copy email',
                    description: 'Title attribute for the copy email button',
                  })}
                >
                  <span className={styles.copyIcon}> <FontAwesomeIcon icon={faCopy} className={`${styles.copyIcon} ${styles.icon}`}/> </span>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.heroImage}>
            <img 
              src={githubProfilePic} 
              alt={translate({
                id: 'homepage.hero.profilePicAlt',
                message: 'Raul A.R.',
                description: 'Alt text for the profile picture in the hero section'
              })}
              className={`${styles.profileImage} ${
                isSpinning ? styles.spin : ''
              }`}
              onClick={handleImageClick}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

function AboutSection() {
  // El componente Project interno ahora espera títulos y fechas potencialmente traducidos
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
          {/* El título viene como prop, que ya estará traducido */}
          <h4>{title}</h4>
          <div>
            {/* La fecha viene como prop, que ya estará traducido */}
            <span className={styles.projectDate}>({date})</span>
            <FontAwesomeIcon
              icon={faCaretDown}
              className={`${styles.projectChevron} ${isExpanded ? styles.expanded : ''}`}
            />
          </div>
        </div>
        {isExpanded && (
          <ul className={styles.timelineList}>
            {/* Los children deberían ser elementos <Translate> o texto ya traducido */}
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
          <Translate id="homepage.about.title" description="Title for the About Me section">
            About Me
          </Translate>
        </Heading>
        <div className={styles.aboutText}>
          <p>
            <Translate
              id="homepage.about.paragraph1"
              description="First paragraph in the About section introducing the user"
              values={{
                uabLink: (
                  <a href="https://www.uab.cat/" target="_blank" rel="noopener noreferrer" className={styles.inlineLink}>
                    <Translate id="homepage.about.uabName" description="Name of the university UAB">
                      Universitat Autònoma de Barcelona
                    </Translate>
                  </a>
                ),
              }}>
              {'I\'m a Computer Engineer based in Barcelona, graduated from the {uabLink} with a specialization in Computer Science.'}
            </Translate>
          </p>
          <p>
            <Translate id="homepage.about.paragraph2" description="Second paragraph describing expertise">
              My expertise lies in full-stack development, with a strong focus on backend systems, particularly using PHP with Laravel. I have experience in API integrations, database management, infrastructure deployment, and scripting automation.
            </Translate>
          </p>
          <p>
            <Translate id="homepage.about.paragraph3" description="Third paragraph about VoIP experience">
              Over the years, I have been involved in projects related to VoIP solutions, including automating phone calls for various use cases, real-time call monitoring with Asterisk, and developing platforms for enterprise clients to manage their telecommunication services.
            </Translate>
          </p>
          <p>
            <Translate id="homepage.about.paragraph4" description="Fourth paragraph about frontend, sysadmin, collaboration and team preferences">
              In addition to backend development, I have experience with frontend technologies, system administration, and scripting.
              I enjoy working in small, collaborative teams where I can contribute to the entire development cycle, from architecture design to deployment and maintenance.
            </Translate>
          </p>
                    <p>
            <Translate
              id="homepage.about.paragraph5"
              description="Fifth paragraph about personal projects, home lab, and hackathon wins"
              values={{
                eco2Link: (
                  <a
                    href="https://eco2.raular.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.inlineLink}>
                    <Translate id="homepage.about.eco2ProjectName" description="Name of the ECO2 project">
                      ECO2
                    </Translate>
                  </a>
                ),
                tavascanLink: (
                  <a
                    href="https://hackupc.raular.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.inlineLink}>
                    <Translate id="homepage.about.tavascanProjectName" description="Name of the Tavascan Rush project">
                      Tavascan Rush
                    </Translate>
                  </a>
                ),
              }}>
              {/* Texto actualizado incluyendo ambas hackatones */}
              {'Outside of my professional work, I maintain a home lab environment where I develop personal projects. For example, {eco2Link} helped my team win a Hackathon, and more recently, {tavascanLink} secured a win at HackUPC among 750+ participants. I also enjoy working with C++ for microcontrollers and Python for rapid prototyping.'}
            </Translate>
          </p>
        </div>

        <Tabs>
          <TabItem
            value="experience"
            label={translate({ // Usamos translate para props como label
              id: 'homepage.about.tabs.experienceLabel',
              message: '💼 Professional Experience',
              description: 'Label for the Professional Experience tab',
            })}
          >
            <div className={styles.infoCard}>
              <h3>
                <Translate id="homepage.about.experience.cardTitle" description="Title for the Work Experience card">
                  Work Experience
                </Translate>
              </h3>
              <div className={styles.timelineContent}>
                {/* Nubelfon Experience */}
                <div className={styles.experienceItem}>
                  <div className={styles.companyLogo}>
                    <img src="/img/nubelfon-logo.jpg" alt={translate({id:'homepage.about.experience.nubelfon.logoAlt', message:'Nubelfon Logo', description:'Alt text for Nubelfon logo'})} />
                  </div>
                  <div className={styles.experienceHeader}>
                    <h4>
                      <Translate id="homepage.about.experience.nubelfon.header" description="Header for Nubelfon experience (Company and Role)">
                        Nubelfon - Full Stack Developer & Solutions Developer
                      </Translate>
                    </h4>
                    <span className={styles.experienceDate}>
                      <Translate id="homepage.about.experience.nubelfon.date" description="Date range for Nubelfon experience">
                        2021 - Present
                      </Translate>
                    </span>
                  </div>

                  <div className={styles.projectsContainer}>
                    <h4 className={styles.experienceRole}>
                      <Translate id="homepage.about.experience.keyAchievements" description="Heading for Key Achievements list">
                        Key Achievements:
                      </Translate>
                    </h4>
                    <ul className={styles.timelineList}>
                      <li><Translate id="homepage.about.experience.nubelfon.achievement1">Led and developed enterprise VoIP solutions for government and corporate clients</Translate></li>
                      <li><Translate id="homepage.about.experience.nubelfon.achievement2.intro">Modernized legacy systems through:</Translate>
                        <ul>
                          <li><Translate id="homepage.about.experience.nubelfon.achievement2.item1">Migration from legacy codebase to Laravel framework</Translate></li>
                          <li><Translate id="homepage.about.experience.nubelfon.achievement2.item2">Implementation of REST APIs for third-party integrations</Translate></li>
                          <li><Translate id="homepage.about.experience.nubelfon.achievement2.item3">Database schema optimization for improved performance</Translate></li>
                        </ul>
                      </li>
                      <li><Translate id="homepage.about.experience.nubelfon.achievement3">Architected 2 major platform upgrades enhancing scalability and maintainability</Translate></li>
                      <li><Translate id="homepage.about.experience.nubelfon.achievement4">Developed automation scripts reducing repetitive tasks through queue workers</Translate></li>
                    </ul>

                    <h4 className={styles.experienceRole}>
                      <Translate id="homepage.about.experience.coreResponsibilities" description="Heading for Core Responsibilities list">
                        Core Responsibilities:
                      </Translate>
                    </h4>
                    <ul className={styles.timelineList}>
                      <li><Translate id="homepage.about.experience.nubelfon.responsibility1">System integration with Asterisk PBX and VTiger CRM</Translate></li>
                      <li><Translate id="homepage.about.experience.nubelfon.responsibility2">Database design and optimization for high-volume call data management</Translate></li>
                      <li><Translate id="homepage.about.experience.nubelfon.responsibility3">Implementation of security features including Role-Based Access Control (RBAC)</Translate></li>
                      <li><Translate id="homepage.about.experience.nubelfon.responsibility4">Development of real-time monitoring dashboards and automated reporting systems</Translate></li>
                      <li><Translate id="homepage.about.experience.nubelfon.responsibility5">Creation of technical documentation and client onboarding materials</Translate></li>
                      <li><Translate id="homepage.about.experience.nubelfon.responsibility6">Implementation of unit testing for core platform functionalities</Translate></li>
                    </ul>

                    <h4 className={styles.experienceRole}>
                      <Translate id="homepage.about.experience.notableProjects" description="Heading for Notable Projects list">
                        Notable Projects:
                      </Translate>
                    </h4>

                    {/* Project Component Calls - Traducimos title y date antes de pasarlos */}
                    <Project
                      title={translate({
                        id: 'homepage.about.experience.project.automatedCalling.title',
                        message: 'Automated Calling System',
                        description: 'Title for the Automated Calling System project',
                      })}
                      date={translate({
                        id: 'homepage.about.experience.project.automatedCalling.date',
                        message: '2021-Present',
                        description: 'Date for the Automated Calling System project',
                      })}
                    >
                      <li><Translate id="homepage.about.experience.project.automatedCalling.item1">Completed and maintained legacy call automation project as primary developer</Translate></li>
                      <li><Translate id="homepage.about.experience.project.automatedCalling.item2">Implemented modular architecture for client-specific customizations</Translate></li>
                      <li><Translate id="homepage.about.experience.project.automatedCalling.item3">Integrated Asterisk PBX for call handling and monitoring</Translate></li>
                      <li><Translate id="homepage.about.experience.project.automatedCalling.item4">Developed administration interface for call scheduling and tracking</Translate></li>
                    </Project>

                    <Project
                       title={translate({
                        id: 'homepage.about.experience.project.govTelecom.title',
                        message: 'Government Telecom Monitoring Platform',
                        description: 'Title for the Government Telecom Monitoring Platform project',
                      })}
                      date={translate({
                        id: 'homepage.about.experience.project.govTelecom.date',
                        message: '2022',
                        description: 'Date for the Government Telecom Monitoring Platform project',
                      })}
                    >
                      <li><Translate id="homepage.about.experience.project.govTelecom.item1">Developed web platform for real-time call agent monitoring</Translate></li>
                      <li><Translate id="homepage.about.experience.project.govTelecom.item2">Created bash scripts for processing Asterisk call events</Translate></li>
                      <li><Translate id="homepage.about.experience.project.govTelecom.item3">Implemented CSV/PDF report generation for daily operations</Translate></li>
                      <li><Translate id="homepage.about.experience.project.govTelecom.item4">Built dashboard displaying real-time call metrics and statistics</Translate></li>
                    </Project>

                    <Project
                       title={translate({
                        id: 'homepage.about.experience.project.clientPortal.title',
                        message: 'Client Services Portal',
                        description: 'Title for the Client Services Portal project',
                      })}
                      date={translate({
                        id: 'homepage.about.experience.project.clientPortal.date',
                        message: '2023-Present',
                        description: 'Date for the Client Services Portal project',
                      })}
                    >
                      <li><Translate id="homepage.about.experience.project.clientPortal.item1">Restructured database schema for improved scalability</Translate></li>
                      <li><Translate id="homepage.about.experience.project.clientPortal.item2">Modernized core platform with role-based access control</Translate></li>
                      <li><Translate id="homepage.about.experience.project.clientPortal.item3">Integrated VTiger CRM with internal systems through centralized data hub</Translate></li>
                      <li><Translate id="homepage.about.experience.project.clientPortal.item4">Created internal automation tools reducing manual work</Translate></li>
                    </Project>
                  </div>
                </div>

                {/* Bellvitge Experience */}
                <div className={styles.experienceItem}>
                  <div className={styles.companyLogo}>
                     <img src="/img/bellvitge-logo.jpg" alt={translate({id:'homepage.about.experience.bellvitge.logoAlt', message:'Hospital Bellvitge Logo', description:'Alt text for Hospital Bellvitge logo'})} />
                  </div>
                  <div className={styles.experienceHeader}>
                    <h4>
                      <Translate id="homepage.about.experience.bellvitge.header" description="Header for Bellvitge experience (Company and Role)">
                        Hospital Universitario Bellvitge - Patient Care Assistant
                      </Translate>
                    </h4>
                    <span className={styles.experienceDate}>
                      <Translate id="homepage.about.experience.bellvitge.date" description="Date range for Bellvitge experience">
                        2017 - 2021
                      </Translate>
                    </span>
                  </div>
                  {/* <h5 className={styles.experienceRole}></h5> */} {/* Rol ya está en el header */}
                  <ul className={styles.timelineList}>
                    <li><Translate id="homepage.about.experience.bellvitge.item1">Balanced full-time engineering studies with healthcare work</Translate></li>
                    <li><Translate id="homepage.about.experience.bellvitge.item2">Provided critical support during COVID-19 pandemic surge</Translate></li>
                  </ul>
                </div>
              </div>
            </div>
          </TabItem>

          <TabItem
            value="education"
            label={translate({
              id: 'homepage.about.tabs.educationLabel',
              message: '🎓 Education',
              description: 'Label for the Education tab',
            })}
          >
            <div className={styles.infoCard}>
              <h3>
                <Translate id="homepage.about.education.cardTitle" description="Title for the Education Background card">
                  Education Background
                </Translate>
              </h3>
              <div className={styles.timelineContent}>
                {/* UAB Education */}
                <div className={styles.experienceItem}>
                  <div className={styles.companyLogo}>
                    <img src="/img/uab-logo.jpg" alt={translate({id:'homepage.about.education.uab.logoAlt', message:'UAB Logo', description:'Alt text for UAB logo'})} />
                  </div>
                  <div className={styles.experienceHeader}>
                    <h4>
                      <Translate id="homepage.about.education.uab.header" description="Header for UAB education (University Name)">
                        Universitat Autònoma de Barcelona
                      </Translate>
                    </h4>
                    <span className={styles.experienceDate}>
                      <Translate id="homepage.about.education.uab.date" description="Date range for UAB education">
                        2017 - 2022
                      </Translate>
                    </span>
                  </div>
                  <h5 className={styles.experienceRole}>
                    <Translate id="homepage.about.education.uab.degree" description="Degree name from UAB">
                      Bachelor's Degree in Computer Engineering
                    </Translate>
                  </h5>
                  <ul className={styles.timelineList}>
                    <li><Translate id="homepage.about.education.uab.specialization">Software Engineering with Specialization in computing</Translate></li>
                    <li>
                      <Translate
                        id="homepage.about.education.uab.finalProject"
                        description="Description of the final project including the link text placeholder"
                        values={{
                          thesisLink: (
                            <a
                              href="https://raular.com/docs/Websites/Bachelor%20Thesis" // Consider if this URL should be dynamic based on locale in the future
                              target="_blank"
                              rel="noopener noreferrer"
                              className={styles.inlineLink}
                            >
                              <Translate id="homepage.about.education.uab.thesisLinkText" description="Text for the thesis documentation link">
                                View Thesis Documentation
                              </Translate>
                            </a>
                          ),
                        }}
                      >
                        {'Final Project: Local Voice Assistant Natural Language to SQL - {thesisLink}'}
                      </Translate>
                    </li>
                  </ul>
                </div>

                {/* Language Proficiency */}
                <div className={styles.experienceItem}>
                  <div className={styles.companyLogo}>
                     <img src="/img/language-logo.png" alt={translate({id:'homepage.about.education.language.logoAlt', message:'Language Logo', description:'Alt text for Language logo'})} />
                  </div>
                  <div className={styles.experienceHeader}>
                    <h4>
                      <Translate id="homepage.about.education.language.header" description="Header for Language Proficiency section">
                        Language Proficiency
                      </Translate>
                    </h4>
                  </div>
                  <ul className={styles.timelineList}>
                    <li>
                      <strong><Translate id="homepage.about.education.language.spanish" description="Spanish language name">Spanish</Translate></strong> - <Translate id="homepage.about.education.language.native" description="Native proficiency level">Native proficiency</Translate>
                    </li>
                    <li>
                      <strong><Translate id="homepage.about.education.language.catalan" description="Catalan language name">Catalan</Translate></strong> - <Translate id="homepage.about.education.language.native">Native proficiency</Translate> {/* Reutilizamos el ID para 'Native proficiency' */}
                    </li>
                    <li>
                      <strong><Translate id="homepage.about.education.language.english" description="English language name">English</Translate></strong> - <Translate id="homepage.about.education.language.englishLevel" description="English proficiency level B2 with certificate name">B2 Level (First Certificate in English - Cambridge English Assessment)</Translate>
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
  const [expandedSkillId, setExpandedSkillId] = useState<string | null>(null);

  // Mapeo de IDs estables a datos de skills, incluyendo el ELEMENTO <Translate> estático
  // ¡IMPORTANTE! Los props id, description y children de <Translate> DEBEN ser literales de cadena.
  const skillsData = {
    phpLaravel: {
      icon: faLaravel,
      nameElement: (
        <Translate
          id="homepage.skills.phpLaravel.name"
          description="Name for the PHP/Laravel skill"
        >
          PHP/Laravel
        </Translate>
      ),
      descriptionElement: (
        <Translate
          id="homepage.skills.phpLaravel.description"
          description="Description for the PHP/Laravel skill"
        >
          Developed and maintained core backend systems for VoIP platforms. Migrated legacy codebases to Laravel, created REST APIs for frontend/third-party integrations, and implemented queue workers for call processing tasks.
        </Translate>
      ),
    },
    mysqlDatabase: {
      icon: faDatabase,
      nameElement: (
        <Translate
          id="homepage.skills.mysqlDatabase.name"
          description="Name for the MySQL Database skill"
        >
          MySQL Database
        </Translate>
      ),
      descriptionElement: (
        <Translate
          id="homepage.skills.mysqlDatabase.description"
          description="Description for the MySQL Database skill"
        >
          Designed relational database schemas for telecom systems, optimized query performance, and implemented complex reporting queries for call analytics.
        </Translate>
      ),
    },
    voiceApis: {
      icon: faMicrophone,
      nameElement: (
        <Translate
          id="homepage.skills.voiceApis.name"
          description="Name for the Voice APIs (Google/Amazon) skill"
        >
          Voice APIs (Google/Amazon)
        </Translate>
      ),
      descriptionElement: (
        <Translate
          id="homepage.skills.voiceApis.description"
          description="Description for the Voice APIs (Google/Amazon) skill"
        >
          Integrated speech-to-text and text-to-speech capabilities for interactive voice systems. Implemented natural language processing for phone calls navigation.
        </Translate>
      ),
    },
    asteriskPbx: {
      icon: faPhone,
      nameElement: (
        <Translate
          id="homepage.skills.asteriskPbx.name"
          description="Name for the Asterisk PBX skill"
        >
          Asterisk PBX
        </Translate>
      ),
      descriptionElement: (
        <Translate
          id="homepage.skills.asteriskPbx.description"
          description="Description for the Asterisk PBX skill"
        >
          Configured applications interacting with Asterisk PBX. Developed call monitoring programs and reporting dashboards. Created custom call flows using LLMs for specific client requirements.
        </Translate>
      ),
    },
    restApi: {
      icon: faCode,
      nameElement: (
        <Translate
          id="homepage.skills.restApi.name"
          description="Name for the REST API Development skill"
        >
          REST API Development
        </Translate>
      ),
      descriptionElement: (
        <Translate
          id="homepage.skills.restApi.description"
          description="Description for the REST API Development skill"
        >
          Built Laravel APIs to enable clients to interact with our services through their own portals/platforms. Developed documentation and integration examples for third-party developers.
        </Translate>
      ),
    },
    htmlCss: {
        icon: faHtml5,
        nameElement: (
          <Translate
            id="homepage.skills.htmlCss.name"
            description="Name for the HTML5/CSS3 skill"
          >
            HTML5/CSS3
          </Translate>
        ),
        descriptionElement: (
          <Translate
            id="homepage.skills.htmlCss.description"
            description="Description for the HTML5/CSS3 skill"
          >
            Built responsive admin interfaces and client portals. Implemented complex layouts for real-time dashboards while maintaining cross-browser compatibility.
          </Translate>
        ),
      },
      javascriptJquery: {
        icon: faJs,
        nameElement: (
          <Translate
            id="homepage.skills.javascriptJquery.name"
            description="Name for the JavaScript/jQuery skill"
          >
            JavaScript/jQuery
          </Translate>
        ),
        descriptionElement: (
          <Translate
            id="homepage.skills.javascriptJquery.description"
            description="Description for the JavaScript/jQuery skill"
          >
            Developed interactive UI components for call monitoring dashboards. Implemented real-time updates using AJAX and WebSockets.
          </Translate>
        ),
      },
      bootstrap: {
        icon: faBootstrap,
        nameElement: (
          <Translate
            id="homepage.skills.bootstrap.name"
            description="Name for the Bootstrap skill"
          >
            Bootstrap
          </Translate>
        ),
        descriptionElement: (
          <Translate
            id="homepage.skills.bootstrap.description"
            description="Description for the Bootstrap skill"
          >
            Created consistent UI designs across multiple admin panels and customer-facing interfaces. Served as the primary styling library for component cohesion throughout projects.
          </Translate>
        ),
      },
      laravelBlade: {
        icon: faFileCode,
        nameElement: (
          <Translate
            id="homepage.skills.laravelBlade.name"
            description="Name for the Laravel Blade skill"
          >
            Laravel Blade
          </Translate>
        ),
        descriptionElement: (
          <Translate
            id="homepage.skills.laravelBlade.description"
            description="Description for the Laravel Blade skill"
          >
            Developed dynamic server-rendered templates with reusable components for efficient frontend-backend integration.
          </Translate>
        ),
      },
      responsiveDesign: {
        icon: faMobileScreen,
        nameElement: (
          <Translate
            id="homepage.skills.responsiveDesign.name"
            description="Name for the Responsive Design skill"
          >
            Responsive Design
          </Translate>
        ),
        descriptionElement: (
          <Translate
            id="homepage.skills.responsiveDesign.description"
            description="Description for the Responsive Design skill"
          >
            Implemented mobile-first approaches for all client-facing web applications.
          </Translate>
        ),
      },
      serverManagement: {
        icon: faServer,
        nameElement: (
          <Translate
            id="homepage.skills.serverManagement.name"
            description="Name for the Web Server Management skill"
          >
            Web Server Management
          </Translate>
        ),
        descriptionElement: (
          <Translate
            id="homepage.skills.serverManagement.description"
            description="Description for the Web Server Management skill"
          >
            Managed production servers including performance monitoring, security hardening, and package management. Administered Proxmox-based servers both in cloud and local environments.
          </Translate>
        ),
      },
      bashScripting: {
        icon: faTerminal,
        nameElement: (
          <Translate
            id="homepage.skills.bashScripting.name"
            description="Name for the Bash Scripting skill"
          >
            Bash Scripting
          </Translate>
        ),
        descriptionElement: (
          <Translate
            id="homepage.skills.bashScripting.description"
            description="Description for the Bash Scripting skill"
          >
            Developed deployment scripts and automation tools for server maintenance and log analysis.
          </Translate>
        ),
      },
      cppMicrocontrollers: {
        icon: faMicrochip,
        nameElement: (
          <Translate
            id="homepage.skills.cppMicrocontrollers.name"
            description="Name for the C++ (Microcontrollers) skill"
          >
            C++ (Microcontrollers)
          </Translate>
        ),
        descriptionElement: (
          <Translate
            id="homepage.skills.cppMicrocontrollers.description"
            description="Description for the C++ (Microcontrollers) skill"
          >
            Used during university studies and as a hobbyist. Develop programs for microcontrollers using platforms like Arduino, PlatformIO, and ESP-IDF for personal electronics projects.
          </Translate>
        ),
      },
      pythonPrototyping: {
        icon: faPython,
        nameElement: (
          <Translate
            id="homepage.skills.pythonPrototyping.name"
            description="Name for the Python (Fast Prototyping) skill"
          >
            Python (Fast Prototyping)
          </Translate>
        ),
        descriptionElement: (
          <Translate
            id="homepage.skills.pythonPrototyping.description"
            description="Description for the Python (Fast Prototyping) skill"
          >
            Created custom applications for clients and rapid proof-of-concept development. Used for scripting, automation, and quick implementation of ideas.
          </Translate>
        ),
      },
      gitControl: {
        icon: faGitAlt,
        nameElement: (
          <Translate
            id="homepage.skills.gitControl.name"
            description="Name for the Git Version Control skill"
          >
            Git Version Control
          </Translate>
        ),
        descriptionElement: (
          <Translate
            id="homepage.skills.gitControl.description"
            description="Description for the Git Version Control skill"
          >
            Used Git for version control across personal and professional projects. Managed repositories, branches, and collaborative workflows for development teams.
          </Translate>
        ),
      }
  };

  const backendSkillIds = ['phpLaravel', 'mysqlDatabase', 'voiceApis', 'asteriskPbx', 'restApi'];
  const frontendSkillIds = ['htmlCss', 'javascriptJquery', 'bootstrap', 'laravelBlade', 'responsiveDesign'];
  const otherSkillIds = ['serverManagement', 'bashScripting', 'cppMicrocontrollers', 'pythonPrototyping', 'gitControl'];

  const toggleSkill = (skillId: string) => {
    setExpandedSkillId(expandedSkillId === skillId ? null : skillId);
  };

  const renderSkillList = (skillIds: string[]) => {
    return (
      <ul>
        {skillIds.map((skillId) => {
          const skill = skillsData[skillId];
          if (!skill) return null;

          return (
            <li key={skillId}>
              <div
                className={`${styles.skillItem} ${expandedSkillId === skillId ? styles.activeSkill : ''}`}
                onClick={() => toggleSkill(skillId)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleSkill(skillId)}
              >
                <div className={styles.skillNameContainer}>
                  <FontAwesomeIcon
                    icon={skill.icon}
                    className={styles.skillIcon}
                    aria-hidden="true"
                  />
                  {/* Renderiza directamente el elemento <Translate> predefinido */}
                  <span>{skill.nameElement}</span>
                </div>
                <FontAwesomeIcon
                  icon={faCaretDown}
                  className={`${styles.expandIcon} ${
                    expandedSkillId === skillId ? styles.expanded : ''
                  }`}
                  aria-hidden="true"
                />
              </div>
              {expandedSkillId === skillId && (
                <div className={styles.skillDescription}>
                  {/* Renderiza directamente el elemento <Translate> predefinido */}
                  {skill.descriptionElement}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <section className={styles.skillsSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          <Translate id="homepage.skills.title" description="Title for the Technical Skills section">
            Technical Skills
          </Translate>
        </Heading>
        <div className={styles.skillsGrid}>
          <div className={styles.skillCard}>
            <h3>
              <Translate id="homepage.skills.category.backend" description="Title for the Backend & Telecom skills card">
                Backend & Telecom
              </Translate>
            </h3>
            {renderSkillList(backendSkillIds)}
          </div>
          <div className={styles.skillCard}>
            <h3>
              <Translate id="homepage.skills.category.frontend" description="Title for the Frontend & UI skills card">
                Frontend & UI
              </Translate>
            </h3>
            {renderSkillList(frontendSkillIds)}
          </div>
          <div className={styles.skillCard}>
            <h3>
              <Translate id="homepage.skills.category.others" description="Title for the Others skills card">
                Others
              </Translate>
            </h3>
            {renderSkillList(otherSkillIds)}
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
      title={translate({
        id: 'homepage.layout.title',
        message: 'Computer Engineer & Full Stack Developer',
        description: 'The title tag for the homepage',
      })}
      description={translate({
        id: 'homepage.layout.description',
        message: 'Portfolio of Raul A.R. - Computer Engineer and Full Stack Developer from Barcelona specializing in backend development and telecom solutions',
        description: 'The meta description tag for the homepage',
      })}>
      <HeroSection />
      <main>
        <AboutSection />
        <SkillsSection />
      </main>
    </Layout>
  );
}