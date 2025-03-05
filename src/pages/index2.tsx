import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index2.module.css';
import ProfileImage from '../../static/img/profile.jpg';
import UABLogo from '../../static/img/uab-logo.png';
import NubelfonLogo from '../../static/img/nubelfon-logo.png';
import SkillsImage from '../../static/img/skills.png';

function HeroSection() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img src={ProfileImage} alt="Raúl A.R." className={styles.profileImage} />
        <Heading as="h1" className="hero__title">
          Raúl A.R.
        </Heading>
        <p className="hero__subtitle">Ingeniero Informático | Desarrollador Full Stack</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/showcase">
            Ver mis proyectos →
          </Link>
        </div>
      </div>
    </header>
  );
}

function AboutSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--6', styles.aboutText)}>
            <Heading as="h2">Sobre mí</Heading>
            <p>
              Ingeniero informático con especialización en Ciencias de la Computación por la 
              Universidad Autónoma de Barcelona (2017-2022). Apasionado del desarrollo full stack 
              y la innovación tecnológica, combino experiencia práctica en entornos hospitalarios 
              y empresariales con proyectos propios de electrónica e inteligencia artificial.
            </p>
          </div>
          <div className="col col--6">
            <img src={SkillsImage} alt="Habilidades técnicas" className={styles.sectionImage} />
          </div>
        </div>
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section className={clsx(styles.section, styles.education)}>
      <div className="container">
        <Heading as="h2">Formación</Heading>
        <div className="row">
          <div className="col col--4">
            <img src={UABLogo} alt="UAB" className={styles.logo} />
          </div>
          <div className="col col--8">
            <h3>Ingeniería Informática</h3>
            <p>Universidad Autónoma de Barcelona (2017-2022)</p>
            <p>Especialidad en Ciencias de la Computación</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Heading as="h2">Experiencia</Heading>
        <div className="row">
          <div className="col col--6">
            <div className={styles.timeline}>
              <img src={NubelfonLogo} alt="Nubelfon" className={styles.logo} />
              <h3>Desarrollador Full Stack</h3>
              <p>Nubelfon (2021 - Actualidad)</p>
              <ul>
                <li>Desarrollo de soluciones integrales para telefonía</li>
                <li>Backend con Laravel y MySQL</li>
                <li>Gestión de Asterisk y scripts Bash</li>
              </ul>
            </div>
          </div>
          <div className="col col--6">
            <div className={styles.timeline}>
              <h3>Celador Hospitalario</h3>
              <p>Hospital Bellvitge (2017-2021)</p>
              <ul>
                <li>Trabajo durante la pandemia (2020-2021)</li>
                <li>Coordinación logística en entorno sanitario</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Portfolio de ${siteConfig.title}`}
      description="Portfolio profesional de Raúl A.R. - Ingeniero Informático especializado en desarrollo full stack y proyectos tecnológicos innovadores">
      
      <HeroSection />
      <main>
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <section className={styles.ctaSection}>
          <div className="container">
            <Link
              className="button button--primary button--lg"
              to="/showcase">
              Explorar proyectos →
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}