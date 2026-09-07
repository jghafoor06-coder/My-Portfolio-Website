import { useEffect } from 'react';
import './index.css';

import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Hero from './sections/Hero';
import Intro from './sections/Intro';
import Work from './sections/Work';
import Expertise from './sections/Expertise';
import Toolkit from './sections/Toolkit';
import Platforms from './sections/Platforms';
import About from './sections/About';
import Process from './sections/Process';
import Brand from './sections/Brand';
import Contact from './sections/Contact';

import { useLenis } from './hooks/useLenis';

export default function App() {
  useLenis();

  // Detect touch device and add class to body
  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) {
      document.body.classList.add('touch-device');
    }
  }, []);

  return (
    <>
      {/* Custom cursor — only rendered on non-touch */}
      <CustomCursor />

      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main>
        <Hero />
        <Intro />
        <Work />
        <Expertise />
        <Toolkit />
        <Platforms />
        <About />
        <Process />
        <Brand />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
