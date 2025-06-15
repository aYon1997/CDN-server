import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedArticles: React.FC = () => {
  const articles = [
    {
      id: 1,
      title: '深入理解 React Hooks',
      excerpt: '探索 React Hooks 的核心概念和最佳实践，提升你的 React 开发技能。',
      image: 'https://picsum.photos/id/0/800/600',
      category: 'React',
      date: '2024-03-15',
    },
    {
      id: 2,
      title: 'TypeScript 高级类型指南',
      excerpt: '掌握 TypeScript 的高级类型系统，编写更安全、更可维护的代码。',
      image: 'https://picsum.photos/id/1/800/600',
      category: 'TypeScript',
      date: '2024-03-10',
    },
  ];

  return (
    <section className="py-16 -mt-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all hover:shadow-2xl">
          <div className="md:flex">
            {articles.map((article) => (
              <div key={article.id} className="md:w-1/2">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                      {article.category}
                    </span>
                    <span className="text-neutral-400 text-sm">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                  <p className="text-neutral-500 mb-4">{article.excerpt}</p>
                  <Link
                    to={`/articles/${article.id}`}
                    className="text-primary font-medium hover:text-primary/80 transition-colors"
                  >
                    阅读更多 →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles; 