---
title: Aplicaciones Web Personalizadas
sidebar_position: 6
description: Full-stack con React y Docker
image: ../static/img/web-dev.jpg
keywords: [api, react, ci/cd]
---

# Laboratorio de Desarrollo

## Integraciones
- **GitLab CE**: CI/CD con runners en Proxmox.
- **Portainer**: Despliegue de stacks Docker.
- **Nginx Proxy Manager**: Enrutamiento y SSL.
- **Prometheus/Grafana**: Monitorización de APIs.

## Stack Técnico
- **Frontend**: React + Vite (TypeScript)
- **Backend**: Go/Fiber + PostgreSQL
- **Infraestructura**:
  - Docker Swarm para alta disponibilidad
  - Redis para caching
- **Testing**: Cypress E2E + Jest unit tests.

## Repositorios
- [GitLab: Sistema de Tickets](https://gitlab.com/tusuario/ticket-system)
- [Guía de Contribución](docs/web-projects/contribution-guide)
- [API Docs](https://api.midominio.com/swagger)