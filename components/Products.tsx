
import React from 'react';
import { PRODUCTS } from '../constants';

const Products: React.FC = () => {
  return (
    <section id="products" className="py-20 bg-[#F8F9FA] border-y border-gray-200">
      <div className="container mx-auto px-5">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#513C2E] mb-4">Sản phẩm tiêu biểu</h2>
            <p className="text-[#6B7280] leading-relaxed">
              Ván ép đạt chuẩn xuất khẩu, nguyên liệu chất lượng cao. Độ dày tiêu chuẩn linh hoạt 3mm – 20mm, 
              đáp ứng nhu cầu sản xuất công nghiệp. Có thể sản xuất theo yêu cầu riêng.
            </p>
          </div>
          <a href="#" className="flex items-center gap-2 text-sm font-bold text-[#6B7280] hover:text-[#513C2E] transition-all group">
            Xem toàn bộ sản phẩm 
            <i className="fa-solid fa-arrow-right-long group-hover:translate-x-2 transition-transform"></i>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="m-4 aspect-[3/2] rounded-xl overflow-hidden">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <div className="p-6 pt-0 flex flex-col h-full min-h-[220px]">
                <h3 className="text-xl font-extrabold text-[#513C2E] mb-3">{product.name}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed mb-6 flex-grow">{product.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {product.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-bold text-[#4B5563] bg-[#F7F2EE] px-3 py-1.5 rounded-md transition-colors group-hover:bg-[#513C2E] group-hover:text-white">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
