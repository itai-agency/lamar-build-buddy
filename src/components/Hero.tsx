import { Button } from '@/components/ui/button';
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
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-engineering-dark/60"></div>
      
      <div className="relative z-10 text-center text-engineering-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          WE BUILD YOUR DREAM
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
          Commercial + Custom Homes/Additions + Multi-Family Housing
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => scrollToSection('about')}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
          >
            Learn More
          </Button>
          <Button 
            onClick={() => scrollToSection('contact')}
            variant="outline"
            size="lg"
            className="border-engineering-white text-engineering-white hover:bg-engineering-white hover:text-engineering-dark px-8 py-3 text-lg"
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;