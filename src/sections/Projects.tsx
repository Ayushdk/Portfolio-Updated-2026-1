import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Delhi Metro App",
    role: "Software Developer",
    tech: ["C++", "Graph Algorithms", "Dijkstra"],
    description:
      "A comprehensive route finder for the Delhi Metro network using graph algorithms. Implements Dijkstra's Algorithm to calculate shortest and fastest paths with heap-based priority queue optimization and interchange detection for realistic travel simulation.",
    image: "/project-metro.jpg",
    color: "#3aff7d",
    links: { github: "https://github.com/Ayushdk/metro_app", live: "#" },
  },
  {
    id: 2,
    title: "PDF Assistant",
    role: "Full Stack Developer",
    tech: ["Node.js", "Next.js", "RAG", "BullMQ", "QdrantDB"],
    description:
      "A Retrieval-Augmented Generation (RAG) system for PDF-based question answering. Features an async PDF pipeline with Redis workers, enabling concurrent processing of 100+ PDFs with 30-40% reduced processing time using Google GenAI embeddings.",
    image: "/project-pdf.jpg",
    color: "#00d4ff",
    links: { github: "https://github.com/Ayushdk/PDF-chat-RAG", live: "#" },
  },
  {
    id: 3,
    title: "ScholesAgent",
    role: "AI / Quant Engineer",
    tech: [
      "Python",
      "Django",
      "Black–Scholes Model",
      "Financial Mathematics",
      "Agent Architecture",
    ],
    description:
      "An intelligent Black–Scholes AI agent for option pricing and financial analysis. Computes European call and put prices using the Black–Scholes model, analyzes volatility impact, and provides human-readable explanations of pricing behavior. Designed as a modular agent system integrating quantitative finance logic with backend APIs.",
    image: "/project-scholesagent.jpg",
    color: "#ff6b6b",
    links: {
      github: "https://github.com/Ayushdk/ScholesAgent-frontend",
      live: "https://scholeagent-frontend.netlify.app/",
    },
  },
  {
    id: 4,
    title: "QuickDrop",
    role: "Chrome Extension Developer",
    tech: ["JavaScript", "Chrome APIs", "Local Storage"],
    description:
      "A Chrome extension using local storage to persistently save URLs, text, and images. Features an intuitive user interface with a centralized dashboard for daily task management and quick content retrieval.",
    image: "/project-quickdrop.jpg",
    color: "#ffd93d",
    links: { github: "https://github.com/Ayushdk/QuickDrop", live: "#" },
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState<number | null>(null);

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
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Cards animation
      const cards = cardsRef.current?.querySelectorAll(".project-card-wrapper");
      if (cards) {
        cards.forEach((card, index) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 80, rotateX: 15 },
            {
              opacity: 1,
              y: 0,
              rotateX: 0,
              duration: 0.8,
              delay: index * 0.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            },
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCardHover = (index: number | null) => {
    setActiveProject(index);
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative min-h-screen py-24 lg:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-[#3aff7d]/3 blur-[200px]" />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div ref={headingRef} style={{ opacity: 0 }}>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[#3aff7d] text-sm font-mono">02</span>
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-white/40 text-sm uppercase tracking-widest">
                Selected Works
              </span>
            </div>

            <h2 className="font-display text-5xl md:text-6xl lg:text-8xl text-white mb-6">
              FEATURED <span className="text-gradient">PROJECTS</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl">
              A collection of projects that showcase my expertise in full-stack
              development, AI/ML integration, and problem-solving.
            </p>
          </div>

          {/* Projects Grid */}
          <div
            ref={cardsRef}
            className="mt-16 grid md:grid-cols-2 gap-8"
            style={{ perspective: "1000px" }}
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="project-card-wrapper"
                style={{ opacity: 0 }}
                onMouseEnter={() => handleCardHover(index)}
                onMouseLeave={() => handleCardHover(null)}
              >
                <div
                  className={`project-card group relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ${
                    activeProject !== null && activeProject !== index
                      ? "opacity-50"
                      : "opacity-100"
                  }`}
                  data-cursor-hover
                  style={{
                    transformStyle: "preserve-3d",
                    boxShadow:
                      activeProject === index
                        ? `0 0 60px ${project.color}20`
                        : "none",
                  }}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#010101] via-[#010101]/60 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium rounded-full"
                          style={{
                            backgroundColor: `${project.color}20`,
                            color: project.color,
                            border: `1px solid ${project.color}40`,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Title & Role */}
                    <h3 className="font-display text-3xl md:text-4xl text-white mb-2 group-hover:text-[#3aff7d] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/60 text-sm mb-4">{project.role}</p>

                    {/* Description */}
                    <p className="text-white/70 text-sm leading-relaxed mb-6 line-clamp-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75">
                      {project.description}
                    </p>

                    {/* Links */}
                    <div className="flex gap-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
                      <a
                        href={project.links.github}
                        className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-5 h-5" />
                        <span className="text-sm">Code</span>
                      </a>
                      <a
                        href={project.links.live}
                        className="flex items-center gap-2 text-white/60 hover:text-[#3aff7d] transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span className="text-sm">Live Demo</span>
                      </a>
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div
                    className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"
                    style={{ backgroundColor: project.color }}
                  >
                    <ArrowUpRight className="w-6 h-6 text-black" />
                  </div>

                  {/* Index Number */}
                  <div className="absolute top-4 left-4 font-display text-6xl text-white/5">
                    0{project.id}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All CTA */}
          <div className="mt-16 text-center">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 rounded-full text-white hover:border-[#3aff7d] hover:bg-[#3aff7d]/10 transition-all duration-300 magnetic-btn"
              data-cursor-hover
            >
              <Github className="w-5 h-5" />
              <span className="text-sm font-medium">
                View All Projects on GitHub
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
