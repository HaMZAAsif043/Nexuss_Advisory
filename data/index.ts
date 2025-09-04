// Export all data modules for easy importing
export * from './services';
export * from './social';
export * from './navigation';
export * from './company';
export * from './content';

// Quick access to commonly used data
export { services, getServiceById } from './services';
export { socialLinks, contactInfo, getActiveSocialLinks } from './social';
export { mainNavigation, footerNavigation, quickActions } from './navigation';
export { companyInfo, brandColors, defaultMetaData } from './company';
export { blogPosts, caseStudies, faqs, getFeaturedBlogPosts } from './content';
