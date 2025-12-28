import React from 'react';
import { Instagram, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#2D3436] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 border-b border-gray-700 pb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
               <img src="/logo.png" alt="Masagel" className="h-10 w-auto" />
               <span className="text-2xl font-heading font-bold">Masagel Bakery</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Nggawa rasa premium, gurih lan manis neng mejo sampeyan. Asli Jombang.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-heading font-bold mb-6">Hubungi Kami</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="shrink-0 text-primary" size={20} />
                <span>Jombang, Jawa Timur, Indonesia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="shrink-0 text-primary" size={20} />
                <a href="https://wa.me/6282139832969" className="hover:text-primary transition-colors">
                  0821-3983-2969
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xl font-heading font-bold mb-6">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram size={20} />
              </a>
              {/* Add more socials if needed */}
            </div>
          </div>
        </div>
        
        <div className="pt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Masagel Cold Kitchen. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
