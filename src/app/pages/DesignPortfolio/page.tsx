"use client";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { FiX, FiMaximize2 } from "react-icons/fi";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DesignProject {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const ALL_PROJECTS: DesignProject[] = [
  {
    id: 1,
    title: "Poster Design",
    description: "Restaurant menu and poster design",
    imageUrl: "/resources/poster.png",
  },
  {
    id: 2,
    title: "Product Package Design",
    description: "From concepts to actual product delivery",
    imageUrl: "/resources/product.png",
  },
  {
    id: 3,
    title: "Logo Design",
    description: "From concept sketch to final product delivery",
    imageUrl: "/resources/Branding.png",
  },
  {
    id: 4,
    title: "Product Label Design",
    description: "Catchy product label for dishwashing liquid",
    imageUrl: "/resources/sticker.png",
  },
  {
    id: 5,
    title: "Mega Shop Branding",
    description: "Banner and window wrap designs",
    imageUrl: "/resources/showcase.png",
  },
  {
    id: 6,
    title: "Book Cover Design",
    description: "Physics Made Simple book cover designed and delivered",
    imageUrl: "/resources/book.png",
  },
  {
    id: 7,
    title: "Social Media & T-Shirt Design",
    description: "Creative designs delivered for marketing",
    imageUrl: "/resources/social.png",
  },
  {
    id: 8,
    title: "Product Label Design",
    description: "Elegant label design for hair oil",
    imageUrl: "/resources/productlabel.png",
  },
  {
    id: 9,
    title: "Web Design",
    description: "Website design and redesign services for clients",
    imageUrl: "/resources/mockup.jpg",
  },
];

export default function DesignPortfolio() {
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [selectedImage, setSelectedImage] = useState<DesignProject | null>(
    null,
  );

  const openModal = (project: DesignProject) => {
    setSelectedImage(project);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <main className="bg-slate-50 min-h-screen py-12 md:py-20">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h6 className="text-sm md:text-base font-medium text-slate-500 uppercase tracking-wide mb-2">
              Creative Work
            </h6>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Design <span className="text-blue-600">Portfolio</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Explore my portfolio of design work that brings ideas to life
            </p>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          <AnimatePresence mode="popLayout">
            {ALL_PROJECTS.slice(0, visibleProjects).map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -5 }}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-blue-200 transition-all duration-300 cursor-pointer"
                onClick={() => openModal(project)}
              >
                {/* Project Image */}
                <div className="relative h-64 md:h-72 overflow-hidden bg-slate-100">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white/90 p-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      <FiMaximize2 className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More Logic */}
        <div className="flex flex-col items-center gap-8">
          {visibleProjects < ALL_PROJECTS.length ? (
            <button
              onClick={() => setVisibleProjects(ALL_PROJECTS.length)}
              className="px-8 py-3 bg-white border border-slate-200 text-slate-900 font-semibold rounded-xl hover:bg-slate-50 transition-colors shadow-sm inline-flex items-center gap-2"
            >
              Show All Designs ({ALL_PROJECTS.length})
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
              className="px-8 py-3 bg-slate-100 text-slate-600 font-semibold rounded-xl hover:bg-slate-200 transition-colors inline-flex items-center gap-2"
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

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/265882748301?text=Hello, I'm interested in your design services"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-2xl transition-all hover:scale-105 shadow-lg shadow-green-200"
          >
            <FaWhatsapp className="w-6 h-6" />
            Start a Design Project
          </a>
        </div>

        {/* Modal for full-size viewing */}
        <AnimatePresence>
          {selectedImage && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeModal}
                className="absolute inset-0 bg-slate-900/90 backdrop-blur-md"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center"
              >
                <button
                  onClick={closeModal}
                  className="absolute -top-2 z-[110] right-0 md:-right-10  text-white hover:text-blue-400 transition-colors p-2"
                >
                  <FiX className="w-8 h-8" />
                </button>

                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white/5 shadow-2xl">
                  <Image
                    src={selectedImage.imageUrl}
                    alt={selectedImage.title}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>

                <div className="mt-4 text-center">
                  <h2 className="text-white text-2xl font-bold">
                    {selectedImage.title}
                  </h2>
                  <p className="text-slate-300">{selectedImage.description}</p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
