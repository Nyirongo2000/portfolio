import Image from "next/image";
import Link from "next/link";

interface CardProps {
  href: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
}

export default function Card({
  href,
  imageSrc,
  imageAlt,
  description,
}: CardProps) {
  return (
    <div className="flex flex-col items-center bg-white p-2 m-4 rounded-lg w-[60%] md:w-[25%] lg:w-[20%]">
      <Link
        href={href}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          layout="responsive" // Keeps the image responsive within the container
          width={1} // Adjusted to maintain aspect ratio
          height={1} // Adjusted to maintain aspect ratio
          className="mb-4 w-full md:opacity-50 md:hover:opacity-100 transition-opacity duration-300"
        />
      </Link>
      <p className="text-center">{description}</p>
    </div>
  );
}
