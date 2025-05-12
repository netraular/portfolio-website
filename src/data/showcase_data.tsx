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
    title: translate({
      message: 'WLED-Controlled LED Picture Frames',
      id: 'showcase.project.wledFrames.title',
      description: 'Title for the WLED Picture Frames project', // Descripción opcional para traductores
    }),
    description: translate({
      message: 'Custom backlit picture frames using ESP32 and WLED for dynamic, controllable lighting effects.',
      id: 'showcase.project.wledFrames.description',
      description: 'Description for the WLED Picture Frames project',
    }),
    preview: require('./showcase/wled frames/banner.png'),
    website: '/docs/Others/IoT%20and%20ESP32%20Development/Wled%20Art%20Frame/overview',
    source: null,
    tags: ['iotEmbedded'],
    date: '2023-12',
  },
  {
    title: translate({
      message: 'HomeLab',
      id: 'showcase.project.homeLab.title',
      description: 'Title for the HomeLab project',
    }),
    description: translate({
      message: 'A versatile, self-hosted ecosystem powered by Proxmox, TrueNAS, and Docker, enabling secure services, robust storage, and automated workflows.',
      id: 'showcase.project.homeLab.description',
      description: 'Description for the HomeLab project',
    }),
    preview: require('./showcase/home server/banner.png'),
    website: '/docs/HomeLab',
    source: '/docs/HomeLab',
    tags: ['favorite', 'selfhosted'],
    date: '2024-01',
  },
  {
    title: translate({
      message: 'Local Voice Assistant Natural Language to SQL (Bachelor Thesis)',
      id: 'showcase.project.tfgNlsql.title',
      description: 'Title for the Bachelor Thesis project',
    }),
    description: translate({
      message: 'Offline voice assistant system converting natural language to SQL queries using local AI models.',
      id: 'showcase.project.tfgNlsql.description',
      description: 'Description for the Bachelor Thesis project',
    }),
    preview: require('./showcase/tfg/banner.png'),
    website: 'https://tfg.raular.com/',
    source: 'https://github.com/netraular/tfgweb',
    tags: ['aiMl', 'webDevelopment'],
    date: '2024-06',
  },
  {
    title: translate({
      message: 'Eco2 - Hack for Good Barcelona Winner',
      id: 'showcase.project.eco2.title',
      description: 'Title for the Eco2 Hackathon project',
    }),
    description: translate({
      message: '1st place winning Hackathon project promoting sustainable consumption via QR-based proximity scoring and supply chain tracking.',
      id: 'showcase.project.eco2.description',
      description: 'Description for the Eco2 Hackathon project',
    }),
    preview: require('./showcase/eco2/banner.png'),
    website: 'https://eco2.raular.com/',
    source: 'https://github.com/netraular/hack4goodApp-2024',
    tags: ['favorite','hackathon', 'webDevelopment', 'selfhosted'],
    date: '2024-09',
  },
   {
    title: translate({
      message: 'Game Server Management Interface',
      id: 'showcase.project.gameServer.title',
      description: 'Title for the Game Server Management project',
    }),
    description: translate({
      message: 'Web platform using Laravel and Bash scripts for managing multiple game servers hosted with Docker on a single VM.',
      id: 'showcase.project.gameServer.description',
      description: 'Description for the Game Server Management project',
    }),
    preview: require('./showcase/game server/banner.png'),
    website: 'http://gameserver.raular.com/',
    source: 'https://github.com/netraular/gameserver',
    tags: ['webDevelopment', 'selfhosted'],
    date: '2024-10',
  },
  {
    title: translate({
      message: 'Project Showcase Platform',
      id: 'showcase.project.showcasePlatform.title',
      description: 'Title for the Project Showcase Platform project',
    }),
    description: translate({
      message: 'A self-hosted Laravel and Bootstrap system for managing and displaying personal projects via a private admin panel.',
      id: 'showcase.project.showcasePlatform.description',
      description: 'Description for the Project Showcase Platform project',
    }),
    preview: require('./showcase/showcase/banner.png'),
    website: 'https://showcase.raular.com/',
    source: 'https://github.com/netraular/project-showcase-platform',
    tags: ['webDevelopment', 'selfhosted'],
    date: '2024-09',
  },
  {
    title: translate({
      message: '(hackaton) Cosmoscape - Exoplanetary Sky Visualization',
      id: 'showcase.project.cosmoscape.title',
      description: 'Title for the Cosmoscape NASA Hackathon project',
    }),
    description: translate({
      message: 'Interactive NASA Space Apps 2024 platform visualizing night skies from 50 exoplanets using three.js and Laravel.',
      id: 'showcase.project.cosmoscape.description',
      description: 'Description for the Cosmoscape NASA Hackathon project',
    }),
    preview: require('./showcase/hack nasa 24/banner.png'),
    website: 'https://nasa24.raular.com/',
    source: 'https://github.com/netraular/Hackathon-NASA-2024',
    tags: ['hackathon', 'webDevelopment', 'gameDevelopment', 'selfhosted', 'favorite'],
    date: '2024-10',
  },
  {
    title: translate({
      message: 'PromptPal - LLM-Powered Template Generation Platform',
      id: 'showcase.project.promptPal.title',
      description: 'Title for the PromptPal project',
    }),
    description: translate({
      message: 'Laravel web platform leveraging Grok LLM API for generating diverse text outputs from user-defined templates.',
      id: 'showcase.project.promptPal.description',
      description: 'Description for the PromptPal project',
    }),
    preview: require('./showcase/promptpal/banner.png'),
    website: 'https://promptpal.raular.com',
    source: 'https://github.com/netraular/llm-prompt-combine',
    tags: ['aiMl', 'webDevelopment', 'selfhosted'],
    date: '2024-11',
  },
  {
    title: translate({
      message: 'Prompt My Repo VSCode Extension',
      id: 'showcase.project.promptMyRepo.title',
      description: 'Title for the Prompt My Repo VSCode Extension project',
    }),
    description: translate({
      message: 'VS Code extension structuring project files for easier interaction with Large Language Models (LLMs).',
      id: 'showcase.project.promptMyRepo.description',
      description: 'Description for the Prompt My Repo VSCode Extension project',
    }),
    preview: require('./showcase/prompt my repo/banner.png'),
    website: 'https://marketplace.visualstudio.com/items?itemName=netraular.prompt-my-repo',
    source: 'https://github.com/netraular/prompt-my-repo',
    tags: ['developerTools', 'aiMl'],
    date: '2024-12',
  },
  {
    title: translate({
      message: 'PMD Sprite Manager',
      id: 'showcase.project.pmdSpriteManager.title',
      description: 'Title for the PMD Sprite Manager project',
    }),
    description: translate({
      message: 'Python GUI tool for splitting Pokémon Mystery Dungeon sprite sheets and previewing animations.',
      id: 'showcase.project.pmdSpriteManager.description',
      description: 'Description for the PMD Sprite Manager project',
    }),
    preview: require('./showcase/pmd sprite manager/banner.png'),
    website: 'https://github.com/netraular/PMDSpriteManager',
    source: 'https://github.com/netraular/PMDSpriteManager',
    tags: ['favorite','gameDevelopment', 'developerTools'],
    date: '2025-01',
  },
  {
    title: translate({
      message: 'ESP32 LVGL Tamagotchi Clone',
      id: 'showcase.project.esp32Tamagotchi.title',
      description: 'Title for the ESP32 Tamagotchi project',
    }),
    description: translate({
      message: 'A Tamagotchi-style virtual pet game running on an ESP32 with a round LVGL display.',
      id: 'showcase.project.esp32Tamagotchi.description',
      description: 'Description for the ESP32 Tamagotchi project',
    }),
    preview: require('./showcase/esp32 lvgl/banner.png'),
    website: 'https://github.com/netraular/espTama-Round-Cheap-Yellow-Display',
    source: 'https://github.com/netraular/espTama-Round-Cheap-Yellow-Display',
    tags: ['iotEmbedded', 'gameDevelopment'],
    date: '2025-02',
  },
   {
    title: translate({
      message: 'Portfolio Website',
      id: 'showcase.project.portfolio.title',
      description: 'Title for the Portfolio Website project',
    }),
    description: translate({
      message: 'Modern developer portfolio built with Docusaurus, automated via GitHub & Cloudflare Pages and integrated with Obsidian.',
      id: 'showcase.project.portfolio.description',
      description: 'Description for the Portfolio Website project',
    }),
    preview: require('./showcase/portfolio/banner.png'),
    website: 'https://raular.com/',
    source: 'https://github.com/netraular/portfolio-website',
    tags: ['webDevelopment'],
    date: '2025-04',
  },
    {
    title: translate({
      message: 'Biene Hunt! (HackUPC 2025)',
      id: 'showcase.project.bieneHunt.title',
      description: 'Title for the Biene Hunt Hackathon project',
    }),
    description: translate({
      message: 'HackUPC 2025 project: Web app for attendees to collaboratively hunt and share photos of the event mascot \'Biene\'.',
      id: 'showcase.project.bieneHunt.description',
      description: 'Description for the Biene Hunt Hackathon project',
    }),
    preview: require('./showcase/biene hunt/banner.png'), // Asegúrate que esta ruta sea correcta
    website: 'https://findbiene.raular.com/',
    source: 'https://github.com/netraular/findbiene',
    tags: ['hackathon', 'webDevelopment', 'selfhosted'],
    date: '2025-05',
  },
  {
    title: translate({
      message: 'Tavascan Rush (Know Your Cupra) - HackUPC 2025 Winner',
      id: 'showcase.project.tavascanRush.title',
      description: 'Title for the Tavascan Rush Hackathon project',
    }),
    description: translate({
      message: 'HackUPC 2025 winning project: Interactive AR/3D guide with live voice AI (Gemini) to learn about the Cupra Tavascan.',
      id: 'showcase.project.tavascanRush.description',
      description: 'Description for the Tavascan Rush Hackathon project',
    }),
    preview: require('./showcase/hackupc/banner.png'), // Asegúrate que esta ruta sea correcta
    website: 'https://hackupc.raular.com/',
    // Nota: El README enlaza a Devpost, pero no a un repo de GitHub directamente.
    // Si tienes un repo, actualiza el 'source'. Si no, Devpost o null son opciones.
    // Usaré Devpost como 'source' ya que es el enlace proporcionado en el Readme para la "Submission".
    source: 'https://github.com/netraular/hackupc', 
    tags: ['favorite', 'hackathon', 'webDevelopment', 'aiMl', 'gameDevelopment', 'selfhosted'], // Añadido 'favorite' por ser ganador
    date: '2025-05',
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
