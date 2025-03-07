
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-blue-50 to-white pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-davita-blue/5 blur-3xl"></div>
        <div className="absolute top-1/4 -left-40 w-96 h-96 rounded-full bg-davita-green/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-xl animate-slide-up">
            <div>
              <span className="inline-flex items-center rounded-full bg-davita-blue/10 px-3 py-1 text-xs font-medium text-davita-blue mb-6">
                September 15-16, 2023
              </span>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-davita-dark leading-tight tracking-tight mb-4">
                DaVita <br />
                <span className="text-davita-blue">All Hands</span> <span className="text-davita-green">Conference</span>
              </h1>
              <p className="text-lg text-muted-foreground mt-6 leading-relaxed max-w-md">
                Join us for two transformative days of innovation, collaboration, and vision-setting at our annual company-wide gathering.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#register" 
                className="inline-flex h-12 items-center justify-center rounded-md bg-davita-blue px-6 py-3 text-base font-medium text-white transition-colors hover:bg-davita-blue/90 focus:outline-none focus:ring-2 focus:ring-davita-blue focus:ring-offset-2"
              >
                Register Now
              </a>
              <a 
                href="#agenda" 
                className="inline-flex h-12 items-center justify-center rounded-md border border-davita-blue/20 bg-transparent px-6 py-3 text-base font-medium text-davita-blue transition-colors hover:bg-davita-blue/5 focus:outline-none focus:ring-2 focus:ring-davita-blue focus:ring-offset-2"
              >
                View Agenda
              </a>
            </div>
            
            <div className="glass-panel p-4 rounded-lg max-w-sm">
              <div className="flex gap-4 items-center">
                <div className="bg-davita-blue/10 rounded-full p-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#0056a2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 8V12L15 15" stroke="#0056a2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-foreground/70">Opening Keynote in</p>
                  <p className="font-medium text-foreground">19 Days : 12 Hours : 32 Minutes</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-slide-down">
            <div className="glass-panel rounded-2xl overflow-hidden relative z-20">
              <img 
                src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
                alt="DaVita Conference" 
                className="w-full h-[500px] object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-davita-green rounded-2xl z-10 opacity-20"></div>
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-davita-blue rounded-2xl z-10 opacity-20"></div>
          </div>
        </div>
      </div>
      
      <a 
        href="#agenda"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-sm text-foreground/60 hover:text-davita-blue animate-pulse-slow"
      >
        <span className="mb-2">Scroll to explore</span>
        <ChevronDown size={20} />
      </a>
    </section>
  );
};

export default Hero;
