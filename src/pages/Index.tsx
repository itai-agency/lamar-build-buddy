import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MenuHighlights from '@/components/MenuHighlights';
import About from '@/components/About';
import Services from '@/components/Services';
import Testimonial from '@/components/Testimonial';
import Gallery from '@/components/Gallery';
import Location from '@/components/Location';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <MenuHighlights />
        <About />
        <Services />
        <Testimonial />
        <Gallery />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
