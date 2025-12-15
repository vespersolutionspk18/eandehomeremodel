"use client";
import React from "react";
import AboutUs from "./homecomponents/AboutUs";
import Hero from "./homecomponents/Hero";
import OurServices from "./homecomponents/OurServices";
import WhyChooseUs from "./homecomponents/WhyChooseUs";

import Footer from "./components/Footer";
import VideoSection from "./homecomponents/VideoSection";
import Header from "./components/Header";


export default function Home() {
  return (
   <>
   <Header enableScrollEffects={true} />
   <main className="pt-[5rem] sm:pt-[5.5rem] md:pt-[6rem]">
   <Hero
     headline="Don't Move. Improve."
   />
   <AboutUs />
   <OurServices />
   <VideoSection />
    <WhyChooseUs />
    <Footer />
    </main>
   </>
  );
}
