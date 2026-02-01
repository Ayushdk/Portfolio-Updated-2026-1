import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Trophy, Users, Calendar, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    id: 1,
    title: 'Event Coordinator',
    organization: 'Inter-IIIT Sports Meet',
    period: '2024',
    location: 'Gwalior, India',
    description:
      'Coordinated and managed the athletics segment for a multi-day sports meet involving 10+ IIITs. Planned and executed all track and field events, including race scheduling, lane allocation, and result management.',
    achievements: [
      'Managed 10+ participating institutes',
      'Coordinated 50+ events seamlessly',
      'Ensured zero operational delays',
    ],
    icon: Trophy,
    color: '#3aff7d',
  },
  {
    id: 2,
    title: 'Game Event Coordinator',
    organization: 'Ganesh Chaturthi Celebration',
    period: '2024',
    location: 'ABV IIITM Gwalior',
    description:
      'Led the multi-games section of the Ganesh Chaturthi celebration, managing 5+ parallel game activities with 100+ participants. Ensured smooth execution and high participant engagement.',
    achievements: [
      'Managed 5+ parallel activities',
      'Engaged 100+ participants',
      'Achieved 95% satisfaction rate',
    ],
    icon: Users,
    color: '#00d4ff',
  },
];

export default function Leadership() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

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

      // Path draw animation
      if (pathRef.current) {
        const pathLength = pathRef.current.getTotalLength();
        gsap.set(pathRef.current, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength,
        });

        gsap.to(pathRef.current, {
          strokeDashoffset: 0,
          duration: 2,
          ease: 'none',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 70%',
            end: 'bottom 30%',
            scrub: 1,
          },
        });
      }

      // Experience cards animation
      const cards = timelineRef.current?.querySelectorAll('.experience-card');
      if (cards) {
        cards.forEach((card, index) => {
          gsap.fromTo(
            card,
            { opacity: 0, x: index % 2 === 0 ? -50 : 50, scale: 0.9 },
            {
              opacity: 1,
              x: 0,
              scale: 1,
              duration: 0.8,
              ease: 'back.out(1.2)',
              scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="leadership"
      className="relative min-h-screen py-24 lg:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#00d4ff]/5 blur-[150px]" />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div ref={headingRef} style={{ opacity: 0 }}>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[#3aff7d] text-sm font-mono">03</span>
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-white/40 text-sm uppercase tracking-widest">Leadership</span>
            </div>

            <h2 className="font-display text-5xl md:text-6xl lg:text-8xl text-white mb-6">
              LEADERSHIP <span className="text-[#00d4ff]">&</span> IMPACT
            </h2>
            <p className="text-white/60 text-lg max-w-2xl">
              Beyond coding, I believe in leading by example and creating impactful experiences
              for communities.
            </p>
          </div>

          {/* Timeline */}
          <div ref={timelineRef} className="mt-20 relative">
            {/* SVG Path - Hidden on mobile */}
            <svg
              className="absolute left-1/2 top-0 h-full w-4 -translate-x-1/2 hidden lg:block"
              preserveAspectRatio="none"
            >
              <path
                ref={pathRef}
                d="M 8 0 Q 8 150 8 200 Q 8 250 8 300 Q 8 350 8 400"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3aff7d" />
                  <stop offset="100%" stopColor="#00d4ff" />
                </linearGradient>
              </defs>
            </svg>

            {/* Experience Cards */}
            <div className="space-y-16 lg:space-y-24">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`experience-card relative grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                    index % 2 === 0 ? '' : 'lg:direction-rtl'
                  }`}
                  style={{ opacity: 0 }}
                >
                  {/* Timeline Node - Hidden on mobile */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-[#010101] border-2 items-center justify-center z-10"
                    style={{ borderColor: exp.color }}
                  >
                    <exp.icon className="w-6 h-6" style={{ color: exp.color }} />
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 === 0 ? 'lg:pr-20' : 'lg:pl-20 lg:col-start-2'}`}>
                    <div className="glass rounded-2xl p-6 md:p-8 glow-border group hover:scale-[1.02] transition-transform duration-300">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-black transition-colors duration-300">
                            {exp.title}
                          </h3>
                          <p className="text-white/60 mt-1 group-hover:text-gray-500 transition-colors duration-300">{exp.organization}</p>
                        </div>
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center lg:hidden"
                          style={{ backgroundColor: `${exp.color}20` }}
                        >
                          <exp.icon className="w-6 h-6" style={{ color: exp.color }} />
                        </div>
                      </div>

                      {/* Meta */}
                      <div className="flex flex-wrap gap-4 text-sm text-white/40 mb-4">
                        <span className="flex items-center gap-1 group-hover:text-gray-500 transition-colors duration-300">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1 group-hover:text-gray-500 transition-colors duration-300">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-white/70 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">{exp.description}</p>

                      {/* Achievements */}
                      <div className="space-y-2">
                        <p className="text-white/40 text-sm uppercase tracking-wider">Key Achievements</p>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="flex items-center gap-3 text-white/80 text-sm group-hover:text-gray-500 transition-colors duration-300"
                            >
                              <span
                                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                style={{ backgroundColor: exp.color }}
                              />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className={`hidden lg:block ${index % 2 === 0 ? '' : 'lg:col-start-1 lg:row-start-1'}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '10+', label: 'Institutes Coordinated' },
              { value: '50+', label: 'Events Managed' },
              { value: '100+', label: 'Participants Engaged' },
              { value: '100%', label: 'Success Rate' },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 glass rounded-xl"
                data-cursor-hover
              >
                <span className="font-display text-4xl md:text-5xl text-[#3aff7d]">
                  {stat.value}
                </span>
                <p className="text-white/60 text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
