"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function OurServices() {
  const services = [
    {
      title: "Website Development",
      description: "Custom, responsive websites built with modern frameworks",
      image: "/resources/web.jpg",
      href: "/pages/CodePortfolio",
    },
    {
      title: "Mobile App Development",
      description: "Native & cross-platform apps for iOS and Android",
      image: "/resources/mobile.jpg",
      href: "/pages/CodePortfolio",
    },
    {
      title: "API Development & Integration",
      description: "Robust APIs and seamless third-party integrations",
      image: "/resources/api.jpg",
      href: "/pages/CodePortfolio",
    },
    {
      title: "Creative Graphic Design",
      description: "Stunning visuals that enhance user experience",
      image: "/resources/design.jpg",
      href: "/pages/DesignPortfolio",
    },
  ];

  return (
    <main className="bg-white py-12 md:py-20">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h6 className="text-sm md:text-base font-medium text-slate-500 uppercase tracking-wide mb-2">
            {/* Our Services */}
          </h6>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            What Do I Do?
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Crafting digital experiences that combine technology with design to
            elevate your business.
          </p>
        </div>

        {/* Main Content - Aligned Containers */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          {/* Left Column - Introduction & Full Height Image */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 h-full flex flex-col">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Turning Vision Into Reality
              </h2>

              <p className="text-slate-700 leading-relaxed mb-8">
                I create powerful websites, mobile apps, and software solutions
                that run smoothly on any device. With secure payment
                integration, robust APIs, and stunning graphic designs, I craft
                digital experiences designed to grow your business and drive
                success.
              </p>

              {/* Stats - Moved to align with cards */}
              <div className="flex gap-4 mb-8">
                <div className="bg-slate-50 p-4 rounded-xl flex-1">
                  <div className="text-2xl font-bold text-blue-600">100+</div>
                  <div className="text-sm text-slate-600">Projects</div>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl flex-1">
                  <div className="text-2xl font-bold text-blue-600">4.9/5</div>
                  <div className="text-sm text-slate-600">Satisfaction</div>
                </div>
              </div>

              {/* Full Height Image - Takes remaining space */}
              <div className="relative flex-1 rounded-xl overflow-hidden mt-auto">
                <Image
                  src="/resources/cyborg.png"
                  alt="Digital Solutions Illustration"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Column - Services Cards */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 h-full">
              {services.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="group block bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-blue-300 hover:shadow-md transition-all h-full"
                >
                  <div className="relative h-48 md:h-56">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-2 group-hover:text-blue-600">
                      {service.title}
                    </h3>
                    <p className="text-sm md:text-base text-slate-600">
                      {service.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
