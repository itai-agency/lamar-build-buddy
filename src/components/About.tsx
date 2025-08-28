import { Award, Users, Calendar, Target } from 'lucide-react';
import aboutEngineer from '@/assets/civil-engineer-about.jpg';

const About = () => {
  const stats = [
    { icon: Calendar, number: "18+", label: "Years Experience" },
    { icon: Users, number: "60+", label: "Satisfied Clients" },
    { icon: Target, number: "1,500+", label: "Projects Completed" },
    { icon: Award, number: "100%", label: "Licensed Professional" }
  ];

  return (
    <section id="about" className="py-24 bg-engineering-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 bg-engineering-cyan/10 rounded-full mb-6">
            <span className="text-engineering-cyan font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
          </div>
          <h2 className="text-5xl font-bold text-engineering-dark mb-6">
            Professional Engineering Excellence
          </h2>
          <div className="w-24 h-1 bg-engineering-cyan mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
          {/* Image */}
          <div className="relative group lg:order-first">
            <div className="absolute inset-0 bg-engineering-cyan/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
            <img 
              src={aboutEngineer} 
              alt="Professional engineer working on construction plans"
              className="relative w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-professional z-10"
            />
            <div className="absolute -bottom-6 -right-6 bg-engineering-white p-6 rounded-xl shadow-card z-20">
              <div className="text-center">
                <div className="text-3xl font-bold text-engineering-cyan">P.E.</div>
                <div className="text-sm text-engineering-steel">Licensed</div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-engineering-dark mb-8">
              
            </h3>
            <div className="text-lg text-engineering-steel space-y-6 leading-relaxed">
              <p>
                A privately-owned civil and structural engineering design and consulting firm located in South Bay San Diego, providing professional engineering services to private residential and commercial projects.
              </p>
              <p>
                We specialize in designing <strong className="text-engineering-dark">attractive, functional, and cost-effective solutions</strong> to land development and structural engineering challenges, helping our clients navigate complex regulations to bring their projects to completion.
              </p>
              <p>
                As a boutique firm, we provide <strong className="text-engineering-cyan">one-on-one personal service</strong>, treating every client as our number one priority with dedicated attention to detail and excellence.
              </p>
            </div>

            {/* Principal Info */}
            <div className="mt-8 p-6 bg-engineering-light/50 rounded-xl border-l-4 border-engineering-cyan">
              <h4 className="text-xl font-bold text-engineering-dark mb-3">Luis A. Labrada, P.E.</h4>
              <p className="text-engineering-steel">
                Our Principal brings over 18 years of combined experience in civil, structural, geotechnical, material testing and inspection, and project management. UCLA graduate (1997) with extensive experience in both private consulting and governmental agencies.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-engineering-cyan/10 rounded-xl mb-4 group-hover:bg-engineering-cyan/20 transition-colors">
                <stat.icon className="w-8 h-8 text-engineering-cyan" />
              </div>
              <div className="text-3xl font-bold text-engineering-dark mb-2">{stat.number}</div>
              <div className="text-engineering-steel font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;