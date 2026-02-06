# Claude Code 学习笔记

记录 Claude Code 的使用技巧和心得。

## 版本回滚

- `/rewind` 回滚版本，代码 + 会话的上下文都能回退
- 注意：如果是其他命令创建的文件，不会回滚

## 提示词技巧

- **简单提示词**：创建一个 todo 应用，使用 html 开发
- **复杂提示词**：切换到 Plan 模式（将当前的待办应用重构为使用 React TypeScript Vite 的项目、保留当前所有功能，且 UI 风格保持一致）

## 开发技巧

- `npm run dev` 默认在前台阻塞，按 `Ctrl + B` 切换到后台执行
- `/tasks` 查看后台挂起的任务
- `Ctrl + V` 或拖拽可将图片传递给终端

## 会话管理

- `/resume` 选择历史会话恢复
- 启动时加 `-c` 参数，自动恢复上次的会话
- `-r` 参数也可选择历史会话

## 上下文控制

- `/compact` 压缩上下文，可添加说明（如"重点保留用户的需求"）
- `/init` 生成项目的上下文信息（需退出重新进入才能重新加载）

## MCP 与插件

- Figma MCP：针对设计稿还原，比截图效果更好
- `/plugin` 打包安装一系列工具
- `/hooks`：暂未找到适合的使用场景

## Skills 技能

Skills 是 Claude Code 的扩展功能，可封装复杂工作流实现自动化。

### skills vs subagent

| 特性 | skills | subagent |
|------|--------|----------|
| 上下文 | 共享当前会话上下文 | 不共享上下文，独立运行 |
| 触发方式 | 主动识别或命令唤起 | 需主动输入 `/subagent` |
| 适用场景 | 固定工作流、重复任务 | 一次性复杂任务 |

### 安装与管理

```bash
# 官方市场安装
/plugin marketplace add anthropics/skills

# npx 命令安装
npx add-skill https://github.com/anthropics/skills

# 手动安装
git clone https://github.com/anthropics/skills ~/.claude/skills
```

### Front Design Skill

Anthropic 官方设计技能，显著提升前端界面的审美质量。

#### 自动激活

构建 UI 时自动触发，引导生成独特、高质量的前端界面

#### 支持风格

- `brutally minimal` - 极简主义
- `maximalist chaos` - 极繁主义
- `retro-futuristic` - 复古未来主义
- `organic/natural` - 有机自然风
- `luxury/refined` - 奢华精致风

#### 设计核心要点

- 动效 (Motion) - 平滑自然的过渡动画
- 质感 (Texture) - 视觉层次与深度
- 字体 (Typography) - 字体层级与可读性
- 一致性 (Consistency) - 统一的视觉语言
- 情感化连接 - 赋予界面温度
- 大胆美学 - 拒绝平庸设计

#### 工作流程

```
1. Before coding 阶段
   - Purpose：明确设计目的
   - Tone：确定风格基调
2. 选择清晰的设计方向，精确执行
```

#### 使用示例

```
"创建一个 retro-futuristic 风格的登录页面，使用 brutal minimal 设计语言"
```

### 官方 Skills 仓库

| Skill | 用途 |
|-------|------|
| `pdf` | PDF 文档处理 |
| `pptx` | PowerPoint 生成 |
| `docx` | Word 文档生成 |
| `xlsx` | Excel 数据处理 |
| `webapp-testing` | Web 应用测试 |
| `mcp-builder` | MCP Server 构建 |
| `theme-factory` | 主题生成 |

官方仓库：[https://github.com/anthropics/skills](https://github.com/anthropics/skills)
