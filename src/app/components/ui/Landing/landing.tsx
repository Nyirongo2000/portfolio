import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

export default function Landing() {
  return (
    <main className="flex min-h-screen flex-col md:flex-row justify-between p-4 md:p-10">
      {/* Left Content Section */}
      <div className="flex flex-col mt-4 w-full md:w-1/2">
        <div className="mt-[2rem] md:mt-[4rem]">
          {/* Adjust font size for small screens */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-tight">
            Where Design Meets Development: <br />
            Explore My Creative & Technical <br /> Masterpieces
          </p>
          <p className="text-blue-600 text-sm sm:text-base mt-2">
            Site Under Construction: We Are Building in Real-Time
          </p>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col md:flex-row mt-4 space-y-4 md:space-y-0 md:space-x-4">
          <Link
            href="/pages/CodePortfolio"
            className="flex items-center gap-5 justify-center md:justify-start rounded-lg bg-slate-900 px-3 py-3 text-sm sm:text-base font-medium text-white transition-colors hover:bg-slate-700 md:text-base"
          >
            <span>Code Portfolio</span>
          </Link>
          <Link
            href="/pages/DesignPortfolio"
            className="flex items-center gap-7 justify-center md:justify-start rounded-lg bg-slate-900 px-4 py-3 text-sm sm:text-base font-medium text-white transition-colors hover:bg-slate-700 md:text-base"
          >
            <span>Design Portfolio</span>
          </Link>
        </div>

        {/* Get in Touch Button */}
        <div className="mt-2 justify-center">
          <Link
            href="/pages/Contact"
            className="flex w-full sm:w-8/12 md:w-6/12 justify-center rounded-lg bg-orange-700 px-3 py-3 text-sm sm:text-base font-medium text-white transition-colors hover:bg-orange-900 md:text-base"
          >
            <p>Get in Touch</p>
          </Link>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="mt-8 md:mt-[-5rem] md:mr-[-5rem] w-full md:w-1/2">
        <Image
          src="/resources/self.png"
          alt="Description of image"
          width={900}
          height={0}
          className="hidden md:block object-cover"
        />
      </div>
    </main>
  );
}
