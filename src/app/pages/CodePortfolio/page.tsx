'use client'
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

  const projects: Project[] = [
    {
      id: 6,
      title: "Abundant Life Malawi website",
      description: "Organizational website for Abundant Life Center Malawi",
      imageUrl: "/resources/abundant.png",
      story:
        "Abundant Life Center Malawi needed a website that balanced modern aesthetics with professional credibility. I delivered a complete redesign focused on visual appeal and donor engagement. Starting with a sleek Figma prototype featuring clean layouts and professional typography, I developed a responsive React frontend with subtle animations and a Node.js/MySQL backend for seamless performance. The new design maintained the organization's trusted identity while introducing contemporary elements that increased visitor engagement by 50%. The client was particularly impressed with how the site achieved both a fresh, modern look and a polished professional presence—exactly what they needed to attract more donors while maintaining their reputation. The successful integration of secure payment processing completed this transformation, resulting in immediate improvements to their online fundraising.",
      technologies: ["React", "Node.js", "MySQL", "PayPal"],
      liveLink: "https://abundantlifecentermalawi.org/",
    },
    {
      id: 1,
      title: "Hostel Management System",
      description: "Student Hostel Finder",
      imageUrl: "/resources/web3.png",
      story:
        "Developed a comprehensive hostel management system that streamlined the process of finding and booking student accommodations. Implemented features like real-time availability checks, online payments, and admin dashboard. Built with React, Node.js, and MongoDB.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      // githubLink: "#",
      liveLink: "https://chikanda-landlord.vercel.app/",
    },
    {
      id: 2,
      title: "Customer Management System",
      description: "CRM Solution for Businesses",
      imageUrl: "/resources/crm.png",
      story:
        "Created a custom CRM solution that helped small businesses manage customer relationships, track sales, and automate follow-ups. The system reduced manual work by 60% for our clients.",
      technologies: ["Next.js", "Firebase", "Tailwind CSS"],
      githubLink: "#",
      liveLink: "#",
    },
    {
      id: 3,
      title: "HR Payslip Automation",
      description: "Automated Payroll System",
      imageUrl: "/resources/payslip2.jpg",
      story:
        "Automated the payslip generation process for an HR department, reducing processing time from 3 days to 15 minutes. Integrated with existing accounting software and included tax calculation features.",
      technologies: ["Python", "Django", "PostgreSQL"],
      githubLink: "#",
      liveLink: "#",
    },
    {
      id: 4,
      title: "Habit Tracker",
      description: "Personal Productivity App",
      imageUrl: "/resources/habit.jpg",
      story:
        "Built a habit tracking app that helps users build and maintain positive habits. Features include streak tracking, reminders, and progress visualization. The app has helped thousands of users improve their daily routines.",
      technologies: ["React Native", "Firebase", "Redux"],
      githubLink: "#",
      liveLink: "#",
    },
    {
      id: 5,
      title: "Secure Chat App",
      description: "Encrypted Office Communication",
      imageUrl: "/resources/chatapp.png",
      story:
        "Developed an end-to-end encrypted chat application for office communication with features like message recall, file sharing, and read receipts. Implemented using WebSockets for real-time updates.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      githubLink: "#",
      liveLink: "#",
    },
  ];

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto"; // Re-enable scrolling
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mt-16 text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-blue-600">Code Projects</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore my technical solutions and development work
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              onClick={() => openModal(project)}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <button className="text-blue-600 hover:text-blue-800 font-medium">
                  View Project Story →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/pages/Contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-1"
          >
            Get in Touch
          </Link>
        </div>

        {/* Project Story Modal */}
        {isModalOpen && selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative h-64 md:h-80 w-full">
                <Image
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
                >
                  <FiX className="text-gray-800 text-xl" />
                </button>
              </div>
              <div className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {selectedProject.title}
                </h2>
                <p className="text-gray-600 mb-1">
                  {selectedProject.description}
                </p>

                <div className="my-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Project Story
                  </h3>
                  <p className="text-gray-700">{selectedProject.story}</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mt-8">
                  {selectedProject.githubLink && (
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
                    >
                      <FiGithub /> View on GitHub
                    </a>
                  )}
                  {selectedProject.liveLink && (
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      <FiExternalLink /> View Live Demo
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
