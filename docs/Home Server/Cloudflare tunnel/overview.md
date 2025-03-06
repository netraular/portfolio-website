---
title: Cloudflare Tunnel
sidebar_position: 1
description: Conexión segura entre servicios locales y Cloudflare
image: ../static/img/cloudflare-zero-trust.png
keywords: [reverse proxy, seguridad, dns, cdn]
---

# Gateway Seguro para Servicios Locales

Implemento tunnels mediante `cloudflared` en Docker para exponer selectivamente servicios sin abrir puertos en el router. Configuro:

- **Políticas de acceso**: 
  - Requieren autenticación Google Workspace + Yubikey
  - Geolock a España
  - Reglas WAF personalizadas

- **Integraciones**:
  - Immich: https://photos.midominio.com
  - Portainer: https://docker.midominio.com
  - Documentación: https://docs.midominio.com

Uso certificados SSL originados desde Cloudflare con rotación automática y registro detallado de tráfico en Graylog.