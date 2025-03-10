---
title: EspTama-Round-Cheap-Yellow-Display
description: Tamagotchi-inspired interactive pet simulator for circular ESP32 displays with persistent gameplay and LVGL-powered UI.
sidebar_position: 1
keywords: [ESP32, Tamagotchi, LVGL, Cheap Yellow Display, persistent storage, XBM, EEPROM]
---

![Tamagotchi Demo](./attachments/espTama-demo-collage.png) <!-- Collage of pet screens -->

### Project Vision  
Digital pet ecosystem for circular displays with persistent gameplay mechanics.

**Repository**: [github.com/netraular/EspTama-Round-Cheap-Yellow-Display](https://github.com/netraular/EspTama-Round-Cheap-Yellow-Display)

<div class="row">
  <div class="col col--4">

**Tech Stack** 🧩  
- LVGL 8.3 UI Framework  
- EEPROM Data Storage  
- array imaage Rendering  
- Screen managment

</div>
  <div class="col col--8">

![Feature Timeline](./attachments/development-timeline.png) <!-- Roadmap graphic -->

</div>
</div>

### Key Components

| Feature          | Description                          | 
|------------------|--------------------------------------|
| 🎮 Interactive Menus | Swipe-based navigation system        |
| 🔋 Battery Saver   | Auto-sleep after 5m inactivity       |
| 🧩 Expandable Stats | Pet attributes in JSON-like format   |

**Code Snippet**:  
```c
// Persistent data structure
struct PetData {
  uint8_t hunger; 
  uint16_t coins;
  bool is_sick;
} saved_data;