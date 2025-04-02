/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type {ReactNode} from 'react';
import Translate, {translate} from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import ShowcaseSearchBar from '@site/src/pages/showcase/_components/ShowcaseSearchBar';
import ShowcaseCards from './_components/ShowcaseCards';
import ShowcaseFilters from './_components/ShowcaseFilters';

// --- Textos Actualizados ---
const TITLE = translate({
  message: 'My Project Showcase', // Título más personal
  id: 'showcase.title', // ID para posible traducción futura
});
const DESCRIPTION = translate({
  // Descripción más acorde a un portfolio
  message: 'Explore a visual gallery of my technical projects across various domains. Use the filters or search to discover specific work.',
  id: 'showcase.description', // ID para posible traducción futura
});
const DETAILS_TEXT = translate({
  message: 'Want to dive deeper into the technical details, process, and documentation? Visit the main docs section.',
  id: 'showcase.details.text',
  description: 'Text prompting users to visit the main documentation for more project details',
});
const DETAILS_BUTTON_TEXT = translate({
  message: 'Explore Project Docs',
  id: 'showcase.details.button',
  description: 'Button text linking to the main documentation section (/docs/intro)',
});
// --- NUEVO: Nota sobre construcción ---
const DOCS_UNDER_CONSTRUCTION_NOTE = translate({
  message: '(Please note: This documentation section is currently under construction.)',
  id: 'showcase.details.underConstructionNote',
  description: 'Note indicating the linked documentation section is not yet complete',
});
// --- Cabecera Modificada ---
function ShowcaseHeader() {
  return (
    <section className="margin-top--lg margin-bottom--lg text--center">
      <Heading as="h1">{TITLE}</Heading>
      <p>{DESCRIPTION}</p>
      <div className="margin-top--md">
        <p>{DETAILS_TEXT}</p>
        <Link
          className="button button--primary"
          to="/docs/intro">
          {DETAILS_BUTTON_TEXT}
        </Link>
        {/* --- INICIO: Nota añadida "En construcción" --- */}
        <p > {/* Añade espacio sobre la nota */}
          <small>{DOCS_UNDER_CONSTRUCTION_NOTE}</small> {/* Usa <small> para un texto más discreto */}
        </p>
        {/* --- FIN: Nota añadida --- */}
      </div>
    </section>
  );
}

export default function Showcase(): ReactNode {
  return (
    // Usamos los nuevos TITLE y DESCRIPTION para el Layout (importante para SEO y título de pestaña)
    <Layout title={TITLE} description={DESCRIPTION}>
      <main className="margin-vert--lg">
        <ShowcaseHeader />
        <ShowcaseFilters />
        <div
          style={{display: 'flex', marginLeft: 'auto'}}
          className="container">
          {/* Mantenemos la barra de búsqueda y los filtros/tarjetas */}
          <ShowcaseSearchBar />
        </div>
        <ShowcaseCards />
      </main>
    </Layout>
  );
}