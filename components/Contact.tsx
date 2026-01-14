
import React, { useState } from 'react';
import { API_URL } from '../constants';

interface ContactProps {
  onShowToast: (message: string) => void;
}

const Contact: React.FC<ContactProps> = ({ onShowToast }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    ctyName: '',
    email: '',
    phone: '',
    content: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Mocking the behavior from the original script (mode: 'no-cors')
      await fetch(API_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify({
          ...formData,
          title: "Yêu cầu từ web React",
          status: "Đã gửi qua API React"
        })
      });

      onShowToast('Gửi yêu cầu thành công! Chúng tôi sẽ liên hệ lại sớm.');
      setFormData({ name: '', ctyName: '', email: '', phone: '', content: '' });
    } catch (error) {
      alert('Có lỗi xảy ra, vui lòng liên hệ hotline.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#F7F2EE]">
      <div className="container mx-auto px-5">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          
          {/* Left Info Panel */}
          <div className="lg:w-[45%] bg-gradient-to-br from-[#F7F2EE] to-[#E8DACD] p-10 md:p-16 flex flex-col justify-center">
            <span className="text-[10px] font-bold text-[#8C7E74] tracking-[1.5px] uppercase mb-4 block">Liên hệ nhận báo giá ngay</span>
            <h2 className="text-3xl font-extrabold text-[#513C2E] mb-6 leading-snug">Sẵn sàng bổ sung nguồn hàng cho kho của bạn?</h2>
            <p className="text-[#6B7280] text-sm md:text-base leading-relaxed mb-10">
              Nhận báo giá cạnh tranh ngay hôm nay. Đội ngũ của chúng tôi phản hồi mọi yêu cầu đơn hàng trong vòng 24 giờ.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4 group">
                <div className="w-12 h-12 shrink-0 bg-white rounded-full flex items-center justify-center text-[#513C2E] shadow-sm group-hover:scale-110 transition-transform">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <strong className="block text-[#513C2E] text-sm">Sale contact</strong>
                  <span className="text-sm text-[#6B7280] block">(+84) 916 884 008</span>
                  <span className="text-sm text-[#6B7280] block">(+84) 762 012 459</span>
                </div>
              </div>
              <div className="flex gap-4 group">
                <div className="w-12 h-12 shrink-0 bg-white rounded-full flex items-center justify-center text-[#513C2E] shadow-sm group-hover:scale-110 transition-transform">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <strong className="block text-[#513C2E] text-sm">Email</strong>
                  <span className="text-sm text-[#6B7280]">tmdvvietnam@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Panel */}
          <div className="flex-1 p-10 md:p-16">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#513C2E]">Họ & Tên</label>
                  <input 
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-4 py-3 bg-[#FDFDFD] border border-[#EAE6E2] rounded-lg text-sm focus:ring-2 focus:ring-[#B1967F] outline-none transition-all" 
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#513C2E]">Tên công ty</label>
                  <input 
                    required
                    name="ctyName"
                    value={formData.ctyName}
                    onChange={handleChange}
                    type="text" 
                    placeholder="Construction Co." 
                    className="w-full px-4 py-3 bg-[#FDFDFD] border border-[#EAE6E2] rounded-lg text-sm focus:ring-2 focus:ring-[#B1967F] outline-none transition-all" 
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#513C2E]">Email</label>
                <input 
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email" 
                  placeholder="name@company.com" 
                  className="w-full px-4 py-3 bg-[#FDFDFD] border border-[#EAE6E2] rounded-lg text-sm focus:ring-2 focus:ring-[#B1967F] outline-none transition-all" 
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#513C2E]">SĐT</label>
                <input 
                  required
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="tel" 
                  placeholder="+1 (555) 000-0000" 
                  className="w-full px-4 py-3 bg-[#FDFDFD] border border-[#EAE6E2] rounded-lg text-sm focus:ring-2 focus:ring-[#B1967F] outline-none transition-all" 
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#513C2E]">Yêu cầu báo giá</label>
                <textarea 
                  required
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  placeholder="Mô tả nhu cầu của bạn" 
                  rows={4}
                  className="w-full px-4 py-3 bg-[#FDFDFD] border border-[#EAE6E2] rounded-lg text-sm focus:ring-2 focus:ring-[#B1967F] outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 mt-4 bg-gradient-to-r from-[#BEA48E] to-[#746456] text-white font-bold rounded-lg shadow-xl hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:-translate-y-1"
              >
                {isSubmitting ? 'Đang gửi...' : 'Yêu cầu báo giá'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
