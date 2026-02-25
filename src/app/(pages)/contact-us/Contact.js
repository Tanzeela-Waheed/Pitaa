'use client'
import React, { useEffect, useState } from 'react'
import { Send, User, Mail, Phone, MessageSquare, MapPin, CheckCircle, X } from 'lucide-react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
      easing: 'ease-out',
    });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setShowSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitting(false);
      
      setTimeout(() => {
        setShowSuccess(false);
      }, 4000);
    }, 1500);
  };

  return (
    <main className="relative w-full min-h-screen overflow-hidden bg-white">
      
      {/* Left Side - Sky Blue Sprays */}
      <div className="absolute left-0 top-0 bottom-0 w-1/2 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-gradient-to-br from-sky-300/25 via-sky-200/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-10 w-[500px] h-[500px] bg-gradient-to-tr from-sky-200/25 via-sky-100/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -left-20 w-[550px] h-[550px] bg-gradient-to-tl from-sky-300/25 via-sky-200/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Right Side - Sky Blue Sprays */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-gradient-to-bl from-sky-300/25 via-sky-200/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -right-10 w-[500px] h-[500px] bg-gradient-to-tl from-sky-200/25 via-sky-100/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-20 w-[550px] h-[550px] bg-gradient-to-br from-sky-300/25 via-sky-200/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Top Center Sky Spray */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-sky-200/20 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      
      {/* Bottom Center Sky Spray */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-sky-200/20 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 3px 3px, #1e40af 1px, transparent 0)`,
        backgroundSize: '60px 60px'
      }}></div>

      {/* Main Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        
        {/* Header */}
        <div data-aos="fade-up" data-aos-duration="600" className="text-center mb-12">
          <h1 data-aos="fade-up" data-aos-duration="600" data-aos-delay="50" className="text-4xl md:text-5xl font-light text-slate-800 mb-3">
            Get in <span className="font-bold text-blue-800">Touch</span>
          </h1>
          <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="100" className="w-20 h-1.5 bg-blue-800 mx-auto rounded-full mb-4"></div>
          <p data-aos="fade-up" data-aos-duration="600" data-aos-delay="150" className="text-slate-500 max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Contact Form */}
        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" className="max-w-3xl mx-auto mb-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/50 overflow-hidden">
            
            {/* Form Header */}
            <div className="relative bg-blue-800 px-8 py-7 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
              
              <div className="relative">
                <h2 data-aos="fade-up" data-aos-duration="500" data-aos-delay="250" className="text-2xl font-semibold text-white">
                  Send Message
                </h2>
                <p data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" className="text-blue-200 text-sm mt-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-300 rounded-full animate-pulse"></span>
                  We'll get back to you within 24 hours
                </p>
              </div>
            </div>
            
            {/* Form Body */}
            <form onSubmit={handleSubmit} className="p-8 space-y-5">
              {/* Name Field */}
              <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="350">
                <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800/20 focus:border-blue-800 transition-all"
                  />
                </div>
              </div>
              
              {/* Email Field */}
              <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="400">
                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800/20 focus:border-blue-800 transition-all"
                  />
                </div>
              </div>
              
              {/* Phone Field */}
              <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="450">
                <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800/20 focus:border-blue-800 transition-all"
                  />
                </div>
              </div>
              
              {/* Message Field */}
              <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="500">
                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your inquiry..."
                    required
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800/20 focus:border-blue-800 transition-all resize-none"
                  ></textarea>
                </div>
              </div>
              
              {/* Submit Button */}
              <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="550">
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-800 hover:bg-blue-900 text-white font-medium py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span>Sending...</span>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="600" className="w-full">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border-2 border-blue-200 overflow-hidden">
            
            {/* Map Header */}
            <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="650" className="px-8 py-5 border-b border-slate-200 bg-slate-50/50">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-800" />
                <h3 className="text-lg font-medium text-slate-800">Our Location</h3>
              </div>
              <p className="text-sm text-slate-500 mt-1">Arfa Software Technology Park, Lahore</p>
            </div>
            
            {/* Map Container */}
            <div data-aos="zoom-in" data-aos-duration="700" data-aos-delay="700" className="h-[450px] md:h-[500px] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.110312615999!2d74.354671!3d31.519915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919055b4f0b4b4b%3A0x1b3b3b3b3b3b3b3b!2sArfa%20Software%20Technology%20Park!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="w-full h-full"
              ></iframe>
            </div>
            
            {/* Map Footer */}
            <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="750" className="px-8 py-4 border-t border-slate-200 bg-slate-50/50">
              <p className="text-sm text-slate-600">
                Office 1, Level #14, Arfa Software Technology Park, Ferozepur Road, Lahore, Pakistan
              </p>
              <a href="https://maps.google.com/?q=Arfa+Software+Technology+Park+Lahore" target="_blank" rel="noopener noreferrer" className="inline-block text-xs text-blue-800 hover:text-blue-600 mt-2 font-medium">
                Get Directions →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* PROFESSIONAL GREEN SUCCESS MESSAGE */}
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setShowSuccess(false)}></div>
          
          {/* Green Card */}
          <div 
            data-aos="zoom-in"
            data-aos-duration="400"
            className="relative bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden border-t-4 border-emerald-500"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowSuccess(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>
            
            {/* Content */}
            <div className="p-8">
              {/* Icon */}
              <div className="flex justify-center mb-5">
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-emerald-500" />
                </div>
              </div>
              
              {/* Text */}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  Message Sent Successfully
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed">
                  Thank you for contacting us. Our team will review your message and get back to you within 24 hours.
                </p>
                
                {/* Divider */}
                <div className="w-12 h-0.5 bg-emerald-100 mx-auto my-4"></div>
                
                {/* Time Info */}
                <p className="text-xs text-emerald-600 font-medium">
                  Response expected within 24 hours
                </p>
              </div>
            </div>
            
            {/* Bottom Indicator */}
            <div className="h-1 w-full bg-gradient-to-r from-emerald-100 via-emerald-300 to-emerald-100"></div>
          </div>
        </div>
      )}
    </main>
  )
}

export default Contact