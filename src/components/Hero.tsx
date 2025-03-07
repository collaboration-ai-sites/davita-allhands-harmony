
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-purple-50 to-white pt-16">
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-1 items-center">
          <div className="space-y-6 max-w-xl animate-slide-up">
            <div>
              <span className="inline-flex items-center rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-700 mb-6">
                July 23, 2023
              </span>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 leading-tight tracking-tight mb-4">
                ConvergeAI <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-600">All-Hands</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-400">Summit</span>
              </h1>
              
              <div className="flex items-end mt-2 mb-6">
                <img 
                  src="/lovable-uploads/86c8b395-8724-422e-b6aa-a0c2f953cad7.png" 
                  alt="DaVita Logo" 
                  className="h-8 w-auto object-contain" 
                />
              </div>
              
              <p className="text-lg text-muted-foreground mt-4 leading-relaxed max-w-md">
                Join us for a transformative day of AI innovation, collaboration, and vision-setting at our annual company-wide gathering in Salt Lake City.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
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
            
            <div className="glass-panel p-4 rounded-lg max-w-sm mt-4">
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
          
          <div className="relative animate-slide-down hidden md:block">
            <div className="relative -ml-12 flex justify-center">
              <img 
                src="/lovable-uploads/022d016a-b4d6-4388-8c4c-d095b65fd548.png" 
                alt="Conference Speaker" 
                className="w-full max-w-md h-auto object-contain drop-shadow-xl"
              />
            </div>
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
