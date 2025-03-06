---
title: Nginx Proxy Manager
sidebar_position: 2
description: Gestión centralizada de certificados SSL
image: ../static/img/nginx-letsencrypt.jpg
keywords: [ssl, reverse proxy, rate limiting]
---

# Gestor de Tráfico Web

## Interacciones Clave
- **Cloudflare**: Validación DNS-01 para certificados wildcard.
- **Portainer**: Proxy de aplicaciones Docker (ej: `portainer.midominio.com`).
- **TrueNAS**: Servicio de archivos via WebDAV en `https://files.midominio.com`.
- **Prometheus**: Métricas de tráfico en tiempo real.

## Funcionamiento Técnico
- **Let's Encrypt**: Renovación automática con cron.
- **Access Lists**: Bloqueo de IPs maliciosas via fail2ban.
- **Custom Headers**: HSTS preload y CSP para seguridad.

## Enlaces Útiles
- [Guía Nginx Proxy Manager](https://nginxproxymanager.com/guide/)
- [GitHub Oficial](https://github.com/NginxProxyManager/nginx-proxy-manager)
- [Plantilla Docker Compose](docs/homelab/nginx/docker-compose)