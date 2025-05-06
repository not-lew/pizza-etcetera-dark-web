
const Hero = () => {
  return (
    <section 
      id="home"
      className="relative h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url("/images/hero-pizza.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto px-4 text-center">
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
