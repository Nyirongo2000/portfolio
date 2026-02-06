"use client";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

export default function DesignPortfolio() {
  const allProjects = [
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

  const [visibleProjects, setVisibleProjects] = useState(6);

  return (
    <main className="bg-white py-12 md:py-20">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h6 className="text-sm md:text-base font-medium text-slate-500 uppercase tracking-wide mb-2">
            Creative Work
          </h6>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Design <span className="text-blue-600">Portfolio</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Explore my portfolio of design work that brings ideas to life
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {allProjects.slice(0, visibleProjects).map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-blue-300 hover:shadow-lg transition-all duration-300"
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
                <p className="text-slate-600 text-sm md:text-base">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More / Show Less */}
        <div className="text-center mb-12 md:mb-16">
          {visibleProjects < allProjects.length ? (
            <button
              onClick={() => setVisibleProjects(allProjects.length)}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg transition-colors"
            >
              Show All Projects ({allProjects.length})
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

        {/* WhatsApp CTA Button */}
        <div className="text-center">
          <Link
            href="https://wa.me/265882748301?text=Hello, I'm interested in your design services"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
          >
            <FaWhatsapp className="w-5 h-5" />
            Get in Touch via WhatsApp
          </Link>
        </div>
      </div>
    </main>
  );
}
