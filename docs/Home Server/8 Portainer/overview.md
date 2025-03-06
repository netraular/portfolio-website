---
title: Portainer
sidebar_position: 8
description: UI para gestión de contenedores
image: ../static/img/portainer-environments.jpg
keywords: [docker, swarm, stacks]
---

# Panel de Control Docker

## Conexiones Clave
- **Docker Hosts**: 3 servidores (producción, staging, desarrollo).
- **GitHub**: Webhooks para actualización automática.
- **Proxmox VE**: VMs dedicadas para entornos aislados.
- **LDAP**: Integración con servidor Active Directory.

## Features Destacados
- **Templates**:
  - Preconfigurados para Mealie, Immich, etc.
- **RBAC**:
  - Devs: Solo despliegue en staging
  - Admins: Acceso completo
- **Swarm**: Gestión visual de servicios escalables.

## Documentación
- [Portainer Docs](https://docs.portainer.io/)
- [GitHub Oficial](https://github.com/portainer/portainer)
- [Guía de Seguridad](docs/homelab/docker/portainer-security)