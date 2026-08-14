"use client";
import Image from "next/image";
import { useState, useMemo } from "react";
import { FiExternalLink, FiGithub, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  id: number;
  title: string;
  category: "Web" | "Mobile";
  description: string;
  imageUrl: string;
  story: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
}

const PROJECTS: Project[] = [
  {
  id: 13,
  title: "Deo favante Lawyers Platform",
  category: "Web",
  description:
    "A sleek, authoritative corporate digital platform engineered to project legal excellence, showcase practice areas, and streamline client consultations.",
  imageUrl: "/resources/deofavente.png",
  story:
    "Commissioned by Deofavante Lawyers to elevate their firm’s digital presence, IDE Malawi engineered a modern, high-performance web application designed to command respect in the legal sector. Moving beyond conventional law firm websites, we crafted a sophisticated, high-contrast visual architecture that reflects trust, prestige, and institutional authority. The platform features structured directories detailing their core practice areas, team expertise, and client engagement paths. By focusing on pixel-perfect responsive layout design, rapid load speeds, and intuitive navigation flow, the platform seamlessly connects prospective corporate and private clients with premier legal services.",
  technologies: ["Next.js"],
  liveLink: "https://deofavantelawyers.com/",
},
  {
    id: 12,
    title: "Qwathu Group Ltd Website",
    category: "Web",
    description:
      "A high-end corporate platform and operational hub engineered for cross-border construction coordination and project monitoring.",
    imageUrl: "/resources/qwathu.png",
    story:
      "Commissioned by Qwathu Group Limited to anchor their digital profile, IDE Malawi engineered a premium web ecosystem designed to bridge international Malawian clients with transparent local construction services. Moving beyond static corporate pages, we architected a high-fidelity interface aligned with a timeless, high-contrast aesthetic that establishes immediate structural authority. The application features integrated hubs detailing their specialized service matrices—spanning architectural planning, material procurement, and localized labor coordination. By structuring intentional informational paths and high-conversion touchpoints, the platform successfully balances elegant brand presentation with functional clarity, positioning Qwathu as a modern leader in Malawian real estate development.",
    technologies: ["Next.js", "payloadcms", "cloudflare"],
    liveLink: "https://www.qwathu.com/",
  },
  {
    id: 11,
    title: "Tropical Paints",
    category: "Web",
    description:
      "A comprehensive website development including Color Visualizer",
    imageUrl: "/resources/tropical.png",
    story:
      "Representing the next phase of digital maturity for Tropical Paints, IDE Malawi was commissioned to architect a complete replacement for a legacy platform that no longer supported the company's rapid scale. We led the project through a rigorous full-cycle process: beginning with a high-fidelity UI/UX design phase to establish a minimalist, premium brand identity, followed by a robust implementation using Next.js. The system integrates advanced functional modules, including a custom-engineered Color Visualizer for real-time room previews and an automated lead-generation ecosystem. The final delivery successfully synchronized the brand's physical product excellence with a world-class digital experience, exceeding stakeholder expectations for both performance and aesthetic authority.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    liveLink: "https://www.ogpaints.com/",
  },
  {
    id: 6,
    title: "Abundant Life Malawi",
    category: "Web",
    description: "Organizational website with modern design",
    imageUrl: "/resources/abundant.png",
    story:
      "Complete redesign focused on visual appeal and donor engagement. Delivered a responsive React frontend with Node.js/MySQL backend.",
    technologies: ["React", "Node.js", "MySQL", "PayPal"],
    liveLink: "https://abundantlifecentermalawi.org/",
  },
  {
    id: 1,
    title: "Secure Chat App",
    category: "Mobile",
    description: "Encrypted office communication platform",
    imageUrl: "/resources/chatapp.png",
    story:
      "End-to-end encrypted chat application with real-time messaging, file sharing, and message recall features.",
    technologies: ["Flutter", "Firebase", "WebSockets"],
    liveLink: "https://appetize.io/embed/warrd6g4epyzlns5trv7ocaoiq",
  },
  {
    id: 8,
    title: "Bus Booking System",
    category: "Web",
    description: "National bus ticket booking platform",
    imageUrl: "/resources/busticket.png",
    story:
      "Comprehensive booking system for all bus companies in Malawi with secure payment processing.",
    technologies: ["React", "Spring Boot", "PostgreSQL"],
    liveLink: "https://bus-yanga.vercel.app/",
  },
  {
    id: 10,
    title: "HEFAI Organization",
    category: "Web",
    description: "SRHR advocacy platform",
    imageUrl: "/resources/hefai.png",
    story:
      "Modern website showcasing HEFAI's mission to expand access to sexual and reproductive health rights.",
    technologies: ["Next.js", "Tailwind", "Cloudflare"],
    liveLink: "https://www.hefai.org/",
  },
  {
    id: 9,
    title: "RootsMagazine",
    category: "Web",
    description: "Digital magazine platform",
    imageUrl: "/resources/rootsfront.png",
    story:
      "Elegant magazine platform with integrated payment system for digital purchases.",
    technologies: ["Next.js", "Paychangu"],
    liveLink: "https://rootsmagazine.vercel.app/",
  },
  {
    id: 2,
    title: "CRM System",
    category: "Web",
    description: "Customer relationship management",
    imageUrl: "/resources/crm.png",
    story:
      "Custom CRM solution that automated customer tracking and reduced manual work by 60%.",
    technologies: ["Next.js", "Firebase", "Tailwind CSS"],
  },
  {
    id: 3,
    title: "HR Payslip Automation",
    category: "Web",
    description: "Payroll processing system",
    imageUrl: "/resources/payslip2.jpg",
    story:
      "Automated payslip generation that reduced processing time from 3 days to 15 minutes.",
    technologies: ["Python", "Django", "PostgreSQL"],
  },
  // {
  //   id: 7,
  //   title: "Rainbowpaint",
  //   category: "Web",
  //   description: "Company website",
  //   imageUrl: "/resources/rainbowpaint.png",
  //   story:
  //     "Vibrant company website showcasing products and services with responsive design.",
  //   technologies: ["Next.js", "Tailwind CSS"],
  //   liveLink: "https://rainbowpaints.vercel.app/",
  // },
  {
    id: 5,
    title: "Hostel Management",
    category: "Web",
    description: "Student accommodation finder",
    imageUrl: "/resources/web3.png",
    story:
      "Streamlined hostel management system with real-time availability, payments, and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    liveLink: "https://chikanda-landlord.vercel.app/",
  },
  {
    id: 4,
    title: "Habit Tracker",
    category: "Mobile",
    description: "Personal productivity app",
    imageUrl: "/resources/habit.jpg",
    story:
      "Mobile app for building positive habits with streak tracking and progress visualization.",
    technologies: ["React Native", "Firebase", "Redux"],
  },
];

export default function CodePortfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<"All" | "Web" | "Mobile">("All");
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredProjects = useMemo(() => {
    return filter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);
  }, [filter]);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <main className="bg-[#CBDCEB] min-h-screen pb-20 selection:bg-blue-400 selection:text-white">
      {/* Immersive Hero Header with Self-Contained 3-Way Smooth Blue Gradient */}
      <div className="relative bg-blue-950 text-white overflow-hidden py-24 md:py-32">
        {/* Background Asset */}
        <div className="absolute inset-0 z-0 opacity-15 mix-blend-overlay">
          <Image
            src="/resources/bgprojects.png"
            alt="Header Background"
            fill
            className="object-cover scale-105 blur-[1px]"
            priority
          />
        </div>

        {/* Ambient Overlay Layer */}
        <div className="absolute inset-0 bg-blue-950/40 z-0 pointer-events-none" />

        {/* Smooth 3-Way Internal Gradient fading gracefully to the exact wrapper background matching color */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-blue-900/80 to-[#CBDCEB] z-0 pointer-events-none" />

        <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          {/* <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-400/20 text-blue-200 border border-blue-400/30 mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-300 animate-pulse" />
            Engineering Showcase
          </motion.span> */}

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6"
          >
            Code{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-indigo-200">
              Portfolio
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-blue-100/90 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Explore enterprise architectural designs, interactive visualizers,
            and secure engineering systems crafted for high impact.
          </motion.p>
        </div>
      </div>

      {/* Filter Tabs Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white/95 backdrop-blur-md p-3 md:p-4 rounded-2xl shadow-xl border border-blue-200/40 flex justify-center items-center max-w-md mx-auto">
          <div className="flex gap-1.5 bg-slate-100 p-1.5 rounded-xl w-full">
            {["All", "Web", "Mobile"].map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setFilter(cat as any);
                  setVisibleCount(6);
                }}
                className={`flex-1 px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  filter === cat
                    ? "bg-white text-blue-600 shadow-sm border border-slate-200"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-16">
        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.slice(0, visibleCount).map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-blue-400 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
                onClick={() => openModal(project)}
              >
                <div>
                  <div className="relative h-52 md:h-56 overflow-hidden bg-slate-100 border-b border-slate-100">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-slate-700 shadow-sm border border-slate-200/50">
                      {project.category}
                    </div>
                  </div>

                  <div className="p-5 md:p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 md:px-6 pb-6 pt-0">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-md border border-slate-200/60"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2.5 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-md border border-blue-100">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-blue-600 group-hover:text-blue-700 text-sm font-semibold transition-colors">
                    <span>View Details & Story</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button Block */}
        {filteredProjects.length > visibleCount && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleCount(filteredProjects.length)}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-blue-900 hover:bg-blue-800 text-white text-sm font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              Show All Projects ({filteredProjects.length})
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        )}

        {/* Modal Layer */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeModal}
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-white rounded-2xl w-full max-w-3xl max-h-[85vh] overflow-hidden relative shadow-2xl flex flex-col"
              >
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 bg-white/95 hover:bg-white p-2.5 rounded-xl shadow-md border border-slate-200 transition-colors"
                >
                  <FiX className="w-4 h-4 text-slate-800" />
                </button>

                <div className="overflow-y-auto">
                  <div className="relative h-60 md:h-80 w-full bg-slate-100">
                    <Image
                      src={selectedProject.imageUrl}
                      alt={selectedProject.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                  </div>
                  <div className="p-6 md:p-8">
                    <span className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-2 block">
                      {selectedProject.category} Project
                    </span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">
                      {selectedProject.title}
                    </h2>

                    <h4 className="font-bold text-slate-900 mb-2 uppercase tracking-wider text-xs text-slate-400">
                      Project Overview & Story
                    </h4>
                    <p className="text-slate-600 leading-relaxed text-base mb-8 font-light">
                      {selectedProject.story}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-slate-100">
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-3 text-sm">
                          Technologies Utilized
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.technologies.map((t, i) => (
                            <span
                              key={i}
                              className="bg-blue-50 text-blue-700 px-3 py-1 rounded-md text-xs font-semibold border border-blue-100"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col gap-3">
                        <h4 className="font-semibold text-slate-900 mb-1 text-sm">
                          Deployment & Repository Links
                        </h4>
                        <div className="flex flex-wrap gap-4 mt-1">
                          {selectedProject.liveLink && (
                            <a
                              href={selectedProject.liveLink}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-2.5 rounded-lg shadow-sm transition-colors"
                            >
                              <FiExternalLink /> Launch Project
                            </a>
                          )}
                          {selectedProject.githubLink && (
                            <a
                              href={selectedProject.githubLink}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold px-4 py-2.5 rounded-lg transition-colors border border-slate-200"
                            >
                              <FiGithub /> Source Code
                            </a>
                          )}
                          {!selectedProject.liveLink &&
                            !selectedProject.githubLink && (
                              <span className="text-xs text-slate-400 italic">
                                Internal enterprise solution. Codebase
                                confidential.
                              </span>
                            )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
