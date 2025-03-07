---
title: TrueNAS Overview
sidebar_position: 0
description: ZFS-powered storage platform managing all persistent data in the home lab
image: ../static/img/truenas-dashboard.jpg
keywords: [TrueNAS, ZFS, storage, NAS, data management, file sharing]
---
## Home Server / TrueNAS Scale

### Overview
[**TrueNAS Scale**](https://www.truenas.com/truenas-scale/) is an open-source storage operating system based on Debian Linux, designed for scalable storage and hyperconverged infrastructure. It leverages the power of **ZFS** for advanced data management, compression, and integrity verification.

### My Homelab Implementation
I use TrueNAS Scale as the backbone of my self-hosted storage environment. Here’s how I’ve configured it:

- **Primary Storage**: Manages a single 12TB HDD with ZFS filesystem, organized into multiple logical datasets (partition-like structures) for different homelab applications
- **Protocol Flexibility**: Shares datasets via **NFS** (for Linux services) and **SMB** (for occasional Windows access), with permissions tailored to each use case
- **ZFS Optimization**: Migrated from OpenMediaVault after finding its ZFS plugin limitations too restrictive - TrueNAS provides native ZFS support with better snapshot management and compression options

### Data Protection Strategy
While I currently operate without RAID (to avoid multi-disk costs), I ensure redundancy through:
- **Automated ZFS Snapshots**: Hourly/daily snapshots of critical datasets
- **Offsite Backups**: Critical data is encrypted and replicated to cloud storage
- **Metadata Checksums**: ZFS continuously verifies data integrity to prevent silent corruption

This setup balances cost-efficiency with enterprise-grade storage features for my homelab needs.