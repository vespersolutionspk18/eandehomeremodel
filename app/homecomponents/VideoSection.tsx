"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import Button from "../components/Button";

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Intersection observer to trigger animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div ref={sectionRef} className="p-3 sm:p-5">
      {/* Main Video Container */}
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden">
        {/* Video Element */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9]">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            poster="/video-thumbnail.jpg"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-center p-6 sm:p-10 md:p-16 lg:p-20">
            <div className="max-w-3xl">
              {/* Animated Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-4 sm:mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-[#0891b2] animate-pulse" />
                <span className="text-white/90 text-xs sm:text-sm font-medium tracking-tight">
                  25+ Years of Excellence
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tighter leading-[0.95]"
              >
                TRANSFORM YOUR HOME
                <br />
                <span className="text-[#0891b2]">WITH EXPERT REMODELING</span>
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 tracking-tighter mt-4 sm:mt-6 max-w-xl leading-relaxed"
              >
                Transform your existing home into the one you&apos;ve always dreamed of.
                Ezra & Ester personally manage every project.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8"
              >
                <Button
                  variant="blue"
                  customBackgroundColor="#0891b2"
                  size="lg"
                  href="/contact"
                >
                  Get FREE 3D Design
                </Button>
                <Button
                  variant="white"
                  size="lg"
                  href="/projects"
                >
                  View Our Work
                </Button>
              </motion.div>

              {/* Stats Row */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="flex flex-wrap gap-6 sm:gap-10 mt-8 sm:mt-12"
              >
                <div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tighter">1000+</div>
                  <div className="text-xs sm:text-sm text-white/60 tracking-tight">Projects Completed</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tighter">5.0★</div>
                  <div className="text-xs sm:text-sm text-white/60 tracking-tight">Client Rating</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tighter">3</div>
                  <div className="text-xs sm:text-sm text-white/60 tracking-tight">Counties Served</div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Video Controls */}
          <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleMute}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 sm:w-5 sm:h-5" />
              ) : (
                <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />
              )}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={togglePlay}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 sm:w-5 sm:h-5" />
              ) : (
                <Play className="w-4 h-4 sm:w-5 sm:h-5 ml-0.5" />
              )}
            </motion.button>
          </div>

          {/* Decorative Corner Element */}
          <div className="absolute top-4 sm:top-6 right-4 sm:right-6 hidden md:block">
            <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center text-white text-xs font-bold border-2 border-white/20">E</div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-700 flex items-center justify-center text-white text-xs font-bold border-2 border-white/20">E</div>
              </div>
              <span className="text-white/90 text-sm font-medium tracking-tight">Family Owned Since 1999</span>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Bar Below Video */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="mt-4 sm:mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
      >
        {[
          { label: "FREE 3D Design", sublabel: "See it before you build" },
          { label: "25+ Years", sublabel: "Trusted experience" },
          { label: "Licensed & Insured", sublabel: "CA Lic #1087571" },
          { label: "No Middlemen", sublabel: "Work directly with owners" },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-stone-200/40 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center hover:bg-stone-200/60 transition-colors"
          >
            <div className="text-sm sm:text-base md:text-lg font-semibold text-black/80 tracking-tighter">
              {item.label}
            </div>
            <div className="text-xs sm:text-sm text-black/50 tracking-tight mt-0.5">
              {item.sublabel}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default VideoSection;
