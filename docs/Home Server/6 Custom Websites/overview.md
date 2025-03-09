---
title: Custom Websites Overview
sidebar_position: 0
description: Self-developed and hosted web projects deployed in my home lab
image: ./attachments/server-dashboard.png
keywords: [web development, static sites, self-hosting, portfolio, projects]
---

## Home Server / Custom Websites

![Home Lab Dashboard](./attachments/server-dashboard.png)
*My home lab monitoring interface showing active projects and resource usage*

I develop custom web applications primarily using **Laravel**, tailored to specific needs and hosted on my self-managed home server. [Explore the technical documentation](/docs/intro) to learn about my implementation philosophy and architecture patterns.

### Home Lab Environment
All projects run on my **personal home lab** featuring:

![Server Architecture](./attachments/infrastructure-diagram.png)
*Simplified infrastructure diagram of my development environment*

- Self-hosted Ubuntu VM with automated provisioning
- Custom NGINX configurations for routing and SSL
- Isolated development/staging environments
- Resource monitoring and automated backups

### Development Approach
While most implementations follow proven methodologies from my professional experience with enterprise web development, I intentionally:

- Experiment with emerging tools in the Laravel ecosystem
- Implement alternative architectural patterns
- Test bleeding-edge PHP 8.x features
- Explore unconventional database optimizations

**Featured projects** are available in the [Websites Section](/) of this portfolio.

### Technical Characteristics
My typical web applications integrate:

- **Core Stack**
  - Laravel Framework (v9+/10+)
  - MySQL/MariaDB with query optimization
  - Redis-backed queue system

![Project Dashboard Example](./attachments/project-dashboard.png)
*Example of custom monitoring dashboard in one of my web applications*

- **DevOps Components**
  - Automated cron jobs
  - SSH-managed deployment pipelines
  - Security-hardened VM configurations
  - Manual dependency integration

- **Security Features**
  - Role-based access control
  - Automated vulnerability scanning
  - Encrypted audit logs

Each project serves as both a practical tool and a learning platform for advanced web development techniques.