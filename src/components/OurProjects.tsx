import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Tag, MapPin } from 'lucide-react';
import customHome from '@/assets/custom-home.jpg';
import multiFamily from '@/assets/multi-family.jpg';
import structuralEngineering from '@/assets/structural-engineering.jpg';
import civilEngineering from '@/assets/civil-engineering.jpg';

interface Project {
  id: number;
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

const OurProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      src: customHome,
      alt: 'Modern custom home exterior with architectural details',
      title: 'Custom Home Construction',
      description: 'Luxury custom home with modern architectural design and premium finishes.',
      category: 'Custom Homes/Additions',
      year: '2024',
      location: 'Beverly Hills, CA',
      duration: '18 months',
      budget: '$2.5M',
      details: 'This stunning custom home features contemporary architecture with sustainable design elements. The project included custom cabinetry, smart home integration, and energy-efficient systems. The exterior showcases premium materials including stone veneer, custom metal work, and landscape design that complements the architectural style.',
      features: ['Smart Home Integration', 'Energy Efficient Systems', 'Custom Cabinetry', 'Premium Materials', 'Landscape Design'],
      team: ['Project Manager: Sarah Johnson', 'Architect: Michael Chen', 'Interior Designer: Lisa Rodriguez']
    },
    {
      id: 2,
      src: multiFamily,
      alt: 'Contemporary multi-family housing complex',
      title: 'Multi-Family Development',
      description: 'Elegant multi-family housing complex with community amenities.',
      category: 'Multi-Family Housing',
      year: '2023',
      location: 'Downtown Los Angeles, CA',
      duration: '24 months',
      budget: '$15M',
      details: 'A modern multi-family development featuring 120 units with contemporary amenities. The project includes a rooftop garden, fitness center, community lounge, and underground parking. The design emphasizes community living with shared spaces that encourage social interaction while maintaining privacy for residents.',
      features: ['Rooftop Garden', 'Fitness Center', 'Community Lounge', 'Underground Parking', 'Smart Building Systems'],
      team: ['Project Manager: David Martinez', 'Architect: Jennifer Kim', 'Structural Engineer: Robert Wilson']
    },
    {
      id: 3,
      src: structuralEngineering,
      alt: 'Professional structural engineering workspace',
      title: 'Structural Engineering',
      description: 'Precision engineering for safe and innovative building designs.',
      category: 'Commercial',
      year: '2024',
      location: 'San Francisco, CA',
      duration: '12 months',
      budget: '$8M',
      details: 'Advanced structural engineering project for a mixed-use development. The design incorporates innovative seismic-resistant systems and sustainable materials. The project required extensive analysis and modeling to ensure safety while achieving architectural goals.',
      features: ['Seismic Resistance', 'Sustainable Materials', 'Advanced Modeling', 'Safety Systems', 'Innovative Design'],
      team: ['Lead Engineer: Dr. Amanda Foster', 'Structural Analyst: Carlos Mendez', 'CAD Specialist: Emily Zhang']
    },
    {
      id: 4,
      src: civilEngineering,
      alt: 'Civil engineers reviewing construction plans',
      title: 'Civil Engineering',
      description: 'Comprehensive civil engineering solutions for infrastructure projects.',
      category: 'Government/Military',
      year: '2023',
      location: 'Orange County, CA',
      duration: '36 months',
      budget: '$25M',
      details: 'Major infrastructure project including road improvements, drainage systems, and utility upgrades. The project enhanced the community infrastructure while maintaining minimal disruption to existing services. Environmental considerations were prioritized throughout the project lifecycle.',
      features: ['Road Improvements', 'Drainage Systems', 'Utility Upgrades', 'Environmental Protection', 'Traffic Management'],
      team: ['Project Director: Thomas Anderson', 'Civil Engineer: Maria Garcia', 'Environmental Specialist: James Lee']
    },
    {
      id: 5,
      src: customHome,
      alt: 'Modern residential construction site',
      title: 'Residential Complex',
      description: 'Modern residential development with sustainable design.',
      category: 'Custom Homes/Additions',
      year: '2023',
      location: 'Pasadena, CA',
      duration: '20 months',
      budget: '$12M',
      details: 'A contemporary residential complex featuring energy-efficient design and modern amenities. The project includes 50 luxury units with smart home technology and community spaces.',
      features: ['Smart Home Technology', 'Energy Efficient Design', 'Community Spaces', 'Luxury Finishes', 'Modern Amenities'],
      team: ['Project Manager: Alex Thompson', 'Architect: Rachel Green', 'Interior Designer: Mark Davis']
    },
    {
      id: 6,
      src: multiFamily,
      alt: 'Commercial office building',
      title: 'Office Complex',
      description: 'Modern office complex with innovative design.',
      category: 'Commercial',
      year: '2024',
      location: 'Santa Monica, CA',
      duration: '16 months',
      budget: '$18M',
      details: 'A state-of-the-art office complex designed for modern businesses. Features include flexible workspaces, conference facilities, and sustainable building systems.',
      features: ['Flexible Workspaces', 'Conference Facilities', 'Sustainable Systems', 'Modern Design', 'Business Amenities'],
      team: ['Project Manager: Lisa Chen', 'Architect: David Wilson', 'Structural Engineer: Maria Rodriguez']
    },
    {
      id: 7,
      src: structuralEngineering,
      alt: 'Government building construction',
      title: 'Government Center',
      description: 'Modern government center with advanced security.',
      category: 'Government/Military',
      year: '2023',
      location: 'Sacramento, CA',
      duration: '30 months',
      budget: '$35M',
      details: 'A comprehensive government center designed with security and efficiency in mind. The facility includes multiple departments, secure areas, and public spaces.',
      features: ['Advanced Security', 'Multiple Departments', 'Public Spaces', 'Secure Areas', 'Efficient Design'],
      team: ['Project Director: James Brown', 'Security Specialist: Amanda White', 'Architect: Robert Lee']
    },
    {
      id: 8,
      src: civilEngineering,
      alt: 'Multi-family housing development',
      title: 'Urban Housing',
      description: 'Urban housing development with community focus.',
      category: 'Multi-Family Housing',
      year: '2024',
      location: 'Long Beach, CA',
      duration: '22 months',
      budget: '$20M',
      details: 'An urban housing development designed to create a sense of community while providing modern living spaces. Features include shared amenities and green spaces.',
      features: ['Community Focus', 'Shared Amenities', 'Green Spaces', 'Modern Living', 'Urban Design'],
      team: ['Project Manager: Sarah Davis', 'Urban Planner: Michael Johnson', 'Landscape Architect: Emily Chen']
    },
    {
      id: 9,
      src: customHome,
      alt: 'Luxury home addition',
      title: 'Home Addition',
      description: 'Luxury home addition with premium finishes.',
      category: 'Custom Homes/Additions',
      year: '2023',
      location: 'Newport Beach, CA',
      duration: '8 months',
      budget: '$1.8M',
      details: 'A luxury home addition that seamlessly integrates with the existing structure. Features premium materials and custom design elements.',
      features: ['Seamless Integration', 'Premium Materials', 'Custom Design', 'Luxury Finishes', 'Quality Craftsmanship'],
      team: ['Project Manager: Tom Wilson', 'Architect: Lisa Anderson', 'Interior Designer: Rachel Green']
    },
    {
      id: 10,
      src: multiFamily,
      alt: 'Commercial retail center',
      title: 'Retail Center',
      description: 'Modern retail center with mixed-use spaces.',
      category: 'Commercial',
      year: '2024',
      location: 'Irvine, CA',
      duration: '14 months',
      budget: '$22M',
      details: 'A modern retail center designed to serve the community with a mix of retail, dining, and entertainment options.',
      features: ['Mixed-Use Spaces', 'Retail Options', 'Dining Areas', 'Entertainment', 'Community Focus'],
      team: ['Project Manager: Kevin Martinez', 'Commercial Architect: Jennifer Kim', 'Retail Specialist: David Park']
    },
    {
      id: 11,
      src: structuralEngineering,
      alt: 'Military facility construction',
      title: 'Military Facility',
      description: 'Secure military facility with advanced technology.',
      category: 'Government/Military',
      year: '2023',
      location: 'San Diego, CA',
      duration: '28 months',
      budget: '$40M',
      details: 'A secure military facility designed with the latest technology and security measures. The facility supports various military operations and training.',
      features: ['Advanced Technology', 'Security Measures', 'Military Operations', 'Training Facilities', 'Secure Design'],
      team: ['Project Director: Colonel Smith', 'Security Engineer: Dr. Johnson', 'Military Specialist: Major Davis']
    },
    {
      id: 12,
      src: civilEngineering,
      alt: 'Affordable housing complex',
      title: 'Affordable Housing',
      description: 'Affordable housing complex with community amenities.',
      category: 'Multi-Family Housing',
      year: '2024',
      location: 'Anaheim, CA',
      duration: '26 months',
      budget: '$28M',
      details: 'An affordable housing complex designed to provide quality living spaces for families. Includes community amenities and sustainable design.',
      features: ['Affordable Design', 'Community Amenities', 'Sustainable Design', 'Family Focus', 'Quality Living'],
      team: ['Project Manager: Maria Garcia', 'Housing Specialist: John Smith', 'Community Planner: Lisa Brown']
    }
  ];

  const categories = ['All', 'Commercial', 'Custom Homes/Additions', 'Government/Military', 'Multi-Family Housing'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const openModal = useCallback((project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedProject(null);
  }, []);

  return (
    <>
      <section className="py-20 bg-engineering-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-engineering-dark mb-4">
              OUR PROJECTS
            </h1>
            <p className="text-lg text-muted-foreground">
              A showcase of our engineering excellence across various sectors
            </p>
          </div>

          {/* Category Filters */}
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

          {/* Projects Grid */}
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
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={project.src}
                      alt={project.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-engineering-dark px-2 py-1 rounded text-xs font-medium">
                          {project.category}
                        </span>
                        <span className="text-sm opacity-80">{project.year}</span>
                      </div>
                      <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
                      <p className="text-sm opacity-90 line-clamp-2">{project.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* No projects message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                No projects found in the selected category.
              </p>
            </div>
          )}
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

export default OurProjects;
