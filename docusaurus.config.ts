import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
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
    locales: ['en', 'es', 'ca', 'fr', 'de', 'it', 'zh', 'ja', 'sv', 'no'],
    localeConfigs: {
      en: {  // Inglés
        htmlLang: 'en-US',
      },
      es: {  // Castellano
        htmlLang: 'es-ES',
      },
      ca: {  // Catalán
        htmlLang: 'ca-ES',
      },
      zh: {  // Chino
        htmlLang: 'zh-CN',
      },
      fr: {  // Francés
        htmlLang: 'fr-FR',
      },
      de: {  // Alemán
        htmlLang: 'de-DE',
      },
      ja: {  // Japonés
        htmlLang: 'ja-JP',
      },
      it: {  // Italiano
        htmlLang: 'it-IT',
      },
      sv: {  // Sueco
        htmlLang: 'sv-SE',
      },
      no: {  // Noruego Bokmål 
        htmlLang: 'nb-NO', 
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

  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        // Optional plugin options (if needed)
      },
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
          to: '/showcase',
          position: 'left',
          label: 'Showcase',
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
            // {
            //   label: 'Overview',
            //   to: '/docs/intro',
            // },
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
              href: 'mailto:netraular@gmail.com',
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