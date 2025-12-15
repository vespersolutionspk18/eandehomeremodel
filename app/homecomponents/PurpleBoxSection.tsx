"use client";
import React, { useState } from "react";
import { Users, DollarSign, Database, Globe, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const PurpleBoxSection = () => {
  const [isHoveredLearn, setIsHoveredLearn] = useState(false);
  const [isHoveredDemo, setIsHoveredDemo] = useState(false);
  const [isHoveredLearn2, setIsHoveredLearn2] = useState(false);
  const [isHoveredDemo2, setIsHoveredDemo2] = useState(false);

  const textVariants = {
    initial: { y: 0 },
    hover: { y: '-150%' }
  };

  const textVariantsHover = {
    initial: { y: '150%' },
    hover: { y: 0 }
  };

  return (
    <div className="p-4 md:p-10">
      {/* White Section */}
      <div className="rounded-2xl md:rounded-4xl p-6 md:p-12 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[67px] items-center">
          {/* Left Column - Content Section */}
          <div className="flex flex-col gap-4 md:gap-[19px]">
            {/* Header with Icon */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0891b2] flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="text-base md:text-lg text-gray-600" style={{ fontFamily: 'var(--font-figtree)', fontWeight: 500 }}>
                FREE 3D Design Service
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Visualize Your Dream Home<br />Before We Start Building
            </h2>

            {/* Descriptive Paragraph */}
            <p className="text-lg md:text-2xl text-gray-600 leading-relaxed tracking-tighter" style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400 }}>
              Most contractors charge $2,000-$5,000 for 3D design. At E&E, it&apos;s completely FREE. See exactly how your kitchen, bathroom, or whole house will look before any work begins.
            </p>

            {/* Feature List - Two column grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7 mt-3 md:mt-[11px]">
              {/* Realistic Renderings Feature */}
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl md:text-2xl font-medium text-black tracking-tighter" style={{ fontFamily: 'var(--font-figtree)', fontWeight: 500 }}>
                  Realistic Renderings
                </h3>
                <p className="text-gray-600 leading-tight text-base md:text-lg tracking-tighter" style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400 }}>
                  Photorealistic 3D visualizations let you see every detail - cabinets, countertops, flooring, fixtures - before we order a single material.
                </p>
              </div>

              {/* Make Changes Feature */}
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl md:text-2xl font-medium text-black tracking-tighter" style={{ fontFamily: 'var(--font-figtree)', fontWeight: 500 }}>
                  No Surprises
                </h3>
                <p className="text-gray-600 leading-tight text-base md:text-lg tracking-tighter" style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400 }}>
                  Make changes in the design phase, not during construction. Avoid costly mistakes and ensure you love every detail.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-4 mt-3 md:mt-[11px]">
              <motion.button
                initial={{ borderRadius: 40 }}
                whileHover={{ borderRadius: 12 }}
                transition={{ duration: 0.1, ease: 'easeOut' }}
                onHoverStart={() => setIsHoveredLearn(true)}
                onHoverEnd={() => setIsHoveredLearn(false)}
                className="px-8 py-3 bg-[#0891b2] text-white hover:bg-[#0891b2]/90 font-semibold inline-flex items-center justify-center overflow-hidden relative cursor-pointer"
                style={{ fontFamily: 'var(--font-figtree)', fontWeight: 600 }}
              >
                <div className="relative inline-flex items-center">
                  <motion.span
                    className="inline-flex items-center"
                    initial="initial"
                    animate={isHoveredLearn ? 'hover' : 'initial'}
                    variants={textVariants}
                    transition={{ duration: 0.12, ease: 'easeInOut' }}
                  >
                    Get FREE 3D Design
                  </motion.span>
                  <motion.span
                    className="absolute inset-0 inline-flex items-center"
                    initial="initial"
                    animate={isHoveredLearn ? 'hover' : 'initial'}
                    variants={textVariantsHover}
                    transition={{ duration: 0.18, ease: 'easeInOut' }}
                  >
                    Get FREE 3D Design
                  </motion.span>
                </div>
              </motion.button>
              <motion.button
                initial={{ borderRadius: 40 }}
                whileHover={{ borderRadius: 12 }}
                transition={{ duration: 0.1, ease: 'easeOut' }}
                onHoverStart={() => setIsHoveredDemo(true)}
                onHoverEnd={() => setIsHoveredDemo(false)}
                className="px-8 py-3 bg-gray-100 text-black hover:bg-gray-200 font-semibold inline-flex items-center justify-center overflow-hidden relative cursor-pointer"
                style={{ fontFamily: 'var(--font-figtree)', fontWeight: 600 }}
              >
                <div className="relative inline-flex items-center">
                  <motion.span
                    className="inline-flex items-center"
                    initial="initial"
                    animate={isHoveredDemo ? 'hover' : 'initial'}
                    variants={textVariants}
                    transition={{ duration: 0.12, ease: 'easeInOut' }}
                  >
                    View Our Projects
                  </motion.span>
                  <motion.span
                    className="absolute inset-0 inline-flex items-center"
                    initial="initial"
                    animate={isHoveredDemo ? 'hover' : 'initial'}
                    variants={textVariantsHover}
                    transition={{ duration: 0.18, ease: 'easeInOut' }}
                  >
                    View Our Projects
                  </motion.span>
                </div>
              </motion.button>
            </div>
          </div>

          {/* Right Column - Visuals Section */}
          <div className="relative pr-12 flex justify-end">
            <div className="relative">
              {/* Main Application UI Screenshot */}
              <div className="w-[500px] h-[336px] bg-gray-200 rounded-2xl overflow-hidden shadow-lg border border-black">
                <img
                  src="/kitchen-1.jpeg"
                  alt="Beautiful Kitchen Remodel by E&E"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bathroom Widget - Bottom Right overlapping */}
              <div className="absolute bottom-0 -right-20 h-[150px] w-[250px] bg-white border border-black rounded-xl overflow-hidden shadow-lg z-10">
                <img
                  src="/bathroom-1.jpg"
                  alt="Bathroom Remodel"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section - Inverted */}
      <div className="rounded-2xl md:rounded-4xl p-6 md:p-12 bg-white mt-6 md:mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[67px] items-center">
          {/* Left Column - Visuals Section */}
          <div className="relative pl-12 flex justify-start">
            <div className="relative">
              {/* Main Application UI Screenshot */}
              <div className="w-[500px] h-[336px] bg-gray-200 rounded-2xl overflow-hidden shadow-lg border border-black">
                <img
                  src="/project-1.jpg"
                  alt="Whole House Remodel by E&E"
                  className="w-full h-full object-cover object-left"
                />
              </div>

              {/* Outdoor Widget - Bottom Left overlapping */}
              <div className="absolute bottom-0 -left-20 h-[224px] w-[373px] bg-white border border-black rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/outdoor-1.jpg"
                  alt="Outdoor Living Space"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Content Section */}
          <div className="flex flex-col gap-4 md:gap-[19px]">
            {/* Header with Icon */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0891b2] flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="text-base md:text-lg text-gray-600" style={{ fontFamily: 'var(--font-figtree)', fontWeight: 500 }}>
                25+ Years of Expert Craftsmanship
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Family-Owned Quality<br />You Can Trust
            </h2>

            {/* Descriptive Paragraph */}
            <p className="text-lg md:text-2xl text-gray-600 leading-relaxed tracking-tighter" style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400 }}>
              Ezra & Ester personally manage every project. No sales teams, no project managers - you work directly with the owners who stake their reputation on your satisfaction.
            </p>

            {/* Feature List - Two column grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7 mt-3 md:mt-[11px]">
              {/* Licensed Feature */}
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Database className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-2xl font-medium text-black tracking-tighter" style={{ fontFamily: 'var(--font-figtree)', fontWeight: 500 }}>
                  Fully Licensed
                </h3>
                <p className="text-gray-600 leading-tight text-lg tracking-tighter" style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400 }}>
                  CA License #1087571. Fully bonded and insured. We handle all permits and inspections for complete peace of mind.
                </p>
              </div>

              {/* Coverage Feature */}
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-2xl font-medium text-black tracking-tighter" style={{ fontFamily: 'var(--font-figtree)', fontWeight: 500 }}>
                  3 Counties Served
                </h3>
                <p className="text-gray-600 leading-tight text-lg tracking-tighter" style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400 }}>
                  Ventura, Santa Barbara & Los Angeles Counties. Three convenient office locations to serve you better.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-4 mt-3 md:mt-[11px]">
              <motion.button
                initial={{ borderRadius: 40 }}
                whileHover={{ borderRadius: 12 }}
                transition={{ duration: 0.1, ease: 'easeOut' }}
                onHoverStart={() => setIsHoveredLearn2(true)}
                onHoverEnd={() => setIsHoveredLearn2(false)}
                className="px-8 py-3 bg-[#0891b2] text-white hover:bg-[#0891b2]/90 font-semibold inline-flex items-center justify-center overflow-hidden relative cursor-pointer"
                style={{ fontFamily: 'var(--font-figtree)', fontWeight: 600 }}
              >
                <div className="relative inline-flex items-center">
                  <motion.span
                    className="inline-flex items-center"
                    initial="initial"
                    animate={isHoveredLearn2 ? 'hover' : 'initial'}
                    variants={textVariants}
                    transition={{ duration: 0.12, ease: 'easeInOut' }}
                  >
                    Meet Ezra & Ester
                  </motion.span>
                  <motion.span
                    className="absolute inset-0 inline-flex items-center"
                    initial="initial"
                    animate={isHoveredLearn2 ? 'hover' : 'initial'}
                    variants={textVariantsHover}
                    transition={{ duration: 0.18, ease: 'easeInOut' }}
                  >
                    Meet Ezra & Ester
                  </motion.span>
                </div>
              </motion.button>
              <motion.button
                initial={{ borderRadius: 40 }}
                whileHover={{ borderRadius: 12 }}
                transition={{ duration: 0.1, ease: 'easeOut' }}
                onHoverStart={() => setIsHoveredDemo2(true)}
                onHoverEnd={() => setIsHoveredDemo2(false)}
                className="px-8 py-3 bg-gray-100 text-black hover:bg-gray-200 font-semibold inline-flex items-center justify-center overflow-hidden relative cursor-pointer"
                style={{ fontFamily: 'var(--font-figtree)', fontWeight: 600 }}
              >
                <div className="relative inline-flex items-center">
                  <motion.span
                    className="inline-flex items-center"
                    initial="initial"
                    animate={isHoveredDemo2 ? 'hover' : 'initial'}
                    variants={textVariants}
                    transition={{ duration: 0.12, ease: 'easeInOut' }}
                  >
                    Schedule Consultation
                  </motion.span>
                  <motion.span
                    className="absolute inset-0 inline-flex items-center"
                    initial="initial"
                    animate={isHoveredDemo2 ? 'hover' : 'initial'}
                    variants={textVariantsHover}
                    transition={{ duration: 0.18, ease: 'easeInOut' }}
                  >
                    Schedule Consultation
                  </motion.span>
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurpleBoxSection;