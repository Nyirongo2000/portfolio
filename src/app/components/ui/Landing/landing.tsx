import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

export default function Landing() {
  return (
    <main className="flex min-h-screen flex-col md:flex-row justify-between p-4 md:p-10">
      {/* Left Content Section */}
      <div className="flex flex-col mt-4 w-full md:w-1/2">
        <div className="mt-[2rem] md:mt-[4rem]">
          {/* Big header with highlighted words */}
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-medium">
            Where <span className="text-blue-600">Design</span> Meets{" "}
            <span className="text-orange-600">Development</span>
          </p>
          {/* Smaller subheader as requested */}
          <p className="text-xl sm:text-2xl mt-4 text-slate-700">
            Explore My Creative & Technical Masterpieces
          </p>
          {/* <p className="text-blue-600 text-sm sm:text-base mt-2">
            Site Under Construction: We Are Building in Real-Time
          </p> */}
        </div>

        {/* Rest of the code remains exactly the same */}
        <div className="flex flex-col md:flex-row mt-4 space-y-4 md:space-y-0 md:space-x-4">
          <Link
            href="/pages/CodePortfolio"
            className="flex items-center gap-5 justify-center md:justify-start rounded-lg bg-gray-700 px-3 py-3 text-sm sm:text-base font-medium text-white transition-colors hover:bg-slate-700 md:text-base"
          >
            <span>Code Portfolio</span>
          </Link>
          <Link
            href="/pages/DesignPortfolio"
            className="flex items-center gap-7 justify-center md:justify-start rounded-lg bg-gray-700 px-4 py-3 text-sm sm:text-base font-medium text-white transition-colors hover:bg-slate-700 md:text-base"
          >
            <span>Design Portfolio</span>
          </Link>
        </div>

        <div className="mt-2 justify-center">
          <Link
            href="/pages/Contact"
            className="relative flex w-full sm:w-8/12 md:w-6/12 justify-center rounded-lg bg-orange-700 px-3 py-3 text-sm sm:text-base font-medium text-white transition-colors hover:bg-orange-900 md:text-base"
          >
            <p>Get in Touch</p>
            <span className="absolute inset-0 rounded-lg border-2 border-transparent before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-orange-300 before:animate-[borderGlow_3s_linear_infinite]"></span>
          </Link>

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
