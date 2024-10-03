import Image from "next/image";
import NavLinks from "./nav-links";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <main>
      <div className="flex flex-row justify-around bg-slate-100 p-4">
        <div className="flex flex-col">
          <p className="text-4xl font-semibold">Find Your Way</p>
          <hr className="border-t-2 mb-4 mt-1 border-orange-700" />

          <Link
            href="/"
            className="flex w-full text-sm font-medium hover:text-blue-600 md:text-base"
          >
            <p>Home</p>
          </Link>
          <Link
            href="/pages/CodePortfolio"
            className="flex w-full text-sm font-medium hover:text-blue-600 md:text-base"
          >
            <p>Code Portfolio</p>
          </Link>
          <Link
            href="/pages/DesignPortfolio"
            className="flex w-full text-sm font-medium hover:text-blue-600 md:text-base"
          >
            <p>Design Portfolio</p>
          </Link>
          <Link
            href="/pages/Contact"
            className="flex w-full text-sm font-medium hover:text-blue-600 md:text-base"
          >
            <p>Contact</p>
          </Link>
          <Link
            href="/pages/Resume"
            className="flex w-full text-sm font-medium hover:text-blue-600 md:text-base"
          >
            <p>Resume</p>
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-4xl font-semibold">Follow Us</p>
          <hr className="border-t-2 mb-4 mt-1 border-orange-700" />
          <div className="flex space-x-4">
            <Link
              href="https://www.facebook.com/profile.php?id=61566443795779&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-2xl text-blue-600 hover:text-blue-800" />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-2xl text-pink-600 hover:text-pink-800" />
            </Link>
            <Link
              href="https://github.com/Nyirongo2000"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-2xl text-blabk-600 hover:text-black-800" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
