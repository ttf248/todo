# Todo 应用

这是一个待办事项应用，作为 Claude Code 的练习项目。

## 大纲

基础的操作以前都熟悉了，更多是系统性的学习一波。

/rewind 回滚版本，代码 + 会话的上下文都能回退，需要注意，如果是其他命令创建的文件，不会回滚

* 简单提示词：创建一个 todo 应用，使用 html 开发
* 复杂提示词，切换到 Plan 模式：将当前的待办应用重构为使用 React Typescript Vite 的项目、保留当前所有功能，且 UI 风格保持一致
* 执行 npm run dev 默认会在前台堵住，ctrl + b 能切换到后台执行 /tasks 能查看后台挂起的任务
* ctrl + v 或者 拖拽都能将图片传递给 cc 终端，
* /resume 选择历史会话恢复；启动的时候 -c 参数，自动恢复上次的会话；-r 也能选择历史会话
* figma mcp 介绍，针对设计稿的还原，比截图还原的效果更好
* /compact 压缩上下文，能添加说明，比如：重点保留用户的需求

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
