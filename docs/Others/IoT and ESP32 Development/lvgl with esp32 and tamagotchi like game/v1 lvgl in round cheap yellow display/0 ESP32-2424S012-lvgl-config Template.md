---
title: ESP32 Round Display Configuration Template
description: Ready-to-use LVGL configuration for Cheap Yellow Display (2424S012) with ESP32-C3
sidebar_position: 1
keywords: [ESP32, LVGL, PlatformIO, touch display, embedded GUI]
---
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repo-blue?logo=github)](https://github.com/netraular/ESP32-2424S012-lvgl-config) ![Last Update](https://img.shields.io/github/last-commit/netraular/ESP32-2424S012-lvgl-config) [![PlatformIO](https://img.shields.io/badge/PlatformIO-Build%20System-orange)](https://platformio.org/) [![LVGL](https://img.shields.io/badge/LVGL-8.3.8-pink?logo=lvgl)](https://lvgl.io)

[![Banner](https://placehold.co/600x200/2a2d32/FFF?text=Round+Display+Demo)](https://github.com/netraular/ESP32-2424S012-lvgl-config)

## 📌 Overview
A production-ready foundation for circular touchscreen development using ESP32-C3 and LVGL graphics library. This template works with preassembled "Cheap Yellow Display" units containing:
- 1.28" 240x240 circular LCD
- Integrated touch controller
- Battery management system
- Protective enclosure

![Demo Setup](https://placehold.co/400x250/2a2d32/FFF?text=Hardware+Setup)

## 🌟 Key Features

| **Category**       | **Details**                          |
|--------------------|--------------------------------------|
| **Hardware Ready** | Pre-configured pin mappings for 2424S012 module |
| **Display**        | Complete LVGL initialization with circular screen support |
| **Development**    | PlatformIO project structure with ESP-IDF components |

## 🛠 Technical Highlights

- **Framework**: PlatformIO Core + ESP-IDF 4.4
- **Core Functionality**:
  - Complete display initialization sequence
  - LVGL base configuration with touch input handling
  - Battery monitoring integration
- **Storage**: Basic NVS configuration for persistent settings
- **Power Management**: Deep sleep wakeup via touch interrupt

## 🚀 Getting Started

```bash
git clone https://github.com/netraular/ESP32-2424S012-lvgl-config
platformio run --target upload