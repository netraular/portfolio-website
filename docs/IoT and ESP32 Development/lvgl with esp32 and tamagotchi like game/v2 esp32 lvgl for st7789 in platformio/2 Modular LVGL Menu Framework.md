---
title: Modular LVGL Menu Framework
description: Object-oriented UI system for ESP32 applications
sidebar_position: 3
keywords: [gui-framework, oop, menu-system, lvgl]
---

# Modular LVGL Menu Framework

![Menu Navigation Demo](./attachments/menu-transition.png "Animated Screen Transitions")

**GitHub**: [netraular/esp32-wroom-lvgl-menu](https://github.com/netraular/esp32-wroom-lvgl-menu)

Architecture highlights:

- **Dynamic Screen Management**: Stack-based navigation
- **Memory Optimization**: Widget recycling system
- **Prebuilt Components**: Settings, Lists, Dialogs
- **Custom Animations**: 15+ transition effects

```cpp
// Screen creation example
class MainScreen : public BaseScreen {
  void onLoad() override {
    createTitle("Main Menu");
    addListButton("Settings", &ScreenManager::showSettings);
  }
};
```