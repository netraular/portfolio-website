import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faDownload, faCopy } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react'; // Añade esta importación

function HeroSection() {
  const githubUsername = "netraular"; // Tu nombre de usuario de GitHub
  const githubProfilePic = `https://github.com/${githubUsername}.png`;

  const [activeButton, setActiveButton] = useState<number | null>(null);
  
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
            timeouts.push(setTimeout(startSequence, 10000)); // Espera 10s después del último
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
                View Projects <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{marginLeft: '0.5rem'}}/>
              </Link>
              </div>
              <a
                className={`button button--secondary button--lg ${
                  activeButton === 1 ? styles.activeGlow : ''
                }`}
                href="/resume.pdf"
                download="Raul_AR_CV.pdf">
                Download CV <FontAwesomeIcon icon={faDownload} style={{marginLeft: '0.5rem'}}/>
              </a>
              <div className={`${styles.emailContainer} ${
                activeButton === 2 ? styles.activeGlow : ''
              }`}>
                <span className={styles.emailText} id="emailText">netraular@gmail.com</span>
                <button 
                  className={styles.copyButton}
                  data-tooltip="Copy" // Texto en inglés para el tooltip
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

                  <span className={styles.copyIcon}>
                  <FontAwesomeIcon 
          icon={faCopy} 
          className={styles.copyIcon}
          style={{fontSize: '1rem'}}
        />                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.heroImage}>
            <img 
              src={githubProfilePic} 
              alt="Raul A.R." 
              className={styles.profileImage}
            />
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
                  <h5 className={styles.experienceRole}>Full Stack Developer</h5>
                  <ul className={styles.timelineList}>
                    <li>Full Stack development with Laravel</li>
                    <li>Voice APIs integration (Google/Amazon)</li>
                    <li>Server management and deployments</li>
                    <li>Scalable architecture design</li>
                  </ul>
                </div>

                <div className={styles.experienceItem}>
                  <div className={styles.companyLogo}>
                    <img src="/img/bellvitge-logo.jpg" alt="Hospital Bellvitge Logo" />
                  </div>
                  <div className={styles.experienceHeader}>
                    <h4>Hospital Universitario Bellvitge</h4>
                    <span className={styles.experienceDate}>2017 - 2021</span>
                  </div>
                  <h5 className={styles.experienceRole}>Technical Coordinator</h5>
                  <ul className={styles.timelineList}>
                    <li>Coordination in critical environments</li>
                    <li>Emergency management during COVID</li>
                    <li>Multidisciplinary teamwork</li>
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
                    <li>Final Project: Local Voice Assistant Natural Language to SQL</li>
                    <li>GPA: 3.4/4.0</li>
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
              <li>PHP/Laravel</li>
              <li>MySQL Database</li>
              <li>Voice APIs (Google/Amazon)</li>
              <li>Asterisk PBX</li>
              <li>REST API Development</li>
              <li>Web Server Management</li>
            </ul>
          </div>
          <div className={styles.skillCard}>
            <h3>Frontend & UI</h3>
            <ul>
              <li>HTML5/CSS3</li>
              <li>JavaScript/jQuery</li>
              <li>Bootstrap</li>
              <li>Laravel Blade</li>
              <li>Responsive Design</li>
              <li>Cross-browser Compatibility</li>
            </ul>
          </div>
          <div className={styles.skillCard}>
            <h3>Others</h3>
            <ul>
              <li>C++ (Microcontrollers)</li>
              <li>Python (AI Prototyping)</li>
              <li>Bash Scripting</li>
              <li>Linux Administration</li>
              <li>Git Version Control</li>
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