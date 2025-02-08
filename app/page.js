'use client';
import { useEffect } from 'react';
import Hero from './components/hero';
import About from './components/about';
import Works from './components/works';
import CtaSection from './components/ctaSection';
import Services from './components/services';
import Footer from './components/footer';

const Page = () => {


  useEffect(() => {
    if (typeof window !== 'undefined') {
      const scrollToTop = () => {
        console.log('Scrolling to top...');
        window.scrollTo(0, 0);
      };

      const timer = setTimeout(scrollToTop, 100); // Adjust the delay as needed
      return () => clearTimeout(timer);
    }
  }, []);

  return (

    <>
      <Hero />
      <About />
      <Works />
      <CtaSection />
      <Services />
      <Footer />

    </>


  );
};

export default Page;
