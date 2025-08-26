import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Professional Overlay with Gradient */}
      <div className="absolute inset-0" style={{ background: 'var(--gradient-overlay)' }} />
      
      <div className="relative z-10 text-center text-engineering-white px-4 max-w-6xl mx-auto">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] tracking-tight">
            WE BUILD YOUR
            <span className="block text-engineering-cyan">DREAM</span>
          </h1>
          
          <div className="w-32 h-1 bg-engineering-cyan mx-auto"></div>
          
          <p className="text-2xl md:text-3xl font-light mb-12 max-w-4xl mx-auto leading-relaxed">
            Professional Civil & Structural Engineering
            <span className="block mt-3 text-xl text-engineering-light/80">
              Commercial • Custom Homes • Multi-Family Housing
            </span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={() => scrollToSection('about')}
              size="lg"
              className="bg-engineering-cyan hover:bg-engineering-cyan/90 text-engineering-white font-semibold px-12 py-6 text-lg shadow-professional hover:shadow-hover transition-all duration-300 hover:scale-105"
            >
              Start Your Project
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline"
              size="lg"
              className="border-2 border-engineering-white/30 text-engineering-white hover:bg-engineering-white/10 backdrop-blur-sm px-12 py-6 text-lg transition-all duration-300"
            >
              View Our Work
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-engineering-white/70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;