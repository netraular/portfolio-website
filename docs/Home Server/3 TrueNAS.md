---
title: TrueNAS
sidebar_position: 3
description: ZFS-powered storage platform managing all persistent data in the home lab
image: ../static/img/truenas-dashboard.jpg
keywords: [TrueNAS, ZFS, storage, NAS, data management, file sharing]
---
## Home Server / TrueNAS Scale

### Overview
[**TrueNAS Scale**](https://www.truenas.com/truenas-scale/) is an open-source storage OS based on Debian Linux, combining scalable storage with hyperconverged infrastructure capabilities. Its **ZFS integration** provides enterprise features like:
- Advanced data integrity checks
- Transparent compression
- Instant snapshots
- Built-in encryption

![TrueNAS ZFS Pool Structure](./attachments/truenas-zfs-pool.png)
*Current ZFS pool configuration showing datasets*

### My Homelab Implementation
After initially using OpenMediaVault, I migrated to TrueNAS Scale for its **native ZFS support**, which offered better performance and management than OMV's plugin system. Current setup highlights:

- **Storage Configuration**
  - 12TB HDD with multiple ZFS datasets
  - Adaptive compression (LZ4) saving ~15% space
  - Dedicated datasets for:
    - Virtual Machines (QCOW2 images)
    - Media Library (4K video files)
    - Container Volumes (Docker bind mounts)
    - Personal Documents (Encrypted dataset)

![Dataset Structure Screenshot](./attachments/truenas-datasets.png)
*Logical separation of storage workloads*

- **Network Sharing**
  - **NFSv4**: Primary protocol for Linux services (Proxmox, Kubernetes)
  - **SMBv3**: Enabled for Windows/Mac access with AD-style permissions
  - **iSCSI**: Experimental block storage for VM disks

### Data Protection Strategy
While prioritizing cost-efficiency with single-disk operation, I implement:

1. **Local Protection**
   - Hourly ZFS snapshots (keep 24 hours)
   - Daily snapshots (keep 30 days)
   - Metadata checksum verification

![Snapshot Management](./attachments/truenas-snapshots.png)
*Automated snapshot schedule*

2. **Offsite Backups**
   - Rclone encrypted syncs to Backblaze B2
   - Manual cold storage backups (WD Elements 14TB)
   - Critical data versioning with BorgBackup

This configuration delivers enterprise storage features while maintaining home-lab affordability and flexibility.