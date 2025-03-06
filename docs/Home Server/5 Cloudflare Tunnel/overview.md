---
title: Cloudflare Tunnel
sidebar_position: 5
description: Exposición segura de servicios locales
image: ../static/img/cloudflare-zero-trust.jpg
keywords: [zero trust, waf, dns]
---

# Puerta de Enlace Cloudflare

## Conexiones
- **Docker**: Servicios expuestos via `cloudflared` (Portainer, Immich).
- **Nginx Proxy Manager**: Redirección condicional basada en ubicación.
- **Authelia**: Autenticación 2FA para aplicaciones internas.
- **Graylog**: Registro de tráfico HTTP/HTTPS.

## Configuración Destacada
- **Políticas de Acceso**:
  - Grupo de GitHub para desarrolladores
  - Geolock a UE y USA
- **WAF Custom**:
  - Bloqueo de SQLi
  - Rate limiting (1000 req/min)
- **Túneles Activos**: 8 servicios en producción.

## Enlaces
- [Cloudflare Zero Trust Docs](https://developers.cloudflare.com/cloudflare-one/)
- [GitHub: cloudflared](https://github.com/cloudflare/cloudflared)
- [Guía de Políticas](docs/homelab/security/access-policies)