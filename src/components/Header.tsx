
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-pizza-dark shadow-lg py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-white font-bold text-2xl md:text-3xl">
            <span className="text-pizza-wine">Pizza</span> <span className="italic font-light">Etcetera</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="nav-link">Início</a>
            <a href="#menu" className="nav-link">Cardápio</a>
            <a href="#contact" className="nav-link">Contato</a>
            <a 
              href="tel:913850423" 
              className="bg-pizza-wine hover:bg-red-800 text-white px-5 py-2 rounded-md transition-colors duration-300"
            >
              Ligar Agora
            </a>
          </nav>
          
          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-pizza-dark absolute top-full left-0 w-full py-4 px-4 animate-fade-in shadow-lg">
          <div className="flex flex-col space-y-4">
            <a 
              href="#home" 
              className="text-white hover:text-pizza-gold py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </a>
            <a 
              href="#menu" 
              className="text-white hover:text-pizza-gold py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Cardápio
            </a>
            <a 
              href="#contact" 
              className="text-white hover:text-pizza-gold py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </a>
            <a 
              href="tel:913850423" 
              className="bg-pizza-wine hover:bg-red-800 text-white py-2 px-4 rounded-md transition-colors duration-300 text-center"
            >
              Ligar Agora
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
