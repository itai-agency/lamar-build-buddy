import aboutEngineer from '@/assets/about-engineer.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-engineering-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-engineering-dark mb-6">
              About LAMAR Engineering
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                LAMAR Engineering is a privately civil and structural engineering design and consulting firm located in South Bay San Diego. We provide professional civil and structural engineering services to private residential and commercial projects.
              </p>
              <p>
                We specialize in the design of attractive, functional, cost effective solutions to land development and structural engineering challenges and assist our clients navigate the maze of regulations required to bring their projects to completion.
              </p>
              <p>
                Lamar Engineering is a small firm that specializes in one-on-one personal service, where we treat every client as our number one priority. Our Principal, Luis A. Labrada, P.E., has over 18 years of combined experience in the field of civil, structural, geotechnical, material testing and inspection, and project management in residential, commercial, public and private development projects.
              </p>
              <p>
                He graduated from the University of California, Los Angeles (UCLA) in 1997 with a bachelors of Civil Engineering degree. He has worked on privately consulting firms, and governmental public agency. Mr. Labrada was a co-founder of two local civil and structural engineering firms (GALA Design Group and GL Engineers, Inc.) before establishing his own firm.
              </p>
              <p>
                Luis A. Labrada, P.E. has provided a wide variety of professional civil and structural engineering services to over 60 different clients and completed over 1,500 projects in southern California.
              </p>
            </div>
          </div>
          
          <div className="lg:order-first">
            <div className="relative">
              <img 
                src={aboutEngineer} 
                alt="Luis A. Labrada, P.E. working on engineering plans"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold">1,500+</div>
                  <div className="text-sm">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;