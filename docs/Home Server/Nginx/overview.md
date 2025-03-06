---
title: Nginx Proxy Manager
sidebar_position: 4
description: Reverse proxy con gestión centralizada de certificados SSL
image: ../static/img/nginx-proxy.jpg
keywords: [ssl, reverse proxy, docker, dns]
---

# Gestor de Tráfico Web

Docker stack que maneja:
- **Certificados SSL**: 
  - Let's Encrypt con renovación automática
  - Certificados wildcard para subdominios
- **Reglas personalizadas**:
  - Redirecciones 301/302
  - Balanceo de carga entre instancias
  - Autenticación básica HTTP

Actualmente gestiona 15 servicios distintos incluyendo:
- Nextcloud
- Vaultwarden (Bitwarden autoalojado)
- Guacamole (acceso remoto)

Monitorización via Prometheus + Alertmanager para detectar caídas.