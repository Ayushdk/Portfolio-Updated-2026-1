import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const firstNameRef = useRef<HTMLHeadingElement>(null);
  const lastNameRef = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background zoom animation
      gsap.fromTo(
        bgRef.current,
        { scale: 1.2, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.8, ease: 'power2.out' }
      );

      // First name animation
      gsap.fromTo(
        firstNameRef.current,
        { y: '100%', opacity: 0 },
        { y: '0%', opacity: 1, duration: 1.2, delay: 0.2, ease: 'power3.out' }
      );

      // Last name animation
      gsap.fromTo(
        lastNameRef.current,
        { y: '100%', opacity: 0 },
        { y: '0%', opacity: 1, duration: 1.2, delay: 0.3, ease: 'power3.out' }
      );

      // Role text decode animation
      gsap.fromTo(
        roleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, delay: 0.8, ease: 'power2.out' }
      );

      // CTA button bounce
      gsap.fromTo(
        ctaRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, delay: 1, ease: 'back.out(1.7)' }
      );

      // Socials fade in
      gsap.fromTo(
        socialsRef.current,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.8, delay: 1.2, ease: 'power2.out' }
      );

      // Scroll parallax effects
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.set(firstNameRef.current, { y: progress * -200 });
          gsap.set(lastNameRef.current, { y: progress * -400 });
          gsap.set(roleRef.current, { filter: `blur(${progress * 10}px)` });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Mouse move parallax for text layers
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const moveX = (clientX - centerX) / centerX;
      const moveY = (clientY - centerY) / centerY;

      gsap.to(firstNameRef.current, {
        x: moveX * 20,
        y: moveY * 10,
        duration: 0.5,
        ease: 'power2.out',
      });

      gsap.to(lastNameRef.current, {
        x: moveX * 40,
        y: moveY * 20,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0"
        style={{ opacity: 0 }}
      >
        <img
          src="/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#010101]/50 via-transparent to-[#010101]" />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 grid-bg opacity-50 z-[1]" />

      {/* Content */}
      <div className="relative z-10 w-full px-6 lg:px-12 pt-20">
        <div className="max-w-7xl mx-auto">
          {/* Main Typography */}
          <div className="relative">
            {/* First Name - Outlined */}
            <div className="overflow-hidden">
              <h1
                ref={firstNameRef}
                className="font-display text-[15vw] md:text-[12vw] lg:text-[10vw] leading-[0.85] text-stroke select-none"
                style={{ opacity: 0 }}
              >
                AYUSH
              </h1>
            </div>

            {/* Last Name - Solid */}
            <div className="overflow-hidden -mt-2 md:-mt-4">
              <h1
                ref={lastNameRef}
                className="font-display text-[15vw] md:text-[12vw] lg:text-[10vw] leading-[0.85] text-white relative select-none"
                style={{ opacity: 0 }}
              >
                NAGAR
                {/* Shimmer effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
              </h1>
            </div>
          </div>

          {/* Role & CTA */}
          <div className="mt-8 md:mt-12 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <p
                ref={roleRef}
                className="text-lg md:text-xl lg:text-2xl text-white/80 font-light tracking-wide"
                style={{ opacity: 0 }}
              >
                FULL STACK DEVELOPER <span className="text-[#3aff7d]">&</span> AI ENGINEER
              </p>
              <p className="mt-4 text-white/50 text-sm md:text-base max-w-md">
                Building intelligent applications that bridge robust engineering with creative design.
                Currently pursuing B.Tech at ABV IIITM Gwalior.
              </p>
            </div>

            {/* CTA Button */}
            <div ref={ctaRef} style={{ opacity: 0, transform: 'scale(0)' }}>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group inline-flex items-center gap-3 px-8 py-4 border border-white/30 rounded-full text-white hover:border-[#3aff7d] hover:bg-[#3aff7d]/10 transition-all duration-300 magnetic-btn"
                data-cursor-hover
              >
                <span className="text-sm font-medium">Explore My Work</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links - Side */}
      <div
        ref={socialsRef}
        className="hidden lg:flex fixed left-8 bottom-1/2 translate-y-1/2 flex-col gap-6 z-20"
        style={{ opacity: 0 }}
      >
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/50 hover:text-[#3aff7d] transition-colors"
          data-cursor-hover
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/50 hover:text-[#3aff7d] transition-colors"
          data-cursor-hover
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href="mailto:ayushnagar2310@gmail.com"
          className="text-white/50 hover:text-[#3aff7d] transition-colors"
          data-cursor-hover
        >
          <Mail className="w-5 h-5" />
        </a>
        <div className="w-px h-20 bg-white/20 mx-auto" />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-xs text-white/40 uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
