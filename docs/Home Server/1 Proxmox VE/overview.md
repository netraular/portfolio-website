---
title: Proxmox VE Overview
sidebar_position: 0
description: Open-source virtualization platform powering my home infrastructure
image: ../static/img/proxmox-dashboard.jpg
keywords: [proxmox, virtualization, hypervisor, KVM, LXC, clustering]
---

## Home Server / Proxmox VE

[Proxmox VE](https://pve.proxmox.com/wiki/Main_Page) is an open-source server virtualization management platform that combines KVM hypervisor-based virtual machines (VMs) and Linux Containers (LXC) in a single solution. It provides an intuitive web interface for managing virtualized environments and clustered setups.

### My Home Lab Implementation
In my self-hosted homelab, I use Proxmox VE as the backbone for all my virtualization needs. Here's my workflow:

- **Environment Isolation**: I generally dedicate one VM or LXC container per project/application to maintain clean separation and simplify maintenance.
- **Docker Management**: For containerized applications using Docker, I run a dedicated Ubuntu Server VM with Portainer for visual management.
- **OS Preferences**: 
  - Primary VM OS: Ubuntu Server (most frequent choice)
  - Special cases: Windows 11 VMs or specific ISO-based environments when required by applications
- **Container Usage**: 
  - Leverage LXC containers for lightweight applications using [Proxmox VE Helper-Scripts](https://community-scripts.github.io/ProxmoxVE/scripts)
  - Reserve VMs for complex projects, web applications, or custom development work
- **Storage Strategy**:
  - Primary installations: Directly on SSD for optimal performance
  - Additional storage: Managed via NFS/SMB shares mounted as needed
  - Regular snapshots and backups to secondary storage

This setup allows me to maintain an organized virtualization environment while balancing performance and resource efficiency. I particularly appreciate Proxmox's flexibility in mixing different virtualization technologies based on specific workload requirements.