import React from 'react';

interface StageWiseHeaderProps {
  activeTab: 'auto' | 'manual';
  setActiveTab: (tab: 'auto' | 'manual') => void;
}

const StageWiseHeader: React.FC<StageWiseHeaderProps> = ({ activeTab, setActiveTab }) => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-slate-700 text-white py-24 px-0 text-center relative overflow-hidden">
      <div className="container mx-auto px-5 relative z-10 max-w-4xl">
        <h1 className="text-5xl font-bold mb-5 text-shadow-lg">
          Stagewise 插件安装指南
        </h1>
        <p className="text-xl font-light opacity-90 mb-8">
          一键自动安装或手动配置 - 选择最适合您的方式
        </p>
        
        <div className="flex justify-center mt-10 mb-16">
          <button
            onClick={() => setActiveTab('auto')}
            className={`px-10 py-4 text-lg font-medium cursor-pointer transition-all duration-300 rounded-t-lg mx-1 ${
              activeTab === 'auto'
                ? 'bg-white text-slate-700 shadow-lg'
                : 'bg-white/15 text-white hover:bg-white/25'
            }`}
          >
            自动安装
          </button>
          <button
            onClick={() => setActiveTab('manual')}
            className={`px-10 py-4 text-lg font-medium cursor-pointer transition-all duration-300 rounded-t-lg mx-1 ${
              activeTab === 'manual'
                ? 'bg-white text-slate-700 shadow-lg'
                : 'bg-white/15 text-white hover:bg-white/25'
            }`}
          >
            手动安装
          </button>
        </div>
      </div>
    </header>
  );
};

export default StageWiseHeader; 