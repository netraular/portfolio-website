---
title: Home Server
sidebar_position: 1
description: Infraestructura híbrida de virtualización, servicios autoalojados y almacenamiento NAS
image: ../static/img/home-server-rack.jpg
keywords: [proxmox, docker, self-hosted, homelab, seguridad]
---

# Home Server Lab

Mi entorno de producción local combina virtualización empresarial (Proxmox VE), almacenamiento ZFS (TrueNAS Scale) y orquestación de contenedores (Docker + Portainer). 

**Stack principal**:
- Hipervisor: Proxmox VE en 2 nodos físicos (cluster)
- Almacenamiento: TrueNAS Scale con 24TB RAID-Z2
- Red: VLANs segregadas + WireGuard VPN
- Monitorización: Netdata + Grafana Loki

Todos los servicios se exponen mediante Cloudflare Tunnel con políticas Zero Trust y autenticación de dos factores.