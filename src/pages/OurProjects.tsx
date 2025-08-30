import Header from '@/components/Header';
import OurProjects from '@/components/OurProjects';
import Footer from '@/components/Footer';

const OurProjectsPage = () => {
  return (
    <div className="min-h-screen">
      <Header darkMode={true} />
      <main>
        <OurProjects />
      </main>
      <Footer />
    </div>
  );
};

export default OurProjectsPage;
