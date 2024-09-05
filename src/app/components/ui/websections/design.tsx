import Image from "next/image";
import Link from "next/link";
import Card from "../shared/card";

export default function Design() {
  return (
    <>
      {/* Section Header */}
      <div className="flex flex-col justify-start p-6">
        <h6>Creative Design</h6>
        <h1 className="text-5xl">Recent Projects</h1>
      </div>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center items-start md:ml-10">
        {/* Card 1 */}
        <Card
        // replace with whatsap catalog link
          href="#"
          imageSrc="/resources/poster.jpg"
          imageAlt="Tech Image 1"
          description="ad posters"
        />

        {/* Card 2 */}
        <Card
          href="#"
          imageSrc="/resources/product.jpg"
          imageAlt="Tech Image 1"
          description="package design"
        />

        {/* Card 3 */}
        <Card
          href="#"
          imageSrc="/resources/branding.jpg"
          imageAlt="Tech Image 1"
          description="logo and branding"
        />
      </div>

      {/* Link to More Projects */}
      <div className="flex justify-center items-center">
        <Link
          href="/pages/CodePortfolio"
          className="flex w-fill justify-center rounded-lg bg-orange-700 px-3 py-3 text-sm font-medium text-white transition-colors hover:bg-orange-900 md:text-base"
        >
          <p className="">More Web Projects</p>
        </Link>
      </div>
    </>
  );
}
