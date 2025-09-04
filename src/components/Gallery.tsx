import { useCallback, useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Pause, X, Tag, MapPin, ArrowRight, User } from 'lucide-react';
import { Link } from 'react-router-dom';

// Tus imágenes
import customHome from '@/assets/Image5.jpg';
import multiFamily from '@/assets/Image4.jpg';
import structuralEngineering from '@/assets/image6.jpg';
import civilEngineering from '@/assets/image1.jpg';
import aditionalimage1 from '@/assets/IMG_1017.jpg';
import aditionalimage2 from '@/assets/IMG_0160.jpg';
import aditionalimage3 from '@/assets/IMG_1876.jpg';
import aditionalimage4 from '@/assets/IMG_5738.jpg';

interface Project {
  src: string;
  alt: string;
  title: string;
  description: string;
  category: string;
  location: string;
  size: string;
  architect: string;
}

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const galleryImages: Project[] = [
    {
      src: customHome,
      alt: 'Modern custom home exterior',
      title: 'RANCHO SANTA FE',
      description: 'Two-story single family custom home.',
      category: 'Residential',
      location: 'Del Mar, CA',
      size: '6,500 sq. ft.',
      architect: 'Clark Design Studio',
    },
    {
      src: multiFamily,
      alt: 'Two-story residence',
      title: 'JAUREGUI RESIDENCE',
      description:
        'Two-story single family residence.',
      category: 'Residential',
      location: 'Chula Vista, CA',
      size: '2,500 + 2,000 sq. ft.',
      architect: 'DLAM Design',
    },
    {
      src: structuralEngineering,
      alt: 'Two-story custom home',
      title: 'VIA GRIMALDI RESIDENCE',
      description: 'Two-story custom home.',
      category: 'Residential',
      location: 'Solana Beach, CA',
      size: '3,500 sq. ft.',
      architect: 'Joza Design Studio',
    },
    {
      src: civilEngineering,
      alt: 'Two-story custom home',
      title: 'RABAN RESIDENCE',
      description: 'Two-story custom home.',
      category: 'Custom Homes/Additions',
      location: 'Campo, CA',
      size: '10,000 sq. ft.',
      architect: '—',
    },
    // Nuevas imágenes añadidas
    {
      src: aditionalimage1,
      alt: 'Another custom home project',
      title:'PARAISO DEVELOPMENT',
      description: 'Two-story single family residence.',
      category: 'Custom Homes/Additions',
      location: 'Spring Valley, CA',
      size: '2,500 sq. ft.',
      architect: 'MC Design Studio',
    },
    {
      src: aditionalimage2,
      alt: 'A custom office space design',
      title: 'LORING RESIDENCE',
      description: 'Two-story single family residence.',
      category: 'Custom Homes/Additions',
      location: 'Pacific Beach, CA',
      size: '2,900 sq. ft.',
      architect: 'Joza Design Studio',
    },
    {
      src: aditionalimage3,
      alt: 'A large residential project',
      title: 'MYERS RESIDENCE',
      description: 'Three-story custom home.',
      category: 'Custom Homes/Additions',
      location: 'Carlsbad, CA',
      size: '3,000 sq. ft.',
      architect: 'Joza Design Studio',
    },
    {
      src: aditionalimage4,
      alt: 'Custom contemporary home',
      title: 'MONTECITOS RESIDENCE',
      description: 'Two-story hillside custom home.',
      category: 'Custom Homes/Additions',
      location: 'Los Angeles, CA',
      size: '2,500 sq. ft.',
      architect: 'Clark Design Studio',
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) =>
          prev === galleryImages.length - 1 ? 0 : prev + 1
        );
      }, 8000); // Tiempo ajustado a 8 segundos
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying, galleryImages.length]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  }, [galleryImages.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  }, [galleryImages.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const togglePlayPause = useCallback(() => {
    setIsPlaying((p) => !p);
  }, []);

  const openModal = useCallback((project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    setIsPlaying(false);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedProject(null);
    setIsPlaying(true);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (isModalOpen) {
        if (event.key === 'Escape') closeModal();
        return;
      }
      switch (event.key) {
        case 'ArrowLeft':
          prevSlide();
          break;
        case 'ArrowRight':
          nextSlide();
          break;
        case ' ':
          event.preventDefault();
          togglePlayPause();
          break;
        case 'Enter':
          openModal(galleryImages[currentIndex]);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [prevSlide, nextSlide, togglePlayPause, isModalOpen, closeModal, openModal, currentIndex, galleryImages]);

  return (
    <>
      <section id="projects" className="py-20 bg-engineering-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-engineering-dark mb-4">
              Project Gallery
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground">
              A showcase of our engineering excellence
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Arrows (Traditional design in desktop mode) */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 bg-engineering-dark/80 text-white p-3 rounded-full hover:bg-engineering-dark transition-all duration-300 hover:scale-110 shadow-lg hidden sm:block"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 bg-engineering-dark/80 text-white p-3 rounded-full hover:bg-engineering-dark transition-all duration-300 hover:scale-110 shadow-lg hidden sm:block"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Controls */}
            <div className="absolute top-4 right-4 z-10 flex space-x-2">
              <button
                onClick={togglePlayPause}
                className="bg-engineering-dark/80 text-white p-2 rounded-full hover:bg-engineering-dark transition-all duration-300 hover:scale-110"
                aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
            </div>

            {/* Carousel */}
            <div className="relative overflow-hidden rounded-xl shadow-2xl aspect-video">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  className="w-full h-full relative group cursor-pointer"
                  onClick={() => openModal(galleryImages[currentIndex])}
                >
                  <img
                    src={galleryImages[currentIndex].src}
                    alt={galleryImages[currentIndex].alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 sm:p-8 text-white">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-engineering-dark px-3 py-1 rounded-full text-xs sm:text-xs md:text-sm">
                        {galleryImages[currentIndex].category}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-4xl font-bold mb-3">
                      {galleryImages[currentIndex].title}
                    </h3>
                    <p className="text-engineering-light text-sm sm:text-sm md:text-xl leading-relaxed">
                      {galleryImages[currentIndex].description}
                    </p>
                    <div className="mt-4 text-sm sm:text-base md:text-lg text-engineering-light">
                      Click to view details
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-engineering-dark/30">
                    <motion.div
                      className="h-full bg-engineering-dark"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 8, ease: 'linear' }} // Tiempo ajustado a 8 segundos
                      key={currentIndex}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Thumbs */}
            <div className="flex justify-center mt-6 space-x-3">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-110 ${
                    index === currentIndex ? 'ring-2 ring-engineering-dark scale-110' : 'opacity-60 hover:opacity-100'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <img src={image.src} alt={image.alt} className="w-16 h-12 object-cover" />
                  {index === currentIndex && <div className="absolute inset-0 bg-engineering-dark/20" />}
                </button>
              ))}
            </div>

            {/* Counter */}
            <div className="text-center mt-4 text-engineering-dark font-medium">
              {currentIndex + 1} / {galleryImages.length}
            </div>

            {/* Hint */}
            <div className="text-center mt-2 text-sm text-muted-foreground">
              Use arrow keys to navigate, spacebar to play/pause, Enter to view details
            </div>

            {/* CTA */}
            <div className="text-center mt-8">
              <Link
                to="/our-projects"
                className="inline-flex items-center gap-2 bg-engineering-dark text-white px-8 py-4 rounded-lg font-semibold hover:bg-engineering-dark/90 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                View All Projects
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-engineering-dark text-white p-2 rounded-full hover:bg-engineering-dark/80 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative">
                <div className="relative h-64 md:h-80 overflow-hidden rounded-t-xl">
                  <img src={selectedProject.src} alt={selectedProject.alt} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                <div className="p-6 md:p-8">
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-engineering-dark text-white px-3 py-1 rounded-full text-sm font-medium">
                        {selectedProject.category}
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-engineering-dark mb-3">
                      {selectedProject.title}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-engineering-dark" />
                      <div>
                        <p className="font-medium text-engineering-dark">Location</p>
                        <p className="text-muted-foreground">{selectedProject.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Tag className="w-5 h-5 text-engineering-dark" />
                      <div>
                        <p className="font-medium text-engineering-dark">Size</p>
                        <p className="text-muted-foreground">{selectedProject.size}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <User className="w-5 h-5 text-engineering-dark" />
                      <div>
                        <p className="font-medium text-engineering-dark">Architect</p>
                        <p className="text-muted-foreground">{selectedProject.architect}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
