import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Leadership from './sections/Leadership';
import Contact from './sections/Contact';
import Navigation from './sections/Navigation';
import Cursor from './components/Cursor';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef<HTMLDivElement>(null);
  const cursorGlowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Cursor glow effect
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorGlowRef.current) {
        gsap.to(cursorGlowRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.3,
          ease: 'power2.out',
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Initialize ScrollTrigger
    ScrollTrigger.refresh();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={mainRef} className="relative min-h-screen bg-[#010101]">
      {/* Noise Overlay */}
      <div className="noise-overlay" />
      
      {/* Cursor Glow */}
      <div ref={cursorGlowRef} className="cursor-glow hidden lg:block" />
      
      {/* Custom Cursor */}
      <Cursor />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Leadership />
        <Contact />
      </main>
    </div>
  );
}

export default App;
