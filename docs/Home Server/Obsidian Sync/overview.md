---
title: Obsidian
sidebar_position: 5
description: Sistema de notas con sincronización privada
image: ../static/img/obsidian-vault.jpg
keywords: [markdown, knowledge base, sync]
---

# Bóveda de Conocimiento Personal

Configuración personalizada:
- **Sincronización**: 
  - Via Syncthing en Docker
  - Cifrado AES-256 en tránsito
  - Historial de versiones con Git
- **Plugins clave**:
  - Dataview (consultas tipo SQL)
  - Templater (automatizaciones)
  - Excalidraw (diagramas)

Estructura de vault:
```
/docs
/homelab
/proyectos
/snippets-code
```

Backup diario a AWS S3 Glacier mediante Duplicati.