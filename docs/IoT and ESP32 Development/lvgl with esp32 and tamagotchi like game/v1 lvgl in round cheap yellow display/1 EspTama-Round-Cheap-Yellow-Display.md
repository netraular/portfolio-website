---
title: Tamagotchi-style Companion App
description: Interactive virtual pet implementation for circular displays
sidebar_position: 2
keywords: [ESP32, LVGL, game development, persistent storage, embedded UI]
---
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repo-blue?logo=github)](https://github.com/netraular/espTama-Round-Cheap-Yellow-Display) ![Last Update](https://img.shields.io/github/last-commit/netraular/espTama-Round-Cheap-Yellow-Display) [![PlatformIO](https://img.shields.io/badge/PlatformIO-Build%20System-orange)](https://platformio.org/) [![LVGL](https://img.shields.io/badge/LVGL-8.3.8-pink?logo=lvgl)](https://lvgl.io)

[![Banner](https://placehold.co/600x200/2a2d32/FFF?text=Virtual+Pet+Demo)](https://github.com/netraular/espTama-Round-Cheap-Yellow-Display)

## 📌 Overview
Extended version of the base template implementing a virtual pet with:
- Multiple interactive menus
- Persistent character state
- Resource management system
- Custom UI components for circular displays

![Gameplay](https://placehold.co/400x250/2a2d32/FFF?text=Game+Screens)

## 🌟 Key Features

| **Category**       | **Details**                          |
|--------------------|--------------------------------------|
| **Gameplay**       | Hunger/health systems, mini-games, shop |
| **UI System**      | Dynamic screen transitions with animation |
| **Data Management**| Automatic state saving to flash storage |

## 🛠 Technical Highlights

- **Framework**: ESP-IDF + LVGL Extended Components
- **Core Functionality**:
  - Custom widget creation for circular layouts
  - Flash-based save system with CRC checks
  - Power-efficient animation scheduler
- **Graphics**: On-device image conversion tools
- **Input**: Gesture recognition system

## 🎮 Game Mechanics

```c
typedef struct {
    uint8_t hunger;
    uint8_t happiness;
    uint32_t coins;
    pet_state_t state;
} pet_data_t;