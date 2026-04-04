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
    id: 11,
    title: "Tropical Paints",
    category: "Web",
    description:
      "A comprehensive website development including Color Visualizer",
    imageUrl: "/resources/tropical.png",
    story:
      "Representing the next phase of digital maturity for Tropical Paints, IDE Malawi was commissioned to architect a complete replacement for a legacy platform that no longer supported the company's rapid scale. We led the project through a rigorous full-cycle process: beginning with a high-fidelity UI/UX design phase to establish a minimalist, premium brand identity, followed by a robust implementation using Next.js. The system integrates advanced functional modules, including a custom-engineered Color Visualizer for real-time room previews and an automated lead-generation ecosystem. The final delivery successfully synchronized the brand's physical product excellence with a world-class digital experience, exceeding stakeholder expectations for both performance and aesthetic authority.",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "TypeScript",
      "SEO Optimization",
    ],
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
  {
    id: 7,
    title: "Rainbowpaint",
    category: "Web",
    description: "Company website",
    imageUrl: "/resources/rainbowpaint.png",
    story:
      "Vibrant company website showcasing products and services with responsive design.",
    technologies: ["Next.js", "Tailwind CSS"],
    liveLink: "https://rainbowpaints.vercel.app/",
  },
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
    <main className="bg-slate-50 min-h-screen py-12 md:py-20">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h6 className="text-sm md:text-base font-medium text-slate-500 uppercase tracking-wide mb-2">
            Development Work
          </h6>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Code <span className="text-blue-600">Portfolio</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Explore my technical solutions and development projects
          </p>

          {/* Filter Tabs */}
          <div className="flex justify-center gap-2 mt-8">
            {["All", "Web", "Mobile"].map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setFilter(cat as any);
                  setVisibleCount(6);
                }}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

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
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-blue-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => openModal(project)}
              >
                <div className="relative h-48 md:h-56 overflow-hidden bg-slate-100">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center gap-1.5">
                    View Details
                    <svg
                      className="w-3.5 h-3.5"
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
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {filteredProjects.length > visibleCount && (
          <div className="text-center">
            <button
              onClick={() => setVisibleCount(filteredProjects.length)}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg transition-colors"
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

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeModal}
                className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden relative shadow-2xl flex flex-col"
              >
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg"
                >
                  <FiX className="w-5 h-5 text-slate-800" />
                </button>

                <div className="overflow-y-auto">
                  <div className="relative h-56 md:h-72 w-full">
                    <Image
                      src={selectedProject.imageUrl}
                      alt={selectedProject.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <span className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-2 block">
                      {selectedProject.category}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                      {selectedProject.title}
                    </h2>
                    <h4 className="font-semibold text-slate-900 mb-2">
                      Project Story
                    </h4>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {selectedProject.story}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-3">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.technologies.map((t, i) => (
                            <span
                              key={i}
                              className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-xs font-medium border border-blue-100"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col gap-3">
                        <h4 className="font-semibold text-slate-900 mb-1">
                          Links
                        </h4>
                        {selectedProject.liveLink && (
                          <a
                            href={selectedProject.liveLink}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 text-blue-600 text-sm font-semibold hover:underline"
                          >
                            <FiExternalLink /> Live Demo
                          </a>
                        )}
                        {selectedProject.githubLink && (
                          <a
                            href={selectedProject.githubLink}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 text-slate-700 text-sm font-semibold hover:underline"
                          >
                            <FiGithub /> View Code
                          </a>
                        )}
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
