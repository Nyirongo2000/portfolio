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
    <div className="flex flex-col items-center bg-white p-4 m-4 rounded-lg shadow-md w-full md:w-[30%]">
      <Link href={href}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={150}
          height={150}
          className="mb-4 md:opacity-50 md:hover:opacity-100 transition-opacity duration-300"
        />
      </Link>
      <p>{description}</p>
    </div>
  );
}
