import React from 'react';
import HeroSection from '@/components/HeroSection/HeroSection';
import AreasOfFocus from '@/components/AreasOfFocus/AreasOfFocus';
import BusinessSection from '@/components/BusinessSection/BusinessSection';
import AuditSection from '@/components/AuditSection/AuditSection';
// import ServicesGrid from '@/components/ServicesGrid/ServicesGrid';
import ArticlesSection from '@/components/ArticlesSection/ArticlesSection';

const Page = () => {
  return (
    <div>
      <HeroSection />
      <AreasOfFocus />
      <BusinessSection />
      <AuditSection />
      {/* <ServicesGrid /> */}
      <ArticlesSection />
    </div>
  );
};

export default Page;
