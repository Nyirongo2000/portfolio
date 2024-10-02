import Image from "next/image";

export default function DesignPortfolio() {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "This is a brief description of Project 1.",
      imageUrl: "/project1.jpg", // replace with actual image path
      link: "#",
    },
    {
      id: 2,
      title: "Project 2",
      description: "This is a brief description of Project 2.",
      imageUrl: "/project2.jpg", // replace with actual image path
      link: "#",
    },
    {
      id: 3,
      title: "Project 3",
      description: "This is a brief description of Project 3.",
      imageUrl: "/project3.jpg", // replace with actual image path
      link: "#",
    },
    {
      id: 1,
      title: "Project 1",
      description: "This is a brief description of Project 1.",
      imageUrl: "/project1.jpg", // replace with actual image path
      link: "#",
    },
    {
      id: 2,
      title: "Project 2",
      description: "This is a brief description of Project 2.",
      imageUrl: "/project2.jpg", // replace with actual image path
      link: "#",
    },
    {
      id: 3,
      title: "Project 3",
      description: "This is a brief description of Project 3.",
      imageUrl: "/project3.jpg", // replace with actual image path
      link: "#",
    },
    {
      id: 1,
      title: "Project 1",
      description: "This is a brief description of Project 1.",
      imageUrl: "/project1.jpg", // replace with actual image path
      link: "#",
    },
    {
      id: 2,
      title: "Project 2",
      description: "This is a brief description of Project 2.",
      imageUrl: "/project2.jpg", // replace with actual image path
      link: "#",
    },
    {
      id: 3,
      title: "Project 3",
      description: "This is a brief description of Project 3.",
      imageUrl: "/project3.jpg", // replace with actual image path
      link: "#",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold text-center mb-10 text-blue-700">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <div className="relative w-full h-48">
              <Image
                src={project.imageUrl}
                alt={project.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              {/* <a
                href={project.link}
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                View Project
              </a> */}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
