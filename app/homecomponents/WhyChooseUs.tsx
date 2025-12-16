'use client'

import React from 'react'
import { Check, X, Zap, Shield, TrendingUp, Users, Globe, Info, Box, Award } from 'lucide-react'
import { IoCheckmarkCircle } from 'react-icons/io5'

interface ComparisonFeature {
  icon: React.ComponentType<{ className?: string }>;
  title: string | React.ReactNode;
  description: string;
  lattice: boolean | "partial";
  competitors: boolean | "partial";
}

const WhyChooseUs = () => {
  const comparisonFeatures: ComparisonFeature[] = [
    {
      icon: Users,
      title: "Family Owned & Operated",
      description: "Ezra & Ester personally manage every project. No middlemen, no runaround - direct communication with the owners.",
      lattice: true,
      competitors: false
    },
    {
      icon: Box,
      title: "FREE 3D Design Visualization",
      description: "See your dream remodel before we start. Most contractors charge $2,000-$5,000 for this service.",
      lattice: true,
      competitors: false
    },
    {
      icon: Zap,
      title: "25+ Years of Experience",
      description: "Quarter century of proven expertise in kitchen, bathroom, and whole house remodeling across Southern California.",
      lattice: true,
      competitors: "partial"
    },
    {
      icon: Award,
      title: "CA License #1087571",
      description: "Fully licensed, bonded, and insured. Complete peace of mind for your investment.",
      lattice: true,
      competitors: "partial"
    },
    {
      icon: TrendingUp,
      title: "Full-Service Remodeling",
      description: "Kitchen, bathroom, ADU, outdoor living, whole house - everything under one roof.",
      lattice: true,
      competitors: "partial"
    },
    {
      icon: Shield,
      title: "Multi-County Coverage",
      description: "Serving Ventura, Santa Barbara, and Los Angeles Counties with three convenient office locations.",
      lattice: true,
      competitors: false
    },
    {
      icon: Globe,
      title: "5-Star Reviews",
      description: "Consistently rated 5 stars on Yelp, Google, and Houzz by our satisfied clients.",
      lattice: true,
      competitors: "partial"
    }
  ];

  return (
    <div className="p-4 sm:p-5" id="whycooseus">
      <div className="p-2 sm:p-5 rounded-2xl sm:rounded-3xl lg:rounded-4xl flex flex-col gap-10 sm:gap-16 md:gap-20 lg:gap-24 tracking-tighter">
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-8 lg:gap-16">
          <h5 className="text-[1.5rem] leading-tight sm:text-3xl md:text-4xl text-black/80 font-medium tracking-tighter w-full lg:w-[28%]">
            Why Choose E&E
          </h5>
          <p className="text-black/75 text-base sm:text-xl md:text-2xl tracking-tighter w-full lg:w-[68%] leading-relaxed">
            When it comes to your home, you deserve the best. See how E&E Home Remodeling compares to other contractors - from our FREE 3D design service to our 25+ years of experience, the choice becomes clear.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-200">
          {/* Table Header */}
          <div className="grid grid-cols-[1fr_70px_70px] sm:grid-cols-[1.5fr_1fr_1fr] md:grid-cols-[2fr_1fr_1fr] bg-stone-200/40 border-b border-gray-200">
            <div className="p-2 sm:p-3 md:p-4 lg:p-5"></div>
            <div className="p-2 sm:p-3 md:p-4 lg:p-5 text-center border-l border-gray-200">
              <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-[#0891b2] tracking-tighter">E&E</h3>
            </div>
            <div className="p-2 sm:p-3 md:p-4 lg:p-5 text-center border-l border-gray-200">
              <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-500 tracking-tight">Others</h3>
            </div>
          </div>

          {/* Feature Rows */}
          {comparisonFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`grid grid-cols-[1fr_70px_70px] sm:grid-cols-[1.5fr_1fr_1fr] md:grid-cols-[2fr_1fr_1fr] ${
                  index !== comparisonFeatures.length - 1 ? "border-b border-gray-200" : ""
                }`}
              >
                {/* Feature Info Column */}
                <div className="p-3 sm:p-3 md:p-4 lg:p-5 flex items-start gap-2 sm:gap-3 md:gap-4">
                  <div className="flex-shrink-0 hidden sm:block">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-lg bg-[#0891b2]/10 flex items-center justify-center">
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#0891b2]" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-0.5 sm:gap-1">
                    <h4 className="text-[0.8rem] leading-snug sm:text-sm md:text-base lg:text-lg font-semibold text-black tracking-tight">
                      {feature.title}
                    </h4>
                    <p className="text-xs sm:text-xs md:text-sm lg:text-base text-gray-600 tracking-tight hidden sm:block leading-snug" style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400 }}>
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Expand Status Column */}
                <div className="p-2 sm:p-3 md:p-4 lg:p-5 flex items-center justify-center border-l border-gray-200">
                  {feature.lattice === true && (
                    <IoCheckmarkCircle className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-green-600" />
                  )}
                  {feature.lattice === "partial" && (
                    <div className="flex items-center gap-1 sm:gap-2 group relative">
                      <span className="text-[10px] sm:text-xs md:text-sm lg:text-base font-medium text-gray-600">Partial</span>
                      <Info className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-gray-400 cursor-help" />
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-black/90 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10 whitespace-nowrap">
                        Partial; competitors may have fewer features or less support.
                      </div>
                    </div>
                  )}
                  {feature.lattice === false && (
                    <X className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-400 stroke-[4] scale-[0.98]" />
                  )}
                </div>

                {/* Competitors Status Column */}
                <div className="p-2 sm:p-3 md:p-4 lg:p-5 flex items-center justify-center border-l border-gray-200">
                  {feature.competitors === true && (
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-green-700 stroke-[4] scale-[0.98]" />
                  )}
                  {feature.competitors === "partial" && (
                    <div className="flex items-center gap-1 sm:gap-2 group relative">
                      <span className="text-[10px] sm:text-xs md:text-sm lg:text-base font-medium text-gray-600">Partial</span>
                      <Info className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-gray-400 cursor-help" />
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-black/90 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10 whitespace-nowrap">
                        Partial; competitors may have fewer features or less support.
                      </div>
                    </div>
                  )}
                  {feature.competitors === false && (
                    <X className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-400 stroke-[4] scale-[0.98]" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Row - Clean Border Style */}
        <div className="grid grid-cols-2 gap-2 sm:gap-0 md:grid-cols-4">
          <div className="p-4 sm:p-6 md:p-8 md:border-l border-stone-300 first:border-l-0 bg-stone-100/50 sm:bg-transparent rounded-xl sm:rounded-none">
            <div className="text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl font-medium text-black tracking-tighter">25+</div>
            <p className="text-[0.8rem] sm:text-base md:text-lg text-black/60 tracking-tighter mt-1 sm:mt-2">Years Experience</p>
          </div>
          <div className="p-4 sm:p-6 md:p-8 md:border-l border-stone-300 bg-stone-100/50 sm:bg-transparent rounded-xl sm:rounded-none">
            <div className="text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl font-medium text-black tracking-tighter">1000+</div>
            <p className="text-[0.8rem] sm:text-base md:text-lg text-black/60 tracking-tighter mt-1 sm:mt-2">Projects Completed</p>
          </div>
          <div className="p-4 sm:p-6 md:p-8 md:border-l border-stone-300 bg-stone-100/50 sm:bg-transparent rounded-xl sm:rounded-none">
            <div className="text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl font-medium text-black tracking-tighter">5.0★</div>
            <p className="text-[0.8rem] sm:text-base md:text-lg text-black/60 tracking-tighter mt-1 sm:mt-2">Client Rating</p>
          </div>
          <div className="p-4 sm:p-6 md:p-8 md:border-l border-stone-300 bg-stone-100/50 sm:bg-transparent rounded-xl sm:rounded-none">
            <div className="text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl font-medium text-black tracking-tighter">3</div>
            <p className="text-[0.8rem] sm:text-base md:text-lg text-black/60 tracking-tighter mt-1 sm:mt-2">Counties Served</p>
          </div>
        </div>

        {/* Our Process - Simple Horizontal */}
        <div className="flex flex-col gap-5 sm:gap-8 md:gap-10">
          <div className="flex flex-col lg:flex-row gap-3 sm:gap-6 lg:gap-16">
            <h5 className="text-[1.5rem] leading-tight sm:text-3xl md:text-4xl text-black/80 font-medium tracking-tighter w-full lg:w-[28%]">
              Our Process
            </h5>
            <p className="text-black/75 text-base sm:text-xl md:text-2xl tracking-tighter w-full lg:w-[68%] leading-relaxed">
              From first consultation to final walkthrough, we make remodeling simple and stress-free.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 sm:gap-5 md:grid-cols-5 md:gap-6">
            {[
              { num: "01", title: "Consultation", desc: "Free in-home meeting to discuss your vision and budget", color: "bg-pink-100" },
              { num: "02", title: "3D Design", desc: "FREE visualization so you see exactly what you're getting", color: "bg-orange-100" },
              { num: "03", title: "Proposal", desc: "Transparent pricing with no hidden costs or surprises", color: "bg-yellow-100" },
              { num: "04", title: "Build", desc: "Expert construction with daily progress updates", color: "bg-green-100" },
              { num: "05", title: "Enjoy", desc: "Final walkthrough and warranty on all work", color: "bg-cyan-100" },
            ].map((step, index) => (
              <div key={index} className={`${step.color} rounded-xl sm:rounded-2xl p-3 sm:p-5 md:p-6 relative overflow-hidden group hover:scale-[1.02] active:scale-[0.98] transition-transform duration-300 ${index === 4 ? 'col-span-2 sm:col-span-1' : ''}`}>
                <div className="absolute -top-2 -right-2 text-4xl sm:text-6xl md:text-7xl font-bold text-black/5 tracking-tighter select-none">
                  {step.num}
                </div>
                <div className="relative">
                  <div className="text-[0.65rem] sm:text-sm font-medium text-black/40 mb-1 sm:mb-2">{step.num}</div>
                  <h4 className="text-[0.9rem] leading-tight sm:text-lg md:text-xl font-semibold text-black/80 mb-1 sm:mb-2 tracking-tighter">{step.title}</h4>
                  <p className="text-[0.7rem] leading-snug sm:text-sm text-black/60 tracking-tight sm:leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs