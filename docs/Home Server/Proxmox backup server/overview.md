---
title: Proxmox Backup Server
sidebar_position: 9
description: Sistema de backups para entornos virtualizados
image: ../static/img/proxmox-backups.jpg
keywords: [backup, deduplication, disaster recovery]
---

# Estrategia de Resiliencia

Configuración clave:
- **Retención**:
  - Diarios: 7 días
  - Semanales: 4 semanas
  - Mensuales: 12 meses
- **Almacenamiento**:
  - Local: RAID-10 (4x4TB HDD)
  - Remoto: Backblaze B2 via rclone

Políticas de backup:
1. Máquinas virtuales: Completo cada domingo + incrementales diarios
2. Contenedores LXC: Sincronización continua
3. Metadata: Cifrado AES-256 + checksums

Recuperación verificada mensualmente mediante drills.