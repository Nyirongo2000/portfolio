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
    <div className="flex flex-col items-center bg-white p-[1px] m-4 rounded-lg shadow-md w-full md:w-[30%]">
      <Link
        href={href}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={100}
          height={100}
          className="w-full h-full object-cover mb-4 md:opacity-50 md:hover:opacity-100 transition-opacity duration-300"
        />
      </Link>
      <p className="text-center">{description}</p>
    </div>
  );
}
