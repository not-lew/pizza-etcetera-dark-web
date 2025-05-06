
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import MenuHighlights from '../components/MenuHighlights';
import Menu from '../components/Menu';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  // Initialize intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all elements with animation classes
    document.querySelectorAll('.animate-fade-in, .animate-fade-in-right').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-pizza-dark text-white">
      <Header />
      <Hero />
      <About />
      <MenuHighlights />
      <Menu />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
