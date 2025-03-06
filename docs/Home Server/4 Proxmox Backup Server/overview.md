---
title: Proxmox Backup Server
sidebar_position: 4
description: Solución enterprise para backups cifrados
image: ../static/img/proxmox-backup-encryption.jpg
keywords: [deduplication, encryption, retention]
---

# Estrategia de Backups

## Interconexiones
- **Proxmox VE**: Backup de 12 VMs y 20 contenedores LXC.
- **TrueNAS**: Almacenamiento de chunks de backup en `/mnt/pbs-storage`.
- **rclone**: Sync cifrado a Backblaze B2 cada 6h.
- **Alertmanager**: Notificaciones de fallos via Slack.

## Mecanismos Clave
- **Deduplicación**: Ahorro del 65% en espacio.
- **Cifrado**: AES-256 con claves por VM.
- **Retención**: 
  ```bash
  keep-daily=7
  keep-weekly=4
  keep-monthly=12
  ```
  
## Recursos

- [Docs Proxmox Backup](https://pbs.proxmox.com/docs/)
- [Guía de Recuperación](https://docs/homelab/backups/disaster-recovery)
- [Scripts de Verificación](https://github.com/tusuario/pbs-scripts)