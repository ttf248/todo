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
├── minimax-m2/              # MiniMax M2 实现版本
│   ├── src/
│   │   ├── components/      # 组件
│   │   │   ├── TodoInput.tsx        # 输入组件
│   │   │   ├── TodoItem.tsx         # 单项组件
│   │   │   ├── TodoList.tsx         # 列表组件
│   │   │   ├── TodoStats.tsx        # 统计组件
│   │   │   ├── TodoFilter.tsx       # 状态筛选
│   │   │   ├── PriorityFilter.tsx   # 优先级筛选
│   │   │   ├── TagFilter.tsx        # 标签筛选
│   │   │   └── EmptyState.tsx       # 空状态
│   │   ├── hooks/
│   │   │   └── useTodos.ts          # 状态管理
│   │   ├── types/
│   │   │   └── todo.ts             # 类型定义
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── eslint.config.js      # ESLint 配置
│   ├── vitest.config.ts      # Vitest 测试配置
│   └── vite.config.ts        # Vite 构建配置
├── .cnb.yml                 # CI/CD 配置
├── .gitignore
└── README.md
```

## 技术栈

- React + TypeScript + Vite
- 纯 CSS（新粗野主义 Neo-Brutalism 风格）
- localStorage 持久化
- Vitest + Testing Library 单元测试
- ESLint 代码规范检查

## 功能

- 添加待办事项（支持优先级、截止日期、标签）
- 标记完成/未完成
- 删除事项
- 编辑待办事项
- 筛选过滤（按状态、优先级、标签）
- 统计信息（总计/已完成/待完成/优先级分布）
- localStorage 持久化
- 截止日期管理（逾期提醒、即将到期提醒）
- 标签分类管理

## 启动

### MiniMax M2 版本

```bash
cd minimax-m2
npm install
npm run dev      # 启动开发服务器 (端口 3000)
npm run build    # 构建生产版本
npm run lint     # ESLint 代码检查
npm run test     # 运行单元测试
npm run preview  # 预览生产构建
```

## Git 提交历史

| 提交 | 说明 |
|------|------|
| `1cff1fb` | chore: 添加构建配置 |
| `717a334` | test: 为 TodoInput 组件添加单元测试 |
| `8389bd2` | test: 为 useTodos hook 添加单元测试 |
| `a3512ad` | chore: TypeScript 严格类型检查已启用 |
| `0275862` | chore: 添加 ESLint 代码规范检查 |
| `fe701a9` | refactor: 统一代码风格，添加集中导出 |
| `6a80b3c` | feat: 添加分类/标签功能 |
| `ab3f83f` | feat: 添加截止日期功能 |
| `25133e3` | feat: 添加待办事项编辑功能 |
| `0ca0744` | feat: 为 MiniMax M2 版本添加筛选功能和智能空状态提示 |
| `fc670cd` | docs: 添加官方 skills 推荐链接到 README |
| `3181f94` | feat: 重构 Todo 应用 UI 为新粗野主义风格 |
| `d736b98` | feat: 重构 Todo 应用 UI 为新粗野主义风格 |
| `5dd7392` | feat: 添加 React + TypeScript Todo 应用项目 |
