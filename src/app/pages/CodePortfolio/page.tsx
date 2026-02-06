"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiExternalLink, FiGithub, FiX } from "react-icons/fi";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  story: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
}

export default function CodePortfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState(6);

  const projects: Project[] = [
    {
      id: 6,
      title: "Abundant Life Malawi",
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
      description: "Customer relationship management",
      imageUrl: "/resources/crm.png",
      story:
        "Custom CRM solution that automated customer tracking and reduced manual work by 60%.",
      technologies: ["Next.js", "Firebase", "Tailwind CSS"],
    },
    {
      id: 3,
      title: "HR Payslip Automation",
      description: "Payroll processing system",
      imageUrl: "/resources/payslip2.jpg",
      story:
        "Automated payslip generation that reduced processing time from 3 days to 15 minutes.",
      technologies: ["Python", "Django", "PostgreSQL"],
    },
    {
      id: 7,
      title: "Rainbowpaint",
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
      description: "Personal productivity app",
      imageUrl: "/resources/habit.jpg",
      story:
        "Mobile app for building positive habits with streak tracking and progress visualization.",
      technologies: ["React Native", "Firebase", "Redux"],
    },
  ];

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <main className="bg-white py-12 md:py-20">
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
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {projects.slice(0, visibleProjects).map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-blue-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => openModal(project)}
            >
              {/* Project Image */}
              <div className="relative h-48 md:h-56 overflow-hidden bg-slate-100">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Project Info */}
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm md:text-base mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
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
            </div>
          ))}
        </div>

        {/* Load More / Show Less */}
        <div className="text-center mb-12 md:mb-16">
          {visibleProjects < projects.length ? (
            <button
              onClick={() => setVisibleProjects(projects.length)}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg transition-colors"
            >
              Show All Projects ({projects.length})
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
          ) : (
            <button
              onClick={() => setVisibleProjects(6)}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-lg transition-colors"
            >
              Show Less
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
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </button>
          )}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link
            href="/pages/Contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg transition-colors"
          >
            Get in Touch for Your Project
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
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>

        {/* Modal */}
        {isModalOpen && selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            <div className="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
              {/* Modal Header with Image */}
              <div className="relative h-48 md:h-64 bg-slate-100">
                <Image
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full p-2 shadow-md transition-colors"
                >
                  <FiX className="text-slate-800 w-5 h-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="flex-1 overflow-y-auto p-4 md:p-6">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">
                    {selectedProject.title}
                  </h2>
                  <p className="text-slate-600 mb-4">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    Project Story
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    {selectedProject.story}
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-blue-50 text-blue-700 font-medium rounded-lg text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3">
                  {selectedProject.liveLink && (
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                    >
                      <FiExternalLink className="w-4 h-4" />
                      View Live Demo
                    </a>
                  )}
                  {selectedProject.githubLink &&
                    selectedProject.githubLink !== "#" && (
                      <a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-900 text-white font-medium rounded-lg transition-colors"
                      >
                        <FiGithub className="w-4 h-4" />
                        View Code
                      </a>
                    )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
