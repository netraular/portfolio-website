---
title: Proxmox Backup Server Overview
sidebar_position: 0
description: Dedicated backup solution for protecting virtual machines and container data
image: ../static/img/proxmox-backup.jpg
keywords: [proxmox, backup, disaster recovery, data protection, deduplication]
---
## Home Server / TrueNAS Scale

### Proxmox Backup Server (PBS) Implementation
[Proxmox Backup Server](https://pbs.proxmox.com/docs/) is an enterprise-ready backup solution for VM/CT backups, deduplication, encryption, and efficient storage management. In my home lab environment, it serves as the centralized backbone for protecting critical data across multiple virtual machines.

#### Why PBS in My Home Lab?
Originally, I relied on Proxmox VE's built-in backup functionality. However, I migrated to PBS to:
- **Optimize ZFS management**: Better handle backups on my HDD's ZFS partition with native support for zstd compression and block-level deduplication
- **Space efficiency**: Achieve 60-70% storage savings compared to raw backups through deduplication
- **Centralized control**: Manage all backups from a single web interface with role-based access

#### Key Benefits Realized
- 🔄 **Incremental backups** with minimal storage impact
- 🔐 Client-side encryption for sensitive data
- ⚡ Instant recovery capabilities for LXCs/VMs
- 📊 Detailed storage metrics and health monitoring
- 🔄 ZFS snapshot integration for point-in-time recovery

#### Backup Strategy
My automated workflow includes:
```bash
# Daily backup schedule (via PBS web interface)
0 2 * * * Backup all VMs/LXCs - keep 7 daily, 4 weekly, 6 monthly

# Maintenance jobs
0 4 * * * Prune expired backups (--keep-last 7)
0 5 * * * Garbage collection (pbs gc start)
0 6 Sun * Verify backup integrity (pbs verify)
```

All backups target a dedicated 8TB ZFS pool with compression=zstd and regular scrubs for data health. This setup ensures I maintain 6 months of versioned backups while using less than 40% of raw storage capacity.
