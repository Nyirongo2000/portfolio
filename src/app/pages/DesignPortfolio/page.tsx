'use client'
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
    // Add more projects here as needed
    // {
    //   id: 10,
    //   title: "Brand Identity",
    //   description: "Complete brand identity package for startup",
    //   imageUrl: "/resources/brand-identity.jpg",
    // },
    // {
    //   id: 11,
    //   title: "Packaging Design",
    //   description: "Eco-friendly packaging solution",
    //   imageUrl: "/resources/packaging.jpg",
    // },
    // {
    //   id: 12,
    //   title: "Digital Illustration",
    //   description: "Custom illustrations for mobile app",
    //   imageUrl: "/resources/illustration.jpg",
    // },
  ];

  const [visibleProjects, setVisibleProjects] = useState(6);
  const [isLoading, setIsLoading] = useState(false);

  const loadMoreProjects = () => {
    setIsLoading(true);
    // Simulate loading delay
    setTimeout(() => {
      setVisibleProjects((prev) => prev + 3);
      setIsLoading(false);
    }, 800);
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mt-16 text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Well Crafted{" "}
            <span className="text-blue-600">Creative Projects</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore my portfolio of design work that brings ideas to life
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {allProjects.slice(0, visibleProjects).map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
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
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleProjects < allProjects.length && (
          <div className="text-center mb-16">
            <button
              onClick={loadMoreProjects}
              disabled={isLoading}
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                "Loading..."
              ) : (
                <>
                  Show More Projects
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </>
              )}
            </button>
          </div>
        )}

        {/* WhatsApp CTA Button */}
        <div className="text-center">
          <Link
            href="https://wa.me/265882748301?text=Hello, I'm interested in your design services"
            className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-1"
          >
            <FaWhatsapp className="text-xl mr-2" />
            Get in Touch via WhatsApp
          </Link>
        </div>
      </div>
    </main>
  );
}
