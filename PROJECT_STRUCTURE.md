# React 多页面项目结构

## 项目概述
这是一个基于 React + TypeScript + Vite + Tailwind CSS 的多页面应用，包含主页和 Stagewise 插件安装指南页面。

## 目录结构

```
axiao-blog/
├── src/                          # 源代码目录
│   ├── components/               # 可复用组件
│   │   ├── stagewise/           # Stagewise 页面专用组件
│   │   │   ├── StageWiseHeader.tsx
│   │   │   ├── AutoInstallTab.tsx
│   │   │   ├── ManualInstallTab.tsx
│   │   │   ├── ComparisonSection.tsx
│   │   │   └── BenefitsSection.tsx
│   │   ├── Navbar.tsx           # 导航栏组件
│   │   ├── Hero.tsx             # 英雄区域组件
│   │   └── FeaturedArticles.tsx # 特色文章组件
│   ├── pages/                   # 页面级组件
│   │   ├── Home.tsx             # 主页
│   │   └── Stagewise.tsx        # Stagewise 页面
│   ├── layouts/                 # 布局组件（预留）
│   ├── styles/                  # 样式文件
│   │   └── index.css            # 全局样式
│   ├── utils/                   # 工具函数（预留）
│   ├── assets/                  # 静态资源（预留）
│   ├── main.tsx                 # 主页入口文件
│   └── stagewise-main.tsx       # Stagewise 页面入口文件
├── index.html                   # 主页 HTML 模板
├── stagewise.html               # Stagewise 页面 HTML 模板
├── vite.config.ts               # Vite 配置
├── tailwind.config.js           # Tailwind CSS 配置
├── tsconfig.json                # TypeScript 配置
├── tsconfig.node.json           # Node.js 环境 TypeScript 配置
└── package.json                 # 项目依赖配置
```

## 技术栈

- **React 18** - 前端框架
- **TypeScript** - 类型安全
- **Vite** - 构建工具
- **Tailwind CSS** - 样式框架
- **React Router** - 路由管理
- **Font Awesome** - 图标库

## 特性

### 1. 模块化设计
- 组件按功能分类，便于维护
- 页面级组件独立管理
- 可复用组件统一存放

### 2. 多页面支持
- 主页：`/` - 个人博客首页
- Stagewise：`/stagewise` - 插件安装指南

### 3. 响应式设计
- 移动端适配
- 现代化 UI 设计
- 流畅的动画效果

### 4. 开发体验
- TypeScript 类型检查
- 热重载开发
- 代码分割优化

## 运行命令

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建项目
npm run build

# 预览构建结果
npm run preview
```

## 页面访问

- 主页：http://localhost:5173/
- Stagewise：http://localhost:5173/stagewise.html

## 扩展指南

### 添加新页面
1. 在 `src/pages/` 创建页面组件
2. 在 `vite.config.ts` 中添加新的入口点
3. 创建对应的 HTML 模板文件
4. 创建独立的入口文件（如需要）

### 添加新组件
1. 在 `src/components/` 相应目录创建组件
2. 使用 TypeScript 接口定义 props
3. 导出组件供其他文件使用

### 样式管理
- 使用 Tailwind CSS 类名
- 自定义样式在 `src/styles/index.css`
- 组件级样式使用 CSS-in-JS 或模块化 CSS 