---
title: Mealie
sidebar_position: 3
description: Gestor de recetas con planificador semanal
image: ../static/img/mealie-mealplan.jpg
keywords: [recetas, docker, meal planning, api]
---

# Central Culinaria Digital

Instancia Docker conectada a:
- **Base de datos**: PostgreSQL en contenedor separado
- **Autenticación**: LDAP via Authelia
- **Almacenamiento**: 500GB para fotos de recetas en TrueNAS

Flujo de trabajo:
1. Importar recetas via extensión Chrome
2. Generar lista de compras automática
3. Sincronizar con Google Calendar (comidas planificadas)

Expuesto bajo el subdominio https://comida.midominio.com con rate limiting de 100 requests/minuto.