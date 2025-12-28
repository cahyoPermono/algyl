import React from 'react';
import menuItems from '../data/menu';
import Card from './ui/Card';

const Menu = () => {
  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-text mb-4">
            Menu <span className="text-primary">Pilihan Kami</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Jajanan gurih lan manis, kabeh digawe fresh khusus kanggo sampeyan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <Card key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
