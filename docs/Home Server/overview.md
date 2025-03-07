---
title: Home Lab Overview
sidebar_position: 0
description: Hypervisor for virtual machines and LXC containers
image: ../static/img/proxmox-cluster.jpg
keywords: [homelab, proxmox, virtualization, self-hosted, truenas]
---

## Home Server

This section details my personal home lab setup, which serves as a playground for self-hosted applications and professional environment simulations.

### Hardware Specifications
- **Processor**: AMD Ryzen 5 4600G (6-core/12-thread)
- **Memory**: 64GB DDR4 RAM
- **Storage**:
  - 2x NVMe SSDs (OS and VM operations)
  - 12TB refurbished HDD (bulk storage)
  
### Software Stack
- **Virtualization**: Proxmox VE as hypervisor
  - VM management for multiple guest OS
  - LXC containers for lightweight services
  - Docker container orchestration via Portainer
- **Storage**: TrueNAS Scale integration
  - Centralized storage management
  - ZFS file system with redundancy

### Access & Networking
- **Public Facing**: 
  - Cloudflare Tunnels for secure web service exposure
  - DNS management with Cloudflare proxy
- **Internal Services**:
  - Nginx Proxy Manager reverse proxy
  - Local DNS resolution for lab domains
- **Remote Access**:
  - WireGuard VPN for secure external connectivity
  - No open ports exposed to public internet

### Development Purpose
This environment enables me to:
- Maintain personal application versions with full control over:
  - Feature updates
  - Data governance
  - Security patching
- Replicate production-like scenarios matching my professional workflows
- Experiment with:
  - Containerized architectures
  - Network configurations
  - CI/CD pipelines
  - Infrastructure-as-Code concepts

### Applications
While most services are customized implementations for personal use, the lab hosts various common tools including:
- Self-hosted productivity suites
- Media management systems
- Home automation controllers
- Development pipeline utilities