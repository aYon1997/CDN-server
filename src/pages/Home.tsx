import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedArticles from '@/components/FeaturedArticles';

const Home: React.FC = () => {
  return (
    <div className="font-inter bg-neutral-100 text-neutral-700 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16 md:pt-20">
        <Hero />
        <FeaturedArticles />
      </main>
    </div>
  );
};

export default Home; 