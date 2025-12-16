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
        <div className="relative w-full h-[350px] sm:h-[400px] md:h-[450px]">
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
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-center p-6 sm:p-8 md:p-10">
            <div className="max-w-2xl">
              {/* Animated Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-3 sm:mb-4"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#0891b2] animate-pulse" />
                <span className="text-white/90 text-xs font-medium tracking-tight">
                  25+ Years of Excellence
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tighter leading-tight"
              >
                Transform Your Home
                <span className="text-[#0891b2]"> With Expert Remodeling</span>
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-sm sm:text-base text-white/80 tracking-tight mt-2 sm:mt-3 max-w-md"
              >
                Ezra & Ester personally manage every project from start to finish.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-row gap-3 mt-4 sm:mt-5"
              >
                <Button
                  variant="blue"
                  customBackgroundColor="#0891b2"
                  href="/contact"
                >
                  Get FREE 3D Design
                </Button>
                <Button
                  variant="white"
                  href="/projects"
                >
                  View Our Work
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Video Controls */}
          <div className="absolute bottom-6 right-6 flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleMute}
              className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={togglePlay}
              className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4 ml-0.5" />
              )}
            </motion.button>
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
