'use client';
import { useEffect } from 'react';
import Lenis from 'lenis';
import Hero from './components/hero';
import About from './components/about';
import Works from './components/works';
import CtaSection from './components/ctaSection';
import Services from './components/services';
import Footer from './components/footer';
const Page = () => {



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
