---
title: Nginx Proxy Manager Overview
sidebar_position: 0
description: Web interface for managing internal services with automatic SSL
image: ../static/img/nginx-proxymanager.jpg
keywords: [nginx, reverse proxy, SSL, Let's Encrypt, web services, internal routing]
---

## Home Server / Nginx Proxy Manager

![Nginx Proxy Manager Interface](./attachments/npm-interface.png)
*Dashboard principal mostrando servicios gestionados y certificados SSL*

### About Nginx Proxy Manager
[Nginx Proxy Manager](https://nginxproxymanager.com/) is an open-source tool that simplifies reverse proxy management with a clean web interface. It provides an easy way to handle:
- SSL certificate generation (via Let's Encrypt)
- Domain routing configuration
- Access control lists
- Port-based service management

[Official Documentation →](https://nginxproxymanager.com/guide/)

### My Implementation Strategy
![Network Traffic Flow Diagram](./attachments/npm-network-flow.png)
*Flujo de tráfico seguro mediante VPN y proxy inverso*

Deployed on a dedicated VM, my setup focuses on security-first internal routing:
- **Isolated Services**: Only essential ports exposed (80/443 for NPM, VPN port)
- **Automatic HTTPS**: Wildcard certificate for `*.home.mydomain.net` with auto-renewal
- **Access Tiers**:
  - Local Network: Direct HTTPS access
  - External Users: Mandatory WireGuard VPN connection
  - Emergency Access: SSH tunnels with 2FA

### Hybrid Configuration Workflow
While using the GUI for core functions, I complement with manual Nginx configurations:

```nginx
# Custom proxy settings for specific apps
location /special-app {
    proxy_pass http://special-app-container:3000;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
}
```

![Configuration Comparison](./attachments/npm-vs-manual.png)
*Left: NPM GUI - Right: Manual configuration file*

**Security Enforcement**:
- Zero exposed services to public internet
- Weekly vulnerability scans with Trivy
- Network segmentation for proxy/VPN/services
- Automatic IP blocking for brute force attempts

### Visual Management Tools
- Service Health Dashboard
- Certificate Expiry Calendar
- Access Control Flowchart