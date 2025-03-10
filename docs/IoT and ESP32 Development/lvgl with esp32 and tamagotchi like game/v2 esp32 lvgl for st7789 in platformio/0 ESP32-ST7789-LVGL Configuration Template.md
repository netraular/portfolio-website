---
title: ESP32-ST7789-LVGL Configuration Template
description: Ready-to-use LVGL template for ST7789 displays with ESP32-S3. Optimized SPI configuration and display handling.
sidebar_position: 1
keywords: [esp32, lvgl, st7789, platformio, embedded-gui]
---

# ESP32-ST7789-LVGL Configuration Template

![ST7789 Display Example](./attachments/st7789-template-demo.png "240x240 Display Demo")

**GitHub**: [netraular/esp32-st7789-lvgl-config](https://github.com/netraular/esp32-st7789-lvgl-config)

A production-ready foundation for ESP32 GUI development featuring:

- **Instant Setup**: Preconfigured PlatformIO environment
- **Dual Display Support**: ST7789 (240x240) & ST7735 (128x160)
- **Optimized Performance**: 60 FPS rendering with double buffering
- **Cross-Device Compatibility**: Tested on ESP32-S3-N16R8 and WROOM variants

```cpp
// Sample initialization code
void setup_display() {
  tft.init(240, 240); // Auto-detects rotation
  lvgl_init(); // Includes default theme setup
}
```