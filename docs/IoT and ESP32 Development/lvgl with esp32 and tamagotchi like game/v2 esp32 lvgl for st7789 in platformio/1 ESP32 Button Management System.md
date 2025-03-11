---
title: ST7735 Display & Button Controller
description: Advanced input handling system for SPI displays with LVGL integration
sidebar_position: 3
keywords: [ESP32, LVGL, ST7735, debouncing, input handling]
---
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repo-blue?logo=github)](https://github.com/netraular/esp32-button-management) ![Last Update](https://img.shields.io/github/last-commit/netraular/esp32-button-management) [![PlatformIO](https://img.shields.io/badge/PlatformIO-Build%20System-orange)](https://platformio.org/) [![LVGL](https://img.shields.io/badge/LVGL-8.3.8-pink?logo=lvgl)](https://lvgl.io)

[![Banner](https://placehold.co/600x200/2a2d32/FFF?text=Button+Demo)](https://github.com/netraular/esp32-button-management)

## 📌 Overview
Robust input management system for ESP32 with:
- 128x160 ST7735 SPI display
- Multi-button configuration support
- Visual feedback through LVGL widgets
- Hardware-timed debouncing (μs resolution)

![Input System](https://placehold.co/400x250/2a2d32/FFF?text=Button+Layout)

## 🌟 Key Features

| **Category**       | **Details**                          |
|--------------------|--------------------------------------|
| **Input Handling** | 8-channel button matrix support     |
| **Debugging**      | Serial output with state visualization |
| **Display**        | Custom ST7735 driver with rotation support |

## 🛠 Technical Highlights

- **Framework**: ESP-IDF 5.0 + FreeRTOS
- **Core Functionality**:
  - Hardware-accelerated debouncing (GPIO interrupt-based)
  - LVGL input device abstraction layer
  - Display power management
- **Configuration**: JSON-based button mapping

```c
typedef struct {
    uint8_t pin;
    btn_action_t action;
    lv_event_code_t lv_event;
} button_config_t;
```