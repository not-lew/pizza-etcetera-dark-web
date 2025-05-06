
import { Phone, Clock, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-pizza-dark">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Contato</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-8">
            <div className="flex items-start space-x-4 animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
              <div className="bg-pizza-wine p-3 rounded-full text-white">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Endereço</h3>
                <p className="text-gray-300">
                  R. Dr. António Ribeiro Garcia de Vasconcelos 1A.<br /> 
                  Oliveira do Hospital
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 animate-fade-in opacity-0" style={{ animationDelay: '0.5s' }}>
              <div className="bg-pizza-wine p-3 rounded-full text-white">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Telefone</h3>
                <a 
                  href="tel:913850423" 
                  className="text-gray-300 hover:text-pizza-gold transition-colors"
                >
                  913 850 423
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 animate-fade-in opacity-0" style={{ animationDelay: '0.7s' }}>
              <div className="bg-pizza-wine p-3 rounded-full text-white">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Horário de Funcionamento</h3>
                <p className="text-gray-300">
                  [espaço para preencher depois]
                </p>
              </div>
            </div>
            
            <div className="mt-8 animate-fade-in opacity-0" style={{ animationDelay: '0.9s' }}>
              <a 
                href="tel:913850423"
                className="inline-block bg-pizza-wine hover:bg-red-800 text-white px-6 py-3 rounded-md transition-all duration-300 hover:scale-105"
              >
                Ligar Agora
              </a>
            </div>
          </div>
          
          <div className="h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg animate-fade-in opacity-0" style={{ animationDelay: '1s' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3051.9183202606187!2d-7.8661922229888735!3d40.361253271447325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd233322559d330d%3A0x5f12d6b05e9c27e0!2sR.%20Dr.%20Ant%C3%B3nio%20Ribeiro%20Garcia%20de%20Vasconcelos%201A%2C%20Oliveira%20do%20Hospital!5e0!3m2!1sen!2spt!4v1714922490358!5m2!1sen!2spt" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
