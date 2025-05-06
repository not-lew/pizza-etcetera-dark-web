
const About = () => {
  return (
    <section id="about" className="bg-pizza-charcoal py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Sobre a Pizza Etcetera</h2>
        <div className="max-w-3xl">
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
      </div>
    </section>
  );
};

export default About;
