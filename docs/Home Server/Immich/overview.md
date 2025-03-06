---
title: Immich
sidebar_position: 2
description: Plataforma de fotos autoalojada con sincronización móvil
image: ../static/img/immich-backup.jpg
keywords: [fotos, backup, reconocimiento facial, docker]
---

# Alternativa Privada a Google Photos

Despliegue en Docker Compose con:
- **Arquitectura**:
  - Servicio principal + PostgreSQL + Redis
  - Workers separados para procesamiento
  - Volumenes persistentes en TrueNAS via NFS

- **Características clave**:
  - Sincronización automática desde Android/iOS
  - Reconocimiento facial con TensorFlow
  - API para integración con PhotoPrism

Backup diario via Restic hacia Backblaze B2, con retención de 30 días. Uso reservas de recursos en Proxmox (4vCPU, 8GB RAM).