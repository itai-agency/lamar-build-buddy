import customHome from '@/assets/imagen2.jpg';
import multiFamily from '@/assets/Image5.jpg';
import structuralEngineering from '@/assets/Image3.jpg';
import civilEngineering from '@/assets/Image4.jpg';

const Gallery = () => {
  const galleryImages = [
    { src: customHome, alt: 'Modern custom home exterior with architectural details' },
    { src: multiFamily, alt: 'Contemporary multi-family housing complex' },
    { src: structuralEngineering, alt: 'Professional structural engineering workspace' },
    { src: civilEngineering, alt: 'Civil engineers reviewing construction plans' }
  ];

  return (
    <section className="py-20 bg-engineering-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-engineering-dark mb-4">
            Project Gallery
          </h2>
          <p className="text-lg text-muted-foreground">
            A showcase of our engineering excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-engineering-dark/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-engineering-white font-semibold">View Project</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;