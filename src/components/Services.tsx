import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import structuralEngineering from '@/assets/structural-or-civil-engineer.jpg';
import civilEngineering from '@/assets/construction-services1.jpg';

const Services = () => {
  const services = [
    {
      title: 'Structural Engineering Services',
      image: structuralEngineering,
      description: 'Structural Analysis and design of timber, masonry, steel and reinforced concrete systems for:',
      items: [
        'Custom Homes',
        'Room Additions and Remodels',
        'Low-rise apartment buildings',
        'Commercial Building',
        'Code Enforcements',
        'Structural Observations',
        'Structural Consulting'
      ]
    },
    {
      title: 'Civil Engineering Services',
      image: civilEngineering,
      description: 'We specialize in land development services for residential and commercial projects:',
      items: [
        'Grading plans',
        'Site Drainage Plans and Studies',
        'Hydrology and Hydraulic Designs',
        'Erosion Control/ BMP Plans',
        'Stormwater System Design'
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-engineering-white to-engineering-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 bg-engineering-cyan/10 rounded-full mb-6">
            <span className="text-engineering-cyan font-semibold text-sm uppercase tracking-wider">
              Our Expertise
            </span>
          </div>
          <h2 className="text-5xl font-bold text-engineering-dark mb-6">
            Engineering Services
          </h2>
          <div className="w-24 h-1 bg-engineering-cyan mx-auto mb-6"></div>
          <p className="text-xl text-engineering-steel max-w-3xl mx-auto leading-relaxed">
            Professional civil and structural engineering solutions designed to bring your vision to life with precision, safety, and excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="group overflow-hidden bg-engineering-white border-0 shadow-card hover:shadow-professional transition-all duration-500 hover:-translate-y-2">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-engineering-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-10">
                <h3 className="text-3xl font-bold text-engineering-dark mb-6 group-hover:text-engineering-cyan transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-lg text-engineering-steel mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-4">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-4 group/item">
                      <div className="mt-1 p-1 bg-engineering-cyan/10 rounded-full group-hover/item:bg-engineering-cyan/20 transition-colors">
                        <CheckCircle className="text-engineering-cyan w-4 h-4 flex-shrink-0" />
                      </div>
                      <span className="text-engineering-dark font-medium group-hover/item:text-engineering-cyan transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;