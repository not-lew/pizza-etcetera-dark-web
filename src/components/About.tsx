
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="bg-pizza-charcoal py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Sobre a Pizza Etcetera</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <p className="text-lg text-gray-300 mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
              Localizada no coração de Oliveira do Hospital, a Pizza Etcetera nasceu da paixão por criar pizzas autênticas e deliciosas que elevam o conceito de pizza artesanal para um novo patamar.
            </p>
            <p className="text-lg text-gray-300 mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.5s' }}>
              Nossa filosofia é simples: ingredientes frescos e de qualidade superior, preparados com técnicas tradicionais e muito amor. Cada pizza é feita à mão, com massa fermentada lentamente para garantir sabor e textura incomparáveis.
            </p>
            <p className="text-lg text-gray-300 animate-fade-in opacity-0" style={{ animationDelay: '0.7s' }}>
              Orgulhamo-nos especialmente do nosso molho de tomate, preparado exclusivamente com tomates <span className="text-pizza-wine font-semibold">San Marzano</span> <span className="text-2xl">🍅</span>, conhecidos mundialmente por seu sabor doce, baixa acidez e pouquíssimas sementes – a base perfeita para nossas deliciosas criações.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in opacity-0" style={{ animationDelay: '0.5s' }}>
            <Card className="overflow-hidden bg-black border-pizza-wine">
              <CardContent className="p-0">
                <img 
                  src="https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Preparação de pizza artesanal"
                  className="w-full h-full object-cover"
                />
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden bg-black border-pizza-wine">
              <CardContent className="p-0">
                <img 
                  src="https://images.unsplash.com/photo-1605478371310-a9f1e96b4ff4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Tomates San Marzano frescos"
                  className="w-full h-full object-cover"
                />
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden bg-black border-pizza-wine sm:col-span-2">
              <CardContent className="p-0">
                <img 
                  src="https://www.smartfire.pt/wp-content/uploads/2020/04/cozinhar-em-forno-a-lenha.jpg" 
                  alt="Forno a lenha tradicional"
                  className="w-full h-64 object-cover"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
