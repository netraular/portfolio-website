import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

// Componentes para las secciones principales
const HeroSection = () => {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <Heading as="h1" className="hero__title">
              Raúl A.R.
            </Heading>
            <p className="hero__subtitle">Desarrollador Full Stack</p>
            <p className={styles.heroDescription}>
              Ingeniero informático especializado en desarrollo web y soluciones de telecomunicaciones.
              Basado en Barcelona, España.
            </p>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                // to="/showcase">
                to="/index3">
                Ver Proyectos
              </Link>
              <Link
                className="button button--outline button--lg"
                // to="/docs/about">
                to="/index3">
                Más Sobre Mí
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            {/* Aquí puedes añadir una imagen de perfil profesional */}
            <img src="/img/profile.svg" alt="Perfil profesional" />
          </div>
        </div>
      </div>
    </header>
  );
};

const AboutSection = () => {
  return (
    <section className={styles.aboutSection}>
      <div className="container">
        <div className={styles.aboutContent}>
          <div className={styles.aboutImage}>
            {/* Imagen relacionada con tecnología o desarrollo */}
            <img src="/img/programming.svg" alt="Desarrollo de software" />
          </div>
          <div className={styles.aboutText}>
            <Heading as="h2">Sobre mí</Heading>
            <p>
              Soy un ingeniero informático graduado por la Universidad Autónoma de Barcelona (UAB) 
              con especialidad en Ciencias de la Computación. Mi pasión es desarrollar soluciones 
              tecnológicas que resuelvan problemas reales.
            </p>
            <p>
              Actualmente trabajo como desarrollador Full Stack en Nubelfon, donde me especializo 
              en crear proyectos personalizados de telefonía integrados con aplicaciones web.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceSection = () => {
  return (
    <section className={clsx(styles.experienceSection, styles.altBackground)}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>Experiencia Profesional</Heading>
        
        <div className={styles.timelineItem}>
          <div className={styles.timelineMeta}>
            <h3>Desarrollador Full Stack</h3>
            <p className={styles.timelineCompany}>Nubelfon</p>
            <p className={styles.timelinePeriod}>Junio 2021 - Presente</p>
          </div>
          <div className={styles.timelineContent}>
            <p>
              Desarrollo de proyectos a medida para clientes centrados en telefonía, 
              principalmente desarrollados junto a aplicaciones web utilizando un stack completo:
            </p>
            <ul>
              <li>Backend con Laravel y PHP</li>
              <li>Gestión de bases de datos MySQL</li>
              <li>Integración con sistemas de telefonía Asterisk</li>
              <li>Desarrollo de scripts, crons y jobs automatizados</li>
            </ul>
          </div>
        </div>
        
        <div className={styles.timelineItem}>
          <div className={styles.timelineMeta}>
            <h3>Celador</h3>
            <p className={styles.timelineCompany}>Hospital Universitario Bellvitge</p>
            <p className={styles.timelinePeriod}>Junio 2017 - Julio 2021</p>
          </div>
          <div className={styles.timelineContent}>
            <p>
              Trabajé como celador mientras completaba mis estudios universitarios.
              Durante la pandemia de COVID-19 (Marzo 2020 - Julio 2021), formé parte del
              equipo de primera línea en uno de los hospitales de referencia de Cataluña.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const EducationSection = () => {
  return (
    <section className={styles.educationSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>Formación Académica</Heading>
        
        <div className={styles.educationItem}>
          <div className={styles.educationImage}>
            {/* Logo UAB o imagen de la universidad */}
            <img src="/img/uab-logo.svg" alt="Universidad Autónoma de Barcelona" />
          </div>
          <div className={styles.educationContent}>
            <h3>Ingeniería Informática</h3>
            <p className={styles.educationMeta}>Universidad Autónoma de Barcelona (UAB)</p>
            <p className={styles.educationPeriod}>2017 - 2022</p>
            <p>Especialidad en Ciencias de la Computación</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillsSection = () => {
  const skillGroups = [
    {
      title: 'Desarrollo Backend',
      skills: ['PHP', 'Laravel', 'MySQL', 'Bash Scripting', 'Jobs/Crons']
    },
    {
      title: 'Desarrollo Frontend',
      skills: ['HTML/CSS', 'JavaScript', 'React', 'TypeScript']
    },
    {
      title: 'Otros',
      skills: ['C++', 'Python', 'IA/ML', 'Microcontroladores', 'Asterisk']
    }
  ];

  return (
    <section className={clsx(styles.skillsSection, styles.altBackground)}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>Habilidades Técnicas</Heading>
        
        <div className={styles.skillsContainer}>
          {skillGroups.map((group, idx) => (
            <div key={idx} className={styles.skillGroup}>
              <h3>{group.title}</h3>
              <ul className={styles.skillList}>
                {group.skills.map((skill, i) => (
                  <li key={i} className={styles.skillItem}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectsSection = () => {
  return (
    <section className={styles.projectsSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>Proyectos Destacados</Heading>
        <p className={styles.projectsDescription}>
          Aquí encontrarás algunos de mis proyectos más relevantes. Para ver mi portfolio completo,
          visita la sección de Showcase.
        </p>
        
        <div className={styles.projectsActions}>
          <Link
            className="button button--primary button--lg"
            // to="/showcase">
            to="/index3">
            Ver Todos los Proyectos
          </Link>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section className={clsx(styles.contactSection, styles.altBackground)}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>¿Interesado en colaborar?</Heading>
        <p className={styles.contactDescription}>
          Si estás buscando un desarrollador para tu próximo proyecto o simplemente quieres ponerte en contacto conmigo,
          no dudes en enviarme un mensaje.
        </p>
        
        <div className={styles.contactActions}>
          <Link
            className="button button--secondary button--lg"
            // to="/contact">
            to="/index3">
            Contactar
          </Link>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Desarrollador Full Stack`}
      description="Portfolio profesional de Raúl A.R. - Ingeniero informático y desarrollador Full Stack especializado en soluciones de telefonía y desarrollo web.">
      <HeroSection />
      <main>
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </Layout>
  );
}