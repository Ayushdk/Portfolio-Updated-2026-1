import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, Linkedin, Github, ExternalLink, Send, Copy, Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/ayush-nagar-2a6311289/', color: '#0077b5' },
  { name: 'GitHub', icon: Github, url: 'https://github.com/Ayushdk', color: '#fff' },
  { name: 'HashNode', icon: ExternalLink, url: 'https://hashnode.com/@Ayushdk', color: '#3aff7d' },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Content animation
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Background tunnel effect
      const stars = sectionRef.current?.querySelectorAll('.star');
      if (stars) {
        stars.forEach((star, i) => {
          gsap.to(star, {
            y: '-100vh',
            duration: 10 + i * 2,
            repeat: -1,
            ease: 'none',
            delay: i * 0.5,
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative min-h-screen py-24 lg:py-32 overflow-hidden"
    >
      {/* Animated Starfield Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="star absolute w-px bg-white/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: '100%',
              height: `${50 + Math.random() * 100}px`,
              opacity: 0.1 + Math.random() * 0.3,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-[#010101] via-transparent to-[#010101]" />
      </div>

      {/* Glow Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#3aff7d]/5 blur-[200px]" />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div ref={headingRef} style={{ opacity: 0 }}>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[#3aff7d] text-sm font-mono">04</span>
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-white/40 text-sm uppercase tracking-widest">Get in Touch</span>
            </div>

            <h2 className="font-display text-5xl md:text-6xl lg:text-8xl text-white mb-6">
              LET'S <span className="text-gradient">BUILD</span> THE
              <br />
              <span className="text-[#3aff7d]">FUTURE</span> TOGETHER
            </h2>
          </div>

          {/* Contact Content */}
          <div ref={contentRef} className="mt-16 grid lg:grid-cols-2 gap-16" style={{ opacity: 0 }}>
            {/* Left - Contact Info */}
            <div className="space-y-8">
              <p className="text-xl text-white/70 leading-relaxed">
                I'm always excited to discuss new opportunities, innovative projects,
                or just have a conversation about technology and its potential.
              </p>

              {/* Email */}
              <div className="group">
                <p className="text-white/40 text-sm uppercase tracking-wider mb-2">Email</p>
                <div className="flex items-center gap-4">
                  <a
                    href="mailto:ayushnagar2310@gmail.com"
                    className="text-2xl md:text-3xl text-white hover:text-[#3aff7d] transition-colors flex items-center gap-3"
                    data-cursor-hover
                  >
                    <Mail className="w-6 h-6" />
                    ayushnagar2310@gmail.com
                  </a>
                  <button
                    onClick={() => handleCopy('ayushnagar2310@gmail.com', 'email')}
                    className="p-2 rounded-lg bg-white/5 hover:bg-[#3aff7d]/20 text-white/40 hover:text-[#3aff7d] transition-colors"
                    data-cursor-hover
                    aria-label="Copy email"
                  >
                    {copiedEmail ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Phone */}
              <div className="group">
                <p className="text-white/40 text-sm uppercase tracking-wider mb-2">Phone</p>
                <div className="flex items-center gap-4">
                  <a
                    href="tel:+916378854797"
                    className="text-2xl md:text-3xl text-white hover:text-[#3aff7d] transition-colors flex items-center gap-3"
                    data-cursor-hover
                  >
                    <Phone className="w-6 h-6" />
                    +91 63788 54797
                  </a>
                  <button
                    onClick={() => handleCopy('+916378854797', 'phone')}
                    className="p-2 rounded-lg bg-white/5 hover:bg-[#3aff7d]/20 text-white/40 hover:text-[#3aff7d] transition-colors"
                    data-cursor-hover
                    aria-label="Copy phone"
                  >
                    {copiedPhone ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-white/40 text-sm uppercase tracking-wider mb-4">Connect</p>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 px-6 py-3 glass rounded-xl hover:bg-white/10 transition-all duration-300"
                      data-cursor-hover
                      style={{ '--hover-color': social.color } as React.CSSProperties}
                    >
                      <social.icon
                        className="w-5 h-5 transition-colors"
                        style={{ color: social.color }}
                      />
                      <span className="text-white/80 group-hover:text-white">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Quick Message Form */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Send a Quick Message</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const formData = new FormData(form);
                  const name = formData.get('name');
                  const message = formData.get('message');
                  window.location.href = `mailto:ayushnagar2310@gmail.com?subject=Message from ${name}&body=${message}`;
                }}
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-white/60 text-sm mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#3aff7d] transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-white/60 text-sm mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#3aff7d] transition-colors resize-none"
                    placeholder="Hey Ayush, I'd love to discuss..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-[#3aff7d] text-black font-medium rounded-xl hover:bg-[#2ee66d] transition-colors magnetic-btn"
                  data-cursor-hover
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-32 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="font-display text-2xl text-white">AN</span>
                <span className="text-white/40">|</span>
                <span className="text-white/60 text-sm">Ayush Nagar</span>
              </div>
              <p className="text-white/40 text-sm">
                © {new Date().getFullYear()} All rights reserved. Built with passion.
              </p>
              <div className="flex items-center gap-2 text-white/40 text-sm">
                <span className="w-2 h-2 rounded-full bg-[#3aff7d] animate-pulse" />
                Available for opportunities
              </div>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
}
