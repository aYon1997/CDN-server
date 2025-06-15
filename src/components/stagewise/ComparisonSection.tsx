import React from 'react';

const ComparisonSection: React.FC = () => {
  const autoFeatures = [
    { icon: 'fas fa-check-circle', text: '一键完成安装和配置', positive: true },
    { icon: 'fas fa-check-circle', text: '自动识别技术栈', positive: true },
    { icon: 'fas fa-check-circle', text: '无需技术背景知识', positive: true },
    { icon: 'fas fa-check-circle', text: '5分钟内完成安装', positive: true },
    { icon: 'fas fa-times-circle', text: '自定义选项有限', positive: false }
  ];

  const manualFeatures = [
    { icon: 'fas fa-check-circle', text: '完全控制配置细节', positive: true },
    { icon: 'fas fa-check-circle', text: '适用于特殊项目需求', positive: true },
    { icon: 'fas fa-check-circle', text: '深度理解集成原理', positive: true },
    { icon: 'fas fa-times-circle', text: '需要15-30分钟配置', positive: false },
    { icon: 'fas fa-times-circle', text: '需要前端构建知识', positive: false }
  ];

  return (
    <div className="mt-20 mb-16">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-slate-700 bg-clip-text text-transparent mb-4">
          安装方式对比
        </h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto rounded"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* 自动安装 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 text-center">
            <h2 className="text-2xl font-semibold mb-2">
              <i className="fas fa-robot mr-3"></i>
              自动安装
            </h2>
            <p className="opacity-90">推荐大多数开发者使用</p>
          </div>
          <div className="p-6">
            <ul className="space-y-3">
              {autoFeatures.map((feature, index) => (
                <li key={index} className="flex items-center py-3 border-b border-gray-100 last:border-b-0">
                  <i className={`${feature.icon} mr-3 ${feature.positive ? 'text-green-500' : 'text-red-500'}`}></i>
                  <span className="text-gray-700">{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 手动安装 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="bg-gradient-to-r from-slate-600 to-slate-700 text-white p-6 text-center">
            <h2 className="text-2xl font-semibold mb-2">
              <i className="fas fa-tools mr-3"></i>
              手动安装
            </h2>
            <p className="opacity-90">适合高级开发者</p>
          </div>
          <div className="p-6">
            <ul className="space-y-3">
              {manualFeatures.map((feature, index) => (
                <li key={index} className="flex items-center py-3 border-b border-gray-100 last:border-b-0">
                  <i className={`${feature.icon} mr-3 ${feature.positive ? 'text-green-500' : 'text-red-500'}`}></i>
                  <span className="text-gray-700">{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonSection; 