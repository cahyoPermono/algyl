import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FDFBF7]">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-[#E6DCCD] opacity-20 rounded-l-[10rem] -z-0 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8FA295] opacity-10 rounded-full blur-3xl -z-0" />

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#8FA295]/20 text-primary font-medium text-sm mb-6">
            Digawe Kanthi Tresno
          </span>
          <h1 className="text-5xl md:text-7xl font-bold font-heading text-text mb-6 leading-tight">
            Rasakno <span className="text-primary italic">Anget'e</span> Omah
          </h1>
          <p className="text-gray-600 text-lg mb-8 max-w-md leading-relaxed">
            Quiche sing gurih lan tarts manis sing digawe seko bahan-bahan pilihan neng Jombang. Autentik lan nggawe kangen.
          </p>
          <div className="flex gap-4">
            <a 
              href="#menu" 
              className="px-8 py-3 bg-primary text-white rounded-full font-medium shadow-lg hover:shadow-xl hover:bg-opacity-90 transition-all active:scale-95"
            >
              Delok Menu
            </a>
            <a 
              href="https://wa.me/6282139832969" 
              target="_blank"
              className="px-8 py-3 border border-text text-text rounded-full font-medium hover:bg-text hover:text-white transition-all"
            >
              Kontak Kami
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
            <img 
              src="/images/menu1.jpg" 
              alt="Signature Quiche" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute top-10 -right-10 w-full h-full border-2 border-primary/30 rounded-3xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
