import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Programs from '../Components/Programs';
import WhyChooseUs from '../Components/WhyChooseUs';
import Gallery from '../Components/Gallery';
import Testimonials from '../Components/Testimonials';
import CTA from '../Components/CTA';
import Footer from '../Components/Footer';
import FloatingWhatsApp from '../Components/FloatingWhatsApp';

export default function Welcome() {
  return (
    <div className="w-full min-h-screen bg-white font-['Poppins',sans-serif] overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <WhyChooseUs />
      <Gallery />
      {/* <Testimonials /> */}
      <CTA />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
