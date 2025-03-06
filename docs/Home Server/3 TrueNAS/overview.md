---
title: TrueNAS Scale
sidebar_position: 3
description: Almacenamiento empresarial con ZFS
image: ../static/img/truenas-zfs.jpg
keywords: [zfs, raid-z2, smb, nfs]
---

# Sistema de Archivos Central

## Integraciones
- **Proxmox**: Datasets para backups y VMs via iSCSI.
- **Immich**: Volumen SMB para 15TB de fotos (`/mnt/tank/photos`).
- **Proxmox Backup Server**: Almacenamiento secundario via rsync.
- **Backblaze B2**: Sync diario de datos críticos.

## Detalles Técnicos
- **Pool Config**: 6x8TB HDD en RAID-Z2 (32TB usable).
- **Cache**: 512GB NVMe como L2ARC.
- **Snapshots**: Automáticos cada 4h, retención 30 días.
- **S.M.A.R.T**: Alertas via email y Telegram.

## Documentación Adicional
- [TrueNAS Docs](https://www.truenas.com/docs/)
- [GitHub: Sincronización B2](https://github.com/tusuario/truenas-scripts)
- [Política de Snapshots](docs/homelab/storage/snapshot-policy)