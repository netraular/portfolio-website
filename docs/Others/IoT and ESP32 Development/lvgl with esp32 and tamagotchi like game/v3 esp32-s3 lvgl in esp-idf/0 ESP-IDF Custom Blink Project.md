---
title: ESP32-S3 GPIO Control Template
description: Foundation project for ESP-IDF development with ESP32-S3-N16R8
sidebar_position: 6
keywords: [ESP32-S3, ESP-IDF, GPIO, VS Code]
---
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repo-blue?logo=github)](https://github.com/netraular/Esp-Idf_custom-blink) ![Last Update](https://img.shields.io/github/last-commit/netraular/Esp-Idf_custom-blink) [![ESP-IDF](https://img.shields.io/badge/ESP--IDF-v5.1-green?logo=espressif)](https://docs.espressif.com/projects/esp-idf/en/v5.1/esp32s3/)

[![Banner](https://placehold.co/600x200/2a2d32/FFF?text=Blink+Demo)](https://github.com/netraular/Esp-Idf_custom-blink)

## 📌 Overview
Essential starting point for ESP32-S3 development featuring:
- Preconfigured VS Code workspace
- NVS storage initialization
- GPIO interrupt handling template
- Power management baseline

![Hardware Setup](https://placehold.co/400x250/2a2d32/FFF?text=S3+Dev+Board)

## 🌟 Key Features

| **Category**       | **Details**                          |
|--------------------|--------------------------------------|
| **Development**    | ESP-IDF project structure template  |
| **GPIO Control**   | Debounced input with LED feedback    |
| **Debugging**      | Integrated ESP-PROBE configuration  |

## 🛠 Technical Highlights

- **Framework**: ESP-IDF v5.1
- **Core Functionality**:
  - RTC IO configuration for low-power operation
  - Button press counter with NVS persistence
  - LED PWM dimming capability
- **Optimization**: 98% sleep time in idle mode

```c
#define BUTTON_GPIO      GPIO_NUM_3
#define LED_GPIO         GPIO_NUM_8
#define DEBOUNCE_TIME_MS 50