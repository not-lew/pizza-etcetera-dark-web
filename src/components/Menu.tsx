
import { useState } from 'react';
import { cn } from '@/lib/utils';

type MenuItem = {
  name: string;
  ingredients: string;
  price: string;
  isVegan?: boolean;
  isSpicy?: boolean;
};

type MenuCategory = {
  name: string;
  items: MenuItem[];
};

const menuData: MenuCategory[] = [
  {
    name: 'Pizzas Clássicas',
    items: [
      {
        name: 'MARGARITA',
        ingredients: 'tomate San Marzano, mozzarella, azeite, manjericão, orégãos',
        price: '€ 8,00 / € 11,50',
      },
      {
        name: 'TROPICAL',
        ingredients: 'tomate San Marzano, mozzarella, fiambre, ananás, orégãos',
        price: '€ 10,00 / € 14,50',
      },
      {
        name: 'FUNGHI',
        ingredients: 'tomate San Marzano, mozzarella, fiambre, cogumelos frescos, orégãos',
        price: '€ 10,00 / € 14,50',
      },
      {
        name: 'PEPPERONI',
        ingredients: 'tomate San Marzano, mozzarella, pepperoni picante, orégãos',
        price: '€ 10,50 / € 14,50',
        isSpicy: true,
      },
      {
        name: 'TUNA',
        ingredients: 'tomate San Marzano, mozzarella, atum, cebola salteada, ovo cozido, azeitonas, orégãos',
        price: '€ 11,00 / € 15,00',
      },
      {
        name: 'VEGAN',
        ingredients: 'tomate San Marzano, tomate cherry, tomate seco, espinafres, alcachofras, azeite, cebola frita',
        price: '€ 11,50 / € 14,50',
        isVegan: true,
      },
      {
        name: 'CAPRICCIOSA',
        ingredients: 'tomate San Marzano, mozzarella, bacon, ovo, cogumelos frescos, cebola frita',
        price: '€ 11,50 / € 15,50',
      },
      {
        name: "D'AVÓ",
        ingredients: 'tomate San Marzano, mozzarella, fiambre, chourição, cogumelos frescos, pimento, cebola salteada, azeitonas, orégãos',
        price: '€ 11,50 / € 15,50',
      },
      {
        name: 'FLORENÇA',
        ingredients: 'tomate San Marzano, mozzarella, fiambre, bacon, ananás, cogumelos frescos, orégãos',
        price: '€ 12,50 / € 15,50',
      },
      {
        name: 'OLIVIA',
        ingredients: 'tomate San Marzano, mozzarella, cebola salteada, pimento, cogumelos frescos, ovo cozido, milho, azeitonas, orégãos',
        price: '€ 12,50 / € 15,50',
        isVegan: true,
      }
    ]
  },
  {
    name: 'Pizzas Especiais & Calzones',
    items: [
      {
        name: 'TERRA NOSTRA',
        ingredients: 'tomate San Marzano, mozzarella, bacon, chourição, presunto, orégãos',
        price: '€ 12,50 / € 15,50',
      },
      {
        name: 'CAMPESTRE',
        ingredients: 'tomate San Marzano, mozzarella, bacon, cebola salteada, cogumelos frescos, frango salteado, orégãos',
        price: '€ 12,50 / € 15,50',
      },
      {
        name: 'CAMPONESA',
        ingredients: 'tomate San Marzano, mozzarella, chourição, cebola roxa, pimento, azeite d\'alho, frango salteado, orégãos',
        price: '€ 12,50 / € 15,50',
      },
      {
        name: 'S. JORGE',
        ingredients: 'tomate San Marzano, mozzarella, fiambre, chourição, bacon, pepperoni picante, orégãos',
        price: '€ 12,50 / € 15,50',
        isSpicy: true,
      },
      {
        name: 'POPEYE',
        ingredients: 'tomate San Marzano, mozzarella, espinafres, cebola roxa, tomate cherry, azeite d\'alho, queijo Philadelphia, orégãos',
        price: '€ 12,50 / € 15,50',
        isVegan: true,
      },
      {
        name: 'GAMBARETTI',
        ingredients: 'tomate San Marzano, mozzarella, gambas, bacon, tomate cherry, creme balsâmico, queijo Philadelphia, rúcula, pistachio moído, orégãos',
        price: '€ 14,00 / € 18,00',
      },
      {
        name: 'CALZONE CLÁSSICA',
        ingredients: 'tomate San Marzano, mozzarella, bacon, cogumelos frescos, cebola salteada, ovo, orégãos',
        price: '€ 13,50',
      },
      {
        name: 'CALZONE SPINACI',
        ingredients: 'tomate San Marzano, mozzarella, cogumelos frescos, espinafres, azeite d\'alho, cebola roxa, orégãos',
        price: '€ 13,50',
        isVegan: true,
      }
    ]
  },
  {
    name: 'Pão d\'Alho & Extras',
    items: [
      {
        name: 'Pão d\'Alho',
        ingredients: 'azeite d\'alho, mozzarella',
        price: '28 cm S € 3,50 / 28 cm M € 6,00 / 35 cm L € 8,00',
      },
      {
        name: 'Ingredientes extras',
        ingredients: 'azeite d\'alho € 1,00; charcutaria M € 1,50 / L € 2,50; vegetais M € 1,00 / L € 2,00; gambas M € 2,50 / L € 3,50',
        price: '',
      }
    ]
  },
  {
    name: 'Sopas & Saladas',
    items: [
      {
        name: 'Sopa do Dia',
        ingredients: 'acresce € 0,10 cx take-away',
        price: '€ 1,50',
      },
      {
        name: 'Salada Gambaretti',
        ingredients: 'alface, rúcula, tomate cherry, mozzarella buffala, gambas, pistachio moído, creme balsâmico, orégãos',
        price: '€ 9,00',
      },
      {
        name: 'Salada de Frango',
        ingredients: 'massa, alface, tomate cherry, cenoura, cebola roxa, frango salteado, orégãos',
        price: '€ 7,50',
      },
      {
        name: 'Salada de Atum',
        ingredients: 'massa, alface, tomate cherry, cebola roxa, atum, ovo cozido, orégãos',
        price: '€ 7,50',
      },
      {
        name: 'Salada de Fruta',
        ingredients: 'massa, alface, tomate cherry, cenoura, ananás, pêssego, queijo Philadelphia, orégãos',
        price: '€ 7,00',
        isVegan: true,
      },
      {
        name: 'Salada Caprese',
        ingredients: 'rúcula, tomate cherry, mozzarella buffala, pimenta preta, manjericão, molho pesto',
        price: '€ 7,00',
        isVegan: true,
      },
      {
        name: 'Salada Chef',
        ingredients: 'massa, alface, tomate cherry, rúcula, cenoura, mozzarella buffala, pistachio moído, creme balsâmico, orégãos',
        price: '€ 7,00',
        isVegan: true,
      },
      {
        name: 'Molhos',
        ingredients: 'maionese | iogurte | vinagrete | pesto (acresce € 0,10 cx take-away)',
        price: '',
      }
    ]
  },
  {
    name: 'Bebidas & Sobremesas',
    items: [
      {
        name: 'Sangria Lambrusco 2 L',
        ingredients: 'frutos vermelhos',
        price: '€ 15,00',
      },
      {
        name: 'Lambrusco 2 L',
        ingredients: 'maracujá',
        price: '€ 16,00',
      },
      {
        name: 'Cheesecake',
        ingredients: 'acresce € 0,10 cx take-away',
        price: '€ 3,50',
      },
      {
        name: 'Tiramisu',
        ingredients: 'acresce € 0,10 cx take-away',
        price: '€ 3,50',
      },
      {
        name: 'Crumble de Maçã',
        ingredients: 'acresce € 0,10 cx take-away',
        price: '€ 3,00',
      },
      {
        name: 'Mousse de Oreo',
        ingredients: 'acresce € 0,10 cx take-away',
        price: '€ 2,50',
      }
    ]
  }
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('Pizzas Clássicas');

  return (
    <section id="menu" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Cardápio</h2>
        
        <div className="overflow-x-auto mb-8">
          <div className="flex space-x-2 md:space-x-4 min-w-max">
            {menuData.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={cn(
                  "px-4 py-2 text-sm md:text-base rounded-md transition-colors duration-300",
                  activeCategory === category.name
                    ? "bg-pizza-wine text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                )}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {menuData
            .find((category) => category.name === activeCategory)
            ?.items.map((item, index) => (
              <div 
                key={`${activeCategory}-${index}`}
                className="menu-item rounded-lg bg-gray-900"
              >
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
                    {item.name}
                    {item.isVegan && <span title="Vegetariano">🥬</span>}
                    {item.isSpicy && <span title="Picante">🔥</span>}
                  </h3>
                  {item.price && (
                    <span className="text-pizza-gold font-semibold whitespace-nowrap">
                      {item.price}
                    </span>
                  )}
                </div>
                <p className="text-gray-400 text-sm">{item.ingredients}</p>
              </div>
            ))}
        </div>
        
        <div className="mt-10 text-center">
          <a 
            href="tel:913850423"
            className="inline-block bg-pizza-wine hover:bg-red-800 text-white px-6 py-3 rounded-md transition-all duration-300 hover:scale-105"
          >
            Ligue e encomende já: 913 850 423
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
