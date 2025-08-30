import { useCallback, useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Pause, X, Calendar, Tag, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import customHome from '@/assets/custom-home.jpg';
import multiFamily from '@/assets/multi-family.jpg';
import structuralEngineering from '@/assets/structural-engineering.jpg';
import civilEngineering from '@/assets/civil-engineering.jpg';

interface Project {
  src: string;
  alt: string;
  title: string;
  description: string;
  category: string;
  year: string;
  location: string;
  duration: string;
  budget: string;
  details: string;
  features: string[];
  team: string[];
}

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  const galleryImages = [
    { 
      src: customHome, 
      alt: 'Modern custom home exterior with architectural details',
      title: 'Custom Home Construction',
      description: 'Luxury custom home with modern architectural design and premium finishes.',
      category: 'Residential',
      year: '2024',
      location: 'Beverly Hills, CA',
      duration: '18 months',
      budget: '$2.5M',
      details: 'This stunning custom home features contemporary architecture with sustainable design elements. The project included custom cabinetry, smart home integration, and energy-efficient systems. The exterior showcases premium materials including stone veneer, custom metal work, and landscape design that complements the architectural style.',
      features: ['Smart Home Integration', 'Energy Efficient Systems', 'Custom Cabinetry', 'Premium Materials', 'Landscape Design'],
      team: ['Project Manager: Sarah Johnson', 'Architect: Michael Chen', 'Interior Designer: Lisa Rodriguez']
    },
    { 
      src: multiFamily, 
      alt: 'Contemporary multi-family housing complex',
      title: 'Multi-Family Development',
      description: 'Elegant multi-family housing complex with community amenities.',
      category: 'Commercial',
      year: '2023',
      location: 'Downtown Los Angeles, CA',
      duration: '24 months',
      budget: '$15M',
      details: 'A modern multi-family development featuring 120 units with contemporary amenities. The project includes a rooftop garden, fitness center, community lounge, and underground parking. The design emphasizes community living with shared spaces that encourage social interaction while maintaining privacy for residents.',
      features: ['Rooftop Garden', 'Fitness Center', 'Community Lounge', 'Underground Parking', 'Smart Building Systems'],
      team: ['Project Manager: David Martinez', 'Architect: Jennifer Kim', 'Structural Engineer: Robert Wilson']
    },
    { 
      src: structuralEngineering, 
      alt: 'Professional structural engineering workspace',
      title: 'Structural Engineering',
      description: 'Precision engineering for safe and innovative building designs.',
      category: 'Engineering',
      year: '2024',
      location: 'San Francisco, CA',
      duration: '12 months',
      budget: '$8M',
      details: 'Advanced structural engineering project for a mixed-use development. The design incorporates innovative seismic-resistant systems and sustainable materials. The project required extensive analysis and modeling to ensure safety while achieving architectural goals.',
      features: ['Seismic Resistance', 'Sustainable Materials', 'Advanced Modeling', 'Safety Systems', 'Innovative Design'],
      team: ['Lead Engineer: Dr. Amanda Foster', 'Structural Analyst: Carlos Mendez', 'CAD Specialist: Emily Zhang']
    },
    { 
      src: civilEngineering, 
      alt: 'Civil engineers reviewing construction plans',
      title: 'Civil Engineering',
      description: 'Comprehensive civil engineering solutions for infrastructure projects.',
      category: 'Infrastructure',
      year: '2023',
      location: 'Orange County, CA',
      duration: '36 months',
      budget: '$25M',
      details: 'Major infrastructure project including road improvements, drainage systems, and utility upgrades. The project enhanced the community infrastructure while maintaining minimal disruption to existing services. Environmental considerations were prioritized throughout the project lifecycle.',
      features: ['Road Improvements', 'Drainage Systems', 'Utility Upgrades', 'Environmental Protection', 'Traffic Management'],
      team: ['Project Director: Thomas Anderson', 'Civil Engineer: Maria Garcia', 'Environmental Specialist: James Lee']
    }
  ];

  // Autoplay functionality
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, galleryImages.length]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  }, [galleryImages.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  }, [galleryImages.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const togglePlayPause = useCallback(() => {
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const openModal = useCallback((project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    setIsPlaying(false); // Pause autoplay when modal opens
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedProject(null);
    setIsPlaying(true); // Resume autoplay when modal closes
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (isModalOpen) {
        if (event.key === 'Escape') {
          closeModal();
        }
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
            <h2 className="text-4xl font-bold text-engineering-dark mb-4">
              Project Gallery
            </h2>
            <p className="text-lg text-muted-foreground">
              A showcase of our engineering excellence
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 bg-engineering-dark/80 text-white p-3 rounded-full hover:bg-engineering-dark transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 bg-engineering-dark/80 text-white p-3 rounded-full hover:bg-engineering-dark transition-all duration-300 hover:scale-110 shadow-lg"
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

            {/* Carousel Container */}
            <div className="relative overflow-hidden rounded-xl shadow-2xl aspect-video">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="w-full h-full relative group cursor-pointer"
                  onClick={() => openModal(galleryImages[currentIndex])}
                >
                  <img
                    src={galleryImages[currentIndex].src}
                    alt={galleryImages[currentIndex].alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Overlay with project info */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8 text-white">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-4">
                        <span className="bg-engineering-dark px-3 py-1 rounded-full text-sm font-medium">
                          {galleryImages[currentIndex].category}
                        </span>
                        <span className="text-engineering-light text-sm">
                          {galleryImages[currentIndex].year}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold mb-3">{galleryImages[currentIndex].title}</h3>
                    <p className="text-engineering-light text-lg leading-relaxed">
                      {galleryImages[currentIndex].description}
                    </p>
                    <div className="mt-4 text-sm text-engineering-light">
                      Click to view details
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-engineering-dark/30">
                    <motion.div
                      className="h-full bg-engineering-dark"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 5, ease: "linear" }}
                      key={currentIndex}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex justify-center mt-6 space-x-3">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-110 ${
                    index === currentIndex 
                      ? 'ring-2 ring-engineering-dark scale-110' 
                      : 'opacity-60 hover:opacity-100'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-16 h-12 object-cover"
                  />
                  {index === currentIndex && (
                    <div className="absolute inset-0 bg-engineering-dark/20" />
                  )}
                </button>
              ))}
            </div>

            {/* Slide Counter */}
            <div className="text-center mt-4 text-engineering-dark font-medium">
              {currentIndex + 1} / {galleryImages.length}
            </div>

            {/* Keyboard shortcuts hint */}
            <div className="text-center mt-2 text-sm text-muted-foreground">
              Use arrow keys to navigate, spacebar to play/pause, Enter to view details
            </div>

            {/* View All Projects Button */}
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

      {/* Project Details Modal */}
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
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-engineering-dark text-white p-2 rounded-full hover:bg-engineering-dark/80 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal content */}
              <div className="relative">
                {/* Project image */}
                <div className="relative h-64 md:h-80 overflow-hidden rounded-t-xl">
                  <img
                    src={selectedProject.src}
                    alt={selectedProject.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                {/* Project details */}
                <div className="p-6 md:p-8">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-engineering-dark text-white px-3 py-1 rounded-full text-sm font-medium">
                        {selectedProject.category}
                      </span>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{selectedProject.year}</span>
                      </div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-engineering-dark mb-3">
                      {selectedProject.title}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Project info grid */}
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-engineering-dark" />
                        <div>
                          <p className="font-medium text-engineering-dark">Location</p>
                          <p className="text-muted-foreground">{selectedProject.location}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-engineering-dark" />
                        <div>
                          <p className="font-medium text-engineering-dark">Duration</p>
                          <p className="text-muted-foreground">{selectedProject.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Tag className="w-5 h-5 text-engineering-dark" />
                        <div>
                          <p className="font-medium text-engineering-dark">Budget</p>
                          <p className="text-muted-foreground">{selectedProject.budget}</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-engineering-dark mb-3">Key Features</h3>
                      <ul className="space-y-2">
                        {selectedProject.features.map((feature: string, index: number) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-engineering-dark rounded-full" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Detailed description */}
                  <div className="mb-8">
                    <h3 className="font-semibold text-engineering-dark mb-3">Project Details</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProject.details}
                    </p>
                  </div>

                  {/* Team */}
                  <div>
                    <h3 className="font-semibold text-engineering-dark mb-3">Project Team</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {selectedProject.team.map((member: string, index: number) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-engineering-dark rounded-full" />
                          <span className="text-muted-foreground text-sm">{member}</span>
                        </div>
                      ))}
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