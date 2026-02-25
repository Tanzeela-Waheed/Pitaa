import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube, ChevronRight } from "lucide-react"
const footer = () => {
  return (
    <div>
   <section className="relative w-full bg-gradient-to-b from-gray-900 to-gray-800 py-10 overflow-hidden border-t border-gray-700/50 pt-20">
  
  {/* Subtle Glow Effects - More decent */}
  <div className="absolute top-0 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-20 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
  
  {/* Very Subtle Pattern - More decent */}
  <div className="absolute inset-0 opacity-[0.02]" style={{
    backgroundImage: `radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)`,
    backgroundSize: '48px 48px'
  }}></div>

  <div className="relative max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
    
    {/* Main Footer Content */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
      
      {/* Column 1 - Logo & Info - lg:col-span-4 */}
      <div className="lg:col-span-4 space-y-5">
        {/* Logo - without fw-logo text */}
        <div className="flex items-center">
          <Image
            src="/images/singlelogo.jpeg"
            alt="PITAA Logo"
            width={50}
            height={50}
            className="w-auto h-12 object-contain"
          />
        </div>
        
        {/* Description - White text */}
        <p className="text-white/80 leading-relaxed max-w-sm">
          Collaborate with Pitaa Company to drive innovation and build strong partnerships.
        </p>
        
        {/* Contact Info */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center gap-3 text-white/80 group">
            <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-blue-600/20 transition-all duration-300">
              <Phone className="w-4 h-4 text-white/70 group-hover:text-white" />
            </div>
            <span className="text-sm">+92 309 7772647</span>
          </div>
          
          <div className="flex items-center gap-3 text-white/80 group">
            <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-blue-600/20 transition-all duration-300">
              <Mail className="w-4 h-4 text-white/70 group-hover:text-white" />
            </div>
            <span className="text-sm">info@pitaa.org.pk</span>
          </div>
          
          <div className="flex items-start gap-3 text-white/80 group">
            <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-blue-600/20 transition-all duration-300 shrink-0 mt-0.5">
              <MapPin className="w-4 h-4 text-white/70 group-hover:text-white" />
            </div>
            <span className="text-sm leading-relaxed">Office 1, Level #14, Arfa Software Technology Park, Ferozepur Road, Lahore</span>
          </div>
        </div>
      </div>
      
      {/* Column 2 - Our Navigation - lg:col-span-2 */}
      <div className="lg:col-span-2 space-y-5">
        <h3 className="text-lg font-semibold text-white relative inline-block">
          Our Navigation
          <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-blue-500/50 rounded-full"></span>
        </h3>
        
        <ul className="space-y-3">
          {['Home', 'About Us', 'Contact us', 'Gallery'].map((item) => (
            <li key={item}>
               <a href="#" className="flex items-center gap-2 text-white/80 hover:text-blue-400 transition-all duration-300 group">
                <ChevronRight className="w-4 h-4 text-white/80 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                <span>{item}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Column 3 - Follow Us - lg:col-span-2 */}
      <div className="lg:col-span-2 space-y-5">
        <h3 className="text-lg font-semibold text-white relative inline-block">
          Follow Us
          <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-blue-500/50 rounded-full"></span>
        </h3>
        
        <div className="flex gap-3">
          <a href="#" className="w-10 h-10 bg-white/5 hover:bg-blue-600 rounded-xl flex items-center justify-center group transition-all duration-300">
            <Facebook className="w-5 h-5 text-white/70 group-hover:text-white transition-all duration-300" />
          </a>
          <a href="#" className="w-10 h-10 bg-white/5 hover:bg-blue-400 rounded-xl flex items-center justify-center group transition-all duration-300">
            <Twitter className="w-5 h-5 text-white/70 group-hover:text-white transition-all duration-300" />
          </a>
          <a href="#" className="w-10 h-10 bg-white/5 hover:bg-blue-700 rounded-xl flex items-center justify-center group transition-all duration-300">
            <Linkedin className="w-5 h-5 text-white/70 group-hover:text-white transition-all duration-300" />
          </a>
        </div>
      </div>
      
      {/* Column 4 - Subscribe - lg:col-span-4 */}
      <div className="lg:col-span-4 space-y-5">
        <h3 className="text-lg font-semibold text-white relative inline-block">
          Subscribe
          <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-blue-500/50 rounded-full"></span>
        </h3>
        
        <p className="text-sm text-white/70">
          Get News & Updates
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="flex-1 px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 text-white placeholder-white/40 text-sm transition-all duration-300"
          />
        </div>
        
        {/* Trust Badge - White text */}
        <p className="text-xs text-white/50 pt-2">
          Uniting IT companies to foster innovation and collaboration.
        </p>
      </div>
    </div>
    
    {/* Bottom Bar */}
    <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-sm text-white/50">
        © 2024 PITAA. All rights reserved.
      </p>
      <div className="flex gap-6 text-sm text-white/50">
        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default footer
