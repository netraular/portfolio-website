---
title: Nginx Proxy Manager Overview
sidebar_position: 0
description: Web interface for managing internal services with automatic SSL
image: ../static/img/nginx-proxy-manager.jpg
keywords: [nginx, reverse proxy, SSL, Let's Encrypt, web services, internal routing]
---
## Home Server / Nginx Proxy Manager

### About Nginx Proxy Manager
[Nginx Proxy Manager](https://nginxproxymanager.com/) is an open-source tool that simplifies reverse proxy management with a clean web interface. It provides an easy way to handle SSL certificate generation (via Let's Encrypt), domain routing, and access control - perfect for home lab environments. [Explore official documentation →](https://nginxproxymanager.com/guide/)

### My Usage in Home Lab
I operate Nginx Proxy Manager on a dedicated virtual machine to manage internal services in my self-hosted ecosystem. Key implementations:

- **Local Network Routing**: Primarily used to securely route traffic to applications that shouldn't be publicly exposed (e.g., Nextcloud, Gitea, monitoring tools)
- **HTTPS Everywhere**: Automatically generates and renews SSL certificates for all internal domains (`*.home.mydomain.net`)
- **Hybrid Access Control**:
  - Direct local network access via HTTPS endpoints
  - External access strictly through WireGuard VPN tunnel
- **Port Management**: Eliminates the need to remember port numbers (`app.home.mydomain.net` vs `192.168.1.x:8321`)

### Configuration Approach
While Nginx Proxy Manager handles the core routing through its GUI, I implement manual configurations for specific web projects:

```nginx
# Example custom configuration snippet
location /special-app {
    proxy_set_header X-Real-IP $remote_addr;
    proxy_pass http://special-app-container:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
}
```

**Security Philosophy**: Never expose home lab services directly to the internet. All external access requires either:
- Physical presence on local network
- Authenticated VPN connection
- Temporary SSH tunnel for debugging