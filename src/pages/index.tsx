import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index5.module.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

function HeroSection() {
  const githubUsername = "netraular"; // Tu nombre de usuario de GitHub
  const githubProfilePic = `https://github.com/${githubUsername}.png`;

  return (
    <header className={clsx('hero hero--dark', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <Heading as="h1" className="hero__title">
              Raul A.R.
            </Heading>
            <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
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
                Nubelfon ↗
              </a>
            </p>
            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg"
                to="/"> {/* Cambia "/" por la ruta de tus proyectos */}
                View Projects →
              </Link>
              <a
                className="button button--secondary button--lg"
                href="/resume.pdf" // Ruta al archivo en la carpeta static
                download="Raul_AR_CV.pdf" // Nombre del archivo al descargar
              >
                Download CV ↓
              </a>
              <span
                className={`button button--outline button--lg ${styles.emailText}`} // Añade la clase personalizada
                style={{ cursor: 'text', userSelect: 'text' }} // Permite seleccionar el texto
              >
                netraular@gmail.com 📧
              </span>
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
        <p >
          I'm a Computer Engineer based in Barcelona, passionate about designing and building scalable, efficient, and high-performance software solutions. 
          I graduated from the Universitat Autònoma de Barcelona with a specialization in Computer Science, and since then, I have been fully immersed in the world of software development.
        </p>
        <p>
          My expertise lies in full-stack development, with a strong focus on backend systems, particularly using PHP with Laravel. 
          I specialize in creating tailored solutions for telephony services, working on everything from API integrations and database management to infrastructure deployment and automation.
        </p>
        <p >
          Over the years, I have worked on projects involving VoIP solutions, automation of phone calls for different use cases (such as reminders and elderly care), real-time call monitoring with Asterisk, and building platforms for enterprise clients to manage their telecommunication services.
        </p>
        <p >
          Beyond backend development, I also have experience in frontend technologies, system administration, and scripting. <br></br>
          I enjoy working in small, collaborative teams where I can take part in the entire development cycle, from architecture design to deployment and maintenance.
        </p>
        <p >
          In addition to my professional work, I have a strong interest in embedded systems and new AI technologies, often working on side projects involving C++ for microcontrollers and Python for rapid prototyping.
        </p>
        </div>

        <Tabs>          
        <TabItem value="experience" label={"💼 Professional Experience" as unknown as string} >
            <div className={styles.infoCard}>
              <h3>Work Experience</h3>
              <div className={styles.timelineContent}>
                <div className={styles.experienceItem}>
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

          <TabItem value="education" label={"🎓 Education" as unknown as string} >
            <div className={styles.infoCard}>
              <h3>Education Background</h3>
              <div className={styles.timelineContent}>
                <p><strong>Universitat Autònoma de Barcelona</strong></p>
                <p>Bachelor's Degree in Computer Engineering (2017-2022)</p>
                <ul className={styles.timelineList}>
                  <li>Software Engineering with Specialization in computing</li>
                  <li>Final Project: Local Voice Assistant Natural Language to SQL /docs/Websites/Bachelor%20Thesis</li>
                </ul>
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
    <section className={clsx(styles.skillsSection, 'background--alt')}>
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