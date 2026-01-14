
import React from 'react';

const Hero: React.FC = () => {
  return (
    <header className="relative w-full h-[600px] md:h-[700px] overflow-hidden flex items-center justify-center text-center mt-16">
      {/* Background with Overlays */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-[-1]" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517423568366-8b83523034fd?auto=format&fit=crop&q=80&w=1920')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-black/40"></div>
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]"></div>
      </div>

      <div className="container mx-auto px-5 relative z-10 text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6 drop-shadow-lg">
            Ván ép Tiêu chuẩn <br /> Giải pháp cho Sản xuất <br /> Quy mô lớn
          </h1>
          <p className="text-lg md:text-xl font-light mb-10 text-white/90 max-w-2xl mx-auto drop-shadow-md">
            Chất lượng ổn định · Sản xuất chủ động · Tiêu chuẩn thị trường<br className="hidden md:block" /> Giao hàng đúng tiến độ · Tiết kiệm chi phí
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-10 py-4 bg-white/20 border border-white/40 rounded-md font-bold text-white backdrop-blur-md hover:bg-white/30 transition-all transform hover:-translate-y-1"
            >
              Liên hệ chúng tôi
            </a>
            <button 
              className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-[#BEA48E] to-[#9C826D] rounded-md font-bold text-white shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
            >
              Tải Catalog
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
