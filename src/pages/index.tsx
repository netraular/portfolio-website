import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HeroSection() {
  return (
    <header className={clsx('hero hero--dark', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <Heading as="h1" className="hero__title">
              Raúl A.R.
            </Heading>
            <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
              Full Stack Developer & Computer Engineer
            </p>
            <p className={styles.heroLocation}>📍 Barcelona, Spain</p>
            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg"
                to="/showcase">
                View Projects →
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <img 
              src="/img/profile.jpg" 
              alt="Raúl A.R." 
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
        <div className="row">
          <div className="col col--6">
            <Heading as="h2" className={styles.sectionTitle}>
              About Me
            </Heading>
            <p className={styles.aboutText}>
              Computer Engineer graduated from Universitat Autònoma de Barcelona 
              with specialization in Computer Science. Passionate about creating 
              efficient solutions and constantly learning new technologies.
            </p>
            <div className={styles.educationCard}>
              <h3>🎓 Education</h3>
              <p><strong>UAB</strong> - Computer Engineering (2017-2022)</p>
              <p>Specialization in Computer Science</p>
            </div>
          </div>
          <div className="col col--6">
            <div className={styles.experienceCard}>
              <h3>💼 Professional Experience</h3>
              <div className={styles.timeline}>
                <div className={styles.timelineItem}>
                  <h4>Nubelfon (2021 - Present)</h4>
                  <ul>
                    <li>Full Stack development with Laravel</li>
                    <li>Voice APIs integration (Google/Amazon)</li>
                    <li>Server management and deployments</li>
                    <li>Scalable architecture design</li>
                  </ul>
                </div>
                <div className={styles.timelineItem}>
                  <h4>Hospital Universitario Bellvitge (2017-2021)</h4>
                  <ul>
                    <li>Coordination in critical environments</li>
                    <li>Emergency management during COVID</li>
                    <li>Multidisciplinary teamwork</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
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
      title="Raúl A.R. | Computer Engineer & Developer"
      description="Portfolio of Raúl A.R. - Computer Engineer and Full Stack Developer from Barcelona specializing in web development and telecom solutions">
      <HeroSection />
      <main>
        <AboutSection />
        <SkillsSection />
      </main>
    </Layout>
  );
}