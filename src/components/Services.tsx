import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import structuralEngineering from '@/assets/structural-engineering.jpg';
import civilEngineering from '@/assets/civil-engineering.jpg';

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
    <section id="services" className="py-20 bg-engineering-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-engineering-dark mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Collaboratively administrate empowered markets via plug-and-play networks.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-engineering-dark mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-3">
                      <CheckCircle className="text-primary w-5 h-5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
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