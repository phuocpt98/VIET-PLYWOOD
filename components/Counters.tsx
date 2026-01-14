
import React from 'react';
import { COUNTERS } from '../constants';

const Counters: React.FC = () => {
  return (
    <section className="relative py-24 bg-[#3d2b1f] overflow-hidden">
      {/* Background Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542385151-efd9000785a0?auto=format&fit=crop&q=80&w=1920')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 z-0"></div>

      <div className="container mx-auto px-5 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {COUNTERS.map((item) => (
            <div key={item.id} className="flex flex-col border-l-[3px] border-[#C4A484]/40 pl-10 group">
              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 overflow-hidden opacity-80 group-hover:opacity-100 transition-opacity">
                  <img src={item.iconUrl} alt={item.label} className="w-full h-full object-contain filter invert" />
                </div>
                <div>
                  <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-2 leading-none">{item.number}</h3>
                  <p className="text-[10px] font-bold text-white/70 tracking-widest uppercase">{item.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counters;
