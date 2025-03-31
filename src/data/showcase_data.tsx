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
  ;

// Add sites to this list
// prettier-ignore
const Users: User[] = [
  {
    title: 'AI-Speaker',
    description: 'Local, reliable, fast and private Audio and IoT gate.',
    preview: require('./showcase/aispeaker.png'),
    website: 'https://ai-speaker.com/',
    source: 'https://github.com/sviete/AIS-WWW',
    tags: ['opensource'],
  },
  {
    title: "Akara's blog",
    description: 'Personal frontend blog for learning',
    preview: require('./showcase/akara-blog.png'),
    website: 'https://messiahhh.github.io/blog/',
    source: 'https://github.com/messiahhh/blog',
    tags: ['opensource', 'personal'],
  },
  {
    title: 'Algolia DocSearch',
    description:
      'The best search experience for docs, integrates in minutes, for free',
    preview: require('./showcase/algolia.png'),
    website: 'https://docsearch.algolia.com/',
    source: 'https://github.com/algolia/docsearch/tree/main/packages/website',
    tags: ['favorite', 'opensource', 'product'],
  },
  
  {
    title: 'Dynamoose',
    description: 'A modeling tool for Amazon\'s DynamoDB',
    preview: null,
    website: 'https://dynamoosejs.com/',
    source: 'https://github.com/dynamoose/dynamoose/tree/main/docs',
    tags: ['opensource'],
  },
  {
    title:'HomeLab',
    description:'A versatile, self-hosted ecosystem powered by Proxmox, TrueNAS, and Docker, enabling secure services, robust storage, and automated workflows.',
    preview: require('./showcase/algolia.png'),
    website: '/docs/Home%20Server/overview',
    source: '/docs/Home%20Server/overview',
    tags:['homelab', 'selfhosted' , 'virtualization' , 'proxmox' , 'truenas' , 'docker' , 'networking'],
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
    label: translate({message: 'docker'}),
    description: translate({
      message: 'Platform for developing, shipping, and running applications within containers.',
      id: 'showcase.tag.docker.description',
    }),
    color: '#0EA5E9', // Sky/Docker Blue
  },
  networking: {
    label: translate({message: 'networking'}),
    description: translate({
      message: 'Configuration and management of network infrastructure, routing, and services like VPNs and proxies.',
      id: 'showcase.tag.networking.description',
    }),
    color: '#F59E0B', // Amber/Yellow
  },
};

export const TagList = Object.keys(Tags) as TagType[];
function sortUsers() {
  let result = Users;
  // Sort by site name
  result = sortBy(result, (user) => user.title.toLowerCase());
  // Sort by favorite tag, favorites first
  result = sortBy(result, (user) => !user.tags.includes('favorite'));
  return result;
}

export const sortedUsers = sortUsers();
