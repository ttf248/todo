# Todo 应用合集

这是一个待办事项应用合集，作为 Claude Code 的练习项目。包含多个模型/工具的实现版本。

## 项目介绍

- [学习笔记](./docs/LEARNING.md) - Claude Code 使用技巧和 Skills 详解
- [技术栈](#技术栈) - 项目使用的技术
- [项目结构](#项目结构) - 目录结构说明
- [功能](#功能) - 功能列表
- [启动](#启动) - 各版本启动命令

## 项目结构

```
todo/
├── docs/                    # 学习笔记
│   └── LEARNING.md          # Claude Code 技巧和 Skills 详解
├── kimi-2.5/
│   └── todo-app/            # Kimi-2.5 实现版本
│       ├── src/
│       │   ├── components/  # 组件
│       │   │   ├── EmptyState.tsx    # 空状态
│       │   │   ├── PriorityFilter.tsx # 优先级筛选
│       │   │   ├── TodoFilter.tsx     # 筛选
│       │   │   ├── TodoInput.tsx      # 输入
│       │   │   ├── TodoItem.tsx       # 单项
│       │   │   ├── TodoList.tsx       # 列表
│       │   │   └── TodoStats.tsx      # 统计
│       │   ├── hooks/
│       │   │   └── useTodos.ts        # 状态管理
│       │   ├── types/
│       │   │   └── todo.ts           # 类型定义
│       │   ├── App.tsx
│       │   └── main.tsx
│       └── vite.config.ts
├── minimax-m2/              # MiniMax M2 实现版本
│   ├── src/
│   │   ├── components/      # 组件
│   │   │   ├── TodoInput.tsx
│   │   │   ├── TodoItem.tsx
│   │   │   ├── TodoList.tsx
│   │   │   └── TodoStats.tsx
│   │   ├── hooks/
│   │   │   └── useTodos.ts
│   │   ├── types/
│   │   │   └── todo.ts
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   └── vite.config.ts
├── .cnb.yml                 # CI/CD 配置
├── .gitignore
└── README.md
```

## 各版本说明

| 版本 | 说明 |
|------|------|
| `minimax-m2` | 基于 MiniMax M2 模型生成的 React + TypeScript 实现 |
| `kimi-2.5/todo-app` | 基于 Kimi-2.5 模型生成的 React + TypeScript 实现，包含优先级筛选等扩展功能 |

## 技术栈

- React + TypeScript + Vite
- CSS Modules / 纯 CSS
- localStorage 持久化

## 功能

- 添加待办事项
- 标记完成/未完成
- 删除事项
- 筛选过滤（按状态、优先级）
- 统计信息
- localStorage 持久化

## 启动

### MiniMax M2 版本

```bash
cd minimax-m2
npm install
npm run dev
```

### Kimi-2.5 版本

```bash
cd kimi-2.5/todo-app
npm install
npm run dev
```

## Git 提交历史

| 提交 | 说明 |
|------|------|
| `fc670cd` | docs: 添加官方 skills 推荐链接到 README |
| `3181f94` | feat: 重构 Todo 应用 UI 为新粗野主义风格 |
| `d736b98` | feat: 重构 Todo 应用 UI 为新粗野主义风格 |
| `5dd7392` | feat: 添加 React + TypeScript Todo 应用项目 |
| `b522d1a` | feat: 添加基于 kimi-2.5 的 Todo 应用实现 |
