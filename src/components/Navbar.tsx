
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-white/80 backdrop-blur-md shadow-subtle" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27 5H5C3.895 5 3 5.895 3 7V25C3 26.105 3.895 27 5 27H27C28.105 27 29 26.105 29 25V7C29 5.895 28.105 5 27 5Z" fill="#0056a2"/>
            <path d="M16 10C12.686 10 10 12.686 10 16C10 19.314 12.686 22 16 22C19.314 22 22 19.314 22 16C22 12.686 19.314 10 16 10Z" fill="#00a651"/>
          </svg>
          <span className="font-display font-medium text-davita-dark">DaVita All Hands</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#agenda" className="text-sm font-medium text-foreground/80 hover:text-davita-blue">Agenda</a>
          <a href="#location" className="text-sm font-medium text-foreground/80 hover:text-davita-blue">Location</a>
          <a href="#register" className="text-sm font-medium text-foreground/80 hover:text-davita-blue">Register</a>
        </nav>
        <div>
          <a 
            href="#register" 
            className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-davita-blue px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-davita-blue/90 focus:outline-none focus:ring-2 focus:ring-davita-blue focus:ring-offset-2"
          >
            Register Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
