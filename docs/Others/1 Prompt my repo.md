---
title: Prompt My Repo VSCode extension
description: VS Code extension to copy project files/directories into a structured text format for LLM interactions. Streamline code analysis, debugging, and documentation.
sidebar_position: 2
keywords: [vscode extension, LLM workflow, code formatting, typescript, clipboard integration]
---

[![GitHub Repo](https://img.shields.io/badge/GitHub-Repo-blue?logo=github)](https://github.com/netraular/prompt-my-repo) 
![Last Updated](https://img.shields.io/github/last-commit/netraular/prompt-my-repo) 
[![VS Code Marketplace](https://img.shields.io/visual-studio-marketplace/v/netraular.prompt-my-repo?label=VS%20Code%20Marketplace&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=netraular.prompt-my-repo) 
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue?logo=typescript)](https://www.typescriptlang.org) 
[![LLM Assisted](https://img.shields.io/badge/LLM-Assisted-8A2BE2)](https://github.com/netraular/prompt-my-repo)

[![Extension Preview](https://placehold.co/600x200/2a2d32/FFF?text=Prompt+My+Repo+Workflow)](https://marketplace.visualstudio.com/items?itemName=netraular.prompt-my-repo)

---

## 📌 Overview

**Prompt My Repo** is a VS Code extension that simplifies interactions with Large Language Models (LLMs) by packaging codebases into structured text formats. Ideal for:

- Generating context-aware documentation
- Debugging complex codebases
- Creating reproducible LLM prompts

Simply define files/directories in a template, and the extension automatically:
1. Copies specified content with directory structure
2. Formats output with relative paths
3. Saves results to your clipboard

![Workflow Example](https://placehold.co/400x250/2a2d32/FFF?text=Template+→+Formatted+Output)

---

## 🌟 Key Features

| **Category**       | **Details**                              |
|--------------------|------------------------------------------|
| **Core Functionality** | Multi-file aggregation, template-based selection, structure preservation |
| **Advanced Features**  | Recursive directory search (`*` syntax), smart clipboard integration, VS Code native integration |


---

## 🛠 Technical Highlights

- **Language**: TypeScript (v4.9.5)
- **Core Architecture**:
  - VS Code API integration for file system access
  - Recursive directory traversal algorithm
  - Clipboard module with error handling
- **Development Approach**:
  - LLM-assisted code optimization
  - Semantic versioning
  - Automated marketplace publishing

---

## 🚀 Get Started

1. Install from [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=netraular.prompt-my-repo)
2. Create `.prompt-my-repo` template file
3. Run command `Prompt My Repo: Generate Output`

```bash
# Example .prompt-my-repo template
src/utils/*
config.json
README.md
```

---

## 📂 Repository Structure

```tree
prompt-my-repo/
├── src/
│   ├── extension.ts      # Core logic
│   └── templateParser.ts # Template processor
├── package.json          # Extension manifest
└── .prompt-my-repo       # Sample template
```
