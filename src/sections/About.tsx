import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Database, Brain, Globe, Cpu, Layers, Download } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: 'TypeScript', icon: Code2, category: 'Languages' },
  { name: 'JavaScript', icon: Code2, category: 'Languages' },
  { name: 'Python', icon: Code2, category: 'Languages' },
  { name: 'C/C++', icon: Cpu, category: 'Languages' },
  { name: 'React.js', icon: Layers, category: 'Web' },
  { name: 'Next.js', icon: Layers, category: 'Web' },
  { name: 'Node.js', icon: Globe, category: 'Web' },
  { name: 'MongoDB', icon: Database, category: 'Web' },
  { name: 'SQL', icon: Database, category: 'Web' },
  { name: 'Tailwind CSS', icon: Layers, category: 'Web' },
  { name: 'NLP', icon: Brain, category: 'AI/ML' },
  { name: 'RAG', icon: Brain, category: 'AI/ML' },
  { name: 'LangChain', icon: Brain, category: 'AI/ML' },
  { name: 'Vector Embeddings', icon: Brain, category: 'AI/ML' },
];

const education = {
  degree: 'B.Tech in Information Technology',
  institution: 'ABV IIITM Gwalior',
  cgpa: '8.23',
  period: 'Aug 2023 - Present',
};

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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

      // Bio animation
      gsap.fromTo(
        bioRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: bioRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Image animation
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.8, rotateY: -15 },
        {
          opacity: 1,
          scale: 1,
          rotateY: 0,
          duration: 1,
          delay: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Skills stagger animation
      const skillItems = skillsRef.current?.querySelectorAll('.skill-item');
      if (skillItems) {
        gsap.fromTo(
          skillItems,
          { opacity: 0, y: 20, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            stagger: 0.05,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: skillsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Education animation
      gsap.fromTo(
        educationRef.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          delay: 0.4,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: educationRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const categories = [...new Set(skills.map((s) => s.category))];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen py-24 lg:py-32"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-64 w-[500px] h-[500px] rounded-full bg-[#3aff7d]/5 blur-[150px]" />
        <div className="absolute bottom-1/4 -left-64 w-[400px] h-[400px] rounded-full bg-[#00d4ff]/5 blur-[150px]" />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-[#3aff7d] text-sm font-mono">01</span>
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-white/40 text-sm uppercase tracking-widest">About Me</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left Column - Bio, Image & Education */}
            <div>
              <h2
                ref={headingRef}
                className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-8"
                style={{ opacity: 0 }}
              >
                ABOUT <span className="text-[#3aff7d]">ME</span>
              </h2>

              {/* Profile Image */}
              <div
                ref={imageRef}
                className="mb-8 relative"
                style={{ opacity: 0, perspective: '1000px' }}
              >
                <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto lg:mx-0">
                  {/* Glow ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#3aff7d] to-[#00d4ff] blur-xl opacity-30 animate-pulse" />
                  {/* Image container */}
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20 glow-border">
                    <img
                      src="/profile.png"
                      alt="Ayush Nagar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -bottom-2 -right-2 w-16 h-16 rounded-full bg-[#3aff7d]/20 flex items-center justify-center">
                    <span className="text-[#3aff7d] font-mono text-xs">B.Tech</span>
                  </div>
                </div>
              </div>

              <div ref={bioRef} className="space-y-6" style={{ opacity: 0 }}>
                <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                  I'm a developer who bridges the gap between{' '}
                  <span className="text-[#3aff7d]">robust engineering</span> and{' '}
                  <span className="text-[#3aff7d]">intelligent design</span>.
                </p>
                <p className="text-white/60 leading-relaxed">
                  With expertise in the MERN stack and a deep passion for AI, I build applications
                  that don't just work—they think. My journey in tech started with a curiosity
                  about how things work, which evolved into a passion for creating solutions that
                  make a real impact.
                </p>
                <p className="text-white/60 leading-relaxed">
                  From developing efficient algorithms for the Delhi Metro to building AI-powered
                  assistants that understand context, I thrive on challenges that push the
                  boundaries of what's possible.
                </p>
              </div>

              {/* Resume Download Button */}
              <div className="mt-8">
                <a
                  href="https://drive.google.com/file/d/1W9GBDxGZru5obOUQNayBFvLP6mLSU6sE/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-[#3aff7d] text-black font-medium rounded-xl hover:bg-[#2ee66d] transition-all duration-300 magnetic-btn"
                  data-cursor-hover
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </a>
              </div>

              {/* Education Card */}
              <div
                ref={educationRef}
                className="group mt-8 p-6 glass rounded-2xl glow-border"
                style={{ opacity: 0 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-white font-semibold text-lg group-hover:text-blue-950 transition-colors duration-300">{education.degree}</h3>
                    <p className="text-white/60 group-hover:text-blue-900 transition-colors duration-300">{education.institution}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[#3aff7d] font-display text-2xl group-hover:text-black transition-colors duration-300">{education.cgpa}</span>
                    <p className="text-white/40 text-sm group-hover:text-red-300 transition-colors duration-300">CGPA</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-white/40 text-sm group-hover:text-gray-600 transition-colors duration-300">
                  <span className="w-2 h-2 rounded-full bg-[#3aff7d] animate-pulse " />
                  {education.period}
                </div>
              </div>
            </div>

            {/* Right Column - Skills */}
            <div>
              <h3 className="text-white/40 text-sm uppercase tracking-widest mb-8">
                Skills & Technologies
              </h3>

              <div ref={skillsRef} className="space-y-8">
                {categories.map((category) => (
                  <div key={category}>
                    <h4 className="text-white/60 text-sm mb-4 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3aff7d]" />
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {skills
                        .filter((s) => s.category === category)
                        .map((skill) => (
                          <div
                            key={skill.name}
                            className="skill-item skill-tag flex items-center gap-2 cursor-pointer animate-jiggle"
                            data-cursor-hover
                          >
                            <skill.icon className="w-4 h-4" />
                            <span>{skill.name}</span>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tools Section */}
              <div className="mt-12">
                <h4 className="text-white/60 text-sm mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff]" />
                  Tools & Platforms
                </h4>
                <div className="flex flex-wrap gap-3">
                  {['Git', 'Docker', 'Android Studio', 'REST APIs', 'Chrome Extensions', 'Overleaf'].map(
                    (tool) => (
                      <span
                        key={tool}
                        className="px-4 py-2 rounded-lg bg-white/5 text-white/70 text-sm border border-white/10 hover:border-[#00d4ff]/50 hover:text-[#00d4ff] transition-colors cursor-pointer"
                        data-cursor-hover
                      >
                        {tool}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
