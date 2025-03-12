---
title: Project Showcase Platform
description: A self-hosted portfolio management system built with Laravel, Bootstrap, and MySQL. Securely manage and display projects with dynamic customization options.
sidebar_position: 1
keywords: [laravel, bootstrap, mysql, portfolio, project management, authentication]
---

[![GitHub Repo](https://img.shields.io/badge/GitHub-Repo-blue?logo=github)](https://github.com/netraular/project-showcase-platform) 
![Last Update](https://img.shields.io/github/last-commit/netraular/project-showcase-platform) 
[![Laravel](https://img.shields.io/badge/Laravel-Framework-red?logo=laravel)](https://laravel.com) 
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.x-purple?logo=bootstrap)](https://getbootstrap.com) 
[![MySQL](https://img.shields.io/badge/MySQL-Database-blue?logo=mysql)](https://www.mysql.com)

[![Banner](https://placehold.co/600x200/2a2d32/FFF?text=Netshiba+Showcase+Platform)](https://netshiba.com)

---

## 📌 Overview

Netshiba is a private portfolio management system designed to showcase personal projects with elegant simplicity. It features **admin-exclusive access** for content management while presenting a clean public interface for visitors. The platform supports dynamic ordering, multi-media attachments, and detailed project metadata.

![Dashboard Preview](https://placehold.co/400x250/2a2d32/FFF?text=Admin+Dashboard+Preview)

---

## 🌟 Key Features

| **Category** | **Details** |
|--------------|-------------|
| **Project Management** | Full CRUD operations (Create, Read, Update, Delete) for projects |
| **Content Control** | Manage categories, tags, complexity levels, and display order |
| **Media Handling** | Upload project logos, screenshots, and external links |
| **Security** | Private login system with optional registration lockdown |

---

## 🛠 Technical Highlights

- **Framework**: Laravel 10 (PHP)
- **Database**: MySQL with Eloquent ORM
- **Frontend**: Bootstrap 5 responsive design
- **Core Functionality**:
  - Role-based authentication system
  - Dynamic form validation
  - Custom admin dashboard
  - Image optimization and storage
- **Security**: CSRF protection, rate limiting, and optional registration disablement

---

## 🌐 Live Demo

Explore the live platform: [https://netshiba.com](https://netshiba.com)

---

## ⚙️ Getting Started

To run locally:
```bash
git clone https://github.com/netraular/project-showcase-platform.git
composer install
cp .env.example .env
php artisan key:generate
```

---

## 📂 GitHub Repository

Contribute or review the codebase:  
[github.com/netraular/netshiba](https://github.com/netraular/project-showcase-platform)