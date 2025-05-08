
import { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";

// Using more reliable image URLs with fallbacks
const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
    fallbackSrc: "https://ik.imagekit.io/lovvxgjvw/pizza-1.jpg",
    alt: "Pizza margherita com manjericão"
  },
  {
    src: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80", 
    fallbackSrc: "https://ik.imagekit.io/lovvxgjvw/pizza-2.jpg",
    alt: "Pizza rústica com ingredientes gourmet"
  },
  {
    src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
    fallbackSrc: "https://ik.imagekit.io/lovvxgjvw/pizza-3.jpg",
    alt: "Pizza gourmet com rúcula e tomates cherry"
  }
];

// Default fallback image
const DEFAULT_FALLBACK = "https://ik.imagekit.io/lovvxgjvw/pizza-default.jpg";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [imageErrors, setImageErrors] = useState<{[key: number]: boolean}>({});
  const isMobile = useIsMobile();
  
  // Automatically rotate carousel images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds
    
    return () => clearInterval(interval);
  }, []);

  // Handle image load error
  const handleImageError = (index: number) => {
    console.log("Image failed to load:", index);
    setImageErrors(prev => ({...prev, [index]: true}));
  };

  // Get correct source for an image (with fallback)
  const getImageSrc = (image: typeof heroImages[0], index: number) => {
    if (imageErrors[index]) {
      return image.fallbackSrc || DEFAULT_FALLBACK;
    }
    return image.src;
  };

  return (
    <section 
      id="home"
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center"
    >
      {/* Background Image Carousel with overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Carousel opts={{ loop: true }} className="w-full h-full">
          <CarouselContent className="h-full">
            {heroImages.map((image, index) => (
              <CarouselItem key={index} className="h-full w-full">
                <div className="relative h-full w-full">
                  <img 
                    src={getImageSrc(image, index)}
                    alt={image.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ filter: 'brightness(0.3)' }}
                    onError={() => handleImageError(index)}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {!isMobile && (
            <>
              <CarouselPrevious className="left-4 z-20 bg-black/50 hover:bg-pizza-wine text-white" />
              <CarouselNext className="right-4 z-20 bg-black/50 hover:bg-pizza-wine text-white" />
            </>
          )}
        </Carousel>
      </div>
      
      {/* Content overlay */}
      <div className="container mx-auto px-4 text-center z-10 relative">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 text-white animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
            Sabor que apaixona.<br />Pizzas que conquistam.
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 md:mb-10 animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
            Descubra nossas receitas artesanais com ingredientes frescos e muito amor.
          </p>
          <a 
            href="tel:913850423"
            className="bg-pizza-wine hover:bg-red-800 text-white text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-md transition-transform duration-300 hover:scale-105 inline-block animate-fade-in opacity-0"
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
