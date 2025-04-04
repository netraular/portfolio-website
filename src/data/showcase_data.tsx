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
  // Sitios destacados o favoritos personales del autor.
  | 'favorite'
  // Proyectos relacionados con autoalojamiento, servidores personales, y gestión de infraestructura propia (Home Lab).
  | 'selfhosted'
  // Desarrollo de aplicaciones web, sitios, APIs, o interfaces de usuario web (frontend/backend).
  | 'webDevelopment'
  // Proyectos que utilizan Inteligencia Artificial, Machine Learning, o Modelos de Lenguaje Grandes (LLMs).
  | 'aiMl'
  // Proyectos relacionados con el Internet de las Cosas (IoT), microcontroladores (como ESP32), sistemas embebidos y hardware.
  | 'iotEmbedded'
  // Creación de videojuegos, herramientas para desarrollo de juegos, o experiencias interactivas lúdicas.
  | 'gameDevelopment'
  // Herramientas creadas para facilitar el trabajo de otros desarrolladores (extensiones, scripts, utilidades).
  | 'developerTools'
  // Proyectos desarrollados específicamente durante un evento de hackathon.
  | 'hackathon';

// Add sites to this list
// prettier-ignore
const Users: User[] = [
  
  {
    title: 'WLED-Controlled LED Picture Frames',
    description: 'Custom backlit picture frames using ESP32 and WLED for dynamic, controllable lighting effects.',
    preview: require('./showcase/wled frames/banner.png'),
    website: '/docs/Others/IoT%20and%20ESP32%20Development/Wled%20Art%20Frame/overview',
    source: null, // Sin repo público específico mencionado
    tags: ['iotEmbedded'], // Proyecto de hardware/IoT, personal/DIY.
    date: '2023-12',
  },
  {
    title: 'HomeLab',
    description: 'A versatile, self-hosted ecosystem powered by Proxmox, TrueNAS, and Docker, enabling secure services, robust storage, and automated workflows.',
    preview: require('./showcase/home server/banner.png'), // Asegúrate que la imagen exista
    website: '/docs/Home%20Server/overview',
    source: '/docs/Home%20Server/overview', // O null si no hay un repo específico del código del sitio
    tags: ['favorite', 'selfhosted'], // Simplificado: Es tu favorito y es autoalojado/infraestructura.
    date: '2024-01',
  },
  {
    title: 'Local Voice Assistant Natural Language to SQL (Bachelor Thesis)',
    description: 'Offline voice assistant system converting natural language to SQL queries using local AI models.',
    preview: require('./showcase/tfg/banner.png'),
    website: 'https://tfg.raular.com/',
    source: 'https://github.com/netraular/tfgweb',
    tags: ['aiMl', 'webDevelopment'], // IA como núcleo, interfaz web, proyecto personal/académico.
    date: '2024-06', // Corregida fecha probable (era 2032)
  },
  {
    title: 'Eco2 - Hack for Good Barcelona Winner',
    description: '1st place winning Hackathon project promoting sustainable consumption via QR-based proximity scoring and supply chain tracking.',
    preview: require('./showcase/eco2/banner.png'),
    website: 'https://eco2.raular.com/',
    source: 'https://github.com/netraular/hack4goodApp-2024',
    tags: ['favorite','hackathon', 'webDevelopment', 'selfhosted'], 
    date: '2024-09',
  },
  {
    title: 'Game Server Management Interface',
    description: 'Web platform using Laravel and Bash scripts for managing multiple game servers hosted with Docker on a single VM.',
    preview: require('./showcase/game server/banner.png'),
    website: 'http://gameserver.raular.com/',
    source: 'https://github.com/netraular/gameserver',
    tags: ['webDevelopment', 'selfhosted'],
    date: '2024-10',
  },
  {
    title: 'Project Showcase Platform',
    description: 'A self-hosted Laravel and Bootstrap system for managing and displaying personal projects via a private admin panel.',
    preview: require('./showcase/showcase/banner.png'),
    website: 'https://showcase.raular.com/',
    source: 'https://github.com/netraular/project-showcase-platform',
    tags: ['webDevelopment', 'selfhosted'],
    date: '2024-09',
  },
  {
    title: '(hackaton) Cosmoscape - Exoplanetary Sky Visualization',
    description: 'Interactive NASA Space Apps 2024 platform visualizing night skies from 50 exoplanets using three.js and Laravel.',
    preview: require('./showcase/hack nasa 24/banner.png'),
    website: 'https://nasa24.raular.com/',
    source: 'https://github.com/netraular/Hackathon-NASA-2024',
    tags: ['hackathon', 'webDevelopment', 'gameDevelopment', 'selfhosted'], // Evento hackathon, plataforma web con elementos de visualización 3D/juego.
    date: '2024-10', // Actualizada fecha probable (era 2023-03)
  },
  {
    title: 'PromptPal - LLM-Powered Template Generation Platform',
    description: 'Laravel web platform leveraging Grok LLM API for generating diverse text outputs from user-defined templates.',
    preview: require('./showcase/promptpal/banner.png'),
    website: 'https://promptpal.raular.com',
    source: 'https://github.com/netraular/llm-prompt-combine',
    tags: ['aiMl', 'webDevelopment', 'selfhosted'], // Núcleo de IA, plataforma web.
    date: '2024-11',
  },
  {
    title: 'Prompt My Repo VSCode Extension',
    description: 'VS Code extension structuring project files for easier interaction with Large Language Models (LLMs).',
    preview: require('./showcase/prompt my repo/banner.png'),
    website: 'https://marketplace.visualstudio.com/items?itemName=netraular.prompt-my-repo',
    source: 'https://github.com/netraular/prompt-my-repo',
    tags: ['developerTools', 'aiMl'], // Herramienta para desarrolladores, usa IA, proyecto personal.
    date: '2024-12',
  },
  {
    title: 'PMD Sprite Manager',
    description: 'Python GUI tool for splitting Pokémon Mystery Dungeon sprite sheets and previewing animations.',
    preview: require('./showcase/pmd sprite manager/banner.png'),
    website: 'https://github.com/netraular/PMDSpriteManager',
    source: 'https://github.com/netraular/PMDSpriteManager',
    tags: ['favorite','gameDevelopment', 'developerTools'], // Herramienta para assets de juegos, utilidad para desarrolladores (de juegos), proyecto personal.
    date: '2025-01',
  },
  {
    title: 'ESP32 LVGL Tamagotchi Clone',
    description: 'A Tamagotchi-style virtual pet game running on an ESP32 with a round LVGL display.',
    preview: require('./showcase/esp32 lvgl/banner.png'),
    website: 'https://github.com/netraular/espTama-Round-Cheap-Yellow-Display',
    source: 'https://github.com/netraular/espTama-Round-Cheap-Yellow-Display',
    tags: ['iotEmbedded', 'gameDevelopment'], // Hardware embebido, es un juego, proyecto personal.
    date: '2025-02',
  },
  {
    title: 'Portfolio Website',
    description: 'Modern developer portfolio built with Docusaurus, automated via GitHub & Cloudflare Pages and integrated with Obsidian.',
    preview: require('./showcase/portfolio/banner.png'),
    website: 'https://raular.com/',
    source: 'https://github.com/netraular/portfolio-website',
    tags: ['webDevelopment'], // Es un sitio web, y es tu portfolio personal.
    date: '2025-04',
  },
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

export const Tags: { [type in TagType]: Tag } = {
  // --- Tags Principales de Categoría ---
  selfhosted: {
    label: translate({ message: 'Self-Hosted / Home Lab' }),
    description: translate({
      message: 'Running services and managing personal infrastructure on self-owned hardware.',
      id: 'showcase.tag.selfhosted.description',
    }),
    color: '#3B82F6', // Blue
  },
  webDevelopment: {
    label: translate({ message: 'Web Development' }),
    description: translate({
      message: 'Building full-stack web applications, websites, APIs, and user interfaces.',
      id: 'showcase.tag.webDevelopment.description',
    }),
    color: '#10B981', // Emerald/Green
  },
  aiMl: {
    label: translate({ message: 'AI / ML' }),
    description: translate({
      message: 'Projects leveraging Artificial Intelligence, Machine Learning, or Large Language Models.',
      id: 'showcase.tag.aiMl.description',
    }),
    color: '#8B5CF6', // Violet
  },
  iotEmbedded: {
    label: translate({ message: 'IoT / Embedded' }),
    description: translate({
      message: 'Working with microcontrollers, sensors, connected devices, and embedded systems.',
      id: 'showcase.tag.iotEmbedded.description',
    }),
    color: '#F97316', // Orange
  },
  gameDevelopment: {
    label: translate({ message: 'Game Development' }),
    description: translate({
      message: 'Creating games, game development tools, or interactive game-like experiences.',
      id: 'showcase.tag.gameDevelopment.description',
    }),
    color: '#F59E0B', // Amber/Yellow
  },
  developerTools: {
    label: translate({ message: 'Developer Tools' }),
    description: translate({
      message: 'Creating tools, extensions, or utilities to aid the software development workflow.',
      id: 'showcase.tag.developerTools.description',
    }),
    color: '#06B6D4', // Cyan
  },

  // --- Tags de Contexto/Metadatos ---
  hackathon: {
    label: translate({ message: 'Hackathon' }),
    description: translate({
      message: 'Projects developed under the time pressure of a hackathon event.',
      id: 'showcase.tag.hackathon.description',
    }),
    color: '#EF4444', // Red (to stand out)
  },
   // --- Tag Especial ---
   favorite: {
    label: translate({ message: 'Favorite' }),
    description: translate({
      message: 'Personal favorite projects highlighted by the author.',
      id: 'showcase.tag.favorite.description',
    }),
    color: '#e9669e', // Original Docusaurus favorite color
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
