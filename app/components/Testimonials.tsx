'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

export type ReviewSource = 'yelp' | 'google' | 'houzz';

export interface Testimonial {
  id: number;
  body: string;
  clientName: string;
  clientCompany: string;
  source: ReviewSource;
  rating?: number; // 1-5 stars, defaults to 5
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  title?: string;
  subtitle?: string;
  accentColor?: string;
}

const reviewSourceConfig: Record<ReviewSource, { logo: string; name: string; color: string; bgColor: string }> = {
  yelp: {
    logo: '/yelp-5-star.png',
    name: 'Yelp',
    color: '#D32323',
    bgColor: 'bg-red-50'
  },
  google: {
    logo: '/google-logo.png',
    name: 'Google',
    color: '#4285F4',
    bgColor: 'bg-blue-50'
  },
  houzz: {
    logo: '/houzz-logo.webp',
    name: 'Houzz',
    color: '#4DBC15',
    bgColor: 'bg-green-50'
  }
};

const StarRating: React.FC<{ rating: number; size?: string }> = ({ rating, size = 'w-4 h-4' }) => {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`${size} ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const Testimonials: React.FC<TestimonialsProps> = ({
  testimonials,
  title = "Client Reviews",
  subtitle = "What Our Homeowners Say",
  accentColor = '#0891b2'
}) => {
  // Create infinite array by tripling the testimonials
  const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials];
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-scroll functionality
  useEffect(() => {
    const startAutoScroll = () => {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % testimonials.length;
          return nextIndex;
        });
      }, 5000); // Change testimonial every 5 seconds
    };

    startAutoScroll();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [testimonials.length]);

  // Scroll to current testimonial
  useEffect(() => {
    if (scrollContainerRef.current) {
      const isMobile = window.innerWidth < 640;
      const isTablet = window.innerWidth >= 640 && window.innerWidth < 768;

      let cardWidth = 420;
      let gap = 20;

      if (isMobile) {
        cardWidth = 300;
        gap = 12;
      } else if (isTablet) {
        cardWidth = 360;
        gap = 16;
      }

      const scrollPosition = currentIndex * (cardWidth + gap);
      scrollContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  const handlePrevious = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    setCurrentIndex((prevIndex) => {
      return prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1;
    });

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
  };

  const handleNext = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
  };

  // Group testimonials by source for summary
  const reviewCounts = testimonials.reduce((acc, t) => {
    acc[t.source] = (acc[t.source] || 0) + 1;
    return acc;
  }, {} as Record<ReviewSource, number>);

  return (
    <div className="p-3 sm:p-5">
      <div className="flex flex-col gap-8 sm:gap-10 md:gap-12">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 px-1 sm:px-3">
          <div className="flex flex-col gap-4 sm:gap-5 w-full lg:w-[30%] justify-between">
            <div className="flex flex-col gap-2 sm:gap-3">
              <h5 className="text-sm sm:text-base text-black/60 tracking-tight">{title}</h5>
              <h4 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tighter text-black/90">{subtitle}</h4>
            </div>

            {/* Review Sources Summary */}
            <div className="flex flex-wrap gap-3 sm:gap-4 mt-2">
              {Object.entries(reviewCounts).map(([source, count]) => {
                const config = reviewSourceConfig[source as ReviewSource];
                return (
                  <div
                    key={source}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg ${config.bgColor} border border-black/5`}
                  >
                    <Image
                      src={config.logo}
                      alt={config.name}
                      width={source === 'yelp' ? 60 : 20}
                      height={20}
                      className="h-4 sm:h-5 w-auto object-contain"
                      unoptimized
                    />
                    {source !== 'yelp' && (
                      <span className="text-xs sm:text-sm font-medium text-black/70">{count} reviews</span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Navigation */}
            <div className="flex flex-row gap-2 sm:gap-3 mt-4">
              <button
                onClick={handlePrevious}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-stone-200/40 rounded-full text-black flex items-center justify-center hover:bg-stone-300/50 transition-colors duration-200 cursor-pointer"
                aria-label="Previous testimonial"
              >
                <svg width="18" height="18" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-stone-200/40 rounded-full text-black flex items-center justify-center hover:bg-stone-300/50 transition-colors duration-200 cursor-pointer"
                aria-label="Next testimonial"
              >
                <svg width="18" height="18" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>

              {/* Dots indicator */}
              <div className="flex items-center gap-1.5 ml-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      if (intervalRef.current) clearInterval(intervalRef.current);
                      setCurrentIndex(idx);
                      intervalRef.current = setInterval(() => {
                        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
                      }, 5000);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === currentIndex ? 'w-6 bg-black/60' : 'bg-black/20 hover:bg-black/30'
                    }`}
                    aria-label={`Go to review ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Reviews Carousel */}
          <div className="relative flex-1 overflow-hidden w-full lg:w-auto">
            <div
              ref={scrollContainerRef}
              className="flex flex-row gap-3 sm:gap-4 md:gap-5 overflow-x-hidden scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {infiniteTestimonials.map((testimonial, index) => {
                const sourceConfig = reviewSourceConfig[testimonial.source];
                const rating = testimonial.rating || 5;

                return (
                  <div
                    key={`${testimonial.id}-${index}`}
                    className="rounded-2xl sm:rounded-3xl bg-stone-200/40 p-5 sm:p-6 md:p-7 flex flex-col gap-4 sm:gap-5 justify-between min-w-[300px] w-[300px] sm:min-w-[360px] sm:w-[360px] md:min-w-[420px] md:w-[420px] min-h-[280px] sm:min-h-[300px] md:min-h-[320px] transition-all duration-300"
                  >
                    {/* Source Badge & Rating */}
                    <div className="flex items-center justify-between">
                      <div className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg ${sourceConfig.bgColor}`}>
                        <Image
                          src={sourceConfig.logo}
                          alt={sourceConfig.name}
                          width={testimonial.source === 'yelp' ? 50 : 18}
                          height={18}
                          className="h-4 w-auto object-contain"
                          unoptimized
                        />
                        {testimonial.source !== 'yelp' && (
                          <span className="text-xs font-medium" style={{ color: sourceConfig.color }}>
                            {sourceConfig.name}
                          </span>
                        )}
                      </div>
                      <StarRating rating={rating} size="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>

                    {/* Review Text */}
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed text-black/80 tracking-tight flex-1">
                      &ldquo;{testimonial.body}&rdquo;
                    </p>

                    {/* Reviewer Info */}
                    <div className="flex items-center gap-3 sm:gap-4 pt-3 border-t border-black/10">
                      <div
                        className="w-10 h-10 sm:w-11 sm:h-11 rounded-full text-white flex items-center justify-center flex-shrink-0 font-semibold text-base sm:text-lg"
                        style={{ backgroundColor: accentColor }}
                      >
                        {testimonial.clientName.charAt(0)}
                      </div>
                      <div className="flex flex-col">
                        <h5 className="text-base sm:text-lg font-medium text-black/90 tracking-tight">{testimonial.clientName}</h5>
                        <p className="text-xs sm:text-sm text-black/50 tracking-tight">{testimonial.clientCompany}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Fade edges */}
            <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-white to-transparent pointer-events-none hidden lg:block" />
            <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-white to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Overall Rating Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 py-4 sm:py-6 px-4 sm:px-8 bg-stone-100 rounded-xl sm:rounded-2xl mx-1 sm:mx-3">
          <div className="flex items-center gap-3">
            <span className="text-3xl sm:text-4xl font-bold text-black tracking-tighter">5.0</span>
            <StarRating rating={5} size="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div className="h-px sm:h-8 w-full sm:w-px bg-black/10" />
          <p className="text-sm sm:text-base text-black/60 text-center sm:text-left">
            Based on <span className="font-semibold text-black/80">verified reviews</span> from Yelp, Google & Houzz
          </p>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
