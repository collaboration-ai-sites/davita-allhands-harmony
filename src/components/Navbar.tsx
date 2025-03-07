
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

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
          <Link to="/">
            <img 
              src="/lovable-uploads/e03f5efe-4964-4cc8-a4a5-7c9ce276769f.png" 
              alt="ConvergeAI Summit Logo" 
              className="h-16" 
            />
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/#agenda" className="text-sm font-medium text-foreground/80 hover:text-cyan-500">Agenda</Link>
          <Link to="/#location" className="text-sm font-medium text-foreground/80 hover:text-cyan-500">Location</Link>
          <Link to="/#register" className="text-sm font-medium text-foreground/80 hover:text-cyan-500">Register</Link>
          <Link to="/brand-toolkit" className="text-sm font-medium text-foreground/80 hover:text-cyan-500">Brand Toolkit</Link>
        </nav>
        <div>
          <Link 
            to="/#register" 
            className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gradient-to-r hover:from-cyan-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Register Now
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
