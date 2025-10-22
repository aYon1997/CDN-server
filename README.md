# 船新版本阿孝 · CDN Server

<div align="center">

一个基于 React + TypeScript + Vite + Tailwind CSS 构建的现代化多页面应用

[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.10-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

</div>

---

## 📖 项目简介

本项目是一个现代化的个人博客应用，采用多页面架构设计，包含以下核心页面：

- **主页** - 「船新版本阿孝」个人博客首页，展示文章、导航和个人介绍
- **Stagewise** - 插件安装指南页面，提供自动和手动安装教程

## ✨ 核心特性

### 🎨 现代化 UI 设计
- 响应式布局，完美适配移动端和桌面端
- 基于 Tailwind CSS 的原子化样式系统
- 流畅的动画效果和交互体验
- 美观的渐变背景和现代化配色

### ⚡ 高性能构建
- Vite 超快速的开发服务器和 HMR（热模块替换）
- TypeScript 提供类型安全和更好的开发体验
- 自动代码分割和按需加载
- 优化的生产构建，体积更小，加载更快

### 🧩 模块化架构
- 组件化开发，复用性强
- 清晰的目录结构，易于维护
- 页面级和组件级分离
- 预留的布局和工具函数目录

## 🛠️ 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| React | 19.1.0 | UI 框架 |
| TypeScript | 5.8.3 | 类型系统 |
| Vite | 6.3.5 | 构建工具 |
| Tailwind CSS | 4.1.10 | 样式框架 |
| React Router DOM | 7.6.2 | 路由管理 |
| Font Awesome | 4.7.0 | 图标库 |
| PostCSS | 8.5.5 | CSS 处理 |

## 📁 项目结构

```
CDN-server/
├── src/                          # 源代码目录
│   ├── components/               # 可复用组件
│   │   ├── stagewise/           # Stagewise 页面专用组件
│   │   ├── Navbar.tsx           # 导航栏
│   │   ├── Hero.tsx             # 英雄区域
│   │   └── FeaturedArticles.tsx # 特色文章
│   ├── pages/                   # 页面级组件
│   │   ├── Home.tsx             # 主页
│   │   └── Stagewise.tsx        # Stagewise 页面
│   ├── layouts/                 # 布局组件
│   ├── styles/                  # 样式文件
│   ├── utils/                   # 工具函数
│   ├── assets/                  # 静态资源
│   ├── main.tsx                 # 主页入口
│   └── stagewise-main.tsx       # Stagewise 入口
├── index.html                   # 主页 HTML 模板
├── stagewise.html               # Stagewise HTML 模板
├── vite.config.ts               # Vite 配置
├── tailwind.config.js           # Tailwind 配置
└── package.json                 # 项目配置
```

## 🚀 快速开始

### 环境要求

- Node.js >= 16.0.0
- npm 或 yarn 或 pnpm

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

项目将在 `http://localhost:5173` 启动，支持热重载。

### 构建生产版本

```bash
npm run build
```

构建产物将输出到 `dist` 目录。

### 预览生产构建

```bash
npm run preview
```

## 📄 页面访问

开发模式下，可通过以下地址访问各个页面：

- **主页**：http://localhost:5173/
- **Stagewise**：http://localhost:5173/stagewise.html

## 🔧 开发指南

### 添加新页面

1. 在 `src/pages/` 目录创建页面组件
2. 在 `vite.config.ts` 的 `rollupOptions.input` 中添加新入口
3. 创建对应的 HTML 模板文件
4. （可选）创建独立的入口文件

### 添加新组件

1. 在 `src/components/` 相应目录创建组件文件
2. 使用 TypeScript 接口定义组件 Props
3. 导出组件供其他文件使用

```tsx
interface MyComponentProps {
  title: string;
  content?: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ title, content }) => {
  return (
    <div>
      <h1>{title}</h1>
      {content && <p>{content}</p>}
    </div>
  );
};

export default MyComponent;
```

### 样式管理

- **优先使用** Tailwind CSS 的 utility 类
- **全局样式** 写在 `src/styles/index.css`
- **组件样式** 可使用内联样式或 CSS Modules

## 🌐 部署到 GitHub Pages

本项目支持部署到 GitHub Pages：

1. 确保项目根目录包含 `.nojekyll` 文件（已配置）
2. 运行 `npm run build` 生成构建产物
3. 将 `dist` 目录推送到 `gh-pages` 分支

```bash
npm run build
git subtree push --prefix dist origin gh-pages
```

## 📝 许可证

本项目采用 ISC 许可证。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

<div align="center">
Made with ❤️ by 船新版本阿孝
</div>
