import React from 'react';
import { motion } from 'framer-motion';
import BlogCard from './BlogCard';
import { BlogPost } from '@/app/blog/page';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BlogListProps {
  posts: BlogPost[];
  onPostClick: (post: BlogPost) => void;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const BlogList: React.FC<BlogListProps> = ({
  posts,
  onPostClick,
  currentPage,
  totalPages,
  onPageChange
}) => {
  return (
    <div>
      {/* Posts Grid */}
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {posts.map((post, index) => (
          <BlogCard
            key={post.id}
            post={post}
            onClick={() => onPostClick(post)}
            index={index}
          />
        ))}
      </motion.div>

      {/* Pagination */}
      {totalPages > 1 && (
        <motion.div
          className="flex justify-center items-center space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`p-2 rounded-lg transition-colors duration-300 ${
              currentPage === 1
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-[#0798B1] hover:bg-[#0798B1] hover:text-white'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex space-x-2">
            {[...Array(totalPages)].map((_, index) => {
              const page = index + 1;
              return (
                <button
                  key={page}
                  onClick={() => onPageChange(page)}
                  className={`w-10 h-10 rounded-lg font-semibold transition-colors duration-300 ${
                    currentPage === page
                      ? 'bg-[#0798B1] text-white'
                      : 'text-[#0798B1] hover:bg-[#0798B1] hover:text-white'
                  }`}
                >
                  {page}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`p-2 rounded-lg transition-colors duration-300 ${
              currentPage === totalPages
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-[#0798B1] hover:bg-[#0798B1] hover:text-white'
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>
      )}

      {posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No blog posts found.</p>
        </div>
      )}
    </div>
  );
};

export default BlogList;