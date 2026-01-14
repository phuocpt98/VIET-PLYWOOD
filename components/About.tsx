
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-[95%] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-12 lg:gap-24 items-center">
        
        {/* New Bento Grid Stats Design */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-4 auto-rows-[140px] md:auto-rows-[180px]">
          
          {/* Large Hero Card */}
          <div className="col-span-2 row-span-2 bg-[#513C2E] rounded-3xl p-8 text-white relative overflow-hidden group">
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                  <i className="fa-solid fa-earth-asia text-xl text-[#B1967F]"></i>
                </div>
                <h3 className="text-sm font-bold uppercase tracking-widest opacity-60 mb-2">Quy mô sản xuất</h3>
                <p className="text-lg font-medium leading-tight">Cung ứng cho hàng chục dự án lớn trên toàn quốc & quốc tế.</p>
              </div>
              <div className="text-6xl md:text-7xl font-black tracking-tighter mt-4">2M<span className="text-[#B1967F]">+</span></div>
            </div>
            {/* Background Texture/Circle */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-[0.03] rounded-full -mr-20 -mt-20 transition-transform group-hover:scale-110 duration-700"></div>
          </div>

          {/* Experience Card */}
          <div className="col-span-1 row-span-1 bg-[#F7F2EE] rounded-3xl p-6 flex flex-col justify-center items-center text-center group hover:bg-[#513C2E] transition-all duration-500">
            <div className="text-3xl font-black text-[#513C2E] group-hover:text-white transition-colors">07<span className="text-[#B1967F]">Yr</span></div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-[#8C7E74] mt-2 group-hover:text-white/60">Kinh nghiệm</div>
          </div>

          {/* Material Card */}
          <div className="col-span-1 row-span-2 bg-[#B1967F] rounded-3xl p-6 flex flex-col justify-between text-white group relative overflow-hidden">
             <div className="relative z-10">
                <i className="fa-solid fa-leaf text-2xl mb-4"></i>
                <div className="text-xs font-bold uppercase tracking-widest opacity-80">Nguyên liệu</div>
             </div>
             <div className="relative z-10 text-4xl font-black">100%</div>
             <p className="relative z-10 text-[10px] font-bold leading-tight opacity-90 uppercase">Nguồn gỗ sạch & Bền vững</p>
             <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-black/5 rounded-full transform group-hover:scale-150 transition-transform duration-700"></div>
          </div>

          {/* Quality Badge Card */}
          <div className="col-span-1 row-span-1 border-2 border-gray-100 rounded-3xl p-6 flex items-center justify-center group hover:border-[#B1967F] transition-all">
            <div className="w-16 h-16 bg-[#F7F2EE] rounded-2xl flex items-center justify-center text-[#513C2E] text-2xl transition-transform group-hover:rotate-12">
               <i className="fa-solid fa-certificate"></i>
            </div>
          </div>

        </div>

        {/* Text Content */}
        <div className="flex flex-col">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-[2px] w-8 bg-[#B1967F]"></div>
            <span className="text-xs font-bold text-[#B1967F] tracking-[3px] uppercase">Về chúng tôi</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-[#513C2E] mb-8 leading-[0.95] tracking-tighter uppercase">
            Uy tín tạc lên <br /> từ từng <span className="text-[#B1967F]">lớp ván</span>
          </h2>

          <div className="space-y-6 text-[#666666] text-sm md:text-base font-medium leading-relaxed max-w-lg mb-12">
            <p>
              Tại <strong className="text-[#513C2E]">VietPlywood</strong>, chúng tôi không chỉ sản xuất ván ép, chúng tôi kiến tạo giải pháp nền tảng cho ngành xây dựng và nội thất.
            </p>
            <p>
              Với quy trình kiểm soát nghiêm ngặt từ khâu chọn phôi đến ép nóng, mỗi tấm ván xuất xưởng đều đạt chuẩn <strong className="text-[#513C2E]">AA/AB</strong>, đảm bảo tính ổn định tối đa cho các dây chuyền sản xuất công nghiệp quy mô lớn.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 mb-12">
            <div>
              <div className="text-xs font-black text-[#513C2E] uppercase tracking-widest mb-3 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#B1967F]"></div>
                Tầm nhìn
              </div>
              <p className="text-xs text-[#8C7E74] leading-relaxed">Top 10 nhà sản xuất ván ép xuất khẩu tại miền Bắc Việt Nam.</p>
            </div>
            <div>
              <div className="text-xs font-black text-[#513C2E] uppercase tracking-widest mb-3 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#B1967F]"></div>
                Sứ mệnh
              </div>
              <p className="text-xs text-[#8C7E74] leading-relaxed">Mang lại giá trị tối ưu thông qua nguồn cung ổn định và giá thành cạnh tranh.</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="px-10 py-5 bg-[#513C2E] text-white rounded-xl font-bold text-xs uppercase tracking-widest shadow-2xl hover:bg-[#B1967F] transition-all transform hover:-translate-y-1">
              Liên hệ hợp tác
            </a>
            <button className="px-10 py-5 bg-white border border-gray-200 text-[#513C2E] rounded-xl font-bold text-xs uppercase tracking-widest hover:border-[#513C2E] transition-all">
              Hồ sơ năng lực
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
