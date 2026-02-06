import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

export default function Landing() {
  return (
    <main className="flex min-h-screen flex-col md:flex-row items-center justify-between p-4 sm:p-6 md:p-8 lg:p-10 overflow-hidden">
      {/* Left Content Section */}
      <div className="flex flex-col w-full md:w-1/2 items-center md:items-start text-center md:text-left py-8 md:py-16 lg:py-24">
        <div className="w-full max-w-2xl">
          {/* Big header with highlighted words */}
          <h1 className="text-3xl mt-6 sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-medium">
            Where <span className="text-blue-600">Design</span> Meets{" "}
            <span className="text-orange-600">Development</span>
          </h1>
          {/* Smaller subheader as requested */}
          <p className="text-lg sm:text-xl md:text-2xl mt-3 sm:mt-4 md:mt-6 text-slate-700">
            Explore My Creative & Technical Masterpieces
          </p>
        </div>

        {/* Button Container */}
        <div className="w-full max-w-2xl mt-6 sm:mt-8 md:mt-10">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              href="/pages/CodePortfolio"
              className="flex items-center justify-center md:justify-start gap-2 rounded-lg bg-gray-700 px-4 py-3 text-sm sm:text-base font-medium text-white transition-colors hover:bg-slate-700 w-full sm:w-auto"
            >
              <span>Code Portfolio</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
            <Link
              href="/pages/DesignPortfolio"
              className="flex items-center justify-center md:justify-start gap-2 rounded-lg bg-gray-700 px-4 py-3 text-sm sm:text-base font-medium text-white transition-colors hover:bg-slate-700 w-full sm:w-auto"
            >
              <span>Design Portfolio</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>

          {/* Get in Touch Button with Animation */}
          <div className="mt-6 sm:mt-8 w-full">
            <Link
              href="/pages/Contact"
              className="relative flex w-full max-w-xs mx-auto md:mx-0 justify-center rounded-lg bg-orange-700 px-4 py-3 text-sm sm:text-base font-medium text-white transition-colors hover:bg-orange-900"
            >
              <p>Get in Touch</p>
              <span className="absolute inset-0 rounded-lg border-2 border-transparent before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-orange-300 before:animate-[borderGlow_3s_linear_infinite]"></span>
            </Link>
          </div>

          <style>
            {`
              @keyframes borderGlow {
                0% {
                  clip-path: inset(0 100% 100% 0);
                }
                25% {
                  clip-path: inset(0 0 100% 0);
                }
                50% {
                  clip-path: inset(0 0 0 100%);
                }
                75% {
                  clip-path: inset(100% 0 0 0);
                }
                100% {
                  clip-path: inset(0 100% 100% 0);
                }
              }
            `}
          </style>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center mt-4 md:mt-0">
        <div className="relative w-full max-w-md lg:max-w-lg">
          <Image
            src="/resources/self.png"
            alt="Portfolio showcase image"
            width={800}
            height={600}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </main>
  );
}
