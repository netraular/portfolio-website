import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Raul A.R.',
  tagline: 'This is my portfolio',
  favicon: 'img/favicon2.ico',

  url: 'https://raular.com',
  baseUrl: '/',

  organizationName: 'netraular',
  projectName: 'portfolio-website',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'ca'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
      es: {
        htmlLang: 'es-ES',
      },
      ca: {
        htmlLang: 'ca-ES',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Raul A.R.',
      logo: {
        alt: 'Portfolio Logo',
        src: 'img/logo2.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Projects',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://linkedin.com/in/raúl-aquilué-rubio-33241b215',
          position: 'right',
          className: 'header-linkedin-link',
          'aria-label': 'LinkedIn profile',
          label: 'LinkedIn profile',
        },
        {
          href: 'https://github.com/netraular',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
          label: 'Github repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Projects',
          items: [
            {
              label: 'Showcase',
              to: '/docs/intro',
            },
            {
              label: 'Overview',
              to: '/docs/intro',
            },
            {
              label: 'Github',
              href: 'https://github.com/netraular',
            },
          ],
        },
        {
          title: 'Find me',
          items: [
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/in/raúl-aquilué-rubio-33241b215',
            },
            {
              label: 'netraular@gmail.com',
              href:'mailto:netraular@gmail.com'
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ❤️ Raul A. R. portfolio`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;