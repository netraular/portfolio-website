---
title: WireGuard VPN Overview
sidebar_position: 0
description: Modern VPN solution for secure remote access to home lab resources
image: ./attachments/wireguard-config.png 
keywords: [wireguard, vpn, remote access, security, networking]
---

## Home Server / WireGuard VPN

### What is WireGuard?
[WireGuard®](https://www.wireguard.com/) is a modern VPN protocol that combines lightweight design with state-of-the-art cryptography. Unlike traditional VPNs, it integrates seamlessly into modern networks while maintaining minimal attack surfaces. Perfect for both personal and collaborative use cases.

![WireGuard Encryption Flow](./attachments/wireguard-flow.png)  <!-- Add encryption diagram -->
*Simplified WireGuard encryption process - [Source: Official Docs](https://www.wireguard.com/explanation/)*

---

### My Homelab Implementation
I run WireGuard as a secure bridge between my self-hosted services and the outside world. The VPN operates on a dedicated mini-PC (Intel NUC) with automated firewall rules and connection monitoring.

![Homelab Network Diagram](./attachments/homelab-topology.png)  <!-- Add network diagram -->
*Simplified network topology showing WireGuard's position*

#### Key Use Cases
- **Secure Remote Access**  
  Access all homelab resources from any device:
  - Media servers (Jellyfin/Plex)
  - Development environments (VS Code Server)
  - Monitoring stacks (Grafana/Prometheus)
  - File shares (SMB/NFS/Nextcloud)

- **Event Collaboration**  
  Temporary access for teammates during hackathons:
  ```text
  1. Generate time-limited peer configs
  2. Share via QR code/encrypted message
  3. Revoke access post-event
  ```
  Enables real-time collaboration without exposing services publicly.

---

### Technical Configuration
```bash
# Server Configuration (Simplified)
[Interface]
Address = 10.0.0.1/24
PrivateKey = <server-private-key>
ListenPort = 51820
# Firewall rules for service isolation
PostUp = iptables -A FORWARD -i %i -j ACCEPT

# Teammate Peer Example
[Peer]
PublicKey = <teammate-public-key>
AllowedIPs = 10.0.0.3/32  # Restrict to specific subnets
```

![Config Screenshot](./attachments/wireguard-config.png)  <!-- Add config screenshot -->
*Sample configuration with security annotations*

#### Security Features
- AES-256 encryption by default
- Automatic key rotation every 90 days
- Network segmentation via VLANs
- Connection auditing with Fail2Ban