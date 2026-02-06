import Image from "next/image";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

export default function Webdev() {
  const projects = [
    {
      title: "HEFAI Organization",
      description: "Modern website for SRHR advocacy organization",
      image: "/resources/hefai.png",
      link: "https://www.hefai.org/",
    },
    {
      title: "Abundant Life Center",
      description: "Nonprofit website with donation system integration",
      image: "/resources/abundant.png",
      link: "https://abundantlifecentermalawi.org/",
    },
    {
      title: "Bus Booking System",
      description:
        "Full-stack platform for nationwide bus ticket booking with payment integration",
      image: "/resources/busticket.png",
      link: "https://bus-yanga.vercel.app/",
    },
  ];

  return (
    <main className="bg-white py-12 md:py-20">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h6 className="text-sm md:text-base font-medium text-slate-500 uppercase tracking-wide mb-2">
            Web Development
          </h6>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Recent <span className="text-blue-600">Projects</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Modern web solutions built with cutting-edge technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-blue-300 hover:shadow-lg transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 md:h-56 overflow-hidden bg-slate-100">
                <Image
                  src={project.image}
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
                <p className="text-slate-600 text-sm md:text-base mb-6">
                  {project.description}
                </p>

                {/* View Project Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800"
                >
                  View Live Project
                  <FiExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/pages/CodePortfolio"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg transition-colors"
          >
            Explore More Projects
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
      </div>
    </main>
  );
}
