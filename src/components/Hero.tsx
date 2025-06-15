import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/90 to-primary h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://picsum.photos/id/1015/1920/1080')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-bold text-white leading-tight mb-4">
            探索技术与创意的边界
          </h1>
          <p className="text-[clamp(1rem,2vw,1.25rem)] text-white/90 mb-8 max-w-2xl">
            分享编程、设计和生活的思考，记录技术成长的每一步。在这里，发现代码与艺术的完美结合。
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/articles"
              className="px-6 py-3 bg-white text-primary font-medium rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              浏览文章
            </Link>
            <Link
              to="/about"
              className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-full hover:bg-white/10 transition-all"
            >
              了解更多
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-neutral-100 to-transparent"></div>
    </section>
  );
};

export default Hero; 