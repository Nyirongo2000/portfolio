import Link from "next/link";
import { FaPhone, FaEnvelope, FaGithub, FaGlobe } from "react-icons/fa";

export default function Resume() {
  return (
    <main className="bg-gray-50 py-12 md:py-20">
      <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h6 className="text-sm md:text-base font-medium text-gray-600 uppercase tracking-wide mb-2">
            Professional Profile
          </h6>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Oliver Stevin Nyirongo
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Software Engineer & Creative Designer
          </p>

          {/* Contact Info with Icons on Top */}
          <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-4 md:gap-6 mb-8">
            {/* Phone */}
            <div className="flex flex-col items-center bg-white px-4 py-3 rounded-lg border border-gray-200">
              <FaPhone className="text-gray-500 w-5 h-5 mb-2" />
              <p className="font-medium text-gray-800">+265 882 748 301</p>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center bg-white px-4 py-3 rounded-lg border border-gray-200">
              <FaEnvelope className="text-gray-500 w-5 h-5 mb-2" />
              <a
                href="mailto:olivernyirongo@gmail.com"
                className="font-medium text-blue-600 hover:text-blue-800"
              >
                olivernyirongo@gmail.com
              </a>
            </div>

            {/* GitHub */}
            <div className="flex flex-col items-center bg-white px-4 py-3 rounded-lg border border-gray-200">
              <FaGithub className="text-gray-500 w-5 h-5 mb-2" />
              <Link
                href="https://github.com/Nyirongo2000"
                target="_blank"
                className="font-medium text-blue-600 hover:text-blue-800"
              >
                Nyirongo2000
              </Link>
            </div>

            {/* Portfolio */}
            <div className="flex flex-col items-center bg-white px-4 py-3 rounded-lg border border-gray-200">
              <FaGlobe className="text-gray-500 w-5 h-5 mb-2" />
              <Link
                href="https://olivernyirongo.vercel.app"
                target="_blank"
                className="font-medium text-blue-600 hover:text-blue-800"
              >
                olivernyirongo.vercel.app
              </Link>
            </div>
          </div>

          {/* Download CV Button */}
          <div className="mb-12">
            <a
              href="/resources/Oliver_Nyirongo_CV_Feb2025.pdf"
              download="Oliver_Nyirongo_CV.pdf"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download CV (PDF)
            </a>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* Divider Line */}
          <div className="border-t border-gray-300"></div>

          {/* Professional Summary */}
          <section className="pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
              Professional Summary
            </h2>
            <p className="text-gray-700 leading-relaxed">
              I am a self-motivated and proficient software engineer passionate
              about exploring new technologies and innovative solutions. Highly
              skilled as a full-stack developer and self-taught designer with a
              keen ability to identify performance trends and areas for
              improvement. I also have good communication skills and the ability
              to work within a system while thinking independently, bringing a
              unique blend of technical expertise and independent thinking.
            </p>
          </section>

          {/* Divider Line */}
          <div className="border-t border-gray-300"></div>

          {/* Academic Background */}
          <section className="pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
              Academic Background
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  University of Malawi, Chancellor College (2019 - 2024)
                </h3>
                <p className="text-gray-700">
                  Bachelor of Science in Computer Science
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  National College of Information Technology - NACIT (2019)
                </h3>
                <p className="text-gray-700">NCC Education Level 4 Diploma</p>
              </div>
            </div>
          </section>

          {/* Divider Line */}
          <div className="border-t border-gray-300"></div>

          {/* Professional Qualification */}
          <section className="pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
              Professional Qualifications
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">
                  Certificate for ALX AiCE - AI Career Essentials - 17th May
                  2024
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">
                  Project DPro: Project Management for Development Professionals
                  - 10 March 2024
                </span>
              </li>
            </ul>
          </section>

          {/* Divider Line */}
          <div className="border-t border-gray-300"></div>

          {/* Experience / Projects */}
          <section className="pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
              Experience & Projects
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">
                  <strong>Bintel Analytics Limited</strong> - Software Developer
                  (1 year)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">
                  Social Media Conversation Bots (API in Java for open-source
                  project)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">
                  Navigation System for the Visually Impaired (Mobile
                  Application)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">
                  Next-Gen Hackathon: Payslip Automation with Blockchain
                  Technology
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">
                  Accommodation Finder - Web App
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Social Chatting App</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">
                  Ticketing System Backend with Python Django
                </span>
              </li>
            </ul>
          </section>

          {/* Divider Line */}
          <div className="border-t border-gray-300"></div>

          {/* Skills Section */}
          <section className="pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
              Skills
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Technical Skills */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Technical Skills
                </h3>
                <ul className="space-y-2">
                  {[
                    "Mobile App Development (Flutter, React Native)",
                    "Web App Development (React, Next.js)",
                    "Back-End Development (Spring Boot, Django)",
                    "Database: Postgres, MySQL",
                    "Blockchain (Solidity)",
                    "Graphic Design: Adobe Creative Suite",
                    "Project Management",
                    "Data Collection & DHIS2 Integration",
                    "Django (Advanced Experience)",
                  ].map((skill, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Soft Skills */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Professional Skills
                </h3>
                <ul className="space-y-2">
                  {[
                    "Excellent problem-solving skills",
                    "Strong communication and interpersonal skills",
                    "Ability to work in a team environment",
                    "Self-motivated and able to work independently",
                    "Capacity to learn quickly and adapt",
                    "Ability to work under pressure",
                    "Critical thinking and analysis",
                    "Time management and organization",
                  ].map((skill, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Divider Line */}
          <div className="border-t border-gray-300"></div>

          {/* Referees Section */}
          <section className="pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
              References
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  Dr. Kondwani Munthali
                </h3>
                <p className="text-gray-600 mb-2">
                  Head of Computing Department, University of Malawi
                </p>
                <a
                  href="mailto:kmunthali@unima.ac.mw"
                  className="text-blue-600 hover:text-blue-800"
                >
                  kmunthali@unima.ac.mw
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  Jemimah N Kaonga
                </h3>
                <p className="text-gray-600 mb-2">
                  Senior Monitoring and Evaluation Officer, Baylor College of
                  Medicine
                </p>
                <div className="space-y-1">
                  <p className="text-gray-700">Phone: +265 888 042 798</p>
                  <a
                    href="mailto:jemimahkaonga22@gmail.com"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    jemimahkaonga22@gmail.com
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  Fatsani Byson
                </h3>
                <p className="text-gray-600 mb-2">
                  Lecturer, University of Malawi
                </p>
                <p className="text-gray-700">Phone: +265 881 051 359</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
