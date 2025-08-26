import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-engineering-white/95 backdrop-blur-sm shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">L</span>
            </div>
            <span className={`font-bold text-xl ${
              isScrolled ? 'text-engineering-dark' : 'text-engineering-white'
            }`}>
              LAMAR Engineering
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {[
              { label: 'Home', id: 'hero' },
              { label: 'About Us', id: 'about' },
              { label: 'Projects', id: 'projects' },
              { label: 'Testimonial', id: 'testimonials' },
              { label: 'Services', id: 'services' },
              { label: 'Contact Us', id: 'contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors hover:text-primary ${
                  isScrolled ? 'text-engineering-dark' : 'text-engineering-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <Button 
            onClick={() => scrollToSection('contact')}
            variant={isScrolled ? "default" : "secondary"}
            className="hidden md:block"
          >
            Get Quote
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;