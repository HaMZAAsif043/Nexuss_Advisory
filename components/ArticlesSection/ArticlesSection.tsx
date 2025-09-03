"use client"
import React from 'react';
import Image from 'next/image';
// import { motion } from 'framer-motion';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
}

const ArticlesSection = () => {
  // This would typically come from a CMS or API
  const articles: Article[] = [
    {
      id: "1",
      title: "10 Essential Tax Planning Strategies for 2025",
      excerpt: "Discover the most effective tax planning strategies to optimize your financial position for the upcoming year.",
      author: "Sarah Johnson",
      date: "August 28, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Tax Planning"
    },
    {
      id: "2", 
      title: "Understanding Investment Portfolio Diversification",
      excerpt: "Learn how to build a well-diversified investment portfolio that balances risk and returns effectively.",
      author: "Michael Chen",
      date: "August 25, 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Investment"
    },
    {
      id: "3",
      title: "Small Business Financial Management Best Practices",
      excerpt: "Essential financial management tips every small business owner should implement for sustainable growth.",
      author: "Emily Rodriguez",
      date: "August 22, 2025", 
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Business"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#545454] mb-4">
            Latest articles & tips
          </h2>
          <p className="text-[#545454]/80 max-w-2xl mx-auto">
            Stay informed with expert insights, industry trends, and practical financial advice 
            from our team of experienced advisors.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article) => (
            <article key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
              {/* Article Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#4DC6D7] text-white px-3 py-1 rounded-full text-xs font-medium">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#545454] mb-3 group-hover:text-[#4DC6D7] transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-[#545454]/80 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                {/* Article Meta */}
                <div className="flex items-center justify-between text-sm text-[#545454]/70">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-[#545454]/10 rounded-full flex items-center justify-center">
                      <span className="text-xs font-medium">
                        {article.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Read More Link */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center text-[#4DC6D7] font-medium group-hover:text-[#3bb5c6]">
                    <span>Read More</span>
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-[#545454] mb-4">
            Stay Updated
          </h3>
          <p className="text-[#545454]/80 mb-6">
            Subscribe to our newsletter for weekly financial tips and market insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-[#545454]/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
            <button className="bg-[#4DC6D7] hover:bg-[#3bb5c6] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap shadow-lg hover:shadow-xl">
              Subscribe
            </button>
          </div>
        </div>

        {/* View All Articles Link */}
        <div className="text-center mt-8">
          <button className="text-[#4DC6D7] hover:text-[#3bb5c6] font-medium transition-colors duration-300">
            View All Articles →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
