---
title: Obsidian Sync
sidebar_position: 9
description: Bóveda de conocimiento personal
image: ../static/img/obsidian-git.jpg
keywords: [markdown, git, encryption]
---

# Sistema de Notas E2EE

## Integraciones
- **Syncthing**: Sincronización entre 5 dispositivos.
- **Git**: Historial de cambios con hooks pre-commit.
- **AWS S3 Glacier**: Backup mensual cifrado.
- **Cron**: Limpieza automática de temporales.

## Estructura de Vault
```bash
vault/
├─ Homelab/
│  ├─ Networking.md
│  └─ Proxmox-Tips.md
├─ Projects/
│  ├─ Web-App.md
│  └─ API-Docs.md
└─ Templates/
   └─ Meeting-Note.md