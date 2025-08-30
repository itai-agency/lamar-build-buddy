import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import lamarLogo from '@/assets/lamar-logo-removebg-preview.png';
import lamarLogoLight from '@/assets/lamar-light.png';

interface HeaderProps {
  darkMode?: boolean;
}

const Header = ({ darkMode = false }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (!isHomePage) {
      // If not on home page, navigate to home and then scroll
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'hero', type: 'scroll' },
    { label: 'About Us', id: 'about', type: 'scroll' },
    { label: 'Services', id: 'services', type: 'scroll' },
    { label: 'Our Projects', id: 'projects', type: 'scroll' },
    { label: 'Testimonials', id: 'testimonials', type: 'scroll' },
    { label: 'Contact Us', id: 'contact', type: 'scroll' }
  ];

  // Determine if header should be dark
  const shouldBeDark = darkMode;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        darkMode 
          ? 'bg-engineering-white/95 backdrop-blur-lg shadow-professional border-b border-engineering-light/20'
          : isScrolled 
            ? 'bg-engineering-white/95 backdrop-blur-lg shadow-professional border-b border-engineering-light/20' 
            : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center">
              {/* Logo Image */}
              <img 
                src={isScrolled || darkMode ? lamarLogo : lamarLogoLight}
                alt="LAMAR ENGINEERING CIVIL + STRUCTURAL"
                className="h-12 w-auto"
                onError={(e) => {
                  // Fallback to text if image fails to load
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              {/* Fallback Text Logo */}
              <div className="hidden flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-8 bg-gradient-to-b from-engineering-blue to-engineering-cyan rounded-sm"></div>
                  <div className="w-2 h-8 bg-engineering-steel rounded-sm"></div>
                  <div className="w-2 h-8 bg-engineering-light rounded-sm"></div>
                </div>
                <div className="flex flex-col">
                  <span className={`text-2xl font-bold transition-colors duration-300 ${
                    darkMode ? 'text-engineering-dark' : isScrolled ? 'text-engineering-dark' : 'text-engineering-white'
                  }`}>
                    LAMAR
                  </span>
                  <div className={`text-sm font-medium transition-colors duration-300 ${
                    darkMode ? 'text-engineering-steel' : isScrolled ? 'text-engineering-steel' : 'text-engineering-white/80'
                  }`}>
                    ENGINEERING
                  </div>
                  <div className={`text-xs font-medium transition-colors duration-300 ${
                    darkMode ? 'text-engineering-steel' : isScrolled ? 'text-engineering-steel' : 'text-engineering-white/70'
                  }`}>
                    CIVIL + STRUCTURAL
                  </div>
                </div>
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
                  darkMode ? 'text-engineering-dark' : isScrolled ? 'text-engineering-dark' : 'text-engineering-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
                     <a 
     href="tel:+16194734045" 
           className={`flex items-center space-x-2 transition-colors ${
        darkMode
          ? 'text-engineering-cyan hover:text-engineering-blue' 
          : isScrolled
            ? 'text-engineering-cyan hover:text-engineering-blue'
            : 'text-engineering-white hover:text-engineering-blue' 

      }`}
   >
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
                 darkMode
                   ? 'text-engineering-dark hover:bg-engineering-light' 
                   : isScrolled
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