
import { Card, CardContent } from "@/components/ui/card";

const highlightItems = [
  {
    name: "MARGARITA",
    description: "Nossa clássica pizza com tomate San Marzano, mozzarella, azeite, manjericão e orégãos",
    image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "€ 8,00 / € 11,50"
  },
  {
    name: "GAMBARETTI",
    description: "Especialidade da casa com gambas, bacon, tomate cherry e queijo Philadelphia",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "€ 14,00 / € 18,00"
  },
  {
    name: "VEGAN",
    description: "Opção vegetariana com tomates variados, espinafres e alcachofras",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "€ 11,50 / € 14,50",
    isVegan: true
  }
];

const MenuHighlights = () => {
  return (
    <section className="py-12 md:py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-2xl md:text-3xl lg:text-4xl mb-6 md:mb-10">Destaques do Cardápio</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {highlightItems.map((item, index) => (
            <Card 
              key={index} 
              className="bg-gray-900 border-gray-800 overflow-hidden animate-fade-in opacity-0"
              style={{ animationDelay: `${0.2 * (index + 1)}s` }}
            >
              <div className="relative h-36 sm:h-40 md:h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-0 right-0 bg-pizza-wine text-white px-2 py-1 md:px-3 md:py-1 rounded-bl-lg font-bold text-sm md:text-base">
                  {item.price.split('/')[0]}
                </div>
                {item.isVegan && (
                  <div className="absolute bottom-0 left-0 bg-green-700 text-white px-2 py-1 md:px-3 md:py-1 rounded-tr-lg text-sm md:text-base">
                    🥬 Vegetariana
                  </div>
                )}
              </div>
              
              <CardContent className="p-3 md:p-4">
                <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">{item.name}</h3>
                <p className="text-xs md:text-sm text-gray-400">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;
