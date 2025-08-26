import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail } from 'lucide-react';

const Location = () => {
  const openDirections = () => {
    const address = '809 Bowsprit Road, Suite 105 Chula Vista, CA 91914';
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  return (
    <section className="py-20 bg-engineering-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-engineering-dark mb-4">
            Visit Our Office
          </h2>
          <p className="text-lg text-muted-foreground">
            Located in the heart of South Bay San Diego
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <Card className="h-full">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-engineering-dark mb-2">Address</h3>
                    <p className="text-muted-foreground">
                      809 Bowsprit Road, Suite 105<br />
                      Chula Vista, CA 91914
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-engineering-dark mb-2">Phone</h3>
                    <a 
                      href="tel:+16194734045" 
                      className="text-primary hover:underline"
                    >
                      (619) 473-4045
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-engineering-dark mb-2">Email</h3>
                    <a 
                      href="mailto:llabrada@lamareng.com" 
                      className="text-primary hover:underline"
                    >
                      llabrada@lamareng.com
                    </a>
                  </div>
                </div>

                <Button 
                  onClick={openDirections}
                  className="w-full mt-8"
                >
                  Get Directions
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="bg-gray-200 rounded-lg overflow-hidden h-96 lg:h-full min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.8!2d-117.0847!3d32.6281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d94f1b1b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2s809%20Bowsprit%20Rd%2C%20Chula%20Vista%2C%20CA%2091914!5e0!3m2!1sen!2sus!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="LAMAR Engineering Office Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;