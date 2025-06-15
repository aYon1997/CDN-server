import React from 'react';

const AutoInstallTab: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: '在扩展市场中安装 Stagewise',
      description: '打开 Cursor 编辑器，进入扩展市场，搜索 "stagewise" 并安装'
    },
    {
      number: 2,
      title: '激活 Stagewise 自动设置',
      description: '使用快捷键 Ctrl + Shift + J 或在命令面板中搜索 "Stagewise Auto-setup"'
    },
    {
      number: 3,
      title: '自动配置过程',
      description: 'Stagewise 会自动在对话框中输入提示词，识别您的前端技术栈'
    },
    {
      number: 4,
      title: '安装依赖',
      description: '根据识别结果，自动安装所需的依赖包到项目中'
    }
  ];

  const features = [
    {
      icon: 'fas fa-bolt',
      title: '自动识别技术栈',
      description: '智能检测项目中的前端框架和技术栈，自动配置对应环境'
    },
    {
      icon: 'fas fa-cogs',
      title: '零配置集成',
      description: '无需手动修改配置文件，所有配置自动完成'
    },
    {
      icon: 'fas fa-history',
      title: '快速回滚',
      description: '如不满意自动配置，可一键恢复到原始状态'
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-10 mb-16 -mt-2">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-slate-700 bg-clip-text text-transparent mb-4">
          自动安装 Stagewise
        </h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto rounded"></div>
      </div>

      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="p-6 text-center">
          <h2 className="text-2xl font-semibold mb-2">
            <i className="fas fa-robot mr-3"></i>
            推荐方式：一键自动安装
          </h2>
          <p className="opacity-90">最快捷的安装方式，适用于大多数开发者</p>
        </div>

        <div className="bg-white text-gray-800 p-8">
          <div className="mb-8">
            {steps.map((step) => (
              <div key={step.number} className="flex mb-6 items-start">
                <div className="min-w-9 h-9 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-700 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mb-8 border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <img
              src="https://p3-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/685b4ed9614b417c80e59a9cd3e71ae5~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5LiA5b-D5Y-q6K-75Zyj6LSk5Lmm:q75.awebp?rk3s=f64ab15b&x-expires=1749524161&x-signature=IhUb%2FsEwo7TlivabNY346tdbEaw%3D"
              alt="Stagewise 自动安装界面"
              className="w-full h-auto block"
            />
            <div className="p-4 bg-slate-50 text-sm text-gray-600 text-center">
              点击 stagewise 后会自动在 cursor 对话框输入提示词
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-5 border-l-4 border-blue-500">
                <h3 className="font-semibold text-slate-700 mb-2 flex items-center">
                  <i className={`${feature.icon} text-blue-500 mr-2`}></i>
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

export default AutoInstallTab; 