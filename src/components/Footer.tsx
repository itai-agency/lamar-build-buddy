import { Facebook, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-engineering-dark text-engineering-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">L</span>
              </div>
              <span className="font-bold text-xl">LAMAR Engineering</span>
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
          "name": "LAMAR Engineering, Inc.",
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