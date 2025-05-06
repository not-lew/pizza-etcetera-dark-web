
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black py-10 text-gray-400">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-white mb-2">
              <span className="text-pizza-wine">Pizza</span> <span className="italic font-light">Etcetera</span>
            </h3>
            <p>Pizzas artesanais em Oliveira do Hospital</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="#" 
              className="bg-gray-800 p-3 rounded-full hover:bg-pizza-wine transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook size={20} className="text-white" />
            </a>
            <a 
              href="#" 
              className="bg-gray-800 p-3 rounded-full hover:bg-pizza-wine transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={20} className="text-white" />
            </a>
            <a 
              href="#" 
              className="bg-gray-800 p-3 rounded-full hover:bg-pizza-wine transition-colors duration-300"
              aria-label="Twitter"
            >
              <Twitter size={20} className="text-white" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} Pizza Etcetera. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">Design by Weltoon</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
