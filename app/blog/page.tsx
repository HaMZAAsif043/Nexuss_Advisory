"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BlogList from '@/components/Blog/BlogList';
import BlogForm from '@/components/Blog/BlogForm';
import BlogDetail from '@/components/Blog/BlogDetail';
import { Plus} from 'lucide-react';

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  date: string;
  image?: string;
  tags?: string[];
}

// Mock data
const initialPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Financial Advisory Services',
    content: `Financial advisory services are evolving rapidly in today's digital age. With the integration of artificial intelligence, machine learning, and advanced analytics, financial advisors can now provide more personalized and accurate advice to their clients.

The traditional model of financial advisory, which relied heavily on human intuition and basic financial metrics, is being enhanced by sophisticated algorithms that can process vast amounts of data in real-time. This transformation is not about replacing human advisors but rather empowering them with better tools and insights.

Key trends shaping the future include:

1. **Robo-Advisory Platforms**: Automated investment management services that use algorithms to build and manage investment portfolios based on individual risk tolerance and financial goals.

2. **Behavioral Finance Integration**: Understanding how psychological factors influence financial decisions and incorporating this knowledge into advisory services.

3. **Real-time Data Analytics**: Providing clients with up-to-the-minute insights about their financial portfolio performance and market conditions.

4. **Personalized Financial Planning**: Creating highly customized financial plans that adapt to changing life circumstances and market conditions.

The future of financial advisory lies in the seamless integration of technology and human expertise, creating a more efficient, accessible, and effective advisory experience for clients of all backgrounds.`,
    excerpt: 'Exploring how technology is revolutionizing financial advisory services and what it means for the future of wealth management.',
    author: 'Sarah Johnson',
    date: '2025-09-18',
    image: '/services/financial.jpg',
    tags: ['Finance', 'Technology', 'Advisory']
  },
  {
    id: '2',
    title: 'Understanding Tax Compliance in 2025',
    content: `Tax compliance has become increasingly complex in 2025, with new regulations and digital reporting requirements that businesses must navigate carefully. This comprehensive guide will help you understand the key changes and ensure your business remains compliant.

The landscape of tax compliance has shifted dramatically with the introduction of digital-first approaches and real-time reporting requirements. Businesses are now expected to maintain more detailed records and provide greater transparency in their financial operations.

Major Changes in 2025:

1. **Digital Reporting Mandates**: Most businesses are now required to submit tax information through digital platforms, with stricter deadlines and format requirements.

2. **Enhanced Due Diligence**: Tax authorities have implemented more sophisticated audit trails and cross-referencing systems to identify discrepancies.

3. **International Compliance**: For businesses operating across borders, new international tax agreements require careful coordination and reporting.

4. **Environmental Tax Considerations**: New carbon taxes and environmental compliance requirements that affect various industries.

Best Practices for Compliance:

- Implement robust accounting software that integrates with tax reporting systems
- Maintain detailed documentation for all financial transactions
- Regular internal audits to identify potential compliance issues
- Stay updated with regulatory changes through professional advisory services
- Consider outsourcing complex tax matters to certified professionals

The key to successful tax compliance in 2025 is proactive planning and leveraging technology to streamline processes while maintaining accuracy and transparency.`,
    excerpt: 'A comprehensive guide to navigating the complex tax landscape of 2025 and ensuring your business stays compliant.',
    author: 'Michael Chen',
    date: '2025-09-15',
    image: '/services/accounting.jpg',
    tags: ['Tax', 'Compliance', 'Business']
  },
  {
    id: '3',
    title: 'Investment Strategies for Market Volatility',
    content: `Market volatility is an inevitable part of investing, but with the right strategies, investors can not only weather the storms but potentially benefit from market fluctuations. This article explores proven techniques for managing investment portfolios during uncertain times.

Understanding Market Volatility:

Market volatility refers to the degree of variation in trading prices over time. While it can be unsettling for investors, volatility also presents opportunities for those who understand how to navigate it effectively.

Key Strategies for Volatile Markets:

1. **Diversification**: Spreading investments across different asset classes, sectors, and geographic regions to reduce overall portfolio risk.

2. **Dollar-Cost Averaging**: Investing a fixed amount regularly regardless of market conditions, which can help reduce the impact of market timing.

3. **Defensive Positioning**: Increasing allocation to defensive assets like bonds, utilities, and consumer staples during uncertain periods.

4. **Opportunistic Buying**: Using market downturns as opportunities to purchase quality assets at discounted prices.

5. **Risk Management**: Setting stop-losses and regularly rebalancing portfolios to maintain desired risk levels.

Long-term Perspective:

Historical data shows that markets tend to recover from volatility over time. Investors who maintain a long-term perspective and stick to their investment strategy often outperform those who make emotional decisions based on short-term market movements.

The Role of Professional Guidance:

Working with a qualified financial advisor can provide valuable perspective during volatile periods. Professional advisors can help investors stay focused on long-term goals and avoid common emotional pitfalls that lead to poor investment decisions.`,
    excerpt: 'Learn effective strategies for managing your investment portfolio during periods of market uncertainty and volatility.',
    author: 'David Rodriguez',
    date: '2025-09-12',
    image: '/services/investment.jpg',
    tags: ['Investment', 'Strategy', 'Market Analysis']
  },
  {
    id: '4',
    title: 'Digital Transformation in Accounting',
    content: `The accounting industry is undergoing a significant digital transformation, fundamentally changing how financial data is processed, analyzed, and reported. This shift is not just about adopting new software—it's about reimagining the entire accounting workflow.

The Evolution of Accounting Technology:

From manual ledgers to cloud-based accounting systems, the journey of accounting technology has been remarkable. Today's accounting professionals have access to tools that can automate routine tasks, provide real-time insights, and enable more strategic decision-making.

Key Technologies Driving Change:

1. **Artificial Intelligence**: AI-powered systems can categorize transactions, detect anomalies, and even predict future financial trends.

2. **Blockchain Technology**: Providing unprecedented transparency and security in financial transactions and record-keeping.

3. **Cloud Computing**: Enabling real-time collaboration and access to financial data from anywhere in the world.

4. **Robotic Process Automation (RPA)**: Automating repetitive tasks such as data entry, reconciliations, and report generation.

5. **Advanced Analytics**: Turning financial data into actionable business insights through sophisticated analytical tools.

Benefits of Digital Transformation:

- Increased accuracy and reduced human error
- Real-time financial reporting and insights
- Improved compliance and audit trails
- Enhanced collaboration between teams and stakeholders
- Cost reduction through automation
- Better client service through faster turnaround times

Challenges and Considerations:

While digital transformation offers numerous benefits, it also presents challenges including data security concerns, the need for staff training, and the initial investment in new technologies.

The Future Outlook:

The future of accounting lies in the intelligent automation of routine tasks, allowing professionals to focus on strategic advisory services and high-value analysis that drives business growth.`,
    excerpt: 'Discover how digital transformation is revolutionizing the accounting industry and what it means for businesses and professionals.',
    author: 'Lisa Wang',
    date: '2025-09-10',
    image: '/services/accounting.jpg',
    tags: ['Digital Transformation', 'Accounting', 'Technology']
  }
];

const BlogPage = () => {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Calculate pagination
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = posts.slice(startIndex, startIndex + postsPerPage);

  const handleAddPost = (newPost: Omit<BlogPost, 'id' | 'date'>) => {
    const post: BlogPost = {
      ...newPost,
      id: Date.now().toString(),
      date: new Date().toISOString().split('T')[0]
    };
    setPosts([post, ...posts]);
    setShowForm(false);
  };

  const handlePostClick = (post: BlogPost) => {
    setSelectedPost(post);
  };

  const handleCloseDetail = () => {
    setSelectedPost(null);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <section className="relative py-16 bg-gradient-to-r from-[#4DC6D7] to-[#0798B1] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Nexuss Advisory Blog
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Insights, expertise, and industry knowledge from our financial experts
            </p>
            <motion.button
              onClick={() => setShowForm(true)}
              className="bg-white text-[#0798B1] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center space-x-2 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Plus className="w-5 h-5" />
              <span>Write New Post</span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <BlogList
          posts={currentPosts}
          onPostClick={handlePostClick}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>

      {/* Blog Detail Modal */}
      <AnimatePresence>
        {selectedPost && (
          <BlogDetail
            post={selectedPost}
            onClose={handleCloseDetail}
          />
        )}
      </AnimatePresence>

      {/* Blog Form Modal */}
      <AnimatePresence>
        {showForm && (
          <BlogForm
            onSubmit={handleAddPost}
            onClose={handleCloseForm}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default BlogPage;