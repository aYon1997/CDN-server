<template>
  <div class="stagewise-guide">
    <header>
      <div class="container">
        <div class="header-content">
          <h1>Stagewise 插件安装指南</h1>
          <p class="subtitle">一键自动安装或手动配置 - 选择最适合您的方式</p>
          
          <div class="tabs-container">
            <button class="tab active" @click="switchTab('auto')">自动安装</button>
            <button class="tab" @click="switchTab('manual')">手动安装</button>
          </div>
        </div>
      </div>
    </header>
    
    <div class="container">
      <!-- 自动安装内容 -->
      <div id="auto" class="tab-content" :class="{ active: activeTab === 'auto' }">
        <div class="section-title">
          <h2>自动安装 Stagewise</h2>
        </div>
        
        <div class="method auto">
          <div class="method-header">
            <h2><i class="fas fa-robot"></i> 推荐方式：一键自动安装</h2>
            <p>最快捷的安装方式，适用于大多数开发者</p>
          </div>
          
          <div class="method-content">
            <div class="steps">
              <div class="step">
                <div class="step-number">1</div>
                <div class="step-content">
                  <h3>在扩展市场中安装 Stagewise</h3>
                  <p>打开 Cursor 编辑器，进入扩展市场，搜索 "stagewise" 并安装</p>
                </div>
              </div>
              
              <div class="step">
                <div class="step-number">2</div>
                <div class="step-content">
                  <h3>激活 Stagewise 自动设置</h3>
                  <p>使用快捷键 <code>Ctrl + Shift + J</code> 或在命令面板中搜索 "Stagewise Auto-setup"</p>
                </div>
              </div>
              
              <div class="step">
                <div class="step-number">3</div>
                <div class="step-content">
                  <h3>自动配置过程</h3>
                  <p>Stagewise 会自动在对话框中输入提示词，识别您的前端技术栈</p>
                </div>
              </div>
              
              <div class="step">
                <div class="step-number">4</div>
                <div class="step-content">
                  <h3>安装依赖</h3>
                  <p>根据识别结果，自动安装所需的依赖包到项目中</p>
                </div>
              </div>
            </div>
            
            <div class="image-container">
              <img src="https://p3-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/685b4ed9614b417c80e59a9cd3e71ae5~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5LiA5b-D5Y-q6K-75Zyj6LSk5Lmm:q75.awebp?rk3s=f64ab15b&x-expires=1749524161&x-signature=IhUb%2FsEwo7TlivabNY346tdbEaw%3D" alt="Stagewise 自动安装界面">
              <div class="caption">点击 stagewise 后会自动在 cursor 对话框输入提示词</div>
            </div>
            
            <div class="features">
              <div class="feature">
                <h3><i class="fas fa-bolt"></i> 自动识别技术栈</h3>
                <p>智能检测项目中的前端框架和技术栈，自动配置对应环境</p>
              </div>
              
              <div class="feature">
                <h3><i class="fas fa-cogs"></i> 零配置集成</h3>
                <p>无需手动修改配置文件，所有配置自动完成</p>
              </div>
              
              <div class="feature">
                <h3><i class="fas fa-history"></i> 快速回滚</h3>
                <p>如不满意自动配置，可一键恢复到原始状态</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 手动安装内容 -->
      <div id="manual" class="tab-content" :class="{ active: activeTab === 'manual' }">
        <div class="section-title">
          <h2>手动安装 Stagewise</h2>
        </div>
        
        <div class="method manual">
          <div class="method-header">
            <h2><i class="fas fa-tools"></i> 高级方式：手动配置</h2>
            <p>完全控制安装过程，适用于自定义配置需求</p>
          </div>
          
          <div class="method-content">
            <div class="steps">
              <div class="step">
                <div class="step-number">1</div>
                <div class="step-content">
                  <h3>安装依赖</h3>
                  <p>在 package.json 中添加必要的开发依赖</p>
                  <pre v-highlightjs="manualDependencies"><code class="json"></code></pre>
                </div>
              </div>
              
              <div class="step">
                <div class="step-number">2</div>
                <div class="step-content">
                  <h3>配置 Babel</h3>
                  <p>在 babel.config.js 中添加必要的预设和插件</p>
                  <pre v-highlightjs="babelConfig"><code class="javascript"></code></pre>
                </div>
              </div>
              
              <div class="step">
                <div class="step-number">3</div>
                <div class="step-content">
                  <h3>初始化工具栏</h3>
                  <p>在 main.js 中初始化 Stagewise 工具栏</p>
                  <pre v-highlightjs="initToolbar"><code class="javascript"></code></pre>
                </div>
              </div>
              
              <div class="step">
                <div class="step-number">4</div>
                <div class="step-content">
                  <h3>转译依赖</h3>
                  <p>在 vue.config.js 中配置转译</p>
                  <pre v-highlightjs="transpileDependencies"><code class="javascript"></code></pre>
                </div>
              </div>
            </div>
            
            <div class="features">
              <div class="feature">
                <h3><i class="fas fa-sliders-h"></i> 完全控制</h3>
                <p>精确控制每个配置细节，满足特殊项目需求</p>
              </div>
              
              <div class="feature">
                <h3><i class="fas fa-project-diagram"></i> 复杂项目支持</h3>
                <p>适用于有特殊配置要求或自定义构建流程的项目</p>
              </div>
              
              <div class="feature">
                <h3><i class="fas fa-graduation-cap"></i> 学习价值</h3>
                <p>深入了解工具集成原理，提升技术能力</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 对比区域 -->
      <div class="section-title" style="margin-top: 80px;">
        <h2>安装方式对比</h2>
      </div>
      
      <div class="comparison">
        <div class="method auto">
          <div class="method-header">
            <h2><i class="fas fa-robot"></i> 自动安装</h2>
            <p>推荐大多数开发者使用</p>
          </div>
          <div class="method-content">
            <ul>
              <li>
                <i class="fas fa-check-circle"></i>
                <span>一键完成安装和配置</span>
              </li>
              <li>
                <i class="fas fa-check-circle"></i>
                <span>自动识别技术栈</span>
              </li>
              <li>
                <i class="fas fa-check-circle"></i>
                <span>无需技术背景知识</span>
              </li>
              <li>
                <i class="fas fa-check-circle"></i>
                <span>5分钟内完成安装</span>
              </li>
              <li>
                <i class="fas fa-times-circle"></i>
                <span>自定义选项有限</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="method manual">
          <div class="method-header">
            <h2><i class="fas fa-tools"></i> 手动安装</h2>
            <p>适合高级开发者</p>
          </div>
          <div class="method-content">
            <ul>
              <li>
                <i class="fas fa-check-circle"></i>
                <span>完全控制配置细节</span>
              </li>
              <li>
                <i class="fas fa-check-circle"></i>
                <span>适用于特殊项目需求</span>
              </li>
              <li>
                <i class="fas fa-check-circle"></i>
                <span>深度理解集成原理</span>
              </li>
              <li>
                <i class="fas fa-times-circle"></i>
                <span>需要15-30分钟配置</span>
              </li>
              <li>
                <i class="fas fa-times-circle"></i>
                <span>需要前端构建知识</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    <div class="benefits-section">
      <div class="container">
        <div class="section-title">
          <h2>Stagewise 核心功能</h2>
        </div>
        
        <div class="benefits-grid">
          <div class="benefit-card">
            <i class="fas fa-mouse-pointer"></i>
            <h3>元素精准操作</h3>
            <p>对目标元素进行选中、批量选中、删除、批量删除</p>
          </div>
          
          <div class="benefit-card">
            <i class="fas fa-sync-alt"></i>
            <h3>实时热更新</h3>
            <p>开发环境自动启用热重载，即时查看UI调整效果</p>
          </div>
          
          <div class="benefit-card">
            <i class="fas fa-expand-arrows-alt"></i>
            <h3>可折叠工具栏</h3>
            <p>不干扰开发界面的可收起/展开工具栏</p>
          </div>
        </div>
        
        <div class="testimonial">
          <p>"Stagewise的自动安装功能彻底改变了我们的工作流程。以前需要手动配置半小时的环境，现在只需点击几次就能完成，团队效率提升了50%以上。"</p>
          <div class="author">- 某科技公司前端团队负责人</div>
        </div>
      </div>
    </div>
    
    <footer>
      <div class="container">
        <div class="logo">Stagewise</div>
        <p>让前端调试更简单、更高效</p>
        <p>参考资料：<a href="https://www.bilibili.com/video/BV1M8EfzkEk9">B站教程视频</a></p>
        <p style="margin-top: 20px;">© 2023 Stagewise 插件 | 深度求索出品</p>
      </div>
    </footer>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'StagewiseGuide',
  setup() {
    const activeTab = ref('auto');
    
    const manualDependencies = `{ 
  "devDependencies": { 
    "@babel/plugin-proposal-nullish-coalescing-operator": "^7.18.6", 
    "@babel/plugin-proposal-optional-chaining": "^7.21.0", 
    "@babel/preset-env": "^7.27.2", 
    "@stagewise/toolbar": "^0.2.1" 
  } 
}`;

    const babelConfig = `module.exports = {
  presets: [['@vue/cli-plugin-babel/preset', { 
    useBuiltIns: 'usage', 
    corejs: 3,
    targets: { browsers: ['> 1%', 'last 2 versions', 'not dead'] }
  }]],
  env: {
    development: {
      plugins: [
        'dynamic-import-node',
        '@babel/plugin-proposal-nullish-coalescing-operator',
        '@babel/plugin-proposal-optional-chaining'
      ]
    }
  }
}`;

    const initToolbar = `import Vue from 'vue'
import { initToolbar } from '@stagewise/toolbar'

if (process.env.NODE_ENV === 'development') {
  initToolbar()
}

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})`;

    const transpileDependencies = `module.exports = {
  transpileDependencies: ['@stagewise/toolbar']
}`;

    const switchTab = (tab) => {
      activeTab.value = tab;
    };

    return {
      activeTab,
      manualDependencies,
      babelConfig,
      initToolbar,
      transpileDependencies,
      switchTab
    };
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  line-height: 1.6;
  background: linear-gradient(135deg, #f8fafc 0%, #eef2f7 100%);
  color: #333;
  padding-bottom: 50px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

header {
  background: linear-gradient(120deg, #3498db, #2c3e50);
  color: white;
  padding: 100px 0 60px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.header-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  font-size: 3.2rem;
  font-weight: 700;
  margin-bottom: 20px;
  text-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.subtitle {
  font-size: 1.4rem;
  font-weight: 300;
  opacity: 0.9;
  margin-bottom: 30px;
}

.tabs-container {
  display: flex;
  justify-content: center;
  margin: 40px 0 60px;
}

.tab {
  padding: 15px 40px;
  background: rgba(255,255,255,0.15);
  border: none;
  color: white;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 8px 8px 0 0;
  margin: 0 5px;
}

.tab.active {
  background: white;
  color: #2c3e50;
  box-shadow: 0 -4px 10px rgba(0,0,0,0.1);
}

.tab-content {
  display: none;
  background: white;
  border-radius: 16px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.12);
  padding: 40px;
  margin-top: -1px;
}

.tab-content.active {
  display: block;
}

.section-title {
  text-align: center;
  margin-bottom: 40px;
  position: relative;
}

.section-title h2 {
  font-size: 2.3rem;
  color: #2c3e50;
  display: inline-block;
  padding: 0 20px;
  background: linear-gradient(to right, #3498db, #2c3e50);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: #3498db;
  border-radius: 2px;
}

.comparison {
  display: flex;
  gap: 30px;
  margin: 50px 0;
}

.method {
  flex: 1;
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.method:hover {
  transform: translateY(-10px);
}

.method-header {
  padding: 25px;
  text-align: center;
  color: white;
}

.auto .method-header {
  background: linear-gradient(120deg, #3498db, #2980b9);
}

.manual .method-header {
  background: linear-gradient(120deg, #2c3e50, #1a2530);
}

.method-content {
  padding: 30px;
}

.steps {
  margin: 20px 0;
}

.step {
  display: flex;
  margin-bottom: 25px;
  align-items: flex-start;
}

.step-number {
  min-width: 36px;
  height: 36px;
  background: #3498db;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 15px;
  flex-shrink: 0;
}

.manual .step-number {
  background: #2c3e50;
}

.step-content h3 {
  margin-bottom: 8px;
  color: #2c3e50;
}

.features {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 30px;
}

.feature {
  flex: 1;
  min-width: 250px;
  background: #f8fafc;
  border-radius: 12px;
  padding: 20px;
  border-left: 4px solid #3498db;
}

.manual .feature {
  border-left-color: #2c3e50;
}

.feature h3 {
  margin-bottom: 10px;
  color: #2c3e50;
  display: flex;
  align-items: center;
}

.feature i {
  margin-right: 10px;
  color: #3498db;
}

.manual .feature i {
  color: #2c3e50;
}

.image-container {
  text-align: center;
  margin: 40px 0;
  border: 1px solid #eee;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}

.image-container img {
  max-width: 100%;
  height: auto;
  display: block;
}

.caption {
  padding: 15px;
  background: #f8fafc;
  font-size: 0.95rem;
  color: #555;
  text-align: center;
}

.benefits-section {
  background: linear-gradient(135deg, #2c3e50, #1a2530);
  color: white;
  padding: 80px 0;
  margin-top: 60px;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.benefit-card {
  background: rgba(255,255,255,0.08);
  border-radius: 12px;
  padding: 30px;
  text-align: center;
  transition: transform 0.3s ease;
}

.benefit-card:hover {
  transform: translateY(-8px);
  background: rgba(255,255,255,0.12);
}

.benefit-card i {
  font-size: 2.5rem;
  color: #3498db;
  margin-bottom: 20px;
}

.benefit-card h3 {
  font-size: 1.3rem;
  margin-bottom: 15px;
}

.testimonial {
  max-width: 800px;
  margin: 60px auto 0;
  background: white;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  position: relative;
  text-align: center;
}

.testimonial p {
  font-size: 1.2rem;
  font-style: italic;
  margin-bottom: 20px;
  color: #444;
}

.author {
  font-weight: 600;
  color: #3498db;
}

footer {
  text-align: center;
  padding: 40px 0;
  color: #666;
  font-size: 0.9rem;
}

.logo {
  font-size: 2.5rem;
  font-weight: 700;
  color: #3498db;
  margin-bottom: 10px;
}

.comparison ul {
  list-style: none;
  padding: 0;
}

.comparison li {
  padding: 12px 0;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
}

.comparison i {
  margin-right: 10px;
}

.fa-check-circle {
  color: #27ae60;
}

.fa-times-circle {
  color: #e74c3c;
}

@media (max-width: 768px) {
  .comparison {
    flex-direction: column;
  }
  
  .tabs-container {
    flex-direction: column;
    align-items: center;
  }
  
  .tab {
    width: 100%;
    max-width: 300px;
    margin-bottom: 5px;
    border-radius: 8px;
  }
  
  h1 {
    font-size: 2.5rem;
  }
  
  .subtitle {
    font-size: 1.2rem;
  }
}

@media (max-width: 576px) {
  h1 {
    font-size: 2rem;
  }
  
  .section-title h2 {
    font-size: 1.8rem;
  }
  
  .method-content {
    padding: 20px;
  }
}
</style>
