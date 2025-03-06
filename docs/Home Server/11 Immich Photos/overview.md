---
title: Immich Photos
sidebar_position: 11
description: Google Photos autoalojado
image: ../static/img/immich-mobile.jpg
keywords: [photos, ai, backup]
---

# Galería Fotográfica Privada

## Integraciones
- **Docker**: Stack con 4 servicios (main, microservices, DB, Redis).
- **TrueNAS**: Dataset de 12TB para almacenamiento RAW.
- **Cloudflare Tunnel**: Acceso externo seguro.
- **PhotoPrism**: Importación automática vía API.

## Características Técnicas
- **Mobile Upload**: App Android/iOS con E2EE.
- **ML Models**: Reconocimiento facial y de objetos.
- **Metadata**: EXIF/IPTC preservados.
- **Backup**: Restic + SFTP a servidor remoto.

## Recursos
- [Immich Docs](https://immich.app/)
- [GitHub Oficial](https://github.com/immich-app/immich)
- [Guía Mobile](docs/homelab/services/immich-android)