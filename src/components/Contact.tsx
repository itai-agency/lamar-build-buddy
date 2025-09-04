import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, Facebook } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-engineering-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-engineering-dark mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're happy to answer any questions you have or provide you with an estimate. 
            Just send us a message in the form below with any questions you may have.
          </p>
        </div>

        {/* Formulario y Contact Information juntos en una tarjeta horizontal */}
        <Card className="shadow-lg rounded-md">
          <CardContent className="p-8">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Formulario de Contacto */}
              <div className="lg:w-1/2 space-y-6">
                <h3 className="text-2xl font-semibold text-engineering-dark mb-6">Get In Touch</h3>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>

              {/* Información de Contacto */}
              <div className="lg:w-1/2 space-y-6 flex flex-col items-center justify-center">
                <h3 className="text-2xl font-semibold text-engineering-dark mb-6">Contact Information</h3>
                <div className="space-y-4 text-center">
                  <div className="flex items-center space-x-4 justify-start">
                    <Phone className="text-primary w-6 h-6" />
                    <a 
                      href="tel:+16194734045" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      (619) 473-4045
                    </a>
                  </div>
                  <div className="flex items-center space-x-4 justify-start">
                    <Mail className="text-primary w-6 h-6" />
                    <a 
                      href="mailto:llabrada@lamareng.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      llabrada@lamareng.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-4 justify-start">
                    <Facebook className="text-primary w-6 h-6" />
                    <a 
                      href="https://www.facebook.com/lamareng" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Follow us on Facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
