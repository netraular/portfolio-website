---
title: Proxmox VE
sidebar_position: 1
description: Hipervisor para máquinas virtuales y contenedores LXC
image: ../static/img/proxmox-cluster.jpg
keywords: [cluster, zfs, kvm, lxc]
---

# Columna Vertebral de Virtualización

## Interacciones Clave
- **TrueNAS Scale**: Montaje de datasets via NFS/iSCSI para almacenamiento VM.
- **Cloudflare Tunnel**: Exposición segura de la interfaz web en `https://proxmox.midominio.com`.
- **Proxmox Backup Server**: Replicación diaria de VMs críticas.
- **WireGuard**: Acceso administrativo a la red de gestión (VLAN 100).

## Funcionamiento Interno
- **Cluster HA**: 2 nodos con quórum basado en QDevice.
- **ZFS**: RAID-Z1 para discos VM locales.
- **Live Migration**: Movimiento de VMs entre nodos sin downtime.
- **Templates**: Imágenes Cloud-Init para despliegue rápido.

## Enlaces Relevantes
- [Documentación Oficial Proxmox](https://pve.proxmox.com/wiki/Main_Page)
- [GitHub: Scripts de Automatización](https://github.com/tusuario/proxmox-scripts)
- [Guía Interna: Configuración de VLANs](docs/homelab/networking/vlan-setup)