import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About Us', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Projects', id: 'projects' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact Us', id: 'contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-engineering-white/95 backdrop-blur-lg shadow-professional border-b border-engineering-light/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-engineering-cyan to-engineering-blue rounded-xl flex items-center justify-center shadow-elegant">
                <span className="text-engineering-white font-bold text-xl">L</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-engineering-cyan rounded-full border-2 border-white"></div>
            </div>
            <div>
              <span className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-engineering-dark' : 'text-engineering-white'
              }`}>
                LAMAR
              </span>
              <div className={`text-sm font-medium transition-colors duration-300 ${
                isScrolled ? 'text-engineering-steel' : 'text-engineering-light/80'
              }`}>
                Engineering, Inc.
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:bg-engineering-cyan/10 hover:text-engineering-cyan ${
                  isScrolled ? 'text-engineering-dark' : 'text-engineering-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <a href="tel:+16194734045" className="flex items-center space-x-2 text-engineering-cyan hover:text-engineering-blue transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-medium">(619) 473-4045</span>
            </a>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-engineering-cyan hover:bg-engineering-blue text-engineering-white shadow-elegant hover:shadow-hover transition-all duration-300 hover:scale-105 px-6"
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-all duration-200 ${
              isScrolled 
                ? 'text-engineering-dark hover:bg-engineering-light' 
                : 'text-engineering-white hover:bg-engineering-white/10'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-engineering-white/95 backdrop-blur-lg border-t border-engineering-light/20 shadow-card">
            <nav className="py-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-6 py-3 text-engineering-dark hover:bg-engineering-light/50 hover:text-engineering-cyan transition-all duration-200"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-6 py-3 border-t border-engineering-light/30 mt-2">
                <a href="tel:+16194734045" className="flex items-center justify-center space-x-2 text-engineering-cyan mb-3">
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">(619) 473-4045</span>
                </a>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-engineering-cyan hover:bg-engineering-blue text-engineering-white shadow-elegant"
                >
                  Get Quote
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;