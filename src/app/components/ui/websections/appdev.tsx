import Image from "next/image";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

export default function Appdev() {
  const projects = [
    {
      title: "Secure Company Chat",
      description: "Encrypted in-house communication app",
      image: "/resources/chatapp.png",
      link: "https://appetize.io/embed/warrd6g4epyzlns5trv7ocaoiq",
      tags: ["Flutter", "Firebase", "End-to-End Encryption"],
    },
    {
      title: "Habit Tracker",
      description: "Personal productivity and routine builder",
      image: "/resources/habit.jpg",
      link: "#",
      tags: ["React Native", "Redux", "Local Storage"],
    },
    {
      title: "My Colors",
      description: "Custom color palette generator",
      image: "/resources/colors.png",
      link: "#",
      tags: ["Flutter", "Material Design", "Color Theory"],
    },
  ];

  return (
    <div className="bg-slate-100 w-full">
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-blue-600 font-medium block mb-2">
            Mobile Development
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Recent Projects
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            High-performance mobile applications built with modern frameworks
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {/* {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))} */}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  View Project <FiExternalLink className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/pages/CodePortfolio"
            className="inline-flex items-center justify-center px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-1"
          >
            Explore More Mobile Projects
          </Link>
        </div>
      </section>
    </div>
  );
}
