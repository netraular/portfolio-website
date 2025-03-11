---
title: PMD Sprite Manager w/python gui
description: Python tool for managing Pokémon Mystery Dungeon sprites from PMD Collab - split sprite sheets & preview animations with frame timing
sidebar_position: 1
keywords: [PMD Collab, Python, Sprite Management, Animation Viewer, Pillow, Tkinter]
---

[![GitHub Repo](https://img.shields.io/badge/GitHub-Repo-blue?logo=github)](https://github.com/netraular/PMDSpriteManager) 
![Last Update](https://img.shields.io/github/last-commit/netraular/PMDSpriteManager) 
[![Python Version](https://img.shields.io/badge/Python-3.7%2B-blue?logo=python)](https://www.python.org/) 
[![Pillow](https://img.shields.io/badge/Pillow-Image%20Processing-green)](https://pypi.org/project/pillow/) 
[![Tkinter](https://img.shields.io/badge/Tkinter-GUI%20Framework-orange)](https://docs.python.org/3/library/tkinter.html)

[![Banner](https://placehold.co/600x200/2a2d32/FFF?text=PMD+Sprite+Manager+Preview)](https://github.com/netraular/PMDSpriteManager)

---

## 📌 Overview

A Python-based utility that simplifies working with Pokémon Mystery Dungeon sprite assets from [PMD Collab](https://sprites.pmdcollab.org/). Designed for developers and modders, it automates two critical workflows:

1. **Sprite Sheet Processing**: Automatically splits character sheets into individual sprites while preserving transparency
2. **Animation Visualization**: Renders animations with accurate frame timing directly from XML definitions

![Example](https://placehold.co/400x250/2a2d32/FFF?text=Animation+Preview+GUI)

---

## 🌟 Key Features

| **Category**         | **Details**                                                                 |
|-----------------------|-----------------------------------------------------------------------------|
| **Sprite Processing** | - Automatic sheet splitting- Alpha channel preservation- Preview background generation |
| **Animation System**  | - XML-to-animation conversion- Frame timing calculation (30 ticks/sec)- Real-time Tkinter preview |
| **Cross-Platform**    | - Windows executable provided- Python script works on macOS/Linux       |

---

## 🛠 Technical Highlights

- **Core Libraries**: 
  - **Pillow**: Advanced image processing and transparency handling
  - **Tkinter**: Cross-platform GUI implementation
  - **ElementTree**: XML animation data parsing

- **Optimized Workflow**:
  - Automatic detection of sprite boundaries
  - Dynamic animation strip loading
  - Frame timing preservation from game data

- **Deployment**:
  - Single-file executable for Windows users
  - Pure Python implementation for other platforms

---

## ⚙️ Installation & Usage

**For Windows Users**:
1. Download the latest `.exe` from [Releases](https://github.com/netraular/PMDSpriteManager/releases)
2. Double-click to launch the GUI interface

**For Developers**:
```bash
pip install pillow
python main.py