import React, { useState } from 'react';
import StageWiseHeader from '@/components/stagewise/StageWiseHeader';
import AutoInstallTab from '@/components/stagewise/AutoInstallTab';
import ManualInstallTab from '@/components/stagewise/ManualInstallTab';
import ComparisonSection from '@/components/stagewise/ComparisonSection';
import BenefitsSection from '@/components/stagewise/BenefitsSection';

const Stagewise: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'auto' | 'manual'>('auto');

  return (
    <div className="font-inter bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
      <StageWiseHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="container mx-auto px-5 max-w-6xl">
        {activeTab === 'auto' ? <AutoInstallTab /> : <ManualInstallTab />}
        <ComparisonSection />
      </div>
      
      <BenefitsSection />
      
      <footer className="text-center py-10 text-gray-600 text-sm">
        <div className="text-2xl font-bold text-blue-500 mb-2">Stagewise</div>
        <p>&copy; 2024 Stagewise 插件安装指南. 保留所有权利.</p>
      </footer>
    </div>
  );
};

export default Stagewise; 