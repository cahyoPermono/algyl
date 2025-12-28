import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#FDFBF7] overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Image Grid */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="grid grid-cols-2 gap-4">
            <img src="/images/menu3.jpg" alt="Baking Process" className="rounded-2xl shadow-lg mt-8" />
            <img src="/images/menu5.jpg" alt="Fresh Ingredients" className="rounded-2xl shadow-lg" />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/20 rounded-full blur-xl -z-10"></div>
        </motion.div>

        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-medium tracking-wide uppercase text-sm">Cerita Kami</span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-text mb-6 mt-2">
            Saking Ati, <span className="text-accent italic">Kangge Roti</span>
          </h2>
          
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Resep istimewa ini mboten digawe sembarangan. Resep iki wis dikembangake wiwit aku isih sekolah neng <span className="font-semibold text-text">Vidatra Bontang</span>.
            </p>
            <p>
              Perjalanan rasa Masagel Bakery wis liwat proses panjang lan diuji dening ilat-ilat kritis. Alhamdulillah, kualitas rasa kami wis <span className="font-semibold text-text">di-approve</span> karo resto-resto bintang 5 neng lingkungan <span className="font-semibold text-text">PT Badak Bontang</span>, koyo to <span className="font-semibold text-text">MPB</span> lan <span className="font-semibold text-text">Rega</span>.
            </p>
            <p>
              Saiki, cita rasa legendaris lan otentik iku tak gowo mulih neng Jombang. Monggo dicobi, insya Allah <span className="italic">rasane mboten ngapusi</span>.
            </p>
          </div>

          <div className="mt-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-1 bg-primary rounded-full"></div>
              <p className="font-heading font-bold text-lg text-text">Owner Masagel Bakery</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
