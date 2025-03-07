
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-purple-50 via-cyan-50 to-white pt-16 overflow-hidden">
      {/* Dynamic background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-gradient-to-r from-cyan-300/20 to-purple-400/20 blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 -left-20 w-80 h-80 rounded-full bg-gradient-to-r from-purple-400/20 to-orange-300/20 blur-xl"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-cyan-400/10 to-blue-300/10 blur-xl animate-pulse-slow"></div>
        
        {/* Animated floating shapes */}
        <div className="absolute top-1/4 right-1/3 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute bottom-1/3 right-1/4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute top-2/3 left-1/3 w-4 h-4 bg-gradient-to-r from-orange-400 to-red-500 rounded-full opacity-70 animate-bounce"></div>
      </div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-xl animate-slide-up">
            <div>
              <span className="inline-flex items-center rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-700 mb-6">
                July 23, 2023
              </span>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 leading-tight tracking-tight mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-600">All-Hands</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-400">Summit</span>
              </h1>
              
              <div className="flex items-end mt-2 mb-6">
                <img 
                  src="/lovable-uploads/86c8b395-8724-422e-b6aa-a0c2f953cad7.png" 
                  alt="DaVita Logo" 
                  className="h-8 w-auto object-contain" 
                />
              </div>
              
              <p className="text-lg text-muted-foreground mt-6 leading-relaxed max-w-md">
                Join us for a transformative day of AI innovation, collaboration, and vision-setting at our annual company-wide gathering in Salt Lake City.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#register" 
                className="inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-gradient-to-r hover:from-cyan-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                Register Now
              </a>
              <a 
                href="#agenda" 
                className="inline-flex h-12 items-center justify-center rounded-md border border-cyan-500/20 bg-transparent px-6 py-3 text-base font-medium text-cyan-700 transition-colors hover:bg-cyan-500/5 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
              >
                View Agenda
              </a>
            </div>
            
            <div className="glass-panel p-4 rounded-lg max-w-sm">
              <div className="flex gap-4 items-center">
                <div className="bg-cyan-500/10 rounded-full p-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#0891b2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 8V12L15 15" stroke="#0891b2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-foreground/70">Opening Keynote in</p>
                  <p className="font-medium text-foreground">12 Days : 8 Hours : 47 Minutes</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative mx-auto lg:mx-0 animate-slide-down max-w-md lg:max-w-none">
            {/* Decorative squares behind the image */}
            <div className="absolute -z-10 -top-6 -left-6 w-[70%] h-[70%] bg-gradient-to-tr from-purple-200/40 to-purple-300/30 rounded-lg rotate-6"></div>
            <div className="absolute -z-10 -bottom-6 -right-6 w-[70%] h-[70%] bg-gradient-to-bl from-cyan-200/40 to-cyan-300/30 rounded-lg -rotate-3"></div>
            <div className="absolute -z-10 top-1/4 -right-4 w-[40%] h-[40%] bg-gradient-to-tr from-orange-200/30 to-orange-300/20 rounded-lg rotate-12"></div>
            
            {/* Image with a clean look, centered within its grid cell */}
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-cyan-500/10 z-10"></div>
              
              <img 
                src="/lovable-uploads/202066d8-6dcb-4ee7-bc52-46129d29a2a2.png" 
                alt="Conference Setting" 
                className="w-full object-cover object-center h-[500px] transform transition-all duration-500 hover:scale-105"
              />
              
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black/10 z-10"></div>
            </div>
            
            {/* Floating colored elements */}
            <div className="absolute -z-10 -top-8 -right-8 w-24 h-24 bg-cyan-500/20 rounded-full blur-md"></div>
            <div className="absolute -z-10 bottom-12 -left-8 w-20 h-20 bg-purple-500/20 rounded-full blur-md"></div>
            <div className="absolute -z-10 bottom-1/4 right-1/4 w-16 h-16 bg-orange-500/20 rounded-full blur-md"></div>
          </div>
        </div>
      </div>
      
      <a 
        href="#agenda"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-sm text-foreground/60 hover:text-cyan-500 animate-pulse-slow"
      >
        <span className="mb-2">Scroll to explore</span>
        <ChevronDown size={20} />
      </a>
    </section>
  );
};

export default Hero;
