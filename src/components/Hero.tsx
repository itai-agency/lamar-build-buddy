import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import heroBackground from '@/assets/Lamar-Eng-Banner.jpg';
import structuralEngineering from '@/assets/thumbnail-3.jpg';
import civilEngineering from '@/assets/Lamar-Eng-Banner.jpg';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0); // Estado para la imagen actual

  // Arreglo con las imágenes que deseas mostrar en el carrusel
  const images = [structuralEngineering, civilEngineering];

  // Función para cambiar la imagen
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length); // Cambia a la siguiente imagen
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length); // Cambia a la imagen anterior
  };

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
      {/* Carrusel de Imágenes */}
      <div className="absolute inset-0 z-0">
        <img 
          src={images[currentImage]} 
          alt="Carrusel" 
          className="w-full h-full object-cover transition-all duration-500"
        />
      </div>
      
      {/* Overlay Profesional con Gradiente */}
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
              className="bg-engineering-white text-engineering-dark border-2 border-engineering-white hover:bg-engineering-white/90 hover:text-engineering-dark backdrop-blur-sm px-12 py-6 text-lg transition-all duration-300 shadow-professional"
            >
              View Our Work
            </Button>
          </div>
        </div>
        
        {/* Botones del Carrusel - Minimalista con Iconos en las Esquinas */}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
          <button 
            onClick={prevImage}
            className="text-white p-2 rounded-full hover:opacity-80 transition-opacity duration-300"
          >
            <ChevronLeft size={32} />
          </button>
        </div>

        <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
          <button 
            onClick={nextImage}
            className="text-white p-2 rounded-full hover:opacity-80 transition-opacity duration-300"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
