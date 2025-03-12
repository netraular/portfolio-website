---
title: Local Voice Assistant Natural Language to SQL (Bachelor Thesis)
description: Offline voice assistant system converting natural language to SQL queries. Built with Laravel, WhisperAI, CoquiTTS, and CodeQwen1.5.
sidebar_position: -1
keywords: [voice assistant, offline processing, natural language processing, SQL generation, Laravel, WhisperAI, CoquiTTS]
---
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repo-blue?logo=github)](https://github.com/netraular/tfgweb) 
![Last Update](https://img.shields.io/github/last-commit/netraular/tfgweb) 
[![Laravel](https://img.shields.io/badge/Laravel-Framework-red?logo=laravel)](https://laravel.com)
[![WhisperAI](https://img.shields.io/badge/WhisperAI-STT-7c3aed?logo=openai)](https://openai.com/research/whisper) 
[![CoquiTTS](https://img.shields.io/badge/CoquiTTS-XTTS_v2-orange)](https://coqui.ai) 
[![Ollama](https://img.shields.io/badge/Ollama-CodeQwen1.5-66b3ff)](https://ollama.ai)
[![MySQL](https://img.shields.io/badge/MySQL-Database-4479a1?logo=mysql)](https://mysql.com)
[![Live Demo](https://img.shields.io/badge/Live_Demo-Available-brightgreen)](https://tfg.netshiba.com/)

[![Project Banner](https://placehold.co/600x200/2a2d32/FFF?text=Voice+Assistant+Architecture)](https://tfg.netshiba.com/)

---

## 📌 Overview

A privacy-focused voice assistant system that operates entirely offline, developed as a Computer Engineering thesis project at Universitat Autònoma de Barcelona. The system enables natural language interaction with databases through:

- Voice command processing via local AI models
- Secure SQL query generation
- Responsive web interface
- Complete data isolation (no cloud dependencies)

![System Diagram](https://placehold.co/400x250/2a2d32/FFF?text=STT+%2B+NLP+%2B+TTS+Pipeline)

---

## 🌟 Key Features

| **Category**         | **Details**                                                                 |
|----------------------|-----------------------------------------------------------------------------|
| **Privacy First**    | Fully offline operation - No data leaves user's device                      |
| **Speech Processing**| 95% accuracy STT with WhisperAI + natural-sounding TTS with XTTS v2         |
| **NLP to SQL**       | Context-aware query generation using CodeQwen1.5 7B parameter model         |
| **User Interface**   | Responsive web dashboard with query history and voice interaction logs      |

---

## 🛠 Technical Highlights

- **Web Framework**: Laravel 10 with Bootstrap 5 frontend
- **Speech Core**: 
  - WhisperAI (tiny.en) for efficient local STT
  - CoquiTTS XTTS v2 multilingual synthesis
- **AI Processing**:
  - CodeQwen1.5-7B via Ollama LLM server
  - Custom prompt engineering for SQL generation
- **Database**: MySQL with optimized schema for voice interaction metadata
- **Performance**: less than 5s response time on consumer-grade hardware

---

## 🌐 Live Demo

Explore the live implementation of the project:  
[🔗 https://tfg.netshiba.com/](https://tfg.netshiba.com/)

---

## 📚 Academic Resources

[🔗 Full Thesis Document](https://ddd.uab.cat/record/298991)  
[📄 Final Project Report (PDF)](https://ddd.uab.cat/pub/tfg/2023/tfg_2856782/05_Informe_final.pdf)
