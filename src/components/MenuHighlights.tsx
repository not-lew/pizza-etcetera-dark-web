
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
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-10">Destaques do Cardápio</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlightItems.map((item, index) => (
            <Card 
              key={index} 
              className="bg-gray-900 border-gray-800 overflow-hidden animate-fade-in opacity-0"
              style={{ animationDelay: `${0.2 * (index + 1)}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-0 right-0 bg-pizza-wine text-white px-3 py-1 rounded-bl-lg font-bold">
                  {item.price.split('/')[0]}
                </div>
                {item.isVegan && (
                  <div className="absolute bottom-0 left-0 bg-green-700 text-white px-3 py-1 rounded-tr-lg">
                    🥬 Vegetariana
                  </div>
                )}
              </div>
              
              <CardContent className="p-4">
                <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;
