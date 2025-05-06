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
  { src: "/images/hero-pizza.jpg", alt: "Pizza deliciosa com ingredientes frescos" },
  { src: "https://images.unsplash.com/photo-1513104890138-7c749659a591...", alt: "Pizza margherita com manjericão" },
  { src: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002...", alt: "Pizza rústica com ingredientes gourmet" },
  { src: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e...", alt: "Pizza gourmet com rúcula e tomates cherry" },
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // autoplay
  useEffect(() => {
    const iv = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(iv);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Carousel
          loop
          // 1) aqui passamos o estado
          value={String(currentImage)}
          onValueChange={(val) => setCurrentImage(Number(val))}
          className="w-full h-full"
        >
          <CarouselContent className="h-full">
            {heroImages.map((image, idx) => (
              <CarouselItem
                key={idx}
                // 2) e aqui definimos o value de cada slide
                value={String(idx)}
                className="h-full"
              >
                <AspectRatio ratio={16 / 9} className="h-full">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${image.src})`,
                      filter: 'brightness(0.3)',
                    }}
                    role="img"
                    aria-label={image.alt}
                  />
                </AspectRatio>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-4 z-20 bg-black/50 hover:bg-pizza-wine text-white" />
          <CarouselNext className="right-4 z-20 bg-black/50 hover:bg-pizza-wine text-white" />
        </Carousel>
      </div>

      {/* …seu overlay de conteúdo… */}
    </section>
  );
};

export default Hero;
