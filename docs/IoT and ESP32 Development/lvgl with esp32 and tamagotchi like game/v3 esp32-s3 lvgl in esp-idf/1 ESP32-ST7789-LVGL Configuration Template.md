---
title: ST7789 LVGL Driver Package
description: Production-ready display configuration for 240x240 SPI displays
sidebar_position: 7
keywords: [ESP32-S3, ST7789, LVGL, SPI, display driver]
---
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repo-blue?logo=github)](https://github.com/netraular/esp32-st7789-lvgl-config) ![Last Update](https://img.shields.io/github/last-commit/netraular/esp32-st7789-lvgl-config) [![ESP-IDF](https://img.shields.io/badge/ESP--IDF-v5.1-green?logo=espressif)](https://docs.espressif.com/projects/esp-idf/) [![LVGL](https://img.shields.io/badge/LVGL-8.3.8-pink?logo=lvgl)](https://lvgl.io)

[![Banner](https://placehold.co/600x200/2a2d32/FFF?text=Display+Demo)](https://github.com/netraular/esp32-st7789-lvgl-config)

## 📌 Overview
Complete display solution package including:
- ST7789 SPI initialization sequence
- LVGL double buffering setup
- Display rotation profiles
- Color calibration tools

![Display Demo](https://placehold.co/400x250/2a2d32/FFF?text=240x240+IPS)

## 🌟 Key Features

| **Category**       | **Details**                          |
|--------------------|--------------------------------------|
| **Performance**    | 60 FPS sustained refresh rate       |
| **Power**          | Auto-backlight dimming              |
| **Compatibility**  | ST7735/ST7789 unified driver        |

## 🛠 Technical Highlights

- **Framework**: ESP-IDF Display Component v3.2
- **Core Functionality**:
  - DMA-accelerated SPI transfers
  - Custom LVGL color format (RGB565)
  - Touch controller abstraction layer
- **Advanced Features**:
  - Display self-test patterns
  - Gamma correction tables
  - Temperature compensation
