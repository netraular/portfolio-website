/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type {ReactNode} from 'react';
import Translate, {translate} from '@docusaurus/Translate';

// Link ya no es necesario porque quitaremos el botón de "añadir sitio"
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
// SUBMIT_URL ya no es necesario

// --- Cabecera Modificada ---
function ShowcaseHeader() {
  return (
    <section className="margin-top--lg margin-bottom--lg text--center">
      <Heading as="h1">{TITLE}</Heading>
      <p>{DESCRIPTION}</p>
      {/* Se ha eliminado el botón Link que pedía añadir sitios */}
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