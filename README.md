# Todo 应用

这是一个待办事项应用，作为 Claude Code 的练习项目。

## 技术栈

- React + TypeScript + Vite
- CSS Modules

## 项目结构

```
src/
├── components/
│   ├── TodoInput.tsx   # 输入组件
│   ├── TodoItem.tsx    # 单项组件
│   ├── TodoList.tsx    # 列表组件
│   └── TodoStats.tsx   # 统计组件
├── hooks/
│   └── useTodos.ts     # 状态管理
├── types/
│   └── todo.ts         # 类型定义
├── App.tsx
├── main.tsx
└── index.css
```

## 功能

- 添加待办事项
- 标记完成/未完成
- 删除事项
- 统计信息
- localStorage 持久化

## 启动

```bash
npm install
npm run dev
```

## Git 提交历史

| 提交 | 说明 |
|------|------|
| `dba6f33` | feat: 重构为 React + TypeScript + Vite |
| `683d79a` | docs: 添加项目说明文档 |
| `84b7c10` | ci: 添加 cnb.cool CI/CD 配置 |
| `e3e7956` | feat: 添加待办事项应用 |
