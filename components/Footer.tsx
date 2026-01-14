
import React from 'react';

interface FooterProps {
  onNavigate: (view: 'home' | 'catalog') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-white border-t border-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-gray-100">
          
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 font-bungee cursor-pointer" onClick={() => onNavigate('home')}>
              <div className="w-10 h-10 bg-[#513C2E] rounded-md flex items-center justify-center text-white">VP</div>
              <span className="text-lg font-extrabold text-[#513C2E] tracking-tight">VIETPLYWOOD</span>
            </div>
            <p className="text-sm text-[#8C7E74] leading-relaxed max-w-xs">
              Nhà sản xuất ván ép hàng đầu, phục vụ nhu cầu công nghiệp và dân dụng.
              <br /><br />
              Xây dựng uy tín thông qua chất lượng ổn định và hợp tác dài hạn.
            </p>
          </div>

          <div className="flex flex-col">
            <h4 className="font-bold text-[#513C2E] mb-8 text-sm uppercase tracking-widest">Sản phẩm</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('catalog'); }} className="text-sm text-[#8C7E74] hover:text-[#513C2E] transition-colors font-bold text-[#B1967F]">
                  Xem Catalog PDF
                </a>
              </li>
              {['Ván ép phủ phim', 'Ván ép mặt Bintangor', 'Ván ép mặt Okoume', 'Ván ép mặt trắng', 'Ván ép mặt xoan Veneer'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-[#8C7E74] hover:text-[#513C2E] transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="font-bold text-[#513C2E] mb-8 text-sm uppercase tracking-widest">Liên hệ</h4>
            <ul className="space-y-5">
              <li className="flex gap-4 items-start">
                <i className="fa-solid fa-location-dot text-[#513C2E] mt-1 shrink-0"></i>
                <span className="text-sm text-[#8C7E74] leading-relaxed">Khu Liên Đồng, Xã Thanh Sơn, Tỉnh Phú Thọ, Việt Nam</span>
              </li>
              <li className="flex gap-4 items-start">
                <i className="fa-solid fa-phone text-[#513C2E] mt-1 shrink-0"></i>
                <span className="text-sm text-[#8C7E74] leading-relaxed">(+84) 916 884 008<br />(+84) 762 012 459</span>
              </li>
              <li className="flex gap-4 items-start">
                <i className="fa-solid fa-envelope text-[#513C2E] mt-1 shrink-0"></i>
                <span className="text-sm text-[#8C7E74] leading-relaxed">tmdvvietnam@gmail.com</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="font-bold text-[#513C2E] mb-8 text-sm uppercase tracking-widest">Công ty</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="text-sm text-[#8C7E74] hover:text-[#513C2E] transition-colors">Về chúng tôi</a>
              </li>
              {['Quy trình sản xuất', 'Chứng nhận chất lượng', 'Tuyển dụng', 'Chính sách bảo mật'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-[#8C7E74] hover:text-[#513C2E] transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] font-bold text-[#A3968C] uppercase tracking-widest">
            © 2024 VIETPLYWOOD EXPORT SOLUTIONS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[#A3968C] hover:text-[#513C2E] text-xl transition-all transform hover:scale-125">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="#" className="text-[#A3968C] hover:text-[#513C2E] text-xl transition-all transform hover:scale-125">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#" className="text-[#A3968C] hover:text-[#513C2E] text-xl transition-all transform hover:scale-125">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
