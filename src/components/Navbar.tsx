
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { AlignJustify, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/80 backdrop-blur-md shadow-subtle" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/e03f5efe-4964-4cc8-a4a5-7c9ce276769f.png" 
                alt="ConvergeAI Summit Logo" 
                className="h-10 md:h-16" 
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center space-x-8">
            <Link to="/#agenda" className="text-sm font-medium text-foreground/80 hover:text-cyan-500 transition-colors">Agenda</Link>
            <Link to="/#location" className="text-sm font-medium text-foreground/80 hover:text-cyan-500 transition-colors">Location</Link>
            <Link to="/#register" className="text-sm font-medium text-foreground/80 hover:text-cyan-500 transition-colors">Register</Link>
            <Link to="/brand-toolkit" className="text-sm font-medium text-foreground/80 hover:text-cyan-500 transition-colors">Brand Toolkit</Link>
          </nav>
          
          {/* Call to action button and mobile menu toggle */}
          <div className="flex items-center space-x-4">
            <Link 
              to="/#register" 
              className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gradient-to-r hover:from-cyan-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              Register Now
            </Link>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden flex items-center text-foreground/80 hover:text-cyan-500"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <AlignJustify size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div 
          className={cn(
            "md:hidden absolute left-0 right-0 top-[53px] bg-white shadow-md py-4 px-6 transition-all duration-300",
            mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
          )}
        >
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/#agenda" 
              className="text-sm font-medium text-foreground/80 hover:text-cyan-500 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Agenda
            </Link>
            <Link 
              to="/#location" 
              className="text-sm font-medium text-foreground/80 hover:text-cyan-500 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Location
            </Link>
            <Link 
              to="/#register" 
              className="text-sm font-medium text-foreground/80 hover:text-cyan-500 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Register
            </Link>
            <Link 
              to="/brand-toolkit" 
              className="text-sm font-medium text-foreground/80 hover:text-cyan-500 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Brand Toolkit
            </Link>
            <Link 
              to="/#register" 
              className="inline-flex h-9 items-center justify-center rounded-md bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gradient-to-r hover:from-cyan-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Register Now
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
