---
title: Advanced Input Handling
sidebar_position: 3
description: Control profesional de entradas para aplicaciones críticas.
image: ../static/img/esp32-buttons.jpg
keywords: [esp32, debounce, interrupts, input]
---

# Gestión Profesional de Botones en ESP32

**Más allá del digitalRead() básico**  
Sistema completo para manejar múltiples botones con:

- **Debounce hardware/software** configurable.
- Detección de pulsaciones largas/cortas (configuración por tiempo).
- Eventos personalizables (doble click, secuencias tipo Konami Code).
- Compatibilidad con matrices de botones (expandible hasta 16 entradas).

**Casos de uso:**  
Ideal para proyectos donde la precisión de entrada es crítica: mandos para drones, interfaces industriales, o sistemas de seguridad donde un falso positivo podría ser peligroso.