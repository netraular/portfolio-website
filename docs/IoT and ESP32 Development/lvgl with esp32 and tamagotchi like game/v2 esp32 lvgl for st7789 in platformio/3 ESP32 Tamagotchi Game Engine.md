---
title: ESP32 Tamagotchi Game Engine
description: Feature-complete virtual pet implementation with advanced graphics
sidebar_position: 4
keywords: [game-development, embedded-graphics, lvgl, esp32-s3]
---

# ESP32 Tamagotchi Game Engine

![Gameplay Screenshot](./attachments/tamagotchi-gameplay.png "Virtual Pet Interface")

**GitHub**: [netraular/esp32-tamagotchi](https://github.com/netraular/esp32-tamagotchi)

Technical highlights:

- **Hybrid Graphics**: PNG decoding + binary assets
- **Smart Memory Management**: Custom partition scheme
- **Input System**: Adaptive 4-button keyboard
- **Performance**: 30 FPS sustained with 5 subsystems

```cpp
// Asset loading example
loadAnimation("/sprites/walk", {
  FRAME_DELAY: 100,
  LOOP: true
});
```