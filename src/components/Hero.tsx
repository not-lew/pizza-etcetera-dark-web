
import { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
    alt: "Pizza margherita com manjericão"
  },
  {
    src: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
    alt: "Pizza rústica com ingredientes gourmet"
  },
  {
    src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
    alt: "Pizza gourmet com rúcula e tomates cherry"
  }
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  // Automatically rotate carousel images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Background Image Carousel with overlay */}
      <div className="absolute inset-0 z-0">
        <Carousel opts={{ loop: true }} className="w-full h-full">
          <CarouselContent className="h-full">
            {heroImages.map((image, index) => (
              <CarouselItem key={index} className="h-full">
                <AspectRatio ratio={16/9} className="h-full">
                  <div className="relative h-full">
                    <div 
                      className="absolute inset-0 bg-cover bg-center z-0"
                      style={{ 
                        backgroundImage: `url(${image.src})`,
                        filter: 'brightness(0.3)'
                      }}
                    ></div>
                  </div>
                </AspectRatio>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 z-20 bg-black/50 hover:bg-pizza-wine text-white" />
          <CarouselNext className="right-4 z-20 bg-black/50 hover:bg-pizza-wine text-white" />
        </Carousel>
      </div>
      
      {/* Content overlay */}
      <div className="container mx-auto px-4 text-center z-10 relative">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
            Sabor que apaixona.<br />Pizzas que conquistam.
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
            Descubra nossas receitas artesanais com ingredientes frescos e muito amor.
          </p>
          <a 
            href="tel:913850423"
            className="bg-pizza-wine hover:bg-red-800 text-white text-lg px-8 py-4 rounded-md transition-transform duration-300 hover:scale-105 inline-block animate-fade-in opacity-0"
            style={{ animationDelay: '0.9s' }}
          >
            Ligue e encomende já: 913 850 423
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
