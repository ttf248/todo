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

| 类别 | Skill | 用途 | 典型用法/Prompt |
|------|-------|------|----------------|
| **文档处理** | `pdf` | 生成、提取 PDF | `"将最近的周报汇总成一份 PDF 报告"`<br>`"从 invoice.pdf 中提取所有表格并保存为 csv"` |
| | `pptx` | PPT 生成与编辑 | `"为我的新项目创建一个 10 页的 PPT，包含架构图和排期"`<br>`"根据 README.md 的内容生成一个产品演示幻灯片"` |
| | `docx` | Word 文档处理 | `"撰写一份软件需求规格说明书 (SRS) 并保存为 docx"`<br>`"优化文档的排版并添加标准页眉页脚"` |
| | `xlsx` | Excel 表格分析 | `"创建一个预算追踪表，包含自动计算总和的公式"`<br>`"分析 data.csv 并生成一份带有图表的 Excel 报告"` |
| **开发测试** | `webapp-testing` | Web 自动化测试 | `"对当前的登录流程编写完整的自动化测试用例"` |
| | `playwright` | 浏览器自动化交互 | `"打开浏览器，登录到 GitHub 并检查我的待处理 PR"`<br>`"截图我的网站在移动端适配下的显示效果"` |
| | `ios-simulator` | iOS 模拟器操作 | `"在 iOS 模拟器上运行并测试我的新 App 界面"` |
| | `mcp-builder` | 构建 MCP Server | `"帮我创建一个可以查询本地天气 API 的 MCP Server"` |
| **设计辅助** | `theme-factory` | UI 主题生成 | `"为这个管理后台生成一套暗黑模式的配色方案，要符合 Material Design"` |
| | `web-asset-generator` | 生成 Web 资产 | `"基于网站主色调生成一套全尺寸的 Favicon 和 App Icons"` |

### 主流第三方/进阶 Skills

- **`superpowers`**：强制执行 TDD 和规划流。
  - *场景*：当你希望 Claude 在写代码前先写测试。
  - *指令*：`"启动 superpowers 模式，按照 TDD 流程重构我的用户认证模块"`
- **`skill-seekers`**：文档转技能神器。
  - *场景*：你想让 Claude 学习某个新库（如 `Tailwind v4`）的文档。
  - *用法*：`npx skill-seekers scan https://tailwindcss.com/docs`
- **`trail-of-bits-security`**：专业级代码审计。
  - *场景*：发布前的安全扫描。
  - *指令*：`"运行安全审计技能，检查代码中是否存在潜在的 SQL 注入或权限绕过漏洞"`
- **`d3-js`**：高级数据可视化。
  - *场景*：需要炫酷的动态图表。
  - *指令*：`"使用 D3.js 技能，将这份 JSON 数据转换为一个交互式的力导向关系图"`
- **`loki-mode`**：自主创业/项目推进。
  - *场景*：从零开始构建一个完整的产品。
  - *指令*：`"激活 Loki 模式，帮我从零规划并实现一个基于 AI 的协作看板"`

官方仓库：[https://github.com/anthropics/skills](https://github.com/anthropics/skills)
