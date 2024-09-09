import Image from "next/image";
import Card from "../shared/card";
import Link from "next/link";

export default function OurServices() {
  return (
    <main className="bg-slate-100">
      {/* Section Header */}
      <div className="flex flex-col justify-start mt-[-16rem] p-6">
        <h6>Our Services</h6>
        <h1 className="text-5xl">What Do We Do?</h1>
      </div>

      {/* Introduction and Cards Section */}
      <div className="flex flex-col md:flex-row justify-between p-6 max-w-6xl mx-auto">
        {/* Introduction and Image */}
        <div className="flex-1 flex w-full md:w-[48%] flex-col mb-10 md:mb-0">
          <p>
            We develop websites, mobile applications, APIs, and exceptional
            graphic designs tailored to meet your business needs and drive
            success.
            <br />
          </p>
          <div>
            <div className="flex flex-col md:flex-row mt-4 space-y-4 md:space-y-0 md:space-x-4">
              <Link
                href="/pages/CodePortfolio"
                className="flex items-center gap-5 justify-center md:justify-start rounded-lg bg-slate-900 px-3 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-700 md:text-base"
              >
                <span>Code Portfolio</span>
              </Link>
              <Link
                href="/pages/DesignPortfolio"
                className="flex items-center gap-7 justify-center md:justify-start rounded-lg bg-slate-900 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-700 md:text-base"
              >
                <span>Design Portfolio</span>
              </Link>
            </div>
          </div>
          <div>
            <Image
              src="/resources/cyborg.png"
              alt="Description of image"
              width={400}
              height={300}
              className="object-cover hidden md:block mt-4"
            />
            <Image
              src="/resources/cyborgm.png"
              alt="Description of image"
              width={400}
              height={300}
              className="object-cover block md:hidden mt-4"
            />
          </div>
        </div>

        {/* Cards Section */}
        <div className="flex-1 md:w-[48%] flex flex-col ">
          <div className="flex justify-center">
            <Card
              href=""
              imageSrc="/resources/web.jpg"
              imageAlt="Tech Image 1"
              description="Website development"
              disabled={true}
            />
            <Card
              href=""
              imageSrc="/resources/mobile.jpg"
              imageAlt="Tech Image 2"
              description="Mobile App dev"
              // disabled={true}
            />
          </div>
          <div className="flex justify-center">
            <Card
              href=""
              imageSrc="/resources/api.jpg"
              imageAlt="Tech Image 3"
              description="API dev & Integration"
              // disabled={true}
            />
            <Card
              href=""
              imageSrc="/resources/design.jpg"
              imageAlt="Tech Image 4"
              description="Creative Graphic Design"
              // disabled={true}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
