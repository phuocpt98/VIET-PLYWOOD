
import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-5">
        <div className="mb-12">
          <span className="text-xs font-bold text-[#B1967F] tracking-[1.5px] uppercase mb-3 block">Lợi thế của chúng tôi</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#513C2E]">Lý do chọn chúng tôi</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature) => (
            <div key={feature.id} className="bg-gradient-to-b from-[#F7F2EE] to-white border border-[#EAE6E2] p-10 rounded-2xl flex flex-col justify-between min-h-[340px] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="mb-8">
                <p className="text-[#4B5563] leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </div>
              <div className="flex items-center gap-4 pt-6 border-t border-[#513C2E]/10">
                <div className="w-14 h-14 shrink-0 rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center p-2">
                  <img src={feature.iconUrl} alt={feature.title} className="w-full h-full object-contain" />
                </div>
                <div>
                  <h4 className="font-extrabold text-[#513C2E] text-lg">{feature.title}</h4>
                  <span className="text-xs text-[#8C7E74] font-medium uppercase tracking-tight">{feature.subtitle}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
