import Image from "next/image";
import Link from "next/link";

export default function CodePortfolio() {
  const projects = [
    {
      id: 1,
      title: "hostel management sys",
      description: "student Hostel finder",
      imageUrl: "/resources/web3.png", // replace with actual image path
      link: "#",
    },
    {
      id: 2,
      title: "CMS",
      description: "customer management system",
      imageUrl: "/resources/crm.png", // replace with actual image path
      link: "#",
    },
    {
      id: 3,
      title: "HR payslip automation",
      description: " payslip automation",
      imageUrl: "/resources/payslip2.jpg", // replace with actual image path
      link: "#",
    },
    {
      id: 1,
      title: "Habit",
      description:
        "this is personal habit tracker it helps to keep you in shape",
      imageUrl: "/resources/habit.jpg", // replace with actual image path
      link: "#",
    },
    {
      id: 2,
      title: "Chat APP",
      description:
        "this is an encrypted office chat app that allows employees to send and receive messages securely",
      imageUrl: "/resources/chatapp.png", // replace with actual image path
      link: "#",
    },
    // {
    //   id: 3,
    //   title: "Project 3",
    //   description: "This is a brief description of Project 3.",
    //   imageUrl: "/resources/project3.jpg", // replace with actual image path
    //   link: "#",
    // },
    // {
    //   id: 1,
    //   title: "Project 1",
    //   description: "This is a brief description of Project 1.",
    //   imageUrl: "/project1.jpg", // replace with actual image path
    //   link: "#",
    // },
    // {
    //   id: 2,
    //   title: "Project 2",
    //   description: "This is a brief description of Project 2.",
    //   imageUrl: "/project2.jpg", // replace with actual image path
    //   link: "#",
    // },
    // {
    //   id: 3,
    //   title: "Project 3",
    //   description: "This is a brief description of Project 3.",
    //   imageUrl: "/project3.jpg", // replace with actual image path
    //   link: "#",
    // },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold text-center mb-10 text-blue-900">
        Well Crafted Creative Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <div className="relative w-full h-80">
              {" "}
              {/* Full-size image height */}
              <Image
                src={project.imageUrl}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Link
        href="/pages/Contact"
        className="flex w-full sm:w-8/12 md:w-1/4 justify-center rounded-lg bg-orange-700 px-3 py-3 text-sm sm:text-base font-medium text-white transition-colors hover:bg-orange-900 md:text-base"
      >
        <p>Get in Touch</p>
      </Link>
    </main>
  );
}