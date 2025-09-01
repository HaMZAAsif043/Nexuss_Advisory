import React from 'react';
import HeroSection from '@/components/HeroSection/HeroSection';
import AreasOfFocus from '@/components/AreasOfFocus/AreasOfFocus';
import BusinessSection from '@/components/BusinessSection/BusinessSection';
import EventSchedule from '@/components/EventSchedule/EventSchedule';
import AuditSection from '@/components/AuditSection/AuditSection';
import ServicesGrid from '@/components/ServicesGrid/ServicesGrid';
import ArticlesSection from '@/components/ArticlesSection/ArticlesSection';
import ContactSection from '@/components/ContactSection/ContactSection';

const Page = () => {
  return (
    <div>
      <HeroSection />
      <AreasOfFocus />
      <BusinessSection />
      <EventSchedule />
      <AuditSection />
      <ServicesGrid />
      <ArticlesSection />
      <ContactSection />
    </div>
  );
};

export default Page;
