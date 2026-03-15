# AcebergUI

一个基于 **React + Vite + Tailwind CSS** 构建的现代化组件库文档网站，支持明暗双主题，全量 TypeScript 类型定义。

---

## ✨ 特性

- 🎨 **明暗双主题** — 内置亮色 / 暗色模式切换，主题状态持久化，适配系统偏好
- ⚡ **Tailwind CSS 驱动** — 原生 Tailwind 类名，完全可定制，无多余运行时依赖
- 🔷 **TypeScript 优先** — 全组件完整类型定义，强类型 Props 提示
- 📦 **10+ 基础组件** — 覆盖通用、表单、数据展示、反馈四大类别
- 🖥 **文档站内置** — 每个组件附带交互 Demo + 代码示例 + Props 表格

---

## 🚀 快速开始

### 安装依赖

\`\`\`bash
npm install
\`\`\`

### 启动开发服务器

\`\`\`bash
npm run dev
\`\`\`

### 构建生产版本

\`\`\`bash
npm run build
\`\`\`

---

## 🛠 技术栈

| 技术 | 版本 |
|------|------|
| React | ^18.2.0 |
| Vite | ^5.1.0 |
| TypeScript | ^5.2.2 |
| Tailwind CSS | ^3.4.1 |
| React Router | ^6.22.0 |
| @heroicons/react | ^2.1.1 |

---

## 📦 组件列表

### 通用

| 组件 | 说明 |
|------|------|
| Button | 按钮，支持 5 种变体、3 种尺寸、loading 状态、图标 |
| Avatar | 头像，支持图片 / 姓名首字母 / 占位，可显示在线状态 |
| Tag | 标签，支持 6 种颜色、可关闭 |

### 表单

| 组件 | 说明 |
|------|------|
| Input | 输入框，支持 label、hint、error、prefix/suffix |
| Badge | 徽章，支持 6 种颜色和点状状态指示 |

### 数据展示

| 组件 | 说明 |
|------|------|
| Card | 卡片容器，支持 title、extra、footer 插槽，可悬停 |
| Table | 表格，支持自定义渲染、斑马纹、加载状态 |
| Tabs | 标签页，支持受控 / 非受控模式，可禁用 |

### 反馈

| 组件 | 说明 |
|------|------|
| Alert | 提示，支持 success / error / warning / info 四种类型，可关闭 |
| Modal | 弹窗，支持 Esc 关闭、点击遮罩关闭、自定义 footer |

---

## 📁 项目结构

\`\`\`
src/
├── components/          # 组件库核心组件
│   ├── Button.tsx
│   ├── Input.tsx
│   ├── Badge.tsx
│   ├── Card.tsx
│   ├── Modal.tsx
│   ├── Alert.tsx
│   ├── Tag.tsx
│   ├── Avatar.tsx
│   ├── Tabs.tsx
│   ├── Table.tsx
│   └── Navbar.tsx
├── context/
│   └── ThemeContext.tsx  # 明暗主题全局 Context
├── layouts/
│   └── DocsLayout.tsx    # 文档页布局（左侧导航 + 内容区）
├── pages/
│   ├── Home.tsx          # 首页 Landing Page
│   └── ComponentsPage.tsx
├── demos/               # 各组件 Demo 文档页
│   ├── DemoUtils.tsx
│   ├── ButtonDemo.tsx
│   ├── InputDemo.tsx
│   ├── BadgeDemo.tsx
│   ├── CardDemo.tsx
│   ├── ModalDemo.tsx
│   ├── AlertDemo.tsx
│   ├── TagDemo.tsx
│   ├── AvatarDemo.tsx
│   ├── TabsDemo.tsx
│   └── TableDemo.tsx
├── App.tsx
├── main.tsx
└── index.css
\`\`\`

---

## 🌙 明暗主题

主题切换通过 ThemeContext 实现，状态持久化至 localStorage，同时响应系统 prefers-color-scheme。

\`\`\`tsx
import { useTheme } from './context/ThemeContext'

const { isDark, toggleTheme } = useTheme()
\`\`\`

切换时在 html 上 toggle dark class，Tailwind darkMode: 'class' 即可生效。

---

## 🗺 路由结构

\`\`\`
/                       → 首页（Landing Page）
/components             → 组件总览
/components/button      → Button 文档
/components/input       → Input 文档
/components/badge       → Badge 文档
/components/card        → Card 文档
/components/modal       → Modal 文档
/components/alert       → Alert 文档
/components/tag         → Tag 文档
/components/avatar      → Avatar 文档
/components/tabs        → Tabs 文档
/components/table       → Table 文档
\`\`\`

---

## 📄 License

MIT