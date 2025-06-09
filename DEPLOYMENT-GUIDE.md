# 多分支GitHub Pages部署指南

## 🎯 目标
实现不同分支渲染不同的index.html，每个分支都有独立的GitHub Actions部署流程。

## 📋 部署架构

```
┌─────────────────────────────────────────────────────────────┐
│                    GitHub Pages 部署结构                      │
├─────────────────────────────────────────────────────────────┤
│ main 分支      → https://username.github.io/repo/           │
│ dev 分支       → https://username.github.io/repo/dev/       │
│ staging 分支   → https://username.github.io/repo/staging/   │
│ production 分支 → https://username.github.io/repo/production/│
└─────────────────────────────────────────────────────────────┘
```

## 🚀 快速开始

### 1. 配置GitHub仓库
确保在GitHub仓库设置中：
- 启用GitHub Pages
- 选择分支：`gh-pages`
- 允许GitHub Actions写入权限

### 2. 创建分支
```bash
# 创建并切换到开发分支
git checkout -b dev
git push -u origin dev

# 创建预发布分支
git checkout -b staging
git push -u origin staging

# 创建生产分支
git checkout -b production
git push -u origin production
```

### 3. 配置分支特定内容
每个分支可以有不同的HTML文件：
- `main`: 使用 `index.html`
- `dev`: 使用 `index-dev.html`（自动生成或手动创建）
- `staging`: 使用 `index-staging.html`（自动生成或手动创建）
- `production`: 使用 `index-production.html`（自动生成或手动创建）

### 4. 自动生成环境文件
```bash
# 安装依赖
npm install

# 生成所有环境配置
npm run config:generate
```

## 📝 GitHub Actions工作流说明

### 工作流触发条件
- **main分支**: 推送到main分支时触发
- **dev分支**: 推送到dev分支时触发  
- **staging分支**: 推送到staging分支时触发
- **production分支**: 推送到production分支时触发
- **feature分支**: 推送到feature/*分支时触发

### 部署目标
每个分支部署到gh-pages分支的不同目录：
```
gh-pages/
├── index.html              # main分支内容
├── dev/
│   └── index.html          # dev分支内容
├── staging/
│   └── index.html          # staging分支内容
└── production/
    └── index.html          # production分支内容
```

## 🔧 本地开发

### 启动本地服务器
```bash
# 主站点
npm run serve

# 开发环境
npm run serve:dev

# 预发布环境  
npm run serve:staging
```

### 构建命令
```bash
# 开发环境构建
npm run build:development

# 预发布环境构建
npm run build:staging

# 生产环境构建
npm run build:production
```

## 📊 分支管理策略

### 推荐工作流
```
feature/* → dev → staging → production → main
```

1. **功能开发**: 在`feature/*`分支开发新功能
2. **开发测试**: 合并到`dev`分支进行开发环境测试
3. **预发布**: 测试通过后合并到`staging`分支
4. **生产就绪**: staging验证后合并到`production`分支
5. **正式发布**: 最终合并到`main`分支

### 环境说明
- **dev**: 开发环境，包含调试信息和最新功能
- **staging**: 预发布环境，模拟生产环境进行最终测试
- **production**: 生产就绪版本，稳定可靠
- **main**: 正式发布版本，面向用户

## 🛠️ 自定义配置

### 修改分支配置
编辑 `branch-config.js` 文件中的 `branchConfigs` 对象：

```javascript
const branchConfigs = {
  main: {
    name: '主分支',
    environment: 'production',
    path: '/',
    htmlTemplate: 'index.html',
    buildCommand: 'npm run build',
    color: '#3498db',
    description: '生产环境，稳定版本'
  },
  // 添加更多分支配置...
};
```

### 添加新分支
1. 在 `branchConfigs` 中添加配置
2. 在 `.github/workflows/deploy.yaml` 中添加对应的job
3. 运行 `npm run config:generate` 更新配置

## 🔍 监控和调试

### 查看部署状态
在GitHub仓库的Actions标签页查看部署状态和日志。

### 本地调试
```bash
# 查看分支配置
npm run preview:all

# 查看当前分支部署信息
npm run deploy:current
```

### 日志说明
每个环境的HTML页面都包含环境信息，可在浏览器控制台查看：
```javascript
console.table(window.BRANCH_INFO);
```

## ❓ 故障排除

### 常见问题

1. **部署失败**
   - 检查GitHub Actions权限
   - 确认分支保护规则
   - 查看Actions日志

2. **页面访问404**
   - 确认GitHub Pages设置
   - 检查分支是否正确部署到gh-pages

3. **环境信息不正确**
   - 重新运行 `npm run config:generate`
   - 检查分支配置是否正确

### 获取帮助
- 查看Actions日志：GitHub仓库 → Actions → 选择失败的workflow
- 检查配置：运行 `npm run preview:all`
- 重新生成配置：运行 `npm run config:generate`

## 📈 扩展功能

### 添加更多环境
可以轻松添加更多环境，如：
- `test`: 测试环境
- `demo`: 演示环境
- `docs`: 文档环境

### 集成CI/CD工具
- 添加代码质量检查
- 集成自动化测试
- 添加性能监控

### 环境变量管理
使用GitHub Secrets管理敏感信息：
- API密钥
- 数据库连接
- 第三方服务配置 