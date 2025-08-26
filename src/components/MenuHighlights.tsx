import { Card, CardContent } from '@/components/ui/card';
import customHome from '@/assets/custom-home.jpg';
import multiFamily from '@/assets/multi-family.jpg';

const MenuHighlights = () => {
  const highlights = [
    {
      title: 'Custom Homes',
      image: customHome,
      description: 'Luxury custom residential construction'
    },
    {
      title: 'Multi-Family Housing',
      image: multiFamily,
      description: 'Modern apartment and condominium complexes'
    },
    {
      title: 'Commercial Projects',
      image: customHome,
      description: 'Professional commercial building solutions'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-engineering-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-engineering-dark mb-4">
            Our Project Highlights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing our expertise in residential and commercial construction projects
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={highlight.image} 
                  alt={highlight.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-engineering-dark mb-2">
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground">
                  {highlight.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;