import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
              <i className="fa fa-feather text-xl"></i>
            </div>
            <span className="text-xl font-bold text-neutral-700">星夜笔记</span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-primary font-medium hover:text-primary/80 transition-colors">
              首页
            </Link>
            <Link to="/articles" className="text-neutral-500 font-medium hover:text-primary transition-colors">
              文章
            </Link>
            <Link to="/categories" className="text-neutral-500 font-medium hover:text-primary transition-colors">
              分类
            </Link>
            <Link to="/about" className="text-neutral-500 font-medium hover:text-primary transition-colors">
              关于我
            </Link>
            <Link to="/contact" className="text-neutral-500 font-medium hover:text-primary transition-colors">
              联系方式
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="text-neutral-500 hover:text-primary transition-colors">
              <i className="fa fa-search text-lg"></i>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-neutral-500 hover:text-primary transition-colors"
            >
              <i className="fa fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-200 animate-fade-in">
          <div className="container mx-auto px-4 py-3 space-y-3">
            <Link to="/" className="block py-2 text-primary font-medium">
              首页
            </Link>
            <Link to="/articles" className="block py-2 text-neutral-500 hover:text-primary transition-colors">
              文章
            </Link>
            <Link to="/categories" className="block py-2 text-neutral-500 hover:text-primary transition-colors">
              分类
            </Link>
            <Link to="/about" className="block py-2 text-neutral-500 hover:text-primary transition-colors">
              关于我
            </Link>
            <Link to="/contact" className="block py-2 text-neutral-500 hover:text-primary transition-colors">
              联系方式
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar; 