import React from 'react';

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: 'fas fa-rocket',
      title: '快速开发',
      description: '大幅提升开发效率，减少重复性工作，让您专注于核心业务逻辑'
    },
    {
      icon: 'fas fa-shield-alt',
      title: '稳定可靠',
      description: '经过大量项目验证，确保在各种环境下的稳定性和兼容性'
    },
    {
      icon: 'fas fa-users',
      title: '社区支持',
      description: '活跃的开发者社区，丰富的文档和教程，快速解决问题'
    },
    {
      icon: 'fas fa-cog',
      title: '高度可配置',
      description: '灵活的配置选项，满足不同项目的个性化需求'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: '跨平台兼容',
      description: '支持多种前端框架和构建工具，适应各种开发环境'
    },
    {
      icon: 'fas fa-chart-line',
      title: '性能优化',
      description: '内置性能优化策略，确保应用的高性能运行'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-700 to-slate-800 text-white py-20">
      <div className="container mx-auto px-5 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Stagewise 核心功能</h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto rounded"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center transition-all duration-300 hover:bg-white/15 hover:-translate-y-2"
            >
              <i className={`${benefit.icon} text-4xl text-blue-400 mb-5 block`}></i>
              <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-10 text-center">
          <p className="text-xl italic mb-5 text-gray-200">
            "Stagewise 让我们的开发效率提升了 300%，从繁琐的配置工作中解放出来，真正专注于产品创新。"
          </p>
          <div className="font-semibold text-blue-400">
            —— 资深前端开发工程师
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection; 