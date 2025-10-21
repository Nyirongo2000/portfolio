import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            Oliver Nyirongo
          </h2>
          <p className="text-sm leading-relaxed">
            Full-stack software engineer passionate about building digital
            solutions that inspire users and deliver results. Specialized in
            React, Next.js, Django, and modern UI design.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-3">
            Quick Links
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-orange-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/pages/CodePortfolio"
                className="hover:text-orange-400 transition"
              >
                Code Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/pages/DesignPortfolio"
                className="hover:text-orange-400 transition"
              >
                Design Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/pages/Resume"
                className="hover:text-orange-400 transition"
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                href="/pages/Contact"
                className="hover:text-orange-400 transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-3">Contact</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-orange-400" />{" "}
              olivernyirongo@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-orange-400" /> +265 882 748 301
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-orange-400" /> Zomba, Malawi
            </li>
          </ul>
        </div>

        {/* Social + Newsletter */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-3">
            Stay Connected
          </h2>
          <div className="flex space-x-4 mb-4">
            <Link
              href="https://www.facebook.com/profile.php?id=61566443795779&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-2xl hover:text-blue-500 transition" />
            </Link>
            <Link
              href="https://www.instagram.com/oli_ver_ny/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-2xl hover:text-pink-500 transition" />
            </Link>
            <Link
              href="https://github.com/Nyirongo2000"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-2xl hover:text-gray-100 transition" />
            </Link>
          </div>

          <form className="flex items-center border border-gray-600 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Subscribe to updates"
              className="w-full px-3 py-2 text-sm text-gray-200 bg-transparent outline-none"
            />
            <button
              type="submit"
              className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 text-sm font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} Oliver Nyirongo. All Rights Reserved.
          {/* Designed & Developed by{" "}
          <span className="text-orange-500 font-semibold">IDE Malawi</span> */}
        </p>
      </div>
    </footer>
  );
}
