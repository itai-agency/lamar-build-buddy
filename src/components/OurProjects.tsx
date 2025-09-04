import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, MapPin, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import customHome from '@/assets/imagen2.jpg';
import multiFamily from '@/assets/image6.jpg';
import structuralEngineering from '@/assets/IMG_3190.jpg';
import aditionalimage from '@/assets/Image5.jpg';
import aditionalimage2 from '@/assets/IMG_2412.jpg';
import aditionalimage3 from '@/assets/NAF1.png';
import aditionalimage4 from '@/assets/IMG_1017.jpg';
import aditionalimage5 from '@/assets/IMG_5738.jpg';
import aditionalimage6 from '@/assets/image00.jpg';
import aditionalimage7 from '@/assets/IMG_4941.jpg';
import aditionalimage8 from '@/assets/IMG_6154.jpg';
import aditionalimage9 from '@/assets/IMG_5862.jpg';
import aditionalimage10 from '@/assets/IMG_0160.jpg';
import aditionalimage11 from '@/assets/NAVAL1.png';
import aditionalimage12 from '@/assets/IMG_0222.jpg';
import aditionalimage13 from '@/assets/IMG_1807.jpg';
import aditionalimage14 from '@/assets/JONES1.jpg';
import aditionalimage15 from '@/assets/Image4.jpg';
import aditionalimage16 from '@/assets/HAYES1.jpg';
import aditionalimage17 from '@/assets/IMG_2292.jpg';
import aditionalimage18 from '@/assets/GATE51.jpg';
import aditionalimage19 from '@/assets/IMG_1346.jpg';
import aditionalimage20 from '@/assets/IMG_5688.jpg';
import aditionalimage21 from '@/assets/IMG_2342.jpg';
import aditionalimage22 from '@/assets/IMG_3195.jpg';
import aditionalimage23 from '@/assets/VD_Cam01_Final.png';
import aditionalimage24 from '@/assets/IMG_1020.jpg';
import aditionalimage25 from '@/assets/image7.jpg';
import aditionalimage26 from '@/assets/JONES-42.jpg';
import aditionalimage27 from '@/assets/VN05.jpg';
import aditionalimage28 from '@/assets/IMG_1969.jpg';
import aditionalimage29 from '@/assets/P1010045.jpg';
import aditionalimage30 from '@/assets/P1010064x.jpg';
import aditionalimage31 from '@/assets/IMG_1876.jpg';
import aditionalimage32 from '@/assets/dBZOIn_58323_132_web_cropped_2x.jpg';
import aditionalimage33 from '@/assets/P1010098.jpg';
import aditionalimage34 from '@/assets/IMG_1957.jpg';
import aditionalimage35 from '@/assets/IMG_0127.jpg';
import aditionalimage36 from '@/assets/IMG_1885.jpg';

interface ProjectCard {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
  category: string;
  location: string;
  size: string;
  architect: string;
}

const OurProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectCard | null>(null);

  const projects: ProjectCard[] = [
    {
      id: 1,
      src: customHome,
      alt: "Modern custom home exterior with architectural details",
      title: "MYERS RESIDENCE",
      description: "Three-story single family residence addition and remodel,",
      category: "Custom Homes/Additions",
      location: "La Jolla, CA",
      size: "4,500 sq. ft.",
      architect: "Joza Design Studio (jozadesign.com)",
    },
    {
      id: 2,
      src: multiFamily,
      alt: "Contemporary multi-family housing complex",
      title: "VIA GRIMALDI RESIDENCE",
      description: "Two-story single family residence custom home with roof top deck.",
      category: "Multi-Family Housing",
      location: "Del Mar, CA",
      size: "3,200 sq. ft.",
      architect: "Joza Design Studio (jozadesign.com)",
    },
    {
      id: 3,
      src: aditionalimage2,
      alt: "Professional structural engineering workspace",
      title: "TENENHAUS RESIDENCE",
      description: "Two-story single family residence addition and remodel.",
      category: "Custom Homes/Additions",
      location: "Point Loma, CA",
      size: " 5,500 sq. ft.",
      architect: "Joza Design Studio (jozadesign.com)",
    },
    {
      id: 4,
      src: aditionalimage3,
      alt: "Civil engineers reviewing construction plans",
      title: "SOLAR SUPERSTRUCTURE",
      description: "Design-built project for a steel frame superstructure to accommodate solar panels for the air force military base.",
      category: "Government/Military",
      location: "El Centro, CA",
      size: "350 sq. ft.",
      architect: "LAMAR ENGINEERING INC.",
    },
    {
      id: 5,
      src: aditionalimage,
      alt: "Modern residential construction site",
      title: "RANCHO SANTA FE",
      description: "Two-story single family residence custom homes.",
      category: "Custom Homes/Additions",
      location: "Spring Valley, CA",
      size: " 6,500 sq. ft.",
      architect: "Clark Design Studio",
    },
    {
      id: 6,
      src: aditionalimage4,
      alt: "Commercial office building",
      title: "PARAISO DEVELOPMENT",
      description: "Two-story single family residence custom homes on 10 lots.",
      category: "Custom Homes/Additions",
      location: "Spring Valley, CA",
      size: " 2,500 sq. ft.",
      architect: "MC Design Studio",
    },
    {
      id: 7,
      src: structuralEngineering,
      alt: "Government building construction",
      title: "PANORAMA RESIDENCE",
      description: "Three-story single family residence custom home.",
      category: "Custom Homes/Additions",
      location: " La Mesa, CA",
      size: "8,500 sq. ft.",
      architect: "Taylor Development Inc.",
    },
    {
      id: 8,
      src: aditionalimage5,
      alt: "Two-story hillside single family custom home",
      title: "MONTECITOS RESIDENCE",
      description: "Two-story hillside single family custom home.",
      category: "Custom Homes/Additions",
      location: "Los Angeles, CA",
      size: "2,500 sq. ft.",
      architect: "Joza Design Studio",
    },
    {
      id: 9,
      src: aditionalimage6,
      alt: "Two-story single family residence addition and remodel",
      title: "MOUNT SOLEDAD RESIDENCE",
      description: "Two-story single family residence addition and remodel.",
      category: "Custom Homes/Additions",
      location: "La Jolla, CA",
      size: "3,100 sq. ft.",
      architect: "Ell Design Studio",
    },
    {
      id: 10,
      src: aditionalimage7,
      alt: "One-story commercial retail building",
      title: "MISSION SHOPPING CENTER",
      description: "One-story commercial retail building.",
      category: "Commercial",
      location: "Escondido, CA",
      size: "8,000 sq. ft.",
      architect: "Arkisource",
    },
    {
      id: 11,
      src: aditionalimage8,
      alt: "Detached garage with rooftop deck",
      title: "MELCHUM GARAGE",
      description: "One-story CMU block wall detached garage with rooftop deck.",
      category: "Custom Homes/Additions",
      location: "Point Loma, CA",
      size: "850 sq. ft.",
      architect: "ENE-T Studio",
    },
    {
      id: 12,
      src: aditionalimage9,
      alt: "Storefront design",
      title: "MAC STORE FRONT",
      description: "Design of Mac store front in commercial center.",
      category: "Commercial",
      location: "Bonita, CA",
      size: "—",
      architect: "—",
    },
    {
      id: 13,
      src: aditionalimage10,
      alt: "Two-story residence remodel",
      title: "LORING RESIDENCE",
      description: "Two-story single family residence addition and remodel.",
      category: "Custom Homes/Additions",
      location: "Pacific Beach, CA",
      size: "2,900 sq. ft.",
      architect: "Joza Design Studio",
    },
    {
      id: 14,
      src: aditionalimage11,
      alt: "Steel frame loading dock and canopy",
      title: "LOADING TRUCKS PLATFORM",
      description: "Steel frame loading dock and canopy.",
      category: "Commercial",
      location: "Coronado, CA",
      size: "450 sq. ft.",
      architect: "LAMAR Engineering Inc.",
    },
    {
      id: 15,
      src: aditionalimage12,
      alt: "Commercial brewery remodel",
      title: "LITTLE MISS BREWING",
      description: "One-story commercial remodel for proposed brewery.",
      category: "Commercial",
      location: "San Diego, CA",
      size: "3,000 sq. ft.",
      architect: "Modern Forms Design",
    },
    {
      id: 16,
      src: aditionalimage13,
      alt: "Residence addition and remodel",
      title: "LEE RESIDENCE",
      description: "Two-story single family residence addition and remodel.",
      category: "Custom Homes/Additions",
      location: "National City, CA",
      size: "2,200 sq. ft.",
      architect: "DLAM Design",
    },
    {
      id: 17,
      src: aditionalimage14,
      alt: "Residence remodel with rooftop deck",
      title: "JONES RESIDENCE",
      description: "Two-story single family residence addition and remodel with rooftop deck.",
      category: "Custom Homes/Additions",
      location: "Point Loma, CA",
      size: "2,000 sq. ft.",
      architect: "Modern Forms Design",
    },
    {
      id: 18,
      src: aditionalimage15,
      alt: "Residence remodel with rooftop deck",
      title: "JAUREGUI RESIDENCE",
      description: "Two-story single family residence addition and remodel with attached one-story warehouse building",
      category: "Commercial",
      location: " Chula Vista, CA",
      size: "2,500 sq. ft. (Residential) ; 2,000 sq. ft. (Commercial)",
      architect: "DLAM Design (dlamdesign.com)",
    },
    {
      id: 19,
      src: aditionalimage16,
      alt: "Multi-family apartment complex",
      title: "HAYES RESIDENCE",
      description: "Three-story single family residence addition and remodel.",
      category: "Custom Homes/Additions",
      location: "San Diego, CA",
      size: "7,500 sq. ft.",
      architect: "Studio E Architects",
    },
    {
      id: 20,
      src: aditionalimage17,
      alt: "Two-story single family residence addition and remodel",
      title: "GOLDEN HILLS RESIDENCE",
      description: "Two-story single family residence addition and remodel.",
      category: "Custom Homes/Additions",
      location: "San Diego, CA",
      size: "2,500 sq. ft.",
      architect: "Joza Design Studio",
    },
    {
      id: 21,
      src: aditionalimage18,
      alt: "Two-story single family custom home",
      title: "GATE 5 RESIDENCE",
      description: "Two-story single family custom home.",
      category: "Custom Homes/Additions",
      location: "Chula Vista, CA",
      size: "12,500 sq. ft.",
      architect: "Focus, Inc.",
    },
    {
      id: 22,
      src: aditionalimage19,
      alt: "Two-story single family custom home",
      title: "GATE 3 RESIDENCE",
      description: "Two-story single family custom home.",
      category: "Custom Homes/Additions",
      location: "Chula Vista, CA",
      size: "12,000 sq. ft.",
      architect: "Focus, Inc.",
    },
    {
      id: 23,
      src: aditionalimage20,
      alt: "Three-story apartment units",
      title: "FELSPAR APARTMENT",
      description: "Three-story apartment units.",
      category: "Multi-Family Housing",
      location: "Pacific Beach, CA",
      size: "9,000 sq. ft.",
      architect: "Joza Design Studio",
    },
    {
      id: 24,
      src:  aditionalimage21,
      alt: "Two-story single family custom home",
      title: "F STREET RESIDENCE",
      description: "Two-story single family custom home.",
      category: "Custom Homes/Additions",
      location: "Coronado, CA",
      size: "3,200 sq. ft.",
      architect: "Focus, Inc.",
    },
    {
      id: 25,
      src:  aditionalimage22,
      alt: "Two-story historical residence addition and remodel",
      title: "BURKE RESIDENCE",
      description: "Two-story historical residence addition and remodel.",
      category: "Custom Homes/Additions",
      location: "San Diego, CA",
      size: "3,000 sq. ft.",
      architect: "Joza Design Studio",
    },
    {
      id: 26,
      src: aditionalimage23,
      alt: "Two-story custom home with rooftop deck",
      title: "VIA DONADA RESIDENCE",
      description: "Two-story custom home with rooftop deck.",
      category: "Custom Homes/Additions",
      location: "Del Mar, CA",
      size: "4,000 sq. ft.",
      architect: "Joza Design Studio",
    },
    {
      id: 27,
      src: aditionalimage24,
      alt: "Two-story custom track homes",
      title: "PARAISO TRACK HOMES",
      description: "Two-story custom track homes.",
      category: "Multi-Family Housing",
      location: "Spring Valley, CA",
      size: "2,500 sq. ft.",
      architect: "MC4 Designs",
    },
    {
      id: 28,
      src:  aditionalimage25,
      alt: "One-story lube oil center with underground basement",
      title: "BONITA LUBE OIL CENTER",
      description: "One-story lube oil center with underground basement.",
      category: "Commercial",
      location: "Chula Vista, CA",
      size: "1,500 sq. ft.",
      architect: "—",
    },
    {
      id: 29,
      src:  aditionalimage26,
      alt: "Three-story custom home in progress",
      title: "JONES RESIDENCE",
      description: "Three-story custom home in progress.",
      category: "Custom Homes/Additions",
      location: "San Diego, CA",
      size: "3,200 sq. ft.",
      architect: "Modern Forms Design",
    },
    {
      id: 30,
      src:  aditionalimage27,
      alt: "Three-story community center",
      title: "VILLA NUEVA COMMUNITY CENTER",
      description: "Three-story community center.",
      category: "Government/Military",
      location: "San Ysidro, CA",
      size: "30,000 sq. ft.",
      architect: "Arki Source",
    },
    {
      id: 31,
      src:  aditionalimage28,
      alt: "Two-story custom home with detached garage",
      title: "VIA GRIMALDI RESIDENCE",
      description: "Two-story custom home with detached garage.",
      category: "Custom Homes/Additions",
      location: "Solana Beach, CA",
      size: "3,500 sq. ft.",
      architect: "Joza Design Studio",
    },
    {
      id: 32,
      src:  aditionalimage29,
      alt: "Three two-story town homes",
      title: "SMYTHE TOWN HOMES",
      description: "Three two-story town homes.",
      category: "Multi-Family Housing",
      location: "San Ysidro, CA",
      size: "5,400 sq. ft.",
      architect: "—",
    },
    {
      id: 33,
      src:  aditionalimage30,
      alt: "Two-story custom home",
      title: "RABAN RESIDENCE",
      description: "Two-story custom home.",
      category: "Custom Homes/Additions",
      location: "Campo, CA",
      size: "10,000 sq. ft.",
      architect: "—",
    },
    {
      id: 34,
      src:  aditionalimage31,
      alt: "Three-story custom home with roof deck",
      title: "MYERS RESIDENCE",
      description: "Three-story custom home with roof deck.",
      category: "Custom Homes/Additions",
      location: "La Jolla, CA",
      size: "3,000 sq. ft.",
      architect: "Joza Design Studio",
    },
    {
      id: 35,
      src:  aditionalimage32,
      alt: "Two-story custom home.",
      title: "JELLET RESIDENCE",
      description: "Two-story custom home.",
      category: "Custom Homes/Additions",
      location: "San Diego, CA",
      size: "4,000 sq. ft.",
      architect: "Joza Design Studio",
    },
    {
      id: 36,
      src:  aditionalimage33,
      alt: "Three-story condominiums",
      title: "HILLTRESS CONDOS",
      description: "Three-story condominiums.",
      category: "Multi-Family Housing",
      location: "San Diego, CA",
      size: "6,000 sq. ft.",
      architect: "—",
    },
    {
      id: 37,
      src:  aditionalimage34,
      alt: "Two-story custom home",
      title: "GRANADOS RESIDENCE",
      description: "Two-story custom home.",
      category: "Custom Homes/Additions",
      location: "Solana Beach, CA",
      size: "6,000 sq. ft.",
      architect: "Joza Design Studio",
    },
    {
      id: 38,
      src:  aditionalimage35,
      alt: "Three-story custom home on hillside",
      title: "DEL GROVE CUSTOM HOMES",
      description: "Three-story custom home on hillside.",
      category: "Custom Homes/Additions",
      location: "Lemon Grove, CA",
      size: "2,800 sq. ft.",
      architect: "—",
    },
    {
      id: 39,
      src: aditionalimage36,
      alt: "Front tower and rear deck addition to existing residence",
      title: "ARTHUR RESIDENCE",
      description: "Front tower and rear deck addition to existing residence.",
      category: "Custom Homes/Additions",
      location: "La Jolla, CA",
      size: "2,500 sq. ft.",
      architect: "—",
    },
  ];
  

  const categories = ['All', 'Commercial', 'Custom Homes/Additions', 'Government/Military', 'Multi-Family Housing'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((project) => project.category === selectedCategory);

  const openModal = useCallback((project: ProjectCard) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedProject(null); // Restablecer el estado correctamente
  }, []);
 
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isModalOpen) {
        event.preventDefault();
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen, closeModal]);
  
  return (
    <>
      <section className="py-20 bg-engineering-white min-h-screen">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <Link
                to="/"
                className="inline-flex items-center gap-2 bg-engineering-cyan text-engineering-dark px-6 py-3 rounded-lg font-semibold hover:bg-engineering-blue hover:text-white transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Home
              </Link>
            </div>

            <h1 className="text-4xl font-bold text-engineering-dark mb-4">
              OUR PROJECTS
            </h1>
            <p className="text-lg text-muted-foreground">
              A showcase of our engineering excellence across various sectors
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-engineering-dark text-white border-2 border-engineering-dark'
                    : 'bg-white text-engineering-dark border-2 border-gray-300 hover:border-engineering-dark hover:bg-gray-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => openModal(project)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      openModal(project);
                    }
                  }}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={project.src}
                      alt={project.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <span className="bg-engineering-dark px-2 py-1 rounded text-xs font-medium">
                        {project.category}
                      </span>
                      <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
                      <p className="text-sm opacity-90 line-clamp-2">{project.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                No projects found in the selected category.
              </p>
            </div>
          )}
        </div>
      </section>

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
              className="relative bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
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
                  <img
                    src={selectedProject.src}
                    alt={selectedProject.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                <div className="p-6 md:p-8">
                  <div className="mb-6">
                    <span className="bg-engineering-dark text-white px-3 py-1 rounded-full text-sm font-medium">
                      {selectedProject.category}
                    </span>
                    <h2 id="project-modal-title" className="text-3xl md:text-4xl font-bold text-engineering-dark mb-3">
                      {selectedProject.title}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-engineering-dark" />
                      <div>
                        <p className="font-medium text-engineering-dark">Location</p>
                        <p className="text-muted-foreground">{selectedProject.location.trim()}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Tag className="w-5 h-5 text-engineering-dark" />
                      <div>
                        <p className="font-medium text-engineering-dark">Size</p>
                        <p className="text-muted-foreground">{selectedProject.size.trim()}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Tag className="w-5 h-5 text-engineering-dark" />
                      <div>
                        <p className="font-medium text-engineering-dark">Architect</p>
                        <p className="text-muted-foreground">{selectedProject.architect.trim()}</p>
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

export default OurProjects;
