---
title: Proxmox VE
sidebar_position: 1
description: Enterprise-grade hypervisor for virtual machines, containers, and network management powering my home infrastructure
image: ../static/img/proxmox-dashboard.jpg
keywords: [proxmox, virtualization, hypervisor, KVM, LXC, clustering]
---
## Home Server / Proxmox VE
![Proxmox Dashboard](./attachments/proxmox-dashboard.png)
*Captura de mi panel de Proxmox con containers y VMs activos*

[Proxmox VE](https://pve.proxmox.com/wiki/Main_Page) is an open-source server virtualization management platform that combines KVM hypervisor-based virtual machines (VMs) and Linux Containers (LXC) in a single solution. It provides an intuitive web interface for managing virtualized environments and clustered setups.

### My Home Lab Implementation

![Home Lab Architecture](./attachments/homelab-architecture.png)
*Diagrama de mi arquitectura de virtualización*

In my self-hosted homelab, I use Proxmox VE as the backbone for all my virtualization needs. Here's my workflow:

- **Environment Isolation**:  
  - Dedicate one VM or LXC container per project/application  
  - Maintain clean separation and simplify maintenance  

- **Docker Management**:  
  - Run a dedicated Ubuntu Server VM with [Portainer](https://www.portainer.io/)  
  ![Portainer Interface](./attachments/portainer.png)
  *Captura de mi panel de Portainer para gestión de contenedores Docker*

- **OS Preferences**:  
  - Primary VM OS: Ubuntu Server (most frequent choice)  
  - Special cases:  
    - Windows 11 VMs  
    - Specific ISO-based environments when required by applications  

- **Container Usage**:  
  - Leverage LXC containers for lightweight applications using [Proxmox VE Helper-Scripts](https://community-scripts.github.io/ProxmoxVE/scripts) (automating container setups)  
  - Reserve VMs for:  
    - Complex projects  
    - Web applications  
    - Custom development work  

- **Storage Strategy**:  
  - Primary installations: Directly on SSD for optimal performance  
  - Additional storage: Managed via NFS/SMB shares mounted as needed  
  - Regular snapshots and backups to secondary storage  

This setup allows me to maintain an organized virtualization environment while balancing performance and resource efficiency. I particularly appreciate Proxmox's flexibility in mixing different virtualization technologies based on specific workload requirements.