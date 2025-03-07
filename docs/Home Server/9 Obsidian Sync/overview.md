---
title: Obsidian Sync Overview
sidebar_position: 0
description: Self-hosted synchronization service for personal knowledge management
image: ../static/img/obsidian-sync.jpg
keywords: [obsidian, sync, knowledge management, git, version control]
---
## Home Server / Obsidian Sync

### Overview
[Obsidian](https://obsidian.md) is a powerful knowledge base that works on top of local Markdown files. Its official [Obsidian Sync](https://obsidian.md/sync) service enables secure cross-device synchronization while maintaining complete data ownership.

### My Implementation
In my home lab setup:
- 🖥️ **Central Documentation Hub**: I author all technical notes (including this portfolio's documentation) in Obsidian
- 🔄 **Local-First Sync**: Use Obsidian Sync with a self-hosted database to:
  - Maintain real-time consistency across 4+ devices
  - Keep historical versions of 5000+ notes
  - Ensure offline availability of critical data
- 🗄️ **Always-On Backup System**:
  - Persistent storage via home server (24/7 availability)
  - Automated encrypted backups to multiple locations
  - Version control integration with git

This implementation combines Obsidian's flexibility with enterprise-grade reliability through custom infrastructure. [Learn how I automated this setup](/docs/intro).