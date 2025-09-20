import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, Save, AlertCircle } from 'lucide-react';

interface BlogFormData {
  title: string;
  content: string;
  excerpt: string;
  author: string;
  image: string;
  tags: string[];
}

interface BlogFormProps {
  onClose: () => void;
  onSubmit: (data: BlogFormData) => void;
}

const BlogForm: React.FC<BlogFormProps> = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState<BlogFormData>({
    title: '',
    content: '',
    excerpt: '',
    author: '',
    image: '',
    tags: []
  });

  const [tagInput, setTagInput] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    } else if (formData.title.length < 3) {
      newErrors.title = 'Title must be at least 3 characters';
    }

    if (!formData.content.trim()) {
      newErrors.content = 'Content is required';
    } else if (formData.content.length < 50) {
      newErrors.content = 'Content must be at least 50 characters';
    }

    if (!formData.excerpt.trim()) {
      newErrors.excerpt = 'Excerpt is required';
    } else if (formData.excerpt.length < 20) {
      newErrors.excerpt = 'Excerpt must be at least 20 characters';
    }

    if (!formData.author.trim()) {
      newErrors.author = 'Author is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit(formData);
      // Reset form
      setFormData({
        title: '',
        content: '',
        excerpt: '',
        author: '',
        image: '',
        tags: []
      });
      setTagInput('');
      setErrors({});
      onClose();
    }
  };

  const handleAddTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim()) && formData.tags.length < 5) {
      setFormData({
        ...formData,
        tags: [...formData.tags, tagInput.trim()]
      });
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter(tag => tag !== tagToRemove)
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddTag();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0  bg-black/50 backdrop-blur-sm z-60 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 50 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-[#545454]">Create New Blog Post</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-[#545454]" />
            </button>
          </div>

          {/* Form */}
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title */}
              <div>
                <label className="block text-sm font-semibold text-[#545454] mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:border-[#4DC6D7] transition-colors ${
                    errors.title ? 'border-red-300' : 'border-gray-200'
                  }`}
                  placeholder="Enter blog post title..."
                  maxLength={100}
                />
                {errors.title && (
                  <div className="flex items-center space-x-1 mt-1 text-red-500 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errors.title}</span>
                  </div>
                )}
                <div className="text-right text-xs text-gray-500 mt-1">
                  {formData.title.length}/100
                </div>
              </div>

              {/* Author */}
              <div>
                <label className="block text-sm font-semibold text-[#545454] mb-2">
                  Author *
                </label>
                <input
                  type="text"
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:border-[#4DC6D7] transition-colors ${
                    errors.author ? 'border-red-300' : 'border-gray-200'
                  }`}
                  placeholder="Author name..."
                  maxLength={50}
                />
                {errors.author && (
                  <div className="flex items-center space-x-1 mt-1 text-red-500 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errors.author}</span>
                  </div>
                )}
              </div>

              {/* Image URL */}
              <div>
                <label className="block text-sm font-semibold text-[#545454] mb-2">
                  Featured Image URL
                </label>
                <div className="flex items-center space-x-3">
                  <Upload className="w-5 h-5 text-[#545454]" />
                  <input
                    type="url"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#4DC6D7] transition-colors"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
              </div>

              {/* Excerpt */}
              <div>
                <label className="block text-sm font-semibold text-[#545454] mb-2">
                  Excerpt *
                </label>
                <textarea
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:border-[#4DC6D7] transition-colors resize-none ${
                    errors.excerpt ? 'border-red-300' : 'border-gray-200'
                  }`}
                  placeholder="Brief description of the blog post..."
                  rows={3}
                  maxLength={200}
                />
                {errors.excerpt && (
                  <div className="flex items-center space-x-1 mt-1 text-red-500 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errors.excerpt}</span>
                  </div>
                )}
                <div className="text-right text-xs text-gray-500 mt-1">
                  {formData.excerpt.length}/200
                </div>
              </div>

              {/* Content */}
              <div>
                <label className="block text-sm font-semibold text-[#545454] mb-2">
                  Content *
                </label>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:border-[#4DC6D7] transition-colors resize-none ${
                    errors.content ? 'border-red-300' : 'border-gray-200'
                  }`}
                  placeholder="Write your blog post content here..."
                  rows={8}
                  maxLength={5000}
                />
                {errors.content && (
                  <div className="flex items-center space-x-1 mt-1 text-red-500 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errors.content}</span>
                  </div>
                )}
                <div className="text-right text-xs text-gray-500 mt-1">
                  {formData.content.length}/5000
                </div>
              </div>

              {/* Tags */}
              <div>
                <label className="block text-sm font-semibold text-[#545454] mb-2">
                  Tags (Max 5)
                </label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {formData.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#4DC6D7]/10 text-[#0798B1] text-sm rounded-full flex items-center space-x-1"
                    >
                      <span>{tag}</span>
                      <button
                        type="button"
                        onClick={() => handleRemoveTag(tag)}
                        className="text-[#0798B1] hover:text-red-500 transition-colors"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#4DC6D7] transition-colors"
                    placeholder="Add a tag..."
                    maxLength={20}
                    disabled={formData.tags.length >= 5}
                  />
                  <button
                    type="button"
                    onClick={handleAddTag}
                    disabled={!tagInput.trim() || formData.tags.length >= 5}
                    className="px-4 py-2 bg-[#4DC6D7] text-white rounded-xl hover:bg-[#0798B1] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Add
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-3 border-2 border-gray-300 text-[#545454] rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#4DC6D7] text-white rounded-xl hover:bg-[#0798B1] transition-colors flex items-center space-x-2"
                >
                  <Save className="w-5 h-5" />
                  <span>Create Post</span>
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BlogForm;