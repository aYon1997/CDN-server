import React from 'react';

const ManualInstallTab: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: '安装依赖',
      description: '在 package.json 中添加必要的开发依赖',
      code: `{ 
  "devDependencies": { 
    "@babel/plugin-proposal-nullish-coalescing-operator": "^7.18.6", 
    "@babel/plugin-proposal-optional-chaining": "^7.21.0", 
    "@babel/preset-env": "^7.27.2", 
    "@stagewise/toolbar": "^0.2.1" 
  } 
}`
    },
    {
      number: 2,
      title: '配置 Babel',
      description: '在 babel.config.js 中添加必要的预设和插件',
      code: `module.exports = {
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
}`
    },
    {
      number: 3,
      title: '初始化工具栏',
      description: '在 main.js 中初始化 Stagewise 工具栏',
      code: `import Vue from 'vue'
import { initToolbar } from '@stagewise/toolbar'

if (process.env.NODE_ENV === 'development') {
  initToolbar()
}

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})`
    },
    {
      number: 4,
      title: '转译依赖',
      description: '在 vue.config.js 中配置转译',
      code: `module.exports = {
  transpileDependencies: ['@stagewise/toolbar']
}`
    }
  ];

  const features = [
    {
      icon: 'fas fa-sliders-h',
      title: '完全控制',
      description: '精确控制每个配置细节，满足特殊项目需求'
    },
    {
      icon: 'fas fa-project-diagram',
      title: '复杂项目支持',
      description: '适用于有特殊配置要求或自定义构建流程的项目'
    },
    {
      icon: 'fas fa-graduation-cap',
      title: '学习价值',
      description: '深入了解工具集成原理，提升技术能力'
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-10 mb-16 -mt-2">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text text-transparent mb-4">
          手动安装 Stagewise
        </h2>
        <div className="w-20 h-1 bg-slate-600 mx-auto rounded"></div>
      </div>

      <div className="bg-gradient-to-r from-slate-600 to-slate-700 text-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="p-6 text-center">
          <h2 className="text-2xl font-semibold mb-2">
            <i className="fas fa-tools mr-3"></i>
            高级方式：手动配置
          </h2>
          <p className="opacity-90">完全控制安装过程，适用于自定义配置需求</p>
        </div>

        <div className="bg-white text-gray-800 p-8">
          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.number} className="flex items-start">
                <div className="min-w-9 h-9 bg-slate-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  {step.number}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-700 mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-3">{step.description}</p>
                  <pre className="bg-slate-50 p-4 rounded-lg text-sm overflow-x-auto border border-gray-200">
                    <code>{step.code}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-5 mt-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-5 border-l-4 border-slate-600">
                <h3 className="font-semibold text-slate-700 mb-2 flex items-center">
                  <i className={`${feature.icon} text-slate-600 mr-2`}></i>
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManualInstallTab; 