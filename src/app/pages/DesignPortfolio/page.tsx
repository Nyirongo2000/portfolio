import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function DesignPortfolio() {
  const projects = [
    {
      id: 1,
      title: "Poster",
      description: "restaurant menu and poster design",
      imageUrl: "/resources/poster.png", // replace with actual image path
      link: "#",
    },

    {
      id: 2,
      title: "Product Package design",
      description: "from concepts to actual product delivery",
      imageUrl: "/resources/product.png", // replace with actual image path
      link: "#",
    },
    {
      id: 3,
      title: "Logo design",
      description: "from concepts sketch to actual product delivery.",
      imageUrl: "/resources/Branding.png", // replace with actual image path
      link: "#",
    },
    {
      id: 1,
      title: "Product label design",
      description: "catchy product label for dishwashing liquid",
      imageUrl: "/resources/sticker.png", // replace with actual image path
      link: "#",
    },
    {
      id: 2,
      title: "Mega shop banding",
      description: "Banner, and window wrap",
      imageUrl: "/resources/showcase.png", // replace with actual image path
      link: "#",
    },
    {
      id: 3,
      title: "Bookcover desing",
      description: "physics made simple bookcover ,designed and delivered",
      imageUrl: "/resources/book.png", // replace with actual image path
      link: "#",
    },
    {
      id: 1,
      title: "social media ad and T-shirt design",
      description: "design and delivered",
      imageUrl: "/resources/social.png", // replace with actual image path
      link: "#",
    },
    {
      id: 2,
      title: "product label",
      description: "for hair oil",
      imageUrl: "/resources/productlabel.png", // replace with actual image path
      link: "#",
    },
    {
      id: 3,
      title: "Web design",
      description: "W also design and redesign website for our clients ",
      imageUrl: "/resources/mockup.jpg", // replace with actual image path
      link: "#",
    },
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
        href={"https://wa.me/265882748301?text=hello"}
        className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      >
        <div className="flex flex-row justify-between gap-1">
          <p>Get in Touch</p>
          <FaWhatsapp className="text-2xl text-white" />
        </div>
      </Link>
    </main>
  );
}