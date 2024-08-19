import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

export default function Landing() {
  return (
    <main className="flex min-h-screen flex-row justify-between p-10">
      {/* Flexbox Container for Intro Text and Numbers */}
      <div className="flex flex-row justify-between ">
        <div className="flex flex-col">
          <div className="flex">
            <p>
              Where Design Meets Development: <br />
              Explore My Creative & Technical Masterpieces
            </p>
          </div>
          <div className="flex flex-row justify-between  mt-4">
            <div>
              <Link
                href="/pages/CodePortfolio"
                className="flex items-center gap-5 self-start rounded-lg bg-slate-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-700 md:text-base "
              >
                <span>code Portfolio</span>{" "}
                {/* <ArrowRightIcon className="w-5 md:w-6" /> */}
              </Link>
            </div>
            <div>
              <Link
                href="/pages/DesignPortfolio"
                className="flex items-center gap-5 self-start rounded-lg bg-slate-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-700 md:text-base"
              >
                <span>Design Portfolio</span>{" "}
            
              </Link>
            </div>
          </div>
          <div className="mt-4">
            <Link
              href="/pages/CodePortfolio"
              className="flex items-center justify-center text-center rounded-lg bg-orange-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-orange-900 md:text-base"
            >
              <p className="m-0">get in touch</p>
            </Link>
          </div>
        </div>

        <div className="mt-[-10rem] mr-[-17rem]">
          <Image
            src="/resources/self.png"
            alt="Description of image"
            width={700}
            height={1}
            className="object-cover"
          />
        </div>
      </div>

      {/* Image Section */}
    </main>
  );
}
