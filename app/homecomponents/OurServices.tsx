"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChefHat,
  Bath,
  Home,
  TreePine,
  Building2,
  PlusSquare,
} from "lucide-react";

const OurServices = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      title: "Kitchen Remodeling",
      description: "Custom cabinets, countertops, islands & complete kitchen transformations.",
      icon: ChefHat,
      href: "/services/kitchen-remodeling",
      image: "/kitchen-1.jpeg",
    },
    {
      title: "Bathroom Remodeling",
      description: "Master baths, guest baths, walk-in showers & tub-to-shower conversions.",
      icon: Bath,
      href: "/services/bathroom-remodeling",
      image: "/bathroom-1.jpg",
    },
    {
      title: "ADU & Garage Conversion",
      description: "Accessory dwelling units & garage conversions for extra living space.",
      icon: Building2,
      href: "/services/adu-garage-conversion",
      image: "/whole-house-1.jpg",
    },
    {
      title: "Outdoor Living",
      description: "Patio covers, outdoor kitchens, pergolas & deck construction.",
      icon: TreePine,
      href: "/services/outdoor-living",
      image: "/outdoor-1.jpg",
    },
    {
      title: "Whole House Remodeling",
      description: "Complete home renovations from foundation to finish.",
      icon: Home,
      href: "/services/whole-house-remodeling",
      image: "/project-1.jpg",
    },
    {
      title: "Room Additions",
      description: "Expand your living space with seamless room additions.",
      icon: PlusSquare,
      href: "/services/room-additions",
      image: "/project-2.jpg",
    },
  ];

  return (
    <div className="py-16 px-10">
      <div className="max-w-[1400px] lg:max-w-[1600px] xl:max-w-[1800px] 2xl:max-w-[2200px] mx-auto">
        {/* Main Heading */}
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-4 tracking-tight">
          Our Remodeling Services
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          From kitchens and bathrooms to complete home transformations, we bring your vision to life with expert craftsmanship
        </p>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-4 xl:gap-5 2xl:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredCard === index;

            return (
              <Link
                key={index}
                href={service.href}
                className="flex flex-col items-start p-5 bg-stone-200/65 rounded-3xl transition-all duration-300 group"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Inset Image with rounded corners */}
                <div className="relative w-full h-44 lg:h-48 xl:h-52 2xl:h-60 rounded-xl overflow-hidden mb-3">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className={`object-cover transition-transform duration-700 ${
                      isHovered ? "scale-110" : "scale-100"
                    }`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                  {/* Icon overlay on image */}
                  <div className={`absolute bottom-3 left-3 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-2.5 transition-all duration-500 ${
                    isHovered ? "bg-white/20 scale-110" : ""
                  }`}>
                    <Icon className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-white stroke-[1.5]" />
                  </div>
                </div>

                {/* Title and Description */}
                <div className="flex flex-col text-left gap-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold text-gray-900 group-hover:text-[#0891b2] transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-sm lg:text-base xl:text-lg 2xl:text-xl text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

    </div>
  );
};

export default OurServices;
