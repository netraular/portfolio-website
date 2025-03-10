---
title: ESP32 Button Management System
description: Advanced input handling with debouncing and LVGL integration
sidebar_position: 2
keywords: [embedded-systems, input-handling, lvgl, debounce]
---

# ESP32 Button Management System

![Button State Diagram](./attachments/button-state-machine.png "Input Handling Flowchart")

**GitHub**: [netraular/esp32-button-management](https://github.com/netraular/esp32-button-management)

Professional-grade input system featuring:

- **Smart Debouncing**: Configurable 2-10ms thresholds
- **Event System**: Press/Hold/Release callbacks
- **Visual Debugging**: Real-time LVGL status overlay

```cpp
// Example usage
button_manager.addButton(BTN_PIN, [](ButtonEvent e) {
  Serial.printf("Button %d: %s\n", e.pin, e.stateName());
});
```