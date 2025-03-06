---
title: TrueNAS Scale
sidebar_position: 10
description: Almacenamiento NAS con escalabilidad ZFS
image: ../static/img/truenas-dashboard.jpg
keywords: [zfs, nas, storage, samba]
---

# Corazón del Almacenamiento

Configuración ZFS:
- **Pool principal**: 
  - 6x8TB HDD en RAID-Z2 (~32TB usable)
  - L2ARC: 512GB NVMe
  - SLOG: 128GB SSD dedicado

Servicios activos:
- **SMB/CIFS**: Para dispositivos Windows
- **NFSv4**: Montajes en Proxmox/LXC
- **iSCSI**: Volúmenes para VMs críticas

Protección de datos:
- Snapshots cada 4 horas
- Scrub mensual
- SMART monitoring en tiempo real