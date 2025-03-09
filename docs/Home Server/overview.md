---
title: Home Lab Overview
sidebar_position: 0
description: Self-managed virtualization environment with enterprise-grade features
image: ./attachments/server-hardware.png
keywords: [homelab, proxmox, virtualization, self-hosted, truenas, wireguard]
---

## Home Server

![Server Rack Setup](./attachments/server-hardware.png)
*Custom-built server with Ryzen 5 4600G and storage array*

This section details my personal home lab setup, which serves as a playground for self-hosted applications and professional environment simulations.

### Hardware Specifications
- **Processor**: AMD Ryzen 5 4600G (6-core/12-thread)
- **Memory**: 64GB DDR4 RAM (3200MHz)
- **Storage Configuration**:
  - 2x NVMe SSDs (500GB OS + 1TB VM operations)
  - 12TB refurbished HDD (7200 RPM ZFS array)
  
![Storage Layout](./attachments/storage-diagram.png)
*ZFS storage structure managed through TrueNAS*

### Virtualization Stack
- **Hypervisor**: Proxmox VE 8.0
  - KVM-based virtual machines
  - LXC containers for lightweight services
- **Containerization**:
  - Docker swarm via Portainer CE
  - Custom container registry
- **Storage Integration**:
  - TrueNAS Scale iSCSI shares
  - Automated ZFS snapshots
  - Replication to backup nodes

![Proxmox Interface](./attachments/proxmox-dashboard.png)
*Customized Proxmox cluster interface*

### Network Architecture
- **Public Access**:
  - Cloudflare Tunnels with Zero Trust policies
  - Automated DNS management
  - DDoS protection enabled
- **Internal Routing**:
  - Nginx Proxy Manager with SSL termination
  - Per-service access controls
  - Local DNS override rules
- **Secure Remote Access**:
  - WireGuard VPN mesh network
  - MFA-protected entry points
  - No exposed public ports

![Network Diagram](./attachments/network-topology.png)
*Visual representation of network flows and security layers*

### Development Environment
This infrastructure enables:
- Full-stack application development with:
  - Isolated testing environments
  - Production-like staging setups
  - CI/CD pipeline integration
- Complete control over:
  - Software versioning
  - Security updates
  - Data governance policies
- Enterprise feature experimentation:
  - High-availability clusters
  - Automated failover systems
  - Infrastructure-as-Code templates

### Hosted Services
![Service Dashboard](./attachments/service-monitoring.png)
*Service status monitoring overview*

While maintaining several custom implementations, key hosted applications include:
- **Productivity Suite**:
  - Nextcloud (File sharing)
  - Vaultwarden (Password management)
- **Media Ecosystem**:
  - Jellyfin (Media streaming)
  - *arr stack (Content management)
- **Development Tools**:
  - Gitea (Git hosting)
  - Drone CI (Automated builds)
- **Home Automation**:
  - Home Assistant
  - Node-RED flows