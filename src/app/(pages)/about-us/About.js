'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { Building2, Globe, BookOpen, ChevronRight, FileCheck, Building,Sparkles, Handshake, Star, FileText, Briefcase, ScrollText, ArrowRight, TrendingUp, Award, Users, Target, Link } from 'lucide-react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
      easing: 'ease-out',
    });
  }, []);

  return (
    <main>
 {/* SECTION 1 - Hero */}
<section 
  data-aos="fade-up"
  data-aos-duration="800"
  className="relative w-full py-10 md:py-14 overflow-hidden bg-white"
>
  
  {/* Clean Background */}
  <div className="absolute inset-0">
    <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-50/50 to-transparent"></div>
  </div>

  {/* Top Right Object - Floating Particles (Responsive) */}
  <div className="absolute -top-5 sm:-top-8 md:-top-10 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 opacity-80">
    {/* Soft glow */}
    <div className="absolute top-5 right-5 sm:top-8 sm:right-8 md:top-10 md:right-10 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-indigo-500/10 rounded-full blur-xl sm:blur-2xl"></div>
    
    {/* Particles */}
    <div className="absolute top-0 right-10 sm:right-15 md:right-20 w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-indigo-600/60 rounded-full animate-pulse"></div>
    <div className="absolute top-10 right-20 sm:top-15 sm:right-30 md:top-20 md:right-40 w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-indigo-500/70 rounded-full animate-pulse"></div>
    <div className="absolute top-20 right-5 sm:top-30 sm:right-8 md:top-40 md:right-10 w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-indigo-600/50 rounded-full animate-pulse"></div>
    <div className="absolute top-30 right-15 sm:top-45 sm:right-25 md:top-60 md:right-30 w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 bg-indigo-700/60 rounded-full animate-pulse"></div>
    <div className="absolute top-16 right-25 sm:top-24 sm:right-35 md:top-32 md:right-50 w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-indigo-500/80 rounded-full"></div>
    
    {/* Connecting lines */}
    <svg className="absolute top-0 right-0 w-full h-full opacity-30">
      <line x1="60" y1="10" x2="80" y2="30" stroke="#4f46e5" strokeWidth="1" strokeDasharray="3 3"/>
      <line x1="80" y1="30" x2="100" y2="20" stroke="#4f46e5" strokeWidth="1" strokeDasharray="3 3"/>
    </svg>
  </div>

  {/* Bottom Left Object - MINIMALISTIC & DECENT DESIGN */}
  <div className="absolute -bottom-16 sm:-bottom-20 md:-bottom-24 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 opacity-40">
    
    {/* Main container */}
    <div className="absolute bottom-0 left-0 w-full h-full">
      
      {/* Soft single gradient - very subtle background */}
      <div className="absolute bottom-8 left-8 sm:bottom-10 sm:left-10 md:bottom-12 md:left-12 w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 bg-gradient-to-t from-indigo-100/30 to-transparent blur-2xl"></div>
      
      {/* Single elegant horizontal line - minimal */}
      <div className="absolute bottom-16 left-4 sm:bottom-20 sm:left-5 md:bottom-24 md:left-6 w-40 sm:w-52 md:w-64 h-px bg-gradient-to-r from-transparent via-indigo-300/50 to-transparent"></div>
      
      {/* Single vertical line - minimal */}
      <div className="absolute bottom-4 left-20 sm:bottom-5 sm:left-24 md:bottom-6 md:left-32 w-px h-32 sm:h-40 md:h-48 bg-gradient-to-b from-transparent via-indigo-300/50 to-transparent"></div>
      
      {/* Three simple dots - arranged minimally */}
      <div className="absolute bottom-20 left-16 sm:bottom-24 sm:left-20 md:bottom-28 md:left-24 flex space-x-3">
        <div className="w-1 h-1 bg-indigo-400/60 rounded-full"></div>
        <div className="w-1 h-1 bg-indigo-500/60 rounded-full"></div>
        <div className="w-1 h-1 bg-indigo-400/60 rounded-full"></div>
      </div>
      
      {/* Single subtle corner accent */}
      <div className="absolute bottom-12 left-28 sm:bottom-16 sm:left-36 md:bottom-20 md:left-44">
        <div className="w-4 h-4 border-b border-r border-indigo-400/40"></div>
      </div>
      
      {/* Very faint intersecting lines - creates minimal grid suggestion */}
      <svg className="absolute bottom-0 left-0 w-full h-full opacity-20">
        <line x1="0" y1="40" x2="80" y2="40" stroke="#4f46e5" strokeWidth="0.5" />
        <line x1="0" y1="70" x2="80" y2="70" stroke="#4f46e5" strokeWidth="0.5" />
        <line x1="30" y1="0" x2="30" y2="100" stroke="#4f46e5" strokeWidth="0.5" />
        <line x1="60" y1="0" x2="60" y2="100" stroke="#4f46e5" strokeWidth="0.5" />
      </svg>
      
      {/* Single small abstract shape - very subtle */}
      <div className="absolute bottom-32 left-8 sm:bottom-40 sm:left-10 md:bottom-48 md:left-12">
        <div className="w-3 h-3 border border-indigo-400/30 rotate-12"></div>
      </div>
      
    </div>
  </div>

  {/* Content Container */}
  <div className="relative max-w-3xl mx-auto px-4 sm:px-6 md:px-8 text-center z-10">
    
    {/* Elegant Heading */}
    <div 
      data-aos="fade-up"
      data-aos-duration="600"
      data-aos-delay="100"
      className="space-y-3 mb-8"
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-light text-slate-900">
        Pakistan Information Technology
      </h1>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-800">
        Academic Association
      </h2>
      <div className="flex justify-center gap-2 pt-2">
        <div className="w-12 h-0.5 bg-blue-200 rounded-full"></div>
        <div className="w-2 h-0.5 bg-blue-400 rounded-full"></div>
        <div className="w-12 h-0.5 bg-blue-200 rounded-full"></div>
      </div>
    </div>
    
    {/* Description */}
    <div 
      data-aos="fade-up"
      data-aos-duration="600"
      data-aos-delay="200"
      className="space-y-4 text-slate-600"
    >
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        <span className="font-semibold text-blue-800">PITAA</span> is going to be established in January, 2025 by a collective of IT educators and IT academic institutions with the aim of creating a functional platform dedicated to the growth and collaboration of IT academia in Pakistan.
      </p>
      
      <p className="text-xs sm:text-sm md:text-base leading-relaxed text-slate-500">
        Today, PITAA stands as the first and only IT Academic Association in Pakistan, representing the collective voice of IT academia. It is committed to addressing the challenges of IT education by lobbying with the government, enhancing the visibility of Pakistani academic excellence globally, and building a platform for collaboration and growth within the academic sector.
      </p>
    </div>
    
  </div>
</section>

    {/* SECTION 2 - Chairman Message */}
    <section 
      data-aos="fade-up"
      data-aos-duration="800"
      className="relative w-full py-8 md:py-12 lg:py-16 overflow-hidden bg-white"
    >
  
      {/* Premium Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-white to-indigo-50/30"></div>
  
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl"></div>
  
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, #2563eb 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT - Image with Elegant Frame */}
          <div 
            data-aos="fade-right"
            data-aos-duration="800"
            className="relative group"
          >
            {/* Background Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            
            {/* Image Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/20 transition-all duration-700 group-hover:shadow-3xl group-hover:shadow-blue-900/30">
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <Image
                src="/images/aboutimg.jpeg"
                alt="Chairman PITAA"
                width={700}
                height={800}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
          
              {/* Decorative Corner Elements */}
              <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-white/60 rounded-tl-2xl"></div>
              <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-white/60 rounded-br-2xl"></div>
            </div>
          </div>
          
          {/* RIGHT - Content with Enhanced Typography */}
          <div 
            data-aos="fade-left"
            data-aos-duration="800"
            className="space-y-7 lg:space-y-8"
          >
        
            {/* Title with Icon */}
            <div 
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
              className="flex items-center gap-3"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <div>
                <span className="text-blue-600 text-sm font-medium tracking-wider uppercase">Chairman's Message</span>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Mr. Wahab Yunus</h2>
              </div>
            </div>
        
            {/* Decorative Divider */}
            <div 
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="150"
              className="flex items-center gap-3"
            >
              <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <div className="w-16 h-0.5 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full"></div>
            </div>
        
            {/* Message Content with Quote Styling */}
            <div className="space-y-5 text-slate-600">
              {/* First Paragraph with Opening Quote */}
              <div 
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="200"
                className="relative pl-6 border-l-4 border-blue-300"
              >
                <p className="text-base md:text-lg leading-relaxed italic text-slate-700">
                  "In an era where technology is reshaping industries, collaboration is the key to progress. As the Honorary Chairman of PITAA, I firmly believe that uniting IT institutes under one platform will lead to collective growth, shared knowledge, and greater opportunities for all."
                </p>
              </div>
          
              {/* Second Paragraph */}
              <p 
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="250"
                className="text-base leading-relaxed"
              >
                PITAA is dedicated to bringing academic institutions together, fostering innovation, and ensuring that educational standards align with industry demands. By working as a network, we can provide better resources, faculty development, and industry exposure to students and educators alike.
              </p>
          
              {/* Third Paragraph with Highlight */}
              <div 
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="300"
                className="bg-gradient-to-r from-blue-50/80 to-indigo-50/80 p-5 rounded-xl border-l-4 border-blue-500"
              >
                <p className="text-base leading-relaxed font-medium text-slate-700">
                  Together, we can build a stronger IT Skilled-Based Academic ecosystem that empowers institutions, enhances learning experiences, and contributes to Pakistan's technological advancement on a global scale. Let's move forward, not as individual entities, but as a united force for change.
                </p>
              </div>
            </div>
        
            {/* Chairman Signature Area */}
            <div 
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="350"
              className="pt-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    WY
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Mr. Wahab Yunus</h4>
                  <p className="text-sm text-blue-600 font-medium">Chairman, PITAA</p>
                </div>
              </div>
          
              {/* Small Decorative Element */}
              <div className="hidden sm:block">
                <svg className="w-16 h-8 text-blue-200" viewBox="0 0 100 50">
                  <path d="M10 25 L30 25 L40 10 L60 40 L80 20 L90 30" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="4 4" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* SECTION 3 - Objective */}
    <section 
      data-aos="fade-up"
      data-aos-duration="800"
      className="relative w-full py-8 md:py-12 lg:py-16 overflow-hidden bg-white"
    >
  
      {/* Light Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/20 via-white to-blue-50/20"></div>
  
      {/* Subtle Glow Effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-indigo-200/20 rounded-full blur-3xl"></div>
  
      {/* Very Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, #4f46e5 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT - Content */}
          <div 
            data-aos="fade-right"
            data-aos-duration="800"
            className="space-y-6 lg:space-y-8 order-2 lg:order-1"
          >
        
            {/* Section Label */}
            <div 
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="50"
            >
              <span className="text-blue-800 text-sm font-medium tracking-wider uppercase bg-indigo-50 px-4 py-2 rounded-full border border-indigo-100">
                Our Objective
              </span>
            </div>
        
            {/* Main Heading */}
            <h2 
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
              className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight"
            >
              Uniting IT Academia for{' '}
              <span className="text-blue-800 relative">
                a Stronger Future
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-indigo-200 rounded-full"></span>
              </span>
            </h2>
        
            {/* Decorative Line */}
            <div 
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="150"
              className="w-20 h-1 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full"
            ></div>
        
            {/* Objective Text */}
            <div className="space-y-4 text-slate-600">
              <p 
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="200"
                className="text-base md:text-lg leading-relaxed"
              >
                The primary objective of PITAA is to unite IT educators, Money-Making skilled teachers, and institutions to strengthen IT academic collaboration, develop progressive policies, and initiate programs that enhance IT education, teaching methodologies, and innovation across the country.
              </p>
          
              {/* Key Points */}
              <div 
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="250"
                className="grid grid-cols-2 gap-3 pt-4"
              >
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-indigo-100 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  </div>
                  <span className="text-sm text-slate-700">IT Educators</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-indigo-100 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  </div>
                  <span className="text-sm text-slate-700">Skilled Teachers</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-indigo-100 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  </div>
                  <span className="text-sm text-slate-700">Institutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-indigo-100 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  </div>
                  <span className="text-sm text-slate-700">Innovation</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* RIGHT - Image */}
          <div 
            data-aos="fade-left"
            data-aos-duration="800"
            className="relative group order-1 lg:order-2"
          >
            {/* Background Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600/10 to-blue-600/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
        
            {/* Image Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-indigo-900/20 transition-all duration-700 group-hover:shadow-3xl group-hover:shadow-indigo-900/30">
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <Image
                src="/images/about2.jpg"
                alt="PITAA Objective"
                width={700}
                height={800}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
          
              {/* Decorative Corner Elements */}
              <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-white/60 rounded-tl-2xl"></div>
              <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-white/60 rounded-br-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* SECTION 4 - Stats */}
    <section 
      data-aos="fade-up"
      data-aos-duration="800"
      className="relative w-full py-16 overflow-hidden"
    >
      {/* Premium Dark Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900"></div>
  
      {/* Sophisticated Light Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-3xl"></div>
  
      {/* Modern Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
        {/* Section Title */}
        <div 
          data-aos="fade-up"
          data-aos-duration="600"
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Our Impact in 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Numbers</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
    
        {/* Stats Grid - Elegant Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      
          {/* Institutes */}
          <div 
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="0"
            className="group relative"
          >
            {/* Card Background with Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
        
            {/* Main Card */}
            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-1">
          
              {/* Icon Circle */}
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 mx-auto">
                <Building2 className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors duration-500" />
              </div>
          
              {/* Stats */}
              <div className="text-center">
                <div className="flex items-center justify-center">
                  <span className="text-3xl md:text-4xl font-bold text-white group-hover:text-blue-300 transition-colors duration-500">50</span>
                  <span className="text-lg text-blue-400/80 ml-1">+</span>
                </div>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-500 mt-1 font-medium">Institutes</p>
              </div>
            </div>
          </div>
      
          {/* Partners */}
          <div 
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="50"
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
        
            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-1">
          
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 mx-auto">
                <Briefcase className="w-6 h-6 text-purple-400 group-hover:text-white transition-colors duration-500" />
              </div>
          
              <div className="text-center">
                <div className="flex items-center justify-center">
                  <span className="text-3xl md:text-4xl font-bold text-white group-hover:text-purple-300 transition-colors duration-500">100</span>
                  <span className="text-lg text-purple-400/80 ml-1">+</span>
                </div>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-500 mt-1 font-medium">Partners</p>
              </div>
            </div>
          </div>
      
          {/* Satisfaction */}
          <div 
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="100"
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
        
            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-1">
          
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 mx-auto">
                <Star className="w-6 h-6 text-amber-400 group-hover:text-white transition-colors duration-500" />
              </div>
          
              <div className="text-center">
                <div className="flex items-center justify-center">
                  <span className="text-3xl md:text-4xl font-bold text-white group-hover:text-amber-300 transition-colors duration-500">99</span>
                  <span className="text-2xl text-amber-400/80 ml-0.5">%</span>
                </div>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-500 mt-1 font-medium">Satisfaction</p>
              </div>
            </div>
          </div>
      
          {/* MOU's */}
          <div 
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="150"
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
        
            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-1">
          
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 mx-auto">
                <FileText className="w-6 h-6 text-emerald-400 group-hover:text-white transition-colors duration-500" />
              </div>
          
              <div className="text-center">
                <div className="flex items-center justify-center">
                  <span className="text-3xl md:text-4xl font-bold text-white group-hover:text-emerald-300 transition-colors duration-500">100</span>
                  <span className="text-lg text-emerald-400/80 ml-1">+</span>
                </div>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-500 mt-1 font-medium">MOU's</p>
              </div>
            </div>
          </div>
        </div>
    
        {/* Optional: Small Trust Badge */}
        <div 
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="200"
          className="text-center mt-8"
        >
          <p className="text-xs text-gray-500">Trusted by leading institutions worldwide</p>
        </div>
      </div>
    </section>

    {/* SECTION 5 - Scope and Regulations */}
    <section 
      data-aos="fade-up"
      data-aos-duration="800"
      className="relative w-full py-20 md:py-24 lg:py-28 overflow-hidden bg-white"
    >
  
      {/* Elegant Blue Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-indigo-50/80"></div>
  
      {/* Soft Light Orbs */}
      <div className="absolute top-40 left-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl"></div>
  
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)`,
        backgroundSize: '50px 50px'
      }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
        {/* Two Column Section */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 mb-24 lg:mb-28">
      
          {/* LEFT COLUMN - Scope and Impact */}
          <div className="space-y-6">
            {/* Heading with subtle line */}
            <div 
              data-aos="fade-right"
              data-aos-duration="600"
              className="space-y-3"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Scope and Impact</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"></div>
            </div>
        
            {/* Content with elegant styling */}
            <div className="space-y-6 text-slate-600">
              <p 
                data-aos="fade-right"
                data-aos-duration="600"
                data-aos-delay="50"
                className="text-base leading-relaxed"
              >
                Over time, the scope and impact of PITAA will scale through its focus on four core pillars: 
                <span className="font-medium text-blue-600"> academic collaboration</span>, 
                <span className="font-medium text-blue-600"> government relations</span>, 
                <span className="font-medium text-blue-600"> global outreach for academic excellence</span>, 
                and <span className="font-medium text-blue-600"> skill and capacity building</span> for educators and students.
              </p>
          
              <div 
                data-aos="fade-right"
                data-aos-duration="600"
                data-aos-delay="100"
                className="pl-5 border-l-2 border-blue-200"
              >
                <p className="text-base leading-relaxed">
                  The association will also support specialized initiatives to strengthen IT teaching practices, 
                  curriculum development, and academic contributions to the IT industry.
                </p>
              </div>
            </div>
          </div>
      
          {/* RIGHT COLUMN - Regulations */}
          <div className="space-y-6">
            {/* Heading with subtle line */}
            <div 
              data-aos="fade-left"
              data-aos-duration="600"
              className="space-y-3"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Regulations</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full"></div>
            </div>
        
            {/* Content with elegant styling */}
            <div className="space-y-6 text-slate-600">
              <div 
                data-aos="fade-left"
                data-aos-duration="600"
                data-aos-delay="50"
                className="bg-indigo-50/30 p-5 rounded-lg"
              >
                <p className="text-base leading-relaxed">
                  PITAA will support unregistered IT institutes in gaining registration, integrating them into 
                  the formal education system to boost Pakistan's IT academic landscape.
                </p>
              </div>
          
              <p 
                data-aos="fade-left"
                data-aos-duration="600"
                data-aos-delay="100"
                className="text-base leading-relaxed pl-5 border-l-2 border-indigo-200"
              >
                By aligning with global standards, fostering government collaboration, and building ties with 
                international institutions, PITAA aims to create skilled educators and professionals for the 
                evolving IT sector.
              </p>
            </div>
          </div>
        </div>
    
        {/* BOTTOM CTA SECTION - Nebula Design */}
        <div 
          data-aos="zoom-in"
          data-aos-duration="800"
          className="relative group"
        >
          {/* Main Container */}
          <div className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-1 shadow-2xl overflow-hidden">
    
            {/* Nebula Clouds */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl"></div>
            </div>
    
            {/* Stars */}
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-0.5 h-0.5 bg-white rounded-full animate-twinkle"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`
                  }}
                ></div>
              ))}
            </div>
    
            {/* Inner Card */}
            <div className="relative backdrop-blur-sm bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 overflow-hidden">
      
              {/* Shooting Stars */}
              <div className="absolute top-10 right-10 w-20 h-20">
                <div className="absolute w-1 h-1 bg-white rounded-full animate-shooting-star"></div>
              </div>
      
              {/* Content */}
              <div className="relative text-center">
        
                {/* Cosmic Heading */}
                <div className="relative mb-10">
                  <h3 
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay="50"
                    className="text-2xl md:text-3xl font-light text-white/60 mb-3 tracking-wide"
                  >
                    PITAA Always Ready For
                  </h3>
          
                  <div 
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay="100"
                    className="relative"
                  >
                    <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-purple-300">
                      Solve Your Problem
                    </h2>
            
                    {/* Nebula Glow */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-transparent to-purple-500/20 rounded-full blur-2xl -z-10"></div>
                  </div>
                </div>
        
                {/* Planetary Orbits */}
                <div 
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="150"
                  className="flex justify-center gap-4 mb-8"
                >
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="relative">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <div className="absolute -inset-2 border border-blue-500/30 rounded-full animate-spin-slow"></div>
                    </div>
                  ))}
                </div>
        
                {/* Black Hole Button */}
                <div 
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="200"
                >
                  
                  <a href="/contact-us" className="inline-block">
  <button className="group/btn relative inline-block">
    {/* Event Horizon */}
    <div className="absolute -inset-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-30 group-hover/btn:opacity-60 transition-opacity animate-pulse"></div>
    <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full blur-md opacity-40 group-hover/btn:opacity-70 transition-opacity"></div>

    {/* Button Core */}
    <div className="relative flex items-center gap-3 px-12 py-6 bg-slate-900 text-white font-bold text-lg rounded-full border-2 border-blue-500/50 shadow-2xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
      <span className="relative z-10">Discover More</span>
      <ArrowRight className="relative z-10 w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />

      {/* Accretion Disk */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-gradient-to-t from-blue-500/20 to-transparent rounded-full blur-xl"></div>
    </div>
  </button>
</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes twinkle {
            0%, 100% { opacity: 0.2; transform: scale(0.8); }
            50% { opacity: 1; transform: scale(1.2); }
          }
          @keyframes shooting-star {
            0% { transform: translateX(0) translateY(0) rotate(45deg); opacity: 1; }
            100% { transform: translateX(100px) translateY(100px) rotate(45deg); opacity: 0; }
          }
          .animate-twinkle {
            animation: twinkle 3s ease-in-out infinite;
          }
          .animate-shooting-star {
            animation: shooting-star 2s linear infinite;
          }
          .animate-spin-slow {
            animation: spin 8s linear infinite;
          }
        `}</style>
      </div>
    </section>
    </main>
  )
}

export default About