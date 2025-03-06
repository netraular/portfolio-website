---
title: WireGuard VPN
sidebar_position: 7
description: Acceso seguro desde cualquier lugar
image: ../static/img/wireguard-ansible.jpg
keywords: [vpn, networking, ansible]
---

# Túnel Administrativo

## Interacciones
- **Proxmox LXC**: Contenedor dedicado con kernel WireGuard.
- **Firewall**: Reglas nftables para limitar acceso a subredes.
- **Ansible**: Rotación automática de claves cada 30 días.
- **Zabbix**: Monitorización de latencia y uptime.

## Configuración
```ini
[Interface]
Address = 10.8.0.1/24
ListenPort = 51820
PrivateKey = ABC123...

[Peer] # Móvil
PublicKey = XYZ789...
AllowedIPs = 10.8.0.2/32