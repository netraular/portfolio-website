---
title: Portfolio Técnico
sidebar_position: 7
description: Documentación autoalojada de proyectos
image: ../static/img/docusaurus-dark.jpg
keywords: [documentation, static site, react]
---

# Vitrina Profesional en Markdown

Stack tecnológico:
- **Generación estática**: Docusaurus v3.1
- **Hosting**: Servidor Nginx + Brotli compression
- **CI/CD**: 
  - GitHub Actions para builds
  - Webhooks de actualización automática

Estructura modular:
```markdown
docs/
  /home-server
  /web-projects
  /tutorials
```
Integrado con:

    Plausible Analytics (métricas privadas)

    Comentarios via Giscus (GitHub Discussions)

    Búsqueda con Algolia DocSearch

---

### **8. Proxmox VE**
#### overview.md
```markdown
---
title: Proxmox VE
sidebar_position: 8
description: Plataforma de virtualización empresarial
image: ../static/img/proxmox-cluster.jpg
keywords: [virtualization, lxc, kvm, cluster]
---

# Columna Vertebral del Homelab

Cluster de 2 nodos:
- **Nodo 1** (Primary):
  - AMD Ryzen 9 5950X
  - 128GB DDR4 ECC
  - 2x NVMe 2TB (ZFS mirror)
- **Nodo 2** (Backup):
  - Intel Xeon E5-2678 v3
  - 64GB DDR4 ECC

Contenedores LXC destacados:
- GitLab CE
- Home Assistant
- AdGuard Home (DNS sinkhole)

Mantenimiento automatizado con:
- Actualizaciones no intrusivas
- Snapshots diarios
- Replicación ZFS entre nodos