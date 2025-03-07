---
title: Mealie Recipes Overview
sidebar_position: 0
description: Self-hosted recipe management and meal planning platform
image: ../static/img/mealie-dashboard.jpg
keywords: [mealie, recipes, meal planning, cooking, food management]
---

## Home Server / Mealie App

### What is Mealie?
[Mealie](https://docs.mealie.io/) is a self-hosted recipe management platform designed for modern home cooks. This open-source application offers meal planning, grocery list generation, and collaborative features while maintaining complete data ownership.

### My Home Lab Implementation
I operate Mealie as a Docker container in my home server environment, utilizing:
- **Reverse Proxy**: Nginx with Let's Encrypt SSL
- **Storage**: RAID-1 NAS for reliable recipe data storage
- **Backups**: Automated daily snapshots to encrypted cloud storage

### Family Recipe Management
I primarily use Mealie to:
- Digitize and preserve handwritten family recipes spanning three generations
- Collaborate with relatives on recipe modifications and modern adaptations
- Create shared meal plans for family gatherings and holidays
- Generate shopping lists synchronized with our local grocery delivery services

**Key benefits**:
- Accessible from any device during cooking (tablet-friendly interface)
- Version control for recipe experiments
- Nutritional information automation
- Multi-user support with granular permissions

> **Note**: My implementation includes custom modifications for traditional cooking measurements and family-specific dietary tags.