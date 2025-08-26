import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: 'Brandon W',
      location: 'La Mesa, CA',
      content: 'Very professional, friendly and easy to work with engineering (reasonably priced too). Project was completed in a timely manner and the work was delivered when promised. I will definitely use them again and would happily refer them to a friend.'
    },
    {
      name: 'Susan S',
      location: 'San Diego, CA',
      content: 'Lamar Engineering has been GREAT since day ONE. Luis has always been exceptional and has performed above and beyond the call of duty. I have no construction experience as far as building permits, designs, and cost. Luis has walked us through the process and MADE OUR PROJECT easier. It has been a pleasure working with him. I HIGHLY RECOMMEND LAMAR ENGINEERING !!!'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-engineering-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-engineering-dark mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Real feedback from satisfied clients
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Card className="overflow-hidden">
            <CardContent className="p-12">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl text-center text-muted-foreground mb-8 leading-relaxed">
                "{testimonials[currentSlide].content}"
              </blockquote>
              
              <div className="text-center">
                <h4 className="text-lg font-semibold text-engineering-dark">
                  {testimonials[currentSlide].name}
                </h4>
                <p className="text-muted-foreground">
                  {testimonials[currentSlide].location}
                </p>
              </div>
            </CardContent>
          </Card>

          {testimonials.length > 1 && (
            <div className="flex justify-center space-x-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          )}

          <div className="flex justify-center space-x-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;