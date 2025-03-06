---
title: WireGuard VPN
sidebar_position: 12
description: Túnel cifrado para acceso remoto seguro
image: ../static/img/wireguard-config.jpg
keywords: [vpn, networking, security]
---

# Puerta de Enlace Remota

Implementación en LXC (Proxmox):
- **Configuración**:
  - IPv4 + IPv6 nativo
  - MTU optimizado para móviles
  - Keepalive automático
- **Seguridad**:
  - Firewall con nftables
  - Rotación quincenal de claves
  - Acceso solo a subredes necesarias

Clientes preconfigurados:
- Dispositivos móviles (Perfil .mobileconfig)
- Laptops (Configuración QR)
- Servidores remotos (Autoconfiguración Ansible)