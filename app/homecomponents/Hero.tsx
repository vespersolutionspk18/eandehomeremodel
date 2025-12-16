"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../components/Button";
import { ArrowRight, ChevronDown } from "lucide-react";

const heroSlides = [
  "/hero-slides/slide-1.jpg",
  "/hero-slides/slide-2.jpg",
  "/hero-slides/slide-3.jpg",
  "/hero-slides/slide-4.jpg",
  "/hero-slides/slide-5.jpg",
  "/hero-slides/slide-6.jpg",
];

interface HeroProps {
  preHeader?: string;
  headline?: string;
  subtitle?: string;
  backgroundStyle?: React.CSSProperties;
  height?: string;
  showARVRBanner?: boolean;
  showForm?: boolean;
  showCapterra?: boolean;
  buttonColors?: {
    learnMore?: string;
    contactUs?: string;
  };
  headlineColor?: string;
  subtitleColor?: string;
  overlayOpacity?: number;
}

const Hero = ({
  preHeader,
  headline = "Transform Your Home with Expert Remodeling",
  subtitle = "Family-owned with 25+ years of experience. Ezra & Ester personally manage every project. Kitchen, bathroom, ADU, and whole house remodeling in Ventura, Santa Barbara & Los Angeles Counties.",
  backgroundStyle,
  height = "760px",
  showARVRBanner = true,
  showForm = true,
  showCapterra = true,
  buttonColors,
  headlineColor = '#ffffff',
  subtitleColor = '#ffffff',
  overlayOpacity = 0.5
}: HeroProps = {}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    zipcode: "",
    hearAbout: "",
    projectTypes: [] as string[],
    message: ""
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000); // 7 seconds per slide
    return () => clearInterval(interval);
  }, []);

  const hearAboutOptions = [
    { value: "google", label: "Google Search" },
    { value: "yelp", label: "Yelp" },
    { value: "referral", label: "Friend/Family Referral" },
    { value: "social", label: "Social Media" },
    { value: "drove-by", label: "Drove By a Project" },
    { value: "houzz", label: "Houzz" },
    { value: "other", label: "Other" }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      projectTypes: checked
        ? [...prev.projectTypes, value]
        : prev.projectTypes.filter(type => type !== value)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="p-4 sm:p-5 pb-[env(safe-area-inset-bottom)]">
      <div
        className="flex flex-col lg:flex-row rounded-2xl sm:rounded-2xl justify-between relative overflow-hidden min-h-[580px] sm:min-h-[600px]"
        style={showForm ? undefined : { height }}
      >
        {/* Ken Burns Animation Styles */}
        <style jsx>{`
          @keyframes kenburns-1 {
            0% { transform: scale(1) translate(0, 0); }
            100% { transform: scale(1.15) translate(-2%, -1%); }
          }
          @keyframes kenburns-2 {
            0% { transform: scale(1.15) translate(-2%, -2%); }
            100% { transform: scale(1) translate(0, 0); }
          }
          @keyframes kenburns-3 {
            0% { transform: scale(1) translate(0, 0); }
            100% { transform: scale(1.12) translate(2%, -1%); }
          }
          @keyframes kenburns-4 {
            0% { transform: scale(1.12) translate(1%, 1%); }
            100% { transform: scale(1) translate(0, 0); }
          }
          @keyframes kenburns-5 {
            0% { transform: scale(1) translate(0, 0); }
            100% { transform: scale(1.18) translate(-1%, 2%); }
          }
          @keyframes kenburns-6 {
            0% { transform: scale(1.15) translate(2%, 0); }
            100% { transform: scale(1.02) translate(-1%, -1%); }
          }
        `}</style>

        {/* Background Slideshow with Ken Burns */}
        {heroSlides.map((slide, index) => (
          <div
            key={slide}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out overflow-hidden"
            style={{
              opacity: index === currentSlide ? 1 : 0,
              zIndex: 0,
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${slide})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                animation: index === currentSlide ? `kenburns-${(index % 6) + 1} 8s ease-out forwards` : 'none',
                willChange: 'transform',
              }}
            />
          </div>
        ))}

        {/* Dark Overlay */}
        <div
          className="absolute inset-0 z-[1]"
          style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }}
        />

        {/* Left Content Section */}
        <div className={`${showForm ? 'w-full lg:w-1/2' : 'w-full'} p-5 sm:p-5 md:p-6 lg:p-5 flex flex-col relative z-[2]`}>
          <div className={`p-1 sm:p-4 md:p-5 flex flex-col gap-5 sm:gap-5 md:gap-7 ${showForm ? 'items-start text-left' : 'items-center text-center'}`}>
            {/* FREE 3D Design Banner or Pre-header */}
            {showARVRBanner && (
              <Link href="/contact">
                <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 w-fit cursor-pointer hover:scale-105 transition-transform duration-200 border border-white/30 rounded-full bg-black/30 backdrop-blur-sm">
                  <span
                    className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md text-xs font-bold text-white"
                    style={{
                      background: '#0891b2',
                      boxShadow: '0 0 10px rgba(8, 145, 178, 0.4), inset 0 1px 3px rgba(8, 145, 178, 0.3)',
                      border: '1px solid rgba(8, 145, 178, 0.3)',
                      textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    FREE
                  </span>
                  <span className="text-white text-xs sm:text-sm font-medium tracking-tight flex items-center gap-1 sm:gap-2">
                    <span className="hidden sm:inline">FREE 3D Design - Visualize Your Dream Home Before We Build</span>
                    <span className="sm:hidden">FREE 3D Design</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </span>
                </div>
              </Link>
            )}

            {preHeader && !showARVRBanner && (
              <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 w-fit border border-white/30 rounded-full bg-black/30 backdrop-blur-sm">
                <span className="text-white text-xs sm:text-sm font-medium tracking-tight">
                  {preHeader}
                </span>
              </div>
            )}

            <h1 className="text-[2rem] leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tighter" style={{ color: headlineColor }}>
              {headline.split(', ').map((part, i) => (
                <React.Fragment key={i}>
                  {part}
                  {i < headline.split(', ').length - 1 && <>, <br /></>}
                </React.Fragment>
              ))}
            </h1>
            <h5 className="text-[0.95rem] leading-relaxed sm:text-lg md:text-xl lg:text-2xl tracking-tighter" style={{ color: subtitleColor }}>
              {subtitle}
            </h5>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-3 w-full sm:w-auto">
              <Button variant="primary" customBackgroundColor={buttonColors?.learnMore || '#0891b2'} className="w-full min-h-[48px] sm:w-auto" href="/services">Our Services</Button>
              <Button variant="green" customBackgroundColor={buttonColors?.contactUs} className="w-full min-h-[48px] sm:w-auto" href="/projects">View Our Work</Button>
            </div>
          </div>

          {/* Rating Section - Aligned to bottom */}
          {showCapterra && (
            <div className={`mt-auto p-2 sm:p-4 md:p-5 ${showForm ? 'items-start' : 'items-center'}`}>
              <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 backdrop-blur-sm bg-black/30 border-[1.5px] border-white/30 rounded-full w-fit">
                <div className="flex items-center justify-center h-5 sm:h-6 flex-shrink-0">
                  <Image
                    src="/yelp-5-star.png"
                    alt="Yelp 5 Star"
                    width={60}
                    height={20}
                    className="object-contain sm:w-[70px] sm:h-[24px]"
                  />
                </div>
                <span className="text-white text-sm sm:text-base font-semibold">5.0 Rating on Yelp</span>
                <div className="flex gap-0.5 sm:gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-red-500" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Contact Form Section */}
        {showForm && (
          <div className="w-full lg:w-1/2 p-4 sm:p-5 md:p-6 lg:p-5 flex items-center justify-end relative z-[2]">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 w-full max-w-md shadow-2xl">
              <h2 className="text-[1.35rem] leading-tight sm:text-3xl font-normal text-gray-900 mb-2 sm:mb-3 tracking-tight">
                Get Your FREE 3D Design
              </h2>
              <p className="text-gray-600 mb-5 sm:mb-8 text-[0.875rem] sm:text-base leading-relaxed">
                See your dream remodel come to life before we start. Schedule a free consultation and receive a complimentary 3D design of your project.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-3">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name*"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 sm:px-4 py-3 sm:py-2.5 rounded-xl sm:rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0891b2] focus:border-transparent text-gray-900 placeholder-gray-400 text-base sm:text-base min-h-[48px]"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 sm:px-4 py-3 sm:py-2.5 rounded-xl sm:rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0891b2] focus:border-transparent text-gray-900 placeholder-gray-400 text-base sm:text-base min-h-[48px]"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-3">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone*"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 sm:px-4 py-3 sm:py-2.5 rounded-xl sm:rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0891b2] focus:border-transparent text-gray-900 placeholder-gray-400 text-base sm:text-base min-h-[48px]"
                    required
                  />
                  <input
                    type="text"
                    name="zipcode"
                    placeholder="Zipcode*"
                    value={formData.zipcode}
                    onChange={handleInputChange}
                    className="w-full px-4 sm:px-4 py-3 sm:py-2.5 rounded-xl sm:rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0891b2] focus:border-transparent text-gray-900 placeholder-gray-400 text-base sm:text-base min-h-[48px]"
                    required
                  />
                </div>

                <div className="relative" ref={dropdownRef}>
                  <button
                    type="button"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className={`w-full px-4 sm:px-4 py-3 sm:py-2.5 rounded-xl sm:rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0891b2] focus:border-transparent text-base sm:text-base bg-white flex items-center justify-between transition-all min-h-[48px] ${formData.hearAbout ? 'text-gray-900' : 'text-gray-400'}`}
                  >
                    <span className="truncate pr-2">{formData.hearAbout ? hearAboutOptions.find(o => o.value === formData.hearAbout)?.label : 'How did you hear about us?'}</span>
                    <ChevronDown className={`w-5 h-5 flex-shrink-0 text-gray-400 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden max-h-[240px] overflow-y-auto">
                      {hearAboutOptions.map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => {
                            setFormData(prev => ({ ...prev, hearAbout: option.value }));
                            setDropdownOpen(false);
                          }}
                          className={`w-full px-4 sm:px-4 py-3 sm:py-2.5 text-left text-base sm:text-base transition-colors hover:bg-gray-50 active:bg-gray-100 min-h-[48px] ${formData.hearAbout === option.value ? 'bg-[#0891b2]/10 text-[#0891b2]' : 'text-gray-700'}`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <p className="text-sm text-gray-700 font-medium">Project Type* (Select All That Apply)</p>
                  <div className="flex flex-wrap gap-x-3 gap-y-2 sm:gap-x-4 sm:gap-y-1">
                    {['Kitchen Remodel', 'Bathroom Remodel', 'Room Addition', 'Garage ADU', 'Other'].map((type) => (
                      <label key={type} className="flex items-center gap-2 text-[0.875rem] sm:text-sm text-gray-700 cursor-pointer py-1 active:opacity-70">
                        <input
                          type="checkbox"
                          value={type}
                          checked={formData.projectTypes.includes(type)}
                          onChange={handleCheckboxChange}
                          className="w-5 h-5 sm:w-4 sm:h-4 rounded border-gray-300 text-[#0891b2] focus:ring-[#0891b2]"
                        />
                        {type}
                      </label>
                    ))}
                  </div>
                </div>

                <textarea
                  name="message"
                  placeholder="Message (optional)"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={2}
                  className="w-full px-4 sm:px-4 py-3 sm:py-2.5 rounded-xl sm:rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0891b2] focus:border-transparent text-gray-900 placeholder-gray-400 resize-none text-base sm:text-base"
                />

                <div className="mt-2 sm:mt-2">
                  <Button type="submit" variant="blue" customBackgroundColor="#0891b2" className="w-full min-h-[52px]">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
