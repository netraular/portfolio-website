/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import {translate} from '@docusaurus/Translate';
import {sortBy} from '@site/src/utils/jsUtils';

/*
 * ADD YOUR SITE TO THE DOCUSAURUS SHOWCASE
 *
 * Please don't submit a PR yourself: use the Github Discussion instead:
 * https://github.com/facebook/docusaurus/discussions/7826
 *
 * Instructions for maintainers:
 * - Add the site in the json array below
 * - `title` is the project's name (no need for the "Docs" suffix)
 * - A short (≤120 characters) description of the project
 * - Use relevant tags to categorize the site (read the tag descriptions on the
 *   https://docusaurus.io/showcase page and some further clarifications below)
 * - Add a local image preview (decent screenshot of the Docusaurus site)
 * - The image MUST be added to the GitHub repository, and use `require("img")`
 * - The image has to have minimum width 640 and an aspect of no wider than 2:1
 * - If a website is open-source, add a source link. The link should open
 *   to a directory containing the `docusaurus.config.js` file
 * - Resize images: node admin/scripts/resizeImage.js
 * - Run optimizt manually (see resize image script comment)
 * - Open a PR and check for reported CI errors
 *
 * Example PR: https://github.com/facebook/docusaurus/pull/7620
 */

// LIST OF AVAILABLE TAGS
// Available tags to assign to a showcase site
// Please choose all tags that you think might apply.
// We'll remove inappropriate tags, but it's less likely that we add tags.
export type TagType =
  // DO NOT USE THIS TAG: we choose sites to add to favorites
  | 'favorite'
  // For open-source sites, a link to the source code is required.
  // The source should be the *website's* source, not the project's source!
  | 'opensource'
  | 'product'
  // Feel free to add the 'design' tag as long as there's _some_ level of
  // CSS/swizzling.
  | 'design'
  // Site must have more than one locale.
  | 'i18n'
  | 'versioning'
  // Large sites are defined as those with > 200 pages, excluding versions.
  | 'large'
  | 'meta'
  | 'personal'
  // Right-to-left direction.
  | 'rtl'
  //home server
  | 'homelab'
  | 'selfhosted'
  | 'virtualization'
  | 'proxmox'
  | 'truenas'
  | 'docker'
  | 'networking'
  //websites
  | 'voiceassistant'
  | 'laravel'
  | 'whisperai'
  | 'coquitts'
  | 'llm'
  | 'ai'
  | 'portfolio'
  | 'docusaurus'
  | 'cloudflarepages'
  | 'docker'
  | 'mysql'
  | 'bash'
  | 'webinterface'
  | 'hackathon'
  | 'threejs'
  | 'webplatform'
  | 'teamlead'
  | 'rbac'
  | 'bootstrap'
  | 'authentication'
  ;

// Add sites to this list
// prettier-ignore
const Users: User[] = [
  {
    title:'HomeLab',
    description:'A versatile, self-hosted ecosystem powered by Proxmox, TrueNAS, and Docker, enabling secure services, robust storage, and automated workflows.',
    preview: require('./showcase/algolia.png'),
    website: '/docs/Home%20Server/overview',
    source: '/docs/Home%20Server/overview',
    tags:['favorite', 'homelab', 'selfhosted' , 'virtualization' , 'proxmox' , 'truenas' , 'docker' , 'networking'],
    date: '2021-05',
  },
    {
      title: 'Local Voice Assistant Natural Language to SQL (Bachelor Thesis)',
      description: 'Offline voice assistant system converting natural language to SQL queries using local AI models.',
      preview: require('./showcase/local-voice-assistant-natural-language-to-sql.png'), // Placeholder path, adjust as needed
      website: 'https://tfg.netshiba.com/',
      source: 'https://github.com/netraular/tfgweb',
      tags: ['voiceassistant', 'laravel', 'whisperai', 'coquitts', 'llm', 'ai'],
      date: '2032-05',
    },
    {
      title: 'Portfolio Website',
      description: 'Modern developer portfolio built with Docusaurus, automated via GitHub & Cloudflare Pages and integrated with Obsidian.',
      preview: require('./showcase/portfolio-website.png'), // Placeholder path, adjust as needed
      website: 'https://raular.com/',
      source: 'https://github.com/netraular/portfolio-website',
      tags: ['portfolio', 'docusaurus', 'cloudflarepages'],
      date: '2023-12',
    },
    {
      title: 'Game Server Management Interface',
      description: 'Web platform using Laravel and Bash scripts for managing multiple game servers hosted with Docker on a single VM.',
      preview: require('./showcase/game-server-management-interface.png'), // Placeholder path, adjust as needed
      website: 'http://gameserver.netshiba.com/',
      source: 'https://github.com/netraular/gameserver',
      tags: ['laravel', 'docker', 'mysql', 'bash', 'webinterface'],
      date: '2023-11',
    },
    {
      title: '(hackaton) Cosmoscape - Exoplanetary Sky Visualization',
      description: 'Interactive NASA Space Apps 2024 platform visualizing night skies from 50 exoplanets using three.js and Laravel.',
      preview: require('./showcase/cosmoscape-exoplanetary-sky-visualization.png'), // Placeholder path, adjust as needed
      website: 'https://nasa24.netshiba.com/',
      source: 'https://github.com/netraular/Hackathon-NASA-2024',
      tags: ['hackathon', 'threejs', 'laravel', 'webplatform'],
      date: '2023-03',
    },
    {
      title: 'Eco2 - Hack for Good Barcelona Winner',
      description: '1st place winning Hackathon project promoting sustainable consumption via QR-based proximity scoring and supply chain tracking.',
      preview: require('./showcase/eco2-hack-for-good-barcelona-winner.png'), // Placeholder path, adjust as needed
      website: 'https://eco2.netshiba.com/',
      source: 'https://github.com/netraular/hack4goodApp-2024',
      tags: [ 'hackathon', 'webplatform', 'teamlead', 'laravel', 'rbac'],
      date: '2022-05',
    },
    {
      title: 'PromptPal - LLM-Powered Template Generation Platform',
      description: 'Laravel web platform leveraging Grok LLM API for generating diverse text outputs from user-defined templates.',
      preview: require('./showcase/promptpal-llm-powered-template-generation-platform.png'), // Placeholder path, adjust as needed
      website: 'https://promptpal.netshiba.com',
      source: 'https://github.com/netraular/llm-prompt-combine',
      tags: ['llm', 'laravel', 'mysql', 'ai'],
      date: '2024-07',
    },
    {
      title: 'Project Showcase Platform',
      description: 'A self-hosted Laravel and Bootstrap system for managing and displaying personal projects via a private admin panel.',
      preview: require('./showcase/project-showcase-platform.png'), // Placeholder path, adjust as needed
      website: 'https://netshiba.com/',
      source: 'https://github.com/netraular/project-showcase-platform',
      tags: ['laravel', 'bootstrap', 'mysql', 'portfolio', 'authentication', 'selfhosted'],
      date: '2023-04',
    }
  /*
  Pro Tip: add your site in alphabetical order.
  Appending your site here (at the end) is more likely to produce Git conflicts.
   */
];

export type User = {
  title: string;
  description: string;
  preview: string | null; // null = use our serverless screenshot service
  website: string;
  source: string | null;
  tags: TagType[];
  date: string; //(formato YYYY-MM)
};

export type Tag = {
  label: string;
  description: string;
  color: string;
};

export const Tags: {[type in TagType]: Tag} = {
  favorite: {
    label: translate({message: 'Favorite'}),
    description: translate({
      message:
        'Our favorite Docusaurus sites that you must absolutely check out!',
      id: 'showcase.tag.favorite.description',
    }),
    color: '#e9669e',
  },

  opensource: {
    label: translate({message: 'Open-Source'}),
    description: translate({
      message: 'Open-Source Docusaurus sites can be useful for inspiration!',
      id: 'showcase.tag.opensource.description',
    }),
    color: '#39ca30',
  },

  product: {
    label: translate({message: 'Product'}),
    description: translate({
      message: 'Docusaurus sites associated to a commercial product!',
      id: 'showcase.tag.product.description',
    }),
    color: '#dfd545',
  },

  design: {
    label: translate({message: 'Design'}),
    description: translate({
      message:
        'Beautiful Docusaurus sites, polished and standing out from the initial template!',
      id: 'showcase.tag.design.description',
    }),
    color: '#a44fb7',
  },

  i18n: {
    label: translate({message: 'I18n'}),
    description: translate({
      message:
        'Translated Docusaurus sites using the internationalization support with more than 1 locale.',
      id: 'showcase.tag.i18n.description',
    }),
    color: '#127f82',
  },

  versioning: {
    label: translate({message: 'Versioning'}),
    description: translate({
      message:
        'Docusaurus sites using the versioning feature of the docs plugin to manage multiple versions.',
      id: 'showcase.tag.versioning.description',
    }),
    color: '#fe6829',
  },

  large: {
    label: translate({message: 'Large'}),
    description: translate({
      message:
        'Very large Docusaurus sites, including many more pages than the average!',
      id: 'showcase.tag.large.description',
    }),
    color: '#8c2f00',
  },

  meta: {
    label: translate({message: 'Meta'}),
    description: translate({
      message: 'Docusaurus sites of Meta (formerly Facebook) projects',
      id: 'showcase.tag.meta.description',
    }),
    color: '#4267b2', // Facebook blue
  },

  personal: {
    label: translate({message: 'Personal'}),
    description: translate({
      message:
        'Personal websites, blogs and digital gardens built with Docusaurus',
      id: 'showcase.tag.personal.description',
    }),
    color: '#14cfc3',
  },

  rtl: {
    label: translate({message: 'RTL Direction'}),
    description: translate({
      message:
        'Docusaurus sites using the right-to-left reading direction support.',
      id: 'showcase.tag.rtl.description',
    }),
    color: '#ffcfc3',
  },
  homelab: {
    label: translate({message: 'homelab'}),
    description: translate({
      message: 'Personal server environment for experimentation, learning, and self-hosting services.',
      id: 'showcase.tag.homelab.description',
    }),
    color: '#3B82F6', // Blue
  },
  selfhosted: {
    label: translate({message: 'self-hosted'}),
    description: translate({
      message: 'Running services and applications on privately owned and managed hardware.',
      id: 'showcase.tag.self-hosted.description',
    }),
    color: '#10B981', // Emerald/Green
  },
  
  virtualization: {
    label: translate({message: 'virtualization'}),
    description: translate({
      message: 'Creating virtual versions of hardware, operating systems, storage devices, or network resources.',
      id: 'showcase.tag.virtualization.description',
    }),
    color: '#8B5CF6', // Violet
  },
  proxmox: {
    label: translate({message: 'proxmox'}),
    description: translate({
      message: 'Open-source server virtualization management platform combining KVM and LXC.',
      id: 'showcase.tag.proxmox.description',
    }),
    color: '#F97316', // Orange
  },
  truenas: {
    label: translate({message: 'truenas'}),
    description: translate({
      message: 'Network-Attached Storage (NAS) software focused on data integrity using ZFS.',
      id: 'showcase.tag.truenas.description',
    }),
    color: '#14B8A6', // Teal
  },
  docker: {
    label: translate({message: 'Docker'}),
    description: translate({
      message: 'Projects utilizing Docker for containerization.',
      id: 'showcase.tag.docker.description',
    }),
    color: '#0db7ed', // Docker blue
  },
  networking: {
    label: translate({message: 'networking'}),
    description: translate({
      message: 'Configuration and management of network infrastructure, routing, and services like VPNs and proxies.',
      id: 'showcase.tag.networking.description',
    }),
    color: '#F59E0B', // Amber/Yellow
  },

    voiceassistant: {
      label: translate({message: 'Voice Assistant'}),
      description: translate({
        message: 'Projects involving voice command processing and interaction.',
        id: 'showcase.tag.voiceassistant.description',
      }),
      color: '#7c3aed', // Purple associated with AI/innovation
    },
    laravel: {
      label: translate({message: 'Laravel'}),
      description: translate({
        message: 'Projects built using the Laravel PHP framework.',
        id: 'showcase.tag.laravel.description',
      }),
      color: '#F05340', // Official Laravel red
    },
    whisperai: {
      label: translate({message: 'WhisperAI'}),
      description: translate({
        message: 'Projects utilizing OpenAI\'s Whisper model for Speech-to-Text.',
        id: 'showcase.tag.whisperai.description',
      }),
      color: '#8e44ad', // Purple for AI consistency
    },
    coquitts: {
      label: translate({message: 'CoquiTTS'}),
      description: translate({
        message: 'Projects using CoquiTTS for Text-to-Speech synthesis.',
        id: 'showcase.tag.coquitts.description',
      }),
      color: '#f39c12', // Orange
    },
    llm: {
      label: translate({message: 'LLM'}),
      description: translate({
        message: 'Projects leveraging Large Language Models for text generation or analysis.',
        id: 'showcase.tag.llm.description',
      }),
      color: '#9b59b6', // Another shade of purple for AI
    },
    ai: {
      label: translate({message: 'AI'}),
      description: translate({
        message: 'Projects incorporating Artificial Intelligence or Machine Learning techniques.',
        id: 'showcase.tag.ai.description',
      }),
      color: '#a55eea', // General AI purple
    },
    portfolio: {
      label: translate({message: 'Portfolio'}),
      description: translate({
        message: 'Projects related to building or managing personal/professional portfolios.',
        id: 'showcase.tag.portfolio.description',
      }),
      color: '#3498db', // Blue for web/general
    },
    docusaurus: {
      label: translate({message: 'Docusaurus'}),
      description: translate({
        message: 'Websites built using the Docusaurus static site generator.',
        id: 'showcase.tag.docusaurus.description',
      }),
      color: '#2ecc71', // Green
    },
    cloudflarepages: {
      label: translate({message: 'Cloudflare Pages'}),
      description: translate({
        message: 'Projects deployed and hosted using Cloudflare Pages.',
        id: 'showcase.tag.cloudflarepages.description',
      }),
      color: '#f38020', // Cloudflare orange
    },
    mysql: {
      label: translate({message: 'MySQL'}),
      description: translate({
        message: 'Projects using MySQL as the relational database.',
        id: 'showcase.tag.mysql.description',
      }),
      color: '#00758f', // MySQL blue/teal
    },
    bash: {
      label: translate({message: 'Bash'}),
      description: translate({
        message: 'Projects involving Bash scripting for automation or system interaction.',
        id: 'showcase.tag.bash.description',
      }),
      color: '#4EAA25', // Green for shell/Linux
    },
    webinterface: { // Combined 'web interface'
      label: translate({message: 'Web Interface'}),
      description: translate({
        message: 'Projects featuring a graphical user interface accessible via a web browser.',
        id: 'showcase.tag.webinterface.description',
      }),
      color: '#3498db', // General web blue
    },
    hackathon: {
      label: translate({message: 'Hackathon'}),
      description: translate({
        message: 'Projects developed during a hackathon event.',
        id: 'showcase.tag.hackathon.description',
      }),
      color: '#e67e22', // Energetic orange
    },
    threejs: { // Removed dot from 'three.js' for key
      label: translate({message: 'three.js'}),
      description: translate({
        message: 'Projects using the three.js library for 3D graphics rendering in the browser.',
        id: 'showcase.tag.threejs.description',
      }),
      color: '#34495e', // Dark grey instead of black
    },
    webplatform: { // Combined 'web platform'
      label: translate({message: 'Web Platform'}),
      description: translate({
        message: 'Comprehensive web-based applications or systems.',
        id: 'showcase.tag.webplatform.description',
      }),
      color: '#2980b9', // Slightly darker web blue
    },
    teamlead: { // Combined 'team lead'
      label: translate({message: 'Team Lead'}),
      description: translate({
        message: 'Projects where I held a team leadership or project management role.',
        id: 'showcase.tag.teamlead.description',
      }),
      color: '#1abc9c', // Teal/Green for organization
    },
    rbac: { // Lowercase RBAC
      label: translate({message: 'RBAC'}),
      description: translate({
        message: 'Projects implementing Role-Based Access Control for security.',
        id: 'showcase.tag.rbac.description',
      }),
      color: '#c0392b', // Red for security/control
    },
    bootstrap: {
      label: translate({message: 'Bootstrap'}),
      description: translate({
        message: 'Projects using the Bootstrap framework for frontend development.',
        id: 'showcase.tag.bootstrap.description',
      }),
      color: '#563d7c', // Bootstrap purple
    },
    authentication: {
      label: translate({message: 'Authentication'}),
      description: translate({
        message: 'Projects featuring user login, registration, or session management.',
        id: 'showcase.tag.authentication.description',
      }),
      color: '#e74c3c', // Another red for security
    },
};

export const TagList = Object.keys(Tags) as TagType[];
function sortUsers() {
  let result = Users;
  
  
  // 2. Ordenar por fecha DESC
  result = sortBy(result, (user) => -Number(user.date.replace("-", ""))); 
  // Alternativa: result.sort((a, b) => b.date.localeCompare(a.date));
  
  // 1. Favoritos primero
  result = sortBy(result, (user) => !user.tags.includes('favorite'));

  return result;
}

export const sortedUsers = sortUsers();
