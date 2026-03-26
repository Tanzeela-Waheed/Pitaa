'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ArrowRight, MapPin, Calendar, Clock, Sun, Users, Award } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Cpu, Sparkles } from "lucide-react"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';

const images = [
  {
    id: 1,
    src: '/images/mainimage1.jpeg',
    alt: 'Slide 1'
  },
  {
    id: 2,
    src: '/images/mainimage2.png',
    alt: 'Slide 2'
  },
  {
    id: 3,
    src: '/images/mainimage3.jpeg',
    alt: 'Slide 3'
  },
  {
    id: 4,
    src: '/images/mainimage4.jpeg',
    alt: 'Slide 4'
  },
  {
    id: 5,
    src: '/images/mainimage5.jpeg',
    alt: 'Slide 5'
  },
  {
    id: 6,
    src: '/images/mainimage6.jpeg',
    alt: 'Slide 6'
  }
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
      easing: 'ease-out',
    });
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <main>
      {/* PROFESSIONAL SLIDER - Fully Responsive */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen overflow-hidden bg-slate-900">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>
        </div>

        {/* Images */}
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
              ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-contain"
                priority={index === 0}
                quality={100}
              />
              
              {/* Left Side Gradient - Responsive width */}
              <div className="absolute inset-y-0 left-0 w-16 sm:w-20 md:w-24 lg:w-32 bg-gradient-to-r from-slate-900 via-slate-900 to-transparent pointer-events-none"></div>
              
              {/* Right Side Gradient - Responsive width */}
              <div className="absolute inset-y-0 right-0 w-16 sm:w-20 md:w-24 lg:w-32 bg-gradient-to-l from-slate-900 via-slate-900 to-transparent pointer-events-none"></div>
              
              {/* Top subtle fade - Responsive height */}
              <div className="absolute inset-x-0 top-0 h-12 sm:h-14 md:h-16 lg:h-20 bg-gradient-to-b from-slate-900 to-transparent pointer-events-none"></div>
              
              {/* Bottom subtle fade - Responsive height */}
              <div className="absolute inset-x-0 bottom-0 h-12 sm:h-14 md:h-16 lg:h-20 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none"></div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows - Responsive sizing */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-30 group"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:bg-white/20 group-hover:scale-110">
            <ChevronLeft size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-white/70 group-hover:text-white" />
          </div>
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-30 group"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:bg-white/20 group-hover:scale-110">
            <ChevronRight size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-white/70 group-hover:text-white" />
          </div>
        </button>

        {/* Premium Dots - Responsive */}
        <div className="absolute bottom-4 sm:bottom-5 md:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 sm:gap-3 z-30">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
            >
              <div className={`transition-all duration-300 rounded-full ${
                index === currentIndex 
                  ? 'w-6 sm:w-8 md:w-10 h-1.5 sm:h-2 bg-gradient-to-r from-blue-400 to-blue-600 shadow-lg shadow-blue-500/50' 
                  : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/30 hover:bg-white/50'
              }`} />
            </button>
          ))}
        </div>

        {/* Decorative blur elements - Responsive sizing */}
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-20 h-20 sm:w-30 sm:h-30 md:w-40 md:h-40 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-30 h-30 sm:w-40 sm:h-40 md:w-60 md:h-60 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
      </div>



<section className="relative w-full bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      {/* Background layers – unchanged */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50/50 to-blue-100"></div>
      <div className="absolute top-0 -left-20 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -right-20 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-indigo-200/30 rounded-full blur-3xl"></div>
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, #2563eb 1px, transparent 0)`,
        backgroundSize: '48px 48px'
      }}></div>

      {/* Grid container – fixed negative margins */}
      <div className="container mx-auto px-4 sm:px-5 md:px-6 
                      grid grid-cols-1 lg:grid-cols-2 
                      gap-8 sm:gap-10 lg:gap-12 
                      items-center 
                      relative 
                      py-8 sm:py-12 md:py-16 lg:py-0
                      lg:-my-[60px] xl:-my-[90px]">
        
        {/* LEFT SLANTED BACKGROUND – fixed left positioning */}
        <div
          className="absolute -left-[60px] top-0 h-full w-[52%] 
                     bg-gradient-to-br from-[#005A9C] via-[#005A9C] to-[#005A9C]
                     hidden lg:block"
          style={{
            clipPath: "polygon(0 0, 95% 0, 70% 100%, 0% 100%)"
          }}
        ></div>

        {/* IMAGE SECTION */}
        <div 
          data-aos="fade-right"
          data-aos-duration="800"
          className="relative flex order-2 lg:order-1 justify-center items-center w-full"
        >
          <div className="relative w-full 
                          max-w-[90%] sm:max-w-[80%] md:max-w-[70%] 
                          lg:max-w-[760px] xl:max-w-[820px] 
                          mx-auto lg:mx-0 lg:mr-8">
            {/* Image – responsive heights using min-[480px] for xs-like breakpoint */}
            <div className="relative w-full 
                            h-[400px] min-[480px]:h-[450px] sm:h-[500px] md:h-[600px] 
                            lg:h-[750px] xl:h-[1020px] 
                            transition-all duration-300">
              <Image
                src="/images/aboutimg.png"
                alt="CEO Portrait"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, (max-width: 1024px) 70vw, 820px"
              />
            </div>
          </div>
        </div>

        {/* CONTENT SECTION */}
        <div 
          data-aos="fade-left"
          data-aos-duration="800"
          className="flex flex-col justify-center space-y-4 sm:space-y-5 md:space-y-6 
                     order-1 lg:order-2 text-center lg:text-left
                     px-2 sm:px-0"
        >
          {/* Badge – fixed size, non-responsive */}
<p className="inline-flex items-center text-blue-800 font-semibold tracking-widest uppercase 
              text-sm 
              bg-blue-50 px-4 py-2 rounded-full 
              border border-blue-200 mx-auto lg:mx-0 whitespace-nowrap">
  Hey! We Are Pitaa
</p>

          {/* Heading – line breaks using min-[480px] for xs */}
          <h2 className="text-2xl min-[480px]:text-3xl sm:text-4xl md:text-5xl lg:text-5xl 
                         font-black leading-tight text-slate-900 tracking-tight">
            Building Stronger <br className="hidden min-[480px]:block" />
            Connections Between <br className="hidden min-[480px]:block" />
            <span className="text-blue-800 relative inline-block">
              IT Academia & Industry
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-300 rounded-full"></span>
            </span>
          </h2>

          {/* Mission */}
          <div 
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="100"
            className="relative pl-10 sm:pl-12 md:pl-14 group text-left"
          >
            <div className="absolute left-0 top-0.5 p-1.5 sm:p-2 md:p-2.5 bg-blue-100 rounded-lg shadow-sm 
                            group-hover:shadow-md group-hover:bg-blue-200 transition-all duration-300">
              <Cpu className="text-blue-800 w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <h4 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-1 sm:mb-1.5">
              Our Mission
            </h4>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
              PITAA’s role as a voice for IT academia is crucial. It aims to address challenges that individual institutions cannot tackle alone, such as influencing policy frameworks, offering input on teaching standards, and aligning curriculum development with industry demands.
            </p>
          </div>

          {/* Vision */}
          <div 
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="200"
            className="relative pl-10 sm:pl-12 md:pl-14 group text-left"
          >
            <div className="absolute left-0 top-0.5 p-1.5 sm:p-2 md:p-2.5 bg-blue-100 rounded-lg shadow-sm 
                            group-hover:shadow-md group-hover:bg-blue-200 transition-all duration-300">
              <Sparkles className="text-blue-800 w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <h4 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-1 sm:mb-1.5">
              Our Vision
            </h4>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
              By collaborating with academic leaders, industry professionals, and government representatives, PITAA aims to advance IT academics, align educational practices with industry needs, and promote innovation, skill development, and partnerships to build a globally competitive and future-ready IT workforce in Pakistan.
            </p>
          </div>

          {/* Button */}
          <div 
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="300"
            className="flex justify-center lg:justify-start mt-2"
          >
            <Link href='/contact-us'>
              <Button
                size="lg"
                className="group px-6 sm:px-7 md:px-8 lg:px-9 
                           py-3 sm:py-4 md:py-5 lg:py-6 
                           text-xs sm:text-sm md:text-base font-semibold 
                           rounded-full bg-blue-800 text-white shadow-xl shadow-blue-900/30
                           hover:bg-blue-900 hover:shadow-2xl hover:-translate-y-1 hover:scale-105 
                           transition-all duration-300 w-fit"
              >
                Discover More
                <ArrowRight className="ml-1.5 sm:ml-2 w-4 h-4 sm:w-5 sm:h-5 
                                       transition-all duration-300 group-hover:translate-x-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>

      {/* MEMBERS SECTION */}
      <div className="w-full py-5 md:py-10 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-5 md:px-6">
          
          <div 
            data-aos="fade-up"
            data-aos-duration="700"
            className="relative w-full text-center mb-8 sm:mb-10 md:mb-12"
          >
            <div className="relative inline-block">
              <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-black leading-tight text-slate-900 tracking-tight px-3 sm:px-4">
                Team
              </h2>
<span className="absolute -bottom-0 left-1/2 -translate-x-1/2 w-18 sm:w-22 md:w-26 h-0.5 bg-blue-300 rounded-full"></span>            </div>
          </div>

          <div 
            data-aos="zoom-in"
            data-aos-duration="800"
            className="relative max-w-6xl mx-auto"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-800 to-blue-800 rounded-3xl blur-lg opacity-0 xs:opacity-0 sm:opacity-10 md:opacity-15 lg:opacity-20"></div>
            
            <div className="relative bg-white p-2 sm:p-3 rounded-2xl shadow-none xs:shadow-sm sm:shadow-md md:shadow-lg lg:shadow-2xl">
              <Image
                src="/images/members.png"
                alt="Team Members"
                width={1920}
                height={400}
                className="w-full h-auto rounded-xl"
                priority
              />
              
              <div className="absolute top-0 left-0 w-8 sm:w-10 md:w-12 lg:w-16 h-8 sm:h-10 md:h-12 lg:h-16 border-t-2 border-l-2 border-blue-800 rounded-tl-2xl hidden sm:block"></div>
              <div className="absolute bottom-0 right-0 w-8 sm:w-10 md:w-12 lg:w-16 h-8 sm:h-10 md:h-12 lg:h-16 border-b-2 border-r-2 border-blue-800 rounded-br-2xl hidden sm:block"></div>
            </div>
          </div>
        </div>
      </div>

 {/* FEATURES SECTION */}
<div className="w-full bg-gradient-to-b from-white to-slate-50 py-12 sm:py-16 md:py-20 overflow-hidden">
  <div className="container mx-auto px-4 sm:px-5 md:px-6">
    
    <div 
      data-aos="fade-up"
      data-aos-duration="700"
      className="relative w-full text-center mb-10 sm:mb-12 md:mb-16"
    >
      <div className="relative inline-block">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-black leading-tight text-slate-900 tracking-tight px-3 sm:px-4">
          Pitaa Features
        </h2>
        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-300 rounded-full"></span>
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
      
      {/* BOX 1 - PURPLE */}
      <div 
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="0"
        className="group relative bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg overflow-hidden border border-purple-200 hover:border-purple-400 hover:shadow-xl"
        style={{ transition: 'transform 0.3s ease-out, box-shadow 0.5s ease-out, border-color 0.5s ease-out' }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/40 via-purple-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-blue-600"></div>
        <div className="relative p-5 sm:p-6 md:p-7 lg:p-8 z-10">
          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4 md:mb-5 group-hover:scale-110 group-hover:bg-purple-600 transition-all duration-500">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-purple-600 group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 mb-2 sm:mb-3 group-hover:text-purple-700 transition-colors duration-500">PITAA LINKUP</h3>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed mb-3 sm:mb-4">
            Connect with industry professionals and academic leaders through our exclusive networking platform.
          </p>
          <div className="flex items-center text-purple-600 font-medium text-xs sm:text-sm">
            <span>Learn more</span>
            <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* BOX 2 - INDIGO */}
      <div 
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="50"
        className="group relative bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg overflow-hidden border border-indigo-200 hover:border-indigo-400 hover:shadow-xl"
        style={{ transition: 'transform 0.3s ease-out, box-shadow 0.5s ease-out, border-color 0.5s ease-out' }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/40 via-indigo-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-400 to-blue-600"></div>
        <div className="relative p-5 sm:p-6 md:p-7 lg:p-8 z-10">
          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4 md:mb-5 group-hover:scale-110 group-hover:bg-indigo-600 transition-all duration-500">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-indigo-600 group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
            </svg>
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 mb-2 sm:mb-3 group-hover:text-indigo-700 transition-colors duration-500">GATEWAY</h3>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed mb-3 sm:mb-4">
            Your entry point to IT academia resources, opportunities, and global collaborations.
          </p>
          <div className="flex items-center text-indigo-600 font-medium text-xs sm:text-sm">
            <span>Explore</span>
            <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* BOX 3 - CYAN */}
      <div 
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="100"
        className="group relative bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg overflow-hidden border border-cyan-200 hover:border-cyan-400 hover:shadow-xl"
        style={{ transition: 'transform 0.3s ease-out, box-shadow 0.5s ease-out, border-color 0.5s ease-out' }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/40 via-cyan-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-600"></div>
        <div className="relative p-5 sm:p-6 md:p-7 lg:p-8 z-10">
          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-cyan-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4 md:mb-5 group-hover:scale-110 group-hover:bg-cyan-600 transition-all duration-500">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-cyan-600 group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 mb-2 sm:mb-3 group-hover:text-cyan-700 transition-colors duration-500">BRIDGE</h3>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed mb-3 sm:mb-4">
            Bridging the gap between academia and industry through innovative programs.
          </p>
          <div className="flex items-center text-cyan-600 font-medium text-xs sm:text-sm">
            <span>Connect</span>
            <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* BOX 4 - BLUE */}
      <div 
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="150"
        className="group relative bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg overflow-hidden border border-blue-200 hover:border-blue-400 hover:shadow-xl"
        style={{ transition: 'transform 0.3s ease-out, box-shadow 0.5s ease-out, border-color 0.5s ease-out' }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-blue-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
        <div className="relative p-5 sm:p-6 md:p-7 lg:p-8 z-10">
          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4 md:mb-5 group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-500">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-blue-600 group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 mb-2 sm:mb-3 group-hover:text-blue-700 transition-colors duration-500">PERSPECTIVES</h3>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed mb-3 sm:mb-4">
            Fresh insights and thought leadership from IT academia and industry experts.
          </p>
          <div className="flex items-center text-blue-600 font-medium text-xs sm:text-sm">
            <span>Discover</span>
            <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* BOX 5 - AMBER */}
      <div 
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="200"
        className="group relative bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg overflow-hidden border border-amber-200 hover:border-amber-400 hover:shadow-xl"
        style={{ transition: 'transform 0.3s ease-out, box-shadow 0.5s ease-out, border-color 0.5s ease-out' }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100/40 via-amber-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-blue-600"></div>
        <div className="relative p-5 sm:p-6 md:p-7 lg:p-8 z-10">
          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4 md:mb-5 group-hover:scale-110 group-hover:bg-amber-600 transition-all duration-500">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-amber-600 group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 mb-2 sm:mb-3 group-hover:text-amber-700 transition-colors duration-500">AWARDS</h3>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed mb-3 sm:mb-4">
            Recognizing excellence in IT academia and industry contributions.
          </p>
          <div className="flex items-center text-amber-600 font-medium text-xs sm:text-sm">
            <span>View winners</span>
            <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* BOX 6 - EMERALD */}
      <div 
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="250"
        className="group relative bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg overflow-hidden border border-emerald-200 hover:border-emerald-400 hover:shadow-xl"
        style={{ transition: 'transform 0.3s ease-out, box-shadow 0.5s ease-out, border-color 0.5s ease-out' }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/40 via-emerald-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-blue-600"></div>
        <div className="relative p-5 sm:p-6 md:p-7 lg:p-8 z-10">
          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4 md:mb-5 group-hover:scale-110 group-hover:bg-emerald-600 transition-all duration-500">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-emerald-600 group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 mb-2 sm:mb-3 group-hover:text-emerald-700 transition-colors duration-500">CHRONICLES</h3>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed mb-3 sm:mb-4">
            Documenting the journey and milestones of PITAA's impact in IT academia.
          </p>
          <div className="flex items-center text-emerald-600 font-medium text-xs sm:text-sm">
            <span>Read stories</span>
            <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* JOIN SECTION */}
      <section className="relative w-full py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden">
        
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50/50 to-blue-100"></div>
        
        <div className="absolute top-0 -left-20 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-20 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-indigo-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[500px] md:w-[600px] lg:w-[800px] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[800px] bg-gradient-to-r from-blue-100/10 via-sky-100/10 to-indigo-100/10 rounded-full blur-3xl"></div>
        
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #2563eb 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-5 md:px-6 grid lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 lg:gap-20 items-center">

          <div 
            data-aos="fade-right"
            data-aos-duration="800"
            className="relative group"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-none xs:shadow-sm sm:shadow-md md:shadow-lg lg:shadow-2xl shadow-blue-900/20 transition-all duration-700 group-hover:scale-105 group-hover:shadow-3xl group-hover:shadow-blue-900/30">
              <Image
                src="/images/pitaa-joining.jpg"
                alt="PITAA Joining"
                width={700}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div className="absolute -bottom-4 sm:-bottom-5 md:-bottom-6 -left-4 sm:-left-5 md:-left-6 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-blue-200/20 rounded-full blur-2xl group-hover:bg-indigo-200/30 group-hover:scale-150 transition-all duration-700"></div>
          </div>

          <div 
            data-aos="fade-left"
            data-aos-duration="800"
            className="space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-8"
          >

            <h2 
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
              className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-light text-slate-900 leading-tight"
            >
              Become part of{' '}
              <span className="font-semibold text-blue-800 relative">
                Pakistan's Premier
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-300 rounded-full"></span>
              </span>
              <br/>
              IT Academic Association
            </h2>

            <p 
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="150"
              className="text-sm sm:text-base md:text-lg text-slate-500 leading-relaxed max-w-xl"
            >
              Join the ranks of leading academic and industry professionals who trust PITAA to represent their interests, foster innovation, and drive growth in the IT sector. Be a part of an association dedicated to bridging the gap between academia and industry, empowering the next generation of IT leaders, and advancing technological excellence in Pakistan.
            </p>

            <div 
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="200"
              className="pt-2 sm:pt-3 md:pt-4"
            >
              <Link href='/contact-us'>
              <Button 
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-blue-800 to-indigo-800 hover:from-blue-800 hover:to-indigo-700 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 px-6 sm:px-7 md:px-8 py-4 sm:py-5 md:py-6 text-xs sm:text-sm md:text-base"
              >
                <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                  Join Now
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STORIES SECTION */}
      <section className="relative w-full py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden">
        
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-white to-blue-50"></div>
        
        <div className="absolute top-0 -right-20 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-indigo-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -left-20 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[500px] md:w-[600px] lg:w-[800px] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[800px] bg-gradient-to-r from-indigo-100/10 via-blue-100/10 to-sky-100/10 rounded-full blur-3xl"></div>
        
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #4f46e5 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-5 md:px-6 grid lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 lg:gap-20 items-center">

          <div 
            data-aos="fade-right"
            data-aos-duration="800"
            className="space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-8 order-2 lg:order-1"
          >
            
            <h2 
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="50"
              className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-light text-slate-900 leading-tight"
            >
              Hum hain PITAA,<br />
              <span className="font-semibold text-blue-800 relative">
                One Story at a Time
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-300 rounded-full"></span>
              </span>
            </h2>

            <div 
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
              className="space-y-3 sm:space-y-4 text-slate-500 leading-relaxed max-w-xl"
            >
              <p className="text-sm sm:text-base md:text-lg">
                "Hum hain PITAA" brings you inspiring testimonials from our members, highlighting their journeys and success stories in Pakistan's evolving IT academic landscape.
              </p>
              <p className="text-xs sm:text-sm md:text-base">
                Hear directly from educators, industry leaders, and innovators as they share how PITAA has played a crucial role in their professional growth and academic advancements. From emerging talents to seasoned professionals, these stories showcase the profound impact PITAA has had in fostering collaboration, driving innovation, and shaping the future of IT education in Pakistan.
              </p>
              <p className="text-xs sm:text-sm md:text-base font-medium text-slate-600">
                Step into the world of PITAA, where learning and innovation have no limits!
              </p>
            </div>
          </div>

          <div 
            data-aos="fade-left"
            data-aos-duration="800"
            className="relative group order-1 lg:order-2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-none xs:shadow-sm sm:shadow-md md:shadow-lg lg:shadow-2xl shadow-indigo-900/20 transition-all duration-700 group-hover:scale-105 group-hover:shadow-3xl group-hover:shadow-indigo-900/30">
              <Image
                src="/images/image1.jpeg"
                alt="PITAA Stories"
                width={700}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div className="absolute -bottom-2 sm:-bottom-3 -left-2 sm:-left-3 bg-white/90 backdrop-blur-sm rounded-lg shadow-md sm:shadow-lg px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-3 border border-white/50 transition-all duration-500 group-hover:shadow-xl group-hover:scale-110">
              <p className="text-lg sm:text-xl md:text-2xl font-light text-slate-900">100+</p>
              <p className="text-[8px] sm:text-[10px] md:text-xs text-slate-500 tracking-wide">STORIES</p>
            </div>
            
            <div className="absolute -bottom-4 sm:-bottom-5 md:-bottom-6 -right-4 sm:-right-5 md:-right-6 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-indigo-200/20 rounded-full blur-2xl group-hover:bg-blue-200/30 group-hover:scale-150 transition-all duration-700"></div>
          </div>
        </div>
      </section>
    </main>
  );
}