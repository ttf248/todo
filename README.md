# Todo 应用

这是一个待办事项应用，作为 Claude Code 的练习项目。

## 学习大纲

记录 Claude Code 的使用技巧和心得。

### 版本回滚

- `/rewind` 回滚版本，代码 + 会话的上下文都能回退
- 注意：如果是其他命令创建的文件，不会回滚

### 提示词技巧

- **简单提示词**：创建一个 todo 应用，使用 html 开发
- **复杂提示词**：切换到 Plan 模式（将当前的待办应用重构为使用 React TypeScript Vite 的项目、保留当前所有功能，且 UI 风格保持一致）

### 开发技巧

- `npm run dev` 默认在前台阻塞，按 `Ctrl + B` 切换到后台执行
- `/tasks` 查看后台挂起的任务
- `Ctrl + V` 或拖拽可将图片传递给终端

### 会话管理

- `/resume` 选择历史会话恢复
- 启动时加 `-c` 参数，自动恢复上次的会话
- `-r` 参数也可选择历史会话

### 上下文控制

- `/compact` 压缩上下文，可添加说明（如"重点保留用户的需求"）
- `/init` 生成项目的上下文信息（需退出重新进入才能重新加载）

### MCP 与插件

- Figma MCP：针对设计稿还原，比截图效果更好
- `/plugin` 打包安装一系列工具
- `/hooks`：暂未找到适合的使用场景

### 自动化工具

- `/skills` 让大模型主动识别并调用对应技能，也可主动输入命令唤起
- `/subagent` 定义的逻辑类似 skills，但不会共享当前会话的上下文

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
