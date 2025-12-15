"use client";
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface LeadChangeProps {
  text?: string;
  options?: string[];
  rotationInterval?: number; // Time in milliseconds to rotate between options
}

const LeadChange: React.FC<LeadChangeProps> = ({
  text = "Lead The Change",
  options = [],
  rotationInterval = 3000
}) => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [currentText, setCurrentText] = useState(options.length > 0 ? options[0] : text);
  const marqueeTl = useRef<gsap.core.Timeline | null>(null);
  const currentIndexRef = useRef(0);

  // Handle text rotation if options are provided
  useEffect(() => {
    if (options.length === 0) return;

    const interval = setInterval(() => {
      currentIndexRef.current = (currentIndexRef.current + 1) % options.length;
      setCurrentText(options[currentIndexRef.current]);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [options, rotationInterval]);

  // Marquee animation
  useEffect(() => {
    if (!marqueeRef.current) return;

    const marqueeContent = marqueeRef.current.querySelector('.marquee-content');
    if (!marqueeContent) return;

    // Remove existing clone if any
    const existingClone = marqueeRef.current.querySelector('.marquee-clone');
    if (existingClone) {
      existingClone.remove();
    }

    // Clone the content for seamless loop
    const clone = marqueeContent.cloneNode(true) as HTMLElement;
    clone.classList.add('marquee-clone');
    marqueeRef.current.appendChild(clone);

    // Get the width of one set of content
    const contentWidth = marqueeContent.getBoundingClientRect().width;

    // Kill existing timeline
    if (marqueeTl.current) {
      marqueeTl.current.kill();
    }

    // Set up the animation
    gsap.set([marqueeContent, clone], {
      x: 0
    });

    // Create the timeline
    marqueeTl.current = gsap.timeline({ repeat: -1 });

    marqueeTl.current.to([marqueeContent, clone], {
      x: -contentWidth,
      duration: 20,
      ease: "none"
    });

    return () => {
      if (marqueeTl.current) {
        marqueeTl.current.kill();
      }
    };
  }, [currentText]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    
    if (mediaQuery.matches) {
      const handleMouseMove = (e: MouseEvent) => {
        if (!buttonRef.current || !isHovered) return;
        
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        gsap.to(buttonRef.current, {
          x: x,
          y: y,
          duration: 0.3,
          ease: "power2.out"
        });
      };

      const handleMouseEnter = () => {
        setIsHovered(true);
        gsap.to(buttonRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: "back.out(1.7)"
        });
      };

      const handleMouseLeave = () => {
        setIsHovered(false);
        gsap.to(buttonRef.current, {
          opacity: 0,
          scale: 0,
          duration: 0.2,
          ease: "power2.in"
        });
      };

      // Wait for button to be in DOM
      setTimeout(() => {
        if (!buttonRef.current) return;
        
        // Set initial button state
        gsap.set(buttonRef.current, {
          opacity: 0,
          scale: 0,
          xPercent: -50,
          yPercent: -50
        });
      }, 100);

      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
      
      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [isHovered]);

  return (
    <div ref={containerRef} className="w-full overflow-hidden  py-10 lg:py-26 relative cursor-pointer">
      <div ref={marqueeRef} className="flex whitespace-nowrap">
        <div className="marquee-content flex items-center">
          <span className="text-black font-sans text-4xl md:text-6xl lg:text-8xl xl:text-9xl">
            {currentText}
          </span>
          <span className="text-black mx-4 md:mx-6 lg:mx-8 text-2xl md:text-4xl lg:text-6xl xl:text-7xl">•</span>
          <span className="text-black font-sans text-4xl md:text-6xl lg:text-8xl xl:text-9xl">
            {currentText}
          </span>
          <span className="text-black mx-4 md:mx-6 lg:mx-8 text-2xl md:text-4xl lg:text-6xl xl:text-7xl">•</span>
          <span className="text-black font-sans text-4xl md:text-6xl lg:text-8xl xl:text-9xl">
            {currentText}
          </span>
          <span className="text-black mx-4 md:mx-6 lg:mx-8 text-2xl md:text-4xl lg:text-6xl xl:text-7xl">•</span>
        </div>
      </div>
      <div 
        ref={buttonRef} 
        className="hidden lg:block absolute pointer-events-none"
        style={{ zIndex: 50, left: 0, top: 0 }}
      >
        <Link href="/contact" className="pointer-events-auto">
          <Button variant="default"  className='hover:cursor-pointer hover:bg-blue-500 hover:text-white'>GET IN TOUCH</Button>
        </Link>
      </div>
    </div>
  )
}

export default LeadChange