---
title: Immich Photos Overview
sidebar_position: 0
description: Self-hosted alternative to Google Photos for personal media management
image: ../static/img/immich-dashboard.jpg
keywords: [immich, photos, self-hosted, media management, image recognition]
---
## Home Server / Immich App

### About Immich
[Immich](https://immich.app/) is a self-hosted, open-source photo and video backup solution designed to be a Google Photos alternative. It offers automatic uploads, facial recognition, album management, and cross-device accessibility. Perfect for preserving memories while maintaining full control over your data.

### My Home Lab Implementation
I host Immich on my **self-built home server** using Docker, with media stored on a RAID-5 NAS for redundancy. Key features of my setup:
- Automated daily backups from family members' mobile devices
- Role-based access control for different user tiers
- Scheduled encrypted offsite backups to cold storage
- Hardware-accelerated transcoding for 4K videos

### Personal & Family Backup Solution
I use Immich as:
1. **Primary photo vault**: All my mobile/DSLR media backs up automatically
2. **Family shared library**: 5 family members securely store 2TB+ of memories
3. **Organization tool**: Combined with AI tagging for efficient search ("sunset 2023" ✅)

The system maintains **3-2-1 backup compliance** while letting us relive moments through shared albums and timeline views - all without cloud subscription fees.