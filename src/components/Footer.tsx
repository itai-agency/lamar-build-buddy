import { Facebook, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-engineering-dark text-engineering-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              {/* Logo Image */}
              <img 
                src="/src/assets/lamar-light.png" 
                alt="LAMAR ENGINEERING CIVIL + STRUCTURAL"
                className="h-10 w-auto"
                onError={(e) => {
                  // Fallback to text if image fails to load
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              {/* Fallback Text Logo */}
              <div className="hidden flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-1.5 h-6 bg-gradient-to-b from-engineering-blue to-engineering-cyan rounded-sm"></div>
                  <div className="w-1.5 h-6 bg-engineering-steel rounded-sm"></div>
                  <div className="w-1.5 h-6 bg-engineering-light rounded-sm"></div>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-xl">LAMAR</span>
                  <span className="text-sm font-medium text-gray-400">ENGINEERING</span>
                  <span className="text-xs font-medium text-gray-500">CIVIL + STRUCTURAL</span>
                </div>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Professional civil and structural engineering services in South Bay San Diego.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <a 
                  href="tel:+16194734045" 
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  (619) 473-4045
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <a 
                  href="mailto:llabrada@lamareng.com" 
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  llabrada@lamareng.com
                </a>
              </div>
              <p className="text-gray-300 text-sm">
                809 Bowsprit Road, Suite 105<br />
                Chula Vista, CA 91914
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <a 
              href="https://www.facebook.com/lamareng" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-gray-300 hover:text-primary transition-colors"
            >
              <Facebook className="w-5 h-5" />
              <span>Facebook</span>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              Copyright © {currentYear} LAMAR ENGINEERING. All rights reserved.
            </p>
            <p className="text-gray-300 text-sm mt-2 md:mt-0">
              Design by GCL GLOBAL INC
            </p>
          </div>
        </div>
      </div>

      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "LAMAR ENGINEERING CIVIL + STRUCTURAL",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "809 Bowsprit Road, Suite 105",
            "addressLocality": "Chula Vista",
            "addressRegion": "CA",
            "postalCode": "91914",
            "addressCountry": "US"
          },
          "telephone": "+1-619-473-4045",
          "email": "llabrada@lamareng.com",
          "url": "https://www.lamareng.com",
          "sameAs": [
            "https://www.facebook.com/lamareng"
          ],
          "description": "Professional civil and structural engineering services for residential and commercial projects in South Bay San Diego."
        })}
      </script>
    </footer>
  );
};

export default Footer;