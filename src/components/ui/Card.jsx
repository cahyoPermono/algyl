import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

const Card = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div className="relative overflow-hidden aspect-square">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <a 
              href={`https://wa.me/6282139832969?text=Halo Kak, kula badhe pesen ${item.title}`}
              target="_blank"
              className="bg-white text-text px-6 py-2 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg flex items-center gap-2"
            >
              <ShoppingBag size={18} /> Pesen Saiki
            </a>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-heading font-bold text-text group-hover:text-primary transition-colors">
            {item.title}
          </h3>
          <span className="bg-secondary/50 text-text px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
            Rp {item.price}
          </span>
        </div>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

export default Card;
