#!/usr/bin/env node

/**
 * 分支配置管理脚本
 * 用于管理不同分支的部署配置和HTML模板
 */

const fs = require('fs');
const path = require('path');

// 分支配置
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
  dev: {
    name: '开发分支',
    environment: 'development', 
    path: '/dev/',
    htmlTemplate: 'index-dev.html',
    buildCommand: 'npm run build:dev',
    color: '#f39c12',
    description: '开发环境，包含最新功能'
  },
  staging: {
    name: '预发布分支',
    environment: 'staging',
    path: '/staging/',
    htmlTemplate: 'index-staging.html', 
    buildCommand: 'npm run build:staging',
    color: '#e67e22',
    description: '预发布环境，准备上线版本'
  },
  production: {
    name: '生产分支',
    environment: 'production',
    path: '/production/',
    htmlTemplate: 'index-production.html',
    buildCommand: 'npm run build:production', 
    color: '#27ae60',
    description: '生产环境，正式发布版本'
  }
};

// 获取当前Git分支
function getCurrentBranch() {
  try {
    const { execSync } = require('child_process');
    return execSync('git branch --show-current', { encoding: 'utf8' }).trim();
  } catch (error) {
    console.warn('无法获取当前Git分支，使用默认配置');
    return 'main';
  }
}

// 生成分支特定的package.json脚本
function generatePackageScripts() {
  const packagePath = path.join(__dirname, 'package.json');
  let packageJson = {};
  
  if (fs.existsSync(packagePath)) {
    packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  }
  
  if (!packageJson.scripts) {
    packageJson.scripts = {};
  }
  
  // 添加分支特定的构建脚本
  Object.entries(branchConfigs).forEach(([branch, config]) => {
    if (branch !== 'main') {
      const scriptName = `build:${config.environment}`;
      packageJson.scripts[scriptName] = `cross-env NODE_ENV=${config.environment} BRANCH=${branch} npm run build`;
    }
  });
  
  // 添加部署脚本
  packageJson.scripts['deploy:current'] = 'node branch-config.js deploy';
  packageJson.scripts['preview:all'] = 'node branch-config.js preview';
  
  fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
  console.log('✅ package.json 脚本已更新');
}

// 生成环境特定的HTML文件
function generateEnvironmentHTML(branch, config) {
  const templatePath = path.join(__dirname, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.error('❌ 基础模板 index.html 不存在');
    return;
  }
  
  let html = fs.readFileSync(templatePath, 'utf8');
  
  // 注入环境特定信息
  html = html.replace(
    '<title>',
    `<title>[${config.name}] `
  );
  
  // 添加环境横幅
  if (branch !== 'main') {
    const banner = `
    <div style="background: ${config.color}; color: white; text-align: center; padding: 10px; position: fixed; top: 0; width: 100%; z-index: 9999; font-weight: bold;">
      🔸 ${config.name} - ${config.description} 🔸
    </div>
    <style>body { padding-top: 50px !important; }</style>`;
    
    html = html.replace('<body>', `<body>${banner}`);
  }
  
  // 注入环境信息脚本
  const envScript = `
  <script>
    window.BRANCH_INFO = {
      branch: '${branch}',
      environment: '${config.environment}',
      name: '${config.name}',
      description: '${config.description}',
      buildTime: new Date().toISOString()
    };
    console.log('%c${config.name}', 'background: ${config.color}; color: white; padding: 4px 8px; border-radius: 4px;');
    console.table(window.BRANCH_INFO);
  </script>`;
  
  html = html.replace('</body>', `${envScript}</body>`);
  
  const outputPath = path.join(__dirname, config.htmlTemplate);
  fs.writeFileSync(outputPath, html);
  console.log(`✅ 生成 ${config.htmlTemplate}`);
}

// 生成所有环境的HTML文件
function generateAllHTML() {
  Object.entries(branchConfigs).forEach(([branch, config]) => {
    if (branch !== 'main') {
      generateEnvironmentHTML(branch, config);
    }
  });
}

// 生成README文档
function generateREADME() {
  const readmeContent = `# 多分支GitHub Pages部署

本项目支持多个分支同时部署到GitHub Pages，每个分支都有独立的环境和配置。

## 支持的分支

| 分支 | 环境 | 访问路径 | 描述 |
|------|------|----------|------|
${Object.entries(branchConfigs).map(([branch, config]) => 
  `| \`${branch}\` | ${config.environment} | ${config.path} | ${config.description} |`
).join('\n')}

## 访问地址

- **主站**: https://your-username.github.io/your-repo/
- **开发环境**: https://your-username.github.io/your-repo/dev/
- **预发布环境**: https://your-username.github.io/your-repo/staging/
- **生产环境**: https://your-username.github.io/your-repo/production/

## 分支工作流

\`\`\`
dev → staging → production → main
\`\`\`

## 自动部署

每个分支推送代码时会自动触发对应的GitHub Actions部署流程：

1. **main分支**: 部署到根路径
2. **dev分支**: 部署到 /dev/ 路径，包含开发调试信息
3. **staging分支**: 部署到 /staging/ 路径，预发布版本
4. **production分支**: 部署到 /production/ 路径，生产就绪版本

## 本地开发

\`\`\`bash
# 安装依赖
npm install

# 生成环境配置
npm run config:generate

# 开发环境构建
npm run build:development

# 预发布环境构建  
npm run build:staging

# 生产环境构建
npm run build:production

# 预览所有环境
npm run preview:all
\`\`\`

## 配置管理

使用 \`branch-config.js\` 脚本管理分支配置：

\`\`\`bash
# 生成所有环境HTML
node branch-config.js generate

# 部署当前分支
node branch-config.js deploy

# 预览所有分支
node branch-config.js preview
\`\`\`
`;

  fs.writeFileSync(path.join(__dirname, 'README-branches.md'), readmeContent);
  console.log('✅ 生成 README-branches.md');
}

// 主函数
function main() {
  const command = process.argv[2] || 'generate';
  const currentBranch = getCurrentBranch();
  
  console.log(`当前分支: ${currentBranch}`);
  console.log(`执行命令: ${command}`);
  
  switch (command) {
    case 'generate':
      console.log('\n🚀 生成分支配置...');
      generatePackageScripts();
      generateAllHTML();
      generateREADME();
      console.log('\n✅ 所有配置生成完成！');
      break;
      
    case 'deploy':
      const config = branchConfigs[currentBranch];
      if (config) {
        console.log(`\n🚀 部署 ${config.name}...`);
        console.log(`环境: ${config.environment}`);
        console.log(`路径: ${config.path}`);
      } else {
        console.log(`\n⚠️  未知分支: ${currentBranch}`);
      }
      break;
      
    case 'preview':
      console.log('\n🔍 预览所有分支配置:');
      Object.entries(branchConfigs).forEach(([branch, config]) => {
        console.log(`\n分支: ${branch}`);
        console.log(`  名称: ${config.name}`);
        console.log(`  环境: ${config.environment}`);
        console.log(`  路径: ${config.path}`);
        console.log(`  模板: ${config.htmlTemplate}`);
        console.log(`  构建: ${config.buildCommand}`);
      });
      break;
      
    default:
      console.log('❌ 未知命令');
      console.log('可用命令: generate, deploy, preview');
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  branchConfigs,
  getCurrentBranch,
  generateAllHTML,
  generatePackageScripts
}; 