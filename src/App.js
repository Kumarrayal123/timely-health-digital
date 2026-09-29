import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import Approach from './components/Approach';
import Results from './components/Results';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';
import Plans from './components/Plans';
import WhoWeServe from './components/WhoWeServe';
import Pain from './components/Pain';
import Solution from './components/Solution';

export default function App() {
  return (
    <div className="font-sans text-gray-900 bg-white antialiased selection:bg-primary/20 selection:text-primary">
      <Header />
      <main>
        <Hero />
          <About />
        <Services />
        <WhoWeServe/>
        <Pain/>
        <Solution/>
        <WhyChooseUs />
        <Approach />
        {/* <Results /> */}
        <Plans />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}
